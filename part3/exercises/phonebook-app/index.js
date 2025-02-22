const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static("dist"));

morgan.token("post-data", (req, res) => {
  return req.method === "POST" ? JSON.stringify(req.body) : "";
});

app.use(
  morgan(
    ":method :url :status :res[content-length] - :response-time ms :post-data"
  )
);

let persons = [
  {
    id: "1",
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: "2",
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: "3",
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: "4",
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

app.get("/", (request, response) => {
  response.send("<h1>Server is running!!!</h1>");
});

app.get("/api/persons", (request, response) => {
  response.json(persons);
});

app.get("/info", (request, response) => {
  const date = new Date();
  const phonebookEntries = persons.length;

  response.send(
    `<p>Phonebook has info for ${phonebookEntries} people</p>
     <p>${date}</p>`
  );
});

app.get("/api/persons/:id", (request, response) => {
  const id = request.params.id;
  const person = persons.find((person) => person.id === id);

  if (person) {
    response.json(person);
    console.log("Person found");
  } else {
    response.status(404).end();
    console.log("Person not found");
  }
});

app.delete("/api/persons/:id", (request, response) => {
  const id = request.params.id;
  persons = persons.filter((person) => person.id !== id);

  console.log(`Person with id ${id} deleted`);
  response.status(204).end();
});

const generateId = () => {
  const id = Math.floor(Math.random() * 1000000).toString();
  return id;
};

app.post("/api/persons", (request, response) => {
  const body = request.body;

  if (!body.name || !body.number) {
    console.log("Name or number missing");
    return response.status(400).json({
      error: "name or number missing",
    });
  }

  if (persons.find((person) => person.name === body.name)) {
    console.log("Name already exists");
    return response.status(400).json({
      error: "name must be unique",
    });
  }

  const person = {
    id: generateId(),
    name: body.name,
    number: body.number,
  };

  persons = persons.concat(person);

  response.json(person);
  console.log("Person added");
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

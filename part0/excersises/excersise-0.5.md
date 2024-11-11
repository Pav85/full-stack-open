```
sequenceDiagram
participant browser
participant server

    Note right of browser: User opens the SPA version at /spa
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: Basic HTML for SPA
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: CSS file (for styling)
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate server
    server-->>browser: JavaScript for SPA
    deactivate server

    Note right of browser: JavaScript runs and asks for the current notes

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: JSON file with all notes
    deactivate server

    Note right of browser: JavaScript displays the notes on the page

    Note right of browser: User writes a new note and clicks "Save"

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa with note data
    activate server
    server-->>browser: 201 Created (success, no reload)
    deactivate server

    Note right of browser: JavaScript instantly shows the new note on the page
```

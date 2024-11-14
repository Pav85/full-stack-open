```
sequenceDiagram
    participant browser
    participant server

    Note right of browser: User creates a new note and clicks "Save"
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa with note data
    activate server
    server-->>browser: 201 Created
    deactivate server

```

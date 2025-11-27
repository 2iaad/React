## New things learned

- ### what is .map() function

        .map() is a built-in JavaScript array method.
        It iterates over each element in an array and returns a new array where every item has been transformed by the function you provide.
        In React, we use .map() to turn arrays (data) into JSX or components, so the UI is generated from data instead of being hardcoded.
        -> whats so special about it?
            - You don’t repeat your UI manually.
            - UI stays synced with data, If your data changes the UI updates automatically.

- ### When to use the .map() function:

    best use case is when we convert raw data (usually from an api) to jsx elements that we can display on the webpage.

    | Use case                   | Example                   | Appropriate? |
    | -------------------------- | ------------------------- | ------------ |
    | Turn one array → new array | `[1,2,3] → [2,4,6]`       | ✔️ Yes       |
    | Extract property           | users(name,age) → name.   | ✔️ Yes       |
    | Render React components    | data → `<Card />`         | ✔️ Yes       |
    | Transform data shape       | objects → strings         | ✔️ Yes       |
    | Create promises            | URLs → fetch()            | ✔️ Yes       |
    | Modify items immutably     | update user in list       | ✔️ Yes       |
    -------------------------------------------------------------------------

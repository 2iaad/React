## New things learned

- ### what is .map() function
    **.map()** is used to convert data into React components.
        -> whats so special about it?
            - You don’t repeat your UI manually.
            - UI stays synced with data, If your data changes the UI updates automatically.

- ### When to use the .map() function:

    | Use case                   | Example                   | Appropriate? |
    | -------------------------- | ------------------------- | ------------ |
    | Turn one array → new array | `[1,2,3] → [2,4,6]`       | ✔️ Yes       |
    | Extract property           | users → names             | ✔️ Yes       |
    | Render React components    | data → `<Card />`         | ✔️ Yes       |
    | Transform data shape       | objects → strings         | ✔️ Yes       |
    | Create promises            | URLs → fetch()            | ✔️ Yes       |
    | Modify items immutably     | update user in list       | ✔️ Yes       |
    -------------------------------------------------------------------------

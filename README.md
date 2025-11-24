# Travel Journal

Simple React travel journal/diary app, showing multiple travel destinations with images and details, in a card-like layout.
![Travel Journal Screenshot](public/Screenshot%202025-11-24%20at%2013.25.46.png)

## New things learned

- ### Modules
    **Module** is a file that export its own code.
    Why use modules?
        - Organize code better (separate files for separate responsibilities).
        - Reuse code easily.
    There are two main ways to export:
        - Named export -> Must import using the same names.
            `export const pi = 3.14;` -> `import { pi, square } from './math.js';`
        - Default Export -> Importers can give it any name.
            `export default function greet() { console.log("Hello!"); }` ->
            ```
            import randomName from './greet.js';
            randomName(); // Hello!
            ```

- ### Data-driven
    **Data-driven** app is when the UI is generated from data instead of being hardcoded.

    - You store data in arrays, objects, or from an API.
    - You map over that data to render components dynamically.
    - When the data changes, the UI updates automatically -> makes code more maintainable

## Features
- Display multiple travel entries in a card-like layout
- Each entry includes:
  - Image of the destination
  - Location with marker icon
  - Link to Google Maps
  - Title, dates, and description
- Responsive layout using Flexbox
- Separation between entries with horizontal rules

## Tech Stack
- React
- Vite
- CSS for styling

This is my HTML as a clean DOM tree structure. I’ll simplify repetitive parts and indent properly to make it readable:

```
<body>
└── #root
    ├── #header
    │   ├── <img> (alt="globe photo", src="/src/assets/globe.png")
    │   └── <p>my travel journal.</p>
    └── #out-wrapper
        ├── .in-wrapper
        │   ├── <img class="image" src="https://scrimba.com/links/travel-journal-japan-image-url">
        │   └── .infos
        │       ├── <p>
        │       │   ├── <img class="marker" src="/src/assets/marker.png">
        │       │   ├── " JAPAN "
        │       │   └── <a class="maps-link" href="https://www.google.com/maps/place/Japan">View on Google Maps</a>
        │       ├── <h1>Mount Fuji</h1>
        │       ├── <br>
        │       ├── <strong class="date">12 Jan, 2021 - 24 Jan, 2021</strong>
        │       └── <p>Mount Fuji is the tallest mountain in Japan...</p>
        ├── <hr>
        ├── .in-wrapper
        │   ├── <img class="image" src="https://scrimba.com/links/travel-journal-australia-image-url">
        │   └── .infos
        │       ├── <p>
        │       │   ├── <img class="marker" src="/src/assets/marker.png">
        │       │   ├── " JAPAN "
        │       │   └── <a class="maps-link" href="https://www.google.com/maps/place/Australia">View on Google Maps</a>
        │       ├── <h1>Mount Fuji</h1>
        │       ├── <br>
        │       ├── <strong class="date">12 Jan, 2021 - 24 Jan, 2021</strong>
        │       └── <p>Mount Fuji is the tallest mountain in Japan...</p>
        ├── <hr>
        └── .in-wrapper
            ├── <img class="image" src="https://scrimba.com/links/travel-journal-norway-image-url">
            └── .infos
                ├── <p>
                │   ├── <img class="marker" src="/src/assets/marker.png">
                │   ├── " JAPAN "
                │   └── <a class="maps-link" href="https://www.google.com/maps/place/Norway">View on Google Maps</a>
                ├── <h1>Mount Fuji</h1>
                ├── <br>
                ├── <strong class="date">12 Jan, 2021 - 24 Jan, 2021</strong>
                └── <p>Mount Fuji is the tallest mountain in Japan...</p>
```
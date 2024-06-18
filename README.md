 ![svgviewer-output](https://github.com/ElloTechnology/backend_takehome/assets/3518127/561bc8d4-bffc-4360-b9ea-61e876bcec93)


# Ello Engineering Challenge

👋 Hello,

This repo contains the solution for technical challenge. To view detailed challenge, please visit company's repo [👉 here](https://github.com/ElloTechnology/fullstack-take-home-test)

## Solution
The app contains a teacher-facing UI that allows teachers to view, search and assign books to students' reading list.

```
To run the fullstack app concurrently (both frontend and backend):-
- install packages
  - run `npm i or npm install`
- Run `npm start` 
```

### Requirements
The app uses:-
- Use React as the frontend framework.
- react hooks React hooks.
- [material-ui](https://mui.com/material-ui/) as the component library.
- **Note** Frontend code is inside the `src/frontend` directory.


### Backend
Backend code has been modified to incorporating additional resolvers for functionalities not explicitly outlined in the requirements, such as the ability to search books, list books under a student's reading list or to remove books from said reading list.
View the updated code in the  `src/backend` folder.

To run the backend independently, execute

```bash
npm install
```

Then run the following command to start the server

```bash
npm start
```

This start a Graphql server at the url `http://localhost:4000/`, the server has a single query `books` that returns a list of books. 

```graphql
query Books {
  books {
    author
    coverPhotoURL
    readingLevel
    title
  }
}
```

You can use this query to get the list of books to display in your frontend. You may need to adjust the `coverPhotoURL` to be a valid URL. The photos are in the `src/frontend/assets` directory.

### Frontend

Frontend code / *Ello for teachers* allows teachers to view, search and assign books to reading list.
View the updated code in the  `src/backend` folder.
#### Prerequisites

Node version >= 20.x

#### Getting Started
To run frontend code independently:-
- clone the Repo
- #### install packages
  - run `npm i/ npm install`

#### Run the app
cd to `frontend` folder

- Run development server using `npm run dev` or `yarn dev`
- You can generate production build using `npm run build` or `yarn build`. Generated files will be stored in the `dist` folder

#### Frontend Folder Structure

| dir/file          | description                                          |
| :---------------- | :--------------------------------------------------- |
| `src `            | contains application files                           |
| `src/main.tsx `   | root file and where route paths are defined                                            |
| `src/routes `    | contains pages                     |
| `src/components ` | house all UI components needed for the application   |
| `src/hooks `      | contains custom hooks                            |
| `src/queries `      | contains apollo queries and mutations for API calls to the backend                           |
| `src/assets `    | contains images |
| `src/types `    | typescript types            |

####  Frontend Libraries / Packages
**N.B** check package.json files to all packages used by the app

### **Running fullstack app concurrently**
To run the fullstack app concurrently (both frontend and backend):-
- #### install packages
  - run `npm i or npm install`
- Run `npm start`



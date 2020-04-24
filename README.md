# Todo-list in React

Simple server-client application where a user can create tasks and perform CRUD operations over them

## Requisites

- Create a MySQL/MariaDB database for the app
- Create an .env file based on the .env.example file so the database settings and Express port number match your PC settings
  - The frontend runs on port 3000 by default, so pick any other port for the Express server

## Set-up

- The `todo-list` folder contains the frontend (React)
  - `cd todo-list` on root folder and execute `npm install`
  - Then execute `npm start` and the frontend will run on port 3000 of your PC
- The `server` folder contains the backend (Express)
  - `cd server` on root folder and execute `npm install`
  - Then execute `npm run k-migrations`
  - Finally, execute `npm run devstart` or `npm start` and the server will start listening on the port specified in the .env file

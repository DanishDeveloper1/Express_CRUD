# Express CRUD

A REST API for managing products, built with Node.js, Express and MongoDB. It supports creating, reading, updating and deleting products (CRUD), and I built it while learning backend development.

## Tech Stack

- Node.js
- Express 5
- MongoDB with Mongoose
- dotenv for environment variables
- nodemon for development

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed
- A MongoDB database (a free cluster on [MongoDB Atlas](https://www.mongodb.com/atlas) works well)

### Installation

1. Clone the repository:
```bash
   git clone https://github.com/DanishDeveloper1/Express_CRUD.git
   cd Express_CRUD
```
2. Install dependencies:
```bash
   npm install
```
3. Create a `.env` file in the project root, using `.env.example` as a guide:
```
   MONGODB_URI=your_mongodb_connection_string_here
```
4. Start the server:
```bash
   npm run dev     # development, restarts on file changes
   npm start       # production
```

The server runs on `http://localhost:3000`.

## API Endpoints

Base URL: `/api/products`

| Method | Endpoint            | Description             |
|--------|---------------------|-------------------------|
| GET    | `/api/products`     | Get all products        |
| GET    | `/api/products/:id` | Get a product by its ID |
| POST   | `/api/products`     | Create a new product    |
| PUT    | `/api/products/:id` | Update a product by ID  |
| DELETE | `/api/products/:id` | Delete a product by ID  |

### Product fields

| Field    | Type   | Required | Default |
|----------|--------|----------|---------|
| name     | String | Yes      | none    |
| quantity | Number | Yes      | 0       |
| price    | Number | Yes      | 0       |
| image    | String | No       | none    |

### Example: create a product

```http
POST /api/products
Content-Type: application/json

{
  "name": "Wireless Keyboard",
  "quantity": 10,
  "price": 1500,
  "image": "https://example.com/keyboard.jpg"
}
```

You can test the endpoints with [Postman](https://www.postman.com/) or Thunder Client in VS Code.

## Project Structure

```
controller/   request handlers
models/       Mongoose schemas
routes/       API routes
server.js     app entry point and database connection
```

## What I Learned

- Building REST APIs with Express
- Modeling data with Mongoose
- Keeping secrets out of the code with environment variables

## Author

Md Danish - [GitHub](https://github.com/DanishDeveloper1) | [LinkedIn](https://www.linkedin.com/in/danishdeveloper) | [LeetCode](https://leetcode.com/u/DanishDeveloper1/)

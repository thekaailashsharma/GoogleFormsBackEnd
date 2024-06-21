# Google Forms Backend

This is a backend server built with Express and TypeScript to handle form submissions. The server provides endpoints for pinging, submitting forms, reading submitted forms, deleting forms, editing forms, and searching forms by email ID.

## How AI Tools Were Useful with Fundamental Engineering Knowledge

In developing this project, I found AI tools to be incredibly useful when combined with fundamental engineering knowledge. As a developer, I leveraged AI-powered tools for tasks such as designing UI elements, optimizing database schemas, and automating testing processes. Here’s how these tools contributed to the project:

### Designing UI Elements

Using AI-powered design tools allowed me to quickly prototype and iterate on user interface designs. Tools like Figma and Adobe XD enabled me to create visually appealing layouts and components without deep expertise in graphic design. This accelerated the development process and ensured a user-friendly interface for the backend server.

### Optimizing Database Schemas

AI tools for data modeling and optimization provided insights into structuring the database schemas efficiently. By analyzing usage patterns and data relationships, I could design schemas that improve query performance and scalability. This knowledge combined with fundamental database principles helped in building a robust backend system.


### Perspective

From my perspective, AI tools complemented my fundamental engineering knowledge by streamlining complex tasks and enhancing productivity. They provided valuable insights, automation capabilities, and creative solutions that augmented my development workflow. Moving forward, I plan to continue integrating AI technologies into my projects to leverage their benefits in software development.

## Conclusion

This project not only strengthened my technical skills in building backend servers with Express and TypeScript but also underscored the importance of integrating AI tools effectively. By combining fundamental engineering principles with AI-driven solutions, I was able to create a robust and efficient system for handling form submissions.

## Table of Contents
- [What I Learned](#what-i-learned)
- [Installation](#installation)
- [Running the Server](#running-the-server)
- [Endpoints](#endpoints)
  - [Ping Endpoint](#ping-endpoint)
  - [Submit Endpoint](#submit-endpoint)
  - [Read Endpoint](#read-endpoint)
  - [Delete Endpoint](#delete-endpoint)
  - [Edit Endpoint](#edit-endpoint)
  - [Search Endpoint](#search-endpoint)
- [Additional Features](#additional-features)
- [License](#license)

## What I Learned

During the development of this project, I gained experience and knowledge in the following areas:
- Setting up an Express server with TypeScript.
- Implementing RESTful APIs and handling HTTP requests and responses.
- Using TypeScript to improve type safety and maintainability in Node.js applications.
- CRUD operations (Create, Read, Update, Delete) with MongoDB or any other database.
- Error handling and validation in backend applications.
- Deploying a Node.js server to a production environment.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/your-repo-name.git
    cd your-repo-name
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Ensure you have TypeScript installed globally:
    ```bash
    npm install -g typescript
    ```

4. Compile the TypeScript code:
    ```bash
    tsc
    ```

## Running the Server

1. Start the server:
    ```bash
    npm start
    ```

2. The server will be running at `http://localhost:3000`.

## Endpoints

### Ping Endpoint
- **URL:** `/ping`
- **Method:** `GET`
- **Description:** Checks if the server is running.
- **Response:**
    ```json
    {
        "message": "pong"
    }
    ```

### Submit Endpoint
- **URL:** `/submit`
- **Method:** `POST`
- **Description:** Submits a new form.
- **Request Body:**
    ```json
    {
        "name": "John Doe",
        "email": "john.doe@example.com",
        "phone": "1234567890",
        "github_link": "https://github.com/johndoe",
        "stopwatch_time": "00:01:30"
    }
    ```
- **Response:**
    ```json
    {
        "message": "Form submitted successfully",
        "data": {
            "name": "John Doe",
            "email": "john.doe@example.com",
            "phone": "1234567890",
            "github_link": "https://github.com/johndoe",
            "stopwatch_time": "00:01:30"
        }
    }
    ```

### Read Endpoint
- **URL:** `/read`
- **Method:** `GET`
- **Description:** Reads a submitted form by index.
- **Query Parameters:**
    - `index` (required): The index of the form to read.
- **Response:**
    ```json
    {
        "name": "John Doe",
        "email": "john.doe@example.com",
        "phone": "1234567890",
        "github_link": "https://github.com/johndoe",
        "stopwatch_time": "00:01:30"
    }
    ```

### Delete Endpoint
- **URL:** `/delete`
- **Method:** `DELETE`
- **Description:** Deletes a form by email.
- **Query Parameters:**
    - `email` (required): The email of the form to delete.
- **Response:**
    ```json
    {
        "message": "Form deleted successfully"
    }
    ```

### Edit Endpoint
- **URL:** `/edit`
- **Method:** `PUT`
- **Description:** Edits a form by email.
- **Query Parameters:**
    - `email` (required): The email of the form to edit.
- **Request Body:**
    ```json
    {
        "name": "John Doe",
        "phone": "0987654321",
        "github_link": "https://github.com/johndoe-updated",
        "stopwatch_time": "00:02:00"
    }
    ```
- **Response:**
    ```json
    {
        "message": "Form updated successfully",
        "data": {
            "name": "John Doe",
            "email": "john.doe@example.com",
            "phone": "0987654321",
            "github_link": "https://github.com/johndoe-updated",
            "stopwatch_time": "00:02:00"
        }
    }
    ```

### Search Endpoint
- **URL:** `/search`
- **Method:** `GET`
- **Description:** Searches for a form by email.
- **Query Parameters:**
    - `email` (required): The email of the form to search for.
- **Response:**
    ```json
    {
        "name": "John Doe",
        "email": "john.doe@example.com",
        "phone": "1234567890",
        "github_link": "https://github.com/johndoe",
        "stopwatch_time": "00:01:30"
    }
    ```



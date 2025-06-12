# Movie Collection Application

A simple Node.js application for managing a collection of movies with image upload functionality.

## Features

-   Add new movies with details (title, year, rating, genre, description)
-   Upload movie poster images
-   View all movies in a table format
-   MongoDB database integration

## Technologies Used

-   **Backend**: Node.js, Express.js
-   **Database**: MongoDB with Mongoose
-   **Frontend**: EJS templates, Bootstrap 5
-   **Other Libraries**:
    -   Multer (for file uploads)
    -   Moment.js (for date formatting)

## Installation

1. Clone this repository
2. Install dependencies:
    ```
    npm install
    ```
3. Make sure MongoDB is installed and running on your system
4. Start the application:
    ```
    node index.js
    ```
5. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
.
├── config/
│   └── db.js                # Database connection configuration
├── models/
│   └── movieModel.js        # Movie schema and Multer configuration
├── uploads/                 # Directory for uploaded poster images
├── views/
│   ├── index.ejs            # Add movie form template
│   └── movies.ejs           # Movie listing template
├── .gitignore
├── index.js                 # Main application file
├── package.json
└── README.md
```

## API Endpoints

-   `GET /` - Displays the form to add a new movie
-   `POST /add-movie` - Adds a new movie to the database
-   `GET /movies` - Displays all movies in a table

## Database Schema

Movies are stored with the following fields:

-   title (String)
-   year (Number)
-   rating (Number, 0-10)
-   genre (String)
-   description (String)
-   poster (String, path to uploaded image)
-   created_at (String)
-   updated_at (String)

## Development

This project uses:

-   ES Modules (type: "module" in package.json)
-   Express.js for routing
-   Mongoose for MongoDB object modeling
-   Multer for handling file uploads
-   Moment.js for formatting dates

## Developer

**Aarsh Patel**  
[GitHub Profile](https://github.com/aarshpatel)

Feel free to reach out for questions or contributions!

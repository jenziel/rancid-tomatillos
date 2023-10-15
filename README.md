# Rancid Tomatillos Movie App

Access the site [here](https://rancid-tomatillos-it1ppodov-jenziel.vercel.app/)

![Home Page](https://user-images.githubusercontent.com/123911665/265287898-05562d1a-1492-426b-a207-06eeb2559a5e.png)
![Movie Cards](https://user-images.githubusercontent.com/123911665/265288007-ba9c6ec9-871b-4578-8371-da336f2fe226.png)
![Error Handling(500)](https://user-images.githubusercontent.com/123911665/265288091-30e39fcf-e40f-4eec-96a9-8ec7d2018845.png)


This application provides users with the latest movie information, sourced from the Rancid Tomatillos database. Viewers can browse a list of movies, view details about each movie, and receive error messages for unexpected behaviors or page visits.

## Features

- **Browse Movies**: Upon visiting the main page, users are presented with a gallery of movies available for viewing.
- **Movie Details**: By clicking on a movie poster, users can view detailed information about that specific movie. This includes its budget, revenue, runtime, genre, and more.
- **Error Handling**: In cases where there's an issue fetching movie data or if a user tries to navigate to a non-existent page, the app will display appropriate error messages.

## Testing

The app uses Cypress for end-to-end testing to ensure all functionalities are working as expected. There are tests available for:
- Displaying all movies
- Displaying individual movie details
- Handling errors appropriately

Custom Cypress commands have also been developed to streamline and simplify tests, improving maintainability and readability.

## Getting Started

1. Clone the repository to your local machine.
2. Install the required dependencies by running `npm install`.
3. Start the development server using `npm start`.
4. To run tests, use `npm run cypress`.

## Contributors

Jen Ziel, Avery Berryman

## Acknowledgments

Thanks to Turing school of Software and Design for providing the movie database API.

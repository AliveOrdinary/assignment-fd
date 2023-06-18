# Frontend-Assignment

This web application allows users to fetch and display user data from an API in a grid layout. Users can click a button in the navigation bar to fetch the user data and see it rendered in the grid.

## Tech Stack

- React
- Axios
- styled-components
- react-loading-skeleton

## Installation

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd react-user-data-grid`
3. Install the dependencies: `npm install`

## Usage

1. Start the development server: `npm start`
2. Open your browser and visit `http://localhost:3000` to view the application.
3. Click on the "Get Users" button in the navigation bar to fetch and display user data in the grid.

## Approach

- The application is built using React, which provides a modular and component-based approach to development.
- User data is fetched from the "https://reqres.in/api/users?page=<page>" API endpoint using Axios.
- The loading state is managed using the `useState` hook to display a loading animation while the data is being fetched.
- If there is an error during the API call, an error message is displayed.
- The `react-loading-skeleton` library is used to show a loading animation in the grid.
- Custom styling is applied using the `styled-components` library to create a visually appealing UI.
- Pagination functionality is implemented but not fully functional due to the limited data provided by the API.

## Custom Styling

- Custom styling is implemented using the `styled-components` library.
- The navbar is styled with a dark background color and a "Get Users" button.
- The user data is displayed in a grid layout with styled cards showing the user's avatar, name, and email.

## Clean Code and Best Practices

- The code follows best practices for React development, including the use of functional components and hooks.
- Variable and function names are meaningful and follow camelCase convention.
- Code is organized into separate components for better modularity and reusability.
- Comments are provided where necessary to explain the code logic and functionality.

## Challenges Faced

- The API used for fetching user data does not provide enough data for complete pagination functionality.
- Pagination buttons are included but disabled due to the limitations of the API.

## Time Taken

The estimated time taken to complete this assignment is approximately 4 hours.

## Future Improvements

Given more time, the following improvements can be made to the application:

- Implement complete pagination functionality using a different API or data source.
- Add additional features such as sorting or filtering options for the user data.
- Improve responsiveness and adapt the layout for different screen sizes.
- Implement error handling for failed API calls and display appropriate error messages.

**Name Length Counter**

**Overview:**
Name Length Counter is a basic web application designed to calculate the total number of letters in a user's first and last names. This project utilizes Node.js and several npm packages to create a functional and interactive web experience.

**Key Components:**
1. **Node.js and Express:** The core of the server-side functionality, handling requests and responses.
2. **EJS (Embedded JavaScript):** A templating engine that allows the server to render dynamic HTML content.
3. **Body-Parser:** Middleware for parsing incoming form data from POST requests.

**How It Works:**
- **Initialization:** The project begins by setting up a new Node.js application and installing the necessary dependencies: Express, EJS, and Body-Parser.
- **Server Setup:** An Express server is created, configured to use Body-Parser to handle URL-encoded data.
- **Routes:**
  - **GET `/`:** Renders the `index.ejs` template, displaying an input form for the user to enter their first and last names.
  - **POST `/submit`:** Processes the form data, calculates the total number of letters in the provided names, and re-renders the `index.ejs` template with the result.
- **EJS Template (`index.ejs`):** The HTML structure of the web page, dynamically updated with the number of letters in the user's name after form submission.

**User Interaction:**
- Users visit the root URL (`/`), see a form asking for their first and last names, and submit the form.
- Upon submission, the server calculates the length of the names and displays the total count on the same page.

**Conclusion:**
Name Length Counter is a straightforward application that demonstrates basic web development principles using Node.js, Express, and EJS. It highlights how to handle user input, process data, and dynamically update the web page based on user interactions.

# Tinder Clone

A clone of the popular dating application, Tinder, built using Node.js and Express.js.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Data Models](#data-models)
6. [API Endpoints](#api-endpoints)
7. [Data Flow](#data-flow)
8. [Authentication](#authentication)
9. [Error Handling](#error-handling)
10. [Contributing](#contributing)
11. [License](#license)
12. [Contact Information](#contact-information)

## Project Overview

This project replicates the core functionalities of Tinder, allowing users to create profiles, browse through other profiles, match with users they are interested in, and engage in real-time chat with matched users.

## Features

- User authentication and profile management
- Browsing and swiping through user profiles
- Matching functionality

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Mananwadhwa52/tinder.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd tinder
   ```

3. **Install the dependencies:**

   ```bash
   npm install
   ```

4. **Set up environment variables:**

   Create a `.env` file in the root directory and add the necessary environment variables (e.g., database connection strings, API keys).

5. **Start the server:**

   ```bash
   npm start
   ```

## Usage

1. **Access the application:**

   Open your browser and navigate to `http://localhost:3000`

2. **Register a new account or log in with existing credentials.**

3. **Create or update your profile with personal information and preferences.**

4. **Browse through other user profiles and swipe right to like or left to pass.**

5. **If two users like each other, a match is created, and they can start chatting in real-time.**

## Data Models

1. **User**:
   - `id`: Unique identifier
   - `firstName`: User's first name
   - `lastName`: User's last name
   - `email`: User's email address
   - `password`: Hashed password
   - `gender`: gender of user
   - `age`: age of user
   - `skill`: skills of user

2. **Match**:
   - `id`: Unique identifier
   - `byuser`: ID of the first user
   - `touser`: ID of the second user
   - `status`: Match status (e.g., pending, accepted)

## API Endpoints

- **User Registration**: `POST /signup`
- **User Login**: `POST /login`
- **User logout**: `POST /logout`
- **Get User Profile**: `GET /profile/veiw`
- **Update User Profile**: `PATCH /profile/edit`
- **Update User Password**: `PATCH /profile/editpassword`
- **forgot User Password**: `PATCH /profile/forgotpassword`
- **verify User Password**: `PATCH /profile/verifypassword`
- **send Match(interested,ignore)**: `POST /requests/send/:touser/:status`
- **response Match(rejected,accepted)**: `POST /requests/reveiws/:byuser/:status`
- **Get successfull Match**: `GET /requests/connections`
- **Get pending Match**: `GET /requests/pending`
- **Get user feed**: `GET /requests/feeds`

## Data Flow

1. **User Registration**:
   - A new user submits their details via the registration form.
   - The server validates the input and creates a new user record in the database with a hashed password.

2. **User Login**:
   - The user provides their email and password.
   - The server verifies the credentials and, upon success, issues a JSON Web Token (JWT) for authenticated sessions.

3. **Browsing Profiles**:
   - Authenticated users request a list of potential matches.
   - The server retrieves user profiles from the database based on the requesting user's preferences and exclusion criteria (e.g., already matched or rejected users).

4. **Matching**:
   - When a user expresses interest in another user (e.g., swipes right), the server checks if there's a reciprocal interest.
   - If both users are interested, a new match record is created, and both users are notified.

## Authentication

Authentication is managed using JWTs. Upon successful login, the server issues a token that the client includes in the Authorization header for subsequent API requests. The token is validated on the server to ensure secure access to protected routes.

## Error Handling

The application follows a structured error-handling approach:

- **Validation Errors**: If a request contains invalid data, the API returns a `400 Bad Request` response with error details.
- **Authentication Errors**: If an invalid or missing token is provided, the API returns a `401 Unauthorized` response.
- **Authorization Errors**: If a user tries to access resources they don’t own, the API returns a `403 Forbidden` response.
- **Server Errors**: Unhandled exceptions result in a `500 Internal Server Error` response, logged for debugging.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m "Add new feature"`).
4. Push to your branch (`git push origin feature-name`).
5. Open a pull request for review.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact Information

For questions or collaboration, feel free to reach out:

- **GitHub**: [Mananwadhwa52](https://github.com/Mananwadhwa52)
- **Email**: [Mananwadhwa52@gmail.com] 

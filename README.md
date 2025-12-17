# Auth App

A simple authentication app built with Node.js, Express.js, and MongoDB.

## Table of Contents

* [Features](#features)
* [Installation](#installation)
* [Usage](#usage)
* [API Endpoints](#api-endpoints)
* [Environment Variables](#environment-variables)
* [License](#license)

## Features

* User registration with email and password
* User login with email and password
* Password reset with email
* Protected routes with JWT authentication
* MongoDB database integration

## Installation

1. Clone the repository: `git clone https://github.com/Bhuviofficial/AUTH-APP-BACKEND
2. Install dependencies: `npm install`
3. Create a MongoDB database and update the `MONGO_URI` environment variable in the `.env` file
4. Start the server: `npm start`

## Usage

1. Register a user: `POST /api/auth/register`
2. Login a user: `POST /api/auth/login`
3. Reset a user's password: `POST /api/auth/forgot-password` and then `POST /api/auth/reset-password/:token`

## API Endpoints

### Register

* `POST /api/auth/register`
	+ Request Body: `email` and `password`
	+ Response: `message` with value "Registered successfully"

### Login

* `POST /api/auth/login`
	+ Request Body: `email` and `password`
	+ Response: `message` with value "Login successful"

### Forgot Password

* `POST /api/auth/forgot-password`
	+ Request Body: `email`
	+ Response: `message` with value "Password reset link sent to email"

### Reset Password

* `POST /api/auth/reset-password/:token`
	+ Request Body: `password`
	+ Response: `message` with value "Password reset successfully"

## Environment Variables

* `MONGO_URI`: MongoDB database URI
* `EMAIL`: Email address for sending password reset emails
* `EMAIL_PASS`: Email password for sending password reset emails
* `CLIENT_URL`: Client-side URL for password reset

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## API Documentation

https://documenter.getpostman.com/view/50347547/2sB3dVMmr9


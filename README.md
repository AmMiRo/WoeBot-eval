# WoeBot Code Eval

## Author: Amos Rose

## Overview

This repo is my submission to the technical evaluation for WoeBot Health.

In this repo are 2 apps, a backend and frontend for the registration form.

## Setup

A series of `make` commands have been provided to help with setup and testing.

- `make install` - downloads dependencies and node modules for the app
- `make migrate` - (only in backend) creates a sqlite3 database and creates the necessary tables
- `make up` - runs the app
- `make test` - runs the tests for the app

### Getting started

To run the apps, complete the following:

1. Open the backend directory in a terminal.
2. Run `make install; make migrate; make up`.
3. The backend app is now running an listening on port: 5000.
4. Open the frontend directory in a second terminal.
5. Run `make install; make up`.
6. The frontend app is now running on port: 3000 and can be viewed in your browser at `http://localhost:3000/`.

## How to Use

When both apps are running, complete the registration form in the browser.

The form fields include

- Username - must be at least 4 characters in length
- Password - must be at least 8 characters in length using upper case, lower case, a number, and a special character
- Confirm Password - both passwords must match
- Email - must be an email (ex: email@test.com)
- Phone Number - must be a 10 digit phone number (format doesn't matter as it will be stripped down to a 10-number string)

Once the registration form has been successfully submitted, a success message will be shown

I ran out of time to add a persistent login. If the page is refreshed, the form will be reset.

## Stopping the apps

Each app can be stopped by running `ctrl` + `c` in the terminal running that app.

## Testing

Tests for each app will run with `make test`.

### Frontend

Test files for the frontend are located in the same directory as the component or utils they test.

Tests for the frontend are run in watch mode. If tests do not run (due to no file changes since last test run), press `a` in terminal running the tests.

### Backend

Test files for the backend are located in the `__tests__` directory.

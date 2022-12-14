# Emotion Store Project

## How to start app
1. Install Docker Desktop
2. `docker-compose build`
3. `source z_init` (must use git bash)
4. `start`
5. visit `http://localhost:3000`
6. enjoy

## How to stop app
- `stop` (must run `source z_init` at least once in shell before use)


## --------------------------------------
## Docker + Django + React App Tutorial

Code repo for a series of tutorials on setting up an app with Docker Compose, Django, and Create React App. `master` has the final version of the code.

- Part One: [Creating an app with Docker Compose, Django, and Create React App](https://dev.to/englishcraig/creating-an-app-with-docker-compose-django-and-create-react-app-31lf)
- Part Two: [Docker, Django, and React: Building Assets and Deploying to Heroku](https://dev.to/englishcraig/docker-django-react-building-assets-and-deploying-to-heroku-24jh)

## Dependencies

- All tutorials require [Docker](https://docs.docker.com/docker-for-mac/install/)
- Deploying to Heroku requires the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)

## Setting up the app

Checkout the branch for a given tutorial, and run `docker-compose build`

## Running the app on local

Run `docker-compose up` to see messages in the terminal. Run `docker-compose start` to run the app in the background.

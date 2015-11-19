# Firestarter [![Circle CI](https://circleci.com/gh/CooCooCaCha/firestarter.svg?style=svg)](https://circleci.com/gh/CooCooCaCha/firestarer) [ ![Codeship Status for CooCooCaCha/firestarter](https://codeship.com/projects/2b233dd0-7101-0133-9ea4-2226d3632c6f/status?branch=master)](https://codeship.com/projects/116726)

An app for ordering logs.

## Installation
1. Download and install [Homebrew](http://brew.sh/)
2. Using Homebrew, install docker, docker-compose, and docker-machine.
3. Install [Dinghy](https://github.com/codekitchen/dinghy)
4. Git clone this repository and CD into it.
5. Create your local dev machine by running `dinghy create --provider virtualbox`
6. Connect docker to your dev machine by running `eval $(docker-machine env dinghy)`
7. Run `docker-compose --x-networking up`

The application should now be running at `http://firestarter.docker:8080/`!

## References
http://www.redotheweb.com/2013/02/20/sequelize-the-javascript-orm-in-practice.html

# Firestarter

An app for ordering logs.

## Installation
1. Install [NodeJS v5.0.0+](https://nodejs.org)
2. Download and install [Docker Toolbox](https://www.docker.com/docker-toolbox)
3. Open Kitematic to make sure the VM is running.
4. Open the Docker Quickstart Terminal that was installed by Toolbox.
5. Git clone this repository and CD into it.
6. Run `docker-compose --x-networking up`

NOTE: On OSX you have to use the docker machine IP to access the app locally. You can see this by running `docker-machine ip default`

## Hot Reloading - OSX
Due to issues with virtualbox file syncing doesn't work properly by default. 

To remedy this install docker-rsync using homebrew:
```
brew tap synack/docker
brew install docker-rsync
```

Then, remove the shared folder from the virtualbox UI. Virtualbox's default file-sharing system will only slow us down.

Finally, inside the project folder, run the following command:
```
docker-rsync -dst <path-to-project> default
```
This will run continuously in your terminal window syncing the latest files from your hard drive!

## References
http://www.redotheweb.com/2013/02/20/sequelize-the-javascript-orm-in-practice.html

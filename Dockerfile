FROM node:5.0.0-wheezy

COPY . /usr/src/app

WORKDIR /usr/src/app
RUN npm install && \
    npm install -g webpack sequelize-cli && \
    npm run build && \
    npm rebuild node-sass

EXPOSE 8080
EXPOSE 3000

CMD npm start

FROM node:5.0.0-wheezy

#RUN mkdir -p /usr/src/app
ADD . /usr/src/app

WORKDIR /usr/src/app
RUN npm install && \
    npm install -g webpack sequelize-cli && \
    npm run build

EXPOSE 8080
EXPOSE 3000

CMD npm start

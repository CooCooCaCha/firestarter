FROM node:5.0.0-wheezy

COPY . /usr/src/app

WORKDIR /usr/src/app
RUN npm install && \
    npm install -g webpack eslint && \
    npm run build

EXPOSE 8080

CMD npm start

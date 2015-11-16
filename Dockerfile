FROM node:5.0.0-slim

ADD . /usr/src/app

WORKDIR /usr/src/app
RUN curl -L https://npmjs.org/install.sh | sh
RUN npm install -g webpack eslint babel-eslint && \
    npm install && \
    npm run build

EXPOSE 8080

CMD npm start

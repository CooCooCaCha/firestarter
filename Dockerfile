FROM node:5.0.0-slim

RUN curl -L https://npmjs.org/install.sh | sh

WORKDIR /usr/src/app
COPY package.json /usr/src/app/package.json
RUN ls
RUN npm install -g webpack eslint babel-eslint --loglevel warn && \
    npm install --loglevel warn

COPY . /usr/src/app
RUN npm run build

EXPOSE 8080

CMD npm start

FROM mhart/alpine-node:5.1

RUN apk --update add git gcc g++ make python

COPY package.json /usr/src/package.json
WORKDIR /usr/src
RUN npm install -g webpack eslint babel-eslint mocha --loglevel warn
RUN npm install --loglevel warn
RUN rm -rf /var/cache/apk/*

COPY . /usr/src/app
RUN mv /usr/src/node_modules /usr/src/app/node_modules

WORKDIR /usr/src/app
RUN npm run build

EXPOSE 8080

CMD npm start

FROM mhart/alpine-node:5.1

COPY package.json /usr/src/package.json
WORKDIR /usr/src

RUN apk --update add git gcc g++ make python && \
    npm install -g webpack eslint babel-eslint mocha --loglevel warn && \
    npm install --loglevel warn && \
    rm -rf /var/cache/apk/*

COPY . /usr/src/app
WORKDIR /usr/src/app

RUN mv /usr/src/node_modules /usr/src/app/node_modules && \
    npm run build

EXPOSE 8080

CMD npm start

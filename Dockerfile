FROM mhart/alpine-node:5.1

RUN apk --update add git gcc g++ make python

COPY . /usr/src/app
WORKDIR /usr/src/app

RUN npm install -g webpack eslint babel-eslint --loglevel warn
RUN npm install --loglevel warn
RUN rm -rf /var/cache/apk/*

RUN npm run build

EXPOSE 8080

CMD npm start

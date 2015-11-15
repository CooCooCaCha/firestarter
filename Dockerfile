FROM mhart/alpine-node:5.0.0

ADD . /usr/src/app

WORKDIR /usr/src/app
RUN npm install -g webpack eslint babel-eslint && \
    npm install && \
    npm run build

EXPOSE 8080

CMD npm start

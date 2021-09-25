FROM node:15-alpine

RUN apk update && apk add python make g++
RUN apk add --update nodejs npm

WORKDIR /app

COPY . ./

RUN npm install -g webpack@1.12.9
RUN npm install

EXPOSE 8080

ENTRYPOINT ["sh", "./docker/entrypoint.sh"]
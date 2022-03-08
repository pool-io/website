FROM node:alpine

EXPOSE 3000


WORKDIR /
COPY . /

RUN yarn --version
RUN yarn install
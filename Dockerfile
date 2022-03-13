FROM node:alpine

RUN npm install -g npm@latest

WORKDIR /
COPY . /

RUN yarn --version
RUN yarn install

EXPOSE 3000
ENTRYPOINT [ "yarn", "dev" ]
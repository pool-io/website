FROM node:alpine AS builder
RUN npm install -g npm@latest

WORKDIR /website
COPY . .

RUN yarn --version

# reinstall node modules
RUN rm -rf node_modules
RUN yarn install

# build
RUN yarn run build

EXPOSE 3000
ENTRYPOINT [ "yarn", "start" ]
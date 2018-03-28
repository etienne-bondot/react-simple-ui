# base image
FROM node:latest

RUN curl -o- -L https://yarnpkg.com/install.sh | bash

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# install and cache app dependencies
COPY package.json yarn.lock /usr/src/app/
RUN yarn install --pure-lockfile

# start app
CMD ["yarn", "start"]
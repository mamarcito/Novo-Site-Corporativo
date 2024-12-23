# Dockerfile
FROM node:alpine

# create destination directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# copy the app, note .dockerignore
COPY . .

RUN npm i
RUN npm run build

EXPOSE 3000

CMD [ "node", ".output/server/index.mjs" ]
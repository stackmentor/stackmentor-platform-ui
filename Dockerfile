
FROM node:alpine AS builder
ARG NPM_TOKEN

RUN apk add --update

WORKDIR /app

#COPY .npmrc .
COPY package.json .

RUN echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" > .npmrc
RUN npm install
RUN rm -f .npmrc

COPY . .

RUN npm run build

#
# nginx container
#
FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html

COPY --from=builder /app/dist/stackmentor-platform-ui /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

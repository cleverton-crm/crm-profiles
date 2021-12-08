FROM node:16
ENV NODE_ENV=production
RUN mkdir -p /var/www/users
WORKDIR /var/www/users
ADD . /var/www/users
RUN yarn install
CMD yarn build && yarn start:prod

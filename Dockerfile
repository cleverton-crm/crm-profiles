FROM node:16
ENV NODE_ENV=production
RUN mkdir -p /var/www/profiles
WORKDIR /var/www/profiles
ADD . /var/www/profiles
RUN yarn install
CMD yarn build && yarn start:prod

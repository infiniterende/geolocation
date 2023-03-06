FROM node:14.10

WORKDIR /usr/app

ADD .env
COPY package*.json ./ .env
RUN npm ci -qy

COPY . .

EXPOSE 8080

CMD ["npm", "start"]
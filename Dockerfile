FROM node:14.17.6

WORKDIR /JWT_AUTHENTICATION

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5206

CMD ["node", "index.js"]
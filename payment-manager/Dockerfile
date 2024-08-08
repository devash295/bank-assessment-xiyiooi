FROM node:18

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY src ./src
COPY tsconfig.json ./
COPY .env ./

RUN npm run build

CMD ["npm", "start"]

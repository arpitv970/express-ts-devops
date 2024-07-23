FROM node:20-alpine3.19

WORKDIR /app

COPY package.json package-lock.json ./
COPY prisma ./prisma/

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8000

CMD ["npm", "run", "start:migrate:prod"]
FROM node:20-alpine3.19

ENV PORT=8000 \
    DATABASE_URL=postgresql://postgres:postgres@localhost:5432/devops?schema=public

RUN mkdir -p /home/app

WORKDIR /home/app

COPY package*.json .

COPY prisma .

RUN npm install

COPY ./dist ./dist

RUN npx prisma generate

EXPOSE 8000

CMD ["npm", "start"]
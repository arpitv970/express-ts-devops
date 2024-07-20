FROM node:20-alpine3.19

ENV PORT=8000 \
    DATABASE_URL=postgresql://postgres:postgres@localhost:5432/devops?schema=public

RUN mkdir -p /home/app

WORKDIR /home/app

COPY package.json package-lock.json ./

RUN npm install


COPY . .

RUN npx prisma generate

RUN npm run build

EXPOSE 8000

CMD ["npm", "start"]
FROM node:19

WORKDIR /todo

COPY . .

RUN npm i

RUN [ "npm", "run", "build" ]

EXPOSE 3000

CMD ["npm", "run", "start"]


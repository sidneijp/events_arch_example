FROM node:17

RUN apt update

RUN apt install -y build-essential libpq-dev

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . ./

#ENTRYPOINT ["npm"]

CMD ["npm", "run", "dev"]

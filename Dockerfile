FROM node

WORKDIR /node

COPY . .

RUN npm install

FROM node

WORKDIR /node

COPY . .

RUN npm install
RUN npm install -g typescript
RUN tsc --declaration
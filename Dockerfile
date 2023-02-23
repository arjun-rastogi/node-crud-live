FROM node:14

# Create App Directory
WORKDIR /App

COPY package*.json ./

RUN npm install

#Bundle app source
COPY . .

EXPOSE 3000

CMD [ "node", "index.js" ]



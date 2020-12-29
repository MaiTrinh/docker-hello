FROM node:10

WORKDIR /image

# Install app dependencies
COPY package*.json ./
RUN npm Install

# Bundle app source
COPY . .

EXPOSE 3000

CMD [ "node", "builder.js"]
FROM node:14-alpine
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY src ./src
CMD ["npm", "run", "start"]

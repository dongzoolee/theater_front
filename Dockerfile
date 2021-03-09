FROM node:12-alpine
WORKDIR /home/ubuntu/blog
COPY package*.json ./
RUN npm install -g
COPY . .
CMD ["npm", "rebuild", "node-sass"]
CMD ["npm", "start"]
EXPOSE 2501
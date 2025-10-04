FROM node:18

WORKDIR /app

# Copy package.json and install dependencies
COPY app/package*.json ./
RUN npm install

# Copy all files
COPY app ./

EXPOSE 80

CMD ["npm", "start"]

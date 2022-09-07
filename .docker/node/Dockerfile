FROM node:16-slim

# Create directory to install dependencies
RUN mkdir -p /usr/src/build
WORKDIR /usr/src/build

# Copy package.json and package-lock.json from host
COPY package*.json ./

# Install dependencies
RUN npm install

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Bundle app source
RUN ln -s /usr/src/build/node_modules node_modules
COPY . .

# Expose port 3000
EXPOSE 3000

#CMD ["node", "index.js"]

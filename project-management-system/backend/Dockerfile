# Use official Node.js image as the base image
FROM node:20.11.0

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the backend port (9000)
EXPOSE 9000

# Start the application with nodemon
CMD ["npx", "nodemon", "server.js"]

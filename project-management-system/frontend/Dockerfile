# Use official Node.js image as a base
FROM node:20.11.0 as build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the entire project to the working directory
COPY . .

# Build the React app
RUN npm run build

# Install serve globally
RUN npm install -g serve

# Expose port 3000 for the React app
EXPOSE 3000

# Start the Node.js server
CMD ["serve", "-s", "build", "-l", "3000", "-n"]

# Use a lightweight Node.js image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package files to install dependencies
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the remaining frontend code to the container
COPY . .

# Build the React app
RUN npm run build

# Install a lightweight static server
RUN npm install -g serve

# Expose the port to serve the app
EXPOSE 3000

# Start the server to serve the built files
CMD ["serve", "-s", "dist"]

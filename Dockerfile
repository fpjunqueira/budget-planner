# Base image
FROM node:latest AS build

# Set working directory
WORKDIR /src/app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Stage 2 - Use Nginx as web server
FROM nginx:latest

# Copy the built application to the Nginx public folder
COPY dist/budget-planner /usr/share/nginx/html

# Copy the custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

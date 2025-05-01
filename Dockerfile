# Use an official Node.js runtime as a parent image
# Using Node 20 as a base, Alpine version for smaller size
FROM node:20-alpine AS base

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock, pnpm-lock.yaml)
COPY package*.json ./

# Install app dependencies
# Use --frozen-lockfile for reproducible installs
RUN npm install --frozen-lockfile

# Copy the rest of the application code into the container
COPY . .

# Build the Next.js application
# This will generate the .next folder with the production build
RUN npm run build

# Expose the port the app runs on. Next.js default is 3000,
# but Cloud Run uses the PORT env var (often 8080).
# The package.json start script will handle the PORT env var.
EXPOSE 3000

# Set environment variables
ENV NODE_ENV=production
# Set the default port if PORT env var isn't provided by the environment
ENV PORT=3000

# Define the command to run the app
# This uses the "start" script from package.json, which we'll modify
CMD ["npm", "start"]
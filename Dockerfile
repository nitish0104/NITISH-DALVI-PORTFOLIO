# Use an official Node.js LTS version as the base image
FROM node:20.11.0

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and yarn.lock files to the working directory
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile --production

# Copy the rest of the application code to the working directory
COPY . .

# Build the React app
RUN yarn build

# Expose the port that the React app will run on
EXPOSE 3000

# Command to run the React app
CMD ["yarn", "start"]

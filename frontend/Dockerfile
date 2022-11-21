# Use an official node runtime as a parent image
FROM node:14

WORKDIR /app/

# Install dependencies
COPY package.json package-lock.json /app/

RUN npm ci

# Add rest of the client code
COPY . /app/

EXPOSE 3000

CMD npm run dev --host --port 3000

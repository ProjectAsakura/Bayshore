FROM node:18-alpine

WORKDIR /server

# Copy the package file over
COPY package*.json ./

# tsconfig definitions
COPY tsconfig*.json ./

# Copy the entire app source tree
COPY . .

# Copy game configuration file
COPY config.json .

RUN npm install

# ALLnet
EXPOSE 80
# Mucha
EXPOSE 10082
# Service
EXPOSE 9002

# Compile protobuf definitions
RUN npm run build_protos

# Compile the application source code
RUN npx tsc

# Entrypoint
CMD ["node", "dist"]
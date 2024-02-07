# Counting-house

### Stack
 - Express
 - webpack
 - postgraSQL

### Project launch with postgraSQL
 - Install node 18
 - Execute the command npm run setup (it will install packages for both client and backend)
 - If Docker hasn't been set up yet, run the command docker-compose up -d --build, if it's already set up then use docker-compose up -d
 - Start the backend with npm run start:server
 - Start the client with npm run start:client

### Project launch with Mongo
 - Install node 18
 - Run ```npm run setup```
 - Run ```npm run start --workspace=client``` && ```npm run start:dev --workspace=server-mongo```

# Food Delivery App Backend

## Overview

This project consists of three microservices for a food delivery app: User Service, Restaurant Service, and Delivery Agent Service.

## Microservices

1. **User Service**
2. **Restaurant Service**
3. **Delivery Agent Service**

## Tech Stack

- **Node.js**
- **JavaScript**
- **Docker**
- **Docker Compose**
- **PostgreSQL** (for the database)

## Prerequisites

- Docker
- Docker Compose
- Node.js

## Setup

### Cloning the Repository

Clone the repository:

```sh
git clone https://github.com/sagnik3788/microservices-backend.git
cd microservices-backend/food-delivery-app
```

## Environment Variables
Create a .env file in each service directory (user-service, restaurant-service, delivery-agent-service) with the following content:

```sh
DB_NAME=food_delivery
DB_USER=postgres
DB_PASS=Sagnik@09
DB_HOST=postgres
DB_PORT=5432
```

Installing Dependencies
Before running the services, ensure you have installed all the necessary dependencies. Navigate to each service directory and run npm install:


# Navigate to user-service and install dependencies

```sh
cd user-service
npm install
npm install express sequelize pg pg-hstore nodemon dotenv

# Navigate to restaurant-service and install dependencies
cd ../restaurant-service
npm install
npm install express sequelize pg pg-hstore nodemon dotenv

# Navigate to delivery-agent-service and install dependencies
cd ../delivery-agent-service
npm install
npm install express sequelize pg pg-hstore nodemon dotenv
# Return to the root directory
cd ..
```

Run the Docker Compose file to start all the services:

```
docker-compose up --build
```
This command will build and start the Docker containers for each microservice and the PostgreSQL database.

Accessing the Services
The services will be available at the following ports:

- **User Service:** [http://localhost:3000](http://localhost:3000)
- **Restaurant Service:** [http://localhost:3001](http://localhost:3001)
- **Delivery Agent Service:** [http://localhost:3002](http://localhost:3002)



Project Structure


Project Structure

```sh
food-delivery-app/
├── user-service/
│   ├── models/
│   │   ├── User.js
│   │   ├── Order.js
│   │   ├── Rating.js
│   ├── routes/
│   │   ├── index.js
│   ├── database.js
│   ├── app.js
│   ├── Dockerfile
│   ├── package.json
│   └── .env
├── restaurant-service/
│   ├── models/
│   │   ├── Restaurant.js
│   │   ├── Order.js
│   │   ├── DeliveryAgent.js
│   ├── routes/
│   │   ├── index.js
│   ├── database.js
│   ├── app.js
│   ├── Dockerfile
│   ├── package.json
│   └── .env
├── delivery-agent-service/
│   ├── models/
│   │   ├── DeliveryAgent.js
│   │   ├── Order.js
│   ├── routes/
│   │   ├── index.js
│   ├── database.js
│   ├── app.js
│   ├── Dockerfile
│   ├── package.json
│   └── .env
├── docker-compose.yml
├── README.md
```

## Postman Documentation
For detailed API documentation and testing, refer to the Postman collection here (Replace # with the actual link to your Postman collection).

## Why This Project is Not Deployed
This project uses PostgreSQL running locally, which makes it unsuitable for deployment on platforms like Render or Heroku that require an external database connection. The primary reason for not using AWS RDS for PostgreSQL is the high cost associated with AWS RDS services. As a result, this setup is optimized for local development and testing.


Building and starting services:

```sh
docker-compose up --build
```
Stopping services:

```
docker-compose down
```
Viewing logs:

```sh
docker-compose logs -f
```

Notes
Ensure Docker and Docker Compose are installed and running on your machine.
The .env files are crucial for connecting to the PostgreSQL database.

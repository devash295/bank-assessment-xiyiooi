# Unified Service: Account Manager and Payment Manager

## Project Overview

This project contains two microservices:

1. Account Manager: Manages user accounts, including registration, login, account creation, and payment history tracking.
2. Payment Manager: Handles transactions, including sending and withdrawing funds, and maintaining transaction history.
   Both services are containerized using Docker and can be orchestrated together using Docker Compose.

## Project Structure (MVC)

```bash
/account-manager
  /src
    /@types
    /controllers
    /middleware
    /models
    /routes
    index.ts
    supabaseClient.ts
  .env
  Dockerfile
  package.json
  tsconfig.json

/payment-manager
  /src
    /@types
    /controllers
    /middleware
    /models
    /routes
    index.ts
    supabaseClient.ts
  .env
  Dockerfile
  package.json
  tsconfig.json

/docker-compose.yml
/init.sql
/README.md
```

- account-manager/: Contains the source code and configurations for the Account Manager microservice.
- payment-manager/: Contains the source code and configurations for the Payment Manager microservice.
- docker-compose.yml: Orchestrates both microservices along with a PostgreSQL database.
- init.sql: SQL file to initialize the database with necessary tables and data.

### Technologies Used

- Node.js: JavaScript runtime environment.
- Fastify: Web framework for Node.js.
- Prisma: ORM for database interaction.
- Supabase: Authentication service.
- Docker: Containerization platform.
- PostgreSQL: Relational database.
- Swagger: API documentation tool.

## Setup and Installation

### Prerequisites

Make sure you have the following installed:

1. **[Docker](https://docs.docker.com/engine/install/)**
2. **[Node.js](https://nodejs.org/en/download/package-manager)** (for local development)

## API Documentation

Both services have integrated Swagger documentation available at:

1. Account Manager: http://localhost:3001/documentation
2. Payment Manager: http://localhost:3002/documentation

Swagger UI provides detailed information on available API endpoints, request parameters, and response formats.

## How the Services Work

### Account Manager

- User Registration and Login: Handles user registration and authentication using Supabase.
- Account Management: Users can create and manage multiple payment accounts (e.g., credit, debit, loan).
- Payment History: Tracks all transactions related to each account.

### Payment Manager

- Transactions: Handles sending and withdrawing transactions, including recording transaction details.
- Transaction Processing: Transactions are processed asynchronously to simulate real-world scenarios.

### How They Communicate

Both microservices are independent and communicate with the same PostgreSQL database. The Account Manager handles user management and payment history, while the Payment Manager focuses on transactions.

## Running the Services

### Using Docker Compose

1. Build and start the services:

   > docker-compose up --build

2. Access the services:

   - Account Manager: `http://localhost:3001`
   - Payment Manager: `http://localhost:3002`

### Stopping the Services

To stop the services, run:

> docker-compose down

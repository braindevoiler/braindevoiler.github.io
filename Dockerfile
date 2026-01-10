# Multi-stage Dockerfile for Next.js Portfolio
# Supports development, building, and production

# Stage 1: Base - Install dependencies
FROM node:20-alpine AS base
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json package-lock.json* ./
RUN npm ci

# Stage 2: Development
FROM base AS development
WORKDIR /app

# Copy all source files
COPY . .

# Expose development port
EXPOSE 3000

# Start development server with hot reload
CMD ["npm", "run", "dev"]

# Stage 3: Builder - Build the application
FROM base AS builder
WORKDIR /app

# Copy all source files
COPY . .

# Build the Next.js application
RUN npm run build

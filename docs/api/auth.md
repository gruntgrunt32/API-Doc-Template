# Authentication

## Overview

The Todo API uses JWT (JSON Web Tokens) for authentication. All authenticated endpoints require a valid JWT token in the Authorization header.

## Endpoints

### Register New User

```http
POST /auth/register
```

Register a new user account.

#### Request Body

```json
{
  "email": "user@example.com",
  "password": "securepassword123"
}
```

#### Response

```json
{
  "success": true,
  "data": {
    "userId": "uuid",
    "email": "user@example.com",
    "token": "jwt.token.here"
  }
}
```

### Login

```http
POST /auth/login
```

Login with existing credentials.

#### Request Body

```json
{
  "email": "user@example.com",
  "password": "securepassword123"
}
```

#### Response

```json
{
  "success": true,
  "data": {
    "token": "jwt.token.here"
  }
}
```

## Using the Token

Include the token in all API requests:

```http
Authorization: Bearer jwt.token.here
```
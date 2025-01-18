# Todo API Documentation

Welcome to the Todo API documentation. This API allows you to manage todo items with user authentication.

## Base URL

```
https://api.example.com/v1
```

## Authentication

All API requests require authentication. See the [Authentication](/api/auth) section for details.

## Rate Limiting

- 100 requests per minute per IP
- 1000 requests per hour per user

## Response Format

All responses are returned in JSON format with the following structure:

```json
{
  "success": true,
  "data": {
    // Response data here
  },
  "error": null
}
```

For errors:

```json
{
  "success": false,
  "data": null,
  "error": {
    "code": "ERROR_CODE",
    "message": "Error description"
  }
}
```
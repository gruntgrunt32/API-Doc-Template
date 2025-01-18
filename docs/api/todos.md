# Todos

## Endpoints

### List Todos

```http
GET /todos
```

Retrieve all todos for the authenticated user.

#### Query Parameters

| Parameter | Type    | Description                    |
|-----------|---------|--------------------------------|
| completed | boolean | Filter by completion status    |
| limit     | number  | Maximum number of todos (1-100)|
| offset    | number  | Pagination offset              |

#### Response

```json
{
  "success": true,
  "data": {
    "todos": [
      {
        "id": "uuid",
        "title": "Buy groceries",
        "completed": false,
        "createdAt": "2024-01-01T12:00:00Z",
        "updatedAt": "2024-01-01T12:00:00Z"
      }
    ],
    "total": 1
  }
}
```

### Create Todo

```http
POST /todos
```

Create a new todo item.

#### Request Body

```json
{
  "title": "Buy groceries",
  "description": "Get milk and bread"
}
```

#### Response

```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "title": "Buy groceries",
    "description": "Get milk and bread",
    "completed": false,
    "createdAt": "2024-01-01T12:00:00Z",
    "updatedAt": "2024-01-01T12:00:00Z"
  }
}
```

### Update Todo

```http
PATCH /todos/:id
```

Update an existing todo item.

#### Request Body

```json
{
  "title": "Buy groceries",
  "completed": true
}
```

#### Response

```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "title": "Buy groceries",
    "completed": true,
    "updatedAt": "2024-01-01T12:00:00Z"
  }
}
```

### Delete Todo

```http
DELETE /todos/:id
```

Delete a todo item.

#### Response

```json
{
  "success": true,
  "data": {
    "message": "Todo deleted successfully"
  }
}
```

## Error Codes

| Code              | Description                           |
|-------------------|---------------------------------------|
| TODO_NOT_FOUND    | The requested todo item doesn't exist |
| INVALID_INPUT     | Invalid request body or parameters    |
| UNAUTHORIZED      | Authentication required               |
| FORBIDDEN         | User doesn't own the todo item        |
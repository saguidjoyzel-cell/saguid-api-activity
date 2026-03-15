#
# RESTful API Activity – Joyzel H. Saguid
## Best Practices Implementation
### 1. Environment Variables

**Why did we put `BASE_URI` in `.env` instead of hardcoding it?**

Answer: We utilize .env to enable configuration modifications without altering the code.

### 2. Resource Modeling

**Why did we use plural nouns (e.g., /dishes) for our routes?**

Answer: We employ plural nouns such as /dishes because routes signify groupings of resources, adhering to normal REST API rules, hence enhancing the API's consistency and facilitating comprehension for developers.

### 3. Status Codes

**When do we use 201 Created vs 200 OK?**

Answer: Because of its adherence to REST principles and its clear illustration of collections.

**Why is it important to return 404 instead of just an empty array or a generic error**

Answer: The issuance of a 404 status code is crucial since it unequivocally signifies that the requested resource is nonexistent, prevents deceptive answers, and facilitates appropriate error management by client applications.

### 4. Testing

Successful GET request to /api/v1/dishes :

# Open Fetch User Lambda

This Lambda function is designed to return the authenticated user's details as provided by the API Gateway’s authorizer.
It’s a simple yet powerful function that can be used to verify and retrieve the user’s identity after they’ve been
authenticated.

![Screenshot 2024-10-22 at 10.04.03 PM.png](screenshots/apigateway/Screenshot%202024-10-22%20at%2010.04.03%E2%80%AFPM.png)

## Key Highlights

- **User Context Retrieval**:
  The function captures the authenticated user's information from the requestContext.authorizer, which is typically
  populated after passing through an API Gateway Authorizer (like a Lambda or Cognito authorizer). This ensures that
  only authenticated users have access to their details.

- **CORS-Friendly Responses**:
  The function returns appropriate headers (Access-Control-Allow-Origin, Access-Control-Allow-Methods, and
  Access-Control-Allow-Headers) to ensure that the response can be handled by the frontend in a Cross-Origin Resource
  Sharing (CORS) compliant manner.

## How It Works

- **User Data**:
  When a user makes a request after being authenticated, the authorizer (set up in API Gateway) populates the
  requestContext.authorizer field with the user’s data (e.g., user ID, email, roles). This Lambda function simply
  extracts that data and returns it in the response.

- **Response Format**:
  The function returns a 200 status code, along with the user’s information in JSON format. This can then be used by the
  frontend or other backend services to display user-specific content or validate user access.

## Why This Lambda is Awesome

This function is a crucial piece in any user authentication system, as it helps validate and confirm a user's identity.
By returning the user’s details in a simple and secure way, it allows applications to ensure that users are properly
authenticated and authorized. This can be extended to various use cases such as personalized content, user profile
management, and role-based access control.

### What's next ?

Check the [main](https://github.com/longbowou/open-frontend) repository this one is part of.

## Screenshot

![Screenshot 2024-10-22 at 9.48.43 PM.png](screenshots/lambda/Screenshot%202024-10-22%20at%209.48.43%E2%80%AFPM.png)

## License

This project is licensed under the [MIT License](LICENSE).
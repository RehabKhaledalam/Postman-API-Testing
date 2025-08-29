🔐 Auth API with Postman Testing
A mock backend API built using json-server and json-server-auth, designed to simulate user authentication and protected endpoints. Ideal for learning and testing login flows with Postman.
🚀 Getting Started
npm install
node server.js


Server runs at: http://localhost:3001

📁 Key Files
- db.json – Mock database (users, courses)
- server.js – Server setup with authentication
- collection.json – Postman collection for testing
- Locally.postman_environment.json – Postman environment with variables

🧪 How to Test with Postman
- Import both collection.json and Locally.postman_environment.json
- Select the "Locally" environment
- Use /register and /login to get a token
- Access protected routes like /courses using the token

✅ Testing & Reporting
This project includes a complete testing workflow using:

• 	Postman: For manual testing of all API endpoints, including authentication and protected routes.

• 	Newman: To automate Postman tests via CLI, ensuring consistent results across environments.

• 	HTML Report: Generated from Newman runs to visualize test results with detailed request/response logs.

• 	Jenkins Integration: Automated test execution and report generation on every push or scheduled build, ensuring continuous validation of the API.

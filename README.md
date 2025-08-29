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

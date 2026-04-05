# Real-Time Collaborative Document Editor

A web-based application that allows multiple users to edit a document simultaneously in real time. The system uses WebSockets to synchronize document changes instantly between connected users, similar to collaborative platforms like Google Docs.

## 🚀 Features

* Real-time collaborative editing
* Automatic document synchronization
* Rich text editing (bold, italic, lists, etc.)
* Auto-save functionality
* Multi-user editing support
* Document sharing via unique URL

## 🛠️ Tech Stack

Frontend:

* React.js
* Quill.js (Rich Text Editor)
* Socket.io-client

Backend:

* Node.js
* Express.js
* Socket.io

Database:

* MongoDB

## ⚙️ How It Works

1. When a user opens the application, a unique document ID is generated.
2. The backend server creates or retrieves the document from MongoDB.
3. Socket.io establishes a real-time connection between users.
4. Any change made by one user is broadcast to all other users editing the same document.

## 📂 Project Structure

collaborative-editor
│
├── client (React Frontend)
│   └── src
│
├── server (Node.js Backend)
│   └── server.js

## ▶️ Running the Project Locally

### 1. Start Backend

cd server
node server.js

### 2. Start Frontend

cd client
npm start

Then open:

http://localhost:3000

## 📌 Future Improvements

* User authentication
* Cursor tracking for multiple users
* Version history for documents
* Dark mode interface
* AI-assisted writing suggestions

## 👩‍💻 Author

Tanu

## 📄 License

This project is for educational and learning purposes.

# Output 

Server 1:

<img width="1600" height="508" alt="Image" src="https://github.com/user-attachments/assets/3955f6b3-94cf-403f-902b-1e2d90967fcd" />

Server 2:



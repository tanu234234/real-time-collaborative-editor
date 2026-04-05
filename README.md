**COMPANY**: CODTECH IT SOLUTIONS PVT.LTD

**NAME**: Tanushree K A

**INTERN ID**: CTIS6658

**DOMAIN**: FULL STACK WEB DEVELOPMENT

**DURATION**: 4 WEEKS

**MENTOR**: NEELA SANTHOSH

# Real-Time Collaborative Editor

# Overview

The Real-Time Collaborative Editor is a web-based application that allows multiple users to edit the same document simultaneously in real time. The main objective of this project is to demonstrate how modern web technologies enable collaborative work environments where users can interact with the same content at the same time from different locations.

In traditional document editing systems, users must edit files individually and then manually share the updated versions. This approach often leads to version conflicts and delays in communication. The Real-Time Collaborative Editor solves this problem by allowing multiple users to access and modify a document together while changes appear instantly for everyone connected to the document.

The application uses WebSocket technology through Socket.IO to maintain continuous communication between the server and all connected clients. Whenever a user edits the document, the changes are immediately transmitted to the server and broadcast to other users currently editing the same document. This ensures that every participant always sees the most recent version of the document.

The frontend of the application is developed using React.js, which provides a dynamic and responsive user interface. The editor itself is powered by Quill.js, a rich text editor that allows users to format text using features such as bold, italic, lists, headings, and more. These formatting changes are also synchronized in real time.

On the backend, Node.js and Express.js handle server operations and manage user connections. The application also uses MongoDB to store documents so that users can return later and continue editing previously created documents. Each document is associated with a unique identifier, allowing users to share document links and collaborate easily.

This project demonstrates important concepts in modern web development such as real-time data synchronization, client-server communication, collaborative interfaces, and full-stack application architecture.

# Features
Real-time collaborative document editing
Instant synchronization of document changes
Multi-user editing support
Rich text formatting including bold, italic, headings, and lists
Automatic document saving
Unique document links for easy sharing
Dynamic user interface built with React
Real-time communication using WebSockets
Persistent document storage using MongoDB
Technologies Used

**React.js**
React.js is used to build the frontend interface of the application. It allows the creation of reusable UI components and ensures fast updates when document content changes.

**Quill.js**
Quill.js is a powerful rich text editor that enables users to format text with features such as bold, italic, bullet lists, numbered lists, and headings.

**Node.js**
Node.js is used as the backend runtime environment to handle server-side operations and manage communication between users.

**Express.js**
Express.js simplifies the process of building the server and managing application routes.

**Socket.IO**
Socket.IO enables real-time bidirectional communication between the client and the server, allowing document changes to be instantly synchronized among users.

**MongoDB**
MongoDB is used as the database to store documents so that users can retrieve and edit them later.

# Project Structure
collaborative-editor
│
├── client
│   └── src
│
├── server
│   └── server.js
│
└── README.md

The client folder contains the React frontend responsible for the editor interface and user interactions.
The server folder contains the backend code that manages document synchronization and user connections.

# How It Works

When a user opens the application, a unique document ID is generated. The server checks whether the document already exists in the database. If it exists, the document is loaded; otherwise, a new document is created.

Once the document is loaded, Socket.IO establishes a real-time connection between the user and the server. Whenever a user edits the document, the changes are sent to the server and instantly broadcast to all other users editing the same document.

This process ensures that every connected user always views the most updated version of the document without needing to refresh the page.

# Future Improvements
User authentication and login system
Real-time cursor tracking for multiple users
Version history and document recovery
Dark mode interface
AI-powered writing assistance

# Author

Tanu

# License

This project is created for educational and learning purposes to demonstrate real-time collaborative application development.

# Output 

Server 1:

<img width="1600" height="508" alt="Image" src="https://github.com/user-attachments/assets/3955f6b3-94cf-403f-902b-1e2d90967fcd" />

Server 2:

<img width="1600" height="438" alt="Image" src="https://github.com/user-attachments/assets/571c7f23-8d17-4de6-870a-acf567d640f7" />



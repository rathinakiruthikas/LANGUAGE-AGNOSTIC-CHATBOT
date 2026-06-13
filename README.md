# LANGUAGE-AGNOSTIC-CHATBOT
# Project Description

Language Agnostic Chatbot is an AI-powered chatbot that enables users to communicate in multiple languages without language barriers. The system automatically detects the user's language, processes the query, and generates responses in the same language. This helps users interact with the chatbot naturally, regardless of their preferred language.
# Problem Statement

Many users face difficulties when interacting with applications that support only a limited number of languages. The proposed chatbot aims to eliminate language barriers by understanding and responding to user queries in multiple languages.
# Objectives
Support multiple languages.

Detect user language automatically.

Generate accurate responses.

Maintain conversation history.

Provide a simple and user-friendly interface.

# Modules
User Authentication Module
User Registration
User Login
User Profile Management
Chat Interface Module
Send Messages
Receive Responses
Real-time Conversation Display
Language Detection Module
Detect User Input Language
Process Multilingual Queries
Response Generation Module
Generate Appropriate Responses
Return Responses in User Language
Conversation History Module
Store Chat Records
Retrieve Previous Conversations

# Database Tables

Users,
user_id,
username,
email,
password,
Conversations,
conversation_id,
user_id,
created_at,
Messages,
message_id,
conversation_id,
sender,message_text,
timestamp
,Languages
,language_id
,language_name
,language_code

Chat_Logs

log_id

user_id

activity

timestamp

Frontend Setup

Create React Project

Bash

npx create-react-app language-agnostic-chatbot

cd language-agnostic-chatbot

npm install axios react-router-dom

npm start

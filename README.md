# WhatsApp Chatbot Initial Message Sender

## Overview:
This project automates the process of sending initial messages to leads via WhatsApp. It includes a JavaScript script that reads lead information from a JSON file and integrates it into a chatbot using the Twilio API. The chatbot sends personalized messages to each lead, initiating the conversation with "Hello, <name> from <country>".

<img width="250" alt="Initial-message-whatsapp" src="https://github.com/Zobeir-Rigi/Whatsapp-chatbot/assets/108760076/6952663f-9dba-4f62-bb3d-173d605b93e6">
<img width="750" alt="Initial message" src="https://github.com/Zobeir-Rigi/Whatsapp-chatbot/assets/108760076/8124dcb8-6e33-416a-9c07-be88d0e3fa59">
<img width="400" alt="Notification on my phone" src ="https://github.com/Zobeir-Rigi/Whatsapp-chatbot/assets/108760076/58dc860e-50e2-495e-a720-a8d2780c8b50">

## Instructions for Running the Code:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your_username/whatsapp-chatbot.git


2. Install Dependencies:
cd whatsapp-chatbot
npm install

3. Configuration:
. Replace [AuthToken] in the script with your Twilio API authentication token.
. Ensure that the JSON file (userInfo.json) contains lead information in the format: 
    [
         { "name": "LeadName", "celphone": "LeadPhone", "country": "LeadCountry" }
     ]

4. Run the Script:
node whatsapp-chatbot.js , the file is (readData.js) in this project.

Dependencies:
.Twilio: Used for integrating WhatsApp messaging functionality into the chatbot.

Contact Information:
For any inquiries or assistance, please contact:

. Email: rigi.zobeir@yahoo.com
. GitHub: Zobeir-Rigi




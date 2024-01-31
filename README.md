# WhatsApp Chatbot Initial Message Sender

## Overview:
This project automates the process of sending initial messages to leads via WhatsApp. It includes a JavaScript script that reads lead information from a JSON file and integrates it into a chatbot using the Twilio API. The chatbot sends personalized messages to each lead, initiating the conversation with "Hello, <name> from <country>".

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




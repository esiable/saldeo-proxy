# SaldeoSMART Integration with Next.js

## Application Description

This application is designed to integrate with SaldeoSMART API, enabling seamless interactions such as adding documents, fetching companies, and fetching contractors. It is built using Next.js and utilizes the Axios library for making HTTP requests and the js2xmlparser library for XML handling. The integration supports both direct API calls and automation workflows using Zapier, allowing for efficient data management and task automation in various business processes.


# Examples of Usage

## Example 1: Adding a Document to SaldeoSMART

# Send a POST request to the Next.js API endpoint to add a document.
# URL: https://your-domain/api/addDocument
# Headers: {"Content-Type": "application/json"}
# Body:
# {
#   "documentData": {
#     "COMPANY_PROGRAM_ID": "1234",
#     "CONTRACTOR": {
#       "CONTRACTOR_ID": "5678",
#       "NAME": "Example Contractor"
#     },
#     "INVOICE": {
#       "NUMBER": "FV-2024-001",
#       "DATE": "2024-05-01",
#       "TOTAL": "1234.56"
#     }
#   }
# }

## Example 2: Fetching Companies from SaldeoSMART

# Send a GET request to the Next.js API endpoint to fetch companies.
# URL: https://your-domain/api/getCompanies

# Output:
# The API will return the list of companies in JSON format.

## Example 3: Fetching Contractors from SaldeoSMART

# Send a GET request to the Next.js API endpoint to fetch contractors.
# URL: https://your-domain/api/getContractors

# Output:
# The API will return the list of contractors in JSON format.

## Example 4: Adding a Document to SaldeoSMART (Using Zapier)

# Set up Zapier to trigger when a row in Google Sheets is marked as "done".

# Trigger: New or Updated Spreadsheet Row in Google Sheets.
# Filter: Check if the specific cell is marked as "done".

# Webhook Action:
# Action: Send a POST request to the Next.js API endpoint to add a document.
# URL: https://your-domain/api/addDocument
# Headers: {"Content-Type": "application/json"}
# Body:
# {
#   "documentData": {
#     "COMPANY_PROGRAM_ID": "1234",
#     "CONTRACTOR": {
#       "CONTRACTOR_ID": "5678",
#       "NAME": "Example Contractor"
#     },
#     "INVOICE": {
#       "NUMBER": "FV-2024-001",
#       "DATE": "2024-05-01",
#       "TOTAL": "1234.56"
#     }
#   }
# }

## Example 5: Fetching Companies from SaldeoSMART (Using Zapier)

# Set up Zapier to trigger on a schedule (e.g., every hour).

# Trigger: Scheduled Trigger (e.g., every hour).
# Webhook Action:
# Action: Send a GET request to the Next.js API endpoint to fetch companies.
# URL: https://your-domain/api/getCompanies

# Output Action:
# Update Google Sheets with the fetched companies data.
# Use the response from the webhook to populate the sheet.

## Example 6: Fetching Contractors from SaldeoSMART (Using Zapier)

# Set up Zapier to trigger on a schedule (e.g., every day).

# Trigger: Scheduled Trigger (e.g., every day).
# Webhook Action:
# Action: Send a GET request to the Next.js API endpoint to fetch contractors.
# URL: https://your-domain/api/getContractors

# Output Action:
# Update Google Sheets with the fetched contractors data.
# Use the response from the webhook to populate the sheet.

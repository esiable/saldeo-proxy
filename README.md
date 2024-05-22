# SaldeoSMART Integration with Next.js
## Configuration
Run ```bash npm install```

Configure the .env.local File

```bash
echo "SALDEO_API_URL=https://api.saldeosmart.pl/api/xml/1.0" > .env.local
echo "USERNAME=your_username" >> .env.local
echo "API_TOKEN=your_api_token" >> .env.local
```

And you are redy :)
## Application Description

This application is designed to integrate with SaldeoSMART API, enabling seamless interactions such as adding documents, fetching companies, and fetching contractors. It is built using Next.js and utilizes the Axios library for making HTTP requests and the js2xmlparser library for XML handling. The integration supports both direct API calls and automation workflows using Zapier, allowing for efficient data management and task automation in various business processes.


# Examples of Usage

## Example 1: Adding a Document to SaldeoSMART (Without Zapier)
```bash
curl -X POST https://your-domain/api/addDocument \
-H "Content-Type: application/json" \
-d '{
  "documentData": {
    "COMPANY_PROGRAM_ID": "1234",
    "CONTRACTOR": {
      "CONTRACTOR_ID": "5678",
      "NAME": "Example Contractor"
    },
    "INVOICE": {
      "NUMBER": "FV-2024-001",
      "DATE": "2024-05-01",
      "TOTAL": "1234.56"
    }
  }
}'
```
## Example 2: Fetching Companies from SaldeoSMART (Without Zapier)
```curl
curl -X GET https://your-domain/api/getCompanies
```
## Example 3: Fetching Contractors from SaldeoSMART (Without Zapier)
```curl
curl -X GET https://your-domain/api/getContractors
```
## Example 4: Adding a Document to SaldeoSMART (Using Zapier)

Set up Zapier to trigger when a row in Google Sheets is marked as "done".

**Trigger**: New or Updated Spreadsheet Row in Google Sheets.
**Filter**: Check if the specific cell is marked as "done".

**Webhook Action**:
- **Action**: Send a POST request to the Next.js API endpoint to add a document.
- **URL**: https://your-domain/api/addDocument
**Headers**:
```curl
curl -X POST https://your-domain/api/addDocument \
-H "Content-Type: application/json" \
-d '{
  "documentData": {
    "COMPANY_PROGRAM_ID": "1234",
    "CONTRACTOR": {
      "CONTRACTOR_ID": "5678",
      "NAME": "Example Contractor"
    },
    "INVOICE": {
      "NUMBER": "FV-2024-001",
      "DATE": "2024-05-01",
      "TOTAL": "1234.56"
    }
  }
}'
```

## Example 5: Fetching Companies from SaldeoSMART (Using Zapier)

Set up Zapier to trigger on a schedule (e.g., every hour).

**Trigger**: Scheduled Trigger (e.g., every hour).
**Webhook Action**:
 - **Action**: Send a GET request to the Next.js API endpoint to fetch companies.
 - **URL**: https://your-domain/api/getCompanies

**Output Action**:
Update Google Sheets with the fetched companies data.
```curl
curl -X GET https://your-domain/api/getCompanies
```

## Example 6: Fetching Contractors from SaldeoSMART (Using Zapier)

Set up Zapier to trigger on a schedule (e.g., every day).

 **Trigger**: Scheduled Trigger (e.g., every day).
 **Webhook Action**:
 - **Action**: Send a GET request to the Next.js API endpoint to fetch contractors.
 - **URL**: https://your-domain/api/getContractors
 **Output Action**:
 Update Google Sheets with the fetched contractors data.
 ```curl
curl -X GET https://your-domain/api/getContractors
```


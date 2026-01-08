# Google Drive Integration Setup Instructions

## Step 1: Create Google Cloud Project
1. Go to https://console.cloud.google.com/
2. Create a new project or select existing one
3. Enable Google Drive API and Google Sheets API

## Step 2: Create Service Account
1. Go to "IAM & Admin" > "Service Accounts"
2. Click "Create Service Account"
3. Give it a name like "NSPT Career Applications"
4. Click "Create and Continue"
5. Skip role assignment for now
6. Click "Done"

## Step 3: Generate Service Account Key
1. Click on the created service account
2. Go to "Keys" tab
3. Click "Add Key" > "Create New Key"
4. Select "JSON" format
5. Download the key file
6. Rename it to "service-account-key.json"
7. Place it in backend/config/ folder

## Step 4: Create Google Drive Folder
1. Go to https://drive.google.com/
2. Create a new folder called "NSPT Career Applications"
3. Right-click the folder > "Share"
4. Add the service account email (from the JSON file) with "Editor" access
5. Copy the folder ID from the URL (the long string after /folders/)

## Step 5: Update Environment Variables
1. Open backend/.env file
2. Replace "your_folder_id_here" with the actual folder ID

## Step 6: Install Dependencies
Run in backend folder:
```bash
npm install googleapis nodemailer
```

## How it works:
- When someone applies for a job, their resume gets uploaded to Google Drive
- A Google Sheet is automatically created with all their application data
- Both files are stored in your specified Google Drive folder
- You can access everything from your Google Drive account

## Security Note:
- Keep the service-account-key.json file secure
- Don't commit it to version control
- The service account only has access to the specific folder you shared
const { google } = require('googleapis');
const fs = require('fs');

class GoogleDriveService {
  constructor() {
    console.log('Initializing Google Drive Service...');
    console.log('Key file path:', process.env.GOOGLE_SERVICE_ACCOUNT_KEY_FILE);
    
    this.auth = new google.auth.GoogleAuth({
      keyFile: process.env.GOOGLE_SERVICE_ACCOUNT_KEY_FILE,
      scopes: [
        'https://www.googleapis.com/auth/spreadsheets',
        'https://www.googleapis.com/auth/drive'
      ]
    });
    
    this.folderId = process.env.GOOGLE_DRIVE_FOLDER_ID;
    console.log('Folder ID:', this.folderId);
  }

  async initializeAuth() {
    try {
      console.log('Getting auth client...');
      this.authClient = await this.auth.getClient();
      console.log('Google Auth Email:', this.authClient.credentials?.client_email || 'No email found');
      
      // Use the SAME authClient everywhere
      this.drive = google.drive({ version: 'v3', auth: this.authClient });
      this.sheets = google.sheets({ version: 'v4', auth: this.authClient });
      
      // Test auth with Drive API
      const aboutRes = await this.drive.about.get({ fields: 'user' });
      console.log('Auth test result:', aboutRes.data);
      
      return true;
    } catch (error) {
      console.error('Auth initialization failed:', error.message);
      return false;
    }
  }

  async testConnection() {
    try {
      console.log('Testing Google Drive connection...');
      await this.initializeAuth();
      
      const response = await this.drive.files.list({
        q: `'${this.folderId}' in parents`,
        pageSize: 1
      });
      console.log('Connection successful! Folder accessible.');
      return true;
    } catch (error) {
      console.error('Connection test failed:', error.message);
      return false;
    }
  }

  async createApplicationSheet(applicationData) {
    try {
      console.log('Creating Google Sheet for:', applicationData.fullName);
      
      // Ensure auth is initialized
      if (!this.authClient) {
        await this.initializeAuth();
      }
      
      // Step 1: Create Google Sheet using Drive API (in root, no folder)
      console.log('Creating spreadsheet using Drive API in root...');
      const file = await this.drive.files.create({
        requestBody: {
          name: `Application - ${applicationData.fullName} - ${new Date().toISOString().split('T')[0]}`,
          mimeType: 'application/vnd.google-apps.spreadsheet'
          // No parents - create in root
        }
      });
      
      console.log('Sheet created with ID:', file.data.id);

      // Step 2: Use Sheets API to write data
      const sheets = google.sheets({ version: 'v4', auth: this.authClient });
      
      const values = [
        ['Field', 'Value'],
        ['Name', applicationData.fullName],
        ['Email', applicationData.email],
        ['Position', applicationData.position],
        ['Experience', applicationData.experience],
        ['Qualification', applicationData.qualification],
        ['Resume Link', applicationData.resumeLink || 'N/A'],
        ['Date', new Date().toLocaleString()]
      ];

      await sheets.spreadsheets.values.update({
        spreadsheetId: file.data.id,
        range: 'A1:B8',
        valueInputOption: 'RAW',
        requestBody: { values }
      });

      const sheetLink = `https://docs.google.com/spreadsheets/d/${file.data.id}/edit`;
      console.log('Google Sheet created successfully:', sheetLink);
      return sheetLink;
    } catch (error) {
      console.error('Error creating sheet:', error.message);
      console.error('Full error response:', error.response?.data || error);
      return null;
    }
  }
}

module.exports = GoogleDriveService;
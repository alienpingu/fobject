const express = require('express');
const cors = require('cors');
const knex = require('knex');
const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');

const register = require('./Controller/Register');

const app = express();
app.use(express.json());
app.use(cors());

const db = [
	{
		username: 'admin',
		email: 'admin@gmail.com',
		password: 'admin'
	}
]

app.get ('/', (request, response) => {
	response.json('App is running')
})


app.get ('/convert/:customId', (request, response) => {
	const  data  = request.params;

	// If modifying these scopes, delete token.json.
	const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
	// The file token.json stores the user's access and refresh tokens, and is
	// created automatically when the authorization flow completes for the first
	// time.
	const TOKEN_PATH = 'token.json';

	// Load client secrets from a local file.
	fs.readFile('credentials.json', (err, content) => {
	  if (err) return console.log('Error loading client secret file:', err);
	  // Authorize a client with credentials, then call the Google Sheets API.
	  authorize(JSON.parse(content), listMajors);
	});

	/**
	 * Create an OAuth2 client with the given credentials, and then execute the
	 * given callback function.
	 * @param {Object} credentials The authorization client credentials.
	 * @param {function} callback The callback to call with the authorized client.
	 */
	function authorize(credentials, callback) {
	  const {client_secret, client_id, redirect_uris} = credentials.installed;
	  const oAuth2Client = new google.auth.OAuth2(
	      client_id, client_secret, redirect_uris[0]);

	  // Check if we have previously stored a token.
	  fs.readFile(TOKEN_PATH, (err, token) => {
	    if (err) return getNewToken(oAuth2Client, callback);
	    oAuth2Client.setCredentials(JSON.parse(token));
	    callback(oAuth2Client);
	  });
	}

	/**
	 * Get and store new token after prompting for user authorization, and then
	 * execute the given callback with the authorized OAuth2 client.
	 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
	 * @param {getEventsCallback} callback The callback for the authorized client.
	 */
	function getNewToken(oAuth2Client, callback) {
	  const authUrl = oAuth2Client.generateAuthUrl({
	    access_type: 'offline',
	    scope: SCOPES,
	  });
	  console.log('Authorize this app by visiting this url:', authUrl);
	  const rl = readline.createInterface({
	    input: process.stdin,
	    output: process.stdout,
	  });
	  rl.question('Enter the code from that page here: ', (code) => {
	    rl.close();
	    oAuth2Client.getToken(code, (err, token) => {
	      if (err) return console.error('Error while trying to retrieve access token', err);
	      oAuth2Client.setCredentials(token);
	      // Store the token to disk for later program executions
	      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
	        if (err) return console.error(err);
	        console.log('Token stored to', TOKEN_PATH);
	      });
	      callback(oAuth2Client);
	    });
	  });
	}

	/**
	 * Prints the names and majors of students in a sample spreadsheet:
	 * @see https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
	 * @param {google.auth.OAuth2} auth The authenticated Google OAuth client.
	 */


	function listMajors(auth) {
	  const sheets = google.sheets({version: 'v4', auth});
	  sheets.spreadsheets.values.get({
	    spreadsheetId: data.customId,
	    range: 'Foglio1'
	  }, (err, response) => {
	    if (err) return console.log('The API returned an error: ' + err);
	    createObj(response.data.values);
	  });
	}

	function createObj(rows) {
	    const firstRow = rows[0]
	    var dbOut = []
	    let temp = {} 
	    if (rows.length) {
	      	for (let i = 1; rows.length > i; i++ ) {
		      	rows[i].forEach(val => {
		      		temp[firstRow[rows[i].indexOf(val)]] = val
		      	})
		      	dbOut.push(temp)
		      	temp = {}
	    	}
	    	response.json(dbOut)
	    } else {
	      response.json('No data found.');
	    }
	}

})

app.post('/register', (req, res) => { register.handleRegister(req, res, db) })


app.listen(3001, () => {
	console.log('App is running on port 3001')
});
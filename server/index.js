const express = require('express');
const cors = require('cors');
const knex = require('knex');
const bcrypt = require('bcrypt-nodejs');
const bodyParser = require('body-parser');

const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');

const register = require('./Controller/Register');
const login = require('./Controller/Login');
const spreadsheet = require('./Controller/Spreadsheet');

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({
  extended: true
}));

const db = knex({
	client:'pg',
	connection: {
		host: '127.0.0.1',
		user: 'postgres',
		password: 'postgres',
		database: 'fobject'
	}
});

app.get ('/', (request, response) => {
	response.json('App is running')
})

app.post ('/spreadsheet', (req, res) => {spreadsheet.handleSpreadsheet(req, res, db)})

app.post('/register', (req, res) => { register.handleRegister(req, res, db, bcrypt) })

app.post('/login', (req, res) => { login.handleLogin(req, res, db, bcrypt) })

app.get ('/convert/:customId', (request, response) => {
	const  data  = request.params;
	console.log(data);

	const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
	const TOKEN_PATH = 'token.json';

	fs.readFile('credentials.json', (err, content) => {
	  if (err) return console.log('Error loading client secret file:', err);
	  // Authorize a client with credentials, then call the Google Sheets API.
	  authorize(JSON.parse(content), listMajors);
	});

	function authorize(credentials, callback) {
	  const {client_secret, client_id, redirect_uris} = credentials.installed;
	  const oAuth2Client = new google.auth.OAuth2(
	      client_id, client_secret, redirect_uris[0]);

	  fs.readFile(TOKEN_PATH, (err, token) => {
	    if (err) return getNewToken(oAuth2Client, callback);
	    oAuth2Client.setCredentials(JSON.parse(token));
	    callback(oAuth2Client);
	  });
	}

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
	      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
	        if (err) return console.error(err);
	        console.log('Token stored to', TOKEN_PATH);
	      });
	      callback(oAuth2Client);
	    });
	  });
	}

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

app.listen(3001, () => {
	console.log('App is running on port 3001')
});
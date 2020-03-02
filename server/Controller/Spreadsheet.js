const handleSpreadsheet = (req, res, db) => {
	const { userId, sheetId, template } = req.body;

	const saveConfig = () => {
		db('spreadsheet')
			.insert({userId: userId,sheetId: sheetId,template: template})
			.catch(err => res.status(400).json('Error'))	
		res.status(200).json('Saved')
	}	

	let currentUser = db('spreadsheet').where({userId: userId}).select();
	console.log(currentUser);
}


module.exports = {
	handleSpreadsheet: handleSpreadsheet
};
const handleRegister = (req, res, db) => {
	const { email, username, password } = req.body;
	db.push({
		username: username,
		email: email,
		password: password
	})
	res.status(200).json(db[-1])
}
module.exports = {
	handleRegister: handleRegister
};
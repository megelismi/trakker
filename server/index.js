import 'babel-polyfill';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import express from 'express';
import dotenv from 'dotenv';
import mongodb from 'mongodb';
import User from './models/users';

dotenv.config({ silent: true });

const MongoClient = mongodb.MongoClient;

mongoose.Promise = global.Promise;

const HOST = process.env.HOST;
const PORT = process.env.PORT || 3000;

console.log(`Server running in ${process.env.NODE_ENV} mode`);

const app = express();
const jsonParser = bodyParser.json();

app.use(express.static(process.env.CLIENT_PATH));

app.post('/fblogin', jsonParser, (req, res) => {
	const { email, name, id, gender } = req.body.profile;
	const { accessToken } = req.body.tokenDetail;

	//see if the user already exists in the database

	User.find({ email }, (err, existingUser) => {
		if (err) {
			console.error(err);
			return res.send(err);
		}
		//if they do exist, send back their info

		if (existingUser.length) {
			return res.status(200).json(existingUser[0]);
		}

		//if they don't exist, create an account for them then send back their info

		User.create({ name, email, _id: id, gender, accessToken }, (err, newUser) => {
			if (err) {
				console.error(err);
				return res.send(err);
			}
			return res.status(200).json(newUser);
		});
	});
});


function runServer() {
	const databaseUri = process.env.DATABASE_URI || global.databaseUri;
	mongoose.connect(databaseUri);
	return new Promise((resolve, reject) => {
		app.listen(PORT, HOST, (err) => {
				if (err) {
					console.error(err);
					reject(err);
				}
				const host = HOST || 'localhost';
				console.log(`Listening on ${host}:${PORT}`);
		});
	});
}

if (require.main === module) {
		runServer();
}


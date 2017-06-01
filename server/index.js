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
const PORT = process.env.PORT || 8080;

console.log(`Server running in ${process.env.NODE_ENV} mode`);

const app = express();
const jsonParser = bodyParser.json();

app.use(express.static(process.env.CLIENT_PATH));

app.post('/signup', jsonParser, (req, res) => {
	const { name, userName, email, password } = req.body;
	User.create({ name, userName, email, password }, (err, data) => {
		if (err) {
			console.error(err);
			res.send(err);
		}
		res.status(200).json(data);
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


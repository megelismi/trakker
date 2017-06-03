import 'babel-polyfill';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import express from 'express';
import dotenv from 'dotenv';
// import mongodb from 'mongodb';
// import passport from 'passport';
// import { Strategy } from 'passport-http-bearer';
import bcrypt from 'bcryptjs';
import uuidV1 from 'uuid/v1';
import User from './models/users';
import * as userValidity from './handlers/signUpValidity';

const salt = bcrypt.genSaltSync(10);
dotenv.config({ silent: true });

// const MongoClient = mongodb.MongoClient;

mongoose.Promise = global.Promise;

const HOST = process.env.HOST;
const PORT = process.env.PORT || 3000;

console.log(`Server running in ${process.env.NODE_ENV} mode`);

const app = express();
const jsonParser = bodyParser.json();

app.use(express.static(process.env.CLIENT_PATH));

// passport.use(new Strategy(
//   (token, callback) => knex('users').where('token', token)
//   .then((user) => {
//     if (!user) { return callback(null, false); }
//     return callback(null, user);
//     })
//   .catch((err) => {
//     console.log(err);
//     return callback(err);
//   })
// ));

app.post('/fblogin', jsonParser, (req, res) => {
	const { email, name, id } = req.body.profile;
	const { accessToken } = req.body.tokenDetail;

	//see if the user already exists in the database

	User.find({ email }, (err, existingUser) => {
		if (err) {
			console.error(err);
			return res.send(err);
		}
		//if they do, send back their info

		if (existingUser.length) {
			return res.status(200).json(existingUser[0]);
		}

		//if they don't, create an account then send back their info

		User.create({ name, email, _id: id, accessToken }, (err, newUser) => {
			if (err) {
				console.error(err);
				return res.send(err);
			}
			return res.status(200).json(newUser);
		});
	});
});

app.post('/signup', jsonParser, (req, res) => {
	const user = req.body;
	const { name, email, password, confirmedPassword } = req.body;
	const passwordToSave = bcrypt.hashSync(password, salt);
  const token = uuidV1();
  const userValidityCheck = userValidity.signUpValidity(user);

  console.log('passwordToSave', passwordToSave, 'token', token, 'userValidityCheck', userValidityCheck);

  if (userValidityCheck.isInvalid) {
    return res.status(userValidityCheck.status).json({ message: userValidityCheck.message });
  }
	res.status(200).json({});
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


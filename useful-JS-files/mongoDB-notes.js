mongoDB-notes.js


// Starts a connection
	var myDB = 'mongodb://localhost/dbName';
	mongoogse.connect(myDB);

	// make sure mongod is running in terminal. 

// create files

/* 
c:\> .\mongod.exe --config="D:\mongo.config"
	command starts mongo server. You have to link it to the config file. 
	
	Elements of config file
		dbpath=D:\Projects\mean2\data
		logpath=D:\Projects\mean2\log\mongodb.log
		diaglog=3
*/

name : value_pair


// Managing db in mongoDB

	/* 
	use dbname
		Goes to db with the name 'dbname' or creates one
	db
		Tells you what DB you are using. 
	
	db.dropDatabase
		Deletes current database (db. selects current db)

	db.collection.insert(json-info)
		adds to that collection, if not there creates one adds information.

	mongoimport -d YOUR_DATABASE_NAME -c YOUR_COLLECTION_NAME --jsonArray < FILENAME.JSON﻿
		imports json files to database (multiple entries)
		use this command with ./mongoimport.exe 
		".\mongoimport.exe -d theRotor -c POSTS --jsonArray --file D:\Projects\theRotor\db\json\sam
ple-json-data-v1.json"

	show collections
		Shows created collections in db

	db.collection.find()
		Shows all the information in the database. 
		https://docs.mongodb.com/manual/reference/operator/query/
			query and projection operators
		"_id:0"
			Explicitly does not return object id

	db.collection.find().pretty()
		Shows all information but pretty. 

	db.collection.remove({_id : id})
		Removes a particular entry by id number

	db.collection.update({selection criteria}, updated json info)
		Updates a entry. Writing over previous with all info again. 

	db.collection.drop()
		Drops entire collection.

	show collections
		Shows all collections

	db.users.aggregate()
		Creates talley based on search critera
			https://docs.mongodb.com/manual/aggregation/
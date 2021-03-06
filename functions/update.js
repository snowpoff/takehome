'use strict';

const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();

module.exports.update = (event, context, callback) => {
	const data = JSON.parse(event.body);
	const params = {
		TableName: 'playlist',
		Item: {
			id: data.playlistName,
			track: data.track
		}
	};

	dynamo.put(params, (error, result) =>{
		if (error) {
			console.error(error);
			callback(new Error('Cannot update playlist.'));
			return;
		}

		const response = {
			statusCode: 200,
			body: JSON.stringify(result.Item)
		};

		callback(null, response);
	});
};

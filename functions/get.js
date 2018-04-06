'use strict';

const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();

module.exports.get = (event, context, callback) => {
	const params = {
		TableName: 'music',
		Key: {
			id: event.pathParameters.id
		}
	};

	dynamo.get(params, (error, result) =>{
		if (error) {
			console.error(error);
			callback(new Error('Cannot find track.'));
			return;
		}

		const response = {
			statusCode: 200,
			body: JSON.stringify(result.Item)
		};

		callback(null, response);
	});
};

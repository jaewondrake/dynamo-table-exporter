This mini project was made to export and create a usable JSON file from DynamoDB JSON. To export DynamoDB JSON from AWS, run the following:

```aws --profile <ROLE_TO_ASSUME> dynamodb scan --table-name <YOUR_TABLE_NAME> > <YOUR_TABLE_NAME>.json```

Then run ```npm install```, set the values in unmarshall.js and run ```node unmarshall.js```

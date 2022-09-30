This mini project was made to export and create a usable JSON file from DynamoDB JSON. To export DynamoDB JSON from AWS, run the following:

aws --profile revelup-dev dynamodb scan --table-name establishment-service-dev > establishment-service-dev.json

Then run npm install, set the values in unmarshall.js and run node unmarshall.js
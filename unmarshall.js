const { unmarshall } = require("@aws-sdk/util-dynamodb");
const fs = require("fs");

// change this to the json exported from Amazon DynamoDB
const dynamo_json = require("./<INSERT_EXPORTED_JSON_FILE_NAME_HERE>.json");

let Items = [];

// change this to the number of items you want to export
export_count = 1000;

for (let i = 0; i < export_count; i++) {
  if (dynamo_json.Items[i].active != undefined) {
    Items.push(unmarshall(dynamo_json.Items[i]));
  } else if (dynamo_json.Items[i].active == undefined) {
    ++export_count;
  }
}
console.log("Successfully extracted " + Items.length + " items");
const to_regular_json = { Items };

fs.writeFile(
  "./<INSERT_DESIRED_EXPORT_FILE_NAME_HERE>-unmarshalled.json", // change to desired export file name
  JSON.stringify(to_regular_json),
  (error) => {
    if (error) {
      console.log("An error has occurred ", error);
      return;
    }
    console.log("Data written successfully to disk");
  }
);

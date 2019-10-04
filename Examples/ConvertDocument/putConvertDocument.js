// For complete examples and data files, please go to https://github.com/aspose-words-cloud/aspose-words-cloud-node

const {WordsApi, PutConvertDocumentRequest } = require("asposewordscloud");

var AppSid = "" // Get App Key and App SID from https://dashboard.aspose.cloud/
var AppKey = "" // Get App Key and App SID from https://dashboard.aspose.cloud/
var BaseUrl = "https://api.aspose.cloud"
var debugMode = false
var version = "v1.1"

wordsApi = new WordsApi(AppSid, AppKey, BaseUrl, debugMode, version);

var fs = require('fs'); 
var StorageApi = require("asposestoragecloud")
var config = {'appSid':AppSid, 'apiKey':AppKey};
var storageApi = new StorageApi(config);

var fileName = "test_multi_pages.docx";
var dataPath = '../../TestData/Common/';

var request = new PutConvertDocumentRequest({
                    format: "pdf",
                    document: fs.readFileSync(dataPath + fileName),
                });

wordsApi.putConvertDocument(request).then((result) => {
	console.log('API Response:', result.body.byteLength);
}).catch(function(err) {
    // Deal with an error
    console.log('Error:', err);
});
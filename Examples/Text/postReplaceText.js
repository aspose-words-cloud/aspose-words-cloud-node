// For complete examples and data files, please go to https://github.com/aspose-words-cloud/aspose-words-cloud-node

const {WordsApi, PostReplaceTextRequest, ReplaceTextRequest } = require("asposewordscloud");

var AppSid = "" // Get App Key and App SID from https://dashboard.aspose.cloud/
var AppKey = "" // Get App Key and App SID from https://dashboard.aspose.cloud/
var BaseUrl = "https://api.aspose.cloud"
var debugMode = false
var version = "v1.1"

wordsApi = new WordsApi(AppSid, AppKey, BaseUrl, debugMode, version);

var StorageApi = require("asposestoragecloud")
var config = {'appSid':AppSid, 'apiKey':AppKey};
var storageApi = new StorageApi(config);

var fileName = "SampleWordDocument.docx";
var dataPath = '../../TestData/DocumentElements/Text/';

storageApi.PutCreate(fileName, versionId=null, storage=null, file= dataPath + fileName , function(responseMessage) {
	console.log('status:', responseMessage.status);
	console.log('body:', responseMessage.body);
});

var request = new PostReplaceTextRequest();
request.name = fileName;
request.folder = "";
request.replaceText = new ReplaceTextRequest ({ oldValue: "aspose", newValue: "aspose new" });

wordsApi.postReplaceText(request).then((result) => {
	console.log('API Response:', result.body);
}).catch(function(err) {
    // Deal with an error
    console.log('Error:', err);
});
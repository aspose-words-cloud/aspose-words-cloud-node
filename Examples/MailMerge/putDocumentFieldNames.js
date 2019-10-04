// For complete examples and data files, please go to https://github.com/aspose-words-cloud/aspose-words-cloud-node

const {WordsApi, PutDocumentFieldNamesRequest } = require("asposewordscloud");
var fs = require('fs'); 

var AppSid = "" // Get App Key and App SID from https://dashboard.aspose.cloud/
var AppKey = "" // Get App Key and App SID from https://dashboard.aspose.cloud/
var BaseUrl = "https://api.aspose.cloud"
var debugMode = false
var version = "v1.1"

wordsApi = new WordsApi(AppSid, AppKey, BaseUrl, debugMode, version);

var fileName = "SampleExecuteTemplate.docx";
var localPath = '../../TestData/DocumentActions/MailMerge/';

var request = new PutDocumentFieldNamesRequest({
    template: fs.readFileSync(localPath + fileName),
    useNonMergeFields: true,                                
});

wordsApi.putDocumentFieldNames(request).then((result) => {
	console.log('API Response:', result.body);
}).catch(function(err) {
    // Deal with an error
    console.log('Error:', err);
});
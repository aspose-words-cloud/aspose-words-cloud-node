// For complete examples and data files, please go to https://github.com/aspose-words-cloud/aspose-words-cloud-node

const {WordsApi, UpdateTablePropertiesRequest, TableProperties } = require("asposewordscloud");

var AppSid = "" // Get App Key and App SID from https://dashboard.aspose.cloud/
var AppKey = "" // Get App Key and App SID from https://dashboard.aspose.cloud/
var BaseUrl = "https://api.aspose.cloud"
var debugMode = false
var version = "v1.1"

wordsApi = new WordsApi(AppSid, AppKey, BaseUrl, debugMode, version);

var StorageApi = require("asposestoragecloud")
var config = {'appSid':AppSid, 'apiKey':AppKey};
var storageApi = new StorageApi(config);

var fileName = "TablesGet.docx";
var dataPath = '../../TestData/DocumentElements/Tables/';

storageApi.PutCreate(fileName, versionId=null, storage=null, file= dataPath + fileName , function(responseMessage) {
	console.log('status:', responseMessage.status);
	console.log('body:', responseMessage.body);
});

var request = new UpdateTablePropertiesRequest();
request.name = fileName;
request.folder = "";
request.index = 0;
request.properties = new TableProperties(
{
    alignment: TableProperties.AlignmentEnum.Right,
    allowAutoFit: false,
    bidi: true,
    bottomPadding: 1,
    cellSpacing: 2,
    leftIndent: 3,
    leftPadding: 4,
    rightPadding: 5,
    styleOptions: TableProperties.StyleOptionsEnum.ColumnBands,
    topPadding: 6,
});

wordsApi.updateTableProperties(request).then((result) => {
	console.log('API Response:', result.body);
}).catch(function(err) {
    // Deal with an error
    console.log('Error:', err);
});
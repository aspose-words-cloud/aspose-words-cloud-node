# Aspose.Words Cloud SDK for Node.js [![npm](https://badge.fury.io/js/asposewordscloud.svg)](https://www.npmjs.com/package/asposewordscloud)
This repository contains Aspose.Words Cloud SDK for Node.js source code. This SDK allows you to work with Aspose.Words Cloud REST APIs in your nodejs applications quickly and easily, with zero initial cost.

[Aspose.Words Cloud](https://products.aspose.cloud/words/family "Aspose.Words Cloud")  
[API Reference](https://apireference.aspose.cloud/words/)  

# Key Features
* Conversion between various document-related formats (20+ formats supported), including PDF<->Word conversion
* Mail merge and reports generation 
* Splitting Word documents
* Accessing Word document metadata and statistics
* Find and replace
* Watermarks and protection
* Full read & write access to Document Object Model, including sections, paragraphs, text, images, tables, headers/footers and many others

## How to use the SDK?
The complete source code is available in this repository folder. You can either directly use it in your project via source code or get [nmpjs distribution](https://www.npmjs.com/package/asposewordscloud) (recommended). For more details, please visit our [documentation website](https://docs.aspose.cloud/display/wordscloud/Available+SDKs).

### Prerequisites

To use Aspose Words for Cloud SDK you need to register an account with [Aspose Cloud](https://www.aspose.cloud/) and lookup/create App Key and SID at [Cloud Dashboard](https://dashboard.aspose.cloud/#/apps). There is free quota available. For more details, see [Aspose Cloud Pricing](https://purchase.aspose.cloud/pricing).

Required version of Node.js is 8.16 or higher.

### Installation

#### Install Aspose.Words-Cloud via NPM

From the command line:

	npm install asposewordscloud --save


### Sample usage

The examples below show how your application have to initiate and convert "doc" file to "pdf" using asposewordscloud library:
``` js
const { WordsApi, PostDocumentSaveAsRequest, SaveOptionsData } = require("asposewordscloud");

wordsApi = new WordsApi(AppSid, AppKey);

var request = new PostDocumentSaveAsRequest({
    name: "fileStoredInCloud.doc",
    saveOptionsData: new SaveOptionsData(
        {
            saveFormat: "pdf",
            fileName: "destination.pdf"
        })
});

wordsApi.postDocumentSaveAs(request)
    .then((result) => {
        // Deal with a result
        console.log(result.response.statusCode);
        console.log(result.body);
    })
    .catch(function(err) {
        // Deal with an error
        console.log(err.reponse.statusCode);
        console.log(err.body);
    });

```

Every method returns a chainable promise.

[Tests](test) contain various examples of using the SDK. You have to create "testConfig.json" file in project root to run them.
"testConfig.json" has the following structure
``` json
{
    "AppSid": "Youre AppSid here",
    "AppKey": "Youre AppKey here",
    "BaseUrl": "http://api.aspose.cloud"
}
```

For other examples, check the product [Developer Guide](https://docs.aspose.cloud/display/wordscloud/Developer+Guide).

## Dependencies
* [@types/request](https://www.npmjs.com/package/@types/request) (version 2.48.3+)  
* [lodash](https://www.npmjs.com/package/lodash) (version 4.17.15+)  
* [lodash.template](https://www.npmjs.com/package/lodash.template) (version 4.5.0+)  
* [request](https://www.npmjs.com/package/request) (version 2.88.0+)  
* [request-debug](https://www.npmjs.com/package/request-debug) (version 0.2.0+)  

## Licensing
 
All Aspose.Words Cloud SDKs, helper scripts and templates are licensed under [MIT License](https://github.com/aspose-words-cloud/aspose-words-cloud-node/blob/master/LICENSE). 

### Dependencies licenses
Request package is under [Apache ver. 2.0 license](https://www.apache.org/licenses/LICENSE-2.0). Rest of dependencies are under [MIT license](https://processwire.com/about/license/mit/).

## Contact Us
Your feedback is very important to us. Please feel free to contact us using our [Support Forums](https://forum.aspose.cloud/c/words).

## Resources
 
[Website](https://www.aspose.cloud/)  
[Product Home](https://products.aspose.cloud/words/family)  
[API Reference](https://apireference.aspose.cloud/words/)  
[Documentation](https://docs.aspose.cloud/display/wordscloud/Home)  
[Blog](https://blog.aspose.cloud/category/words/)  
 
## Other languages
We generate our SDKs in different languages so you may check if yours is available in our [list](https://github.com/aspose-words-cloud).
 
If you don't find your language in the list, feel free to request it from us, or use raw REST API requests as you can find it [here](https://products.aspose.cloud/words/curl).

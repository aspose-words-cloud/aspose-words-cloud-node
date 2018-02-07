# Aspose.Words Cloud SDK for Node.Js [![npm](https://img.shields.io/npm/v/npm.svg)](https://www.npmjs.com/package/asposewordscloud)
This repository contains Aspose.Words Cloud SDK for Node.js source code. This SDK allows you to work with Aspose.Words Cloud REST APIs in your nodejs applications quickly and easily, with zero initial cost.

# Key Features
* Conversion between various document-related formats (20+ formats supported), including PDF<->Word conversion
* Mail merge and reports generation 
* Splitting Word documents
* Accessing Word document metadata and statistics
* Find and replace
* Watermarks and protection
* Full read & write access to Document Object Model, including sections, paragraphs, text, images, tables, headers/footers and many others

See [API Reference](https://apireference.aspose.cloud/words/) for full API specification.

## How to use the SDK?
The complete source code is available in this repository folder. You can either directly use it in your project via source code or get [nmpjs distribution](https://www.npmjs.com/package/asposewordscloud) (recommended). For more details, please visit our [documentation website](https://docs.aspose.cloud/display/wordscloud/Available+SDKs).

### Prerequisites

To use Aspose Words for Cloud SDK you need to register an account with [Aspose Cloud](https://www.aspose.cloud/) and lookup/create App Key and SID at [Cloud Dashboard](https://dashboard.aspose.cloud/#/apps). There is free quota available. For more details, see [Aspose Cloud Pricing](https://purchase.aspose.cloud/pricing).

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

wordsApi.postDocumentSaveAs(request).then((result) => {    
    console.log(result.body.code);    
}).catch(function(err) {
    // Deal with an error
    console.log(err);
});

```

Every method returns a chainable promise.

[Tests](test) contain various examples of using the SDK.


## Comparison with Old generation SDK
New SDK has the following advantages over the [previous version](https://github.com/aspose-words/Aspose.Words-for-Cloud):
+ SDK is fully in sync with the API, all missing methods are added
+ Classes, methods and properties have comments and are IDE-friendly
+ Better security
+ Usage of Request/Response classes to represent long lists of parameters. This allows for cleaner code and easier backwards-compatibility going forward

New SDK is not backwards compatible with previous generation because of the last item. It should be straightforward to convert your code to using Request/Response objects, if you need any help on migration please ask at [Free Support Forums](https://forum.aspose.cloud/c/words).

## Contact Us
Your feedback is very important to us. Please feel free to contact us using our [Support Forums](https://forum.aspose.cloud/c/words).

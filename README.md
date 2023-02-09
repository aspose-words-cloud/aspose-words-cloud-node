Node.js Cloud SDK wraps Aspose.Words REST API so you could seamlessly integrate Microsoft Word® document generation, manipulation, conversion & inspection features into your own Node.js applications.

# Word Document Processing in the Cloud

[Aspose.Words Cloud SDK for Node.js](https://products.aspose.cloud/words/nodejs) allows to work with document headers, footers, page numbering, tables, sections, document comments, drawing objects, FormFields, fonts, hyperlinks, ranges, paragraphs, math objects, watermarks, track changes and document protection. It also assists in appending documents, splitting documents as well as converting document to other supported file formats. 

Feel free to explore the [Developer's Guide](https://docs.aspose.cloud/display/wordscloud/Developer+Guide) & [API Reference](https://apireference.aspose.cloud/words/) to know all about Aspose.Words Cloud API. 

## Document Processing Features

- Convert between various document-related formats, including Word to PDF & vice versa.
- Mail merge and report generation in the Cloud.
- Split & merge Word documents.
- Access Word document metadata.
- Find and replace text.
- Add & remove watermarks and protection.
- Read & write access to Document Object Model.

## Enhancements in Version 23.2

- Added operations to manipulate with Structure Document Tags (SDT) in documents.


## Enhancements in Version 23.1

- Various changes related to stability and performance


## Enhancements in Version 22.12

- Various changes related to stability and performance


## Enhancements in Version 22.11

- Added 'EmbedAttachments' property for PdfSaveOptionsData class.


## Enhancements in Version 22.10

- Added 'CacheHeaderFooterShapes' property for PdfSaveOptionsData class.
- FileReference structure has been added that allows to determine how the document will be accessed: from the remote storage, or loaded directly in the request.
- The 'AppendDocument' and 'AppendDocumentOnline' methods takes a 'FileReference' instead of an 'href' property.
- Added property 'StartingNumber' for 'PageNumbers' class.
- Added property 'GlobalCultureName' for 'FieldOptions' class.


## Enhancements in Version 22.9

- CompressDocument method now can handle images.
- Added support to convert password protected document using ConvertDocument API.


## Enhancements in Version 22.8

- Added optional loadEncoding and password parameters for ConvertDocument API method.


## Enhancements in Version 22.7

- Expand 'AppendDocument' API method to support 'ImageEntryList' for directly appending images to documents and another images.
- Added 'CompressDocument' API method to support compression and resizing images inside the document for reduce the size of the document.


## Enhancements in Version 22.6

- Added 'DeleteBookmark' and 'DeleteBookmarkOnline' API methods for delete bookmarks by name from the document.
- Added 'DeleteBookmarks' and 'DeleteBookmarksOnline' API methods for delete all bookmarks from the document.
- Added 'InsertBookmark' and 'InsertBookmarkOnline' API methods for create new bookmarks in the document.
- Support all save formats for 'CreateDocument' operation.


## Enhancements in Version 22.5

- Internal API fixes and improvments.


## Enhancements in Version 22.4

- Added ExportShapesAsSvg to HtmlSaveOption.
- Added new endpoint '~/styles/copy_from'.


## Enhancements in Version 22.3

- Online methods returns the dictionary of files with included original filename as key instead of single file content in responses.
- Parameters contained sensitive data should be passed in encrypted form. Names of the parameters have 'encrypted' prefix.
- Added Encrypt method to encrypt data on the API public key. Use it to prepare values for parameters required encrypted data.
- Changed type of enumerations for members of SaveOptionsData and other inherited classes from string to enum.


## Enhancements in Version 22.2

- Made 'SaveOprionsData.SaveFormat' property readonly with default value.
- Added subclasses for all formats of SaveOprionsData with specified SaveFormat.
- 'SaveOptionsData', 'FixedPageSaveOptionsData', 'ImageSaveOptionsData', 'OoxmlSaveOptionsData', 'TxtSaveOptionsBaseData' classes now is abstract.


## Enhancements in Version 22.1

- Added 'FieldOptions.FieldUpdateCultureName' to set Culture for fields
- Added 'DocumentEntry.Password' to set an encrypted password for appending document
- Added 'encryptedPassword2' query parameter to CompareDocuments to set an encrypted password for the second comparing document


## Enhancements in Version 21.12

- Added FieldOptions parameter to mail merge operations
- Added timeout parameter to api configuration


## Enhancements in Version 21.11



## Enhancements in Version 21.10

- Removed 'GraphicsQualityOptions' image save option as it no longer supported.
- Added query parameter 'displayIntermediateResults' for batch requests. If 'false', the last response in batch will be returned only. Default is 'true'
- Added 'JsonDataLoadOptions' and 'XmlDataLoadOptions' to 'ReportEngineSettings'


## Enhancements in Version 21.8

- Added new api methods to get, insert, update or delete custom xml parts from documents.
- Added parameter 'ResultDocumentFormat' to Compare API
- Added 'ExportLanguageToSpanTag' pdf save option
- Added 'FlatOpcXmlMappingOnly' save option


## Enhancements in Version 21.7

- ImlRenderingMode option introduced witch is used to determine how ink (InkML) objects are rendered
- MaxCharactersPerLine option introduced which is used to specify the maximum number of characters per one line
- Added new API method to get a RSA public key to encrypt document passwords
- Added encryptedPassword common query option to pass an encrypted document password


## Enhancements in Version 21.6

- Implemented beta version of CompareDocumentOnline feature with both document sending in request
- CompareDocument method now can handle PDF files
- AcceptAllRevisionsBeforeComparison option introduced which is used to specify if accept all revisions before comparison


## Enhancements in Version 21.5

- Update dependencies in sdk
- Added resultOf feature support for batch requests

## Enhancements in Version 21.4

- Removed obsolete pdf save option 'EscapeUri'
- SaveOptions now contains CustomTimeZoneInfo to set custom timezone when SdtType.Date structured document tag updated from custom XML
- Url of child requests in batch can be full now (earlier it can be only relative)
- Added 'RquestId' header to all responses
- Added batch requests
- Added DependsOn feature support for batch requests

## Enhancements in Version 21.3

- Added 'UpdateCreatedTimeProperty' save option
- Added Tables into HeaderFooter so it's possible to address paragraphs inside table which is located in headerfooter (sections/0/headersfooters/1/tables/0/rows/0/cells/0/paragraphs/0)


## Enhancements in Version 21.2

- Added delete all comments method


## Enhancements in Version 21.1

- Added online version for all API methods


## Enhancements in Version 20.11

- In configuration json file appSid / appKey has been replaced to clientId / clientSecret.
- In Words API initialization methods clientId parameter precedes clientSecret parameter.


## Enhancements in Version 20.10

- Internal API changes.


## Enhancements in Version 20.9

- Added Batch API feature


## Enhancements in Version 20.8

- Added new api method (PUT '/words/{name}/compatibility/optimize') which is allows to optimize the document contents as well as default Aspose.Words behavior to a particular versions of MS Word
- Added 'ApplyBaseDocumentHeadersAndFootersToAppendingDocuments' option to 'DocumentEntryList' for AppendDocument API
- WithoutNodePath methods have been removed, pass null values instead


## Enhancements in Version 20.7

- Added 'Markdown' save format
- Added endpoint to update paragraph format without node path (PUT '/words/{name}/paragraphs/{index}/format')


## Enhancements in Version 20.6

- Added new methods:
  - DeleteAllParagraphTabStopsWithoutNodePath
  - DeleteParagraphTabStopWithoutNodePath
  - GetParagraphTabStopsWithoutNodePath
  - InsertOrUpdateParagraphTabStopWithoutNodePath
  - InsertParagraphWithoutNodePath
  - UpdateParagraphFormatWithoutNodePath
  - UpdateParagraphListFormatWithoutNodePath
  - DeleteParagraphListFormatWithoutNodePath
- DrawingObject related methods have been changed body content. Special request classes are introduced instead of strings.
- InsertOrUpdateParagraphTabStop, DeleteParagraphTabStop methods have been changed parameter order
- OoxmlSaveOptionsData.CompressionLevel property has been added


## Enhancements in Version 20.5

- Added methods to work with Word document lists
  - GetLists
  - GetList
  - InsertList
  - UpdateList
  - UpdateListLevel
- Added methods to work with styles
  - GetStyles
  - UpdateStyle
  - InsertStyle
  - CopyStyle
  - GetStyleFromDocumentElement
  - ApplyStyleToDocumentElement
- Added methods to work with paragraph list format
  - GetParagraphListFormat
  - GetParagraphListFormatWithoutNodePath
  - UpdateParagraphListFormat
  - DeleteParagraphListFormat
- Added methods to work with paragraph tab stops
  - GetParagraphTabStops
  - InsertOrUpdateParagraphTabStop
  - DeleteAllParagraphTabStops
  - DeleteParagraphTabStop
- Added methods to build reports
  - BuildReport
  - BuildReportOnline
- Added Shading property to ParagraphFormat


## Read & Write Document Formats

**Microsoft Word:** DOC, DOCX, RTF, DOT, DOTX, DOTM, FlatOPC (XML)
**OpenOffice:** ODT, OTT
**WordprocessingML:** XML
**Web:** HTML, MHTML, HtmlFixed
**Text:** TXT
**Fixed Layout:** PDF

## Save Document As

**Fixed Layout:** PDF/A, XPS, OpenXPS, PS
**Images:** JPEG, PNG, BMP, SVG, TIFF, EMF
**Others:** PCL

## Getting Started with Aspose.Words Cloud SDK for Node.js

Firstly, create an account at [Aspose for Cloud](https://dashboard.aspose.cloud/#/apps) to get your application information and free quota to use the API. Now execute `npm install asposewordscloud --save` from the command line to install Aspose.Words Cloud SDK for Node.js via NPM.

The complete source code is available at [GitHub Repository](https://github.com/aspose-words-cloud/aspose-words-cloud-node).

### SDK Dependencies

- [@types/request](https://www.npmjs.com/package/@types/request) (version 2.48.3+)
- [lodash](https://www.npmjs.com/package/lodash) (version 4.17.15+)
- [lodash.template](https://www.npmjs.com/package/lodash.template) (version 4.5.0+)
- [request](https://www.npmjs.com/package/request) (version 2.88.0+)
- [request-debug](https://www.npmjs.com/package/request-debug) (version 0.2.0+)

## Convert DOCX to PDF via Node.js

```js
        // Start README example

        // create API instance (baseUrl is optional)
        const wordsApi = new WordsApi(clientId, clientSecret, baseUrl);

        // upload file to the Aspose cloud
        const uploadRequest = new UploadFileRequest();
        uploadRequest.path = "uploaded.docx";
        uploadRequest.fileContent = createReadStream(localPath);

        wordsApi.uploadFile(uploadRequest)
            .then((_uploadResult) => {
                // save the file as pdf in the cloud
                const request = new SaveAsRequest({
                    name: "uploaded.docx",
                    saveOptionsData: new PdfSaveOptionsData(
                        {
                            fileName: "destination.pdf"
                        })
                });

                wordsApi.saveAs(request)
                    .then((_result) => {
                        // deal with the pdf file
                    })
                    .catch(function(_err) {
                        // handle saveAs request error
                    });
            })
            .catch(function(_err) {
                // handle uploadFile request error
            });

        // End README example
```

[Product Page](https://products.aspose.cloud/words/nodejs) | [Documentation](https://docs.aspose.cloud/display/wordscloud/Home) | [API Reference](https://apireference.aspose.cloud/words/) | [Code Samples](https://github.com/aspose-words-cloud/aspose-words-cloud-node) | [Blog](https://blog.aspose.cloud/category/words/) | [Free Support](https://forum.aspose.cloud/c/words) | [Free Trial](https://dashboard.aspose.cloud/#/apps) 

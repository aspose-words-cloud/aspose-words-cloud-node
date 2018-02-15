Feature: Stored document conversion with return result in response
	In order to reuse document content for various purposes (such as read-only PDF distribution)
	A user should be able to convert Word document to different formats

@ConversionOfStoredDoc
Scenario Outline: Conversion of stored document
	Given I have uploaded document with name <DocName> and subfolder is <SubFolder> to storage
	And I have specified format <DestFormat> document to be converted
	And I have specified document <DocName> with folder <SubFolder> in URL
	When I execute conversion from storage (GET document with format)
	Then document is returned as an attachment
	And attachment's format is <DestFormat>

	Examples: 
	| DocName           | DestFormat | SubFolder 						|
	| TableDocument.doc | pdf        | DocumentActions/ConvertDocument	|
	| test_doc.docx     | pdf        | DocumentActions/ConvertDocument	|
	| test_doc.docx     | png        | DocumentActions/ConvertDocument	|
	| test_doc.docx     | html       | DocumentActions/ConvertDocument	|
	| TableDocument.doc | html       | DocumentActions/ConvertDocument	|
	| TableDocument.doc | txt        | DocumentActions/ConvertDocument	|
	| TableDocument.doc | htmlfixed  | DocumentActions/ConvertDocument	|
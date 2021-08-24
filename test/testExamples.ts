/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="testExamples.ts">
 *   Copyright (c) 2021 Aspose.Words for Cloud
 * </copyright>
 * <summary>
 *   Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the "Software"), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 * 
 *  The above copyright notice and this permission notice shall be included in all
 *  copies or substantial portions of the Software.
 * 
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *  SOFTWARE.
 * </summary>
 * --------------------------------------------------------------------------------
 */

import { expect } from "chai";
import "mocha";

import * as fs from "fs";
import * as model from "../src/model/model";
import * as BaseTest from "./baseTest";

describe("examples", () => {
    expect(fs);

    before(function() {
    });

    describe("exampleAcceptAllRevisions", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            const fileName  = "test_doc.docx";

            // Upload original document to cloud storage.
            let myVar1 = fs.createReadStream(documentsDir + fileName);
            let myVar2 = fileName;
            const uploadFileRequest = new model.UploadFileRequest({
                fileContent: myVar1,
                path: myVar2
            });

            wordsApi.uploadFile(uploadFileRequest)
            .then((uploadFileRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of UploadFileRequest: ", uploadFileRequestResult);
                // Calls AcceptAllRevisions method for document in cloud.
                let myVar3 = fileName;
                const request = new model.AcceptAllRevisionsRequest({
                    name: myVar3
                });

                wordsApi.acceptAllRevisions(request)
                .then((requestResult) => {
                    // tslint:disable-next-line:no-console
                    console.log("Result of Request: ", requestResult);
                });
            });
        });
    });

    describe("exampleAcceptAllRevisionsOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            const acceptRequest = new model.AcceptAllRevisionsOnlineRequest({
                document: requestDocument
            });

            wordsApi.acceptAllRevisionsOnline(acceptRequest)
            .then((acceptRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of acceptRequest: ", acceptRequestResult);
            });
        });
    });

    describe("exampleAppendDocument", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "Sample.docx";

            let requestDocumentListDocumentEntries0 = new model.DocumentEntry({
                href: remoteFileName,
                importFormatMode: "KeepSourceFormatting"
            })
            let requestDocumentListDocumentEntries = [
                requestDocumentListDocumentEntries0
            ]
            let requestDocumentList = new model.DocumentEntryList({
                documentEntries: requestDocumentListDocumentEntries
            })
            const appendRequest = new model.AppendDocumentRequest({
                name: remoteFileName,
                documentList: requestDocumentList
            });

            wordsApi.appendDocument(appendRequest)
            .then((appendRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of appendRequest: ", appendRequestResult);
            });
        });
    });

    describe("exampleAppendDocumentOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            let requestDocumentListDocumentEntries0 = new model.DocumentEntry({
                href: "Sample.docx",
                importFormatMode: "KeepSourceFormatting"
            })
            let requestDocumentListDocumentEntries = [
                requestDocumentListDocumentEntries0
            ]
            let requestDocumentList = new model.DocumentEntryList({
                documentEntries: requestDocumentListDocumentEntries
            })
            const appendRequest = new model.AppendDocumentOnlineRequest({
                document: requestDocument,
                documentList: requestDocumentList
            });

            wordsApi.appendDocumentOnline(appendRequest)
            .then((appendRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of appendRequest: ", appendRequestResult);
            });
        });
    });

    describe("exampleApplyStyleToDocumentElement", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            let requestStyleApply = new model.StyleApply({
                styleName: "Heading 1"
            })
            const applyStyleRequest = new model.ApplyStyleToDocumentElementRequest({
                name: "Sample.docx",
                styleApply: requestStyleApply,
                styledNodePath: "paragraphs/1/paragraphFormat"
            });

            wordsApi.applyStyleToDocumentElement(applyStyleRequest)
            .then((applyStyleRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of applyStyleRequest: ", applyStyleRequestResult);
            });
        });
    });

    describe("exampleApplyStyleToDocumentElementOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            let requestStyleApply = new model.StyleApply({
                styleName: "Heading 1"
            })
            const applyStyleRequest = new model.ApplyStyleToDocumentElementOnlineRequest({
                document: requestDocument,
                styleApply: requestStyleApply,
                styledNodePath: "paragraphs/1/paragraphFormat"
            });

            wordsApi.applyStyleToDocumentElementOnline(applyStyleRequest)
            .then((applyStyleRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of applyStyleRequest: ", applyStyleRequestResult);
            });
        });
    });

    describe("exampleBuildReport", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            let requestReportEngineSettingsReportBuildOptions = [
                model.ReportBuildOptions.AllowMissingMembers,
                model.ReportBuildOptions.RemoveEmptyParagraphs
            ]
            let requestReportEngineSettings = new model.ReportEngineSettings({
                dataSourceType: model.ReportEngineSettings.DataSourceTypeEnum.Json,
                reportBuildOptions: requestReportEngineSettingsReportBuildOptions
            })
            const buildReportRequest = new model.BuildReportRequest({
                name: "Sample.docx",
                data: "Data.json",
                reportEngineSettings: requestReportEngineSettings
            });

            wordsApi.buildReport(buildReportRequest)
            .then((buildReportRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of buildReportRequest: ", buildReportRequestResult);
            });
        });
    });

    describe("exampleBuildReportOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestTemplate = fs.createReadStream(documentsDir + "Sample.docx");
            let requestReportEngineSettings = new model.ReportEngineSettings({
                dataSourceType: model.ReportEngineSettings.DataSourceTypeEnum.Json,
                dataSourceName: "persons"
            })
            const buildReportRequest = new model.BuildReportOnlineRequest({
                template: requestTemplate,
                data: "Data.json",
                reportEngineSettings: requestReportEngineSettings
            });

            wordsApi.buildReportOnline(buildReportRequest)
            .then((buildReportRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of buildReportRequest: ", buildReportRequestResult);
            });
        });
    });

    describe("exampleClassify", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const classifyRequest = new model.ClassifyRequest({
                text: "Try text classification",
                bestClassesCount: "3"
            });

            wordsApi.classify(classifyRequest)
            .then((classifyRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of classifyRequest: ", classifyRequestResult);
            });
        });
    });

    describe("exampleClassifyDocument", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const classifyRequest = new model.ClassifyDocumentRequest({
                name: "Sample.docx",
                bestClassesCount: "3"
            });

            wordsApi.classifyDocument(classifyRequest)
            .then((classifyRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of classifyRequest: ", classifyRequestResult);
            });
        });
    });

    describe("exampleClassifyDocumentOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            const classifyRequest = new model.ClassifyDocumentOnlineRequest({
                document: requestDocument,
                bestClassesCount: "3"
            });

            wordsApi.classifyDocumentOnline(classifyRequest)
            .then((classifyRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of classifyRequest: ", classifyRequestResult);
            });
        });
    });

    describe("exampleCompareDocument", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            let requestCompareData = new model.CompareData({
                author: "author",
                comparingWithDocument: "TestCompareDocument2.doc",
                dateTime: new Date('2015-10-26T00:00:00Z')
            })
            const compareRequest = new model.CompareDocumentRequest({
                name: "TestCompareDocument1.doc",
                compareData: requestCompareData,
                destFileName: "/TestCompareDocumentOut.doc"
            });

            wordsApi.compareDocument(compareRequest)
            .then((compareRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of compareRequest: ", compareRequestResult);
            });
        });
    });

    describe("exampleCompareDocumentOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "compareTestDoc1.doc");
            let requestCompareData = new model.CompareData({
                author: "author",
                comparingWithDocument: "TestCompareDocument2.doc",
                dateTime: new Date('2015-10-26T00:00:00Z')
            })
            let requestComparingDocument = fs.createReadStream(documentsDir + "compareTestDoc2.doc");
            const compareRequest = new model.CompareDocumentOnlineRequest({
                document: requestDocument,
                compareData: requestCompareData,
                comparingDocument: requestComparingDocument,
                destFileName: "/TestCompareDocumentOut.doc"
            });

            wordsApi.compareDocumentOnline(compareRequest)
            .then((compareRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of compareRequest: ", compareRequestResult);
            });
        });
    });

    describe("exampleConvertDocument", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            const convertRequest = new model.ConvertDocumentRequest({
                document: requestDocument,
                format: "pdf"
            });

            wordsApi.convertDocument(convertRequest)
            .then((convertRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of convertRequest: ", convertRequestResult);
            });
        });
    });

    describe("exampleCopyFile", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const copyRequest = new model.CopyFileRequest({
                destPath: "/TestCopyFileDest.docx",
                srcPath: "Sample.docx"
            });

            wordsApi.copyFile(copyRequest)
            .then((copyRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of copyRequest: ", copyRequestResult);
            });
        });
    });

    describe("exampleCopyFolder", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const folderToCopy = "/TestCopyFolder";

            const copyRequest = new model.CopyFolderRequest({
                destPath: folderToCopy + "Dest",
                srcPath: folderToCopy + "Src"
            });

            wordsApi.copyFolder(copyRequest)
            .then((copyRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of copyRequest: ", copyRequestResult);
            });
        });
    });

    describe("exampleCopyStyle", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            let requestStyleCopy = new model.StyleCopy({
                styleName: "Heading 1"
            })
            const copyRequest = new model.CopyStyleRequest({
                name: "Sample.docx",
                styleCopy: requestStyleCopy
            });

            wordsApi.copyStyle(copyRequest)
            .then((copyRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of copyRequest: ", copyRequestResult);
            });
        });
    });

    describe("exampleCopyStyleOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            let requestStyleCopy = new model.StyleCopy({
                styleName: "Heading 1"
            })
            const copyRequest = new model.CopyStyleOnlineRequest({
                document: requestDocument,
                styleCopy: requestStyleCopy
            });

            wordsApi.copyStyleOnline(copyRequest)
            .then((copyRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of copyRequest: ", copyRequestResult);
            });
        });
    });

    describe("exampleCreateDocument", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const createRequest = new model.CreateDocumentRequest({
                fileName: "Sample.docx"
            });

            wordsApi.createDocument(createRequest)
            .then((createRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of createRequest: ", createRequestResult);
            });
        });
    });

    describe("exampleCreateFolder", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const createRequest = new model.CreateFolderRequest({
                path: "/TestCreateFolder"
            });

            wordsApi.createFolder(createRequest)
            .then((createRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of createRequest: ", createRequestResult);
            });
        });
    });

    describe("exampleCreateOrUpdateDocumentProperty", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            let requestProperty = new model.DocumentPropertyCreateOrUpdate({
                value: "Imran Anwar"
            })
            const createRequest = new model.CreateOrUpdateDocumentPropertyRequest({
                name: "Sample.docx",
                propertyName: "AsposeAuthor",
                property: requestProperty
            });

            wordsApi.createOrUpdateDocumentProperty(createRequest)
            .then((createRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of createRequest: ", createRequestResult);
            });
        });
    });

    describe("exampleCreateOrUpdateDocumentPropertyOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            let requestProperty = new model.DocumentPropertyCreateOrUpdate({
                value: "Imran Anwar"
            })
            const createRequest = new model.CreateOrUpdateDocumentPropertyOnlineRequest({
                document: requestDocument,
                propertyName: "AsposeAuthor",
                property: requestProperty
            });

            wordsApi.createOrUpdateDocumentPropertyOnline(createRequest)
            .then((createRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of createRequest: ", createRequestResult);
            });
        });
    });

    describe("exampleDeleteAllParagraphTabStops", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const deleteRequest = new model.DeleteAllParagraphTabStopsRequest({
                name: "Sample.docx",
                index: 0
            });

            wordsApi.deleteAllParagraphTabStops(deleteRequest)
            .then((deleteRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of deleteRequest: ", deleteRequestResult);
            });
        });
    });

    describe("exampleDeleteAllParagraphTabStopsOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            const deleteRequest = new model.DeleteAllParagraphTabStopsOnlineRequest({
                document: requestDocument,
                index: 0
            });

            wordsApi.deleteAllParagraphTabStopsOnline(deleteRequest)
            .then((deleteRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of deleteRequest: ", deleteRequestResult);
            });
        });
    });

    describe("exampleDeleteBorder", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const deleteRequest = new model.DeleteBorderRequest({
                name: "Sample.docx",
                borderType: "left",
                nodePath: "tables/1/rows/0/cells/0"
            });

            wordsApi.deleteBorder(deleteRequest)
            .then((deleteRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of deleteRequest: ", deleteRequestResult);
            });
        });
    });

    describe("exampleDeleteBorderOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            const deleteRequest = new model.DeleteBorderOnlineRequest({
                document: requestDocument,
                borderType: "left",
                nodePath: "tables/1/rows/0/cells/0"
            });

            wordsApi.deleteBorderOnline(deleteRequest)
            .then((deleteRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of deleteRequest: ", deleteRequestResult);
            });
        });
    });

    describe("exampleDeleteBorders", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const deleteRequest = new model.DeleteBordersRequest({
                name: "Sample.docx",
                nodePath: "tables/1/rows/0/cells/0"
            });

            wordsApi.deleteBorders(deleteRequest)
            .then((deleteRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of deleteRequest: ", deleteRequestResult);
            });
        });
    });

    describe("exampleDeleteBordersOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            const deleteRequest = new model.DeleteBordersOnlineRequest({
                document: requestDocument,
                nodePath: "tables/1/rows/0/cells/0"
            });

            wordsApi.deleteBordersOnline(deleteRequest)
            .then((deleteRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of deleteRequest: ", deleteRequestResult);
            });
        });
    });

    describe("exampleDeleteComment", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const deleteRequest = new model.DeleteCommentRequest({
                name: "Sample.docx",
                commentIndex: 0
            });

            wordsApi.deleteComment(deleteRequest)
            .then((deleteRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of deleteRequest: ", deleteRequestResult);
            });
        });
    });

    describe("exampleDeleteCommentOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            const deleteRequest = new model.DeleteCommentOnlineRequest({
                document: requestDocument,
                commentIndex: 0
            });

            wordsApi.deleteCommentOnline(deleteRequest)
            .then((deleteRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of deleteRequest: ", deleteRequestResult);
            });
        });
    });

    describe("exampleDeleteComments", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const deleteRequest = new model.DeleteCommentsRequest({
                name: "Sample.docx"
            });

            wordsApi.deleteComments(deleteRequest)
            .then((deleteRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of deleteRequest: ", deleteRequestResult);
            });
        });
    });

    describe("exampleDeleteCommentsOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            const deleteRequest = new model.DeleteCommentsOnlineRequest({
                document: requestDocument
            });

            wordsApi.deleteCommentsOnline(deleteRequest)
            .then((deleteRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of deleteRequest: ", deleteRequestResult);
            });
        });
    });

    describe("exampleDeleteCustomXmlPart", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const deleteRequest = new model.DeleteCustomXmlPartRequest({
                name: "Sample.docx",
                customXmlPartIndex: 0
            });

            wordsApi.deleteCustomXmlPart(deleteRequest)
            .then((deleteRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of deleteRequest: ", deleteRequestResult);
            });
        });
    });

    describe("exampleDeleteCustomXmlPartOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            const deleteRequest = new model.DeleteCustomXmlPartOnlineRequest({
                document: requestDocument,
                customXmlPartIndex: 0
            });

            wordsApi.deleteCustomXmlPartOnline(deleteRequest)
            .then((deleteRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of deleteRequest: ", deleteRequestResult);
            });
        });
    });

    describe("exampleDeleteCustomXmlParts", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const deleteRequest = new model.DeleteCustomXmlPartsRequest({
                name: "Sample.docx"
            });

            wordsApi.deleteCustomXmlParts(deleteRequest)
            .then((deleteRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of deleteRequest: ", deleteRequestResult);
            });
        });
    });

    describe("exampleDeleteCustomXmlPartsOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            const deleteRequest = new model.DeleteCustomXmlPartsOnlineRequest({
                document: requestDocument
            });

            wordsApi.deleteCustomXmlPartsOnline(deleteRequest)
            .then((deleteRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of deleteRequest: ", deleteRequestResult);
            });
        });
    });

    describe("exampleDeleteDocumentProperty", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const deleteRequest = new model.DeleteDocumentPropertyRequest({
                name: "Sample.docx",
                propertyName: "testProp"
            });

            wordsApi.deleteDocumentProperty(deleteRequest)
            .then((deleteRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of deleteRequest: ", deleteRequestResult);
            });
        });
    });

    describe("exampleDeleteDocumentPropertyOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            const deleteRequest = new model.DeleteDocumentPropertyOnlineRequest({
                document: requestDocument,
                propertyName: "testProp"
            });

            wordsApi.deleteDocumentPropertyOnline(deleteRequest)
            .then((deleteRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of deleteRequest: ", deleteRequestResult);
            });
        });
    });

    describe("exampleDeleteDrawingObject", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const deleteRequest = new model.DeleteDrawingObjectRequest({
                name: "Sample.docx",
                index: 0
            });

            wordsApi.deleteDrawingObject(deleteRequest)
            .then((deleteRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of deleteRequest: ", deleteRequestResult);
            });
        });
    });

    describe("exampleDeleteDrawingObjectOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            const deleteRequest = new model.DeleteDrawingObjectOnlineRequest({
                document: requestDocument,
                index: 0
            });

            wordsApi.deleteDrawingObjectOnline(deleteRequest)
            .then((deleteRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of deleteRequest: ", deleteRequestResult);
            });
        });
    });

    describe("exampleDeleteField", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const deleteRequest = new model.DeleteFieldRequest({
                name: "Sample.docx",
                index: 0
            });

            wordsApi.deleteField(deleteRequest)
            .then((deleteRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of deleteRequest: ", deleteRequestResult);
            });
        });
    });

    describe("exampleDeleteFieldOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            const deleteRequest = new model.DeleteFieldOnlineRequest({
                document: requestDocument,
                index: 0,
                nodePath: "sections/0/paragraphs/0"
            });

            wordsApi.deleteFieldOnline(deleteRequest)
            .then((deleteRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of deleteRequest: ", deleteRequestResult);
            });
        });
    });

    describe("exampleDeleteFields", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const deleteRequest = new model.DeleteFieldsRequest({
                name: "Sample.docx"
            });

            wordsApi.deleteFields(deleteRequest)
            .then((deleteRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of deleteRequest: ", deleteRequestResult);
            });
        });
    });

    describe("exampleDeleteFieldsOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            const deleteRequest = new model.DeleteFieldsOnlineRequest({
                document: requestDocument
            });

            wordsApi.deleteFieldsOnline(deleteRequest)
            .then((deleteRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of deleteRequest: ", deleteRequestResult);
            });
        });
    });

    describe("exampleDeleteFile", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const deleteRequest = new model.DeleteFileRequest({
                path: "Sample.docx"
            });

            wordsApi.deleteFile(deleteRequest)
            .then((deleteRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of deleteRequest: ", deleteRequestResult);
            });
        });
    });

    describe("exampleDeleteFolder", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const deleteRequest = new model.DeleteFolderRequest({
                path: ""
            });

            wordsApi.deleteFolder(deleteRequest)
            .then((deleteRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of deleteRequest: ", deleteRequestResult);
            });
        });
    });

    describe("exampleDeleteFootnote", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const deleteRequest = new model.DeleteFootnoteRequest({
                name: "Sample.docx",
                index: 0
            });

            wordsApi.deleteFootnote(deleteRequest)
            .then((deleteRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of deleteRequest: ", deleteRequestResult);
            });
        });
    });

    describe("exampleDeleteFootnoteOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.doc");
            const deleteRequest = new model.DeleteFootnoteOnlineRequest({
                document: requestDocument,
                index: 0
            });

            wordsApi.deleteFootnoteOnline(deleteRequest)
            .then((deleteRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of deleteRequest: ", deleteRequestResult);
            });
        });
    });

    describe("exampleDeleteFormField", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const deleteRequest = new model.DeleteFormFieldRequest({
                name: "Sample.docx",
                index: 0
            });

            wordsApi.deleteFormField(deleteRequest)
            .then((deleteRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of deleteRequest: ", deleteRequestResult);
            });
        });
    });

    describe("exampleDeleteFormFieldOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            const deleteRequest = new model.DeleteFormFieldOnlineRequest({
                document: requestDocument,
                index: 0,
                nodePath: "sections/0"
            });

            wordsApi.deleteFormFieldOnline(deleteRequest)
            .then((deleteRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of deleteRequest: ", deleteRequestResult);
            });
        });
    });

    describe("exampleDeleteHeaderFooter", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const deleteRequest = new model.DeleteHeaderFooterRequest({
                name: "Sample.docx",
                sectionPath: "",
                index: 0
            });

            wordsApi.deleteHeaderFooter(deleteRequest)
            .then((deleteRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of deleteRequest: ", deleteRequestResult);
            });
        });
    });

    describe("exampleDeleteHeaderFooterOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.doc");
            const deleteRequest = new model.DeleteHeaderFooterOnlineRequest({
                document: requestDocument,
                sectionPath: "",
                index: 0
            });

            wordsApi.deleteHeaderFooterOnline(deleteRequest)
            .then((deleteRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of deleteRequest: ", deleteRequestResult);
            });
        });
    });

    describe("exampleDeleteHeadersFooters", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const deleteRequest = new model.DeleteHeadersFootersRequest({
                name: "Sample.docx",
                sectionPath: ""
            });

            wordsApi.deleteHeadersFooters(deleteRequest)
            .then((deleteRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of deleteRequest: ", deleteRequestResult);
            });
        });
    });

    describe("exampleDeleteHeadersFootersOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.doc");
            const deleteRequest = new model.DeleteHeadersFootersOnlineRequest({
                document: requestDocument,
                sectionPath: ""
            });

            wordsApi.deleteHeadersFootersOnline(deleteRequest)
            .then((deleteRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of deleteRequest: ", deleteRequestResult);
            });
        });
    });

    describe("exampleDeleteMacros", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const deleteRequest = new model.DeleteMacrosRequest({
                name: "Sample.docx"
            });

            wordsApi.deleteMacros(deleteRequest)
            .then((deleteRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of deleteRequest: ", deleteRequestResult);
            });
        });
    });

    describe("exampleDeleteMacrosOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            const deleteRequest = new model.DeleteMacrosOnlineRequest({
                document: requestDocument
            });

            wordsApi.deleteMacrosOnline(deleteRequest)
            .then((deleteRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of deleteRequest: ", deleteRequestResult);
            });
        });
    });

    describe("exampleDeleteOfficeMathObject", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const deleteRequest = new model.DeleteOfficeMathObjectRequest({
                name: "Sample.docx",
                index: 0
            });

            wordsApi.deleteOfficeMathObject(deleteRequest)
            .then((deleteRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of deleteRequest: ", deleteRequestResult);
            });
        });
    });

    describe("exampleDeleteOfficeMathObjectOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            const deleteRequest = new model.DeleteOfficeMathObjectOnlineRequest({
                document: requestDocument,
                index: 0
            });

            wordsApi.deleteOfficeMathObjectOnline(deleteRequest)
            .then((deleteRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of deleteRequest: ", deleteRequestResult);
            });
        });
    });

    describe("exampleDeleteParagraph", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const deleteRequest = new model.DeleteParagraphRequest({
                name: "Sample.docx",
                index: 0
            });

            wordsApi.deleteParagraph(deleteRequest)
            .then((deleteRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of deleteRequest: ", deleteRequestResult);
            });
        });
    });

    describe("exampleDeleteParagraphListFormat", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const deleteRequest = new model.DeleteParagraphListFormatRequest({
                name: "Sample.docx",
                index: 0
            });

            wordsApi.deleteParagraphListFormat(deleteRequest)
            .then((deleteRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of deleteRequest: ", deleteRequestResult);
            });
        });
    });

    describe("exampleDeleteParagraphListFormatOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.doc");
            const deleteRequest = new model.DeleteParagraphListFormatOnlineRequest({
                document: requestDocument,
                index: 0
            });

            wordsApi.deleteParagraphListFormatOnline(deleteRequest)
            .then((deleteRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of deleteRequest: ", deleteRequestResult);
            });
        });
    });

    describe("exampleDeleteParagraphOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            const deleteRequest = new model.DeleteParagraphOnlineRequest({
                document: requestDocument,
                index: 0
            });

            wordsApi.deleteParagraphOnline(deleteRequest)
            .then((deleteRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of deleteRequest: ", deleteRequestResult);
            });
        });
    });

    describe("exampleDeleteParagraphTabStop", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const deleteRequest = new model.DeleteParagraphTabStopRequest({
                name: "Sample.docx",
                position: 72.0,
                index: 0
            });

            wordsApi.deleteParagraphTabStop(deleteRequest)
            .then((deleteRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of deleteRequest: ", deleteRequestResult);
            });
        });
    });

    describe("exampleDeleteParagraphTabStopOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            const deleteRequest = new model.DeleteParagraphTabStopOnlineRequest({
                document: requestDocument,
                position: 72.0,
                index: 0
            });

            wordsApi.deleteParagraphTabStopOnline(deleteRequest)
            .then((deleteRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of deleteRequest: ", deleteRequestResult);
            });
        });
    });

    describe("exampleDeleteRun", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const deleteRequest = new model.DeleteRunRequest({
                name: "Sample.docx",
                paragraphPath: "paragraphs/1",
                index: 0
            });

            wordsApi.deleteRun(deleteRequest)
            .then((deleteRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of deleteRequest: ", deleteRequestResult);
            });
        });
    });

    describe("exampleDeleteRunOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.doc");
            const deleteRequest = new model.DeleteRunOnlineRequest({
                document: requestDocument,
                paragraphPath: "paragraphs/1",
                index: 0
            });

            wordsApi.deleteRunOnline(deleteRequest)
            .then((deleteRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of deleteRequest: ", deleteRequestResult);
            });
        });
    });

    describe("exampleDeleteSection", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const deleteRequest = new model.DeleteSectionRequest({
                name: "Sample.docx",
                sectionIndex: 0
            });

            wordsApi.deleteSection(deleteRequest)
            .then((deleteRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of deleteRequest: ", deleteRequestResult);
            });
        });
    });

    describe("exampleDeleteSectionOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            const deleteRequest = new model.DeleteSectionOnlineRequest({
                document: requestDocument,
                sectionIndex: 0
            });

            wordsApi.deleteSectionOnline(deleteRequest)
            .then((deleteRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of deleteRequest: ", deleteRequestResult);
            });
        });
    });

    describe("exampleDeleteTable", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const deleteRequest = new model.DeleteTableRequest({
                name: "Sample.docx",
                index: 1
            });

            wordsApi.deleteTable(deleteRequest)
            .then((deleteRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of deleteRequest: ", deleteRequestResult);
            });
        });
    });

    describe("exampleDeleteTableCell", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const deleteRequest = new model.DeleteTableCellRequest({
                name: "Sample.docx",
                tableRowPath: "sections/0/tables/2/rows/0",
                index: 0
            });

            wordsApi.deleteTableCell(deleteRequest)
            .then((deleteRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of deleteRequest: ", deleteRequestResult);
            });
        });
    });

    describe("exampleDeleteTableCellOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            const deleteRequest = new model.DeleteTableCellOnlineRequest({
                document: requestDocument,
                tableRowPath: "sections/0/tables/2/rows/0",
                index: 0
            });

            wordsApi.deleteTableCellOnline(deleteRequest)
            .then((deleteRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of deleteRequest: ", deleteRequestResult);
            });
        });
    });

    describe("exampleDeleteTableOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            const deleteRequest = new model.DeleteTableOnlineRequest({
                document: requestDocument,
                index: 1
            });

            wordsApi.deleteTableOnline(deleteRequest)
            .then((deleteRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of deleteRequest: ", deleteRequestResult);
            });
        });
    });

    describe("exampleDeleteTableRow", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const deleteRequest = new model.DeleteTableRowRequest({
                name: "Sample.docx",
                tablePath: "tables/1",
                index: 0
            });

            wordsApi.deleteTableRow(deleteRequest)
            .then((deleteRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of deleteRequest: ", deleteRequestResult);
            });
        });
    });

    describe("exampleDeleteTableRowOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            const deleteRequest = new model.DeleteTableRowOnlineRequest({
                document: requestDocument,
                tablePath: "tables/1",
                index: 0
            });

            wordsApi.deleteTableRowOnline(deleteRequest)
            .then((deleteRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of deleteRequest: ", deleteRequestResult);
            });
        });
    });

    describe("exampleDeleteWatermark", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const deleteRequest = new model.DeleteWatermarkRequest({
                name: "Sample.docx"
            });

            wordsApi.deleteWatermark(deleteRequest)
            .then((deleteRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of deleteRequest: ", deleteRequestResult);
            });
        });
    });

    describe("exampleDeleteWatermarkOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            const deleteRequest = new model.DeleteWatermarkOnlineRequest({
                document: requestDocument
            });

            wordsApi.deleteWatermarkOnline(deleteRequest)
            .then((deleteRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of deleteRequest: ", deleteRequestResult);
            });
        });
    });

    describe("exampleDownloadFile", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const downloadRequest = new model.DownloadFileRequest({
                path: "Sample.docx"
            });

            wordsApi.downloadFile(downloadRequest)
            .then((downloadRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of downloadRequest: ", downloadRequestResult);
            });
        });
    });

    describe("exampleExecuteMailMerge", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const mailMergeRequest = new model.ExecuteMailMergeRequest({
                name: "Sample.docx",
                data: "TestExecuteTemplateData.txt"
            });

            wordsApi.executeMailMerge(mailMergeRequest)
            .then((mailMergeRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of mailMergeRequest: ", mailMergeRequestResult);
            });
        });
    });

    describe("exampleExecuteMailMergeOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestTemplate = fs.createReadStream(documentsDir + "TestExecuteTemplate.doc");
            let requestData = fs.createReadStream(documentsDir + "TestExecuteTemplateData.txt");
            const mailMergeRequest = new model.ExecuteMailMergeOnlineRequest({
                template: requestTemplate,
                data: requestData
            });

            wordsApi.executeMailMergeOnline(mailMergeRequest)
            .then((mailMergeRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of mailMergeRequest: ", mailMergeRequestResult);
            });
        });
    });

    describe("exampleGetAvailableFonts", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.GetAvailableFontsRequest({
            });

            wordsApi.getAvailableFonts(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetBookmarkByName", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.GetBookmarkByNameRequest({
                name: "Sample.docx",
                bookmarkName: "aspose"
            });

            wordsApi.getBookmarkByName(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetBookmarkByNameOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            const request = new model.GetBookmarkByNameOnlineRequest({
                document: requestDocument,
                bookmarkName: "aspose"
            });

            wordsApi.getBookmarkByNameOnline(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetBookmarks", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.GetBookmarksRequest({
                name: "Sample.docx"
            });

            wordsApi.getBookmarks(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetBookmarksOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            const request = new model.GetBookmarksOnlineRequest({
                document: requestDocument
            });

            wordsApi.getBookmarksOnline(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetBorder", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.GetBorderRequest({
                name: "Sample.docx",
                borderType: "left",
                nodePath: "tables/1/rows/0/cells/0"
            });

            wordsApi.getBorder(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetBorderOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            const request = new model.GetBorderOnlineRequest({
                document: requestDocument,
                borderType: "left",
                nodePath: "tables/1/rows/0/cells/0"
            });

            wordsApi.getBorderOnline(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetBorders", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.GetBordersRequest({
                name: "Sample.docx",
                nodePath: "tables/1/rows/0/cells/0"
            });

            wordsApi.getBorders(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetBordersOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            const request = new model.GetBordersOnlineRequest({
                document: requestDocument,
                nodePath: "tables/1/rows/0/cells/0"
            });

            wordsApi.getBordersOnline(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetComment", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.GetCommentRequest({
                name: "Sample.docx",
                commentIndex: 0
            });

            wordsApi.getComment(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetCommentOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            const request = new model.GetCommentOnlineRequest({
                document: requestDocument,
                commentIndex: 0
            });

            wordsApi.getCommentOnline(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetComments", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.GetCommentsRequest({
                name: "Sample.docx"
            });

            wordsApi.getComments(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetCommentsOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            const request = new model.GetCommentsOnlineRequest({
                document: requestDocument
            });

            wordsApi.getCommentsOnline(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetCustomXmlPart", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.GetCustomXmlPartRequest({
                name: "Sample.docx",
                customXmlPartIndex: 0
            });

            wordsApi.getCustomXmlPart(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetCustomXmlPartOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            const request = new model.GetCustomXmlPartOnlineRequest({
                document: requestDocument,
                customXmlPartIndex: 0
            });

            wordsApi.getCustomXmlPartOnline(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetCustomXmlParts", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.GetCustomXmlPartsRequest({
                name: "Sample.docx"
            });

            wordsApi.getCustomXmlParts(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetCustomXmlPartsOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            const request = new model.GetCustomXmlPartsOnlineRequest({
                document: requestDocument
            });

            wordsApi.getCustomXmlPartsOnline(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetDocument", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.GetDocumentRequest({
                documentName: "Sample.docx"
            });

            wordsApi.getDocument(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetDocumentDrawingObjectByIndex", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.GetDocumentDrawingObjectByIndexRequest({
                name: "Sample.docx",
                index: 0
            });

            wordsApi.getDocumentDrawingObjectByIndex(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetDocumentDrawingObjectByIndexOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            const request = new model.GetDocumentDrawingObjectByIndexOnlineRequest({
                document: requestDocument,
                index: 0,
                nodePath: "sections/0"
            });

            wordsApi.getDocumentDrawingObjectByIndexOnline(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetDocumentDrawingObjectImageData", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.GetDocumentDrawingObjectImageDataRequest({
                name: "Sample.docx",
                index: 0
            });

            wordsApi.getDocumentDrawingObjectImageData(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetDocumentDrawingObjectImageDataOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            const request = new model.GetDocumentDrawingObjectImageDataOnlineRequest({
                document: requestDocument,
                index: 0,
                nodePath: "sections/0"
            });

            wordsApi.getDocumentDrawingObjectImageDataOnline(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetDocumentDrawingObjectOleData", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.GetDocumentDrawingObjectOleDataRequest({
                name: "Sample.docx",
                index: 0
            });

            wordsApi.getDocumentDrawingObjectOleData(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetDocumentDrawingObjectOleDataOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            const request = new model.GetDocumentDrawingObjectOleDataOnlineRequest({
                document: requestDocument,
                index: 0,
                nodePath: "sections/0"
            });

            wordsApi.getDocumentDrawingObjectOleDataOnline(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetDocumentDrawingObjects", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.GetDocumentDrawingObjectsRequest({
                name: "Sample.docx"
            });

            wordsApi.getDocumentDrawingObjects(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetDocumentDrawingObjectsOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            const request = new model.GetDocumentDrawingObjectsOnlineRequest({
                document: requestDocument,
                nodePath: "sections/0"
            });

            wordsApi.getDocumentDrawingObjectsOnline(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetDocumentFieldNames", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.GetDocumentFieldNamesRequest({
                name: "Sample.docx"
            });

            wordsApi.getDocumentFieldNames(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetDocumentFieldNamesOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestTemplate = fs.createReadStream(documentsDir + "Sample.docx");
            const request = new model.GetDocumentFieldNamesOnlineRequest({
                template: requestTemplate,
                useNonMergeFields: true
            });

            wordsApi.getDocumentFieldNamesOnline(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetDocumentHyperlinkByIndex", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.GetDocumentHyperlinkByIndexRequest({
                name: "Sample.docx",
                hyperlinkIndex: 0
            });

            wordsApi.getDocumentHyperlinkByIndex(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetDocumentHyperlinkByIndexOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            const request = new model.GetDocumentHyperlinkByIndexOnlineRequest({
                document: requestDocument,
                hyperlinkIndex: 0
            });

            wordsApi.getDocumentHyperlinkByIndexOnline(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetDocumentHyperlinks", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.GetDocumentHyperlinksRequest({
                name: "Sample.docx"
            });

            wordsApi.getDocumentHyperlinks(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetDocumentHyperlinksOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            const request = new model.GetDocumentHyperlinksOnlineRequest({
                document: requestDocument
            });

            wordsApi.getDocumentHyperlinksOnline(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetDocumentProperties", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.GetDocumentPropertiesRequest({
                name: "Sample.docx"
            });

            wordsApi.getDocumentProperties(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetDocumentPropertiesOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            const request = new model.GetDocumentPropertiesOnlineRequest({
                document: requestDocument
            });

            wordsApi.getDocumentPropertiesOnline(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetDocumentProperty", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.GetDocumentPropertyRequest({
                name: "Sample.docx",
                propertyName: "Author"
            });

            wordsApi.getDocumentProperty(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetDocumentPropertyOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            const request = new model.GetDocumentPropertyOnlineRequest({
                document: requestDocument,
                propertyName: "Author"
            });

            wordsApi.getDocumentPropertyOnline(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetDocumentProtection", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.GetDocumentProtectionRequest({
                name: "Sample.docx"
            });

            wordsApi.getDocumentProtection(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetDocumentProtectionOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            const request = new model.GetDocumentProtectionOnlineRequest({
                document: requestDocument
            });

            wordsApi.getDocumentProtectionOnline(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetDocumentStatistics", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.GetDocumentStatisticsRequest({
                name: "Sample.docx"
            });

            wordsApi.getDocumentStatistics(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetDocumentStatisticsOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            const request = new model.GetDocumentStatisticsOnlineRequest({
                document: requestDocument
            });

            wordsApi.getDocumentStatisticsOnline(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetDocumentWithFormat", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.GetDocumentWithFormatRequest({
                name: "Sample.docx",
                format: "text",
                outPath: "/TestGetDocumentWithFormatAndOutPath.text"
            });

            wordsApi.getDocumentWithFormat(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetField", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.GetFieldRequest({
                name: "Sample.docx",
                index: 0
            });

            wordsApi.getField(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetFieldOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            const request = new model.GetFieldOnlineRequest({
                document: requestDocument,
                index: 0,
                nodePath: "sections/0/paragraphs/0"
            });

            wordsApi.getFieldOnline(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetFields", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.GetFieldsRequest({
                name: "Sample.docx"
            });

            wordsApi.getFields(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetFieldsOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            const request = new model.GetFieldsOnlineRequest({
                document: requestDocument,
                nodePath: "sections/0"
            });

            wordsApi.getFieldsOnline(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetFilesList", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.GetFilesListRequest({
                path: ""
            });

            wordsApi.getFilesList(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetFootnote", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.GetFootnoteRequest({
                name: "Sample.docx",
                index: 0
            });

            wordsApi.getFootnote(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetFootnoteOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.doc");
            const request = new model.GetFootnoteOnlineRequest({
                document: requestDocument,
                index: 0
            });

            wordsApi.getFootnoteOnline(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetFootnotes", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.GetFootnotesRequest({
                name: "Sample.docx"
            });

            wordsApi.getFootnotes(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetFootnotesOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.doc");
            const request = new model.GetFootnotesOnlineRequest({
                document: requestDocument
            });

            wordsApi.getFootnotesOnline(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetFormField", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.GetFormFieldRequest({
                name: "Sample.docx",
                index: 0
            });

            wordsApi.getFormField(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetFormFieldOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            const request = new model.GetFormFieldOnlineRequest({
                document: requestDocument,
                index: 0,
                nodePath: "sections/0"
            });

            wordsApi.getFormFieldOnline(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetFormFields", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.GetFormFieldsRequest({
                name: "Sample.docx"
            });

            wordsApi.getFormFields(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetFormFieldsOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            const request = new model.GetFormFieldsOnlineRequest({
                document: requestDocument,
                nodePath: "sections/0"
            });

            wordsApi.getFormFieldsOnline(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetHeaderFooter", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.GetHeaderFooterRequest({
                name: "Sample.docx",
                headerFooterIndex: 0
            });

            wordsApi.getHeaderFooter(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetHeaderFooterOfSection", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.GetHeaderFooterOfSectionRequest({
                name: "Sample.docx",
                headerFooterIndex: 0,
                sectionIndex: 0
            });

            wordsApi.getHeaderFooterOfSection(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetHeaderFooterOfSectionOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.doc");
            const request = new model.GetHeaderFooterOfSectionOnlineRequest({
                document: requestDocument,
                headerFooterIndex: 0,
                sectionIndex: 0
            });

            wordsApi.getHeaderFooterOfSectionOnline(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetHeaderFooterOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.doc");
            const request = new model.GetHeaderFooterOnlineRequest({
                document: requestDocument,
                headerFooterIndex: 0
            });

            wordsApi.getHeaderFooterOnline(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetHeaderFooters", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.GetHeaderFootersRequest({
                name: "Sample.docx",
                sectionPath: ""
            });

            wordsApi.getHeaderFooters(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetHeaderFootersOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.doc");
            const request = new model.GetHeaderFootersOnlineRequest({
                document: requestDocument,
                sectionPath: ""
            });

            wordsApi.getHeaderFootersOnline(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetList", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.GetListRequest({
                name: "TestGetLists.doc",
                listId: 1
            });

            wordsApi.getList(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetListOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.doc");
            const request = new model.GetListOnlineRequest({
                document: requestDocument,
                listId: 1
            });

            wordsApi.getListOnline(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetLists", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.GetListsRequest({
                name: "TestGetLists.doc"
            });

            wordsApi.getLists(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetListsOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.doc");
            const request = new model.GetListsOnlineRequest({
                document: requestDocument
            });

            wordsApi.getListsOnline(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetOfficeMathObject", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.GetOfficeMathObjectRequest({
                name: "Sample.docx",
                index: 0
            });

            wordsApi.getOfficeMathObject(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetOfficeMathObjectOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            const request = new model.GetOfficeMathObjectOnlineRequest({
                document: requestDocument,
                index: 0
            });

            wordsApi.getOfficeMathObjectOnline(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetOfficeMathObjects", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.GetOfficeMathObjectsRequest({
                name: "Sample.docx"
            });

            wordsApi.getOfficeMathObjects(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetOfficeMathObjectsOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            const request = new model.GetOfficeMathObjectsOnlineRequest({
                document: requestDocument
            });

            wordsApi.getOfficeMathObjectsOnline(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetParagraph", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.GetParagraphRequest({
                name: "Sample.docx",
                index: 0
            });

            wordsApi.getParagraph(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetParagraphFormat", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.GetParagraphFormatRequest({
                name: "Sample.docx",
                index: 0
            });

            wordsApi.getParagraphFormat(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetParagraphFormatOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            const request = new model.GetParagraphFormatOnlineRequest({
                document: requestDocument,
                index: 0
            });

            wordsApi.getParagraphFormatOnline(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetParagraphListFormat", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.GetParagraphListFormatRequest({
                name: "Sample.docx",
                index: 0
            });

            wordsApi.getParagraphListFormat(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetParagraphListFormatOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.doc");
            const request = new model.GetParagraphListFormatOnlineRequest({
                document: requestDocument,
                index: 0
            });

            wordsApi.getParagraphListFormatOnline(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetParagraphOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            const request = new model.GetParagraphOnlineRequest({
                document: requestDocument,
                index: 0,
                nodePath: "sections/0"
            });

            wordsApi.getParagraphOnline(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetParagraphs", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.GetParagraphsRequest({
                name: "Sample.docx"
            });

            wordsApi.getParagraphs(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetParagraphsOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            const request = new model.GetParagraphsOnlineRequest({
                document: requestDocument,
                nodePath: "sections/0"
            });

            wordsApi.getParagraphsOnline(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetParagraphTabStops", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.GetParagraphTabStopsRequest({
                name: "Sample.docx",
                index: 0
            });

            wordsApi.getParagraphTabStops(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetParagraphTabStopsOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            const request = new model.GetParagraphTabStopsOnlineRequest({
                document: requestDocument,
                index: 0
            });

            wordsApi.getParagraphTabStopsOnline(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetPublicKey", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.GetPublicKeyRequest({
            });

            wordsApi.getPublicKey(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetRangeText", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.GetRangeTextRequest({
                name: "Sample.docx",
                rangeStartIdentifier: "id0.0.0",
                rangeEndIdentifier: "id0.0.1"
            });

            wordsApi.getRangeText(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetRangeTextOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.doc");
            const request = new model.GetRangeTextOnlineRequest({
                document: requestDocument,
                rangeStartIdentifier: "id0.0.0",
                rangeEndIdentifier: "id0.0.1"
            });

            wordsApi.getRangeTextOnline(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetRun", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.GetRunRequest({
                name: "Sample.docx",
                paragraphPath: "paragraphs/0",
                index: 0
            });

            wordsApi.getRun(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetRunFont", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.GetRunFontRequest({
                name: "Sample.docx",
                paragraphPath: "paragraphs/0",
                index: 0
            });

            wordsApi.getRunFont(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetRunFontOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            const request = new model.GetRunFontOnlineRequest({
                document: requestDocument,
                paragraphPath: "paragraphs/0",
                index: 0
            });

            wordsApi.getRunFontOnline(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetRunOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            const request = new model.GetRunOnlineRequest({
                document: requestDocument,
                paragraphPath: "paragraphs/0",
                index: 0
            });

            wordsApi.getRunOnline(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetRuns", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.GetRunsRequest({
                name: "Sample.docx",
                paragraphPath: "sections/0/paragraphs/0"
            });

            wordsApi.getRuns(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetRunsOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            const request = new model.GetRunsOnlineRequest({
                document: requestDocument,
                paragraphPath: "sections/0/paragraphs/0"
            });

            wordsApi.getRunsOnline(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetSection", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.GetSectionRequest({
                name: "Sample.docx",
                sectionIndex: 0
            });

            wordsApi.getSection(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetSectionOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            const request = new model.GetSectionOnlineRequest({
                document: requestDocument,
                sectionIndex: 0
            });

            wordsApi.getSectionOnline(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetSectionPageSetup", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.GetSectionPageSetupRequest({
                name: "Sample.docx",
                sectionIndex: 0
            });

            wordsApi.getSectionPageSetup(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetSectionPageSetupOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            const request = new model.GetSectionPageSetupOnlineRequest({
                document: requestDocument,
                sectionIndex: 0
            });

            wordsApi.getSectionPageSetupOnline(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetSections", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.GetSectionsRequest({
                name: "Sample.docx"
            });

            wordsApi.getSections(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetSectionsOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            const request = new model.GetSectionsOnlineRequest({
                document: requestDocument
            });

            wordsApi.getSectionsOnline(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetStyle", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.GetStyleRequest({
                name: "Sample.docx",
                styleName: "Heading 1"
            });

            wordsApi.getStyle(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetStyleFromDocumentElement", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.GetStyleFromDocumentElementRequest({
                name: "Sample.docx",
                styledNodePath: "paragraphs/1/paragraphFormat"
            });

            wordsApi.getStyleFromDocumentElement(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetStyleFromDocumentElementOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            const request = new model.GetStyleFromDocumentElementOnlineRequest({
                document: requestDocument,
                styledNodePath: "paragraphs/1/paragraphFormat"
            });

            wordsApi.getStyleFromDocumentElementOnline(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetStyleOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            const request = new model.GetStyleOnlineRequest({
                document: requestDocument,
                styleName: "Heading 1"
            });

            wordsApi.getStyleOnline(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetStyles", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.GetStylesRequest({
                name: "Sample.docx"
            });

            wordsApi.getStyles(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetStylesOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            const request = new model.GetStylesOnlineRequest({
                document: requestDocument
            });

            wordsApi.getStylesOnline(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetTable", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.GetTableRequest({
                name: "Sample.docx",
                index: 1
            });

            wordsApi.getTable(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetTableCell", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.GetTableCellRequest({
                name: "Sample.docx",
                tableRowPath: "sections/0/tables/2/rows/0",
                index: 0
            });

            wordsApi.getTableCell(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetTableCellFormat", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.GetTableCellFormatRequest({
                name: "Sample.docx",
                tableRowPath: "sections/0/tables/2/rows/0",
                index: 0
            });

            wordsApi.getTableCellFormat(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetTableCellFormatOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            const request = new model.GetTableCellFormatOnlineRequest({
                document: requestDocument,
                tableRowPath: "sections/0/tables/2/rows/0",
                index: 0
            });

            wordsApi.getTableCellFormatOnline(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetTableCellOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            const request = new model.GetTableCellOnlineRequest({
                document: requestDocument,
                tableRowPath: "sections/0/tables/2/rows/0",
                index: 0
            });

            wordsApi.getTableCellOnline(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetTableOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            const request = new model.GetTableOnlineRequest({
                document: requestDocument,
                index: 1
            });

            wordsApi.getTableOnline(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetTableProperties", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.GetTablePropertiesRequest({
                name: "Sample.docx",
                index: 1
            });

            wordsApi.getTableProperties(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetTablePropertiesOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            const request = new model.GetTablePropertiesOnlineRequest({
                document: requestDocument,
                index: 1
            });

            wordsApi.getTablePropertiesOnline(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetTableRow", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.GetTableRowRequest({
                name: "Sample.docx",
                tablePath: "tables/1",
                index: 0
            });

            wordsApi.getTableRow(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetTableRowFormat", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.GetTableRowFormatRequest({
                name: "Sample.docx",
                tablePath: "sections/0/tables/2",
                index: 0
            });

            wordsApi.getTableRowFormat(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetTableRowFormatOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            const request = new model.GetTableRowFormatOnlineRequest({
                document: requestDocument,
                tablePath: "sections/0/tables/2",
                index: 0
            });

            wordsApi.getTableRowFormatOnline(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetTableRowOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            const request = new model.GetTableRowOnlineRequest({
                document: requestDocument,
                tablePath: "tables/1",
                index: 0
            });

            wordsApi.getTableRowOnline(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetTables", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.GetTablesRequest({
                name: "Sample.docx"
            });

            wordsApi.getTables(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleGetTablesOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            const request = new model.GetTablesOnlineRequest({
                document: requestDocument
            });

            wordsApi.getTablesOnline(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleInsertComment", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            let requestCommentRangeStartNode = new model.NodeLink({
                nodeId: "0.3.0.3"
            })
            let requestCommentRangeStart = new model.DocumentPosition({
                node: requestCommentRangeStartNode,
                offset: 0
            })
            let requestCommentRangeEndNode = new model.NodeLink({
                nodeId: "0.3.0.3"
            })
            let requestCommentRangeEnd = new model.DocumentPosition({
                node: requestCommentRangeEndNode,
                offset: 0
            })
            let requestComment = new model.CommentInsert({
                rangeStart: requestCommentRangeStart,
                rangeEnd: requestCommentRangeEnd,
                initial: "IA",
                author: "Imran Anwar",
                text: "A new Comment"
            })
            const insertRequest = new model.InsertCommentRequest({
                name: "Sample.docx",
                comment: requestComment
            });

            wordsApi.insertComment(insertRequest)
            .then((insertRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of insertRequest: ", insertRequestResult);
            });
        });
    });

    describe("exampleInsertCommentOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            let requestCommentRangeStartNode = new model.NodeLink({
                nodeId: "0.3.0.3"
            })
            let requestCommentRangeStart = new model.DocumentPosition({
                node: requestCommentRangeStartNode,
                offset: 0
            })
            let requestCommentRangeEndNode = new model.NodeLink({
                nodeId: "0.3.0.3"
            })
            let requestCommentRangeEnd = new model.DocumentPosition({
                node: requestCommentRangeEndNode,
                offset: 0
            })
            let requestComment = new model.CommentInsert({
                rangeStart: requestCommentRangeStart,
                rangeEnd: requestCommentRangeEnd,
                initial: "IA",
                author: "Imran Anwar",
                text: "A new Comment"
            })
            const insertRequest = new model.InsertCommentOnlineRequest({
                document: requestDocument,
                comment: requestComment
            });

            wordsApi.insertCommentOnline(insertRequest)
            .then((insertRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of insertRequest: ", insertRequestResult);
            });
        });
    });

    describe("exampleInsertCustomXmlPart", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            let requestCustomXmlPart = new model.CustomXmlPartInsert({
                id: "hello",
                data: "<data>Hello world</data>"
            })
            const insertRequest = new model.InsertCustomXmlPartRequest({
                name: "Sample.docx",
                customXmlPart: requestCustomXmlPart
            });

            wordsApi.insertCustomXmlPart(insertRequest)
            .then((insertRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of insertRequest: ", insertRequestResult);
            });
        });
    });

    describe("exampleInsertCustomXmlPartOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            let requestCustomXmlPart = new model.CustomXmlPartInsert({
                id: "hello",
                data: "<data>Hello world</data>"
            })
            const insertRequest = new model.InsertCustomXmlPartOnlineRequest({
                document: requestDocument,
                customXmlPart: requestCustomXmlPart
            });

            wordsApi.insertCustomXmlPartOnline(insertRequest)
            .then((insertRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of insertRequest: ", insertRequestResult);
            });
        });
    });

    describe("exampleInsertDrawingObject", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDrawingObject = new model.DrawingObjectInsert({
                height: 0,
                left: 0,
                top: 0,
                width: 0,
                relativeHorizontalPosition: model.DrawingObjectInsert.RelativeHorizontalPositionEnum.Margin,
                relativeVerticalPosition: model.DrawingObjectInsert.RelativeVerticalPositionEnum.Margin,
                wrapType: model.DrawingObjectInsert.WrapTypeEnum.Inline
            })
            let requestImageFile = fs.createReadStream(documentsDir + "Common/aspose-cloud.png");
            const insertRequest = new model.InsertDrawingObjectRequest({
                name: "Sample.docx",
                drawingObject: requestDrawingObject,
                imageFile: requestImageFile
            });

            wordsApi.insertDrawingObject(insertRequest)
            .then((insertRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of insertRequest: ", insertRequestResult);
            });
        });
    });

    describe("exampleInsertDrawingObjectOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            let requestDrawingObject = new model.DrawingObjectInsert({
                height: 0,
                left: 0,
                top: 0,
                width: 0,
                relativeHorizontalPosition: model.DrawingObjectInsert.RelativeHorizontalPositionEnum.Margin,
                relativeVerticalPosition: model.DrawingObjectInsert.RelativeVerticalPositionEnum.Margin,
                wrapType: model.DrawingObjectInsert.WrapTypeEnum.Inline
            })
            let requestImageFile = fs.createReadStream(documentsDir + "Common/aspose-cloud.png");
            const insertRequest = new model.InsertDrawingObjectOnlineRequest({
                document: requestDocument,
                drawingObject: requestDrawingObject,
                imageFile: requestImageFile
            });

            wordsApi.insertDrawingObjectOnline(insertRequest)
            .then((insertRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of insertRequest: ", insertRequestResult);
            });
        });
    });

    describe("exampleInsertField", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            let requestField = new model.FieldInsert({
                fieldCode: "{ NUMPAGES }"
            })
            const insertRequest = new model.InsertFieldRequest({
                name: "Sample.docx",
                field: requestField
            });

            wordsApi.insertField(insertRequest)
            .then((insertRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of insertRequest: ", insertRequestResult);
            });
        });
    });

    describe("exampleInsertFieldOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            let requestField = new model.FieldInsert({
                fieldCode: "{ NUMPAGES }"
            })
            const insertRequest = new model.InsertFieldOnlineRequest({
                document: requestDocument,
                field: requestField,
                nodePath: "sections/0/paragraphs/0"
            });

            wordsApi.insertFieldOnline(insertRequest)
            .then((insertRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of insertRequest: ", insertRequestResult);
            });
        });
    });

    describe("exampleInsertFootnote", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            let requestFootnoteDto = new model.FootnoteInsert({
                footnoteType: model.FootnoteInsert.FootnoteTypeEnum.Endnote,
                text: "test endnote"
            })
            const insertRequest = new model.InsertFootnoteRequest({
                name: "Sample.docx",
                footnoteDto: requestFootnoteDto
            });

            wordsApi.insertFootnote(insertRequest)
            .then((insertRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of insertRequest: ", insertRequestResult);
            });
        });
    });

    describe("exampleInsertFootnoteOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.doc");
            let requestFootnoteDto = new model.FootnoteInsert({
                footnoteType: model.FootnoteInsert.FootnoteTypeEnum.Endnote,
                text: "test endnote"
            })
            const insertRequest = new model.InsertFootnoteOnlineRequest({
                document: requestDocument,
                footnoteDto: requestFootnoteDto
            });

            wordsApi.insertFootnoteOnline(insertRequest)
            .then((insertRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of insertRequest: ", insertRequestResult);
            });
        });
    });

    describe("exampleInsertFormField", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            let requestFormField = new model.FormFieldTextInput({
                name: "FullName",
                enabled: true,
                calculateOnExit: true,
                statusText: "",
                textInputType: model.FormFieldTextInput.TextInputTypeEnum.Regular,
                textInputDefault: "123",
                textInputFormat: "UPPERCASE"
            })
            const insertRequest = new model.InsertFormFieldRequest({
                name: "Sample.docx",
                formField: requestFormField
            });

            wordsApi.insertFormField(insertRequest)
            .then((insertRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of insertRequest: ", insertRequestResult);
            });
        });
    });

    describe("exampleInsertFormFieldOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            let requestFormField = new model.FormFieldTextInput({
                name: "FullName",
                enabled: true,
                calculateOnExit: true,
                statusText: "",
                textInputType: model.FormFieldTextInput.TextInputTypeEnum.Regular,
                textInputDefault: "123",
                textInputFormat: "UPPERCASE"
            })
            const insertRequest = new model.InsertFormFieldOnlineRequest({
                document: requestDocument,
                formField: requestFormField,
                nodePath: "sections/0/paragraphs/0"
            });

            wordsApi.insertFormFieldOnline(insertRequest)
            .then((insertRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of insertRequest: ", insertRequestResult);
            });
        });
    });

    describe("exampleInsertHeaderFooter", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const insertRequest = new model.InsertHeaderFooterRequest({
                name: "Sample.docx",
                sectionPath: "",
                headerFooterType: "FooterEven"
            });

            wordsApi.insertHeaderFooter(insertRequest)
            .then((insertRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of insertRequest: ", insertRequestResult);
            });
        });
    });

    describe("exampleInsertHeaderFooterOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.doc");
            const insertRequest = new model.InsertHeaderFooterOnlineRequest({
                document: requestDocument,
                sectionPath: "",
                headerFooterType: "FooterEven"
            });

            wordsApi.insertHeaderFooterOnline(insertRequest)
            .then((insertRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of insertRequest: ", insertRequestResult);
            });
        });
    });

    describe("exampleInsertList", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            let requestListInsert = new model.ListInsert({
                template: model.ListInsert.TemplateEnum.OutlineLegal
            })
            const insertRequest = new model.InsertListRequest({
                name: "TestGetLists.doc",
                listInsert: requestListInsert
            });

            wordsApi.insertList(insertRequest)
            .then((insertRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of insertRequest: ", insertRequestResult);
            });
        });
    });

    describe("exampleInsertListOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.doc");
            let requestListInsert = new model.ListInsert({
                template: model.ListInsert.TemplateEnum.OutlineLegal
            })
            const insertRequest = new model.InsertListOnlineRequest({
                document: requestDocument,
                listInsert: requestListInsert
            });

            wordsApi.insertListOnline(insertRequest)
            .then((insertRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of insertRequest: ", insertRequestResult);
            });
        });
    });

    describe("exampleInsertOrUpdateParagraphTabStop", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            let requestTabStopInsertDto = new model.TabStopInsert({
                alignment: model.TabStopInsert.AlignmentEnum.Left,
                leader: model.TabStopInsert.LeaderEnum.None,
                position: 100.0
            })
            const insertRequest = new model.InsertOrUpdateParagraphTabStopRequest({
                name: "Sample.docx",
                index: 0,
                tabStopInsertDto: requestTabStopInsertDto
            });

            wordsApi.insertOrUpdateParagraphTabStop(insertRequest)
            .then((insertRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of insertRequest: ", insertRequestResult);
            });
        });
    });

    describe("exampleInsertOrUpdateParagraphTabStopOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            let requestTabStopInsertDto = new model.TabStopInsert({
                alignment: model.TabStopInsert.AlignmentEnum.Left,
                leader: model.TabStopInsert.LeaderEnum.None,
                position: 72
            })
            const insertRequest = new model.InsertOrUpdateParagraphTabStopOnlineRequest({
                document: requestDocument,
                tabStopInsertDto: requestTabStopInsertDto,
                index: 0
            });

            wordsApi.insertOrUpdateParagraphTabStopOnline(insertRequest)
            .then((insertRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of insertRequest: ", insertRequestResult);
            });
        });
    });

    describe("exampleInsertPageNumbers", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            let requestPageNumber = new model.PageNumber({
                alignment: "center",
                format: "{PAGE} of {NUMPAGES}"
            })
            const insertRequest = new model.InsertPageNumbersRequest({
                name: "Sample.docx",
                pageNumber: requestPageNumber
            });

            wordsApi.insertPageNumbers(insertRequest)
            .then((insertRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of insertRequest: ", insertRequestResult);
            });
        });
    });

    describe("exampleInsertPageNumbersOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Common/Sample.docx");
            let requestPageNumber = new model.PageNumber({
                alignment: "center",
                format: "{PAGE} of {NUMPAGES}"
            })
            const insertRequest = new model.InsertPageNumbersOnlineRequest({
                document: requestDocument,
                pageNumber: requestPageNumber
            });

            wordsApi.insertPageNumbersOnline(insertRequest)
            .then((insertRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of insertRequest: ", insertRequestResult);
            });
        });
    });

    describe("exampleInsertParagraph", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            let requestParagraph = new model.ParagraphInsert({
                text: "This is a new paragraph for your document"
            })
            const insertRequest = new model.InsertParagraphRequest({
                name: "Sample.docx",
                paragraph: requestParagraph
            });

            wordsApi.insertParagraph(insertRequest)
            .then((insertRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of insertRequest: ", insertRequestResult);
            });
        });
    });

    describe("exampleInsertParagraphOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            let requestParagraph = new model.ParagraphInsert({
                text: "This is a new paragraph for your document"
            })
            const insertRequest = new model.InsertParagraphOnlineRequest({
                document: requestDocument,
                paragraph: requestParagraph,
                nodePath: "sections/0"
            });

            wordsApi.insertParagraphOnline(insertRequest)
            .then((insertRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of insertRequest: ", insertRequestResult);
            });
        });
    });

    describe("exampleInsertRun", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            let requestRun = new model.RunInsert({
                text: "run with text"
            })
            const insertRequest = new model.InsertRunRequest({
                name: "Sample.docx",
                paragraphPath: "paragraphs/1",
                run: requestRun
            });

            wordsApi.insertRun(insertRequest)
            .then((insertRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of insertRequest: ", insertRequestResult);
            });
        });
    });

    describe("exampleInsertRunOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.doc");
            let requestRun = new model.RunInsert({
                text: "run with text"
            })
            const insertRequest = new model.InsertRunOnlineRequest({
                document: requestDocument,
                paragraphPath: "paragraphs/1",
                run: requestRun
            });

            wordsApi.insertRunOnline(insertRequest)
            .then((insertRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of insertRequest: ", insertRequestResult);
            });
        });
    });

    describe("exampleInsertStyle", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            let requestStyleInsert = new model.StyleInsert({
                styleName: "My Style",
                styleType: model.StyleInsert.StyleTypeEnum.Paragraph
            })
            const insertRequest = new model.InsertStyleRequest({
                name: "Sample.docx",
                styleInsert: requestStyleInsert
            });

            wordsApi.insertStyle(insertRequest)
            .then((insertRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of insertRequest: ", insertRequestResult);
            });
        });
    });

    describe("exampleInsertStyleOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            let requestStyleInsert = new model.StyleInsert({
                styleName: "My Style",
                styleType: model.StyleInsert.StyleTypeEnum.Paragraph
            })
            const insertRequest = new model.InsertStyleOnlineRequest({
                document: requestDocument,
                styleInsert: requestStyleInsert
            });

            wordsApi.insertStyleOnline(insertRequest)
            .then((insertRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of insertRequest: ", insertRequestResult);
            });
        });
    });

    describe("exampleInsertTable", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            let requestTable = new model.TableInsert({
                columnsCount: 5,
                rowsCount: 4
            })
            const insertRequest = new model.InsertTableRequest({
                name: "Sample.docx",
                table: requestTable
            });

            wordsApi.insertTable(insertRequest)
            .then((insertRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of insertRequest: ", insertRequestResult);
            });
        });
    });

    describe("exampleInsertTableCell", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            let requestCell = new model.TableCellInsert({
            })
            const insertRequest = new model.InsertTableCellRequest({
                name: "Sample.docx",
                cell: requestCell,
                tableRowPath: "sections/0/tables/2/rows/0"
            });

            wordsApi.insertTableCell(insertRequest)
            .then((insertRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of insertRequest: ", insertRequestResult);
            });
        });
    });

    describe("exampleInsertTableCellOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            let requestCell = new model.TableCellInsert({
            })
            const insertRequest = new model.InsertTableCellOnlineRequest({
                document: requestDocument,
                cell: requestCell,
                tableRowPath: "sections/0/tables/2/rows/0"
            });

            wordsApi.insertTableCellOnline(insertRequest)
            .then((insertRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of insertRequest: ", insertRequestResult);
            });
        });
    });

    describe("exampleInsertTableOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            let requestTable = new model.TableInsert({
                columnsCount: 5,
                rowsCount: 4
            })
            const insertRequest = new model.InsertTableOnlineRequest({
                document: requestDocument,
                table: requestTable
            });

            wordsApi.insertTableOnline(insertRequest)
            .then((insertRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of insertRequest: ", insertRequestResult);
            });
        });
    });

    describe("exampleInsertTableRow", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            let requestRow = new model.TableRowInsert({
                columnsCount: 5
            })
            const insertRequest = new model.InsertTableRowRequest({
                name: "Sample.docx",
                row: requestRow,
                tablePath: "sections/0/tables/2"
            });

            wordsApi.insertTableRow(insertRequest)
            .then((insertRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of insertRequest: ", insertRequestResult);
            });
        });
    });

    describe("exampleInsertTableRowOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            let requestRow = new model.TableRowInsert({
                columnsCount: 5
            })
            const insertRequest = new model.InsertTableRowOnlineRequest({
                document: requestDocument,
                row: requestRow,
                tablePath: "sections/0/tables/2"
            });

            wordsApi.insertTableRowOnline(insertRequest)
            .then((insertRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of insertRequest: ", insertRequestResult);
            });
        });
    });

    describe("exampleInsertWatermarkImage", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            const insertRequest = new model.InsertWatermarkImageRequest({
                name: "Sample.docx",
                imageFile: undefined,
                image: "Sample.png"
            });

            wordsApi.insertWatermarkImage(insertRequest)
            .then((insertRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of insertRequest: ", insertRequestResult);
            });
        });
    });

    describe("exampleInsertWatermarkImageOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            let requestImageFile = fs.createReadStream(documentsDir + "Common/aspose-cloud.png");
            const insertRequest = new model.InsertWatermarkImageOnlineRequest({
                document: requestDocument,
                imageFile: requestImageFile
            });

            wordsApi.insertWatermarkImageOnline(insertRequest)
            .then((insertRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of insertRequest: ", insertRequestResult);
            });
        });
    });

    describe("exampleInsertWatermarkText", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            let requestWatermarkText = new model.WatermarkText({
                text: "This is the text",
                rotationAngle: 90.0
            })
            const insertRequest = new model.InsertWatermarkTextRequest({
                name: "Sample.docx",
                watermarkText: requestWatermarkText
            });

            wordsApi.insertWatermarkText(insertRequest)
            .then((insertRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of insertRequest: ", insertRequestResult);
            });
        });
    });

    describe("exampleInsertWatermarkTextOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            let requestWatermarkText = new model.WatermarkText({
                text: "This is the text",
                rotationAngle: 90
            })
            const insertRequest = new model.InsertWatermarkTextOnlineRequest({
                document: requestDocument,
                watermarkText: requestWatermarkText
            });

            wordsApi.insertWatermarkTextOnline(insertRequest)
            .then((insertRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of insertRequest: ", insertRequestResult);
            });
        });
    });

    describe("exampleLoadWebDocument", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            let requestDataSaveOptions = new model.SaveOptionsData({
                fileName: "google.doc",
                saveFormat: "doc",
                dmlEffectsRenderingMode: "1",
                dmlRenderingMode: "1",
                updateSdtContent: false,
                zipOutput: false
            })
            let requestData = new model.LoadWebDocumentData({
                loadingDocumentUrl: "http://google.com",
                saveOptions: requestDataSaveOptions
            })
            const loadRequest = new model.LoadWebDocumentRequest({
                data: requestData
            });

            wordsApi.loadWebDocument(loadRequest)
            .then((loadRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of loadRequest: ", loadRequestResult);
            });
        });
    });

    describe("exampleMoveFile", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const moveRequest = new model.MoveFileRequest({
                destPath: "/TestMoveFileDest_Sample.docx",
                srcPath: "Sample.docx"
            });

            wordsApi.moveFile(moveRequest)
            .then((moveRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of moveRequest: ", moveRequestResult);
            });
        });
    });

    describe("exampleMoveFolder", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const moveRequest = new model.MoveFolderRequest({
                destPath: "/TestMoveFolderDest_Sample",
                srcPath: "/TestMoveFolderSrc"
            });

            wordsApi.moveFolder(moveRequest)
            .then((moveRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of moveRequest: ", moveRequestResult);
            });
        });
    });

    describe("exampleOptimizeDocument", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            let requestOptions = new model.OptimizationOptions({
                msWordVersion: model.OptimizationOptions.MsWordVersionEnum.Word2002
            })
            const optimizeRequest = new model.OptimizeDocumentRequest({
                name: "Sample.docx",
                options: requestOptions
            });

            wordsApi.optimizeDocument(optimizeRequest)
            .then((optimizeRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of optimizeRequest: ", optimizeRequestResult);
            });
        });
    });

    describe("exampleOptimizeDocumentOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            let requestOptions = new model.OptimizationOptions({
                msWordVersion: model.OptimizationOptions.MsWordVersionEnum.Word2002
            })
            const optimizeRequest = new model.OptimizeDocumentOnlineRequest({
                document: requestDocument,
                options: requestOptions
            });

            wordsApi.optimizeDocumentOnline(optimizeRequest)
            .then((optimizeRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of optimizeRequest: ", optimizeRequestResult);
            });
        });
    });

    describe("exampleProtectDocument", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            let requestProtectionRequest = new model.ProtectionRequest({
                password: "123",
                protectionType: "ReadOnly"
            })
            const protectRequest = new model.ProtectDocumentRequest({
                name: "Sample.docx",
                protectionRequest: requestProtectionRequest
            });

            wordsApi.protectDocument(protectRequest)
            .then((protectRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of protectRequest: ", protectRequestResult);
            });
        });
    });

    describe("exampleProtectDocumentOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            let requestProtectionRequest = new model.ProtectionRequest({
                newPassword: "123"
            })
            const protectRequest = new model.ProtectDocumentOnlineRequest({
                document: requestDocument,
                protectionRequest: requestProtectionRequest
            });

            wordsApi.protectDocumentOnline(protectRequest)
            .then((protectRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of protectRequest: ", protectRequestResult);
            });
        });
    });

    describe("exampleRejectAllRevisions", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const rejectRequest = new model.RejectAllRevisionsRequest({
                name: "Sample.docx"
            });

            wordsApi.rejectAllRevisions(rejectRequest)
            .then((rejectRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of rejectRequest: ", rejectRequestResult);
            });
        });
    });

    describe("exampleRejectAllRevisionsOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            const rejectRequest = new model.RejectAllRevisionsOnlineRequest({
                document: requestDocument
            });

            wordsApi.rejectAllRevisionsOnline(rejectRequest)
            .then((rejectRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of rejectRequest: ", rejectRequestResult);
            });
        });
    });

    describe("exampleRemoveRange", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const removeRequest = new model.RemoveRangeRequest({
                name: "Sample.docx",
                rangeStartIdentifier: "id0.0.0",
                rangeEndIdentifier: "id0.0.1"
            });

            wordsApi.removeRange(removeRequest)
            .then((removeRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of removeRequest: ", removeRequestResult);
            });
        });
    });

    describe("exampleRemoveRangeOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.doc");
            const removeRequest = new model.RemoveRangeOnlineRequest({
                document: requestDocument,
                rangeStartIdentifier: "id0.0.0",
                rangeEndIdentifier: "id0.0.1"
            });

            wordsApi.removeRangeOnline(removeRequest)
            .then((removeRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of removeRequest: ", removeRequestResult);
            });
        });
    });

    describe("exampleRenderDrawingObject", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const renderRequest = new model.RenderDrawingObjectRequest({
                name: "Sample.docx",
                format: "png",
                index: 0
            });

            wordsApi.renderDrawingObject(renderRequest)
            .then((renderRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of renderRequest: ", renderRequestResult);
            });
        });
    });

    describe("exampleRenderDrawingObjectOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            const renderRequest = new model.RenderDrawingObjectOnlineRequest({
                document: requestDocument,
                format: "png",
                index: 0,
                nodePath: "sections/0"
            });

            wordsApi.renderDrawingObjectOnline(renderRequest)
            .then((renderRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of renderRequest: ", renderRequestResult);
            });
        });
    });

    describe("exampleRenderMathObject", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const renderRequest = new model.RenderMathObjectRequest({
                name: "Sample.docx",
                format: "png",
                index: 0
            });

            wordsApi.renderMathObject(renderRequest)
            .then((renderRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of renderRequest: ", renderRequestResult);
            });
        });
    });

    describe("exampleRenderMathObjectOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            const renderRequest = new model.RenderMathObjectOnlineRequest({
                document: requestDocument,
                format: "png",
                index: 0
            });

            wordsApi.renderMathObjectOnline(renderRequest)
            .then((renderRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of renderRequest: ", renderRequestResult);
            });
        });
    });

    describe("exampleRenderPage", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const renderRequest = new model.RenderPageRequest({
                name: "Sample.docx",
                pageIndex: 1,
                format: "bmp"
            });

            wordsApi.renderPage(renderRequest)
            .then((renderRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of renderRequest: ", renderRequestResult);
            });
        });
    });

    describe("exampleRenderPageOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            const renderRequest = new model.RenderPageOnlineRequest({
                document: requestDocument,
                pageIndex: 1,
                format: "bmp"
            });

            wordsApi.renderPageOnline(renderRequest)
            .then((renderRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of renderRequest: ", renderRequestResult);
            });
        });
    });

    describe("exampleRenderParagraph", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const renderRequest = new model.RenderParagraphRequest({
                name: "Sample.docx",
                format: "png",
                index: 0
            });

            wordsApi.renderParagraph(renderRequest)
            .then((renderRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of renderRequest: ", renderRequestResult);
            });
        });
    });

    describe("exampleRenderParagraphOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            const renderRequest = new model.RenderParagraphOnlineRequest({
                document: requestDocument,
                format: "png",
                index: 0
            });

            wordsApi.renderParagraphOnline(renderRequest)
            .then((renderRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of renderRequest: ", renderRequestResult);
            });
        });
    });

    describe("exampleRenderTable", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const renderRequest = new model.RenderTableRequest({
                name: "Sample.docx",
                format: "png",
                index: 0
            });

            wordsApi.renderTable(renderRequest)
            .then((renderRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of renderRequest: ", renderRequestResult);
            });
        });
    });

    describe("exampleRenderTableOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            const renderRequest = new model.RenderTableOnlineRequest({
                document: requestDocument,
                format: "png",
                index: 0
            });

            wordsApi.renderTableOnline(renderRequest)
            .then((renderRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of renderRequest: ", renderRequestResult);
            });
        });
    });

    describe("exampleReplaceText", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            let requestReplaceText = new model.ReplaceTextParameters({
                oldValue: "Testing",
                newValue: "Aspose testing"
            })
            const replaceRequest = new model.ReplaceTextRequest({
                name: "Sample.docx",
                replaceText: requestReplaceText
            });

            wordsApi.replaceText(replaceRequest)
            .then((replaceRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of replaceRequest: ", replaceRequestResult);
            });
        });
    });

    describe("exampleReplaceTextOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            let requestReplaceText = new model.ReplaceTextParameters({
                oldValue: "aspose",
                newValue: "aspose new"
            })
            const replaceRequest = new model.ReplaceTextOnlineRequest({
                document: requestDocument,
                replaceText: requestReplaceText
            });

            wordsApi.replaceTextOnline(replaceRequest)
            .then((replaceRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of replaceRequest: ", replaceRequestResult);
            });
        });
    });

    describe("exampleReplaceWithText", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            let requestRangeText = new model.ReplaceRange({
                text: "Replaced header"
            })
            const replaceRequest = new model.ReplaceWithTextRequest({
                name: "Sample.docx",
                rangeStartIdentifier: "id0.0.0",
                rangeText: requestRangeText,
                rangeEndIdentifier: "id0.0.1"
            });

            wordsApi.replaceWithText(replaceRequest)
            .then((replaceRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of replaceRequest: ", replaceRequestResult);
            });
        });
    });

    describe("exampleReplaceWithTextOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.doc");
            let requestRangeText = new model.ReplaceRange({
                text: "Replaced header"
            })
            const replaceRequest = new model.ReplaceWithTextOnlineRequest({
                document: requestDocument,
                rangeStartIdentifier: "id0.0.0",
                rangeText: requestRangeText,
                rangeEndIdentifier: "id0.0.1"
            });

            wordsApi.replaceWithTextOnline(replaceRequest)
            .then((replaceRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of replaceRequest: ", replaceRequestResult);
            });
        });
    });

    describe("exampleResetCache", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const resetRequest = new model.ResetCacheRequest({
            });

            wordsApi.resetCache(resetRequest)
            .then((resetRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of resetRequest: ", resetRequestResult);
            });
        });
    });

    describe("exampleSaveAs", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            let requestSaveOptionsData = new model.SaveOptionsData({
                saveFormat: "docx",
                fileName: "/TestSaveAsFromPdfToDoc.docx"
            })
            const saveRequest = new model.SaveAsRequest({
                name: "Sample.docx",
                saveOptionsData: requestSaveOptionsData
            });

            wordsApi.saveAs(saveRequest)
            .then((saveRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of saveRequest: ", saveRequestResult);
            });
        });
    });

    describe("exampleSaveAsOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Common/test_multi_pages.docx");
            let requestSaveOptionsData = new model.SaveOptionsData({
                saveFormat: "pdf",
                fileName: "/TestSaveAs.pdf"
            })
            const saveRequest = new model.SaveAsOnlineRequest({
                document: requestDocument,
                saveOptionsData: requestSaveOptionsData
            });

            wordsApi.saveAsOnline(saveRequest)
            .then((saveRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of saveRequest: ", saveRequestResult);
            });
        });
    });

    describe("exampleSaveAsRange", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            let requestDocumentParameters = new model.RangeDocument({
                documentName: "/NewDoc.docx"
            })
            const saveRequest = new model.SaveAsRangeRequest({
                name: "Sample.docx",
                rangeStartIdentifier: "id0.0.0",
                documentParameters: requestDocumentParameters,
                rangeEndIdentifier: "id0.0.1"
            });

            wordsApi.saveAsRange(saveRequest)
            .then((saveRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of saveRequest: ", saveRequestResult);
            });
        });
    });

    describe("exampleSaveAsRangeOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.doc");
            let requestDocumentParameters = new model.RangeDocument({
                documentName: "/NewDoc.docx"
            })
            const saveRequest = new model.SaveAsRangeOnlineRequest({
                document: requestDocument,
                rangeStartIdentifier: "id0.0.0",
                documentParameters: requestDocumentParameters,
                rangeEndIdentifier: "id0.0.1"
            });

            wordsApi.saveAsRangeOnline(saveRequest)
            .then((saveRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of saveRequest: ", saveRequestResult);
            });
        });
    });

    describe("exampleSaveAsTiff", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            let requestSaveOptions = new model.TiffSaveOptionsData({
                saveFormat: "tiff",
                fileName: "/abc.tiff"
            })
            const saveRequest = new model.SaveAsTiffRequest({
                name: "Sample.docx",
                saveOptions: requestSaveOptions
            });

            wordsApi.saveAsTiff(saveRequest)
            .then((saveRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of saveRequest: ", saveRequestResult);
            });
        });
    });

    describe("exampleSaveAsTiffOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Common/test_multi_pages.docx");
            let requestSaveOptions = new model.TiffSaveOptionsData({
                saveFormat: "tiff",
                fileName: "/abc.tiff"
            })
            const saveRequest = new model.SaveAsTiffOnlineRequest({
                document: requestDocument,
                saveOptions: requestSaveOptions
            });

            wordsApi.saveAsTiffOnline(saveRequest)
            .then((saveRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of saveRequest: ", saveRequestResult);
            });
        });
    });

    describe("exampleSearch", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const searchRequest = new model.SearchRequest({
                name: "Sample.docx",
                pattern: "aspose"
            });

            wordsApi.search(searchRequest)
            .then((searchRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of searchRequest: ", searchRequestResult);
            });
        });
    });

    describe("exampleSearchOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            const searchRequest = new model.SearchOnlineRequest({
                document: requestDocument,
                pattern: "aspose"
            });

            wordsApi.searchOnline(searchRequest)
            .then((searchRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of searchRequest: ", searchRequestResult);
            });
        });
    });

    describe("exampleSplitDocument", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const splitRequest = new model.SplitDocumentRequest({
                name: "Sample.docx",
                format: "text",
                destFileName: "/TestSplitDocument.text",
                from: 1,
                to: 2
            });

            wordsApi.splitDocument(splitRequest)
            .then((splitRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of splitRequest: ", splitRequestResult);
            });
        });
    });

    describe("exampleSplitDocumentOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            const splitRequest = new model.SplitDocumentOnlineRequest({
                document: requestDocument,
                format: "text",
                destFileName: "/TestSplitDocument.text",
                from: 1,
                to: 2
            });

            wordsApi.splitDocumentOnline(splitRequest)
            .then((splitRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of splitRequest: ", splitRequestResult);
            });
        });
    });

    describe("exampleUnprotectDocument", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            let requestProtectionRequest = new model.ProtectionRequest({
                password: "aspose"
            })
            const unprotectRequest = new model.UnprotectDocumentRequest({
                name: "Sample.docx",
                protectionRequest: requestProtectionRequest
            });

            wordsApi.unprotectDocument(unprotectRequest)
            .then((unprotectRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of unprotectRequest: ", unprotectRequestResult);
            });
        });
    });

    describe("exampleUnprotectDocumentOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            let requestProtectionRequest = new model.ProtectionRequest({
                password: "aspose"
            })
            const unprotectRequest = new model.UnprotectDocumentOnlineRequest({
                document: requestDocument,
                protectionRequest: requestProtectionRequest
            });

            wordsApi.unprotectDocumentOnline(unprotectRequest)
            .then((unprotectRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of unprotectRequest: ", unprotectRequestResult);
            });
        });
    });

    describe("exampleUpdateBookmark", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const bookmarkName = "aspose";

            let requestBookmarkData = new model.BookmarkData({
                name: bookmarkName,
                text: "This will be the text for Aspose"
            })
            const updateRequest = new model.UpdateBookmarkRequest({
                name: "Sample.docx",
                bookmarkName: bookmarkName,
                bookmarkData: requestBookmarkData
            });

            wordsApi.updateBookmark(updateRequest)
            .then((updateRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of updateRequest: ", updateRequestResult);
            });
        });
    });

    describe("exampleUpdateBookmarkOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            const bookmarkName = "aspose";

            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            let requestBookmarkData = new model.BookmarkData({
                name: bookmarkName,
                text: "This will be the text for Aspose"
            })
            const updateRequest = new model.UpdateBookmarkOnlineRequest({
                document: requestDocument,
                bookmarkName: bookmarkName,
                bookmarkData: requestBookmarkData,
                destFileName: "Sample.docx"
            });

            wordsApi.updateBookmarkOnline(updateRequest)
            .then((updateRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of updateRequest: ", updateRequestResult);
            });
        });
    });

    describe("exampleUpdateBorder", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            let requestBorderPropertiesColor = new model.XmlColor({
                web: "#AABBCC"
            })
            let requestBorderProperties = new model.Border({
                borderType: model.Border.BorderTypeEnum.Left,
                color: requestBorderPropertiesColor,
                distanceFromText: 6.0,
                lineStyle: model.Border.LineStyleEnum.DashDotStroker,
                lineWidth: 2.0,
                shadow: true
            })
            const updateRequest = new model.UpdateBorderRequest({
                name: "Sample.docx",
                borderType: "left",
                borderProperties: requestBorderProperties,
                nodePath: "tables/1/rows/0/cells/0"
            });

            wordsApi.updateBorder(updateRequest)
            .then((updateRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of updateRequest: ", updateRequestResult);
            });
        });
    });

    describe("exampleUpdateBorderOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            let requestBorderPropertiesColor = new model.XmlColor({
                web: "#AABBCC"
            })
            let requestBorderProperties = new model.Border({
                borderType: model.Border.BorderTypeEnum.Left,
                color: requestBorderPropertiesColor,
                distanceFromText: 6,
                lineStyle: model.Border.LineStyleEnum.DashDotStroker,
                lineWidth: 2,
                shadow: true
            })
            const updateRequest = new model.UpdateBorderOnlineRequest({
                document: requestDocument,
                borderProperties: requestBorderProperties,
                borderType: "left",
                nodePath: "tables/1/rows/0/cells/0"
            });

            wordsApi.updateBorderOnline(updateRequest)
            .then((updateRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of updateRequest: ", updateRequestResult);
            });
        });
    });

    describe("exampleUpdateComment", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            let requestCommentRangeStartNode = new model.NodeLink({
                nodeId: "0.3.0"
            })
            let requestCommentRangeStart = new model.DocumentPosition({
                node: requestCommentRangeStartNode,
                offset: 0
            })
            let requestCommentRangeEndNode = new model.NodeLink({
                nodeId: "0.3.0"
            })
            let requestCommentRangeEnd = new model.DocumentPosition({
                node: requestCommentRangeEndNode,
                offset: 0
            })
            let requestComment = new model.CommentUpdate({
                rangeStart: requestCommentRangeStart,
                rangeEnd: requestCommentRangeEnd,
                initial: "IA",
                author: "Imran Anwar",
                text: "A new Comment"
            })
            const updateRequest = new model.UpdateCommentRequest({
                name: "Sample.docx",
                commentIndex: 0,
                comment: requestComment
            });

            wordsApi.updateComment(updateRequest)
            .then((updateRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of updateRequest: ", updateRequestResult);
            });
        });
    });

    describe("exampleUpdateCommentOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            let requestCommentRangeStartNode = new model.NodeLink({
                nodeId: "0.3.0"
            })
            let requestCommentRangeStart = new model.DocumentPosition({
                node: requestCommentRangeStartNode,
                offset: 0
            })
            let requestCommentRangeEndNode = new model.NodeLink({
                nodeId: "0.3.0"
            })
            let requestCommentRangeEnd = new model.DocumentPosition({
                node: requestCommentRangeEndNode,
                offset: 0
            })
            let requestComment = new model.CommentUpdate({
                rangeStart: requestCommentRangeStart,
                rangeEnd: requestCommentRangeEnd,
                initial: "IA",
                author: "Imran Anwar",
                text: "A new Comment"
            })
            const updateRequest = new model.UpdateCommentOnlineRequest({
                document: requestDocument,
                commentIndex: 0,
                comment: requestComment
            });

            wordsApi.updateCommentOnline(updateRequest)
            .then((updateRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of updateRequest: ", updateRequestResult);
            });
        });
    });

    describe("exampleUpdateCustomXmlPart", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            let requestCustomXmlPart = new model.CustomXmlPartUpdate({
                data: "<data>Hello world</data>"
            })
            const updateRequest = new model.UpdateCustomXmlPartRequest({
                name: "Sample.docx",
                customXmlPartIndex: 0,
                customXmlPart: requestCustomXmlPart
            });

            wordsApi.updateCustomXmlPart(updateRequest)
            .then((updateRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of updateRequest: ", updateRequestResult);
            });
        });
    });

    describe("exampleUpdateCustomXmlPartOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            let requestCustomXmlPart = new model.CustomXmlPartUpdate({
                data: "<data>Hello world</data>"
            })
            const updateRequest = new model.UpdateCustomXmlPartOnlineRequest({
                document: requestDocument,
                customXmlPartIndex: 0,
                customXmlPart: requestCustomXmlPart
            });

            wordsApi.updateCustomXmlPartOnline(updateRequest)
            .then((updateRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of updateRequest: ", updateRequestResult);
            });
        });
    });

    describe("exampleUpdateDrawingObject", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDrawingObject = new model.DrawingObjectUpdate({
                left: 0
            })
            let requestImageFile = fs.createReadStream(documentsDir + "Common/aspose-cloud.png");
            const updateRequest = new model.UpdateDrawingObjectRequest({
                name: "Sample.docx",
                drawingObject: requestDrawingObject,
                imageFile: requestImageFile,
                index: 0
            });

            wordsApi.updateDrawingObject(updateRequest)
            .then((updateRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of updateRequest: ", updateRequestResult);
            });
        });
    });

    describe("exampleUpdateDrawingObjectOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            let requestDrawingObject = new model.DrawingObjectUpdate({
                left: 0
            })
            let requestImageFile = fs.createReadStream(documentsDir + "Common/aspose-cloud.png");
            const updateRequest = new model.UpdateDrawingObjectOnlineRequest({
                document: requestDocument,
                drawingObject: requestDrawingObject,
                imageFile: requestImageFile,
                index: 0
            });

            wordsApi.updateDrawingObjectOnline(updateRequest)
            .then((updateRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of updateRequest: ", updateRequestResult);
            });
        });
    });

    describe("exampleUpdateField", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            let requestField = new model.FieldUpdate({
                fieldCode: "{ NUMPAGES }"
            })
            const updateRequest = new model.UpdateFieldRequest({
                name: "Sample.docx",
                index: 0,
                field: requestField,
                nodePath: "sections/0/paragraphs/0"
            });

            wordsApi.updateField(updateRequest)
            .then((updateRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of updateRequest: ", updateRequestResult);
            });
        });
    });

    describe("exampleUpdateFieldOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            let requestField = new model.FieldUpdate({
                fieldCode: "{ NUMPAGES }"
            })
            const updateRequest = new model.UpdateFieldOnlineRequest({
                document: requestDocument,
                index: 0,
                field: requestField,
                nodePath: "sections/0/paragraphs/0"
            });

            wordsApi.updateFieldOnline(updateRequest)
            .then((updateRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of updateRequest: ", updateRequestResult);
            });
        });
    });

    describe("exampleUpdateFields", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const updateRequest = new model.UpdateFieldsRequest({
                name: "Sample.docx"
            });

            wordsApi.updateFields(updateRequest)
            .then((updateRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of updateRequest: ", updateRequestResult);
            });
        });
    });

    describe("exampleUpdateFieldsOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            const updateRequest = new model.UpdateFieldsOnlineRequest({
                document: requestDocument
            });

            wordsApi.updateFieldsOnline(updateRequest)
            .then((updateRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of updateRequest: ", updateRequestResult);
            });
        });
    });

    describe("exampleUpdateFootnote", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            let requestFootnoteDto = new model.FootnoteUpdate({
                text: "new text is here"
            })
            const updateRequest = new model.UpdateFootnoteRequest({
                name: "Sample.docx",
                index: 0,
                footnoteDto: requestFootnoteDto
            });

            wordsApi.updateFootnote(updateRequest)
            .then((updateRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of updateRequest: ", updateRequestResult);
            });
        });
    });

    describe("exampleUpdateFootnoteOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.doc");
            let requestFootnoteDto = new model.FootnoteUpdate({
                text: "new text is here"
            })
            const updateRequest = new model.UpdateFootnoteOnlineRequest({
                document: requestDocument,
                index: 0,
                footnoteDto: requestFootnoteDto
            });

            wordsApi.updateFootnoteOnline(updateRequest)
            .then((updateRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of updateRequest: ", updateRequestResult);
            });
        });
    });

    describe("exampleUpdateFormField", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            let requestFormField = new model.FormFieldTextInput({
                name: "FullName",
                enabled: true,
                calculateOnExit: true,
                statusText: "",
                textInputType: model.FormFieldTextInput.TextInputTypeEnum.Regular,
                textInputDefault: "No name"
            })
            const updateRequest = new model.UpdateFormFieldRequest({
                name: "Sample.docx",
                index: 0,
                formField: requestFormField
            });

            wordsApi.updateFormField(updateRequest)
            .then((updateRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of updateRequest: ", updateRequestResult);
            });
        });
    });

    describe("exampleUpdateFormFieldOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            let requestFormField = new model.FormFieldTextInput({
                name: "FullName",
                enabled: true,
                calculateOnExit: true,
                statusText: "",
                textInputType: model.FormFieldTextInput.TextInputTypeEnum.Regular,
                textInputDefault: "No name"
            })
            const updateRequest = new model.UpdateFormFieldOnlineRequest({
                document: requestDocument,
                index: 0,
                formField: requestFormField,
                nodePath: "sections/0"
            });

            wordsApi.updateFormFieldOnline(updateRequest)
            .then((updateRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of updateRequest: ", updateRequestResult);
            });
        });
    });

    describe("exampleUpdateList", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            let requestListUpdate = new model.ListUpdate({
                isRestartAtEachSection: true
            })
            const updateRequest = new model.UpdateListRequest({
                name: "TestGetLists.doc",
                listId: 1,
                listUpdate: requestListUpdate
            });

            wordsApi.updateList(updateRequest)
            .then((updateRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of updateRequest: ", updateRequestResult);
            });
        });
    });

    describe("exampleUpdateListLevel", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            let requestListUpdate = new model.ListLevelUpdate({
                alignment: model.ListLevelUpdate.AlignmentEnum.Right
            })
            const updateRequest = new model.UpdateListLevelRequest({
                name: "TestGetLists.doc",
                listId: 1,
                listLevel: 1,
                listUpdate: requestListUpdate
            });

            wordsApi.updateListLevel(updateRequest)
            .then((updateRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of updateRequest: ", updateRequestResult);
            });
        });
    });

    describe("exampleUpdateListLevelOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.doc");
            let requestListUpdate = new model.ListLevelUpdate({
                alignment: model.ListLevelUpdate.AlignmentEnum.Right
            })
            const updateRequest = new model.UpdateListLevelOnlineRequest({
                document: requestDocument,
                listId: 1,
                listLevel: 1,
                listUpdate: requestListUpdate
            });

            wordsApi.updateListLevelOnline(updateRequest)
            .then((updateRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of updateRequest: ", updateRequestResult);
            });
        });
    });

    describe("exampleUpdateListOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.doc");
            let requestListUpdate = new model.ListUpdate({
                isRestartAtEachSection: true
            })
            const updateRequest = new model.UpdateListOnlineRequest({
                document: requestDocument,
                listId: 1,
                listUpdate: requestListUpdate
            });

            wordsApi.updateListOnline(updateRequest)
            .then((updateRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of updateRequest: ", updateRequestResult);
            });
        });
    });

    describe("exampleUpdateParagraphFormat", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            let requestParagraphFormatDto = new model.ParagraphFormatUpdate({
                alignment: model.ParagraphFormatUpdate.AlignmentEnum.Right
            })
            const updateRequest = new model.UpdateParagraphFormatRequest({
                name: "Sample.docx",
                index: 0,
                paragraphFormatDto: requestParagraphFormatDto
            });

            wordsApi.updateParagraphFormat(updateRequest)
            .then((updateRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of updateRequest: ", updateRequestResult);
            });
        });
    });

    describe("exampleUpdateParagraphFormatOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            let requestParagraphFormatDto = new model.ParagraphFormatUpdate({
                alignment: model.ParagraphFormatUpdate.AlignmentEnum.Right
            })
            const updateRequest = new model.UpdateParagraphFormatOnlineRequest({
                document: requestDocument,
                index: 0,
                paragraphFormatDto: requestParagraphFormatDto
            });

            wordsApi.updateParagraphFormatOnline(updateRequest)
            .then((updateRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of updateRequest: ", updateRequestResult);
            });
        });
    });

    describe("exampleUpdateParagraphListFormat", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            let requestListFormatDto = new model.ListFormatUpdate({
                listId: 2
            })
            const updateRequest = new model.UpdateParagraphListFormatRequest({
                name: "Sample.docx",
                index: 0,
                listFormatDto: requestListFormatDto
            });

            wordsApi.updateParagraphListFormat(updateRequest)
            .then((updateRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of updateRequest: ", updateRequestResult);
            });
        });
    });

    describe("exampleUpdateParagraphListFormatOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.doc");
            let requestListFormatDto = new model.ListFormatUpdate({
                listId: 2
            })
            const updateRequest = new model.UpdateParagraphListFormatOnlineRequest({
                document: requestDocument,
                listFormatDto: requestListFormatDto,
                index: 0
            });

            wordsApi.updateParagraphListFormatOnline(updateRequest)
            .then((updateRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of updateRequest: ", updateRequestResult);
            });
        });
    });

    describe("exampleUpdateRun", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            let requestRun = new model.RunUpdate({
                text: "run with text"
            })
            const updateRequest = new model.UpdateRunRequest({
                name: "Sample.docx",
                run: requestRun,
                paragraphPath: "paragraphs/1",
                index: 0
            });

            wordsApi.updateRun(updateRequest)
            .then((updateRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of updateRequest: ", updateRequestResult);
            });
        });
    });

    describe("exampleUpdateRunFont", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            let requestFontDto = new model.Font({
                bold: true
            })
            const updateRequest = new model.UpdateRunFontRequest({
                name: "Sample.docx",
                fontDto: requestFontDto,
                paragraphPath: "paragraphs/0",
                index: 0
            });

            wordsApi.updateRunFont(updateRequest)
            .then((updateRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of updateRequest: ", updateRequestResult);
            });
        });
    });

    describe("exampleUpdateRunFontOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            let requestFontDto = new model.Font({
                bold: true
            })
            const updateRequest = new model.UpdateRunFontOnlineRequest({
                document: requestDocument,
                fontDto: requestFontDto,
                paragraphPath: "paragraphs/0",
                index: 0
            });

            wordsApi.updateRunFontOnline(updateRequest)
            .then((updateRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of updateRequest: ", updateRequestResult);
            });
        });
    });

    describe("exampleUpdateRunOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.doc");
            let requestRun = new model.RunUpdate({
                text: "run with text"
            })
            const updateRequest = new model.UpdateRunOnlineRequest({
                document: requestDocument,
                run: requestRun,
                paragraphPath: "paragraphs/1",
                index: 0
            });

            wordsApi.updateRunOnline(updateRequest)
            .then((updateRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of updateRequest: ", updateRequestResult);
            });
        });
    });

    describe("exampleUpdateSectionPageSetup", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            let requestPageSetup = new model.PageSetup({
                rtlGutter: true,
                leftMargin: 10.0,
                orientation: model.PageSetup.OrientationEnum.Landscape,
                paperSize: model.PageSetup.PaperSizeEnum.A5
            })
            const updateRequest = new model.UpdateSectionPageSetupRequest({
                name: "Sample.docx",
                sectionIndex: 0,
                pageSetup: requestPageSetup
            });

            wordsApi.updateSectionPageSetup(updateRequest)
            .then((updateRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of updateRequest: ", updateRequestResult);
            });
        });
    });

    describe("exampleUpdateSectionPageSetupOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            let requestPageSetup = new model.PageSetup({
                rtlGutter: true,
                leftMargin: 10,
                orientation: model.PageSetup.OrientationEnum.Landscape,
                paperSize: model.PageSetup.PaperSizeEnum.A5
            })
            const updateRequest = new model.UpdateSectionPageSetupOnlineRequest({
                document: requestDocument,
                sectionIndex: 0,
                pageSetup: requestPageSetup
            });

            wordsApi.updateSectionPageSetupOnline(updateRequest)
            .then((updateRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of updateRequest: ", updateRequestResult);
            });
        });
    });

    describe("exampleUpdateStyle", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            let requestStyleUpdate = new model.StyleUpdate({
                name: "My Style"
            })
            const updateRequest = new model.UpdateStyleRequest({
                name: "Sample.docx",
                styleUpdate: requestStyleUpdate,
                styleName: "Heading 1"
            });

            wordsApi.updateStyle(updateRequest)
            .then((updateRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of updateRequest: ", updateRequestResult);
            });
        });
    });

    describe("exampleUpdateStyleOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            let requestStyleUpdate = new model.StyleUpdate({
                name: "My Style"
            })
            const updateRequest = new model.UpdateStyleOnlineRequest({
                document: requestDocument,
                styleUpdate: requestStyleUpdate,
                styleName: "Heading 1"
            });

            wordsApi.updateStyleOnline(updateRequest)
            .then((updateRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of updateRequest: ", updateRequestResult);
            });
        });
    });

    describe("exampleUpdateTableCellFormat", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            let requestFormat = new model.TableCellFormat({
                bottomPadding: 5.0,
                fitText: true,
                horizontalMerge: model.TableCellFormat.HorizontalMergeEnum.First,
                wrapText: true
            })
            const updateRequest = new model.UpdateTableCellFormatRequest({
                name: "Sample.docx",
                format: requestFormat,
                tableRowPath: "sections/0/tables/2/rows/0",
                index: 0
            });

            wordsApi.updateTableCellFormat(updateRequest)
            .then((updateRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of updateRequest: ", updateRequestResult);
            });
        });
    });

    describe("exampleUpdateTableCellFormatOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            let requestFormat = new model.TableCellFormat({
                bottomPadding: 5,
                fitText: true,
                horizontalMerge: model.TableCellFormat.HorizontalMergeEnum.First,
                wrapText: true
            })
            const updateRequest = new model.UpdateTableCellFormatOnlineRequest({
                document: requestDocument,
                format: requestFormat,
                tableRowPath: "sections/0/tables/2/rows/0",
                index: 0
            });

            wordsApi.updateTableCellFormatOnline(updateRequest)
            .then((updateRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of updateRequest: ", updateRequestResult);
            });
        });
    });

    describe("exampleUpdateTableProperties", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            let requestProperties = new model.TableProperties({
                alignment: model.TableProperties.AlignmentEnum.Right,
                allowAutoFit: false,
                bidi: true,
                bottomPadding: 1.0,
                cellSpacing: 2.0,
                styleOptions: model.TableProperties.StyleOptionsEnum.ColumnBands
            })
            const updateRequest = new model.UpdateTablePropertiesRequest({
                name: "Sample.docx",
                properties: requestProperties,
                index: 1
            });

            wordsApi.updateTableProperties(updateRequest)
            .then((updateRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of updateRequest: ", updateRequestResult);
            });
        });
    });

    describe("exampleUpdateTablePropertiesOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            let requestProperties = new model.TableProperties({
                alignment: model.TableProperties.AlignmentEnum.Right,
                allowAutoFit: false,
                bidi: true,
                bottomPadding: 1,
                cellSpacing: 2,
                styleOptions: model.TableProperties.StyleOptionsEnum.ColumnBands
            })
            const updateRequest = new model.UpdateTablePropertiesOnlineRequest({
                document: requestDocument,
                properties: requestProperties,
                index: 1
            });

            wordsApi.updateTablePropertiesOnline(updateRequest)
            .then((updateRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of updateRequest: ", updateRequestResult);
            });
        });
    });

    describe("exampleUpdateTableRowFormat", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            let requestFormat = new model.TableRowFormat({
                allowBreakAcrossPages: true,
                headingFormat: true,
                height: 10.0,
                heightRule: model.TableRowFormat.HeightRuleEnum.Exactly
            })
            const updateRequest = new model.UpdateTableRowFormatRequest({
                name: "Sample.docx",
                format: requestFormat,
                tablePath: "sections/0/tables/2",
                index: 0
            });

            wordsApi.updateTableRowFormat(updateRequest)
            .then((updateRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of updateRequest: ", updateRequestResult);
            });
        });
    });

    describe("exampleUpdateTableRowFormatOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestDocument = fs.createReadStream(documentsDir + "Sample.docx");
            let requestFormat = new model.TableRowFormat({
                allowBreakAcrossPages: true,
                headingFormat: true,
                height: 10,
                heightRule: model.TableRowFormat.HeightRuleEnum.Auto
            })
            const updateRequest = new model.UpdateTableRowFormatOnlineRequest({
                document: requestDocument,
                format: requestFormat,
                tablePath: "sections/0/tables/2",
                index: 0
            });

            wordsApi.updateTableRowFormatOnline(updateRequest)
            .then((updateRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of updateRequest: ", updateRequestResult);
            });
        });
    });

    describe("exampleUploadFile", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            let requestFileContent = fs.createReadStream(documentsDir + "Sample.docx");
            const uploadRequest = new model.UploadFileRequest({
                fileContent: requestFileContent,
                path: "Sample.docx"
            });

            wordsApi.uploadFile(uploadRequest)
            .then((uploadRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of uploadRequest: ", uploadRequestResult);
            });
        });
    });
});
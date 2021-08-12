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
            const acceptRequest = new model.AcceptAllRevisionsRequest({
                name: "Sample.docx"
            });

            return wordsApi.acceptAllRevisions(acceptRequest)
            .then((acceptRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of acceptRequest: ", acceptRequestResult);
            });
        });
    });

    describe("exampleAcceptAllRevisionsOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            const acceptRequest = new model.AcceptAllRevisionsOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx")
            });

            return wordsApi.acceptAllRevisionsOnline(acceptRequest)
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

            const appendRequest = new model.AppendDocumentRequest({
                name: remoteFileName,
                documentList: new model.DocumentEntryList({
                    documentEntries: [
                        new model.DocumentEntry({
                            href: remoteFileName,
                            importFormatMode: "KeepSourceFormatting"
                        })
                    ]
                })
            });

            return wordsApi.appendDocument(appendRequest)
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
            const appendRequest = new model.AppendDocumentOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                documentList: new model.DocumentEntryList({
                    documentEntries: [
                        new model.DocumentEntry({
                            href: "Sample.docx",
                            importFormatMode: "KeepSourceFormatting"
                        })
                    ]
                })
            });

            return wordsApi.appendDocumentOnline(appendRequest)
            .then((appendRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of appendRequest: ", appendRequestResult);
            });
        });
    });

    describe("exampleApplyStyleToDocumentElement", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const applyStyleRequest = new model.ApplyStyleToDocumentElementRequest({
                name: "Sample.docx",
                styleApply: new model.StyleApply({
                    styleName: "Heading 1"
                }),
                styledNodePath: "paragraphs/1/paragraphFormat"
            });

            return wordsApi.applyStyleToDocumentElement(applyStyleRequest)
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
            const applyStyleRequest = new model.ApplyStyleToDocumentElementOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                styleApply: new model.StyleApply({
                    styleName: "Heading 1"
                }),
                styledNodePath: "paragraphs/1/paragraphFormat"
            });

            return wordsApi.applyStyleToDocumentElementOnline(applyStyleRequest)
            .then((applyStyleRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of applyStyleRequest: ", applyStyleRequestResult);
            });
        });
    });

    describe("exampleBuildReport", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const buildReportRequest = new model.BuildReportRequest({
                name: "Sample.docx",
                data: "Data.json",
                reportEngineSettings: new model.ReportEngineSettings({
                    dataSourceType: model.ReportEngineSettings.DataSourceTypeEnum.Json,
                    reportBuildOptions: [
                        model.ReportBuildOptions.AllowMissingMembers,
                        model.ReportBuildOptions.RemoveEmptyParagraphs
                    ]
                })
            });

            return wordsApi.buildReport(buildReportRequest)
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
            const buildReportRequest = new model.BuildReportOnlineRequest({
                template: fs.createReadStream(documentsDir + "Sample.docx"),
                data: "Data.json",
                reportEngineSettings: new model.ReportEngineSettings({
                    dataSourceType: model.ReportEngineSettings.DataSourceTypeEnum.Json,
                    dataSourceName: "persons"
                })
            });

            return wordsApi.buildReportOnline(buildReportRequest)
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

            return wordsApi.classify(classifyRequest)
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

            return wordsApi.classifyDocument(classifyRequest)
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
            const classifyRequest = new model.ClassifyDocumentOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                bestClassesCount: "3"
            });

            return wordsApi.classifyDocumentOnline(classifyRequest)
            .then((classifyRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of classifyRequest: ", classifyRequestResult);
            });
        });
    });

    describe("exampleCompareDocument", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const compareRequest = new model.CompareDocumentRequest({
                name: "TestCompareDocument1.doc",
                compareData: new model.CompareData({
                    author: "author",
                    comparingWithDocument: "TestCompareDocument2.doc",
                    dateTime: new Date('2015-10-26T00:00:00Z')
                }),
                destFileName: "/TestCompareDocumentOut.doc"
            });

            return wordsApi.compareDocument(compareRequest)
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
            const compareRequest = new model.CompareDocumentOnlineRequest({
                document: fs.createReadStream(documentsDir + "compareTestDoc1.doc"),
                compareData: new model.CompareData({
                    author: "author",
                    comparingWithDocument: "TestCompareDocument2.doc",
                    dateTime: new Date('2015-10-26T00:00:00Z')
                }),
                comparingDocument: fs.createReadStream(documentsDir + "compareTestDoc2.doc"),
                destFileName: "/TestCompareDocumentOut.doc"
            });

            return wordsApi.compareDocumentOnline(compareRequest)
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
            const convertRequest = new model.ConvertDocumentRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                format: "pdf"
            });

            return wordsApi.convertDocument(convertRequest)
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

            return wordsApi.copyFile(copyRequest)
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

            return wordsApi.copyFolder(copyRequest)
            .then((copyRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of copyRequest: ", copyRequestResult);
            });
        });
    });

    describe("exampleCopyStyle", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const copyRequest = new model.CopyStyleRequest({
                name: "Sample.docx",
                styleCopy: new model.StyleCopy({
                    styleName: "Heading 1"
                })
            });

            return wordsApi.copyStyle(copyRequest)
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
            const copyRequest = new model.CopyStyleOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                styleCopy: new model.StyleCopy({
                    styleName: "Heading 1"
                })
            });

            return wordsApi.copyStyleOnline(copyRequest)
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

            return wordsApi.createDocument(createRequest)
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

            return wordsApi.createFolder(createRequest)
            .then((createRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of createRequest: ", createRequestResult);
            });
        });
    });

    describe("exampleCreateOrUpdateDocumentProperty", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const createRequest = new model.CreateOrUpdateDocumentPropertyRequest({
                name: "Sample.docx",
                propertyName: "AsposeAuthor",
                property: new model.DocumentPropertyCreateOrUpdate({
                    value: "Imran Anwar"
                })
            });

            return wordsApi.createOrUpdateDocumentProperty(createRequest)
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
            const createRequest = new model.CreateOrUpdateDocumentPropertyOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                propertyName: "AsposeAuthor",
                property: new model.DocumentPropertyCreateOrUpdate({
                    value: "Imran Anwar"
                })
            });

            return wordsApi.createOrUpdateDocumentPropertyOnline(createRequest)
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

            return wordsApi.deleteAllParagraphTabStops(deleteRequest)
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
            const deleteRequest = new model.DeleteAllParagraphTabStopsOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                index: 0
            });

            return wordsApi.deleteAllParagraphTabStopsOnline(deleteRequest)
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

            return wordsApi.deleteBorder(deleteRequest)
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
            const deleteRequest = new model.DeleteBorderOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                borderType: "left",
                nodePath: "tables/1/rows/0/cells/0"
            });

            return wordsApi.deleteBorderOnline(deleteRequest)
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

            return wordsApi.deleteBorders(deleteRequest)
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
            const deleteRequest = new model.DeleteBordersOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                nodePath: "tables/1/rows/0/cells/0"
            });

            return wordsApi.deleteBordersOnline(deleteRequest)
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

            return wordsApi.deleteComment(deleteRequest)
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
            const deleteRequest = new model.DeleteCommentOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                commentIndex: 0
            });

            return wordsApi.deleteCommentOnline(deleteRequest)
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

            return wordsApi.deleteComments(deleteRequest)
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
            const deleteRequest = new model.DeleteCommentsOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx")
            });

            return wordsApi.deleteCommentsOnline(deleteRequest)
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

            return wordsApi.deleteCustomXmlPart(deleteRequest)
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
            const deleteRequest = new model.DeleteCustomXmlPartOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                customXmlPartIndex: 0
            });

            return wordsApi.deleteCustomXmlPartOnline(deleteRequest)
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

            return wordsApi.deleteCustomXmlParts(deleteRequest)
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
            const deleteRequest = new model.DeleteCustomXmlPartsOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx")
            });

            return wordsApi.deleteCustomXmlPartsOnline(deleteRequest)
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

            return wordsApi.deleteDocumentProperty(deleteRequest)
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
            const deleteRequest = new model.DeleteDocumentPropertyOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                propertyName: "testProp"
            });

            return wordsApi.deleteDocumentPropertyOnline(deleteRequest)
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

            return wordsApi.deleteDrawingObject(deleteRequest)
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
            const deleteRequest = new model.DeleteDrawingObjectOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                index: 0
            });

            return wordsApi.deleteDrawingObjectOnline(deleteRequest)
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

            return wordsApi.deleteField(deleteRequest)
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
            const deleteRequest = new model.DeleteFieldOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                index: 0,
                nodePath: "sections/0/paragraphs/0"
            });

            return wordsApi.deleteFieldOnline(deleteRequest)
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

            return wordsApi.deleteFields(deleteRequest)
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
            const deleteRequest = new model.DeleteFieldsOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx")
            });

            return wordsApi.deleteFieldsOnline(deleteRequest)
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

            return wordsApi.deleteFile(deleteRequest)
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

            return wordsApi.deleteFolder(deleteRequest)
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

            return wordsApi.deleteFootnote(deleteRequest)
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
            const deleteRequest = new model.DeleteFootnoteOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.doc"),
                index: 0
            });

            return wordsApi.deleteFootnoteOnline(deleteRequest)
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

            return wordsApi.deleteFormField(deleteRequest)
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
            const deleteRequest = new model.DeleteFormFieldOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                index: 0,
                nodePath: "sections/0"
            });

            return wordsApi.deleteFormFieldOnline(deleteRequest)
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

            return wordsApi.deleteHeaderFooter(deleteRequest)
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
            const deleteRequest = new model.DeleteHeaderFooterOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.doc"),
                sectionPath: "",
                index: 0
            });

            return wordsApi.deleteHeaderFooterOnline(deleteRequest)
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

            return wordsApi.deleteHeadersFooters(deleteRequest)
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
            const deleteRequest = new model.DeleteHeadersFootersOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.doc"),
                sectionPath: ""
            });

            return wordsApi.deleteHeadersFootersOnline(deleteRequest)
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

            return wordsApi.deleteMacros(deleteRequest)
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
            const deleteRequest = new model.DeleteMacrosOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx")
            });

            return wordsApi.deleteMacrosOnline(deleteRequest)
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

            return wordsApi.deleteOfficeMathObject(deleteRequest)
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
            const deleteRequest = new model.DeleteOfficeMathObjectOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                index: 0
            });

            return wordsApi.deleteOfficeMathObjectOnline(deleteRequest)
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

            return wordsApi.deleteParagraph(deleteRequest)
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

            return wordsApi.deleteParagraphListFormat(deleteRequest)
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
            const deleteRequest = new model.DeleteParagraphListFormatOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.doc"),
                index: 0
            });

            return wordsApi.deleteParagraphListFormatOnline(deleteRequest)
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
            const deleteRequest = new model.DeleteParagraphOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                index: 0
            });

            return wordsApi.deleteParagraphOnline(deleteRequest)
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

            return wordsApi.deleteParagraphTabStop(deleteRequest)
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
            const deleteRequest = new model.DeleteParagraphTabStopOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                position: 72.0,
                index: 0
            });

            return wordsApi.deleteParagraphTabStopOnline(deleteRequest)
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

            return wordsApi.deleteRun(deleteRequest)
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
            const deleteRequest = new model.DeleteRunOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.doc"),
                paragraphPath: "paragraphs/1",
                index: 0
            });

            return wordsApi.deleteRunOnline(deleteRequest)
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

            return wordsApi.deleteSection(deleteRequest)
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
            const deleteRequest = new model.DeleteSectionOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                sectionIndex: 0
            });

            return wordsApi.deleteSectionOnline(deleteRequest)
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

            return wordsApi.deleteTable(deleteRequest)
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

            return wordsApi.deleteTableCell(deleteRequest)
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
            const deleteRequest = new model.DeleteTableCellOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                tableRowPath: "sections/0/tables/2/rows/0",
                index: 0
            });

            return wordsApi.deleteTableCellOnline(deleteRequest)
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
            const deleteRequest = new model.DeleteTableOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                index: 1
            });

            return wordsApi.deleteTableOnline(deleteRequest)
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

            return wordsApi.deleteTableRow(deleteRequest)
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
            const deleteRequest = new model.DeleteTableRowOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                tablePath: "tables/1",
                index: 0
            });

            return wordsApi.deleteTableRowOnline(deleteRequest)
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

            return wordsApi.deleteWatermark(deleteRequest)
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
            const deleteRequest = new model.DeleteWatermarkOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx")
            });

            return wordsApi.deleteWatermarkOnline(deleteRequest)
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

            return wordsApi.downloadFile(downloadRequest)
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

            return wordsApi.executeMailMerge(mailMergeRequest)
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
            const mailMergeRequest = new model.ExecuteMailMergeOnlineRequest({
                template: fs.createReadStream(documentsDir + "TestExecuteTemplate.doc"),
                data: fs.createReadStream(documentsDir + "TestExecuteTemplateData.txt")
            });

            return wordsApi.executeMailMergeOnline(mailMergeRequest)
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

            return wordsApi.getAvailableFonts(request)
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

            return wordsApi.getBookmarkByName(request)
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
            const request = new model.GetBookmarkByNameOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                bookmarkName: "aspose"
            });

            return wordsApi.getBookmarkByNameOnline(request)
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

            return wordsApi.getBookmarks(request)
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
            const request = new model.GetBookmarksOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx")
            });

            return wordsApi.getBookmarksOnline(request)
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

            return wordsApi.getBorder(request)
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
            const request = new model.GetBorderOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                borderType: "left",
                nodePath: "tables/1/rows/0/cells/0"
            });

            return wordsApi.getBorderOnline(request)
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

            return wordsApi.getBorders(request)
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
            const request = new model.GetBordersOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                nodePath: "tables/1/rows/0/cells/0"
            });

            return wordsApi.getBordersOnline(request)
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

            return wordsApi.getComment(request)
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
            const request = new model.GetCommentOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                commentIndex: 0
            });

            return wordsApi.getCommentOnline(request)
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

            return wordsApi.getComments(request)
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
            const request = new model.GetCommentsOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx")
            });

            return wordsApi.getCommentsOnline(request)
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

            return wordsApi.getCustomXmlPart(request)
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
            const request = new model.GetCustomXmlPartOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                customXmlPartIndex: 0
            });

            return wordsApi.getCustomXmlPartOnline(request)
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

            return wordsApi.getCustomXmlParts(request)
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
            const request = new model.GetCustomXmlPartsOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx")
            });

            return wordsApi.getCustomXmlPartsOnline(request)
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

            return wordsApi.getDocument(request)
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

            return wordsApi.getDocumentDrawingObjectByIndex(request)
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
            const request = new model.GetDocumentDrawingObjectByIndexOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                index: 0,
                nodePath: "sections/0"
            });

            return wordsApi.getDocumentDrawingObjectByIndexOnline(request)
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

            return wordsApi.getDocumentDrawingObjectImageData(request)
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
            const request = new model.GetDocumentDrawingObjectImageDataOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                index: 0,
                nodePath: "sections/0"
            });

            return wordsApi.getDocumentDrawingObjectImageDataOnline(request)
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

            return wordsApi.getDocumentDrawingObjectOleData(request)
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
            const request = new model.GetDocumentDrawingObjectOleDataOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                index: 0,
                nodePath: "sections/0"
            });

            return wordsApi.getDocumentDrawingObjectOleDataOnline(request)
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

            return wordsApi.getDocumentDrawingObjects(request)
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
            const request = new model.GetDocumentDrawingObjectsOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                nodePath: "sections/0"
            });

            return wordsApi.getDocumentDrawingObjectsOnline(request)
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

            return wordsApi.getDocumentFieldNames(request)
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
            const request = new model.GetDocumentFieldNamesOnlineRequest({
                template: fs.createReadStream(documentsDir + "Sample.docx"),
                useNonMergeFields: true
            });

            return wordsApi.getDocumentFieldNamesOnline(request)
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

            return wordsApi.getDocumentHyperlinkByIndex(request)
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
            const request = new model.GetDocumentHyperlinkByIndexOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                hyperlinkIndex: 0
            });

            return wordsApi.getDocumentHyperlinkByIndexOnline(request)
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

            return wordsApi.getDocumentHyperlinks(request)
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
            const request = new model.GetDocumentHyperlinksOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx")
            });

            return wordsApi.getDocumentHyperlinksOnline(request)
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

            return wordsApi.getDocumentProperties(request)
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
            const request = new model.GetDocumentPropertiesOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx")
            });

            return wordsApi.getDocumentPropertiesOnline(request)
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

            return wordsApi.getDocumentProperty(request)
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
            const request = new model.GetDocumentPropertyOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                propertyName: "Author"
            });

            return wordsApi.getDocumentPropertyOnline(request)
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

            return wordsApi.getDocumentProtection(request)
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
            const request = new model.GetDocumentProtectionOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx")
            });

            return wordsApi.getDocumentProtectionOnline(request)
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

            return wordsApi.getDocumentStatistics(request)
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
            const request = new model.GetDocumentStatisticsOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx")
            });

            return wordsApi.getDocumentStatisticsOnline(request)
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

            return wordsApi.getDocumentWithFormat(request)
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

            return wordsApi.getField(request)
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
            const request = new model.GetFieldOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                index: 0,
                nodePath: "sections/0/paragraphs/0"
            });

            return wordsApi.getFieldOnline(request)
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

            return wordsApi.getFields(request)
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
            const request = new model.GetFieldsOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                nodePath: "sections/0"
            });

            return wordsApi.getFieldsOnline(request)
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

            return wordsApi.getFilesList(request)
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

            return wordsApi.getFootnote(request)
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
            const request = new model.GetFootnoteOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.doc"),
                index: 0
            });

            return wordsApi.getFootnoteOnline(request)
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

            return wordsApi.getFootnotes(request)
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
            const request = new model.GetFootnotesOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.doc")
            });

            return wordsApi.getFootnotesOnline(request)
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

            return wordsApi.getFormField(request)
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
            const request = new model.GetFormFieldOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                index: 0,
                nodePath: "sections/0"
            });

            return wordsApi.getFormFieldOnline(request)
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

            return wordsApi.getFormFields(request)
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
            const request = new model.GetFormFieldsOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                nodePath: "sections/0"
            });

            return wordsApi.getFormFieldsOnline(request)
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

            return wordsApi.getHeaderFooter(request)
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

            return wordsApi.getHeaderFooterOfSection(request)
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
            const request = new model.GetHeaderFooterOfSectionOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.doc"),
                headerFooterIndex: 0,
                sectionIndex: 0
            });

            return wordsApi.getHeaderFooterOfSectionOnline(request)
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
            const request = new model.GetHeaderFooterOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.doc"),
                headerFooterIndex: 0
            });

            return wordsApi.getHeaderFooterOnline(request)
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

            return wordsApi.getHeaderFooters(request)
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
            const request = new model.GetHeaderFootersOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.doc"),
                sectionPath: ""
            });

            return wordsApi.getHeaderFootersOnline(request)
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

            return wordsApi.getList(request)
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
            const request = new model.GetListOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.doc"),
                listId: 1
            });

            return wordsApi.getListOnline(request)
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

            return wordsApi.getLists(request)
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
            const request = new model.GetListsOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.doc")
            });

            return wordsApi.getListsOnline(request)
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

            return wordsApi.getOfficeMathObject(request)
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
            const request = new model.GetOfficeMathObjectOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                index: 0
            });

            return wordsApi.getOfficeMathObjectOnline(request)
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

            return wordsApi.getOfficeMathObjects(request)
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
            const request = new model.GetOfficeMathObjectsOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx")
            });

            return wordsApi.getOfficeMathObjectsOnline(request)
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

            return wordsApi.getParagraph(request)
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

            return wordsApi.getParagraphFormat(request)
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
            const request = new model.GetParagraphFormatOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                index: 0
            });

            return wordsApi.getParagraphFormatOnline(request)
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

            return wordsApi.getParagraphListFormat(request)
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
            const request = new model.GetParagraphListFormatOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.doc"),
                index: 0
            });

            return wordsApi.getParagraphListFormatOnline(request)
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
            const request = new model.GetParagraphOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                index: 0,
                nodePath: "sections/0"
            });

            return wordsApi.getParagraphOnline(request)
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

            return wordsApi.getParagraphs(request)
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
            const request = new model.GetParagraphsOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                nodePath: "sections/0"
            });

            return wordsApi.getParagraphsOnline(request)
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

            return wordsApi.getParagraphTabStops(request)
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
            const request = new model.GetParagraphTabStopsOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                index: 0
            });

            return wordsApi.getParagraphTabStopsOnline(request)
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

            return wordsApi.getPublicKey(request)
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

            return wordsApi.getRangeText(request)
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
            const request = new model.GetRangeTextOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.doc"),
                rangeStartIdentifier: "id0.0.0",
                rangeEndIdentifier: "id0.0.1"
            });

            return wordsApi.getRangeTextOnline(request)
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

            return wordsApi.getRun(request)
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

            return wordsApi.getRunFont(request)
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
            const request = new model.GetRunFontOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                paragraphPath: "paragraphs/0",
                index: 0
            });

            return wordsApi.getRunFontOnline(request)
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
            const request = new model.GetRunOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                paragraphPath: "paragraphs/0",
                index: 0
            });

            return wordsApi.getRunOnline(request)
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

            return wordsApi.getRuns(request)
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
            const request = new model.GetRunsOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                paragraphPath: "sections/0/paragraphs/0"
            });

            return wordsApi.getRunsOnline(request)
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

            return wordsApi.getSection(request)
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
            const request = new model.GetSectionOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                sectionIndex: 0
            });

            return wordsApi.getSectionOnline(request)
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

            return wordsApi.getSectionPageSetup(request)
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
            const request = new model.GetSectionPageSetupOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                sectionIndex: 0
            });

            return wordsApi.getSectionPageSetupOnline(request)
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

            return wordsApi.getSections(request)
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
            const request = new model.GetSectionsOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx")
            });

            return wordsApi.getSectionsOnline(request)
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

            return wordsApi.getStyle(request)
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

            return wordsApi.getStyleFromDocumentElement(request)
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
            const request = new model.GetStyleFromDocumentElementOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                styledNodePath: "paragraphs/1/paragraphFormat"
            });

            return wordsApi.getStyleFromDocumentElementOnline(request)
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
            const request = new model.GetStyleOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                styleName: "Heading 1"
            });

            return wordsApi.getStyleOnline(request)
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

            return wordsApi.getStyles(request)
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
            const request = new model.GetStylesOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx")
            });

            return wordsApi.getStylesOnline(request)
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

            return wordsApi.getTable(request)
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

            return wordsApi.getTableCell(request)
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

            return wordsApi.getTableCellFormat(request)
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
            const request = new model.GetTableCellFormatOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                tableRowPath: "sections/0/tables/2/rows/0",
                index: 0
            });

            return wordsApi.getTableCellFormatOnline(request)
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
            const request = new model.GetTableCellOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                tableRowPath: "sections/0/tables/2/rows/0",
                index: 0
            });

            return wordsApi.getTableCellOnline(request)
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
            const request = new model.GetTableOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                index: 1
            });

            return wordsApi.getTableOnline(request)
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

            return wordsApi.getTableProperties(request)
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
            const request = new model.GetTablePropertiesOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                index: 1
            });

            return wordsApi.getTablePropertiesOnline(request)
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

            return wordsApi.getTableRow(request)
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

            return wordsApi.getTableRowFormat(request)
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
            const request = new model.GetTableRowFormatOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                tablePath: "sections/0/tables/2",
                index: 0
            });

            return wordsApi.getTableRowFormatOnline(request)
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
            const request = new model.GetTableRowOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                tablePath: "tables/1",
                index: 0
            });

            return wordsApi.getTableRowOnline(request)
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

            return wordsApi.getTables(request)
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
            const request = new model.GetTablesOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx")
            });

            return wordsApi.getTablesOnline(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of request: ", requestResult);
            });
        });
    });

    describe("exampleInsertComment", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const insertRequest = new model.InsertCommentRequest({
                name: "Sample.docx",
                comment: new model.CommentInsert({
                    rangeStart: new model.DocumentPosition({
                        node: new model.NodeLink({
                            nodeId: "0.3.0.3"
                        }),
                        offset: 0
                    }),
                    rangeEnd: new model.DocumentPosition({
                        node: new model.NodeLink({
                            nodeId: "0.3.0.3"
                        }),
                        offset: 0
                    }),
                    initial: "IA",
                    author: "Imran Anwar",
                    text: "A new Comment"
                })
            });

            return wordsApi.insertComment(insertRequest)
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
            const insertRequest = new model.InsertCommentOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                comment: new model.CommentInsert({
                    rangeStart: new model.DocumentPosition({
                        node: new model.NodeLink({
                            nodeId: "0.3.0.3"
                        }),
                        offset: 0
                    }),
                    rangeEnd: new model.DocumentPosition({
                        node: new model.NodeLink({
                            nodeId: "0.3.0.3"
                        }),
                        offset: 0
                    }),
                    initial: "IA",
                    author: "Imran Anwar",
                    text: "A new Comment"
                })
            });

            return wordsApi.insertCommentOnline(insertRequest)
            .then((insertRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of insertRequest: ", insertRequestResult);
            });
        });
    });

    describe("exampleInsertCustomXmlPart", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const insertRequest = new model.InsertCustomXmlPartRequest({
                name: "Sample.docx",
                customXmlPart: new model.CustomXmlPartInsert({
                    id: "hello",
                    data: "<data>Hello world</data>"
                })
            });

            return wordsApi.insertCustomXmlPart(insertRequest)
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
            const insertRequest = new model.InsertCustomXmlPartOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                customXmlPart: new model.CustomXmlPartInsert({
                    id: "hello",
                    data: "<data>Hello world</data>"
                })
            });

            return wordsApi.insertCustomXmlPartOnline(insertRequest)
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
            const insertRequest = new model.InsertDrawingObjectRequest({
                name: "Sample.docx",
                drawingObject: new model.DrawingObjectInsert({
                    height: 0,
                    left: 0,
                    top: 0,
                    width: 0,
                    relativeHorizontalPosition: model.DrawingObjectInsert.RelativeHorizontalPositionEnum.Margin,
                    relativeVerticalPosition: model.DrawingObjectInsert.RelativeVerticalPositionEnum.Margin,
                    wrapType: model.DrawingObjectInsert.WrapTypeEnum.Inline
                }),
                imageFile: fs.createReadStream(documentsDir + "Common/aspose-cloud.png")
            });

            return wordsApi.insertDrawingObject(insertRequest)
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
            const insertRequest = new model.InsertDrawingObjectOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                drawingObject: new model.DrawingObjectInsert({
                    height: 0,
                    left: 0,
                    top: 0,
                    width: 0,
                    relativeHorizontalPosition: model.DrawingObjectInsert.RelativeHorizontalPositionEnum.Margin,
                    relativeVerticalPosition: model.DrawingObjectInsert.RelativeVerticalPositionEnum.Margin,
                    wrapType: model.DrawingObjectInsert.WrapTypeEnum.Inline
                }),
                imageFile: fs.createReadStream(documentsDir + "Common/aspose-cloud.png")
            });

            return wordsApi.insertDrawingObjectOnline(insertRequest)
            .then((insertRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of insertRequest: ", insertRequestResult);
            });
        });
    });

    describe("exampleInsertField", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const insertRequest = new model.InsertFieldRequest({
                name: "Sample.docx",
                field: new model.FieldInsert({
                    fieldCode: "{ NUMPAGES }"
                })
            });

            return wordsApi.insertField(insertRequest)
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
            const insertRequest = new model.InsertFieldOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                field: new model.FieldInsert({
                    fieldCode: "{ NUMPAGES }"
                }),
                nodePath: "sections/0/paragraphs/0"
            });

            return wordsApi.insertFieldOnline(insertRequest)
            .then((insertRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of insertRequest: ", insertRequestResult);
            });
        });
    });

    describe("exampleInsertFootnote", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const insertRequest = new model.InsertFootnoteRequest({
                name: "Sample.docx",
                footnoteDto: new model.FootnoteInsert({
                    footnoteType: model.FootnoteInsert.FootnoteTypeEnum.Endnote,
                    text: "test endnote"
                })
            });

            return wordsApi.insertFootnote(insertRequest)
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
            const insertRequest = new model.InsertFootnoteOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.doc"),
                footnoteDto: new model.FootnoteInsert({
                    footnoteType: model.FootnoteInsert.FootnoteTypeEnum.Endnote,
                    text: "test endnote"
                })
            });

            return wordsApi.insertFootnoteOnline(insertRequest)
            .then((insertRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of insertRequest: ", insertRequestResult);
            });
        });
    });

    describe("exampleInsertFormField", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const insertRequest = new model.InsertFormFieldRequest({
                name: "Sample.docx",
                formField: new model.FormFieldTextInput({
                    name: "FullName",
                    enabled: true,
                    calculateOnExit: true,
                    statusText: "",
                    textInputType: model.FormFieldTextInput.TextInputTypeEnum.Regular,
                    textInputDefault: "123",
                    textInputFormat: "UPPERCASE"
                })
            });

            return wordsApi.insertFormField(insertRequest)
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
            const insertRequest = new model.InsertFormFieldOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                formField: new model.FormFieldTextInput({
                    name: "FullName",
                    enabled: true,
                    calculateOnExit: true,
                    statusText: "",
                    textInputType: model.FormFieldTextInput.TextInputTypeEnum.Regular,
                    textInputDefault: "123",
                    textInputFormat: "UPPERCASE"
                }),
                nodePath: "sections/0/paragraphs/0"
            });

            return wordsApi.insertFormFieldOnline(insertRequest)
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

            return wordsApi.insertHeaderFooter(insertRequest)
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
            const insertRequest = new model.InsertHeaderFooterOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.doc"),
                sectionPath: "",
                headerFooterType: "FooterEven"
            });

            return wordsApi.insertHeaderFooterOnline(insertRequest)
            .then((insertRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of insertRequest: ", insertRequestResult);
            });
        });
    });

    describe("exampleInsertList", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const insertRequest = new model.InsertListRequest({
                name: "TestGetLists.doc",
                listInsert: new model.ListInsert({
                    template: model.ListInsert.TemplateEnum.OutlineLegal
                })
            });

            return wordsApi.insertList(insertRequest)
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
            const insertRequest = new model.InsertListOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.doc"),
                listInsert: new model.ListInsert({
                    template: model.ListInsert.TemplateEnum.OutlineLegal
                })
            });

            return wordsApi.insertListOnline(insertRequest)
            .then((insertRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of insertRequest: ", insertRequestResult);
            });
        });
    });

    describe("exampleInsertOrUpdateParagraphTabStop", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const insertRequest = new model.InsertOrUpdateParagraphTabStopRequest({
                name: "Sample.docx",
                index: 0,
                tabStopInsertDto: new model.TabStopInsert({
                    alignment: model.TabStopInsert.AlignmentEnum.Left,
                    leader: model.TabStopInsert.LeaderEnum.None,
                    position: 100.0
                })
            });

            return wordsApi.insertOrUpdateParagraphTabStop(insertRequest)
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
            const insertRequest = new model.InsertOrUpdateParagraphTabStopOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                tabStopInsertDto: new model.TabStopInsert({
                    alignment: model.TabStopInsert.AlignmentEnum.Left,
                    leader: model.TabStopInsert.LeaderEnum.None,
                    position: 72
                }),
                index: 0
            });

            return wordsApi.insertOrUpdateParagraphTabStopOnline(insertRequest)
            .then((insertRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of insertRequest: ", insertRequestResult);
            });
        });
    });

    describe("exampleInsertPageNumbers", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const insertRequest = new model.InsertPageNumbersRequest({
                name: "Sample.docx",
                pageNumber: new model.PageNumber({
                    alignment: "center",
                    format: "{PAGE} of {NUMPAGES}"
                })
            });

            return wordsApi.insertPageNumbers(insertRequest)
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
            const insertRequest = new model.InsertPageNumbersOnlineRequest({
                document: fs.createReadStream(documentsDir + "Common/Sample.docx"),
                pageNumber: new model.PageNumber({
                    alignment: "center",
                    format: "{PAGE} of {NUMPAGES}"
                })
            });

            return wordsApi.insertPageNumbersOnline(insertRequest)
            .then((insertRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of insertRequest: ", insertRequestResult);
            });
        });
    });

    describe("exampleInsertParagraph", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const insertRequest = new model.InsertParagraphRequest({
                name: "Sample.docx",
                paragraph: new model.ParagraphInsert({
                    text: "This is a new paragraph for your document"
                })
            });

            return wordsApi.insertParagraph(insertRequest)
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
            const insertRequest = new model.InsertParagraphOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                paragraph: new model.ParagraphInsert({
                    text: "This is a new paragraph for your document"
                }),
                nodePath: "sections/0"
            });

            return wordsApi.insertParagraphOnline(insertRequest)
            .then((insertRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of insertRequest: ", insertRequestResult);
            });
        });
    });

    describe("exampleInsertRun", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const insertRequest = new model.InsertRunRequest({
                name: "Sample.docx",
                paragraphPath: "paragraphs/1",
                run: new model.RunInsert({
                    text: "run with text"
                })
            });

            return wordsApi.insertRun(insertRequest)
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
            const insertRequest = new model.InsertRunOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.doc"),
                paragraphPath: "paragraphs/1",
                run: new model.RunInsert({
                    text: "run with text"
                })
            });

            return wordsApi.insertRunOnline(insertRequest)
            .then((insertRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of insertRequest: ", insertRequestResult);
            });
        });
    });

    describe("exampleInsertStyle", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const insertRequest = new model.InsertStyleRequest({
                name: "Sample.docx",
                styleInsert: new model.StyleInsert({
                    styleName: "My Style",
                    styleType: model.StyleInsert.StyleTypeEnum.Paragraph
                })
            });

            return wordsApi.insertStyle(insertRequest)
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
            const insertRequest = new model.InsertStyleOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                styleInsert: new model.StyleInsert({
                    styleName: "My Style",
                    styleType: model.StyleInsert.StyleTypeEnum.Paragraph
                })
            });

            return wordsApi.insertStyleOnline(insertRequest)
            .then((insertRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of insertRequest: ", insertRequestResult);
            });
        });
    });

    describe("exampleInsertTable", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const insertRequest = new model.InsertTableRequest({
                name: "Sample.docx",
                table: new model.TableInsert({
                    columnsCount: 5,
                    rowsCount: 4
                })
            });

            return wordsApi.insertTable(insertRequest)
            .then((insertRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of insertRequest: ", insertRequestResult);
            });
        });
    });

    describe("exampleInsertTableCell", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const insertRequest = new model.InsertTableCellRequest({
                name: "Sample.docx",
                cell: new model.TableCellInsert({
                }),
                tableRowPath: "sections/0/tables/2/rows/0"
            });

            return wordsApi.insertTableCell(insertRequest)
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
            const insertRequest = new model.InsertTableCellOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                cell: new model.TableCellInsert({
                }),
                tableRowPath: "sections/0/tables/2/rows/0"
            });

            return wordsApi.insertTableCellOnline(insertRequest)
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
            const insertRequest = new model.InsertTableOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                table: new model.TableInsert({
                    columnsCount: 5,
                    rowsCount: 4
                })
            });

            return wordsApi.insertTableOnline(insertRequest)
            .then((insertRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of insertRequest: ", insertRequestResult);
            });
        });
    });

    describe("exampleInsertTableRow", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const insertRequest = new model.InsertTableRowRequest({
                name: "Sample.docx",
                row: new model.TableRowInsert({
                    columnsCount: 5
                }),
                tablePath: "sections/0/tables/2"
            });

            return wordsApi.insertTableRow(insertRequest)
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
            const insertRequest = new model.InsertTableRowOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                row: new model.TableRowInsert({
                    columnsCount: 5
                }),
                tablePath: "sections/0/tables/2"
            });

            return wordsApi.insertTableRowOnline(insertRequest)
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

            return wordsApi.insertWatermarkImage(insertRequest)
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
            const insertRequest = new model.InsertWatermarkImageOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                imageFile: fs.createReadStream(documentsDir + "Common/aspose-cloud.png")
            });

            return wordsApi.insertWatermarkImageOnline(insertRequest)
            .then((insertRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of insertRequest: ", insertRequestResult);
            });
        });
    });

    describe("exampleInsertWatermarkText", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const insertRequest = new model.InsertWatermarkTextRequest({
                name: "Sample.docx",
                watermarkText: new model.WatermarkText({
                    text: "This is the text",
                    rotationAngle: 90.0
                })
            });

            return wordsApi.insertWatermarkText(insertRequest)
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
            const insertRequest = new model.InsertWatermarkTextOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                watermarkText: new model.WatermarkText({
                    text: "This is the text",
                    rotationAngle: 90
                })
            });

            return wordsApi.insertWatermarkTextOnline(insertRequest)
            .then((insertRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of insertRequest: ", insertRequestResult);
            });
        });
    });

    describe("exampleLoadWebDocument", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const loadRequest = new model.LoadWebDocumentRequest({
                data: new model.LoadWebDocumentData({
                    loadingDocumentUrl: "http://google.com",
                    saveOptions: new model.SaveOptionsData({
                        fileName: "google.doc",
                        saveFormat: "doc",
                        dmlEffectsRenderingMode: "1",
                        dmlRenderingMode: "1",
                        updateSdtContent: false,
                        zipOutput: false
                    })
                })
            });

            return wordsApi.loadWebDocument(loadRequest)
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

            return wordsApi.moveFile(moveRequest)
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

            return wordsApi.moveFolder(moveRequest)
            .then((moveRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of moveRequest: ", moveRequestResult);
            });
        });
    });

    describe("exampleOptimizeDocument", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const optimizeRequest = new model.OptimizeDocumentRequest({
                name: "Sample.docx",
                options: new model.OptimizationOptions({
                    msWordVersion: model.OptimizationOptions.MsWordVersionEnum.Word2002
                })
            });

            return wordsApi.optimizeDocument(optimizeRequest)
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
            const optimizeRequest = new model.OptimizeDocumentOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                options: new model.OptimizationOptions({
                    msWordVersion: model.OptimizationOptions.MsWordVersionEnum.Word2002
                })
            });

            return wordsApi.optimizeDocumentOnline(optimizeRequest)
            .then((optimizeRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of optimizeRequest: ", optimizeRequestResult);
            });
        });
    });

    describe("exampleProtectDocument", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const protectRequest = new model.ProtectDocumentRequest({
                name: "Sample.docx",
                protectionRequest: new model.ProtectionRequest({
                    password: "123",
                    protectionType: "ReadOnly"
                })
            });

            return wordsApi.protectDocument(protectRequest)
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
            const protectRequest = new model.ProtectDocumentOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                protectionRequest: new model.ProtectionRequest({
                    newPassword: "123"
                })
            });

            return wordsApi.protectDocumentOnline(protectRequest)
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

            return wordsApi.rejectAllRevisions(rejectRequest)
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
            const rejectRequest = new model.RejectAllRevisionsOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx")
            });

            return wordsApi.rejectAllRevisionsOnline(rejectRequest)
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

            return wordsApi.removeRange(removeRequest)
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
            const removeRequest = new model.RemoveRangeOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.doc"),
                rangeStartIdentifier: "id0.0.0",
                rangeEndIdentifier: "id0.0.1"
            });

            return wordsApi.removeRangeOnline(removeRequest)
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

            return wordsApi.renderDrawingObject(renderRequest)
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
            const renderRequest = new model.RenderDrawingObjectOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                format: "png",
                index: 0,
                nodePath: "sections/0"
            });

            return wordsApi.renderDrawingObjectOnline(renderRequest)
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

            return wordsApi.renderMathObject(renderRequest)
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
            const renderRequest = new model.RenderMathObjectOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                format: "png",
                index: 0
            });

            return wordsApi.renderMathObjectOnline(renderRequest)
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

            return wordsApi.renderPage(renderRequest)
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
            const renderRequest = new model.RenderPageOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                pageIndex: 1,
                format: "bmp"
            });

            return wordsApi.renderPageOnline(renderRequest)
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

            return wordsApi.renderParagraph(renderRequest)
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
            const renderRequest = new model.RenderParagraphOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                format: "png",
                index: 0
            });

            return wordsApi.renderParagraphOnline(renderRequest)
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

            return wordsApi.renderTable(renderRequest)
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
            const renderRequest = new model.RenderTableOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                format: "png",
                index: 0
            });

            return wordsApi.renderTableOnline(renderRequest)
            .then((renderRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of renderRequest: ", renderRequestResult);
            });
        });
    });

    describe("exampleReplaceText", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const replaceRequest = new model.ReplaceTextRequest({
                name: "Sample.docx",
                replaceText: new model.ReplaceTextParameters({
                    oldValue: "Testing",
                    newValue: "Aspose testing"
                })
            });

            return wordsApi.replaceText(replaceRequest)
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
            const replaceRequest = new model.ReplaceTextOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                replaceText: new model.ReplaceTextParameters({
                    oldValue: "aspose",
                    newValue: "aspose new"
                })
            });

            return wordsApi.replaceTextOnline(replaceRequest)
            .then((replaceRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of replaceRequest: ", replaceRequestResult);
            });
        });
    });

    describe("exampleReplaceWithText", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const replaceRequest = new model.ReplaceWithTextRequest({
                name: "Sample.docx",
                rangeStartIdentifier: "id0.0.0",
                rangeText: new model.ReplaceRange({
                    text: "Replaced header"
                }),
                rangeEndIdentifier: "id0.0.1"
            });

            return wordsApi.replaceWithText(replaceRequest)
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
            const replaceRequest = new model.ReplaceWithTextOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.doc"),
                rangeStartIdentifier: "id0.0.0",
                rangeText: new model.ReplaceRange({
                    text: "Replaced header"
                }),
                rangeEndIdentifier: "id0.0.1"
            });

            return wordsApi.replaceWithTextOnline(replaceRequest)
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

            return wordsApi.resetCache(resetRequest)
            .then((resetRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of resetRequest: ", resetRequestResult);
            });
        });
    });

    describe("exampleSaveAs", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const saveRequest = new model.SaveAsRequest({
                name: "Sample.docx",
                saveOptionsData: new model.SaveOptionsData({
                    saveFormat: "docx",
                    fileName: "/TestSaveAsFromPdfToDoc.docx"
                })
            });

            return wordsApi.saveAs(saveRequest)
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
            const saveRequest = new model.SaveAsOnlineRequest({
                document: fs.createReadStream(documentsDir + "Common/test_multi_pages.docx"),
                saveOptionsData: new model.SaveOptionsData({
                    saveFormat: "pdf",
                    fileName: "/TestSaveAs.pdf"
                })
            });

            return wordsApi.saveAsOnline(saveRequest)
            .then((saveRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of saveRequest: ", saveRequestResult);
            });
        });
    });

    describe("exampleSaveAsRange", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const saveRequest = new model.SaveAsRangeRequest({
                name: "Sample.docx",
                rangeStartIdentifier: "id0.0.0",
                documentParameters: new model.RangeDocument({
                    documentName: "/NewDoc.docx"
                }),
                rangeEndIdentifier: "id0.0.1"
            });

            return wordsApi.saveAsRange(saveRequest)
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
            const saveRequest = new model.SaveAsRangeOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.doc"),
                rangeStartIdentifier: "id0.0.0",
                documentParameters: new model.RangeDocument({
                    documentName: "/NewDoc.docx"
                }),
                rangeEndIdentifier: "id0.0.1"
            });

            return wordsApi.saveAsRangeOnline(saveRequest)
            .then((saveRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of saveRequest: ", saveRequestResult);
            });
        });
    });

    describe("exampleSaveAsTiff", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const saveRequest = new model.SaveAsTiffRequest({
                name: "Sample.docx",
                saveOptions: new model.TiffSaveOptionsData({
                    saveFormat: "tiff",
                    fileName: "/abc.tiff"
                })
            });

            return wordsApi.saveAsTiff(saveRequest)
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
            const saveRequest = new model.SaveAsTiffOnlineRequest({
                document: fs.createReadStream(documentsDir + "Common/test_multi_pages.docx"),
                saveOptions: new model.TiffSaveOptionsData({
                    saveFormat: "tiff",
                    fileName: "/abc.tiff"
                })
            });

            return wordsApi.saveAsTiffOnline(saveRequest)
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

            return wordsApi.search(searchRequest)
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
            const searchRequest = new model.SearchOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                pattern: "aspose"
            });

            return wordsApi.searchOnline(searchRequest)
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

            return wordsApi.splitDocument(splitRequest)
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
            const splitRequest = new model.SplitDocumentOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                format: "text",
                destFileName: "/TestSplitDocument.text",
                from: 1,
                to: 2
            });

            return wordsApi.splitDocumentOnline(splitRequest)
            .then((splitRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of splitRequest: ", splitRequestResult);
            });
        });
    });

    describe("exampleUnprotectDocument", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const unprotectRequest = new model.UnprotectDocumentRequest({
                name: "Sample.docx",
                protectionRequest: new model.ProtectionRequest({
                    password: "aspose"
                })
            });

            return wordsApi.unprotectDocument(unprotectRequest)
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
            const unprotectRequest = new model.UnprotectDocumentOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                protectionRequest: new model.ProtectionRequest({
                    password: "aspose"
                })
            });

            return wordsApi.unprotectDocumentOnline(unprotectRequest)
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

            const updateRequest = new model.UpdateBookmarkRequest({
                name: "Sample.docx",
                bookmarkName: bookmarkName,
                bookmarkData: new model.BookmarkData({
                    name: bookmarkName,
                    text: "This will be the text for Aspose"
                })
            });

            return wordsApi.updateBookmark(updateRequest)
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

            const updateRequest = new model.UpdateBookmarkOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                bookmarkName: bookmarkName,
                bookmarkData: new model.BookmarkData({
                    name: bookmarkName,
                    text: "This will be the text for Aspose"
                }),
                destFileName: "Sample.docx"
            });

            return wordsApi.updateBookmarkOnline(updateRequest)
            .then((updateRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of updateRequest: ", updateRequestResult);
            });
        });
    });

    describe("exampleUpdateBorder", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const updateRequest = new model.UpdateBorderRequest({
                name: "Sample.docx",
                borderType: "left",
                borderProperties: new model.Border({
                    borderType: model.Border.BorderTypeEnum.Left,
                    color: new model.XmlColor({
                        web: "#AABBCC"
                    }),
                    distanceFromText: 6.0,
                    lineStyle: model.Border.LineStyleEnum.DashDotStroker,
                    lineWidth: 2.0,
                    shadow: true
                }),
                nodePath: "tables/1/rows/0/cells/0"
            });

            return wordsApi.updateBorder(updateRequest)
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
            const updateRequest = new model.UpdateBorderOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                borderProperties: new model.Border({
                    borderType: model.Border.BorderTypeEnum.Left,
                    color: new model.XmlColor({
                        web: "#AABBCC"
                    }),
                    distanceFromText: 6,
                    lineStyle: model.Border.LineStyleEnum.DashDotStroker,
                    lineWidth: 2,
                    shadow: true
                }),
                borderType: "left",
                nodePath: "tables/1/rows/0/cells/0"
            });

            return wordsApi.updateBorderOnline(updateRequest)
            .then((updateRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of updateRequest: ", updateRequestResult);
            });
        });
    });

    describe("exampleUpdateComment", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const updateRequest = new model.UpdateCommentRequest({
                name: "Sample.docx",
                commentIndex: 0,
                comment: new model.CommentUpdate({
                    rangeStart: new model.DocumentPosition({
                        node: new model.NodeLink({
                            nodeId: "0.3.0"
                        }),
                        offset: 0
                    }),
                    rangeEnd: new model.DocumentPosition({
                        node: new model.NodeLink({
                            nodeId: "0.3.0"
                        }),
                        offset: 0
                    }),
                    initial: "IA",
                    author: "Imran Anwar",
                    text: "A new Comment"
                })
            });

            return wordsApi.updateComment(updateRequest)
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
            const updateRequest = new model.UpdateCommentOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                commentIndex: 0,
                comment: new model.CommentUpdate({
                    rangeStart: new model.DocumentPosition({
                        node: new model.NodeLink({
                            nodeId: "0.3.0"
                        }),
                        offset: 0
                    }),
                    rangeEnd: new model.DocumentPosition({
                        node: new model.NodeLink({
                            nodeId: "0.3.0"
                        }),
                        offset: 0
                    }),
                    initial: "IA",
                    author: "Imran Anwar",
                    text: "A new Comment"
                })
            });

            return wordsApi.updateCommentOnline(updateRequest)
            .then((updateRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of updateRequest: ", updateRequestResult);
            });
        });
    });

    describe("exampleUpdateCustomXmlPart", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const updateRequest = new model.UpdateCustomXmlPartRequest({
                name: "Sample.docx",
                customXmlPartIndex: 0,
                customXmlPart: new model.CustomXmlPartUpdate({
                    data: "<data>Hello world</data>"
                })
            });

            return wordsApi.updateCustomXmlPart(updateRequest)
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
            const updateRequest = new model.UpdateCustomXmlPartOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                customXmlPartIndex: 0,
                customXmlPart: new model.CustomXmlPartUpdate({
                    data: "<data>Hello world</data>"
                })
            });

            return wordsApi.updateCustomXmlPartOnline(updateRequest)
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
            const updateRequest = new model.UpdateDrawingObjectRequest({
                name: "Sample.docx",
                drawingObject: new model.DrawingObjectUpdate({
                    left: 0
                }),
                imageFile: fs.createReadStream(documentsDir + "Common/aspose-cloud.png"),
                index: 0
            });

            return wordsApi.updateDrawingObject(updateRequest)
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
            const updateRequest = new model.UpdateDrawingObjectOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                drawingObject: new model.DrawingObjectUpdate({
                    left: 0
                }),
                imageFile: fs.createReadStream(documentsDir + "Common/aspose-cloud.png"),
                index: 0
            });

            return wordsApi.updateDrawingObjectOnline(updateRequest)
            .then((updateRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of updateRequest: ", updateRequestResult);
            });
        });
    });

    describe("exampleUpdateField", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const updateRequest = new model.UpdateFieldRequest({
                name: "Sample.docx",
                index: 0,
                field: new model.FieldUpdate({
                    fieldCode: "{ NUMPAGES }"
                }),
                nodePath: "sections/0/paragraphs/0"
            });

            return wordsApi.updateField(updateRequest)
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
            const updateRequest = new model.UpdateFieldOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                index: 0,
                field: new model.FieldUpdate({
                    fieldCode: "{ NUMPAGES }"
                }),
                nodePath: "sections/0/paragraphs/0"
            });

            return wordsApi.updateFieldOnline(updateRequest)
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

            return wordsApi.updateFields(updateRequest)
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
            const updateRequest = new model.UpdateFieldsOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx")
            });

            return wordsApi.updateFieldsOnline(updateRequest)
            .then((updateRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of updateRequest: ", updateRequestResult);
            });
        });
    });

    describe("exampleUpdateFootnote", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const updateRequest = new model.UpdateFootnoteRequest({
                name: "Sample.docx",
                index: 0,
                footnoteDto: new model.FootnoteUpdate({
                    text: "new text is here"
                })
            });

            return wordsApi.updateFootnote(updateRequest)
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
            const updateRequest = new model.UpdateFootnoteOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.doc"),
                index: 0,
                footnoteDto: new model.FootnoteUpdate({
                    text: "new text is here"
                })
            });

            return wordsApi.updateFootnoteOnline(updateRequest)
            .then((updateRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of updateRequest: ", updateRequestResult);
            });
        });
    });

    describe("exampleUpdateFormField", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const updateRequest = new model.UpdateFormFieldRequest({
                name: "Sample.docx",
                index: 0,
                formField: new model.FormFieldTextInput({
                    name: "FullName",
                    enabled: true,
                    calculateOnExit: true,
                    statusText: "",
                    textInputType: model.FormFieldTextInput.TextInputTypeEnum.Regular,
                    textInputDefault: "No name"
                })
            });

            return wordsApi.updateFormField(updateRequest)
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
            const updateRequest = new model.UpdateFormFieldOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                index: 0,
                formField: new model.FormFieldTextInput({
                    name: "FullName",
                    enabled: true,
                    calculateOnExit: true,
                    statusText: "",
                    textInputType: model.FormFieldTextInput.TextInputTypeEnum.Regular,
                    textInputDefault: "No name"
                }),
                nodePath: "sections/0"
            });

            return wordsApi.updateFormFieldOnline(updateRequest)
            .then((updateRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of updateRequest: ", updateRequestResult);
            });
        });
    });

    describe("exampleUpdateList", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const updateRequest = new model.UpdateListRequest({
                name: "TestGetLists.doc",
                listId: 1,
                listUpdate: new model.ListUpdate({
                    isRestartAtEachSection: true
                })
            });

            return wordsApi.updateList(updateRequest)
            .then((updateRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of updateRequest: ", updateRequestResult);
            });
        });
    });

    describe("exampleUpdateListLevel", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const updateRequest = new model.UpdateListLevelRequest({
                name: "TestGetLists.doc",
                listId: 1,
                listLevel: 1,
                listUpdate: new model.ListLevelUpdate({
                    alignment: model.ListLevelUpdate.AlignmentEnum.Right
                })
            });

            return wordsApi.updateListLevel(updateRequest)
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
            const updateRequest = new model.UpdateListLevelOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.doc"),
                listId: 1,
                listLevel: 1,
                listUpdate: new model.ListLevelUpdate({
                    alignment: model.ListLevelUpdate.AlignmentEnum.Right
                })
            });

            return wordsApi.updateListLevelOnline(updateRequest)
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
            const updateRequest = new model.UpdateListOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.doc"),
                listId: 1,
                listUpdate: new model.ListUpdate({
                    isRestartAtEachSection: true
                })
            });

            return wordsApi.updateListOnline(updateRequest)
            .then((updateRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of updateRequest: ", updateRequestResult);
            });
        });
    });

    describe("exampleUpdateParagraphFormat", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const updateRequest = new model.UpdateParagraphFormatRequest({
                name: "Sample.docx",
                index: 0,
                paragraphFormatDto: new model.ParagraphFormatUpdate({
                    alignment: model.ParagraphFormatUpdate.AlignmentEnum.Right
                })
            });

            return wordsApi.updateParagraphFormat(updateRequest)
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
            const updateRequest = new model.UpdateParagraphFormatOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                index: 0,
                paragraphFormatDto: new model.ParagraphFormatUpdate({
                    alignment: model.ParagraphFormatUpdate.AlignmentEnum.Right
                })
            });

            return wordsApi.updateParagraphFormatOnline(updateRequest)
            .then((updateRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of updateRequest: ", updateRequestResult);
            });
        });
    });

    describe("exampleUpdateParagraphListFormat", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const updateRequest = new model.UpdateParagraphListFormatRequest({
                name: "Sample.docx",
                index: 0,
                listFormatDto: new model.ListFormatUpdate({
                    listId: 2
                })
            });

            return wordsApi.updateParagraphListFormat(updateRequest)
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
            const updateRequest = new model.UpdateParagraphListFormatOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.doc"),
                listFormatDto: new model.ListFormatUpdate({
                    listId: 2
                }),
                index: 0
            });

            return wordsApi.updateParagraphListFormatOnline(updateRequest)
            .then((updateRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of updateRequest: ", updateRequestResult);
            });
        });
    });

    describe("exampleUpdateRun", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const updateRequest = new model.UpdateRunRequest({
                name: "Sample.docx",
                run: new model.RunUpdate({
                    text: "run with text"
                }),
                paragraphPath: "paragraphs/1",
                index: 0
            });

            return wordsApi.updateRun(updateRequest)
            .then((updateRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of updateRequest: ", updateRequestResult);
            });
        });
    });

    describe("exampleUpdateRunFont", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const updateRequest = new model.UpdateRunFontRequest({
                name: "Sample.docx",
                fontDto: new model.Font({
                    bold: true
                }),
                paragraphPath: "paragraphs/0",
                index: 0
            });

            return wordsApi.updateRunFont(updateRequest)
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
            const updateRequest = new model.UpdateRunFontOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                fontDto: new model.Font({
                    bold: true
                }),
                paragraphPath: "paragraphs/0",
                index: 0
            });

            return wordsApi.updateRunFontOnline(updateRequest)
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
            const updateRequest = new model.UpdateRunOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.doc"),
                run: new model.RunUpdate({
                    text: "run with text"
                }),
                paragraphPath: "paragraphs/1",
                index: 0
            });

            return wordsApi.updateRunOnline(updateRequest)
            .then((updateRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of updateRequest: ", updateRequestResult);
            });
        });
    });

    describe("exampleUpdateSectionPageSetup", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const updateRequest = new model.UpdateSectionPageSetupRequest({
                name: "Sample.docx",
                sectionIndex: 0,
                pageSetup: new model.PageSetup({
                    rtlGutter: true,
                    leftMargin: 10.0,
                    orientation: model.PageSetup.OrientationEnum.Landscape,
                    paperSize: model.PageSetup.PaperSizeEnum.A5
                })
            });

            return wordsApi.updateSectionPageSetup(updateRequest)
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
            const updateRequest = new model.UpdateSectionPageSetupOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                sectionIndex: 0,
                pageSetup: new model.PageSetup({
                    rtlGutter: true,
                    leftMargin: 10,
                    orientation: model.PageSetup.OrientationEnum.Landscape,
                    paperSize: model.PageSetup.PaperSizeEnum.A5
                })
            });

            return wordsApi.updateSectionPageSetupOnline(updateRequest)
            .then((updateRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of updateRequest: ", updateRequestResult);
            });
        });
    });

    describe("exampleUpdateStyle", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const updateRequest = new model.UpdateStyleRequest({
                name: "Sample.docx",
                styleUpdate: new model.StyleUpdate({
                    name: "My Style"
                }),
                styleName: "Heading 1"
            });

            return wordsApi.updateStyle(updateRequest)
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
            const updateRequest = new model.UpdateStyleOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                styleUpdate: new model.StyleUpdate({
                    name: "My Style"
                }),
                styleName: "Heading 1"
            });

            return wordsApi.updateStyleOnline(updateRequest)
            .then((updateRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of updateRequest: ", updateRequestResult);
            });
        });
    });

    describe("exampleUpdateTableCellFormat", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const updateRequest = new model.UpdateTableCellFormatRequest({
                name: "Sample.docx",
                format: new model.TableCellFormat({
                    bottomPadding: 5.0,
                    fitText: true,
                    horizontalMerge: model.TableCellFormat.HorizontalMergeEnum.First,
                    wrapText: true
                }),
                tableRowPath: "sections/0/tables/2/rows/0",
                index: 0
            });

            return wordsApi.updateTableCellFormat(updateRequest)
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
            const updateRequest = new model.UpdateTableCellFormatOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                format: new model.TableCellFormat({
                    bottomPadding: 5,
                    fitText: true,
                    horizontalMerge: model.TableCellFormat.HorizontalMergeEnum.First,
                    wrapText: true
                }),
                tableRowPath: "sections/0/tables/2/rows/0",
                index: 0
            });

            return wordsApi.updateTableCellFormatOnline(updateRequest)
            .then((updateRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of updateRequest: ", updateRequestResult);
            });
        });
    });

    describe("exampleUpdateTableProperties", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const updateRequest = new model.UpdateTablePropertiesRequest({
                name: "Sample.docx",
                properties: new model.TableProperties({
                    alignment: model.TableProperties.AlignmentEnum.Right,
                    allowAutoFit: false,
                    bidi: true,
                    bottomPadding: 1.0,
                    cellSpacing: 2.0,
                    styleOptions: model.TableProperties.StyleOptionsEnum.ColumnBands
                }),
                index: 1
            });

            return wordsApi.updateTableProperties(updateRequest)
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
            const updateRequest = new model.UpdateTablePropertiesOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                properties: new model.TableProperties({
                    alignment: model.TableProperties.AlignmentEnum.Right,
                    allowAutoFit: false,
                    bidi: true,
                    bottomPadding: 1,
                    cellSpacing: 2,
                    styleOptions: model.TableProperties.StyleOptionsEnum.ColumnBands
                }),
                index: 1
            });

            return wordsApi.updateTablePropertiesOnline(updateRequest)
            .then((updateRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of updateRequest: ", updateRequestResult);
            });
        });
    });

    describe("exampleUpdateTableRowFormat", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const updateRequest = new model.UpdateTableRowFormatRequest({
                name: "Sample.docx",
                format: new model.TableRowFormat({
                    allowBreakAcrossPages: true,
                    headingFormat: true,
                    height: 10.0,
                    heightRule: model.TableRowFormat.HeightRuleEnum.Exactly
                }),
                tablePath: "sections/0/tables/2",
                index: 0
            });

            return wordsApi.updateTableRowFormat(updateRequest)
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
            const updateRequest = new model.UpdateTableRowFormatOnlineRequest({
                document: fs.createReadStream(documentsDir + "Sample.docx"),
                format: new model.TableRowFormat({
                    allowBreakAcrossPages: true,
                    headingFormat: true,
                    height: 10,
                    heightRule: model.TableRowFormat.HeightRuleEnum.Auto
                }),
                tablePath: "sections/0/tables/2",
                index: 0
            });

            return wordsApi.updateTableRowFormatOnline(updateRequest)
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
            const uploadRequest = new model.UploadFileRequest({
                fileContent: fs.createReadStream(documentsDir + "Sample.docx"),
                path: "Sample.docx"
            });

            return wordsApi.uploadFile(uploadRequest)
            .then((uploadRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of uploadRequest: ", uploadRequestResult);
            });
        });
    });
});
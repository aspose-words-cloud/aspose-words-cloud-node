/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="paragraphTests.ts">
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
import * as BaseTest from "../baseTest";

// Example of how to work with paragraph.
describe("paragraph", () => {
    expect(fs);
    const remoteDataFolder = BaseTest.remoteBaseTestDataFolder + "/DocumentElements/Paragraphs";
    const localFile = "Common/test_multi_pages.docx";
    const listFolder = "DocumentElements/ParagraphListFormat";
    const tabStopFolder = "DocumentElements/Paragraphs";

    // Test for getting paragraph.
    describe("getDocumentParagraphByIndex test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestGetDocumentParagraphByIndex.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.GetParagraphRequest({
                    name: remoteFileName,
                    index: 0,
                    nodePath: "sections/0",
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.getParagraph(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.paragraph).to.exist;
                    expect(resultApi.body.paragraph.nodeId).to.equal("0.0.0");
                });

            });

       });
    });

    // Test for getting paragraph online.
    describe("getDocumentParagraphOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.GetParagraphOnlineRequest({
                document: fs.createReadStream(BaseTest.localBaseTestDataFolder + localFile),
                index: 0,
                nodePath: "sections/0"
            });

            // Act
            return wordsApi.getParagraphOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });

    // Test for getting paragraph without node path.
    describe("getDocumentParagraphByIndexWithoutNodePath test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestGetDocumentParagraphByIndexWithoutNodePath.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.GetParagraphRequest({
                    name: remoteFileName,
                    index: 0,
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.getParagraph(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.paragraph).to.exist;
                    expect(resultApi.body.paragraph.nodeId).to.equal("0.0.0");
                });

            });

       });
    });

    // Test for getting all paragraphs.
    describe("getDocumentParagraphs test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestGetDocumentParagraphs.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.GetParagraphsRequest({
                    name: remoteFileName,
                    nodePath: "sections/0",
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.getParagraphs(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.paragraphs).to.exist;
                    expect(resultApi.body.paragraphs.paragraphLinkList).to.exist;
                    expect(resultApi.body.paragraphs.paragraphLinkList).to.have.lengthOf(15);
                    expect(resultApi.body.paragraphs.paragraphLinkList[0].text).to.equal("Page 1 of 3");
                });

            });

       });
    });

    // Test for getting all paragraphs online.
    describe("getDocumentParagraphsOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.GetParagraphsOnlineRequest({
                document: fs.createReadStream(BaseTest.localBaseTestDataFolder + localFile),
                nodePath: "sections/0"
            });

            // Act
            return wordsApi.getParagraphsOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });

    // Test for getting all paragraphs without node path.
    describe("getDocumentParagraphsWithoutNodePath test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestGetDocumentParagraphsWithoutNodePath.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.GetParagraphsRequest({
                    name: remoteFileName,
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.getParagraphs(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.paragraphs).to.exist;
                    expect(resultApi.body.paragraphs.paragraphLinkList).to.exist;
                    expect(resultApi.body.paragraphs.paragraphLinkList).to.have.lengthOf(15);
                    expect(resultApi.body.paragraphs.paragraphLinkList[0].text).to.equal("Page 1 of 3");
                });

            });

       });
    });

    // Test for getting paragraph run.
    describe("getDocumentParagraphRun test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestGetDocumentParagraphRun.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.GetRunRequest({
                    name: remoteFileName,
                    paragraphPath: "paragraphs/0",
                    index: 0,
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.getRun(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.run).to.exist;
                    expect(resultApi.body.run.text).to.equal("Page ");
                });

            });

       });
    });

    // Test for getting paragraph run online.
    describe("getDocumentParagraphRunOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.GetRunOnlineRequest({
                document: fs.createReadStream(BaseTest.localBaseTestDataFolder + localFile),
                paragraphPath: "paragraphs/0",
                index: 0
            });

            // Act
            return wordsApi.getRunOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });

    // Test for getting paragraph run font.
    describe("getDocumentParagraphRunFont test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestGetDocumentParagraphRunFont.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.GetRunFontRequest({
                    name: remoteFileName,
                    paragraphPath: "paragraphs/0",
                    index: 0,
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.getRunFont(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.font).to.exist;
                    expect(resultApi.body.font.name).to.equal("Times New Roman");
                });

            });

       });
    });

    // Test for getting paragraph run font online.
    describe("getDocumentParagraphRunFontOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.GetRunFontOnlineRequest({
                document: fs.createReadStream(BaseTest.localBaseTestDataFolder + localFile),
                paragraphPath: "paragraphs/0",
                index: 0
            });

            // Act
            return wordsApi.getRunFontOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });

    // Test for getting paragraph runs.
    describe("getParagraphRuns test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestGetParagraphRuns.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.GetRunsRequest({
                    name: remoteFileName,
                    paragraphPath: "sections/0/paragraphs/0",
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.getRuns(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.runs).to.exist;
                    expect(resultApi.body.runs.list).to.exist;
                    expect(resultApi.body.runs.list).to.have.lengthOf(6);
                    expect(resultApi.body.runs.list[0].text).to.equal("Page ");
                });

            });

       });
    });

    // Test for getting paragraph runs online.
    describe("getParagraphRunsOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.GetRunsOnlineRequest({
                document: fs.createReadStream(BaseTest.localBaseTestDataFolder + localFile),
                paragraphPath: "sections/0/paragraphs/0"
            });

            // Act
            return wordsApi.getRunsOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });

    // Test for updating paragraph run font.
    describe("updateRunFont test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestUpdateRunFont.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.UpdateRunFontRequest({
                    name: remoteFileName,
                    fontDto: new model.Font({
                        bold: true
                    }),
                    paragraphPath: "paragraphs/0",
                    index: 0,
                    folder: remoteDataFolder,
                    destFileName: BaseTest.remoteBaseTestOutFolder + "/" + remoteFileName
                });

                // Act
                return wordsApi.updateRunFont(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.font).to.exist;
                    expect(resultApi.body.font.bold).to.true;
                });

            });

       });
    });

    // Test for updating paragraph run font online.
    describe("updateRunFontOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.UpdateRunFontOnlineRequest({
                document: fs.createReadStream(BaseTest.localBaseTestDataFolder + localFile),
                fontDto: new model.Font({
                    bold: true
                }),
                paragraphPath: "paragraphs/0",
                index: 0
            });

            // Act
            return wordsApi.updateRunFontOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });

    // Test for adding paragraph.
    describe("insertParagraph test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestInsertParagraph.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.InsertParagraphRequest({
                    name: remoteFileName,
                    paragraph: new model.ParagraphInsert({
                        text: "This is a new paragraph for your document"
                    }),
                    nodePath: "sections/0",
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.insertParagraph(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.paragraph).to.exist;
                    expect(resultApi.body.paragraph.nodeId).to.equal("0.3.8");
                });

            });

       });
    });

    // Test for adding paragraph online.
    describe("insertParagraphOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.InsertParagraphOnlineRequest({
                document: fs.createReadStream(BaseTest.localBaseTestDataFolder + localFile),
                paragraph: new model.ParagraphInsert({
                    text: "This is a new paragraph for your document"
                }),
                nodePath: "sections/0"
            });

            // Act
            return wordsApi.insertParagraphOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });

    // Test for adding paragraph without node path.
    describe("insertParagraphWithoutNodePath test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestInsertParagraphWithoutNodePath.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.InsertParagraphRequest({
                    name: remoteFileName,
                    paragraph: new model.ParagraphInsert({
                        text: "This is a new paragraph for your document"
                    }),
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.insertParagraph(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.paragraph).to.exist;
                    expect(resultApi.body.paragraph.nodeId).to.equal("0.3.8");
                });

            });

       });
    });

    // Test for paragraph rendering.
    describe("renderParagraph test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestRenderParagraph.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.RenderParagraphRequest({
                    name: remoteFileName,
                    format: "png",
                    index: 0,
                    nodePath: "",
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.renderParagraph(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                });

            });

       });
    });

    // Test for paragraph rendering.
    describe("renderParagraphOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.RenderParagraphOnlineRequest({
                document: fs.createReadStream(BaseTest.localBaseTestDataFolder + localFile),
                format: "png",
                index: 0,
                nodePath: ""
            });

            // Act
            return wordsApi.renderParagraphOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });

    // Test for paragraph rendering without node path.
    describe("renderParagraphWithoutNodePath test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestRenderParagraphWithoutNodePath.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.RenderParagraphRequest({
                    name: remoteFileName,
                    format: "png",
                    index: 0,
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.renderParagraph(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                });

            });

       });
    });

    // Test for getting paragraph format settings.
    describe("getParagraphFormat test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestGetDocumentParagraphs.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.GetParagraphFormatRequest({
                    name: remoteFileName,
                    index: 0,
                    nodePath: "",
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.getParagraphFormat(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.paragraphFormat).to.exist;
                    expect(resultApi.body.paragraphFormat.styleName).to.equal("Normal");
                });

            });

       });
    });

    // Test for getting paragraph format settings online.
    describe("getParagraphFormatOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.GetParagraphFormatOnlineRequest({
                document: fs.createReadStream(BaseTest.localBaseTestDataFolder + localFile),
                index: 0,
                nodePath: ""
            });

            // Act
            return wordsApi.getParagraphFormatOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });

    // Test for getting paragraph format settings without node path.
    describe("getParagraphFormatWithoutNodePath test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestGetDocumentParagraphsWithoutNodePath.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.GetParagraphFormatRequest({
                    name: remoteFileName,
                    index: 0,
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.getParagraphFormat(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.paragraphFormat).to.exist;
                    expect(resultApi.body.paragraphFormat.styleName).to.equal("Normal");
                });

            });

       });
    });

    // Test for updating  paragraph format settings.
    describe("updateParagraphFormat test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestGetDocumentParagraphs.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.UpdateParagraphFormatRequest({
                    name: remoteFileName,
                    index: 0,
                    paragraphFormatDto: new model.ParagraphFormatUpdate({
                        alignment: model.ParagraphFormatUpdate.AlignmentEnum.Right
                    }),
                    nodePath: "",
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.updateParagraphFormat(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.paragraphFormat).to.exist;

                });

            });

       });
    });

    // Test for updating  paragraph format settings online.
    describe("updateParagraphFormatOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.UpdateParagraphFormatOnlineRequest({
                document: fs.createReadStream(BaseTest.localBaseTestDataFolder + localFile),
                index: 0,
                paragraphFormatDto: new model.ParagraphFormatUpdate({
                    alignment: model.ParagraphFormatUpdate.AlignmentEnum.Right
                }),
                nodePath: ""
            });

            // Act
            return wordsApi.updateParagraphFormatOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });

    // Test for deleting  a paragraph.
    describe("deleteParagraph test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestDeleteParagraph.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.DeleteParagraphRequest({
                    name: remoteFileName,
                    index: 0,
                    nodePath: "",
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.deleteParagraph(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.statusCode).to.equal(200);
                });

            });

       });
    });

    // Test for deleting  a paragraph online.
    describe("deleteParagraphOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.DeleteParagraphOnlineRequest({
                document: fs.createReadStream(BaseTest.localBaseTestDataFolder + localFile),
                index: 0,
                nodePath: ""
            });

            // Act
            return wordsApi.deleteParagraphOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });

    // Test for deleting  a paragraph without node path.
    describe("deleteParagraphWithoutNodePath test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestDeleteParagraphWithoutNodePath.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.DeleteParagraphRequest({
                    name: remoteFileName,
                    index: 0,
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.deleteParagraph(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.statusCode).to.equal(200);
                });

            });

       });
    });

    // Test for getting paragraph list format.
    describe("getParagraphListFormat test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestParagraphGetListFormat.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + listFolder + "/ParagraphGetListFormat.doc"
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.GetParagraphListFormatRequest({
                    name: remoteFileName,
                    index: 0,
                    nodePath: "",
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.getParagraphListFormat(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.listFormat).to.exist;
                    expect(resultApi.body.listFormat.listId).to.equal(1);
                });

            });

       });
    });

    // Test for getting paragraph list format online.
    describe("getParagraphListFormatOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.GetParagraphListFormatOnlineRequest({
                document: fs.createReadStream(BaseTest.localBaseTestDataFolder + listFolder + "/ParagraphGetListFormat.doc"),
                index: 0,
                nodePath: ""
            });

            // Act
            return wordsApi.getParagraphListFormatOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });

    // Test for getting paragraph list format without node path.
    describe("getParagraphListFormatWithoutNodePath test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestParagraphGetListFormatWithoutNodePath.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + listFolder + "/ParagraphGetListFormat.doc"
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.GetParagraphListFormatRequest({
                    name: remoteFileName,
                    index: 0,
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.getParagraphListFormat(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.listFormat).to.exist;
                    expect(resultApi.body.listFormat.listId).to.equal(1);
                });

            });

       });
    });

    // Test for updating paragraph list format.
    describe("updateParagraphListFormat test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestUpdateParagraphListFormat.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + listFolder + "/ParagraphUpdateListFormat.doc"
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.UpdateParagraphListFormatRequest({
                    name: remoteFileName,
                    index: 0,
                    listFormatDto: new model.ListFormatUpdate({
                        listId: 2
                    }),
                    nodePath: "",
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.updateParagraphListFormat(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.listFormat).to.exist;
                    expect(resultApi.body.listFormat.listId).to.equal(2);
                });

            });

       });
    });

    // Test for updating paragraph list format online.
    describe("updateParagraphListFormatOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.UpdateParagraphListFormatOnlineRequest({
                document: fs.createReadStream(BaseTest.localBaseTestDataFolder + listFolder + "/ParagraphUpdateListFormat.doc"),
                listFormatDto: new model.ListFormatUpdate({
                    listId: 2
                }),
                index: 0,
                nodePath: ""
            });

            // Act
            return wordsApi.updateParagraphListFormatOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });

    // Test for updating paragraph list format without node path.
    describe("updateParagraphListFormatWithoutNodePath test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestUpdateParagraphListFormatWithoutNodePath.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + listFolder + "/ParagraphUpdateListFormat.doc"
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.UpdateParagraphListFormatRequest({
                    name: remoteFileName,
                    index: 0,
                    listFormatDto: new model.ListFormatUpdate({
                        listId: 2
                    }),
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.updateParagraphListFormat(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.listFormat).to.exist;
                    expect(resultApi.body.listFormat.listId).to.equal(2);
                });

            });

       });
    });

    // Test for deleting paragraph list format.
    describe("deleteParagraphListFormat test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestDeleteParagraphListFormat.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + listFolder + "/ParagraphDeleteListFormat.doc"
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.DeleteParagraphListFormatRequest({
                    name: remoteFileName,
                    index: 0,
                    nodePath: "",
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.deleteParagraphListFormat(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                });

            });

       });
    });

    // Test for deleting paragraph list format online.
    describe("deleteParagraphListFormatOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.DeleteParagraphListFormatOnlineRequest({
                document: fs.createReadStream(BaseTest.localBaseTestDataFolder + listFolder + "/ParagraphDeleteListFormat.doc"),
                index: 0,
                nodePath: ""
            });

            // Act
            return wordsApi.deleteParagraphListFormatOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });

    // Test for deleting paragraph list format without node path.
    describe("deleteParagraphListFormatWithoutNodePath test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestDeleteParagraphListFormatWithoutNodePath.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + listFolder + "/ParagraphDeleteListFormat.doc"
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.DeleteParagraphListFormatRequest({
                    name: remoteFileName,
                    index: 0,
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.deleteParagraphListFormat(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                });

            });

       });
    });

    // Test for getting paragraph tab stops.
    describe("getParagraphTabStops test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestGetParagraphTabStops.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + tabStopFolder + "/ParagraphTabStops.docx"
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.GetParagraphTabStopsRequest({
                    name: remoteFileName,
                    index: 0,
                    nodePath: "",
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.getParagraphTabStops(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.tabStops).to.exist;
                    expect(resultApi.body.tabStops).to.have.lengthOf(2);
                    expect(resultApi.body.tabStops[0].position).to.equal(72.0);
                });

            });

       });
    });

    // Test for getting paragraph tab stops online.
    describe("getParagraphTabStopsOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.GetParagraphTabStopsOnlineRequest({
                document: fs.createReadStream(BaseTest.localBaseTestDataFolder + tabStopFolder + "/ParagraphTabStops.docx"),
                index: 0,
                nodePath: ""
            });

            // Act
            return wordsApi.getParagraphTabStopsOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });

    // Test for getting paragraph tab stops without node path.
    describe("getParagraphTabStopsWithoutNodePath test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestGetParagraphTabStopsWithoutNodePath.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + tabStopFolder + "/ParagraphTabStops.docx"
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.GetParagraphTabStopsRequest({
                    name: remoteFileName,
                    index: 0,
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.getParagraphTabStops(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.tabStops).to.exist;
                    expect(resultApi.body.tabStops).to.have.lengthOf(2);
                    expect(resultApi.body.tabStops[0].position).to.equal(72.0);
                });

            });

       });
    });

    // Test for inserting paragraph tab stop.
    describe("insertParagraphTabStops test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestInsertOrUpdateParagraphTabStop.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + tabStopFolder + "/ParagraphTabStops.docx"
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.InsertOrUpdateParagraphTabStopRequest({
                    name: remoteFileName,
                    index: 0,
                    tabStopInsertDto: new model.TabStopInsert({
                        alignment: model.TabStopInsert.AlignmentEnum.Left,
                        leader: model.TabStopInsert.LeaderEnum.None,
                        position: 100.0
                    }),
                    nodePath: "",
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.insertOrUpdateParagraphTabStop(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.tabStops).to.exist;
                    expect(resultApi.body.tabStops).to.have.lengthOf(3);
                    expect(resultApi.body.tabStops[1].position).to.equal(100.0);


                });

            });

       });
    });

    // Test for inserting paragraph tab stop online.
    describe("insertParagraphTabStopsOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.InsertOrUpdateParagraphTabStopOnlineRequest({
                document: fs.createReadStream(BaseTest.localBaseTestDataFolder + tabStopFolder + "/ParagraphTabStops.docx"),
                tabStopInsertDto: new model.TabStopInsert({
                    alignment: model.TabStopInsert.AlignmentEnum.Left,
                    leader: model.TabStopInsert.LeaderEnum.None,
                    position: 72
                }),
                index: 0,
                nodePath: ""
            });

            // Act
            return wordsApi.insertOrUpdateParagraphTabStopOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });

    // Test for inserting paragraph tab stop without node path.
    describe("insertParagraphTabStopsWithoutNodePath test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestInsertOrUpdateParagraphTabStopWithoutNodePath.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + tabStopFolder + "/ParagraphTabStops.docx"
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.InsertOrUpdateParagraphTabStopRequest({
                    name: remoteFileName,
                    index: 0,
                    tabStopInsertDto: new model.TabStopInsert({
                        alignment: model.TabStopInsert.AlignmentEnum.Left,
                        leader: model.TabStopInsert.LeaderEnum.None,
                        position: 100.0
                    }),
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.insertOrUpdateParagraphTabStop(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.tabStops).to.exist;
                    expect(resultApi.body.tabStops).to.have.lengthOf(3);
                    expect(resultApi.body.tabStops[1].position).to.equal(100.0);


                });

            });

       });
    });

    // Test for deleting all paragraph tab stops.
    describe("deleteAllParagraphTabStops test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestDeleteAllParagraphTabStops.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + tabStopFolder + "/ParagraphTabStops.docx"
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.DeleteAllParagraphTabStopsRequest({
                    name: remoteFileName,
                    index: 0,
                    nodePath: "",
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.deleteAllParagraphTabStops(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.tabStops).to.exist;
                    expect(resultApi.body.tabStops).to.have.lengthOf(0);
                });

            });

       });
    });

    // Test for deleting all paragraph tab stops online.
    describe("deleteAllParagraphTabStopsOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.DeleteAllParagraphTabStopsOnlineRequest({
                document: fs.createReadStream(BaseTest.localBaseTestDataFolder + tabStopFolder + "/ParagraphTabStops.docx"),
                index: 0,
                nodePath: ""
            });

            // Act
            return wordsApi.deleteAllParagraphTabStopsOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });

    // Test for deleting all paragraph tab stops without node path.
    describe("deleteAllParagraphTabStopsWithoutNodePath test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestDeleteAllParagraphTabStopsWithoutNodePath.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + tabStopFolder + "/ParagraphTabStops.docx"
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.DeleteAllParagraphTabStopsRequest({
                    name: remoteFileName,
                    index: 0,
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.deleteAllParagraphTabStops(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.tabStops).to.exist;
                    expect(resultApi.body.tabStops).to.have.lengthOf(0);
                });

            });

       });
    });

    // Test for deleting a tab stops.
    describe("deleteParagraphTabStop test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestDeleteParagraphTabStop.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + tabStopFolder + "/ParagraphTabStops.docx"
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.DeleteParagraphTabStopRequest({
                    name: remoteFileName,
                    position: 72.0,
                    index: 0,
                    nodePath: "",
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.deleteParagraphTabStop(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.tabStops).to.exist;
                    expect(resultApi.body.tabStops).to.have.lengthOf(1);
                });

            });

       });
    });

    // Test for deleting a tab stops online.
    describe("deleteParagraphTabStopOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.DeleteParagraphTabStopOnlineRequest({
                document: fs.createReadStream(BaseTest.localBaseTestDataFolder + tabStopFolder + "/ParagraphTabStops.docx"),
                position: 72.0,
                index: 0,
                nodePath: ""
            });

            // Act
            return wordsApi.deleteParagraphTabStopOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });

    // Test for deleting a tab stops without node path.
    describe("deleteParagraphTabStopWithoutNodePath test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestDeleteParagraphTabStopWithoutNodePath.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + tabStopFolder + "/ParagraphTabStops.docx"
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.DeleteParagraphTabStopRequest({
                    name: remoteFileName,
                    position: 72.0,
                    index: 0,
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.deleteParagraphTabStop(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.tabStops).to.exist;
                    expect(resultApi.body.tabStops).to.have.lengthOf(1);
                });

            });

       });
    });
});

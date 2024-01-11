/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="footnoteTests.ts">
 *   Copyright (c) 2024 Aspose.Words for Cloud
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
import * as model from "../../src/model/model";
import * as BaseTest from "../baseTest";

// Example of how to work with footnotes.
describe("footnote", () => {
    expect(fs);
    const remoteDataFolder = BaseTest.remoteBaseTestDataFolder + "/DocumentElements/Footnotes";
    const footnoteFolder = "DocumentElements/Footnotes";

    // Test for adding footnote.
    describe("insertFootnote test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestInsertFootnote.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + footnoteFolder + "/Footnote.doc"
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const requestFootnoteDto = new model.FootnoteInsert({
                    footnoteType: model.FootnoteInsert.FootnoteTypeEnum.Endnote,
                    text: "test endnote"
                })
                const request = new model.InsertFootnoteRequest({
                    name: remoteFileName,
                    footnoteDto: requestFootnoteDto,
                    nodePath: "",
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.insertFootnote(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.footnote).to.exist;
                    expect(resultApi.body.footnote.nodeId).to.equal("0.1.7.1");
                    expect(resultApi.body.footnote.text).to.equal(" test endnote" + "\r\n");
                });

            });

       });
    });

    // Test for adding footnote online.
    describe("insertFootnoteOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const requestDocument = fs.createReadStream(BaseTest.localBaseTestDataFolder + footnoteFolder + "/Footnote.doc");
            const requestFootnoteDto = new model.FootnoteInsert({
                footnoteType: model.FootnoteInsert.FootnoteTypeEnum.Endnote,
                text: "test endnote"
            })
            const request = new model.InsertFootnoteOnlineRequest({
                document: requestDocument,
                footnoteDto: requestFootnoteDto,
                nodePath: ""
            });

            // Act
            return wordsApi.insertFootnoteOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });

    // Test for adding footnote without node path.
    describe("insertFootnoteWithoutNodePath test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestInsertFootnoteWithoutNodePath.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + footnoteFolder + "/Footnote.doc"
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const requestFootnoteDto = new model.FootnoteInsert({
                    footnoteType: model.FootnoteInsert.FootnoteTypeEnum.Endnote,
                    text: "test endnote"
                })
                const request = new model.InsertFootnoteRequest({
                    name: remoteFileName,
                    footnoteDto: requestFootnoteDto,
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.insertFootnote(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.footnote).to.exist;
                    expect(resultApi.body.footnote.nodeId).to.equal("0.1.7.1");
                    expect(resultApi.body.footnote.text).to.equal(" test endnote" + "\r\n");
                });

            });

       });
    });

    // Test for deleting footnote.
    describe("deleteFootnote test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestDeleteFootnote.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + footnoteFolder + "/Footnote.doc"
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.DeleteFootnoteRequest({
                    name: remoteFileName,
                    index: 0,
                    nodePath: "",
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.deleteFootnote(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.statusCode).to.equal(200);
                });

            });

       });
    });

    // Test for deleting footnote online.
    describe("deleteFootnoteOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const requestDocument = fs.createReadStream(BaseTest.localBaseTestDataFolder + footnoteFolder + "/Footnote.doc");
            const request = new model.DeleteFootnoteOnlineRequest({
                document: requestDocument,
                index: 0,
                nodePath: ""
            });

            // Act
            return wordsApi.deleteFootnoteOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });

    // Test for deleting footnote without node path.
    describe("deleteFootnoteWithoutNodePath test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestDeleteFootnoteWithoutNodePath.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + footnoteFolder + "/Footnote.doc"
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.DeleteFootnoteRequest({
                    name: remoteFileName,
                    index: 0,
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.deleteFootnote(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.statusCode).to.equal(200);
                });

            });

       });
    });

    // Test for getting footnotes.
    describe("getFootnotes test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestGetFootnotes.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + footnoteFolder + "/Footnote.doc"
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.GetFootnotesRequest({
                    name: remoteFileName,
                    nodePath: "",
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.getFootnotes(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.footnotes).to.exist;
                    expect(resultApi.body.footnotes.list).to.exist;
                    expect(resultApi.body.footnotes.list).to.have.lengthOf(6);
                    expect(resultApi.body.footnotes.list[0].text).to.equal(" Footnote 1." + "\r\n");
                });

            });

       });
    });

    // Test for getting footnotes online.
    describe("getFootnotesOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const requestDocument = fs.createReadStream(BaseTest.localBaseTestDataFolder + footnoteFolder + "/Footnote.doc");
            const request = new model.GetFootnotesOnlineRequest({
                document: requestDocument,
                nodePath: ""
            });

            // Act
            return wordsApi.getFootnotesOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });

    // Test for getting footnotes without node path.
    describe("getFootnotesWithoutNodePath test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestGetFootnotesWithoutNodePath.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + footnoteFolder + "/Footnote.doc"
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.GetFootnotesRequest({
                    name: remoteFileName,
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.getFootnotes(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.footnotes).to.exist;
                    expect(resultApi.body.footnotes.list).to.exist;
                    expect(resultApi.body.footnotes.list).to.have.lengthOf(6);
                    expect(resultApi.body.footnotes.list[0].text).to.equal(" Footnote 1." + "\r\n");
                });

            });

       });
    });

    // Test for getting footnote.
    describe("getFootnote test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestGetFootnote.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + footnoteFolder + "/Footnote.doc"
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.GetFootnoteRequest({
                    name: remoteFileName,
                    index: 0,
                    nodePath: "",
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.getFootnote(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.footnote).to.exist;
                    expect(resultApi.body.footnote.text).to.equal(" Footnote 1." + "\r\n");
                });

            });

       });
    });

    // Test for getting footnote online.
    describe("getFootnoteOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const requestDocument = fs.createReadStream(BaseTest.localBaseTestDataFolder + footnoteFolder + "/Footnote.doc");
            const request = new model.GetFootnoteOnlineRequest({
                document: requestDocument,
                index: 0,
                nodePath: ""
            });

            // Act
            return wordsApi.getFootnoteOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });

    // Test for getting footnote without node path.
    describe("getFootnoteWithoutNodePath test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestGetFootnoteWithoutNodePath.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + footnoteFolder + "/Footnote.doc"
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.GetFootnoteRequest({
                    name: remoteFileName,
                    index: 0,
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.getFootnote(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.footnote).to.exist;
                    expect(resultApi.body.footnote.text).to.equal(" Footnote 1." + "\r\n");
                });

            });

       });
    });

    // Test for updating footnote.
    describe("updateFootnote test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestUpdateFootnote.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + footnoteFolder + "/Footnote.doc"
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const requestFootnoteDto = new model.FootnoteUpdate({
                    text: "new text is here"
                })
                const request = new model.UpdateFootnoteRequest({
                    name: remoteFileName,
                    index: 0,
                    footnoteDto: requestFootnoteDto,
                    nodePath: "",
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.updateFootnote(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.footnote).to.exist;
                    expect(resultApi.body.footnote.text).to.equal(" new text is here" + "\r\n");
                });

            });

       });
    });

    // Test for updating footnote online.
    describe("updateFootnoteOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const requestDocument = fs.createReadStream(BaseTest.localBaseTestDataFolder + footnoteFolder + "/Footnote.doc");
            const requestFootnoteDto = new model.FootnoteUpdate({
                text: "new text is here"
            })
            const request = new model.UpdateFootnoteOnlineRequest({
                document: requestDocument,
                index: 0,
                footnoteDto: requestFootnoteDto,
                nodePath: ""
            });

            // Act
            return wordsApi.updateFootnoteOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });

    // Test for updating footnote without node path.
    describe("updateFootnoteWithoutNodePath test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestUpdateFootnoteWithoutNodePath.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + footnoteFolder + "/Footnote.doc"
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const requestFootnoteDto = new model.FootnoteUpdate({
                    text: "new text is here"
                })
                const request = new model.UpdateFootnoteRequest({
                    name: remoteFileName,
                    index: 0,
                    footnoteDto: requestFootnoteDto,
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.updateFootnote(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.footnote).to.exist;
                    expect(resultApi.body.footnote.text).to.equal(" new text is here" + "\r\n");
                });

            });

       });
    });
});
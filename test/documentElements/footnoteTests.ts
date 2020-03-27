/*
* MIT License

* Copyright (c) 2019 Aspose Pty Ltd

* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:

* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.

* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/

import { expect } from "chai";
import "mocha";

import { DeleteFootnoteRequest, Footnote, GetFootnoteRequest, GetFootnotesRequest, InsertFootnoteRequest, UpdateFootnoteRequest } from "../../src/model/model";
import { DeleteFootnoteWithoutNodePathRequest, GetFootnotesWithoutNodePathRequest, GetFootnoteWithoutNodePathRequest, InsertFootnoteWithoutNodePathRequest, UpdateFootnoteWithoutNodePathRequest } from "../../src/model/model";
import * as BaseTest from "../baseTest";

const testFolder = "DocumentElements/Footnotes";

describe("footnotes", () => {
    describe("getFootnotes function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localBaseTestDataFolder + testFolder + "/Footnote.doc";
            const remoteFileName = "TestGetFootnotes.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new GetFootnotesRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.nodePath = null;

                    // Act
                    return wordsApi.getFootnotes(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.response.statusCode).to.equal(200);

                            expect(result1.body.footnotes).to.exist.and.not.equal(null);
                        });
                });
        });
    });

    describe("getFootnote function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localBaseTestDataFolder + testFolder + "/Footnote.doc";
            const remoteFileName = "TestGetFootnote.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new GetFootnoteRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.nodePath = null;
                    request.index = 0;

                    // Act
                    return wordsApi.getFootnote(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.response.statusCode).to.equal(200);

                            expect(result1.body.footnote).to.exist.and.not.equal(null);
                        });
                });
        });
    });

    describe("insertFootnote function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localBaseTestDataFolder + testFolder + "/Footnote.doc";
            const remoteFileName = "TestPutFootnote.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new InsertFootnoteRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.nodePath = null;
                    request.footnoteDto = new FootnoteInsert({
                        footnoteType: FootnoteInsert.FootnoteTypeEnum.Endnote,
                        text: "test endnote",                        
                    });

                    // Act
                    return wordsApi.insertFootnote(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.response.statusCode).to.equal(200);

                            expect(result1.body.footnote).to.exist.and.not.equal(null);
                        });
                });
        });
    });

    describe("updateFootnote function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localBaseTestDataFolder + testFolder + "/Footnote.doc";
            const remoteFileName = "TestPostFootnote.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new UpdateFootnoteRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.nodePath = null;
                    request.index = 0;
                    request.footnoteDto = new FootnoteUpdate({ text: "new text" });

                    // Act
                    return wordsApi.updateFootnote(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.response.statusCode).to.equal(200);

                            expect(result1.body.footnote).to.exist.and.not.equal(null);
                        });
                });
        });
    });

    describe("deleteFootnote function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localBaseTestDataFolder + testFolder + "/Footnote.doc";
            const remoteFileName = "TestDeleteFootnote.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new DeleteFootnoteRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.nodePath = null;
                    request.index = 0;

                    // Act
                    return wordsApi.deleteFootnote(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.statusCode).to.equal(200);
                        });
                });
        });
    });

    describe("getFootnotesWithoutNodePath function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localBaseTestDataFolder + testFolder + "/Footnote.doc";
            const remoteFileName = "TestGetFootnotesWithoutNodePath.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new GetFootnotesWithoutNodePathRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;

                    // Act
                    return wordsApi.getFootnotesWithoutNodePath(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.response.statusCode).to.equal(200);

                            expect(result1.body.footnotes).to.exist.and.not.equal(null);
                        });
                });
        });
    });

    describe("getFootnoteWithoutNodePath function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localBaseTestDataFolder + testFolder + "/Footnote.doc";
            const remoteFileName = "TestGetFootnoteWithoutNodePath.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new GetFootnoteWithoutNodePathRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.index = 0;

                    // Act
                    return wordsApi.getFootnoteWithoutNodePath(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.response.statusCode).to.equal(200);

                            expect(result1.body.footnote).to.exist.and.not.equal(null);
                        });
                });
        });
    });

    describe("insertFootnoteWithoutNodePath function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localBaseTestDataFolder + testFolder + "/Footnote.doc";
            const remoteFileName = "TestPutFootnoteWithoutNodePath.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new InsertFootnoteWithoutNodePathRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.footnoteDto = new FootnoteInsert({
                        footnoteType: FootnoteInsert.FootnoteTypeEnum.Endnote,
                        text: "test endnote",                        
                    });

                    // Act
                    return wordsApi.insertFootnoteWithoutNodePath(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.response.statusCode).to.equal(200);

                            expect(result1.body.footnote).to.exist.and.not.equal(null);
                        });
                });
        });
    });

    describe("updateFootnoteWithoutNodePath function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localBaseTestDataFolder + testFolder + "/Footnote.doc";
            const remoteFileName = "TestPostFootnoteWithoutNodePath.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new UpdateFootnoteWithoutNodePathRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.index = 0;
                    request.footnoteDto = new FootnoteUpdate({ text: "new text" });

                    // Act
                    return wordsApi.updateFootnoteWithoutNodePath(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.response.statusCode).to.equal(200);

                            expect(result1.body.footnote).to.exist.and.not.equal(null);
                        });
                });
        });
    });

    describe("deleteFootnoteWithoutNodePath function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localBaseTestDataFolder + testFolder + "/Footnote.doc";
            const remoteFileName = "TestDeleteFootnoteWithoutNodePath.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new DeleteFootnoteWithoutNodePathRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.index = 0;

                    // Act
                    return wordsApi.deleteFootnoteWithoutNodePath(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.statusCode).to.equal(200);
                        });
                });
        });
    });
});

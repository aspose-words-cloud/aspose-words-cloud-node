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

import { DeleteRunRequest, Font, GetRunFontRequest, GetRunRequest, GetRunsRequest, InsertRunRequest, Run, UpdateRunFontRequest, UpdateRunRequest } from "../../src/model/model";
import * as BaseTest from "../baseTest";

const testFolder = "DocumentElements/Runs";

describe("runs", () => {
    describe("getDocumentParagraphRuns function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localCommonTestDataFolder + "test_multi_pages.docx";
            const remoteFileName = "TestGetRuns.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new GetRunsRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.paragraphPath = "sections/0/paragraphs/0";

                    // Act
                    return wordsApi.getRuns(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.response.statusCode).to.equal(200);

                            expect(result1.body.runs).to.exist.and.not.equal(null);
                        });
                });
        });
    });

    describe("getDocumentParagraphRun function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localCommonTestDataFolder + "test_multi_pages.docx";
            const remoteFileName = "TestGetRun.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new GetRunRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.paragraphPath = "sections/0/paragraphs/0";
                    request.index = 0;

                    // Act
                    return wordsApi.getRun(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.response.statusCode).to.equal(200);

                            expect(result1.body.run).to.exist.and.not.equal(null);
                        });
                });
        });
    });

    describe("putRun function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localCommonTestDataFolder + "test_multi_pages.docx";
            const remoteFileName = "TestPutRun.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new InsertRunRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.paragraphPath = "sections/0/paragraphs/0";
                    request.run = new Run({ text: "new" });

                    // Act
                    return wordsApi.insertRun(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.response.statusCode).to.equal(200);

                            expect(result1.body.run).to.exist.and.not.equal(null);
                        });
                });
        });
    });

    describe("postRun function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localCommonTestDataFolder + "test_multi_pages.docx";
            const remoteFileName = "TestPostRun.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new UpdateRunRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.paragraphPath = "sections/0/paragraphs/0";
                    request.index = 0;
                    request.run = new Run({ text: "new" });

                    // Act
                    return wordsApi.updateRun(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.response.statusCode).to.equal(200);

                            expect(result1.body.run).to.exist.and.not.equal(null);
                        });
                });
        });
    });

    describe("deleteRun function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localCommonTestDataFolder + "test_multi_pages.docx";
            const remoteFileName = "TestDeleteRun.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new DeleteRunRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.index = 0;
                    request.paragraphPath = "sections/0/paragraphs/0";

                    // Act
                    return wordsApi.deleteRun(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.statusCode).to.equal(200);
                        });
                });
        });
    });

    describe("getDocumentParagraphRunFont function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localCommonTestDataFolder + "test_multi_pages.docx";
            const remoteFileName = "TestGetRunFont.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new GetRunFontRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.paragraphPath = "sections/0/paragraphs/0";
                    request.index = 0;

                    // Act
                    return wordsApi.getRunFont(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.response.statusCode).to.equal(200);

                            expect(result1.body.font).to.exist.and.not.equal(null);
                        });
                });
        });
    });

    describe("postDocumentParagraphRunFont function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localCommonTestDataFolder + "test_multi_pages.docx";
            const remoteFileName = "TestPostRun.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new UpdateRunFontRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.paragraphPath = "sections/0/paragraphs/0";
                    request.index = 0;
                    request.fontDto = new Font({ bold: true });

                    // Act
                    return wordsApi.updateRunFont(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.response.statusCode).to.equal(200);

                            expect(result1.body.font).to.exist.and.not.equal(null);
                        });
                });
        });
    });
});

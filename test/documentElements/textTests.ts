/*
* MIT License

* Copyright (c) 2018 Aspose Pty Ltd

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

import { GetDocumentTextItemsRequest, PostReplaceTextRequest, ReplaceTextRequest, SearchRequest } from "../../src/model/model";
import * as BaseTest from "../baseTest";

const testFolder = "DocumentElements/Text";

describe("text", () => {
    describe("getDocumentTextItems function", () => {
        it("should return response with code 200", () => {

            const storageApi = BaseTest.initializeStorageApi();
            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localCommonTestDataFolder + "test_multi_pages.docx";
            const remoteFileName = "TestGetDocumentTextItems.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return new Promise((resolve) => {
                storageApi.PutCreate(remotePath + "/" + remoteFileName, null, null, localPath, (responseMessage) => {
                    expect(responseMessage.status).to.equal("OK");
                    resolve();
                });
            })
                .then(() => {
                    const request = new GetDocumentTextItemsRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;

                    // Act
                    return wordsApi.getDocumentTextItems(request)
                        .then((result) => {
                            // Assert
                            expect(result.body.code).to.equal(200);
                            expect(result.response.statusCode).to.equal(200);

                            expect(result.body.textItems).to.exist.and.not.equal(null);
                        });
                });
        });
    });

    describe("postReplaceText function", () => {
        it("should return response with code 200", () => {

            const storageApi = BaseTest.initializeStorageApi();
            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localBaseTestDataFolder + testFolder + "/SampleWordDocument.docx";
            const remoteFileName = "TestPostReplaceText.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return new Promise((resolve) => {
                storageApi.PutCreate(remotePath + "/" + remoteFileName, null, null, localPath, (responseMessage) => {
                    expect(responseMessage.status).to.equal("OK");
                    resolve();
                });
            })
                .then(() => {
                    const request = new PostReplaceTextRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.replaceText = new ReplaceTextRequest ({ oldValue: "aspose", newValue: "aspose new" });

                    // Act
                    return wordsApi.postReplaceText(request)
                        .then((result) => {
                            // Assert
                            expect(result.body.code).to.equal(200);
                            expect(result.response.statusCode).to.equal(200);

                            expect(result.body.matches).to.exist.and.not.equal(null);
                        });
                });
        });
    });

    describe("search function", () => {
        it("should return response with code 200", () => {

            const storageApi = BaseTest.initializeStorageApi();
            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localBaseTestDataFolder + testFolder + "/SampleWordDocument.docx";
            const remoteFileName = "TestSearch.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return new Promise((resolve) => {
                storageApi.PutCreate(remotePath + "/" + remoteFileName, null, null, localPath, (responseMessage) => {
                    expect(responseMessage.status).to.equal("OK");
                    resolve();
                });
            })
                .then(() => {
                    const request = new SearchRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.pattern = "aspose";

                    // Act
                    return wordsApi.search(request)
                        .then((result) => {
                            // Assert
                            expect(result.body.code).to.equal(200);
                            expect(result.response.statusCode).to.equal(200);

                            expect(result.body.searchResults).to.exist.and.not.equal(null);
                        });
                });
        });
    });    
});

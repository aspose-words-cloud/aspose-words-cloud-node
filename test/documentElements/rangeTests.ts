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

import { GetRangeTextRequest, RangeDocument, RemoveRangeRequest, ReplaceRange, ReplaceWithTextRequest, SaveAsRangeRequest } from "../../src/model/model";
import * as BaseTest from "../baseTest";

const dataFolder = "DocumentElements/Range/";

describe("range", () => {
    describe("getRangeText function", () => {
        it("should return response with code 200 and text is 'This is HEADER '", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localBaseTestDataFolder + dataFolder + "RangeGet.doc";
            const remoteFileName = "TestRemoveRange.doc";
            const remotePath = BaseTest.remoteBaseTestDataFolder + dataFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new GetRangeTextRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.rangeStartIdentifier = "id0.0.0";
                    request.rangeEndIdentifier = "id0.0.1";

                    // Act
                    return wordsApi.getRangeText(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.response.statusCode).to.equal(200);
                            expect(result1.body.text).to.equal("This is HEADER ");
                        });
                });
        });
    });

    describe("removeRange function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localBaseTestDataFolder + dataFolder + "RangeGet.doc";
            const remoteFileName = "TestRemoveRange.doc";
            const remotePath = BaseTest.remoteBaseTestDataFolder + dataFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new RemoveRangeRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.rangeStartIdentifier = "id0.0.0";
                    request.rangeEndIdentifier = "id0.0.1";

                    // Act
                    return wordsApi.removeRange(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.response.statusCode).to.equal(200);
                        });
                });
        });
    });

    describe("replaceWithText function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localBaseTestDataFolder + dataFolder + "RangeGet.doc";
            const remoteFileName = "TestReplaceWithText.doc";
            const remotePath = BaseTest.remoteBaseTestDataFolder + dataFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new ReplaceWithTextRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.rangeStartIdentifier = "id0.0.0";
                    request.rangeEndIdentifier = "id0.0.1";
                    request.rangeText = new ReplaceRange({text: "Replaced header"});

                    // Act
                    return wordsApi.replaceWithText(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.response.statusCode).to.equal(200);
                        });
                });
        });
    });    

    describe("saveAsRange function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localBaseTestDataFolder + dataFolder + "RangeGet.doc";
            const remoteFileName = "TestSaveAsRange.doc";
            const remotePath = BaseTest.remoteBaseTestDataFolder + dataFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new SaveAsRangeRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.rangeStartIdentifier = "id0.0.0";
                    request.rangeEndIdentifier = "id0.0.1";
                    request.documentParameters = new RangeDocument({documentName: remotePath + "/newDoc.docx"});

                    // Act
                    return wordsApi.saveAsRange(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.response.statusCode).to.equal(200);
                        });
                });
        });
    });   
});

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
import * as fs from "fs";
import "mocha";

import { DeleteDocumentWatermarkRequest, PostInsertDocumentWatermarkImageRequest, PostInsertDocumentWatermarkTextRequest, WatermarkText } from "asposewordscloud";
import * as BaseTest from "../baseTest";

const testFolder = "DocumentElements/Watermarks";

describe("watermarks", () => {
    describe("postInsertDocumentWatermarkImage function", () => {

        const storageApi = BaseTest.initializeStorageApi();
        const wordsApi = BaseTest.initializeWordsApi();

        const localPath = BaseTest.localCommonTestDataFolder + "test_multi_pages.docx";
        const localImagePath = BaseTest.localCommonTestDataFolder + "aspose-cloud.png";

        describe("image in request", () => {
            it("should return response with code 200", () => {

                const remoteFileName = "TestPostInsertDocumentWatermarkImage.docx";
                const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

                return new Promise((resolve) => {
                    storageApi.PutCreate(remotePath + "/" + remoteFileName, null, null, localPath, (responseMessage) => {
                        expect(responseMessage.status).to.equal("OK");
                        resolve();
                    });
                })
                    .then(() => {
                        const request = new PostInsertDocumentWatermarkImageRequest();
                        request.name = remoteFileName;
                        request.folder = remotePath;
                        request.imageFile = fs.readFileSync(localImagePath);

                        // Act
                        return wordsApi.postInsertDocumentWatermarkImage(request)
                            .then((result) => {
                                // Assert
                                expect(result.body.code).to.equal(200);
                                expect(result.response.statusCode).to.equal(200);
                            });
                    });
            });
        });

        describe("image in fileStorage", () => {
            it("should return response with code 200", () => {

                const remoteFileName = "TestPostInsertDocumentWatermarkImage.docx";
                const remoteImageName = "TestPostInsertDocumentWatermarkImage.png";
                const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

                return new Promise((resolve) => {
                    storageApi.PutCreate(remotePath + "/" + remoteFileName, null, null, localPath, (responseMessage) => {
                        expect(responseMessage.status).to.equal("OK");
                        resolve();
                    });
                }).then(() => {
                    return new Promise((resolve) => {
                        storageApi.PutCreate(remotePath + "/" + remoteImageName, null, null, localImagePath, (responseMessage) => {
                            expect(responseMessage.status).to.equal("OK");
                            resolve();
                        });
                    });
                })
                .then(() => {
                        const request = new PostInsertDocumentWatermarkImageRequest();
                        request.name = remoteFileName;
                        request.folder = remotePath;
                        request.image = remotePath + "/" + remoteImageName;

                        // Act
                        return wordsApi.postInsertDocumentWatermarkImage(request)
                            .then((result) => {
                                // Assert
                                expect(result.body.code).to.equal(200);
                                expect(result.response.statusCode).to.equal(200);
                            });
                    });
            });
        });
    });

    describe("postInsertDocumentWatermarkText function", () => {
        it("should return response with code 200", () => {

            const storageApi = BaseTest.initializeStorageApi();
            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localCommonTestDataFolder + "test_multi_pages.docx";
            const remoteFileName = "TestPostInsertDocumentWatermarkText.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return new Promise((resolve) => {
                storageApi.PutCreate(remotePath + "/" + remoteFileName, null, null, localPath, (responseMessage) => {
                    expect(responseMessage.status).to.equal("OK");
                    resolve();
                });
            })
                .then(() => {
                    const request = new PostInsertDocumentWatermarkTextRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.watermarkText = new WatermarkText ({ text: "This is the text", rotationAngle: 90.0 });

                    // Act
                    return wordsApi.postInsertDocumentWatermarkText(request)
                        .then((result) => {
                            // Assert
                            expect(result.body.code).to.equal(200);
                            expect(result.response.statusCode).to.equal(200);
                        });
                });
        });
    });

    describe("deleteDocumentWatermark function", () => {
        it("should return response with code 200", () => {

            const storageApi = BaseTest.initializeStorageApi();
            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localCommonTestDataFolder + "test_multi_pages.docx";
            const remoteFileName = "TestDeleteDocumentWatermark.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return new Promise((resolve) => {
                storageApi.PutCreate(remotePath + "/" + remoteFileName, null, null, localPath, (responseMessage) => {
                    expect(responseMessage.status).to.equal("OK");
                    resolve();
                });
            })
                .then(() => {
                    const request = new DeleteDocumentWatermarkRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;                    

                    // Act
                    return wordsApi.deleteDocumentWatermark(request)
                        .then((result) => {
                            // Assert
                            expect(result.body.code).to.equal(200);
                            expect(result.response.statusCode).to.equal(200);
                        });
                });
        });
    });
});

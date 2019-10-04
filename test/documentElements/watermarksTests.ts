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
import * as fs from "fs";
import "mocha";

import { DeleteWatermarkRequest, InsertWatermarkImageRequest, InsertWatermarkTextRequest, WatermarkText } from "asposewordscloud";
import * as BaseTest from "../baseTest";

const testFolder = "DocumentElements/Watermarks";

describe("watermarks", () => {
    describe("postInsertDocumentWatermarkImage function", () => {

        const wordsApi = BaseTest.initializeWordsApi();

        const localPath = BaseTest.localCommonTestDataFolder + "test_multi_pages.docx";
        const localImagePath = BaseTest.localCommonTestDataFolder + "aspose-cloud.png";

        describe("image in request", () => {
            it("should return response with code 200", () => {

                const remoteFileName = "TestPostInsertDocumentWatermarkImage.docx";
                const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

                return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
                    .then((result) => {
                        expect(result.response.statusMessage).to.equal("OK");
                        const request = new InsertWatermarkImageRequest();
                        request.name = remoteFileName;
                        request.folder = remotePath;
                        request.imageFile = fs.createReadStream(localImagePath);

                        // Act
                        return wordsApi.insertWatermarkImage(request)
                            .then((result1) => {
                                // Assert
                                expect(result1.response.statusCode).to.equal(200);

                                expect(result1.body.document).to.exist.and.not.equal(null);
                            });
                    });
            });
        });

        describe("image in fileStorage", () => {
            it("should return response with code 200", () => {

                const remoteFileName = "TestPostInsertDocumentWatermarkImage.docx";
                const remoteImageName = "TestPostInsertDocumentWatermarkImage.png";
                const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

                return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
                    .then((result) => {
                        expect(result.response.statusMessage).to.equal("OK");
                        return wordsApi.uploadFileToStorage(remotePath + "/" + remoteImageName, localImagePath)
                            .then((result1) => {
                                expect(result1.response.statusMessage).to.equal("OK");

                                const request = new InsertWatermarkImageRequest();
                                request.name = remoteFileName;
                                request.folder = remotePath;
                                request.image = remotePath + "/" + remoteImageName;

                                // Act
                                return wordsApi.insertWatermarkImage(request)
                                    .then((result2) => {
                                        // Assert
                                        expect(result2.response.statusCode).to.equal(200);

                                        expect(result2.body.document).to.exist.and.not.equal(null);
                                    });
                            });
                    });
            });
        });

        describe("postInsertDocumentWatermarkText function", () => {
            it("should return response with code 200", () => {

                const remoteFileName = "TestPostInsertDocumentWatermarkText.docx";
                const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

                return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
                    .then((result) => {
                        expect(result.response.statusMessage).to.equal("OK");
                        const request = new InsertWatermarkTextRequest();
                        request.name = remoteFileName;
                        request.folder = remotePath;
                        request.watermarkText = new WatermarkText({ text: "This is the text", rotationAngle: 90.0 });

                        // Act
                        return wordsApi.insertWatermarkText(request)
                            .then((result1) => {
                                // Assert
                                expect(result1.response.statusCode).to.equal(200);

                                expect(result1.body.document).to.exist.and.not.equal(null);
                            });
                    });
            });
        });

        describe("deleteDocumentWatermark function", () => {
            it("should return response with code 200", () => {

                const remoteFileName = "TestDeleteDocumentWatermark.docx";
                const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

                return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
                    .then((result) => {
                        expect(result.response.statusMessage).to.equal("OK");
                        const request = new DeleteWatermarkRequest();
                        request.name = remoteFileName;
                        request.folder = remotePath;

                        // Act
                        return wordsApi.deleteWatermark(request)
                            .then((result1) => {
                                // Assert
                                expect(result1.response.statusCode).to.equal(200);

                                expect(result1.body.document).to.exist.and.not.equal(null);
                            });
                    });
            });
        });
    });
});

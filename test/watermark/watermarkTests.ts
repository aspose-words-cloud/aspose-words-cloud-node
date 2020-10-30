/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="watermarkTests.ts">
 *   Copyright (c) 2020 Aspose.Words for Cloud
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

// Example of how to work with watermarks.
describe("watermark", () => {
    expect(fs);
    const remoteDataFolder = BaseTest.remoteBaseTestDataFolder + "/DocumentActions/Watermark";
    const localFile = "Common/test_multi_pages.docx";

    // Test for adding watermark image.
    describe("insertWatermarkImage test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestInsertWatermarkImage.docx";
            const remoteImagePath = remoteDataFolder + "/TestInsertWatermarkImage.png";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                return wordsApi.uploadFileToStorage(
                    remoteImagePath,
                    BaseTest.localBaseTestDataFolder + "Common/aspose-cloud.png"
                ).then((result1) => {
                    expect(result1.response.statusMessage).to.equal("OK");
                    const request = new model.InsertWatermarkImageRequest({
                        name: remoteFileName,
                        imageFile: undefined,
                        folder: remoteDataFolder,
                        destFileName: BaseTest.remoteBaseTestOutFolder + "/" + remoteFileName,
                        image: remoteImagePath
                    });

                    // Act
                    return wordsApi.insertWatermarkImage(request)
                    .then((resultApi) => {
                        // Assert
                        expect(resultApi.response.statusCode).to.equal(200);
                        expect(resultApi.body.document).to.exist;
                        expect(resultApi.body.document.fileName).startsWith("TestInsertWatermarkImage.docx").to.true;
                    });

                });

            });

       });
    });

    // Test for adding watermark text.
    describe("insertWatermarkText test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestInsertWatermarkText.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.InsertWatermarkTextRequest({
                    name: remoteFileName,
                    watermarkText: new model.WatermarkText({
                        text: "This is the text",
                        rotationAngle: 90
                    }),
                    folder: remoteDataFolder,
                    destFileName: BaseTest.remoteBaseTestOutFolder + "/" + remoteFileName
                });

                // Act
                return wordsApi.insertWatermarkText(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.document).to.exist;
                    expect(resultApi.body.document.fileName).startsWith("TestInsertWatermarkText.docx").to.true;
                });

            });

       });
    });

    // Test for deleting watermark.
    describe("deleteWatermark test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestDeleteWatermark.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.DeleteWatermarkRequest({
                    name: remoteFileName,
                    folder: remoteDataFolder,
                    destFileName: BaseTest.remoteBaseTestOutFolder + "/" + remoteFileName
                });

                // Act
                return wordsApi.deleteWatermark(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.document).to.exist;
                    expect(resultApi.body.document.fileName).startsWith("TestDeleteWatermark.docx").to.true;
                });

            });

       });
    });
});

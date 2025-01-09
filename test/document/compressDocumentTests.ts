/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="compressDocumentTests.ts">
 *   Copyright (c) 2025 Aspose.Words for Cloud
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

// Example of how to compress document for reduce document size.
describe("compressDocument", () => {
    expect(fs);
    const remoteFolder = BaseTest.remoteBaseTestDataFolder + "/DocumentActions/CompressDocument";
    const localFolder = "DocumentActions/CompressDocument";

    // Test for compression document.
    describe("compressDocument test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const localName = "TestCompress.docx";
            const remoteName = "TestCompress.docx";

            return wordsApi.uploadFileToStorage(
                remoteFolder + "/" + remoteName,
                BaseTest.localBaseTestDataFolder + localFolder + "/" + localName
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const requestCompressOptions = new model.CompressOptions({
                })
                const request = new model.CompressDocumentRequest({
                    name: remoteName,
                    compressOptions: requestCompressOptions,
                    folder: remoteFolder
                });

                // Act
                return wordsApi.compressDocument(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.document).to.exist;
                });

            });

       });
    });

    // Test for compression document online.
    describe("compressDocumentOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const localName = "TestCompress.docx";

            const requestDocument = fs.createReadStream(BaseTest.localBaseTestDataFolder + localFolder + "/" + localName);
            const requestCompressOptions = new model.CompressOptions({
            })
            const request = new model.CompressDocumentOnlineRequest({
                document: requestDocument,
                compressOptions: requestCompressOptions
            });

            // Act
            return wordsApi.compressDocumentOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });
});
/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="rangeTests.ts">
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

// Example of how to work with ranges.
describe("range", () => {
    expect(fs);
    const remoteDataFolder = BaseTest.remoteBaseTestDataFolder + "/DocumentElements/Range";
    const localFile = "DocumentElements/Range/RangeGet.doc";

    // Test for getting the text from range.
    describe("getRangeText test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestGetRangeText.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.GetRangeTextRequest({
                    name: remoteFileName,
                    rangeStartIdentifier: "id0.0.0",
                    rangeEndIdentifier: "id0.0.1",
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.getRangeText(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.text).to.equal("This is HEADER ");
                });

            });

       });
    });

    // Test for getting the text from range online.
    describe("getRangeTextOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.GetRangeTextOnlineRequest({
                document: fs.createReadStream(BaseTest.localBaseTestDataFolder + localFile),
                rangeStartIdentifier: "id0.0.0",
                rangeEndIdentifier: "id0.0.1"
            });

            // Act
            return wordsApi.getRangeTextOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });

    // Test for removing the text for range.
    describe("removeRange test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestRemoveRange.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.RemoveRangeRequest({
                    name: remoteFileName,
                    rangeStartIdentifier: "id0.0.0",
                    rangeEndIdentifier: "id0.0.1",
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.removeRange(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                });

            });

       });
    });

    // Test for removing the text for range online.
    describe("removeRangeOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.RemoveRangeOnlineRequest({
                document: fs.createReadStream(BaseTest.localBaseTestDataFolder + localFile),
                rangeStartIdentifier: "id0.0.0",
                rangeEndIdentifier: "id0.0.1"
            });

            // Act
            return wordsApi.removeRangeOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });

    // Test for saving a range as a new document.
    describe("saveAsRange test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestSaveAsRange.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.SaveAsRangeRequest({
                    name: remoteFileName,
                    rangeStartIdentifier: "id0.0.0",
                    documentParameters: new model.RangeDocument({
                        documentName: remoteDataFolder + "/NewDoc.docx"
                    }),
                    rangeEndIdentifier: "id0.0.1",
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.saveAsRange(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.document).to.exist;
                    expect(resultApi.body.document.fileName).to.equal("NewDoc.docx");
                });

            });

       });
    });

    // Test for saving a range as a new document online.
    describe("saveAsRangeOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.SaveAsRangeOnlineRequest({
                document: fs.createReadStream(BaseTest.localBaseTestDataFolder + localFile),
                rangeStartIdentifier: "id0.0.0",
                documentParameters: new model.RangeDocument({
                    documentName: remoteDataFolder + "/NewDoc.docx"
                }),
                rangeEndIdentifier: "id0.0.1"
            });

            // Act
            return wordsApi.saveAsRangeOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });

    // Test for replacing text in range.
    describe("replaceWithText test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestReplaceWithText.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.ReplaceWithTextRequest({
                    name: remoteFileName,
                    rangeStartIdentifier: "id0.0.0",
                    rangeText: new model.ReplaceRange({
                        text: "Replaced header"
                    }),
                    rangeEndIdentifier: "id0.0.1",
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.replaceWithText(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.document).to.exist;
                    expect(resultApi.body.document.fileName).to.equal("TestReplaceWithText.docx");
                });

            });

       });
    });

    // Test for replacing text in range online.
    describe("replaceWithTextOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.ReplaceWithTextOnlineRequest({
                document: fs.createReadStream(BaseTest.localBaseTestDataFolder + localFile),
                rangeStartIdentifier: "id0.0.0",
                rangeText: new model.ReplaceRange({
                    text: "Replaced header"
                }),
                rangeEndIdentifier: "id0.0.1"
            });

            // Act
            return wordsApi.replaceWithTextOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });
});

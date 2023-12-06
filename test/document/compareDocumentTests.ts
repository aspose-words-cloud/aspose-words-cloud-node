/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="compareDocumentTests.ts">
 *   Copyright (c) 2023 Aspose.Words for Cloud
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

// Example of document comparison.
describe("compareDocument", () => {
    expect(fs);
    const remoteFolder = BaseTest.remoteBaseTestDataFolder + "/DocumentActions/CompareDocument";
    const localFolder = "DocumentActions/CompareDocument";

    // Test for document comparison.
    describe("compareDocument test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const localName1 = "compareTestDoc1.doc";
            const localName2 = "compareTestDoc2.doc";
            const remoteName1 = "TestCompareDocument1.doc";
            const remoteName2 = "TestCompareDocument2.doc";

            return wordsApi.uploadFileToStorage(
                remoteFolder + "/" + remoteName1,
                BaseTest.localBaseTestDataFolder + localFolder + "/" + localName1
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                return wordsApi.uploadFileToStorage(
                    remoteFolder + "/" + remoteName2,
                    BaseTest.localBaseTestDataFolder + localFolder + "/" + localName2
                ).then((result1) => {
                    expect(result1.response.statusMessage).to.equal("OK");
                    const requestCompareDataFileReference = model.FileReference.fromRemoteFilePath(remoteFolder + "/" + remoteName2);
                    const requestCompareData = new model.CompareData({
                        author: "author",
                        dateTime: new Date('2015-10-26T00:00:00Z'),
                        fileReference: requestCompareDataFileReference
                    })
                    const request = new model.CompareDocumentRequest({
                        name: remoteName1,
                        compareData: requestCompareData,
                        folder: remoteFolder,
                        destFileName: BaseTest.remoteBaseTestOutFolder + "/TestCompareDocumentOut.doc"
                    });

                    // Act
                    return wordsApi.compareDocument(request)
                    .then((resultApi) => {
                        // Assert
                        expect(resultApi.response.statusCode).to.equal(200);
                        expect(resultApi.body.document).to.exist;
                        expect(resultApi.body.document.fileName).to.equal("TestCompareDocumentOut.doc");
                    });

                });

            });

       });
    });

    // Test for document comparison online.
    describe("compareDocumentOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const localName1 = "compareTestDoc1.doc";
            const localName2 = "compareTestDoc2.doc";
            const remoteName2 = "TestCompareDocument2.doc";

            return wordsApi.uploadFileToStorage(
                remoteFolder + "/" + remoteName2,
                BaseTest.localBaseTestDataFolder + localFolder + "/" + localName2
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const requestDocument = fs.createReadStream(BaseTest.localBaseTestDataFolder + localFolder + "/" + localName1);
                const requestCompareDataFileReference = model.FileReference.fromRemoteFilePath(remoteFolder + "/" + remoteName2);
                const requestCompareData = new model.CompareData({
                    author: "author",
                    dateTime: new Date('2015-10-26T00:00:00Z'),
                    fileReference: requestCompareDataFileReference
                })
                const request = new model.CompareDocumentOnlineRequest({
                    document: requestDocument,
                    compareData: requestCompareData,
                    destFileName: BaseTest.remoteBaseTestOutFolder + "/TestCompareDocumentOut.doc"
                });

                // Act
                return wordsApi.compareDocumentOnline(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                });

            });

       });
    });

    // Test for document comparison online.
    describe("compareTwoDocumentOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const localName1 = "compareTestDoc1.doc";
            const localName2 = "compareTestDoc2.doc";
            const remoteName2 = "TestCompareDocument2.doc";

            return wordsApi.uploadFileToStorage(
                remoteFolder + "/" + remoteName2,
                BaseTest.localBaseTestDataFolder + localFolder + "/" + localName2
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const requestDocument = fs.createReadStream(BaseTest.localBaseTestDataFolder + localFolder + "/" + localName1);
                const requestCompareDataFileReferenceStream = fs.createReadStream(BaseTest.localBaseTestDataFolder + localFolder + "/" + localName2);
                const requestCompareDataFileReference = model.FileReference.fromLocalFileContent(requestCompareDataFileReferenceStream);
                const requestCompareData = new model.CompareData({
                    author: "author",
                    dateTime: new Date('2015-10-26T00:00:00Z'),
                    fileReference: requestCompareDataFileReference
                })
                const request = new model.CompareDocumentOnlineRequest({
                    document: requestDocument,
                    compareData: requestCompareData,
                    destFileName: BaseTest.remoteBaseTestOutFolder + "/TestCompareDocumentOut.doc"
                });

                // Act
                return wordsApi.compareDocumentOnline(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                });

            });

       });
    });
});
/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="appendDocumentTests.ts">
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

// Example of how to append document.
describe("appendDocument", () => {
    expect(fs);
    const remoteDataFolder = BaseTest.remoteBaseTestDataFolder + "/DocumentActions/AppendDocument";
    const localFile = "Common/test_multi_pages.docx";

    // Test for appending document.
    describe("appendDocument test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestAppendDocument.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const requestDocumentListDocumentEntries0FileReference = model.FileReference.fromRemoteFilePath(remoteDataFolder + "/" + remoteFileName);
                const requestDocumentListDocumentEntries0 = new model.DocumentEntry({
                    fileReference: requestDocumentListDocumentEntries0FileReference,
                    importFormatMode: "KeepSourceFormatting"
                })
                const requestDocumentListDocumentEntries = [
                    requestDocumentListDocumentEntries0
                ]
                const requestDocumentList = new model.DocumentEntryList({
                    documentEntries: requestDocumentListDocumentEntries
                })
                const request = new model.AppendDocumentRequest({
                    name: remoteFileName,
                    documentList: requestDocumentList,
                    folder: remoteDataFolder,
                    destFileName: BaseTest.remoteBaseTestOutFolder + "/" + remoteFileName
                });

                // Act
                return wordsApi.appendDocument(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.document).to.exist;
                    expect(resultApi.body.document.fileName).to.equal("TestAppendDocument.docx");
                });

            });

       });
    });

    // Test for appending document online.
    describe("appendDocumentOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const requestDocument = fs.createReadStream(BaseTest.localBaseTestDataFolder + localFile);
            const requestDocumentListDocumentEntries0FileReferenceStream = fs.createReadStream(BaseTest.localBaseTestDataFolder + localFile);
            const requestDocumentListDocumentEntries0FileReference = model.FileReference.fromLocalFileContent(requestDocumentListDocumentEntries0FileReferenceStream);
            const requestDocumentListDocumentEntries0 = new model.DocumentEntry({
                fileReference: requestDocumentListDocumentEntries0FileReference,
                importFormatMode: "KeepSourceFormatting"
            })
            const requestDocumentListDocumentEntries = [
                requestDocumentListDocumentEntries0
            ]
            const requestDocumentList = new model.DocumentEntryList({
                documentEntries: requestDocumentListDocumentEntries
            })
            const request = new model.AppendDocumentOnlineRequest({
                document: requestDocument,
                documentList: requestDocumentList
            });

            // Act
            return wordsApi.appendDocumentOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });
});
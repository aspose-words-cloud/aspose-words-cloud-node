/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="mailMergeFiledsTests.ts">
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

// Example of how to work with merge fields.
describe("mailMergeFileds", () => {
    expect(fs);
    const remoteDataFolder = BaseTest.remoteBaseTestDataFolder + "/DocumentActions/MailMerge";
    const mailMergeFolder = "DocumentActions/MailMerge";

    // Test for putting new fields.
    describe("getDocumentFieldNamesOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const localDocumentFile = "SampleExecuteTemplate.docx";

            const request = new model.GetDocumentFieldNamesOnlineRequest({
                document: fs.createReadStream(BaseTest.localBaseTestDataFolder + mailMergeFolder + "/" + localDocumentFile),
                useNonMergeFields: true
            });

            // Act
            return wordsApi.getDocumentFieldNamesOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });

    // Test for getting mailmerge fields.
    describe("getDocumentFieldNames test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestGetDocumentFieldNames.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + "Common/test_multi_pages.docx"
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.GetDocumentFieldNamesRequest({
                    name: remoteFileName,
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.getDocumentFieldNames(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                });

            });

       });
    });
});

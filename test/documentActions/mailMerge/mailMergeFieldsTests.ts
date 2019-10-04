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
import { GetDocumentFieldNamesOnlineRequest, GetDocumentFieldNamesRequest } from "../asposewordscloud";
import * as BaseTest from "../../baseTest";

const testFolder = "DocumentActions/MailMerge";

describe("mailMerge fields", () => {
    describe("getDocumentFieldNames function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localCommonTestDataFolder + "test_multi_pages.docx";
            const remoteFileName = "TestGetDocumentFieldNames.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new GetDocumentFieldNamesRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;

                    // Act
                    return wordsApi.getDocumentFieldNames(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.response.statusCode).to.equal(200);

                            expect(result1.body.fieldNames.names.length).to.equal(0);
                        });
                });
        });
    });

    describe("putConvertDocument function", () => {

        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();
            const localPath = BaseTest.localBaseTestDataFolder + testFolder + "/SampleExecuteTemplate.docx";

            const request = new GetDocumentFieldNamesOnlineRequest({
                template: fs.createReadStream(localPath),
                useNonMergeFields: true,                                
            });

            // Act
            return wordsApi.getDocumentFieldNamesOnline(request)
                .then((result) => {
                    // Assert                
                    expect(result.response.statusCode).to.equal(200);
                    expect(result.body.fieldNames.names.length).to.equal(15);
                });

        });
    });
});

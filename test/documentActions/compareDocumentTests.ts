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
import "mocha";

import { CompareData, PostCompareDocumentRequest } from "asposewordscloud";
import * as BaseTest from "../baseTest";

const testFolder = "DocumentActions/CompareDocument";

describe("compareDocument function", () => {

    it("should return response with code 200", () => {

        const storageApi = BaseTest.initializeStorageApi();
        const wordsApi = BaseTest.initializeWordsApi();

        const localPath1 = BaseTest.localBaseTestDataFolder + testFolder + "/compareTestDoc1.doc";
        const localPath2 = BaseTest.localBaseTestDataFolder + testFolder + "/compareTestDoc2.doc";
        const remoteName1 = "TestCompareDocument1.doc";
        const remoteName2 = "TestCompareDocument2.doc";

        const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

        return new Promise((resolve) => {
            storageApi.PutCreate(remotePath + "/" + remoteName1, null, null, localPath1, (responseMessage) => {
                expect(responseMessage.status).to.equal("OK");
                resolve();
            });
        }).then(() => {
            return new Promise((resolve) => {
                storageApi.PutCreate(remotePath + "/" + remoteName2, null, null, localPath2, (responseMessage) => {
                    expect(responseMessage.status).to.equal("OK");
                    resolve();
                });
            });
        })
            .then(() => {
                const request = new PostCompareDocumentRequest();
                request.name = remoteName1;
                request.folder = remotePath;
                request.destFileName = "TestCompareDocumentOut.doc";
                request.compareData = new CompareData({ author: "author", comparingWithDocument: remotePath + "/" + remoteName2, dateTime: new Date(2015, 10, 26) });

                // Act
                return wordsApi.postCompareDocument(request)
                    .then((result) => {
                        // Assert
                        expect(result.body.code).to.equal(200);
                        expect(result.response.statusCode).to.equal(200);
                    });
            });
    });
});

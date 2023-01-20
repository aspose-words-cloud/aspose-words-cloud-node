/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="testExamples.ts">
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
import * as model from "../src/model/model";
import * as BaseTest from "./baseTest";

describe("examples", () => {
    expect(fs);

    before(function() {
        const wordsApi = BaseTest.initializeWordsApi();
        return wordsApi.uploadFileToStorage(
            'test_doc.docx',
            './ExamplesData/test_doc.docx'
        ).then((result944546255) => {
            expect(result944546255.response.statusMessage).to.equal("OK");
        });

    });

    describe("exampleAcceptAllRevisions", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            const fileName = "test_doc.docx";

            // Upload original document to cloud storage.
            const myVar1 = fs.createReadStream(documentsDir + fileName);
            const myVar2 = fileName;
            const uploadFileRequest = new model.UploadFileRequest({
                fileContent: myVar1,
                path: myVar2
            });

            wordsApi.uploadFile(uploadFileRequest)
            .then((uploadFileRequestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of UploadFileRequest: ", uploadFileRequestResult);
                // Calls AcceptAllRevisions method for document in cloud.
                const myVar3 = fileName;
                const request = new model.AcceptAllRevisionsRequest({
                    name: myVar3
                });

                wordsApi.acceptAllRevisions(request)
                .then((requestResult) => {
                    // tslint:disable-next-line:no-console
                    console.log("Result of Request: ", requestResult);
                });
            });
        });
    });

    describe("exampleAcceptAllRevisionsOnline", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const documentsDir = './ExamplesData/';
            const fileName = "test_doc.docx";

            // Calls AcceptAllRevisionsOnline method for document in cloud.
            const requestDocument = fs.createReadStream(documentsDir + fileName);
            const request = new model.AcceptAllRevisionsOnlineRequest({
                document: requestDocument
            });

            wordsApi.acceptAllRevisionsOnline(request)
            .then((requestResult) => {
                // tslint:disable-next-line:no-console
                console.log("Result of Request: ", requestResult);
                fs.writeFileSync("test_result.docx", requestResult.body.document.entries().next().value);
            });
        });
    });
});
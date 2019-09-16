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
import "mocha";

import { ClassifyDocumentRequest, ClassifyRequest } from "../../src/model/model";
import * as BaseTest from "../baseTest";

const testFolder = "Common";

describe("Text classification", () => {

    describe("classify raw text", () => {
        const wordsApi = BaseTest.initializeWordsApi();

        it("should return response with code 200", () => {
            const request = new ClassifyRequest();
            request.text = "Try text classification";
            request.bestClassesCount = "3";

            return wordsApi.classify(request)
                .then((result) => {
                    // Assert
                    expect(result.response.statusCode).to.equal(200);
                });
        });
    });

    describe("classify document", () => {

        const wordsApi = BaseTest.initializeWordsApi();

        const localPath = BaseTest.localCommonTestDataFolder + "test_multi_pages.docx";
        const remoteFileName = "SourceDocument.docx";
        const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

        before(() => {
            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
                .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                });
        });

        it("should return response with code 200", () => {
            const request = new ClassifyDocumentRequest();
            request.documentName = remoteFileName;
            request.folder = remotePath;

            return wordsApi.classifyDocument(request)
                .then((result) => {
                    // Assert
                    expect(result.response.statusCode).to.equal(200);
                });
        });
    });

    describe("classify with taxonomy \"documents\"", () => {
        const wordsApi = BaseTest.initializeWordsApi();
        const localPath = BaseTest.localCommonTestDataFolder + "test_multi_pages.docx";
        const remoteFileName = "SourceDocument.docx";
        const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;
        const taxonomy = "documents";
        before(() => {
            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
            });
        });

        it("should return response with code 200", () => {
            const request = new ClassifyDocumentRequest();
            request.documentName = remoteFileName;
            request.folder = remotePath;
            request.taxonomy = taxonomy;
            return wordsApi.classifyDocument(request)
                .then((result) => {
                    // Assert
                    expect(result.response.statusCode).to.equal(200);
                });
        });
    });
});

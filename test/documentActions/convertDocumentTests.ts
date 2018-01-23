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

import * as fs from "fs";
import { PostDocumentSaveAsRequest, PutConvertDocumentRequest, PutDocumentSaveAsTiffRequest, SaveOptionsData, TiffSaveOptionsData } from "../../src/model/model";
import * as BaseTest from "../baseTest";

const testFolder = "DocumentActions/ConvertDocument";

describe("postDocumentSaveAs function", () => {

    it("should return response with code 200", () => {

        const storageApi = BaseTest.initializeStorageApi();
        const wordsApi = BaseTest.initializeWordsApi();

        const localPath = BaseTest.localCommonTestDataFolder + "test_multi_pages.docx";
        const remoteFileName = "TestPostDocumentSaveAs.docx";
        const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

        return new Promise((resolve) => {
            storageApi.PutCreate(remotePath + "/" + remoteFileName, null, null, localPath, (responseMessage) => {
                expect(responseMessage.status).to.equal("OK");
                resolve();
            });
        })
            .then(() => {
                const request = new PostDocumentSaveAsRequest({
                    saveOptionsData: new SaveOptionsData({
                        saveFormat: "pdf",
                        fileName: "Out/TestPostDocumentSaveAs.pdf",
                    }),

                });
                request.name = remoteFileName;
                request.folder = remotePath;

                // Act
                return wordsApi.postDocumentSaveAs(request)
                    .then((result) => {
                        // Assert
                        expect(result.body.code).to.equal(200);
                        expect(result.response.statusCode).to.equal(200);
                    });
            });
    });
});

describe("postDocumentSaveAs function (convert from PDF to doc)", () => {
    it("should return response with code 200", () => {

        const storageApi = BaseTest.initializeStorageApi();
        const wordsApi = BaseTest.initializeWordsApi();

        const localPath = BaseTest.localBaseTestDataFolder + testFolder + "/45.pdf";
        const remoteFileName = "TestPostDocumentSaveAsFromPdfToDoc.pdf";
        const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

        return new Promise((resolve) => {
            storageApi.PutCreate(remotePath + "/" + remoteFileName, null, null, localPath, (responseMessage) => {
                expect(responseMessage.status).to.equal("OK");
                resolve();
            });
        })
            .then(() => {
                const request = new PostDocumentSaveAsRequest({
                    saveOptionsData: new SaveOptionsData({
                        saveFormat: "docx",
                        fileName: "Out/TestPostDocumentSavePdfAsDocx.docx",
                    }),

                });
                request.name = remoteFileName;
                request.folder = remotePath;

                // Act
                return wordsApi.postDocumentSaveAs(request)
                    .then((result) => {
                        // Assert
                        expect(result.body.code).to.equal(200);
                        expect(result.response.statusCode).to.equal(200);
                    });
            });
    });
});

describe("putConvertDocument function", () => {

    it("should return response with code 200", () => {
      
        const wordsApi = BaseTest.initializeWordsApi();
        const localPath = BaseTest.localCommonTestDataFolder + "test_multi_pages.docx";
      
        const request = new PutConvertDocumentRequest({
            format: "pdf",
            document: fs.readFileSync(localPath),
        });

        // Act
        return wordsApi.putConvertDocument(request)
            .then((result) => {
                // Assert                
                expect(result.response.statusCode).to.equal(200);
            });

    });
});

describe("putDocumentSaveAsTiff function", () => {
    it("should return response with code 200", () => {

        const storageApi = BaseTest.initializeStorageApi();
        const wordsApi = BaseTest.initializeWordsApi();

        const localPath = BaseTest.localCommonTestDataFolder + "test_multi_pages.docx";
        const remoteFileName = "TestPutDocumentSaveAsTiff.docx";
        const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

        return new Promise((resolve) => {
            storageApi.PutCreate(remotePath + "/" + remoteFileName, null, null, localPath, (responseMessage) => {
                expect(responseMessage.status).to.equal("OK");
                resolve();
            });
        })
            .then(() => {
                const request = new PutDocumentSaveAsTiffRequest({
                    saveOptions: new TiffSaveOptionsData({
                        saveFormat: "tiff",
                        fileName: "Out/TestPostDocumentSaveAs.tiff",
                    }),

                });
                request.name = remoteFileName;
                request.folder = remotePath;

                // Act
                return wordsApi.putDocumentSaveAsTiff(request)
                    .then((result) => {
                        // Assert
                        expect(result.body.code).to.equal(200);
                        expect(result.response.statusCode).to.equal(200);
                    });
            });
    });
});

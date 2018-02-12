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
import * as testWithTestCases from "mocha-cases";

import * as fs from "fs";
import { GetDocumentWithFormatRequest, PostDocumentSaveAsRequest, PutConvertDocumentRequest, PutDocumentSaveAsTiffRequest, SaveOptionsData, TiffSaveOptionsData } from "../../src/model/model";
import * as BaseTest from "../baseTest";

const testFolder = "DocumentActions/ConvertDocument";

describe("convert document", () => {
    const storageApi = BaseTest.initializeStorageApi();
    const wordsApi = BaseTest.initializeWordsApi();

    describe("from docx to other formats", () => {

        const localPath = BaseTest.localCommonTestDataFolder + "test_multi_pages.docx";

        const remoteFileName = "SourceDocument.docx";
        const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

        before(() => {
            return new Promise((resolve) => {
                storageApi.PutCreate(remotePath + "/" + remoteFileName, null, null, localPath, (responseMessage) => {
                    expect(responseMessage.status).to.equal("OK");
                    resolve();
                });
            });
        });

        describe("postDocumentSaveAs function", () => {
            /**
             * Test runner
             * @param value destination fromat
             */
            function runner(value) {
                const request = new PostDocumentSaveAsRequest({
                    saveOptionsData: new SaveOptionsData({
                        saveFormat: value,
                        fileName: "Out/TestPostDocumentSaveAs." + value,
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

                        expect(result.body.saveResult).to.exist.and.not.equal(null);
                    });
            }

            testWithTestCases({
                name: "convert from 'docx' to {value} should return response with code 200",
                values: BaseTest.saveFormatTestCases,
                runner,
            });
        });

        describe("putConvertDocument function", () => {
            /**
             * Test runner
             * @param value destination fromat
             */
            function runner(value) {
                const request = new PutConvertDocumentRequest({
                    format: value,
                    document: fs.readFileSync(localPath),
                });

                // Act
                return wordsApi.putConvertDocument(request)
                    .then((result) => {
                        // Assert                
                        expect(result.response.statusCode).to.equal(200);
                        expect(result.body.byteLength).to.greaterThan(0);
                    });
            }

            testWithTestCases({
                name: "convert from 'docx' to {value} should return response with code 200",
                values: BaseTest.saveFormatTestCases,
                runner,
            });           
        });

        describe("putDocumentSaveAsTiff function", () => {
            it("should return response with code 200", () => {

                const request = new PutDocumentSaveAsTiffRequest({
                    saveOptions: new TiffSaveOptionsData({
                        saveFormat: "tiff",
                        fileName: "Out/TestPostDocumentSaveAsTiff.tiff",
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

                        expect(result.body.saveResult).to.exist.and.not.equal(null);
                    });

            });
        });

        describe("getDocumentWithFormat function", () => {
            /**
             * Test runner
             * @param value destination fromat
             */
            function runner(value) {
                const request = new GetDocumentWithFormatRequest();
                request.name = remoteFileName;
                request.folder = remotePath;
                request.format = value;

                // Act
                return wordsApi.getDocumentWithFormat(request)
                    .then((result) => {
                        // Assert
                        expect(result.response.statusCode).to.equal(200);
                        expect(result.body.byteLength).to.greaterThan(0);
                    });
            }

            testWithTestCases({
                name: "convert from 'docx' to {value} should return response with code 200",
                values: BaseTest.saveFormatTestCases,
                runner,
            });    
           
            describe("when param 'outPath' is setted", () => {
                it("should return response with code 200", () => {
                    const request = new GetDocumentWithFormatRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.format = "text";
                    request.outPath = "Out/TestGetDocumentWithFormat.txt";

                    // Act
                    return wordsApi.getDocumentWithFormat(request)
                        .then((result) => {
                            // Assert
                            expect(result.response.statusCode).to.equal(200);
                            expect(result.response.statusCode).to.equal(200);
                        });
                });

            });
        });
    });

    describe("from PDF to doc", () => {
        it("should return response with code 200", () => {

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

                            expect(result.body.saveResult).to.exist.and.not.equal(null);
                        });
                });
        });
    });
});

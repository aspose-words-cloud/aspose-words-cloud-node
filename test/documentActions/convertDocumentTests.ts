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
import * as testWithTestCases from "mocha-cases";

import * as fs from "fs";
import { ConvertDocumentRequest, GetDocumentWithFormatRequest, SaveAsRequest, SaveAsTiffRequest, SaveOptionsData, TiffSaveOptionsData } from "asposewordscloud";
import * as BaseTest from "../baseTest";

const testFolder = "DocumentActions/ConvertDocument";

describe("convert document", () => {
    const wordsApi = BaseTest.initializeWordsApi();

    describe("from docx to other formats", () => {

        const localPath = BaseTest.localCommonTestDataFolder + "test_multi_pages.docx";

        const remoteFileName = "SourceDocument.docx";
        const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

        before(() => {
            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
            });
        });

        describe("postDocumentSaveAs function", () => {
            // tslint:disable:completed-docs
            /**
             * Test runner
             * @param value destination format
             */
            function runner(value) {
                const request = new SaveAsRequest({
                    saveOptionsData: new SaveOptionsData({
                        saveFormat: value,
                        fileName: "Out/TestPostDocumentSaveAs." + value,
                    }),

                });
                request.name = remoteFileName;
                request.folder = remotePath;

                // Act
                return wordsApi.saveAs(request)
                    .then((result) => {
                        // Assert
                        expect(result.response.statusCode).to.equal(200);

                        expect(result.body.saveResult).to.exist.and.not.equal(null);
                    });
            }
            // tslint:enable:completed-docs

            testWithTestCases({
                name: "convert from 'docx' to {value} should return response with code 200",
                values: BaseTest.saveFormatTestCases,
                runner,
            });
        });

        describe("putConvertDocument function", () => {
            // tslint:disable:completed-docs
            /**
             * Test runner
             * @param value destination format
             */
            function runner(value) {
                const request = new ConvertDocumentRequest({
                    format: value,
                    document: fs.createReadStream(localPath),
                });

                // Act
                return wordsApi.convertDocument(request)
                    .then((result) => {
                        // Assert                
                        expect(result.response.statusCode).to.equal(200);
                        expect(result.body.byteLength).to.greaterThan(0);
                    });
            }
            // tslint:enable:completed-docs

            testWithTestCases({
                name: "convert from 'docx' to {value} should return response with code 200",
                values: BaseTest.saveFormatTestCases,
                runner,
            });           
        });

        describe("putDocumentSaveAsTiff function", () => {
            it("should return response with code 200", () => {

                const request = new SaveAsTiffRequest({
                    saveOptions: new TiffSaveOptionsData({
                        saveFormat: "tiff",
                        fileName: "Out/TestPostDocumentSaveAsTiff.tiff",
                    }),

                });
                request.name = remoteFileName;
                request.folder = remotePath;

                // Act
                return wordsApi.saveAsTiff(request)
                    .then((result) => {
                        // Assert
                        expect(result.response.statusCode).to.equal(200);

                        expect(result.body.saveResult).to.exist.and.not.equal(null);
                    });

            });
        });

        describe("getDocumentWithFormat function", () => {
            // tslint:disable:completed-docs
            /**
             * Test runner
             * @param value destination format
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
            // tslint:enable:completed-docs

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
                        .then((result1) => {
                            // Assert
                            expect(result1.response.statusCode).to.equal(200);
                            expect(result1.response.statusCode).to.equal(200);
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

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new SaveAsRequest({
                        saveOptionsData: new SaveOptionsData({
                            saveFormat: "docx",
                            fileName: "Out/TestPostDocumentSavePdfAsDocx.docx",
                        }),

                    });
                    request.name = remoteFileName;
                    request.folder = remotePath;

                    // Act
                    return wordsApi.saveAs(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.response.statusCode).to.equal(200);

                            expect(result1.body.saveResult).to.exist.and.not.equal(null);
                        });
                });
        });
    });
});

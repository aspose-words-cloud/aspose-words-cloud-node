/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="convertDocumentTests.ts">
 *   Copyright (c) 2022 Aspose.Words for Cloud
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

// Example of how to convert document to one of the available formats.
describe("convertDocument", () => {
    expect(fs);
    const remoteFolder = BaseTest.remoteBaseTestDataFolder + "/DocumentActions/ConvertDocument";
    const localFolder = "DocumentActions/ConvertDocument";

    // Test for converting document to one of the available formats.
    describe("saveAs test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const localName = "test_multi_pages.docx";
            const remoteName = "TestSaveAs.docx";

            return wordsApi.uploadFileToStorage(
                remoteFolder + "/" + remoteName,
                BaseTest.localBaseTestDataFolder + "Common/" + localName
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const requestSaveOptionsData = new model.PdfSaveOptionsData({
                    fileName: BaseTest.remoteBaseTestOutFolder + "/TestSaveAs.pdf"
                })
                const request = new model.SaveAsRequest({
                    name: remoteName,
                    saveOptionsData: requestSaveOptionsData,
                    folder: remoteFolder
                });

                // Act
                return wordsApi.saveAs(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.saveResult).to.exist;
                    expect(resultApi.body.saveResult.destDocument).to.exist;
                });

            });

       });
    });

    // Test for converting document online to one of the available formats.
    describe("saveAsOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const localName = "test_multi_pages.docx";

            const requestDocument = fs.createReadStream(BaseTest.localBaseTestDataFolder + "Common/" + localName);
            const requestSaveOptionsData = new model.PdfSaveOptionsData({
                fileName: BaseTest.remoteBaseTestOutFolder + "/TestSaveAs.pdf"
            })
            const request = new model.SaveAsOnlineRequest({
                document: requestDocument,
                saveOptionsData: requestSaveOptionsData
            });

            // Act
            return wordsApi.saveAsOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });

    // Test for converting document online to html with additional files like css and images.
    describe("saveAsOnlineHtmlMultifile test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const localName = "test_multi_pages.docx";

            const requestDocument = fs.createReadStream(BaseTest.localBaseTestDataFolder + "Common/" + localName);
            const requestSaveOptionsData = new model.HtmlSaveOptionsData({
                fileName: BaseTest.remoteBaseTestOutFolder + "/TestSaveAsHtml.html",
                cssStyleSheetType: model.HtmlSaveOptionsData.CssStyleSheetTypeEnum.External,
                cssStyleSheetFileName: BaseTest.remoteBaseTestOutFolder + "/TestSaveAsHtml.css"
            })
            const request = new model.SaveAsOnlineRequest({
                document: requestDocument,
                saveOptionsData: requestSaveOptionsData
            });

            // Act
            return wordsApi.saveAsOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });

    // Test for converting document to one of the available formats.
    describe("saveAsDocx test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const localName = "45.pdf";
            const remoteName = "TestSaveAsFromPdfToDoc.pdf";

            return wordsApi.uploadFileToStorage(
                remoteFolder + "/" + remoteName,
                BaseTest.localBaseTestDataFolder + localFolder + "/" + localName
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const requestSaveOptionsData = new model.DocxSaveOptionsData({
                    fileName: BaseTest.remoteBaseTestOutFolder + "/TestSaveAsFromPdfToDoc.docx"
                })
                const request = new model.SaveAsRequest({
                    name: remoteName,
                    saveOptionsData: requestSaveOptionsData,
                    folder: remoteFolder
                });

                // Act
                return wordsApi.saveAs(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.saveResult).to.exist;
                    expect(resultApi.body.saveResult.destDocument).to.exist;
                });

            });

       });
    });

    // Test for converting document to one of the available formats.
    describe("saveAsTiff test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const localName = "test_multi_pages.docx";
            const remoteName = "TestSaveAsTiff.pdf";

            return wordsApi.uploadFileToStorage(
                remoteFolder + "/" + remoteName,
                BaseTest.localBaseTestDataFolder + "Common/" + localName
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const requestSaveOptions = new model.TiffSaveOptionsData({
                    fileName: BaseTest.remoteBaseTestOutFolder + "/abc.tiff"
                })
                const request = new model.SaveAsTiffRequest({
                    name: remoteName,
                    saveOptions: requestSaveOptions,
                    folder: remoteFolder
                });

                // Act
                return wordsApi.saveAsTiff(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.saveResult).to.exist;
                    expect(resultApi.body.saveResult.destDocument).to.exist;
                });

            });

       });
    });

    // Test for converting document to one of the available formats.
    describe("saveAsTiffOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const localName = "test_multi_pages.docx";

            const requestDocument = fs.createReadStream(BaseTest.localBaseTestDataFolder + "Common/" + localName);
            const requestSaveOptions = new model.TiffSaveOptionsData({
                fileName: BaseTest.remoteBaseTestOutFolder + "/abc.tiff"
            })
            const request = new model.SaveAsTiffOnlineRequest({
                document: requestDocument,
                saveOptions: requestSaveOptions
            });

            // Act
            return wordsApi.saveAsTiffOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });

    // A test for ConvertDocument.
    describe("convertDocument test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const requestDocument = fs.createReadStream(BaseTest.localBaseTestDataFolder + localFolder + "/test_uploadfile.docx");
            const request = new model.ConvertDocumentRequest({
                document: requestDocument,
                format: "pdf"
            });

            // Act
            return wordsApi.convertDocument(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });
});
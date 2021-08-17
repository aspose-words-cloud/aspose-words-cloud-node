/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="pageSetupTests.ts">
 *   Copyright (c) 2021 Aspose.Words for Cloud
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

// Example of how to work with macros.
describe("pageSetup", () => {
    expect(fs);
    const remoteDataFolder = BaseTest.remoteBaseTestDataFolder + "/DocumentElements/PageSetup";
    const localFile = "Common/test_multi_pages.docx";
    const localTextFile = "DocumentElements/Text/SampleWordDocument.docx";

    // Test for getting page settings.
    describe("getSectionPageSetup test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestGetSectionPageSetup.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.GetSectionPageSetupRequest({
                    name: remoteFileName,
                    sectionIndex: 0,
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.getSectionPageSetup(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.pageSetup).to.exist;
                    expect(resultApi.body.pageSetup.lineStartingNumber).to.equal(1);
                });

            });

       });
    });

    // Test for getting page settings online.
    describe("getSectionPageSetupOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            let requestDocument = fs.createReadStream(BaseTest.localBaseTestDataFolder + localFile);
            const request = new model.GetSectionPageSetupOnlineRequest({
                document: requestDocument,
                sectionIndex: 0
            });

            // Act
            return wordsApi.getSectionPageSetupOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });

    // Test for updating page settings.
    describe("updateSectionPageSetup test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestUpdateSectionPageSetup.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                let requestPageSetup = new model.PageSetup({
                    rtlGutter: true,
                    leftMargin: 10.0,
                    orientation: model.PageSetup.OrientationEnum.Landscape,
                    paperSize: model.PageSetup.PaperSizeEnum.A5
                })
                const request = new model.UpdateSectionPageSetupRequest({
                    name: remoteFileName,
                    sectionIndex: 0,
                    pageSetup: requestPageSetup,
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.updateSectionPageSetup(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.pageSetup).to.exist;
                    expect(resultApi.body.pageSetup.rtlGutter).to.true;


                });

            });

       });
    });

    // Test for updating page settings online.
    describe("updateSectionPageSetupOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            let requestDocument = fs.createReadStream(BaseTest.localBaseTestDataFolder + localFile);
            let requestPageSetup = new model.PageSetup({
                rtlGutter: true,
                leftMargin: 10,
                orientation: model.PageSetup.OrientationEnum.Landscape,
                paperSize: model.PageSetup.PaperSizeEnum.A5
            })
            const request = new model.UpdateSectionPageSetupOnlineRequest({
                document: requestDocument,
                sectionIndex: 0,
                pageSetup: requestPageSetup
            });

            // Act
            return wordsApi.updateSectionPageSetupOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });

    // Test for page rendering.
    describe("getRenderPage test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestGetRenderPage.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localTextFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.RenderPageRequest({
                    name: remoteFileName,
                    pageIndex: 1,
                    format: "bmp",
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.renderPage(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                });

            });

       });
    });

    // Test for page rendering.
    describe("getRenderPageOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            let requestDocument = fs.createReadStream(BaseTest.localBaseTestDataFolder + localTextFile);
            const request = new model.RenderPageOnlineRequest({
                document: requestDocument,
                pageIndex: 1,
                format: "bmp"
            });

            // Act
            return wordsApi.renderPageOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });
});
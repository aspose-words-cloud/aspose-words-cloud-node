/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="headerFooterTests.ts">
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

// Example of how to work with headers and footers.
describe("headerFooter", () => {
    expect(fs);
    const remoteDataFolder = BaseTest.remoteBaseTestDataFolder + "/DocumentElements/HeaderFooters";
    const localFile = "DocumentElements/HeaderFooters/HeadersFooters.doc";

    // Test for getting headers and footers.
    describe("getHeaderFooters test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestGetHeadersFooters.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.GetHeaderFootersRequest({
                    name: remoteFileName,
                    sectionPath: "",
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.getHeaderFooters(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.headerFooters).to.exist;
                    expect(resultApi.body.headerFooters.list).to.exist;
                    expect(resultApi.body.headerFooters.list).to.have.lengthOf(6);
                });

            });

       });
    });

    // Test for getting headerfooter.
    describe("getHeaderFooter test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestGetHeaderFooter.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.GetHeaderFooterRequest({
                    name: remoteFileName,
                    headerFooterIndex: 0,
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.getHeaderFooter(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.headerFooter).to.exist;
                    expect(resultApi.body.headerFooter.childNodes).to.exist;
                    expect(resultApi.body.headerFooter.childNodes).to.have.lengthOf(1);
                    expect(resultApi.body.headerFooter.childNodes[0].nodeId).to.equal("0.0.0");
                });

            });

       });
    });

    // Test for getting headerfooter of section.
    describe("getHeaderFooterOfSection test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestGetHeaderFooterOfSection.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.GetHeaderFooterOfSectionRequest({
                    name: remoteFileName,
                    headerFooterIndex: 0,
                    sectionIndex: 0,
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.getHeaderFooterOfSection(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.headerFooter).to.exist;
                    expect(resultApi.body.headerFooter.childNodes).to.exist;
                    expect(resultApi.body.headerFooter.childNodes).to.have.lengthOf(1);
                    expect(resultApi.body.headerFooter.childNodes[0].nodeId).to.equal("0.0.0");
                });

            });

       });
    });

    // Test for deleting headerfooter.
    describe("deleteHeaderFooter test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestDeleteHeaderFooter.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.DeleteHeaderFooterRequest({
                    name: remoteFileName,
                    sectionPath: "",
                    index: 0,
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.deleteHeaderFooter(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.statusCode).to.equal(200);
                });

            });

       });
    });

    // Test for deleting headerfooters.
    describe("deleteHeadersFooters test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestDeleteHeadersFooters.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.DeleteHeadersFootersRequest({
                    name: remoteFileName,
                    sectionPath: "",
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.deleteHeadersFooters(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.statusCode).to.equal(200);
                });

            });

       });
    });

    // Test for adding headerfooters.
    describe("insertHeaderFooter test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestInsertHeaderFooter.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.InsertHeaderFooterRequest({
                    name: remoteFileName,
                    headerFooterType: "FooterEven",
                    sectionPath: "",
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.insertHeaderFooter(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.headerFooter).to.exist;
                    expect(resultApi.body.headerFooter.childNodes).to.exist;
                    expect(resultApi.body.headerFooter.childNodes).to.have.lengthOf(1);
                    expect(resultApi.body.headerFooter.childNodes[0].nodeId).to.equal("0.2.0");
                });

            });

       });
    });
});

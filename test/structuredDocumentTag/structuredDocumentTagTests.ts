/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="structuredDocumentTagTests.ts">
 *   Copyright (c) 2024 Aspose.Words for Cloud
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

// Example of how to use structured document tags.
describe("structuredDocumentTag", () => {
    expect(fs);
    const remoteDataFolder = BaseTest.remoteBaseTestDataFolder + "/DocumentElements/StructuredDocumentTag";
    const localFile = "DocumentElements/StructuredDocumentTag/StructuredDocumentTag.docx";

    // Test for getting SDT objects from document.
    describe("getStructuredDocumentTags test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestGetStructuredDocumentTags.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.GetStructuredDocumentTagsRequest({
                    name: remoteFileName,
                    nodePath: "sections/0/body/paragraphs/0",
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.getStructuredDocumentTags(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                });

            });

       });
    });

    // Test for getting SDT objects from document online.
    describe("getStructuredDocumentTagsOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const requestDocument = fs.createReadStream(BaseTest.localBaseTestDataFolder + localFile);
            const request = new model.GetStructuredDocumentTagsOnlineRequest({
                document: requestDocument,
                nodePath: "sections/0/body/paragraphs/0"
            });

            // Act
            return wordsApi.getStructuredDocumentTagsOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });

    // Test for getting SDT object from document.
    describe("getStructuredDocumentTag test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestGetStructuredDocumentTag.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.GetStructuredDocumentTagRequest({
                    name: remoteFileName,
                    nodePath: "sections/0/body/paragraphs/0",
                    index: 0,
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.getStructuredDocumentTag(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                });

            });

       });
    });

    // Test for getting SDT object from document online.
    describe("getStructuredDocumentTagOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const requestDocument = fs.createReadStream(BaseTest.localBaseTestDataFolder + localFile);
            const request = new model.GetStructuredDocumentTagOnlineRequest({
                document: requestDocument,
                nodePath: "sections/0/body/paragraphs/0",
                index: 0
            });

            // Act
            return wordsApi.getStructuredDocumentTagOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });

    // Test for adding SDT object.
    describe("insertStructuredDocumentTag test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestInsetStructuredDocumentTag.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const requestStructuredDocumentTag = new model.StructuredDocumentTagInsert({
                    sdtType: model.StructuredDocumentTagInsert.SdtTypeEnum.ComboBox,
                    level: model.StructuredDocumentTagInsert.LevelEnum.Inline
                })
                const request = new model.InsertStructuredDocumentTagRequest({
                    name: remoteFileName,
                    structuredDocumentTag: requestStructuredDocumentTag,
                    nodePath: "sections/0/body/paragraphs/0",
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.insertStructuredDocumentTag(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                });

            });

       });
    });

    // Test for adding SDT object online.
    describe("insertStructuredDocumentTagOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const requestDocument = fs.createReadStream(BaseTest.localBaseTestDataFolder + localFile);
            const requestStructuredDocumentTag = new model.StructuredDocumentTagInsert({
                sdtType: model.StructuredDocumentTagInsert.SdtTypeEnum.ComboBox,
                level: model.StructuredDocumentTagInsert.LevelEnum.Inline
            })
            const request = new model.InsertStructuredDocumentTagOnlineRequest({
                document: requestDocument,
                structuredDocumentTag: requestStructuredDocumentTag,
                nodePath: "sections/0/body/paragraphs/0"
            });

            // Act
            return wordsApi.insertStructuredDocumentTagOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });

    // Test for deleting SDT object.
    describe("deleteStructuredDocumentTag test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestDeleteStructuredDocumentTag.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.DeleteStructuredDocumentTagRequest({
                    name: remoteFileName,
                    index: 0,
                    nodePath: "sections/0/body/paragraphs/0",
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.deleteStructuredDocumentTag(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.statusCode).to.equal(200);
                });

            });

       });
    });

    // Test for deleting SDT object online.
    describe("deleteStructuredDocumentTagOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const requestDocument = fs.createReadStream(BaseTest.localBaseTestDataFolder + localFile);
            const request = new model.DeleteStructuredDocumentTagOnlineRequest({
                document: requestDocument,
                index: 0,
                nodePath: "sections/0/body/paragraphs/0"
            });

            // Act
            return wordsApi.deleteStructuredDocumentTagOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });

    // Test for updating SDT object.
    describe("updateStructuredDocumentTag test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestUpdateStructuredDocumentTag.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const requestStructuredDocumentTagListItems0 = new model.StructuredDocumentTagListItem({
                    displayText: "Aspose Words",
                    value: "1"
                })
                const requestStructuredDocumentTagListItems1 = new model.StructuredDocumentTagListItem({
                    displayText: "Hello world",
                    value: "2"
                })
                const requestStructuredDocumentTagListItems = [
                    requestStructuredDocumentTagListItems0,
                    requestStructuredDocumentTagListItems1
                ]
                const requestStructuredDocumentTag = new model.StructuredDocumentTagUpdate({
                    listItems: requestStructuredDocumentTagListItems
                })
                const request = new model.UpdateStructuredDocumentTagRequest({
                    name: remoteFileName,
                    structuredDocumentTag: requestStructuredDocumentTag,
                    index: 0,
                    nodePath: "sections/0/body/paragraphs/0",
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.updateStructuredDocumentTag(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                });

            });

       });
    });

    // Test for updating SDT object online.
    describe("updateStructuredDocumentTagOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const requestDocument = fs.createReadStream(BaseTest.localBaseTestDataFolder + localFile);
            const requestStructuredDocumentTagListItems0 = new model.StructuredDocumentTagListItem({
                displayText: "Aspose Words",
                value: "1"
            })
            const requestStructuredDocumentTagListItems1 = new model.StructuredDocumentTagListItem({
                displayText: "Hello world",
                value: "2"
            })
            const requestStructuredDocumentTagListItems = [
                requestStructuredDocumentTagListItems0,
                requestStructuredDocumentTagListItems1
            ]
            const requestStructuredDocumentTag = new model.StructuredDocumentTagUpdate({
                listItems: requestStructuredDocumentTagListItems
            })
            const request = new model.UpdateStructuredDocumentTagOnlineRequest({
                document: requestDocument,
                structuredDocumentTag: requestStructuredDocumentTag,
                index: 0,
                nodePath: "sections/0/body/paragraphs/0"
            });

            // Act
            return wordsApi.updateStructuredDocumentTagOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });
});
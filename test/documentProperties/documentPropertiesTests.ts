/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="documentPropertiesTests.ts">
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

// Example of how to get document properties.
describe("documentProperties", () => {
    expect(fs);
    const remoteDataFolder = BaseTest.remoteBaseTestDataFolder + "/DocumentElements/DocumentProperties";
    const localFile = "Common/test_multi_pages.docx";

    // Test for getting document properties.
    describe("getDocumentProperties test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestGetDocumentProperties.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.GetDocumentPropertiesRequest({
                    name: remoteFileName,
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.getDocumentProperties(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.documentProperties).to.exist;
                    expect(resultApi.body.documentProperties.list).to.exist;
                    expect(resultApi.body.documentProperties.list).to.have.lengthOf(24);
                    expect(resultApi.body.documentProperties.list[0]).to.exist;
                    expect(resultApi.body.documentProperties.list[0].name).to.equal("Author");
                    expect(resultApi.body.documentProperties.list[0].value).to.equal("");
                });

            });

       });
    });

    // Test for getting document properties online.
    describe("getDocumentPropertiesOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.GetDocumentPropertiesOnlineRequest({
                document: fs.createReadStream(BaseTest.localBaseTestDataFolder + localFile)
            });

            // Act
            return wordsApi.getDocumentPropertiesOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });

    // A test for GetDocumentProperty.
    describe("getDocumentProperty test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestGetDocumentProperty.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.GetDocumentPropertyRequest({
                    name: remoteFileName,
                    propertyName: "Author",
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.getDocumentProperty(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.documentProperty).to.exist;
                    expect(resultApi.body.documentProperty.name).to.equal("Author");
                    expect(resultApi.body.documentProperty.value).to.equal("");
                });

            });

       });
    });

    // A test for GetDocumentProperty online.
    describe("getDocumentPropertyOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.GetDocumentPropertyOnlineRequest({
                document: fs.createReadStream(BaseTest.localBaseTestDataFolder + localFile),
                propertyName: "Author"
            });

            // Act
            return wordsApi.getDocumentPropertyOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });

    // Test for deleting document property.
    describe("deleteDocumentProperty test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestDeleteDocumentProperty.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.DeleteDocumentPropertyRequest({
                    name: remoteFileName,
                    propertyName: "testProp",
                    folder: remoteDataFolder,
                    destFileName: BaseTest.remoteBaseTestOutFolder + "/" + remoteFileName
                });

                // Act
                return wordsApi.deleteDocumentProperty(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.statusCode).to.equal(200);
                });

            });

       });
    });

    // Test for deleting document property online.
    describe("deleteDocumentPropertyOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.DeleteDocumentPropertyOnlineRequest({
                document: fs.createReadStream(BaseTest.localBaseTestDataFolder + localFile),
                propertyName: "testProp"
            });

            // Act
            return wordsApi.deleteDocumentPropertyOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });

    // Test for updating document property.
    describe("updateDocumentProperty test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestUpdateDocumentProperty.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.CreateOrUpdateDocumentPropertyRequest({
                    name: remoteFileName,
                    propertyName: "AsposeAuthor",
                    property: new model.DocumentPropertyCreateOrUpdate({
                        value: "Imran Anwar"
                    }),
                    folder: remoteDataFolder,
                    destFileName: BaseTest.remoteBaseTestOutFolder + "/" + remoteFileName
                });

                // Act
                return wordsApi.createOrUpdateDocumentProperty(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.documentProperty).to.exist;
                    expect(resultApi.body.documentProperty.name).to.equal("AsposeAuthor");
                    expect(resultApi.body.documentProperty.value).to.equal("Imran Anwar");
                });

            });

       });
    });

    // Test for updating document property online.
    describe("updateDocumentPropertyOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.CreateOrUpdateDocumentPropertyOnlineRequest({
                document: fs.createReadStream(BaseTest.localBaseTestDataFolder + localFile),
                propertyName: "AsposeAuthor",
                property: new model.DocumentPropertyCreateOrUpdate({
                    value: "Imran Anwar"
                })
            });

            // Act
            return wordsApi.createOrUpdateDocumentPropertyOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });
});

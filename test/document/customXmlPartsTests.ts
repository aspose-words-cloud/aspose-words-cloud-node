/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="customXmlPartsTests.ts">
 *   Copyright (c) 2026 Aspose.Words for Cloud
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

// Example of how to use custom xml parts in documents.
describe("customXmlParts", () => {
    expect(fs);
    const remoteDataFolder = BaseTest.remoteBaseTestDataFolder + "/CustomXmlParts";
    const localFile = "DocumentElements/CustomXmlParts/MultipleCustomXmlParts.docx";

    // Test for getting custom xml part by specified index.
    describe("getCustomXmlPart test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestGetCustomXmlPart.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.GetCustomXmlPartRequest({
                    name: remoteFileName,
                    customXmlPartIndex: 0,
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.getCustomXmlPart(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.customXmlPart).to.exist;
                    expect(resultApi.body.customXmlPart.id).to.equal("aspose");
                    expect(resultApi.body.customXmlPart.data).to.equal("<Metadata><Author>author1</Author><Initial>initial</Initial><DateTime>2015-01-22T00:00:00</DateTime><Text>text</Text></Metadata>");
                });

            });

       });
    });

    // Test for getting custom xml part by specified index online.
    describe("getCustomXmlPartOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const requestDocument = fs.createReadStream(BaseTest.localBaseTestDataFolder + localFile);
            const request = new model.GetCustomXmlPartOnlineRequest({
                document: requestDocument,
                customXmlPartIndex: 0
            });

            // Act
            return wordsApi.getCustomXmlPartOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
                expect(resultApi.body.customXmlPart).to.exist;
                expect(resultApi.body.customXmlPart.id).to.equal("aspose");
                expect(resultApi.body.customXmlPart.data).to.equal("<Metadata><Author>author1</Author><Initial>initial</Initial><DateTime>2015-01-22T00:00:00</DateTime><Text>text</Text></Metadata>");
            });

       });
    });

    // Test for getting all custom xml parts from document.
    describe("getCustomXmlParts test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestGetCustomXmlParts.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.GetCustomXmlPartsRequest({
                    name: remoteFileName,
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.getCustomXmlParts(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.customXmlParts).to.exist;
                    expect(resultApi.body.customXmlParts.customXmlPartsList).to.exist;
                    expect(resultApi.body.customXmlParts.customXmlPartsList).to.have.lengthOf(2);
                    expect(resultApi.body.customXmlParts.customXmlPartsList[0].id).to.equal("aspose");
                    expect(resultApi.body.customXmlParts.customXmlPartsList[0].data).to.equal("<Metadata><Author>author1</Author><Initial>initial</Initial><DateTime>2015-01-22T00:00:00</DateTime><Text>text</Text></Metadata>");
                });

            });

       });
    });

    // Test for getting all custom xml parts from document online.
    describe("getCustomXmlPartsOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const requestDocument = fs.createReadStream(BaseTest.localBaseTestDataFolder + localFile);
            const request = new model.GetCustomXmlPartsOnlineRequest({
                document: requestDocument
            });

            // Act
            return wordsApi.getCustomXmlPartsOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
                expect(resultApi.body.customXmlParts).to.exist;
                expect(resultApi.body.customXmlParts.customXmlPartsList).to.exist;
                expect(resultApi.body.customXmlParts.customXmlPartsList).to.have.lengthOf(2);
                expect(resultApi.body.customXmlParts.customXmlPartsList[0].id).to.equal("aspose");
                expect(resultApi.body.customXmlParts.customXmlPartsList[0].data).to.equal("<Metadata><Author>author1</Author><Initial>initial</Initial><DateTime>2015-01-22T00:00:00</DateTime><Text>text</Text></Metadata>");
            });

       });
    });

    // Test for adding custom xml part.
    describe("insertCustomXmlPart test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestInsertCustomXmlPart.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const requestCustomXmlPart = new model.CustomXmlPartInsert({
                    id: "hello",
                    data: "<data>Hello world</data>"
                })
                const request = new model.InsertCustomXmlPartRequest({
                    name: remoteFileName,
                    customXmlPart: requestCustomXmlPart,
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.insertCustomXmlPart(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.customXmlPart).to.exist;
                    expect(resultApi.body.customXmlPart.id).to.equal("hello");
                    expect(resultApi.body.customXmlPart.data).to.equal("<data>Hello world</data>");
                });

            });

       });
    });

    // Test for adding custom xml part online.
    describe("insertCustomXmlPartOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const requestDocument = fs.createReadStream(BaseTest.localBaseTestDataFolder + localFile);
            const requestCustomXmlPart = new model.CustomXmlPartInsert({
                id: "hello",
                data: "<data>Hello world</data>"
            })
            const request = new model.InsertCustomXmlPartOnlineRequest({
                document: requestDocument,
                customXmlPart: requestCustomXmlPart
            });

            // Act
            return wordsApi.insertCustomXmlPartOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
                expect(resultApi.body.model.customXmlPart).to.exist;
                expect(resultApi.body.model.customXmlPart.id).to.equal("hello");
                expect(resultApi.body.model.customXmlPart.data).to.equal("<data>Hello world</data>");
            });

       });
    });

    // Test for updating custom xml part.
    describe("updateCustomXmlPart test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestUpdateCustomXmlPart.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const requestCustomXmlPart = new model.CustomXmlPartUpdate({
                    data: "<data>Hello world</data>"
                })
                const request = new model.UpdateCustomXmlPartRequest({
                    name: remoteFileName,
                    customXmlPartIndex: 0,
                    customXmlPart: requestCustomXmlPart,
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.updateCustomXmlPart(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.customXmlPart).to.exist;
                    expect(resultApi.body.customXmlPart.id).to.equal("aspose");
                    expect(resultApi.body.customXmlPart.data).to.equal("<data>Hello world</data>");
                });

            });

       });
    });

    // Test for updating custom xml part online.
    describe("updateCustomXmlPartOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const requestDocument = fs.createReadStream(BaseTest.localBaseTestDataFolder + localFile);
            const requestCustomXmlPart = new model.CustomXmlPartUpdate({
                data: "<data>Hello world</data>"
            })
            const request = new model.UpdateCustomXmlPartOnlineRequest({
                document: requestDocument,
                customXmlPartIndex: 0,
                customXmlPart: requestCustomXmlPart
            });

            // Act
            return wordsApi.updateCustomXmlPartOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
                expect(resultApi.body.model.customXmlPart).to.exist;
                expect(resultApi.body.model.customXmlPart.id).to.equal("aspose");
                expect(resultApi.body.model.customXmlPart.data).to.equal("<data>Hello world</data>");
            });

       });
    });

    // A test for DeleteCustomXmlPart.
    describe("deleteCustomXmlPart test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestDeleteCustomXmlPart.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.DeleteCustomXmlPartRequest({
                    name: remoteFileName,
                    customXmlPartIndex: 0,
                    folder: remoteDataFolder,
                    destFileName: BaseTest.remoteBaseTestOutFolder + "/" + remoteFileName
                });

                // Act
                return wordsApi.deleteCustomXmlPart(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.statusCode).to.equal(200);
                });

            });

       });
    });

    // A test for DeleteCustomXmlPart online.
    describe("deleteCustomXmlPartOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const requestDocument = fs.createReadStream(BaseTest.localBaseTestDataFolder + localFile);
            const request = new model.DeleteCustomXmlPartOnlineRequest({
                document: requestDocument,
                customXmlPartIndex: 0
            });

            // Act
            return wordsApi.deleteCustomXmlPartOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });

    // A test for DeleteCustomXmlParts.
    describe("deleteCustomXmlParts test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestDeleteCustomXmlPart.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.DeleteCustomXmlPartsRequest({
                    name: remoteFileName,
                    folder: remoteDataFolder,
                    destFileName: BaseTest.remoteBaseTestOutFolder + "/" + remoteFileName
                });

                // Act
                return wordsApi.deleteCustomXmlParts(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.statusCode).to.equal(200);
                });

            });

       });
    });

    // A test for DeleteCustomXmlParts online.
    describe("deleteCustomXmlPartsOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const requestDocument = fs.createReadStream(BaseTest.localBaseTestDataFolder + localFile);
            const request = new model.DeleteCustomXmlPartsOnlineRequest({
                document: requestDocument
            });

            // Act
            return wordsApi.deleteCustomXmlPartsOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });
});
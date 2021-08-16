/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="formFieldTests.ts">
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

// Example of how to work with form field.
describe("formField", () => {
    expect(fs);
    const remoteDataFolder = BaseTest.remoteBaseTestDataFolder + "/DocumentElements/FormFields";
    const fieldFolder = "DocumentElements/FormFields";

    // Test for posting form field.
    describe("updateFormField test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestUpdateFormField.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + fieldFolder + "/FormFilled.docx"
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.UpdateFormFieldRequest({
                    name: remoteFileName,
                    index: 0,
                    formField: requestFormField,
                    nodePath: "sections/0",
                    folder: remoteDataFolder,
                    destFileName: BaseTest.remoteBaseTestOutFolder + "/" + remoteFileName
                });

                // Act
                return wordsApi.updateFormField(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.formField).to.exist;
                    expect(resultApi.body.formField.name).to.equal("FullName");
                    expect(resultApi.body.formField.statusText).to.equal("");
                });

            });

       });
    });

    // Test for posting form field online.
    describe("updateFormFieldOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            let requestDocument = fs.createReadStream(BaseTest.localBaseTestDataFolder + fieldFolder + "/FormFilled.docx");

            const request = new model.UpdateFormFieldOnlineRequest({
                document: requestDocument,
                index: 0,
                formField: requestFormField,
                nodePath: "sections/0"
            });

            // Act
            return wordsApi.updateFormFieldOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });

    // Test for posting form field without node path.
    describe("updateFormFieldWithoutNodePath test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestUpdateFormFieldWithoutNodePath.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + fieldFolder + "/FormFilled.docx"
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.UpdateFormFieldRequest({
                    name: remoteFileName,
                    index: 0,
                    formField: requestFormField,
                    folder: remoteDataFolder,
                    destFileName: BaseTest.remoteBaseTestOutFolder + "/" + remoteFileName
                });

                // Act
                return wordsApi.updateFormField(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.formField).to.exist;
                    expect(resultApi.body.formField.name).to.equal("FullName");
                    expect(resultApi.body.formField.statusText).to.equal("");
                });

            });

       });
    });

    // Test for getting form field.
    describe("getFormField test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestGetFormField.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + fieldFolder + "/FormFilled.docx"
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.GetFormFieldRequest({
                    name: remoteFileName,
                    index: 0,
                    nodePath: "sections/0",
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.getFormField(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.formField).to.exist;
                    expect(resultApi.body.formField.name).to.equal("FullName");
                });

            });

       });
    });

    // Test for getting form field online.
    describe("getFormFieldOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            let requestDocument = fs.createReadStream(BaseTest.localBaseTestDataFolder + fieldFolder + "/FormFilled.docx");
            const request = new model.GetFormFieldOnlineRequest({
                document: requestDocument,
                index: 0,
                nodePath: "sections/0"
            });

            // Act
            return wordsApi.getFormFieldOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });

    // Test for getting form field without node path.
    describe("getFormFieldWithoutNodePath test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestGetFormFieldWithoutNodePath.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + fieldFolder + "/FormFilled.docx"
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.GetFormFieldRequest({
                    name: remoteFileName,
                    index: 0,
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.getFormField(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.formField).to.exist;
                    expect(resultApi.body.formField.name).to.equal("FullName");
                });

            });

       });
    });

    // Test for getting form fields.
    describe("getFormFields test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestGetFormFields.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + fieldFolder + "/FormFilled.docx"
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.GetFormFieldsRequest({
                    name: remoteFileName,
                    nodePath: "sections/0",
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.getFormFields(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.formFields).to.exist;
                    expect(resultApi.body.formFields.list).to.exist;
                    expect(resultApi.body.formFields.list).to.have.lengthOf(5);
                    expect(resultApi.body.formFields.list[0].name).to.equal("FullName");
                });

            });

       });
    });

    // Test for getting form fields online.
    describe("getFormFieldsOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            let requestDocument = fs.createReadStream(BaseTest.localBaseTestDataFolder + fieldFolder + "/FormFilled.docx");
            const request = new model.GetFormFieldsOnlineRequest({
                document: requestDocument,
                nodePath: "sections/0"
            });

            // Act
            return wordsApi.getFormFieldsOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });

    // Test for getting form fields without node path.
    describe("getFormFieldsWithoutNodePath test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestGetFormFieldsWithoutNodePath.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + fieldFolder + "/FormFilled.docx"
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.GetFormFieldsRequest({
                    name: remoteFileName,
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.getFormFields(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.formFields).to.exist;
                    expect(resultApi.body.formFields.list).to.exist;
                    expect(resultApi.body.formFields.list).to.have.lengthOf(5);
                    expect(resultApi.body.formFields.list[0].name).to.equal("FullName");
                });

            });

       });
    });

    // Test for insert form field without node path.
    describe("insertFormField test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestInsertFormField.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + "Common/test_multi_pages.docx"
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.InsertFormFieldRequest({
                    name: remoteFileName,
                    formField: requestFormField,
                    nodePath: "sections/0/paragraphs/0",
                    folder: remoteDataFolder,
                    destFileName: BaseTest.remoteBaseTestOutFolder + "/" + remoteFileName
                });

                // Act
                return wordsApi.insertFormField(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.formField).to.exist;
                    expect(resultApi.body.formField.name).to.equal("FullName");
                    expect(resultApi.body.formField.statusText).to.equal("");
                });

            });

       });
    });

    // Test for insert form field without node path online.
    describe("insertFormFieldOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            let requestDocument = fs.createReadStream(BaseTest.localBaseTestDataFolder + fieldFolder + "/FormFilled.docx");

            const request = new model.InsertFormFieldOnlineRequest({
                document: requestDocument,
                formField: requestFormField,
                nodePath: "sections/0/paragraphs/0"
            });

            // Act
            return wordsApi.insertFormFieldOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });

    // Test for insert form field without node path.
    describe("insertFormFieldWithoutNodePath test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestInsertFormFieldWithoutNodePath.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + "Common/test_multi_pages.docx"
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.InsertFormFieldRequest({
                    name: remoteFileName,
                    formField: requestFormField,
                    folder: remoteDataFolder,
                    destFileName: BaseTest.remoteBaseTestOutFolder + "/" + remoteFileName
                });

                // Act
                return wordsApi.insertFormField(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.formField).to.exist;
                    expect(resultApi.body.formField.name).to.equal("FullName");
                    expect(resultApi.body.formField.statusText).to.equal("");
                });

            });

       });
    });

    // Test for deleting form field.
    describe("deleteFormField test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestDeleteFormField.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + fieldFolder + "/FormFilled.docx"
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.DeleteFormFieldRequest({
                    name: remoteFileName,
                    index: 0,
                    nodePath: "sections/0",
                    folder: remoteDataFolder,
                    destFileName: BaseTest.remoteBaseTestOutFolder + "/" + remoteFileName
                });

                // Act
                return wordsApi.deleteFormField(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.statusCode).to.equal(200);
                });

            });

       });
    });

    // Test for deleting form field online.
    describe("deleteFormFieldOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            let requestDocument = fs.createReadStream(BaseTest.localBaseTestDataFolder + fieldFolder + "/FormFilled.docx");
            const request = new model.DeleteFormFieldOnlineRequest({
                document: requestDocument,
                index: 0,
                nodePath: "sections/0"
            });

            // Act
            return wordsApi.deleteFormFieldOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });

    // Test for deleting form field without node path.
    describe("deleteFormFieldWithoutNodePath test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestDeleteFormFieldWithoutNodePath.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + fieldFolder + "/FormFilled.docx"
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.DeleteFormFieldRequest({
                    name: remoteFileName,
                    index: 0,
                    folder: remoteDataFolder,
                    destFileName: BaseTest.remoteBaseTestOutFolder + "/" + remoteFileName
                });

                // Act
                return wordsApi.deleteFormField(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.statusCode).to.equal(200);
                });

            });

       });
    });
});
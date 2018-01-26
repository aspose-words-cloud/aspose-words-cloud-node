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

import { DeleteFormFieldRequest, FormFieldTextInput, GetFormFieldRequest, GetFormFieldsRequest, PostFormFieldRequest, PutFormFieldRequest } from "../../src/model/model";
import * as BaseTest from "../baseTest";

const testFolder = "DocumentElements/FormFields";

describe("formFields", () => {
    describe("getFormFields function", () => {

        it("should return response with code 200", () => {

            const storageApi = BaseTest.initializeStorageApi();
            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localBaseTestDataFolder + testFolder + "/FormFilled.docx";
            const remoteFileName = "TestGetFormFields.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return new Promise((resolve) => {
                storageApi.PutCreate(remotePath + "/" + remoteFileName, null, null, localPath, (responseMessage) => {
                    expect(responseMessage.status).to.equal("OK");
                    resolve();
                });
            })
                .then(() => {
                    const request = new GetFormFieldsRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;

                    // Act
                    return wordsApi.getFormFields(request)
                        .then((result) => {
                            // Assert
                            expect(result.body.code).to.equal(200);
                            expect(result.response.statusCode).to.equal(200);
                        });
                });
        });
    });

    describe("getFormField function", () => {
        it("should return response with code 200", () => {

            const storageApi = BaseTest.initializeStorageApi();
            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localBaseTestDataFolder + testFolder + "/FormFilled.docx";
            const remoteFileName = "TestGetFormField.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return new Promise((resolve) => {
                storageApi.PutCreate(remotePath + "/" + remoteFileName, null, null, localPath, (responseMessage) => {
                    expect(responseMessage.status).to.equal("OK");
                    resolve();
                });
            })
                .then(() => {
                    const request = new GetFormFieldRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.index = 0;

                    // Act
                    return wordsApi.getFormField(request)
                        .then((result) => {
                            // Assert
                            expect(result.body.code).to.equal(200);
                            expect(result.response.statusCode).to.equal(200);
                        });
                });
        });
    });    

    describe("putFormField function", () => {

        it("should return response with code 200", () => {

            const storageApi = BaseTest.initializeStorageApi();
            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localCommonTestDataFolder + "test_multi_pages.docx";
            const remoteFileName = "TestPutFormField.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return new Promise((resolve) => {
                storageApi.PutCreate(remotePath + "/" + remoteFileName, null, null, localPath, (responseMessage) => {
                    expect(responseMessage.status).to.equal("OK");
                    resolve();
                });
            })
                .then(() => {
                    const request = new PutFormFieldRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.nodePath = "sections/0/paragraphs/0";
                    request.formField = new FormFieldTextInput
                    ({
                        name: "FullName",
                        enabled: true,
                        calculateOnExit: true,                        
                        textInputType: FormFieldTextInput.TextInputTypeEnum.Regular,
                        textInputDefault: "123",
                        textInputFormat: "UPPERCASE",
                    });
                    
                    // Act
                    return wordsApi.putFormField(request)
                        .then((result) => {
                            // Assert
                            expect(result.body.code).to.equal(200);
                            expect(result.response.statusCode).to.equal(200);
                        });
                });
        });
    });

    describe("postFormField function", () => {

        it("should return response with code 200", () => {

            const storageApi = BaseTest.initializeStorageApi();
            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localBaseTestDataFolder + testFolder + "/FormFilled.docx";
            const remoteFileName = "TestPostFormField.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return new Promise((resolve) => {
                storageApi.PutCreate(remotePath + "/" + remoteFileName, null, null, localPath, (responseMessage) => {
                    expect(responseMessage.status).to.equal("OK");
                    resolve();
                });
            })
                .then(() => {
                    const request = new PostFormFieldRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.nodePath = "sections/0";
                    request.index = 0;
                    request.formField = new FormFieldTextInput
                    ({
                        name: "FullName",
                        enabled: true,
                        calculateOnExit: true,                        
                        textInputType: FormFieldTextInput.TextInputTypeEnum.Regular,
                        textInputDefault: "123",
                        textInputFormat: "UPPERCASE",
                    });

                    // Act
                    return wordsApi.postFormField(request)
                        .then((result) => {
                            // Assert
                            expect(result.body.code).to.equal(200);
                            expect(result.response.statusCode).to.equal(200);
                        });
                });
        });
    });

    describe("deleteFormField function", () => {
        it("should return response with code 200", () => {

            const storageApi = BaseTest.initializeStorageApi();
            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localBaseTestDataFolder + testFolder + "/FormFilled.docx";
            const remoteFileName = "TestDeleteFormField.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return new Promise((resolve) => {
                storageApi.PutCreate(remotePath + "/" + remoteFileName, null, null, localPath, (responseMessage) => {
                    expect(responseMessage.status).to.equal("OK");
                    resolve();
                });
            })
                .then(() => {
                    const request = new DeleteFormFieldRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.nodePath = "sections/0";
                    request.index = 0;

                    // Act
                    return wordsApi.deleteFormField(request)
                        .then((result) => {
                            // Assert
                            expect(result.body.code).to.equal(200);
                            expect(result.response.statusCode).to.equal(200);
                        });
                });
        });
    });
});

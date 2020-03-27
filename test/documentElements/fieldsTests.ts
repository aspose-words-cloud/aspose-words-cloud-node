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

import { DeleteFieldRequest, DeleteFieldsRequest, Field, GetFieldRequest, GetFieldsRequest, InsertFieldRequest, InsertPageNumbersRequest, PageNumber, UpdateFieldRequest, UpdateFieldsRequest } from "../../src/model/model";
import { DeleteFieldsWithoutNodePathRequest, DeleteFieldWithoutNodePathRequest, GetFieldsWithoutNodePathRequest, GetFieldWithoutNodePathRequest, InsertFieldWithoutNodePathRequest } from "../../src/model/model";
import * as BaseTest from "../baseTest";

const testFolder = "DocumentElements/Fields";

describe("fields", () => {
    describe("getFields function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localBaseTestDataFolder + testFolder + "/GetField.docx";
            const remoteFileName = "TestGetFields.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new GetFieldsRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.nodePath = "sections/0";

                    // Act
                    return wordsApi.getFields(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.response.statusCode).to.equal(200);

                            expect(result1.body.fields).to.exist.and.not.equal(null);
                        });
                });
        });
    });

    describe("getField function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localBaseTestDataFolder + testFolder + "/GetField.docx";
            const remoteFileName = "TestGetField.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new GetFieldRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.nodePath = "sections/0/paragraphs/0";
                    request.index = 0;

                    // Act
                    return wordsApi.getField(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.response.statusCode).to.equal(200);

                            expect(result1.body.field).to.exist.and.not.equal(null);
                        });
                });
        });
    });

    describe("insertField function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localCommonTestDataFolder + "test_multi_pages.docx";
            const remoteFileName = "TestPutField.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new InsertFieldRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.field = new FieldInsert({ fieldCode: "{ NUMPAGES }" });
                    request.nodePath = "sections/0/paragraphs/0";

                    // Act
                    return wordsApi.insertField(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.response.statusCode).to.equal(200);

                            expect(result1.body.field).to.exist.and.not.equal(null);
                        });
                });
        });
    });

    describe("updateField function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localBaseTestDataFolder + testFolder + "/GetField.docx";
            const remoteFileName = "TestPostField.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new UpdateFieldRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.nodePath = "sections/0/paragraphs/0";
                    request.index = 0;
                    request.field = new FieldUpdate({ fieldCode: "{ NUMPAGES }" });

                    // Act
                    return wordsApi.updateField(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.response.statusCode).to.equal(200);

                            expect(result1.body.field).to.exist.and.not.equal(null);
                        });
                });
        });
    });

    describe("deleteField function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localBaseTestDataFolder + testFolder + "/GetField.docx";
            const remoteFileName = "TestDeleteField.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new DeleteFieldRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.nodePath = "sections/0/paragraphs/0";
                    request.index = 0;

                    // Act
                    return wordsApi.deleteField(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.statusCode).to.equal(200);
                        });
                });
        });
    });

    describe("deleteFields function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localBaseTestDataFolder + testFolder + "/GetField.docx";
            const remoteFileName = "TestDeleteField.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new DeleteFieldsRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath; 
                    request.nodePath = "paragraphs/0";                   

                    // Act
                    return wordsApi.deleteFields(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.statusCode).to.equal(200);
                        });
                });
        });
    });

    describe("insertPageNumbers function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localCommonTestDataFolder + "test_multi_pages.docx";
            const remoteFileName = "TestPostInsertPageNumbers.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new InsertPageNumbersRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.pageNumber = new PageNumber ({ alignment: "center", format: "{PAGE} of {NUMPAGES}" });

                    // Act
                    return wordsApi.insertPageNumbers(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.response.statusCode).to.equal(200);

                            expect(result1.body.document).to.exist.and.not.equal(null);
                        });
                });
        });
    });

    describe("updateFields function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localBaseTestDataFolder + testFolder + "/GetField.docx";
            const remoteFileName = "TestPostUpdateDocumentFields.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new UpdateFieldsRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;                    

                    // Act
                    return wordsApi.updateFields(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.response.statusCode).to.equal(200);

                            expect(result1.body.document).to.exist.and.not.equal(null);
                        });
                });
        });
    });

    describe("getFieldsWithoutNodePath function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localBaseTestDataFolder + testFolder + "/GetField.docx";
            const remoteFileName = "TestGetFieldsWithoutNodePath.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new GetFieldsWithoutNodePathRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;

                    // Act
                    return wordsApi.getFieldsWithoutNodePath(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.response.statusCode).to.equal(200);

                            expect(result1.body.fields).to.exist.and.not.equal(null);
                        });
                });
        });
    });

    describe("getFieldWithoutNodePath function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localBaseTestDataFolder + testFolder + "/GetField.docx";
            const remoteFileName = "TestGetFieldWithoutNodePath.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new GetFieldWithoutNodePathRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.index = 0;

                    // Act
                    return wordsApi.getFieldWithoutNodePath(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.response.statusCode).to.equal(200);

                            expect(result1.body.field).to.exist.and.not.equal(null);
                        });
                });
        });
    });

    describe("insertFieldWithoutNodePath function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localCommonTestDataFolder + "test_multi_pages.docx";
            const remoteFileName = "TestPutFieldWithoutNodePath.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new InsertFieldWithoutNodePathRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.field = new FieldInsert({ fieldCode: "{ NUMPAGES }" });

                    // Act
                    return wordsApi.insertFieldWithoutNodePath(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.response.statusCode).to.equal(200);

                            expect(result1.body.field).to.exist.and.not.equal(null);
                        });
                });
        });
    });

    describe("deleteFieldWithoutNodePath function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localBaseTestDataFolder + testFolder + "/GetField.docx";
            const remoteFileName = "TestDeleteFieldWithoutNodePath.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new DeleteFieldWithoutNodePathRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.index = 0;

                    // Act
                    return wordsApi.deleteFieldWithoutNodePath(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.statusCode).to.equal(200);
                        });
                });
        });
    });

    describe("deleteFieldsWithoutNodePath function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localBaseTestDataFolder + testFolder + "/GetField.docx";
            const remoteFileName = "TestDeleteFieldWithoutNodePath.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new DeleteFieldsWithoutNodePathRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;                

                    // Act
                    return wordsApi.deleteFieldsWithoutNodePath(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.statusCode).to.equal(200);
                        });
                });
        });
    });

});

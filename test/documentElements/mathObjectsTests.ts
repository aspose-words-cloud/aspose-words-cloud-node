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

import { DeleteOfficeMathObjectRequest, GetOfficeMathObjectRequest, GetOfficeMathObjectsRequest, RenderMathObjectRequest } from "../../src/model/model";
import { DeleteOfficeMathObjectWithoutNodePathRequest, GetOfficeMathObjectsWithoutNodePathRequest, GetOfficeMathObjectWithoutNodePathRequest, RenderMathObjectWithoutNodePathRequest } from "../../src/model/model";
import * as BaseTest from "../baseTest";

const testFolder = "DocumentElements/MathObjects";

describe("mathObjects", () => {
    describe("getOfficeMathObjects function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localBaseTestDataFolder + testFolder + "/MathObjects.docx";
            const remoteFileName = "TestGetMathObjects.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new GetOfficeMathObjectsRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.nodePath = null;

                    // Act
                    return wordsApi.getOfficeMathObjects(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.response.statusCode).to.equal(200);

                            expect(result1.body.officeMathObjects).to.exist.and.not.equal(null);
                        });
                });
        });
    });

    describe("getMathObject function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localBaseTestDataFolder + testFolder + "/MathObjects.docx";
            const remoteFileName = "TestGetMathObject.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new GetOfficeMathObjectRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.nodePath = null;
                    request.index = 0;

                    // Act
                    return wordsApi.getOfficeMathObject(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.response.statusCode).to.equal(200);

                            expect(result1.body.officeMathObject).to.exist.and.not.equal(null);
                        });
                });
        });
    });    

    describe("renderMathObject function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localBaseTestDataFolder + testFolder + "/MathObjects.docx";
            const remoteFileName = "TestGetMathObject.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new RenderMathObjectRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.format = "jpg";
                    request.nodePath = null;
                    request.index = 0;
                    
                    // Act
                    return wordsApi.renderMathObject(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.response.statusCode).to.equal(200);
                            expect(result1.body.byteLength).to.greaterThan(0);
                        });
                });
        });
    });

    describe("deleteOfficeMathObject function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localBaseTestDataFolder + testFolder + "/MathObjects.docx";
            const remoteFileName = "TestDeleteMathObject.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new DeleteOfficeMathObjectRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.nodePath = null;
                    request.index = 0;

                    // Act
                    return wordsApi.deleteOfficeMathObject(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.statusCode).to.equal(200);
                        });
                });
        });
    });

    describe("getOfficeMathObjectsWithoutNodePath function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localBaseTestDataFolder + testFolder + "/MathObjects.docx";
            const remoteFileName = "TestGetMathObjectsWithoutNodePath.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new GetOfficeMathObjectsWithoutNodePathRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;

                    // Act
                    return wordsApi.getOfficeMathObjectsWithoutNodePath(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.response.statusCode).to.equal(200);

                            expect(result1.body.officeMathObjects).to.exist.and.not.equal(null);
                        });
                });
        });
    });

    describe("getMathObjectWithoutNodePath function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localBaseTestDataFolder + testFolder + "/MathObjects.docx";
            const remoteFileName = "TestGetMathObjectWithoutNodePath.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new GetOfficeMathObjectWithoutNodePathRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.index = 0;

                    // Act
                    return wordsApi.getOfficeMathObjectWithoutNodePath(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.response.statusCode).to.equal(200);

                            expect(result1.body.officeMathObject).to.exist.and.not.equal(null);
                        });
                });
        });
    });    

    describe("renderMathObjectWithoutNodePath function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localBaseTestDataFolder + testFolder + "/MathObjects.docx";
            const remoteFileName = "TestGetMathObjectWithoutNodePath.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new RenderMathObjectWithoutNodePathRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.format = "jpg";
                    request.index = 0;
                    
                    // Act
                    return wordsApi.renderMathObjectWithoutNodePath(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.response.statusCode).to.equal(200);
                            expect(result1.body.byteLength).to.greaterThan(0);
                        });
                });
        });
    });

    describe("deleteOfficeMathObjectWithoutNodePath function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localBaseTestDataFolder + testFolder + "/MathObjects.docx";
            const remoteFileName = "TestDeleteMathObjectWithoutNodePath.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new DeleteOfficeMathObjectWithoutNodePathRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.index = 0;

                    // Act
                    return wordsApi.deleteOfficeMathObjectWithoutNodePath(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.statusCode).to.equal(200);
                        });
                });
        });
    });    
});

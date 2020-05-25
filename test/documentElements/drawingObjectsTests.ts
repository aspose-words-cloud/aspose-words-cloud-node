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
import * as fs from "fs";
import "mocha";

import { DeleteDrawingObjectRequest, GetDocumentDrawingObjectByIndexRequest, GetDocumentDrawingObjectImageDataRequest, GetDocumentDrawingObjectOleDataRequest, GetDocumentDrawingObjectsRequest, InsertDrawingObjectRequest, RenderDrawingObjectRequest, UpdateDrawingObjectRequest, DrawingObjectInsert, DrawingObjectUpdate } from "../../src/model/model";
import { DeleteDrawingObjectWithoutNodePathRequest, GetDocumentDrawingObjectByIndexWithoutNodePathRequest, GetDocumentDrawingObjectImageDataWithoutNodePathRequest, GetDocumentDrawingObjectOleDataWithoutNodePathRequest, GetDocumentDrawingObjectsWithoutNodePathRequest, InsertDrawingObjectWithoutNodePathRequest, RenderDrawingObjectWithoutNodePathRequest, UpdateDrawingObjectWithoutNodePathRequest } from "../../src/model/model";
import * as BaseTest from "../baseTest";

const testFolder = "DocumentElements/DrawingObjects";

describe("drawingObjects", () => {
    describe("getDocumentDrawingObjects function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localCommonTestDataFolder + "test_multi_pages.docx";
            const remoteFileName = "TestGetDrawingObjects.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new GetDocumentDrawingObjectsRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.nodePath = "sections/0";                    

                    // Act
                    return wordsApi.getDocumentDrawingObjects(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.response.statusCode).to.equal(200);

                            expect(result1.body.drawingObjects).to.exist.and.not.equal(null);
                        });
                });
        });
    });

    describe("getDocumentDrawingObjectByIndex function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localCommonTestDataFolder + "test_multi_pages.docx";
            const remoteFileName = "TestGetDrawingObject.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new GetDocumentDrawingObjectByIndexRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.nodePath = "sections/0";  
                    request.index = 0;

                    // Act
                    return wordsApi.getDocumentDrawingObjectByIndex(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.response.statusCode).to.equal(200);

                            expect(result1.body.drawingObject).to.exist.and.not.equal(null);
                        });
                });
        });
    });
    
    describe("renderDrawingObject function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localCommonTestDataFolder + "test_multi_pages.docx";
            const remoteFileName = "TestRenderDrawingObject.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new RenderDrawingObjectRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.nodePath = "sections/0";  
                    request.index = 0;
                    request.format = "png";

                    // Act
                    return wordsApi.renderDrawingObject(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.response.statusCode).to.equal(200);
                            expect(result1.body.byteLength).to.greaterThan(0);
                        });
                });
        });
    });

    describe("getDocumentDrawingObjectImageData function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localCommonTestDataFolder + "test_multi_pages.docx";
            const remoteFileName = "TestGetDocumentDrawingObjectImageData.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new GetDocumentDrawingObjectImageDataRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.nodePath = "sections/0";  
                    request.index = 0;
                    
                    // Act
                    return wordsApi.getDocumentDrawingObjectImageData(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.response.statusCode).to.equal(200);
                            expect(result1.body.byteLength).to.greaterThan(0);
                        });
                });
        });
    });

    describe("getDocumentDrawingObjectOleData function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localBaseTestDataFolder + testFolder + "/sample_EmbeddedOLE.docx";
            const remoteFileName = "TestGetDocumentDrawingObjectOleData.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new GetDocumentDrawingObjectOleDataRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.nodePath = "sections/0";  
                    request.index = 0;
                    
                    // Act
                    return wordsApi.getDocumentDrawingObjectOleData(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.response.statusCode).to.equal(200);
                            expect(result1.body.byteLength).to.greaterThan(0);
                        });
                });
        });
    });

    describe("insertDrawingObject function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localCommonTestDataFolder + "test_multi_pages.docx";
            const imagePath = BaseTest.localCommonTestDataFolder + "aspose-cloud.png";
            const remoteFileName = "TestPutDrawingObject.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new InsertDrawingObjectRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.nodePath = null;
                    request.drawingObject = new DrawingObjectInsert();
                    request.imageFile = fs.createReadStream(imagePath);
                   
                    // Act
                    return wordsApi.insertDrawingObject(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.response.statusCode).to.equal(200);

                            expect(result1.body.drawingObject).to.exist.and.not.equal(null);
                        });
                });
        });
    });

    describe("updateDrawingObject function", () => {

        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localCommonTestDataFolder + "test_multi_pages.docx";
            const imagePath = BaseTest.localCommonTestDataFolder + "aspose-cloud.png";
            const remoteFileName = "TestPostDrawingObject.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new UpdateDrawingObjectRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.nodePath = "sections/0";  
                    request.index = 0;
                    request.drawingObject = new DrawingObjectInsert();
                    request.imageFile = fs.createReadStream(imagePath);
                    
                    // Act
                    return wordsApi.updateDrawingObject(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.response.statusCode).to.equal(200);

                            expect(result1.body.drawingObject).to.exist.and.not.equal(null);
                        });
                });
        });
    });

    describe("deleteDrawingObject function", () => {

        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localCommonTestDataFolder + "test_multi_pages.docx";
            const remoteFileName = "TestDeleteDrawingObject.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new DeleteDrawingObjectRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.nodePath = "sections/0";  
                    request.index = 0;

                    // Act
                    return wordsApi.deleteDrawingObject(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.statusCode).to.equal(200);
                        });
                });
        });
    });

    describe("getDocumentDrawingObjectsWithoutNodePath function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localCommonTestDataFolder + "test_multi_pages.docx";
            const remoteFileName = "TestGetDrawingObjectsWithoutNodePath.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new GetDocumentDrawingObjectsWithoutNodePathRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;                  

                    // Act
                    return wordsApi.getDocumentDrawingObjectsWithoutNodePath(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.response.statusCode).to.equal(200);

                            expect(result1.body.drawingObjects).to.exist.and.not.equal(null);
                        });
                });
        });
    });

    describe("getDocumentDrawingObjectByIndexWithoutNodePath function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localCommonTestDataFolder + "test_multi_pages.docx";
            const remoteFileName = "TestGetDrawingObjectWithoutNodePath.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new GetDocumentDrawingObjectByIndexWithoutNodePathRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath; 
                    request.index = 0;

                    // Act
                    return wordsApi.getDocumentDrawingObjectByIndexWithoutNodePath(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.response.statusCode).to.equal(200);

                            expect(result1.body.drawingObject).to.exist.and.not.equal(null);
                        });
                });
        });
    });
    
    describe("renderDrawingObjectWithoutNodePath function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localCommonTestDataFolder + "test_multi_pages.docx";
            const remoteFileName = "TestRenderDrawingObjectWithoutNodePath.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new RenderDrawingObjectWithoutNodePathRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.index = 0;
                    request.format = "png";

                    // Act
                    return wordsApi.renderDrawingObjectWithoutNodePath(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.response.statusCode).to.equal(200);
                            expect(result1.body.byteLength).to.greaterThan(0);
                        });
                });
        });
    });

    describe("getDocumentDrawingObjectImageDataWithoutNodePath function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localCommonTestDataFolder + "test_multi_pages.docx";
            const remoteFileName = "TestGetDocumentDrawingObjectImageDataWithoutNodePath.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new GetDocumentDrawingObjectImageDataWithoutNodePathRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath; 
                    request.index = 0;
                    
                    // Act
                    return wordsApi.getDocumentDrawingObjectImageDataWithoutNodePath(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.response.statusCode).to.equal(200);
                            expect(result1.body.byteLength).to.greaterThan(0);
                        });
                });
        });
    });

    describe("getDocumentDrawingObjectOleDataWithoutNodePath function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localBaseTestDataFolder + testFolder + "/sample_EmbeddedOLE.docx";
            const remoteFileName = "TestGetDocumentDrawingObjectOleDataWithoutNodePath.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new GetDocumentDrawingObjectOleDataWithoutNodePathRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.index = 0;
                    
                    // Act
                    return wordsApi.getDocumentDrawingObjectOleDataWithoutNodePath(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.response.statusCode).to.equal(200);
                            expect(result1.body.byteLength).to.greaterThan(0);
                        });
                });
        });
    });

    describe("putDrawingObjectWithoutNodePath function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localCommonTestDataFolder + "test_multi_pages.docx";
            const imagePath = BaseTest.localCommonTestDataFolder + "aspose-cloud.png";
            const remoteFileName = "TestPutDrawingObjectWithoutNodePath.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new InsertDrawingObjectWithoutNodePathRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.drawingObject = new DrawingObjectInsert();
                    request.imageFile = fs.createReadStream(imagePath);
                   
                    // Act
                    return wordsApi.insertDrawingObjectWithoutNodePath(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.response.statusCode).to.equal(200);

                            expect(result1.body.drawingObject).to.exist.and.not.equal(null);
                        });
                });
        });
    });

    describe("postDrawingObject function", () => {

        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localCommonTestDataFolder + "test_multi_pages.docx";
            const imagePath = BaseTest.localCommonTestDataFolder + "aspose-cloud.png";
            const remoteFileName = "TestPostDrawingObjectWithoutNodePath.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new UpdateDrawingObjectWithoutNodePathRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.index = 0;
                    request.drawingObject = new DrawingObjectUpdate();
                    request.imageFile = fs.createReadStream(imagePath);
                    
                    // Act
                    return wordsApi.updateDrawingObjectWithoutNodePath(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.response.statusCode).to.equal(200);

                            expect(result1.body.drawingObject).to.exist.and.not.equal(null);
                        });
                });
        });
    });

    describe("deleteDrawingObjectWithoutNodePath function", () => {

        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localCommonTestDataFolder + "test_multi_pages.docx";
            const remoteFileName = "TestDeleteDrawingObjectWithoutNodePath.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new DeleteDrawingObjectWithoutNodePathRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.index = 0;

                    // Act
                    return wordsApi.deleteDrawingObjectWithoutNodePath(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.statusCode).to.equal(200);
                        });
                });
        });
    });
});

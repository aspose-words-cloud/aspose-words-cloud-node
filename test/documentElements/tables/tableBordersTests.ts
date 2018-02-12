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

import { Border, DeleteBorderRequest, DeleteBordersRequest, GetBorderRequest, GetBordersRequest, UpdateBorderRequest, XmlColor } from "../../../src/model/model";
import * as BaseTest from "../../baseTest";

const testFolder = "DocumentElements/Tables";

describe("tableBorders", () => {
    describe("getTableBorders function", () => {
        it("should return response with code 200", () => {

            const storageApi = BaseTest.initializeStorageApi();
            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localBaseTestDataFolder + testFolder + "/TablesGet.docx";
            const remoteFileName = "TestGetTableBorders.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return new Promise((resolve) => {
                storageApi.PutCreate(remotePath + "/" + remoteFileName, null, null, localPath, (responseMessage) => {
                    expect(responseMessage.status).to.equal("OK");
                    resolve();
                });
            })
                .then(() => {
                    const request = new GetBordersRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.nodePath = "tables/1/rows/0/cells/0/";

                    // Act
                    return wordsApi.getBorders(request)
                        .then((result) => {
                            // Assert
                            expect(result.body.code).to.equal(200);
                            expect(result.response.statusCode).to.equal(200);

                            expect(result.body.borders).to.exist.and.not.equal(null);
                        });
                });
        });
    });

    describe("getTableBorder function", () => {
        it("should return response with code 200", () => {

            const storageApi = BaseTest.initializeStorageApi();
            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localBaseTestDataFolder + testFolder + "/TablesGet.docx";
            const remoteFileName = "TestGetTableBorder.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return new Promise((resolve) => {
                storageApi.PutCreate(remotePath + "/" + remoteFileName, null, null, localPath, (responseMessage) => {
                    expect(responseMessage.status).to.equal("OK");
                    resolve();
                });
            })
                .then(() => {
                    const request = new GetBorderRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.nodePath = "tables/1/rows/0/cells/0/";
                    request.index = 0;

                    // Act
                    return wordsApi.getBorder(request)
                        .then((result) => {
                            // Assert
                            expect(result.body.code).to.equal(200);
                            expect(result.response.statusCode).to.equal(200);

                            expect(result.body.border).to.exist.and.not.equal(null);
                        });
                });
        });
    });

    describe("deleteBorders function", () => {
        it("should return response with code 200", () => {

            const storageApi = BaseTest.initializeStorageApi();
            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localBaseTestDataFolder + testFolder + "/TablesGet.docx";
            const remoteFileName = "TestDeleteTableBorders.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return new Promise((resolve) => {
                storageApi.PutCreate(remotePath + "/" + remoteFileName, null, null, localPath, (responseMessage) => {
                    expect(responseMessage.status).to.equal("OK");
                    resolve();
                });
            })
                .then(() => {
                    const request = new DeleteBordersRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.nodePath = "sections/0/tables/2/rows/0";

                    // Act
                    return wordsApi.deleteBorders(request)
                        .then((result) => {
                            // Assert
                            expect(result.body.code).to.equal(200);
                            expect(result.response.statusCode).to.equal(200);

                            expect(result.body.borders).to.exist.and.not.equal(null);
                        });
                });
        });
    });

    describe("deleteBorder function", () => {
        it("should return response with code 200", () => {

            const storageApi = BaseTest.initializeStorageApi();
            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localBaseTestDataFolder + testFolder + "/TablesGet.docx";
            const remoteFileName = "TestDeleteTableBorder.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return new Promise((resolve) => {
                storageApi.PutCreate(remotePath + "/" + remoteFileName, null, null, localPath, (responseMessage) => {
                    expect(responseMessage.status).to.equal("OK");
                    resolve();
                });
            })
                .then(() => {
                    const request = new DeleteBorderRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.nodePath = "sections/0/tables/2/rows/0";
                    request.index = 0;

                    // Act
                    return wordsApi.deleteBorder(request)
                        .then((result) => {
                            // Assert
                            expect(result.body.code).to.equal(200);
                            expect(result.response.statusCode).to.equal(200);

                            expect(result.body.border).to.exist.and.not.equal(null);
                        });
                });
        });
    });

    describe("updateBorder function", () => {
        it("should return response with code 200", () => {

            const storageApi = BaseTest.initializeStorageApi();
            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localBaseTestDataFolder + testFolder + "/TablesGet.docx";
            const remoteFileName = "TestUpdateBorder.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return new Promise((resolve) => {
                storageApi.PutCreate(remotePath + "/" + remoteFileName, null, null, localPath, (responseMessage) => {
                    expect(responseMessage.status).to.equal("OK");
                    resolve();
                });
            })
                .then(() => {
                    const request = new UpdateBorderRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.nodePath = "sections/0/tables/2/rows/0";
                    request.index = 0;
                    request.borderProperties = new Border({
                        borderType: Border.BorderTypeEnum.Left,
                        color: new XmlColor({ alpha: 2 }),
                        distanceFromText: 6,
                        lineStyle: Border.LineStyleEnum.DashDotStroker,
                        lineWidth: 2,
                        shadow: true,
                    });

                    // Act
                    return wordsApi.updateBorder(request)
                        .then((result) => {
                            // Assert
                            expect(result.body.code).to.equal(200);
                            expect(result.response.statusCode).to.equal(200);

                            expect(result.body.border).to.exist.and.not.equal(null);
                        });
                });
        });
    });
});

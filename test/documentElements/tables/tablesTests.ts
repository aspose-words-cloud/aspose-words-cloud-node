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

import { DeleteTableRequest, GetTableRequest, GetTablesRequest, InsertTableRequest, RenderTableRequest, TableInsert } from "../asposewordscloud";
import { DeleteTableWithoutNodePathRequest, GetTablesWithoutNodePathRequest, GetTableWithoutNodePathRequest, InsertTableWithoutNodePathRequest, RenderTableWithoutNodePathRequest } from "../asposewordscloud";
import * as BaseTest from "../../baseTest";

const testFolder = "DocumentElements/Tables";

describe("tables", () => {
    describe("getTables function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localBaseTestDataFolder + testFolder + "/TablesGet.docx";
            const remoteFileName = "TestGetTables.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new GetTablesRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.nodePath = null;

                    // Act
                    return wordsApi.getTables(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.response.statusCode).to.equal(200);

                            expect(result1.body.tables).to.exist.and.not.equal(null);
                        });
                });
        });
    });

    describe("getTable function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localBaseTestDataFolder + testFolder + "/TablesGet.docx";
            const remoteFileName = "TestGetTable.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new GetTableRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.nodePath = null;
                    request.index = 0;

                    // Act
                    return wordsApi.getTable(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.response.statusCode).to.equal(200);

                            expect(result1.body.table).to.exist.and.not.equal(null);
                        });
                });
        });
    });

    describe("insertTable function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localBaseTestDataFolder + testFolder + "/TablesGet.docx";
            const remoteFileName = "TestInsertTable.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new InsertTableRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.nodePath = null;
                    request.table = new TableInsert ({ columnsCount: 5, rowsCount: 4 });

                    // Act
                    return wordsApi.insertTable(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.response.statusCode).to.equal(200);

                            expect(result1.body.table).to.exist.and.not.equal(null);
                        });
                });
        });
    });
   
    describe("deleteTable function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localBaseTestDataFolder + testFolder + "/TablesGet.docx";
            const remoteFileName = "TestDeleteTable.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new DeleteTableRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.nodePath = null;
                    request.index = 0;

                    // Act
                    return wordsApi.deleteTable(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.statusCode).to.equal(200);
                        });
                });
        });
    });

    describe("renderTable function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localBaseTestDataFolder + testFolder + "/TablesGet.docx";
            const remoteFileName = "TestRenderTable.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new RenderTableRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.nodePath = null;
                    request.index = 0;
                    request.format = "png";

                    // Act
                    return wordsApi.renderTable(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.response.statusCode).to.equal(200);
                            expect(result1.body.byteLength).to.greaterThan(0);
                        });
                });
        });
    });

    describe("getTablesWithoutNodePath function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localBaseTestDataFolder + testFolder + "/TablesGet.docx";
            const remoteFileName = "TestGetTablesWithoutNodePath.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new GetTablesWithoutNodePathRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;

                    // Act
                    return wordsApi.getTablesWithoutNodePath(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.response.statusCode).to.equal(200);

                            expect(result1.body.tables).to.exist.and.not.equal(null);
                        });
                });
        });
    });

    describe("getTableWithoutNodePath function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localBaseTestDataFolder + testFolder + "/TablesGet.docx";
            const remoteFileName = "TestGetTableWithoutNodePath.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new GetTableWithoutNodePathRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.index = 0;

                    // Act
                    return wordsApi.getTableWithoutNodePath(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.response.statusCode).to.equal(200);

                            expect(result1.body.table).to.exist.and.not.equal(null);
                        });
                });
        });
    });

    describe("insertTableWithoutNodePath function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localBaseTestDataFolder + testFolder + "/TablesGet.docx";
            const remoteFileName = "TestInsertTableWithoutNodePath.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new InsertTableWithoutNodePathRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.table = new TableInsert ({ columnsCount: 5, rowsCount: 4 });

                    // Act
                    return wordsApi.insertTableWithoutNodePath(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.response.statusCode).to.equal(200);

                            expect(result1.body.table).to.exist.and.not.equal(null);
                        });
                });
        });
    });
   
    describe("deleteTableWithoutNodePath function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localBaseTestDataFolder + testFolder + "/TablesGet.docx";
            const remoteFileName = "TestDeleteTableWithoutNodePath.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new DeleteTableWithoutNodePathRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.index = 0;

                    // Act
                    return wordsApi.deleteTableWithoutNodePath(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.statusCode).to.equal(200);
                        });
                });
        });
    });

    describe("renderTableWithoutNodePath function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localBaseTestDataFolder + testFolder + "/TablesGet.docx";
            const remoteFileName = "TestRenderTableWithoutNodePath.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new RenderTableWithoutNodePathRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.index = 0;
                    request.format = "png";

                    // Act
                    return wordsApi.renderTableWithoutNodePath(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.response.statusCode).to.equal(200);
                            expect(result1.body.byteLength).to.greaterThan(0);
                        });
                });
        });
    });
});

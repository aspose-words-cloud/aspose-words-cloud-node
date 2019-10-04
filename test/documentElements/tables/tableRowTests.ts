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

import { DeleteTableRowRequest, GetTableRowFormatRequest, GetTableRowRequest, InsertTableRowRequest, TableRowFormat, TableRowInsert, UpdateTableRowFormatRequest } from "../asposewordscloud";
import * as BaseTest from "../../baseTest";

const testFolder = "DocumentElements/Tables";

describe("tableRow", () => {
    describe("getTableRow function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localBaseTestDataFolder + testFolder + "/TablesGet.docx";
            const remoteFileName = "TestGetTableRow.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new GetTableRowRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.index = 0;
                    request.tablePath = "sections/0/tables/2";

                    // Act
                    return wordsApi.getTableRow(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.response.statusCode).to.equal(200);

                            expect(result1.body.row).to.exist.and.not.equal(null);
                        });
                });
        });
    });

    describe("insertTableRow function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localBaseTestDataFolder + testFolder + "/TablesGet.docx";
            const remoteFileName = "TestInsertTableRow.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new InsertTableRowRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.tablePath = "sections/0/tables/2";
                    request.row = new TableRowInsert({ columnsCount: 5 });

                    // Act
                    return wordsApi.insertTableRow(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.response.statusCode).to.equal(200);

                            expect(result1.body.row).to.exist.and.not.equal(null);
                        });
                });
        });
    });

    describe("deleteTableRow function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localBaseTestDataFolder + testFolder + "/TablesGet.docx";
            const remoteFileName = "TestDeleteTableRow.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new DeleteTableRowRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.tablePath = "sections/0/tables/2";
                    request.index = 0;

                    // Act
                    return wordsApi.deleteTableRow(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.statusCode).to.equal(200);
                        });
                });
        });
    });

    describe("getTableRowFormat function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localBaseTestDataFolder + testFolder + "/TablesGet.docx";
            const remoteFileName = "TestGetTableRowFormat.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new GetTableRowFormatRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.index = 0;
                    request.tablePath = "sections/0/tables/2";

                    // Act
                    return wordsApi.getTableRowFormat(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.response.statusCode).to.equal(200);

                            expect(result1.body.rowFormat).to.exist.and.not.equal(null);
                        });
                });
        });
    });

    describe("updateTableRowFormat function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localBaseTestDataFolder + testFolder + "/TablesGet.docx";
            const remoteFileName = "TestUpdateTableRowFormat.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new UpdateTableRowFormatRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.index = 0;
                    request.tablePath = "sections/0/tables/2";
                    request.format = new TableRowFormat({
                        allowBreakAcrossPages: true, 
                        headingFormat: true, 
                        height: 10, 
                        heightRule: TableRowFormat.HeightRuleEnum.Auto,
                    });

                    // Act
                    return wordsApi.updateTableRowFormat(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.response.statusCode).to.equal(200);

                            expect(result1.body.rowFormat).to.exist.and.not.equal(null);
                        });
                });
        });
    });
});

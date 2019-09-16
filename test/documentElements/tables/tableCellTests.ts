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

import { DeleteTableCellRequest, GetTableCellFormatRequest, GetTableCellRequest, InsertTableCellRequest, TableCellFormat, TableCellInsert, UpdateTableCellFormatRequest } from "../../../src/model/model";
import * as BaseTest from "../../baseTest";

const testFolder = "DocumentElements/Tables";

describe("tableCell", () => {
    describe("getTableCell function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localBaseTestDataFolder + testFolder + "/TablesGet.docx";
            const remoteFileName = "TestGetTableCell.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new GetTableCellRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.index = 0;
                    request.tableRowPath = "sections/0/tables/2/rows/0";

                    // Act
                    return wordsApi.getTableCell(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.response.statusCode).to.equal(200);

                            expect(result1.body.cell).to.exist.and.not.equal(null);
                        });
                });
        });
    });

    describe("insertTableCell function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localBaseTestDataFolder + testFolder + "/TablesGet.docx";
            const remoteFileName = "TestInsertTableCell.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new InsertTableCellRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.tableRowPath = "sections/0/tables/2/rows/0";
                    request.cell = new TableCellInsert();

                    // Act
                    return wordsApi.insertTableCell(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.response.statusCode).to.equal(200);

                            expect(result1.body.cell).to.exist.and.not.equal(null);
                        });
                });
        });
    });

    describe("deleteTableCell function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localBaseTestDataFolder + testFolder + "/TablesGet.docx";
            const remoteFileName = "TestDeleteTableCell.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new DeleteTableCellRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.tableRowPath = "sections/0/tables/2/rows/0";
                    request.index = 0;

                    // Act
                    return wordsApi.deleteTableCell(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.statusCode).to.equal(200);
                        });
                });
        });
    });

    describe("getTableCellFormat function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localBaseTestDataFolder + testFolder + "/TablesGet.docx";
            const remoteFileName = "TestGetTableCellFormat.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new GetTableCellFormatRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.index = 0;
                    request.tableRowPath = "sections/0/tables/2/rows/0";

                    // Act
                    return wordsApi.getTableCellFormat(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.response.statusCode).to.equal(200);

                            expect(result1.body.cellFormat).to.exist.and.not.equal(null);
                        });
                });
        });
    });

    describe("updateTableCellFormat function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localBaseTestDataFolder + testFolder + "/TablesGet.docx";
            const remoteFileName = "TestUpdateTableCellFormat.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new UpdateTableCellFormatRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.index = 0;
                    request.tableRowPath = "sections/0/tables/2/rows/0";
                    request.format = new TableCellFormat({                        
                        bottomPadding: 5, 
                        fitText: true,
                        horizontalMerge: TableCellFormat.HorizontalMergeEnum.First,
                        wrapText: true,
                    });

                    // Act
                    return wordsApi.updateTableCellFormat(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.response.statusCode).to.equal(200);

                            expect(result1.body.cellFormat).to.exist.and.not.equal(null);
                        });
                });
        });
    });
});

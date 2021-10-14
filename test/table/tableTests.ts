/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="tableTests.ts">
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

// Example of how to work wtih table.
describe("table", () => {
    expect(fs);
    const remoteDataFolder = BaseTest.remoteBaseTestDataFolder + "/DocumentElements/Tables";
    const localFile = "DocumentElements/Tables/TablesGet.docx";

    // Test for getting tables.
    describe("getTables test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestGetTables.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.GetTablesRequest({
                    name: remoteFileName,
                    nodePath: "",
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.getTables(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.tables).to.exist;
                    expect(resultApi.body.tables.tableLinkList).to.exist;
                    expect(resultApi.body.tables.tableLinkList).to.have.lengthOf(5);
                    expect(resultApi.body.tables.tableLinkList[0].nodeId).to.equal("0.0.1");
                });

            });

       });
    });

    // Test for getting tables online.
    describe("getTablesOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const requestDocument = fs.createReadStream(BaseTest.localBaseTestDataFolder + localFile);
            const request = new model.GetTablesOnlineRequest({
                document: requestDocument,
                nodePath: ""
            });

            // Act
            return wordsApi.getTablesOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });

    // Test for getting tables without node path.
    describe("getTablesWithoutNodePath test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestGetTablesWithoutNodePath.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.GetTablesRequest({
                    name: remoteFileName,
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.getTables(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.tables).to.exist;
                    expect(resultApi.body.tables.tableLinkList).to.exist;
                    expect(resultApi.body.tables.tableLinkList).to.have.lengthOf(5);
                    expect(resultApi.body.tables.tableLinkList[0].nodeId).to.equal("0.0.1");
                });

            });

       });
    });

    // Test for getting table.
    describe("getTable test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestGetTable.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.GetTableRequest({
                    name: remoteFileName,
                    index: 1,
                    nodePath: "",
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.getTable(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.table).to.exist;
                    expect(resultApi.body.table.tableRowList).to.exist;
                    expect(resultApi.body.table.tableRowList).to.have.lengthOf(1);
                    expect(resultApi.body.table.tableRowList[0].tableCellList).to.exist;
                    expect(resultApi.body.table.tableRowList[0].tableCellList).to.have.lengthOf(2);
                });

            });

       });
    });

    // Test for getting table online.
    describe("getTableOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const requestDocument = fs.createReadStream(BaseTest.localBaseTestDataFolder + localFile);
            const request = new model.GetTableOnlineRequest({
                document: requestDocument,
                index: 1,
                nodePath: ""
            });

            // Act
            return wordsApi.getTableOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });

    // Test for getting table without node path.
    describe("getTableWithoutNodePath test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestGetTableWithoutNodePath.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.GetTableRequest({
                    name: remoteFileName,
                    index: 1,
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.getTable(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.table).to.exist;
                    expect(resultApi.body.table.tableRowList).to.exist;
                    expect(resultApi.body.table.tableRowList).to.have.lengthOf(1);
                    expect(resultApi.body.table.tableRowList[0].tableCellList).to.exist;
                    expect(resultApi.body.table.tableRowList[0].tableCellList).to.have.lengthOf(2);
                });

            });

       });
    });

    // Test for deleting table.
    describe("deleteTable test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestDeleteTable.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.DeleteTableRequest({
                    name: remoteFileName,
                    index: 1,
                    nodePath: "",
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.deleteTable(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.statusCode).to.equal(200);
                });

            });

       });
    });

    // Test for deleting table online.
    describe("deleteTableOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const requestDocument = fs.createReadStream(BaseTest.localBaseTestDataFolder + localFile);
            const request = new model.DeleteTableOnlineRequest({
                document: requestDocument,
                index: 1,
                nodePath: ""
            });

            // Act
            return wordsApi.deleteTableOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });

    // Test for deleting table without node path.
    describe("deleteTableWithoutNodePath test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestDeleteTableWithoutNodePath.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.DeleteTableRequest({
                    name: remoteFileName,
                    index: 1,
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.deleteTable(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.statusCode).to.equal(200);
                });

            });

       });
    });

    // Test for adding table.
    describe("insertTable test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestInsertTable.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const requestTable = new model.TableInsert({
                    columnsCount: 5,
                    rowsCount: 4
                })
                const request = new model.InsertTableRequest({
                    name: remoteFileName,
                    table: requestTable,
                    nodePath: "",
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.insertTable(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.table).to.exist;
                    expect(resultApi.body.table.tableRowList).to.exist;
                    expect(resultApi.body.table.tableRowList).to.have.lengthOf(4);
                    expect(resultApi.body.table.tableRowList[0].tableCellList).to.exist;
                    expect(resultApi.body.table.tableRowList[0].tableCellList).to.have.lengthOf(5);
                });

            });

       });
    });

    // Test for adding table online.
    describe("insertTableOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const requestDocument = fs.createReadStream(BaseTest.localBaseTestDataFolder + localFile);
            const requestTable = new model.TableInsert({
                columnsCount: 5,
                rowsCount: 4
            })
            const request = new model.InsertTableOnlineRequest({
                document: requestDocument,
                table: requestTable,
                nodePath: ""
            });

            // Act
            return wordsApi.insertTableOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });

    // Test for adding table without node path.
    describe("insertTableWithoutNodePath test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestInsertTableWithoutNodePath.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const requestTable = new model.TableInsert({
                    columnsCount: 5,
                    rowsCount: 4
                })
                const request = new model.InsertTableRequest({
                    name: remoteFileName,
                    table: requestTable,
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.insertTable(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.table).to.exist;
                    expect(resultApi.body.table.tableRowList).to.exist;
                    expect(resultApi.body.table.tableRowList).to.have.lengthOf(4);
                    expect(resultApi.body.table.tableRowList[0].tableCellList).to.exist;
                    expect(resultApi.body.table.tableRowList[0].tableCellList).to.have.lengthOf(5);
                });

            });

       });
    });

    // Test for getting document properties.
    describe("getTableProperties test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestGetTableProperties.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.GetTablePropertiesRequest({
                    name: remoteFileName,
                    index: 1,
                    nodePath: "",
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.getTableProperties(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.properties).to.exist;
                    expect(resultApi.body.properties.styleName).to.equal("Table Grid");
                });

            });

       });
    });

    // Test for getting document properties online.
    describe("getTablePropertiesOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const requestDocument = fs.createReadStream(BaseTest.localBaseTestDataFolder + localFile);
            const request = new model.GetTablePropertiesOnlineRequest({
                document: requestDocument,
                index: 1,
                nodePath: ""
            });

            // Act
            return wordsApi.getTablePropertiesOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });

    // Test for getting document properties without node path.
    describe("getTablePropertiesWithoutNodePath test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestGetTablePropertiesWithoutNodePath.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.GetTablePropertiesRequest({
                    name: remoteFileName,
                    index: 1,
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.getTableProperties(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.properties).to.exist;
                    expect(resultApi.body.properties.styleName).to.equal("Table Grid");
                });

            });

       });
    });

    // Test for updating table properties.
    describe("updateTableProperties test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestUpdateTableProperties.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const requestProperties = new model.TableProperties({
                    alignment: model.TableProperties.AlignmentEnum.Right,
                    allowAutoFit: false,
                    bidi: true,
                    bottomPadding: 1,
                    cellSpacing: 2.0,
                    styleOptions: model.TableProperties.StyleOptionsEnum.ColumnBands
                })
                const request = new model.UpdateTablePropertiesRequest({
                    name: remoteFileName,
                    properties: requestProperties,
                    index: 1,
                    nodePath: "",
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.updateTableProperties(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.properties).to.exist;
                    expect(resultApi.body.properties.allowAutoFit).to.false;
                    expect(resultApi.body.properties.bidi).to.true;
                    expect(resultApi.body.properties.bottomPadding).to.equal(1.0);
                    expect(resultApi.body.properties.cellSpacing).to.equal(2.0);
                });

            });

       });
    });

    // Test for updating table properties online.
    describe("updateTablePropertiesOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const requestDocument = fs.createReadStream(BaseTest.localBaseTestDataFolder + localFile);
            const requestProperties = new model.TableProperties({
                alignment: model.TableProperties.AlignmentEnum.Right,
                allowAutoFit: false,
                bidi: true,
                bottomPadding: 1,
                cellSpacing: 2,
                styleOptions: model.TableProperties.StyleOptionsEnum.ColumnBands
            })
            const request = new model.UpdateTablePropertiesOnlineRequest({
                document: requestDocument,
                properties: requestProperties,
                index: 1,
                nodePath: ""
            });

            // Act
            return wordsApi.updateTablePropertiesOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });

    // Test for updating table properties without node path.
    describe("updateTablePropertiesWithoutNodePath test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestUpdateTablePropertiesWithoutNodePath.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const requestProperties = new model.TableProperties({
                    alignment: model.TableProperties.AlignmentEnum.Right,
                    allowAutoFit: false,
                    bidi: true,
                    bottomPadding: 1.0,
                    cellSpacing: 2.0,
                    styleOptions: model.TableProperties.StyleOptionsEnum.ColumnBands
                })
                const request = new model.UpdateTablePropertiesRequest({
                    name: remoteFileName,
                    properties: requestProperties,
                    index: 1,
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.updateTableProperties(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.properties).to.exist;
                    expect(resultApi.body.properties.allowAutoFit).to.false;
                    expect(resultApi.body.properties.bidi).to.true;
                    expect(resultApi.body.properties.bottomPadding).to.equal(1.0);
                    expect(resultApi.body.properties.cellSpacing).to.equal(2.0);
                });

            });

       });
    });

    // Test for getting table row.
    describe("getTableRow test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestGetTableRow.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.GetTableRowRequest({
                    name: remoteFileName,
                    tablePath: "tables/1",
                    index: 0,
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.getTableRow(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.row).to.exist;
                    expect(resultApi.body.row.tableCellList).to.exist;
                    expect(resultApi.body.row.tableCellList).to.have.lengthOf(2);
                });

            });

       });
    });

    // Test for getting table row online.
    describe("getTableRowOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const requestDocument = fs.createReadStream(BaseTest.localBaseTestDataFolder + localFile);
            const request = new model.GetTableRowOnlineRequest({
                document: requestDocument,
                tablePath: "tables/1",
                index: 0
            });

            // Act
            return wordsApi.getTableRowOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });

    // Test for deleting table row.
    describe("deleteTableRow test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestDeleteTableRow.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.DeleteTableRowRequest({
                    name: remoteFileName,
                    tablePath: "tables/1",
                    index: 0,
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.deleteTableRow(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.statusCode).to.equal(200);
                });

            });

       });
    });

    // Test for deleting table row online.
    describe("deleteTableRowOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const requestDocument = fs.createReadStream(BaseTest.localBaseTestDataFolder + localFile);
            const request = new model.DeleteTableRowOnlineRequest({
                document: requestDocument,
                tablePath: "tables/1",
                index: 0
            });

            // Act
            return wordsApi.deleteTableRowOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });

    // Test for adding row.
    describe("insertTableRow test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestInsertTableRow.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const requestRow = new model.TableRowInsert({
                    columnsCount: 5
                })
                const request = new model.InsertTableRowRequest({
                    name: remoteFileName,
                    row: requestRow,
                    tablePath: "sections/0/tables/2",
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.insertTableRow(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.row).to.exist;
                    expect(resultApi.body.row.tableCellList).to.exist;
                    expect(resultApi.body.row.tableCellList).to.have.lengthOf(5);
                });

            });

       });
    });

    // Test for adding row online.
    describe("insertTableRowOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const requestDocument = fs.createReadStream(BaseTest.localBaseTestDataFolder + localFile);
            const requestRow = new model.TableRowInsert({
                columnsCount: 5
            })
            const request = new model.InsertTableRowOnlineRequest({
                document: requestDocument,
                row: requestRow,
                tablePath: "sections/0/tables/2"
            });

            // Act
            return wordsApi.insertTableRowOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });

    // Test for getting row format.
    describe("getTableRowFormat test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestGetTableRowFormat.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.GetTableRowFormatRequest({
                    name: remoteFileName,
                    tablePath: "sections/0/tables/2",
                    index: 0,
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.getTableRowFormat(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.rowFormat).to.exist;
                    expect(resultApi.body.rowFormat.allowBreakAcrossPages).to.true;
                });

            });

       });
    });

    // Test for getting row format online.
    describe("getTableRowFormatOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const requestDocument = fs.createReadStream(BaseTest.localBaseTestDataFolder + localFile);
            const request = new model.GetTableRowFormatOnlineRequest({
                document: requestDocument,
                tablePath: "sections/0/tables/2",
                index: 0
            });

            // Act
            return wordsApi.getTableRowFormatOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });

    // Test updating row format.
    describe("updateTableRowFormat test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestUpdateTableRowFormat.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const requestFormat = new model.TableRowFormat({
                    allowBreakAcrossPages: true,
                    headingFormat: true,
                    height: 10.0,
                    heightRule: model.TableRowFormat.HeightRuleEnum.Exactly
                })
                const request = new model.UpdateTableRowFormatRequest({
                    name: remoteFileName,
                    format: requestFormat,
                    tablePath: "sections/0/tables/2",
                    index: 0,
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.updateTableRowFormat(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.rowFormat).to.exist;
                    expect(resultApi.body.rowFormat.allowBreakAcrossPages).to.true;
                    expect(resultApi.body.rowFormat.headingFormat).to.true;
                    expect(resultApi.body.rowFormat.height).to.equal(10.0);
                });

            });

       });
    });

    // Test updating row format online.
    describe("updateTableRowFormatOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const requestDocument = fs.createReadStream(BaseTest.localBaseTestDataFolder + localFile);
            const requestFormat = new model.TableRowFormat({
                allowBreakAcrossPages: true,
                headingFormat: true,
                height: 10,
                heightRule: model.TableRowFormat.HeightRuleEnum.Auto
            })
            const request = new model.UpdateTableRowFormatOnlineRequest({
                document: requestDocument,
                format: requestFormat,
                tablePath: "sections/0/tables/2",
                index: 0
            });

            // Act
            return wordsApi.updateTableRowFormatOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });

    // Test for getting table cell.
    describe("getTableCell test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestGetTableCell.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.GetTableCellRequest({
                    name: remoteFileName,
                    tableRowPath: "sections/0/tables/2/rows/0",
                    index: 0,
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.getTableCell(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.cell).to.exist;
                    expect(resultApi.body.cell.nodeId).to.equal("0.0.5.0.0");
                });

            });

       });
    });

    // Test for getting table cell online.
    describe("getTableCellOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const requestDocument = fs.createReadStream(BaseTest.localBaseTestDataFolder + localFile);
            const request = new model.GetTableCellOnlineRequest({
                document: requestDocument,
                tableRowPath: "sections/0/tables/2/rows/0",
                index: 0
            });

            // Act
            return wordsApi.getTableCellOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });

    // Test for deleting cell.
    describe("deleteTableCell test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestDeleteTableCell.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.DeleteTableCellRequest({
                    name: remoteFileName,
                    tableRowPath: "sections/0/tables/2/rows/0",
                    index: 0,
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.deleteTableCell(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.statusCode).to.equal(200);
                });

            });

       });
    });

    // Test for deleting cell online.
    describe("deleteTableCellOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const requestDocument = fs.createReadStream(BaseTest.localBaseTestDataFolder + localFile);
            const request = new model.DeleteTableCellOnlineRequest({
                document: requestDocument,
                tableRowPath: "sections/0/tables/2/rows/0",
                index: 0
            });

            // Act
            return wordsApi.deleteTableCellOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });

    // Test for adding cell.
    describe("insertTableCell test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestInsertTableCell.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const requestCell = new model.TableCellInsert({
                })
                const request = new model.InsertTableCellRequest({
                    name: remoteFileName,
                    cell: requestCell,
                    tableRowPath: "sections/0/tables/2/rows/0",
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.insertTableCell(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.cell).to.exist;
                    expect(resultApi.body.cell.nodeId).to.equal("0.0.5.0.3");
                });

            });

       });
    });

    // Test for adding cell online.
    describe("insertTableCellOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const requestDocument = fs.createReadStream(BaseTest.localBaseTestDataFolder + localFile);
            const requestCell = new model.TableCellInsert({
            })
            const request = new model.InsertTableCellOnlineRequest({
                document: requestDocument,
                cell: requestCell,
                tableRowPath: "sections/0/tables/2/rows/0"
            });

            // Act
            return wordsApi.insertTableCellOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });

    // Test for getting cell format.
    describe("getTableCellFormat test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestGetTableCellFormat.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.GetTableCellFormatRequest({
                    name: remoteFileName,
                    tableRowPath: "sections/0/tables/2/rows/0",
                    index: 0,
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.getTableCellFormat(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.cellFormat).to.exist;
                    expect(resultApi.body.cellFormat.wrapText).to.true;
                });

            });

       });
    });

    // Test for getting cell format online.
    describe("getTableCellFormatOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const requestDocument = fs.createReadStream(BaseTest.localBaseTestDataFolder + localFile);
            const request = new model.GetTableCellFormatOnlineRequest({
                document: requestDocument,
                tableRowPath: "sections/0/tables/2/rows/0",
                index: 0
            });

            // Act
            return wordsApi.getTableCellFormatOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });

    // Test for updating cell format.
    describe("updateTableCellFormat test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestUpdateTableCellFormat.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const requestFormat = new model.TableCellFormat({
                    bottomPadding: 5.0,
                    fitText: true,
                    horizontalMerge: model.TableCellFormat.HorizontalMergeEnum.First,
                    wrapText: true
                })
                const request = new model.UpdateTableCellFormatRequest({
                    name: remoteFileName,
                    format: requestFormat,
                    tableRowPath: "sections/0/tables/2/rows/0",
                    index: 0,
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.updateTableCellFormat(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.cellFormat).to.exist;
                    expect(resultApi.body.cellFormat.bottomPadding).to.equal(5.0);
                    expect(resultApi.body.cellFormat.fitText).to.true;
                    expect(resultApi.body.cellFormat.wrapText).to.true;
                });

            });

       });
    });

    // Test for updating cell format online.
    describe("updateTableCellFormatOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const requestDocument = fs.createReadStream(BaseTest.localBaseTestDataFolder + localFile);
            const requestFormat = new model.TableCellFormat({
                bottomPadding: 5,
                fitText: true,
                horizontalMerge: model.TableCellFormat.HorizontalMergeEnum.First,
                wrapText: true
            })
            const request = new model.UpdateTableCellFormatOnlineRequest({
                document: requestDocument,
                format: requestFormat,
                tableRowPath: "sections/0/tables/2/rows/0",
                index: 0
            });

            // Act
            return wordsApi.updateTableCellFormatOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });

    // Test for table rendering.
    describe("renderTable test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestRenderTable.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.RenderTableRequest({
                    name: remoteFileName,
                    format: "png",
                    index: 0,
                    nodePath: "",
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.renderTable(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                });

            });

       });
    });

    // Test for table rendering.
    describe("renderTableOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const requestDocument = fs.createReadStream(BaseTest.localBaseTestDataFolder + localFile);
            const request = new model.RenderTableOnlineRequest({
                document: requestDocument,
                format: "png",
                index: 0,
                nodePath: ""
            });

            // Act
            return wordsApi.renderTableOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });

    // Test for table rendering without node path.
    describe("renderTableWithoutNodePath test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestRenderTableWithoutNodePath.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.RenderTableRequest({
                    name: remoteFileName,
                    format: "png",
                    index: 0,
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.renderTable(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                });

            });

       });
    });
});
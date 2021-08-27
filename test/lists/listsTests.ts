/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="listsTests.ts">
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

// Example of how to work with lists.
describe("lists", () => {
    expect(fs);
    const remoteDataFolder = BaseTest.remoteBaseTestDataFolder + "/DocumentElements/Lists";
    const localFile = "DocumentElements/Lists/ListsGet.doc";

    // Test for getting lists from document.
    describe("getLists test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestGetLists.doc";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.GetListsRequest({
                    name: remoteFileName,
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.getLists(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.lists).to.exist;
                    expect(resultApi.body.lists.listInfo).to.exist;
                    expect(resultApi.body.lists.listInfo).to.have.lengthOf(2);
                    expect(resultApi.body.lists.listInfo[0].listId).to.equal(1);
                });

            });

       });
    });

    // Test for getting lists from document online.
    describe("getListsOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            let requestDocument = fs.createReadStream(BaseTest.localBaseTestDataFolder + localFile);
            const request = new model.GetListsOnlineRequest({
                document: requestDocument
            });

            // Act
            return wordsApi.getListsOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });

    // Test for getting list from document.
    describe("getList test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestGetList.doc";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.GetListRequest({
                    name: remoteFileName,
                    listId: 1,
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.getList(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.list).to.exist;
                    expect(resultApi.body.list.listId).to.equal(1);
                });

            });

       });
    });

    // Test for getting list from document online.
    describe("getListOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            let requestDocument = fs.createReadStream(BaseTest.localBaseTestDataFolder + localFile);
            const request = new model.GetListOnlineRequest({
                document: requestDocument,
                listId: 1
            });

            // Act
            return wordsApi.getListOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });

    // Test for updating list from document.
    describe("updateList test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestUpdateList.doc";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                let requestListUpdate = new model.ListUpdate({
                    isRestartAtEachSection: true
                })
                const request = new model.UpdateListRequest({
                    name: remoteFileName,
                    listId: 1,
                    listUpdate: requestListUpdate,
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.updateList(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                });

            });

       });
    });

    // Test for updating list from document online.
    describe("updateListOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            let requestDocument = fs.createReadStream(BaseTest.localBaseTestDataFolder + localFile);
            let requestListUpdate = new model.ListUpdate({
                isRestartAtEachSection: true
            })
            const request = new model.UpdateListOnlineRequest({
                document: requestDocument,
                listId: 1,
                listUpdate: requestListUpdate
            });

            // Act
            return wordsApi.updateListOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
                expect(resultApi.body.model.list).to.exist;
                expect(resultApi.body.model.list.listId).to.equal(1);
                expect(resultApi.body.model.list.isRestartAtEachSection).to.true;
            });

       });
    });

    // Test for updating list level from document.
    describe("updateListLevel test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestUpdateListLevel.doc";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                let requestListUpdate = new model.ListLevelUpdate({
                    alignment: model.ListLevelUpdate.AlignmentEnum.Right
                })
                const request = new model.UpdateListLevelRequest({
                    name: remoteFileName,
                    listId: 1,
                    listLevel: 1,
                    listUpdate: requestListUpdate,
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.updateListLevel(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                });

            });

       });
    });

    // Test for updating list level from document online.
    describe("updateListLevelOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            let requestDocument = fs.createReadStream(BaseTest.localBaseTestDataFolder + localFile);
            let requestListUpdate = new model.ListLevelUpdate({
                alignment: model.ListLevelUpdate.AlignmentEnum.Right
            })
            const request = new model.UpdateListLevelOnlineRequest({
                document: requestDocument,
                listId: 1,
                listLevel: 1,
                listUpdate: requestListUpdate
            });

            // Act
            return wordsApi.updateListLevelOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
                expect(resultApi.body.model.list).to.exist;
                expect(resultApi.body.model.list.listLevels).to.exist;
                expect(resultApi.body.model.list.listLevels.listLevel).to.exist;
                expect(resultApi.body.model.list.listLevels.listLevel).to.have.lengthOf(9);

            });

       });
    });

    // Test for inserting list from document.
    describe("insertList test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestInsertList.doc";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                let requestListInsert = new model.ListInsert({
                    template: model.ListInsert.TemplateEnum.OutlineLegal
                })
                const request = new model.InsertListRequest({
                    name: remoteFileName,
                    listInsert: requestListInsert,
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.insertList(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.list).to.exist;
                    expect(resultApi.body.list.listId).to.equal(3);
                });

            });

       });
    });

    // Test for inserting list from document online.
    describe("insertListOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            let requestDocument = fs.createReadStream(BaseTest.localBaseTestDataFolder + localFile);
            let requestListInsert = new model.ListInsert({
                template: model.ListInsert.TemplateEnum.OutlineLegal
            })
            const request = new model.InsertListOnlineRequest({
                document: requestDocument,
                listInsert: requestListInsert
            });

            // Act
            return wordsApi.insertListOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });
});
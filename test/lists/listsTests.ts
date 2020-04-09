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

import { GetListsRequest, GetListRequest, UpdateListRequest, UpdateListLevelRequest, InsertListRequest, ListUpdate, ListLevelUpdate, ListInsert } from "../../src/model/model";
import * as BaseTest from "../baseTest";

const dataFolder = "Lists/";

describe("lists", () => {
    describe("getLists function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localBaseTestDataFolder + dataFolder + "ListsGet.doc";
            const remoteFileName = "TestGetLists.doc";
            const remotePath = BaseTest.remoteBaseTestDataFolder + dataFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new GetListsRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;

                    // Act
                    return wordsApi.getLists(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.response.statusCode).to.equal(200);
                        });
                });
        });
    });

    describe("getList function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localBaseTestDataFolder + dataFolder + "ListsGet.doc";
            const remoteFileName = "TestGetList.doc";
            const remotePath = BaseTest.remoteBaseTestDataFolder + dataFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new GetListRequest();
                    request.name = remoteFileName;
                    request.listId = 1;
                    request.folder = remotePath;

                    // Act
                    return wordsApi.getList(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.response.statusCode).to.equal(200);
                        });
                });
        });
    });  

    describe("updateList function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localBaseTestDataFolder + dataFolder + "ListsGet.doc";
            const remoteFileName = "TestUpdateList.doc";
            const remotePath = BaseTest.remoteBaseTestDataFolder + dataFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const data = new ListUpdate();
                    data.isRestartAtEachSection = true;
                    
                    const request = new UpdateListRequest();
                    request.name = remoteFileName;
                    request.listUpdate = data;
                    request.listId = 1;
                    request.folder = remotePath;

                    // Act
                    return wordsApi.updateList(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.response.statusCode).to.equal(200);
                        });
                });
        });
    }); 

    describe("updateListLevel function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localBaseTestDataFolder + dataFolder + "ListsGet.doc";
            const remoteFileName = "TestUpdateListLevel.doc";
            const remotePath = BaseTest.remoteBaseTestDataFolder + dataFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const data = new ListLevelUpdate();
                    data.alignment = ListLevelUpdate.AlignmentEnum.Right;
                    
                    const request = new UpdateListLevelRequest();
                    request.name = remoteFileName;
                    request.listUpdate = data;
                    request.listId = 1;
                    request.folder = remotePath;

                    // Act
                    return wordsApi.updateListLevel(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.response.statusCode).to.equal(200);
                        });
                });
        });
    });    
    
    describe("insertList function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localBaseTestDataFolder + dataFolder + "ListsGet.doc";
            const remoteFileName = "TestInsertList.doc";
            const remotePath = BaseTest.remoteBaseTestDataFolder + dataFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const data = new ListInsert();
                    data.template = ListInsert.TemplateEnum.OutlineLegal;
                    
                    const request = new InsertListRequest();
                    request.name = remoteFileName;
                    request.listInsert = data;
                    request.folder = remotePath;

                    // Act
                    return wordsApi.insertList(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.response.statusCode).to.equal(200);
                        });
                });
        });
    }); 
});

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

import { CopyFolderRequest, CreateFolderRequest, DeleteFolderRequest, GetFilesListRequest, MoveFolderRequest } from "../../src/model/model";
import * as BaseTest from "../baseTest";

const storageFolder = BaseTest.remoteBaseTestDataFolder + "Storage";

describe("Storage folder operations", () => {
    describe("Test for Create folder", () => {
        it("should return response with code 200", async () => {
            const wordsApi = BaseTest.initializeWordsApi();

            const request: CreateFolderRequest = {
                path: storageFolder + "/TestCreateFolder",
                storageName: undefined,
            };

            return wordsApi.createFolder(request)
                .then((result) => {
                    expect(result.statusCode).to.equal(200);
                });
        });
    });

    describe("Test for Delete folder", () => {
        it("should return response with code 200", async () => {
            const wordsApi = BaseTest.initializeWordsApi();

            const folderName = storageFolder + "/TestDeleteFolder";

            const request: CreateFolderRequest = {
                path: folderName,
                storageName: undefined,
            };

            return wordsApi.createFolder(request)
                .then((result) => {
                    expect(result.statusCode).to.equals(200);

                    const deleteRequset: DeleteFolderRequest = {
                        path: folderName,
                        storageName: undefined,
                        recursive: undefined,
                    };

                    return wordsApi.deleteFolder(deleteRequset)
                    .then((result1) => {
                        expect(result1.statusCode).to.equal(200);
                    });
                });
        });
    });

    describe("Test for get file list of folder", () => {
        it("should return response wwith code 200 and non empty list", async () => {
            const wordsApi = BaseTest.initializeWordsApi();

            const request: GetFilesListRequest = {
                path: storageFolder,
                storageName: undefined,
            };

            return wordsApi.getFilesList(request)
            .then((result) => {
                expect(result.response.statusCode).to.equal(200);
                expect(result.body.value.length).to.be.greaterThan(0);
            });
        });
    });

    describe("Test for copy folder", () => {
        it("should return response wwith code 200 and new folder exists", async () => {
            const wordsApi = BaseTest.initializeWordsApi();

            const src = storageFolder + "/TestCopyFolderSrc";
            const dest = storageFolder + "/TestCopyFolderDest";

            const request: CreateFolderRequest = {
                path: src,
                storageName: undefined,
            };

            return wordsApi.createFolder(request)
                .then((result) => {
                    expect(result.statusCode).to.equal(200);

                    const copyFolderRequest: CopyFolderRequest = {
                        srcPath: src,
                        destPath: dest,
                        srcStorageName: undefined,
                        destStorageName: undefined,
                    };

                    return wordsApi.copyFolder(copyFolderRequest)
                    .then((result1) => {
                        expect(result1.statusCode).to.equal(200);

                        const getFilesRequest: GetFilesListRequest = {
                            path: storageFolder,
                            storageName: undefined,
                        };
            
                        return wordsApi.getFilesList(getFilesRequest)
                        .then((result2) => {
                            expect(result2.response.statusCode).to.equal(200);
                            
                            expect(result2.body.value.some((file) => file.path === "/" + dest + "/")).to.be.true;
                        });
                    });
                });
        });
    });

    describe("Test for move folder", () => {
        it("should return response wwith code 200 and new folder exists, but old one doesn't", async () => {
            const wordsApi = BaseTest.initializeWordsApi();

            const src = storageFolder + "/TestMoveFolderSrc";
            const dest = storageFolder + "/TestMoveFolderDest";

            const request: CreateFolderRequest = {
                path: src,
                storageName: undefined,
            };

            return wordsApi.createFolder(request)
                .then((result) => {
                    expect(result.statusCode).to.equal(200);

                    const moveFolderRequest: MoveFolderRequest = {
                        srcPath: src,
                        destPath: dest,
                        srcStorageName: undefined,
                        destStorageName: undefined,
                    };

                    return wordsApi.moveFolder(moveFolderRequest)
                    .then((result1) => {
                        expect(result1.statusCode).to.equal(200);

                        const getFilesRequest: GetFilesListRequest = {
                            path: storageFolder,
                            storageName: undefined,
                        };
            
                        return wordsApi.getFilesList(getFilesRequest)
                        .then((result2) => {
                            expect(result2.response.statusCode).to.equal(200);
                            
                            expect(result2.body.value.some((file) => file.path === "/" + dest + "/")).to.be.true;
                            expect(result2.body.value.some((file) => file.path === "/" + src + "/")).to.be.false;
                        });
                    });
                });
        });
    });
});

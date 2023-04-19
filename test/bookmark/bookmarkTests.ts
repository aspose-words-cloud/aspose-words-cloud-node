/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="bookmarkTests.ts">
 *   Copyright (c) 2023 Aspose.Words for Cloud
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

// Example of how to get all bookmarks from document.
describe("bookmark", () => {
    expect(fs);
    const remoteDataFolder = BaseTest.remoteBaseTestDataFolder + "/DocumentElements/Bookmarks";
    const localFile = "Common/test_multi_pages.docx";
    const bookmarkName = "aspose";

    // Test for getting bookmarks from document.
    describe("getBookmarks test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestGetDocumentBookmarks.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.GetBookmarksRequest({
                    name: remoteFileName,
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.getBookmarks(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                });

            });

       });
    });

    // Test for getting bookmarks from document online.
    describe("getBookmarksOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const requestDocument = fs.createReadStream(BaseTest.localBaseTestDataFolder + localFile);
            const request = new model.GetBookmarksOnlineRequest({
                document: requestDocument
            });

            // Act
            return wordsApi.getBookmarksOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });

    // Test for getting bookmark by specified name.
    describe("getBookmarkByName test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestGetDocumentBookmarkByName.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.GetBookmarkByNameRequest({
                    name: remoteFileName,
                    bookmarkName: bookmarkName,
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.getBookmarkByName(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                });

            });

       });
    });

    // Test for getting bookmark by specified name online.
    describe("getBookmarkByNameOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const requestDocument = fs.createReadStream(BaseTest.localBaseTestDataFolder + localFile);
            const request = new model.GetBookmarkByNameOnlineRequest({
                document: requestDocument,
                bookmarkName: bookmarkName
            });

            // Act
            return wordsApi.getBookmarkByNameOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });

    // Test for updating existed bookmark.
    describe("updateBookmark test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestUpdateDocumentBookmark.docx";
            const bookmarkText = "This will be the text for Aspose";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const requestBookmarkData = new model.BookmarkData({
                    name: bookmarkName,
                    text: bookmarkText
                })
                const request = new model.UpdateBookmarkRequest({
                    name: remoteFileName,
                    bookmarkName: bookmarkName,
                    bookmarkData: requestBookmarkData,
                    folder: remoteDataFolder,
                    destFileName: BaseTest.remoteBaseTestOutFolder + "/" + remoteFileName
                });

                // Act
                return wordsApi.updateBookmark(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                });

            });

       });
    });

    // Test for updating existed bookmark online.
    describe("updateBookmarkOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestUpdateDocumentBookmark.docx";

            const requestDocument = fs.createReadStream(BaseTest.localBaseTestDataFolder + localFile);
            const requestBookmarkData = new model.BookmarkData({
                name: bookmarkName,
                text: "This will be the text for Aspose"
            })
            const request = new model.UpdateBookmarkOnlineRequest({
                document: requestDocument,
                bookmarkName: bookmarkName,
                bookmarkData: requestBookmarkData,
                destFileName: BaseTest.remoteBaseTestOutFolder + "/" + remoteFileName
            });

            // Act
            return wordsApi.updateBookmarkOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });

    // Test for deleting bookmark by specified name.
    describe("deleteBookmark test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestDeleteBookmark.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.DeleteBookmarkRequest({
                    name: remoteFileName,
                    bookmarkName: bookmarkName,
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.deleteBookmark(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.statusCode).to.equal(200);
                });

            });

       });
    });

    // Test for deleting bookmark by specified name online.
    describe("deleteBookmarkOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const requestDocument = fs.createReadStream(BaseTest.localBaseTestDataFolder + localFile);
            const request = new model.DeleteBookmarkOnlineRequest({
                document: requestDocument,
                bookmarkName: bookmarkName
            });

            // Act
            return wordsApi.deleteBookmarkOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });

    // Test for deleting all bookmarks from document.
    describe("deleteBookmarks test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestDeleteBookmarks.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.DeleteBookmarksRequest({
                    name: remoteFileName,
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.deleteBookmarks(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.statusCode).to.equal(200);
                });

            });

       });
    });

    // Test for deleting all bookmarks from document online.
    describe("deleteBookmarksOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const requestDocument = fs.createReadStream(BaseTest.localBaseTestDataFolder + localFile);
            const request = new model.DeleteBookmarksOnlineRequest({
                document: requestDocument
            });

            // Act
            return wordsApi.deleteBookmarksOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });

    // Test for inserting new bookmark.
    describe("insertBookmark test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestInsertBookmark.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const requestBookmarkStartRange = new model.NewDocumentPosition({
                    nodeId: "0.0.0.0",
                    offset: 0
                })
                const requestBookmarkEndRange = new model.NewDocumentPosition({
                    nodeId: "0.0.0.0",
                    offset: 0
                })
                const requestBookmark = new model.BookmarkInsert({
                    startRange: requestBookmarkStartRange,
                    endRange: requestBookmarkEndRange,
                    name: "new_bookmark",
                    text: "Some text"
                })
                const request = new model.InsertBookmarkRequest({
                    name: remoteFileName,
                    bookmark: requestBookmark,
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.insertBookmark(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                });

            });

       });
    });

    // Test for inserting new bookmark online.
    describe("insertBookmarkOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const requestDocument = fs.createReadStream(BaseTest.localBaseTestDataFolder + localFile);
            const requestBookmarkStartRange = new model.NewDocumentPosition({
                nodeId: "0.0.0.0",
                offset: 0
            })
            const requestBookmarkEndRange = new model.NewDocumentPosition({
                nodeId: "0.0.0.0",
                offset: 0
            })
            const requestBookmark = new model.BookmarkInsert({
                startRange: requestBookmarkStartRange,
                endRange: requestBookmarkEndRange,
                name: "new_bookmark",
                text: "Some text"
            })
            const request = new model.InsertBookmarkOnlineRequest({
                document: requestDocument,
                bookmark: requestBookmark
            });

            // Act
            return wordsApi.insertBookmarkOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });
});
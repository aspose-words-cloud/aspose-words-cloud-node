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

import { DeleteParagraphRequest, GetParagraphFormatRequest, GetParagraphRequest, GetParagraphsRequest, InsertParagraphRequest, ParagraphFormat, ParagraphInsert, RenderParagraphRequest, UpdateParagraphFormatRequest } from "../../src/model/model";
import { DeleteParagraphWithoutNodePathRequest, GetParagraphFormatWithoutNodePathRequest, GetParagraphsWithoutNodePathRequest, GetParagraphWithoutNodePathRequest, RenderParagraphWithoutNodePathRequest } from "../../src/model/model";
import { GetParagraphListFormatRequest, UpdateParagraphListFormatRequest, DeleteParagraphListFormatRequest, ListFormatUpdate } from "../../src/model/model";
import * as BaseTest from "../baseTest";

const testFolder = "DocumentElements/Paragraphs";
const testListFolder = "DocumentElements/ParagraphListFormat";

describe("paragraphs", () => {
    describe("getParagraphs function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localCommonTestDataFolder + "test_multi_pages.docx";
            const remoteFileName = "TestGetParagraphs.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new GetParagraphsRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.nodePath = "sections/0";

                    // Act
                    return wordsApi.getParagraphs(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.response.statusCode).to.equal(200);

                            expect(result1.body.paragraphs).to.exist.and.not.equal(null);
                        });
                });
        });
    });

    describe("getParagraph function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localCommonTestDataFolder + "test_multi_pages.docx";
            const remoteFileName = "TestGetParagraph.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new GetParagraphRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.nodePath = "sections/0";
                    request.index = 0;

                    // Act
                    return wordsApi.getParagraph(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.response.statusCode).to.equal(200);

                            expect(result1.body.paragraph).to.exist.and.not.equal(null);
                        });
                });
        });
    });

    describe("insertParagraph function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localCommonTestDataFolder + "test_multi_pages.docx";
            const remoteFileName = "TestPutParagraph.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new InsertParagraphRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.paragraph =  new ParagraphInsert ({ text: "This is a new paragraph for your document" });
                    request.nodePath = "sections/0";

                    // Act
                    return wordsApi.insertParagraph(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.response.statusCode).to.equal(200);

                            expect(result1.body.paragraph).to.exist.and.not.equal(null);
                        });
                });
        });
    });   

    describe("deleteParagraph function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localCommonTestDataFolder + "test_multi_pages.docx";
            const remoteFileName = "TestDeleteParagraph.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new DeleteParagraphRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.nodePath = null;
                    request.index = 0;

                    // Act
                    return wordsApi.deleteParagraph(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.statusCode).to.equal(200);
                        });
                });
        });
    });

    describe("renderParagraph function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localCommonTestDataFolder + "test_multi_pages.docx";
            const remoteFileName = "TestRenderParagraph.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new RenderParagraphRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.index = 0;
                    request.nodePath = null;
                    request.format = "png";

                    // Act
                    return wordsApi.renderParagraph(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.response.statusCode).to.equal(200);
                            expect(result1.body.byteLength).to.greaterThan(0);
                        });
                });
        });
    });

    describe("getParagraphFormat function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localCommonTestDataFolder + "/test_doc.docx";
            const remoteFileName = "TestGetParagraphFormat.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new GetParagraphFormatRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.nodePath = null;
                    request.index = 0;

                    // Act
                    return wordsApi.getParagraphFormat(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.response.statusCode).to.equal(200);

                            expect(result1.body.paragraphFormat).to.exist.and.not.equal(null);
                        });
                });
        });
    });    

    describe("updateParagraphFormat function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localCommonTestDataFolder + "/test_doc.docx";
            const remoteFileName = "TestUpdateParagraphFormat.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new UpdateParagraphFormatRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.index = 0;
                    request.nodePath = null;
                    request.dto = new ParagraphFormat(
                    {
                        alignment: ParagraphFormat.AlignmentEnum.Right,
                    });

                    // Act
                    return wordsApi.updateParagraphFormat(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.response.statusCode).to.equal(200);

                            expect(result1.body.paragraphFormat).to.exist.and.not.equal(null);
                        });
                });
        });
    });

    describe("getParagraphsWithoutNodePath function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localCommonTestDataFolder + "test_multi_pages.docx";
            const remoteFileName = "TestGetParagraphsWithoutNodePath.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new GetParagraphsWithoutNodePathRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;

                    // Act
                    return wordsApi.getParagraphsWithoutNodePath(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.response.statusCode).to.equal(200);

                            expect(result1.body.paragraphs).to.exist.and.not.equal(null);
                        });
                });
        });
    });

    describe("getParagraphWithoutNodePath function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localCommonTestDataFolder + "test_multi_pages.docx";
            const remoteFileName = "TestGetParagraphWithoutNodePath.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new GetParagraphWithoutNodePathRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.index = 0;

                    // Act
                    return wordsApi.getParagraphWithoutNodePath(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.response.statusCode).to.equal(200);

                            expect(result1.body.paragraph).to.exist.and.not.equal(null);
                        });
                });
        });
    });

    describe("deleteParagraphWithoutNodePath function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localCommonTestDataFolder + "test_multi_pages.docx";
            const remoteFileName = "TestDeleteParagraphWithoutNodePath.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new DeleteParagraphWithoutNodePathRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.index = 0;

                    // Act
                    return wordsApi.deleteParagraphWithoutNodePath(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.statusCode).to.equal(200);
                        });
                });
        });
    });

    describe("renderParagraphWithoutNodePath function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localCommonTestDataFolder + "test_multi_pages.docx";
            const remoteFileName = "TestRenderParagraphWithoutNodePath.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new RenderParagraphWithoutNodePathRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.index = 0;
                    request.format = "png";

                    // Act
                    return wordsApi.renderParagraphWithoutNodePath(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.response.statusCode).to.equal(200);
                            expect(result1.body.byteLength).to.greaterThan(0);
                        });
                });
        });
    });

    describe("getParagraphFormatWithoutNodePath function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localCommonTestDataFolder + "/test_doc.docx";
            const remoteFileName = "TestGetParagraphFormatWithoutNodePath.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new GetParagraphFormatWithoutNodePathRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.index = 0;

                    // Act
                    return wordsApi.getParagraphFormatWithoutNodePath(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.response.statusCode).to.equal(200);

                            expect(result1.body.paragraphFormat).to.exist.and.not.equal(null);
                        });
                });
        });
    }); 

    describe("getParagraphFormatList function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();
            const filename = "ParagraphGetListFormat.doc";
            const localPath = BaseTest.localBaseTestDataFolder + testListFolder + "/" + filename;
            const remotePath = BaseTest.remoteBaseTestDataFolder + testListFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + filename, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new GetParagraphListFormatRequest();
                    request.name = filename;
                    request.folder = remotePath;
                    request.nodePath = "";
                    request.index = 0;

                    // Act
                    return wordsApi.getParagraphListFormat(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.response.statusCode).to.equal(200);
                        });
                });
        });
    });   
    
    describe("updateParagraphFormatList function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();
            const filename = "ParagraphUpdateListFormat.doc";
            const localPath = BaseTest.localBaseTestDataFolder + testListFolder + "/" + filename;
            const remotePath = BaseTest.remoteBaseTestDataFolder + testListFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + filename, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new UpdateParagraphListFormatRequest();
                    request.name = filename;
                    request.dto = new ListFormatUpdate({ listId: 2 });
                    request.folder = remotePath;
                    request.nodePath = "";
                    request.index = 0;

                    // Act
                    return wordsApi.updateParagraphListFormat(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.response.statusCode).to.equal(200);
                        });
                });
        });
    });
    
    describe("deleteParagraphFormatList function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();
            const filename = "ParagraphGetListFormat.doc";
            const localPath = BaseTest.localBaseTestDataFolder + testListFolder + "/" + filename;
            const remotePath = BaseTest.remoteBaseTestDataFolder + testListFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + filename, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new DeleteParagraphListFormatRequest();
                    request.name = filename;
                    request.folder = remotePath;
                    request.nodePath = "";
                    request.index = 0;

                    // Act
                    return wordsApi.deleteParagraphListFormat(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.response.statusCode).to.equal(200);
                        });
                });
        });
    });
});

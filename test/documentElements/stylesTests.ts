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

import { GetStylesRequest, GetStyleRequest, UpdateStyleRequest, InsertStyleRequest, CopyStyleRequest, StyleUpdate, StyleCopy, StyleInsert } from "../../src/model/model";
import * as BaseTest from "../baseTest";

const dataFolder = "DocumentElements/Styles/";

describe("styles", () => {
    describe("getStyles function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localBaseTestDataFolder + dataFolder + "GetStyles.docx";
            const remoteFileName = "TestGetStyles.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + dataFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new GetStylesRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;

                    // Act
                    return wordsApi.getStyles(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.response.statusCode).to.equal(200);
                        });
                });
        });
    });

    describe("getStyle function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localBaseTestDataFolder + dataFolder + "GetStyles.docx";
            const remoteFileName = "TestGetStyle.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + dataFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new GetStyleRequest();
                    request.name = remoteFileName;
                    request.styleName = "Heading 1";
                    request.folder = remotePath;

                    // Act
                    return wordsApi.getStyle(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.response.statusCode).to.equal(200);
                        });
                });
        });
    });  

    describe("updateStyle function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localBaseTestDataFolder + dataFolder + "GetStyles.docx";
            const remoteFileName = "TestUpdateStyle.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + dataFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const data = new StyleUpdate();
                    data.name = "My Style";
                    
                    const request = new UpdateStyleRequest();
                    request.name = remoteFileName;
                    request.styleUpdate = data;
                    request.styleName = "Heading 1";
                    request.folder = remotePath;

                    // Act
                    return wordsApi.updateStyle(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.response.statusCode).to.equal(200);
                        });
                });
        });
    });     
    
    describe("insertStyle function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localBaseTestDataFolder + dataFolder + "GetStyles.docx";
            const remoteFileName = "TestInsertStyle.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + dataFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const data = new StyleInsert();
                    data.styleName = "My Style";
                    data.styleType = StyleInsert.StyleTypeEnum.Paragraph;
                    
                    const request = new InsertStyleRequest();
                    request.name = remoteFileName;
                    request.styleInsert = data;
                    request.folder = remotePath;

                    // Act
                    return wordsApi.insertStyle(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.response.statusCode).to.equal(200);
                        });
                });
        });
    });

    describe("copyStyle function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localBaseTestDataFolder + dataFolder + "GetStyles.docx";
            const remoteFileName = "TestCopyStyle.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + dataFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const data = new StyleCopy();
                    data.styleName = "Heading 1";
                    
                    const request = new CopyStyleRequest();
                    request.name = remoteFileName;
                    request.styleCopy = data;
                    request.folder = remotePath;

                    // Act
                    return wordsApi.copyStyle(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.response.statusCode).to.equal(200);
                        });
                });
        });
    });    
});

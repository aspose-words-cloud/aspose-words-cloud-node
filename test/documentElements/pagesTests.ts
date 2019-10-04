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

import { RenderPageRequest } from "asposewordscloud";
import * as BaseTest from "../baseTest";

const testFolder = "DocumentElements/Pages";

describe("pages", () => {    
    describe("renderPage function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();

            const localPath = BaseTest.localCommonTestDataFolder + "test_multi_pages.docx";
            const remoteFileName = "TestRenderPage.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                    expect(result.response.statusMessage).to.equal("OK");
                    const request = new RenderPageRequest();
                    request.name = remoteFileName;
                    request.folder = remotePath;
                    request.format = "jpg";
                    request.pageIndex = 1;
                    
                    // Act
                    return wordsApi.renderPage(request)
                        .then((result1) => {
                            // Assert
                            expect(result1.response.statusCode).to.equal(200);
                            expect(result1.body.byteLength).to.greaterThan(0);
                        });
                });
        });
    });
});

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
import * as fs from "fs";
import "mocha";
import { ExecuteMailMergeOnlineRequest, ExecuteMailMergeRequest } from "../../../src/model/model";
import * as BaseTest from "../../baseTest";

const testFolder = "DocumentActions/MailMerge";

describe("executeMailMerge", () => {
    describe("putExecuteMailMergeOnline function", () => {
        it("should return response with code 200", () => {

            const wordsApi = BaseTest.initializeWordsApi();
            const templateLocalPath = BaseTest.localBaseTestDataFolder + testFolder + "/SampleMailMergeTemplate.docx";
            const dataLocalPath = BaseTest.localBaseTestDataFolder + testFolder + "/SampleMailMergeTemplateData.txt";

            const request = new ExecuteMailMergeOnlineRequest({
                data: fs.createReadStream(dataLocalPath),
                template: fs.createReadStream(templateLocalPath),
            });
            
            // Act
            return wordsApi.executeMailMergeOnline(request)
                .then((result) => {
                    // Assert                
                    expect(result.response.statusCode).to.equal(200);
                    expect(result.body.byteLength).to.greaterThan(0);
                });

        });
    });

    describe("postDocumentExecuteMailMerge function", () => {
        describe("simple mailMerge", () => {
            it("should return response with code 200", () => {

                const wordsApi = BaseTest.initializeWordsApi();

                const templateLocalPath = BaseTest.localBaseTestDataFolder + testFolder + "/SampleMailMergeTemplate.docx";
                const dataLocalPath = BaseTest.localBaseTestDataFolder + testFolder + "/SampleMailMergeTemplateData.txt";
                const remoteFileName = "TestSimpleMailMergeTemplate.docx";
                const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

                return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, templateLocalPath)
                .then((result) => {
                        expect(result.response.statusMessage).to.equal("OK");
                        const request = new ExecuteMailMergeRequest();
                        request.name = remoteFileName;
                        request.folder = remotePath;
                        request.data = fs.readFileSync(dataLocalPath, "utf8");
                        request.withRegions = false;
                        
                        // Act
                        return wordsApi.executeMailMerge(request)
                            .then((result1) => {
                                // Assert
                                expect(result1.response.statusCode).to.equal(200);
                                
                                expect(result1.body.document.isEncrypted).to.equal(false);
                            });
                    });
            });
        });

        describe("mailMerge with images", () => {
            it("should return response with code 200", () => {

                const wordsApi = BaseTest.initializeWordsApi();

                const templateLocalPath = BaseTest.localBaseTestDataFolder + testFolder + "/TestMailMergeWithImages.doc";
                const dataLocalPath = BaseTest.localBaseTestDataFolder + testFolder + "/TestDataWithRemoteImages.xml";
                const remoteFileName = "TestMailMergeWithImagesTemplate.doc";
                const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

                return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, templateLocalPath)
                .then((result) => {
                        expect(result.response.statusMessage).to.equal("OK");
                        const request = new ExecuteMailMergeRequest();
                        request.name = remoteFileName;
                        request.folder = remotePath;
                        request.data = fs.readFileSync(dataLocalPath, "utf8");
                        request.withRegions = false;

                        // Act
                        return wordsApi.executeMailMerge(request)
                            .then((result1) => {
                                // Assert
                                expect(result1.response.statusCode).to.equal(200);

                                expect(result1.body.document.isEncrypted).to.equal(false);
                            });
                    });
            });
        });
    });
});

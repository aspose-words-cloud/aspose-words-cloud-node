/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="batchTest.ts">
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

import { assert, expect } from "chai";
import "mocha";
import * as fs from "fs";

import * as model from "../src/model/model";
import * as BaseTest from "./baseTest";

describe("batch tests", () => {
    const remoteDataFolder = BaseTest.remoteBaseTestDataFolder + "/DocumentElements/Paragraphs";

    describe("Empty batch request test", () => {
        it("should throw an error", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            return wordsApi.batch()
                .then((_) => {assert.fail("Error is expected");})
                .catch((_) => {assert.ok("Passed");})
        });
    });

    describe("Batch request for a single json test", () => {
        const remoteFileName = "TestBatchSingleJsonRequest.docx";
        const localFile = "Common/test_multi_pages.docx";

        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request1 = new model.GetParagraphsRequest({
                    name: remoteFileName,
                    nodePath: "sections/0",
                    folder: remoteDataFolder
                });

                return wordsApi.batch(request1)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.length).to.equal(1);
                    expect(resultApi.body[0].constructor.name).to.equal("ParagraphLinkCollectionResponse"); // GetParagraphs
                });
            });
        }); 
    });

    describe("Batch request for a single file test", () => {
        const remoteFileName = "TestBatchSingleFileRequest.docx";
        const localFile = "Common/test_multi_pages.docx";

        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");

                const request1 = new model.GetParagraphsRequest({
                    name: remoteFileName,
                    nodePath: "sections/0",
                    folder: remoteDataFolder
                });

                const request2 = new model.DownloadFileRequest({
                    path: remoteDataFolder + "/" + remoteFileName,
                });

                request2.dependsOn(request1);

                return wordsApi.batch(request1, request2)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.length).to.equal(2);
                    expect(resultApi.body[1].constructor.name).to.equal("Buffer");

                    fs.writeFileSync("d:/result.docx", resultApi.body[0]);
                });
            });
        }); 
    });

    describe("Batch Request for a single form test", () => {
        const remoteFileName = "TestGetFullBatchRequest.docx";
        const localFile = "Common/test_multi_pages.docx";

        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request1 = new model.InsertParagraphRequest({
                    name: remoteFileName,
                    paragraph: new model.ParagraphInsert({
                        text: "This is a new paragraph for your document"
                    }),
                    nodePath: "sections/0",
                    folder: remoteDataFolder
                });

                return wordsApi.batch(request1)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.length).to.equal(1);
                    expect(resultApi.body[0].constructor.name).to.equal("ParagraphResponse"); // InsertParagraph
                });
            });
        }); 
    });

    describe("Batch request for a single online request test", () => {
        const remoteFileName = "TesBatchSingleOnlineRequest.docx";
        const reportingFolder = "DocumentActions/Reporting";
        const localFile = "Common/test_multi_pages.docx";

        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");

                const localDocumentFile = "ReportTemplate.docx";
                const localDataFile = fs.readFileSync(BaseTest.localBaseTestDataFolder + reportingFolder + "/ReportData.json", 'utf8');

                const request = new model.BuildReportOnlineRequest({
                    template: fs.createReadStream(BaseTest.localBaseTestDataFolder + reportingFolder + "/" + localDocumentFile),
                    data: localDataFile,
                    reportEngineSettings: new model.ReportEngineSettings({
                        dataSourceType: model.ReportEngineSettings.DataSourceTypeEnum.Json,
                        dataSourceName: "persons"
                    })
                });

                return wordsApi.batch(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusMessage).to.equal("OK");
                    expect(resultApi.body.length).to.equal(1);
                    expect(resultApi.body[0].constructor.name).to.equal("Buffer"); // BuildReportOnline
                });
            });
        }); 
    });

    describe("Run Full Batch Request test", () => {
        const remoteFileName = "TestGetFullBatchRequest.docx";
        const reportingFolder = "DocumentActions/Reporting";
        const localFile = "Common/test_multi_pages.docx";

        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request1 = new model.GetParagraphsRequest({
                    name: remoteFileName,
                    nodePath: "sections/0",
                    folder: remoteDataFolder
                });
               const request2 = new model.GetParagraphRequest({
                    name: remoteFileName,
                    index: 0,
                    nodePath: "sections/0",
                    folder: remoteDataFolder
                });
                const request3 = new model.InsertParagraphRequest({
                    name: remoteFileName,
                    paragraph: new model.ParagraphInsert({
                        text: "This is a new paragraph for your document"
                    }),
                    nodePath: "sections/0",
                    folder: remoteDataFolder
                });
                const request4 = new model.DeleteParagraphRequest({
                    name: remoteFileName,
                    index: 0,
                    nodePath: "",
                    folder: remoteDataFolder
                });

                const localDocumentFile = "ReportTemplate.docx";
                const localDataFile = fs.readFileSync(BaseTest.localBaseTestDataFolder + reportingFolder + "/ReportData.json", 'utf8');

                const request5 = new model.BuildReportOnlineRequest({
                    template: fs.createReadStream(BaseTest.localBaseTestDataFolder + reportingFolder + "/" + localDocumentFile),
                    data: localDataFile,
                    reportEngineSettings: new model.ReportEngineSettings({
                        dataSourceType: model.ReportEngineSettings.DataSourceTypeEnum.Json,
                        dataSourceName: "persons"
                    })
                });

                return wordsApi.batch(request1, request2, request3, request4, request5)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.length).to.equal(5);
                    expect(resultApi.body[0].constructor.name).to.equal("ParagraphLinkCollectionResponse"); // GetParagraphs
                    expect(resultApi.body[1].constructor.name).to.equal("ParagraphResponse"); // GetParagraph
                    expect(resultApi.body[2].constructor.name).to.equal("ParagraphResponse"); // InsertParagraph
                    expect(resultApi.body[3]).to.be.null; // DeleteParagraph
                    expect(resultApi.body[4].constructor.name).to.equal("Buffer"); // BuildReportOnline
                });
            });
        }); 
    });

    describe("Run batch request with depenency tree test", () => {
        const remoteFileName = "TestGetFullBatchRequest.docx";
        const localFile = "Common/test_multi_pages.docx";

        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");

                const request1 = new model.GetParagraphsRequest({
                    name: remoteFileName,
                    nodePath: "sections/0",
                    folder: remoteDataFolder
                    });
                const request2 = new model.GetParagraphsRequest({
                        name: remoteFileName,
                        nodePath: "sections/0",
                        folder: remoteDataFolder
                        });
                const request3 = new model.InsertParagraphRequest({
                    name: remoteFileName,
                    paragraph: new model.ParagraphInsert({
                        text: "This is a new paragraph for your document"
                    }),
                    nodePath: "sections/0",
                    folder: remoteDataFolder
                });
                const request4 = new model.DeleteParagraphRequest({
                    name: remoteFileName,
                    nodePath: "sections/0",
                    index: 0,
                    folder: remoteDataFolder
                });

                // set dependency 
                request4.dependsOn(request2);
                request2.dependsOn(request3);
                request3.dependsOn(request1);

                return wordsApi.batch(request1, request2, request3, request4)
                .then((resultApi) => {
                    // Assert
                    // expected order of request: 1, 3, 2, 4
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body[2].paragraphs.paragraphLinkList.length).to.equal(resultApi.body[0].paragraphs.paragraphLinkList.length + 1);
                });
            });
        }); 
    });
});
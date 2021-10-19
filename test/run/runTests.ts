/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="runTests.ts">
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

// Example of how to work with runs.
describe("run", () => {
    expect(fs);
    const remoteDataFolder = BaseTest.remoteBaseTestDataFolder + "/DocumentElements/Runs";
    const localFile = "DocumentElements/Runs/Run.doc";

    // Test for updating run.
    describe("updateRun test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestUpdateRun.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const requestRun = new model.RunUpdate({
                    text: "run with text"
                })
                const request = new model.UpdateRunRequest({
                    name: remoteFileName,
                    run: requestRun,
                    paragraphPath: "paragraphs/1",
                    index: 0,
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.updateRun(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.run).to.exist;
                    expect(resultApi.body.run.text).to.equal("run with text");
                });

            });

       });
    });

    // Test for updating run online.
    describe("updateRunOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const requestDocument = fs.createReadStream(BaseTest.localBaseTestDataFolder + localFile);
            const requestRun = new model.RunUpdate({
                text: "run with text"
            })
            const request = new model.UpdateRunOnlineRequest({
                document: requestDocument,
                run: requestRun,
                paragraphPath: "paragraphs/1",
                index: 0
            });

            // Act
            return wordsApi.updateRunOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });

    // Test for adding run.
    describe("insertRun test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestInsertRun.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const requestRun = new model.RunInsert({
                    text: "run with text"
                })
                const request = new model.InsertRunRequest({
                    name: remoteFileName,
                    paragraphPath: "paragraphs/1",
                    run: requestRun,
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.insertRun(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.run).to.exist;
                    expect(resultApi.body.run.text).to.equal("run with text");
                    expect(resultApi.body.run.nodeId).to.equal("0.0.1.3");
                });

            });

       });
    });

    // Test for adding run online.
    describe("insertRunOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const requestDocument = fs.createReadStream(BaseTest.localBaseTestDataFolder + localFile);
            const requestRun = new model.RunInsert({
                text: "run with text"
            })
            const request = new model.InsertRunOnlineRequest({
                document: requestDocument,
                paragraphPath: "paragraphs/1",
                run: requestRun
            });

            // Act
            return wordsApi.insertRunOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });

    // Test for deleting run.
    describe("deleteRun test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestDeleteRun.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.DeleteRunRequest({
                    name: remoteFileName,
                    paragraphPath: "paragraphs/1",
                    index: 0,
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.deleteRun(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.statusCode).to.equal(200);
                });

            });

       });
    });

    // Test for deleting run online.
    describe("deleteRunOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const requestDocument = fs.createReadStream(BaseTest.localBaseTestDataFolder + localFile);
            const request = new model.DeleteRunOnlineRequest({
                document: requestDocument,
                paragraphPath: "paragraphs/1",
                index: 0
            });

            // Act
            return wordsApi.deleteRunOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });
});
/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="runTests.ts">
 *   Copyright (c) 2020 Aspose.Words for Cloud
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
                const request = new model.UpdateRunRequest({
                    name: remoteFileName,
                    run: new model.RunUpdate({
                        text: "run with text"
                    }),
                    paragraphPath: "paragraphs/1",
                    index: 0,
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.updateRun(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                });

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
                const request = new model.InsertRunRequest({
                    name: remoteFileName,
                    paragraphPath: "paragraphs/1",
                    run: new model.RunInsert({
                        text: "run with text"
                    }),
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.insertRun(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                });

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
});

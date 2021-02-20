/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="tableBorderTests.ts">
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

// Example of how to work with table borders.
describe("tableBorder", () => {
    expect(fs);
    const remoteDataFolder = BaseTest.remoteBaseTestDataFolder + "/DocumentElements/Tables";
    const localFile = "DocumentElements/Tables/TablesGet.docx";

    // Test for getting borders.
    describe("getBorders test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestGetBorders.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.GetBordersRequest({
                    name: remoteFileName,
                    nodePath: "tables/1/rows/0/cells/0",
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.getBorders(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.borders).to.exist;
                    expect(resultApi.body.borders.list).to.exist;
                    expect(resultApi.body.borders.list).to.have.lengthOf(6);
                    expect(resultApi.body.borders.list[0].color).to.exist;
                    expect(resultApi.body.borders.list[0].color.web).to.equal("#000000");
                });

            });

       });
    });

    // Test for getting borders online.
    describe("getBordersOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.GetBordersOnlineRequest({
                document: fs.createReadStream(BaseTest.localBaseTestDataFolder + localFile),
                nodePath: "tables/1/rows/0/cells/0"
            });

            // Act
            return wordsApi.getBordersOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });

    // Test for getting border.
    describe("getBorder test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestGetBorder.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.GetBorderRequest({
                    name: remoteFileName,
                    borderType: "left",
                    nodePath: "tables/1/rows/0/cells/0",
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.getBorder(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.border).to.exist;
                    expect(resultApi.body.border.color).to.exist;
                    expect(resultApi.body.border.color.web).to.equal("#000000");
                });

            });

       });
    });

    // Test for getting border online.
    describe("getBorderOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.GetBorderOnlineRequest({
                document: fs.createReadStream(BaseTest.localBaseTestDataFolder + localFile),
                borderType: "left",
                nodePath: "tables/1/rows/0/cells/0"
            });

            // Act
            return wordsApi.getBorderOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });

    // Test for deleting borders.
    describe("deleteBorders test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestDeleteBorders.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.DeleteBordersRequest({
                    name: remoteFileName,
                    nodePath: "tables/1/rows/0/cells/0",
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.deleteBorders(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                });

            });

       });
    });

    // Test for deleting borders online.
    describe("deleteBordersOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.DeleteBordersOnlineRequest({
                document: fs.createReadStream(BaseTest.localBaseTestDataFolder + localFile),
                nodePath: "tables/1/rows/0/cells/0"
            });

            // Act
            return wordsApi.deleteBordersOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });

    // Test for deleting border.
    describe("deleteBorder test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestDeleteBorder.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.DeleteBorderRequest({
                    name: remoteFileName,
                    borderType: "left",
                    nodePath: "tables/1/rows/0/cells/0",
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.deleteBorder(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                });

            });

       });
    });

    // Test for deleting border online.
    describe("deleteBorderOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.DeleteBorderOnlineRequest({
                document: fs.createReadStream(BaseTest.localBaseTestDataFolder + localFile),
                borderType: "left",
                nodePath: "tables/1/rows/0/cells/0"
            });

            // Act
            return wordsApi.deleteBorderOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });

    // Test for updating border.
    describe("updateBorder test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestUpdateBorder.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.UpdateBorderRequest({
                    name: remoteFileName,
                    borderType: "left",
                    borderProperties: new model.Border({
                        borderType: model.Border.BorderTypeEnum.Left,
                        color: new model.XmlColor({
                            web: "#AABBCC"
                        }),
                        distanceFromText: 6.0,
                        lineStyle: model.Border.LineStyleEnum.DashDotStroker,
                        lineWidth: 2.0,
                        shadow: true
                    }),
                    nodePath: "tables/1/rows/0/cells/0",
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.updateBorder(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.border).to.exist;
                    expect(resultApi.body.border.color).to.exist;
                    expect(resultApi.body.border.color.web).to.equal("#AABBCC");
                    expect(resultApi.body.border.distanceFromText).to.equal(6.0);
                    expect(resultApi.body.border.lineWidth).to.equal(2.0);
                    expect(resultApi.body.border.shadow).to.true;
                });

            });

       });
    });

    // Test for updating border online.
    describe("updateBorderOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.UpdateBorderOnlineRequest({
                document: fs.createReadStream(BaseTest.localBaseTestDataFolder + localFile),
                borderProperties: new model.Border({
                    borderType: model.Border.BorderTypeEnum.Left,
                    color: new model.XmlColor({
                        web: "#AABBCC"
                    }),
                    distanceFromText: 6,
                    lineStyle: model.Border.LineStyleEnum.DashDotStroker,
                    lineWidth: 2,
                    shadow: true
                }),
                borderType: "left",
                nodePath: "tables/1/rows/0/cells/0"
            });

            // Act
            return wordsApi.updateBorderOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });
});

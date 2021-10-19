/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="buildReportTests.ts">
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

// Example of how to perform mail merge.
describe("buildReport", () => {
    expect(fs);
    const remoteDataFolder = BaseTest.remoteBaseTestDataFolder + "/DocumentActions/Reporting";
    const reportingFolder = "DocumentActions/Reporting";

    // Test for build report online.
    describe("buildReportOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const localDocumentFile = "ReportTemplate.docx";
            const localDataFile = fs.readFileSync(BaseTest.localBaseTestDataFolder + reportingFolder + "/ReportData.json", 'utf8');

            const requestTemplate = fs.createReadStream(BaseTest.localBaseTestDataFolder + reportingFolder + "/" + localDocumentFile);
            const requestReportEngineSettings = new model.ReportEngineSettings({
                dataSourceType: model.ReportEngineSettings.DataSourceTypeEnum.Json,
                dataSourceName: "persons"
            })
            const request = new model.BuildReportOnlineRequest({
                template: requestTemplate,
                data: localDataFile,
                reportEngineSettings: requestReportEngineSettings
            });

            // Act
            return wordsApi.buildReportOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });

    // Test for build report.
    describe("buildReport test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const localDocumentFile = "ReportTemplate.docx";
            const remoteFileName = "TestBuildReport.docx";
            const localDataFile = fs.readFileSync(BaseTest.localBaseTestDataFolder + reportingFolder + "/ReportData.json", 'utf8');

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + reportingFolder + "/" + localDocumentFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const requestReportEngineSettingsReportBuildOptions = [
                    model.ReportBuildOptions.AllowMissingMembers,
                    model.ReportBuildOptions.RemoveEmptyParagraphs
                ]
                const requestReportEngineSettings = new model.ReportEngineSettings({
                    dataSourceType: model.ReportEngineSettings.DataSourceTypeEnum.Json,
                    reportBuildOptions: requestReportEngineSettingsReportBuildOptions
                })
                const request = new model.BuildReportRequest({
                    name: remoteFileName,
                    data: localDataFile,
                    reportEngineSettings: requestReportEngineSettings,
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.buildReport(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.document).to.exist;
                    expect(resultApi.body.document.fileName).to.equal("TestBuildReport.docx");
                });

            });

       });
    });
});
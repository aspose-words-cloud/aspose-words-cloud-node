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

import * as fs from "fs";
import { BuildReportOnlineRequest, BuildReportRequest, ReportEngineSettings, ReportBuildOptions } from "../../src/model/model";
import * as BaseTest from "../baseTest";

const testFolder = "DocumentActions/Reporting";
const wordsApi = BaseTest.initializeWordsApi();
const localPath = BaseTest.localBaseTestDataFolder + testFolder + "/ReportTemplate.docx";
const dataPath = BaseTest.localBaseTestDataFolder + testFolder + "/ReportData.json";
const remoteFileName = "TestBuildReport.docx";
const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

describe("buildReportOnline function", () => {
    it("should return response with code 200", () => {
        const request = new BuildReportOnlineRequest({
            template: fs.createReadStream(localPath),
            data: fs.readFileSync(dataPath, "utf8"),
            reportEngineSettings: new ReportEngineSettings({
                dataSourceType: ReportEngineSettings.DataSourceTypeEnum.Json,
                dataSourceName: "persons",
            }),
        });

        // Act
        return wordsApi.buildReportOnline(request)
            .then((result) => {
                // Assert
                expect(result.response.statusCode).to.equal(200);
            });
    });
});

describe("buildReport function", () => {
    it("should return response with code 200", () => {
        const request = new BuildReportRequest({
            name: remoteFileName,
            data: fs.readFileSync(dataPath, "utf8"),
            reportEngineSettings: new ReportEngineSettings({
                dataSourceType: ReportEngineSettings.DataSourceTypeEnum.Json,
                reportBuildOptions: [ReportBuildOptions.AllowMissingMembers, ReportBuildOptions.RemoveEmptyParagraphs],
            }),
        });

        return wordsApi.uploadFileToStorage(remotePath + "/" + remoteFileName, localPath)
            .then((result) => {
                expect(result.response.statusMessage).to.equal("OK");
                // Act
                return wordsApi.buildReport(request)
                    .then((result2) => {
                        // Assert
                        expect(result2.response.statusCode).to.equal(200);
                    });
            });
    });
});

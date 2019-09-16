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
import { Given, Then, When } from "cucumber";
import * as fs from "fs";
import { GetDocumentDrawingObjectsRequest } from "../../../src/api";
import * as BaseTest from "../../../test/baseTest";

const testFolder = "DocumentActions/MailMerge/";

Given(/^I have specified a template file name (.*) in storage$/, function(templateName, callback) {

    const worsApi = BaseTest.initializeWordsApi();

    const remotePath = BaseTest.remoteBaseFolder + testFolder;
    const localPath = BaseTest.localBaseTestDataFolder + testFolder + templateName;

    this.request.name = templateName;
    this.request.folder = remotePath.slice(0, -1);

    worsApi.uploadFileToStorage(remotePath + templateName, localPath)
    .then((result) => {
        expect(result.response.statusMessage).to.equal("OK");
        callback();
    });
});

Given(/^I have specified a body (.*)$/, function(fileWithBodyContent) {
    this.request.data = fs.readFileSync(BaseTest.localBaseTestDataFolder + testFolder + fileWithBodyContent);
});

When(/^I execute template$/, function() {
    const wordsApi = BaseTest.initializeWordsApi();
    const request = this.request;

    return wordsApi.executeMailMerge(request)
        .then((result) => {
            this.response = result;
        });
});

Then(/^image should be rendered$/, function(callback) {
    const wordsApi = BaseTest.initializeWordsApi();
    const request = new GetDocumentDrawingObjectsRequest({
        folder: BaseTest.remoteBaseFolder + "DocumentActions/MailMerge",
        name: "ExecuteTemplateWithImagesResult.doc",
        nodePath: null
    });

    wordsApi.getDocumentDrawingObjects(request).then((result) => {
        expect(result.body.drawingObjects.list.length).to.greaterThan(0);
        callback();
    });
});

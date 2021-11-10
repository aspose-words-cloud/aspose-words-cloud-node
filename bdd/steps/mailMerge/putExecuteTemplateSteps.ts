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

import { Given, When } from "cucumber";
import * as fs from "fs";
import { ExecuteMailMergeOnlineRequest } from "../../../src/model/model";
import * as BaseTest from "../../../test/baseTest";

const testFolder = "DocumentActions/MailMerge/";

Given(/^I have specified a template file (.*) in request$/, {timeout: 60000}, function(templateName) {
    this.request.template = fs.readFileSync(BaseTest.localBaseTestDataFolder + testFolder + templateName);
});

When(/^I execute template online$/, async function() {
    const wordsApi = BaseTest.initializeWordsApi();
    const request = new ExecuteMailMergeOnlineRequest(this.request);
        
    const result =  await wordsApi.executeMailMergeOnline(request)
    this.response = result;

    return result;
});

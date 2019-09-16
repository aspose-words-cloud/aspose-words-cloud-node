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
import { Before, Given, Then, When } from "cucumber";
import { GetRunsRequest } from "../../../src/api";
import * as BaseTest from "../../../test/baseTest";

Before({ tags: "@saveAs" }, function() {
    this.request.saveOptionsData = {};
});

Given(/^I have specified save format (.*) document to be converted$/, function(saveFormat) {
    this.request.saveOptionsData.saveFormat = saveFormat;
});

Given(/^I have specified destFileName (.*)$/, function(destFileName) {
    this.request.saveOptionsData.fileName = destFileName;
});

When(/^I execute conversion from storage \(POST SaveAs\)$/, function() {
    const wordsApi = BaseTest.initializeWordsApi();
    const request = this.request;

    return wordsApi.saveAs(request)
        .then((result) => {
            this.response = result;            
        });
});

Then(/^symbols are encoded properly$/, function() {    
    const wordsApi = BaseTest.initializeWordsApi();
    const request = new GetRunsRequest({
        folder: BaseTest.remoteBaseFolder + "DocumentActions/ConvertDocument/out/saveas",
        name: "TableDocumentDoc.doc",
        paragraphPath: null
    });

    wordsApi.getRuns(request).then((result) => {
        expect(result.body.runs.list[0].text).to.equal("строка");        
    });
});

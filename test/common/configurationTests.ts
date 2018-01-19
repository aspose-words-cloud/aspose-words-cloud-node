/*
* MIT License

* Copyright (c) 2018 Aspose Pty Ltd

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

import "mocha";
import "mocha-sinon";
import * as sinon from "sinon";

import { GetDocumentRequest } from "../../src/model/model";
import { initializeWordsApi } from "../baseTest";

describe("configuration tests", () => {

    it("should write request to console if debugMode is setted to true", () => {

        const wordsApi = initializeWordsApi();

        // TODO: put document to storage
        // TODO: move folder name to constants
        const request = new GetDocumentRequest();
        request.documentName = "TestGetDocument.docx";
        request.folder = "Temp/SdkTests/TestData/DocumentActions/Document";

        wordsApi.configuration.debugMode = true;

        const log = sinon.spy(console, "log");
        return wordsApi.getDocument(request)
            .then(() => {
                log.restore();
                sinon.assert.calledWith(log,
                    sinon.match('"uri": "http://api-dev.aspose.cloud/v1.1/words/TestGetDocument.docx?Folder=Temp%2FSdkTests%2FTestData%2FDocumentActions%2FDocument"')
                    .and(sinon.match('"method": "GET"')));
            });
    });

    it("should not write to console if debugMode is setted to false", () => {

        const wordsApi = initializeWordsApi();

        // TODO: put document to storage
        // TODO: move folder name to constants
        const request = new GetDocumentRequest();
        request.documentName = "TestGetDocument.docx";
        request.folder = "Temp/SdkTests/TestData/DocumentActions/Document";

        wordsApi.configuration.debugMode = false;

        const log = sinon.spy(console, "log");
        return wordsApi.getDocument(request)
            .then(() => {
                log.restore();
                sinon.assert.notCalled(log);
            });
    });
});

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

import "mocha";
import { expect } from "chai";
import * as BaseTest from "./baseTest";
import {GetSectionRequest} from "./../src/model/model";

describe("Correct URL encoding", () => {
    it("should return 200 code'", () => {
        const wordsApi = BaseTest.initializeWordsApi();

        const localPath = BaseTest.localCommonTestDataFolder + "test_multi_pages.docx";
        const remoteFileName = "[“Test_Two,_Inc.”]-_83(b)Election([“Bill_Gates”]).docx";

        return wordsApi.uploadFileToStorage(remoteFileName, localPath)
        .then((result) => {
                expect(result.response.statusMessage).to.equal("OK");
                const request = new GetSectionRequest();
                request.name = remoteFileName;
                request.sectionIndex = 0;

                // Act
                return wordsApi.getSection(request)
                    .then((result1) => {
                        // Assert
                        expect(result1.response.statusCode).to.equal(200);

                        expect(result1.body.section).to.exist.and.not.equal(null);
                    });
        });
    });
});
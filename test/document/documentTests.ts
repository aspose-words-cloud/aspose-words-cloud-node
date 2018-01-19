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

import { expect } from "chai";
import "mocha";

import { GetDocumentRequest } from "../../src/model/model";
import { initializeStorageApi, initializeWordsApi } from "../baseTest";

describe("getDocument function", () => {

  it("should return response with code 200", () => {

    const storageApi = initializeStorageApi();
    const wordsApi = initializeWordsApi();

    const localPath = "./testData/Conversion/";
    const remotePath = "Temp/SdkTests/TestData/DocumentActions/Document";
    const filename = "test_doc.docx";

    return new Promise((resolve, reject) => {
      storageApi.PutCreate(remotePath + "/" + filename, null, null, localPath + filename, (responseMessage) => {
        expect(responseMessage.status).to.equal("OK");
        resolve();
      });      
    })
      .then(() => {
        const request = new GetDocumentRequest();
        request.documentName = filename;
        request.folder = remotePath;

        // Act
        return wordsApi.getDocument(request)
          .then((result) => {
            // Assert
            expect(result.body.code).to.equal(200);
            expect(result.response.statusCode).to.equal(200);
          });
      });
  });
});

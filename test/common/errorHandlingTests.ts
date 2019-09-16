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
import {IncomingMessage} from "http";
import { GetDocumentRequest, WordsApiErrorResponse } from "../../src/model/model";
import { initializeWordsApi } from "../baseTest";

describe("errorHandling tests", () => {

    it("If file does not exist, 404 response should be returned with message 'Error while loading file '", () => {

        const wordsApi = initializeWordsApi();        
        const request = new GetDocumentRequest();
        request.documentName = "noFileWithThisName.docx";
                        
        return wordsApi.getDocument(request)            
            .catch((errorResponse) => {
                expect(errorResponse.response instanceof IncomingMessage).to.be.true;
                expect(errorResponse.body instanceof WordsApiErrorResponse).to.be.true;
                expect(errorResponse.response.statusCode).to.equal(404);
                expect(errorResponse.body.error.message.startsWith("Error while loading file 'noFileWithThisName.docx' from storage: AmazonS3 Storage exception:")).to.be.true;               
            });
    });    
});

/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="hyperlinkTests.ts">
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
import * as BaseTest from "../baseTest";

// Example of how to work with hyperlinks.
describe("hyperlink", () => {
    expect(fs);
    const remoteDataFolder = BaseTest.remoteBaseTestDataFolder + "/DocumentElements/Hyperlink";
    const localFile = "Common/test_doc.docx";

    // Test for getting hyperlink by specified index.
    describe("getDocumentHyperlinkByIndex test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestGetDocumentHyperlinkByIndex.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.GetDocumentHyperlinkByIndexRequest({
                    name: remoteFileName,
                    hyperlinkIndex: 0,
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.getDocumentHyperlinkByIndex(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.hyperlink).to.exist;
                    expect(resultApi.body.hyperlink.displayText).to.equal("Aspose");
                });

            });

       });
    });

    // Test for getting hyperlink by specified index online.
    describe("getDocumentHyperlinkByIndexOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.GetDocumentHyperlinkByIndexOnlineRequest({
                document: fs.createReadStream(BaseTest.localBaseTestDataFolder + localFile),
                hyperlinkIndex: 0
            });

            // Act
            return wordsApi.getDocumentHyperlinkByIndexOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });

    // Test for getting hyperlinks.
    describe("getDocumentHyperlinks test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestGetDocumentHyperlinks.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.GetDocumentHyperlinksRequest({
                    name: remoteFileName,
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.getDocumentHyperlinks(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.hyperlinks).to.exist;
                    expect(resultApi.body.hyperlinks.hyperlinkList).to.exist;
                    expect(resultApi.body.hyperlinks.hyperlinkList).to.have.lengthOf(2);
                    expect(resultApi.body.hyperlinks.hyperlinkList[0].displayText).to.equal("Aspose");
                });

            });

       });
    });

    // Test for getting hyperlinks online.
    describe("getDocumentHyperlinksOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.GetDocumentHyperlinksOnlineRequest({
                document: fs.createReadStream(BaseTest.localBaseTestDataFolder + localFile)
            });

            // Act
            return wordsApi.getDocumentHyperlinksOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });
});

/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="documentProtectionTests.ts">
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

// Example of how to set document protection.
describe("documentProtection", () => {
    expect(fs);
    const remoteDataFolder = BaseTest.remoteBaseTestDataFolder + "/DocumentElements/DocumentProtection";
    const localFile = "Common/test_multi_pages.docx";

    // Test for setting document protection.
    describe("protectDocument test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestProtectDocument.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.ProtectDocumentRequest({
                    name: remoteFileName,
                    protectionRequest: requestProtectionRequest,
                    folder: remoteDataFolder,
                    destFileName: BaseTest.remoteBaseTestOutFolder + "/" + remoteFileName
                });

                // Act
                return wordsApi.protectDocument(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.protectionData).to.exist;
                    expect(resultApi.body.protectionData.protectionType).to.equal("ReadOnly");
                });

            });

       });
    });

    // Test for setting document protection.
    describe("protectDocumentOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            let requestDocument = fs.createReadStream(BaseTest.localBaseTestDataFolder + localFile);

            const request = new model.ProtectDocumentOnlineRequest({
                document: requestDocument,
                protectionRequest: requestProtectionRequest
            });

            // Act
            return wordsApi.protectDocumentOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });

    // Test for getting document protection.
    describe("getDocumentProtection test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const localFilePath = "DocumentActions/DocumentProtection/SampleProtectedBlankWordDocument.docx";
            const remoteFileName = "TestGetDocumentProtection.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFilePath
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.GetDocumentProtectionRequest({
                    name: remoteFileName,
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.getDocumentProtection(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                });

            });

       });
    });

    // Test for getting document protection.
    describe("getDocumentProtectionOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            let requestDocument = fs.createReadStream(BaseTest.localBaseTestDataFolder + localFile);
            const request = new model.GetDocumentProtectionOnlineRequest({
                document: requestDocument
            });

            // Act
            return wordsApi.getDocumentProtectionOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });

    // Test for deleting unprotect document.
    describe("deleteUnprotectDocument test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const localFilePath = "DocumentActions/DocumentProtection/SampleProtectedBlankWordDocument.docx";
            const remoteFileName = "TestDeleteUnprotectDocument.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFilePath
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.UnprotectDocumentRequest({
                    name: remoteFileName,
                    protectionRequest: requestProtectionRequest,
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.unprotectDocument(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.protectionData).to.exist;
                    expect(resultApi.body.protectionData.protectionType).to.equal("NoProtection");
                });

            });

       });
    });

    // Test for deleting unprotect document.
    describe("deleteUnprotectDocumentOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const localFilePath = "DocumentActions/DocumentProtection/SampleProtectedBlankWordDocument.docx";

            let requestDocument = fs.createReadStream(BaseTest.localBaseTestDataFolder + localFilePath);

            const request = new model.UnprotectDocumentOnlineRequest({
                document: requestDocument,
                protectionRequest: requestProtectionRequest
            });

            // Act
            return wordsApi.unprotectDocumentOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });
});
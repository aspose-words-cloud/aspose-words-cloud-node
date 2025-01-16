/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="signatureTests.ts">
 *   Copyright (c) 2025 Aspose.Words for Cloud
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

// Example of how to work with signatures.
describe("signature", () => {
    expect(fs);
    const remoteFolder = BaseTest.remoteBaseTestDataFolder + "/DocumentActions/Signature";
    const localFolder = "DocumentActions/Signature";
    const signedDocument = "signedDocument.docx";
    const unsignedDocument = "unsignedDocument.docx";
    const certificateName = "morzal.pfx";
    const certificatePassword = "aw";

    // Test for getting all document signatures.
    describe("getSignatures test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteName = "TestGetSignatures.docx";

            return wordsApi.uploadFileToStorage(
                remoteFolder + "/" + remoteName,
                BaseTest.localBaseTestDataFolder + localFolder + "/" + signedDocument
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.GetSignaturesRequest({
                    name: remoteName,
                    folder: remoteFolder
                });

                // Act
                return wordsApi.getSignatures(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.signatures).to.exist;
                    expect(resultApi.body.signatures).to.have.lengthOf(1);
                });

            });

       });
    });

    // Test for getting all document signatures online.
    describe("getSignaturesOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const requestDocument = fs.createReadStream(BaseTest.localBaseTestDataFolder + localFolder + "/" + signedDocument);
            const request = new model.GetSignaturesOnlineRequest({
                document: requestDocument
            });

            // Act
            return wordsApi.getSignaturesOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
                expect(resultApi.body.signatures).to.exist;
                expect(resultApi.body.signatures).to.have.lengthOf(1);
            });

       });
    });

    // Test for removing all document signatures.
    describe("removeAllSignatures test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteName = "TestRemoveAllSignatures.docx";

            return wordsApi.uploadFileToStorage(
                remoteFolder + "/" + remoteName,
                BaseTest.localBaseTestDataFolder + localFolder + "/" + signedDocument
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.RemoveAllSignaturesRequest({
                    name: remoteName,
                    folder: remoteFolder
                });

                // Act
                return wordsApi.removeAllSignatures(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.signatures).to.exist;
                    expect(resultApi.body.signatures).to.have.lengthOf(0);
                });

            });

       });
    });

    // Test for removing all document signatures online.
    describe("removeAllSignaturesOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const requestDocument = fs.createReadStream(BaseTest.localBaseTestDataFolder + localFolder + "/" + signedDocument);
            const request = new model.RemoveAllSignaturesOnlineRequest({
                document: requestDocument
            });

            // Act
            return wordsApi.removeAllSignaturesOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
                expect(resultApi.body.model.signatures).to.exist;
                expect(resultApi.body.model.signatures).to.have.lengthOf(0);
            });

       });
    });

    // Test for signing document.
    describe("signDocument test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteName = "TestSignDocument.docx";
            const remoteCertificateName = "TestCertificate.pfx";

            return wordsApi.uploadFileToStorage(
                remoteFolder + "/" + remoteName,
                BaseTest.localBaseTestDataFolder + localFolder + "/" + unsignedDocument
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                return wordsApi.uploadFileToStorage(
                    remoteFolder + "/" + remoteCertificateName,
                    BaseTest.localBaseTestDataFolder + localFolder + "/" + certificateName
                ).then((result1) => {
                    expect(result1.response.statusMessage).to.equal("OK");
                    const request = new model.SignDocumentRequest({
                        name: remoteName,
                        certificatePath: remoteFolder + "/" + remoteCertificateName,
                        certificatePassword: certificatePassword,
                        folder: remoteFolder
                    });

                    // Act
                    return wordsApi.signDocument(request)
                    .then((resultApi) => {
                        // Assert
                        expect(resultApi.response.statusCode).to.equal(200);
                        expect(resultApi.body.signatures).to.exist;
                        expect(resultApi.body.signatures).to.have.lengthOf(1);
                    });

                });

            });

       });
    });

    // Test for signing document online.
    describe("signDocumentOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteCertificateName = "TestCertificateOnline.pfx";

            return wordsApi.uploadFileToStorage(
                remoteFolder + "/" + remoteCertificateName,
                BaseTest.localBaseTestDataFolder + localFolder + "/" + certificateName
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const requestDocument = fs.createReadStream(BaseTest.localBaseTestDataFolder + localFolder + "/" + unsignedDocument);
                const request = new model.SignDocumentOnlineRequest({
                    document: requestDocument,
                    certificatePath: remoteFolder + "/" + remoteCertificateName,
                    certificatePassword: certificatePassword
                });

                // Act
                return wordsApi.signDocumentOnline(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.model.signatures).to.exist;
                    expect(resultApi.body.model.signatures).to.have.lengthOf(1);
                });

            });

       });
    });
});
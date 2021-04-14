/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="fieldTests.ts">
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

// Example of how to work with field.
describe("field", () => {
    expect(fs);
    const remoteDataFolder = BaseTest.remoteBaseTestDataFolder + "/DocumentElements/Fields";
    const textFolder = "DocumentElements/Text";
    const fieldFolder = "DocumentElements/Fields";

    // Test for getting fields.
    describe("getFields test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const localFileName = "GetField.docx";
            const remoteFileName = "TestGetFields.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + fieldFolder + "/" + localFileName
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.GetFieldsRequest({
                    name: remoteFileName,
                    nodePath: "sections/0",
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.getFields(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.fields).to.exist;
                    expect(resultApi.body.fields.list).to.exist;
                    expect(resultApi.body.fields.list).to.have.lengthOf(1);
                    expect(resultApi.body.fields.list[0].result).to.equal("1");
                });

            });

       });
    });

    // Test for getting fields online.
    describe("getFieldsOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.GetFieldsOnlineRequest({
                document: fs.createReadStream(BaseTest.localBaseTestDataFolder + fieldFolder + "/GetField.docx"),
                nodePath: "sections/0"
            });

            // Act
            return wordsApi.getFieldsOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });

    // Test for getting fields without node path.
    describe("getFieldsWithoutNodePath test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const localFileName = "GetField.docx";
            const remoteFileName = "TestGetFieldsWithoutNodePath.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + fieldFolder + "/" + localFileName
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.GetFieldsRequest({
                    name: remoteFileName,
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.getFields(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.fields).to.exist;
                    expect(resultApi.body.fields.list).to.exist;
                    expect(resultApi.body.fields.list).to.have.lengthOf(1);
                    expect(resultApi.body.fields.list[0].result).to.equal("1");
                });

            });

       });
    });

    // Test for getting field by index.
    describe("getField test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const localFileName = "GetField.docx";
            const remoteFileName = "TestGetField.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + fieldFolder + "/" + localFileName
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.GetFieldRequest({
                    name: remoteFileName,
                    index: 0,
                    nodePath: "sections/0/paragraphs/0",
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.getField(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.field).to.exist;
                    expect(resultApi.body.field.result).to.equal("1");
                });

            });

       });
    });

    // Test for getting field by index online.
    describe("getFieldOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.GetFieldOnlineRequest({
                document: fs.createReadStream(BaseTest.localBaseTestDataFolder + fieldFolder + "/GetField.docx"),
                index: 0,
                nodePath: "sections/0/paragraphs/0"
            });

            // Act
            return wordsApi.getFieldOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });

    // Test for getting field by index without node path.
    describe("getFieldWithoutNodePath test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const localFileName = "GetField.docx";
            const remoteFileName = "TestGetFieldWithoutNodePath.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + fieldFolder + "/" + localFileName
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.GetFieldRequest({
                    name: remoteFileName,
                    index: 0,
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.getField(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.field).to.exist;
                    expect(resultApi.body.field.result).to.equal("1");
                });

            });

       });
    });

    // Test for putting field.
    describe("insertField test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const localFileName = "SampleWordDocument.docx";
            const remoteFileName = "TestInsertField.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + textFolder + "/" + localFileName
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.InsertFieldRequest({
                    name: remoteFileName,
                    field: new model.FieldInsert({
                        fieldCode: "{ NUMPAGES }"
                    }),
                    nodePath: "sections/0/paragraphs/0",
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.insertField(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.field).to.exist;
                    expect(resultApi.body.field.fieldCode).to.equal("{ NUMPAGES }");
                    expect(resultApi.body.field.nodeId).to.equal("0.0.0.1");
                });

            });

       });
    });

    // Test for putting field online.
    describe("insertFieldOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.InsertFieldOnlineRequest({
                document: fs.createReadStream(BaseTest.localBaseTestDataFolder + fieldFolder + "/GetField.docx"),
                field: new model.FieldInsert({
                    fieldCode: "{ NUMPAGES }"
                }),
                nodePath: "sections/0/paragraphs/0"
            });

            // Act
            return wordsApi.insertFieldOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });

    // Test for putting field without node path.
    describe("insertFieldWithoutNodePath test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const localFileName = "SampleWordDocument.docx";
            const remoteFileName = "TestInsertFieldWithoutNodePath.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + textFolder + "/" + localFileName
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.InsertFieldRequest({
                    name: remoteFileName,
                    field: new model.FieldInsert({
                        fieldCode: "{ NUMPAGES }"
                    }),
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.insertField(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.field).to.exist;
                    expect(resultApi.body.field.fieldCode).to.equal("{ NUMPAGES }");
                    expect(resultApi.body.field.nodeId).to.equal("5.0.22.0");
                });

            });

       });
    });

    // Test for posting field.
    describe("updateField test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const localFileName = "GetField.docx";
            const remoteFileName = "TestUpdateField.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + fieldFolder + "/" + localFileName
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.UpdateFieldRequest({
                    name: remoteFileName,
                    index: 0,
                    field: new model.FieldUpdate({
                        fieldCode: "{ NUMPAGES }"
                    }),
                    nodePath: "sections/0/paragraphs/0",
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.updateField(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.field).to.exist;
                    expect(resultApi.body.field.fieldCode).to.equal("{ NUMPAGES }");
                    expect(resultApi.body.field.nodeId).to.equal("0.0.0.0");
                });

            });

       });
    });

    // Test for posting field online.
    describe("updateFieldOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.UpdateFieldOnlineRequest({
                document: fs.createReadStream(BaseTest.localBaseTestDataFolder + fieldFolder + "/GetField.docx"),
                index: 0,
                field: new model.FieldUpdate({
                    fieldCode: "{ NUMPAGES }"
                }),
                nodePath: "sections/0/paragraphs/0"
            });

            // Act
            return wordsApi.updateFieldOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });

    // Test for inserting page numbers field.
    describe("insertPageNumbers test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const localFileName = "test_multi_pages.docx";
            const remoteFileName = "TestInsertPageNumbers.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + "Common/" + localFileName
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.InsertPageNumbersRequest({
                    name: remoteFileName,
                    pageNumber: new model.PageNumber({
                        alignment: "center",
                        format: "{PAGE} of {NUMPAGES}"
                    }),
                    folder: remoteDataFolder,
                    destFileName: BaseTest.remoteBaseTestOutFolder + "/" + remoteFileName
                });

                // Act
                return wordsApi.insertPageNumbers(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.document).to.exist;
                    expect(resultApi.body.document.fileName).to.equal("TestInsertPageNumbers.docx");
                });

            });

       });
    });

    // Test for inserting page numbers field online.
    describe("insertPageNumbersOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const localFileName = "test_multi_pages.docx";

            const request = new model.InsertPageNumbersOnlineRequest({
                document: fs.createReadStream(BaseTest.localBaseTestDataFolder + "Common/" + localFileName),
                pageNumber: new model.PageNumber({
                    alignment: "center",
                    format: "{PAGE} of {NUMPAGES}"
                })
            });

            // Act
            return wordsApi.insertPageNumbersOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });

    // Test for deleting field.
    describe("deleteField test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const localFileName = "GetField.docx";
            const remoteFileName = "TestDeleteField.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + fieldFolder + "/" + localFileName
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.DeleteFieldRequest({
                    name: remoteFileName,
                    index: 0,
                    nodePath: "sections/0/paragraphs/0",
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.deleteField(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.statusCode).to.equal(200);
                });

            });

       });
    });

    // Test for deleting field online.
    describe("deleteFieldOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const request = new model.DeleteFieldOnlineRequest({
                document: fs.createReadStream(BaseTest.localBaseTestDataFolder + fieldFolder + "/GetField.docx"),
                index: 0,
                nodePath: "sections/0/paragraphs/0"
            });

            // Act
            return wordsApi.deleteFieldOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });

    // Test for deleting field without node path.
    describe("deleteFieldWithoutNodePath test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const localFileName = "GetField.docx";
            const remoteFileName = "TestDeleteFieldWithoutNodePath.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + fieldFolder + "/" + localFileName
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.DeleteFieldRequest({
                    name: remoteFileName,
                    index: 0,
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.deleteField(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.statusCode).to.equal(200);
                });

            });

       });
    });

    // Test for deleting paragraph fields.
    describe("deleteParagraphFields test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const localFileName = "test_multi_pages.docx";
            const remoteFileName = "TestDeleteParagraphFields.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + "Common/" + localFileName
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.DeleteFieldsRequest({
                    name: remoteFileName,
                    nodePath: "paragraphs/0",
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.deleteFields(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.statusCode).to.equal(200);
                });

            });

       });
    });

    // Test for deleting paragraph fields without node path.
    describe("deleteParagraphFieldsWithoutNodePath test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const localFileName = "test_multi_pages.docx";
            const remoteFileName = "TestDeleteParagraphFieldsWithoutNodePath.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + "Common/" + localFileName
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.DeleteFieldsRequest({
                    name: remoteFileName,
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.deleteFields(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.statusCode).to.equal(200);
                });

            });

       });
    });

    // Test for deleting section fields.
    describe("deleteSectionFields test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const localFileName = "test_multi_pages.docx";
            const remoteFileName = "TestDeleteSectionFields.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + "Common/" + localFileName
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.DeleteFieldsRequest({
                    name: remoteFileName,
                    nodePath: "sections/0",
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.deleteFields(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.statusCode).to.equal(200);
                });

            });

       });
    });

    // Test for deleting section fields without node path.
    describe("deleteSectionFieldsWithoutNodePath test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const localFileName = "test_multi_pages.docx";
            const remoteFileName = "TestDeleteSectionFieldsWithoutNodePath.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + "Common/" + localFileName
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.DeleteFieldsRequest({
                    name: remoteFileName,
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.deleteFields(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.statusCode).to.equal(200);
                });

            });

       });
    });

    // Test for deleting paragraph fields in section.
    describe("deleteSectionParagraphFields test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const localFileName = "test_multi_pages.docx";
            const remoteFileName = "TestDeleteSectionParagraphFields.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + "Common/" + localFileName
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.DeleteFieldsRequest({
                    name: remoteFileName,
                    nodePath: "sections/0/paragraphs/0",
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.deleteFields(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.statusCode).to.equal(200);
                });

            });

       });
    });

    // Test for deleting fields.
    describe("deleteDocumentFields test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const localFileName = "test_multi_pages.docx";
            const remoteFileName = "TestDeleteSectionParagraphFields.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + "Common/" + localFileName
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.DeleteFieldsRequest({
                    name: remoteFileName,
                    nodePath: "",
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.deleteFields(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.statusCode).to.equal(200);
                });

            });

       });
    });

    // Test for deleting fields online.
    describe("deleteDocumentFieldsOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const localFileName = "Common/test_multi_pages.docx";

            const request = new model.DeleteFieldsOnlineRequest({
                document: fs.createReadStream(BaseTest.localBaseTestDataFolder + localFileName),
                nodePath: ""
            });

            // Act
            return wordsApi.deleteFieldsOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });

    // Test for posting updated fields.
    describe("updateDocumentFields test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const localFileName = "test_multi_pages.docx";
            const remoteFileName = "TestUpdateDocumentFields.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + "Common/" + localFileName
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.UpdateFieldsRequest({
                    name: remoteFileName,
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.updateFields(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.document).to.exist;
                    expect(resultApi.body.document.fileName).to.equal("TestUpdateDocumentFields.docx");
                });

            });

       });
    });

    // Test for posting updated fields online.
    describe("updateDocumentFieldsOnline test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const localFile = "Common/test_multi_pages.docx";

            const request = new model.UpdateFieldsOnlineRequest({
                document: fs.createReadStream(BaseTest.localBaseTestDataFolder + localFile)
            });

            // Act
            return wordsApi.updateFieldsOnline(request)
            .then((resultApi) => {
                // Assert
                expect(resultApi.response.statusCode).to.equal(200);
            });

       });
    });
});
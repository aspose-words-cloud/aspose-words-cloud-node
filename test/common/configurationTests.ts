import "mocha";
import "mocha-sinon";
import * as sinon from "sinon";

import { getDocumentRequest } from "../../src/model/model";
import { wordsApiInitializer } from "../baseTest";

describe("configuration tests", () => {

    it("should write request to console if debugMode is setted to true", () => {

        const wordsApi = wordsApiInitializer();

        // TODO: put document to storage
        // TODO: move folder name to constants
        const request = new getDocumentRequest();
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

        const wordsApi = wordsApiInitializer();

        // TODO: put document to storage
        // TODO: move folder name to constants
        const request = new getDocumentRequest();
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

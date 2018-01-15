import "mocha";
import "mocha-sinon";
import * as sinon from "sinon";

import { getDocumentRequest } from "../../src/model/model";
import { wordsApiInitializer } from "../baseTest";

describe("oauth tests", () => {

    it("should be called refresh token if token is not valid", async function() {

        // Ignored because we use local server to test this feature (access token is expired in 1s)
        this.skip();
        this.timeout(30000);

        const wordsApi = wordsApiInitializer();
        wordsApi.configuration.baseUrl = "http://localhost:8081";
        // TODO: put document to storage
        // TODO: move folder name to constants
        const request = new getDocumentRequest();
        request.documentName = "TestGetDocument.docx";
        request.folder = "Temp/SdkTests/TestData/DocumentActions/Document";

        await wordsApi.getDocument(request);

        wordsApi.configuration.debugMode = true;
        const log = sinon.spy(console, "log");
        await wordsApi.getDocument(request).then(() => {
            log.restore();
            sinon.assert.calledWith(log, sinon.match("request").and(sinon.match("refresh_token")));
        });
    });
});

import { expect } from "chai";
import "mocha";

import { getDocumentRequest } from "../../src/model/model";
import { wordsApiInitializer } from "../baseTest";

describe("getDocument function",  () => {

  it("should return response with code 200", () => {

    const wordsApi = wordsApiInitializer();

    // TODO: put document to storage
    // TODO: move folder name to constants
    const request = new getDocumentRequest();
    request.documentName = "TestGetDocument.docx";
    request.folder = "Temp/SdkTests/TestData/DocumentActions/Document";

    return wordsApi.getDocument(request)

    .then((result) => {
      expect(result.body.code).to.equal(200);
      expect(result.response.statusCode).to.equal(200);
     });
  });
});

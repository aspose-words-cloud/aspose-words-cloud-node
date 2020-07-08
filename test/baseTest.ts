/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="baseTest.ts">
 *   Copyright (c) 2020 Aspose.Words for Cloud
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

import { createReadStream } from "fs";
import { WordsApi } from "../src/api";
import { FilesUploadResult, UploadFileRequest, WordsIncomingMessage } from "../src/model/model";
import { v4 as uuidv4 } from 'uuid';

/**
 * Initialize WordsApi
 */
export function initializeWordsApi(debugMode?: boolean) {
    const config = require("../testConfig.json");
    const wordsApi = new TestWordsApi(config.AppSid, config.AppKey, config.BaseUrl, debugMode);
    return wordsApi;
}

/**
 * Create random GUID
 */
export function createRandomGUID() {
    return uuidv4();
}

/**
 * WordsApi class with simplified file uploading
 */
export class TestWordsApi extends WordsApi {
    /**
     * @param appSID App SID.
     * @param appKey App key.
     * @param baseUrl Base api Url.
     * @param debugMode A value indicating whether debug mode. In debug mode all requests and responses are logged to console.
     */
    constructor(appSID: string, appKey: string, baseUrl?: string, debugMode?: boolean) {
        super(appSID, appKey, baseUrl, debugMode);
    }

    /**
     * Uploads file to storage.
     * @param remotePath Path in storage.
     * @param localPath Path to file
     */
    public async uploadFileToStorage(remotePath: string, localPath: string): Promise<WordsIncomingMessage<FilesUploadResult>> {

        const request = new UploadFileRequest();
        request.path = remotePath;
        request.fileContent = createReadStream(localPath);

        return super.uploadFile(request);
    }
}

export const remoteBaseFolder = "Temp/SdkTests/node/";
export const remoteBaseTestDataFolder = "Temp/SdkTests/node/TestData";
export const remoteBaseTestOutFolder = "Temp/SdkTests/node/TestOut";
export const localBaseTestDataFolder = "./TestData/";
export const localCommonTestDataFolder = "./TestData/Common/";

export const saveFormatTestCases = [
    "doc",
    "dot",
    "docx",
    "docm",
    "dotx",
    "dotm",
    "flatopc",
    "fopc",
    "rtf",
    "wml",
    "wordml",
    "odt",
    "ott",
    "txt",
    "text",
    "mhtml",
    "mht",
    "epub",
    "pdf",
    "xps",
    "swf",
    "tiff",
    "tif",
    "png",
    "jpeg",
    "jpg",
    "gif",
    "bmp",
    "svg",
    "html",
    "htmlfixed",
    "pcl",
    "md",
];

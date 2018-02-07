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

import { WordsApi } from "../src/api";

let storageApi;

/**
 * Initialize WordsApi
 */
export function initializeWordsApi(debugMode?: boolean) {
    const config = require("../servercreds.json");
    const wordsApi = new WordsApi(config.AppSid, config.AppKey, "http://api-dev.aspose.cloud", debugMode);
    return wordsApi;
}

/**
 * Initialize StorageApi
 */
export function initializeStorageApi() {
    if (!storageApi) {
        const config = require("../servercreds.json");
        const StorageApi = require("asposestoragecloud");

        storageApi = new StorageApi({ appSid: config.AppSid, apiKey: config.AppKey, baseURI: "http://api-dev.aspose.cloud/v1.1" });
    }

    return storageApi;
}

export const remoteBaseTestDataFolder = "Temp/SdkTests/node/TestData/";
export const remoteBaseTestOutFolder = "Temp/SdkTests/node/TestOut/";
export const localBaseTestDataFolder = "./testData/";
export const localCommonTestDataFolder = "./testData/common/";

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
];

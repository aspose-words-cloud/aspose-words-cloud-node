/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="testCoverage.ts">
 *   Copyright (c) 2026 Aspose.Words for Cloud
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

import "mocha";

import { fail } from "assert";
import * as fs from "fs";
import { initializeWordsApi } from "./baseTest";

const testFolder = "./test/";
const errors: string[] = [];

describe("API method coverage", () => {
    it("each api method should be covered with at least 1 test'", () => {
        const wordsApi = initializeWordsApi();
        const methods = getAllMethods(wordsApi);
        const filesWithTests = getFileList(testFolder, null).filter((p) => p.endsWith(".ts"));

        methods.forEach((method) => {
            let usageOfMethodFound = false;
            filesWithTests.forEach((file) => {
                const fileContent = fs.readFileSync(file, "utf8");
                if (fileContent.indexOf("wordsApi." + method) > 0) {
                    usageOfMethodFound = true;
                }
            });

            if (!usageOfMethodFound) {
                errors.push("\n usage of api method '" + method + "' not found");
            }
        });

        if (errors.length > 0) {
            fail(errors.toString());
        }
    });
});

const deprecatedMethods = [
    "insertWatermarkImage",
    "insertWatermarkImageOnline",
    "insertWatermarkText",
    "insertWatermarkTextOnline",
    "saveAsTiff",
    "saveAsTiffOnline",

];

const getAllMethods = (obj) => {
    let props = [];

    do {
        const l = Object.getOwnPropertyNames(obj)
            .concat(Object.getOwnPropertySymbols(obj).map((s) => s.toString()))
            .sort()
            .filter((p, i, arr) =>
                typeof obj[p] === "function" &&   // only the methods
                p !== "constructor" &&            // not the constructor
                (i === 0 || p !== arr[i - 1]) &&  // not overriding in this prototype
                props.indexOf(p) === -1 &&        // not overridden in a child
                !deprecatedMethods.includes(p) && // not deprecated
                !p.startsWith("_"));

        props = props.concat(l);
        obj = Object.getPrototypeOf(obj); // walk-up the prototype chain
    }
    while (
        Object.getPrototypeOf(obj) // not the the Object prototype methods (hasOwnProperty, etc...)
    );

    return props;
};

const getFileList = (dir, filelist) => {
    const files = fs.readdirSync(dir);
    filelist = filelist || [];
    files.forEach((file) => {
        if (fs.statSync(dir + "/" + file).isDirectory()) {
            filelist = filelist.concat(getFileList(dir + "/" + file, []));
        } else { filelist.push(dir + "/" + file); }
    });
    return filelist;
};

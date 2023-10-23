/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="splitDocumentResult.ts">
 *   Copyright (c) 2023 Aspose.Words for Cloud
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

import { AttributeInfo } from '../internal/attributeInfo';
import { ModelInterface } from './modelInterface';
import { FileLink } from './fileLink';

export const importsMapSplitDocumentResult = {
    FileLink,
};

/**
 * Result of splitting document.
 */
export class SplitDocumentResult implements ModelInterface {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "sourceDocument",
            baseName: "SourceDocument",
            type: "FileLink",
        },
        {
            name: "zippedPages",
            baseName: "ZippedPages",
            type: "FileLink",
        },
        {
            name: "pages",
            baseName: "Pages",
            type: "Array<FileLink>",
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return SplitDocumentResult.attributeTypeMap;
    }

    /**
     * Gets or sets the link to the source document.
     */
    public sourceDocument: FileLink;

    /**
     * Gets or sets the link to the file archive with pages.
     */
    public zippedPages: FileLink;

    /**
     * Gets or sets the list of pages.
     */
    public pages: Array<FileLink>;

    public constructor(init?: Partial< SplitDocumentResult >) {
        Object.assign(this, init);
    }

    public collectFilesContent(_resultFilesContent: Array<any>) {
    }

    public validate() {

        this.sourceDocument?.validate();



        this.zippedPages?.validate();



        if (this.pages !== null && this.pages !== undefined)
        {
            for (let elementPages of this.pages)
            {
                elementPages?.validate();
            }
        }

    }
}


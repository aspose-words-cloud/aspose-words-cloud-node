/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="saveResult.ts">
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

import { AttributeInfo } from '../internal/attributeInfo';
import { FileLink } from './fileLink';

export const importsMapSaveResult = {
    FileLink,
};

/**
 * Result of saving.
 */
export class SaveResult {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "additionalItems",
            baseName: "AdditionalItems",
            type: "Array<FileLink>",
        },
        {
            name: "destDocument",
            baseName: "DestDocument",
            type: "FileLink",
        },
        {
            name: "sourceDocument",
            baseName: "SourceDocument",
            type: "FileLink",
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return SaveResult.attributeTypeMap;
    }

    /**
     * Gets or sets the list of links to additional items (css, images etc).
     */
    public additionalItems: Array<FileLink>;

    /**
     * Gets or sets the link to destination document.
     */
    public destDocument: FileLink;

    /**
     * Gets or sets the link to source document.
     */
    public sourceDocument: FileLink;

    public constructor(init?: Partial< SaveResult >) {
        Object.assign(this, init);
    }
}


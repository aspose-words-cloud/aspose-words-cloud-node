/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="structuredDocumentTagListItem.ts">
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

import { AttributeInfo } from '../internal/attributeInfo';
import { ModelInterface } from './modelInterface';

export const importsMapStructuredDocumentTagListItem = {
};

/**
 * DTO container with a SdtListItem for StructuredDocumentTag.
 */
export class StructuredDocumentTagListItem implements ModelInterface {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "displayText",
            baseName: "DisplayText",
            type: "string",
        },
        {
            name: "value",
            baseName: "Value",
            type: "string",
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return StructuredDocumentTagListItem.attributeTypeMap;
    }

    /**
     * Gets or sets the text to display in the run content in place of the Aspose.Words.Markup.SdtListItem.Value attribute contents for this list item.
     * Cannot be null and cannot be an empty string.
     */
    public displayText: string;

    /**
     * Gets or sets the value of this list item.
     * Cannot be null and cannot be an empty string.
     */
    public value: string;

    public constructor(init?: Partial< StructuredDocumentTagListItem >) {
        Object.assign(this, init);
    }

    public collectFilesContent(_resultFilesContent: Array<any>) {
    }

    public validate() {
    }
}


/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="pageStatData.ts">
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
import { FootnotesStatData } from './footnotesStatData';

export const importsMapPageStatData = {
    FootnotesStatData,
};

/**
 * Container for the page's statistical data.
 */
export class PageStatData {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "footnotesStatData",
            baseName: "FootnotesStatData",
            type: "FootnotesStatData",
        },
        {
            name: "pageNumber",
            baseName: "PageNumber",
            type: "number",
        },
        {
            name: "paragraphCount",
            baseName: "ParagraphCount",
            type: "number",
        },
        {
            name: "wordCount",
            baseName: "WordCount",
            type: "number",
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return PageStatData.attributeTypeMap;
    }

    /**
     * Gets or sets the detailed statistics on the footnotes.
     */
    public footnotesStatData: FootnotesStatData;

    /**
     * Gets or sets the page number.
     */
    public pageNumber: number;

    /**
     * Gets or sets the total count of paragraphs in the page.
     */
    public paragraphCount: number;

    /**
     * Gets or sets the total count of words in the page.
     */
    public wordCount: number;

    public constructor(init?: Partial< PageStatData >) {
        Object.assign(this, init);
    }
}


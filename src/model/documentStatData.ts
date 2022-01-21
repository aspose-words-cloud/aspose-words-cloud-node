/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="documentStatData.ts">
 *   Copyright (c) 2022 Aspose.Words for Cloud
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
import { PageStatData } from './pageStatData';

export const importsMapDocumentStatData = {
    FootnotesStatData,
    PageStatData,
};

/**
 * Container for the document's statistical data.
 */
export class DocumentStatData {
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
            name: "pageCount",
            baseName: "PageCount",
            type: "number",
        },
        {
            name: "pageStatData",
            baseName: "PageStatData",
            type: "Array<PageStatData>",
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
        return DocumentStatData.attributeTypeMap;
    }

    /**
     * Gets or sets the detailed statistics on footnotes.
     */
    private _footnotesStatData: FootnotesStatData;

    /**
     * Gets or sets the detailed statistics on footnotes.
     */
    public get footnotesStatData(): FootnotesStatData {
        return this._footnotesStatData;
    }

    /**
     * Gets or sets the detailed statistics on footnotes.
     */
    public set footnotesStatData(value: FootnotesStatData) {
        this._footnotesStatData = value;
    }


    /**
     * Gets or sets the total count of pages in the document.
     */
    private _pageCount: number;

    /**
     * Gets or sets the total count of pages in the document.
     */
    public get pageCount(): number {
        return this._pageCount;
    }

    /**
     * Gets or sets the total count of pages in the document.
     */
    public set pageCount(value: number) {
        this._pageCount = value;
    }


    /**
     * Gets or sets the detailed statistics on all pages.
     */
    private _pageStatData: Array<PageStatData>;

    /**
     * Gets or sets the detailed statistics on all pages.
     */
    public get pageStatData(): Array<PageStatData> {
        return this._pageStatData;
    }

    /**
     * Gets or sets the detailed statistics on all pages.
     */
    public set pageStatData(value: Array<PageStatData>) {
        this._pageStatData = value;
    }


    /**
     * Gets or sets the total count of paragraphs in the document.
     */
    private _paragraphCount: number;

    /**
     * Gets or sets the total count of paragraphs in the document.
     */
    public get paragraphCount(): number {
        return this._paragraphCount;
    }

    /**
     * Gets or sets the total count of paragraphs in the document.
     */
    public set paragraphCount(value: number) {
        this._paragraphCount = value;
    }


    /**
     * Gets or sets the total count of words in the document.
     */
    private _wordCount: number;

    /**
     * Gets or sets the total count of words in the document.
     */
    public get wordCount(): number {
        return this._wordCount;
    }

    /**
     * Gets or sets the total count of words in the document.
     */
    public set wordCount(value: number) {
        this._wordCount = value;
    }


    public constructor(init?: Partial< DocumentStatData >) {
        Object.assign(this, init);
    }
}


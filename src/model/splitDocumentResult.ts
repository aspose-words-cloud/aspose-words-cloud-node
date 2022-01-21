/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="splitDocumentResult.ts">
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
import { FileLink } from './fileLink';

export const importsMapSplitDocumentResult = {
    FileLink,
};

/**
 * Result of splitting document.
 */
export class SplitDocumentResult {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "pages",
            baseName: "Pages",
            type: "Array<FileLink>",
        },
        {
            name: "sourceDocument",
            baseName: "SourceDocument",
            type: "FileLink",
        },
        {
            name: "zippedPages",
            baseName: "ZippedPages",
            type: "FileLink",
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return SplitDocumentResult.attributeTypeMap;
    }

    /**
     * Gets or sets the list of pages.
     */
    protected _pages: Array<FileLink>;

    /**
     * Gets or sets the list of pages.
     */
    public get pages(): Array<FileLink> {
        return this._pages;
    }

    /**
     * Gets or sets the list of pages.
     */
    public set pages(value: Array<FileLink>) {
        this._pages = value;
    }


    /**
     * Gets or sets the link to the source document.
     */
    protected _sourceDocument: FileLink;

    /**
     * Gets or sets the link to the source document.
     */
    public get sourceDocument(): FileLink {
        return this._sourceDocument;
    }

    /**
     * Gets or sets the link to the source document.
     */
    public set sourceDocument(value: FileLink) {
        this._sourceDocument = value;
    }


    /**
     * Gets or sets the link to the file archive with pages.
     */
    protected _zippedPages: FileLink;

    /**
     * Gets or sets the link to the file archive with pages.
     */
    public get zippedPages(): FileLink {
        return this._zippedPages;
    }

    /**
     * Gets or sets the link to the file archive with pages.
     */
    public set zippedPages(value: FileLink) {
        this._zippedPages = value;
    }


    public constructor(init?: Partial< SplitDocumentResult >) {
        Object.assign(this, init);
    }
}


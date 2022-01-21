/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="pageNumber.ts">
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

export const importsMapPageNumber = {
};

/**
 * Class is used for insert page number request building.
 */
export class PageNumber {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "alignment",
            baseName: "Alignment",
            type: "string",
        },
        {
            name: "format",
            baseName: "Format",
            type: "string",
        },
        {
            name: "isTop",
            baseName: "IsTop",
            type: "boolean",
        },
        {
            name: "setPageNumberOnFirstPage",
            baseName: "SetPageNumberOnFirstPage",
            type: "boolean",
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return PageNumber.attributeTypeMap;
    }

    /**
     * Gets or sets text alignment, possible values are left, right, center or justify.
     */
    protected _alignment: string;

    /**
     * Gets or sets text alignment, possible values are left, right, center or justify.
     */
    public get alignment(): string {
        return this._alignment;
    }

    /**
     * Gets or sets text alignment, possible values are left, right, center or justify.
     */
    public set alignment(value: string) {
        this._alignment = value;
    }


    /**
     * Gets or sets the page number format, e.g. "{PAGE} of {NUMPAGES}".
     */
    protected _format: string;

    /**
     * Gets or sets the page number format, e.g. "{PAGE} of {NUMPAGES}".
     */
    public get format(): string {
        return this._format;
    }

    /**
     * Gets or sets the page number format, e.g. "{PAGE} of {NUMPAGES}".
     */
    public set format(value: string) {
        this._format = value;
    }


    /**
     * Gets or sets a value indicating whether if true the page number is added at the top of the page, else at the bottom.
     */
    protected _isTop: boolean;

    /**
     * Gets or sets a value indicating whether if true the page number is added at the top of the page, else at the bottom.
     */
    public get isTop(): boolean {
        return this._isTop;
    }

    /**
     * Gets or sets a value indicating whether if true the page number is added at the top of the page, else at the bottom.
     */
    public set isTop(value: boolean) {
        this._isTop = value;
    }


    /**
     * Gets or sets a value indicating whether if true the page number is added on first page too.
     */
    protected _setPageNumberOnFirstPage: boolean;

    /**
     * Gets or sets a value indicating whether if true the page number is added on first page too.
     */
    public get setPageNumberOnFirstPage(): boolean {
        return this._setPageNumberOnFirstPage;
    }

    /**
     * Gets or sets a value indicating whether if true the page number is added on first page too.
     */
    public set setPageNumberOnFirstPage(value: boolean) {
        this._setPageNumberOnFirstPage = value;
    }


    public constructor(init?: Partial< PageNumber >) {
        Object.assign(this, init);
    }
}


/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="csvDataLoadOptions.ts">
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

export const importsMapCsvDataLoadOptions = {
};

/**
 * Represents options for parsing CSV data.
 */
export class CsvDataLoadOptions {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "commentChar",
            baseName: "CommentChar",
            type: "string",
        },
        {
            name: "delimiter",
            baseName: "Delimiter",
            type: "string",
        },
        {
            name: "hasHeaders",
            baseName: "HasHeaders",
            type: "boolean",
        },
        {
            name: "quoteChar",
            baseName: "QuoteChar",
            type: "string",
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return CsvDataLoadOptions.attributeTypeMap;
    }

    /**
     * Gets or sets the character that is used to comment lines of CSV data.
     */
    protected _commentChar: string;

    /**
     * Gets or sets the character that is used to comment lines of CSV data.
     */
    public get commentChar(): string {
        return this._commentChar;
    }

    /**
     * Gets or sets the character that is used to comment lines of CSV data.
     */
    public set commentChar(value: string) {
        this._commentChar = value;
    }


    /**
     * Gets or sets the character to be used as a column delimiter.
     */
    protected _delimiter: string;

    /**
     * Gets or sets the character to be used as a column delimiter.
     */
    public get delimiter(): string {
        return this._delimiter;
    }

    /**
     * Gets or sets the character to be used as a column delimiter.
     */
    public set delimiter(value: string) {
        this._delimiter = value;
    }


    /**
     * Gets or sets a value indicating whether the first record of CSV data contains column names.
     */
    protected _hasHeaders: boolean;

    /**
     * Gets or sets a value indicating whether the first record of CSV data contains column names.
     */
    public get hasHeaders(): boolean {
        return this._hasHeaders;
    }

    /**
     * Gets or sets a value indicating whether the first record of CSV data contains column names.
     */
    public set hasHeaders(value: boolean) {
        this._hasHeaders = value;
    }


    /**
     * Gets or sets the character that is used to quote field values.
     */
    protected _quoteChar: string;

    /**
     * Gets or sets the character that is used to quote field values.
     */
    public get quoteChar(): string {
        return this._quoteChar;
    }

    /**
     * Gets or sets the character that is used to quote field values.
     */
    public set quoteChar(value: string) {
        this._quoteChar = value;
    }


    public constructor(init?: Partial< CsvDataLoadOptions >) {
        Object.assign(this, init);
    }
}


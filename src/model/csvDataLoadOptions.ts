/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="csvDataLoadOptions.ts">
 *   Copyright (c) 2024 Aspose.Words for Cloud
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

export const importsMapCsvDataLoadOptions = {
};

/**
 * Represents options for parsing CSV data.
 * To learn more, visit the LINQ Reporting Engine documentation article.
 * An instance of this class can be passed into constructors of CsvDataSource.
 */
export class CsvDataLoadOptions implements ModelInterface {
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
     * The default value is '#' (number sign).
     */
    public commentChar: string;

    /**
     * Gets or sets the character to be used as a column delimiter.
     * The default value is ',' (comma).
     */
    public delimiter: string;

    /**
     * Gets or sets a value indicating whether the first record of CSV data contains column names.
     * The default value is false.
     */
    public hasHeaders: boolean;

    /**
     * Gets or sets the character that is used to quote field values.
     * The default value is '"' (quotation mark).Double the character to place it into quoted text.
     */
    public quoteChar: string;

    public constructor(init?: Partial< CsvDataLoadOptions >) {
        Object.assign(this, init);
    }

    public collectFilesContent(_resultFilesContent: Array<any>) {
    }

    public validate() {
        if (this.commentChar === null || this.commentChar === undefined)
        {
            throw new Error('Property CommentChar in CsvDataLoadOptions is required.');
        }
        if (this.delimiter === null || this.delimiter === undefined)
        {
            throw new Error('Property Delimiter in CsvDataLoadOptions is required.');
        }
        if (this.hasHeaders === null || this.hasHeaders === undefined)
        {
            throw new Error('Property HasHeaders in CsvDataLoadOptions is required.');
        }
        if (this.quoteChar === null || this.quoteChar === undefined)
        {
            throw new Error('Property QuoteChar in CsvDataLoadOptions is required.');
        }
    }
}


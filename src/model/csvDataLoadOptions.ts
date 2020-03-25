/*
* MIT License

* Copyright (c) 2019 Aspose Pty Ltd

* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:

* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.

* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
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
            name: "hasHeaders",
            baseName: "HasHeaders",
            type: "boolean",
        },        
        {
            name: "delimiter",
            baseName: "Delimiter",
            type: "string",
        },        
        {
            name: "quoteChar",
            baseName: "QuoteChar",
            type: "string",
        },        
        {
            name: "commentChar",
            baseName: "CommentChar",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return CsvDataLoadOptions.attributeTypeMap;
    }

    /**
     * Gets or sets a value indicating whether the first record of CSV data contains column names.
     */
    public hasHeaders: boolean;
    
    /**
     * Gets or sets the character to be used as a column delimiter.
     */
    public delimiter: string;
    
    /**
     * Gets or sets the character that is used to quote field values.
     */
    public quoteChar: string;
    
    /**
     * Gets or sets the character that is used to comment lines of CSV data.
     */
    public commentChar: string;
    
    public constructor(init?: Partial<CsvDataLoadOptions>) {
        
        Object.assign(this, init);
    }        
}

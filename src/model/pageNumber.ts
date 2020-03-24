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
            name: "format",
            baseName: "Format",
            type: "string",
        },        
        {
            name: "alignment",
            baseName: "Alignment",
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
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return PageNumber.attributeTypeMap;
    }

    /**
     * Gets or sets page number format, e.g. \"{PAGE} of {NUMPAGES}\".
     */
    public format: string;
    
    /**
     * Gets or sets text alignment, possible values are left, right, center or justify.
     */
    public alignment: string;
    
    /**
     * Gets or sets a value indicating whether if true the page number is added at the top of the page, else at the bottom.
     */
    public isTop: boolean;
    
    /**
     * Gets or sets a value indicating whether if true the page number is added on first page too.
     */
    public setPageNumberOnFirstPage: boolean;
    
    public constructor(init?: Partial<PageNumber>) {
        
        Object.assign(this, init);
    }        
}

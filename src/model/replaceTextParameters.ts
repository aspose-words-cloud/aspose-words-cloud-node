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

export const importsMapReplaceTextParameters = {
};

/**
 * Class for document replace text request building.
 */
export class ReplaceTextParameters {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "oldValue",
            baseName: "OldValue",
            type: "string",
        },        
        {
            name: "newValue",
            baseName: "NewValue",
            type: "string",
        },        
        {
            name: "isMatchCase",
            baseName: "IsMatchCase",
            type: "boolean",
        },        
        {
            name: "isMatchWholeWord",
            baseName: "IsMatchWholeWord",
            type: "boolean",
        },        
        {
            name: "isOldValueRegex",
            baseName: "IsOldValueRegex",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ReplaceTextParameters.attributeTypeMap;
    }

    /**
     * Gets or sets old text value (or regex pattern IsOldValueRegex) to replace.
     */
    public oldValue: string;
    
    /**
     * Gets or sets new text value to replace by.
     */
    public newValue: string;
    
    /**
     * Gets or sets a value indicating whether flag, true means the search is case-sensitive; false means the search is not case-sensitive.
     */
    public isMatchCase: boolean;
    
    /**
     * Gets or sets a value indicating whether flag, means that only whole word matched are replaced.
     */
    public isMatchWholeWord: boolean;
    
    /**
     * Gets or sets a value indicating whether flag, means that OldValue contains regex expression.
     */
    public isOldValueRegex: boolean;
    
    public constructor(init?: Partial<ReplaceTextParameters>) {
        
        Object.assign(this, init);
    }        
}

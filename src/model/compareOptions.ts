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

export const importsMapCompareOptions = {
};

/**
 * Container class for compare documents options.
 */
export class CompareOptions {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "ignoreCaseChanges",
            baseName: "IgnoreCaseChanges",
            type: "boolean",
        },        
        {
            name: "ignoreTables",
            baseName: "IgnoreTables",
            type: "boolean",
        },        
        {
            name: "ignoreFields",
            baseName: "IgnoreFields",
            type: "boolean",
        },        
        {
            name: "ignoreFootnotes",
            baseName: "IgnoreFootnotes",
            type: "boolean",
        },        
        {
            name: "ignoreComments",
            baseName: "IgnoreComments",
            type: "boolean",
        },        
        {
            name: "ignoreTextboxes",
            baseName: "IgnoreTextboxes",
            type: "boolean",
        },        
        {
            name: "ignoreFormatting",
            baseName: "IgnoreFormatting",
            type: "boolean",
        },        
        {
            name: "ignoreHeadersAndFooters",
            baseName: "IgnoreHeadersAndFooters",
            type: "boolean",
        },        
        {
            name: "target",
            baseName: "Target",
            type: "CompareOptions.TargetEnum",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return CompareOptions.attributeTypeMap;
    }

    /**
     * Gets or sets a value indicating whether true indicates that documents comparison is case insensitive. By default comparison is case sensitive.             
     */
    public ignoreCaseChanges: boolean;
    
    /**
     * Gets or sets a value indicating whether specifies whether to compare the differences in data contained in tables. By default tables are not ignored.             
     */
    public ignoreTables: boolean;
    
    /**
     * Gets or sets a value indicating whether specifies whether to compare differences in fields. By default fields are not ignored.             
     */
    public ignoreFields: boolean;
    
    /**
     * Gets or sets a value indicating whether specifies whether to compare differences in footnotes and endnotes. By default footnotes are not ignored.             
     */
    public ignoreFootnotes: boolean;
    
    /**
     * Gets or sets a value indicating whether specifies whether to compare differences in comments. By default comments are not ignored.             
     */
    public ignoreComments: boolean;
    
    /**
     * Gets or sets a value indicating whether specifies whether to compare differences in the data contained within text boxes. By default textboxes are not ignored.             
     */
    public ignoreTextboxes: boolean;
    
    /**
     * Gets or sets a value indicating whether true indicates that formatting is ignored. By default document formatting is not ignored.             
     */
    public ignoreFormatting: boolean;
    
    /**
     * Gets or sets a value indicating whether true indicates that headers and footers content is ignored. By default headers and footers are not ignored.             
     */
    public ignoreHeadersAndFooters: boolean;
    
    /**
     * Gets or sets specifies which document shall be used as a target during comparison.             
     */
    public target: CompareOptions.TargetEnum;
    
    public constructor(init?: Partial<CompareOptions>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Enums for CompareOptions
 */
// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace CompareOptions {
    export enum TargetEnum {
        Current = 'Current' as any,
        New = 'New' as any,
    }
}
// tslint:enable:quotemark

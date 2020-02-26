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
import { LinkElement } from './linkElement';
import { WordsApiLink } from './wordsApiLink';

export const importsMapTableRowFormat = {
    LinkElement,
    WordsApiLink,
};

/**
 * Represents all formatting for a table row.
 */
export class TableRowFormat extends LinkElement {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "allowBreakAcrossPages",
            baseName: "AllowBreakAcrossPages",
            type: "boolean",
        },        
        {
            name: "headingFormat",
            baseName: "HeadingFormat",
            type: "boolean",
        },        
        {
            name: "height",
            baseName: "Height",
            type: "number",
        },        
        {
            name: "heightRule",
            baseName: "HeightRule",
            type: "TableRowFormat.HeightRuleEnum",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TableRowFormat.attributeTypeMap);
    }

    /**
     * Gets or sets true if the text in a table row is allowed to split across a page break.
     */
    public allowBreakAcrossPages: boolean;
    
    /**
     * Gets or sets true if the row is repeated as a table heading on every page when the table spans more than one page.
     */
    public headingFormat: boolean;
    
    /**
     * Gets or sets the height of the table row in points.
     */
    public height: number;
    
    /**
     * Gets or sets the rule for determining the height of the table row.
     */
    public heightRule: TableRowFormat.HeightRuleEnum;
    
    public constructor(init?: Partial<TableRowFormat>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Enums for TableRowFormat
 */
// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace TableRowFormat {
    export enum HeightRuleEnum {
        AtLeast = 'AtLeast' as any,
        Exactly = 'Exactly' as any,
        Auto = 'Auto' as any,
    }
}
// tslint:enable:quotemark

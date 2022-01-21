/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="tableRowFormat.ts">
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
import { LinkElement } from './linkElement';

export const importsMapTableRowFormat = {
    LinkElement,
};

/**
 * DTO container with formatting for a table row.
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
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TableRowFormat.attributeTypeMap);
    }

    /**
     * Gets or sets a value indicating whether the text in a table row is allowed to split across a page break.
     */
    protected _allowBreakAcrossPages: boolean;

    /**
     * Gets or sets a value indicating whether the text in a table row is allowed to split across a page break.
     */
    public get allowBreakAcrossPages(): boolean {
        return this._allowBreakAcrossPages;
    }

    /**
     * Gets or sets a value indicating whether the text in a table row is allowed to split across a page break.
     */
    public set allowBreakAcrossPages(value: boolean) {
        this._allowBreakAcrossPages = value;
    }


    /**
     * Gets or sets a value indicating whether the row is repeated as a table heading on every page when the table spans more than one page.
     */
    protected _headingFormat: boolean;

    /**
     * Gets or sets a value indicating whether the row is repeated as a table heading on every page when the table spans more than one page.
     */
    public get headingFormat(): boolean {
        return this._headingFormat;
    }

    /**
     * Gets or sets a value indicating whether the row is repeated as a table heading on every page when the table spans more than one page.
     */
    public set headingFormat(value: boolean) {
        this._headingFormat = value;
    }


    /**
     * Gets or sets the height of the table row in points.
     */
    protected _height: number;

    /**
     * Gets or sets the height of the table row in points.
     */
    public get height(): number {
        return this._height;
    }

    /**
     * Gets or sets the height of the table row in points.
     */
    public set height(value: number) {
        this._height = value;
    }


    /**
     * Gets or sets the rule for determining the height of the table row.
     */
    protected _heightRule: TableRowFormat.HeightRuleEnum;

    /**
     * Gets or sets the rule for determining the height of the table row.
     */
    public get heightRule(): TableRowFormat.HeightRuleEnum {
        return this._heightRule;
    }

    /**
     * Gets or sets the rule for determining the height of the table row.
     */
    public set heightRule(value: TableRowFormat.HeightRuleEnum) {
        this._heightRule = value;
    }


    public constructor(init?: Partial< TableRowFormat >) {
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
        Auto = 'Auto' as any
    }
}
// tslint:enable:quotemark


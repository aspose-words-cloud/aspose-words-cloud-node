/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="styleInsert.ts">
 *   Copyright (c) 2020 Aspose.Words for Cloud
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

export const importsMapStyleInsert = {
};

/**
 * Represents a single document style to insert.
 */
export class StyleInsert {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "styleName",
            baseName: "StyleName",
            type: "string",
        },
        {
            name: "styleType",
            baseName: "StyleType",
            type: "StyleInsert.StyleTypeEnum",
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return StyleInsert.attributeTypeMap;
    }

    /**
     * Gets or sets the case sensitive name of the style to create.
     */
    public styleName: string;

    /**
     * Gets or sets the StyleType value that specifies the type of the style to create.
     */
    public styleType: StyleInsert.StyleTypeEnum;

    public constructor(init?: Partial< StyleInsert >) {
        Object.assign(this, init);
    }
}

/**
 * Enums for StyleInsert
 */
// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace StyleInsert {
    export enum StyleTypeEnum {
        Paragraph = 'Paragraph' as any,
        Character = 'Character' as any,
        Table = 'Table' as any,
        List = 'List' as any
    }
}
// tslint:enable:quotemark


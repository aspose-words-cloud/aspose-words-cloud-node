/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="preferredWidth.ts">
 *   Copyright (c) 2023 Aspose.Words for Cloud
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

export const importsMapPreferredWidth = {
};

/**
 * DTO container with a preferred width value.
 */
export class PreferredWidth implements ModelInterface {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "type",
            baseName: "Type",
            type: "PreferredWidth.TypeEnum",
        },
        {
            name: "value",
            baseName: "Value",
            type: "number",
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return PreferredWidth.attributeTypeMap;
    }

    /**
     * Gets or sets the unit of measure used for this preferred width value.
     */
    public type: PreferredWidth.TypeEnum;

    /**
     * Gets or sets the preferred width value. The unit of measure is specified in the Type property.
     */
    public value: number;

    public constructor(init?: Partial< PreferredWidth >) {
        Object.assign(this, init);
    }

    public collectFilesContent(_resultFilesContent: Array<any>) {
    }

    public validate() {
        if (this.type === null || this.type === undefined)
        {
            throw new Error('Property Type in PreferredWidth is required.');
        }

    }
}

/**
 * Enums for PreferredWidth
 */
// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace PreferredWidth {
    export enum TypeEnum {
        Auto = 'Auto' as any,
        Percent = 'Percent' as any,
        Points = 'Points' as any
    }
}
// tslint:enable:quotemark


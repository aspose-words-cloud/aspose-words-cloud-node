/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="fieldBase.ts">
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

export const importsMapFieldBase = {
};

/**
 * Field.
 */
export class FieldBase {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "fieldCode",
            baseName: "FieldCode",
            type: "string",
        },
        {
            name: "localeId",
            baseName: "LocaleId",
            type: "string",
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return FieldBase.attributeTypeMap;
    }

    /**
     * Gets or sets the field code.
     */
    private _fieldCode: string;

    /**
     * Gets or sets the field code.
     */
    public get fieldCode(): string {
        return this._fieldCode;
    }

    /**
     * Gets or sets the field code.
     */
    public set fieldCode(value: string) {
        this._fieldCode = value;
    }


    /**
     * Gets or sets the LCID of the field.
     */
    private _localeId: string;

    /**
     * Gets or sets the LCID of the field.
     */
    public get localeId(): string {
        return this._localeId;
    }

    /**
     * Gets or sets the LCID of the field.
     */
    public set localeId(value: string) {
        this._localeId = value;
    }


    public constructor(init?: Partial< FieldBase >) {
        Object.assign(this, init);
    }
}


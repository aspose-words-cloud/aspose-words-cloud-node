/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="odtSaveOptionsData.ts">
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
import { SaveOptionsData } from './saveOptionsData';

export const importsMapOdtSaveOptionsData = {
    SaveOptionsData,
};

/**
 * Container class for odt/ott save options.
 */
export class OdtSaveOptionsData extends SaveOptionsData {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "isStrictSchema11",
            baseName: "IsStrictSchema11",
            type: "boolean",
        },
        {
            name: "measureUnit",
            baseName: "MeasureUnit",
            type: "OdtSaveOptionsData.MeasureUnitEnum",
        },
        {
            name: "password",
            baseName: "Password",
            type: "string",
        },
        {
            name: "prettyFormat",
            baseName: "PrettyFormat",
            type: "boolean",
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(OdtSaveOptionsData.attributeTypeMap);
    }

    /**
     * Gets or sets a value indicating whether export should correspond to ODT specification 1.1 strictly.
     */
    protected _isStrictSchema11: boolean;

    /**
     * Gets or sets a value indicating whether export should correspond to ODT specification 1.1 strictly.
     */
    public get isStrictSchema11(): boolean {
        return this._isStrictSchema11;
    }

    /**
     * Gets or sets a value indicating whether export should correspond to ODT specification 1.1 strictly.
     */
    public set isStrictSchema11(value: boolean) {
        this._isStrictSchema11 = value;
    }


    /**
     * Gets or sets the units of measure to apply to document content. The default value is Aspose.Words.Saving.OdtSaveMeasureUnit.Centimeters.
     * Open Office uses centimeters when specifying lengths, widths and other measurable formatting and content properties in documents whereas MS Office uses inches.
     */
    protected _measureUnit: OdtSaveOptionsData.MeasureUnitEnum;

    /**
     * Gets or sets the units of measure to apply to document content. The default value is Aspose.Words.Saving.OdtSaveMeasureUnit.Centimeters.
     * Open Office uses centimeters when specifying lengths, widths and other measurable formatting and content properties in documents whereas MS Office uses inches.
     */
    public get measureUnit(): OdtSaveOptionsData.MeasureUnitEnum {
        return this._measureUnit;
    }

    /**
     * Gets or sets the units of measure to apply to document content. The default value is Aspose.Words.Saving.OdtSaveMeasureUnit.Centimeters.
     * Open Office uses centimeters when specifying lengths, widths and other measurable formatting and content properties in documents whereas MS Office uses inches.
     */
    public set measureUnit(value: OdtSaveOptionsData.MeasureUnitEnum) {
        this._measureUnit = value;
    }


    /**
     * Gets or sets the password to encrypt document.
     */
    protected _password: string;

    /**
     * Gets or sets the password to encrypt document.
     */
    public get password(): string {
        return this._password;
    }

    /**
     * Gets or sets the password to encrypt document.
     */
    public set password(value: string) {
        this._password = value;
    }


    /**
     * Gets or sets a value indicating whether to use pretty formats output.
     */
    protected _prettyFormat: boolean;

    /**
     * Gets or sets a value indicating whether to use pretty formats output.
     */
    public get prettyFormat(): boolean {
        return this._prettyFormat;
    }

    /**
     * Gets or sets a value indicating whether to use pretty formats output.
     */
    public set prettyFormat(value: boolean) {
        this._prettyFormat = value;
    }


    public constructor(init?: Partial< OdtSaveOptionsData >) {
        super(init);
        this._saveFormat = 'odt';

        Object.assign(this, init);
    }
}

/**
 * Enums for OdtSaveOptionsData
 */
// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace OdtSaveOptionsData {
    export enum MeasureUnitEnum {
        Centimeters = 'Centimeters' as any,
        Inches = 'Inches' as any
    }
}
// tslint:enable:quotemark


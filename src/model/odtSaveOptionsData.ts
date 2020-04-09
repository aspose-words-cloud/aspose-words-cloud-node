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
import { SaveOptionsData } from './saveOptionsData';

export const importsMapOdtSaveOptionsData = {
    SaveOptionsData,
};

/**
 * container class for odt/ott save options.
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
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(OdtSaveOptionsData.attributeTypeMap);
    }

    /**
     * Gets or sets specifies whether export should correspond to ODT specification 1.1 strictly.
     */
    public isStrictSchema11: boolean;
    
    /**
     * Gets or sets allows to specify units of measure to apply to document content. The default value is Aspose.Words.Saving.OdtSaveMeasureUnit.Centimeters.  Open Office uses centimeters when specifying lengths, widths and other measurable formatting and content properties in documents whereas MS Office uses inches.
     */
    public measureUnit: OdtSaveOptionsData.MeasureUnitEnum;
    
    /**
     * Gets or sets a password to encrypt document.
     */
    public password: string;
    
    /**
     * Gets or sets specifies whether or not use pretty formats output.
     */
    public prettyFormat: boolean;
    
    public constructor(init?: Partial<OdtSaveOptionsData>) {
        super(init);
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
        Inches = 'Inches' as any,
    }
}
// tslint:enable:quotemark

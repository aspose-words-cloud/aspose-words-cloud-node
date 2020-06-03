/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="ooxmlSaveOptionsData.ts">
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
import { SaveOptionsData } from './saveOptionsData';

export const importsMapOoxmlSaveOptionsData = {
    SaveOptionsData,
};

/**
 * container class for docx/docm/dotx/dotm/flatopc save options.
 */
export class OoxmlSaveOptionsData extends SaveOptionsData {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "compliance",
            baseName: "Compliance",
            type: "string",
        },
        {
            name: "compressionLevel",
            baseName: "CompressionLevel",
            type: "OoxmlSaveOptionsData.CompressionLevelEnum",
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
        return super.getAttributeTypeMap().concat(OoxmlSaveOptionsData.attributeTypeMap);
    }

    /**
     * Gets or sets specifies the OOXML version for the output document.
     */
    public compliance: string;

    /**
     * Gets or sets compression level.
     */
    public compressionLevel: OoxmlSaveOptionsData.CompressionLevelEnum;

    /**
     * Gets or sets specifies a password to encrypt document using ECMA376 Standard encryption algorithm.
     */
    public password: string;

    /**
     * Gets or sets specifies whether or not use pretty formats output.
     */
    public prettyFormat: boolean;

    public constructor(init?: Partial< OoxmlSaveOptionsData >) {
        super(init);
        Object.assign(this, init);
    }
}

/**
 * Enums for OoxmlSaveOptionsData
 */
// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace OoxmlSaveOptionsData {
    export enum CompressionLevelEnum {
        Normal = 'Normal' as any,
        Maximum = 'Maximum' as any,
        Fast = 'Fast' as any,
        SuperFast = 'SuperFast' as any
    }
}
// tslint:enable:quotemark


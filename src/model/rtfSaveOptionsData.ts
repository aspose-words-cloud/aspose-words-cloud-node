/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="rtfSaveOptionsData.ts">
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

export const importsMapRtfSaveOptionsData = {
    SaveOptionsData,
};

/**
 * container class for rtf save options.
 */
export class RtfSaveOptionsData extends SaveOptionsData {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "exportCompactSize",
            baseName: "ExportCompactSize",
            type: "boolean",
        },
        {
            name: "exportImagesForOldReaders",
            baseName: "ExportImagesForOldReaders",
            type: "boolean",
        },
        {
            name: "prettyFormat",
            baseName: "PrettyFormat",
            type: "boolean",
        },
        {
            name: "saveImagesAsWmf",
            baseName: "SaveImagesAsWmf",
            type: "boolean",
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(RtfSaveOptionsData.attributeTypeMap);
    }

    /**
     * Gets or sets allows to make output RTF documents smaller in size, but if they contain RTL (right-to-left) text, it will not be displayed correctly.
     */
    public exportCompactSize: boolean;

    /**
     * Gets or sets specifies whether the keywords for "old readers" are written to RTF or not.
     */
    public exportImagesForOldReaders: boolean;

    /**
     * Gets or sets specifies whether or not use pretty formats output.
     */
    public prettyFormat: boolean;

    /**
     * Gets or sets a value indicating whether when true all images will be saved as WMF. This option might help to avoid WordPad warning messages.
     */
    public saveImagesAsWmf: boolean;

    public constructor(init?: Partial< RtfSaveOptionsData >) {
        super(init);
        Object.assign(this, init);
    }
}


/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="txtSaveOptionsBaseData.ts">
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

export const importsMapTxtSaveOptionsBaseData = {
    SaveOptionsData,
};

/**
 * Base class for save options of text formats.
 */
export class TxtSaveOptionsBaseData extends SaveOptionsData {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "encoding",
            baseName: "Encoding",
            type: "string",
        },
        {
            name: "exportHeadersFootersMode",
            baseName: "ExportHeadersFootersMode",
            type: "TxtSaveOptionsBaseData.ExportHeadersFootersModeEnum",
        },
        {
            name: "forcePageBreaks",
            baseName: "ForcePageBreaks",
            type: "boolean",
        },
        {
            name: "paragraphBreak",
            baseName: "ParagraphBreak",
            type: "string",
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TxtSaveOptionsBaseData.attributeTypeMap);
    }

    /**
     * Gets or sets specifies the encoding to use when exporting in plain text format.
     */
    public encoding: string;

    /**
     * Gets or sets specifies whether to output headers and footers when exporting in plain text format.
     * default value is TxtExportHeadersFootersMode.PrimaryOnly.
     */
    public exportHeadersFootersMode: TxtSaveOptionsBaseData.ExportHeadersFootersModeEnum;

    /**
     * Gets or sets allows to specify whether the page breaks should be preserved during export.
     * The default value is false.
     */
    public forcePageBreaks: boolean;

    /**
     * Gets or sets specifies the string to use as a paragraph break when exporting in plain text format.
     */
    public paragraphBreak: string;

    public constructor(init?: Partial< TxtSaveOptionsBaseData >) {
        super(init);
        Object.assign(this, init);
    }
}

/**
 * Enums for TxtSaveOptionsBaseData
 */
// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace TxtSaveOptionsBaseData {
    export enum ExportHeadersFootersModeEnum {
        None = 'None' as any,
        PrimaryOnly = 'PrimaryOnly' as any,
        AllAtEnd = 'AllAtEnd' as any
    }
}
// tslint:enable:quotemark


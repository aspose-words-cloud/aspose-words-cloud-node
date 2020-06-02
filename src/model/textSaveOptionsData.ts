/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="textSaveOptionsData.ts">
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

export const importsMapTextSaveOptionsData = {
    SaveOptionsData,
};

/**
 * Container class for text save options.
 */
export class TextSaveOptionsData extends SaveOptionsData {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "addBidiMarks",
            baseName: "AddBidiMarks",
            type: "boolean",
        },
        {
            name: "encoding",
            baseName: "Encoding",
            type: "string",
        },
        {
            name: "exportHeadersFootersMode",
            baseName: "ExportHeadersFootersMode",
            type: "TextSaveOptionsData.ExportHeadersFootersModeEnum",
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
        },
        {
            name: "preserveTableLayout",
            baseName: "PreserveTableLayout",
            type: "boolean",
        },
        {
            name: "simplifyListLabels",
            baseName: "SimplifyListLabels",
            type: "boolean",
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TextSaveOptionsData.attributeTypeMap);
    }

    /**
     * Gets or sets specifies whether to add bi-directional marks before each BiDi run when exporting in plain text format.
     * The default value is true.
     */
    public addBidiMarks: boolean;

    /**
     * Gets or sets specifies the encoding to use when exporting in plain text format.
     */
    public encoding: string;

    /**
     * Gets or sets specifies whether to output headers and footers when exporting in plain text format.
     * default value is TxtExportHeadersFootersMode.PrimaryOnly.
     */
    public exportHeadersFootersMode: TextSaveOptionsData.ExportHeadersFootersModeEnum;

    /**
     * Gets or sets allows to specify whether the page breaks should be preserved during export.
     * The default value is false.
     */
    public forcePageBreaks: boolean;

    /**
     * Gets or sets specifies the string to use as a paragraph break when exporting in plain text format.
     */
    public paragraphBreak: string;

    /**
     * Gets or sets specifies whether the program should attempt to preserve layout of tables when saving in the plain text format.
     */
    public preserveTableLayout: boolean;

    /**
     * Gets or sets specifies whether the program should simplify list labels in case of complex label formatting not being adequately represented by plain text.
     */
    public simplifyListLabels: boolean;

    public constructor(init?: Partial< TextSaveOptionsData >) {
        super(init);
        Object.assign(this, init);
    }
}

/**
 * Enums for TextSaveOptionsData
 */
// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace TextSaveOptionsData {
    export enum ExportHeadersFootersModeEnum {
        None = 'None' as any,
        PrimaryOnly = 'PrimaryOnly' as any,
        AllAtEnd = 'AllAtEnd' as any
    }
}
// tslint:enable:quotemark


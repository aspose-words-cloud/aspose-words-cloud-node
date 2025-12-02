/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="textSaveOptionsData.ts">
 *   Copyright (c) 2025 Aspose.Words for Cloud
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
import { TxtSaveOptionsBaseData } from './txtSaveOptionsBaseData';

export const importsMapTextSaveOptionsData = {
    TxtSaveOptionsBaseData,
};

/**
 * Container class for text save options.
 */
export class TextSaveOptionsData extends TxtSaveOptionsBaseData {
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
            name: "maxCharactersPerLine",
            baseName: "MaxCharactersPerLine",
            type: "number",
        },
        {
            name: "officeMathExportMode",
            baseName: "OfficeMathExportMode",
            type: "TextSaveOptionsData.OfficeMathExportModeEnum",
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
     * Gets or sets a value indicating whether to add bi-directional marks before each BiDi run when exporting in plain text format.
     * The default value is true.
     */
    public addBidiMarks: boolean;

    /**
     * Gets or sets an integer value that specifies the maximum number of characters per one line.
     * The default value is 0, that means no limit.
     */
    public maxCharactersPerLine: number;

    /**
     * Gets or sets a value that specifies how OfficeMath will be written to the output file.
     * The default value is Text.
     */
    public officeMathExportMode: TextSaveOptionsData.OfficeMathExportModeEnum;

    /**
     * Gets or sets a value indicating whether the program should attempt to preserve layout of tables when saving in the plain text format.
     */
    public preserveTableLayout: boolean;

    /**
     * Gets or sets a value indicating whether the program should simplify list labels in case of complex label formatting not being adequately represented by plain text.
     */
    public simplifyListLabels: boolean;

    public constructor(init?: Partial< TextSaveOptionsData >) {
        super(init);
        this.saveFormat = 'txt';

        Object.assign(this, init);
    }

    public collectFilesContent(_resultFilesContent: Array<any>) {
    }

    public validate() {
        super.validate();
        if (this.maxCharactersPerLine === null || this.maxCharactersPerLine === undefined)
        {
            throw new Error('Property MaxCharactersPerLine in TextSaveOptionsData is required.');
        }
    }
}

/**
 * Enums for TextSaveOptionsData
 */
// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace TextSaveOptionsData {
    export enum OfficeMathExportModeEnum {
        Text = 'Text' as any,
        Latex = 'Latex' as any
    }
}
// tslint:enable:quotemark


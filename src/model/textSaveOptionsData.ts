/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="textSaveOptionsData.ts">
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
    protected _addBidiMarks: boolean;

    /**
     * Gets or sets a value indicating whether to add bi-directional marks before each BiDi run when exporting in plain text format.
     * The default value is true.
     */
    public get addBidiMarks(): boolean {
        return this._addBidiMarks;
    }

    /**
     * Gets or sets a value indicating whether to add bi-directional marks before each BiDi run when exporting in plain text format.
     * The default value is true.
     */
    public set addBidiMarks(value: boolean) {
        this._addBidiMarks = value;
    }


    /**
     * Gets or sets an integer value that specifies the maximum number of characters per one line.
     * The default value is 0, that means no limit.
     */
    protected _maxCharactersPerLine: number;

    /**
     * Gets or sets an integer value that specifies the maximum number of characters per one line.
     * The default value is 0, that means no limit.
     */
    public get maxCharactersPerLine(): number {
        return this._maxCharactersPerLine;
    }

    /**
     * Gets or sets an integer value that specifies the maximum number of characters per one line.
     * The default value is 0, that means no limit.
     */
    public set maxCharactersPerLine(value: number) {
        this._maxCharactersPerLine = value;
    }


    /**
     * Gets or sets a value indicating whether the program should attempt to preserve layout of tables when saving in the plain text format.
     */
    protected _preserveTableLayout: boolean;

    /**
     * Gets or sets a value indicating whether the program should attempt to preserve layout of tables when saving in the plain text format.
     */
    public get preserveTableLayout(): boolean {
        return this._preserveTableLayout;
    }

    /**
     * Gets or sets a value indicating whether the program should attempt to preserve layout of tables when saving in the plain text format.
     */
    public set preserveTableLayout(value: boolean) {
        this._preserveTableLayout = value;
    }


    /**
     * Gets or sets a value indicating whether the program should simplify list labels in case of complex label formatting not being adequately represented by plain text.
     */
    protected _simplifyListLabels: boolean;

    /**
     * Gets or sets a value indicating whether the program should simplify list labels in case of complex label formatting not being adequately represented by plain text.
     */
    public get simplifyListLabels(): boolean {
        return this._simplifyListLabels;
    }

    /**
     * Gets or sets a value indicating whether the program should simplify list labels in case of complex label formatting not being adequately represented by plain text.
     */
    public set simplifyListLabels(value: boolean) {
        this._simplifyListLabels = value;
    }


    public constructor(init?: Partial< TextSaveOptionsData >) {
        super(init);
        this._saveFormat = 'txt';

        Object.assign(this, init);
    }
}


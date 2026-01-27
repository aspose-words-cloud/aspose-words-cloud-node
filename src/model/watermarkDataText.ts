/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="watermarkDataText.ts">
 *   Copyright (c) 2026 Aspose.Words for Cloud
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
import { WatermarkDataBase } from './watermarkDataBase';
import { XmlColor } from './xmlColor';

export const importsMapWatermarkDataText = {
    WatermarkDataBase,
    XmlColor,
};

/**
 * Class for insert watermark text request building.
 */
export class WatermarkDataText extends WatermarkDataBase {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "color",
            baseName: "Color",
            type: "XmlColor",
        },
        {
            name: "fontFamily",
            baseName: "FontFamily",
            type: "string",
        },
        {
            name: "fontSize",
            baseName: "FontSize",
            type: "number",
        },
        {
            name: "isSemitrasparent",
            baseName: "IsSemitrasparent",
            type: "boolean",
        },
        {
            name: "layout",
            baseName: "Layout",
            type: "WatermarkDataText.LayoutEnum",
        },
        {
            name: "text",
            baseName: "Text",
            type: "string",
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WatermarkDataText.attributeTypeMap);
    }

    /**
     * Gets or sets font color. The default value is System.Drawing.Color.Silver.
     */
    public color: XmlColor;

    /**
     * Gets or sets font family name. The default value is "Calibri".
     */
    public fontFamily: string;

    /**
     * Gets or sets a font size. The default value is 0 - auto.
     * Valid values range from 0 to 65.5 inclusive. Auto font size means that the watermark will be scaled to its max width and max height relative to the page margins.
     */
    public fontSize: number;

    /**
     * Gets or sets a boolean value which is responsible for opacity of the watermark. The default value is true.
     */
    public isSemitrasparent: boolean;

    /**
     * Gets or sets layout of the watermark. The default value is Aspose.Words.WatermarkLayout.Diagonal.
     */
    public layout: WatermarkDataText.LayoutEnum;

    /**
     * Gets or sets the watermark text.
     */
    public text: string;

    public constructor(init?: Partial< WatermarkDataText >) {
        super(init);
        Object.assign(this, init);
    }

    public collectFilesContent(_resultFilesContent: Array<any>) {
    }

    public validate() {
        super.validate();
        if (this.text === null || this.text === undefined)
        {
            throw new Error('Property Text in WatermarkDataText is required.');
        }

        this.color?.validate();






    }
}

/**
 * Enums for WatermarkDataText
 */
// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace WatermarkDataText {
    export enum LayoutEnum {
        Horizontal = 'Horizontal' as any,
        Diagonal = 'Diagonal' as any
    }
}
// tslint:enable:quotemark


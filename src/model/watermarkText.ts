/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="watermarkText.ts">
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

export const importsMapWatermarkText = {
};

/**
 * Class for insert watermark text request building.
 */
export class WatermarkText {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "rotationAngle",
            baseName: "RotationAngle",
            type: "number",
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
        return WatermarkText.attributeTypeMap;
    }

    /**
     * Gets or sets the watermark rotation angle.
     */
    protected _rotationAngle: number;

    /**
     * Gets or sets the watermark rotation angle.
     */
    public get rotationAngle(): number {
        return this._rotationAngle;
    }

    /**
     * Gets or sets the watermark rotation angle.
     */
    public set rotationAngle(value: number) {
        this._rotationAngle = value;
    }


    /**
     * Gets or sets the watermark text.
     */
    protected _text: string;

    /**
     * Gets or sets the watermark text.
     */
    public get text(): string {
        return this._text;
    }

    /**
     * Gets or sets the watermark text.
     */
    public set text(value: string) {
        this._text = value;
    }


    public constructor(init?: Partial< WatermarkText >) {
        Object.assign(this, init);
    }
}


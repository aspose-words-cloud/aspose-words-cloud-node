/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="fontInfo.ts">
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

export const importsMapFontInfo = {
};

/**
 * Font info.
 */
export class FontInfo {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "filePath",
            baseName: "FilePath",
            type: "string",
        },
        {
            name: "fontFamilyName",
            baseName: "FontFamilyName",
            type: "string",
        },
        {
            name: "fullFontName",
            baseName: "FullFontName",
            type: "string",
        },
        {
            name: "version",
            baseName: "Version",
            type: "string",
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return FontInfo.attributeTypeMap;
    }

    /**
     * Gets or sets path to the font file if any.
     */
    public filePath: string;

    /**
     * Gets or sets family name of the font.
     */
    public fontFamilyName: string;

    /**
     * Gets or sets full name of the font.
     */
    public fullFontName: string;

    /**
     * Gets or sets version string of the font.
     */
    public version: string;

    public constructor(init?: Partial< FontInfo >) {
        Object.assign(this, init);
    }
}


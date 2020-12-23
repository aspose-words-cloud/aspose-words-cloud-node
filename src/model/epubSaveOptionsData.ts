/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="epubSaveOptionsData.ts">
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
import { HtmlSaveOptionsData } from './htmlSaveOptionsData';

export const importsMapEpubSaveOptionsData = {
    HtmlSaveOptionsData,
};

/**
 * Container class for epub save options.
 */
export class EpubSaveOptionsData extends HtmlSaveOptionsData {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "epubNavigationMapLevel",
            baseName: "EpubNavigationMapLevel",
            type: "number",
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(EpubSaveOptionsData.attributeTypeMap);
    }

    /**
     * Gets or sets the maximum level of headings populated to the navigation map when exporting.
     */
    public epubNavigationMapLevel: number;

    public constructor(init?: Partial< EpubSaveOptionsData >) {
        super(init);
        Object.assign(this, init);
    }
}


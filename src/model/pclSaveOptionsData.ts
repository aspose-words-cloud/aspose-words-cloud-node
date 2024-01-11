/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="pclSaveOptionsData.ts">
 *   Copyright (c) 2024 Aspose.Words for Cloud
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
import { FixedPageSaveOptionsData } from './fixedPageSaveOptionsData';

export const importsMapPclSaveOptionsData = {
    FixedPageSaveOptionsData,
};

/**
 * Container class for pcl save options.
 */
export class PclSaveOptionsData extends FixedPageSaveOptionsData {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "falllbackFontName",
            baseName: "FalllbackFontName",
            type: "string",
        },
        {
            name: "rasterizeTransformedElements",
            baseName: "RasterizeTransformedElements",
            type: "boolean",
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PclSaveOptionsData.attributeTypeMap);
    }

    /**
     * Gets or sets the font name, that will be used if no expected font is found in printer and built-in fonts collections.
     * If no fallback is found, "Arial" font is used.
     */
    public falllbackFontName: string;

    /**
     * Gets or sets a value indicating whether complex transformed elements should be rasterized before saving to PCL document.. The default value is true.
     * PCL doesn't support some kind of transformations that are used by Aspose Words.  E.g. rotated, skewed images and texture brushes. To properly render such elements rasterization process is used, i.e. saving to image and clipping.  This process can take additional time and memory.  If flag is set to false, some content in output may be different as compared with the source document.
     */
    public rasterizeTransformedElements: boolean;

    public constructor(init?: Partial< PclSaveOptionsData >) {
        super(init);
        this.saveFormat = 'pcl';

        Object.assign(this, init);
    }

    public collectFilesContent(_resultFilesContent: Array<any>) {
    }

    public validate() {
        super.validate();
    }
}


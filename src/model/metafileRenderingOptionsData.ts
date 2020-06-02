/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="metafileRenderingOptionsData.ts">
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

export const importsMapMetafileRenderingOptionsData = {
};

/**
 * container class for options of metafile rendering.
 */
export class MetafileRenderingOptionsData {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "emfPlusDualRenderingMode",
            baseName: "EmfPlusDualRenderingMode",
            type: "string",
        },
        {
            name: "emulateRasterOperations",
            baseName: "EmulateRasterOperations",
            type: "boolean",
        },
        {
            name: "renderingMode",
            baseName: "RenderingMode",
            type: "string",
        },
        {
            name: "scaleWmfFontsToMetafileSize",
            baseName: "ScaleWmfFontsToMetafileSize",
            type: "boolean",
        },
        {
            name: "useEmfEmbeddedToWmf",
            baseName: "UseEmfEmbeddedToWmf",
            type: "boolean",
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return MetafileRenderingOptionsData.attributeTypeMap;
    }

    /**
     * Gets or sets determines how EMF+ Dual metafiles should be rendered.
     */
    public emfPlusDualRenderingMode: string;

    /**
     * Gets or sets a value determining whether or not the raster operations should be emulated.
     */
    public emulateRasterOperations: boolean;

    /**
     * Gets or sets determines how metafile images should be rendered.
     */
    public renderingMode: string;

    /**
     * Gets or sets a value determining whether or not to scale fonts in WMF metafile according to metafile size on the page.
     * The default value is true.
     */
    public scaleWmfFontsToMetafileSize: boolean;

    /**
     * Gets or sets determines how WMF metafiles with embedded EMF metafiles should be rendered.
     */
    public useEmfEmbeddedToWmf: boolean;

    public constructor(init?: Partial< MetafileRenderingOptionsData >) {
        Object.assign(this, init);
    }
}


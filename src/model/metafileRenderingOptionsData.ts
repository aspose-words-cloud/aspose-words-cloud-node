/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="metafileRenderingOptionsData.ts">
 *   Copyright (c) 2023 Aspose.Words for Cloud
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

export const importsMapMetafileRenderingOptionsData = {
};

/**
 * Container class for options of metafile rendering.
 */
export class MetafileRenderingOptionsData implements ModelInterface {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "emfPlusDualRenderingMode",
            baseName: "EmfPlusDualRenderingMode",
            type: "MetafileRenderingOptionsData.EmfPlusDualRenderingModeEnum",
        },
        {
            name: "emulateRasterOperations",
            baseName: "EmulateRasterOperations",
            type: "boolean",
        },
        {
            name: "emulateRenderingToSizeOnPage",
            baseName: "EmulateRenderingToSizeOnPage",
            type: "boolean",
        },
        {
            name: "renderingMode",
            baseName: "RenderingMode",
            type: "MetafileRenderingOptionsData.RenderingModeEnum",
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
     * Gets or sets the option that controls how EMF+ Dual metafiles should be rendered.
     */
    public emfPlusDualRenderingMode: MetafileRenderingOptionsData.EmfPlusDualRenderingModeEnum;

    /**
     * Gets or sets a value indicating whether the raster operations should be emulated.
     */
    public emulateRasterOperations: boolean;

    /**
     * Gets or sets a value determining whether metafile rendering emulates the display of the metafile according to the size on page
     * or the display of the metafile in its default size.
     */
    public emulateRenderingToSizeOnPage: boolean;

    /**
     * Gets or sets the option that controls how metafile images should be rendered.
     */
    public renderingMode: MetafileRenderingOptionsData.RenderingModeEnum;

    /**
     * Gets or sets the flag, that controls how WMF metafiles with embedded EMF metafiles should be rendered.
     */
    public useEmfEmbeddedToWmf: boolean;

    public constructor(init?: Partial< MetafileRenderingOptionsData >) {
        Object.assign(this, init);
    }

    public collectFilesContent(_resultFilesContent: Array<any>) {
    }
}

/**
 * Enums for MetafileRenderingOptionsData
 */
// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace MetafileRenderingOptionsData {
    export enum EmfPlusDualRenderingModeEnum {
        EmfPlusWithFallback = 'EmfPlusWithFallback' as any,
        EmfPlus = 'EmfPlus' as any,
        Emf = 'Emf' as any
    }

    export enum RenderingModeEnum {
        VectorWithFallback = 'VectorWithFallback' as any,
        Vector = 'Vector' as any,
        Bitmap = 'Bitmap' as any
    }
}
// tslint:enable:quotemark


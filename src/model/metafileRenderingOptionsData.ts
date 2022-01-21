/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="metafileRenderingOptionsData.ts">
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

export const importsMapMetafileRenderingOptionsData = {
};

/**
 * Container class for options of metafile rendering.
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
     * Gets or sets the option that controls how EMF+ Dual metafiles should be rendered.
     */
    protected _emfPlusDualRenderingMode: string;

    /**
     * Gets or sets the option that controls how EMF+ Dual metafiles should be rendered.
     */
    public get emfPlusDualRenderingMode(): string {
        return this._emfPlusDualRenderingMode;
    }

    /**
     * Gets or sets the option that controls how EMF+ Dual metafiles should be rendered.
     */
    public set emfPlusDualRenderingMode(value: string) {
        this._emfPlusDualRenderingMode = value;
    }


    /**
     * Gets or sets a value indicating whether the raster operations should be emulated.
     */
    protected _emulateRasterOperations: boolean;

    /**
     * Gets or sets a value indicating whether the raster operations should be emulated.
     */
    public get emulateRasterOperations(): boolean {
        return this._emulateRasterOperations;
    }

    /**
     * Gets or sets a value indicating whether the raster operations should be emulated.
     */
    public set emulateRasterOperations(value: boolean) {
        this._emulateRasterOperations = value;
    }


    /**
     * Gets or sets the option that controls how metafile images should be rendered.
     */
    protected _renderingMode: string;

    /**
     * Gets or sets the option that controls how metafile images should be rendered.
     */
    public get renderingMode(): string {
        return this._renderingMode;
    }

    /**
     * Gets or sets the option that controls how metafile images should be rendered.
     */
    public set renderingMode(value: string) {
        this._renderingMode = value;
    }


    /**
     * Gets or sets a value indicating whether to scale fonts in WMF metafile according to metafile size on the page.
     * The default value is true.
     */
    protected _scaleWmfFontsToMetafileSize: boolean;

    /**
     * Gets or sets a value indicating whether to scale fonts in WMF metafile according to metafile size on the page.
     * The default value is true.
     */
    public get scaleWmfFontsToMetafileSize(): boolean {
        return this._scaleWmfFontsToMetafileSize;
    }

    /**
     * Gets or sets a value indicating whether to scale fonts in WMF metafile according to metafile size on the page.
     * The default value is true.
     */
    public set scaleWmfFontsToMetafileSize(value: boolean) {
        this._scaleWmfFontsToMetafileSize = value;
    }


    /**
     * Gets or sets the flag, that controls how WMF metafiles with embedded EMF metafiles should be rendered.
     */
    protected _useEmfEmbeddedToWmf: boolean;

    /**
     * Gets or sets the flag, that controls how WMF metafiles with embedded EMF metafiles should be rendered.
     */
    public get useEmfEmbeddedToWmf(): boolean {
        return this._useEmfEmbeddedToWmf;
    }

    /**
     * Gets or sets the flag, that controls how WMF metafiles with embedded EMF metafiles should be rendered.
     */
    public set useEmfEmbeddedToWmf(value: boolean) {
        this._useEmfEmbeddedToWmf = value;
    }


    public constructor(init?: Partial< MetafileRenderingOptionsData >) {
        Object.assign(this, init);
    }
}


/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="imageSaveOptionsData.ts">
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
import { FixedPageSaveOptionsData } from './fixedPageSaveOptionsData';

export const importsMapImageSaveOptionsData = {
    FixedPageSaveOptionsData,
};

/**
 * Container abstract class for image save options.
 */
export class ImageSaveOptionsData extends FixedPageSaveOptionsData {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "horizontalResolution",
            baseName: "HorizontalResolution",
            type: "number",
        },
        {
            name: "imageBrightness",
            baseName: "ImageBrightness",
            type: "number",
        },
        {
            name: "imageColorMode",
            baseName: "ImageColorMode",
            type: "string",
        },
        {
            name: "imageContrast",
            baseName: "ImageContrast",
            type: "number",
        },
        {
            name: "paperColor",
            baseName: "PaperColor",
            type: "string",
        },
        {
            name: "pixelFormat",
            baseName: "PixelFormat",
            type: "string",
        },
        {
            name: "resolution",
            baseName: "Resolution",
            type: "number",
        },
        {
            name: "scale",
            baseName: "Scale",
            type: "number",
        },
        {
            name: "useAntiAliasing",
            baseName: "UseAntiAliasing",
            type: "boolean",
        },
        {
            name: "useGdiEmfRenderer",
            baseName: "UseGdiEmfRenderer",
            type: "boolean",
        },
        {
            name: "useHighQualityRendering",
            baseName: "UseHighQualityRendering",
            type: "boolean",
        },
        {
            name: "verticalResolution",
            baseName: "VerticalResolution",
            type: "number",
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ImageSaveOptionsData.attributeTypeMap);
    }

    /**
     * Gets or sets the horizontal resolution in dots per inch for the generated images.
     * This property has effect only when saving to raster image formats.
     * The default value is 96.
     */
    private _horizontalResolution: number;

    /**
     * Gets or sets the horizontal resolution in dots per inch for the generated images.
     * This property has effect only when saving to raster image formats.
     * The default value is 96.
     */
    public get horizontalResolution(): number {
        return this._horizontalResolution;
    }

    /**
     * Gets or sets the horizontal resolution in dots per inch for the generated images.
     * This property has effect only when saving to raster image formats.
     * The default value is 96.
     */
    public set horizontalResolution(value: number) {
        this._horizontalResolution = value;
    }


    /**
     * Gets or sets the brightness level of the image.
     */
    private _imageBrightness: number;

    /**
     * Gets or sets the brightness level of the image.
     */
    public get imageBrightness(): number {
        return this._imageBrightness;
    }

    /**
     * Gets or sets the brightness level of the image.
     */
    public set imageBrightness(value: number) {
        this._imageBrightness = value;
    }


    /**
     * Gets or sets the color mode of the image.
     */
    private _imageColorMode: string;

    /**
     * Gets or sets the color mode of the image.
     */
    public get imageColorMode(): string {
        return this._imageColorMode;
    }

    /**
     * Gets or sets the color mode of the image.
     */
    public set imageColorMode(value: string) {
        this._imageColorMode = value;
    }


    /**
     * Gets or sets the contrast level of the image.
     */
    private _imageContrast: number;

    /**
     * Gets or sets the contrast level of the image.
     */
    public get imageContrast(): number {
        return this._imageContrast;
    }

    /**
     * Gets or sets the contrast level of the image.
     */
    public set imageContrast(value: number) {
        this._imageContrast = value;
    }


    /**
     * Gets or sets the background (paper) color of the image.
     */
    private _paperColor: string;

    /**
     * Gets or sets the background (paper) color of the image.
     */
    public get paperColor(): string {
        return this._paperColor;
    }

    /**
     * Gets or sets the background (paper) color of the image.
     */
    public set paperColor(value: string) {
        this._paperColor = value;
    }


    /**
     * Gets or sets the pixel format of the image.
     */
    private _pixelFormat: string;

    /**
     * Gets or sets the pixel format of the image.
     */
    public get pixelFormat(): string {
        return this._pixelFormat;
    }

    /**
     * Gets or sets the pixel format of the image.
     */
    public set pixelFormat(value: string) {
        this._pixelFormat = value;
    }


    /**
     * Gets or sets both horizontal and vertical resolution in dots per inch for the generated images.
     * This property has effect only when saving to raster image formats.
     * The default value is 96.
     */
    private _resolution: number;

    /**
     * Gets or sets both horizontal and vertical resolution in dots per inch for the generated images.
     * This property has effect only when saving to raster image formats.
     * The default value is 96.
     */
    public get resolution(): number {
        return this._resolution;
    }

    /**
     * Gets or sets both horizontal and vertical resolution in dots per inch for the generated images.
     * This property has effect only when saving to raster image formats.
     * The default value is 96.
     */
    public set resolution(value: number) {
        this._resolution = value;
    }


    /**
     * Gets or sets the zoom factor of the image.
     */
    private _scale: number;

    /**
     * Gets or sets the zoom factor of the image.
     */
    public get scale(): number {
        return this._scale;
    }

    /**
     * Gets or sets the zoom factor of the image.
     */
    public set scale(value: number) {
        this._scale = value;
    }


    /**
     * Gets or sets a value indicating whether to use anti-aliasing for rendering.
     */
    private _useAntiAliasing: boolean;

    /**
     * Gets or sets a value indicating whether to use anti-aliasing for rendering.
     */
    public get useAntiAliasing(): boolean {
        return this._useAntiAliasing;
    }

    /**
     * Gets or sets a value indicating whether to use anti-aliasing for rendering.
     */
    public set useAntiAliasing(value: boolean) {
        this._useAntiAliasing = value;
    }


    /**
     * Gets or sets a value indicating whether to use GDI+ or Aspose.Words metafile renderer when saving to EMF.
     */
    private _useGdiEmfRenderer: boolean;

    /**
     * Gets or sets a value indicating whether to use GDI+ or Aspose.Words metafile renderer when saving to EMF.
     */
    public get useGdiEmfRenderer(): boolean {
        return this._useGdiEmfRenderer;
    }

    /**
     * Gets or sets a value indicating whether to use GDI+ or Aspose.Words metafile renderer when saving to EMF.
     */
    public set useGdiEmfRenderer(value: boolean) {
        this._useGdiEmfRenderer = value;
    }


    /**
     * Gets or sets a value indicating whether to use high quality (i.e. slow) rendering algorithms.
     */
    private _useHighQualityRendering: boolean;

    /**
     * Gets or sets a value indicating whether to use high quality (i.e. slow) rendering algorithms.
     */
    public get useHighQualityRendering(): boolean {
        return this._useHighQualityRendering;
    }

    /**
     * Gets or sets a value indicating whether to use high quality (i.e. slow) rendering algorithms.
     */
    public set useHighQualityRendering(value: boolean) {
        this._useHighQualityRendering = value;
    }


    /**
     * Gets or sets the vertical resolution in dots per inch for the generated images.
     * This property has effect only when saving to raster image formats.
     * The default value is 96.
     */
    private _verticalResolution: number;

    /**
     * Gets or sets the vertical resolution in dots per inch for the generated images.
     * This property has effect only when saving to raster image formats.
     * The default value is 96.
     */
    public get verticalResolution(): number {
        return this._verticalResolution;
    }

    /**
     * Gets or sets the vertical resolution in dots per inch for the generated images.
     * This property has effect only when saving to raster image formats.
     * The default value is 96.
     */
    public set verticalResolution(value: number) {
        this._verticalResolution = value;
    }


    public constructor(init?: Partial< ImageSaveOptionsData >) {
        super(init);
        Object.assign(this, init);
    }
}


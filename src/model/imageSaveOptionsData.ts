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
    public horizontalResolution: number;

    /**
     * Gets or sets the brightness level of the image.
     */
    public imageBrightness: number;

    /**
     * Gets or sets the color mode of the image.
     */
    public imageColorMode: string;

    /**
     * Gets or sets the contrast level of the image.
     */
    public imageContrast: number;

    /**
     * Gets or sets the background (paper) color of the image.
     */
    public paperColor: string;

    /**
     * Gets or sets the pixel format of the image.
     */
    public pixelFormat: string;

    /**
     * Gets or sets both horizontal and vertical resolution in dots per inch for the generated images.
     * This property has effect only when saving to raster image formats.
     * The default value is 96.
     */
    public resolution: number;

    /**
     * Gets or sets the zoom factor of the image.
     */
    public scale: number;

    /**
     * Gets or sets a value indicating whether to use anti-aliasing for rendering.
     */
    public useAntiAliasing: boolean;

    /**
     * Gets or sets a value indicating whether to use GDI+ or Aspose.Words metafile renderer when saving to EMF.
     */
    public useGdiEmfRenderer: boolean;

    /**
     * Gets or sets a value indicating whether to use high quality (i.e. slow) rendering algorithms.
     */
    public useHighQualityRendering: boolean;

    /**
     * Gets or sets the vertical resolution in dots per inch for the generated images.
     * This property has effect only when saving to raster image formats.
     * The default value is 96.
     */
    public verticalResolution: number;

    public constructor(init?: Partial< ImageSaveOptionsData >) {
        super(init);
        Object.assign(this, init);
    }
}


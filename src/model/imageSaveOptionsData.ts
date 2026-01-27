/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="imageSaveOptionsData.ts">
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
import { FixedPageSaveOptionsData } from './fixedPageSaveOptionsData';

export const importsMapImageSaveOptionsData = {
    FixedPageSaveOptionsData,
};

/**
 * Container abstract class for image save options.
 */
export abstract class ImageSaveOptionsData extends FixedPageSaveOptionsData {
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
            type: "ImageSaveOptionsData.ImageColorModeEnum",
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
            type: "ImageSaveOptionsData.PixelFormatEnum",
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
            name: "useHighQualityRendering",
            baseName: "UseHighQualityRendering",
            type: "boolean",
        },
        {
            name: "verticalResolution",
            baseName: "VerticalResolution",
            type: "number",
        },
        {
            name: "imageHeight",
            baseName: "ImageHeight",
            type: "number",
        },
        {
            name: "imageWidth",
            baseName: "ImageWidth",
            type: "number",
        },
        {
            name: "useGdiEmfRenderer",
            baseName: "UseGdiEmfRenderer",
            type: "boolean",
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
    public imageColorMode: ImageSaveOptionsData.ImageColorModeEnum;

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
    public pixelFormat: ImageSaveOptionsData.PixelFormatEnum;

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
     * Gets or sets a value indicating whether to use high quality (i.e. slow) rendering algorithms.
     */
    public useHighQualityRendering: boolean;

    /**
     * Gets or sets the vertical resolution in dots per inch for the generated images.
     * This property has effect only when saving to raster image formats.
     * The default value is 96.
     */
    public verticalResolution: number;

    /**
     * Gets or sets the height of a generated image in pixels.
     * This property has effect only when saving to raster image formats
     * and used in pair with ImageWidth.
     */
    public imageHeight: number;

    /**
     * Gets or sets the width of a generated image in pixels.
     * This property has effect only when saving to raster image formats
     * and used in pair with ImageHeight.
     */
    public imageWidth: number;

    /**
     * Gets or sets a value indicating whether to use GDI+ or Aspose.Words metafile renderer when saving to EMF.
     * If set to true - GDI+ metafile renderer is used. I.e. content is written to GDI+ graphics object and saved to metafile.If set to false - Aspose.Words metafile renderer is used. I.e. content is written directly to the metafile format with Aspose.Words.The default value is true.Has effect only when saving to EMF.
     */
    public useGdiEmfRenderer: boolean;

    public constructor(init?: Partial< ImageSaveOptionsData >) {
        super(init);
        Object.assign(this, init);
    }

    public collectFilesContent(_resultFilesContent: Array<any>) {
    }

    public validate() {
        super.validate();
    }
}

/**
 * Enums for ImageSaveOptionsData
 */
// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace ImageSaveOptionsData {
    export enum ImageColorModeEnum {
        None = 'None' as any,
        Grayscale = 'Grayscale' as any,
        BlackAndWhite = 'BlackAndWhite' as any
    }

    export enum PixelFormatEnum {
        Format16BppRgb555 = 'Format16BppRgb555' as any,
        Format16BppRgb565 = 'Format16BppRgb565' as any,
        Format16BppArgb1555 = 'Format16BppArgb1555' as any,
        Format24BppRgb = 'Format24BppRgb' as any,
        Format32BppRgb = 'Format32BppRgb' as any,
        Format32BppArgb = 'Format32BppArgb' as any,
        Format32BppPArgb = 'Format32BppPArgb' as any,
        Format48BppRgb = 'Format48BppRgb' as any,
        Format64BppArgb = 'Format64BppArgb' as any,
        Format64BppPArgb = 'Format64BppPArgb' as any,
        Format1bppIndexed = 'Format1bppIndexed' as any
    }
}
// tslint:enable:quotemark


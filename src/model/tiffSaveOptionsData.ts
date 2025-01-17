/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="tiffSaveOptionsData.ts">
 *   Copyright (c) 2025 Aspose.Words for Cloud
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
import { ImageSaveOptionsData } from './imageSaveOptionsData';

export const importsMapTiffSaveOptionsData = {
    ImageSaveOptionsData,
};

/**
 * Container class for tiff save options.
 */
export class TiffSaveOptionsData extends ImageSaveOptionsData {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "thresholdForFloydSteinbergDithering",
            baseName: "ThresholdForFloydSteinbergDithering",
            type: "number",
        },
        {
            name: "tiffBinarizationMethod",
            baseName: "TiffBinarizationMethod",
            type: "TiffSaveOptionsData.TiffBinarizationMethodEnum",
        },
        {
            name: "tiffCompression",
            baseName: "TiffCompression",
            type: "TiffSaveOptionsData.TiffCompressionEnum",
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TiffSaveOptionsData.attributeTypeMap);
    }

    /**
     * Gets or sets the threshold that determines the value of the binarization error in the Floyd-Steinberg method. when ImageBinarizationMethod is ImageBinarizationMethod.FloydSteinbergDithering.
     * Default value is 128.
     */
    public thresholdForFloydSteinbergDithering: number;

    /**
     * Gets or sets the method used while converting images to 1 bpp format.
     */
    public tiffBinarizationMethod: TiffSaveOptionsData.TiffBinarizationMethodEnum;

    /**
     * Gets or sets the type of compression.
     */
    public tiffCompression: TiffSaveOptionsData.TiffCompressionEnum;

    public constructor(init?: Partial< TiffSaveOptionsData >) {
        super(init);
        this.saveFormat = 'tiff';

        Object.assign(this, init);
    }

    public collectFilesContent(_resultFilesContent: Array<any>) {
    }

    public validate() {
        super.validate();
    }
}

/**
 * Enums for TiffSaveOptionsData
 */
// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace TiffSaveOptionsData {
    export enum TiffBinarizationMethodEnum {
        Threshold = 'Threshold' as any,
        FloydSteinbergDithering = 'FloydSteinbergDithering' as any
    }

    export enum TiffCompressionEnum {
        None = 'None' as any,
        Rle = 'Rle' as any,
        Lzw = 'Lzw' as any,
        Ccitt3 = 'Ccitt3' as any,
        Ccitt4 = 'Ccitt4' as any
    }
}
// tslint:enable:quotemark


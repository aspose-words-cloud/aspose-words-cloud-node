/*
* MIT License

* Copyright (c) 2019 Aspose Pty Ltd

* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:

* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.

* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/
import { AttributeInfo } from '../internal/attributeInfo';
import { StringFormatData } from './stringFormatData';

export const importsMapGraphicsQualityOptionsData = {
    StringFormatData,
};

/**
 * Allows to specify additional System.Drawing.Graphics quality options.
 */
export class GraphicsQualityOptionsData {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "compositingMode",
            baseName: "CompositingMode",
            type: "GraphicsQualityOptionsData.CompositingModeEnum",
        },        
        {
            name: "compositingQuality",
            baseName: "CompositingQuality",
            type: "GraphicsQualityOptionsData.CompositingQualityEnum",
        },        
        {
            name: "interpolationMode",
            baseName: "InterpolationMode",
            type: "GraphicsQualityOptionsData.InterpolationModeEnum",
        },        
        {
            name: "smoothingMode",
            baseName: "SmoothingMode",
            type: "GraphicsQualityOptionsData.SmoothingModeEnum",
        },        
        {
            name: "stringFormat",
            baseName: "StringFormat",
            type: "StringFormatData",
        },        
        {
            name: "textRenderingHint",
            baseName: "TextRenderingHint",
            type: "GraphicsQualityOptionsData.TextRenderingHintEnum",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return GraphicsQualityOptionsData.attributeTypeMap;
    }

    /**
     * Gets or sets a value that specifies how composited images are drawn to this Graphics.
     */
    public compositingMode: GraphicsQualityOptionsData.CompositingModeEnum;
    
    /**
     * Gets or sets the rendering quality of composited images drawn to this Graphics.
     */
    public compositingQuality: GraphicsQualityOptionsData.CompositingQualityEnum;
    
    /**
     * Gets or sets the interpolation mode associated with this Graphics.
     */
    public interpolationMode: GraphicsQualityOptionsData.InterpolationModeEnum;
    
    /**
     * Gets or sets the rendering quality for this Graphics.
     */
    public smoothingMode: GraphicsQualityOptionsData.SmoothingModeEnum;
    
    /**
     * Gets or sets stringFormat.
     */
    public stringFormat: StringFormatData;
    
    /**
     * Gets or sets the rendering mode for text associated with this Graphics.
     */
    public textRenderingHint: GraphicsQualityOptionsData.TextRenderingHintEnum;
    
    public constructor(init?: Partial<GraphicsQualityOptionsData>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Enums for GraphicsQualityOptionsData
 */
// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace GraphicsQualityOptionsData {
    export enum CompositingModeEnum {
        SourceOver = 'SourceOver' as any,
        SourceCopy = 'SourceCopy' as any,
    }
    export enum CompositingQualityEnum {
        Default = 'Default' as any,
        HighSpeed = 'HighSpeed' as any,
        HighQuality = 'HighQuality' as any,
        GammaCorrected = 'GammaCorrected' as any,
        AssumeLinear = 'AssumeLinear' as any,
        Invalid = 'Invalid' as any,
    }
    export enum InterpolationModeEnum {
        Default = 'Default' as any,
        Low = 'Low' as any,
        High = 'High' as any,
        Bilinear = 'Bilinear' as any,
        Bicubic = 'Bicubic' as any,
        NearestNeighbor = 'NearestNeighbor' as any,
        HighQualityBilinear = 'HighQualityBilinear' as any,
        HighQualityBicubic = 'HighQualityBicubic' as any,
        Invalid = 'Invalid' as any,
    }
    export enum SmoothingModeEnum {
        Default = 'Default' as any,
        HighSpeed = 'HighSpeed' as any,
        HighQuality = 'HighQuality' as any,
        None = 'None' as any,
        AntiAlias = 'AntiAlias' as any,
        Invalid = 'Invalid' as any,
    }
    export enum TextRenderingHintEnum {
        SystemDefault = 'SystemDefault' as any,
        SingleBitPerPixelGridFit = 'SingleBitPerPixelGridFit' as any,
        SingleBitPerPixel = 'SingleBitPerPixel' as any,
        AntiAliasGridFit = 'AntiAliasGridFit' as any,
        AntiAlias = 'AntiAlias' as any,
        ClearTypeGridFit = 'ClearTypeGridFit' as any,
    }
}
// tslint:enable:quotemark

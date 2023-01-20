/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="fixedPageSaveOptionsData.ts">
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
import { MetafileRenderingOptionsData } from './metafileRenderingOptionsData';
import { SaveOptionsData } from './saveOptionsData';

export const importsMapFixedPageSaveOptionsData = {
    MetafileRenderingOptionsData,
    SaveOptionsData,
};

/**
 * Contains common options that can be specified when saving a document into fixed page formats (PDF, XPS, images etc).
 */
export abstract class FixedPageSaveOptionsData extends SaveOptionsData {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "colorMode",
            baseName: "ColorMode",
            type: "FixedPageSaveOptionsData.ColorModeEnum",
        },
        {
            name: "jpegQuality",
            baseName: "JpegQuality",
            type: "number",
        },
        {
            name: "metafileRenderingOptions",
            baseName: "MetafileRenderingOptions",
            type: "MetafileRenderingOptionsData",
        },
        {
            name: "numeralFormat",
            baseName: "NumeralFormat",
            type: "FixedPageSaveOptionsData.NumeralFormatEnum",
        },
        {
            name: "optimizeOutput",
            baseName: "OptimizeOutput",
            type: "boolean",
        },
        {
            name: "pageCount",
            baseName: "PageCount",
            type: "number",
        },
        {
            name: "pageIndex",
            baseName: "PageIndex",
            type: "number",
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(FixedPageSaveOptionsData.attributeTypeMap);
    }

    /**
     * Gets or sets the value determining how colors are rendered.
     * { Normal | Grayscale}.
     */
    public colorMode: FixedPageSaveOptionsData.ColorModeEnum;

    /**
     * Gets or sets the quality of the JPEG images inside PDF document.
     */
    public jpegQuality: number;

    /**
     * Gets or sets the metafile rendering options.
     */
    public metafileRenderingOptions: MetafileRenderingOptionsData;

    /**
     * Gets or sets the symbol set, that is used to represent numbers while rendering to fixed page formats.
     */
    public numeralFormat: FixedPageSaveOptionsData.NumeralFormatEnum;

    /**
     * Gets or sets a value indicating whether it is required to optimize output of XPS.
     * If this flag is set redundant nested canvases and empty canvases are removed, also neighbor glyphs with the same formatting are concatenated.
     * Note: The accuracy of the content display may be affected if this property is set to true.. The default value is false.
     */
    public optimizeOutput: boolean;

    /**
     * Gets or sets the number of pages to render.
     */
    public pageCount: number;

    /**
     * Gets or sets the 0-based index of the first page to render.
     */
    public pageIndex: number;

    public constructor(init?: Partial< FixedPageSaveOptionsData >) {
        super(init);
        Object.assign(this, init);
    }

    public collectFilesContent(_resultFilesContent: Array<any>) {
    }
}

/**
 * Enums for FixedPageSaveOptionsData
 */
// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace FixedPageSaveOptionsData {
    export enum ColorModeEnum {
        Normal = 'Normal' as any,
        Grayscale = 'Grayscale' as any
    }

    export enum NumeralFormatEnum {
        European = 'European' as any,
        ArabicIndic = 'ArabicIndic' as any,
        EasternArabicIndic = 'EasternArabicIndic' as any,
        Context = 'Context' as any,
        System = 'System' as any
    }
}
// tslint:enable:quotemark


/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="fixedPageSaveOptionsData.ts">
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
import { MetafileRenderingOptionsData } from './metafileRenderingOptionsData';
import { SaveOptionsData } from './saveOptionsData';

export const importsMapFixedPageSaveOptionsData = {
    MetafileRenderingOptionsData,
    SaveOptionsData,
};

/**
 * Contains common options that can be specified when saving a document into fixed page formats (PDF, XPS, images etc).
 */
export class FixedPageSaveOptionsData extends SaveOptionsData {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "colorMode",
            baseName: "ColorMode",
            type: "string",
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
            type: "string",
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
    private _colorMode: string;

    /**
     * Gets or sets the value determining how colors are rendered.
     * { Normal | Grayscale}.
     */
    public get colorMode(): string {
        return this._colorMode;
    }

    /**
     * Gets or sets the value determining how colors are rendered.
     * { Normal | Grayscale}.
     */
    public set colorMode(value: string) {
        this._colorMode = value;
    }


    /**
     * Gets or sets the quality of the JPEG images inside PDF document.
     */
    private _jpegQuality: number;

    /**
     * Gets or sets the quality of the JPEG images inside PDF document.
     */
    public get jpegQuality(): number {
        return this._jpegQuality;
    }

    /**
     * Gets or sets the quality of the JPEG images inside PDF document.
     */
    public set jpegQuality(value: number) {
        this._jpegQuality = value;
    }


    /**
     * Gets or sets the metafile rendering options.
     */
    private _metafileRenderingOptions: MetafileRenderingOptionsData;

    /**
     * Gets or sets the metafile rendering options.
     */
    public get metafileRenderingOptions(): MetafileRenderingOptionsData {
        return this._metafileRenderingOptions;
    }

    /**
     * Gets or sets the metafile rendering options.
     */
    public set metafileRenderingOptions(value: MetafileRenderingOptionsData) {
        this._metafileRenderingOptions = value;
    }


    /**
     * Gets or sets the symbol set, that is used to represent numbers while rendering to fixed page formats.
     */
    private _numeralFormat: string;

    /**
     * Gets or sets the symbol set, that is used to represent numbers while rendering to fixed page formats.
     */
    public get numeralFormat(): string {
        return this._numeralFormat;
    }

    /**
     * Gets or sets the symbol set, that is used to represent numbers while rendering to fixed page formats.
     */
    public set numeralFormat(value: string) {
        this._numeralFormat = value;
    }


    /**
     * Gets or sets a value indicating whether it is required to optimize output of XPS.
     * If this flag is set redundant nested canvases and empty canvases are removed, also neighbor glyphs with the same formatting are concatenated.
     * Note: The accuracy of the content display may be affected if this property is set to true.. The default value is false.
     */
    private _optimizeOutput: boolean;

    /**
     * Gets or sets a value indicating whether it is required to optimize output of XPS.
     * If this flag is set redundant nested canvases and empty canvases are removed, also neighbor glyphs with the same formatting are concatenated.
     * Note: The accuracy of the content display may be affected if this property is set to true.. The default value is false.
     */
    public get optimizeOutput(): boolean {
        return this._optimizeOutput;
    }

    /**
     * Gets or sets a value indicating whether it is required to optimize output of XPS.
     * If this flag is set redundant nested canvases and empty canvases are removed, also neighbor glyphs with the same formatting are concatenated.
     * Note: The accuracy of the content display may be affected if this property is set to true.. The default value is false.
     */
    public set optimizeOutput(value: boolean) {
        this._optimizeOutput = value;
    }


    /**
     * Gets or sets the number of pages to render.
     */
    private _pageCount: number;

    /**
     * Gets or sets the number of pages to render.
     */
    public get pageCount(): number {
        return this._pageCount;
    }

    /**
     * Gets or sets the number of pages to render.
     */
    public set pageCount(value: number) {
        this._pageCount = value;
    }


    /**
     * Gets or sets the 0-based index of the first page to render.
     */
    private _pageIndex: number;

    /**
     * Gets or sets the 0-based index of the first page to render.
     */
    public get pageIndex(): number {
        return this._pageIndex;
    }

    /**
     * Gets or sets the 0-based index of the first page to render.
     */
    public set pageIndex(value: number) {
        this._pageIndex = value;
    }


    public constructor(init?: Partial< FixedPageSaveOptionsData >) {
        super(init);
        Object.assign(this, init);
    }
}


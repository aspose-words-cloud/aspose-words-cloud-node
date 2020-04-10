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
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(FixedPageSaveOptionsData.attributeTypeMap);
    }

    /**
     * Gets or sets a value determining how colors are rendered. { Normal | Grayscale}.
     */
    public colorMode: string;
    
    /**
     * Gets or sets determines the quality of the JPEG images inside PDF document.
     */
    public jpegQuality: number;
    
    /**
     * Gets or sets metafileRenderingOptions.
     */
    public metafileRenderingOptions: MetafileRenderingOptionsData;
    
    /**
     * Gets or sets indicates the symbol set that is used to represent numbers while rendering to fixed page formats.
     */
    public numeralFormat: string;
    
    /**
     * Gets or sets flag indicates whether it is required to optimize output of XPS. If this flag is set redundant nested canvases and empty canvases are removed, also neighbor glyphs with the same formatting are concatenated. Note: The accuracy of the content display may be affected if this property is set to true.  Default is false.
     */
    public optimizeOutput: boolean;
    
    /**
     * Gets or sets determines number of pages to render.
     */
    public pageCount: number;
    
    /**
     * Gets or sets determines 0-based index of the first page to render.
     */
    public pageIndex: number;
    
    public constructor(init?: Partial<FixedPageSaveOptionsData>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Enums for FixedPageSaveOptionsData
 */
// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace FixedPageSaveOptionsData {
}
// tslint:enable:quotemark

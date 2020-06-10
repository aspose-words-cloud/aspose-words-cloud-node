/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="svgSaveOptionsData.ts">
 *   Copyright (c) 2020 Aspose.Words for Cloud
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

export const importsMapSvgSaveOptionsData = {
    FixedPageSaveOptionsData,
};

/**
 * container class for svg save options.
 */
export class SvgSaveOptionsData extends FixedPageSaveOptionsData {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "exportEmbeddedImages",
            baseName: "ExportEmbeddedImages",
            type: "boolean",
        },
        {
            name: "fitToViewPort",
            baseName: "FitToViewPort",
            type: "boolean",
        },
        {
            name: "resourcesFolder",
            baseName: "ResourcesFolder",
            type: "string",
        },
        {
            name: "resourcesFolderAlias",
            baseName: "ResourcesFolderAlias",
            type: "string",
        },
        {
            name: "showPageBorder",
            baseName: "ShowPageBorder",
            type: "boolean",
        },
        {
            name: "textOutputMode",
            baseName: "TextOutputMode",
            type: "string",
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SvgSaveOptionsData.attributeTypeMap);
    }

    /**
     * Gets or sets specified whether images should be embedded into SVG document as base64.
     */
    public exportEmbeddedImages: boolean;

    /**
     * Gets or sets specifies if the output SVG should fill the available viewport area (browser window or container). When set to true width and height of output SVG are set to 100%.
     */
    public fitToViewPort: boolean;

    /**
     * Gets or sets specifies the physical folder where resources (images) are saved when exporting.
     */
    public resourcesFolder: string;

    /**
     * Gets or sets specifies the name of the folder used to construct image URIs.
     */
    public resourcesFolderAlias: string;

    /**
     * Gets or sets show/hide page stepper.
     */
    public showPageBorder: boolean;

    /**
     * Gets or sets determines how text should be rendered.
     */
    public textOutputMode: string;

    public constructor(init?: Partial< SvgSaveOptionsData >) {
        super(init);
        Object.assign(this, init);
    }
}


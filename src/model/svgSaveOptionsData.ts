/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="svgSaveOptionsData.ts">
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
import { FixedPageSaveOptionsData } from './fixedPageSaveOptionsData';

export const importsMapSvgSaveOptionsData = {
    FixedPageSaveOptionsData,
};

/**
 * Container class for svg save options.
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
            name: "idPrefix",
            baseName: "IdPrefix",
            type: "string",
        },
        {
            name: "maxImageResolution",
            baseName: "MaxImageResolution",
            type: "number",
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
            type: "SvgSaveOptionsData.TextOutputModeEnum",
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SvgSaveOptionsData.attributeTypeMap);
    }

    /**
     * Gets or sets a value indicating whether images should be embedded into SVG document as base64.
     */
    public exportEmbeddedImages: boolean;

    /**
     * Gets or sets a value indicating whether the output SVG should fill the available viewport area (browser window or container). When set to true width and height of output SVG are set to 100%.
     */
    public fitToViewPort: boolean;

    /**
     * Gets or sets specifies a prefix that is prepended to all generated element IDs in the output document.
     * Default value is null and no prefix is prepended.
     * If the prefix is specified, it can contain only letters, digits, underscores, and hyphens,
     * and must start with a letter.
     */
    public idPrefix: string;

    /**
     * Gets or sets a value in pixels per inch that limits resolution of exported raster images.
     * If the value of this property is non-zero, it limits resolution of exported raster images.
     * That is, higher-resolution images are resampled down to the limit and lower-resolution images are exported as is.
     */
    public maxImageResolution: number;

    /**
     * Gets or sets the physical folder where resources (images) are saved when exporting.
     */
    public resourcesFolder: string;

    /**
     * Gets or sets the name of the folder used to construct image URIs.
     */
    public resourcesFolderAlias: string;

    /**
     * Gets or sets a value indicating whether to show or hide page stepper.
     */
    public showPageBorder: boolean;

    /**
     * Gets or sets the option that controls how text should be rendered.
     */
    public textOutputMode: SvgSaveOptionsData.TextOutputModeEnum;

    public constructor(init?: Partial< SvgSaveOptionsData >) {
        super(init);
        this.saveFormat = 'svg';

        Object.assign(this, init);
    }

    public collectFilesContent(_resultFilesContent: Array<any>) {
    }

    public validate() {
        super.validate();
    }
}

/**
 * Enums for SvgSaveOptionsData
 */
// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace SvgSaveOptionsData {
    export enum TextOutputModeEnum {
        UseSvgFonts = 'UseSvgFonts' as any,
        UseTargetMachineFonts = 'UseTargetMachineFonts' as any,
        UsePlacedGlyphs = 'UsePlacedGlyphs' as any
    }
}
// tslint:enable:quotemark


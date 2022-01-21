/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="svgSaveOptionsData.ts">
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
     * Gets or sets a value indicating whether images should be embedded into SVG document as base64.
     */
    private _exportEmbeddedImages: boolean;

    /**
     * Gets or sets a value indicating whether images should be embedded into SVG document as base64.
     */
    public get exportEmbeddedImages(): boolean {
        return this._exportEmbeddedImages;
    }

    /**
     * Gets or sets a value indicating whether images should be embedded into SVG document as base64.
     */
    public set exportEmbeddedImages(value: boolean) {
        this._exportEmbeddedImages = value;
    }


    /**
     * Gets or sets a value indicating whether the output SVG should fill the available viewport area (browser window or container). When set to true width and height of output SVG are set to 100%.
     */
    private _fitToViewPort: boolean;

    /**
     * Gets or sets a value indicating whether the output SVG should fill the available viewport area (browser window or container). When set to true width and height of output SVG are set to 100%.
     */
    public get fitToViewPort(): boolean {
        return this._fitToViewPort;
    }

    /**
     * Gets or sets a value indicating whether the output SVG should fill the available viewport area (browser window or container). When set to true width and height of output SVG are set to 100%.
     */
    public set fitToViewPort(value: boolean) {
        this._fitToViewPort = value;
    }


    /**
     * Gets or sets the physical folder where resources (images) are saved when exporting.
     */
    private _resourcesFolder: string;

    /**
     * Gets or sets the physical folder where resources (images) are saved when exporting.
     */
    public get resourcesFolder(): string {
        return this._resourcesFolder;
    }

    /**
     * Gets or sets the physical folder where resources (images) are saved when exporting.
     */
    public set resourcesFolder(value: string) {
        this._resourcesFolder = value;
    }


    /**
     * Gets or sets the name of the folder used to construct image URIs.
     */
    private _resourcesFolderAlias: string;

    /**
     * Gets or sets the name of the folder used to construct image URIs.
     */
    public get resourcesFolderAlias(): string {
        return this._resourcesFolderAlias;
    }

    /**
     * Gets or sets the name of the folder used to construct image URIs.
     */
    public set resourcesFolderAlias(value: string) {
        this._resourcesFolderAlias = value;
    }


    /**
     * Gets or sets a value indicating whether to show or hide page stepper.
     */
    private _showPageBorder: boolean;

    /**
     * Gets or sets a value indicating whether to show or hide page stepper.
     */
    public get showPageBorder(): boolean {
        return this._showPageBorder;
    }

    /**
     * Gets or sets a value indicating whether to show or hide page stepper.
     */
    public set showPageBorder(value: boolean) {
        this._showPageBorder = value;
    }


    /**
     * Gets or sets the option that controls how text should be rendered.
     */
    private _textOutputMode: string;

    /**
     * Gets or sets the option that controls how text should be rendered.
     */
    public get textOutputMode(): string {
        return this._textOutputMode;
    }

    /**
     * Gets or sets the option that controls how text should be rendered.
     */
    public set textOutputMode(value: string) {
        this._textOutputMode = value;
    }


    public constructor(init?: Partial< SvgSaveOptionsData >) {
        super(init);
        saveFormat = 'svg';

        Object.assign(this, init);
    }
}


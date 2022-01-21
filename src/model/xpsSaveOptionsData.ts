/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="xpsSaveOptionsData.ts">
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
import { OutlineOptionsData } from './outlineOptionsData';

export const importsMapXpsSaveOptionsData = {
    FixedPageSaveOptionsData,
    OutlineOptionsData,
};

/**
 * Container class for xps save options.
 */
export class XpsSaveOptionsData extends FixedPageSaveOptionsData {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "bookmarksOutlineLevel",
            baseName: "BookmarksOutlineLevel",
            type: "number",
        },
        {
            name: "headingsOutlineLevels",
            baseName: "HeadingsOutlineLevels",
            type: "number",
        },
        {
            name: "outlineOptions",
            baseName: "OutlineOptions",
            type: "OutlineOptionsData",
        },
        {
            name: "useBookFoldPrintingSettings",
            baseName: "UseBookFoldPrintingSettings",
            type: "boolean",
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(XpsSaveOptionsData.attributeTypeMap);
    }

    /**
     * Gets or sets the level in the XPS document outline at which to display Word bookmarks.
     */
    protected _bookmarksOutlineLevel: number;

    /**
     * Gets or sets the level in the XPS document outline at which to display Word bookmarks.
     */
    public get bookmarksOutlineLevel(): number {
        return this._bookmarksOutlineLevel;
    }

    /**
     * Gets or sets the level in the XPS document outline at which to display Word bookmarks.
     */
    public set bookmarksOutlineLevel(value: number) {
        this._bookmarksOutlineLevel = value;
    }


    /**
     * Gets or sets the number of heading levels (paragraphs formatted with the Heading styles) to include in the XPS document outline.
     */
    protected _headingsOutlineLevels: number;

    /**
     * Gets or sets the number of heading levels (paragraphs formatted with the Heading styles) to include in the XPS document outline.
     */
    public get headingsOutlineLevels(): number {
        return this._headingsOutlineLevels;
    }

    /**
     * Gets or sets the number of heading levels (paragraphs formatted with the Heading styles) to include in the XPS document outline.
     */
    public set headingsOutlineLevels(value: number) {
        this._headingsOutlineLevels = value;
    }


    /**
     * Gets or sets the outline options.
     */
    protected _outlineOptions: OutlineOptionsData;

    /**
     * Gets or sets the outline options.
     */
    public get outlineOptions(): OutlineOptionsData {
        return this._outlineOptions;
    }

    /**
     * Gets or sets the outline options.
     */
    public set outlineOptions(value: OutlineOptionsData) {
        this._outlineOptions = value;
    }


    /**
     * Gets or sets a value indicating whether the document should be saved using a booklet printing layout.
     */
    protected _useBookFoldPrintingSettings: boolean;

    /**
     * Gets or sets a value indicating whether the document should be saved using a booklet printing layout.
     */
    public get useBookFoldPrintingSettings(): boolean {
        return this._useBookFoldPrintingSettings;
    }

    /**
     * Gets or sets a value indicating whether the document should be saved using a booklet printing layout.
     */
    public set useBookFoldPrintingSettings(value: boolean) {
        this._useBookFoldPrintingSettings = value;
    }


    public constructor(init?: Partial< XpsSaveOptionsData >) {
        super(init);
        this._saveFormat = 'xps';

        Object.assign(this, init);
    }
}


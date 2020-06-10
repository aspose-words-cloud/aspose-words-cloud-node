/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="outlineOptionsData.ts">
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
import { BookmarksOutlineLevelData } from './bookmarksOutlineLevelData';

export const importsMapOutlineOptionsData = {
    BookmarksOutlineLevelData,
};

/**
 * container class for outline options.
 */
export class OutlineOptionsData {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "bookmarksOutlineLevels",
            baseName: "BookmarksOutlineLevels",
            type: "Array<BookmarksOutlineLevelData>",
        },
        {
            name: "createMissingOutlineLevels",
            baseName: "CreateMissingOutlineLevels",
            type: "boolean",
        },
        {
            name: "createOutlinesForHeadingsInTables",
            baseName: "CreateOutlinesForHeadingsInTables",
            type: "boolean",
        },
        {
            name: "defaultBookmarksOutlineLevel",
            baseName: "DefaultBookmarksOutlineLevel",
            type: "number",
        },
        {
            name: "expandedOutlineLevels",
            baseName: "ExpandedOutlineLevels",
            type: "number",
        },
        {
            name: "headingsOutlineLevels",
            baseName: "HeadingsOutlineLevels",
            type: "number",
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return OutlineOptionsData.attributeTypeMap;
    }

    /**
     * Gets or sets allows to specify individual bookmarks outline level.
     */
    public bookmarksOutlineLevels: Array<BookmarksOutlineLevelData>;

    /**
     * Gets or sets a value determining whether or not to create missing outline levels
     * when the document is exported.
     * Default value for this property is false.
     */
    public createMissingOutlineLevels: boolean;

    /**
     * Gets or sets specifies whether or not to create outlines for headings (paragraphs formatted
     * with the Heading styles) inside tables.
     */
    public createOutlinesForHeadingsInTables: boolean;

    /**
     * Gets or sets specifies the default level in the document outline at which to display Word bookmarks.
     */
    public defaultBookmarksOutlineLevel: number;

    /**
     * Gets or sets specifies how many levels in the document outline to show expanded when the file is viewed.
     */
    public expandedOutlineLevels: number;

    /**
     * Gets or sets specifies how many levels of headings (paragraphs formatted with the Heading styles) to include in the document outline.
     */
    public headingsOutlineLevels: number;

    public constructor(init?: Partial< OutlineOptionsData >) {
        Object.assign(this, init);
    }
}


/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="bookmarkInsert.ts">
 *   Copyright (c) 2024 Aspose.Words for Cloud
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
import { Position } from './position';

export const importsMapBookmarkInsert = {
    Position,
};

/**
 * Represents a bookmark to insert.
 */
export class BookmarkInsert implements ModelInterface {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "name",
            baseName: "Name",
            type: "string",
        },
        {
            name: "text",
            baseName: "Text",
            type: "string",
        },
        {
            name: "startRange",
            baseName: "StartRange",
            type: "Position",
        },
        {
            name: "endRange",
            baseName: "EndRange",
            type: "Position",
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return BookmarkInsert.attributeTypeMap;
    }

    /**
     * Gets or sets the name of the bookmark.
     */
    public name: string;

    /**
     * Gets or sets text, enclosed in the bookmark.
     */
    public text: string;

    /**
     * Gets or sets the link to start bookmark node.
     */
    public startRange: Position;

    /**
     * Gets or sets the link to end bookmark node.
     */
    public endRange: Position;

    public constructor(init?: Partial< BookmarkInsert >) {
        Object.assign(this, init);
    }

    public collectFilesContent(_resultFilesContent: Array<any>) {
    }

    public validate() {
        if (this.name === null || this.name === undefined)
        {
            throw new Error('Property Name in BookmarkInsert is required.');
        }
        if (this.text === null || this.text === undefined)
        {
            throw new Error('Property Text in BookmarkInsert is required.');
        }
        if (this.startRange === null || this.startRange === undefined)
        {
            throw new Error('Property StartRange in BookmarkInsert is required.');
        }
        if (this.endRange === null || this.endRange === undefined)
        {
            throw new Error('Property EndRange in BookmarkInsert is required.');
        }

        this.startRange?.validate();



        this.endRange?.validate();

    }
}


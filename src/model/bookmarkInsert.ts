/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="bookmarkInsert.ts">
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
import { ModelInterface } from './modelInterface';
import { BookmarkData } from './bookmarkData';
import { DocumentPosition } from './documentPosition';

export const importsMapBookmarkInsert = {
    BookmarkData,
    DocumentPosition,
};

/**
 * Represents a bookmark to insert.
 */
export class BookmarkInsert extends BookmarkData {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "endRange",
            baseName: "EndRange",
            type: "DocumentPosition",
        },
        {
            name: "startRange",
            baseName: "StartRange",
            type: "DocumentPosition",
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(BookmarkInsert.attributeTypeMap);
    }

    /**
     * Gets or sets the link to end bookmark node.
     */
    public endRange: DocumentPosition;

    /**
     * Gets or sets the link to start bookmark node.
     */
    public startRange: DocumentPosition;

    public constructor(init?: Partial< BookmarkInsert >) {
        super(init);
        Object.assign(this, init);
    }

    public collectFilesContent(_resultFilesContent: Array<any>) {
        if (this.endRange)
        {
            this.endRange.collectFilesContent(_resultFilesContent);
        }

        if (this.startRange)
        {
            this.startRange.collectFilesContent(_resultFilesContent);
        }

    }
}


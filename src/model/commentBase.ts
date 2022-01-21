/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="commentBase.ts">
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
import { DocumentPosition } from './documentPosition';

export const importsMapCommentBase = {
    DocumentPosition,
};

/**
 * Comment.
 */
export class CommentBase {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "author",
            baseName: "Author",
            type: "string",
        },
        {
            name: "dateTime",
            baseName: "DateTime",
            type: "Date",
        },
        {
            name: "initial",
            baseName: "Initial",
            type: "string",
        },
        {
            name: "rangeEnd",
            baseName: "RangeEnd",
            type: "DocumentPosition",
        },
        {
            name: "rangeStart",
            baseName: "RangeStart",
            type: "DocumentPosition",
        },
        {
            name: "text",
            baseName: "Text",
            type: "string",
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return CommentBase.attributeTypeMap;
    }

    /**
     * Gets or sets the author name for a comment.
     */
    protected _author: string;

    /**
     * Gets or sets the author name for a comment.
     */
    public get author(): string {
        return this._author;
    }

    /**
     * Gets or sets the author name for a comment.
     */
    public set author(value: string) {
        this._author = value;
    }


    /**
     * Gets or sets the date and time that the comment was made.
     */
    protected _dateTime: Date;

    /**
     * Gets or sets the date and time that the comment was made.
     */
    public get dateTime(): Date {
        return this._dateTime;
    }

    /**
     * Gets or sets the date and time that the comment was made.
     */
    public set dateTime(value: Date) {
        this._dateTime = value;
    }


    /**
     * Gets or sets the initials of the user associated with a specific comment.
     */
    protected _initial: string;

    /**
     * Gets or sets the initials of the user associated with a specific comment.
     */
    public get initial(): string {
        return this._initial;
    }

    /**
     * Gets or sets the initials of the user associated with a specific comment.
     */
    public set initial(value: string) {
        this._initial = value;
    }


    /**
     * Gets or sets the link to comment range end node.
     */
    protected _rangeEnd: DocumentPosition;

    /**
     * Gets or sets the link to comment range end node.
     */
    public get rangeEnd(): DocumentPosition {
        return this._rangeEnd;
    }

    /**
     * Gets or sets the link to comment range end node.
     */
    public set rangeEnd(value: DocumentPosition) {
        this._rangeEnd = value;
    }


    /**
     * Gets or sets the link to comment range start node.
     */
    protected _rangeStart: DocumentPosition;

    /**
     * Gets or sets the link to comment range start node.
     */
    public get rangeStart(): DocumentPosition {
        return this._rangeStart;
    }

    /**
     * Gets or sets the link to comment range start node.
     */
    public set rangeStart(value: DocumentPosition) {
        this._rangeStart = value;
    }


    /**
     * Gets or sets text of the comment.
     */
    protected _text: string;

    /**
     * Gets or sets text of the comment.
     */
    public get text(): string {
        return this._text;
    }

    /**
     * Gets or sets text of the comment.
     */
    public set text(value: string) {
        this._text = value;
    }


    public constructor(init?: Partial< CommentBase >) {
        Object.assign(this, init);
    }
}


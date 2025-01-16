/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="commentBase.ts">
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
import { PositionInsideNode } from './positionInsideNode';

export const importsMapCommentBase = {
    PositionInsideNode,
};

/**
 * Comment.
 */
export abstract class CommentBase implements ModelInterface {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "rangeStart",
            baseName: "RangeStart",
            type: "PositionInsideNode",
        },
        {
            name: "rangeEnd",
            baseName: "RangeEnd",
            type: "PositionInsideNode",
        },
        {
            name: "author",
            baseName: "Author",
            type: "string",
        },
        {
            name: "initial",
            baseName: "Initial",
            type: "string",
        },
        {
            name: "dateTime",
            baseName: "DateTime",
            type: "Date",
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
     * Gets or sets the link to comment range start node.
     */
    public rangeStart: PositionInsideNode;

    /**
     * Gets or sets the link to comment range end node.
     */
    public rangeEnd: PositionInsideNode;

    /**
     * Gets or sets the author name for a comment.
     * Cannot be null.Default is empty string.
     */
    public author: string;

    /**
     * Gets or sets the initials of the user associated with a specific comment.
     * Cannot be null.Default is empty string.
     */
    public initial: string;

    /**
     * Gets or sets the date and time that the comment was made.
     * Default is MinValue03.01.0001.
     */
    public dateTime: Date;

    /**
     * Gets or sets text of the comment.
     * This method allows to quickly set text of a comment from a string. The string can contain paragraph breaks, this will create paragraphs of text in the comment accordingly.
     */
    public text: string;

    public constructor(init?: Partial< CommentBase >) {
        Object.assign(this, init);
    }

    public collectFilesContent(_resultFilesContent: Array<any>) {
    }

    public validate() {
        if (this.rangeStart === null || this.rangeStart === undefined)
        {
            throw new Error('Property RangeStart in CommentBase is required.');
        }
        if (this.rangeEnd === null || this.rangeEnd === undefined)
        {
            throw new Error('Property RangeEnd in CommentBase is required.');
        }
        if (this.author === null || this.author === undefined)
        {
            throw new Error('Property Author in CommentBase is required.');
        }
        if (this.initial === null || this.initial === undefined)
        {
            throw new Error('Property Initial in CommentBase is required.');
        }
        if (this.text === null || this.text === undefined)
        {
            throw new Error('Property Text in CommentBase is required.');
        }

        this.rangeStart?.validate();



        this.rangeEnd?.validate();





    }
}


/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="comment.ts">
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
import { CommentLink } from './commentLink';
import { DocumentPosition } from './documentPosition';
import { StoryChildNodes } from './storyChildNodes';

export const importsMapComment = {
    CommentLink,
    DocumentPosition,
    StoryChildNodes,
};

/**
 * DTO container with a comment.
 */
export class Comment extends CommentLink {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "rangeStart",
            baseName: "RangeStart",
            type: "DocumentPosition",
        },
        {
            name: "rangeEnd",
            baseName: "RangeEnd",
            type: "DocumentPosition",
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
        },
        {
            name: "content",
            baseName: "Content",
            type: "StoryChildNodes",
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(Comment.attributeTypeMap);
    }

    /**
     * Gets or sets the link to comment range start node.
     */
    public rangeStart: DocumentPosition;

    /**
     * Gets or sets the link to comment range end node.
     */
    public rangeEnd: DocumentPosition;

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
     */
    public dateTime: Date;

    /**
     * Gets or sets text of the comment.
     * This method allows to quickly set text of a comment from a string. The string can contain paragraph breaks, this will create paragraphs of text in the comment accordingly.
     */
    public text: string;

    /**
     * Gets or sets the content of the comment.
     */
    public content: StoryChildNodes;

    public constructor(init?: Partial< Comment >) {
        super(init);
        Object.assign(this, init);
    }

    public collectFilesContent(_resultFilesContent: Array<any>) {
    }

    public validate() {
        super.validate();

        this.rangeStart?.validate();



        this.rangeEnd?.validate();







        this.content?.validate();

    }
}


/*
* MIT License

* Copyright (c) 2019 Aspose Pty Ltd

* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:

* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.

* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/
import { AttributeInfo } from '../internal/attributeInfo';
import { CommentLink } from './commentLink';
import { DocumentPosition } from './documentPosition';
import { StoryChildNodes } from './storyChildNodes';

export const importsMapComment = {
    CommentLink,
    DocumentPosition,
    StoryChildNodes,
};

/**
 * Comment.
 */
export class Comment extends CommentLink {
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
            name: "content",
            baseName: "Content",
            type: "StoryChildNodes",
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
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(Comment.attributeTypeMap);
    }

    /**
     * Gets or sets returns or sets the author name for a comment.
     */
    public author: string;
    
    /**
     * Gets or sets content.
     */
    public content: StoryChildNodes;
    
    /**
     * Gets or sets the date and time that the comment was made.
     */
    public dateTime: Date;
    
    /**
     * Gets or sets returns or sets the initials of the user associated with a specific comment.
     */
    public initial: string;
    
    /**
     * Gets or sets rangeEnd.
     */
    public rangeEnd: DocumentPosition;
    
    /**
     * Gets or sets rangeStart.
     */
    public rangeStart: DocumentPosition;
    
    /**
     * Gets or sets this is a convenience property that allows to easily get or set text of the comment.
     */
    public text: string;
    
    public constructor(init?: Partial<Comment>) {
        super(init);
        Object.assign(this, init);
    }        
}

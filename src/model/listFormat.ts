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
import { LinkElement } from './linkElement';
import { WordsApiLink } from './wordsApiLink';

export const importsMapListFormat = {
    LinkElement,
    WordsApiLink,
};

/**
 * Paragraph list format element.             
 */
export class ListFormat extends LinkElement {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "isListItem",
            baseName: "IsListItem",
            type: "boolean",
        },        
        {
            name: "listId",
            baseName: "ListId",
            type: "number",
        },        
        {
            name: "listLevelNumber",
            baseName: "ListLevelNumber",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ListFormat.attributeTypeMap);
    }

    /**
     * Gets or sets a value indicating whether the paragraph has bulleted or numbered formatting applied to it.
     */
    public isListItem: boolean;
    
    /**
     * Gets or sets the list id of this paragraph.
     */
    public listId: number;
    
    /**
     * Gets or sets the list level number (0 to 8) for the paragraph.
     */
    public listLevelNumber: number;
    
    public constructor(init?: Partial<ListFormat>) {
        super(init);
        Object.assign(this, init);
    }        
}

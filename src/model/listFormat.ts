/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="listFormat.ts">
 *   Copyright (c) 2023 Aspose.Words for Cloud
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
import { LinkElement } from './linkElement';

export const importsMapListFormat = {
    LinkElement,
};

/**
 * DTO container with a paragraph list format element.
 */
export class ListFormat extends LinkElement {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "listLevelNumber",
            baseName: "ListLevelNumber",
            type: "number",
        },
        {
            name: "listId",
            baseName: "ListId",
            type: "number",
        },
        {
            name: "isListItem",
            baseName: "IsListItem",
            type: "boolean",
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ListFormat.attributeTypeMap);
    }

    /**
     * Gets or sets the list level number (0 to 8) for the paragraph.
     * In Word documents, lists may consist of 1 or 9 levels, numbered 0 to 8. Has effect only when the Aspose.Words.ListFormat.List property is set to reference a valid list. Aspose.Words.ListFormat.List.
     */
    public listLevelNumber: number;

    /**
     * Gets or sets the list id of this paragraph.
     * The list that is being assigned to this property must belong to the current document.The list that is being assigned to this property must not be a list style definition.
     */
    public listId: number;

    /**
     * Gets or sets a value indicating whether the paragraph has bulleted or numbered formatting applied to it.
     */
    public isListItem: boolean;

    public constructor(init?: Partial< ListFormat >) {
        super(init);
        Object.assign(this, init);
    }

    public collectFilesContent(_resultFilesContent: Array<any>) {
    }

    public validate() {
        super.validate();
        if (this.listLevelNumber === null || this.listLevelNumber === undefined)
        {
            throw new Error('Property ListLevelNumber in ListFormat is required.');
        }
        if (this.isListItem === null || this.isListItem === undefined)
        {
            throw new Error('Property IsListItem in ListFormat is required.');
        }
    }
}


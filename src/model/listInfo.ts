/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="listInfo.ts">
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
import { LinkElement } from './linkElement';
import { ListLevels } from './listLevels';
import { Style } from './style';

export const importsMapListInfo = {
    LinkElement,
    ListLevels,
    Style,
};

/**
 * Represents a single document list.
 */
export class ListInfo extends LinkElement {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "isListStyleDefinition",
            baseName: "IsListStyleDefinition",
            type: "boolean",
        },
        {
            name: "isListStyleReference",
            baseName: "IsListStyleReference",
            type: "boolean",
        },
        {
            name: "isMultiLevel",
            baseName: "IsMultiLevel",
            type: "boolean",
        },
        {
            name: "isRestartAtEachSection",
            baseName: "IsRestartAtEachSection",
            type: "boolean",
        },
        {
            name: "listId",
            baseName: "ListId",
            type: "number",
        },
        {
            name: "listLevels",
            baseName: "ListLevels",
            type: "ListLevels",
        },
        {
            name: "style",
            baseName: "Style",
            type: "Style",
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ListInfo.attributeTypeMap);
    }

    /**
     * Gets or sets a value indicating whether returns true if this list is a definition of a list style.
     */
    public isListStyleDefinition: boolean;

    /**
     * Gets or sets a value indicating whether returns true if this list is a reference to a list style.
     */
    public isListStyleReference: boolean;

    /**
     * Gets or sets a value indicating whether returns true when the list contains 9 levels; false when 1 level.
     */
    public isMultiLevel: boolean;

    /**
     * Gets or sets a value indicating whether specifies whether list should be restarted at each section. Default value is false.
     */
    public isRestartAtEachSection: boolean;

    /**
     * Gets or sets the unique identifier of the list.
     */
    public listId: number;

    /**
     * Gets or sets the collection of list levels for this list.
     */
    public listLevels: ListLevels;

    /**
     * Gets or sets the list style that this list references or defines.
     */
    public style: Style;

    public constructor(init?: Partial< ListInfo >) {
        super(init);
        Object.assign(this, init);
    }
}


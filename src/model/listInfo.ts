/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="listInfo.ts">
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
import { ListLevels } from './listLevels';
import { Style } from './style';

export const importsMapListInfo = {
    LinkElement,
    ListLevels,
    Style,
};

/**
 * DTO container with a single document list.
 */
export class ListInfo extends LinkElement {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "listId",
            baseName: "ListId",
            type: "number",
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
            name: "style",
            baseName: "Style",
            type: "Style",
        },
        {
            name: "listLevels",
            baseName: "ListLevels",
            type: "ListLevels",
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ListInfo.attributeTypeMap);
    }

    /**
     * Gets or sets the unique identifier of the list.
     * You do not normally need to use this property. But if you use it, you normally do so in conjunction with the Aspose.Words.Lists.ListCollection.GetListByListId(System.Int32) method to find a list by its identifier.
     */
    public listId: number;

    /**
     * Gets or sets a value indicating whether the list contains 9 levels; false when 1 level.
     * The lists that you create with Aspose.Words are always multi-level lists and contain 9 levels. Microsoft Word 2003 and later always create multi-level lists with 9 levels. But in some documents, created with earlier versions of Microsoft Word you might encounter lists that have 1 level only.
     */
    public isMultiLevel: boolean;

    /**
     * Gets or sets a value indicating whether list should be restarted at each section. The default value is false.
     * This option is supported only in RTF, DOC and DOCX document formats. This option will be written to DOCX only if Aspose.Words.Saving.OoxmlCompliance is higher then Aspose.Words.Saving.OoxmlCompliance.Ecma376_2006.
     */
    public isRestartAtEachSection: boolean;

    /**
     * Gets or sets a value indicating whether this list is a definition of a list style.
     * When this property is true, the Aspose.Words.Lists.List.Style property returns the list style that this list defines. By modifying properties of a list that defines a list style, you modify The properties of the list style. A list that is a definition of a list style cannot be applied directly to paragraphs to make them numbered. Aspose.Words.Lists.List.Style Aspose.Words.Lists.List.IsListStyleReference.
     */
    public isListStyleDefinition: boolean;

    /**
     * Gets or sets a value indicating whether this list is a reference to a list style.
     * Note, modifying properties of a list that is a reference to list style has no effect. The list formatting specified in the list style itself always takes precedence. Aspose.Words.Lists.List.Style Aspose.Words.Lists.List.IsListStyleDefinition.
     */
    public isListStyleReference: boolean;

    /**
     * Gets or sets the list style that this list references or defines.
     * If this list is not associated with a list style, the property will return null. A list could be a reference to a list style, in this case Aspose.Words.Lists.List.IsListStyleReference will be true. A list could be a definition of a list style, in this case Aspose.Words.Lists.List.IsListStyleDefinition will be true. Such a list cannot be applied to paragraphs in the document directly.
     */
    public style: Style;

    /**
     * Gets or sets the collection of list levels for this list.
     * Use this property to access and modify formatting individual to each level of the list.
     */
    public listLevels: ListLevels;

    public constructor(init?: Partial< ListInfo >) {
        super(init);
        Object.assign(this, init);
    }

    public collectFilesContent(_resultFilesContent: Array<any>) {
    }
}


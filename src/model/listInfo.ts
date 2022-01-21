/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="listInfo.ts">
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
     * Gets or sets a value indicating whether this list is a definition of a list style.
     */
    protected _isListStyleDefinition: boolean;

    /**
     * Gets or sets a value indicating whether this list is a definition of a list style.
     */
    public get isListStyleDefinition(): boolean {
        return this._isListStyleDefinition;
    }

    /**
     * Gets or sets a value indicating whether this list is a definition of a list style.
     */
    public set isListStyleDefinition(value: boolean) {
        this._isListStyleDefinition = value;
    }


    /**
     * Gets or sets a value indicating whether this list is a reference to a list style.
     */
    protected _isListStyleReference: boolean;

    /**
     * Gets or sets a value indicating whether this list is a reference to a list style.
     */
    public get isListStyleReference(): boolean {
        return this._isListStyleReference;
    }

    /**
     * Gets or sets a value indicating whether this list is a reference to a list style.
     */
    public set isListStyleReference(value: boolean) {
        this._isListStyleReference = value;
    }


    /**
     * Gets or sets a value indicating whether the list contains 9 levels; false when 1 level.
     */
    protected _isMultiLevel: boolean;

    /**
     * Gets or sets a value indicating whether the list contains 9 levels; false when 1 level.
     */
    public get isMultiLevel(): boolean {
        return this._isMultiLevel;
    }

    /**
     * Gets or sets a value indicating whether the list contains 9 levels; false when 1 level.
     */
    public set isMultiLevel(value: boolean) {
        this._isMultiLevel = value;
    }


    /**
     * Gets or sets a value indicating whether list should be restarted at each section. The default value is false.
     */
    protected _isRestartAtEachSection: boolean;

    /**
     * Gets or sets a value indicating whether list should be restarted at each section. The default value is false.
     */
    public get isRestartAtEachSection(): boolean {
        return this._isRestartAtEachSection;
    }

    /**
     * Gets or sets a value indicating whether list should be restarted at each section. The default value is false.
     */
    public set isRestartAtEachSection(value: boolean) {
        this._isRestartAtEachSection = value;
    }


    /**
     * Gets or sets the unique identifier of the list.
     */
    protected _listId: number;

    /**
     * Gets or sets the unique identifier of the list.
     */
    public get listId(): number {
        return this._listId;
    }

    /**
     * Gets or sets the unique identifier of the list.
     */
    public set listId(value: number) {
        this._listId = value;
    }


    /**
     * Gets or sets the collection of list levels for this list.
     */
    protected _listLevels: ListLevels;

    /**
     * Gets or sets the collection of list levels for this list.
     */
    public get listLevels(): ListLevels {
        return this._listLevels;
    }

    /**
     * Gets or sets the collection of list levels for this list.
     */
    public set listLevels(value: ListLevels) {
        this._listLevels = value;
    }


    /**
     * Gets or sets the list style that this list references or defines.
     */
    protected _style: Style;

    /**
     * Gets or sets the list style that this list references or defines.
     */
    public get style(): Style {
        return this._style;
    }

    /**
     * Gets or sets the list style that this list references or defines.
     */
    public set style(value: Style) {
        this._style = value;
    }


    public constructor(init?: Partial< ListInfo >) {
        super(init);
        Object.assign(this, init);
    }
}


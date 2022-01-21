/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="styleUpdate.ts">
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

export const importsMapStyleUpdate = {
};

/**
 * Represents a single document style properties to update.
 */
export class StyleUpdate {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "baseStyleName",
            baseName: "BaseStyleName",
            type: "string",
        },
        {
            name: "isQuickStyle",
            baseName: "IsQuickStyle",
            type: "boolean",
        },
        {
            name: "name",
            baseName: "Name",
            type: "string",
        },
        {
            name: "nextParagraphStyleName",
            baseName: "NextParagraphStyleName",
            type: "string",
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return StyleUpdate.attributeTypeMap;
    }

    /**
     * Gets or sets the name of the style this style is based on.
     */
    protected _baseStyleName: string;

    /**
     * Gets or sets the name of the style this style is based on.
     */
    public get baseStyleName(): string {
        return this._baseStyleName;
    }

    /**
     * Gets or sets the name of the style this style is based on.
     */
    public set baseStyleName(value: string) {
        this._baseStyleName = value;
    }


    /**
     * Gets or sets a value indicating whether this style is shown in the Quick Style gallery inside MS Word UI.
     */
    protected _isQuickStyle: boolean;

    /**
     * Gets or sets a value indicating whether this style is shown in the Quick Style gallery inside MS Word UI.
     */
    public get isQuickStyle(): boolean {
        return this._isQuickStyle;
    }

    /**
     * Gets or sets a value indicating whether this style is shown in the Quick Style gallery inside MS Word UI.
     */
    public set isQuickStyle(value: boolean) {
        this._isQuickStyle = value;
    }


    /**
     * Gets or sets the name of the style.
     */
    protected _name: string;

    /**
     * Gets or sets the name of the style.
     */
    public get name(): string {
        return this._name;
    }

    /**
     * Gets or sets the name of the style.
     */
    public set name(value: string) {
        this._name = value;
    }


    /**
     * Gets or sets the name of the style to be applied automatically to a new paragraph inserted after a paragraph formatted with the specified style.
     */
    protected _nextParagraphStyleName: string;

    /**
     * Gets or sets the name of the style to be applied automatically to a new paragraph inserted after a paragraph formatted with the specified style.
     */
    public get nextParagraphStyleName(): string {
        return this._nextParagraphStyleName;
    }

    /**
     * Gets or sets the name of the style to be applied automatically to a new paragraph inserted after a paragraph formatted with the specified style.
     */
    public set nextParagraphStyleName(value: string) {
        this._nextParagraphStyleName = value;
    }


    public constructor(init?: Partial< StyleUpdate >) {
        Object.assign(this, init);
    }
}


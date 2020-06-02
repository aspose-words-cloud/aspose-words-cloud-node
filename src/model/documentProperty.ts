/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="documentProperty.ts">
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

export const importsMapDocumentProperty = {
    LinkElement,
};

/**
 * Words document property DTO.
 */
export class DocumentProperty extends LinkElement {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "builtIn",
            baseName: "BuiltIn",
            type: "boolean",
        },
        {
            name: "name",
            baseName: "Name",
            type: "string",
        },
        {
            name: "value",
            baseName: "Value",
            type: "string",
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(DocumentProperty.attributeTypeMap);
    }

    /**
     * Gets or sets a value indicating whether flag indicates whether the property is built-in or not.
     * If true the property is built-in, if false the property is custom.
     */
    public builtIn: boolean;

    /**
     * Gets or sets name of the document property.
     */
    public name: string;

    /**
     * Gets or sets string value of the document property.
     */
    public value: string;

    public constructor(init?: Partial< DocumentProperty >) {
        super(init);
        Object.assign(this, init);
    }
}


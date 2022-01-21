/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="customXmlPart.ts">
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
import { CustomXmlPartLink } from './customXmlPartLink';

export const importsMapCustomXmlPart = {
    CustomXmlPartLink,
};

/**
 * DTO container with a CustomXmlPart.
 */
export class CustomXmlPart extends CustomXmlPartLink {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "data",
            baseName: "Data",
            type: "string",
        },
        {
            name: "id",
            baseName: "Id",
            type: "string",
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(CustomXmlPart.attributeTypeMap);
    }

    /**
     * Gets or sets the custom xml part data.
     */
    private _data: string;

    /**
     * Gets or sets the custom xml part data.
     */
    public get data(): string {
        return this._data;
    }

    /**
     * Gets or sets the custom xml part data.
     */
    public set data(value: string) {
        this._data = value;
    }


    /**
     * Gets or sets the custom xml part id.
     */
    private _id: string;

    /**
     * Gets or sets the custom xml part id.
     */
    public get id(): string {
        return this._id;
    }

    /**
     * Gets or sets the custom xml part id.
     */
    public set id(value: string) {
        this._id = value;
    }


    public constructor(init?: Partial< CustomXmlPart >) {
        super(init);
        Object.assign(this, init);
    }
}


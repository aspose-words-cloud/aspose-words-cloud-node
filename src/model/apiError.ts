/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="apiError.ts">
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

export const importsMapApiError = {
};

/**
 * Api error.
 */
export class ApiError {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "code",
            baseName: "Code",
            type: "string",
        },
        {
            name: "dateTime",
            baseName: "DateTime",
            type: "Date",
        },
        {
            name: "description",
            baseName: "Description",
            type: "string",
        },
        {
            name: "innerError",
            baseName: "InnerError",
            type: "ApiError",
        },
        {
            name: "message",
            baseName: "Message",
            type: "string",
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ApiError.attributeTypeMap;
    }

    /**
     * Gets or sets api error code.
     */
    public code: string;

    /**
     * Gets or sets server datetime.
     */
    public dateTime: Date;

    /**
     * Gets or sets error description.
     */
    public description: string;

    /**
     * Gets or sets inner error.
     */
    public innerError: ApiError;

    /**
     * Gets or sets error message.
     */
    public message: string;

    public constructor(init?: Partial< ApiError >) {
        Object.assign(this, init);
    }
}


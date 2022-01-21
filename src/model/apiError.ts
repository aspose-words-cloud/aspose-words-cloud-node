/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="apiError.ts">
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
     * Gets or sets the API error code.
     */
    private _code: string;

    /**
     * Gets or sets the API error code.
     */
    public get code(): string {
        return this._code;
    }

    /**
     * Gets or sets the API error code.
     */
    public set code(value: string) {
        this._code = value;
    }


    /**
     * Gets or sets the server DateTime.
     */
    private _dateTime: Date;

    /**
     * Gets or sets the server DateTime.
     */
    public get dateTime(): Date {
        return this._dateTime;
    }

    /**
     * Gets or sets the server DateTime.
     */
    public set dateTime(value: Date) {
        this._dateTime = value;
    }


    /**
     * Gets or sets the error description.
     */
    private _description: string;

    /**
     * Gets or sets the error description.
     */
    public get description(): string {
        return this._description;
    }

    /**
     * Gets or sets the error description.
     */
    public set description(value: string) {
        this._description = value;
    }


    /**
     * Gets or sets the inner error.
     */
    private _innerError: ApiError;

    /**
     * Gets or sets the inner error.
     */
    public get innerError(): ApiError {
        return this._innerError;
    }

    /**
     * Gets or sets the inner error.
     */
    public set innerError(value: ApiError) {
        this._innerError = value;
    }


    /**
     * Gets or sets the error message.
     */
    private _message: string;

    /**
     * Gets or sets the error message.
     */
    public get message(): string {
        return this._message;
    }

    /**
     * Gets or sets the error message.
     */
    public set message(value: string) {
        this._message = value;
    }


    public constructor(init?: Partial< ApiError >) {
        Object.assign(this, init);
    }
}


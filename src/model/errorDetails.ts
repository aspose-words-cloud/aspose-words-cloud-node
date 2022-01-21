/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="errorDetails.ts">
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

export const importsMapErrorDetails = {
};

/**
 * The error details.
 */
export class ErrorDetails {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "errorDateTime",
            baseName: "ErrorDateTime",
            type: "Date",
        },
        {
            name: "requestId",
            baseName: "RequestId",
            type: "string",
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ErrorDetails.attributeTypeMap;
    }

    /**
     * Error datetime.
     */
    private _errorDateTime: Date;

    /**
     * Error datetime.
     */
    public get errorDateTime(): Date {
        return this._errorDateTime;
    }

    /**
     * Error datetime.
     */
    public set errorDateTime(value: Date) {
        this._errorDateTime = value;
    }


    /**
     * The request id.
     */
    private _requestId: string;

    /**
     * The request id.
     */
    public get requestId(): string {
        return this._requestId;
    }

    /**
     * The request id.
     */
    public set requestId(value: string) {
        this._requestId = value;
    }


    public constructor(init?: Partial< ErrorDetails >) {
        Object.assign(this, init);
    }
}


/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="error.ts">
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
import { ErrorDetails } from './errorDetails';

export const importsMapError = {
    ErrorDetails,
};

/**
 * Error.
 */
export class Error {
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
            name: "description",
            baseName: "Description",
            type: "string",
        },
        {
            name: "innerError",
            baseName: "InnerError",
            type: "ErrorDetails",
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
        return Error.attributeTypeMap;
    }

    /**
     * Code.
     */
    private _code: string;

    /**
     * Code.
     */
    public get code(): string {
        return this._code;
    }

    /**
     * Code.
     */
    public set code(value: string) {
        this._code = value;
    }


    /**
     * Description.
     */
    private _description: string;

    /**
     * Description.
     */
    public get description(): string {
        return this._description;
    }

    /**
     * Description.
     */
    public set description(value: string) {
        this._description = value;
    }


    /**
     * Inner Error.
     */
    private _innerError: ErrorDetails;

    /**
     * Inner Error.
     */
    public get innerError(): ErrorDetails {
        return this._innerError;
    }

    /**
     * Inner Error.
     */
    public set innerError(value: ErrorDetails) {
        this._innerError = value;
    }


    /**
     * Message.
     */
    private _message: string;

    /**
     * Message.
     */
    public get message(): string {
        return this._message;
    }

    /**
     * Message.
     */
    public set message(value: string) {
        this._message = value;
    }


    public constructor(init?: Partial< Error >) {
        Object.assign(this, init);
    }
}


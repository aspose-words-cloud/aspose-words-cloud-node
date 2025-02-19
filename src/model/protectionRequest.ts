/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="protectionRequest.ts">
 *   Copyright (c) 2025 Aspose.Words for Cloud
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
import { ProtectionRequestBase } from './protectionRequestBase';

export const importsMapProtectionRequest = {
    ProtectionRequestBase,
};

/**
 * Request on changing of protection.
 * @deprecated ProtectionRequest is deprecated and remains for backwards compatibility only.
 */
export class ProtectionRequest extends ProtectionRequestBase {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "newPassword",
            baseName: "NewPassword",
            type: "string",
        },
        {
            name: "password",
            baseName: "Password",
            type: "string",
        },
        {
            name: "protectionType",
            baseName: "ProtectionType",
            type: "string",
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ProtectionRequest.attributeTypeMap);
    }

    /**
     * Gets or sets the new password.
     */
    public newPassword: string;

    /**
     * Gets or sets the current password.
     */
    public password: string;

    /**
     * Gets or sets the new type of protection.
     */
    public protectionType: string;

    public constructor(init?: Partial< ProtectionRequest >) {
        super(init);
        Object.assign(this, init);
    }

    public collectFilesContent(_resultFilesContent: Array<any>) {
    }

    public validate() {
        super.validate();
        if (this.password === null || this.password === undefined)
        {
            throw new Error('Property Password in ProtectionRequest is required.');
        }
    }
}


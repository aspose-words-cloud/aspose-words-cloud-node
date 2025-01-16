/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="signOptions.ts">
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

export const importsMapSignOptions = {
};

/**
 * Container class for digital signature options.
 */
export class SignOptions implements ModelInterface {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "comments",
            baseName: "Comments",
            type: "string",
        },
        {
            name: "decryptionPassword",
            baseName: "DecryptionPassword",
            type: "string",
        },
        {
            name: "providerId",
            baseName: "ProviderId",
            type: "string",
        },
        {
            name: "signatureLineId",
            baseName: "SignatureLineId",
            type: "string",
        },
        {
            name: "signatureLineImageFilename",
            baseName: "SignatureLineImageFilename",
            type: "string",
        },
        {
            name: "signTime",
            baseName: "SignTime",
            type: "Date",
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return SignOptions.attributeTypeMap;
    }

    /**
     * Gets or sets comments on the digital signature. Default value is empty string.
     */
    public comments: string;

    /**
     * Gets or sets the password to decrypt source document. Default value is empty string.
     */
    public decryptionPassword: string;

    /**
     * Gets or sets the class Guid of the signature cryptography provider. Default value is Empty (all zeroes) Guid.
     */
    public providerId: string;

    /**
     * Gets or sets user defined signature line Guid. Default value is Empty (all zeroes) Guid.
     */
    public signatureLineId: string;

    /**
     * Gets or sets the image that will be shown in associated SignatureLine. Default value is empty string.
     */
    public signatureLineImageFilename: string;

    /**
     * Gets or sets the date of signing. Default value is current time (Now).
     */
    public signTime: Date;

    public constructor(init?: Partial< SignOptions >) {
        Object.assign(this, init);
    }

    public collectFilesContent(_resultFilesContent: Array<any>) {
    }

    public validate() {
    }
}


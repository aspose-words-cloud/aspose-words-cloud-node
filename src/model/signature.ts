/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="signature.ts">
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

export const importsMapSignature = {
};

/**
 * The REST response with a document signature collection.
 * This response is returned by the Service when handling any "https://api.aspose.cloud/v4.0/words/Test.doc/signatures" REST API requests.
 */
export class Signature implements ModelInterface {
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
            name: "issuerName",
            baseName: "IssuerName",
            type: "string",
        },
        {
            name: "isValid",
            baseName: "IsValid",
            type: "boolean",
        },
        {
            name: "signatureType",
            baseName: "SignatureType",
            type: "string",
        },
        {
            name: "signatureValue",
            baseName: "SignatureValue",
            type: "string",
        },
        {
            name: "signTime",
            baseName: "SignTime",
            type: "Date",
        },
        {
            name: "subjectName",
            baseName: "SubjectName",
            type: "string",
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Signature.attributeTypeMap;
    }

    /**
     * Gets or sets the signing purpose comment.
     */
    public comments: string;

    /**
     * Gets or sets the subject distinguished name of the certificate issuer.
     */
    public issuerName: string;

    /**
     * Gets or sets a value indicating whether this digital signature is valid.
     */
    public isValid: boolean;

    /**
     * Gets or sets the type of the digital signature.
     */
    public signatureType: string;

    /**
     * Gets or sets an array of bytes representing a signature value as base64 string.
     */
    public signatureValue: string;

    /**
     * Gets or sets the time the document was signed.
     */
    public signTime: Date;

    /**
     * Gets or sets the subject distinguished name of the certificate that was used to sign the document.
     */
    public subjectName: string;

    public constructor(init?: Partial< Signature >) {
        Object.assign(this, init);
    }

    public collectFilesContent(_resultFilesContent: Array<any>) {
    }

    public validate() {
        if (this.isValid === null || this.isValid === undefined)
        {
            throw new Error('Property IsValid in Signature is required.');
        }
        if (this.signTime === null || this.signTime === undefined)
        {
            throw new Error('Property SignTime in Signature is required.');
        }
    }
}


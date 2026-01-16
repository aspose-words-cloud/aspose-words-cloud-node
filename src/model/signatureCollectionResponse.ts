/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="signatureCollectionResponse.ts">
 *   Copyright (c) 2026 Aspose.Words for Cloud
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
import { Signature } from './signature';
import { WordsResponse } from './wordsResponse';

export const importsMapSignatureCollectionResponse = {
    Signature,
    WordsResponse,
};

/**
 * The REST response with a document signature collection.
 * This response is returned by the Service when handling any "https://api.aspose.cloud/v4.0/words/Test.doc/signatures" REST API requests.
 */
export class SignatureCollectionResponse extends WordsResponse {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "isValid",
            baseName: "IsValid",
            type: "boolean",
        },
        {
            name: "signatures",
            baseName: "Signatures",
            type: "Array<Signature>",
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SignatureCollectionResponse.attributeTypeMap);
    }

    /**
     * Gets or sets a value indicating whether all signatures are valid. Returns true if there is no signatures.
     */
    public isValid: boolean;

    /**
     * Gets or sets signatures.
     */
    public signatures: Array<Signature>;

    public constructor(init?: Partial< SignatureCollectionResponse >) {
        super(init);
        Object.assign(this, init);
    }

    public collectFilesContent(_resultFilesContent: Array<any>) {
    }

    public validate() {
        super.validate();
        if (this.isValid === null || this.isValid === undefined)
        {
            throw new Error('Property IsValid in SignatureCollectionResponse is required.');
        }

        if (this.signatures !== null && this.signatures !== undefined)
        {
            for (let elementSignatures of this.signatures)
            {
                elementSignatures?.validate();
            }
        }

    }
}


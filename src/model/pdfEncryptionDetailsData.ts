/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="pdfEncryptionDetailsData.ts">
 *   Copyright (c) 2024 Aspose.Words for Cloud
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
import { PdfPermissions } from './pdfPermissions';

export const importsMapPdfEncryptionDetailsData = {
    PdfPermissions,
};

/**
 * Container class for details of encryption.
 */
export class PdfEncryptionDetailsData implements ModelInterface {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "ownerPassword",
            baseName: "OwnerPassword",
            type: "string",
        },
        {
            name: "permissions",
            baseName: "Permissions",
            type: "Array<PdfPermissions>",
        },
        {
            name: "userPassword",
            baseName: "UserPassword",
            type: "string",
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return PdfEncryptionDetailsData.attributeTypeMap;
    }

    /**
     * Gets or sets the owner password for the encrypted PDF document.
     */
    public ownerPassword: string;

    /**
     * Gets or sets the operations that are allowed to a user on the encrypted PDF document.
     */
    public permissions: Array<PdfPermissions>;

    /**
     * Gets or sets the user password required for opening the encrypted PDF document.
     */
    public userPassword: string;

    public constructor(init?: Partial< PdfEncryptionDetailsData >) {
        Object.assign(this, init);
    }

    public collectFilesContent(_resultFilesContent: Array<any>) {
    }

    public validate() {
    }
}


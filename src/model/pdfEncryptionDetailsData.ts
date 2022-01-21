/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="pdfEncryptionDetailsData.ts">
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

export const importsMapPdfEncryptionDetailsData = {
};

/**
 * Container class for details of encryption.
 */
export class PdfEncryptionDetailsData {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "encryptionAlgorithm",
            baseName: "EncryptionAlgorithm",
            type: "string",
        },
        {
            name: "ownerPassword",
            baseName: "OwnerPassword",
            type: "string",
        },
        {
            name: "permissions",
            baseName: "Permissions",
            type: "string",
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
     * Gets or sets the encryption algorithm to use.
     */
    private _encryptionAlgorithm: string;

    /**
     * Gets or sets the encryption algorithm to use.
     */
    public get encryptionAlgorithm(): string {
        return this._encryptionAlgorithm;
    }

    /**
     * Gets or sets the encryption algorithm to use.
     */
    public set encryptionAlgorithm(value: string) {
        this._encryptionAlgorithm = value;
    }


    /**
     * Gets or sets the owner password for the encrypted PDF document.
     */
    private _ownerPassword: string;

    /**
     * Gets or sets the owner password for the encrypted PDF document.
     */
    public get ownerPassword(): string {
        return this._ownerPassword;
    }

    /**
     * Gets or sets the owner password for the encrypted PDF document.
     */
    public set ownerPassword(value: string) {
        this._ownerPassword = value;
    }


    /**
     * Gets or sets the operations that are allowed to a user on the encrypted PDF document.
     */
    private _permissions: string;

    /**
     * Gets or sets the operations that are allowed to a user on the encrypted PDF document.
     */
    public get permissions(): string {
        return this._permissions;
    }

    /**
     * Gets or sets the operations that are allowed to a user on the encrypted PDF document.
     */
    public set permissions(value: string) {
        this._permissions = value;
    }


    /**
     * Gets or sets the user password required for opening the encrypted PDF document.
     */
    private _userPassword: string;

    /**
     * Gets or sets the user password required for opening the encrypted PDF document.
     */
    public get userPassword(): string {
        return this._userPassword;
    }

    /**
     * Gets or sets the user password required for opening the encrypted PDF document.
     */
    public set userPassword(value: string) {
        this._userPassword = value;
    }


    public constructor(init?: Partial< PdfEncryptionDetailsData >) {
        Object.assign(this, init);
    }
}


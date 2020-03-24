/*
* MIT License

* Copyright (c) 2019 Aspose Pty Ltd

* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:

* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.

* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/
import { AttributeInfo } from '../internal/attributeInfo';

export const importsMapPdfEncryptionDetailsData = {
};

/**
 * container class for details of encryption.
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
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return PdfEncryptionDetailsData.attributeTypeMap;
    }

    /**
     * Gets or sets specifies the encryption algorithm to use.
     */
    public encryptionAlgorithm: string;
    
    /**
     * Gets or sets specifies the owner password for the encrypted PDF document.
     */
    public ownerPassword: string;
    
    /**
     * Gets or sets specifies the operations that are allowed to a user on an encrypted PDF document.
     */
    public permissions: string;
    
    /**
     * Gets or sets specifies the user password required for opening the encrypted PDF document.
     */
    public userPassword: string;
    
    public constructor(init?: Partial<PdfEncryptionDetailsData>) {
        
        Object.assign(this, init);
    }        
}

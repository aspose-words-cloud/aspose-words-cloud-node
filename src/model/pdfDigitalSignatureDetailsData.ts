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

export const importsMapPdfDigitalSignatureDetailsData = {
};

/**
 * container class for details of digital signature.
 */
export class PdfDigitalSignatureDetailsData {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "certificateFilename",
            baseName: "CertificateFilename",
            type: "string",
        },        
        {
            name: "hashAlgorithm",
            baseName: "HashAlgorithm",
            type: "string",
        },        
        {
            name: "location",
            baseName: "Location",
            type: "string",
        },        
        {
            name: "reason",
            baseName: "Reason",
            type: "string",
        },        
        {
            name: "signatureDate",
            baseName: "SignatureDate",
            type: "Date",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return PdfDigitalSignatureDetailsData.attributeTypeMap;
    }

    /**
     * Gets or sets certificate's filename using for signing.
     */
    public certificateFilename: string;
    
    /**
     * Gets or sets hash algorithm.
     */
    public hashAlgorithm: string;
    
    /**
     * Gets or sets location of the signing.
     */
    public location: string;
    
    /**
     * Gets or sets reason for the signing.
     */
    public reason: string;
    
    /**
     * Gets or sets date of the signing.
     */
    public signatureDate: Date;
    
    public constructor(init?: Partial<PdfDigitalSignatureDetailsData>) {
        
        Object.assign(this, init);
    }        
}

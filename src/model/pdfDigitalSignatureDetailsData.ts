/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="pdfDigitalSignatureDetailsData.ts">
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

export const importsMapPdfDigitalSignatureDetailsData = {
};

/**
 * Container class for details of digital signature.
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
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return PdfDigitalSignatureDetailsData.attributeTypeMap;
    }

    /**
     * Gets or sets the certificate's filename using for signing.
     */
    protected _certificateFilename: string;

    /**
     * Gets or sets the certificate's filename using for signing.
     */
    public get certificateFilename(): string {
        return this._certificateFilename;
    }

    /**
     * Gets or sets the certificate's filename using for signing.
     */
    public set certificateFilename(value: string) {
        this._certificateFilename = value;
    }


    /**
     * Gets or sets the hash algorithm.
     */
    protected _hashAlgorithm: string;

    /**
     * Gets or sets the hash algorithm.
     */
    public get hashAlgorithm(): string {
        return this._hashAlgorithm;
    }

    /**
     * Gets or sets the hash algorithm.
     */
    public set hashAlgorithm(value: string) {
        this._hashAlgorithm = value;
    }


    /**
     * Gets or sets the location of the signing.
     */
    protected _location: string;

    /**
     * Gets or sets the location of the signing.
     */
    public get location(): string {
        return this._location;
    }

    /**
     * Gets or sets the location of the signing.
     */
    public set location(value: string) {
        this._location = value;
    }


    /**
     * Gets or sets the reason for the signing.
     */
    protected _reason: string;

    /**
     * Gets or sets the reason for the signing.
     */
    public get reason(): string {
        return this._reason;
    }

    /**
     * Gets or sets the reason for the signing.
     */
    public set reason(value: string) {
        this._reason = value;
    }


    /**
     * Gets or sets the date of the signing.
     */
    protected _signatureDate: Date;

    /**
     * Gets or sets the date of the signing.
     */
    public get signatureDate(): Date {
        return this._signatureDate;
    }

    /**
     * Gets or sets the date of the signing.
     */
    public set signatureDate(value: Date) {
        this._signatureDate = value;
    }


    public constructor(init?: Partial< PdfDigitalSignatureDetailsData >) {
        Object.assign(this, init);
    }
}


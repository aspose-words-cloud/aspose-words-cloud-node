/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="documentEntry.ts">
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

export const importsMapDocumentEntry = {
};

/**
 * Represents a document which will be appended to the original resource document.
 */
export class DocumentEntry {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "href",
            baseName: "Href",
            type: "string",
        },
        {
            name: "importFormatMode",
            baseName: "ImportFormatMode",
            type: "string",
        },
        {
            name: "password",
            baseName: "Password",
            type: "string",
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return DocumentEntry.attributeTypeMap;
    }

    /**
     * Gets or sets the path to document to append at the server.
     */
    private _href: string;

    /**
     * Gets or sets the path to document to append at the server.
     */
    public get href(): string {
        return this._href;
    }

    /**
     * Gets or sets the path to document to append at the server.
     */
    public set href(value: string) {
        this._href = value;
    }


    /**
     * Gets or sets the option that controls formatting will be used: appended or destination document. Can be KeepSourceFormatting or UseDestinationStyles.
     */
    private _importFormatMode: string;

    /**
     * Gets or sets the option that controls formatting will be used: appended or destination document. Can be KeepSourceFormatting or UseDestinationStyles.
     */
    public get importFormatMode(): string {
        return this._importFormatMode;
    }

    /**
     * Gets or sets the option that controls formatting will be used: appended or destination document. Can be KeepSourceFormatting or UseDestinationStyles.
     */
    public set importFormatMode(value: string) {
        this._importFormatMode = value;
    }


    /**
     * Gets or sets document password encrypted on API public key. The default value is null (the document has no password).
     */
    private _password: string;

    /**
     * Gets or sets document password encrypted on API public key. The default value is null (the document has no password).
     */
    public get password(): string {
        return this._password;
    }

    /**
     * Gets or sets document password encrypted on API public key. The default value is null (the document has no password).
     */
    public set password(value: string) {
        this._password = value;
    }


    public constructor(init?: Partial< DocumentEntry >) {
        Object.assign(this, init);
    }
}


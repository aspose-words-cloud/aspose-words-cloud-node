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
import { DocumentProperties } from './documentProperties';
import { Link } from './link';

export const importsMapDocument = {
    DocumentProperties,
    Link,
};

/**
 * Represents Words document DTO.
 */
export class Document {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "links",
            baseName: "Links",
            type: "Array<Link>",
        },        
        {
            name: "fileName",
            baseName: "FileName",
            type: "string",
        },        
        {
            name: "sourceFormat",
            baseName: "SourceFormat",
            type: "Document.SourceFormatEnum",
        },        
        {
            name: "isEncrypted",
            baseName: "IsEncrypted",
            type: "boolean",
        },        
        {
            name: "isSigned",
            baseName: "IsSigned",
            type: "boolean",
        },        
        {
            name: "documentProperties",
            baseName: "DocumentProperties",
            type: "DocumentProperties",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Document.attributeTypeMap;
    }

    /**
     * Gets or sets a list of links that originate from this document.
     */
    public links: Array<Link>;
    
    /**
     * Gets or sets the name of the file.
     */
    public fileName: string;
    
    /**
     * Gets or sets the original format of the document.
     */
    public sourceFormat: Document.SourceFormatEnum;
    
    /**
     * Gets or sets a value indicating whether returns true if the document is encrypted and requires a password to open.
     */
    public isEncrypted: boolean;
    
    /**
     * Gets or sets a value indicating whether returns true if the document contains a digital signature. This property merely informs that a digital signature is present on a document, but it does not specify whether the signature is valid or not.
     */
    public isSigned: boolean;
    
    /**
     * Gets or sets documentProperties.
     */
    public documentProperties: DocumentProperties;
    
    public constructor(init?: Partial<Document>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Enums for Document
 */
// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace Document {
    export enum SourceFormatEnum {
        Unknown = 'Unknown' as any,
        Doc = 'Doc' as any,
        Dot = 'Dot' as any,
        DocPreWord60 = 'DocPreWord60' as any,
        Docx = 'Docx' as any,
        Docm = 'Docm' as any,
        Dotx = 'Dotx' as any,
        Dotm = 'Dotm' as any,
        FlatOpc = 'FlatOpc' as any,
        Rtf = 'Rtf' as any,
        WordML = 'WordML' as any,
        Html = 'Html' as any,
        Mhtml = 'Mhtml' as any,
        Epub = 'Epub' as any,
        Text = 'Text' as any,
        Odt = 'Odt' as any,
        Ott = 'Ott' as any,
        Pdf = 'Pdf' as any,
        Xps = 'Xps' as any,
        Tiff = 'Tiff' as any,
        Svg = 'Svg' as any,
    }
}
// tslint:enable:quotemark

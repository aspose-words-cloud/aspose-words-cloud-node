/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="documentEntry.ts">
 *   Copyright (c) 2023 Aspose.Words for Cloud
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
import { BaseEntry } from './baseEntry';

export const importsMapDocumentEntry = {
    BaseEntry,
};

/**
 * Represents a document which will be appended to the original resource document.
 */
export class DocumentEntry extends BaseEntry {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "encryptedPassword",
            baseName: "EncryptedPassword",
            type: "string",
        },
        {
            name: "importFormatMode",
            baseName: "ImportFormatMode",
            type: "DocumentEntry.ImportFormatModeEnum",
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(DocumentEntry.attributeTypeMap);
    }

    /**
     * Gets or sets document password encrypted on API public key. The default value is null (the document has no password).
     */
    public encryptedPassword: string;

    /**
     * Gets or sets the option that controls formatting will be used: appended or destination document. Can be KeepSourceFormatting or UseDestinationStyles.
     */
    public importFormatMode: DocumentEntry.ImportFormatModeEnum;

    public constructor(init?: Partial< DocumentEntry >) {
        super(init);
        Object.assign(this, init);
    }

    public collectFilesContent(_resultFilesContent: Array<any>) {
        super.collectFilesContent(_resultFilesContent);
    }

    public validate() {
        super.validate();
        if (this.importFormatMode === null || this.importFormatMode === undefined)
        {
            throw new Error('Property ImportFormatMode in DocumentEntry is required.');
        }
    }
}

/**
 * Enums for DocumentEntry
 */
// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace DocumentEntry {
    export enum ImportFormatModeEnum {
        UseDestinationStyles = 'UseDestinationStyles' as any,
        KeepSourceFormatting = 'KeepSourceFormatting' as any,
        KeepDifferentStyles = 'KeepDifferentStyles' as any
    }
}
// tslint:enable:quotemark


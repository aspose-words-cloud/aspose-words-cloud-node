/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="documentEntryList.ts">
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
import { ModelInterface } from './modelInterface';
import { BaseDocumentEntryList } from './baseDocumentEntryList';
import { DocumentEntry } from './documentEntry';

export const importsMapDocumentEntryList = {
    BaseDocumentEntryList,
    DocumentEntry,
};

/**
 * Represents a list of documents which will be appended to the original resource document.
 */
export class DocumentEntryList extends BaseDocumentEntryList {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "documentEntries",
            baseName: "DocumentEntries",
            type: "Array<DocumentEntry>",
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(DocumentEntryList.attributeTypeMap);
    }

    /**
     * Gets or sets the list of documents.
     */
    public documentEntries: Array<DocumentEntry>;

    public constructor(init?: Partial< DocumentEntryList >) {
        super(init);
        Object.assign(this, init);
    }

    public collectFilesContent(_resultFilesContent: Array<any>) {
        if (this.documentEntries)
        {
            for (let element of this.documentEntries)
            {
                element.collectFilesContent(_resultFilesContent);
            }
        }

    }
}


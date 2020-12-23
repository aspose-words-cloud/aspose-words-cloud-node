/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="statDataResponse.ts">
 *   Copyright (c) 2020 Aspose.Words for Cloud
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
import { DocumentStatData } from './documentStatData';
import { FileLink } from './fileLink';
import { WordsResponse } from './wordsResponse';

export const importsMapStatDataResponse = {
    DocumentStatData,
    FileLink,
    WordsResponse,
};

/**
 * The REST response with document's statistical data.
 */
export class StatDataResponse extends WordsResponse {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "documentLink",
            baseName: "DocumentLink",
            type: "FileLink",
        },
        {
            name: "statData",
            baseName: "StatData",
            type: "DocumentStatData",
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(StatDataResponse.attributeTypeMap);
    }

    /**
     * Gets or sets the link to the document.
     */
    public documentLink: FileLink;

    /**
     * Gets or sets the statistical data of the document.
     */
    public statData: DocumentStatData;

    public constructor(init?: Partial< StatDataResponse >) {
        super(init);
        Object.assign(this, init);
    }
}


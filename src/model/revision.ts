/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="revision.ts">
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

export const importsMapRevision = {
};

/**
 * Revision Dto.
 */
export class Revision implements ModelInterface {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "revisionAuthor",
            baseName: "RevisionAuthor",
            type: "string",
        },
        {
            name: "revisionDateTime",
            baseName: "RevisionDateTime",
            type: "Date",
        },
        {
            name: "revisionText",
            baseName: "RevisionText",
            type: "string",
        },
        {
            name: "revisionType",
            baseName: "RevisionType",
            type: "string",
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Revision.attributeTypeMap;
    }

    /**
     * Gets or sets the revision author.
     */
    public revisionAuthor: string;

    /**
     * Gets or sets the revision date time.
     */
    public revisionDateTime: Date;

    /**
     * Gets or sets the revision text.
     */
    public revisionText: string;

    /**
     * Gets or sets the revision type.
     */
    public revisionType: string;

    public constructor(init?: Partial< Revision >) {
        Object.assign(this, init);
    }

    public collectFilesContent(_resultFilesContent: Array<any>) {
    }

    public validate() {
        if (this.revisionDateTime === null || this.revisionDateTime === undefined)
        {
            throw new Error('Property RevisionDateTime in Revision is required.');
        }
    }
}


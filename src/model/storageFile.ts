/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="storageFile.ts">
 *   Copyright (c) 2025 Aspose.Words for Cloud
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

export const importsMapStorageFile = {
};

/**
 * File or folder information.
 */
export class StorageFile implements ModelInterface {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "isFolder",
            baseName: "IsFolder",
            type: "boolean",
        },
        {
            name: "modifiedDate",
            baseName: "ModifiedDate",
            type: "Date",
        },
        {
            name: "name",
            baseName: "Name",
            type: "string",
        },
        {
            name: "path",
            baseName: "Path",
            type: "string",
        },
        {
            name: "size",
            baseName: "Size",
            type: "number",
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return StorageFile.attributeTypeMap;
    }

    /**
     * True if it is a folder.
     */
    public isFolder: boolean;

    /**
     * File or folder last modified DateTime.
     */
    public modifiedDate: Date;

    /**
     * File or folder name.
     */
    public name: string;

    /**
     * File or folder path.
     */
    public path: string;

    /**
     * File or folder size.
     */
    public size: number;

    public constructor(init?: Partial< StorageFile >) {
        Object.assign(this, init);
    }

    public collectFilesContent(_resultFilesContent: Array<any>) {
    }

    public validate() {
        if (this.isFolder === null || this.isFolder === undefined)
        {
            throw new Error('Property IsFolder in StorageFile is required.');
        }
        if (this.size === null || this.size === undefined)
        {
            throw new Error('Property Size in StorageFile is required.');
        }
    }
}


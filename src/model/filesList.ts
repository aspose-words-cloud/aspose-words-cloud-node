/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="filesList.ts">
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
import { StorageFile } from './storageFile';

export const importsMapFilesList = {
    StorageFile,
};

/**
 * Files list.
 */
export class FilesList implements ModelInterface {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "value",
            baseName: "Value",
            type: "Array<StorageFile>",
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return FilesList.attributeTypeMap;
    }

    /**
     * Files and folders contained by folder StorageFile.
     */
    public value: Array<StorageFile>;

    public constructor(init?: Partial< FilesList >) {
        Object.assign(this, init);
    }

    public collectFilesContent(_resultFilesContent: Array<any>) {
    }

    public validate() {

        if (this.value !== null && this.value !== undefined)
        {
            for (let elementValue of this.value)
            {
                elementValue?.validate();
            }
        }

    }
}


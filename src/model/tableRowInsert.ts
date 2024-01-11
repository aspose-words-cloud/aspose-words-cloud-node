/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="tableRowInsert.ts">
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
import { Position } from './position';

export const importsMapTableRowInsert = {
    Position,
};

/**
 * DTO container with a table row element.
 */
export class TableRowInsert implements ModelInterface {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "columnsCount",
            baseName: "ColumnsCount",
            type: "number",
        },
        {
            name: "existingRowPosition",
            baseName: "ExistingRowPosition",
            type: "Position",
        },
        {
            name: "insertAfter",
            baseName: "InsertAfter",
            type: "number",
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return TableRowInsert.attributeTypeMap;
    }

    /**
     * Gets or sets the count of columns. The default value is 1.
     */
    public columnsCount: number;

    /**
     * Gets or sets the position of the table row that will be used to determine the placement of a new row.
     */
    public existingRowPosition: Position;

    /**
     * Gets or sets table row will be inserted after row with specified 0-based index.
     */
    public insertAfter: number;

    public constructor(init?: Partial< TableRowInsert >) {
        Object.assign(this, init);
    }

    public collectFilesContent(_resultFilesContent: Array<any>) {
    }

    public validate() {
        if (this.columnsCount === null || this.columnsCount === undefined)
        {
            throw new Error('Property ColumnsCount in TableRowInsert is required.');
        }

        this.existingRowPosition?.validate();


    }
}


/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="tableInsert.ts">
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
import { Position } from './position';

export const importsMapTableInsert = {
    Position,
};

/**
 * DTO container with a table element.
 */
export class TableInsert implements ModelInterface {
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
            name: "position",
            baseName: "Position",
            type: "Position",
        },
        {
            name: "rowsCount",
            baseName: "RowsCount",
            type: "number",
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return TableInsert.attributeTypeMap;
    }

    /**
     * Gets or sets the number of columns. The default value is 2.
     */
    public columnsCount: number;

    /**
     * Gets or sets the position to insert the table. The table will be inserted using the specified position.
     */
    public position: Position;

    /**
     * Gets or sets the number of rows. The default value is 2.
     */
    public rowsCount: number;

    public constructor(init?: Partial< TableInsert >) {
        Object.assign(this, init);
    }

    public collectFilesContent(_resultFilesContent: Array<any>) {
    }

    public validate() {
        if (this.columnsCount === null || this.columnsCount === undefined)
        {
            throw new Error('Property ColumnsCount in TableInsert is required.');
        }
        if (this.rowsCount === null || this.rowsCount === undefined)
        {
            throw new Error('Property RowsCount in TableInsert is required.');
        }

        this.position?.validate();


    }
}


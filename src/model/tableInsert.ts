/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="tableInsert.ts">
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
import { DocumentPosition } from './documentPosition';

export const importsMapTableInsert = {
    DocumentPosition,
};

/**
 * DTO container with a table element.
 */
export class TableInsert {
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
            type: "DocumentPosition",
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
    protected _columnsCount: number;

    /**
     * Gets or sets the number of columns. The default value is 2.
     */
    public get columnsCount(): number {
        return this._columnsCount;
    }

    /**
     * Gets or sets the number of columns. The default value is 2.
     */
    public set columnsCount(value: number) {
        this._columnsCount = value;
    }


    /**
     * Gets or sets the position to insert the table. The table will be inserted before the specified position.
     */
    protected _position: DocumentPosition;

    /**
     * Gets or sets the position to insert the table. The table will be inserted before the specified position.
     */
    public get position(): DocumentPosition {
        return this._position;
    }

    /**
     * Gets or sets the position to insert the table. The table will be inserted before the specified position.
     */
    public set position(value: DocumentPosition) {
        this._position = value;
    }


    /**
     * Gets or sets the number of rows. The default value is 2.
     */
    protected _rowsCount: number;

    /**
     * Gets or sets the number of rows. The default value is 2.
     */
    public get rowsCount(): number {
        return this._rowsCount;
    }

    /**
     * Gets or sets the number of rows. The default value is 2.
     */
    public set rowsCount(value: number) {
        this._rowsCount = value;
    }


    public constructor(init?: Partial< TableInsert >) {
        Object.assign(this, init);
    }
}


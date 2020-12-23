/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="tableInsertDto.ts">
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
import { DocumentPosition } from './documentPosition';

export const importsMapTableInsertDto = {
    DocumentPosition,
};

/**
 * DTO container with a table element.
 */
export class TableInsertDto {
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
        return TableInsertDto.attributeTypeMap;
    }

    /**
     * Gets or sets the number of columns. The default value is 2.
     */
    public columnsCount: number;

    /**
     * Gets or sets the position to insert the table. The table will be inserted before the specified position.
     */
    public position: DocumentPosition;

    /**
     * Gets or sets the number of rows. The default value is 2.
     */
    public rowsCount: number;

    public constructor(init?: Partial< TableInsertDto >) {
        Object.assign(this, init);
    }
}


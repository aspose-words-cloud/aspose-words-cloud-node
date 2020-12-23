/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="table.ts">
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
import { NodeLink } from './nodeLink';
import { TableProperties } from './tableProperties';
import { TableRow } from './tableRow';

export const importsMapTable = {
    NodeLink,
    TableProperties,
    TableRow,
};

/**
 * DTO container with a table element.
 */
export class Table extends NodeLink {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "tableProperties",
            baseName: "TableProperties",
            type: "TableProperties",
        },
        {
            name: "tableRowList",
            baseName: "TableRowList",
            type: "Array<TableRow>",
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(Table.attributeTypeMap);
    }

    /**
     * Gets or sets table properties.
     */
    public tableProperties: TableProperties;

    /**
     * Gets or sets the collection of table's rows.
     */
    public tableRowList: Array<TableRow>;

    public constructor(init?: Partial< Table >) {
        super(init);
        Object.assign(this, init);
    }
}


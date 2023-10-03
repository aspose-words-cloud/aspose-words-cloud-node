/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="tableCellFormat.ts">
 *   Copyright (c) 2023 Aspose.Words for Cloud
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
import { LinkElement } from './linkElement';
import { PreferredWidth } from './preferredWidth';

export const importsMapTableCellFormat = {
    LinkElement,
    PreferredWidth,
};

/**
 * DTO container with all formatting for a table row.
 */
export class TableCellFormat extends LinkElement {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "bottomPadding",
            baseName: "BottomPadding",
            type: "number",
        },
        {
            name: "fitText",
            baseName: "FitText",
            type: "boolean",
        },
        {
            name: "horizontalMerge",
            baseName: "HorizontalMerge",
            type: "TableCellFormat.HorizontalMergeEnum",
        },
        {
            name: "leftPadding",
            baseName: "LeftPadding",
            type: "number",
        },
        {
            name: "orientation",
            baseName: "Orientation",
            type: "TableCellFormat.OrientationEnum",
        },
        {
            name: "preferredWidth",
            baseName: "PreferredWidth",
            type: "PreferredWidth",
        },
        {
            name: "rightPadding",
            baseName: "RightPadding",
            type: "number",
        },
        {
            name: "topPadding",
            baseName: "TopPadding",
            type: "number",
        },
        {
            name: "verticalAlignment",
            baseName: "VerticalAlignment",
            type: "TableCellFormat.VerticalAlignmentEnum",
        },
        {
            name: "verticalMerge",
            baseName: "VerticalMerge",
            type: "TableCellFormat.VerticalMergeEnum",
        },
        {
            name: "width",
            baseName: "Width",
            type: "number",
        },
        {
            name: "wrapText",
            baseName: "WrapText",
            type: "boolean",
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TableCellFormat.attributeTypeMap);
    }

    /**
     * Gets or sets the amount of space (in points) to add below the contents of the cell.
     */
    public bottomPadding: number;

    /**
     * Gets or sets a value indicating whether to fit text in the cell, compress each paragraph to the width of the cell.
     */
    public fitText: boolean;

    /**
     * Gets or sets the option that controls how the cell is merged horizontally with other cells in the row.
     */
    public horizontalMerge: TableCellFormat.HorizontalMergeEnum;

    /**
     * Gets or sets the amount of space (in points) to add to the left of the contents of the cell.
     */
    public leftPadding: number;

    /**
     * Gets or sets the orientation of text in a table cell.
     */
    public orientation: TableCellFormat.OrientationEnum;

    /**
     * Gets or sets the preferred width of the cell.
     * The preferred width (along with the table's Auto Fit option) determines how the actual width of the cell is calculated by the table layout algorithm. Table layout can be performed by Aspose.Words when it saves the document or by Microsoft Word when it displays the document.The preferred width can be specified in points or in percent. The preferred width can also be specified as "auto", which means no preferred width is specified.The default value is Auto.
     */
    public preferredWidth: PreferredWidth;

    /**
     * Gets or sets the amount of space (in points) to add to the right of the contents of the cell.
     */
    public rightPadding: number;

    /**
     * Gets or sets the amount of space (in points) to add above the contents of the cell.
     */
    public topPadding: number;

    /**
     * Gets or sets the vertical alignment of text in the cell.
     */
    public verticalAlignment: TableCellFormat.VerticalAlignmentEnum;

    /**
     * Gets or sets the option that controls how the cell is merged with other cells vertically.
     * Cells can only be merged vertically if their left and right boundaries are identical.When cells are vertically merged, the display areas of the merged cells are consolidated. The consolidated area is used to display the contents of the first vertically merged cell and all other vertically merged cells must be empty.
     */
    public verticalMerge: TableCellFormat.VerticalMergeEnum;

    /**
     * Gets or sets the width of the cell in points.
     * The width is calculated by Aspose.Words on document loading and saving. Currently, not every combination of table, cell and document properties is supported. The returned value may not be accurate for some documents. It may not exactly match the cell width as calculated by MS Word when the document is opened in MS Word.Setting this property is not recommended. There is no guarantee that the cell will actually have the set width. The width may be adjusted to accommodate cell contents in an auto-fit table layout. Cells in other rows may have conflicting width settings. The table may be resized to fit into the container or to meet table width settings. Consider using PreferredWidth for setting the cell width. Setting this property sets PreferredWidth implicitly since version 15.8.
     */
    public width: number;

    /**
     * Gets or sets a value indicating whether to wrap text in the cell.
     */
    public wrapText: boolean;

    public constructor(init?: Partial< TableCellFormat >) {
        super(init);
        Object.assign(this, init);
    }

    public collectFilesContent(_resultFilesContent: Array<any>) {
    }
}

/**
 * Enums for TableCellFormat
 */
// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace TableCellFormat {
    export enum HorizontalMergeEnum {
        None = 'None' as any,
        First = 'First' as any,
        Previous = 'Previous' as any
    }

    export enum OrientationEnum {
        Horizontal = 'Horizontal' as any,
        Downward = 'Downward' as any,
        Upward = 'Upward' as any,
        HorizontalRotatedFarEast = 'HorizontalRotatedFarEast' as any,
        VerticalFarEast = 'VerticalFarEast' as any,
        VerticalRotatedFarEast = 'VerticalRotatedFarEast' as any
    }

    export enum VerticalAlignmentEnum {
        Top = 'Top' as any,
        Center = 'Center' as any,
        Bottom = 'Bottom' as any
    }

    export enum VerticalMergeEnum {
        None = 'None' as any,
        First = 'First' as any,
        Previous = 'Previous' as any
    }
}
// tslint:enable:quotemark


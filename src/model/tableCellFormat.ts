/*
* MIT License

* Copyright (c) 2019 Aspose Pty Ltd

* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:

* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.

* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/
import { AttributeInfo } from '../internal/attributeInfo';
import { LinkElement } from './linkElement';
import { PreferredWidth } from './preferredWidth';
import { WordsApiLink } from './wordsApiLink';

export const importsMapTableCellFormat = {
    LinkElement,
    PreferredWidth,
    WordsApiLink,
};

/**
 * Represents all formatting for a table row.
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
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TableCellFormat.attributeTypeMap);
    }

    /**
     * Gets or sets returns or sets the amount of space (in points) to add below the contents of cell.
     */
    public bottomPadding: number;
    
    /**
     * Gets or sets if true, fits text in the cell, compressing each paragraph to the width of the cell.
     */
    public fitText: boolean;
    
    /**
     * Gets or sets specifies how the cell is merged horizontally with other cells in the row.
     */
    public horizontalMerge: TableCellFormat.HorizontalMergeEnum;
    
    /**
     * Gets or sets returns or sets the amount of space (in points) to add to the left of the contents of cell.
     */
    public leftPadding: number;
    
    /**
     * Gets or sets returns or sets the orientation of text in a table cell.
     */
    public orientation: TableCellFormat.OrientationEnum;
    
    /**
     * Gets or sets preferredWidth.
     */
    public preferredWidth: PreferredWidth;
    
    /**
     * Gets or sets returns or sets the amount of space (in points) to add to the right of the contents of cell.
     */
    public rightPadding: number;
    
    /**
     * Gets or sets returns or sets the amount of space (in points) to add above the contents of cell.
     */
    public topPadding: number;
    
    /**
     * Gets or sets returns or sets the vertical alignment of text in the cell.
     */
    public verticalAlignment: TableCellFormat.VerticalAlignmentEnum;
    
    /**
     * Gets or sets specifies how the cell is merged with other cells vertically.
     */
    public verticalMerge: TableCellFormat.VerticalMergeEnum;
    
    /**
     * Gets or sets the width of the cell in points.
     */
    public width: number;
    
    /**
     * Gets or sets if true, wrap text for the cell.
     */
    public wrapText: boolean;
    
    public constructor(init?: Partial<TableCellFormat>) {
        super(init);
        Object.assign(this, init);
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
        Previous = 'Previous' as any,
    }
    export enum OrientationEnum {
        Horizontal = 'Horizontal' as any,
        Downward = 'Downward' as any,
        Upward = 'Upward' as any,
        HorizontalRotatedFarEast = 'HorizontalRotatedFarEast' as any,
        VerticalFarEast = 'VerticalFarEast' as any,
        VerticalRotatedFarEast = 'VerticalRotatedFarEast' as any,
    }
    export enum VerticalAlignmentEnum {
        Top = 'Top' as any,
        Center = 'Center' as any,
        Bottom = 'Bottom' as any,
    }
    export enum VerticalMergeEnum {
        None = 'None' as any,
        First = 'First' as any,
        Previous = 'Previous' as any,
    }
}
// tslint:enable:quotemark

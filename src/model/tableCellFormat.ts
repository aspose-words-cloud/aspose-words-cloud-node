/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="tableCellFormat.ts">
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
    private _bottomPadding: number;

    /**
     * Gets or sets the amount of space (in points) to add below the contents of the cell.
     */
    public get bottomPadding(): number {
        return this._bottomPadding;
    }

    /**
     * Gets or sets the amount of space (in points) to add below the contents of the cell.
     */
    public set bottomPadding(value: number) {
        this._bottomPadding = value;
    }


    /**
     * Gets or sets a value indicating whether to fit text in the cell, compress each paragraph to the width of the cell.
     */
    private _fitText: boolean;

    /**
     * Gets or sets a value indicating whether to fit text in the cell, compress each paragraph to the width of the cell.
     */
    public get fitText(): boolean {
        return this._fitText;
    }

    /**
     * Gets or sets a value indicating whether to fit text in the cell, compress each paragraph to the width of the cell.
     */
    public set fitText(value: boolean) {
        this._fitText = value;
    }


    /**
     * Gets or sets the option that controls how the cell is merged horizontally with other cells in the row.
     */
    private _horizontalMerge: TableCellFormat.HorizontalMergeEnum;

    /**
     * Gets or sets the option that controls how the cell is merged horizontally with other cells in the row.
     */
    public get horizontalMerge(): TableCellFormat.HorizontalMergeEnum {
        return this._horizontalMerge;
    }

    /**
     * Gets or sets the option that controls how the cell is merged horizontally with other cells in the row.
     */
    public set horizontalMerge(value: TableCellFormat.HorizontalMergeEnum) {
        this._horizontalMerge = value;
    }


    /**
     * Gets or sets the amount of space (in points) to add to the left of the contents of the cell.
     */
    private _leftPadding: number;

    /**
     * Gets or sets the amount of space (in points) to add to the left of the contents of the cell.
     */
    public get leftPadding(): number {
        return this._leftPadding;
    }

    /**
     * Gets or sets the amount of space (in points) to add to the left of the contents of the cell.
     */
    public set leftPadding(value: number) {
        this._leftPadding = value;
    }


    /**
     * Gets or sets the orientation of text in a table cell.
     */
    private _orientation: TableCellFormat.OrientationEnum;

    /**
     * Gets or sets the orientation of text in a table cell.
     */
    public get orientation(): TableCellFormat.OrientationEnum {
        return this._orientation;
    }

    /**
     * Gets or sets the orientation of text in a table cell.
     */
    public set orientation(value: TableCellFormat.OrientationEnum) {
        this._orientation = value;
    }


    /**
     * Gets or sets the preferred width of the cell.
     */
    private _preferredWidth: PreferredWidth;

    /**
     * Gets or sets the preferred width of the cell.
     */
    public get preferredWidth(): PreferredWidth {
        return this._preferredWidth;
    }

    /**
     * Gets or sets the preferred width of the cell.
     */
    public set preferredWidth(value: PreferredWidth) {
        this._preferredWidth = value;
    }


    /**
     * Gets or sets the amount of space (in points) to add to the right of the contents of the cell.
     */
    private _rightPadding: number;

    /**
     * Gets or sets the amount of space (in points) to add to the right of the contents of the cell.
     */
    public get rightPadding(): number {
        return this._rightPadding;
    }

    /**
     * Gets or sets the amount of space (in points) to add to the right of the contents of the cell.
     */
    public set rightPadding(value: number) {
        this._rightPadding = value;
    }


    /**
     * Gets or sets the amount of space (in points) to add above the contents of the cell.
     */
    private _topPadding: number;

    /**
     * Gets or sets the amount of space (in points) to add above the contents of the cell.
     */
    public get topPadding(): number {
        return this._topPadding;
    }

    /**
     * Gets or sets the amount of space (in points) to add above the contents of the cell.
     */
    public set topPadding(value: number) {
        this._topPadding = value;
    }


    /**
     * Gets or sets the vertical alignment of text in the cell.
     */
    private _verticalAlignment: TableCellFormat.VerticalAlignmentEnum;

    /**
     * Gets or sets the vertical alignment of text in the cell.
     */
    public get verticalAlignment(): TableCellFormat.VerticalAlignmentEnum {
        return this._verticalAlignment;
    }

    /**
     * Gets or sets the vertical alignment of text in the cell.
     */
    public set verticalAlignment(value: TableCellFormat.VerticalAlignmentEnum) {
        this._verticalAlignment = value;
    }


    /**
     * Gets or sets the option that controls how the cell is merged with other cells vertically.
     */
    private _verticalMerge: TableCellFormat.VerticalMergeEnum;

    /**
     * Gets or sets the option that controls how the cell is merged with other cells vertically.
     */
    public get verticalMerge(): TableCellFormat.VerticalMergeEnum {
        return this._verticalMerge;
    }

    /**
     * Gets or sets the option that controls how the cell is merged with other cells vertically.
     */
    public set verticalMerge(value: TableCellFormat.VerticalMergeEnum) {
        this._verticalMerge = value;
    }


    /**
     * Gets or sets the width of the cell in points.
     */
    private _width: number;

    /**
     * Gets or sets the width of the cell in points.
     */
    public get width(): number {
        return this._width;
    }

    /**
     * Gets or sets the width of the cell in points.
     */
    public set width(value: number) {
        this._width = value;
    }


    /**
     * Gets or sets a value indicating whether to wrap text in the cell.
     */
    private _wrapText: boolean;

    /**
     * Gets or sets a value indicating whether to wrap text in the cell.
     */
    public get wrapText(): boolean {
        return this._wrapText;
    }

    /**
     * Gets or sets a value indicating whether to wrap text in the cell.
     */
    public set wrapText(value: boolean) {
        this._wrapText = value;
    }


    public constructor(init?: Partial< TableCellFormat >) {
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


/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="border.ts">
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
import { LinkElement } from './linkElement';
import { XmlColor } from './xmlColor';

export const importsMapBorder = {
    LinkElement,
    XmlColor,
};

/**
 * Represents a border of an object.
 * Borders can be applied to various document elements including paragraph, run of text inside a paragraph or a table cell.
 */
export class Border extends LinkElement {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "borderType",
            baseName: "BorderType",
            type: "Border.BorderTypeEnum",
        },
        {
            name: "color",
            baseName: "Color",
            type: "XmlColor",
        },
        {
            name: "distanceFromText",
            baseName: "DistanceFromText",
            type: "number",
        },
        {
            name: "lineStyle",
            baseName: "LineStyle",
            type: "Border.LineStyleEnum",
        },
        {
            name: "lineWidth",
            baseName: "LineWidth",
            type: "number",
        },
        {
            name: "shadow",
            baseName: "Shadow",
            type: "boolean",
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(Border.attributeTypeMap);
    }

    /**
     * Gets or sets the border type.
     */
    public borderType: Border.BorderTypeEnum;

    /**
     * Gets or sets the border color.
     */
    public color: XmlColor;

    /**
     * Gets or sets the distance of the border from text or from the page edge in points.
     * Has no effect and will be automatically reset to zero for borders of table cells.
     */
    public distanceFromText: number;

    /**
     * Gets or sets the border style.
     * If you set line style to none, then line width is automatically changed to zero.
     */
    public lineStyle: Border.LineStyleEnum;

    /**
     * Gets or sets the border width in points.
     * If you set line width greater than zero when line style is none, the line style is automatically changed to single line.
     */
    public lineWidth: number;

    /**
     * Gets or sets a value indicating whether the border has a shadow.
     * In Microsoft Word, for a border to have a shadow, the borders on all four sides (left, top, right and bottom) should be of the same type, width, color and all should have the Shadow property set to true.
     */
    public shadow: boolean;

    public constructor(init?: Partial< Border >) {
        super(init);
        Object.assign(this, init);
    }

    public collectFilesContent(_resultFilesContent: Array<any>) {
    }

    public validate() {
        super.validate();

        this.color?.validate();





    }
}

/**
 * Enums for Border
 */
// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace Border {
    export enum BorderTypeEnum {
        Bottom = 'Bottom' as any,
        Left = 'Left' as any,
        Right = 'Right' as any,
        Top = 'Top' as any,
        Horizontal = 'Horizontal' as any,
        Vertical = 'Vertical' as any,
        DiagonalDown = 'DiagonalDown' as any,
        DiagonalUp = 'DiagonalUp' as any,
        None = 'None' as any
    }

    export enum LineStyleEnum {
        None = 'None' as any,
        Single = 'Single' as any,
        Thick = 'Thick' as any,
        Double = 'Double' as any,
        Hairline = 'Hairline' as any,
        Dot = 'Dot' as any,
        DashLargeGap = 'DashLargeGap' as any,
        DotDash = 'DotDash' as any,
        DotDotDash = 'DotDotDash' as any,
        Triple = 'Triple' as any,
        ThinThickSmallGap = 'ThinThickSmallGap' as any,
        ThickThinSmallGap = 'ThickThinSmallGap' as any,
        ThinThickThinSmallGap = 'ThinThickThinSmallGap' as any,
        ThinThickMediumGap = 'ThinThickMediumGap' as any,
        ThickThinMediumGap = 'ThickThinMediumGap' as any,
        ThinThickThinMediumGap = 'ThinThickThinMediumGap' as any,
        ThinThickLargeGap = 'ThinThickLargeGap' as any,
        ThickThinLargeGap = 'ThickThinLargeGap' as any,
        ThinThickThinLargeGap = 'ThinThickThinLargeGap' as any,
        Wave = 'Wave' as any,
        DoubleWave = 'DoubleWave' as any,
        DashSmallGap = 'DashSmallGap' as any,
        DashDotStroker = 'DashDotStroker' as any,
        Emboss3D = 'Emboss3D' as any,
        Engrave3D = 'Engrave3D' as any,
        Outset = 'Outset' as any,
        Inset = 'Inset' as any
    }
}
// tslint:enable:quotemark


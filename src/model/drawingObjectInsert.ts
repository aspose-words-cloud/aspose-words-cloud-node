/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="drawingObjectInsert.ts">
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

export const importsMapDrawingObjectInsert = {
    Position,
};

/**
 * Drawing object element for insert.
 */
export class DrawingObjectInsert implements ModelInterface {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "position",
            baseName: "Position",
            type: "Position",
        },
        {
            name: "relativeHorizontalPosition",
            baseName: "RelativeHorizontalPosition",
            type: "DrawingObjectInsert.RelativeHorizontalPositionEnum",
        },
        {
            name: "left",
            baseName: "Left",
            type: "number",
        },
        {
            name: "relativeVerticalPosition",
            baseName: "RelativeVerticalPosition",
            type: "DrawingObjectInsert.RelativeVerticalPositionEnum",
        },
        {
            name: "top",
            baseName: "Top",
            type: "number",
        },
        {
            name: "width",
            baseName: "Width",
            type: "number",
        },
        {
            name: "height",
            baseName: "Height",
            type: "number",
        },
        {
            name: "wrapType",
            baseName: "WrapType",
            type: "DrawingObjectInsert.WrapTypeEnum",
        },
        {
            name: "aspectRatioLocked",
            baseName: "AspectRatioLocked",
            type: "boolean",
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return DrawingObjectInsert.attributeTypeMap;
    }

    /**
     * Gets or sets the position, where the DrawingObject will be inserted.
     */
    public position: Position;

    /**
     * Gets or sets the relative horizontal position, from which the distance to the image is measured.
     */
    public relativeHorizontalPosition: DrawingObjectInsert.RelativeHorizontalPositionEnum;

    /**
     * Gets or sets the distance in points from the origin to the left side of the image.
     */
    public left: number;

    /**
     * Gets or sets the relative vertical position, from which the distance to the image is measured.
     */
    public relativeVerticalPosition: DrawingObjectInsert.RelativeVerticalPositionEnum;

    /**
     * Gets or sets the distance in points from the origin to the top side of the image.
     */
    public top: number;

    /**
     * Gets or sets the width of the DrawingObjects in points.
     */
    public width: number;

    /**
     * Gets or sets the height of the DrawingObject in points.
     */
    public height: number;

    /**
     * Gets or sets the option indicating how to wrap text around the image.
     */
    public wrapType: DrawingObjectInsert.WrapTypeEnum;

    /**
     * Gets or sets a value indicating whether AspectRatioLocked option on or off.
     */
    public aspectRatioLocked: boolean;

    public constructor(init?: Partial< DrawingObjectInsert >) {
        Object.assign(this, init);
    }

    public collectFilesContent(_resultFilesContent: Array<any>) {
    }

    public validate() {
        if (this.relativeHorizontalPosition === null || this.relativeHorizontalPosition === undefined)
        {
            throw new Error('Property RelativeHorizontalPosition in DrawingObjectInsert is required.');
        }
        if (this.left === null || this.left === undefined)
        {
            throw new Error('Property Left in DrawingObjectInsert is required.');
        }
        if (this.relativeVerticalPosition === null || this.relativeVerticalPosition === undefined)
        {
            throw new Error('Property RelativeVerticalPosition in DrawingObjectInsert is required.');
        }
        if (this.top === null || this.top === undefined)
        {
            throw new Error('Property Top in DrawingObjectInsert is required.');
        }
        if (this.width === null || this.width === undefined)
        {
            throw new Error('Property Width in DrawingObjectInsert is required.');
        }
        if (this.height === null || this.height === undefined)
        {
            throw new Error('Property Height in DrawingObjectInsert is required.');
        }
        if (this.wrapType === null || this.wrapType === undefined)
        {
            throw new Error('Property WrapType in DrawingObjectInsert is required.');
        }

        this.position?.validate();









    }
}

/**
 * Enums for DrawingObjectInsert
 */
// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace DrawingObjectInsert {
    export enum RelativeHorizontalPositionEnum {
        Margin = 'Margin' as any,
        Page = 'Page' as any,
        Column = 'Column' as any,
        Default = 'Default' as any,
        Character = 'Character' as any,
        LeftMargin = 'LeftMargin' as any,
        RightMargin = 'RightMargin' as any,
        InsideMargin = 'InsideMargin' as any,
        OutsideMargin = 'OutsideMargin' as any
    }

    export enum RelativeVerticalPositionEnum {
        Margin = 'Margin' as any,
        TableDefault = 'TableDefault' as any,
        Page = 'Page' as any,
        Paragraph = 'Paragraph' as any,
        TextFrameDefault = 'TextFrameDefault' as any,
        Line = 'Line' as any,
        TopMargin = 'TopMargin' as any,
        BottomMargin = 'BottomMargin' as any,
        InsideMargin = 'InsideMargin' as any,
        OutsideMargin = 'OutsideMargin' as any
    }

    export enum WrapTypeEnum {
        Inline = 'Inline' as any,
        TopBottom = 'TopBottom' as any,
        Square = 'Square' as any,
        None = 'None' as any,
        Tight = 'Tight' as any,
        Through = 'Through' as any
    }
}
// tslint:enable:quotemark


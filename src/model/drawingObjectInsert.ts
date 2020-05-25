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
import { DocumentPosition } from './documentPosition';

export const importsMapDrawingObjectInsert = {
    DocumentPosition,
};

/**
 * Drawing object element for insert.
 */
export class DrawingObjectInsert {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "position",
            baseName: "Position",
            type: "DocumentPosition",
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
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return DrawingObjectInsert.attributeTypeMap;
    }

    /**
     * Gets or sets position.
     */
    public position: DocumentPosition;
    
    /**
     * Gets or sets specifies where the distance to the image is measured from.             
     */
    public relativeHorizontalPosition: DrawingObjectInsert.RelativeHorizontalPositionEnum;
    
    /**
     * Gets or sets distance in points from the origin to the left side of the image.             
     */
    public left: number;
    
    /**
     * Gets or sets specifies where the distance to the image measured from.
     */
    public relativeVerticalPosition: DrawingObjectInsert.RelativeVerticalPositionEnum;
    
    /**
     * Gets or sets distance in points from the origin to the top side of the image.
     */
    public top: number;
    
    /**
     * Gets or sets width of the drawing objects in points.
     */
    public width: number;
    
    /**
     * Gets or sets height of the drawing object in points.
     */
    public height: number;
    
    /**
     * Gets or sets specifies how to wrap text around the image.
     */
    public wrapType: DrawingObjectInsert.WrapTypeEnum;
    
    public constructor(init?: Partial<DrawingObjectInsert>) {
        
        Object.assign(this, init);
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
        OutsideMargin = 'OutsideMargin' as any,
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
        OutsideMargin = 'OutsideMargin' as any,
    }
    export enum WrapTypeEnum {
        Inline = 'Inline' as any,
        TopBottom = 'TopBottom' as any,
        Square = 'Square' as any,
        None = 'None' as any,
        Tight = 'Tight' as any,
        Through = 'Through' as any,
    }
}
// tslint:enable:quotemark

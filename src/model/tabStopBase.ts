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

export const importsMapTabStopBase = {
};

/**
 * Base class for paragraph format tab stop DTO.
 */
export class TabStopBase {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "alignment",
            baseName: "Alignment",
            type: "TabStopBase.AlignmentEnum",
        },        
        {
            name: "leader",
            baseName: "Leader",
            type: "TabStopBase.LeaderEnum",
        },        
        {
            name: "position",
            baseName: "Position",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return TabStopBase.attributeTypeMap;
    }

    /**
     * Gets or sets the alignment of text at this tab stop.
     */
    public alignment: TabStopBase.AlignmentEnum;
    
    /**
     * Gets or sets the type of the leader line displayed under the tab character.
     */
    public leader: TabStopBase.LeaderEnum;
    
    /**
     * Gets or sets the position of the tab stop in points.
     */
    public position: number;
    
    public constructor(init?: Partial<TabStopBase>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Enums for TabStopBase
 */
// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace TabStopBase {
    export enum AlignmentEnum {
        Left = 'Left' as any,
        Center = 'Center' as any,
        Right = 'Right' as any,
        Decimal = 'Decimal' as any,
        Bar = 'Bar' as any,
        List = 'List' as any,
        Clear = 'Clear' as any,
    }
    export enum LeaderEnum {
        None = 'None' as any,
        Dots = 'Dots' as any,
        Dashes = 'Dashes' as any,
        Line = 'Line' as any,
        Heavy = 'Heavy' as any,
        MiddleDot = 'MiddleDot' as any,
    }
}
// tslint:enable:quotemark

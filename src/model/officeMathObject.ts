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
import { OfficeMathLink } from './officeMathLink';
import { StoryChildNodes } from './storyChildNodes';

export const importsMapOfficeMathObject = {
    OfficeMathLink,
    StoryChildNodes,
};

/**
 * OfficeMath object.
 */
export class OfficeMathObject extends OfficeMathLink {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "content",
            baseName: "Content",
            type: "StoryChildNodes",
        },        
        {
            name: "displayType",
            baseName: "DisplayType",
            type: "OfficeMathObject.DisplayTypeEnum",
        },        
        {
            name: "justification",
            baseName: "Justification",
            type: "OfficeMathObject.JustificationEnum",
        },        
        {
            name: "mathObjectType",
            baseName: "MathObjectType",
            type: "OfficeMathObject.MathObjectTypeEnum",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(OfficeMathObject.attributeTypeMap);
    }

    /**
     * Gets or sets content.
     */
    public content: StoryChildNodes;
    
    /**
     * Gets or sets /sets Office Math display format type which represents whether an equation is displayed inline with the text or displayed on its own line.
     */
    public displayType: OfficeMathObject.DisplayTypeEnum;
    
    /**
     * Gets or sets /sets Office Math justification.
     */
    public justification: OfficeMathObject.JustificationEnum;
    
    /**
     * Gets or sets type Aspose.Words.Math.OfficeMath.MathObjectType of this Office Math object.
     */
    public mathObjectType: OfficeMathObject.MathObjectTypeEnum;
    
    public constructor(init?: Partial<OfficeMathObject>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Enums for OfficeMathObject
 */
// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace OfficeMathObject {
    export enum DisplayTypeEnum {
        Display = 'Display' as any,
        Inline = 'Inline' as any,
    }
    export enum JustificationEnum {
        CenterGroup = 'CenterGroup' as any,
        Default = 'Default' as any,
        Center = 'Center' as any,
        Left = 'Left' as any,
        Right = 'Right' as any,
        Inline = 'Inline' as any,
    }
    export enum MathObjectTypeEnum {
        OMath = 'OMath' as any,
        OMathPara = 'OMathPara' as any,
        Accent = 'Accent' as any,
        Bar = 'Bar' as any,
        BorderBox = 'BorderBox' as any,
        Box = 'Box' as any,
        Delimiter = 'Delimiter' as any,
        Degree = 'Degree' as any,
        Argument = 'Argument' as any,
        Array = 'Array' as any,
        Fraction = 'Fraction' as any,
        Denominator = 'Denominator' as any,
        Numerator = 'Numerator' as any,
        Function = 'Function' as any,
        FunctionName = 'FunctionName' as any,
        GroupCharacter = 'GroupCharacter' as any,
        Limit = 'Limit' as any,
        LowerLimit = 'LowerLimit' as any,
        UpperLimit = 'UpperLimit' as any,
        Matrix = 'Matrix' as any,
        MatrixRow = 'MatrixRow' as any,
        NAry = 'NAry' as any,
        Phantom = 'Phantom' as any,
        Radical = 'Radical' as any,
        SubscriptPart = 'SubscriptPart' as any,
        SuperscriptPart = 'SuperscriptPart' as any,
        PreSubSuperscript = 'PreSubSuperscript' as any,
        Subscript = 'Subscript' as any,
        SubSuperscript = 'SubSuperscript' as any,
        Supercript = 'Supercript' as any,
    }
}
// tslint:enable:quotemark

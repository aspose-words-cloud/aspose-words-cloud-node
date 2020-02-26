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

export const importsMapStringFormatData = {
};

/**
 * Allows to specify System.Drawing.StringFormat options.
 */
export class StringFormatData {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "alignment",
            baseName: "Alignment",
            type: "StringFormatData.AlignmentEnum",
        },        
        {
            name: "formatFlags",
            baseName: "FormatFlags",
            type: "StringFormatData.FormatFlagsEnum",
        },        
        {
            name: "hotkeyPrefix",
            baseName: "HotkeyPrefix",
            type: "StringFormatData.HotkeyPrefixEnum",
        },        
        {
            name: "lineAlignment",
            baseName: "LineAlignment",
            type: "StringFormatData.LineAlignmentEnum",
        },        
        {
            name: "trimming",
            baseName: "Trimming",
            type: "StringFormatData.TrimmingEnum",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return StringFormatData.attributeTypeMap;
    }

    /**
     * Gets or sets horizontal alignment of the string.
     */
    public alignment: StringFormatData.AlignmentEnum;
    
    /**
     * Gets or sets a System.Drawing.StringFormatFlags enumeration that contains formatting information.
     */
    public formatFlags: StringFormatData.FormatFlagsEnum;
    
    /**
     * Gets or sets the System.Drawing.Text.HotkeyPrefix object for this System.Drawing.StringFormat object.
     */
    public hotkeyPrefix: StringFormatData.HotkeyPrefixEnum;
    
    /**
     * Gets or sets the vertical alignment of the string.
     */
    public lineAlignment: StringFormatData.LineAlignmentEnum;
    
    /**
     * Gets or sets the System.Drawing.StringTrimming enumeration for this System.Drawing.StringFormat object.
     */
    public trimming: StringFormatData.TrimmingEnum;
    
    public constructor(init?: Partial<StringFormatData>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Enums for StringFormatData
 */
// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace StringFormatData {
    export enum AlignmentEnum {
        Near = 'Near' as any,
        Center = 'Center' as any,
        Far = 'Far' as any,
    }
    export enum FormatFlagsEnum {
        DirectionRightToLeft = 'DirectionRightToLeft' as any,
        DirectionVertical = 'DirectionVertical' as any,
        FitBlackBox = 'FitBlackBox' as any,
        DisplayFormatControl = 'DisplayFormatControl' as any,
        NoFontFallback = 'NoFontFallback' as any,
        MeasureTrailingSpaces = 'MeasureTrailingSpaces' as any,
        NoWrap = 'NoWrap' as any,
        LineLimit = 'LineLimit' as any,
        NoClip = 'NoClip' as any,
    }
    export enum HotkeyPrefixEnum {
        None = 'None' as any,
        Show = 'Show' as any,
        Hide = 'Hide' as any,
    }
    export enum LineAlignmentEnum {
        Near = 'Near' as any,
        Center = 'Center' as any,
        Far = 'Far' as any,
    }
    export enum TrimmingEnum {
        None = 'None' as any,
        Character = 'Character' as any,
        Word = 'Word' as any,
        EllipsisCharacter = 'EllipsisCharacter' as any,
        EllipsisWord = 'EllipsisWord' as any,
        EllipsisPath = 'EllipsisPath' as any,
    }
}
// tslint:enable:quotemark

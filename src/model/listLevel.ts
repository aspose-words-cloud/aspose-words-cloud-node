/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="listLevel.ts">
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
import { Font } from './font';
import { LinkElement } from './linkElement';
import { Style } from './style';

export const importsMapListLevel = {
    Font,
    LinkElement,
    Style,
};

/**
 * Represents a document list levels.
 */
export class ListLevel extends LinkElement {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "alignment",
            baseName: "Alignment",
            type: "ListLevel.AlignmentEnum",
        },
        {
            name: "font",
            baseName: "Font",
            type: "Font",
        },
        {
            name: "isLegal",
            baseName: "IsLegal",
            type: "boolean",
        },
        {
            name: "linkedStyle",
            baseName: "LinkedStyle",
            type: "Style",
        },
        {
            name: "numberFormat",
            baseName: "NumberFormat",
            type: "string",
        },
        {
            name: "numberPosition",
            baseName: "NumberPosition",
            type: "number",
        },
        {
            name: "numberStyle",
            baseName: "NumberStyle",
            type: "ListLevel.NumberStyleEnum",
        },
        {
            name: "restartAfterLevel",
            baseName: "RestartAfterLevel",
            type: "number",
        },
        {
            name: "startAt",
            baseName: "StartAt",
            type: "number",
        },
        {
            name: "tabPosition",
            baseName: "TabPosition",
            type: "number",
        },
        {
            name: "textPosition",
            baseName: "TextPosition",
            type: "number",
        },
        {
            name: "trailingCharacter",
            baseName: "TrailingCharacter",
            type: "ListLevel.TrailingCharacterEnum",
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ListLevel.attributeTypeMap);
    }

    /**
     * Gets or sets the justification of the actual number of the list item.
     */
    public alignment: ListLevel.AlignmentEnum;

    /**
     * Gets or sets specifies character formatting used for the list label.
     */
    public font: Font;

    /**
     * Gets or sets a value indicating whether true if the level turns all inherited numbers to Arabic, false if it preserves
     * their number style.
     */
    public isLegal: boolean;

    /**
     * Gets or sets the paragraph style that is linked to this list level.
     */
    public linkedStyle: Style;

    /**
     * Gets or sets returns or sets the number format for the list level.
     */
    public numberFormat: string;

    /**
     * Gets or sets returns or sets the position (in points) of the number or bullet for the list
     * level.
     */
    public numberPosition: number;

    /**
     * Gets or sets returns or sets the number style for this list level.
     */
    public numberStyle: ListLevel.NumberStyleEnum;

    /**
     * Gets or sets or returns the list level that must appear before the specified list level
     * restarts numbering.
     */
    public restartAfterLevel: number;

    /**
     * Gets or sets returns or sets the starting number for this list level.
     */
    public startAt: number;

    /**
     * Gets or sets returns or sets the tab position (in points) for the list level.
     */
    public tabPosition: number;

    /**
     * Gets or sets returns or sets the position (in points) for the second line of wrapping text
     * for the list level.
     */
    public textPosition: number;

    /**
     * Gets or sets returns or sets the character inserted after the number for the list level.
     */
    public trailingCharacter: ListLevel.TrailingCharacterEnum;

    public constructor(init?: Partial< ListLevel >) {
        super(init);
        Object.assign(this, init);
    }
}

/**
 * Enums for ListLevel
 */
// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace ListLevel {
    export enum AlignmentEnum {
        Left = 'Left' as any,
        Center = 'Center' as any,
        Right = 'Right' as any
    }

    export enum NumberStyleEnum {
        Arabic = 'Arabic' as any,
        UppercaseRoman = 'UppercaseRoman' as any,
        LowercaseRoman = 'LowercaseRoman' as any,
        UppercaseLetter = 'UppercaseLetter' as any,
        LowercaseLetter = 'LowercaseLetter' as any,
        Ordinal = 'Ordinal' as any,
        Number = 'Number' as any,
        OrdinalText = 'OrdinalText' as any,
        Hex = 'Hex' as any,
        ChicagoManual = 'ChicagoManual' as any,
        Kanji = 'Kanji' as any,
        KanjiDigit = 'KanjiDigit' as any,
        AiueoHalfWidth = 'AiueoHalfWidth' as any,
        IrohaHalfWidth = 'IrohaHalfWidth' as any,
        ArabicFullWidth = 'ArabicFullWidth' as any,
        ArabicHalfWidth = 'ArabicHalfWidth' as any,
        KanjiTraditional = 'KanjiTraditional' as any,
        KanjiTraditional2 = 'KanjiTraditional2' as any,
        NumberInCircle = 'NumberInCircle' as any,
        DecimalFullWidth = 'DecimalFullWidth' as any,
        Aiueo = 'Aiueo' as any,
        Iroha = 'Iroha' as any,
        LeadingZero = 'LeadingZero' as any,
        Bullet = 'Bullet' as any,
        Ganada = 'Ganada' as any,
        Chosung = 'Chosung' as any,
        GB1 = 'GB1' as any,
        GB2 = 'GB2' as any,
        GB3 = 'GB3' as any,
        GB4 = 'GB4' as any,
        Zodiac1 = 'Zodiac1' as any,
        Zodiac2 = 'Zodiac2' as any,
        Zodiac3 = 'Zodiac3' as any,
        TradChinNum1 = 'TradChinNum1' as any,
        TradChinNum2 = 'TradChinNum2' as any,
        TradChinNum3 = 'TradChinNum3' as any,
        TradChinNum4 = 'TradChinNum4' as any,
        SimpChinNum1 = 'SimpChinNum1' as any,
        SimpChinNum2 = 'SimpChinNum2' as any,
        SimpChinNum3 = 'SimpChinNum3' as any,
        SimpChinNum4 = 'SimpChinNum4' as any,
        HanjaRead = 'HanjaRead' as any,
        HanjaReadDigit = 'HanjaReadDigit' as any,
        Hangul = 'Hangul' as any,
        Hanja = 'Hanja' as any,
        Hebrew1 = 'Hebrew1' as any,
        Arabic1 = 'Arabic1' as any,
        Hebrew2 = 'Hebrew2' as any,
        Arabic2 = 'Arabic2' as any,
        HindiLetter1 = 'HindiLetter1' as any,
        HindiLetter2 = 'HindiLetter2' as any,
        HindiArabic = 'HindiArabic' as any,
        HindiCardinalText = 'HindiCardinalText' as any,
        ThaiLetter = 'ThaiLetter' as any,
        ThaiArabic = 'ThaiArabic' as any,
        ThaiCardinalText = 'ThaiCardinalText' as any,
        VietCardinalText = 'VietCardinalText' as any,
        NumberInDash = 'NumberInDash' as any,
        LowercaseRussian = 'LowercaseRussian' as any,
        UppercaseRussian = 'UppercaseRussian' as any,
        None = 'None' as any,
        Custom = 'Custom' as any
    }

    export enum TrailingCharacterEnum {
        Tab = 'Tab' as any,
        Space = 'Space' as any,
        Nothing = 'Nothing' as any
    }
}
// tslint:enable:quotemark


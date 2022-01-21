/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="pageSetup.ts">
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

export const importsMapPageSetup = {
    LinkElement,
};

/**
 * Represents the page setup properties of a section.
 */
export class PageSetup extends LinkElement {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "bidi",
            baseName: "Bidi",
            type: "boolean",
        },
        {
            name: "borderAlwaysInFront",
            baseName: "BorderAlwaysInFront",
            type: "boolean",
        },
        {
            name: "borderAppliesTo",
            baseName: "BorderAppliesTo",
            type: "PageSetup.BorderAppliesToEnum",
        },
        {
            name: "borderDistanceFrom",
            baseName: "BorderDistanceFrom",
            type: "PageSetup.BorderDistanceFromEnum",
        },
        {
            name: "bottomMargin",
            baseName: "BottomMargin",
            type: "number",
        },
        {
            name: "differentFirstPageHeaderFooter",
            baseName: "DifferentFirstPageHeaderFooter",
            type: "boolean",
        },
        {
            name: "firstPageTray",
            baseName: "FirstPageTray",
            type: "number",
        },
        {
            name: "footerDistance",
            baseName: "FooterDistance",
            type: "number",
        },
        {
            name: "gutter",
            baseName: "Gutter",
            type: "number",
        },
        {
            name: "headerDistance",
            baseName: "HeaderDistance",
            type: "number",
        },
        {
            name: "leftMargin",
            baseName: "LeftMargin",
            type: "number",
        },
        {
            name: "lineNumberCountBy",
            baseName: "LineNumberCountBy",
            type: "number",
        },
        {
            name: "lineNumberDistanceFromText",
            baseName: "LineNumberDistanceFromText",
            type: "number",
        },
        {
            name: "lineNumberRestartMode",
            baseName: "LineNumberRestartMode",
            type: "PageSetup.LineNumberRestartModeEnum",
        },
        {
            name: "lineStartingNumber",
            baseName: "LineStartingNumber",
            type: "number",
        },
        {
            name: "orientation",
            baseName: "Orientation",
            type: "PageSetup.OrientationEnum",
        },
        {
            name: "otherPagesTray",
            baseName: "OtherPagesTray",
            type: "number",
        },
        {
            name: "pageHeight",
            baseName: "PageHeight",
            type: "number",
        },
        {
            name: "pageNumberStyle",
            baseName: "PageNumberStyle",
            type: "PageSetup.PageNumberStyleEnum",
        },
        {
            name: "pageStartingNumber",
            baseName: "PageStartingNumber",
            type: "number",
        },
        {
            name: "pageWidth",
            baseName: "PageWidth",
            type: "number",
        },
        {
            name: "paperSize",
            baseName: "PaperSize",
            type: "PageSetup.PaperSizeEnum",
        },
        {
            name: "restartPageNumbering",
            baseName: "RestartPageNumbering",
            type: "boolean",
        },
        {
            name: "rightMargin",
            baseName: "RightMargin",
            type: "number",
        },
        {
            name: "rtlGutter",
            baseName: "RtlGutter",
            type: "boolean",
        },
        {
            name: "sectionStart",
            baseName: "SectionStart",
            type: "PageSetup.SectionStartEnum",
        },
        {
            name: "suppressEndnotes",
            baseName: "SuppressEndnotes",
            type: "boolean",
        },
        {
            name: "topMargin",
            baseName: "TopMargin",
            type: "number",
        },
        {
            name: "verticalAlignment",
            baseName: "VerticalAlignment",
            type: "PageSetup.VerticalAlignmentEnum",
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PageSetup.attributeTypeMap);
    }

    /**
     * Gets or sets a value indicating whether this section contains bidirectional (complex scripts) text.
     */
    protected _bidi: boolean;

    /**
     * Gets or sets a value indicating whether this section contains bidirectional (complex scripts) text.
     */
    public get bidi(): boolean {
        return this._bidi;
    }

    /**
     * Gets or sets a value indicating whether this section contains bidirectional (complex scripts) text.
     */
    public set bidi(value: boolean) {
        this._bidi = value;
    }


    /**
     * Gets or sets a value indicating whether the page border is positioned relative to intersecting texts and objects.
     */
    protected _borderAlwaysInFront: boolean;

    /**
     * Gets or sets a value indicating whether the page border is positioned relative to intersecting texts and objects.
     */
    public get borderAlwaysInFront(): boolean {
        return this._borderAlwaysInFront;
    }

    /**
     * Gets or sets a value indicating whether the page border is positioned relative to intersecting texts and objects.
     */
    public set borderAlwaysInFront(value: boolean) {
        this._borderAlwaysInFront = value;
    }


    /**
     * Gets or sets the option that controls which pages the page border is printed on.
     */
    protected _borderAppliesTo: PageSetup.BorderAppliesToEnum;

    /**
     * Gets or sets the option that controls which pages the page border is printed on.
     */
    public get borderAppliesTo(): PageSetup.BorderAppliesToEnum {
        return this._borderAppliesTo;
    }

    /**
     * Gets or sets the option that controls which pages the page border is printed on.
     */
    public set borderAppliesTo(value: PageSetup.BorderAppliesToEnum) {
        this._borderAppliesTo = value;
    }


    /**
     * Gets or sets the value, that indicates whether the specified page border is measured from the edge of the page or from the text it surrounds.
     */
    protected _borderDistanceFrom: PageSetup.BorderDistanceFromEnum;

    /**
     * Gets or sets the value, that indicates whether the specified page border is measured from the edge of the page or from the text it surrounds.
     */
    public get borderDistanceFrom(): PageSetup.BorderDistanceFromEnum {
        return this._borderDistanceFrom;
    }

    /**
     * Gets or sets the value, that indicates whether the specified page border is measured from the edge of the page or from the text it surrounds.
     */
    public set borderDistanceFrom(value: PageSetup.BorderDistanceFromEnum) {
        this._borderDistanceFrom = value;
    }


    /**
     * Gets or sets the distance (in points) between the bottom edge of the page and the bottom boundary of the body text.
     */
    protected _bottomMargin: number;

    /**
     * Gets or sets the distance (in points) between the bottom edge of the page and the bottom boundary of the body text.
     */
    public get bottomMargin(): number {
        return this._bottomMargin;
    }

    /**
     * Gets or sets the distance (in points) between the bottom edge of the page and the bottom boundary of the body text.
     */
    public set bottomMargin(value: number) {
        this._bottomMargin = value;
    }


    /**
     * Gets or sets a value indicating whether a different header or footer is used on the first page.
     */
    protected _differentFirstPageHeaderFooter: boolean;

    /**
     * Gets or sets a value indicating whether a different header or footer is used on the first page.
     */
    public get differentFirstPageHeaderFooter(): boolean {
        return this._differentFirstPageHeaderFooter;
    }

    /**
     * Gets or sets a value indicating whether a different header or footer is used on the first page.
     */
    public set differentFirstPageHeaderFooter(value: boolean) {
        this._differentFirstPageHeaderFooter = value;
    }


    /**
     * Gets or sets the paper tray (bin) to use for the first page of a section.
     * The value is implementation (printer) specific.
     */
    protected _firstPageTray: number;

    /**
     * Gets or sets the paper tray (bin) to use for the first page of a section.
     * The value is implementation (printer) specific.
     */
    public get firstPageTray(): number {
        return this._firstPageTray;
    }

    /**
     * Gets or sets the paper tray (bin) to use for the first page of a section.
     * The value is implementation (printer) specific.
     */
    public set firstPageTray(value: number) {
        this._firstPageTray = value;
    }


    /**
     * Gets or sets the distance (in points) between the footer and the bottom of the page.
     */
    protected _footerDistance: number;

    /**
     * Gets or sets the distance (in points) between the footer and the bottom of the page.
     */
    public get footerDistance(): number {
        return this._footerDistance;
    }

    /**
     * Gets or sets the distance (in points) between the footer and the bottom of the page.
     */
    public set footerDistance(value: number) {
        this._footerDistance = value;
    }


    /**
     * Gets or sets the amount of extra space added to the margin for document binding.
     */
    protected _gutter: number;

    /**
     * Gets or sets the amount of extra space added to the margin for document binding.
     */
    public get gutter(): number {
        return this._gutter;
    }

    /**
     * Gets or sets the amount of extra space added to the margin for document binding.
     */
    public set gutter(value: number) {
        this._gutter = value;
    }


    /**
     * Gets or sets the distance (in points) between the header and the top of the page.
     */
    protected _headerDistance: number;

    /**
     * Gets or sets the distance (in points) between the header and the top of the page.
     */
    public get headerDistance(): number {
        return this._headerDistance;
    }

    /**
     * Gets or sets the distance (in points) between the header and the top of the page.
     */
    public set headerDistance(value: number) {
        this._headerDistance = value;
    }


    /**
     * Gets or sets the distance (in points) between the left edge of the page and the left boundary of the body text.
     */
    protected _leftMargin: number;

    /**
     * Gets or sets the distance (in points) between the left edge of the page and the left boundary of the body text.
     */
    public get leftMargin(): number {
        return this._leftMargin;
    }

    /**
     * Gets or sets the distance (in points) between the left edge of the page and the left boundary of the body text.
     */
    public set leftMargin(value: number) {
        this._leftMargin = value;
    }


    /**
     * Gets or sets the numeric increment for line numbers.
     */
    protected _lineNumberCountBy: number;

    /**
     * Gets or sets the numeric increment for line numbers.
     */
    public get lineNumberCountBy(): number {
        return this._lineNumberCountBy;
    }

    /**
     * Gets or sets the numeric increment for line numbers.
     */
    public set lineNumberCountBy(value: number) {
        this._lineNumberCountBy = value;
    }


    /**
     * Gets or sets the distance between the right edge of line numbers and the left edge of the document.
     */
    protected _lineNumberDistanceFromText: number;

    /**
     * Gets or sets the distance between the right edge of line numbers and the left edge of the document.
     */
    public get lineNumberDistanceFromText(): number {
        return this._lineNumberDistanceFromText;
    }

    /**
     * Gets or sets the distance between the right edge of line numbers and the left edge of the document.
     */
    public set lineNumberDistanceFromText(value: number) {
        this._lineNumberDistanceFromText = value;
    }


    /**
     * Gets or sets the way line numbering runs  that is, whether it starts over at the beginning of a new page or section or runs continuously.
     */
    protected _lineNumberRestartMode: PageSetup.LineNumberRestartModeEnum;

    /**
     * Gets or sets the way line numbering runs  that is, whether it starts over at the beginning of a new page or section or runs continuously.
     */
    public get lineNumberRestartMode(): PageSetup.LineNumberRestartModeEnum {
        return this._lineNumberRestartMode;
    }

    /**
     * Gets or sets the way line numbering runs  that is, whether it starts over at the beginning of a new page or section or runs continuously.
     */
    public set lineNumberRestartMode(value: PageSetup.LineNumberRestartModeEnum) {
        this._lineNumberRestartMode = value;
    }


    /**
     * Gets or sets the starting line number.
     */
    protected _lineStartingNumber: number;

    /**
     * Gets or sets the starting line number.
     */
    public get lineStartingNumber(): number {
        return this._lineStartingNumber;
    }

    /**
     * Gets or sets the starting line number.
     */
    public set lineStartingNumber(value: number) {
        this._lineStartingNumber = value;
    }


    /**
     * Gets or sets the orientation of the page.
     */
    protected _orientation: PageSetup.OrientationEnum;

    /**
     * Gets or sets the orientation of the page.
     */
    public get orientation(): PageSetup.OrientationEnum {
        return this._orientation;
    }

    /**
     * Gets or sets the orientation of the page.
     */
    public set orientation(value: PageSetup.OrientationEnum) {
        this._orientation = value;
    }


    /**
     * Gets or sets the paper tray (bin) to be used for all but the first page of a section.
     * The value is implementation (printer) specific.
     */
    protected _otherPagesTray: number;

    /**
     * Gets or sets the paper tray (bin) to be used for all but the first page of a section.
     * The value is implementation (printer) specific.
     */
    public get otherPagesTray(): number {
        return this._otherPagesTray;
    }

    /**
     * Gets or sets the paper tray (bin) to be used for all but the first page of a section.
     * The value is implementation (printer) specific.
     */
    public set otherPagesTray(value: number) {
        this._otherPagesTray = value;
    }


    /**
     * Gets or sets the height of the page in points.
     */
    protected _pageHeight: number;

    /**
     * Gets or sets the height of the page in points.
     */
    public get pageHeight(): number {
        return this._pageHeight;
    }

    /**
     * Gets or sets the height of the page in points.
     */
    public set pageHeight(value: number) {
        this._pageHeight = value;
    }


    /**
     * Gets or sets the page number format.
     */
    protected _pageNumberStyle: PageSetup.PageNumberStyleEnum;

    /**
     * Gets or sets the page number format.
     */
    public get pageNumberStyle(): PageSetup.PageNumberStyleEnum {
        return this._pageNumberStyle;
    }

    /**
     * Gets or sets the page number format.
     */
    public set pageNumberStyle(value: PageSetup.PageNumberStyleEnum) {
        this._pageNumberStyle = value;
    }


    /**
     * Gets or sets the starting page number of the section.
     */
    protected _pageStartingNumber: number;

    /**
     * Gets or sets the starting page number of the section.
     */
    public get pageStartingNumber(): number {
        return this._pageStartingNumber;
    }

    /**
     * Gets or sets the starting page number of the section.
     */
    public set pageStartingNumber(value: number) {
        this._pageStartingNumber = value;
    }


    /**
     * Gets or sets the width of the page in points.
     */
    protected _pageWidth: number;

    /**
     * Gets or sets the width of the page in points.
     */
    public get pageWidth(): number {
        return this._pageWidth;
    }

    /**
     * Gets or sets the width of the page in points.
     */
    public set pageWidth(value: number) {
        this._pageWidth = value;
    }


    /**
     * Gets or sets the paper size.
     */
    protected _paperSize: PageSetup.PaperSizeEnum;

    /**
     * Gets or sets the paper size.
     */
    public get paperSize(): PageSetup.PaperSizeEnum {
        return this._paperSize;
    }

    /**
     * Gets or sets the paper size.
     */
    public set paperSize(value: PageSetup.PaperSizeEnum) {
        this._paperSize = value;
    }


    /**
     * Gets or sets a value indicating whether page numbering restarts at the beginning of the section.
     */
    protected _restartPageNumbering: boolean;

    /**
     * Gets or sets a value indicating whether page numbering restarts at the beginning of the section.
     */
    public get restartPageNumbering(): boolean {
        return this._restartPageNumbering;
    }

    /**
     * Gets or sets a value indicating whether page numbering restarts at the beginning of the section.
     */
    public set restartPageNumbering(value: boolean) {
        this._restartPageNumbering = value;
    }


    /**
     * Gets or sets the distance (in points) between the right edge of the page and the right boundary of the body text.
     */
    protected _rightMargin: number;

    /**
     * Gets or sets the distance (in points) between the right edge of the page and the right boundary of the body text.
     */
    public get rightMargin(): number {
        return this._rightMargin;
    }

    /**
     * Gets or sets the distance (in points) between the right edge of the page and the right boundary of the body text.
     */
    public set rightMargin(value: number) {
        this._rightMargin = value;
    }


    /**
     * Gets or sets a value indicating whether Microsoft Word uses gutters for the section based on a right-to-left language or a left-to-right language.
     */
    protected _rtlGutter: boolean;

    /**
     * Gets or sets a value indicating whether Microsoft Word uses gutters for the section based on a right-to-left language or a left-to-right language.
     */
    public get rtlGutter(): boolean {
        return this._rtlGutter;
    }

    /**
     * Gets or sets a value indicating whether Microsoft Word uses gutters for the section based on a right-to-left language or a left-to-right language.
     */
    public set rtlGutter(value: boolean) {
        this._rtlGutter = value;
    }


    /**
     * Gets or sets the type of section break for the specified object.
     */
    protected _sectionStart: PageSetup.SectionStartEnum;

    /**
     * Gets or sets the type of section break for the specified object.
     */
    public get sectionStart(): PageSetup.SectionStartEnum {
        return this._sectionStart;
    }

    /**
     * Gets or sets the type of section break for the specified object.
     */
    public set sectionStart(value: PageSetup.SectionStartEnum) {
        this._sectionStart = value;
    }


    /**
     * Gets or sets a value indicating whether endnotes are printed at the end of the next section that doesn't suppress endnotes. Suppressed endnotes are printed before the endnotes in that section.
     */
    protected _suppressEndnotes: boolean;

    /**
     * Gets or sets a value indicating whether endnotes are printed at the end of the next section that doesn't suppress endnotes. Suppressed endnotes are printed before the endnotes in that section.
     */
    public get suppressEndnotes(): boolean {
        return this._suppressEndnotes;
    }

    /**
     * Gets or sets a value indicating whether endnotes are printed at the end of the next section that doesn't suppress endnotes. Suppressed endnotes are printed before the endnotes in that section.
     */
    public set suppressEndnotes(value: boolean) {
        this._suppressEndnotes = value;
    }


    /**
     * Gets or sets the distance (in points) between the top edge of the page and the top boundary of the body text.
     */
    protected _topMargin: number;

    /**
     * Gets or sets the distance (in points) between the top edge of the page and the top boundary of the body text.
     */
    public get topMargin(): number {
        return this._topMargin;
    }

    /**
     * Gets or sets the distance (in points) between the top edge of the page and the top boundary of the body text.
     */
    public set topMargin(value: number) {
        this._topMargin = value;
    }


    /**
     * Gets or sets the vertical alignment of text on each page in the document.or section.
     */
    protected _verticalAlignment: PageSetup.VerticalAlignmentEnum;

    /**
     * Gets or sets the vertical alignment of text on each page in the document.or section.
     */
    public get verticalAlignment(): PageSetup.VerticalAlignmentEnum {
        return this._verticalAlignment;
    }

    /**
     * Gets or sets the vertical alignment of text on each page in the document.or section.
     */
    public set verticalAlignment(value: PageSetup.VerticalAlignmentEnum) {
        this._verticalAlignment = value;
    }


    public constructor(init?: Partial< PageSetup >) {
        super(init);
        Object.assign(this, init);
    }
}

/**
 * Enums for PageSetup
 */
// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace PageSetup {
    export enum BorderAppliesToEnum {
        AllPages = 'AllPages' as any,
        FirstPage = 'FirstPage' as any,
        OtherPages = 'OtherPages' as any
    }

    export enum BorderDistanceFromEnum {
        Text = 'Text' as any,
        PageEdge = 'PageEdge' as any
    }

    export enum LineNumberRestartModeEnum {
        RestartPage = 'RestartPage' as any,
        RestartSection = 'RestartSection' as any,
        Continuous = 'Continuous' as any
    }

    export enum OrientationEnum {
        Portrait = 'Portrait' as any,
        Landscape = 'Landscape' as any
    }

    export enum PageNumberStyleEnum {
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

    export enum PaperSizeEnum {
        A3 = 'A3' as any,
        A4 = 'A4' as any,
        A5 = 'A5' as any,
        B4 = 'B4' as any,
        B5 = 'B5' as any,
        Executive = 'Executive' as any,
        Folio = 'Folio' as any,
        Ledger = 'Ledger' as any,
        Legal = 'Legal' as any,
        Letter = 'Letter' as any,
        EnvelopeDL = 'EnvelopeDL' as any,
        Quarto = 'Quarto' as any,
        Statement = 'Statement' as any,
        Tabloid = 'Tabloid' as any,
        Paper10x14 = 'Paper10x14' as any,
        Paper11x17 = 'Paper11x17' as any,
        Custom = 'Custom' as any
    }

    export enum SectionStartEnum {
        Continuous = 'Continuous' as any,
        NewColumn = 'NewColumn' as any,
        NewPage = 'NewPage' as any,
        EvenPage = 'EvenPage' as any,
        OddPage = 'OddPage' as any
    }

    export enum VerticalAlignmentEnum {
        Top = 'Top' as any,
        Center = 'Center' as any,
        Justify = 'Justify' as any,
        Bottom = 'Bottom' as any
    }
}
// tslint:enable:quotemark


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
import { WordsApiLink } from './wordsApiLink';

export const importsMapPageSetup = {
    LinkElement,
    WordsApiLink,
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
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PageSetup.attributeTypeMap);
    }

    /**
     * Gets or sets specifies that this section contains bidirectional (complex scripts) text.             
     */
    public bidi: boolean;
    
    /**
     * Gets or sets specifies where the page border is positioned relative to intersecting texts and objects.             
     */
    public borderAlwaysInFront: boolean;
    
    /**
     * Gets or sets specifies which pages the page border is printed on.             
     */
    public borderAppliesTo: PageSetup.BorderAppliesToEnum;
    
    /**
     * Gets or sets a value that indicates whether the specified page border is measured from the edge of the page or from the text it surrounds.             
     */
    public borderDistanceFrom: PageSetup.BorderDistanceFromEnum;
    
    /**
     * Gets or sets returns or sets the distance (in points) between the bottom edge of the page and the bottom boundary of the body text.             
     */
    public bottomMargin: number;
    
    /**
     * Gets or sets true if a different header or footer is used on the first page.             
     */
    public differentFirstPageHeaderFooter: boolean;
    
    /**
     * Gets or sets the paper tray (bin) to use for the first page of a section. The value is implementation (printer) specific.             
     */
    public firstPageTray: number;
    
    /**
     * Gets or sets returns or sets the distance (in points) between the footer and the bottom of the page.             
     */
    public footerDistance: number;
    
    /**
     * Gets or sets the amount of extra space added to the margin for document binding.             
     */
    public gutter: number;
    
    /**
     * Gets or sets returns or sets the distance (in points) between the header and the top of the page.             
     */
    public headerDistance: number;
    
    /**
     * Gets or sets returns or sets the distance (in points) between the left edge of the page and the left boundary of the body text.             
     */
    public leftMargin: number;
    
    /**
     * Gets or sets returns or sets the numeric increment for line numbers.             
     */
    public lineNumberCountBy: number;
    
    /**
     * Gets or sets distance between the right edge of line numbers and the left edge of the document.             
     */
    public lineNumberDistanceFromText: number;
    
    /**
     * Gets or sets the way line numbering runs  that is, whether it starts over at the beginning of a new page or section or runs continuously.             
     */
    public lineNumberRestartMode: PageSetup.LineNumberRestartModeEnum;
    
    /**
     * Gets or sets the starting line number.             
     */
    public lineStartingNumber: number;
    
    /**
     * Gets or sets returns or sets the orientation of the page.             
     */
    public orientation: PageSetup.OrientationEnum;
    
    /**
     * Gets or sets the paper tray (bin) to be used for all but the first page of a section. The value is implementation (printer) specific.             
     */
    public otherPagesTray: number;
    
    /**
     * Gets or sets returns or sets the height of the page in points.             
     */
    public pageHeight: number;
    
    /**
     * Gets or sets the page number format.             
     */
    public pageNumberStyle: PageSetup.PageNumberStyleEnum;
    
    /**
     * Gets or sets the starting page number of the section.             
     */
    public pageStartingNumber: number;
    
    /**
     * Gets or sets returns or sets the width of the page in points.             
     */
    public pageWidth: number;
    
    /**
     * Gets or sets returns or sets the paper size.             
     */
    public paperSize: PageSetup.PaperSizeEnum;
    
    /**
     * Gets or sets true if page numbering restarts at the beginning of the section.             
     */
    public restartPageNumbering: boolean;
    
    /**
     * Gets or sets returns or sets the distance (in points) between the right edge of the page and the right boundary of the body text.             
     */
    public rightMargin: number;
    
    /**
     * Gets or sets whether Microsoft Word uses gutters for the section based on a right-to-left language or a left-to-right language.             
     */
    public rtlGutter: boolean;
    
    /**
     * Gets or sets returns or sets the type of section break for the specified object.             
     */
    public sectionStart: PageSetup.SectionStartEnum;
    
    /**
     * Gets or sets true if endnotes are printed at the end of the next section that doesn't suppress endnotes. Suppressed endnotes are printed before the endnotes in that section.             
     */
    public suppressEndnotes: boolean;
    
    /**
     * Gets or sets returns or sets the distance (in points) between the top edge of the page and the top boundary of the body text.             
     */
    public topMargin: number;
    
    /**
     * Gets or sets returns or sets the vertical alignment of text on each page in a document or section.             
     */
    public verticalAlignment: PageSetup.VerticalAlignmentEnum;
    
    public constructor(init?: Partial<PageSetup>) {
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
        OtherPages = 'OtherPages' as any,
    }
    export enum BorderDistanceFromEnum {
        Text = 'Text' as any,
        PageEdge = 'PageEdge' as any,
    }
    export enum LineNumberRestartModeEnum {
        RestartPage = 'RestartPage' as any,
        RestartSection = 'RestartSection' as any,
        Continuous = 'Continuous' as any,
    }
    export enum OrientationEnum {
        Portrait = 'Portrait' as any,
        Landscape = 'Landscape' as any,
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
        Custom = 'Custom' as any,
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
        Custom = 'Custom' as any,
    }
    export enum SectionStartEnum {
        Continuous = 'Continuous' as any,
        NewColumn = 'NewColumn' as any,
        NewPage = 'NewPage' as any,
        EvenPage = 'EvenPage' as any,
        OddPage = 'OddPage' as any,
    }
    export enum VerticalAlignmentEnum {
        Top = 'Top' as any,
        Center = 'Center' as any,
        Justify = 'Justify' as any,
        Bottom = 'Bottom' as any,
    }
}
// tslint:enable:quotemark

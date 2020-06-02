/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="tableProperties.ts">
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
import { LinkElement } from './linkElement';
import { PreferredWidth } from './preferredWidth';

export const importsMapTableProperties = {
    LinkElement,
    PreferredWidth,
};

/**
 * Represents the table properties.
 */
export class TableProperties extends LinkElement {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "alignment",
            baseName: "Alignment",
            type: "TableProperties.AlignmentEnum",
        },
        {
            name: "allowAutoFit",
            baseName: "AllowAutoFit",
            type: "boolean",
        },
        {
            name: "bidi",
            baseName: "Bidi",
            type: "boolean",
        },
        {
            name: "bottomPadding",
            baseName: "BottomPadding",
            type: "number",
        },
        {
            name: "cellSpacing",
            baseName: "CellSpacing",
            type: "number",
        },
        {
            name: "leftIndent",
            baseName: "LeftIndent",
            type: "number",
        },
        {
            name: "leftPadding",
            baseName: "LeftPadding",
            type: "number",
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
            name: "styleIdentifier",
            baseName: "StyleIdentifier",
            type: "TableProperties.StyleIdentifierEnum",
        },
        {
            name: "styleName",
            baseName: "StyleName",
            type: "string",
        },
        {
            name: "styleOptions",
            baseName: "StyleOptions",
            type: "TableProperties.StyleOptionsEnum",
        },
        {
            name: "textWrapping",
            baseName: "TextWrapping",
            type: "TableProperties.TextWrappingEnum",
        },
        {
            name: "topPadding",
            baseName: "TopPadding",
            type: "number",
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TableProperties.attributeTypeMap);
    }

    /**
     * Gets or sets specifies how an inline table is aligned in the document.
     */
    public alignment: TableProperties.AlignmentEnum;

    /**
     * Gets or sets allows Microsoft Word and Aspose.Words to automatically resize cells in a table to fit their contents.
     */
    public allowAutoFit: boolean;

    /**
     * Gets or sets whether this is a right-to-left table.
     */
    public bidi: boolean;

    /**
     * Gets or sets the amount of space (in points) to add below the contents of cells.
     */
    public bottomPadding: number;

    /**
     * Gets or sets the amount of space (in points) between the cells.
     */
    public cellSpacing: number;

    /**
     * Gets or sets the value that represents the left indent of the table.
     */
    public leftIndent: number;

    /**
     * Gets or sets the amount of space (in points) to add to the left of the contents of cells.
     */
    public leftPadding: number;

    /**
     * Gets or sets the table preferred width.
     * Preferred width can be specified as a percentage, number of points or a special "auto" value.
     */
    public preferredWidth: PreferredWidth;

    /**
     * Gets or sets the amount of space (in points) to add to the right of the contents of cells.
     */
    public rightPadding: number;

    /**
     * Gets or sets the locale independent style identifier of the table style applied to this table.
     */
    public styleIdentifier: TableProperties.StyleIdentifierEnum;

    /**
     * Gets or sets the name of the table style applied to this table.
     */
    public styleName: string;

    /**
     * Gets or sets bit flags that specify how a table style is applied to this table.
     */
    public styleOptions: TableProperties.StyleOptionsEnum;

    /**
     * Gets or sets get or sets TextWrapping for table.
     */
    public textWrapping: TableProperties.TextWrappingEnum;

    /**
     * Gets or sets the amount of space (in points) to add above the contents of cells.
     */
    public topPadding: number;

    public constructor(init?: Partial< TableProperties >) {
        super(init);
        Object.assign(this, init);
    }
}

/**
 * Enums for TableProperties
 */
// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace TableProperties {
    export enum AlignmentEnum {
        Left = 'Left' as any,
        Center = 'Center' as any,
        Right = 'Right' as any
    }

    export enum StyleIdentifierEnum {
        Normal = 'Normal' as any,
        Heading1 = 'Heading1' as any,
        Heading2 = 'Heading2' as any,
        Heading3 = 'Heading3' as any,
        Heading4 = 'Heading4' as any,
        Heading5 = 'Heading5' as any,
        Heading6 = 'Heading6' as any,
        Heading7 = 'Heading7' as any,
        Heading8 = 'Heading8' as any,
        Heading9 = 'Heading9' as any,
        Index1 = 'Index1' as any,
        Index2 = 'Index2' as any,
        Index3 = 'Index3' as any,
        Index4 = 'Index4' as any,
        Index5 = 'Index5' as any,
        Index6 = 'Index6' as any,
        Index7 = 'Index7' as any,
        Index8 = 'Index8' as any,
        Index9 = 'Index9' as any,
        Toc1 = 'Toc1' as any,
        Toc2 = 'Toc2' as any,
        Toc3 = 'Toc3' as any,
        Toc4 = 'Toc4' as any,
        Toc5 = 'Toc5' as any,
        Toc6 = 'Toc6' as any,
        Toc7 = 'Toc7' as any,
        Toc8 = 'Toc8' as any,
        Toc9 = 'Toc9' as any,
        NormalIndent = 'NormalIndent' as any,
        FootnoteText = 'FootnoteText' as any,
        CommentText = 'CommentText' as any,
        Header = 'Header' as any,
        Footer = 'Footer' as any,
        IndexHeading = 'IndexHeading' as any,
        Caption = 'Caption' as any,
        TableOfFigures = 'TableOfFigures' as any,
        EnvelopeAddress = 'EnvelopeAddress' as any,
        EnvelopeReturn = 'EnvelopeReturn' as any,
        FootnoteReference = 'FootnoteReference' as any,
        CommentReference = 'CommentReference' as any,
        LineNumber = 'LineNumber' as any,
        PageNumber = 'PageNumber' as any,
        EndnoteReference = 'EndnoteReference' as any,
        EndnoteText = 'EndnoteText' as any,
        TableOfAuthorities = 'TableOfAuthorities' as any,
        Macro = 'Macro' as any,
        ToaHeading = 'ToaHeading' as any,
        List = 'List' as any,
        ListBullet = 'ListBullet' as any,
        ListNumber = 'ListNumber' as any,
        List2 = 'List2' as any,
        List3 = 'List3' as any,
        List4 = 'List4' as any,
        List5 = 'List5' as any,
        ListBullet2 = 'ListBullet2' as any,
        ListBullet3 = 'ListBullet3' as any,
        ListBullet4 = 'ListBullet4' as any,
        ListBullet5 = 'ListBullet5' as any,
        ListNumber2 = 'ListNumber2' as any,
        ListNumber3 = 'ListNumber3' as any,
        ListNumber4 = 'ListNumber4' as any,
        ListNumber5 = 'ListNumber5' as any,
        Title = 'Title' as any,
        Closing = 'Closing' as any,
        Signature = 'Signature' as any,
        DefaultParagraphFont = 'DefaultParagraphFont' as any,
        BodyText = 'BodyText' as any,
        BodyTextInd = 'BodyTextInd' as any,
        ListContinue = 'ListContinue' as any,
        ListContinue2 = 'ListContinue2' as any,
        ListContinue3 = 'ListContinue3' as any,
        ListContinue4 = 'ListContinue4' as any,
        ListContinue5 = 'ListContinue5' as any,
        MessageHeader = 'MessageHeader' as any,
        Subtitle = 'Subtitle' as any,
        Salutation = 'Salutation' as any,
        Date = 'Date' as any,
        BodyText1I = 'BodyText1I' as any,
        BodyText1I2 = 'BodyText1I2' as any,
        NoteHeading = 'NoteHeading' as any,
        BodyText2 = 'BodyText2' as any,
        BodyText3 = 'BodyText3' as any,
        BodyTextInd2 = 'BodyTextInd2' as any,
        BodyTextInd3 = 'BodyTextInd3' as any,
        BlockText = 'BlockText' as any,
        Hyperlink = 'Hyperlink' as any,
        FollowedHyperlink = 'FollowedHyperlink' as any,
        Strong = 'Strong' as any,
        Emphasis = 'Emphasis' as any,
        DocumentMap = 'DocumentMap' as any,
        PlainText = 'PlainText' as any,
        EmailSignature = 'EmailSignature' as any,
        HtmlTopOfForm = 'HtmlTopOfForm' as any,
        HtmlBottomOfForm = 'HtmlBottomOfForm' as any,
        NormalWeb = 'NormalWeb' as any,
        HtmlAcronym = 'HtmlAcronym' as any,
        HtmlAddress = 'HtmlAddress' as any,
        HtmlCite = 'HtmlCite' as any,
        HtmlCode = 'HtmlCode' as any,
        HtmlDefinition = 'HtmlDefinition' as any,
        HtmlKeyboard = 'HtmlKeyboard' as any,
        HtmlPreformatted = 'HtmlPreformatted' as any,
        HtmlSample = 'HtmlSample' as any,
        HtmlTypewriter = 'HtmlTypewriter' as any,
        HtmlVariable = 'HtmlVariable' as any,
        TableNormal = 'TableNormal' as any,
        CommentSubject = 'CommentSubject' as any,
        NoList = 'NoList' as any,
        OutlineList1 = 'OutlineList1' as any,
        OutlineList2 = 'OutlineList2' as any,
        OutlineList3 = 'OutlineList3' as any,
        TableSimple1 = 'TableSimple1' as any,
        TableSimple2 = 'TableSimple2' as any,
        TableSimple3 = 'TableSimple3' as any,
        TableClassic1 = 'TableClassic1' as any,
        TableClassic2 = 'TableClassic2' as any,
        TableClassic3 = 'TableClassic3' as any,
        TableClassic4 = 'TableClassic4' as any,
        TableColorful1 = 'TableColorful1' as any,
        TableColorful2 = 'TableColorful2' as any,
        TableColorful3 = 'TableColorful3' as any,
        TableColumns1 = 'TableColumns1' as any,
        TableColumns2 = 'TableColumns2' as any,
        TableColumns3 = 'TableColumns3' as any,
        TableColumns4 = 'TableColumns4' as any,
        TableColumns5 = 'TableColumns5' as any,
        TableGrid1 = 'TableGrid1' as any,
        TableGrid2 = 'TableGrid2' as any,
        TableGrid3 = 'TableGrid3' as any,
        TableGrid4 = 'TableGrid4' as any,
        TableGrid5 = 'TableGrid5' as any,
        TableGrid6 = 'TableGrid6' as any,
        TableGrid7 = 'TableGrid7' as any,
        TableGrid8 = 'TableGrid8' as any,
        TableList1 = 'TableList1' as any,
        TableList2 = 'TableList2' as any,
        TableList3 = 'TableList3' as any,
        TableList4 = 'TableList4' as any,
        TableList5 = 'TableList5' as any,
        TableList6 = 'TableList6' as any,
        TableList7 = 'TableList7' as any,
        TableList8 = 'TableList8' as any,
        Table3DEffects1 = 'Table3DEffects1' as any,
        Table3DEffects2 = 'Table3DEffects2' as any,
        Table3DEffects3 = 'Table3DEffects3' as any,
        TableContemporary = 'TableContemporary' as any,
        TableElegant = 'TableElegant' as any,
        TableProfessional = 'TableProfessional' as any,
        TableSubtle1 = 'TableSubtle1' as any,
        TableSubtle2 = 'TableSubtle2' as any,
        TableWeb1 = 'TableWeb1' as any,
        TableWeb2 = 'TableWeb2' as any,
        TableWeb3 = 'TableWeb3' as any,
        BalloonText = 'BalloonText' as any,
        TableGrid = 'TableGrid' as any,
        TableTheme = 'TableTheme' as any,
        PlaceholderText = 'PlaceholderText' as any,
        NoSpacing = 'NoSpacing' as any,
        LightShading = 'LightShading' as any,
        LightList = 'LightList' as any,
        LightGrid = 'LightGrid' as any,
        MediumShading1 = 'MediumShading1' as any,
        MediumShading2 = 'MediumShading2' as any,
        MediumList1 = 'MediumList1' as any,
        MediumList2 = 'MediumList2' as any,
        MediumGrid1 = 'MediumGrid1' as any,
        MediumGrid2 = 'MediumGrid2' as any,
        MediumGrid3 = 'MediumGrid3' as any,
        DarkList = 'DarkList' as any,
        ColorfulShading = 'ColorfulShading' as any,
        ColorfulList = 'ColorfulList' as any,
        ColorfulGrid = 'ColorfulGrid' as any,
        LightShadingAccent1 = 'LightShadingAccent1' as any,
        LightListAccent1 = 'LightListAccent1' as any,
        LightGridAccent1 = 'LightGridAccent1' as any,
        MediumShading1Accent1 = 'MediumShading1Accent1' as any,
        MediumShading2Accent1 = 'MediumShading2Accent1' as any,
        MediumList1Accent1 = 'MediumList1Accent1' as any,
        Revision = 'Revision' as any,
        ListParagraph = 'ListParagraph' as any,
        Quote = 'Quote' as any,
        IntenseQuote = 'IntenseQuote' as any,
        MediumList2Accent1 = 'MediumList2Accent1' as any,
        MediumGrid1Accent1 = 'MediumGrid1Accent1' as any,
        MediumGrid2Accent1 = 'MediumGrid2Accent1' as any,
        MediumGrid3Accent1 = 'MediumGrid3Accent1' as any,
        DarkListAccent1 = 'DarkListAccent1' as any,
        ColorfulShadingAccent1 = 'ColorfulShadingAccent1' as any,
        ColorfulListAccent1 = 'ColorfulListAccent1' as any,
        ColorfulGridAccent1 = 'ColorfulGridAccent1' as any,
        LightShadingAccent2 = 'LightShadingAccent2' as any,
        LightListAccent2 = 'LightListAccent2' as any,
        LightGridAccent2 = 'LightGridAccent2' as any,
        MediumShading1Accent2 = 'MediumShading1Accent2' as any,
        MediumShading2Accent2 = 'MediumShading2Accent2' as any,
        MediumList1Accent2 = 'MediumList1Accent2' as any,
        MediumList2Accent2 = 'MediumList2Accent2' as any,
        MediumGrid1Accent2 = 'MediumGrid1Accent2' as any,
        MediumGrid2Accent2 = 'MediumGrid2Accent2' as any,
        MediumGrid3Accent2 = 'MediumGrid3Accent2' as any,
        DarkListAccent2 = 'DarkListAccent2' as any,
        ColorfulShadingAccent2 = 'ColorfulShadingAccent2' as any,
        ColorfulListAccent2 = 'ColorfulListAccent2' as any,
        ColorfulGridAccent2 = 'ColorfulGridAccent2' as any,
        LightShadingAccent3 = 'LightShadingAccent3' as any,
        LightListAccent3 = 'LightListAccent3' as any,
        LightGridAccent3 = 'LightGridAccent3' as any,
        MediumShading1Accent3 = 'MediumShading1Accent3' as any,
        MediumShading2Accent3 = 'MediumShading2Accent3' as any,
        MediumList1Accent3 = 'MediumList1Accent3' as any,
        MediumList2Accent3 = 'MediumList2Accent3' as any,
        MediumGrid1Accent3 = 'MediumGrid1Accent3' as any,
        MediumGrid2Accent3 = 'MediumGrid2Accent3' as any,
        MediumGrid3Accent3 = 'MediumGrid3Accent3' as any,
        DarkListAccent3 = 'DarkListAccent3' as any,
        ColorfulShadingAccent3 = 'ColorfulShadingAccent3' as any,
        ColorfulListAccent3 = 'ColorfulListAccent3' as any,
        ColorfulGridAccent3 = 'ColorfulGridAccent3' as any,
        LightShadingAccent4 = 'LightShadingAccent4' as any,
        LightListAccent4 = 'LightListAccent4' as any,
        LightGridAccent4 = 'LightGridAccent4' as any,
        MediumShading1Accent4 = 'MediumShading1Accent4' as any,
        MediumShading2Accent4 = 'MediumShading2Accent4' as any,
        MediumList1Accent4 = 'MediumList1Accent4' as any,
        MediumList2Accent4 = 'MediumList2Accent4' as any,
        MediumGrid1Accent4 = 'MediumGrid1Accent4' as any,
        MediumGrid2Accent4 = 'MediumGrid2Accent4' as any,
        MediumGrid3Accent4 = 'MediumGrid3Accent4' as any,
        DarkListAccent4 = 'DarkListAccent4' as any,
        ColorfulShadingAccent4 = 'ColorfulShadingAccent4' as any,
        ColorfulListAccent4 = 'ColorfulListAccent4' as any,
        ColorfulGridAccent4 = 'ColorfulGridAccent4' as any,
        LightShadingAccent5 = 'LightShadingAccent5' as any,
        LightListAccent5 = 'LightListAccent5' as any,
        LightGridAccent5 = 'LightGridAccent5' as any,
        MediumShading1Accent5 = 'MediumShading1Accent5' as any,
        MediumShading2Accent5 = 'MediumShading2Accent5' as any,
        MediumList1Accent5 = 'MediumList1Accent5' as any,
        MediumList2Accent5 = 'MediumList2Accent5' as any,
        MediumGrid1Accent5 = 'MediumGrid1Accent5' as any,
        MediumGrid2Accent5 = 'MediumGrid2Accent5' as any,
        MediumGrid3Accent5 = 'MediumGrid3Accent5' as any,
        DarkListAccent5 = 'DarkListAccent5' as any,
        ColorfulShadingAccent5 = 'ColorfulShadingAccent5' as any,
        ColorfulListAccent5 = 'ColorfulListAccent5' as any,
        ColorfulGridAccent5 = 'ColorfulGridAccent5' as any,
        LightShadingAccent6 = 'LightShadingAccent6' as any,
        LightListAccent6 = 'LightListAccent6' as any,
        LightGridAccent6 = 'LightGridAccent6' as any,
        MediumShading1Accent6 = 'MediumShading1Accent6' as any,
        MediumShading2Accent6 = 'MediumShading2Accent6' as any,
        MediumList1Accent6 = 'MediumList1Accent6' as any,
        MediumList2Accent6 = 'MediumList2Accent6' as any,
        MediumGrid1Accent6 = 'MediumGrid1Accent6' as any,
        MediumGrid2Accent6 = 'MediumGrid2Accent6' as any,
        MediumGrid3Accent6 = 'MediumGrid3Accent6' as any,
        DarkListAccent6 = 'DarkListAccent6' as any,
        ColorfulShadingAccent6 = 'ColorfulShadingAccent6' as any,
        ColorfulListAccent6 = 'ColorfulListAccent6' as any,
        ColorfulGridAccent6 = 'ColorfulGridAccent6' as any,
        SubtleEmphasis = 'SubtleEmphasis' as any,
        IntenseEmphasis = 'IntenseEmphasis' as any,
        SubtleReference = 'SubtleReference' as any,
        IntenseReference = 'IntenseReference' as any,
        BookTitle = 'BookTitle' as any,
        Bibliography = 'Bibliography' as any,
        TocHeading = 'TocHeading' as any,
        PlainTable1 = 'PlainTable1' as any,
        PlainTable2 = 'PlainTable2' as any,
        PlainTable3 = 'PlainTable3' as any,
        PlainTable4 = 'PlainTable4' as any,
        PlainTable5 = 'PlainTable5' as any,
        TableGridLight = 'TableGridLight' as any,
        GridTable1Light = 'GridTable1Light' as any,
        GridTable2 = 'GridTable2' as any,
        GridTable3 = 'GridTable3' as any,
        GridTable4 = 'GridTable4' as any,
        GridTable5Dark = 'GridTable5Dark' as any,
        GridTable6Colorful = 'GridTable6Colorful' as any,
        GridTable7Colorful = 'GridTable7Colorful' as any,
        GridTable1LightAccent1 = 'GridTable1LightAccent1' as any,
        GridTable2Accent1 = 'GridTable2Accent1' as any,
        GridTable3Accent1 = 'GridTable3Accent1' as any,
        GridTable4Accent1 = 'GridTable4Accent1' as any,
        GridTable5DarkAccent1 = 'GridTable5DarkAccent1' as any,
        GridTable6ColorfulAccent1 = 'GridTable6ColorfulAccent1' as any,
        GridTable7ColorfulAccent1 = 'GridTable7ColorfulAccent1' as any,
        GridTable1LightAccent2 = 'GridTable1LightAccent2' as any,
        GridTable2Accent2 = 'GridTable2Accent2' as any,
        GridTable3Accent2 = 'GridTable3Accent2' as any,
        GridTable4Accent2 = 'GridTable4Accent2' as any,
        GridTable5DarkAccent2 = 'GridTable5DarkAccent2' as any,
        GridTable6ColorfulAccent2 = 'GridTable6ColorfulAccent2' as any,
        GridTable7ColorfulAccent2 = 'GridTable7ColorfulAccent2' as any,
        GridTable1LightAccent3 = 'GridTable1LightAccent3' as any,
        GridTable2Accent3 = 'GridTable2Accent3' as any,
        GridTable3Accent3 = 'GridTable3Accent3' as any,
        GridTable4Accent3 = 'GridTable4Accent3' as any,
        GridTable5DarkAccent3 = 'GridTable5DarkAccent3' as any,
        GridTable6ColorfulAccent3 = 'GridTable6ColorfulAccent3' as any,
        GridTable7ColorfulAccent3 = 'GridTable7ColorfulAccent3' as any,
        GridTable1LightAccent4 = 'GridTable1LightAccent4' as any,
        GridTable2Accent4 = 'GridTable2Accent4' as any,
        GridTable3Accent4 = 'GridTable3Accent4' as any,
        GridTable4Accent4 = 'GridTable4Accent4' as any,
        GridTable5DarkAccent4 = 'GridTable5DarkAccent4' as any,
        GridTable6ColorfulAccent4 = 'GridTable6ColorfulAccent4' as any,
        GridTable7ColorfulAccent4 = 'GridTable7ColorfulAccent4' as any,
        GridTable1LightAccent5 = 'GridTable1LightAccent5' as any,
        GridTable2Accent5 = 'GridTable2Accent5' as any,
        GridTable3Accent5 = 'GridTable3Accent5' as any,
        GridTable4Accent5 = 'GridTable4Accent5' as any,
        GridTable5DarkAccent5 = 'GridTable5DarkAccent5' as any,
        GridTable6ColorfulAccent5 = 'GridTable6ColorfulAccent5' as any,
        GridTable7ColorfulAccent5 = 'GridTable7ColorfulAccent5' as any,
        GridTable1LightAccent6 = 'GridTable1LightAccent6' as any,
        GridTable2Accent6 = 'GridTable2Accent6' as any,
        GridTable3Accent6 = 'GridTable3Accent6' as any,
        GridTable4Accent6 = 'GridTable4Accent6' as any,
        GridTable5DarkAccent6 = 'GridTable5DarkAccent6' as any,
        GridTable6ColorfulAccent6 = 'GridTable6ColorfulAccent6' as any,
        GridTable7ColorfulAccent6 = 'GridTable7ColorfulAccent6' as any,
        ListTable1Light = 'ListTable1Light' as any,
        ListTable2 = 'ListTable2' as any,
        ListTable3 = 'ListTable3' as any,
        ListTable4 = 'ListTable4' as any,
        ListTable5Dark = 'ListTable5Dark' as any,
        ListTable6Colorful = 'ListTable6Colorful' as any,
        ListTable7Colorful = 'ListTable7Colorful' as any,
        ListTable1LightAccent1 = 'ListTable1LightAccent1' as any,
        ListTable2Accent1 = 'ListTable2Accent1' as any,
        ListTable3Accent1 = 'ListTable3Accent1' as any,
        ListTable4Accent1 = 'ListTable4Accent1' as any,
        ListTable5DarkAccent1 = 'ListTable5DarkAccent1' as any,
        ListTable6ColorfulAccent1 = 'ListTable6ColorfulAccent1' as any,
        ListTable7ColorfulAccent1 = 'ListTable7ColorfulAccent1' as any,
        ListTable1LightAccent2 = 'ListTable1LightAccent2' as any,
        ListTable2Accent2 = 'ListTable2Accent2' as any,
        ListTable3Accent2 = 'ListTable3Accent2' as any,
        ListTable4Accent2 = 'ListTable4Accent2' as any,
        ListTable5DarkAccent2 = 'ListTable5DarkAccent2' as any,
        ListTable6ColorfulAccent2 = 'ListTable6ColorfulAccent2' as any,
        ListTable7ColorfulAccent2 = 'ListTable7ColorfulAccent2' as any,
        ListTable1LightAccent3 = 'ListTable1LightAccent3' as any,
        ListTable2Accent3 = 'ListTable2Accent3' as any,
        ListTable3Accent3 = 'ListTable3Accent3' as any,
        ListTable4Accent3 = 'ListTable4Accent3' as any,
        ListTable5DarkAccent3 = 'ListTable5DarkAccent3' as any,
        ListTable6ColorfulAccent3 = 'ListTable6ColorfulAccent3' as any,
        ListTable7ColorfulAccent3 = 'ListTable7ColorfulAccent3' as any,
        ListTable1LightAccent4 = 'ListTable1LightAccent4' as any,
        ListTable2Accent4 = 'ListTable2Accent4' as any,
        ListTable3Accent4 = 'ListTable3Accent4' as any,
        ListTable4Accent4 = 'ListTable4Accent4' as any,
        ListTable5DarkAccent4 = 'ListTable5DarkAccent4' as any,
        ListTable6ColorfulAccent4 = 'ListTable6ColorfulAccent4' as any,
        ListTable7ColorfulAccent4 = 'ListTable7ColorfulAccent4' as any,
        ListTable1LightAccent5 = 'ListTable1LightAccent5' as any,
        ListTable2Accent5 = 'ListTable2Accent5' as any,
        ListTable3Accent5 = 'ListTable3Accent5' as any,
        ListTable4Accent5 = 'ListTable4Accent5' as any,
        ListTable5DarkAccent5 = 'ListTable5DarkAccent5' as any,
        ListTable6ColorfulAccent5 = 'ListTable6ColorfulAccent5' as any,
        ListTable7ColorfulAccent5 = 'ListTable7ColorfulAccent5' as any,
        ListTable1LightAccent6 = 'ListTable1LightAccent6' as any,
        ListTable2Accent6 = 'ListTable2Accent6' as any,
        ListTable3Accent6 = 'ListTable3Accent6' as any,
        ListTable4Accent6 = 'ListTable4Accent6' as any,
        ListTable5DarkAccent6 = 'ListTable5DarkAccent6' as any,
        ListTable6ColorfulAccent6 = 'ListTable6ColorfulAccent6' as any,
        ListTable7ColorfulAccent6 = 'ListTable7ColorfulAccent6' as any,
        User = 'User' as any,
        Nil = 'Nil' as any
    }

    export enum StyleOptionsEnum {
        None = 'None' as any,
        FirstRow = 'FirstRow' as any,
        LastRow = 'LastRow' as any,
        FirstColumn = 'FirstColumn' as any,
        LastColumn = 'LastColumn' as any,
        RowBands = 'RowBands' as any,
        Default = 'Default' as any,
        ColumnBands = 'ColumnBands' as any,
        Default2003 = 'Default2003' as any
    }

    export enum TextWrappingEnum {
        Default = 'Default' as any,
        None = 'None' as any,
        Around = 'Around' as any
    }
}
// tslint:enable:quotemark


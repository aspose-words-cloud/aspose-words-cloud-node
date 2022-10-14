/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="pdfSaveOptionsData.ts">
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
import { ModelInterface } from './modelInterface';
import { DownsampleOptionsData } from './downsampleOptionsData';
import { FixedPageSaveOptionsData } from './fixedPageSaveOptionsData';
import { OutlineOptionsData } from './outlineOptionsData';
import { PdfDigitalSignatureDetailsData } from './pdfDigitalSignatureDetailsData';
import { PdfEncryptionDetailsData } from './pdfEncryptionDetailsData';

export const importsMapPdfSaveOptionsData = {
    DownsampleOptionsData,
    FixedPageSaveOptionsData,
    OutlineOptionsData,
    PdfDigitalSignatureDetailsData,
    PdfEncryptionDetailsData,
};

/**
 * Container class for pdf save options.
 */
export class PdfSaveOptionsData extends FixedPageSaveOptionsData {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "cacheHeaderFooterShapes",
            baseName: "CacheHeaderFooterShapes",
            type: "boolean",
        },
        {
            name: "compliance",
            baseName: "Compliance",
            type: "PdfSaveOptionsData.ComplianceEnum",
        },
        {
            name: "createNoteHyperlinks",
            baseName: "CreateNoteHyperlinks",
            type: "boolean",
        },
        {
            name: "customPropertiesExport",
            baseName: "CustomPropertiesExport",
            type: "PdfSaveOptionsData.CustomPropertiesExportEnum",
        },
        {
            name: "digitalSignatureDetails",
            baseName: "DigitalSignatureDetails",
            type: "PdfDigitalSignatureDetailsData",
        },
        {
            name: "displayDocTitle",
            baseName: "DisplayDocTitle",
            type: "boolean",
        },
        {
            name: "downsampleOptions",
            baseName: "DownsampleOptions",
            type: "DownsampleOptionsData",
        },
        {
            name: "embedFullFonts",
            baseName: "EmbedFullFonts",
            type: "boolean",
        },
        {
            name: "encryptionDetails",
            baseName: "EncryptionDetails",
            type: "PdfEncryptionDetailsData",
        },
        {
            name: "exportDocumentStructure",
            baseName: "ExportDocumentStructure",
            type: "boolean",
        },
        {
            name: "exportLanguageToSpanTag",
            baseName: "ExportLanguageToSpanTag",
            type: "boolean",
        },
        {
            name: "fontEmbeddingMode",
            baseName: "FontEmbeddingMode",
            type: "PdfSaveOptionsData.FontEmbeddingModeEnum",
        },
        {
            name: "headerFooterBookmarksExportMode",
            baseName: "HeaderFooterBookmarksExportMode",
            type: "PdfSaveOptionsData.HeaderFooterBookmarksExportModeEnum",
        },
        {
            name: "imageColorSpaceExportMode",
            baseName: "ImageColorSpaceExportMode",
            type: "PdfSaveOptionsData.ImageColorSpaceExportModeEnum",
        },
        {
            name: "imageCompression",
            baseName: "ImageCompression",
            type: "string",
        },
        {
            name: "interpolateImages",
            baseName: "InterpolateImages",
            type: "boolean",
        },
        {
            name: "openHyperlinksInNewWindow",
            baseName: "OpenHyperlinksInNewWindow",
            type: "boolean",
        },
        {
            name: "outlineOptions",
            baseName: "OutlineOptions",
            type: "OutlineOptionsData",
        },
        {
            name: "pageMode",
            baseName: "PageMode",
            type: "PdfSaveOptionsData.PageModeEnum",
        },
        {
            name: "preblendImages",
            baseName: "PreblendImages",
            type: "boolean",
        },
        {
            name: "preserveFormFields",
            baseName: "PreserveFormFields",
            type: "boolean",
        },
        {
            name: "textCompression",
            baseName: "TextCompression",
            type: "PdfSaveOptionsData.TextCompressionEnum",
        },
        {
            name: "useBookFoldPrintingSettings",
            baseName: "UseBookFoldPrintingSettings",
            type: "boolean",
        },
        {
            name: "useCoreFonts",
            baseName: "UseCoreFonts",
            type: "boolean",
        },
        {
            name: "zoomBehavior",
            baseName: "ZoomBehavior",
            type: "PdfSaveOptionsData.ZoomBehaviorEnum",
        },
        {
            name: "zoomFactor",
            baseName: "ZoomFactor",
            type: "number",
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PdfSaveOptionsData.attributeTypeMap);
    }

    /**
     * Gets or sets a value indicating whether or not to cache shapes placed in header and footer of document.
     */
    public cacheHeaderFooterShapes: boolean;

    /**
     * Gets or sets the PDF standards compliance level for output documents.
     */
    public compliance: PdfSaveOptionsData.ComplianceEnum;

    /**
     * Gets or sets a value indicating whether to convert footnote/endnote references in main text story into active hyperlinks.
     * When clicked the hyperlink will lead to the corresponding footnote/endnote.
     * The default value is false.
     */
    public createNoteHyperlinks: boolean;

    /**
     * Gets or sets the option that controls the way CustomDocumentProperties are exported to PDF file.
     * The default value is None.
     */
    public customPropertiesExport: PdfSaveOptionsData.CustomPropertiesExportEnum;

    /**
     * Gets or sets the details for signing the output PDF document.
     */
    public digitalSignatureDetails: PdfDigitalSignatureDetailsData;

    /**
     * Gets or sets a value indicating whether the window’s title bar should display the document title taken from the Title entry of the document information dictionary.
     */
    public displayDocTitle: boolean;

    /**
     * Gets or sets the downsample options.
     */
    public downsampleOptions: DownsampleOptionsData;

    /**
     * Gets or sets a value indicating whether fonts are embedded into the resulting PDF documents.
     */
    public embedFullFonts: boolean;

    /**
     * Gets or sets the details for encrypting the output PDF document.
     */
    public encryptionDetails: PdfEncryptionDetailsData;

    /**
     * Gets or sets a value indicating whether to export document structure.
     */
    public exportDocumentStructure: boolean;

    /**
     * Gets or sets a value determining whether or not to create a "Span" tag in the document structure to export the text language.
     */
    public exportLanguageToSpanTag: boolean;

    /**
     * Gets or sets the font embedding mode.
     */
    public fontEmbeddingMode: PdfSaveOptionsData.FontEmbeddingModeEnum;

    /**
     * Gets or sets the option that controls how bookmarks in headers/footers are exported.
     * The default value is Aspose.Words.Saving.HeaderFooterBookmarksExportMode.All.
     */
    public headerFooterBookmarksExportMode: PdfSaveOptionsData.HeaderFooterBookmarksExportModeEnum;

    /**
     * Gets or sets the option that controls how the color space will be selected for the images in PDF document.
     */
    public imageColorSpaceExportMode: PdfSaveOptionsData.ImageColorSpaceExportModeEnum;

    /**
     * Gets or sets the compression type to be used for all images in the document.
     */
    public imageCompression: string;

    /**
     * Gets or sets a value indicating whether image interpolation shall be performed by a conforming reader. When false is specified, the flag is not written to the output document and the default behavior of reader is used instead.
     */
    public interpolateImages: boolean;

    /**
     * Gets or sets a value indicating whether hyperlinks in the output Pdf document are forced to be opened in a new window (or tab) of a browser.
     */
    public openHyperlinksInNewWindow: boolean;

    /**
     * Gets or sets the outline options.
     */
    public outlineOptions: OutlineOptionsData;

    /**
     * Gets or sets the option that controls how the PDF document should be displayed when opened in the PDF reader.
     */
    public pageMode: PdfSaveOptionsData.PageModeEnum;

    /**
     * Gets or sets a value indicating whether to preblend transparent images with black background color.
     */
    public preblendImages: boolean;

    /**
     * Gets or sets a value indicating whether to preserve Microsoft Word form fields as form fields in PDF or convert them to text.
     */
    public preserveFormFields: boolean;

    /**
     * Gets or sets the compression type to be used for all textual content in the document.
     */
    public textCompression: PdfSaveOptionsData.TextCompressionEnum;

    /**
     * Gets or sets a value indicating whether the document should be saved using a booklet printing layout.
     */
    public useBookFoldPrintingSettings: boolean;

    /**
     * Gets or sets a value indicating whether to substitute TrueType fonts Arial, Times New Roman, Courier New and Symbol with core PDF Type 1 fonts.
     */
    public useCoreFonts: boolean;

    /**
     * Gets or sets the option that controls what type of zoom should be applied when a document is opened with a PDF viewer.
     */
    public zoomBehavior: PdfSaveOptionsData.ZoomBehaviorEnum;

    /**
     * Gets or sets the zoom factor (in percentages) for a document.
     */
    public zoomFactor: number;

    public constructor(init?: Partial< PdfSaveOptionsData >) {
        super(init);
        this.saveFormat = 'pdf';

        Object.assign(this, init);
    }

    public collectFilesContent(_resultFilesContent: Array<any>) {
    }
}

/**
 * Enums for PdfSaveOptionsData
 */
// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace PdfSaveOptionsData {
    export enum ComplianceEnum {
        Pdf17 = 'Pdf17' as any,
        Pdf20 = 'Pdf20' as any,
        PdfA1a = 'PdfA1a' as any,
        PdfA1b = 'PdfA1b' as any,
        PdfA2a = 'PdfA2a' as any,
        PdfA2u = 'PdfA2u' as any,
        PdfA4 = 'PdfA4' as any,
        PdfUa1 = 'PdfUa1' as any
    }

    export enum CustomPropertiesExportEnum {
        None = 'None' as any,
        Standard = 'Standard' as any,
        Metadata = 'Metadata' as any
    }

    export enum FontEmbeddingModeEnum {
        EmbedAll = 'EmbedAll' as any,
        EmbedNonstandard = 'EmbedNonstandard' as any,
        EmbedNone = 'EmbedNone' as any
    }

    export enum HeaderFooterBookmarksExportModeEnum {
        None = 'None' as any,
        First = 'First' as any,
        All = 'All' as any
    }

    export enum ImageColorSpaceExportModeEnum {
        Auto = 'Auto' as any,
        SimpleCmyk = 'SimpleCmyk' as any
    }

    export enum PageModeEnum {
        UseNone = 'UseNone' as any,
        UseOutlines = 'UseOutlines' as any,
        UseThumbs = 'UseThumbs' as any,
        FullScreen = 'FullScreen' as any,
        UseOC = 'UseOC' as any,
        UseAttachments = 'UseAttachments' as any
    }

    export enum TextCompressionEnum {
        None = 'None' as any,
        Flate = 'Flate' as any
    }

    export enum ZoomBehaviorEnum {
        None = 'None' as any,
        ZoomFactor = 'ZoomFactor' as any,
        FitPage = 'FitPage' as any,
        FitWidth = 'FitWidth' as any,
        FitHeight = 'FitHeight' as any,
        FitBox = 'FitBox' as any
    }
}
// tslint:enable:quotemark


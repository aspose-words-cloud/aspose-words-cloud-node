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
            name: "compliance",
            baseName: "Compliance",
            type: "string",
        },
        {
            name: "createNoteHyperlinks",
            baseName: "CreateNoteHyperlinks",
            type: "boolean",
        },
        {
            name: "customPropertiesExport",
            baseName: "CustomPropertiesExport",
            type: "string",
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
            type: "string",
        },
        {
            name: "headerFooterBookmarksExportMode",
            baseName: "HeaderFooterBookmarksExportMode",
            type: "PdfSaveOptionsData.HeaderFooterBookmarksExportModeEnum",
        },
        {
            name: "imageColorSpaceExportMode",
            baseName: "ImageColorSpaceExportMode",
            type: "string",
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
            type: "string",
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
            type: "string",
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
            type: "string",
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
     * Gets or sets the PDF standards compliance level for output documents.
     */
    private _compliance: string;

    /**
     * Gets or sets the PDF standards compliance level for output documents.
     */
    public get compliance(): string {
        return this._compliance;
    }

    /**
     * Gets or sets the PDF standards compliance level for output documents.
     */
    public set compliance(value: string) {
        this._compliance = value;
    }


    /**
     * Gets or sets a value indicating whether to convert footnote/endnote references in main text story into active hyperlinks.
     * When clicked the hyperlink will lead to the corresponding footnote/endnote.
     * The default value is false.
     */
    private _createNoteHyperlinks: boolean;

    /**
     * Gets or sets a value indicating whether to convert footnote/endnote references in main text story into active hyperlinks.
     * When clicked the hyperlink will lead to the corresponding footnote/endnote.
     * The default value is false.
     */
    public get createNoteHyperlinks(): boolean {
        return this._createNoteHyperlinks;
    }

    /**
     * Gets or sets a value indicating whether to convert footnote/endnote references in main text story into active hyperlinks.
     * When clicked the hyperlink will lead to the corresponding footnote/endnote.
     * The default value is false.
     */
    public set createNoteHyperlinks(value: boolean) {
        this._createNoteHyperlinks = value;
    }


    /**
     * Gets or sets the option that controls the way CustomDocumentProperties are exported to PDF file.
     * The default value is None.
     */
    private _customPropertiesExport: string;

    /**
     * Gets or sets the option that controls the way CustomDocumentProperties are exported to PDF file.
     * The default value is None.
     */
    public get customPropertiesExport(): string {
        return this._customPropertiesExport;
    }

    /**
     * Gets or sets the option that controls the way CustomDocumentProperties are exported to PDF file.
     * The default value is None.
     */
    public set customPropertiesExport(value: string) {
        this._customPropertiesExport = value;
    }


    /**
     * Gets or sets the details for signing the output PDF document.
     */
    private _digitalSignatureDetails: PdfDigitalSignatureDetailsData;

    /**
     * Gets or sets the details for signing the output PDF document.
     */
    public get digitalSignatureDetails(): PdfDigitalSignatureDetailsData {
        return this._digitalSignatureDetails;
    }

    /**
     * Gets or sets the details for signing the output PDF document.
     */
    public set digitalSignatureDetails(value: PdfDigitalSignatureDetailsData) {
        this._digitalSignatureDetails = value;
    }


    /**
     * Gets or sets a value indicating whether the window’s title bar should display the document title taken from the Title entry of the document information dictionary.
     */
    private _displayDocTitle: boolean;

    /**
     * Gets or sets a value indicating whether the window’s title bar should display the document title taken from the Title entry of the document information dictionary.
     */
    public get displayDocTitle(): boolean {
        return this._displayDocTitle;
    }

    /**
     * Gets or sets a value indicating whether the window’s title bar should display the document title taken from the Title entry of the document information dictionary.
     */
    public set displayDocTitle(value: boolean) {
        this._displayDocTitle = value;
    }


    /**
     * Gets or sets the downsample options.
     */
    private _downsampleOptions: DownsampleOptionsData;

    /**
     * Gets or sets the downsample options.
     */
    public get downsampleOptions(): DownsampleOptionsData {
        return this._downsampleOptions;
    }

    /**
     * Gets or sets the downsample options.
     */
    public set downsampleOptions(value: DownsampleOptionsData) {
        this._downsampleOptions = value;
    }


    /**
     * Gets or sets a value indicating whether fonts are embedded into the resulting PDF documents.
     */
    private _embedFullFonts: boolean;

    /**
     * Gets or sets a value indicating whether fonts are embedded into the resulting PDF documents.
     */
    public get embedFullFonts(): boolean {
        return this._embedFullFonts;
    }

    /**
     * Gets or sets a value indicating whether fonts are embedded into the resulting PDF documents.
     */
    public set embedFullFonts(value: boolean) {
        this._embedFullFonts = value;
    }


    /**
     * Gets or sets the details for encrypting the output PDF document.
     */
    private _encryptionDetails: PdfEncryptionDetailsData;

    /**
     * Gets or sets the details for encrypting the output PDF document.
     */
    public get encryptionDetails(): PdfEncryptionDetailsData {
        return this._encryptionDetails;
    }

    /**
     * Gets or sets the details for encrypting the output PDF document.
     */
    public set encryptionDetails(value: PdfEncryptionDetailsData) {
        this._encryptionDetails = value;
    }


    /**
     * Gets or sets a value indicating whether to export document structure.
     */
    private _exportDocumentStructure: boolean;

    /**
     * Gets or sets a value indicating whether to export document structure.
     */
    public get exportDocumentStructure(): boolean {
        return this._exportDocumentStructure;
    }

    /**
     * Gets or sets a value indicating whether to export document structure.
     */
    public set exportDocumentStructure(value: boolean) {
        this._exportDocumentStructure = value;
    }


    /**
     * Gets or sets a value determining whether or not to create a "Span" tag in the document structure to export the text language.
     */
    private _exportLanguageToSpanTag: boolean;

    /**
     * Gets or sets a value determining whether or not to create a "Span" tag in the document structure to export the text language.
     */
    public get exportLanguageToSpanTag(): boolean {
        return this._exportLanguageToSpanTag;
    }

    /**
     * Gets or sets a value determining whether or not to create a "Span" tag in the document structure to export the text language.
     */
    public set exportLanguageToSpanTag(value: boolean) {
        this._exportLanguageToSpanTag = value;
    }


    /**
     * Gets or sets the font embedding mode.
     */
    private _fontEmbeddingMode: string;

    /**
     * Gets or sets the font embedding mode.
     */
    public get fontEmbeddingMode(): string {
        return this._fontEmbeddingMode;
    }

    /**
     * Gets or sets the font embedding mode.
     */
    public set fontEmbeddingMode(value: string) {
        this._fontEmbeddingMode = value;
    }


    /**
     * Gets or sets the option that controls how bookmarks in headers/footers are exported.
     * The default value is Aspose.Words.Saving.HeaderFooterBookmarksExportMode.All.
     */
    private _headerFooterBookmarksExportMode: PdfSaveOptionsData.HeaderFooterBookmarksExportModeEnum;

    /**
     * Gets or sets the option that controls how bookmarks in headers/footers are exported.
     * The default value is Aspose.Words.Saving.HeaderFooterBookmarksExportMode.All.
     */
    public get headerFooterBookmarksExportMode(): PdfSaveOptionsData.HeaderFooterBookmarksExportModeEnum {
        return this._headerFooterBookmarksExportMode;
    }

    /**
     * Gets or sets the option that controls how bookmarks in headers/footers are exported.
     * The default value is Aspose.Words.Saving.HeaderFooterBookmarksExportMode.All.
     */
    public set headerFooterBookmarksExportMode(value: PdfSaveOptionsData.HeaderFooterBookmarksExportModeEnum) {
        this._headerFooterBookmarksExportMode = value;
    }


    /**
     * Gets or sets the option that controls how the color space will be selected for the images in PDF document.
     */
    private _imageColorSpaceExportMode: string;

    /**
     * Gets or sets the option that controls how the color space will be selected for the images in PDF document.
     */
    public get imageColorSpaceExportMode(): string {
        return this._imageColorSpaceExportMode;
    }

    /**
     * Gets or sets the option that controls how the color space will be selected for the images in PDF document.
     */
    public set imageColorSpaceExportMode(value: string) {
        this._imageColorSpaceExportMode = value;
    }


    /**
     * Gets or sets the compression type to be used for all images in the document.
     */
    private _imageCompression: string;

    /**
     * Gets or sets the compression type to be used for all images in the document.
     */
    public get imageCompression(): string {
        return this._imageCompression;
    }

    /**
     * Gets or sets the compression type to be used for all images in the document.
     */
    public set imageCompression(value: string) {
        this._imageCompression = value;
    }


    /**
     * Gets or sets a value indicating whether image interpolation shall be performed by a conforming reader. When false is specified, the flag is not written to the output document and the default behavior of reader is used instead.
     */
    private _interpolateImages: boolean;

    /**
     * Gets or sets a value indicating whether image interpolation shall be performed by a conforming reader. When false is specified, the flag is not written to the output document and the default behavior of reader is used instead.
     */
    public get interpolateImages(): boolean {
        return this._interpolateImages;
    }

    /**
     * Gets or sets a value indicating whether image interpolation shall be performed by a conforming reader. When false is specified, the flag is not written to the output document and the default behavior of reader is used instead.
     */
    public set interpolateImages(value: boolean) {
        this._interpolateImages = value;
    }


    /**
     * Gets or sets a value indicating whether hyperlinks in the output Pdf document are forced to be opened in a new window (or tab) of a browser.
     */
    private _openHyperlinksInNewWindow: boolean;

    /**
     * Gets or sets a value indicating whether hyperlinks in the output Pdf document are forced to be opened in a new window (or tab) of a browser.
     */
    public get openHyperlinksInNewWindow(): boolean {
        return this._openHyperlinksInNewWindow;
    }

    /**
     * Gets or sets a value indicating whether hyperlinks in the output Pdf document are forced to be opened in a new window (or tab) of a browser.
     */
    public set openHyperlinksInNewWindow(value: boolean) {
        this._openHyperlinksInNewWindow = value;
    }


    /**
     * Gets or sets the outline options.
     */
    private _outlineOptions: OutlineOptionsData;

    /**
     * Gets or sets the outline options.
     */
    public get outlineOptions(): OutlineOptionsData {
        return this._outlineOptions;
    }

    /**
     * Gets or sets the outline options.
     */
    public set outlineOptions(value: OutlineOptionsData) {
        this._outlineOptions = value;
    }


    /**
     * Gets or sets the option that controls how the PDF document should be displayed when opened in the PDF reader.
     */
    private _pageMode: string;

    /**
     * Gets or sets the option that controls how the PDF document should be displayed when opened in the PDF reader.
     */
    public get pageMode(): string {
        return this._pageMode;
    }

    /**
     * Gets or sets the option that controls how the PDF document should be displayed when opened in the PDF reader.
     */
    public set pageMode(value: string) {
        this._pageMode = value;
    }


    /**
     * Gets or sets a value indicating whether to preblend transparent images with black background color.
     */
    private _preblendImages: boolean;

    /**
     * Gets or sets a value indicating whether to preblend transparent images with black background color.
     */
    public get preblendImages(): boolean {
        return this._preblendImages;
    }

    /**
     * Gets or sets a value indicating whether to preblend transparent images with black background color.
     */
    public set preblendImages(value: boolean) {
        this._preblendImages = value;
    }


    /**
     * Gets or sets a value indicating whether to preserve Microsoft Word form fields as form fields in PDF or convert them to text.
     */
    private _preserveFormFields: boolean;

    /**
     * Gets or sets a value indicating whether to preserve Microsoft Word form fields as form fields in PDF or convert them to text.
     */
    public get preserveFormFields(): boolean {
        return this._preserveFormFields;
    }

    /**
     * Gets or sets a value indicating whether to preserve Microsoft Word form fields as form fields in PDF or convert them to text.
     */
    public set preserveFormFields(value: boolean) {
        this._preserveFormFields = value;
    }


    /**
     * Gets or sets the compression type to be used for all textual content in the document.
     */
    private _textCompression: string;

    /**
     * Gets or sets the compression type to be used for all textual content in the document.
     */
    public get textCompression(): string {
        return this._textCompression;
    }

    /**
     * Gets or sets the compression type to be used for all textual content in the document.
     */
    public set textCompression(value: string) {
        this._textCompression = value;
    }


    /**
     * Gets or sets a value indicating whether the document should be saved using a booklet printing layout.
     */
    private _useBookFoldPrintingSettings: boolean;

    /**
     * Gets or sets a value indicating whether the document should be saved using a booklet printing layout.
     */
    public get useBookFoldPrintingSettings(): boolean {
        return this._useBookFoldPrintingSettings;
    }

    /**
     * Gets or sets a value indicating whether the document should be saved using a booklet printing layout.
     */
    public set useBookFoldPrintingSettings(value: boolean) {
        this._useBookFoldPrintingSettings = value;
    }


    /**
     * Gets or sets a value indicating whether to substitute TrueType fonts Arial, Times New Roman, Courier New and Symbol with core PDF Type 1 fonts.
     */
    private _useCoreFonts: boolean;

    /**
     * Gets or sets a value indicating whether to substitute TrueType fonts Arial, Times New Roman, Courier New and Symbol with core PDF Type 1 fonts.
     */
    public get useCoreFonts(): boolean {
        return this._useCoreFonts;
    }

    /**
     * Gets or sets a value indicating whether to substitute TrueType fonts Arial, Times New Roman, Courier New and Symbol with core PDF Type 1 fonts.
     */
    public set useCoreFonts(value: boolean) {
        this._useCoreFonts = value;
    }


    /**
     * Gets or sets the option that controls what type of zoom should be applied when a document is opened with a PDF viewer.
     */
    private _zoomBehavior: string;

    /**
     * Gets or sets the option that controls what type of zoom should be applied when a document is opened with a PDF viewer.
     */
    public get zoomBehavior(): string {
        return this._zoomBehavior;
    }

    /**
     * Gets or sets the option that controls what type of zoom should be applied when a document is opened with a PDF viewer.
     */
    public set zoomBehavior(value: string) {
        this._zoomBehavior = value;
    }


    /**
     * Gets or sets the zoom factor (in percentages) for a document.
     */
    private _zoomFactor: number;

    /**
     * Gets or sets the zoom factor (in percentages) for a document.
     */
    public get zoomFactor(): number {
        return this._zoomFactor;
    }

    /**
     * Gets or sets the zoom factor (in percentages) for a document.
     */
    public set zoomFactor(value: number) {
        this._zoomFactor = value;
    }


    public constructor(init?: Partial< PdfSaveOptionsData >) {
        super(init);
        saveFormat = 'pdf';

        Object.assign(this, init);
    }
}

/**
 * Enums for PdfSaveOptionsData
 */
// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace PdfSaveOptionsData {
    export enum HeaderFooterBookmarksExportModeEnum {
        None = 'None' as any,
        First = 'First' as any,
        All = 'All' as any
    }
}
// tslint:enable:quotemark


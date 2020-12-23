/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="pdfSaveOptionsData.ts">
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
            name: "escapeUri",
            baseName: "EscapeUri",
            type: "boolean",
        },
        {
            name: "exportDocumentStructure",
            baseName: "ExportDocumentStructure",
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
    public compliance: string;

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
    public customPropertiesExport: string;

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
     * Gets or sets a value indicating whether URI should be escaped before writing.
     */
    public escapeUri: boolean;

    /**
     * Gets or sets a value indicating whether to export document structure.
     */
    public exportDocumentStructure: boolean;

    /**
     * Gets or sets the font embedding mode.
     */
    public fontEmbeddingMode: string;

    /**
     * Gets or sets the option that controls how bookmarks in headers/footers are exported.
     * The default value is Aspose.Words.Saving.HeaderFooterBookmarksExportMode.All.
     */
    public headerFooterBookmarksExportMode: PdfSaveOptionsData.HeaderFooterBookmarksExportModeEnum;

    /**
     * Gets or sets the option that controls how the color space will be selected for the images in PDF document.
     */
    public imageColorSpaceExportMode: string;

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
    public pageMode: string;

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
    public textCompression: string;

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
    public zoomBehavior: string;

    /**
     * Gets or sets the zoom factor (in percentages) for a document.
     */
    public zoomFactor: number;

    public constructor(init?: Partial< PdfSaveOptionsData >) {
        super(init);
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


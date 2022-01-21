/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="htmlSaveOptionsData.ts">
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
import { SaveOptionsData } from './saveOptionsData';

export const importsMapHtmlSaveOptionsData = {
    SaveOptionsData,
};

/**
 * Container class for html save options.
 */
export class HtmlSaveOptionsData extends SaveOptionsData {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "allowNegativeIndent",
            baseName: "AllowNegativeIndent",
            type: "boolean",
        },
        {
            name: "cssClassNamePrefix",
            baseName: "CssClassNamePrefix",
            type: "string",
        },
        {
            name: "cssStyleSheetFileName",
            baseName: "CssStyleSheetFileName",
            type: "string",
        },
        {
            name: "cssStyleSheetType",
            baseName: "CssStyleSheetType",
            type: "string",
        },
        {
            name: "documentSplitCriteria",
            baseName: "DocumentSplitCriteria",
            type: "string",
        },
        {
            name: "documentSplitHeadingLevel",
            baseName: "DocumentSplitHeadingLevel",
            type: "number",
        },
        {
            name: "encoding",
            baseName: "Encoding",
            type: "string",
        },
        {
            name: "exportDocumentProperties",
            baseName: "ExportDocumentProperties",
            type: "boolean",
        },
        {
            name: "exportDropDownFormFieldAsText",
            baseName: "ExportDropDownFormFieldAsText",
            type: "boolean",
        },
        {
            name: "exportFontResources",
            baseName: "ExportFontResources",
            type: "boolean",
        },
        {
            name: "exportFontsAsBase64",
            baseName: "ExportFontsAsBase64",
            type: "boolean",
        },
        {
            name: "exportHeadersFootersMode",
            baseName: "ExportHeadersFootersMode",
            type: "string",
        },
        {
            name: "exportImagesAsBase64",
            baseName: "ExportImagesAsBase64",
            type: "boolean",
        },
        {
            name: "exportLanguageInformation",
            baseName: "ExportLanguageInformation",
            type: "boolean",
        },
        {
            name: "exportListLabels",
            baseName: "ExportListLabels",
            type: "string",
        },
        {
            name: "exportOriginalUrlForLinkedImages",
            baseName: "ExportOriginalUrlForLinkedImages",
            type: "boolean",
        },
        {
            name: "exportPageMargins",
            baseName: "ExportPageMargins",
            type: "boolean",
        },
        {
            name: "exportPageSetup",
            baseName: "ExportPageSetup",
            type: "boolean",
        },
        {
            name: "exportRelativeFontSize",
            baseName: "ExportRelativeFontSize",
            type: "boolean",
        },
        {
            name: "exportRoundtripInformation",
            baseName: "ExportRoundtripInformation",
            type: "boolean",
        },
        {
            name: "exportTextBoxAsSvg",
            baseName: "ExportTextBoxAsSvg",
            type: "boolean",
        },
        {
            name: "exportTextInputFormFieldAsText",
            baseName: "ExportTextInputFormFieldAsText",
            type: "boolean",
        },
        {
            name: "exportTocPageNumbers",
            baseName: "ExportTocPageNumbers",
            type: "boolean",
        },
        {
            name: "exportXhtmlTransitional",
            baseName: "ExportXhtmlTransitional",
            type: "boolean",
        },
        {
            name: "fontResourcesSubsettingSizeThreshold",
            baseName: "FontResourcesSubsettingSizeThreshold",
            type: "number",
        },
        {
            name: "fontsFolder",
            baseName: "FontsFolder",
            type: "string",
        },
        {
            name: "fontsFolderAlias",
            baseName: "FontsFolderAlias",
            type: "string",
        },
        {
            name: "htmlVersion",
            baseName: "HtmlVersion",
            type: "HtmlSaveOptionsData.HtmlVersionEnum",
        },
        {
            name: "imageResolution",
            baseName: "ImageResolution",
            type: "number",
        },
        {
            name: "imagesFolder",
            baseName: "ImagesFolder",
            type: "string",
        },
        {
            name: "imagesFolderAlias",
            baseName: "ImagesFolderAlias",
            type: "string",
        },
        {
            name: "metafileFormat",
            baseName: "MetafileFormat",
            type: "HtmlSaveOptionsData.MetafileFormatEnum",
        },
        {
            name: "officeMathOutputMode",
            baseName: "OfficeMathOutputMode",
            type: "HtmlSaveOptionsData.OfficeMathOutputModeEnum",
        },
        {
            name: "prettyFormat",
            baseName: "PrettyFormat",
            type: "boolean",
        },
        {
            name: "resolveFontNames",
            baseName: "ResolveFontNames",
            type: "boolean",
        },
        {
            name: "resourceFolder",
            baseName: "ResourceFolder",
            type: "string",
        },
        {
            name: "resourceFolderAlias",
            baseName: "ResourceFolderAlias",
            type: "string",
        },
        {
            name: "scaleImageToShapeSize",
            baseName: "ScaleImageToShapeSize",
            type: "boolean",
        },
        {
            name: "tableWidthOutputMode",
            baseName: "TableWidthOutputMode",
            type: "string",
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(HtmlSaveOptionsData.attributeTypeMap);
    }

    /**
     * Gets or sets a value indicating whether negative left and right indents of paragraphs are allowed (not normalized).
     */
    private _allowNegativeIndent: boolean;

    /**
     * Gets or sets a value indicating whether negative left and right indents of paragraphs are allowed (not normalized).
     */
    public get allowNegativeIndent(): boolean {
        return this._allowNegativeIndent;
    }

    /**
     * Gets or sets a value indicating whether negative left and right indents of paragraphs are allowed (not normalized).
     */
    public set allowNegativeIndent(value: boolean) {
        this._allowNegativeIndent = value;
    }


    /**
     * Gets or sets the prefix which is added to all CSS class names. The default value is an empty string and generated CSS class names have no common prefix.
     * If this value is not empty, all CSS classes generated by Aspose.Words will start with the specified prefix.This might be useful, for example, if you add custom CSS to generated documents and want to prevent class name conflicts.
     * If the value is not null or empty, it must be a valid CSS identifier.
     */
    private _cssClassNamePrefix: string;

    /**
     * Gets or sets the prefix which is added to all CSS class names. The default value is an empty string and generated CSS class names have no common prefix.
     * If this value is not empty, all CSS classes generated by Aspose.Words will start with the specified prefix.This might be useful, for example, if you add custom CSS to generated documents and want to prevent class name conflicts.
     * If the value is not null or empty, it must be a valid CSS identifier.
     */
    public get cssClassNamePrefix(): string {
        return this._cssClassNamePrefix;
    }

    /**
     * Gets or sets the prefix which is added to all CSS class names. The default value is an empty string and generated CSS class names have no common prefix.
     * If this value is not empty, all CSS classes generated by Aspose.Words will start with the specified prefix.This might be useful, for example, if you add custom CSS to generated documents and want to prevent class name conflicts.
     * If the value is not null or empty, it must be a valid CSS identifier.
     */
    public set cssClassNamePrefix(value: string) {
        this._cssClassNamePrefix = value;
    }


    /**
     * Gets or sets the name of the CSS file written when the document is exported to HTML.
     */
    private _cssStyleSheetFileName: string;

    /**
     * Gets or sets the name of the CSS file written when the document is exported to HTML.
     */
    public get cssStyleSheetFileName(): string {
        return this._cssStyleSheetFileName;
    }

    /**
     * Gets or sets the name of the CSS file written when the document is exported to HTML.
     */
    public set cssStyleSheetFileName(value: string) {
        this._cssStyleSheetFileName = value;
    }


    /**
     * Gets or sets the option that controls how the CSS styles are exported.
     */
    private _cssStyleSheetType: string;

    /**
     * Gets or sets the option that controls how the CSS styles are exported.
     */
    public get cssStyleSheetType(): string {
        return this._cssStyleSheetType;
    }

    /**
     * Gets or sets the option that controls how the CSS styles are exported.
     */
    public set cssStyleSheetType(value: string) {
        this._cssStyleSheetType = value;
    }


    /**
     * Gets or sets the option that controls how the document should be split when saving.
     */
    private _documentSplitCriteria: string;

    /**
     * Gets or sets the option that controls how the document should be split when saving.
     */
    public get documentSplitCriteria(): string {
        return this._documentSplitCriteria;
    }

    /**
     * Gets or sets the option that controls how the document should be split when saving.
     */
    public set documentSplitCriteria(value: string) {
        this._documentSplitCriteria = value;
    }


    /**
     * Gets or sets the maximum level of headings at which to split the document.
     */
    private _documentSplitHeadingLevel: number;

    /**
     * Gets or sets the maximum level of headings at which to split the document.
     */
    public get documentSplitHeadingLevel(): number {
        return this._documentSplitHeadingLevel;
    }

    /**
     * Gets or sets the maximum level of headings at which to split the document.
     */
    public set documentSplitHeadingLevel(value: number) {
        this._documentSplitHeadingLevel = value;
    }


    /**
     * Gets or sets the character encoding to use when exporting.
     */
    private _encoding: string;

    /**
     * Gets or sets the character encoding to use when exporting.
     */
    public get encoding(): string {
        return this._encoding;
    }

    /**
     * Gets or sets the character encoding to use when exporting.
     */
    public set encoding(value: string) {
        this._encoding = value;
    }


    /**
     * Gets or sets a value indicating whether to export built-in and custom document properties.
     */
    private _exportDocumentProperties: boolean;

    /**
     * Gets or sets a value indicating whether to export built-in and custom document properties.
     */
    public get exportDocumentProperties(): boolean {
        return this._exportDocumentProperties;
    }

    /**
     * Gets or sets a value indicating whether to export built-in and custom document properties.
     */
    public set exportDocumentProperties(value: boolean) {
        this._exportDocumentProperties = value;
    }


    /**
     * Gets or sets the flag, that controls how drop-down form fields are saved to HTML.
     * The default value is false.
     */
    private _exportDropDownFormFieldAsText: boolean;

    /**
     * Gets or sets the flag, that controls how drop-down form fields are saved to HTML.
     * The default value is false.
     */
    public get exportDropDownFormFieldAsText(): boolean {
        return this._exportDropDownFormFieldAsText;
    }

    /**
     * Gets or sets the flag, that controls how drop-down form fields are saved to HTML.
     * The default value is false.
     */
    public set exportDropDownFormFieldAsText(value: boolean) {
        this._exportDropDownFormFieldAsText = value;
    }


    /**
     * Gets or sets a value indicating whether font resources should be exported.
     */
    private _exportFontResources: boolean;

    /**
     * Gets or sets a value indicating whether font resources should be exported.
     */
    public get exportFontResources(): boolean {
        return this._exportFontResources;
    }

    /**
     * Gets or sets a value indicating whether font resources should be exported.
     */
    public set exportFontResources(value: boolean) {
        this._exportFontResources = value;
    }


    /**
     * Gets or sets a value indicating whether fonts resources should be embedded to HTML in Base64 encoding. The default value is false.
     */
    private _exportFontsAsBase64: boolean;

    /**
     * Gets or sets a value indicating whether fonts resources should be embedded to HTML in Base64 encoding. The default value is false.
     */
    public get exportFontsAsBase64(): boolean {
        return this._exportFontsAsBase64;
    }

    /**
     * Gets or sets a value indicating whether fonts resources should be embedded to HTML in Base64 encoding. The default value is false.
     */
    public set exportFontsAsBase64(value: boolean) {
        this._exportFontsAsBase64 = value;
    }


    /**
     * Gets or sets the option that controls how headers and footers are exported.
     */
    private _exportHeadersFootersMode: string;

    /**
     * Gets or sets the option that controls how headers and footers are exported.
     */
    public get exportHeadersFootersMode(): string {
        return this._exportHeadersFootersMode;
    }

    /**
     * Gets or sets the option that controls how headers and footers are exported.
     */
    public set exportHeadersFootersMode(value: string) {
        this._exportHeadersFootersMode = value;
    }


    /**
     * Gets or sets a value indicating whether images are saved in Base64 format.
     */
    private _exportImagesAsBase64: boolean;

    /**
     * Gets or sets a value indicating whether images are saved in Base64 format.
     */
    public get exportImagesAsBase64(): boolean {
        return this._exportImagesAsBase64;
    }

    /**
     * Gets or sets a value indicating whether images are saved in Base64 format.
     */
    public set exportImagesAsBase64(value: boolean) {
        this._exportImagesAsBase64 = value;
    }


    /**
     * Gets or sets a value indicating whether language information is exported.
     */
    private _exportLanguageInformation: boolean;

    /**
     * Gets or sets a value indicating whether language information is exported.
     */
    public get exportLanguageInformation(): boolean {
        return this._exportLanguageInformation;
    }

    /**
     * Gets or sets a value indicating whether language information is exported.
     */
    public set exportLanguageInformation(value: boolean) {
        this._exportLanguageInformation = value;
    }


    /**
     * Gets or sets the option that controls how list labels are exported.
     */
    private _exportListLabels: string;

    /**
     * Gets or sets the option that controls how list labels are exported.
     */
    public get exportListLabels(): string {
        return this._exportListLabels;
    }

    /**
     * Gets or sets the option that controls how list labels are exported.
     */
    public set exportListLabels(value: string) {
        this._exportListLabels = value;
    }


    /**
     * Gets or sets a value indicating whether the original URL should be used as the URL of the linked images.
     * The default value is false.
     */
    private _exportOriginalUrlForLinkedImages: boolean;

    /**
     * Gets or sets a value indicating whether the original URL should be used as the URL of the linked images.
     * The default value is false.
     */
    public get exportOriginalUrlForLinkedImages(): boolean {
        return this._exportOriginalUrlForLinkedImages;
    }

    /**
     * Gets or sets a value indicating whether the original URL should be used as the URL of the linked images.
     * The default value is false.
     */
    public set exportOriginalUrlForLinkedImages(value: boolean) {
        this._exportOriginalUrlForLinkedImages = value;
    }


    /**
     * Gets or sets a value indicating whether page margins are exported to HTML, MHTML or EPUB.
     * The default value is false.
     */
    private _exportPageMargins: boolean;

    /**
     * Gets or sets a value indicating whether page margins are exported to HTML, MHTML or EPUB.
     * The default value is false.
     */
    public get exportPageMargins(): boolean {
        return this._exportPageMargins;
    }

    /**
     * Gets or sets a value indicating whether page margins are exported to HTML, MHTML or EPUB.
     * The default value is false.
     */
    public set exportPageMargins(value: boolean) {
        this._exportPageMargins = value;
    }


    /**
     * Gets or sets a value indicating whether page setup is exported.
     */
    private _exportPageSetup: boolean;

    /**
     * Gets or sets a value indicating whether page setup is exported.
     */
    public get exportPageSetup(): boolean {
        return this._exportPageSetup;
    }

    /**
     * Gets or sets a value indicating whether page setup is exported.
     */
    public set exportPageSetup(value: boolean) {
        this._exportPageSetup = value;
    }


    /**
     * Gets or sets a value indicating whether font sizes should be output in relative units when saving.
     */
    private _exportRelativeFontSize: boolean;

    /**
     * Gets or sets a value indicating whether font sizes should be output in relative units when saving.
     */
    public get exportRelativeFontSize(): boolean {
        return this._exportRelativeFontSize;
    }

    /**
     * Gets or sets a value indicating whether font sizes should be output in relative units when saving.
     */
    public set exportRelativeFontSize(value: boolean) {
        this._exportRelativeFontSize = value;
    }


    /**
     * Gets or sets a value indicating whether to write the roundtrip information when saving to HTML. The default value is true.
     */
    private _exportRoundtripInformation: boolean;

    /**
     * Gets or sets a value indicating whether to write the roundtrip information when saving to HTML. The default value is true.
     */
    public get exportRoundtripInformation(): boolean {
        return this._exportRoundtripInformation;
    }

    /**
     * Gets or sets a value indicating whether to write the roundtrip information when saving to HTML. The default value is true.
     */
    public set exportRoundtripInformation(value: boolean) {
        this._exportRoundtripInformation = value;
    }


    /**
     * Gets or sets the flag, that controls how textboxes represented by Aspose.Words.Drawing.Shape are saved to HTML, MHTML or EPUB. The default value is false.
     * When set to true, exports textboxes as inline "svg" elements. When false, exports as "image" elements.
     */
    private _exportTextBoxAsSvg: boolean;

    /**
     * Gets or sets the flag, that controls how textboxes represented by Aspose.Words.Drawing.Shape are saved to HTML, MHTML or EPUB. The default value is false.
     * When set to true, exports textboxes as inline "svg" elements. When false, exports as "image" elements.
     */
    public get exportTextBoxAsSvg(): boolean {
        return this._exportTextBoxAsSvg;
    }

    /**
     * Gets or sets the flag, that controls how textboxes represented by Aspose.Words.Drawing.Shape are saved to HTML, MHTML or EPUB. The default value is false.
     * When set to true, exports textboxes as inline "svg" elements. When false, exports as "image" elements.
     */
    public set exportTextBoxAsSvg(value: boolean) {
        this._exportTextBoxAsSvg = value;
    }


    /**
     * Gets or sets the flag, that controls how text input form fields are saved.
     */
    private _exportTextInputFormFieldAsText: boolean;

    /**
     * Gets or sets the flag, that controls how text input form fields are saved.
     */
    public get exportTextInputFormFieldAsText(): boolean {
        return this._exportTextInputFormFieldAsText;
    }

    /**
     * Gets or sets the flag, that controls how text input form fields are saved.
     */
    public set exportTextInputFormFieldAsText(value: boolean) {
        this._exportTextInputFormFieldAsText = value;
    }


    /**
     * Gets or sets a value indicating whether to write page numbers to table of contents when saving.
     */
    private _exportTocPageNumbers: boolean;

    /**
     * Gets or sets a value indicating whether to write page numbers to table of contents when saving.
     */
    public get exportTocPageNumbers(): boolean {
        return this._exportTocPageNumbers;
    }

    /**
     * Gets or sets a value indicating whether to write page numbers to table of contents when saving.
     */
    public set exportTocPageNumbers(value: boolean) {
        this._exportTocPageNumbers = value;
    }


    /**
     * Gets or sets a value indicating whether to write the DOCTYPE declaration when saving.
     */
    private _exportXhtmlTransitional: boolean;

    /**
     * Gets or sets a value indicating whether to write the DOCTYPE declaration when saving.
     */
    public get exportXhtmlTransitional(): boolean {
        return this._exportXhtmlTransitional;
    }

    /**
     * Gets or sets a value indicating whether to write the DOCTYPE declaration when saving.
     */
    public set exportXhtmlTransitional(value: boolean) {
        this._exportXhtmlTransitional = value;
    }


    /**
     * Gets or sets the option that controls which font resources need subsetting when saving.
     */
    private _fontResourcesSubsettingSizeThreshold: number;

    /**
     * Gets or sets the option that controls which font resources need subsetting when saving.
     */
    public get fontResourcesSubsettingSizeThreshold(): number {
        return this._fontResourcesSubsettingSizeThreshold;
    }

    /**
     * Gets or sets the option that controls which font resources need subsetting when saving.
     */
    public set fontResourcesSubsettingSizeThreshold(value: number) {
        this._fontResourcesSubsettingSizeThreshold = value;
    }


    /**
     * Gets or sets the physical folder where fonts are saved when exporting a document.
     */
    private _fontsFolder: string;

    /**
     * Gets or sets the physical folder where fonts are saved when exporting a document.
     */
    public get fontsFolder(): string {
        return this._fontsFolder;
    }

    /**
     * Gets or sets the physical folder where fonts are saved when exporting a document.
     */
    public set fontsFolder(value: string) {
        this._fontsFolder = value;
    }


    /**
     * Gets or sets the name of the folder used to construct font URIs.
     */
    private _fontsFolderAlias: string;

    /**
     * Gets or sets the name of the folder used to construct font URIs.
     */
    public get fontsFolderAlias(): string {
        return this._fontsFolderAlias;
    }

    /**
     * Gets or sets the name of the folder used to construct font URIs.
     */
    public set fontsFolderAlias(value: string) {
        this._fontsFolderAlias = value;
    }


    /**
     * Gets or sets the version of HTML standard, that should be used when saving the document to HTML or MHTML.
     * Default value is Aspose.Words.Saving.HtmlVersion.Xhtml.
     */
    private _htmlVersion: HtmlSaveOptionsData.HtmlVersionEnum;

    /**
     * Gets or sets the version of HTML standard, that should be used when saving the document to HTML or MHTML.
     * Default value is Aspose.Words.Saving.HtmlVersion.Xhtml.
     */
    public get htmlVersion(): HtmlSaveOptionsData.HtmlVersionEnum {
        return this._htmlVersion;
    }

    /**
     * Gets or sets the version of HTML standard, that should be used when saving the document to HTML or MHTML.
     * Default value is Aspose.Words.Saving.HtmlVersion.Xhtml.
     */
    public set htmlVersion(value: HtmlSaveOptionsData.HtmlVersionEnum) {
        this._htmlVersion = value;
    }


    /**
     * Gets or sets the output resolution for images when exporting.
     */
    private _imageResolution: number;

    /**
     * Gets or sets the output resolution for images when exporting.
     */
    public get imageResolution(): number {
        return this._imageResolution;
    }

    /**
     * Gets or sets the output resolution for images when exporting.
     */
    public set imageResolution(value: number) {
        this._imageResolution = value;
    }


    /**
     * Gets or sets the physical folder where images are saved when exporting a document.
     */
    private _imagesFolder: string;

    /**
     * Gets or sets the physical folder where images are saved when exporting a document.
     */
    public get imagesFolder(): string {
        return this._imagesFolder;
    }

    /**
     * Gets or sets the physical folder where images are saved when exporting a document.
     */
    public set imagesFolder(value: string) {
        this._imagesFolder = value;
    }


    /**
     * Gets or sets the name of the folder used to construct image URIs.
     */
    private _imagesFolderAlias: string;

    /**
     * Gets or sets the name of the folder used to construct image URIs.
     */
    public get imagesFolderAlias(): string {
        return this._imagesFolderAlias;
    }

    /**
     * Gets or sets the name of the folder used to construct image URIs.
     */
    public set imagesFolderAlias(value: string) {
        this._imagesFolderAlias = value;
    }


    /**
     * Gets or sets the options, that controls in what format metafiles are saved when exporting to HTML, MHTML, or EPUB.
     * The default value is Aspose.Words.Saving.HtmlMetafileFormat.Png, meaning that metafiles are rendered to raster PNG images.
     * Metafiles are not natively displayed by HTML browsers. By default, Aspose.Words converts WMF and EMF images into PNG files when exporting to HTML.Other options are to convert metafiles to SVG images or to export them as is without conversion.
     * Some image transforms, in particular image cropping, will not be applied to metafile images if they are exported to HTML without conversion.
     */
    private _metafileFormat: HtmlSaveOptionsData.MetafileFormatEnum;

    /**
     * Gets or sets the options, that controls in what format metafiles are saved when exporting to HTML, MHTML, or EPUB.
     * The default value is Aspose.Words.Saving.HtmlMetafileFormat.Png, meaning that metafiles are rendered to raster PNG images.
     * Metafiles are not natively displayed by HTML browsers. By default, Aspose.Words converts WMF and EMF images into PNG files when exporting to HTML.Other options are to convert metafiles to SVG images or to export them as is without conversion.
     * Some image transforms, in particular image cropping, will not be applied to metafile images if they are exported to HTML without conversion.
     */
    public get metafileFormat(): HtmlSaveOptionsData.MetafileFormatEnum {
        return this._metafileFormat;
    }

    /**
     * Gets or sets the options, that controls in what format metafiles are saved when exporting to HTML, MHTML, or EPUB.
     * The default value is Aspose.Words.Saving.HtmlMetafileFormat.Png, meaning that metafiles are rendered to raster PNG images.
     * Metafiles are not natively displayed by HTML browsers. By default, Aspose.Words converts WMF and EMF images into PNG files when exporting to HTML.Other options are to convert metafiles to SVG images or to export them as is without conversion.
     * Some image transforms, in particular image cropping, will not be applied to metafile images if they are exported to HTML without conversion.
     */
    public set metafileFormat(value: HtmlSaveOptionsData.MetafileFormatEnum) {
        this._metafileFormat = value;
    }


    /**
     * Gets or sets the option that controls how OfficeMath objects are exported to HTML, MHTML or EPUB. The default value is HtmlOfficeMathOutputMode.Image.
     */
    private _officeMathOutputMode: HtmlSaveOptionsData.OfficeMathOutputModeEnum;

    /**
     * Gets or sets the option that controls how OfficeMath objects are exported to HTML, MHTML or EPUB. The default value is HtmlOfficeMathOutputMode.Image.
     */
    public get officeMathOutputMode(): HtmlSaveOptionsData.OfficeMathOutputModeEnum {
        return this._officeMathOutputMode;
    }

    /**
     * Gets or sets the option that controls how OfficeMath objects are exported to HTML, MHTML or EPUB. The default value is HtmlOfficeMathOutputMode.Image.
     */
    public set officeMathOutputMode(value: HtmlSaveOptionsData.OfficeMathOutputModeEnum) {
        this._officeMathOutputMode = value;
    }


    /**
     * Gets or sets a value indicating whether to use pretty formats output.
     */
    private _prettyFormat: boolean;

    /**
     * Gets or sets a value indicating whether to use pretty formats output.
     */
    public get prettyFormat(): boolean {
        return this._prettyFormat;
    }

    /**
     * Gets or sets a value indicating whether to use pretty formats output.
     */
    public set prettyFormat(value: boolean) {
        this._prettyFormat = value;
    }


    /**
     * Gets or sets a value indicating whether font family names used in the document are resolved and substituted according to FontSettings when being written into HTML-based formats.
     * The default value is false.
     */
    private _resolveFontNames: boolean;

    /**
     * Gets or sets a value indicating whether font family names used in the document are resolved and substituted according to FontSettings when being written into HTML-based formats.
     * The default value is false.
     */
    public get resolveFontNames(): boolean {
        return this._resolveFontNames;
    }

    /**
     * Gets or sets a value indicating whether font family names used in the document are resolved and substituted according to FontSettings when being written into HTML-based formats.
     * The default value is false.
     */
    public set resolveFontNames(value: boolean) {
        this._resolveFontNames = value;
    }


    /**
     * Gets or sets the physical folder where all resources like images, fonts, and external CSS are saved when a document is exported to HTML. The default value is an empty string.
     */
    private _resourceFolder: string;

    /**
     * Gets or sets the physical folder where all resources like images, fonts, and external CSS are saved when a document is exported to HTML. The default value is an empty string.
     */
    public get resourceFolder(): string {
        return this._resourceFolder;
    }

    /**
     * Gets or sets the physical folder where all resources like images, fonts, and external CSS are saved when a document is exported to HTML. The default value is an empty string.
     */
    public set resourceFolder(value: string) {
        this._resourceFolder = value;
    }


    /**
     * Gets or sets the name of the folder used to construct URIs of all resources written into HTML document. The default value is an empty string.
     */
    private _resourceFolderAlias: string;

    /**
     * Gets or sets the name of the folder used to construct URIs of all resources written into HTML document. The default value is an empty string.
     */
    public get resourceFolderAlias(): string {
        return this._resourceFolderAlias;
    }

    /**
     * Gets or sets the name of the folder used to construct URIs of all resources written into HTML document. The default value is an empty string.
     */
    public set resourceFolderAlias(value: string) {
        this._resourceFolderAlias = value;
    }


    /**
     * Gets or sets a value indicating whether images are scaled by Aspose.Words to the bounding shape size when exporting.
     */
    private _scaleImageToShapeSize: boolean;

    /**
     * Gets or sets a value indicating whether images are scaled by Aspose.Words to the bounding shape size when exporting.
     */
    public get scaleImageToShapeSize(): boolean {
        return this._scaleImageToShapeSize;
    }

    /**
     * Gets or sets a value indicating whether images are scaled by Aspose.Words to the bounding shape size when exporting.
     */
    public set scaleImageToShapeSize(value: boolean) {
        this._scaleImageToShapeSize = value;
    }


    /**
     * Gets or sets the option that controls how table, row and cell widths are exported.
     */
    private _tableWidthOutputMode: string;

    /**
     * Gets or sets the option that controls how table, row and cell widths are exported.
     */
    public get tableWidthOutputMode(): string {
        return this._tableWidthOutputMode;
    }

    /**
     * Gets or sets the option that controls how table, row and cell widths are exported.
     */
    public set tableWidthOutputMode(value: string) {
        this._tableWidthOutputMode = value;
    }


    public constructor(init?: Partial< HtmlSaveOptionsData >) {
        super(init);
        saveFormat = 'html';

        Object.assign(this, init);
    }
}

/**
 * Enums for HtmlSaveOptionsData
 */
// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace HtmlSaveOptionsData {
    export enum HtmlVersionEnum {
        Xhtml = 'Xhtml' as any,
        Html5 = 'Html5' as any
    }

    export enum MetafileFormatEnum {
        Png = 'Png' as any,
        Svg = 'Svg' as any,
        EmfOrWmf = 'EmfOrWmf' as any
    }

    export enum OfficeMathOutputModeEnum {
        Image = 'Image' as any,
        MathML = 'MathML' as any,
        Text = 'Text' as any
    }
}
// tslint:enable:quotemark


/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="htmlSaveOptionsData.ts">
 *   Copyright (c) 2021 Aspose.Words for Cloud
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
    public allowNegativeIndent: boolean;

    /**
     * Gets or sets the prefix which is added to all CSS class names. The default value is an empty string and generated CSS class names have no common prefix.
     * If this value is not empty, all CSS classes generated by Aspose.Words will start with the specified prefix.This might be useful, for example, if you add custom CSS to generated documents and want to prevent class name conflicts.
     * If the value is not null or empty, it must be a valid CSS identifier.
     */
    public cssClassNamePrefix: string;

    /**
     * Gets or sets the name of the CSS file written when the document is exported to HTML.
     */
    public cssStyleSheetFileName: string;

    /**
     * Gets or sets the option that controls how the CSS styles are exported.
     */
    public cssStyleSheetType: string;

    /**
     * Gets or sets the option that controls how the document should be split when saving.
     */
    public documentSplitCriteria: string;

    /**
     * Gets or sets the maximum level of headings at which to split the document.
     */
    public documentSplitHeadingLevel: number;

    /**
     * Gets or sets the character encoding to use when exporting.
     */
    public encoding: string;

    /**
     * Gets or sets a value indicating whether to export built-in and custom document properties.
     */
    public exportDocumentProperties: boolean;

    /**
     * Gets or sets the flag, that controls how drop-down form fields are saved to HTML.
     * The default value is false.
     */
    public exportDropDownFormFieldAsText: boolean;

    /**
     * Gets or sets a value indicating whether font resources should be exported.
     */
    public exportFontResources: boolean;

    /**
     * Gets or sets a value indicating whether fonts resources should be embedded to HTML in Base64 encoding. The default value is false.
     */
    public exportFontsAsBase64: boolean;

    /**
     * Gets or sets the option that controls how headers and footers are exported.
     */
    public exportHeadersFootersMode: string;

    /**
     * Gets or sets a value indicating whether images are saved in Base64 format.
     */
    public exportImagesAsBase64: boolean;

    /**
     * Gets or sets a value indicating whether language information is exported.
     */
    public exportLanguageInformation: boolean;

    /**
     * Gets or sets the option that controls how list labels are exported.
     */
    public exportListLabels: string;

    /**
     * Gets or sets a value indicating whether the original URL should be used as the URL of the linked images.
     * The default value is false.
     */
    public exportOriginalUrlForLinkedImages: boolean;

    /**
     * Gets or sets a value indicating whether page margins are exported to HTML, MHTML or EPUB.
     * The default value is false.
     */
    public exportPageMargins: boolean;

    /**
     * Gets or sets a value indicating whether page setup is exported.
     */
    public exportPageSetup: boolean;

    /**
     * Gets or sets a value indicating whether font sizes should be output in relative units when saving.
     */
    public exportRelativeFontSize: boolean;

    /**
     * Gets or sets a value indicating whether to write the roundtrip information when saving to HTML. The default value is true.
     */
    public exportRoundtripInformation: boolean;

    /**
     * Gets or sets the flag, that controls how textboxes represented by Aspose.Words.Drawing.Shape are saved to HTML, MHTML or EPUB. The default value is false.
     * When set to true, exports textboxes as inline "svg" elements. When false, exports as "image" elements.
     */
    public exportTextBoxAsSvg: boolean;

    /**
     * Gets or sets the flag, that controls how text input form fields are saved.
     */
    public exportTextInputFormFieldAsText: boolean;

    /**
     * Gets or sets a value indicating whether to write page numbers to table of contents when saving.
     */
    public exportTocPageNumbers: boolean;

    /**
     * Gets or sets a value indicating whether to write the DOCTYPE declaration when saving.
     */
    public exportXhtmlTransitional: boolean;

    /**
     * Gets or sets the option that controls which font resources need subsetting when saving.
     */
    public fontResourcesSubsettingSizeThreshold: number;

    /**
     * Gets or sets the physical folder where fonts are saved when exporting a document.
     */
    public fontsFolder: string;

    /**
     * Gets or sets the name of the folder used to construct font URIs.
     */
    public fontsFolderAlias: string;

    /**
     * Gets or sets the version of HTML standard, that should be used when saving the document to HTML or MHTML.
     * Default value is Aspose.Words.Saving.HtmlVersion.Xhtml.
     */
    public htmlVersion: HtmlSaveOptionsData.HtmlVersionEnum;

    /**
     * Gets or sets the output resolution for images when exporting.
     */
    public imageResolution: number;

    /**
     * Gets or sets the physical folder where images are saved when exporting a document.
     */
    public imagesFolder: string;

    /**
     * Gets or sets the name of the folder used to construct image URIs.
     */
    public imagesFolderAlias: string;

    /**
     * Gets or sets the options, that controls in what format metafiles are saved when exporting to HTML, MHTML, or EPUB.
     * The default value is Aspose.Words.Saving.HtmlMetafileFormat.Png, meaning that metafiles are rendered to raster PNG images.
     * Metafiles are not natively displayed by HTML browsers. By default, Aspose.Words converts WMF and EMF images into PNG files when exporting to HTML.Other options are to convert metafiles to SVG images or to export them as is without conversion.
     * Some image transforms, in particular image cropping, will not be applied to metafile images if they are exported to HTML without conversion.
     */
    public metafileFormat: HtmlSaveOptionsData.MetafileFormatEnum;

    /**
     * Gets or sets the option that controls how OfficeMath objects are exported to HTML, MHTML or EPUB. The default value is HtmlOfficeMathOutputMode.Image.
     */
    public officeMathOutputMode: HtmlSaveOptionsData.OfficeMathOutputModeEnum;

    /**
     * Gets or sets a value indicating whether to use pretty formats output.
     */
    public prettyFormat: boolean;

    /**
     * Gets or sets a value indicating whether font family names used in the document are resolved and substituted according to FontSettings when being written into HTML-based formats.
     * The default value is false.
     */
    public resolveFontNames: boolean;

    /**
     * Gets or sets the physical folder where all resources like images, fonts, and external CSS are saved when a document is exported to HTML. The default value is an empty string.
     */
    public resourceFolder: string;

    /**
     * Gets or sets the name of the folder used to construct URIs of all resources written into HTML document. The default value is an empty string.
     */
    public resourceFolderAlias: string;

    /**
     * Gets or sets a value indicating whether images are scaled by Aspose.Words to the bounding shape size when exporting.
     */
    public scaleImageToShapeSize: boolean;

    /**
     * Gets or sets the option that controls how table, row and cell widths are exported.
     */
    public tableWidthOutputMode: string;

    public constructor(init?: Partial< HtmlSaveOptionsData >) {
        super(init);
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


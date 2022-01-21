/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="htmlFixedSaveOptionsData.ts">
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
import { FixedPageSaveOptionsData } from './fixedPageSaveOptionsData';

export const importsMapHtmlFixedSaveOptionsData = {
    FixedPageSaveOptionsData,
};

/**
 * Container class for fixed html save options.
 */
export class HtmlFixedSaveOptionsData extends FixedPageSaveOptionsData {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "cssClassNamesPrefix",
            baseName: "CssClassNamesPrefix",
            type: "string",
        },
        {
            name: "encoding",
            baseName: "Encoding",
            type: "string",
        },
        {
            name: "exportEmbeddedCss",
            baseName: "ExportEmbeddedCss",
            type: "boolean",
        },
        {
            name: "exportEmbeddedFonts",
            baseName: "ExportEmbeddedFonts",
            type: "boolean",
        },
        {
            name: "exportEmbeddedImages",
            baseName: "ExportEmbeddedImages",
            type: "boolean",
        },
        {
            name: "exportFormFields",
            baseName: "ExportFormFields",
            type: "boolean",
        },
        {
            name: "fontFormat",
            baseName: "FontFormat",
            type: "string",
        },
        {
            name: "pageHorizontalAlignment",
            baseName: "PageHorizontalAlignment",
            type: "string",
        },
        {
            name: "pageMargins",
            baseName: "PageMargins",
            type: "number",
        },
        {
            name: "resourcesFolder",
            baseName: "ResourcesFolder",
            type: "string",
        },
        {
            name: "resourcesFolderAlias",
            baseName: "ResourcesFolderAlias",
            type: "string",
        },
        {
            name: "saveFontFaceCssSeparately",
            baseName: "SaveFontFaceCssSeparately",
            type: "boolean",
        },
        {
            name: "showPageBorder",
            baseName: "ShowPageBorder",
            type: "boolean",
        },
        {
            name: "useTargetMachineFonts",
            baseName: "UseTargetMachineFonts",
            type: "boolean",
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(HtmlFixedSaveOptionsData.attributeTypeMap);
    }

    /**
     * Gets or sets the prefix which is added to all class names in style.css file.
     * Default value is "aw".
     */
    private _cssClassNamesPrefix: string;

    /**
     * Gets or sets the prefix which is added to all class names in style.css file.
     * Default value is "aw".
     */
    public get cssClassNamesPrefix(): string {
        return this._cssClassNamesPrefix;
    }

    /**
     * Gets or sets the prefix which is added to all class names in style.css file.
     * Default value is "aw".
     */
    public set cssClassNamesPrefix(value: string) {
        this._cssClassNamesPrefix = value;
    }


    /**
     * Gets or sets the character encoding.
     */
    private _encoding: string;

    /**
     * Gets or sets the character encoding.
     */
    public get encoding(): string {
        return this._encoding;
    }

    /**
     * Gets or sets the character encoding.
     */
    public set encoding(value: string) {
        this._encoding = value;
    }


    /**
     * Gets or sets a value indicating whether the CSS (Cascading Style Sheet) should be embedded into the Html document.
     */
    private _exportEmbeddedCss: boolean;

    /**
     * Gets or sets a value indicating whether the CSS (Cascading Style Sheet) should be embedded into the Html document.
     */
    public get exportEmbeddedCss(): boolean {
        return this._exportEmbeddedCss;
    }

    /**
     * Gets or sets a value indicating whether the CSS (Cascading Style Sheet) should be embedded into the Html document.
     */
    public set exportEmbeddedCss(value: boolean) {
        this._exportEmbeddedCss = value;
    }


    /**
     * Gets or sets a value indicating whether fonts should be embedded into the Html document in Base64 format.
     */
    private _exportEmbeddedFonts: boolean;

    /**
     * Gets or sets a value indicating whether fonts should be embedded into the Html document in Base64 format.
     */
    public get exportEmbeddedFonts(): boolean {
        return this._exportEmbeddedFonts;
    }

    /**
     * Gets or sets a value indicating whether fonts should be embedded into the Html document in Base64 format.
     */
    public set exportEmbeddedFonts(value: boolean) {
        this._exportEmbeddedFonts = value;
    }


    /**
     * Gets or sets a value indicating whether images should be embedded into the Html document in Base64 format.
     */
    private _exportEmbeddedImages: boolean;

    /**
     * Gets or sets a value indicating whether images should be embedded into the Html document in Base64 format.
     */
    public get exportEmbeddedImages(): boolean {
        return this._exportEmbeddedImages;
    }

    /**
     * Gets or sets a value indicating whether images should be embedded into the Html document in Base64 format.
     */
    public set exportEmbeddedImages(value: boolean) {
        this._exportEmbeddedImages = value;
    }


    /**
     * Gets or sets a value indicating whether form fields are exported as interactive items (as 'input' tag) rather than converted to text or graphics.
     */
    private _exportFormFields: boolean;

    /**
     * Gets or sets a value indicating whether form fields are exported as interactive items (as 'input' tag) rather than converted to text or graphics.
     */
    public get exportFormFields(): boolean {
        return this._exportFormFields;
    }

    /**
     * Gets or sets a value indicating whether form fields are exported as interactive items (as 'input' tag) rather than converted to text or graphics.
     */
    public set exportFormFields(value: boolean) {
        this._exportFormFields = value;
    }


    /**
     * Gets or sets the export format of fonts.
     */
    private _fontFormat: string;

    /**
     * Gets or sets the export format of fonts.
     */
    public get fontFormat(): string {
        return this._fontFormat;
    }

    /**
     * Gets or sets the export format of fonts.
     */
    public set fontFormat(value: string) {
        this._fontFormat = value;
    }


    /**
     * Gets or sets the horizontal alignment of pages in the HTML document.
     * The default value is HtmlFixedHorizontalPageAlignment.Center.
     */
    private _pageHorizontalAlignment: string;

    /**
     * Gets or sets the horizontal alignment of pages in the HTML document.
     * The default value is HtmlFixedHorizontalPageAlignment.Center.
     */
    public get pageHorizontalAlignment(): string {
        return this._pageHorizontalAlignment;
    }

    /**
     * Gets or sets the horizontal alignment of pages in the HTML document.
     * The default value is HtmlFixedHorizontalPageAlignment.Center.
     */
    public set pageHorizontalAlignment(value: string) {
        this._pageHorizontalAlignment = value;
    }


    /**
     * Gets or sets the margin around pages in HTML document.
     * The margins value is measured in points and should be equal to or greater than 0.
     * Default value is 10 points.
     */
    private _pageMargins: number;

    /**
     * Gets or sets the margin around pages in HTML document.
     * The margins value is measured in points and should be equal to or greater than 0.
     * Default value is 10 points.
     */
    public get pageMargins(): number {
        return this._pageMargins;
    }

    /**
     * Gets or sets the margin around pages in HTML document.
     * The margins value is measured in points and should be equal to or greater than 0.
     * Default value is 10 points.
     */
    public set pageMargins(value: number) {
        this._pageMargins = value;
    }


    /**
     * Gets or sets the physical folder where resources are saved when exporting the document.
     */
    private _resourcesFolder: string;

    /**
     * Gets or sets the physical folder where resources are saved when exporting the document.
     */
    public get resourcesFolder(): string {
        return this._resourcesFolder;
    }

    /**
     * Gets or sets the physical folder where resources are saved when exporting the document.
     */
    public set resourcesFolder(value: string) {
        this._resourcesFolder = value;
    }


    /**
     * Gets or sets the name of the folder used to construct resource URIs.
     */
    private _resourcesFolderAlias: string;

    /**
     * Gets or sets the name of the folder used to construct resource URIs.
     */
    public get resourcesFolderAlias(): string {
        return this._resourcesFolderAlias;
    }

    /**
     * Gets or sets the name of the folder used to construct resource URIs.
     */
    public set resourcesFolderAlias(value: string) {
        this._resourcesFolderAlias = value;
    }


    /**
     * Gets or sets a value indicating whether "@font-face" CSS rules should be placed into a separate file "fontFaces.css" when a document is being saved with external stylesheet (that is, when Aspose.Words.Saving.HtmlFixedSaveOptions.ExportEmbeddedCss is false). The default value is false, all CSS rules are written into single file "styles.css".
     */
    private _saveFontFaceCssSeparately: boolean;

    /**
     * Gets or sets a value indicating whether "@font-face" CSS rules should be placed into a separate file "fontFaces.css" when a document is being saved with external stylesheet (that is, when Aspose.Words.Saving.HtmlFixedSaveOptions.ExportEmbeddedCss is false). The default value is false, all CSS rules are written into single file "styles.css".
     */
    public get saveFontFaceCssSeparately(): boolean {
        return this._saveFontFaceCssSeparately;
    }

    /**
     * Gets or sets a value indicating whether "@font-face" CSS rules should be placed into a separate file "fontFaces.css" when a document is being saved with external stylesheet (that is, when Aspose.Words.Saving.HtmlFixedSaveOptions.ExportEmbeddedCss is false). The default value is false, all CSS rules are written into single file "styles.css".
     */
    public set saveFontFaceCssSeparately(value: boolean) {
        this._saveFontFaceCssSeparately = value;
    }


    /**
     * Gets or sets a value indicating whether to show border around pages.
     */
    private _showPageBorder: boolean;

    /**
     * Gets or sets a value indicating whether to show border around pages.
     */
    public get showPageBorder(): boolean {
        return this._showPageBorder;
    }

    /**
     * Gets or sets a value indicating whether to show border around pages.
     */
    public set showPageBorder(value: boolean) {
        this._showPageBorder = value;
    }


    /**
     * Gets or sets a value indicating whether fonts from target machine must be used to display the document. If this flag is set to true, Aspose.Words.Saving.HtmlFixedSaveOptions.FontFormat and Aspose.Words.Saving.HtmlFixedSaveOptions.ExportEmbeddedFonts properties do not have effect, also Aspose.Words.Saving.HtmlFixedSaveOptions.ResourceSavingCallback is not fired for fonts. The default value is false.
     */
    private _useTargetMachineFonts: boolean;

    /**
     * Gets or sets a value indicating whether fonts from target machine must be used to display the document. If this flag is set to true, Aspose.Words.Saving.HtmlFixedSaveOptions.FontFormat and Aspose.Words.Saving.HtmlFixedSaveOptions.ExportEmbeddedFonts properties do not have effect, also Aspose.Words.Saving.HtmlFixedSaveOptions.ResourceSavingCallback is not fired for fonts. The default value is false.
     */
    public get useTargetMachineFonts(): boolean {
        return this._useTargetMachineFonts;
    }

    /**
     * Gets or sets a value indicating whether fonts from target machine must be used to display the document. If this flag is set to true, Aspose.Words.Saving.HtmlFixedSaveOptions.FontFormat and Aspose.Words.Saving.HtmlFixedSaveOptions.ExportEmbeddedFonts properties do not have effect, also Aspose.Words.Saving.HtmlFixedSaveOptions.ResourceSavingCallback is not fired for fonts. The default value is false.
     */
    public set useTargetMachineFonts(value: boolean) {
        this._useTargetMachineFonts = value;
    }


    public constructor(init?: Partial< HtmlFixedSaveOptionsData >) {
        super(init);
        saveFormat = 'htmlfixed';

        Object.assign(this, init);
    }
}


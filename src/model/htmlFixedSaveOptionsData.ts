/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="htmlFixedSaveOptionsData.ts">
 *   Copyright (c) 2023 Aspose.Words for Cloud
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
            type: "HtmlFixedSaveOptionsData.FontFormatEnum",
        },
        {
            name: "pageHorizontalAlignment",
            baseName: "PageHorizontalAlignment",
            type: "HtmlFixedSaveOptionsData.PageHorizontalAlignmentEnum",
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
    public cssClassNamesPrefix: string;

    /**
     * Gets or sets the character encoding.
     */
    public encoding: string;

    /**
     * Gets or sets a value indicating whether the CSS (Cascading Style Sheet) should be embedded into the Html document.
     */
    public exportEmbeddedCss: boolean;

    /**
     * Gets or sets a value indicating whether fonts should be embedded into the Html document in Base64 format.
     */
    public exportEmbeddedFonts: boolean;

    /**
     * Gets or sets a value indicating whether images should be embedded into the Html document in Base64 format.
     */
    public exportEmbeddedImages: boolean;

    /**
     * Gets or sets a value indicating whether form fields are exported as interactive items (as 'input' tag) rather than converted to text or graphics.
     */
    public exportFormFields: boolean;

    /**
     * Gets or sets the export format of fonts.
     */
    public fontFormat: HtmlFixedSaveOptionsData.FontFormatEnum;

    /**
     * Gets or sets the horizontal alignment of pages in the HTML document.
     * The default value is HtmlFixedHorizontalPageAlignment.Center.
     */
    public pageHorizontalAlignment: HtmlFixedSaveOptionsData.PageHorizontalAlignmentEnum;

    /**
     * Gets or sets the margin around pages in HTML document.
     * The margins value is measured in points and should be equal to or greater than 0.
     * Default value is 10 points.
     * Depends on the value of PageHorizontalAlignment property:
     * Defines top, bottom and left page margins if the value is Left.
     * Defines top, bottom and right page margins if the value is Right.
     * Defines top and bottom page margins if the value is Center.
     */
    public pageMargins: number;

    /**
     * Gets or sets the physical folder where resources are saved when exporting the document.
     */
    public resourcesFolder: string;

    /**
     * Gets or sets the name of the folder used to construct resource URIs.
     */
    public resourcesFolderAlias: string;

    /**
     * Gets or sets a value indicating whether "@font-face" CSS rules should be placed into a separate file "fontFaces.css" when a document is being saved with external stylesheet (that is, when Aspose.Words.Saving.HtmlFixedSaveOptions.ExportEmbeddedCss is false). The default value is false, all CSS rules are written into single file "styles.css".
     * Setting this property to true restores the old behavior (separate files) for compatibility with legacy code.
     */
    public saveFontFaceCssSeparately: boolean;

    /**
     * Gets or sets a value indicating whether to show border around pages.
     */
    public showPageBorder: boolean;

    /**
     * Gets or sets a value indicating whether fonts from target machine must be used to display the document. If this flag is set to true, Aspose.Words.Saving.HtmlFixedSaveOptions.FontFormat and Aspose.Words.Saving.HtmlFixedSaveOptions.ExportEmbeddedFonts properties do not have effect, also Aspose.Words.Saving.HtmlFixedSaveOptions.ResourceSavingCallback is not fired for fonts. The default value is false.
     */
    public useTargetMachineFonts: boolean;

    public constructor(init?: Partial< HtmlFixedSaveOptionsData >) {
        super(init);
        this.saveFormat = 'htmlfixed';

        Object.assign(this, init);
    }

    public collectFilesContent(_resultFilesContent: Array<any>) {
    }
}

/**
 * Enums for HtmlFixedSaveOptionsData
 */
// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace HtmlFixedSaveOptionsData {
    export enum FontFormatEnum {
        Woff = 'Woff' as any,
        Ttf = 'Ttf' as any
    }

    export enum PageHorizontalAlignmentEnum {
        Left = 'Left' as any,
        Center = 'Center' as any,
        Right = 'Right' as any
    }
}
// tslint:enable:quotemark


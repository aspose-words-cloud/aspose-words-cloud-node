/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="availableFontsResponse.ts">
 *   Copyright (c) 2025 Aspose.Words for Cloud
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
import { FontInfo } from './fontInfo';
import { WordsResponse } from './wordsResponse';

export const importsMapAvailableFontsResponse = {
    FontInfo,
    WordsResponse,
};

/**
 * The REST response with data on system, additional and custom fonts, available for document processing.
 */
export class AvailableFontsResponse extends WordsResponse {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "additionalFonts",
            baseName: "AdditionalFonts",
            type: "Array<FontInfo>",
        },
        {
            name: "customFonts",
            baseName: "CustomFonts",
            type: "Array<FontInfo>",
        },
        {
            name: "systemFonts",
            baseName: "SystemFonts",
            type: "Array<FontInfo>",
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(AvailableFontsResponse.attributeTypeMap);
    }

    /**
     * Gets or sets the list of additional fonts, provided by Aspose team.
     */
    public additionalFonts: Array<FontInfo>;

    /**
     * Gets or sets the list of custom user fonts from user cloud storage. To use them, you should specify "fontsLocation" parameter in any request.
     */
    public customFonts: Array<FontInfo>;

    /**
     * Gets or sets the list of system fonts, available on the server.
     */
    public systemFonts: Array<FontInfo>;

    public constructor(init?: Partial< AvailableFontsResponse >) {
        super(init);
        Object.assign(this, init);
    }

    public collectFilesContent(_resultFilesContent: Array<any>) {
    }

    public validate() {
        super.validate();

        if (this.additionalFonts !== null && this.additionalFonts !== undefined)
        {
            for (let elementAdditionalFonts of this.additionalFonts)
            {
                elementAdditionalFonts?.validate();
            }
        }



        if (this.customFonts !== null && this.customFonts !== undefined)
        {
            for (let elementCustomFonts of this.customFonts)
            {
                elementCustomFonts?.validate();
            }
        }



        if (this.systemFonts !== null && this.systemFonts !== undefined)
        {
            for (let elementSystemFonts of this.systemFonts)
            {
                elementSystemFonts?.validate();
            }
        }

    }
}


/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="stylesResponse.ts">
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
import { Style } from './style';
import { WordsResponse } from './wordsResponse';

export const importsMapStylesResponse = {
    Style,
    WordsResponse,
};

/**
 * The REST response with an array of styles.
 * This response is returned by the Service when handling "GET https://api.aspose.cloud/v4.0/words/Test.doc/styles" REST API requests.
 */
export class StylesResponse extends WordsResponse {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "styles",
            baseName: "Styles",
            type: "Array<Style>",
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(StylesResponse.attributeTypeMap);
    }

    /**
     * Gets or sets the array of styles.
     */
    public styles: Array<Style>;

    public constructor(init?: Partial< StylesResponse >) {
        super(init);
        Object.assign(this, init);
    }

    public collectFilesContent(_resultFilesContent: Array<any>) {
    }

    public validate() {
        super.validate();

        if (this.styles !== null && this.styles !== undefined)
        {
            for (let elementStyles of this.styles)
            {
                elementStyles?.validate();
            }
        }

    }
}


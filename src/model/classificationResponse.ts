/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="classificationResponse.ts">
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
import { ClassificationResult } from './classificationResult';
import { WordsResponse } from './wordsResponse';

export const importsMapClassificationResponse = {
    ClassificationResult,
    WordsResponse,
};

/**
 * This response should be returned by the service when handling:
 * PUT https://api.aspose.cloud/v4.0/words/classify.
 */
export class ClassificationResponse extends WordsResponse {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "bestClassName",
            baseName: "BestClassName",
            type: "string",
        },
        {
            name: "bestClassProbability",
            baseName: "BestClassProbability",
            type: "number",
        },
        {
            name: "bestResults",
            baseName: "BestResults",
            type: "Array<ClassificationResult>",
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ClassificationResponse.attributeTypeMap);
    }

    /**
     * Gets or sets best class name.
     */
    public bestClassName: string;

    /**
     * Gets or sets best class probability.
     */
    public bestClassProbability: number;

    /**
     * Gets or sets array of best classes results.
     */
    public bestResults: Array<ClassificationResult>;

    public constructor(init?: Partial< ClassificationResponse >) {
        super(init);
        Object.assign(this, init);
    }
}


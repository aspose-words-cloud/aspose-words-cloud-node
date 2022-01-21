/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="classificationResponse.ts">
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
import { ClassificationResult } from './classificationResult';
import { WordsResponse } from './wordsResponse';

export const importsMapClassificationResponse = {
    ClassificationResult,
    WordsResponse,
};

/**
 * The REST response with data on multi-class text classification.
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
     * Gets or sets the best class name.
     */
    private _bestClassName: string;

    /**
     * Gets or sets the best class name.
     */
    public get bestClassName(): string {
        return this._bestClassName;
    }

    /**
     * Gets or sets the best class name.
     */
    public set bestClassName(value: string) {
        this._bestClassName = value;
    }


    /**
     * Gets or sets the best class probability.
     */
    private _bestClassProbability: number;

    /**
     * Gets or sets the best class probability.
     */
    public get bestClassProbability(): number {
        return this._bestClassProbability;
    }

    /**
     * Gets or sets the best class probability.
     */
    public set bestClassProbability(value: number) {
        this._bestClassProbability = value;
    }


    /**
     * Gets or sets the array of best classes results.
     */
    private _bestResults: Array<ClassificationResult>;

    /**
     * Gets or sets the array of best classes results.
     */
    public get bestResults(): Array<ClassificationResult> {
        return this._bestResults;
    }

    /**
     * Gets or sets the array of best classes results.
     */
    public set bestResults(value: Array<ClassificationResult>) {
        this._bestResults = value;
    }


    public constructor(init?: Partial< ClassificationResponse >) {
        super(init);
        Object.assign(this, init);
    }
}


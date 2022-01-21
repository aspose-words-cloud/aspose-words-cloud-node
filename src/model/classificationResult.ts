/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="classificationResult.ts">
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

export const importsMapClassificationResult = {
};

/**
 * Represents a single classification result.
 */
export class ClassificationResult {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "className",
            baseName: "ClassName",
            type: "string",
        },
        {
            name: "classProbability",
            baseName: "ClassProbability",
            type: "number",
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ClassificationResult.attributeTypeMap;
    }

    /**
     * Gets or sets the name of the class.
     */
    private _className: string;

    /**
     * Gets or sets the name of the class.
     */
    public get className(): string {
        return this._className;
    }

    /**
     * Gets or sets the name of the class.
     */
    public set className(value: string) {
        this._className = value;
    }


    /**
     * Gets or sets the probability of class.
     */
    private _classProbability: number;

    /**
     * Gets or sets the probability of class.
     */
    public get classProbability(): number {
        return this._classProbability;
    }

    /**
     * Gets or sets the probability of class.
     */
    public set classProbability(value: number) {
        this._classProbability = value;
    }


    public constructor(init?: Partial< ClassificationResult >) {
        Object.assign(this, init);
    }
}


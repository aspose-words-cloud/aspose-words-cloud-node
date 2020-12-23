/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="compareOptions.ts">
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

export const importsMapCompareOptions = {
};

/**
 * DTO container with compare documents options.
 */
export class CompareOptions {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "ignoreCaseChanges",
            baseName: "IgnoreCaseChanges",
            type: "boolean",
        },
        {
            name: "ignoreComments",
            baseName: "IgnoreComments",
            type: "boolean",
        },
        {
            name: "ignoreFields",
            baseName: "IgnoreFields",
            type: "boolean",
        },
        {
            name: "ignoreFootnotes",
            baseName: "IgnoreFootnotes",
            type: "boolean",
        },
        {
            name: "ignoreFormatting",
            baseName: "IgnoreFormatting",
            type: "boolean",
        },
        {
            name: "ignoreHeadersAndFooters",
            baseName: "IgnoreHeadersAndFooters",
            type: "boolean",
        },
        {
            name: "ignoreTables",
            baseName: "IgnoreTables",
            type: "boolean",
        },
        {
            name: "ignoreTextboxes",
            baseName: "IgnoreTextboxes",
            type: "boolean",
        },
        {
            name: "target",
            baseName: "Target",
            type: "CompareOptions.TargetEnum",
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return CompareOptions.attributeTypeMap;
    }

    /**
     * Gets or sets a value indicating whether documents comparison is case insensitive. By default comparison is case sensitive.
     */
    public ignoreCaseChanges: boolean;

    /**
     * Gets or sets a value indicating whether comments content is ignored. By default comments are not ignored.
     */
    public ignoreComments: boolean;

    /**
     * Gets or sets a value indicating whether fields content is ignored. By default fields are not ignored.
     */
    public ignoreFields: boolean;

    /**
     * Gets or sets a value indicating whether footnotes/endnotes content is ignored. By default footnotes/endnotes are not ignored.
     */
    public ignoreFootnotes: boolean;

    /**
     * Gets or sets a value indicating whether formatting is ignored. By default document formatting is not ignored.
     */
    public ignoreFormatting: boolean;

    /**
     * Gets or sets a value indicating whether headers and footers content is ignored. By default headers and footers are not ignored.
     */
    public ignoreHeadersAndFooters: boolean;

    /**
     * Gets or sets a value indicating whether tables content is ignored. By default tables are not ignored.
     */
    public ignoreTables: boolean;

    /**
     * Gets or sets a value indicating whether textboxes content is ignored. By default textboxes are not ignored.
     */
    public ignoreTextboxes: boolean;

    /**
     * Gets or sets the option that controls which document shall be used as a target during comparison.
     */
    public target: CompareOptions.TargetEnum;

    public constructor(init?: Partial< CompareOptions >) {
        Object.assign(this, init);
    }
}

/**
 * Enums for CompareOptions
 */
// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace CompareOptions {
    export enum TargetEnum {
        Current = 'Current' as any,
        New = 'New' as any
    }
}
// tslint:enable:quotemark


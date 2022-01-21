/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="compareOptions.ts">
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
            name: "acceptAllRevisionsBeforeComparison",
            baseName: "AcceptAllRevisionsBeforeComparison",
            type: "boolean",
        },
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
     * Gets or sets whether accept revisions before comparison or not.
     */
    private _acceptAllRevisionsBeforeComparison: boolean;

    /**
     * Gets or sets whether accept revisions before comparison or not.
     */
    public get acceptAllRevisionsBeforeComparison(): boolean {
        return this._acceptAllRevisionsBeforeComparison;
    }

    /**
     * Gets or sets whether accept revisions before comparison or not.
     */
    public set acceptAllRevisionsBeforeComparison(value: boolean) {
        this._acceptAllRevisionsBeforeComparison = value;
    }


    /**
     * Gets or sets a value indicating whether documents comparison is case insensitive. By default comparison is case sensitive.
     */
    private _ignoreCaseChanges: boolean;

    /**
     * Gets or sets a value indicating whether documents comparison is case insensitive. By default comparison is case sensitive.
     */
    public get ignoreCaseChanges(): boolean {
        return this._ignoreCaseChanges;
    }

    /**
     * Gets or sets a value indicating whether documents comparison is case insensitive. By default comparison is case sensitive.
     */
    public set ignoreCaseChanges(value: boolean) {
        this._ignoreCaseChanges = value;
    }


    /**
     * Gets or sets a value indicating whether comments content is ignored. By default comments are not ignored.
     */
    private _ignoreComments: boolean;

    /**
     * Gets or sets a value indicating whether comments content is ignored. By default comments are not ignored.
     */
    public get ignoreComments(): boolean {
        return this._ignoreComments;
    }

    /**
     * Gets or sets a value indicating whether comments content is ignored. By default comments are not ignored.
     */
    public set ignoreComments(value: boolean) {
        this._ignoreComments = value;
    }


    /**
     * Gets or sets a value indicating whether fields content is ignored. By default fields are not ignored.
     */
    private _ignoreFields: boolean;

    /**
     * Gets or sets a value indicating whether fields content is ignored. By default fields are not ignored.
     */
    public get ignoreFields(): boolean {
        return this._ignoreFields;
    }

    /**
     * Gets or sets a value indicating whether fields content is ignored. By default fields are not ignored.
     */
    public set ignoreFields(value: boolean) {
        this._ignoreFields = value;
    }


    /**
     * Gets or sets a value indicating whether footnotes/endnotes content is ignored. By default footnotes/endnotes are not ignored.
     */
    private _ignoreFootnotes: boolean;

    /**
     * Gets or sets a value indicating whether footnotes/endnotes content is ignored. By default footnotes/endnotes are not ignored.
     */
    public get ignoreFootnotes(): boolean {
        return this._ignoreFootnotes;
    }

    /**
     * Gets or sets a value indicating whether footnotes/endnotes content is ignored. By default footnotes/endnotes are not ignored.
     */
    public set ignoreFootnotes(value: boolean) {
        this._ignoreFootnotes = value;
    }


    /**
     * Gets or sets a value indicating whether formatting is ignored. By default document formatting is not ignored.
     */
    private _ignoreFormatting: boolean;

    /**
     * Gets or sets a value indicating whether formatting is ignored. By default document formatting is not ignored.
     */
    public get ignoreFormatting(): boolean {
        return this._ignoreFormatting;
    }

    /**
     * Gets or sets a value indicating whether formatting is ignored. By default document formatting is not ignored.
     */
    public set ignoreFormatting(value: boolean) {
        this._ignoreFormatting = value;
    }


    /**
     * Gets or sets a value indicating whether headers and footers content is ignored. By default headers and footers are not ignored.
     */
    private _ignoreHeadersAndFooters: boolean;

    /**
     * Gets or sets a value indicating whether headers and footers content is ignored. By default headers and footers are not ignored.
     */
    public get ignoreHeadersAndFooters(): boolean {
        return this._ignoreHeadersAndFooters;
    }

    /**
     * Gets or sets a value indicating whether headers and footers content is ignored. By default headers and footers are not ignored.
     */
    public set ignoreHeadersAndFooters(value: boolean) {
        this._ignoreHeadersAndFooters = value;
    }


    /**
     * Gets or sets a value indicating whether tables content is ignored. By default tables are not ignored.
     */
    private _ignoreTables: boolean;

    /**
     * Gets or sets a value indicating whether tables content is ignored. By default tables are not ignored.
     */
    public get ignoreTables(): boolean {
        return this._ignoreTables;
    }

    /**
     * Gets or sets a value indicating whether tables content is ignored. By default tables are not ignored.
     */
    public set ignoreTables(value: boolean) {
        this._ignoreTables = value;
    }


    /**
     * Gets or sets a value indicating whether textboxes content is ignored. By default textboxes are not ignored.
     */
    private _ignoreTextboxes: boolean;

    /**
     * Gets or sets a value indicating whether textboxes content is ignored. By default textboxes are not ignored.
     */
    public get ignoreTextboxes(): boolean {
        return this._ignoreTextboxes;
    }

    /**
     * Gets or sets a value indicating whether textboxes content is ignored. By default textboxes are not ignored.
     */
    public set ignoreTextboxes(value: boolean) {
        this._ignoreTextboxes = value;
    }


    /**
     * Gets or sets the option that controls which document shall be used as a target during comparison.
     */
    private _target: CompareOptions.TargetEnum;

    /**
     * Gets or sets the option that controls which document shall be used as a target during comparison.
     */
    public get target(): CompareOptions.TargetEnum {
        return this._target;
    }

    /**
     * Gets or sets the option that controls which document shall be used as a target during comparison.
     */
    public set target(value: CompareOptions.TargetEnum) {
        this._target = value;
    }


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


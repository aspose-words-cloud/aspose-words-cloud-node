/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="compareData.ts">
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
import { CompareOptions } from './compareOptions';

export const importsMapCompareData = {
    CompareOptions,
};

/**
 * Container class for compare documents.
 */
export class CompareData {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "author",
            baseName: "Author",
            type: "string",
        },
        {
            name: "compareOptions",
            baseName: "CompareOptions",
            type: "CompareOptions",
        },
        {
            name: "comparingWithDocument",
            baseName: "ComparingWithDocument",
            type: "string",
        },
        {
            name: "dateTime",
            baseName: "DateTime",
            type: "Date",
        },
        {
            name: "resultDocumentFormat",
            baseName: "ResultDocumentFormat",
            type: "string",
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return CompareData.attributeTypeMap;
    }

    /**
     * Gets or sets the initials of the author to use for revisions.
     */
    protected _author: string;

    /**
     * Gets or sets the initials of the author to use for revisions.
     */
    public get author(): string {
        return this._author;
    }

    /**
     * Gets or sets the initials of the author to use for revisions.
     */
    public set author(value: string) {
        this._author = value;
    }


    /**
     * Gets or sets the compare options.
     */
    protected _compareOptions: CompareOptions;

    /**
     * Gets or sets the compare options.
     */
    public get compareOptions(): CompareOptions {
        return this._compareOptions;
    }

    /**
     * Gets or sets the compare options.
     */
    public set compareOptions(value: CompareOptions) {
        this._compareOptions = value;
    }


    /**
     * Gets or sets the path to document to compare at the server.
     */
    protected _comparingWithDocument: string;

    /**
     * Gets or sets the path to document to compare at the server.
     */
    public get comparingWithDocument(): string {
        return this._comparingWithDocument;
    }

    /**
     * Gets or sets the path to document to compare at the server.
     */
    public set comparingWithDocument(value: string) {
        this._comparingWithDocument = value;
    }


    /**
     * Gets or sets the date and time to use for revisions.
     */
    protected _dateTime: Date;

    /**
     * Gets or sets the date and time to use for revisions.
     */
    public get dateTime(): Date {
        return this._dateTime;
    }

    /**
     * Gets or sets the date and time to use for revisions.
     */
    public set dateTime(value: Date) {
        this._dateTime = value;
    }


    /**
     * Gets or sets the result document format.
     */
    protected _resultDocumentFormat: string;

    /**
     * Gets or sets the result document format.
     */
    public get resultDocumentFormat(): string {
        return this._resultDocumentFormat;
    }

    /**
     * Gets or sets the result document format.
     */
    public set resultDocumentFormat(value: string) {
        this._resultDocumentFormat = value;
    }


    public constructor(init?: Partial< CompareData >) {
        Object.assign(this, init);
    }
}


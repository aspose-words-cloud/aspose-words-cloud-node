/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="jsonDataLoadOptions.ts">
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

export const importsMapJsonDataLoadOptions = {
};

/**
 * Represents options for parsing JSON data.
 * An instance of this class can be passed into constructors of Aspose.Words.Reporting.JsonDataSource.
 */
export class JsonDataLoadOptions implements ModelInterface {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "alwaysGenerateRootObject",
            baseName: "AlwaysGenerateRootObject",
            type: "boolean",
        },
        {
            name: "exactDateTimeParseFormats",
            baseName: "ExactDateTimeParseFormats",
            type: "Array<string>",
        },
        {
            name: "simpleValueParseMode",
            baseName: "SimpleValueParseMode",
            type: "JsonDataLoadOptions.SimpleValueParseModeEnum",
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return JsonDataLoadOptions.attributeTypeMap;
    }

    /**
     * Gets or sets a value indicating whether a generated data source will always contain
     * an object for a JSON root element. If a JSON root element contains a single complex
     * property, such an object is not created by default.
     * The default value is false.
     */
    public alwaysGenerateRootObject: boolean;

    /**
     * Gets or sets exact formats for parsing JSON date-time values while loading JSON.
     * The default is null.
     * Strings encoded using Microsoft® JSON date-time format (for example, "/Date(1224043200000)/")
     * are always recognized as date-time values regardless of a value of this property.
     * The property defines additional formats to be used while parsing date-time values
     * from strings in the following way:
     * • When Aspose.Words.Reporting.JsonDataLoadOptions.ExactDateTimeParseFormats is
     * null, the ISO-8601 format and all date-time formats supported for the current,
     * English USA, and English New Zealand cultures are used additionally in the mentioned
     * order.
     * • When Aspose.Words.Reporting.JsonDataLoadOptions.ExactDateTimeParseFormats contains
     * strings, they are used as additional date-time formats utilizing the current
     * culture.
     * • When Aspose.Words.Reporting.JsonDataLoadOptions.ExactDateTimeParseFormats is
     * empty, no additional date-time formats are used.
     */
    public exactDateTimeParseFormats: Array<string>;

    /**
     * Gets or sets a mode for parsing JSON simple values (null, boolean, number, integer,
     * and string) while loading JSON. Such a mode does not affect parsing of date-time
     * values. The default is Aspose.Words.Reporting.JsonSimpleValueParseMode.Loose.
     */
    public simpleValueParseMode: JsonDataLoadOptions.SimpleValueParseModeEnum;

    public constructor(init?: Partial< JsonDataLoadOptions >) {
        Object.assign(this, init);
    }

    public collectFilesContent(_resultFilesContent: Array<any>) {
    }

    public validate() {
        if (this.alwaysGenerateRootObject === null || this.alwaysGenerateRootObject === undefined)
        {
            throw new Error('Property AlwaysGenerateRootObject in JsonDataLoadOptions is required.');
        }
        if (this.simpleValueParseMode === null || this.simpleValueParseMode === undefined)
        {
            throw new Error('Property SimpleValueParseMode in JsonDataLoadOptions is required.');
        }
    }
}

/**
 * Enums for JsonDataLoadOptions
 */
// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace JsonDataLoadOptions {
    export enum SimpleValueParseModeEnum {
        Loose = 'Loose' as any,
        Strict = 'Strict' as any
    }
}
// tslint:enable:quotemark


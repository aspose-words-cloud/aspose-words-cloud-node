/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="timeZoneInfoData.ts">
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

export const importsMapTimeZoneInfoData = {
};

/**
 * Class to specify TimeZoneInfo parameters.
 */
export class TimeZoneInfoData implements ModelInterface {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "baseUtcOffset",
            baseName: "BaseUtcOffset",
            type: "string",
        },
        {
            name: "displayName",
            baseName: "DisplayName",
            type: "string",
        },
        {
            name: "id",
            baseName: "Id",
            type: "string",
        },
        {
            name: "standardDisplayName",
            baseName: "StandardDisplayName",
            type: "string",
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return TimeZoneInfoData.attributeTypeMap;
    }

    /**
     * Gets or sets base utc offset in hh:mm:ss format.
     */
    public baseUtcOffset: string;

    /**
     * Gets or sets display name.
     */
    public displayName: string;

    /**
     * Gets or sets an Id string for CustomTimeZoneInfo.
     */
    public id: string;

    /**
     * Gets or sets standard display name.
     */
    public standardDisplayName: string;

    public constructor(init?: Partial< TimeZoneInfoData >) {
        Object.assign(this, init);
    }

    public collectFilesContent(_resultFilesContent: Array<any>) {
    }

    public validate() {
    }
}


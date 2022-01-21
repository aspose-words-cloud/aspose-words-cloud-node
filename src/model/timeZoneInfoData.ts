/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="timeZoneInfoData.ts">
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

export const importsMapTimeZoneInfoData = {
};

/**
 * Class to specify TimeZoneInfo parameters.
 */
export class TimeZoneInfoData {
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
    protected _baseUtcOffset: string;

    /**
     * Gets or sets base utc offset in hh:mm:ss format.
     */
    public get baseUtcOffset(): string {
        return this._baseUtcOffset;
    }

    /**
     * Gets or sets base utc offset in hh:mm:ss format.
     */
    public set baseUtcOffset(value: string) {
        this._baseUtcOffset = value;
    }


    /**
     * Gets or sets display name.
     */
    protected _displayName: string;

    /**
     * Gets or sets display name.
     */
    public get displayName(): string {
        return this._displayName;
    }

    /**
     * Gets or sets display name.
     */
    public set displayName(value: string) {
        this._displayName = value;
    }


    /**
     * Gets or sets an Id string for CustomTimeZoneInfo.
     */
    protected _id: string;

    /**
     * Gets or sets an Id string for CustomTimeZoneInfo.
     */
    public get id(): string {
        return this._id;
    }

    /**
     * Gets or sets an Id string for CustomTimeZoneInfo.
     */
    public set id(value: string) {
        this._id = value;
    }


    /**
     * Gets or sets standard display name.
     */
    protected _standardDisplayName: string;

    /**
     * Gets or sets standard display name.
     */
    public get standardDisplayName(): string {
        return this._standardDisplayName;
    }

    /**
     * Gets or sets standard display name.
     */
    public set standardDisplayName(value: string) {
        this._standardDisplayName = value;
    }


    public constructor(init?: Partial< TimeZoneInfoData >) {
        Object.assign(this, init);
    }
}


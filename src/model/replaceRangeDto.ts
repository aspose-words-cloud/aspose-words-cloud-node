/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="replaceRangeDto.ts">
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

export const importsMapReplaceRangeDto = {
};

/**
 * DTO container with a range element.
 */
export class ReplaceRangeDto implements ModelInterface {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "text",
            baseName: "Text",
            type: "string",
        },
        {
            name: "textType",
            baseName: "TextType",
            type: "ReplaceRangeDto.TextTypeEnum",
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ReplaceRangeDto.attributeTypeMap;
    }

    /**
     * Gets or sets the range's text.
     */
    public text: string;

    /**
     * Gets or sets the range's text type.
     */
    public textType: ReplaceRangeDto.TextTypeEnum;

    public constructor(init?: Partial< ReplaceRangeDto >) {
        Object.assign(this, init);
    }

    public collectFilesContent(_resultFilesContent: Array<any>) {
    }
}

/**
 * Enums for ReplaceRangeDto
 */
// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace ReplaceRangeDto {
    export enum TextTypeEnum {
        Text = 'Text' as any,
        Html = 'Html' as any
    }
}
// tslint:enable:quotemark


/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="imageEntryList.ts">
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
import { BaseEntryList } from './baseEntryList';
import { ImageEntry } from './imageEntry';

export const importsMapImageEntryList = {
    BaseEntryList,
    ImageEntry,
};

/**
 * Represents a list of images which will be appended to the original resource document or image.
 */
export class ImageEntryList extends BaseEntryList {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "appendEachImageOnNewPage",
            baseName: "AppendEachImageOnNewPage",
            type: "boolean",
        },
        {
            name: "imageEntries",
            baseName: "ImageEntries",
            type: "Array<ImageEntry>",
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ImageEntryList.attributeTypeMap);
    }

    /**
     * Gets or sets a value indicating whether each image should be added to a new page in the document.
     */
    public appendEachImageOnNewPage: boolean;

    /**
     * Gets or sets the list of images.
     */
    public imageEntries: Array<ImageEntry>;

    public constructor(init?: Partial< ImageEntryList >) {
        super(init);
        Object.assign(this, init);
    }
}

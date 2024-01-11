/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="watermarkDataImage.ts">
 *   Copyright (c) 2024 Aspose.Words for Cloud
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
import { FileReference } from './fileReference';
import { WatermarkDataBase } from './watermarkDataBase';

export const importsMapWatermarkDataImage = {
    FileReference,
    WatermarkDataBase,
};

/**
 * Class for insert watermark image request building.
 */
export class WatermarkDataImage extends WatermarkDataBase {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "image",
            baseName: "Image",
            type: "FileReference",
        },
        {
            name: "isWashout",
            baseName: "IsWashout",
            type: "boolean",
        },
        {
            name: "scale",
            baseName: "Scale",
            type: "number",
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WatermarkDataImage.attributeTypeMap);
    }

    /**
     * Gets or sets the watermark image.
     */
    public image: FileReference;

    /**
     * Gets or sets a boolean value which is responsible for washout effect of the watermark. The default value is true.
     */
    public isWashout: boolean;

    /**
     * Gets or sets the scale factor expressed as a fraction of the image. The default value is 0 - auto.
     * Valid values range from 0 to 65.5 inclusive. Auto scale means that the watermark will be scaled to its max width and max height relative to the page margins.
     */
    public scale: number;

    public constructor(init?: Partial< WatermarkDataImage >) {
        super(init);
        Object.assign(this, init);
    }

    public collectFilesContent(_resultFilesContent: Array<any>) {
        super.collectFilesContent(_resultFilesContent);
        if (this.image)
        {
            this.image.collectFilesContent(_resultFilesContent);
        }



    }

    public validate() {
        super.validate();
        if (this.image === null || this.image === undefined)
        {
            throw new Error('Property Image in WatermarkDataImage is required.');
        }

        this.image?.validate();



    }
}


/*
* MIT License

* Copyright (c) 2019 Aspose Pty Ltd

* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:

* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.

* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/
import { AttributeInfo } from '../internal/attributeInfo';

export const importsMapDownsampleOptionsData = {
};

/**
 * Container class for Downsample options.
 */
export class DownsampleOptionsData {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "downsampleImages",
            baseName: "DownsampleImages",
            type: "boolean",
        },        
        {
            name: "resolution",
            baseName: "Resolution",
            type: "number",
        },        
        {
            name: "resolutionThreshold",
            baseName: "ResolutionThreshold",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return DownsampleOptionsData.attributeTypeMap;
    }

    /**
     * Gets or sets specifies whether images should be downsampled.
     */
    public downsampleImages: boolean;
    
    /**
     * Gets or sets specifies the resolution in pixels per inch which the images should be downsampled to.
     */
    public resolution: number;
    
    /**
     * Gets or sets specifies the threshold resolution in pixels per inch. If resolution of an image in the document is less than threshold value, the downsampling algorithm will not be applied. A value of 0 means the threshold check is not used and all images that can be reduced in size are downsampled.
     */
    public resolutionThreshold: number;
    
    public constructor(init?: Partial<DownsampleOptionsData>) {
        
        Object.assign(this, init);
    }        
}

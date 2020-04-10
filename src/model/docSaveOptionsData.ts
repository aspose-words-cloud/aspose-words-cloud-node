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
import { SaveOptionsData } from './saveOptionsData';

export const importsMapDocSaveOptionsData = {
    SaveOptionsData,
};

/**
 * container class for doc/dot save options.
 */
export class DocSaveOptionsData extends SaveOptionsData {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "alwaysCompressMetafiles",
            baseName: "AlwaysCompressMetafiles",
            type: "boolean",
        },        
        {
            name: "password",
            baseName: "Password",
            type: "string",
        },        
        {
            name: "savePictureBullet",
            baseName: "SavePictureBullet",
            type: "boolean",
        },        
        {
            name: "saveRoutingSlip",
            baseName: "SaveRoutingSlip",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(DocSaveOptionsData.attributeTypeMap);
    }

    /**
     * Gets or sets When false, small metafiles are not compressed for performance reason. Default value is true, all metafiles are compressed regardless of its size.
     */
    public alwaysCompressMetafiles: boolean;
    
    /**
     * Gets or sets password.
     */
    public password: string;
    
    /**
     * Gets or sets When false, PictureBullet data is not saved to output document. Default value is true.
     */
    public savePictureBullet: boolean;
    
    /**
     * Gets or sets determine whether or not save RoutingSlip data saved to output document.
     */
    public saveRoutingSlip: boolean;
    
    public constructor(init?: Partial<DocSaveOptionsData>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Enums for DocSaveOptionsData
 */
// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace DocSaveOptionsData {
}
// tslint:enable:quotemark

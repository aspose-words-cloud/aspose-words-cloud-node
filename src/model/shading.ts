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
import { XmlColor } from './xmlColor';

export const importsMapShading = {
    XmlColor,
};

/**
 * Paragraph format shading element.             
 */
export class Shading {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "backgroundPatternColor",
            baseName: "BackgroundPatternColor",
            type: "XmlColor",
        },        
        {
            name: "foregroundPatternColor",
            baseName: "ForegroundPatternColor",
            type: "XmlColor",
        },        
        {
            name: "texture",
            baseName: "Texture",
            type: "Shading.TextureEnum",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Shading.attributeTypeMap;
    }

    /**
     * Gets or sets backgroundPatternColor.
     */
    public backgroundPatternColor: XmlColor;
    
    /**
     * Gets or sets foregroundPatternColor.
     */
    public foregroundPatternColor: XmlColor;
    
    /**
     * Gets or sets the shading texture.
     */
    public texture: Shading.TextureEnum;
    
    public constructor(init?: Partial<Shading>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Enums for Shading
 */
// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace Shading {
    export enum TextureEnum {
        TextureNone = 'TextureNone' as any,
        TextureSolid = 'TextureSolid' as any,
        Texture5Percent = 'Texture5Percent' as any,
        Texture10Percent = 'Texture10Percent' as any,
        Texture20Percent = 'Texture20Percent' as any,
        Texture25Percent = 'Texture25Percent' as any,
        Texture30Percent = 'Texture30Percent' as any,
        Texture40Percent = 'Texture40Percent' as any,
        Texture50Percent = 'Texture50Percent' as any,
        Texture60Percent = 'Texture60Percent' as any,
        Texture70Percent = 'Texture70Percent' as any,
        Texture75Percent = 'Texture75Percent' as any,
        Texture80Percent = 'Texture80Percent' as any,
        Texture90Percent = 'Texture90Percent' as any,
        TextureDarkHorizontal = 'TextureDarkHorizontal' as any,
        TextureDarkVertical = 'TextureDarkVertical' as any,
        TextureDarkDiagonalDown = 'TextureDarkDiagonalDown' as any,
        TextureDarkDiagonalUp = 'TextureDarkDiagonalUp' as any,
        TextureDarkCross = 'TextureDarkCross' as any,
        TextureDarkDiagonalCross = 'TextureDarkDiagonalCross' as any,
        TextureHorizontal = 'TextureHorizontal' as any,
        TextureVertical = 'TextureVertical' as any,
        TextureDiagonalDown = 'TextureDiagonalDown' as any,
        TextureDiagonalUp = 'TextureDiagonalUp' as any,
        TextureCross = 'TextureCross' as any,
        TextureDiagonalCross = 'TextureDiagonalCross' as any,
        Texture2Pt5Percent = 'Texture2Pt5Percent' as any,
        Texture7Pt5Percent = 'Texture7Pt5Percent' as any,
        Texture12Pt5Percent = 'Texture12Pt5Percent' as any,
        Texture15Percent = 'Texture15Percent' as any,
        Texture17Pt5Percent = 'Texture17Pt5Percent' as any,
        Texture22Pt5Percent = 'Texture22Pt5Percent' as any,
        Texture27Pt5Percent = 'Texture27Pt5Percent' as any,
        Texture32Pt5Percent = 'Texture32Pt5Percent' as any,
        Texture35Percent = 'Texture35Percent' as any,
        Texture37Pt5Percent = 'Texture37Pt5Percent' as any,
        Texture42Pt5Percent = 'Texture42Pt5Percent' as any,
        Texture45Percent = 'Texture45Percent' as any,
        Texture47Pt5Percent = 'Texture47Pt5Percent' as any,
        Texture52Pt5Percent = 'Texture52Pt5Percent' as any,
        Texture55Percent = 'Texture55Percent' as any,
        Texture57Pt5Percent = 'Texture57Pt5Percent' as any,
        Texture62Pt5Percent = 'Texture62Pt5Percent' as any,
        Texture65Percent = 'Texture65Percent' as any,
        Texture67Pt5Percent = 'Texture67Pt5Percent' as any,
        Texture72Pt5Percent = 'Texture72Pt5Percent' as any,
        Texture77Pt5Percent = 'Texture77Pt5Percent' as any,
        Texture82Pt5Percent = 'Texture82Pt5Percent' as any,
        Texture85Percent = 'Texture85Percent' as any,
        Texture87Pt5Percent = 'Texture87Pt5Percent' as any,
        Texture92Pt5Percent = 'Texture92Pt5Percent' as any,
        Texture95Percent = 'Texture95Percent' as any,
        Texture97Pt5Percent = 'Texture97Pt5Percent' as any,
        TextureNil = 'TextureNil' as any,
    }
}
// tslint:enable:quotemark

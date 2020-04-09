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

export const importsMapListInsert = {
};

/**
 * Insert document to document list.
 */
export class ListInsert {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "template",
            baseName: "Template",
            type: "ListInsert.TemplateEnum",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ListInsert.attributeTypeMap;
    }

    /**
     * Gets or sets a value indicating whether specifies whether list should be restarted at each section. Default value is false.
     */
    public template: ListInsert.TemplateEnum;
    
    public constructor(init?: Partial<ListInsert>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Enums for ListInsert
 */
// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace ListInsert {
    export enum TemplateEnum {
        BulletDefault = 'BulletDefault' as any,
        BulletDisk = 'BulletDisk' as any,
        BulletCircle = 'BulletCircle' as any,
        BulletSquare = 'BulletSquare' as any,
        BulletDiamonds = 'BulletDiamonds' as any,
        BulletArrowHead = 'BulletArrowHead' as any,
        BulletTick = 'BulletTick' as any,
        NumberDefault = 'NumberDefault' as any,
        NumberArabicDot = 'NumberArabicDot' as any,
        NumberArabicParenthesis = 'NumberArabicParenthesis' as any,
        NumberUppercaseRomanDot = 'NumberUppercaseRomanDot' as any,
        NumberUppercaseLetterDot = 'NumberUppercaseLetterDot' as any,
        NumberLowercaseLetterParenthesis = 'NumberLowercaseLetterParenthesis' as any,
        NumberLowercaseLetterDot = 'NumberLowercaseLetterDot' as any,
        NumberLowercaseRomanDot = 'NumberLowercaseRomanDot' as any,
        OutlineNumbers = 'OutlineNumbers' as any,
        OutlineLegal = 'OutlineLegal' as any,
        OutlineBullets = 'OutlineBullets' as any,
        OutlineHeadingsArticleSection = 'OutlineHeadingsArticleSection' as any,
        OutlineHeadingsLegal = 'OutlineHeadingsLegal' as any,
        OutlineHeadingsNumbers = 'OutlineHeadingsNumbers' as any,
        OutlineHeadingsChapter = 'OutlineHeadingsChapter' as any,
    }
}
// tslint:enable:quotemark

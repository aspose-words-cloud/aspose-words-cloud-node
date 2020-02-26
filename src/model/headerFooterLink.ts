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
import { LinkElement } from './linkElement';
import { WordsApiLink } from './wordsApiLink';

export const importsMapHeaderFooterLink = {
    LinkElement,
    WordsApiLink,
};

/**
 * HeaderFooter link element.
 */
export class HeaderFooterLink extends LinkElement {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "type",
            baseName: "Type",
            type: "HeaderFooterLink.TypeEnum",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(HeaderFooterLink.attributeTypeMap);
    }

    /**
     * Gets or sets paragraph's text.
     */
    public type: HeaderFooterLink.TypeEnum;
    
    public constructor(init?: Partial<HeaderFooterLink>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Enums for HeaderFooterLink
 */
// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace HeaderFooterLink {
    export enum TypeEnum {
        HeaderEven = 'HeaderEven' as any,
        HeaderPrimary = 'HeaderPrimary' as any,
        FooterEven = 'FooterEven' as any,
        FooterPrimary = 'FooterPrimary' as any,
        HeaderFirst = 'HeaderFirst' as any,
        FooterFirst = 'FooterFirst' as any,
    }
}
// tslint:enable:quotemark

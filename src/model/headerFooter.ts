/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="headerFooter.ts">
 *   Copyright (c) 2020 Aspose.Words for Cloud
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
import { HeaderFooterLink } from './headerFooterLink';
import { LinkElement } from './linkElement';
import { NodeLink } from './nodeLink';

export const importsMapHeaderFooter = {
    HeaderFooterLink,
    LinkElement,
    NodeLink,
};

/**
 * DTO container with a section element.
 */
export class HeaderFooter extends HeaderFooterLink {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "childNodes",
            baseName: "ChildNodes",
            type: "Array<NodeLink>",
        },
        {
            name: "drawingObjects",
            baseName: "DrawingObjects",
            type: "LinkElement",
        },
        {
            name: "paragraphs",
            baseName: "Paragraphs",
            type: "LinkElement",
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(HeaderFooter.attributeTypeMap);
    }

    /**
     * Gets or sets the child nodes.
     */
    public childNodes: Array<NodeLink>;

    /**
     * Gets or sets the link to DrawingObjects resource.
     */
    public drawingObjects: LinkElement;

    /**
     * Gets or sets the link to Paragraphs resource.
     */
    public paragraphs: LinkElement;

    public constructor(init?: Partial< HeaderFooter >) {
        super(init);
        Object.assign(this, init);
    }
}


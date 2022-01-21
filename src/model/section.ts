/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="section.ts">
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
import { LinkElement } from './linkElement';
import { NodeLink } from './nodeLink';

export const importsMapSection = {
    LinkElement,
    NodeLink,
};

/**
 * DTO container with a section element.
 */
export class Section extends LinkElement {
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
            name: "headerFooters",
            baseName: "HeaderFooters",
            type: "LinkElement",
        },
        {
            name: "pageSetup",
            baseName: "PageSetup",
            type: "LinkElement",
        },
        {
            name: "paragraphs",
            baseName: "Paragraphs",
            type: "LinkElement",
        },
        {
            name: "tables",
            baseName: "Tables",
            type: "LinkElement",
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(Section.attributeTypeMap);
    }

    /**
     * Gets or sets the list of child nodes.
     */
    private _childNodes: Array<NodeLink>;

    /**
     * Gets or sets the list of child nodes.
     */
    public get childNodes(): Array<NodeLink> {
        return this._childNodes;
    }

    /**
     * Gets or sets the list of child nodes.
     */
    public set childNodes(value: Array<NodeLink>) {
        this._childNodes = value;
    }


    /**
     * Gets or sets the link to HeaderFooters resource.
     */
    private _headerFooters: LinkElement;

    /**
     * Gets or sets the link to HeaderFooters resource.
     */
    public get headerFooters(): LinkElement {
        return this._headerFooters;
    }

    /**
     * Gets or sets the link to HeaderFooters resource.
     */
    public set headerFooters(value: LinkElement) {
        this._headerFooters = value;
    }


    /**
     * Gets or sets the link to PageSetup resource.
     */
    private _pageSetup: LinkElement;

    /**
     * Gets or sets the link to PageSetup resource.
     */
    public get pageSetup(): LinkElement {
        return this._pageSetup;
    }

    /**
     * Gets or sets the link to PageSetup resource.
     */
    public set pageSetup(value: LinkElement) {
        this._pageSetup = value;
    }


    /**
     * Gets or sets the link to Paragraphs resource.
     */
    private _paragraphs: LinkElement;

    /**
     * Gets or sets the link to Paragraphs resource.
     */
    public get paragraphs(): LinkElement {
        return this._paragraphs;
    }

    /**
     * Gets or sets the link to Paragraphs resource.
     */
    public set paragraphs(value: LinkElement) {
        this._paragraphs = value;
    }


    /**
     * Gets or sets the link to Tables resource.
     */
    private _tables: LinkElement;

    /**
     * Gets or sets the link to Tables resource.
     */
    public get tables(): LinkElement {
        return this._tables;
    }

    /**
     * Gets or sets the link to Tables resource.
     */
    public set tables(value: LinkElement) {
        this._tables = value;
    }


    public constructor(init?: Partial< Section >) {
        super(init);
        Object.assign(this, init);
    }
}


/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="footnote.ts">
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
import { DocumentPosition } from './documentPosition';
import { FootnoteLink } from './footnoteLink';
import { StoryChildNodes } from './storyChildNodes';

export const importsMapFootnote = {
    DocumentPosition,
    FootnoteLink,
    StoryChildNodes,
};

/**
 * Footnote.
 */
export class Footnote extends FootnoteLink {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "content",
            baseName: "Content",
            type: "StoryChildNodes",
        },
        {
            name: "footnoteType",
            baseName: "FootnoteType",
            type: "Footnote.FootnoteTypeEnum",
        },
        {
            name: "position",
            baseName: "Position",
            type: "DocumentPosition",
        },
        {
            name: "referenceMark",
            baseName: "ReferenceMark",
            type: "string",
        },
        {
            name: "text",
            baseName: "Text",
            type: "string",
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(Footnote.attributeTypeMap);
    }

    /**
     * Gets or sets content of footnote.
     */
    public content: StoryChildNodes;

    /**
     * Gets or sets returns a value that specifies whether this is a footnote or endnote.
     */
    public footnoteType: Footnote.FootnoteTypeEnum;

    /**
     * Gets or sets link to comment range start node.
     */
    public position: DocumentPosition;

    /**
     * Gets or sets /sets custom reference mark to be used for this footnote.
     * Default value is Empty, meaning auto-numbered footnotes are used.
     */
    public referenceMark: string;

    /**
     * Gets or sets this is a convenience property that allows to easily get or set text of the footnote.
     */
    public text: string;

    public constructor(init?: Partial< Footnote >) {
        super(init);
        Object.assign(this, init);
    }
}

/**
 * Enums for Footnote
 */
// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace Footnote {
    export enum FootnoteTypeEnum {
        Footnote = 'Footnote' as any,
        Endnote = 'Endnote' as any
    }
}
// tslint:enable:quotemark


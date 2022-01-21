/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="footnote.ts">
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
import { DocumentPosition } from './documentPosition';
import { FootnoteLink } from './footnoteLink';
import { StoryChildNodes } from './storyChildNodes';

export const importsMapFootnote = {
    DocumentPosition,
    FootnoteLink,
    StoryChildNodes,
};

/**
 * DTO container with a footnote.
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
     * Gets or sets the content of the footnote.
     */
    private _content: StoryChildNodes;

    /**
     * Gets or sets the content of the footnote.
     */
    public get content(): StoryChildNodes {
        return this._content;
    }

    /**
     * Gets or sets the content of the footnote.
     */
    public set content(value: StoryChildNodes) {
        this._content = value;
    }


    /**
     * Gets or sets the value, that specifies whether this is a footnote or endnote.
     */
    private _footnoteType: Footnote.FootnoteTypeEnum;

    /**
     * Gets or sets the value, that specifies whether this is a footnote or endnote.
     */
    public get footnoteType(): Footnote.FootnoteTypeEnum {
        return this._footnoteType;
    }

    /**
     * Gets or sets the value, that specifies whether this is a footnote or endnote.
     */
    public set footnoteType(value: Footnote.FootnoteTypeEnum) {
        this._footnoteType = value;
    }


    /**
     * Gets or sets the link to comment range start node.
     */
    private _position: DocumentPosition;

    /**
     * Gets or sets the link to comment range start node.
     */
    public get position(): DocumentPosition {
        return this._position;
    }

    /**
     * Gets or sets the link to comment range start node.
     */
    public set position(value: DocumentPosition) {
        this._position = value;
    }


    /**
     * Gets or sets the custom reference mark to be used for this footnote.
     * Default value is Empty, meaning auto-numbered footnotes are used.
     */
    private _referenceMark: string;

    /**
     * Gets or sets the custom reference mark to be used for this footnote.
     * Default value is Empty, meaning auto-numbered footnotes are used.
     */
    public get referenceMark(): string {
        return this._referenceMark;
    }

    /**
     * Gets or sets the custom reference mark to be used for this footnote.
     * Default value is Empty, meaning auto-numbered footnotes are used.
     */
    public set referenceMark(value: string) {
        this._referenceMark = value;
    }


    /**
     * Gets or sets text of the footnote.
     */
    private _text: string;

    /**
     * Gets or sets text of the footnote.
     */
    public get text(): string {
        return this._text;
    }

    /**
     * Gets or sets text of the footnote.
     */
    public set text(value: string) {
        this._text = value;
    }


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


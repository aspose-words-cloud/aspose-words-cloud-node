/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="footnoteBase.ts">
 *   Copyright (c) 2023 Aspose.Words for Cloud
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
import { NewDocumentPosition } from './newDocumentPosition';

export const importsMapFootnoteBase = {
    NewDocumentPosition,
};

/**
 * Footnote base class.
 */
export abstract class FootnoteBase implements ModelInterface {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "position",
            baseName: "Position",
            type: "NewDocumentPosition",
        },
        {
            name: "footnoteType",
            baseName: "FootnoteType",
            type: "FootnoteBase.FootnoteTypeEnum",
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
        return FootnoteBase.attributeTypeMap;
    }

    /**
     * Gets or sets the link to comment range start node.
     */
    public position: NewDocumentPosition;

    /**
     * Gets or sets the option, that specifies whether this is a footnote or endnote.
     */
    public footnoteType: FootnoteBase.FootnoteTypeEnum;

    /**
     * Gets or sets the custom reference mark to be used for this footnote.
     * Default value is Empty, meaning auto-numbered footnotes are used.
     * RTF-format can only store 1 symbol as custom reference mark, so upon export only the first symbol will be written others will be discard.
     */
    public referenceMark: string;

    /**
     * Gets or sets text of the footnote.
     * This method allows to quickly set text of a footnote from a string. The string can contain paragraph breaks, this will create paragraphs of text in the footnote accordingly.
     */
    public text: string;

    public constructor(init?: Partial< FootnoteBase >) {
        Object.assign(this, init);
    }

    public collectFilesContent(_resultFilesContent: Array<any>) {
    }
}

/**
 * Enums for FootnoteBase
 */
// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace FootnoteBase {
    export enum FootnoteTypeEnum {
        Footnote = 'Footnote' as any,
        Endnote = 'Endnote' as any
    }
}
// tslint:enable:quotemark


/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="markdownSaveOptionsData.ts">
 *   Copyright (c) 2025 Aspose.Words for Cloud
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
import { TxtSaveOptionsBaseData } from './txtSaveOptionsBaseData';

export const importsMapMarkdownSaveOptionsData = {
    TxtSaveOptionsBaseData,
};

/**
 * Container class for markdown save options.
 */
export class MarkdownSaveOptionsData extends TxtSaveOptionsBaseData {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "tableContentAlignment",
            baseName: "TableContentAlignment",
            type: "MarkdownSaveOptionsData.TableContentAlignmentEnum",
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(MarkdownSaveOptionsData.attributeTypeMap);
    }

    /**
     * Gets or sets the value, that specifies how to align contents in tables when exporting into the Markdown format.
     * The default value is Auto.
     */
    public tableContentAlignment: MarkdownSaveOptionsData.TableContentAlignmentEnum;

    public constructor(init?: Partial< MarkdownSaveOptionsData >) {
        super(init);
        this.saveFormat = 'md';

        Object.assign(this, init);
    }

    public collectFilesContent(_resultFilesContent: Array<any>) {
    }

    public validate() {
        super.validate();
    }
}

/**
 * Enums for MarkdownSaveOptionsData
 */
// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace MarkdownSaveOptionsData {
    export enum TableContentAlignmentEnum {
        Auto = 'Auto' as any,
        Left = 'Left' as any,
        Center = 'Center' as any,
        Right = 'Right' as any
    }
}
// tslint:enable:quotemark


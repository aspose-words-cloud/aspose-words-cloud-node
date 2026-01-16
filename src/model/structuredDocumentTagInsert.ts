/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="structuredDocumentTagInsert.ts">
 *   Copyright (c) 2026 Aspose.Words for Cloud
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
import { Position } from './position';
import { StructuredDocumentTagBase } from './structuredDocumentTagBase';

export const importsMapStructuredDocumentTagInsert = {
    Position,
    StructuredDocumentTagBase,
};

/**
 * DTO container with a StructuredDocumentTag.
 */
export class StructuredDocumentTagInsert extends StructuredDocumentTagBase {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "level",
            baseName: "Level",
            type: "StructuredDocumentTagInsert.LevelEnum",
        },
        {
            name: "sdtType",
            baseName: "SdtType",
            type: "StructuredDocumentTagInsert.SdtTypeEnum",
        },
        {
            name: "position",
            baseName: "Position",
            type: "Position",
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(StructuredDocumentTagInsert.attributeTypeMap);
    }

    /**
     * Gets or sets the level at which this SDT occurs in the document tree.
     */
    public level: StructuredDocumentTagInsert.LevelEnum;

    /**
     * Gets or sets type of this Structured document tag.
     */
    public sdtType: StructuredDocumentTagInsert.SdtTypeEnum;

    /**
     * Gets or sets the position of the node that will be used to determine the placement of a new node.
     */
    public position: Position;

    public constructor(init?: Partial< StructuredDocumentTagInsert >) {
        super(init);
        Object.assign(this, init);
    }

    public collectFilesContent(_resultFilesContent: Array<any>) {
    }

    public validate() {
        super.validate();
        if (this.level === null || this.level === undefined)
        {
            throw new Error('Property Level in StructuredDocumentTagInsert is required.');
        }
        if (this.sdtType === null || this.sdtType === undefined)
        {
            throw new Error('Property SdtType in StructuredDocumentTagInsert is required.');
        }

        this.position?.validate();

    }
}

/**
 * Enums for StructuredDocumentTagInsert
 */
// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace StructuredDocumentTagInsert {
    export enum LevelEnum {
        Unknown = 'Unknown' as any,
        Inline = 'Inline' as any,
        Block = 'Block' as any,
        Row = 'Row' as any,
        Cell = 'Cell' as any
    }

    export enum SdtTypeEnum {
        None = 'None' as any,
        Bibliography = 'Bibliography' as any,
        Citation = 'Citation' as any,
        Equation = 'Equation' as any,
        DropDownList = 'DropDownList' as any,
        ComboBox = 'ComboBox' as any,
        Date = 'Date' as any,
        BuildingBlockGallery = 'BuildingBlockGallery' as any,
        DocPartObj = 'DocPartObj' as any,
        Group = 'Group' as any,
        Picture = 'Picture' as any,
        RichText = 'RichText' as any,
        PlainText = 'PlainText' as any,
        Checkbox = 'Checkbox' as any,
        RepeatingSection = 'RepeatingSection' as any,
        RepeatingSectionItem = 'RepeatingSectionItem' as any,
        EntityPicker = 'EntityPicker' as any
    }
}
// tslint:enable:quotemark


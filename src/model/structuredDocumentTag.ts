/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="structuredDocumentTag.ts">
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
import { NodeLink } from './nodeLink';
import { StructuredDocumentTagListItem } from './structuredDocumentTagListItem';

export const importsMapStructuredDocumentTag = {
    NodeLink,
    StructuredDocumentTagListItem,
};

/**
 * DTO container with a StructuredDocumentTag.
 */
export class StructuredDocumentTag extends NodeLink {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "listItems",
            baseName: "ListItems",
            type: "Array<StructuredDocumentTagListItem>",
        },
        {
            name: "checked",
            baseName: "Checked",
            type: "boolean",
        },
        {
            name: "appearance",
            baseName: "Appearance",
            type: "StructuredDocumentTag.AppearanceEnum",
        },
        {
            name: "dateDisplayLocale",
            baseName: "DateDisplayLocale",
            type: "number",
        },
        {
            name: "dateDisplayFormat",
            baseName: "DateDisplayFormat",
            type: "string",
        },
        {
            name: "fullDate",
            baseName: "FullDate",
            type: "Date",
        },
        {
            name: "title",
            baseName: "Title",
            type: "string",
        },
        {
            name: "dateStorageFormat",
            baseName: "DateStorageFormat",
            type: "StructuredDocumentTag.DateStorageFormatEnum",
        },
        {
            name: "buildingBlockGallery",
            baseName: "BuildingBlockGallery",
            type: "string",
        },
        {
            name: "buildingBlockCategory",
            baseName: "BuildingBlockCategory",
            type: "string",
        },
        {
            name: "multiline",
            baseName: "Multiline",
            type: "boolean",
        },
        {
            name: "color",
            baseName: "Color",
            type: "string",
        },
        {
            name: "styleName",
            baseName: "StyleName",
            type: "string",
        },
        {
            name: "calendarType",
            baseName: "CalendarType",
            type: "StructuredDocumentTag.CalendarTypeEnum",
        },
        {
            name: "isTemporary",
            baseName: "IsTemporary",
            type: "boolean",
        },
        {
            name: "level",
            baseName: "Level",
            type: "StructuredDocumentTag.LevelEnum",
        },
        {
            name: "sdtType",
            baseName: "SdtType",
            type: "StructuredDocumentTag.SdtTypeEnum",
        },
        {
            name: "placeholderName",
            baseName: "PlaceholderName",
            type: "string",
        },
        {
            name: "lockContentControl",
            baseName: "LockContentControl",
            type: "boolean",
        },
        {
            name: "lockContents",
            baseName: "LockContents",
            type: "boolean",
        },
        {
            name: "isShowingPlaceholderText",
            baseName: "IsShowingPlaceholderText",
            type: "boolean",
        },
        {
            name: "tag",
            baseName: "Tag",
            type: "string",
        },
        {
            name: "id",
            baseName: "Id",
            type: "number",
        },
        {
            name: "wordOpenXML",
            baseName: "WordOpenXML",
            type: "string",
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(StructuredDocumentTag.attributeTypeMap);
    }

    /**
     * Gets or sets Aspose.Words.Markup.SdtListItemCollection associated with this SDT.
     */
    public listItems: Array<StructuredDocumentTagListItem>;

    /**
     * Gets or sets a value indicating whether current state of the Checkbox SDT. Default value for this property.
     */
    public checked: boolean;

    /**
     * Gets or sets the appearance of a structured document tag.
     */
    public appearance: StructuredDocumentTag.AppearanceEnum;

    /**
     * Gets or sets the language format for the date displayed in this SDT.
     */
    public dateDisplayLocale: number;

    /**
     * Gets or sets String that represents the format in which dates are displayed. Can not be null. The dates for English (U.S.) is "mm/dd/yyyy".
     */
    public dateDisplayFormat: string;

    /**
     * Gets or sets the full date and time last entered into this SDT.
     */
    public fullDate: Date;

    /**
     * Gets or sets the friendly name associated with this SDT. Can not be null.
     */
    public title: string;

    /**
     * Gets or sets format in which the date for a date SDT is stored when the SDT is bound to an XML node in the document's data store.
     * Default value is Aspose.Words.Markup.SdtDateStorageFormat.DateTime.
     */
    public dateStorageFormat: StructuredDocumentTag.DateStorageFormatEnum;

    /**
     * Gets or sets type of building block for this SDT. Can not be null.
     */
    public buildingBlockGallery: string;

    /**
     * Gets or sets category of building block for this SDT node. Can not be null.
     */
    public buildingBlockCategory: string;

    /**
     * Gets or sets a value indicating whether this SDT allows multiple lines of text.
     */
    public multiline: boolean;

    /**
     * Gets or sets the color of the structured document tag.
     */
    public color: string;

    /**
     * Gets or sets the name of the style applied to the structured document tag.
     */
    public styleName: string;

    /**
     * Gets or sets the type of calendar for this SDT. Default is Aspose.Words.Markup.SdtCalendarType.Default.
     */
    public calendarType: StructuredDocumentTag.CalendarTypeEnum;

    /**
     * Gets or sets a value indicating whether this SDT shall be removed from the WordProcessingML document when its contents are modified.
     */
    public isTemporary: boolean;

    /**
     * Gets or sets the level at which this SDT occurs in the document tree.
     */
    public level: StructuredDocumentTag.LevelEnum;

    /**
     * Gets or sets type of this Structured document tag.
     */
    public sdtType: StructuredDocumentTag.SdtTypeEnum;

    /**
     * Gets or sets Name of the Aspose.Words.BuildingBlocks.BuildingBlock containing placeholder text.
     * Aspose.Words.BuildingBlocks.BuildingBlock with this name Aspose.Words.BuildingBlocks.BuildingBlock.Name has to be present in the Aspose.Words.Document.GlossaryDocument otherwise System.InvalidOperationException will occur.
     */
    public placeholderName: string;

    /**
     * Gets or sets a value indicating whether, this property will prohibit a user from deleting this SDT.
     */
    public lockContentControl: boolean;

    /**
     * Gets or sets a value indicating whether, this property will prohibit a user from editing the contents of this SDT.
     */
    public lockContents: boolean;

    /**
     * Gets or sets a value indicating whether the content of this SDT shall be interpreted to contain placeholder text (as opposed to regular text contents within the SDT).
     * If set to true, this state shall be resumed (showing placeholder text) upon opening his document.
     */
    public isShowingPlaceholderText: boolean;

    /**
     * Gets or sets a tag associated with the current SDT node. Can not be null.
     */
    public tag: string;

    /**
     * Gets or sets a unique read-only persistent numerical Id for this SDT.
     */
    public id: number;

    /**
     * Gets a string that represents the XML contained within the node in the Aspose.Words.SaveFormat.FlatOpc format.
     */
    public wordOpenXML: string;

    public constructor(init?: Partial< StructuredDocumentTag >) {
        super(init);
        Object.assign(this, init);
    }

    public collectFilesContent(_resultFilesContent: Array<any>) {
    }
}

/**
 * Enums for StructuredDocumentTag
 */
// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace StructuredDocumentTag {
    export enum AppearanceEnum {
        Default = 'Default' as any,
        BoundingBox = 'BoundingBox' as any,
        Tags = 'Tags' as any,
        Hidden = 'Hidden' as any
    }

    export enum DateStorageFormatEnum {
        Date = 'Date' as any,
        DateTime = 'DateTime' as any,
        Default = 'Default' as any,
        Text = 'Text' as any
    }

    export enum CalendarTypeEnum {
        Default = 'Default' as any,
        Gregorian = 'Gregorian' as any,
        GregorianArabic = 'GregorianArabic' as any,
        GregorianMeFrench = 'GregorianMeFrench' as any,
        GregorianUs = 'GregorianUs' as any,
        GregorianXlitEnglish = 'GregorianXlitEnglish' as any,
        GregorianXlitFrench = 'GregorianXlitFrench' as any,
        Hebrew = 'Hebrew' as any,
        Hijri = 'Hijri' as any,
        Japan = 'Japan' as any,
        Korea = 'Korea' as any,
        None = 'None' as any,
        Saka = 'Saka' as any,
        Taiwan = 'Taiwan' as any,
        Thai = 'Thai' as any
    }

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


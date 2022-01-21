/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="saveOptionsData.ts">
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
import { TimeZoneInfoData } from './timeZoneInfoData';

export const importsMapSaveOptionsData = {
    TimeZoneInfoData,
};

/**
 * base container class for save options data.
 */
export class SaveOptionsData {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "allowEmbeddingPostScriptFonts",
            baseName: "AllowEmbeddingPostScriptFonts",
            type: "boolean",
        },
        {
            name: "customTimeZoneInfoData",
            baseName: "CustomTimeZoneInfoData",
            type: "TimeZoneInfoData",
        },
        {
            name: "dml3DEffectsRenderingMode",
            baseName: "Dml3DEffectsRenderingMode",
            type: "SaveOptionsData.Dml3DEffectsRenderingModeEnum",
        },
        {
            name: "dmlEffectsRenderingMode",
            baseName: "DmlEffectsRenderingMode",
            type: "string",
        },
        {
            name: "dmlRenderingMode",
            baseName: "DmlRenderingMode",
            type: "string",
        },
        {
            name: "fileName",
            baseName: "FileName",
            type: "string",
        },
        {
            name: "flatOpcXmlMappingOnly",
            baseName: "FlatOpcXmlMappingOnly",
            type: "boolean",
        },
        {
            name: "imlRenderingMode",
            baseName: "ImlRenderingMode",
            type: "string",
        },
        {
            name: "saveFormat",
            baseName: "SaveFormat",
            type: "string",
        },
        {
            name: "updateCreatedTimeProperty",
            baseName: "UpdateCreatedTimeProperty",
            type: "boolean",
        },
        {
            name: "updateFields",
            baseName: "UpdateFields",
            type: "boolean",
        },
        {
            name: "updateLastPrintedProperty",
            baseName: "UpdateLastPrintedProperty",
            type: "boolean",
        },
        {
            name: "updateLastSavedTimeProperty",
            baseName: "UpdateLastSavedTimeProperty",
            type: "boolean",
        },
        {
            name: "updateSdtContent",
            baseName: "UpdateSdtContent",
            type: "boolean",
        },
        {
            name: "zipOutput",
            baseName: "ZipOutput",
            type: "boolean",
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return SaveOptionsData.attributeTypeMap;
    }

    /**
     * Gets or sets a boolean value indicating whether to allow embedding fonts with PostScript outlines when embedding TrueType fonts in a document upon it is saved. The default value is false..
     */
    private _allowEmbeddingPostScriptFonts: boolean;

    /**
     * Gets or sets a boolean value indicating whether to allow embedding fonts with PostScript outlines when embedding TrueType fonts in a document upon it is saved. The default value is false..
     */
    public get allowEmbeddingPostScriptFonts(): boolean {
        return this._allowEmbeddingPostScriptFonts;
    }

    /**
     * Gets or sets a boolean value indicating whether to allow embedding fonts with PostScript outlines when embedding TrueType fonts in a document upon it is saved. The default value is false..
     */
    public set allowEmbeddingPostScriptFonts(value: boolean) {
        this._allowEmbeddingPostScriptFonts = value;
    }


    /**
     * Gets or sets CustomTimeZoneInfo.
     */
    private _customTimeZoneInfoData: TimeZoneInfoData;

    /**
     * Gets or sets CustomTimeZoneInfo.
     */
    public get customTimeZoneInfoData(): TimeZoneInfoData {
        return this._customTimeZoneInfoData;
    }

    /**
     * Gets or sets CustomTimeZoneInfo.
     */
    public set customTimeZoneInfoData(value: TimeZoneInfoData) {
        this._customTimeZoneInfoData = value;
    }


    /**
     * Gets or sets the value determining how 3D effects are rendered.
     */
    private _dml3DEffectsRenderingMode: SaveOptionsData.Dml3DEffectsRenderingModeEnum;

    /**
     * Gets or sets the value determining how 3D effects are rendered.
     */
    public get dml3DEffectsRenderingMode(): SaveOptionsData.Dml3DEffectsRenderingModeEnum {
        return this._dml3DEffectsRenderingMode;
    }

    /**
     * Gets or sets the value determining how 3D effects are rendered.
     */
    public set dml3DEffectsRenderingMode(value: SaveOptionsData.Dml3DEffectsRenderingModeEnum) {
        this._dml3DEffectsRenderingMode = value;
    }


    /**
     * Gets or sets the value determining how DrawingML effects are rendered.
     * { Simplified | None | Fine }.
     */
    private _dmlEffectsRenderingMode: string;

    /**
     * Gets or sets the value determining how DrawingML effects are rendered.
     * { Simplified | None | Fine }.
     */
    public get dmlEffectsRenderingMode(): string {
        return this._dmlEffectsRenderingMode;
    }

    /**
     * Gets or sets the value determining how DrawingML effects are rendered.
     * { Simplified | None | Fine }.
     */
    public set dmlEffectsRenderingMode(value: string) {
        this._dmlEffectsRenderingMode = value;
    }


    /**
     * Gets or sets the option that controls how DrawingML shapes are rendered.
     */
    private _dmlRenderingMode: string;

    /**
     * Gets or sets the option that controls how DrawingML shapes are rendered.
     */
    public get dmlRenderingMode(): string {
        return this._dmlRenderingMode;
    }

    /**
     * Gets or sets the option that controls how DrawingML shapes are rendered.
     */
    public set dmlRenderingMode(value: string) {
        this._dmlRenderingMode = value;
    }


    /**
     * Gets or sets the name of destination file.
     */
    private _fileName: string;

    /**
     * Gets or sets the name of destination file.
     */
    public get fileName(): string {
        return this._fileName;
    }

    /**
     * Gets or sets the name of destination file.
     */
    public set fileName(value: string) {
        this._fileName = value;
    }


    /**
     * Gets or sets value determining which document formats are allowed to be mapped by Aspose.Words.Markup.StructuredDocumentTag.XmlMapping.
     * By default only Aspose.Words.LoadFormat.FlatOpc document format is allowed to be mapped.
     */
    private _flatOpcXmlMappingOnly: boolean;

    /**
     * Gets or sets value determining which document formats are allowed to be mapped by Aspose.Words.Markup.StructuredDocumentTag.XmlMapping.
     * By default only Aspose.Words.LoadFormat.FlatOpc document format is allowed to be mapped.
     */
    public get flatOpcXmlMappingOnly(): boolean {
        return this._flatOpcXmlMappingOnly;
    }

    /**
     * Gets or sets value determining which document formats are allowed to be mapped by Aspose.Words.Markup.StructuredDocumentTag.XmlMapping.
     * By default only Aspose.Words.LoadFormat.FlatOpc document format is allowed to be mapped.
     */
    public set flatOpcXmlMappingOnly(value: boolean) {
        this._flatOpcXmlMappingOnly = value;
    }


    /**
     * Gets or sets the value determining how ink (InkML) objects are rendered.
     */
    private _imlRenderingMode: string;

    /**
     * Gets or sets the value determining how ink (InkML) objects are rendered.
     */
    public get imlRenderingMode(): string {
        return this._imlRenderingMode;
    }

    /**
     * Gets or sets the value determining how ink (InkML) objects are rendered.
     */
    public set imlRenderingMode(value: string) {
        this._imlRenderingMode = value;
    }


    /**
     * Gets or sets the format of save.
     */
    private _saveFormat: string;

    /**
     * Gets or sets the format of save.
     */
    public get saveFormat(): string {
        return this._saveFormat;
    }



    /**
     * Gets or sets a value determining whether the Aspose.Words.Properties.BuiltInDocumentProperties.CreatedTime property is updated before saving.
     * Default value is false.
     */
    private _updateCreatedTimeProperty: boolean;

    /**
     * Gets or sets a value determining whether the Aspose.Words.Properties.BuiltInDocumentProperties.CreatedTime property is updated before saving.
     * Default value is false.
     */
    public get updateCreatedTimeProperty(): boolean {
        return this._updateCreatedTimeProperty;
    }

    /**
     * Gets or sets a value determining whether the Aspose.Words.Properties.BuiltInDocumentProperties.CreatedTime property is updated before saving.
     * Default value is false.
     */
    public set updateCreatedTimeProperty(value: boolean) {
        this._updateCreatedTimeProperty = value;
    }


    /**
     * Gets or sets a value indicating whether fields should be updated before saving the document to a fixed page format. The default value is true.
     */
    private _updateFields: boolean;

    /**
     * Gets or sets a value indicating whether fields should be updated before saving the document to a fixed page format. The default value is true.
     */
    public get updateFields(): boolean {
        return this._updateFields;
    }

    /**
     * Gets or sets a value indicating whether fields should be updated before saving the document to a fixed page format. The default value is true.
     */
    public set updateFields(value: boolean) {
        this._updateFields = value;
    }


    /**
     * Gets or sets a value indicating whether the Aspose.Words.Properties.BuiltInDocumentProperties.LastPrinted property is updated before saving.
     */
    private _updateLastPrintedProperty: boolean;

    /**
     * Gets or sets a value indicating whether the Aspose.Words.Properties.BuiltInDocumentProperties.LastPrinted property is updated before saving.
     */
    public get updateLastPrintedProperty(): boolean {
        return this._updateLastPrintedProperty;
    }

    /**
     * Gets or sets a value indicating whether the Aspose.Words.Properties.BuiltInDocumentProperties.LastPrinted property is updated before saving.
     */
    public set updateLastPrintedProperty(value: boolean) {
        this._updateLastPrintedProperty = value;
    }


    /**
     * Gets or sets a value indicating whether the Aspose.Words.Properties.BuiltInDocumentProperties.LastSavedTime property is updated before saving.
     */
    private _updateLastSavedTimeProperty: boolean;

    /**
     * Gets or sets a value indicating whether the Aspose.Words.Properties.BuiltInDocumentProperties.LastSavedTime property is updated before saving.
     */
    public get updateLastSavedTimeProperty(): boolean {
        return this._updateLastSavedTimeProperty;
    }

    /**
     * Gets or sets a value indicating whether the Aspose.Words.Properties.BuiltInDocumentProperties.LastSavedTime property is updated before saving.
     */
    public set updateLastSavedTimeProperty(value: boolean) {
        this._updateLastSavedTimeProperty = value;
    }


    /**
     * Gets or sets a value indicating whether content of StructuredDocumentTag is updated before saving.
     */
    private _updateSdtContent: boolean;

    /**
     * Gets or sets a value indicating whether content of StructuredDocumentTag is updated before saving.
     */
    public get updateSdtContent(): boolean {
        return this._updateSdtContent;
    }

    /**
     * Gets or sets a value indicating whether content of StructuredDocumentTag is updated before saving.
     */
    public set updateSdtContent(value: boolean) {
        this._updateSdtContent = value;
    }


    /**
     * Gets or sets a value indicating whether to zip output or not.
     * The default value is false.
     */
    private _zipOutput: boolean;

    /**
     * Gets or sets a value indicating whether to zip output or not.
     * The default value is false.
     */
    public get zipOutput(): boolean {
        return this._zipOutput;
    }

    /**
     * Gets or sets a value indicating whether to zip output or not.
     * The default value is false.
     */
    public set zipOutput(value: boolean) {
        this._zipOutput = value;
    }


    public constructor(init?: Partial< SaveOptionsData >) {
        Object.assign(this, init);
    }
}

/**
 * Enums for SaveOptionsData
 */
// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace SaveOptionsData {
    export enum Dml3DEffectsRenderingModeEnum {
        Basic = 'Basic' as any,
        Advanced = 'Advanced' as any
    }
}
// tslint:enable:quotemark


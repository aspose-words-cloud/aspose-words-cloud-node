/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="fieldOptions.ts">
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
import { UserInformation } from './userInformation';

export const importsMapFieldOptions = {
    UserInformation,
};

/**
 * DTO for field options.
 */
export class FieldOptions {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "builtInTemplatesPaths",
            baseName: "BuiltInTemplatesPaths",
            type: "Array<string>",
        },
        {
            name: "currentUser",
            baseName: "CurrentUser",
            type: "UserInformation",
        },
        {
            name: "customTocStyleSeparator",
            baseName: "CustomTocStyleSeparator",
            type: "string",
        },
        {
            name: "defaultDocumentAuthor",
            baseName: "DefaultDocumentAuthor",
            type: "string",
        },
        {
            name: "fieldIndexFormat",
            baseName: "FieldIndexFormat",
            type: "FieldOptions.FieldIndexFormatEnum",
        },
        {
            name: "fieldUpdateCultureName",
            baseName: "FieldUpdateCultureName",
            type: "string",
        },
        {
            name: "fieldUpdateCultureSource",
            baseName: "FieldUpdateCultureSource",
            type: "FieldOptions.FieldUpdateCultureSourceEnum",
        },
        {
            name: "fileName",
            baseName: "FileName",
            type: "string",
        },
        {
            name: "isBidiTextSupportedOnUpdate",
            baseName: "IsBidiTextSupportedOnUpdate",
            type: "boolean",
        },
        {
            name: "legacyNumberFormat",
            baseName: "LegacyNumberFormat",
            type: "boolean",
        },
        {
            name: "preProcessCultureName",
            baseName: "PreProcessCultureName",
            type: "string",
        },
        {
            name: "templateName",
            baseName: "TemplateName",
            type: "string",
        },
        {
            name: "useInvariantCultureNumberFormat",
            baseName: "UseInvariantCultureNumberFormat",
            type: "boolean",
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return FieldOptions.attributeTypeMap;
    }

    /**
     * Gets or sets BuiltIn Templates Paths.
     */
    protected _builtInTemplatesPaths: Array<string>;

    /**
     * Gets or sets BuiltIn Templates Paths.
     */
    public get builtInTemplatesPaths(): Array<string> {
        return this._builtInTemplatesPaths;
    }

    /**
     * Gets or sets BuiltIn Templates Paths.
     */
    public set builtInTemplatesPaths(value: Array<string>) {
        this._builtInTemplatesPaths = value;
    }


    /**
     * Gets or sets Curren tUser.
     */
    protected _currentUser: UserInformation;

    /**
     * Gets or sets Curren tUser.
     */
    public get currentUser(): UserInformation {
        return this._currentUser;
    }

    /**
     * Gets or sets Curren tUser.
     */
    public set currentUser(value: UserInformation) {
        this._currentUser = value;
    }


    /**
     * Gets or sets Custom Toc Style Separator.
     */
    protected _customTocStyleSeparator: string;

    /**
     * Gets or sets Custom Toc Style Separator.
     */
    public get customTocStyleSeparator(): string {
        return this._customTocStyleSeparator;
    }

    /**
     * Gets or sets Custom Toc Style Separator.
     */
    public set customTocStyleSeparator(value: string) {
        this._customTocStyleSeparator = value;
    }


    /**
     * Gets or sets Default Document Author.
     */
    protected _defaultDocumentAuthor: string;

    /**
     * Gets or sets Default Document Author.
     */
    public get defaultDocumentAuthor(): string {
        return this._defaultDocumentAuthor;
    }

    /**
     * Gets or sets Default Document Author.
     */
    public set defaultDocumentAuthor(value: string) {
        this._defaultDocumentAuthor = value;
    }


    /**
     * Gets or sets Field Index Format.
     */
    protected _fieldIndexFormat: FieldOptions.FieldIndexFormatEnum;

    /**
     * Gets or sets Field Index Format.
     */
    public get fieldIndexFormat(): FieldOptions.FieldIndexFormatEnum {
        return this._fieldIndexFormat;
    }

    /**
     * Gets or sets Field Index Format.
     */
    public set fieldIndexFormat(value: FieldOptions.FieldIndexFormatEnum) {
        this._fieldIndexFormat = value;
    }


    /**
     * Gets or sets Field Update Culture Name.
     * It is used for all fields if FieldUpdateCultureSource is FieldCode.
     */
    protected _fieldUpdateCultureName: string;

    /**
     * Gets or sets Field Update Culture Name.
     * It is used for all fields if FieldUpdateCultureSource is FieldCode.
     */
    public get fieldUpdateCultureName(): string {
        return this._fieldUpdateCultureName;
    }

    /**
     * Gets or sets Field Update Culture Name.
     * It is used for all fields if FieldUpdateCultureSource is FieldCode.
     */
    public set fieldUpdateCultureName(value: string) {
        this._fieldUpdateCultureName = value;
    }


    /**
     * Gets or sets Field Update Culture Source.
     */
    protected _fieldUpdateCultureSource: FieldOptions.FieldUpdateCultureSourceEnum;

    /**
     * Gets or sets Field Update Culture Source.
     */
    public get fieldUpdateCultureSource(): FieldOptions.FieldUpdateCultureSourceEnum {
        return this._fieldUpdateCultureSource;
    }

    /**
     * Gets or sets Field Update Culture Source.
     */
    public set fieldUpdateCultureSource(value: FieldOptions.FieldUpdateCultureSourceEnum) {
        this._fieldUpdateCultureSource = value;
    }


    /**
     * Gets or sets File Name.
     */
    protected _fileName: string;

    /**
     * Gets or sets File Name.
     */
    public get fileName(): string {
        return this._fileName;
    }

    /**
     * Gets or sets File Name.
     */
    public set fileName(value: string) {
        this._fileName = value;
    }


    /**
     * Gets or sets if Bidi Text Supported OnUpdate.
     */
    protected _isBidiTextSupportedOnUpdate: boolean;

    /**
     * Gets or sets if Bidi Text Supported OnUpdate.
     */
    public get isBidiTextSupportedOnUpdate(): boolean {
        return this._isBidiTextSupportedOnUpdate;
    }

    /**
     * Gets or sets if Bidi Text Supported OnUpdate.
     */
    public set isBidiTextSupportedOnUpdate(value: boolean) {
        this._isBidiTextSupportedOnUpdate = value;
    }


    /**
     * Gets or sets if Legacy Number Format.
     */
    protected _legacyNumberFormat: boolean;

    /**
     * Gets or sets if Legacy Number Format.
     */
    public get legacyNumberFormat(): boolean {
        return this._legacyNumberFormat;
    }

    /**
     * Gets or sets if Legacy Number Format.
     */
    public set legacyNumberFormat(value: boolean) {
        this._legacyNumberFormat = value;
    }


    /**
     * Gets or sets PreProcess Culture Name.
     * It is a culture code for DOC fields.
     */
    protected _preProcessCultureName: string;

    /**
     * Gets or sets PreProcess Culture Name.
     * It is a culture code for DOC fields.
     */
    public get preProcessCultureName(): string {
        return this._preProcessCultureName;
    }

    /**
     * Gets or sets PreProcess Culture Name.
     * It is a culture code for DOC fields.
     */
    public set preProcessCultureName(value: string) {
        this._preProcessCultureName = value;
    }


    /**
     * Gets or sets Template Name.
     */
    protected _templateName: string;

    /**
     * Gets or sets Template Name.
     */
    public get templateName(): string {
        return this._templateName;
    }

    /**
     * Gets or sets Template Name.
     */
    public set templateName(value: string) {
        this._templateName = value;
    }


    /**
     * Gets or sets if Use Invariant Culture Number Format.
     */
    protected _useInvariantCultureNumberFormat: boolean;

    /**
     * Gets or sets if Use Invariant Culture Number Format.
     */
    public get useInvariantCultureNumberFormat(): boolean {
        return this._useInvariantCultureNumberFormat;
    }

    /**
     * Gets or sets if Use Invariant Culture Number Format.
     */
    public set useInvariantCultureNumberFormat(value: boolean) {
        this._useInvariantCultureNumberFormat = value;
    }


    public constructor(init?: Partial< FieldOptions >) {
        Object.assign(this, init);
    }
}

/**
 * Enums for FieldOptions
 */
// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace FieldOptions {
    export enum FieldIndexFormatEnum {
        Template = 'Template' as any,
        Classic = 'Classic' as any,
        Fancy = 'Fancy' as any,
        Modern = 'Modern' as any,
        Bulleted = 'Bulleted' as any,
        Formal = 'Formal' as any,
        Simple = 'Simple' as any
    }

    export enum FieldUpdateCultureSourceEnum {
        CurrentThread = 'CurrentThread' as any,
        FieldCode = 'FieldCode' as any
    }
}
// tslint:enable:quotemark


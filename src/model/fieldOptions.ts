/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="fieldOptions.ts">
 *   Copyright (c) 2021 Aspose.Words for Cloud
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
    public builtInTemplatesPaths: Array<string>;

    /**
     * Gets or sets Curren tUser.
     */
    public currentUser: UserInformation;

    /**
     * Gets or sets Custom Toc Style Separator.
     */
    public customTocStyleSeparator: string;

    /**
     * Gets or sets Default Document Author.
     */
    public defaultDocumentAuthor: string;

    /**
     * Gets or sets Field Index Format.
     */
    public fieldIndexFormat: FieldOptions.FieldIndexFormatEnum;

    /**
     * Gets or sets Field Update Culture Source.
     */
    public fieldUpdateCultureSource: FieldOptions.FieldUpdateCultureSourceEnum;

    /**
     * Gets or sets File Name.
     */
    public fileName: string;

    /**
     * Gets or sets if Bidi Text Supported OnUpdate.
     */
    public isBidiTextSupportedOnUpdate: boolean;

    /**
     * Gets or sets if Legacy Number Format.
     */
    public legacyNumberFormat: boolean;

    /**
     * Gets or sets PreProcess Culture Name.
     */
    public preProcessCultureName: string;

    /**
     * Gets or sets Template Name.
     */
    public templateName: string;

    /**
     * Gets or sets if Use Invariant Culture Number Format.
     */
    public useInvariantCultureNumberFormat: boolean;

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


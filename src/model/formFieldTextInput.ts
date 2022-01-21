/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="formFieldTextInput.ts">
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
import { FormField } from './formField';

export const importsMapFormFieldTextInput = {
    FormField,
};

/**
 * FormField text input element.
 */
export class FormFieldTextInput extends FormField {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "maxLength",
            baseName: "MaxLength",
            type: "number",
        },
        {
            name: "textInputDefault",
            baseName: "TextInputDefault",
            type: "string",
        },
        {
            name: "textInputFormat",
            baseName: "TextInputFormat",
            type: "string",
        },
        {
            name: "textInputType",
            baseName: "TextInputType",
            type: "FormFieldTextInput.TextInputTypeEnum",
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(FormFieldTextInput.attributeTypeMap);
    }

    /**
     * Gets or sets the maximum length for the text field. Zero when the length is not limited.
     */
    protected _maxLength: number;

    /**
     * Gets or sets the maximum length for the text field. Zero when the length is not limited.
     */
    public get maxLength(): number {
        return this._maxLength;
    }

    /**
     * Gets or sets the maximum length for the text field. Zero when the length is not limited.
     */
    public set maxLength(value: number) {
        this._maxLength = value;
    }


    /**
     * Gets or sets the default string or a calculation expression of the text form field.
     */
    protected _textInputDefault: string;

    /**
     * Gets or sets the default string or a calculation expression of the text form field.
     */
    public get textInputDefault(): string {
        return this._textInputDefault;
    }

    /**
     * Gets or sets the default string or a calculation expression of the text form field.
     */
    public set textInputDefault(value: string) {
        this._textInputDefault = value;
    }


    /**
     * Gets or sets text formatting for the text form field.
     */
    protected _textInputFormat: string;

    /**
     * Gets or sets text formatting for the text form field.
     */
    public get textInputFormat(): string {
        return this._textInputFormat;
    }

    /**
     * Gets or sets text formatting for the text form field.
     */
    public set textInputFormat(value: string) {
        this._textInputFormat = value;
    }


    /**
     * Gets or sets the type of the text form field.
     */
    protected _textInputType: FormFieldTextInput.TextInputTypeEnum;

    /**
     * Gets or sets the type of the text form field.
     */
    public get textInputType(): FormFieldTextInput.TextInputTypeEnum {
        return this._textInputType;
    }

    /**
     * Gets or sets the type of the text form field.
     */
    public set textInputType(value: FormFieldTextInput.TextInputTypeEnum) {
        this._textInputType = value;
    }


    public constructor(init?: Partial< FormFieldTextInput >) {
        super(init);
        Object.assign(this, init);
    }
}

/**
 * Enums for FormFieldTextInput
 */
// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace FormFieldTextInput {
    export enum TextInputTypeEnum {
        Regular = 'Regular' as any,
        Number = 'Number' as any,
        Date = 'Date' as any,
        CurrentDate = 'CurrentDate' as any,
        CurrentTime = 'CurrentTime' as any,
        Calculated = 'Calculated' as any
    }
}
// tslint:enable:quotemark


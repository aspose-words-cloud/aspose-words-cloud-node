/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="formFieldTextInput.ts">
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
     * Gets or sets maximum length for the text field. Zero when the length is not limited.
     */
    public maxLength: number;

    /**
     * Gets or sets the default string or a calculation expression of a text form field.
     */
    public textInputDefault: string;

    /**
     * Gets or sets returns or sets the text formatting for a text form field.
     */
    public textInputFormat: string;

    /**
     * Gets or sets the type of a text form field.
     */
    public textInputType: FormFieldTextInput.TextInputTypeEnum;

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


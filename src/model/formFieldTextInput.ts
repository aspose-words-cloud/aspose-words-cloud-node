/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="formFieldTextInput.ts">
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
            name: "textInputFormat",
            baseName: "TextInputFormat",
            type: "string",
        },
        {
            name: "textInputType",
            baseName: "TextInputType",
            type: "FormFieldTextInput.TextInputTypeEnum",
        },
        {
            name: "textInputDefault",
            baseName: "TextInputDefault",
            type: "string",
        },
        {
            name: "maxLength",
            baseName: "MaxLength",
            type: "number",
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(FormFieldTextInput.attributeTypeMap);
    }

    /**
     * Gets or sets text formatting for the text form field.
     * If the text form field contains regular text, then valid format strings are "", "UPPERCASE", "LOWERCASE", "FIRST CAPITAL" and "TITLE CASE". The strings are case-insensitive.If the text form field contains a number or a date/time value, then valid format strings are number or date and time format strings.
     */
    public textInputFormat: string;

    /**
     * Gets or sets the type of the text form field.
     */
    public textInputType: FormFieldTextInput.TextInputTypeEnum;

    /**
     * Gets or sets the default string or a calculation expression of the text form field.
     * The meaning of this property depends on the value of the TextInputType property.When TextInputType is Regular or Number, this string specifies the default string for the text form field. This string is the content that Microsoft Word will display in the document when the form field is empty.When TextInputType is Calculated, then this string holds the expression to be calculated. The expression needs to be a formula valid according to Microsoft Word formula field requirements. When you set a new expression using this property, Aspose.Words calculates the formula result automatically and inserts it into the form field.
     */
    public textInputDefault: string;

    /**
     * Gets or sets the maximum length for the text field. Zero when the length is not limited.
     */
    public maxLength: number;

    public constructor(init?: Partial< FormFieldTextInput >) {
        super(init);
        Object.assign(this, init);
    }

    public collectFilesContent(_resultFilesContent: Array<any>) {
    }

    public validate() {
        super.validate();
        if (this.textInputFormat === null || this.textInputFormat === undefined)
        {
            throw new Error('Property TextInputFormat in FormFieldTextInput is required.');
        }
        if (this.textInputDefault === null || this.textInputDefault === undefined)
        {
            throw new Error('Property TextInputDefault in FormFieldTextInput is required.');
        }
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


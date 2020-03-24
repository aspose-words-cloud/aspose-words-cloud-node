/*
* MIT License

* Copyright (c) 2019 Aspose Pty Ltd

* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:

* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.

* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/
import { AttributeInfo } from '../internal/attributeInfo';
import { FormField } from './formField';

export const importsMapFormFieldCheckbox = {
    FormField,
};

/**
 * FormField checkbox element.
 */
export class FormFieldCheckbox extends FormField {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "checkBoxSize",
            baseName: "CheckBoxSize",
            type: "number",
        },        
        {
            name: "checked",
            baseName: "Checked",
            type: "boolean",
        },        
        {
            name: "isCheckBoxExactSize",
            baseName: "IsCheckBoxExactSize",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(FormFieldCheckbox.attributeTypeMap);
    }

    /**
     * Gets or sets the size of the checkbox in points. Has effect only when IsCheckBoxExactSize is true.
     */
    public checkBoxSize: number;
    
    /**
     * Gets or sets the checked status of the check box form field.
     */
    public checked: boolean;
    
    /**
     * Gets or sets the boolean value that indicates whether the size of the textbox is automatic or specified explicitly.
     */
    public isCheckBoxExactSize: boolean;
    
    public constructor(init?: Partial<FormFieldCheckbox>) {
        super(init);
        Object.assign(this, init);
    }        
}

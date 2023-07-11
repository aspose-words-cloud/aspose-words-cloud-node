/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="formField.ts">
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

export const importsMapFormField = {
    NodeLink,
};

/**
 * FromField.
 */
export class FormField extends NodeLink {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "name",
            baseName: "Name",
            type: "string",
        },
        {
            name: "enabled",
            baseName: "Enabled",
            type: "boolean",
        },
        {
            name: "statusText",
            baseName: "StatusText",
            type: "string",
        },
        {
            name: "ownStatus",
            baseName: "OwnStatus",
            type: "boolean",
        },
        {
            name: "helpText",
            baseName: "HelpText",
            type: "string",
        },
        {
            name: "ownHelp",
            baseName: "OwnHelp",
            type: "boolean",
        },
        {
            name: "calculateOnExit",
            baseName: "CalculateOnExit",
            type: "boolean",
        },
        {
            name: "entryMacro",
            baseName: "EntryMacro",
            type: "string",
        },
        {
            name: "exitMacro",
            baseName: "ExitMacro",
            type: "string",
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(FormField.attributeTypeMap);
    }

    /**
     * Gets or sets the form field name.
     */
    public name: string;

    /**
     * Gets or sets a value indicating whether a form field is enabled.
     */
    public enabled: boolean;

    /**
     * Gets or sets text, displayed in the status bar when a form field has the focus.
     */
    public statusText: string;

    /**
     * Gets or sets a value indicating whether the source of the text that's displayed in the status bar when a form field has the focus.
     */
    public ownStatus: boolean;

    /**
     * Gets or sets text, displayed in a message box when the form field has the focus and the user presses F1.
     */
    public helpText: string;

    /**
     * Gets or sets a value indicating whether the source of the text that's displayed in a message box when a form field has the focus and the user presses F1.
     */
    public ownHelp: boolean;

    /**
     * Gets or sets a value indicating whether references to the specified form field are automatically updated whenever the field is exited.
     */
    public calculateOnExit: boolean;

    /**
     * Gets or sets the entry macro name for the form field.
     */
    public entryMacro: string;

    /**
     * Gets or sets the exit macro name for the form field.
     */
    public exitMacro: string;

    public constructor(init?: Partial< FormField >) {
        super(init);
        Object.assign(this, init);
    }

    public collectFilesContent(_resultFilesContent: Array<any>) {
    }
}


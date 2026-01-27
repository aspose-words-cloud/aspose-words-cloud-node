/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="formField.ts">
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
import { NodeLink } from './nodeLink';

export const importsMapFormField = {
    NodeLink,
};

/**
 * FromField.
 */
export abstract class FormField extends NodeLink {
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
     * If a form field is enabled, its contents can be changed as the form is filled in.
     */
    public enabled: boolean;

    /**
     * Gets or sets text, displayed in the status bar when a form field has the focus.
     * If the OwnStatus property is set to true, the StatusText property specifies the status bar text. If the OwnStatus property is set to false, the StatusText property specifies the name of an AutoText entry that contains status bar text for the form field.
     */
    public statusText: string;

    /**
     * Gets or sets a value indicating whether the source of the text that's displayed in the status bar when a form field has the focus.
     * If true, the text specified by the StatusText property is displayed. If false, the text of the AutoText entry specified by the StatusText property is displayed.
     */
    public ownStatus: boolean;

    /**
     * Gets or sets text, displayed in a message box when the form field has the focus and the user presses F1.
     * If the OwnHelp property is set to True, HelpText specifies the text string value. If OwnHelp is set to False, HelpText specifies the name of an AutoText entry that contains help text for the form field.
     */
    public helpText: string;

    /**
     * Gets or sets a value indicating whether the source of the text that's displayed in a message box when a form field has the focus and the user presses F1.
     * If true, the text specified by the HelpText property is displayed. If False, the text in the AutoText entry specified by the HelpText property is displayed.
     */
    public ownHelp: boolean;

    /**
     * Gets or sets a value indicating whether references to the specified form field are automatically updated whenever the field is exited.
     * Setting CalculateOnExit only affects the behavior of the form field when the document is opened in Microsoft Word. Aspose.Words never updates references to the form field.
     */
    public calculateOnExit: boolean;

    /**
     * Gets or sets the entry macro name for the form field.
     * The entry macro runs when the form field gets the focus in Microsoft Word.
     */
    public entryMacro: string;

    /**
     * Gets or sets the exit macro name for the form field.
     * The exit macro runs when the form field loses the focus in Microsoft Word.
     */
    public exitMacro: string;

    public constructor(init?: Partial< FormField >) {
        super(init);
        Object.assign(this, init);
    }

    public collectFilesContent(_resultFilesContent: Array<any>) {
    }

    public validate() {
        super.validate();
        if (this.name === null || this.name === undefined)
        {
            throw new Error('Property Name in FormField is required.');
        }
    }
}


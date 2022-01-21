/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="formField.ts">
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
            name: "calculateOnExit",
            baseName: "CalculateOnExit",
            type: "boolean",
        },
        {
            name: "enabled",
            baseName: "Enabled",
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
        },
        {
            name: "helpText",
            baseName: "HelpText",
            type: "string",
        },
        {
            name: "name",
            baseName: "Name",
            type: "string",
        },
        {
            name: "ownHelp",
            baseName: "OwnHelp",
            type: "boolean",
        },
        {
            name: "ownStatus",
            baseName: "OwnStatus",
            type: "boolean",
        },
        {
            name: "statusText",
            baseName: "StatusText",
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
     * Gets or sets a value indicating whether references to the specified form field are automatically updated whenever the field is exited.
     */
    protected _calculateOnExit: boolean;

    /**
     * Gets or sets a value indicating whether references to the specified form field are automatically updated whenever the field is exited.
     */
    public get calculateOnExit(): boolean {
        return this._calculateOnExit;
    }

    /**
     * Gets or sets a value indicating whether references to the specified form field are automatically updated whenever the field is exited.
     */
    public set calculateOnExit(value: boolean) {
        this._calculateOnExit = value;
    }


    /**
     * Gets or sets a value indicating whether a form field is enabled.
     */
    protected _enabled: boolean;

    /**
     * Gets or sets a value indicating whether a form field is enabled.
     */
    public get enabled(): boolean {
        return this._enabled;
    }

    /**
     * Gets or sets a value indicating whether a form field is enabled.
     */
    public set enabled(value: boolean) {
        this._enabled = value;
    }


    /**
     * Gets or sets the entry macro name for the form field.
     */
    protected _entryMacro: string;

    /**
     * Gets or sets the entry macro name for the form field.
     */
    public get entryMacro(): string {
        return this._entryMacro;
    }

    /**
     * Gets or sets the entry macro name for the form field.
     */
    public set entryMacro(value: string) {
        this._entryMacro = value;
    }


    /**
     * Gets or sets the exit macro name for the form field.
     */
    protected _exitMacro: string;

    /**
     * Gets or sets the exit macro name for the form field.
     */
    public get exitMacro(): string {
        return this._exitMacro;
    }

    /**
     * Gets or sets the exit macro name for the form field.
     */
    public set exitMacro(value: string) {
        this._exitMacro = value;
    }


    /**
     * Gets or sets text, displayed in a message box when the form field has the focus and the user presses F1.
     */
    protected _helpText: string;

    /**
     * Gets or sets text, displayed in a message box when the form field has the focus and the user presses F1.
     */
    public get helpText(): string {
        return this._helpText;
    }

    /**
     * Gets or sets text, displayed in a message box when the form field has the focus and the user presses F1.
     */
    public set helpText(value: string) {
        this._helpText = value;
    }


    /**
     * Gets or sets the form field name.
     */
    protected _name: string;

    /**
     * Gets or sets the form field name.
     */
    public get name(): string {
        return this._name;
    }

    /**
     * Gets or sets the form field name.
     */
    public set name(value: string) {
        this._name = value;
    }


    /**
     * Gets or sets a value indicating whether the source of the text that's displayed in a message box when a form field has the focus and the user presses F1.
     */
    protected _ownHelp: boolean;

    /**
     * Gets or sets a value indicating whether the source of the text that's displayed in a message box when a form field has the focus and the user presses F1.
     */
    public get ownHelp(): boolean {
        return this._ownHelp;
    }

    /**
     * Gets or sets a value indicating whether the source of the text that's displayed in a message box when a form field has the focus and the user presses F1.
     */
    public set ownHelp(value: boolean) {
        this._ownHelp = value;
    }


    /**
     * Gets or sets a value indicating whether the source of the text that's displayed in the status bar when a form field has the focus.
     */
    protected _ownStatus: boolean;

    /**
     * Gets or sets a value indicating whether the source of the text that's displayed in the status bar when a form field has the focus.
     */
    public get ownStatus(): boolean {
        return this._ownStatus;
    }

    /**
     * Gets or sets a value indicating whether the source of the text that's displayed in the status bar when a form field has the focus.
     */
    public set ownStatus(value: boolean) {
        this._ownStatus = value;
    }


    /**
     * Gets or sets text, displayed in the status bar when a form field has the focus.
     */
    protected _statusText: string;

    /**
     * Gets or sets text, displayed in the status bar when a form field has the focus.
     */
    public get statusText(): string {
        return this._statusText;
    }

    /**
     * Gets or sets text, displayed in the status bar when a form field has the focus.
     */
    public set statusText(value: string) {
        this._statusText = value;
    }


    public constructor(init?: Partial< FormField >) {
        super(init);
        Object.assign(this, init);
    }
}


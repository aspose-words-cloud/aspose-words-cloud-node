/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="protectionData.ts">
 *   Copyright (c) 2024 Aspose.Words for Cloud
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

export const importsMapProtectionData = {
};

/**
 * Container for the data about protection of the document.
 */
export class ProtectionData implements ModelInterface {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "protectionType",
            baseName: "ProtectionType",
            type: "ProtectionData.ProtectionTypeEnum",
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ProtectionData.attributeTypeMap;
    }

    /**
     * Gets or sets type of the protection.
     */
    public protectionType: ProtectionData.ProtectionTypeEnum;

    public constructor(init?: Partial< ProtectionData >) {
        Object.assign(this, init);
    }

    public collectFilesContent(_resultFilesContent: Array<any>) {
    }

    public validate() {
        if (this.protectionType === null || this.protectionType === undefined)
        {
            throw new Error('Property ProtectionType in ProtectionData is required.');
        }
    }
}

/**
 * Enums for ProtectionData
 */
// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace ProtectionData {
    export enum ProtectionTypeEnum {
        AllowOnlyRevisions = 'AllowOnlyRevisions' as any,
        AllowOnlyComments = 'AllowOnlyComments' as any,
        AllowOnlyFormFields = 'AllowOnlyFormFields' as any,
        ReadOnly = 'ReadOnly' as any,
        NoProtection = 'NoProtection' as any
    }
}
// tslint:enable:quotemark


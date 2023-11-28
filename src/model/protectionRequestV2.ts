/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="protectionRequestV2.ts">
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
import { ProtectionRequestBase } from './protectionRequestBase';

export const importsMapProtectionRequestV2 = {
    ProtectionRequestBase,
};

/**
 * Request on changing of protection.
 */
export class ProtectionRequestV2 extends ProtectionRequestBase {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "protectionPassword",
            baseName: "ProtectionPassword",
            type: "string",
        },
        {
            name: "protectionType",
            baseName: "ProtectionType",
            type: "ProtectionRequestV2.ProtectionTypeEnum",
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ProtectionRequestV2.attributeTypeMap);
    }

    /**
     * Gets or sets the new password for the document protection.
     * This property is required, but empty value is allowed.
     */
    public protectionPassword: string;

    /**
     * Gets or sets the new type of the document protection.
     */
    public protectionType: ProtectionRequestV2.ProtectionTypeEnum;

    public constructor(init?: Partial< ProtectionRequestV2 >) {
        super(init);
        Object.assign(this, init);
    }

    public collectFilesContent(_resultFilesContent: Array<any>) {
    }

    public validate() {
        super.validate();
        if (this.protectionPassword === null || this.protectionPassword === undefined)
        {
            throw new Error('Property ProtectionPassword in ProtectionRequestV2 is required.');
        }
        if (this.protectionType === null || this.protectionType === undefined)
        {
            throw new Error('Property ProtectionType in ProtectionRequestV2 is required.');
        }
    }
}

/**
 * Enums for ProtectionRequestV2
 */
// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace ProtectionRequestV2 {
    export enum ProtectionTypeEnum {
        AllowOnlyRevisions = 'AllowOnlyRevisions' as any,
        AllowOnlyComments = 'AllowOnlyComments' as any,
        AllowOnlyFormFields = 'AllowOnlyFormFields' as any,
        ReadOnly = 'ReadOnly' as any,
        NoProtection = 'NoProtection' as any
    }
}
// tslint:enable:quotemark


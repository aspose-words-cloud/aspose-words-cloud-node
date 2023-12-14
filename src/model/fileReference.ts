/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="fileReference.ts">
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
import { v4 as uuidv4 } from 'uuid';
import { Readable } from "stream";
import { Encryptor } from '../api';

export const importsMapFileReference = {
};

export class FileReference implements ModelInterface {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "source",
            baseName: "Source",
            type: "FileReference.SourceEnum",
        },
        {
            name: "reference",
            baseName: "Reference",
            type: "string",
        },
        {
            name: "password",
            baseName: "Password",
            type: "string",
        },
        {
            name: "encryptedPassword",
            baseName: "EncryptedPassword",
            type: "string",
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return FileReference.attributeTypeMap;
    }

    private source: FileReference.SourceEnum;
    private reference: string;
    private password: string;
    private encryptedPassword: string;
    private content: Readable;

    private constructor(source: FileReference.SourceEnum, reference: string, content: Readable, password: string) {
        this.source = source;
        this.reference = reference;
        this.content = content;
        this.password = password;
        this.encryptedPassword = null;
    }

    public collectFilesContent(_resultFilesContent: Array<any>) {
        _resultFilesContent.push(this);
    }

    public async encryptPassword(encryptor: Encryptor) : Promise<void> {
        if (this.password !== null && this.password !== undefined) {
            this.encryptedPassword = await encryptor.encrypt(this.password);
            this.password = null;
        }
    }

    public validate() {
        // Do nothing
    }

    public getSource() {
        return this.source;
    }

    public getReference() {
        return this.reference;
    }

    public getContent() {
        return this.content;
    }

    static fromRemoteFilePath(remoteFilePath: string, password: string = null): FileReference {
        return new FileReference(FileReference.SourceEnum.Storage, remoteFilePath, null, password);
    }

    static fromLocalFileContent(localFileContent: Readable, password: string = null): FileReference {
        return new FileReference(FileReference.SourceEnum.Request, uuidv4(), localFileContent, password);
    }
}

export namespace FileReference {
    export enum SourceEnum {
        Storage = 'Storage' as any,
        Request = 'Request' as any
    }
}

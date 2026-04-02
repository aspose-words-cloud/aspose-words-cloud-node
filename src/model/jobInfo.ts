/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="jobInfo.ts">
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

export const importsMapJobInfo = {
};

/**
 * The REST response with a job result.
 */
export class JobInfo implements ModelInterface {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "jobId",
            baseName: "JobId",
            type: "string",
        },
        {
            name: "message",
            baseName: "Message",
            type: "string",
        },
        {
            name: "status",
            baseName: "Status",
            type: "JobInfo.StatusEnum",
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return JobInfo.attributeTypeMap;
    }

    /**
     * Gets or sets the job id.
     */
    public jobId: string;

    /**
     * Gets or sets the job message.
     */
    public message: string;

    /**
     * Gets or sets the job status.
     */
    public status: JobInfo.StatusEnum;

    public constructor(init?: Partial< JobInfo >) {
        Object.assign(this, init);
    }

    public collectFilesContent(_resultFilesContent: Array<any>) {
    }

    public validate() {
        if (this.status === null || this.status === undefined)
        {
            throw new Error('Property Status in JobInfo is required.');
        }
    }
}

/**
 * Enums for JobInfo
 */
// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace JobInfo {
    export enum StatusEnum {
        Unknown = 'Unknown' as any,
        Queued = 'Queued' as any,
        Processing = 'Processing' as any,
        Succeded = 'Succeded' as any,
        Failed = 'Failed' as any
    }
}
// tslint:enable:quotemark


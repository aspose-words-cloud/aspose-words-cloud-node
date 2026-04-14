/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="jobHandler.ts">
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

import * as model from "./model/model";
import { WordsApi } from "./api";
import { callJobResult, deserializeHttpResponsePart } from "./internal/requestHelper";

export class JobHandler<T> {
    private readonly api: WordsApi;
    private readonly request: model.RequestInterface;
    private info: model.JobInfo;
    private resolvedResult: T;

    public constructor(api: WordsApi, request: model.RequestInterface, info: model.JobInfo) {
        this.api = api;
        this.request = request;
        this.info = info;
    }

    public get status(): string {
        return this.info?.status !== undefined && this.info?.status !== null ? String(this.info.status) : "";
    }

    public get message(): string {
        return this.info?.message || "";
    }

    public get result(): T {
        return this.resolvedResult;
    }

    public async update(): Promise<T> {
        if (!this.info?.jobId) {
            throw new Error("Invalid job id.");
        }

        const parts = await callJobResult(this.api.configuration, this.info.jobId);
        if (parts.length >= 1) {
            this.info = model.deserializeObject(parts[0].body.toString("utf8"), "JobInfo");

            if (parts.length >= 2 && this.isSucceeded()) {
                this.resolvedResult = deserializeHttpResponsePart<T>(this.request, parts[1]);
            }
        }

        return this.resolvedResult;
    }

    public async waitResult(updateIntervalMs: number = 3000): Promise<T> {
        while (this.isQueued() || this.isProcessing()) {
            await this.delay(updateIntervalMs);
            await this.update();
        }

        if (this.isSucceeded() && this.resolvedResult === undefined) {
            await this.update();
        }

        if (!this.isSucceeded()) {
            throw new Error(`Job failed with status "${this.status}" - "${this.message}".`);
        }

        return this.resolvedResult as T;
    }

    private isQueued(): boolean {
        return this.status.toLowerCase() === "queued";
    }

    private isProcessing(): boolean {
        return this.status.toLowerCase() === "processing";
    }

    private isSucceeded(): boolean {
        const status = this.status.toLowerCase();
        return status === "succeded" || status === "succeeded";
    }

    private async delay(timeoutMs: number): Promise<void> {
        return new Promise((resolve) => setTimeout(resolve, timeoutMs));
    }
}
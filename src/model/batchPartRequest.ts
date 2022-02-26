/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="batchPartRequest.ts">
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

import http = require("http");
import { Readable } from 'stream';
import request = require('request');
import RSA = require('node-rsa');
import { Configuration } from "../internal/configuration";
import { RequestInterface } from './model';
import { v4 as uuidv4 } from 'uuid';
import { Encryptor } from '../api';

/**
 * BatchPartRequest class
 */
export class BatchPartRequest {

    private innerRequest: RequestInterface;

    /**
     *  Request ID
     */
    id: string;

    /**
     *  Parentn Request Id
     */
    parentId: string;

    public constructor(requestObj: RequestInterface) {
        this.id = uuidv4();
        this.parentId = "";
        this.innerRequest = requestObj;
    }    

	/**
	 * set parent request
	 * @param parentRequest
	 */
    public dependsOn(parentRequest: BatchPartRequest) {
        this.parentId = parentRequest.id;
    }

	/**
	 * create the requst options for this request
	 * @param configuration a configuration for the request
	 * @param data encryptor     
	 */
	public async createRequestOptions(configuration: Configuration, encryptor: Encryptor) : Promise<request.OptionsWithUri> {
        return this.innerRequest.createRequestOptions(configuration, encryptor);
    }

	/**
	 * create response from string
	 */
	createResponse(_response: Buffer, _headers: http.IncomingHttpHeaders): any {
        return this.innerRequest.createResponse(_response, _headers);
    }

	/**
	 * create resultOf stream
	 */
	public useAsSource(): Readable {
        return Readable.from(Buffer.from("resultOf(" + this.id + ")"));
    }
}

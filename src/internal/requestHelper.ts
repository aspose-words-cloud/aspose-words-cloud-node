/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="requestHelper.ts">
 *   Copyright (c) 2025 Aspose.Words for Cloud
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
import request = require("request");
import requestDebug = require("request-debug");
import { Configuration } from "./configuration";
import { ObjectSerializer } from "./objectSerializer";
import { Encryptor } from "../api";

/**
 * Get boundary for IncomingHttpHeaders
 */
export function getBoundary(headers: http.IncomingHttpHeaders): string {
    return parseContentType(headers["content-type"]);
}

/**
 * Get boundary for headers dictionary
 */
export function getPartBoundary(headers: {[key: string]: string}): string {
    return parseContentType(headers['content-type']);
}

/**
 * Get boundary value from content-type header
 */
function parseContentType(contentType: string) : string {
    return contentType.split(" ")[1].split("=")[1].slice(1, -1);
}

/**
 * Invoke api method
 * @param requestOptions request parameters
 * @param confguration api configuration
 * @param notApplyAuthToRequest if setted to true, auth is not applied to request
 */
export async function invokeApiMethod(requestOptions: request.OptionsWithUri, confguration: Configuration, notApplyAuthToRequest?: boolean): Promise<request.RequestResponse> {
    try {
        return await invokeApiMethodInternal(requestOptions, confguration, notApplyAuthToRequest);
    } catch (e) {
        if (e instanceof NeedRepeatException) {
            try {
                return await invokeApiMethodInternal(requestOptions, confguration, notApplyAuthToRequest);
            }
            catch(re) {
                if (re instanceof NeedRepeatException) {
                    throw new Error("Authorization failed")
                }

                throw re
            }
        }

        throw e;
    }
}

/**
 * Add parameter to query
 * @param url url
 * @param queryParameters queryParameters
 * @param parameterName parameterName
 * @param parameterValue parameterValue
 * @param data encryptor
 */
export async function addQueryParameterToUrl(url, queryParameters, parameterName, parameterValue, encryptor: Encryptor) : Promise<string> {
    if (parameterValue !== undefined) {
        if (parameterName === "password")
        {
            parameterName = "encryptedPassword";
            parameterValue = await encryptor.encrypt(parameterValue);
        }

        if (url.indexOf("{" + parameterName + "}") >= 0) {
            url = url.replace("{" + parameterName + "}", String(parameterValue));
        } else {
            queryParameters[parameterName] = String(parameterValue);
        }
    } else {
        url = url.replace("/{" + parameterName + "}", "");
    }

    return Promise.resolve(url);
}

/**
 * Invoke api method
 * @param requestOptions request parameters
 * @param confguration api configuration
 * @param notApplyAuthToRequest if setted to true, auth is not applied to request
 */
async function invokeApiMethodInternal(requestOptions: request.OptionsWithUri, confguration: Configuration, notApplyAuthToRequest?: boolean): Promise<request.RequestResponse> {
    requestDebug(request, (type, data, r) => {
        if (r.writeDebugToConsole) {
            const toLog = {};
            toLog[type] = data;
            // tslint:disable-next-line:no-console
            console.log(JSON.stringify(toLog, undefined, 2));
        }
    });

    if (!requestOptions.headers) {
        requestOptions.headers = {};
    }

    requestOptions.timeout = 1000 * confguration.timeout;

    requestOptions.headers["x-aspose-client"] = "nodejs sdk";
    requestOptions.headers["x-aspose-client-version"] = "25.2";
    requestOptions.encoding = null;

	requestOptions.uri = encodeURI(requestOptions.uri.toString());

    const auth = confguration.authentication;
    if (!notApplyAuthToRequest) {
        try {
            await auth.applyToRequest(requestOptions, confguration);
        } catch (error) {
            throw new Error("Authorization failed")
        }
    }

    return new Promise<request.RequestResponse>((resolve, reject) => {
        const r = request(requestOptions, async (error, response) => {
            if (error) {
                reject(error);
            } else {
                if (response.statusCode >= 200 && response.statusCode <= 299) {
                    if (response.body != null && (typeof response.body === 'string' || response.body instanceof String)) {
                        response.body = Buffer.from(response.body);
                    }
                    resolve(response);
                } else if (response.statusCode === 401 && !notApplyAuthToRequest) {
                    try {
                        await auth.handle401response(confguration);
                        reject(new NeedRepeatException());
                    } catch (error) {
                        reject({ message: "Error while getting token: " + error });
                    }
                } else {
                    try {
                        let bodyContent = response.body;
                        if (bodyContent instanceof Buffer) {
                            bodyContent = JSON.parse(bodyContent.toString("utf8"));
                        }

                        const data = ObjectSerializer.deserialize(bodyContent, "WordsApiErrorResponse");
                        reject({ response, body: data });
                    } catch (error) {
                        reject({ message: "Error while parse server error: " + error });
                    }

                }
            }
        });

        (r as any).writeDebugToConsole = confguration.debugMode;
    });
}

/**
 * Parse multipart response body for given boundary
 */
export function parseMultipart(body: Buffer, boundary: string): any {
    const allParts = [];

    let partHeaders = [];
    let buffer = [];

    const UNKNOWN = 0;
    const PART_HEADERS = 1;
    const CONTENT = 4;
    const PART_END = 5;

    let state = UNKNOWN; 
	let lastline = '';

	for (let i = 0; i < body.length; i++) {
		const oneByte = body[i];
		const prevByte = i > 0 ? body[i-1] : null;
		const newLineDetected = ((oneByte === 0x0a) && (prevByte === 0x0d)) ? true : false;
		const newLineChar = ((oneByte === 0x0a) || (oneByte === 0x0d)) ? true : false;

		if(!newLineChar)
			lastline += String.fromCharCode(oneByte);

		if((UNKNOWN === state) && newLineDetected){
			if(("--"+boundary) === lastline){
				state = PART_HEADERS;
                lastline = '';
			};
		} else
        if((PART_HEADERS === state) && newLineDetected){
            if (lastline !== '') {
                partHeaders.push(lastline);
            }
            else {
                state = CONTENT;
            }
            lastline = '';
        } else  
		if(CONTENT === state){
			if(lastline.length > (boundary.length+4)) lastline='';
			if(((("--" + boundary) === lastline))){              
                const part = { 
                    headers: partHeaders.reduce((headers, header) => {
                        if (header.indexOf(':') !== -1) {
                            const [ key, value ] = header.split(/:\s+/)
                            headers[key.toLowerCase()] = value
                        }
                        return headers
                        }, {}),
                    body: Buffer.from(buffer.slice(0,buffer.length - lastline.length - 1))
                };

				allParts.push(part);

				buffer = []; lastline = ''; state = PART_END; partHeaders = [];
			} else {
				buffer.push(oneByte);
			}
			if(newLineDetected) lastline='';
		} else
		if(PART_END === state){
			if(newLineDetected)
				state = PART_HEADERS;
		}
	}
	return allParts;
}

/**
 * Parse multipart response body for batch part
 */
export function parseBatchParts(multipartBodyBuffer: Buffer, boundary: string, withStatus: boolean): any {
    const allParts = [];

    let partHeaders = [];
	let info = ''; 
    let buffer = [];

    const UNKNOWN = 0;
    const PART_HEADERS = 1;
    const STATUS = 2;
    const CONTENT_HEADERS = 3;
    const CONTENT = 4;
    const PART_END = 5;

    let state = UNKNOWN; 
	let lastline = '';

	for (let i = 0; i < multipartBodyBuffer.length; i++) {
		const oneByte = multipartBodyBuffer[i];
		const prevByte = i > 0 ? multipartBodyBuffer[i-1] : null;
		const newLineDetected = ((oneByte === 0x0a) && (prevByte === 0x0d)) ? true : false;
		const newLineChar = ((oneByte === 0x0a) || (oneByte === 0x0d)) ? true : false;

		if(!newLineChar)
			lastline += String.fromCharCode(oneByte);

		if((UNKNOWN === state) && newLineDetected){
			if(("--"+boundary) === lastline){
				state = PART_HEADERS;
                lastline = '';
			};
		} else
        if((PART_HEADERS === state) && newLineDetected){
            if(lastline === '') {
                state = withStatus ? STATUS : CONTENT;
            }
            lastline = '';
        } else  
		if((STATUS === state) && newLineDetected){
			info = lastline;
			lastline = '';
            state = CONTENT_HEADERS;
		} else
        if ((CONTENT_HEADERS === state) && newLineDetected) {
            if(lastline === '') {
                state = CONTENT;
            } else {
                partHeaders.push(lastline);
            }
            lastline = '';
        } else
		if(CONTENT === state){
			if(lastline.length > (boundary.length+4)) lastline='';
			if(((("--" + boundary) === lastline))){              
                const part = { 
                    code: withStatus ? parseInt(info, 10) : 0, 
                    headers: partHeaders.reduce((headers, header) => {
                        if (header.indexOf(':') !== -1) {
                            const [ key, value ] = header.split(/:\s+/)
                            headers[key.toLowerCase()] = value
                        }
                        return headers
                        }, {}),
                    body: Buffer.from(buffer.slice(0,buffer.length - lastline.length - 1))
                };

				allParts.push(part);

				buffer = []; lastline = ''; state = PART_END; partHeaders = []; info = '';
			} else {
				buffer.push(oneByte);
			}
			if(newLineDetected) lastline='';
		} else
		if(PART_END === state){
			if(newLineDetected)
				state = PART_HEADERS;
		}
	}
	return allParts;
}

/**
 * Get multipart part by name
 */
export function findMultipartElement(parts: any[], name: string): any {
    for (const part of parts) {
        const disp = part.headers['content-disposition'];
        const subs = disp.split(';');
        let subn = null;
        subs.forEach(element => {
            if (element.trim().startsWith("name=")) {
                subn = element.trim().substr(5).replace(new RegExp('"', 'g'), '');
            }
        });
        if (subn === name) {
            return part;
        }
    }

    return null;
}

/**
 * Get files collection from Response
 */
export function parseFilesCollection(response: Buffer, headers: http.IncomingHttpHeaders): Map<string, Buffer> {
    const result = new Map<string, Buffer>();
    if (headers["content-type"]?.startsWith("multipart/mixed")) {
        const boundary = getBoundary(headers);
        const parts = parseMultipart(response, boundary);
        for (const part of parts) {
            const disp = part.headers['content-disposition'];
            const subs = disp.split(';');
            let filename = null;
            subs.forEach(element => {
                if (element.trim().startsWith("filename=")) {
                    filename = element.trim().substr(9).replace(new RegExp('"', 'g'), '');
                }
            });
            result.set(filename, part.body);
        };
    }
    else {
        result.set("", response);
    }

    return result;
}

/**
 * Exception, indicating necessity of request repeat
 */
class NeedRepeatException extends Error {
}

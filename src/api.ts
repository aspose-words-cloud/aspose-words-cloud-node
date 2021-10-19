/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="api.ts">
 *   Copyright (c) 2021 Aspose.Words for Cloud
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
import { Readable } from 'stream';
import FormData = require("form-data");
import RSA = require('node-rsa');

import { Configuration } from "./internal/configuration";
import { invokeApiMethod, getBoundary, parseMultipartBody } from "./internal/requestHelper";
import { ObjectSerializer } from "./internal/objectSerializer";
import * as model from "./model/model";
import { BatchPartRequest } from "./model/batchPartRequest";

export * from "./model/model";
export * from "./model/batchPartRequest";

/**
 * Library for communicating with the Aspose.Words for Cloud API
 */
export class WordsApi {
    /**
     * API configuration
     */
    public configuration: Configuration;

    private key: RSA;

    /**
     * @param clientId.
     * @param clientSecret.
     * @param baseUrl Base api Url.
     * @param debugMode A value indicating whether debug mode. In debug mode all requests and responses are logged to console.
     */
    constructor(clientId: string, clientSecret: string, baseUrl?: string, debugMode?: boolean) {
        this.configuration = new Configuration(clientId, clientSecret, baseUrl, debugMode);

        this.getPublicKey(new model.GetPublicKeyRequest({}))
            .then((resultApi) => {
                this.key = new RSA();
                this.key.importKey({
                    n: Buffer.from(resultApi.body.modulus, "base64"),
                    e: Buffer.from(resultApi.body.exponent, "base64")
                }, 'components-public');
                this.key.setOptions({
                    encryptionScheme: 'pkcs1'
                });
            });
    }

    /**
     * Accepts all revisions in the document.
     * @param requestObj contains request parameters
     */
    public async acceptAllRevisions(requestObj: model.AcceptAllRevisionsRequest): Promise< model.WordsIncomingMessage< model.RevisionsModificationResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling acceptAllRevisions.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.RevisionsModificationResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Accepts all revisions in the document.
     * @param requestObj contains request parameters
     */
    public async acceptAllRevisionsOnline(requestObj: model.AcceptAllRevisionsOnlineRequest): Promise< model.WordsIncomingMessage< model.AcceptAllRevisionsOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling acceptAllRevisionsOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.AcceptAllRevisionsOnlineResponse >();
        result.response = response;
        result.body = requestObj.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Appends documents to the original document.
     * @param requestObj contains request parameters
     */
    public async appendDocument(requestObj: model.AppendDocumentRequest): Promise< model.WordsIncomingMessage< model.DocumentResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling appendDocument.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.DocumentResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Appends documents to the original document.
     * @param requestObj contains request parameters
     */
    public async appendDocumentOnline(requestObj: model.AppendDocumentOnlineRequest): Promise< model.WordsIncomingMessage< model.AppendDocumentOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling appendDocumentOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.AppendDocumentOnlineResponse >();
        result.response = response;
        result.body = requestObj.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Applies a style to the document node.
     * @param requestObj contains request parameters
     */
    public async applyStyleToDocumentElement(requestObj: model.ApplyStyleToDocumentElementRequest): Promise< model.WordsIncomingMessage< model.WordsResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling applyStyleToDocumentElement.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.WordsResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Applies a style to the document node.
     * @param requestObj contains request parameters
     */
    public async applyStyleToDocumentElementOnline(requestObj: model.ApplyStyleToDocumentElementOnlineRequest): Promise< model.WordsIncomingMessage< model.ApplyStyleToDocumentElementOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling applyStyleToDocumentElementOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.ApplyStyleToDocumentElementOnlineResponse >();
        result.response = response;
        result.body = requestObj.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Executes the report generation process using the specified document template and the external data source in XML, JSON or CSV format.
     * @param requestObj contains request parameters
     */
    public async buildReport(requestObj: model.BuildReportRequest): Promise< model.WordsIncomingMessage< model.DocumentResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling buildReport.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.DocumentResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Executes the report generation process online using the specified document template and the external data source in XML, JSON or CSV format.
     * @param requestObj contains request parameters
     */
    public async buildReportOnline(requestObj: model.BuildReportOnlineRequest): Promise< model.WordsIncomingMessage< Buffer > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling buildReportOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< Buffer >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Runs a multi-class text classification for the specified raw text.
     * @param requestObj contains request parameters
     */
    public async classify(requestObj: model.ClassifyRequest): Promise< model.WordsIncomingMessage< model.ClassificationResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling classify.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.ClassificationResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Runs a multi-class text classification for the document.
     * @param requestObj contains request parameters
     */
    public async classifyDocument(requestObj: model.ClassifyDocumentRequest): Promise< model.WordsIncomingMessage< model.ClassificationResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling classifyDocument.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.ClassificationResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Runs a multi-class text classification for the document.
     * @param requestObj contains request parameters
     */
    public async classifyDocumentOnline(requestObj: model.ClassifyDocumentOnlineRequest): Promise< model.WordsIncomingMessage< model.ClassificationResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling classifyDocumentOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.ClassificationResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Compares two documents.
     * @param requestObj contains request parameters
     */
    public async compareDocument(requestObj: model.CompareDocumentRequest): Promise< model.WordsIncomingMessage< model.DocumentResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling compareDocument.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.DocumentResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Compares two documents.
     * @param requestObj contains request parameters
     */
    public async compareDocumentOnline(requestObj: model.CompareDocumentOnlineRequest): Promise< model.WordsIncomingMessage< model.CompareDocumentOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling compareDocumentOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.CompareDocumentOnlineResponse >();
        result.response = response;
        result.body = requestObj.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Converts a document on a local drive to the specified format.
     * @param requestObj contains request parameters
     */
    public async convertDocument(requestObj: model.ConvertDocumentRequest): Promise< model.WordsIncomingMessage< Buffer > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling convertDocument.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< Buffer >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Copy file.
     * @param requestObj contains request parameters
     */
    public async copyFile(requestObj: model.CopyFileRequest): Promise< http.IncomingMessage > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling copyFile.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Copy folder.
     * @param requestObj contains request parameters
     */
    public async copyFolder(requestObj: model.CopyFolderRequest): Promise< http.IncomingMessage > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling copyFolder.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Makes a copy of the style in the document.
     * @param requestObj contains request parameters
     */
    public async copyStyle(requestObj: model.CopyStyleRequest): Promise< model.WordsIncomingMessage< model.StyleResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling copyStyle.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.StyleResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Makes a copy of the style in the document.
     * @param requestObj contains request parameters
     */
    public async copyStyleOnline(requestObj: model.CopyStyleOnlineRequest): Promise< model.WordsIncomingMessage< model.CopyStyleOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling copyStyleOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.CopyStyleOnlineResponse >();
        result.response = response;
        result.body = requestObj.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Supported extensions: ".doc", ".docx", ".docm", ".dot", ".dotm", ".dotx", ".flatopc", ".fopc", ".flatopc_macro", ".fopc_macro", ".flatopc_template", ".fopc_template", ".flatopc_template_macro", ".fopc_template_macro", ".wordml", ".wml", ".rtf".
     * @param requestObj contains request parameters
     */
    public async createDocument(requestObj: model.CreateDocumentRequest): Promise< model.WordsIncomingMessage< model.DocumentResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling createDocument.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.DocumentResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Create the folder.
     * @param requestObj contains request parameters
     */
    public async createFolder(requestObj: model.CreateFolderRequest): Promise< http.IncomingMessage > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling createFolder.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Adds a new or updates an existing document property.
     * @param requestObj contains request parameters
     */
    public async createOrUpdateDocumentProperty(requestObj: model.CreateOrUpdateDocumentPropertyRequest): Promise< model.WordsIncomingMessage< model.DocumentPropertyResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling createOrUpdateDocumentProperty.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.DocumentPropertyResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Adds a new or updates an existing document property.
     * @param requestObj contains request parameters
     */
    public async createOrUpdateDocumentPropertyOnline(requestObj: model.CreateOrUpdateDocumentPropertyOnlineRequest): Promise< model.WordsIncomingMessage< model.CreateOrUpdateDocumentPropertyOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling createOrUpdateDocumentPropertyOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.CreateOrUpdateDocumentPropertyOnlineResponse >();
        result.response = response;
        result.body = requestObj.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Removes paragraph tab stops from the document node.
     * @param requestObj contains request parameters
     */
    public async deleteAllParagraphTabStops(requestObj: model.DeleteAllParagraphTabStopsRequest): Promise< model.WordsIncomingMessage< model.TabStopsResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteAllParagraphTabStops.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.TabStopsResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Removes paragraph tab stops from the document node.
     * @param requestObj contains request parameters
     */
    public async deleteAllParagraphTabStopsOnline(requestObj: model.DeleteAllParagraphTabStopsOnlineRequest): Promise< model.WordsIncomingMessage< model.DeleteAllParagraphTabStopsOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteAllParagraphTabStopsOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.DeleteAllParagraphTabStopsOnlineResponse >();
        result.response = response;
        result.body = requestObj.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * The 'nodePath' parameter should refer to a paragraph, a cell or a row.
     * @param requestObj contains request parameters
     */
    public async deleteBorder(requestObj: model.DeleteBorderRequest): Promise< model.WordsIncomingMessage< model.BorderResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteBorder.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.BorderResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Removes a border from the document node.
     * @param requestObj contains request parameters
     */
    public async deleteBorderOnline(requestObj: model.DeleteBorderOnlineRequest): Promise< model.WordsIncomingMessage< model.DeleteBorderOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteBorderOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.DeleteBorderOnlineResponse >();
        result.response = response;
        result.body = requestObj.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * The 'nodePath' parameter should refer to a paragraph, a cell or a row.
     * @param requestObj contains request parameters
     */
    public async deleteBorders(requestObj: model.DeleteBordersRequest): Promise< model.WordsIncomingMessage< model.BordersResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteBorders.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.BordersResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Removes borders from the document node.
     * @param requestObj contains request parameters
     */
    public async deleteBordersOnline(requestObj: model.DeleteBordersOnlineRequest): Promise< model.WordsIncomingMessage< model.DeleteBordersOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteBordersOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.DeleteBordersOnlineResponse >();
        result.response = response;
        result.body = requestObj.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Removes a comment from the document.
     * @param requestObj contains request parameters
     */
    public async deleteComment(requestObj: model.DeleteCommentRequest): Promise< http.IncomingMessage > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteComment.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Removes a comment from the document.
     * @param requestObj contains request parameters
     */
    public async deleteCommentOnline(requestObj: model.DeleteCommentOnlineRequest): Promise< model.WordsIncomingMessage< Buffer > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteCommentOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< Buffer >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Removes all comments from the document.
     * @param requestObj contains request parameters
     */
    public async deleteComments(requestObj: model.DeleteCommentsRequest): Promise< http.IncomingMessage > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteComments.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Removes all comments from the document.
     * @param requestObj contains request parameters
     */
    public async deleteCommentsOnline(requestObj: model.DeleteCommentsOnlineRequest): Promise< model.WordsIncomingMessage< Buffer > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteCommentsOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< Buffer >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Removes the custom xml part from the document.
     * @param requestObj contains request parameters
     */
    public async deleteCustomXmlPart(requestObj: model.DeleteCustomXmlPartRequest): Promise< http.IncomingMessage > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteCustomXmlPart.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Removes the custom xml part from the document.
     * @param requestObj contains request parameters
     */
    public async deleteCustomXmlPartOnline(requestObj: model.DeleteCustomXmlPartOnlineRequest): Promise< model.WordsIncomingMessage< Buffer > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteCustomXmlPartOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< Buffer >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Removes all custom xml parts from the document.
     * @param requestObj contains request parameters
     */
    public async deleteCustomXmlParts(requestObj: model.DeleteCustomXmlPartsRequest): Promise< http.IncomingMessage > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteCustomXmlParts.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Removes all custom xml parts from the document.
     * @param requestObj contains request parameters
     */
    public async deleteCustomXmlPartsOnline(requestObj: model.DeleteCustomXmlPartsOnlineRequest): Promise< model.WordsIncomingMessage< Buffer > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteCustomXmlPartsOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< Buffer >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Removes a document property.
     * @param requestObj contains request parameters
     */
    public async deleteDocumentProperty(requestObj: model.DeleteDocumentPropertyRequest): Promise< http.IncomingMessage > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteDocumentProperty.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Removes a document property.
     * @param requestObj contains request parameters
     */
    public async deleteDocumentPropertyOnline(requestObj: model.DeleteDocumentPropertyOnlineRequest): Promise< model.WordsIncomingMessage< Buffer > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteDocumentPropertyOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< Buffer >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Removes a DrawingObject from the document node.
     * @param requestObj contains request parameters
     */
    public async deleteDrawingObject(requestObj: model.DeleteDrawingObjectRequest): Promise< http.IncomingMessage > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteDrawingObject.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Removes a DrawingObject from the document node.
     * @param requestObj contains request parameters
     */
    public async deleteDrawingObjectOnline(requestObj: model.DeleteDrawingObjectOnlineRequest): Promise< model.WordsIncomingMessage< Buffer > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteDrawingObjectOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< Buffer >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Removes a field from the document node.
     * @param requestObj contains request parameters
     */
    public async deleteField(requestObj: model.DeleteFieldRequest): Promise< http.IncomingMessage > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteField.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Removes a field from the document node.
     * @param requestObj contains request parameters
     */
    public async deleteFieldOnline(requestObj: model.DeleteFieldOnlineRequest): Promise< model.WordsIncomingMessage< Buffer > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteFieldOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< Buffer >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Removes fields from the document node.
     * @param requestObj contains request parameters
     */
    public async deleteFields(requestObj: model.DeleteFieldsRequest): Promise< http.IncomingMessage > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteFields.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Removes fields from the document node.
     * @param requestObj contains request parameters
     */
    public async deleteFieldsOnline(requestObj: model.DeleteFieldsOnlineRequest): Promise< model.WordsIncomingMessage< Buffer > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteFieldsOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< Buffer >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Delete file.
     * @param requestObj contains request parameters
     */
    public async deleteFile(requestObj: model.DeleteFileRequest): Promise< http.IncomingMessage > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteFile.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Delete folder.
     * @param requestObj contains request parameters
     */
    public async deleteFolder(requestObj: model.DeleteFolderRequest): Promise< http.IncomingMessage > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteFolder.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Removes a footnote from the document node.
     * @param requestObj contains request parameters
     */
    public async deleteFootnote(requestObj: model.DeleteFootnoteRequest): Promise< http.IncomingMessage > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteFootnote.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Removes a footnote from the document node.
     * @param requestObj contains request parameters
     */
    public async deleteFootnoteOnline(requestObj: model.DeleteFootnoteOnlineRequest): Promise< model.WordsIncomingMessage< Buffer > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteFootnoteOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< Buffer >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Removes a form field from the document node.
     * @param requestObj contains request parameters
     */
    public async deleteFormField(requestObj: model.DeleteFormFieldRequest): Promise< http.IncomingMessage > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteFormField.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Removes a form field from the document node.
     * @param requestObj contains request parameters
     */
    public async deleteFormFieldOnline(requestObj: model.DeleteFormFieldOnlineRequest): Promise< model.WordsIncomingMessage< Buffer > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteFormFieldOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< Buffer >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Removes a HeaderFooter object from the document section.
     * @param requestObj contains request parameters
     */
    public async deleteHeaderFooter(requestObj: model.DeleteHeaderFooterRequest): Promise< http.IncomingMessage > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteHeaderFooter.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Removes a HeaderFooter object from the document section.
     * @param requestObj contains request parameters
     */
    public async deleteHeaderFooterOnline(requestObj: model.DeleteHeaderFooterOnlineRequest): Promise< model.WordsIncomingMessage< Buffer > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteHeaderFooterOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< Buffer >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Removes HeaderFooter objects from the document section.
     * @param requestObj contains request parameters
     */
    public async deleteHeadersFooters(requestObj: model.DeleteHeadersFootersRequest): Promise< http.IncomingMessage > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteHeadersFooters.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Removes HeaderFooter objects from the document section.
     * @param requestObj contains request parameters
     */
    public async deleteHeadersFootersOnline(requestObj: model.DeleteHeadersFootersOnlineRequest): Promise< model.WordsIncomingMessage< Buffer > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteHeadersFootersOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< Buffer >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Removes macros from the document.
     * @param requestObj contains request parameters
     */
    public async deleteMacros(requestObj: model.DeleteMacrosRequest): Promise< http.IncomingMessage > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteMacros.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Removes macros from the document.
     * @param requestObj contains request parameters
     */
    public async deleteMacrosOnline(requestObj: model.DeleteMacrosOnlineRequest): Promise< model.WordsIncomingMessage< Buffer > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteMacrosOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< Buffer >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Removes an OfficeMath object from the document node.
     * @param requestObj contains request parameters
     */
    public async deleteOfficeMathObject(requestObj: model.DeleteOfficeMathObjectRequest): Promise< http.IncomingMessage > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteOfficeMathObject.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Removes an OfficeMath object from the document node.
     * @param requestObj contains request parameters
     */
    public async deleteOfficeMathObjectOnline(requestObj: model.DeleteOfficeMathObjectOnlineRequest): Promise< model.WordsIncomingMessage< Buffer > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteOfficeMathObjectOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< Buffer >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Removes a paragraph from the document node.
     * @param requestObj contains request parameters
     */
    public async deleteParagraph(requestObj: model.DeleteParagraphRequest): Promise< http.IncomingMessage > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteParagraph.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Removes the formatting properties of a paragraph list from the document node.
     * @param requestObj contains request parameters
     */
    public async deleteParagraphListFormat(requestObj: model.DeleteParagraphListFormatRequest): Promise< model.WordsIncomingMessage< model.ParagraphListFormatResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteParagraphListFormat.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.ParagraphListFormatResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Removes the formatting properties of a paragraph list from the document node.
     * @param requestObj contains request parameters
     */
    public async deleteParagraphListFormatOnline(requestObj: model.DeleteParagraphListFormatOnlineRequest): Promise< model.WordsIncomingMessage< model.DeleteParagraphListFormatOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteParagraphListFormatOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.DeleteParagraphListFormatOnlineResponse >();
        result.response = response;
        result.body = requestObj.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Removes a paragraph from the document node.
     * @param requestObj contains request parameters
     */
    public async deleteParagraphOnline(requestObj: model.DeleteParagraphOnlineRequest): Promise< model.WordsIncomingMessage< Buffer > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteParagraphOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< Buffer >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Removes a paragraph tab stop from the document node.
     * @param requestObj contains request parameters
     */
    public async deleteParagraphTabStop(requestObj: model.DeleteParagraphTabStopRequest): Promise< model.WordsIncomingMessage< model.TabStopsResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteParagraphTabStop.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.TabStopsResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Removes a paragraph tab stop from the document node.
     * @param requestObj contains request parameters
     */
    public async deleteParagraphTabStopOnline(requestObj: model.DeleteParagraphTabStopOnlineRequest): Promise< model.WordsIncomingMessage< model.DeleteParagraphTabStopOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteParagraphTabStopOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.DeleteParagraphTabStopOnlineResponse >();
        result.response = response;
        result.body = requestObj.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Removes a Run object from the paragraph.
     * @param requestObj contains request parameters
     */
    public async deleteRun(requestObj: model.DeleteRunRequest): Promise< http.IncomingMessage > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteRun.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Removes a Run object from the paragraph.
     * @param requestObj contains request parameters
     */
    public async deleteRunOnline(requestObj: model.DeleteRunOnlineRequest): Promise< model.WordsIncomingMessage< Buffer > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteRunOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< Buffer >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Removes a section from the document.
     * @param requestObj contains request parameters
     */
    public async deleteSection(requestObj: model.DeleteSectionRequest): Promise< http.IncomingMessage > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteSection.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Removes a section from the document.
     * @param requestObj contains request parameters
     */
    public async deleteSectionOnline(requestObj: model.DeleteSectionOnlineRequest): Promise< model.WordsIncomingMessage< Buffer > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteSectionOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< Buffer >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Removes a table from the document node.
     * @param requestObj contains request parameters
     */
    public async deleteTable(requestObj: model.DeleteTableRequest): Promise< http.IncomingMessage > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteTable.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Removes a cell from the table row.
     * @param requestObj contains request parameters
     */
    public async deleteTableCell(requestObj: model.DeleteTableCellRequest): Promise< http.IncomingMessage > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteTableCell.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Removes a cell from the table row.
     * @param requestObj contains request parameters
     */
    public async deleteTableCellOnline(requestObj: model.DeleteTableCellOnlineRequest): Promise< model.WordsIncomingMessage< Buffer > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteTableCellOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< Buffer >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Removes a table from the document node.
     * @param requestObj contains request parameters
     */
    public async deleteTableOnline(requestObj: model.DeleteTableOnlineRequest): Promise< model.WordsIncomingMessage< Buffer > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteTableOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< Buffer >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Removes a row from the table.
     * @param requestObj contains request parameters
     */
    public async deleteTableRow(requestObj: model.DeleteTableRowRequest): Promise< http.IncomingMessage > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteTableRow.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Removes a row from the table.
     * @param requestObj contains request parameters
     */
    public async deleteTableRowOnline(requestObj: model.DeleteTableRowOnlineRequest): Promise< model.WordsIncomingMessage< Buffer > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteTableRowOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< Buffer >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Removes a watermark from the document.
     * @param requestObj contains request parameters
     */
    public async deleteWatermark(requestObj: model.DeleteWatermarkRequest): Promise< model.WordsIncomingMessage< model.DocumentResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteWatermark.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.DocumentResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Removes a watermark from the document.
     * @param requestObj contains request parameters
     */
    public async deleteWatermarkOnline(requestObj: model.DeleteWatermarkOnlineRequest): Promise< model.WordsIncomingMessage< model.DeleteWatermarkOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteWatermarkOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.DeleteWatermarkOnlineResponse >();
        result.response = response;
        result.body = requestObj.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Download file.
     * @param requestObj contains request parameters
     */
    public async downloadFile(requestObj: model.DownloadFileRequest): Promise< model.WordsIncomingMessage< Buffer > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling downloadFile.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< Buffer >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Executes a Mail Merge operation.
     * @param requestObj contains request parameters
     */
    public async executeMailMerge(requestObj: model.ExecuteMailMergeRequest): Promise< model.WordsIncomingMessage< model.DocumentResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling executeMailMerge.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.DocumentResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Executes a Mail Merge operation online.
     * @param requestObj contains request parameters
     */
    public async executeMailMergeOnline(requestObj: model.ExecuteMailMergeOnlineRequest): Promise< model.WordsIncomingMessage< Buffer > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling executeMailMergeOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< Buffer >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads available fonts from the document.
     * @param requestObj contains request parameters
     */
    public async getAvailableFonts(requestObj: model.GetAvailableFontsRequest): Promise< model.WordsIncomingMessage< model.AvailableFontsResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getAvailableFonts.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.AvailableFontsResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads a bookmark, specified by name, from the document.
     * @param requestObj contains request parameters
     */
    public async getBookmarkByName(requestObj: model.GetBookmarkByNameRequest): Promise< model.WordsIncomingMessage< model.BookmarkResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getBookmarkByName.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.BookmarkResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads a bookmark, specified by name, from the document.
     * @param requestObj contains request parameters
     */
    public async getBookmarkByNameOnline(requestObj: model.GetBookmarkByNameOnlineRequest): Promise< model.WordsIncomingMessage< model.BookmarkResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getBookmarkByNameOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.BookmarkResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads bookmarks from the document.
     * @param requestObj contains request parameters
     */
    public async getBookmarks(requestObj: model.GetBookmarksRequest): Promise< model.WordsIncomingMessage< model.BookmarksResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getBookmarks.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.BookmarksResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads bookmarks from the document.
     * @param requestObj contains request parameters
     */
    public async getBookmarksOnline(requestObj: model.GetBookmarksOnlineRequest): Promise< model.WordsIncomingMessage< model.BookmarksResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getBookmarksOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.BookmarksResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * The 'nodePath' parameter should refer to a paragraph, a cell or a row.
     * @param requestObj contains request parameters
     */
    public async getBorder(requestObj: model.GetBorderRequest): Promise< model.WordsIncomingMessage< model.BorderResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getBorder.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.BorderResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads a border from the document node.
     * @param requestObj contains request parameters
     */
    public async getBorderOnline(requestObj: model.GetBorderOnlineRequest): Promise< model.WordsIncomingMessage< model.BorderResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getBorderOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.BorderResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads borders from the document node.
     * @param requestObj contains request parameters
     */
    public async getBorders(requestObj: model.GetBordersRequest): Promise< model.WordsIncomingMessage< model.BordersResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getBorders.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.BordersResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads borders from the document node.
     * @param requestObj contains request parameters
     */
    public async getBordersOnline(requestObj: model.GetBordersOnlineRequest): Promise< model.WordsIncomingMessage< model.BordersResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getBordersOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.BordersResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads a comment from the document.
     * @param requestObj contains request parameters
     */
    public async getComment(requestObj: model.GetCommentRequest): Promise< model.WordsIncomingMessage< model.CommentResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getComment.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.CommentResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads a comment from the document.
     * @param requestObj contains request parameters
     */
    public async getCommentOnline(requestObj: model.GetCommentOnlineRequest): Promise< model.WordsIncomingMessage< model.CommentResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getCommentOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.CommentResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads comments from the document.
     * @param requestObj contains request parameters
     */
    public async getComments(requestObj: model.GetCommentsRequest): Promise< model.WordsIncomingMessage< model.CommentsResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getComments.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.CommentsResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads comments from the document.
     * @param requestObj contains request parameters
     */
    public async getCommentsOnline(requestObj: model.GetCommentsOnlineRequest): Promise< model.WordsIncomingMessage< model.CommentsResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getCommentsOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.CommentsResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads the custom xml part from the document.
     * @param requestObj contains request parameters
     */
    public async getCustomXmlPart(requestObj: model.GetCustomXmlPartRequest): Promise< model.WordsIncomingMessage< model.CustomXmlPartResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getCustomXmlPart.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.CustomXmlPartResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads the custom xml part from the document.
     * @param requestObj contains request parameters
     */
    public async getCustomXmlPartOnline(requestObj: model.GetCustomXmlPartOnlineRequest): Promise< model.WordsIncomingMessage< model.CustomXmlPartResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getCustomXmlPartOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.CustomXmlPartResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads custom xml parts from the document.
     * @param requestObj contains request parameters
     */
    public async getCustomXmlParts(requestObj: model.GetCustomXmlPartsRequest): Promise< model.WordsIncomingMessage< model.CustomXmlPartsResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getCustomXmlParts.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.CustomXmlPartsResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads custom xml parts from the document.
     * @param requestObj contains request parameters
     */
    public async getCustomXmlPartsOnline(requestObj: model.GetCustomXmlPartsOnlineRequest): Promise< model.WordsIncomingMessage< model.CustomXmlPartsResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getCustomXmlPartsOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.CustomXmlPartsResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads common information from the document.
     * @param requestObj contains request parameters
     */
    public async getDocument(requestObj: model.GetDocumentRequest): Promise< model.WordsIncomingMessage< model.DocumentResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getDocument.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.DocumentResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads a DrawingObject from the document node.
     * @param requestObj contains request parameters
     */
    public async getDocumentDrawingObjectByIndex(requestObj: model.GetDocumentDrawingObjectByIndexRequest): Promise< model.WordsIncomingMessage< model.DrawingObjectResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getDocumentDrawingObjectByIndex.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.DrawingObjectResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads a DrawingObject from the document node.
     * @param requestObj contains request parameters
     */
    public async getDocumentDrawingObjectByIndexOnline(requestObj: model.GetDocumentDrawingObjectByIndexOnlineRequest): Promise< model.WordsIncomingMessage< model.DrawingObjectResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getDocumentDrawingObjectByIndexOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.DrawingObjectResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads image data of a DrawingObject from the document node.
     * @param requestObj contains request parameters
     */
    public async getDocumentDrawingObjectImageData(requestObj: model.GetDocumentDrawingObjectImageDataRequest): Promise< model.WordsIncomingMessage< Buffer > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getDocumentDrawingObjectImageData.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< Buffer >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads image data of a DrawingObject from the document node.
     * @param requestObj contains request parameters
     */
    public async getDocumentDrawingObjectImageDataOnline(requestObj: model.GetDocumentDrawingObjectImageDataOnlineRequest): Promise< model.WordsIncomingMessage< Buffer > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getDocumentDrawingObjectImageDataOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< Buffer >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads OLE data of a DrawingObject from the document node.
     * @param requestObj contains request parameters
     */
    public async getDocumentDrawingObjectOleData(requestObj: model.GetDocumentDrawingObjectOleDataRequest): Promise< model.WordsIncomingMessage< Buffer > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getDocumentDrawingObjectOleData.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< Buffer >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads OLE data of a DrawingObject from the document node.
     * @param requestObj contains request parameters
     */
    public async getDocumentDrawingObjectOleDataOnline(requestObj: model.GetDocumentDrawingObjectOleDataOnlineRequest): Promise< model.WordsIncomingMessage< Buffer > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getDocumentDrawingObjectOleDataOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< Buffer >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads DrawingObjects from the document node.
     * @param requestObj contains request parameters
     */
    public async getDocumentDrawingObjects(requestObj: model.GetDocumentDrawingObjectsRequest): Promise< model.WordsIncomingMessage< model.DrawingObjectsResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getDocumentDrawingObjects.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.DrawingObjectsResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads DrawingObjects from the document node.
     * @param requestObj contains request parameters
     */
    public async getDocumentDrawingObjectsOnline(requestObj: model.GetDocumentDrawingObjectsOnlineRequest): Promise< model.WordsIncomingMessage< model.DrawingObjectsResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getDocumentDrawingObjectsOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.DrawingObjectsResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads merge field names from the document.
     * @param requestObj contains request parameters
     */
    public async getDocumentFieldNames(requestObj: model.GetDocumentFieldNamesRequest): Promise< model.WordsIncomingMessage< model.FieldNamesResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getDocumentFieldNames.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.FieldNamesResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads merge field names from the document.
     * @param requestObj contains request parameters
     */
    public async getDocumentFieldNamesOnline(requestObj: model.GetDocumentFieldNamesOnlineRequest): Promise< model.WordsIncomingMessage< model.FieldNamesResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getDocumentFieldNamesOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.FieldNamesResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads a hyperlink from the document.
     * @param requestObj contains request parameters
     */
    public async getDocumentHyperlinkByIndex(requestObj: model.GetDocumentHyperlinkByIndexRequest): Promise< model.WordsIncomingMessage< model.HyperlinkResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getDocumentHyperlinkByIndex.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.HyperlinkResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads a hyperlink from the document.
     * @param requestObj contains request parameters
     */
    public async getDocumentHyperlinkByIndexOnline(requestObj: model.GetDocumentHyperlinkByIndexOnlineRequest): Promise< model.WordsIncomingMessage< model.HyperlinkResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getDocumentHyperlinkByIndexOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.HyperlinkResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads hyperlinks from the document.
     * @param requestObj contains request parameters
     */
    public async getDocumentHyperlinks(requestObj: model.GetDocumentHyperlinksRequest): Promise< model.WordsIncomingMessage< model.HyperlinksResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getDocumentHyperlinks.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.HyperlinksResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads hyperlinks from the document.
     * @param requestObj contains request parameters
     */
    public async getDocumentHyperlinksOnline(requestObj: model.GetDocumentHyperlinksOnlineRequest): Promise< model.WordsIncomingMessage< model.HyperlinksResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getDocumentHyperlinksOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.HyperlinksResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads document properties.
     * @param requestObj contains request parameters
     */
    public async getDocumentProperties(requestObj: model.GetDocumentPropertiesRequest): Promise< model.WordsIncomingMessage< model.DocumentPropertiesResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getDocumentProperties.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.DocumentPropertiesResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads document properties.
     * @param requestObj contains request parameters
     */
    public async getDocumentPropertiesOnline(requestObj: model.GetDocumentPropertiesOnlineRequest): Promise< model.WordsIncomingMessage< model.DocumentPropertiesResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getDocumentPropertiesOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.DocumentPropertiesResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads a document property.
     * @param requestObj contains request parameters
     */
    public async getDocumentProperty(requestObj: model.GetDocumentPropertyRequest): Promise< model.WordsIncomingMessage< model.DocumentPropertyResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getDocumentProperty.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.DocumentPropertyResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads a document property.
     * @param requestObj contains request parameters
     */
    public async getDocumentPropertyOnline(requestObj: model.GetDocumentPropertyOnlineRequest): Promise< model.WordsIncomingMessage< model.DocumentPropertyResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getDocumentPropertyOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.DocumentPropertyResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads protection properties from the document.
     * @param requestObj contains request parameters
     */
    public async getDocumentProtection(requestObj: model.GetDocumentProtectionRequest): Promise< model.WordsIncomingMessage< model.ProtectionDataResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getDocumentProtection.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.ProtectionDataResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads protection properties from the document.
     * @param requestObj contains request parameters
     */
    public async getDocumentProtectionOnline(requestObj: model.GetDocumentProtectionOnlineRequest): Promise< model.WordsIncomingMessage< model.ProtectionDataResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getDocumentProtectionOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.ProtectionDataResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads document statistics.
     * @param requestObj contains request parameters
     */
    public async getDocumentStatistics(requestObj: model.GetDocumentStatisticsRequest): Promise< model.WordsIncomingMessage< model.StatDataResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getDocumentStatistics.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.StatDataResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads document statistics.
     * @param requestObj contains request parameters
     */
    public async getDocumentStatisticsOnline(requestObj: model.GetDocumentStatisticsOnlineRequest): Promise< model.WordsIncomingMessage< model.StatDataResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getDocumentStatisticsOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.StatDataResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Converts a document in cloud storage to the specified format.
     * @param requestObj contains request parameters
     */
    public async getDocumentWithFormat(requestObj: model.GetDocumentWithFormatRequest): Promise< model.WordsIncomingMessage< Buffer > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getDocumentWithFormat.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< Buffer >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads a field from the document node.
     * @param requestObj contains request parameters
     */
    public async getField(requestObj: model.GetFieldRequest): Promise< model.WordsIncomingMessage< model.FieldResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getField.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.FieldResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads a field from the document node.
     * @param requestObj contains request parameters
     */
    public async getFieldOnline(requestObj: model.GetFieldOnlineRequest): Promise< model.WordsIncomingMessage< model.FieldResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getFieldOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.FieldResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads fields from the document node.
     * @param requestObj contains request parameters
     */
    public async getFields(requestObj: model.GetFieldsRequest): Promise< model.WordsIncomingMessage< model.FieldsResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getFields.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.FieldsResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads fields from the document node.
     * @param requestObj contains request parameters
     */
    public async getFieldsOnline(requestObj: model.GetFieldsOnlineRequest): Promise< model.WordsIncomingMessage< model.FieldsResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getFieldsOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.FieldsResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Get all files and folders within a folder.
     * @param requestObj contains request parameters
     */
    public async getFilesList(requestObj: model.GetFilesListRequest): Promise< model.WordsIncomingMessage< model.FilesList > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getFilesList.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.FilesList >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads a footnote from the document node.
     * @param requestObj contains request parameters
     */
    public async getFootnote(requestObj: model.GetFootnoteRequest): Promise< model.WordsIncomingMessage< model.FootnoteResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getFootnote.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.FootnoteResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads a footnote from the document node.
     * @param requestObj contains request parameters
     */
    public async getFootnoteOnline(requestObj: model.GetFootnoteOnlineRequest): Promise< model.WordsIncomingMessage< model.FootnoteResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getFootnoteOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.FootnoteResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads footnotes from the document node.
     * @param requestObj contains request parameters
     */
    public async getFootnotes(requestObj: model.GetFootnotesRequest): Promise< model.WordsIncomingMessage< model.FootnotesResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getFootnotes.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.FootnotesResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads footnotes from the document node.
     * @param requestObj contains request parameters
     */
    public async getFootnotesOnline(requestObj: model.GetFootnotesOnlineRequest): Promise< model.WordsIncomingMessage< model.FootnotesResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getFootnotesOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.FootnotesResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads a form field from the document node.
     * @param requestObj contains request parameters
     */
    public async getFormField(requestObj: model.GetFormFieldRequest): Promise< model.WordsIncomingMessage< model.FormFieldResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getFormField.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.FormFieldResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads a form field from the document node.
     * @param requestObj contains request parameters
     */
    public async getFormFieldOnline(requestObj: model.GetFormFieldOnlineRequest): Promise< model.WordsIncomingMessage< model.FormFieldResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getFormFieldOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.FormFieldResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads form fields from the document node.
     * @param requestObj contains request parameters
     */
    public async getFormFields(requestObj: model.GetFormFieldsRequest): Promise< model.WordsIncomingMessage< model.FormFieldsResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getFormFields.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.FormFieldsResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads form fields from the document node.
     * @param requestObj contains request parameters
     */
    public async getFormFieldsOnline(requestObj: model.GetFormFieldsOnlineRequest): Promise< model.WordsIncomingMessage< model.FormFieldsResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getFormFieldsOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.FormFieldsResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads a HeaderFooter object from the document.
     * @param requestObj contains request parameters
     */
    public async getHeaderFooter(requestObj: model.GetHeaderFooterRequest): Promise< model.WordsIncomingMessage< model.HeaderFooterResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getHeaderFooter.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.HeaderFooterResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads a HeaderFooter object from the document section.
     * @param requestObj contains request parameters
     */
    public async getHeaderFooterOfSection(requestObj: model.GetHeaderFooterOfSectionRequest): Promise< model.WordsIncomingMessage< model.HeaderFooterResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getHeaderFooterOfSection.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.HeaderFooterResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads a HeaderFooter object from the document section.
     * @param requestObj contains request parameters
     */
    public async getHeaderFooterOfSectionOnline(requestObj: model.GetHeaderFooterOfSectionOnlineRequest): Promise< model.WordsIncomingMessage< model.HeaderFooterResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getHeaderFooterOfSectionOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.HeaderFooterResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads a HeaderFooter object from the document.
     * @param requestObj contains request parameters
     */
    public async getHeaderFooterOnline(requestObj: model.GetHeaderFooterOnlineRequest): Promise< model.WordsIncomingMessage< model.HeaderFooterResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getHeaderFooterOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.HeaderFooterResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads HeaderFooter objects from the document section.
     * @param requestObj contains request parameters
     */
    public async getHeaderFooters(requestObj: model.GetHeaderFootersRequest): Promise< model.WordsIncomingMessage< model.HeaderFootersResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getHeaderFooters.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.HeaderFootersResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads HeaderFooter objects from the document section.
     * @param requestObj contains request parameters
     */
    public async getHeaderFootersOnline(requestObj: model.GetHeaderFootersOnlineRequest): Promise< model.WordsIncomingMessage< model.HeaderFootersResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getHeaderFootersOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.HeaderFootersResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads a list from the document.
     * @param requestObj contains request parameters
     */
    public async getList(requestObj: model.GetListRequest): Promise< model.WordsIncomingMessage< model.ListResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getList.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.ListResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads a list from the document.
     * @param requestObj contains request parameters
     */
    public async getListOnline(requestObj: model.GetListOnlineRequest): Promise< model.WordsIncomingMessage< model.ListResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getListOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.ListResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads lists from the document.
     * @param requestObj contains request parameters
     */
    public async getLists(requestObj: model.GetListsRequest): Promise< model.WordsIncomingMessage< model.ListsResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getLists.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.ListsResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads lists from the document.
     * @param requestObj contains request parameters
     */
    public async getListsOnline(requestObj: model.GetListsOnlineRequest): Promise< model.WordsIncomingMessage< model.ListsResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getListsOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.ListsResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads an OfficeMath object from the document node.
     * @param requestObj contains request parameters
     */
    public async getOfficeMathObject(requestObj: model.GetOfficeMathObjectRequest): Promise< model.WordsIncomingMessage< model.OfficeMathObjectResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getOfficeMathObject.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.OfficeMathObjectResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads an OfficeMath object from the document node.
     * @param requestObj contains request parameters
     */
    public async getOfficeMathObjectOnline(requestObj: model.GetOfficeMathObjectOnlineRequest): Promise< model.WordsIncomingMessage< model.OfficeMathObjectResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getOfficeMathObjectOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.OfficeMathObjectResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads OfficeMath objects from the document node.
     * @param requestObj contains request parameters
     */
    public async getOfficeMathObjects(requestObj: model.GetOfficeMathObjectsRequest): Promise< model.WordsIncomingMessage< model.OfficeMathObjectsResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getOfficeMathObjects.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.OfficeMathObjectsResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads OfficeMath objects from the document node.
     * @param requestObj contains request parameters
     */
    public async getOfficeMathObjectsOnline(requestObj: model.GetOfficeMathObjectsOnlineRequest): Promise< model.WordsIncomingMessage< model.OfficeMathObjectsResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getOfficeMathObjectsOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.OfficeMathObjectsResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads a paragraph from the document node.
     * @param requestObj contains request parameters
     */
    public async getParagraph(requestObj: model.GetParagraphRequest): Promise< model.WordsIncomingMessage< model.ParagraphResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getParagraph.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.ParagraphResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads the formatting properties of a paragraph from the document node.
     * @param requestObj contains request parameters
     */
    public async getParagraphFormat(requestObj: model.GetParagraphFormatRequest): Promise< model.WordsIncomingMessage< model.ParagraphFormatResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getParagraphFormat.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.ParagraphFormatResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads the formatting properties of a paragraph from the document node.
     * @param requestObj contains request parameters
     */
    public async getParagraphFormatOnline(requestObj: model.GetParagraphFormatOnlineRequest): Promise< model.WordsIncomingMessage< model.ParagraphFormatResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getParagraphFormatOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.ParagraphFormatResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads the formatting properties of a paragraph list from the document node.
     * @param requestObj contains request parameters
     */
    public async getParagraphListFormat(requestObj: model.GetParagraphListFormatRequest): Promise< model.WordsIncomingMessage< model.ParagraphListFormatResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getParagraphListFormat.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.ParagraphListFormatResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads the formatting properties of a paragraph list from the document node.
     * @param requestObj contains request parameters
     */
    public async getParagraphListFormatOnline(requestObj: model.GetParagraphListFormatOnlineRequest): Promise< model.WordsIncomingMessage< model.ParagraphListFormatResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getParagraphListFormatOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.ParagraphListFormatResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads a paragraph from the document node.
     * @param requestObj contains request parameters
     */
    public async getParagraphOnline(requestObj: model.GetParagraphOnlineRequest): Promise< model.WordsIncomingMessage< model.ParagraphResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getParagraphOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.ParagraphResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads paragraphs from the document node.
     * @param requestObj contains request parameters
     */
    public async getParagraphs(requestObj: model.GetParagraphsRequest): Promise< model.WordsIncomingMessage< model.ParagraphLinkCollectionResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getParagraphs.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.ParagraphLinkCollectionResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads paragraphs from the document node.
     * @param requestObj contains request parameters
     */
    public async getParagraphsOnline(requestObj: model.GetParagraphsOnlineRequest): Promise< model.WordsIncomingMessage< model.ParagraphLinkCollectionResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getParagraphsOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.ParagraphLinkCollectionResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads paragraph tab stops from the document node.
     * @param requestObj contains request parameters
     */
    public async getParagraphTabStops(requestObj: model.GetParagraphTabStopsRequest): Promise< model.WordsIncomingMessage< model.TabStopsResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getParagraphTabStops.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.TabStopsResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads paragraph tab stops from the document node.
     * @param requestObj contains request parameters
     */
    public async getParagraphTabStopsOnline(requestObj: model.GetParagraphTabStopsOnlineRequest): Promise< model.WordsIncomingMessage< model.TabStopsResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getParagraphTabStopsOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.TabStopsResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Get assymetric public key.
     * @param requestObj contains request parameters
     */
    public async getPublicKey(requestObj: model.GetPublicKeyRequest): Promise< model.WordsIncomingMessage< model.PublicKeyResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getPublicKey.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.PublicKeyResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads range text from the document.
     * @param requestObj contains request parameters
     */
    public async getRangeText(requestObj: model.GetRangeTextRequest): Promise< model.WordsIncomingMessage< model.RangeTextResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getRangeText.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.RangeTextResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads range text from the document.
     * @param requestObj contains request parameters
     */
    public async getRangeTextOnline(requestObj: model.GetRangeTextOnlineRequest): Promise< model.WordsIncomingMessage< model.RangeTextResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getRangeTextOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.RangeTextResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads a Run object from the paragraph.
     * @param requestObj contains request parameters
     */
    public async getRun(requestObj: model.GetRunRequest): Promise< model.WordsIncomingMessage< model.RunResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getRun.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.RunResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads the font properties of a Run object from the paragraph.
     * @param requestObj contains request parameters
     */
    public async getRunFont(requestObj: model.GetRunFontRequest): Promise< model.WordsIncomingMessage< model.FontResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getRunFont.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.FontResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads the font properties of a Run object from the paragraph.
     * @param requestObj contains request parameters
     */
    public async getRunFontOnline(requestObj: model.GetRunFontOnlineRequest): Promise< model.WordsIncomingMessage< model.FontResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getRunFontOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.FontResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads a Run object from the paragraph.
     * @param requestObj contains request parameters
     */
    public async getRunOnline(requestObj: model.GetRunOnlineRequest): Promise< model.WordsIncomingMessage< model.RunResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getRunOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.RunResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads Run objects from the paragraph.
     * @param requestObj contains request parameters
     */
    public async getRuns(requestObj: model.GetRunsRequest): Promise< model.WordsIncomingMessage< model.RunsResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getRuns.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.RunsResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads Run objects from the paragraph.
     * @param requestObj contains request parameters
     */
    public async getRunsOnline(requestObj: model.GetRunsOnlineRequest): Promise< model.WordsIncomingMessage< model.RunsResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getRunsOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.RunsResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads a section from the document.
     * @param requestObj contains request parameters
     */
    public async getSection(requestObj: model.GetSectionRequest): Promise< model.WordsIncomingMessage< model.SectionResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getSection.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.SectionResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads a section from the document.
     * @param requestObj contains request parameters
     */
    public async getSectionOnline(requestObj: model.GetSectionOnlineRequest): Promise< model.WordsIncomingMessage< model.SectionResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getSectionOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.SectionResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads the page setup of a section from the document.
     * @param requestObj contains request parameters
     */
    public async getSectionPageSetup(requestObj: model.GetSectionPageSetupRequest): Promise< model.WordsIncomingMessage< model.SectionPageSetupResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getSectionPageSetup.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.SectionPageSetupResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads the page setup of a section from the document.
     * @param requestObj contains request parameters
     */
    public async getSectionPageSetupOnline(requestObj: model.GetSectionPageSetupOnlineRequest): Promise< model.WordsIncomingMessage< model.SectionPageSetupResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getSectionPageSetupOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.SectionPageSetupResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads sections from the document.
     * @param requestObj contains request parameters
     */
    public async getSections(requestObj: model.GetSectionsRequest): Promise< model.WordsIncomingMessage< model.SectionLinkCollectionResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getSections.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.SectionLinkCollectionResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads sections from the document.
     * @param requestObj contains request parameters
     */
    public async getSectionsOnline(requestObj: model.GetSectionsOnlineRequest): Promise< model.WordsIncomingMessage< model.SectionLinkCollectionResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getSectionsOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.SectionLinkCollectionResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads a style from the document.
     * @param requestObj contains request parameters
     */
    public async getStyle(requestObj: model.GetStyleRequest): Promise< model.WordsIncomingMessage< model.StyleResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getStyle.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.StyleResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads a style from the document node.
     * @param requestObj contains request parameters
     */
    public async getStyleFromDocumentElement(requestObj: model.GetStyleFromDocumentElementRequest): Promise< model.WordsIncomingMessage< model.StyleResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getStyleFromDocumentElement.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.StyleResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads a style from the document node.
     * @param requestObj contains request parameters
     */
    public async getStyleFromDocumentElementOnline(requestObj: model.GetStyleFromDocumentElementOnlineRequest): Promise< model.WordsIncomingMessage< model.StyleResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getStyleFromDocumentElementOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.StyleResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads a style from the document.
     * @param requestObj contains request parameters
     */
    public async getStyleOnline(requestObj: model.GetStyleOnlineRequest): Promise< model.WordsIncomingMessage< model.StyleResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getStyleOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.StyleResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads styles from the document.
     * @param requestObj contains request parameters
     */
    public async getStyles(requestObj: model.GetStylesRequest): Promise< model.WordsIncomingMessage< model.StylesResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getStyles.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.StylesResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads styles from the document.
     * @param requestObj contains request parameters
     */
    public async getStylesOnline(requestObj: model.GetStylesOnlineRequest): Promise< model.WordsIncomingMessage< model.StylesResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getStylesOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.StylesResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads a table from the document node.
     * @param requestObj contains request parameters
     */
    public async getTable(requestObj: model.GetTableRequest): Promise< model.WordsIncomingMessage< model.TableResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getTable.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.TableResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads a cell from the table row.
     * @param requestObj contains request parameters
     */
    public async getTableCell(requestObj: model.GetTableCellRequest): Promise< model.WordsIncomingMessage< model.TableCellResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getTableCell.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.TableCellResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads the formatting properties of a table cell.
     * @param requestObj contains request parameters
     */
    public async getTableCellFormat(requestObj: model.GetTableCellFormatRequest): Promise< model.WordsIncomingMessage< model.TableCellFormatResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getTableCellFormat.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.TableCellFormatResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads the formatting properties of a table cell.
     * @param requestObj contains request parameters
     */
    public async getTableCellFormatOnline(requestObj: model.GetTableCellFormatOnlineRequest): Promise< model.WordsIncomingMessage< model.TableCellFormatResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getTableCellFormatOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.TableCellFormatResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads a cell from the table row.
     * @param requestObj contains request parameters
     */
    public async getTableCellOnline(requestObj: model.GetTableCellOnlineRequest): Promise< model.WordsIncomingMessage< model.TableCellResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getTableCellOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.TableCellResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads a table from the document node.
     * @param requestObj contains request parameters
     */
    public async getTableOnline(requestObj: model.GetTableOnlineRequest): Promise< model.WordsIncomingMessage< model.TableResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getTableOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.TableResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads properties of a table from the document node.
     * @param requestObj contains request parameters
     */
    public async getTableProperties(requestObj: model.GetTablePropertiesRequest): Promise< model.WordsIncomingMessage< model.TablePropertiesResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getTableProperties.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.TablePropertiesResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads properties of a table from the document node.
     * @param requestObj contains request parameters
     */
    public async getTablePropertiesOnline(requestObj: model.GetTablePropertiesOnlineRequest): Promise< model.WordsIncomingMessage< model.TablePropertiesResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getTablePropertiesOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.TablePropertiesResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads a row from the table.
     * @param requestObj contains request parameters
     */
    public async getTableRow(requestObj: model.GetTableRowRequest): Promise< model.WordsIncomingMessage< model.TableRowResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getTableRow.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.TableRowResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads the formatting properties of a table row.
     * @param requestObj contains request parameters
     */
    public async getTableRowFormat(requestObj: model.GetTableRowFormatRequest): Promise< model.WordsIncomingMessage< model.TableRowFormatResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getTableRowFormat.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.TableRowFormatResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads the formatting properties of a table row.
     * @param requestObj contains request parameters
     */
    public async getTableRowFormatOnline(requestObj: model.GetTableRowFormatOnlineRequest): Promise< model.WordsIncomingMessage< model.TableRowFormatResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getTableRowFormatOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.TableRowFormatResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads a row from the table.
     * @param requestObj contains request parameters
     */
    public async getTableRowOnline(requestObj: model.GetTableRowOnlineRequest): Promise< model.WordsIncomingMessage< model.TableRowResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getTableRowOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.TableRowResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads tables from the document node.
     * @param requestObj contains request parameters
     */
    public async getTables(requestObj: model.GetTablesRequest): Promise< model.WordsIncomingMessage< model.TableLinkCollectionResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getTables.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.TableLinkCollectionResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads tables from the document node.
     * @param requestObj contains request parameters
     */
    public async getTablesOnline(requestObj: model.GetTablesOnlineRequest): Promise< model.WordsIncomingMessage< model.TableLinkCollectionResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getTablesOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.TableLinkCollectionResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Inserts a new comment to the document.
     * @param requestObj contains request parameters
     */
    public async insertComment(requestObj: model.InsertCommentRequest): Promise< model.WordsIncomingMessage< model.CommentResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling insertComment.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.CommentResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Inserts a new comment to the document.
     * @param requestObj contains request parameters
     */
    public async insertCommentOnline(requestObj: model.InsertCommentOnlineRequest): Promise< model.WordsIncomingMessage< model.InsertCommentOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling insertCommentOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.InsertCommentOnlineResponse >();
        result.response = response;
        result.body = requestObj.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Inserts a new custom xml part to the document.
     * @param requestObj contains request parameters
     */
    public async insertCustomXmlPart(requestObj: model.InsertCustomXmlPartRequest): Promise< model.WordsIncomingMessage< model.CustomXmlPartResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling insertCustomXmlPart.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.CustomXmlPartResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Inserts a new custom xml part to the document.
     * @param requestObj contains request parameters
     */
    public async insertCustomXmlPartOnline(requestObj: model.InsertCustomXmlPartOnlineRequest): Promise< model.WordsIncomingMessage< model.InsertCustomXmlPartOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling insertCustomXmlPartOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.InsertCustomXmlPartOnlineResponse >();
        result.response = response;
        result.body = requestObj.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Inserts a new DrawingObject to the document node.
     * @param requestObj contains request parameters
     */
    public async insertDrawingObject(requestObj: model.InsertDrawingObjectRequest): Promise< model.WordsIncomingMessage< model.DrawingObjectResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling insertDrawingObject.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.DrawingObjectResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Inserts a new DrawingObject to the document node.
     * @param requestObj contains request parameters
     */
    public async insertDrawingObjectOnline(requestObj: model.InsertDrawingObjectOnlineRequest): Promise< model.WordsIncomingMessage< model.InsertDrawingObjectOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling insertDrawingObjectOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.InsertDrawingObjectOnlineResponse >();
        result.response = response;
        result.body = requestObj.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Inserts a new field to the document node.
     * @param requestObj contains request parameters
     */
    public async insertField(requestObj: model.InsertFieldRequest): Promise< model.WordsIncomingMessage< model.FieldResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling insertField.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.FieldResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Inserts a new field to the document node.
     * @param requestObj contains request parameters
     */
    public async insertFieldOnline(requestObj: model.InsertFieldOnlineRequest): Promise< model.WordsIncomingMessage< model.InsertFieldOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling insertFieldOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.InsertFieldOnlineResponse >();
        result.response = response;
        result.body = requestObj.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Inserts a new footnote to the document node.
     * @param requestObj contains request parameters
     */
    public async insertFootnote(requestObj: model.InsertFootnoteRequest): Promise< model.WordsIncomingMessage< model.FootnoteResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling insertFootnote.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.FootnoteResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Inserts a new footnote to the document node.
     * @param requestObj contains request parameters
     */
    public async insertFootnoteOnline(requestObj: model.InsertFootnoteOnlineRequest): Promise< model.WordsIncomingMessage< model.InsertFootnoteOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling insertFootnoteOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.InsertFootnoteOnlineResponse >();
        result.response = response;
        result.body = requestObj.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Inserts a new form field to the document node.
     * @param requestObj contains request parameters
     */
    public async insertFormField(requestObj: model.InsertFormFieldRequest): Promise< model.WordsIncomingMessage< model.FormFieldResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling insertFormField.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.FormFieldResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Inserts a new form field to the document node.
     * @param requestObj contains request parameters
     */
    public async insertFormFieldOnline(requestObj: model.InsertFormFieldOnlineRequest): Promise< model.WordsIncomingMessage< model.InsertFormFieldOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling insertFormFieldOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.InsertFormFieldOnlineResponse >();
        result.response = response;
        result.body = requestObj.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Inserts a new HeaderFooter object to the document section.
     * @param requestObj contains request parameters
     */
    public async insertHeaderFooter(requestObj: model.InsertHeaderFooterRequest): Promise< model.WordsIncomingMessage< model.HeaderFooterResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling insertHeaderFooter.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.HeaderFooterResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Inserts a new HeaderFooter object to the document section.
     * @param requestObj contains request parameters
     */
    public async insertHeaderFooterOnline(requestObj: model.InsertHeaderFooterOnlineRequest): Promise< model.WordsIncomingMessage< model.InsertHeaderFooterOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling insertHeaderFooterOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.InsertHeaderFooterOnlineResponse >();
        result.response = response;
        result.body = requestObj.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Inserts a new list to the document.
     * @param requestObj contains request parameters
     */
    public async insertList(requestObj: model.InsertListRequest): Promise< model.WordsIncomingMessage< model.ListResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling insertList.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.ListResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Inserts a new list to the document.
     * @param requestObj contains request parameters
     */
    public async insertListOnline(requestObj: model.InsertListOnlineRequest): Promise< model.WordsIncomingMessage< model.InsertListOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling insertListOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.InsertListOnlineResponse >();
        result.response = response;
        result.body = requestObj.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Inserts a new or updates an existing paragraph tab stop in the document node.
     * @param requestObj contains request parameters
     */
    public async insertOrUpdateParagraphTabStop(requestObj: model.InsertOrUpdateParagraphTabStopRequest): Promise< model.WordsIncomingMessage< model.TabStopsResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling insertOrUpdateParagraphTabStop.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.TabStopsResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Inserts a new or updates an existing paragraph tab stop in the document node.
     * @param requestObj contains request parameters
     */
    public async insertOrUpdateParagraphTabStopOnline(requestObj: model.InsertOrUpdateParagraphTabStopOnlineRequest): Promise< model.WordsIncomingMessage< model.InsertOrUpdateParagraphTabStopOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling insertOrUpdateParagraphTabStopOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.InsertOrUpdateParagraphTabStopOnlineResponse >();
        result.response = response;
        result.body = requestObj.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Inserts page numbers to the document.
     * @param requestObj contains request parameters
     */
    public async insertPageNumbers(requestObj: model.InsertPageNumbersRequest): Promise< model.WordsIncomingMessage< model.DocumentResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling insertPageNumbers.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.DocumentResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Inserts page numbers to the document.
     * @param requestObj contains request parameters
     */
    public async insertPageNumbersOnline(requestObj: model.InsertPageNumbersOnlineRequest): Promise< model.WordsIncomingMessage< model.InsertPageNumbersOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling insertPageNumbersOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.InsertPageNumbersOnlineResponse >();
        result.response = response;
        result.body = requestObj.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Inserts a new paragraph to the document node.
     * @param requestObj contains request parameters
     */
    public async insertParagraph(requestObj: model.InsertParagraphRequest): Promise< model.WordsIncomingMessage< model.ParagraphResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling insertParagraph.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.ParagraphResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Inserts a new paragraph to the document node.
     * @param requestObj contains request parameters
     */
    public async insertParagraphOnline(requestObj: model.InsertParagraphOnlineRequest): Promise< model.WordsIncomingMessage< model.InsertParagraphOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling insertParagraphOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.InsertParagraphOnlineResponse >();
        result.response = response;
        result.body = requestObj.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Inserts a new Run object to the paragraph.
     * @param requestObj contains request parameters
     */
    public async insertRun(requestObj: model.InsertRunRequest): Promise< model.WordsIncomingMessage< model.RunResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling insertRun.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.RunResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Inserts a new Run object to the paragraph.
     * @param requestObj contains request parameters
     */
    public async insertRunOnline(requestObj: model.InsertRunOnlineRequest): Promise< model.WordsIncomingMessage< model.InsertRunOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling insertRunOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.InsertRunOnlineResponse >();
        result.response = response;
        result.body = requestObj.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Inserts a new style to the document.
     * @param requestObj contains request parameters
     */
    public async insertStyle(requestObj: model.InsertStyleRequest): Promise< model.WordsIncomingMessage< model.StyleResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling insertStyle.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.StyleResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Inserts a new style to the document.
     * @param requestObj contains request parameters
     */
    public async insertStyleOnline(requestObj: model.InsertStyleOnlineRequest): Promise< model.WordsIncomingMessage< model.InsertStyleOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling insertStyleOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.InsertStyleOnlineResponse >();
        result.response = response;
        result.body = requestObj.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Inserts a new table to the document node.
     * @param requestObj contains request parameters
     */
    public async insertTable(requestObj: model.InsertTableRequest): Promise< model.WordsIncomingMessage< model.TableResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling insertTable.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.TableResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Inserts a new cell to the table row.
     * @param requestObj contains request parameters
     */
    public async insertTableCell(requestObj: model.InsertTableCellRequest): Promise< model.WordsIncomingMessage< model.TableCellResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling insertTableCell.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.TableCellResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Inserts a new cell to the table row.
     * @param requestObj contains request parameters
     */
    public async insertTableCellOnline(requestObj: model.InsertTableCellOnlineRequest): Promise< model.WordsIncomingMessage< model.InsertTableCellOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling insertTableCellOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.InsertTableCellOnlineResponse >();
        result.response = response;
        result.body = requestObj.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Inserts a new table to the document node.
     * @param requestObj contains request parameters
     */
    public async insertTableOnline(requestObj: model.InsertTableOnlineRequest): Promise< model.WordsIncomingMessage< model.InsertTableOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling insertTableOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.InsertTableOnlineResponse >();
        result.response = response;
        result.body = requestObj.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Inserts a new row to the table.
     * @param requestObj contains request parameters
     */
    public async insertTableRow(requestObj: model.InsertTableRowRequest): Promise< model.WordsIncomingMessage< model.TableRowResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling insertTableRow.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.TableRowResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Inserts a new row to the table.
     * @param requestObj contains request parameters
     */
    public async insertTableRowOnline(requestObj: model.InsertTableRowOnlineRequest): Promise< model.WordsIncomingMessage< model.InsertTableRowOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling insertTableRowOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.InsertTableRowOnlineResponse >();
        result.response = response;
        result.body = requestObj.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Inserts a new watermark image to the document.
     * @param requestObj contains request parameters
     */
    public async insertWatermarkImage(requestObj: model.InsertWatermarkImageRequest): Promise< model.WordsIncomingMessage< model.DocumentResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling insertWatermarkImage.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.DocumentResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Inserts a new watermark image to the document.
     * @param requestObj contains request parameters
     */
    public async insertWatermarkImageOnline(requestObj: model.InsertWatermarkImageOnlineRequest): Promise< model.WordsIncomingMessage< model.InsertWatermarkImageOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling insertWatermarkImageOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.InsertWatermarkImageOnlineResponse >();
        result.response = response;
        result.body = requestObj.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Inserts a new watermark text to the document.
     * @param requestObj contains request parameters
     */
    public async insertWatermarkText(requestObj: model.InsertWatermarkTextRequest): Promise< model.WordsIncomingMessage< model.DocumentResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling insertWatermarkText.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.DocumentResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Inserts a new watermark text to the document.
     * @param requestObj contains request parameters
     */
    public async insertWatermarkTextOnline(requestObj: model.InsertWatermarkTextOnlineRequest): Promise< model.WordsIncomingMessage< model.InsertWatermarkTextOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling insertWatermarkTextOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.InsertWatermarkTextOnlineResponse >();
        result.response = response;
        result.body = requestObj.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Downloads a document from the Web using URL and saves it to cloud storage in the specified format.
     * @param requestObj contains request parameters
     */
    public async loadWebDocument(requestObj: model.LoadWebDocumentRequest): Promise< model.WordsIncomingMessage< model.SaveResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling loadWebDocument.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.SaveResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Move file.
     * @param requestObj contains request parameters
     */
    public async moveFile(requestObj: model.MoveFileRequest): Promise< http.IncomingMessage > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling moveFile.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Move folder.
     * @param requestObj contains request parameters
     */
    public async moveFolder(requestObj: model.MoveFolderRequest): Promise< http.IncomingMessage > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling moveFolder.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Applies document content optimization options, specific to a particular versions of Microsoft Word.
     * @param requestObj contains request parameters
     */
    public async optimizeDocument(requestObj: model.OptimizeDocumentRequest): Promise< http.IncomingMessage > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling optimizeDocument.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Applies document content optimization options, specific to a particular versions of Microsoft Word.
     * @param requestObj contains request parameters
     */
    public async optimizeDocumentOnline(requestObj: model.OptimizeDocumentOnlineRequest): Promise< model.WordsIncomingMessage< Buffer > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling optimizeDocumentOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< Buffer >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Adds protection to the document.
     * @param requestObj contains request parameters
     */
    public async protectDocument(requestObj: model.ProtectDocumentRequest): Promise< model.WordsIncomingMessage< model.ProtectionDataResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling protectDocument.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.ProtectionDataResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Adds protection to the document.
     * @param requestObj contains request parameters
     */
    public async protectDocumentOnline(requestObj: model.ProtectDocumentOnlineRequest): Promise< model.WordsIncomingMessage< model.ProtectDocumentOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling protectDocumentOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.ProtectDocumentOnlineResponse >();
        result.response = response;
        result.body = requestObj.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Rejects all revisions in the document.
     * @param requestObj contains request parameters
     */
    public async rejectAllRevisions(requestObj: model.RejectAllRevisionsRequest): Promise< model.WordsIncomingMessage< model.RevisionsModificationResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling rejectAllRevisions.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.RevisionsModificationResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Rejects all revisions in the document.
     * @param requestObj contains request parameters
     */
    public async rejectAllRevisionsOnline(requestObj: model.RejectAllRevisionsOnlineRequest): Promise< model.WordsIncomingMessage< model.RejectAllRevisionsOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling rejectAllRevisionsOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.RejectAllRevisionsOnlineResponse >();
        result.response = response;
        result.body = requestObj.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Removes a range from the document.
     * @param requestObj contains request parameters
     */
    public async removeRange(requestObj: model.RemoveRangeRequest): Promise< model.WordsIncomingMessage< model.DocumentResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling removeRange.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.DocumentResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Removes a range from the document.
     * @param requestObj contains request parameters
     */
    public async removeRangeOnline(requestObj: model.RemoveRangeOnlineRequest): Promise< model.WordsIncomingMessage< model.RemoveRangeOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling removeRangeOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.RemoveRangeOnlineResponse >();
        result.response = response;
        result.body = requestObj.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Renders a DrawingObject to the specified format.
     * @param requestObj contains request parameters
     */
    public async renderDrawingObject(requestObj: model.RenderDrawingObjectRequest): Promise< model.WordsIncomingMessage< Buffer > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling renderDrawingObject.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< Buffer >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Renders a DrawingObject to the specified format.
     * @param requestObj contains request parameters
     */
    public async renderDrawingObjectOnline(requestObj: model.RenderDrawingObjectOnlineRequest): Promise< model.WordsIncomingMessage< Buffer > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling renderDrawingObjectOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< Buffer >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Renders an OfficeMath object to the specified format.
     * @param requestObj contains request parameters
     */
    public async renderMathObject(requestObj: model.RenderMathObjectRequest): Promise< model.WordsIncomingMessage< Buffer > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling renderMathObject.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< Buffer >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Renders an OfficeMath object to the specified format.
     * @param requestObj contains request parameters
     */
    public async renderMathObjectOnline(requestObj: model.RenderMathObjectOnlineRequest): Promise< model.WordsIncomingMessage< Buffer > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling renderMathObjectOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< Buffer >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Renders a page to the specified format.
     * @param requestObj contains request parameters
     */
    public async renderPage(requestObj: model.RenderPageRequest): Promise< model.WordsIncomingMessage< Buffer > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling renderPage.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< Buffer >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Renders a page to the specified format.
     * @param requestObj contains request parameters
     */
    public async renderPageOnline(requestObj: model.RenderPageOnlineRequest): Promise< model.WordsIncomingMessage< Buffer > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling renderPageOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< Buffer >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Renders a paragraph to the specified format.
     * @param requestObj contains request parameters
     */
    public async renderParagraph(requestObj: model.RenderParagraphRequest): Promise< model.WordsIncomingMessage< Buffer > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling renderParagraph.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< Buffer >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Renders a paragraph to the specified format.
     * @param requestObj contains request parameters
     */
    public async renderParagraphOnline(requestObj: model.RenderParagraphOnlineRequest): Promise< model.WordsIncomingMessage< Buffer > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling renderParagraphOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< Buffer >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Renders a table to the specified format.
     * @param requestObj contains request parameters
     */
    public async renderTable(requestObj: model.RenderTableRequest): Promise< model.WordsIncomingMessage< Buffer > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling renderTable.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< Buffer >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Renders a table to the specified format.
     * @param requestObj contains request parameters
     */
    public async renderTableOnline(requestObj: model.RenderTableOnlineRequest): Promise< model.WordsIncomingMessage< Buffer > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling renderTableOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< Buffer >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Replaces text in the document.
     * @param requestObj contains request parameters
     */
    public async replaceText(requestObj: model.ReplaceTextRequest): Promise< model.WordsIncomingMessage< model.ReplaceTextResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling replaceText.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.ReplaceTextResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Replaces text in the document.
     * @param requestObj contains request parameters
     */
    public async replaceTextOnline(requestObj: model.ReplaceTextOnlineRequest): Promise< model.WordsIncomingMessage< model.ReplaceTextOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling replaceTextOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.ReplaceTextOnlineResponse >();
        result.response = response;
        result.body = requestObj.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Replaces a range with text in the document.
     * @param requestObj contains request parameters
     */
    public async replaceWithText(requestObj: model.ReplaceWithTextRequest): Promise< model.WordsIncomingMessage< model.DocumentResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling replaceWithText.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.DocumentResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Replaces a range with text in the document.
     * @param requestObj contains request parameters
     */
    public async replaceWithTextOnline(requestObj: model.ReplaceWithTextOnlineRequest): Promise< model.WordsIncomingMessage< model.ReplaceWithTextOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling replaceWithTextOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.ReplaceWithTextOnlineResponse >();
        result.response = response;
        result.body = requestObj.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Clears the font cache.
     * @param requestObj contains request parameters
     */
    public async resetCache(requestObj: model.ResetCacheRequest): Promise< http.IncomingMessage > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling resetCache.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Converts a document in cloud storage to the specified format.
     * @param requestObj contains request parameters
     */
    public async saveAs(requestObj: model.SaveAsRequest): Promise< model.WordsIncomingMessage< model.SaveResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling saveAs.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.SaveResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Converts a document to the specified format.
     * @param requestObj contains request parameters
     */
    public async saveAsOnline(requestObj: model.SaveAsOnlineRequest): Promise< model.WordsIncomingMessage< model.SaveAsOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling saveAsOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.SaveAsOnlineResponse >();
        result.response = response;
        result.body = requestObj.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Saves a range as a new document.
     * @param requestObj contains request parameters
     */
    public async saveAsRange(requestObj: model.SaveAsRangeRequest): Promise< model.WordsIncomingMessage< model.DocumentResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling saveAsRange.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.DocumentResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Saves a range as a new document.
     * @param requestObj contains request parameters
     */
    public async saveAsRangeOnline(requestObj: model.SaveAsRangeOnlineRequest): Promise< model.WordsIncomingMessage< model.SaveAsRangeOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling saveAsRangeOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.SaveAsRangeOnlineResponse >();
        result.response = response;
        result.body = requestObj.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Converts a document in cloud storage to TIFF format using detailed conversion settings.
     * @param requestObj contains request parameters
     */
    public async saveAsTiff(requestObj: model.SaveAsTiffRequest): Promise< model.WordsIncomingMessage< model.SaveResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling saveAsTiff.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.SaveResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Converts a document to TIFF format using detailed conversion settings.
     * @param requestObj contains request parameters
     */
    public async saveAsTiffOnline(requestObj: model.SaveAsTiffOnlineRequest): Promise< model.WordsIncomingMessage< model.SaveAsTiffOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling saveAsTiffOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.SaveAsTiffOnlineResponse >();
        result.response = response;
        result.body = requestObj.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Searches text, specified by the regular expression, in the document.
     * @param requestObj contains request parameters
     */
    public async search(requestObj: model.SearchRequest): Promise< model.WordsIncomingMessage< model.SearchResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling search.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.SearchResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Searches text, specified by the regular expression, in the document.
     * @param requestObj contains request parameters
     */
    public async searchOnline(requestObj: model.SearchOnlineRequest): Promise< model.WordsIncomingMessage< model.SearchResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling searchOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.SearchResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Splits a document into parts and saves them in the specified format.
     * @param requestObj contains request parameters
     */
    public async splitDocument(requestObj: model.SplitDocumentRequest): Promise< model.WordsIncomingMessage< model.SplitDocumentResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling splitDocument.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.SplitDocumentResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Splits a document into parts and saves them in the specified format.
     * @param requestObj contains request parameters
     */
    public async splitDocumentOnline(requestObj: model.SplitDocumentOnlineRequest): Promise< model.WordsIncomingMessage< model.SplitDocumentOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling splitDocumentOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.SplitDocumentOnlineResponse >();
        result.response = response;
        result.body = requestObj.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Removes protection from the document.
     * @param requestObj contains request parameters
     */
    public async unprotectDocument(requestObj: model.UnprotectDocumentRequest): Promise< model.WordsIncomingMessage< model.ProtectionDataResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling unprotectDocument.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.ProtectionDataResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Removes protection from the document.
     * @param requestObj contains request parameters
     */
    public async unprotectDocumentOnline(requestObj: model.UnprotectDocumentOnlineRequest): Promise< model.WordsIncomingMessage< model.UnprotectDocumentOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling unprotectDocumentOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.UnprotectDocumentOnlineResponse >();
        result.response = response;
        result.body = requestObj.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Updates a bookmark in the document.
     * @param requestObj contains request parameters
     */
    public async updateBookmark(requestObj: model.UpdateBookmarkRequest): Promise< model.WordsIncomingMessage< model.BookmarkResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling updateBookmark.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.BookmarkResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Updates a bookmark in the document.
     * @param requestObj contains request parameters
     */
    public async updateBookmarkOnline(requestObj: model.UpdateBookmarkOnlineRequest): Promise< model.WordsIncomingMessage< model.UpdateBookmarkOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling updateBookmarkOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.UpdateBookmarkOnlineResponse >();
        result.response = response;
        result.body = requestObj.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * The 'nodePath' parameter should refer to a paragraph, a cell or a row.
     * @param requestObj contains request parameters
     */
    public async updateBorder(requestObj: model.UpdateBorderRequest): Promise< model.WordsIncomingMessage< model.BorderResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling updateBorder.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.BorderResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Updates a border in the document node.
     * @param requestObj contains request parameters
     */
    public async updateBorderOnline(requestObj: model.UpdateBorderOnlineRequest): Promise< model.WordsIncomingMessage< model.UpdateBorderOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling updateBorderOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.UpdateBorderOnlineResponse >();
        result.response = response;
        result.body = requestObj.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Updates a comment in the document.
     * @param requestObj contains request parameters
     */
    public async updateComment(requestObj: model.UpdateCommentRequest): Promise< model.WordsIncomingMessage< model.CommentResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling updateComment.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.CommentResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Updates a comment in the document.
     * @param requestObj contains request parameters
     */
    public async updateCommentOnline(requestObj: model.UpdateCommentOnlineRequest): Promise< model.WordsIncomingMessage< model.UpdateCommentOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling updateCommentOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.UpdateCommentOnlineResponse >();
        result.response = response;
        result.body = requestObj.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Updates the custom xml part in the document.
     * @param requestObj contains request parameters
     */
    public async updateCustomXmlPart(requestObj: model.UpdateCustomXmlPartRequest): Promise< model.WordsIncomingMessage< model.CustomXmlPartResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling updateCustomXmlPart.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.CustomXmlPartResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Updates the custom xml part in the document.
     * @param requestObj contains request parameters
     */
    public async updateCustomXmlPartOnline(requestObj: model.UpdateCustomXmlPartOnlineRequest): Promise< model.WordsIncomingMessage< model.UpdateCustomXmlPartOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling updateCustomXmlPartOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.UpdateCustomXmlPartOnlineResponse >();
        result.response = response;
        result.body = requestObj.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Updates a DrawingObject in the document node.
     * @param requestObj contains request parameters
     */
    public async updateDrawingObject(requestObj: model.UpdateDrawingObjectRequest): Promise< model.WordsIncomingMessage< model.DrawingObjectResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling updateDrawingObject.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.DrawingObjectResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Updates a DrawingObject in the document node.
     * @param requestObj contains request parameters
     */
    public async updateDrawingObjectOnline(requestObj: model.UpdateDrawingObjectOnlineRequest): Promise< model.WordsIncomingMessage< model.UpdateDrawingObjectOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling updateDrawingObjectOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.UpdateDrawingObjectOnlineResponse >();
        result.response = response;
        result.body = requestObj.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Updates a field in the document node.
     * @param requestObj contains request parameters
     */
    public async updateField(requestObj: model.UpdateFieldRequest): Promise< model.WordsIncomingMessage< model.FieldResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling updateField.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.FieldResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Updates a field in the document node.
     * @param requestObj contains request parameters
     */
    public async updateFieldOnline(requestObj: model.UpdateFieldOnlineRequest): Promise< model.WordsIncomingMessage< model.UpdateFieldOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling updateFieldOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.UpdateFieldOnlineResponse >();
        result.response = response;
        result.body = requestObj.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Reevaluates field values in the document.
     * @param requestObj contains request parameters
     */
    public async updateFields(requestObj: model.UpdateFieldsRequest): Promise< model.WordsIncomingMessage< model.DocumentResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling updateFields.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.DocumentResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reevaluates field values in the document.
     * @param requestObj contains request parameters
     */
    public async updateFieldsOnline(requestObj: model.UpdateFieldsOnlineRequest): Promise< model.WordsIncomingMessage< model.UpdateFieldsOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling updateFieldsOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.UpdateFieldsOnlineResponse >();
        result.response = response;
        result.body = requestObj.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Updates a footnote in the document node.
     * @param requestObj contains request parameters
     */
    public async updateFootnote(requestObj: model.UpdateFootnoteRequest): Promise< model.WordsIncomingMessage< model.FootnoteResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling updateFootnote.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.FootnoteResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Updates a footnote in the document node.
     * @param requestObj contains request parameters
     */
    public async updateFootnoteOnline(requestObj: model.UpdateFootnoteOnlineRequest): Promise< model.WordsIncomingMessage< model.UpdateFootnoteOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling updateFootnoteOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.UpdateFootnoteOnlineResponse >();
        result.response = response;
        result.body = requestObj.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Updates a form field in the document node.
     * @param requestObj contains request parameters
     */
    public async updateFormField(requestObj: model.UpdateFormFieldRequest): Promise< model.WordsIncomingMessage< model.FormFieldResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling updateFormField.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.FormFieldResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Updates a form field in the document node.
     * @param requestObj contains request parameters
     */
    public async updateFormFieldOnline(requestObj: model.UpdateFormFieldOnlineRequest): Promise< model.WordsIncomingMessage< model.UpdateFormFieldOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling updateFormFieldOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.UpdateFormFieldOnlineResponse >();
        result.response = response;
        result.body = requestObj.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Updates a list in the document.
     * @param requestObj contains request parameters
     */
    public async updateList(requestObj: model.UpdateListRequest): Promise< model.WordsIncomingMessage< model.ListResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling updateList.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.ListResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Updates the level of a List element in the document.
     * @param requestObj contains request parameters
     */
    public async updateListLevel(requestObj: model.UpdateListLevelRequest): Promise< model.WordsIncomingMessage< model.ListResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling updateListLevel.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.ListResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Updates the level of a List element in the document.
     * @param requestObj contains request parameters
     */
    public async updateListLevelOnline(requestObj: model.UpdateListLevelOnlineRequest): Promise< model.WordsIncomingMessage< model.UpdateListLevelOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling updateListLevelOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.UpdateListLevelOnlineResponse >();
        result.response = response;
        result.body = requestObj.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Updates a list in the document.
     * @param requestObj contains request parameters
     */
    public async updateListOnline(requestObj: model.UpdateListOnlineRequest): Promise< model.WordsIncomingMessage< model.UpdateListOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling updateListOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.UpdateListOnlineResponse >();
        result.response = response;
        result.body = requestObj.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Updates the formatting properties of a paragraph in the document node.
     * @param requestObj contains request parameters
     */
    public async updateParagraphFormat(requestObj: model.UpdateParagraphFormatRequest): Promise< model.WordsIncomingMessage< model.ParagraphFormatResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling updateParagraphFormat.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.ParagraphFormatResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Updates the formatting properties of a paragraph in the document node.
     * @param requestObj contains request parameters
     */
    public async updateParagraphFormatOnline(requestObj: model.UpdateParagraphFormatOnlineRequest): Promise< model.WordsIncomingMessage< model.UpdateParagraphFormatOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling updateParagraphFormatOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.UpdateParagraphFormatOnlineResponse >();
        result.response = response;
        result.body = requestObj.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Updates the formatting properties of a paragraph list in the document node.
     * @param requestObj contains request parameters
     */
    public async updateParagraphListFormat(requestObj: model.UpdateParagraphListFormatRequest): Promise< model.WordsIncomingMessage< model.ParagraphListFormatResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling updateParagraphListFormat.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.ParagraphListFormatResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Updates the formatting properties of a paragraph list in the document node.
     * @param requestObj contains request parameters
     */
    public async updateParagraphListFormatOnline(requestObj: model.UpdateParagraphListFormatOnlineRequest): Promise< model.WordsIncomingMessage< model.UpdateParagraphListFormatOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling updateParagraphListFormatOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.UpdateParagraphListFormatOnlineResponse >();
        result.response = response;
        result.body = requestObj.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Updates a Run object in the paragraph.
     * @param requestObj contains request parameters
     */
    public async updateRun(requestObj: model.UpdateRunRequest): Promise< model.WordsIncomingMessage< model.RunResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling updateRun.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.RunResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Updates the font properties of a Run object in the paragraph.
     * @param requestObj contains request parameters
     */
    public async updateRunFont(requestObj: model.UpdateRunFontRequest): Promise< model.WordsIncomingMessage< model.FontResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling updateRunFont.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.FontResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Updates the font properties of a Run object in the paragraph.
     * @param requestObj contains request parameters
     */
    public async updateRunFontOnline(requestObj: model.UpdateRunFontOnlineRequest): Promise< model.WordsIncomingMessage< model.UpdateRunFontOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling updateRunFontOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.UpdateRunFontOnlineResponse >();
        result.response = response;
        result.body = requestObj.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Updates a Run object in the paragraph.
     * @param requestObj contains request parameters
     */
    public async updateRunOnline(requestObj: model.UpdateRunOnlineRequest): Promise< model.WordsIncomingMessage< model.UpdateRunOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling updateRunOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.UpdateRunOnlineResponse >();
        result.response = response;
        result.body = requestObj.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Updates the page setup of a section in the document.
     * @param requestObj contains request parameters
     */
    public async updateSectionPageSetup(requestObj: model.UpdateSectionPageSetupRequest): Promise< model.WordsIncomingMessage< model.SectionPageSetupResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling updateSectionPageSetup.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.SectionPageSetupResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Updates the page setup of a section in the document.
     * @param requestObj contains request parameters
     */
    public async updateSectionPageSetupOnline(requestObj: model.UpdateSectionPageSetupOnlineRequest): Promise< model.WordsIncomingMessage< model.UpdateSectionPageSetupOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling updateSectionPageSetupOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.UpdateSectionPageSetupOnlineResponse >();
        result.response = response;
        result.body = requestObj.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Updates a style in the document.
     * @param requestObj contains request parameters
     */
    public async updateStyle(requestObj: model.UpdateStyleRequest): Promise< model.WordsIncomingMessage< model.StyleResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling updateStyle.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.StyleResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Updates a style in the document.
     * @param requestObj contains request parameters
     */
    public async updateStyleOnline(requestObj: model.UpdateStyleOnlineRequest): Promise< model.WordsIncomingMessage< model.UpdateStyleOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling updateStyleOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.UpdateStyleOnlineResponse >();
        result.response = response;
        result.body = requestObj.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Updates the formatting properties of a cell in the table row.
     * @param requestObj contains request parameters
     */
    public async updateTableCellFormat(requestObj: model.UpdateTableCellFormatRequest): Promise< model.WordsIncomingMessage< model.TableCellFormatResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling updateTableCellFormat.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.TableCellFormatResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Updates the formatting properties of a cell in the table row.
     * @param requestObj contains request parameters
     */
    public async updateTableCellFormatOnline(requestObj: model.UpdateTableCellFormatOnlineRequest): Promise< model.WordsIncomingMessage< model.UpdateTableCellFormatOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling updateTableCellFormatOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.UpdateTableCellFormatOnlineResponse >();
        result.response = response;
        result.body = requestObj.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Updates properties of a table in the document node.
     * @param requestObj contains request parameters
     */
    public async updateTableProperties(requestObj: model.UpdateTablePropertiesRequest): Promise< model.WordsIncomingMessage< model.TablePropertiesResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling updateTableProperties.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.TablePropertiesResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Updates properties of a table in the document node.
     * @param requestObj contains request parameters
     */
    public async updateTablePropertiesOnline(requestObj: model.UpdateTablePropertiesOnlineRequest): Promise< model.WordsIncomingMessage< model.UpdateTablePropertiesOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling updateTablePropertiesOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.UpdateTablePropertiesOnlineResponse >();
        result.response = response;
        result.body = requestObj.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Updates the formatting properties of a table row.
     * @param requestObj contains request parameters
     */
    public async updateTableRowFormat(requestObj: model.UpdateTableRowFormatRequest): Promise< model.WordsIncomingMessage< model.TableRowFormatResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling updateTableRowFormat.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.TableRowFormatResponse >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Updates the formatting properties of a table row.
     * @param requestObj contains request parameters
     */
    public async updateTableRowFormatOnline(requestObj: model.UpdateTableRowFormatOnlineRequest): Promise< model.WordsIncomingMessage< model.UpdateTableRowFormatOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling updateTableRowFormatOnline.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.UpdateTableRowFormatOnlineResponse >();
        result.response = response;
        result.body = requestObj.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Upload file.
     * @param requestObj contains request parameters
     */
    public async uploadFile(requestObj: model.UploadFileRequest): Promise< model.WordsIncomingMessage< model.FilesUploadResult > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling uploadFile.');
        }

        const requestOptions = requestObj.createRequestOptions(this.configuration, this.key); 

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage< model.FilesUploadResult >();    
        result.response = response;
        result.body = requestObj.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Batch request.
     * @param requests contains requests parameters
     */
     public async batch(...requests: BatchPartRequest[]): Promise<model.WordsIncomingMessage<any[]> > {
         return this.batchInternal(true, ...requests);
     }

    /**
     * Batch request withoit returning of intermediate results.
     * @param requests contains requests parameters
     */
       public async batchWithoutIntermediateResults(...requests: BatchPartRequest[]): Promise<model.WordsIncomingMessage<any[]> > {
        return this.batchInternal(false, ...requests);
    }

    /**
     * Batch request.
     * @param displayIntermediateResults display intermediate results or not
     * @param requests contains requests parameters
     */
    private async batchInternal(displayIntermediateResults:boolean = true, ...requests: BatchPartRequest[]): Promise<model.WordsIncomingMessage<any[]> > {
        if (requests === null || requests.length === 0) {
            throw new Error('Required parameter "requests" was null or empty.');
        }

        // create [id, request] map
        const requestMap =  requests.reduce(function(map, obj) {
            map[obj.id]=obj;
            return map;
        }, {});

        let url = this.configuration.getApiBaseUrl() + "/words/batch";
        if(!displayIntermediateResults){
            url += '?displayIntermediateResults=false';
        }

        // create a batch request
        const requestOptions: request.Options = {
            method: "PUT",
            uri: url,
            headers: {
                "Content-Type": "multipart/mixed",
            },
        };

        const querystring = require('querystring');
        const requestParts = [];

        for (const requestObj of requests) {
            const options = requestObj.createRequestOptions(this.configuration, this.key);

            let bodyString = options.method + " " + options.uri.toString().replace(this.configuration.getApiBaseUrl() + "/words/", "") + (Object.keys(options.qs).length ? '?' + querystring.stringify(options.qs) : "") + "\r\n";

            if (options.formData == null) {
                if (options.body != null) {
                    bodyString += "Content-Type: application/json; charset=utf-8\r\n";
                }

                bodyString += "RequestId: " + requestObj.id + "\r\n";
                if (requestObj.parentId) {
                    bodyString += "DependsOn: " + requestObj.parentId + "\r\n";
                }

                bodyString += "\r\n";

                if (options.body != null) {
                    bodyString += JSON.stringify(options.body);
                }

                const textPart = {
                    'Content-Type': 'application/http; msgtype=request',
                    'Content-Disposition': 'form-data',
                    body: bodyString,
                };

                requestParts.push(textPart);
            }
            else {
                const formData = options.formData;
                const requestForm = new FormData();
                const appendFormValue = async function (key, value) {

                    const readStream = async function (stream: Readable): Promise<Buffer> {
                        const chunks = [];
                        for await (const x of stream) {
                            chunks.push(x);
                        }
                        return Buffer.concat(chunks);
                    };

                    if (value instanceof require("stream").Readable) {
                        try {
                            value = {
                                value: await readStream(value),
                                options: {
                                    filename: key
                                }
                            };
                        }
                        catch (error) {
                            throw error;
                        }
                    }

                    if (value && value.hasOwnProperty('value') && value.hasOwnProperty('options')) {
                        requestForm.append(key, value.value, value.options)
                    } else {
                        requestForm.append(key, value)
                    }
                };

                for (const formKey in formData) {
                    if (formData.hasOwnProperty(formKey)) {
                        const formValue = formData[formKey];
                        if (formValue instanceof Array) {
                            for (const formValueElement of formValue) {
                                await appendFormValue(formKey, formValueElement);
                            }
                        } else {
                            await appendFormValue(formKey, formValue);
                        }
                    }
                }

                bodyString += "Content-Type: " + requestForm.getHeaders()["content-type"] + "\r\n";

                bodyString += "RequestId: " + requestObj.id + "\r\n";
                if (requestObj.parentId) {
                    bodyString += "DependsOn: " + requestObj.parentId + "\r\n";
                }

                bodyString += "\r\n";

                const formPart = {
                    'Content-Type': 'application/http; msgtype=request',
                    'Content-Disposition': 'form-data',
                    body: Buffer.concat([Buffer.from(bodyString), requestForm.getBuffer()]),
                };

                requestParts.push(formPart);
            }
        }

        requestOptions.multipart = requestParts;
        requestOptions.encoding = null;

        const response = await invokeApiMethod(requestOptions, this.configuration);

        // parse the response
        const responseParts = parseMultipartBody(response.body, getBoundary(response.headers), true);

        const data = new Array();
        for (const responsePart of responseParts) {
            if (responsePart.code < 200 && responsePart.code > 299) {
                const bodyContent = JSON.parse(response.body);
                data.push(ObjectSerializer.deserialize(bodyContent, "WordsApiErrorResponse"));
            }
            else {
                if (responsePart.body != null) {
                    /* tslint:disable-next-line:no-string-literal */
                    const id = responsePart.headers["requestid"];

                    if (parseInt(responsePart.headers["content-length"], 10) === 0) {
                        data.push(null);
                        continue;
                    }

                    switch (responsePart.headers["content-type"].split(';')[0]) {
                        case "application/json": {
                            data.push(requestMap[id].createResponse(JSON.parse(responsePart.body)));
                            break;
                        }
                        case "application/octet-stream": {
                            data.push(requestMap[id].createResponse(responsePart.body));
                            break;
                        }
                        case "multipart/mixed": {
                            const partBoundary = getBoundary(responsePart.headers);
                            data.push(requestMap[id].createResponse(responsePart.body, partBoundary));
                            break;
                        }
                        default: {
                            throw new Error("Unknown response type: " + responsePart.headers["content-type"]);
                        }
                    }
                }
            }
        }

        const result: model.WordsIncomingMessage<any[]> = { response, body: data };
        return Promise.resolve(result);
    }
}

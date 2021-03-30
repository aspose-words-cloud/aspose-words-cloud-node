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

import { Configuration } from "./internal/configuration";
import { invokeApiMethod, getBoundary } from "./internal/requestHelper";
import { ObjectSerializer } from "./internal/objectSerializer";
import * as model from "./model/model";

export * from "./model/model";

/**
 * Library for communicating with the Aspose.Words for Cloud API
 */
export class WordsApi {
    /**
     * API configuration
     */
    public configuration: Configuration;

    /**
     * @param clientId.
     * @param clientSecret.
     * @param baseUrl Base api Url.
     * @param debugMode A value indicating whether debug mode. In debug mode all requests and responses are logged to console.
     */
    constructor(clientId: string, clientSecret: string, baseUrl?: string, debugMode?: boolean) {
        this.configuration = new Configuration(clientId, clientSecret, baseUrl, debugMode);
    }

    /**
     * Accepts all revisions in the document.
     * @param request contains request parameters
     */
    public async acceptAllRevisions(request: model.AcceptAllRevisionsRequest): Promise<model.WordsIncomingMessage<model.RevisionsModificationResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling acceptAllRevisions.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.RevisionsModificationResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Accepts all revisions in the document.
     * @param request contains request parameters
     */
    public async acceptAllRevisionsOnline(request: model.AcceptAllRevisionsOnlineRequest): Promise<model.WordsIncomingMessage<model.AcceptAllRevisionsOnlineResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling acceptAllRevisionsOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.AcceptAllRevisionsOnlineResponse>();
        result.response = response;
        result.body = request.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Appends documents to the original document.
     * @param request contains request parameters
     */
    public async appendDocument(request: model.AppendDocumentRequest): Promise<model.WordsIncomingMessage<model.DocumentResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling appendDocument.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.DocumentResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Appends documents to the original document.
     * @param request contains request parameters
     */
    public async appendDocumentOnline(request: model.AppendDocumentOnlineRequest): Promise<model.WordsIncomingMessage<model.AppendDocumentOnlineResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling appendDocumentOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.AppendDocumentOnlineResponse>();
        result.response = response;
        result.body = request.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Applies a style to the document node.
     * @param request contains request parameters
     */
    public async applyStyleToDocumentElement(request: model.ApplyStyleToDocumentElementRequest): Promise<model.WordsIncomingMessage<model.WordsResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling applyStyleToDocumentElement.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.WordsResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Applies a style to the document node.
     * @param request contains request parameters
     */
    public async applyStyleToDocumentElementOnline(request: model.ApplyStyleToDocumentElementOnlineRequest): Promise<model.WordsIncomingMessage<model.ApplyStyleToDocumentElementOnlineResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling applyStyleToDocumentElementOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.ApplyStyleToDocumentElementOnlineResponse>();
        result.response = response;
        result.body = request.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Executes the report generation process using the specified document template and the external data source in XML, JSON or CSV format.
     * @param request contains request parameters
     */
    public async buildReport(request: model.BuildReportRequest): Promise<model.WordsIncomingMessage<model.DocumentResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling buildReport.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.DocumentResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Executes the report generation process online using the specified document template and the external data source in XML, JSON or CSV format.
     * @param request contains request parameters
     */
    public async buildReportOnline(request: model.BuildReportOnlineRequest): Promise<model.WordsIncomingMessage<Buffer>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling buildReportOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<Buffer>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Runs a multi-class text classification for the specified raw text.
     * @param request contains request parameters
     */
    public async classify(request: model.ClassifyRequest): Promise<model.WordsIncomingMessage<model.ClassificationResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling classify.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.ClassificationResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Runs a multi-class text classification for the document.
     * @param request contains request parameters
     */
    public async classifyDocument(request: model.ClassifyDocumentRequest): Promise<model.WordsIncomingMessage<model.ClassificationResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling classifyDocument.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.ClassificationResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Runs a multi-class text classification for the document.
     * @param request contains request parameters
     */
    public async classifyDocumentOnline(request: model.ClassifyDocumentOnlineRequest): Promise<model.WordsIncomingMessage<model.ClassificationResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling classifyDocumentOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.ClassificationResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Compares two documents.
     * @param request contains request parameters
     */
    public async compareDocument(request: model.CompareDocumentRequest): Promise<model.WordsIncomingMessage<model.DocumentResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling compareDocument.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.DocumentResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Compares two documents.
     * @param request contains request parameters
     */
    public async compareDocumentOnline(request: model.CompareDocumentOnlineRequest): Promise<model.WordsIncomingMessage<model.CompareDocumentOnlineResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling compareDocumentOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.CompareDocumentOnlineResponse>();
        result.response = response;
        result.body = request.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Converts a document on a local drive to the specified format.
     * @param request contains request parameters
     */
    public async convertDocument(request: model.ConvertDocumentRequest): Promise<model.WordsIncomingMessage<Buffer>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling convertDocument.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<Buffer>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Copy file.
     * @param request contains request parameters
     */
    public async copyFile(request: model.CopyFileRequest): Promise<http.IncomingMessage> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling copyFile.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Copy folder.
     * @param request contains request parameters
     */
    public async copyFolder(request: model.CopyFolderRequest): Promise<http.IncomingMessage> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling copyFolder.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Makes a copy of the style in the document.
     * @param request contains request parameters
     */
    public async copyStyle(request: model.CopyStyleRequest): Promise<model.WordsIncomingMessage<model.StyleResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling copyStyle.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.StyleResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Makes a copy of the style in the document.
     * @param request contains request parameters
     */
    public async copyStyleOnline(request: model.CopyStyleOnlineRequest): Promise<model.WordsIncomingMessage<model.CopyStyleOnlineResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling copyStyleOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.CopyStyleOnlineResponse>();
        result.response = response;
        result.body = request.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Supported extensions: ".doc", ".docx", ".docm", ".dot", ".dotm", ".dotx", ".flatopc", ".fopc", ".flatopc_macro", ".fopc_macro", ".flatopc_template", ".fopc_template", ".flatopc_template_macro", ".fopc_template_macro", ".wordml", ".wml", ".rtf".
     * @param request contains request parameters
     */
    public async createDocument(request: model.CreateDocumentRequest): Promise<model.WordsIncomingMessage<model.DocumentResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling createDocument.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.DocumentResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Create the folder.
     * @param request contains request parameters
     */
    public async createFolder(request: model.CreateFolderRequest): Promise<http.IncomingMessage> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling createFolder.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Adds a new or updates an existing document property.
     * @param request contains request parameters
     */
    public async createOrUpdateDocumentProperty(request: model.CreateOrUpdateDocumentPropertyRequest): Promise<model.WordsIncomingMessage<model.DocumentPropertyResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling createOrUpdateDocumentProperty.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.DocumentPropertyResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Adds a new or updates an existing document property.
     * @param request contains request parameters
     */
    public async createOrUpdateDocumentPropertyOnline(request: model.CreateOrUpdateDocumentPropertyOnlineRequest): Promise<model.WordsIncomingMessage<model.CreateOrUpdateDocumentPropertyOnlineResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling createOrUpdateDocumentPropertyOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.CreateOrUpdateDocumentPropertyOnlineResponse>();
        result.response = response;
        result.body = request.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Removes paragraph tab stops from the document node.
     * @param request contains request parameters
     */
    public async deleteAllParagraphTabStops(request: model.DeleteAllParagraphTabStopsRequest): Promise<model.WordsIncomingMessage<model.TabStopsResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteAllParagraphTabStops.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.TabStopsResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Removes paragraph tab stops from the document node.
     * @param request contains request parameters
     */
    public async deleteAllParagraphTabStopsOnline(request: model.DeleteAllParagraphTabStopsOnlineRequest): Promise<model.WordsIncomingMessage<model.DeleteAllParagraphTabStopsOnlineResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteAllParagraphTabStopsOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.DeleteAllParagraphTabStopsOnlineResponse>();
        result.response = response;
        result.body = request.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * The 'nodePath' parameter should refer to a paragraph, a cell or a row.
     * @param request contains request parameters
     */
    public async deleteBorder(request: model.DeleteBorderRequest): Promise<model.WordsIncomingMessage<model.BorderResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteBorder.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.BorderResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Removes a border from the document node.
     * @param request contains request parameters
     */
    public async deleteBorderOnline(request: model.DeleteBorderOnlineRequest): Promise<model.WordsIncomingMessage<model.DeleteBorderOnlineResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteBorderOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.DeleteBorderOnlineResponse>();
        result.response = response;
        result.body = request.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * The 'nodePath' parameter should refer to a paragraph, a cell or a row.
     * @param request contains request parameters
     */
    public async deleteBorders(request: model.DeleteBordersRequest): Promise<model.WordsIncomingMessage<model.BordersResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteBorders.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.BordersResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Removes borders from the document node.
     * @param request contains request parameters
     */
    public async deleteBordersOnline(request: model.DeleteBordersOnlineRequest): Promise<model.WordsIncomingMessage<model.DeleteBordersOnlineResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteBordersOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.DeleteBordersOnlineResponse>();
        result.response = response;
        result.body = request.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Removes a comment from the document.
     * @param request contains request parameters
     */
    public async deleteComment(request: model.DeleteCommentRequest): Promise<http.IncomingMessage> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteComment.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Removes a comment from the document.
     * @param request contains request parameters
     */
    public async deleteCommentOnline(request: model.DeleteCommentOnlineRequest): Promise<model.WordsIncomingMessage<Buffer>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteCommentOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<Buffer>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Removes all comments from the document.
     * @param request contains request parameters
     */
    public async deleteComments(request: model.DeleteCommentsRequest): Promise<http.IncomingMessage> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteComments.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Removes all comments from the document.
     * @param request contains request parameters
     */
    public async deleteCommentsOnline(request: model.DeleteCommentsOnlineRequest): Promise<model.WordsIncomingMessage<Buffer>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteCommentsOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<Buffer>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Removes a document property.
     * @param request contains request parameters
     */
    public async deleteDocumentProperty(request: model.DeleteDocumentPropertyRequest): Promise<http.IncomingMessage> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteDocumentProperty.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Removes a document property.
     * @param request contains request parameters
     */
    public async deleteDocumentPropertyOnline(request: model.DeleteDocumentPropertyOnlineRequest): Promise<model.WordsIncomingMessage<Buffer>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteDocumentPropertyOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<Buffer>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Removes a DrawingObject from the document node.
     * @param request contains request parameters
     */
    public async deleteDrawingObject(request: model.DeleteDrawingObjectRequest): Promise<http.IncomingMessage> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteDrawingObject.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Removes a DrawingObject from the document node.
     * @param request contains request parameters
     */
    public async deleteDrawingObjectOnline(request: model.DeleteDrawingObjectOnlineRequest): Promise<model.WordsIncomingMessage<Buffer>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteDrawingObjectOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<Buffer>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Removes a field from the document node.
     * @param request contains request parameters
     */
    public async deleteField(request: model.DeleteFieldRequest): Promise<http.IncomingMessage> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteField.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Removes a field from the document node.
     * @param request contains request parameters
     */
    public async deleteFieldOnline(request: model.DeleteFieldOnlineRequest): Promise<model.WordsIncomingMessage<Buffer>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteFieldOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<Buffer>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Removes fields from the document node.
     * @param request contains request parameters
     */
    public async deleteFields(request: model.DeleteFieldsRequest): Promise<http.IncomingMessage> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteFields.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Removes fields from the document node.
     * @param request contains request parameters
     */
    public async deleteFieldsOnline(request: model.DeleteFieldsOnlineRequest): Promise<model.WordsIncomingMessage<Buffer>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteFieldsOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<Buffer>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Delete file.
     * @param request contains request parameters
     */
    public async deleteFile(request: model.DeleteFileRequest): Promise<http.IncomingMessage> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteFile.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Delete folder.
     * @param request contains request parameters
     */
    public async deleteFolder(request: model.DeleteFolderRequest): Promise<http.IncomingMessage> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteFolder.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Removes a footnote from the document node.
     * @param request contains request parameters
     */
    public async deleteFootnote(request: model.DeleteFootnoteRequest): Promise<http.IncomingMessage> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteFootnote.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Removes a footnote from the document node.
     * @param request contains request parameters
     */
    public async deleteFootnoteOnline(request: model.DeleteFootnoteOnlineRequest): Promise<model.WordsIncomingMessage<Buffer>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteFootnoteOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<Buffer>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Removes a form field from the document node.
     * @param request contains request parameters
     */
    public async deleteFormField(request: model.DeleteFormFieldRequest): Promise<http.IncomingMessage> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteFormField.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Removes a form field from the document node.
     * @param request contains request parameters
     */
    public async deleteFormFieldOnline(request: model.DeleteFormFieldOnlineRequest): Promise<model.WordsIncomingMessage<Buffer>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteFormFieldOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<Buffer>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Removes a HeaderFooter object from the document section.
     * @param request contains request parameters
     */
    public async deleteHeaderFooter(request: model.DeleteHeaderFooterRequest): Promise<http.IncomingMessage> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteHeaderFooter.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Removes a HeaderFooter object from the document section.
     * @param request contains request parameters
     */
    public async deleteHeaderFooterOnline(request: model.DeleteHeaderFooterOnlineRequest): Promise<model.WordsIncomingMessage<Buffer>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteHeaderFooterOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<Buffer>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Removes HeaderFooter objects from the document section.
     * @param request contains request parameters
     */
    public async deleteHeadersFooters(request: model.DeleteHeadersFootersRequest): Promise<http.IncomingMessage> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteHeadersFooters.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Removes HeaderFooter objects from the document section.
     * @param request contains request parameters
     */
    public async deleteHeadersFootersOnline(request: model.DeleteHeadersFootersOnlineRequest): Promise<model.WordsIncomingMessage<Buffer>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteHeadersFootersOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<Buffer>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Removes macros from the document.
     * @param request contains request parameters
     */
    public async deleteMacros(request: model.DeleteMacrosRequest): Promise<http.IncomingMessage> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteMacros.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Removes macros from the document.
     * @param request contains request parameters
     */
    public async deleteMacrosOnline(request: model.DeleteMacrosOnlineRequest): Promise<model.WordsIncomingMessage<Buffer>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteMacrosOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<Buffer>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Removes an OfficeMath object from the document node.
     * @param request contains request parameters
     */
    public async deleteOfficeMathObject(request: model.DeleteOfficeMathObjectRequest): Promise<http.IncomingMessage> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteOfficeMathObject.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Removes an OfficeMath object from the document node.
     * @param request contains request parameters
     */
    public async deleteOfficeMathObjectOnline(request: model.DeleteOfficeMathObjectOnlineRequest): Promise<model.WordsIncomingMessage<Buffer>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteOfficeMathObjectOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<Buffer>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Removes a paragraph from the document node.
     * @param request contains request parameters
     */
    public async deleteParagraph(request: model.DeleteParagraphRequest): Promise<http.IncomingMessage> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteParagraph.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Removes the formatting properties of a paragraph list from the document node.
     * @param request contains request parameters
     */
    public async deleteParagraphListFormat(request: model.DeleteParagraphListFormatRequest): Promise<model.WordsIncomingMessage<model.ParagraphListFormatResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteParagraphListFormat.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.ParagraphListFormatResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Removes the formatting properties of a paragraph list from the document node.
     * @param request contains request parameters
     */
    public async deleteParagraphListFormatOnline(request: model.DeleteParagraphListFormatOnlineRequest): Promise<model.WordsIncomingMessage<model.DeleteParagraphListFormatOnlineResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteParagraphListFormatOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.DeleteParagraphListFormatOnlineResponse>();
        result.response = response;
        result.body = request.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Removes a paragraph from the document node.
     * @param request contains request parameters
     */
    public async deleteParagraphOnline(request: model.DeleteParagraphOnlineRequest): Promise<model.WordsIncomingMessage<Buffer>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteParagraphOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<Buffer>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Removes a paragraph tab stop from the document node.
     * @param request contains request parameters
     */
    public async deleteParagraphTabStop(request: model.DeleteParagraphTabStopRequest): Promise<model.WordsIncomingMessage<model.TabStopsResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteParagraphTabStop.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.TabStopsResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Removes a paragraph tab stop from the document node.
     * @param request contains request parameters
     */
    public async deleteParagraphTabStopOnline(request: model.DeleteParagraphTabStopOnlineRequest): Promise<model.WordsIncomingMessage<model.DeleteParagraphTabStopOnlineResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteParagraphTabStopOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.DeleteParagraphTabStopOnlineResponse>();
        result.response = response;
        result.body = request.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Removes a Run object from the paragraph.
     * @param request contains request parameters
     */
    public async deleteRun(request: model.DeleteRunRequest): Promise<http.IncomingMessage> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteRun.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Removes a Run object from the paragraph.
     * @param request contains request parameters
     */
    public async deleteRunOnline(request: model.DeleteRunOnlineRequest): Promise<model.WordsIncomingMessage<Buffer>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteRunOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<Buffer>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Removes a section from the document.
     * @param request contains request parameters
     */
    public async deleteSection(request: model.DeleteSectionRequest): Promise<http.IncomingMessage> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteSection.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Removes a section from the document.
     * @param request contains request parameters
     */
    public async deleteSectionOnline(request: model.DeleteSectionOnlineRequest): Promise<model.WordsIncomingMessage<Buffer>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteSectionOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<Buffer>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Removes a table from the document node.
     * @param request contains request parameters
     */
    public async deleteTable(request: model.DeleteTableRequest): Promise<http.IncomingMessage> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteTable.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Removes a cell from the table row.
     * @param request contains request parameters
     */
    public async deleteTableCell(request: model.DeleteTableCellRequest): Promise<http.IncomingMessage> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteTableCell.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Removes a cell from the table row.
     * @param request contains request parameters
     */
    public async deleteTableCellOnline(request: model.DeleteTableCellOnlineRequest): Promise<model.WordsIncomingMessage<Buffer>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteTableCellOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<Buffer>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Removes a table from the document node.
     * @param request contains request parameters
     */
    public async deleteTableOnline(request: model.DeleteTableOnlineRequest): Promise<model.WordsIncomingMessage<Buffer>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteTableOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<Buffer>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Removes a row from the table.
     * @param request contains request parameters
     */
    public async deleteTableRow(request: model.DeleteTableRowRequest): Promise<http.IncomingMessage> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteTableRow.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Removes a row from the table.
     * @param request contains request parameters
     */
    public async deleteTableRowOnline(request: model.DeleteTableRowOnlineRequest): Promise<model.WordsIncomingMessage<Buffer>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteTableRowOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<Buffer>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Removes a watermark from the document.
     * @param request contains request parameters
     */
    public async deleteWatermark(request: model.DeleteWatermarkRequest): Promise<model.WordsIncomingMessage<model.DocumentResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteWatermark.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.DocumentResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Removes a watermark from the document.
     * @param request contains request parameters
     */
    public async deleteWatermarkOnline(request: model.DeleteWatermarkOnlineRequest): Promise<model.WordsIncomingMessage<model.DeleteWatermarkOnlineResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling deleteWatermarkOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.DeleteWatermarkOnlineResponse>();
        result.response = response;
        result.body = request.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Download file.
     * @param request contains request parameters
     */
    public async downloadFile(request: model.DownloadFileRequest): Promise<model.WordsIncomingMessage<Buffer>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling downloadFile.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<Buffer>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Executes a Mail Merge operation.
     * @param request contains request parameters
     */
    public async executeMailMerge(request: model.ExecuteMailMergeRequest): Promise<model.WordsIncomingMessage<model.DocumentResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling executeMailMerge.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.DocumentResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Executes a Mail Merge operation online.
     * @param request contains request parameters
     */
    public async executeMailMergeOnline(request: model.ExecuteMailMergeOnlineRequest): Promise<model.WordsIncomingMessage<Buffer>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling executeMailMergeOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<Buffer>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads available fonts from the document.
     * @param request contains request parameters
     */
    public async getAvailableFonts(request: model.GetAvailableFontsRequest): Promise<model.WordsIncomingMessage<model.AvailableFontsResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getAvailableFonts.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.AvailableFontsResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads a bookmark, specified by name, from the document.
     * @param request contains request parameters
     */
    public async getBookmarkByName(request: model.GetBookmarkByNameRequest): Promise<model.WordsIncomingMessage<model.BookmarkResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getBookmarkByName.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.BookmarkResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads a bookmark, specified by name, from the document.
     * @param request contains request parameters
     */
    public async getBookmarkByNameOnline(request: model.GetBookmarkByNameOnlineRequest): Promise<model.WordsIncomingMessage<model.BookmarkResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getBookmarkByNameOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.BookmarkResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads bookmarks from the document.
     * @param request contains request parameters
     */
    public async getBookmarks(request: model.GetBookmarksRequest): Promise<model.WordsIncomingMessage<model.BookmarksResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getBookmarks.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.BookmarksResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads bookmarks from the document.
     * @param request contains request parameters
     */
    public async getBookmarksOnline(request: model.GetBookmarksOnlineRequest): Promise<model.WordsIncomingMessage<model.BookmarksResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getBookmarksOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.BookmarksResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * The 'nodePath' parameter should refer to a paragraph, a cell or a row.
     * @param request contains request parameters
     */
    public async getBorder(request: model.GetBorderRequest): Promise<model.WordsIncomingMessage<model.BorderResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getBorder.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.BorderResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads a border from the document node.
     * @param request contains request parameters
     */
    public async getBorderOnline(request: model.GetBorderOnlineRequest): Promise<model.WordsIncomingMessage<model.BorderResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getBorderOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.BorderResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads borders from the document node.
     * @param request contains request parameters
     */
    public async getBorders(request: model.GetBordersRequest): Promise<model.WordsIncomingMessage<model.BordersResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getBorders.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.BordersResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads borders from the document node.
     * @param request contains request parameters
     */
    public async getBordersOnline(request: model.GetBordersOnlineRequest): Promise<model.WordsIncomingMessage<model.BordersResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getBordersOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.BordersResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads a comment from the document.
     * @param request contains request parameters
     */
    public async getComment(request: model.GetCommentRequest): Promise<model.WordsIncomingMessage<model.CommentResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getComment.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.CommentResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads a comment from the document.
     * @param request contains request parameters
     */
    public async getCommentOnline(request: model.GetCommentOnlineRequest): Promise<model.WordsIncomingMessage<model.CommentResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getCommentOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.CommentResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads comments from the document.
     * @param request contains request parameters
     */
    public async getComments(request: model.GetCommentsRequest): Promise<model.WordsIncomingMessage<model.CommentsResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getComments.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.CommentsResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads comments from the document.
     * @param request contains request parameters
     */
    public async getCommentsOnline(request: model.GetCommentsOnlineRequest): Promise<model.WordsIncomingMessage<model.CommentsResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getCommentsOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.CommentsResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads common information from the document.
     * @param request contains request parameters
     */
    public async getDocument(request: model.GetDocumentRequest): Promise<model.WordsIncomingMessage<model.DocumentResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getDocument.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.DocumentResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads a DrawingObject from the document node.
     * @param request contains request parameters
     */
    public async getDocumentDrawingObjectByIndex(request: model.GetDocumentDrawingObjectByIndexRequest): Promise<model.WordsIncomingMessage<model.DrawingObjectResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getDocumentDrawingObjectByIndex.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.DrawingObjectResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads a DrawingObject from the document node.
     * @param request contains request parameters
     */
    public async getDocumentDrawingObjectByIndexOnline(request: model.GetDocumentDrawingObjectByIndexOnlineRequest): Promise<model.WordsIncomingMessage<model.DrawingObjectResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getDocumentDrawingObjectByIndexOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.DrawingObjectResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads image data of a DrawingObject from the document node.
     * @param request contains request parameters
     */
    public async getDocumentDrawingObjectImageData(request: model.GetDocumentDrawingObjectImageDataRequest): Promise<model.WordsIncomingMessage<Buffer>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getDocumentDrawingObjectImageData.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<Buffer>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads image data of a DrawingObject from the document node.
     * @param request contains request parameters
     */
    public async getDocumentDrawingObjectImageDataOnline(request: model.GetDocumentDrawingObjectImageDataOnlineRequest): Promise<model.WordsIncomingMessage<Buffer>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getDocumentDrawingObjectImageDataOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<Buffer>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads OLE data of a DrawingObject from the document node.
     * @param request contains request parameters
     */
    public async getDocumentDrawingObjectOleData(request: model.GetDocumentDrawingObjectOleDataRequest): Promise<model.WordsIncomingMessage<Buffer>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getDocumentDrawingObjectOleData.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<Buffer>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads OLE data of a DrawingObject from the document node.
     * @param request contains request parameters
     */
    public async getDocumentDrawingObjectOleDataOnline(request: model.GetDocumentDrawingObjectOleDataOnlineRequest): Promise<model.WordsIncomingMessage<Buffer>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getDocumentDrawingObjectOleDataOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<Buffer>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads DrawingObjects from the document node.
     * @param request contains request parameters
     */
    public async getDocumentDrawingObjects(request: model.GetDocumentDrawingObjectsRequest): Promise<model.WordsIncomingMessage<model.DrawingObjectsResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getDocumentDrawingObjects.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.DrawingObjectsResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads DrawingObjects from the document node.
     * @param request contains request parameters
     */
    public async getDocumentDrawingObjectsOnline(request: model.GetDocumentDrawingObjectsOnlineRequest): Promise<model.WordsIncomingMessage<model.DrawingObjectsResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getDocumentDrawingObjectsOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.DrawingObjectsResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads merge field names from the document.
     * @param request contains request parameters
     */
    public async getDocumentFieldNames(request: model.GetDocumentFieldNamesRequest): Promise<model.WordsIncomingMessage<model.FieldNamesResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getDocumentFieldNames.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.FieldNamesResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads merge field names from the document.
     * @param request contains request parameters
     */
    public async getDocumentFieldNamesOnline(request: model.GetDocumentFieldNamesOnlineRequest): Promise<model.WordsIncomingMessage<model.FieldNamesResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getDocumentFieldNamesOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.FieldNamesResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads a hyperlink from the document.
     * @param request contains request parameters
     */
    public async getDocumentHyperlinkByIndex(request: model.GetDocumentHyperlinkByIndexRequest): Promise<model.WordsIncomingMessage<model.HyperlinkResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getDocumentHyperlinkByIndex.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.HyperlinkResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads a hyperlink from the document.
     * @param request contains request parameters
     */
    public async getDocumentHyperlinkByIndexOnline(request: model.GetDocumentHyperlinkByIndexOnlineRequest): Promise<model.WordsIncomingMessage<model.HyperlinkResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getDocumentHyperlinkByIndexOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.HyperlinkResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads hyperlinks from the document.
     * @param request contains request parameters
     */
    public async getDocumentHyperlinks(request: model.GetDocumentHyperlinksRequest): Promise<model.WordsIncomingMessage<model.HyperlinksResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getDocumentHyperlinks.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.HyperlinksResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads hyperlinks from the document.
     * @param request contains request parameters
     */
    public async getDocumentHyperlinksOnline(request: model.GetDocumentHyperlinksOnlineRequest): Promise<model.WordsIncomingMessage<model.HyperlinksResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getDocumentHyperlinksOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.HyperlinksResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads document properties.
     * @param request contains request parameters
     */
    public async getDocumentProperties(request: model.GetDocumentPropertiesRequest): Promise<model.WordsIncomingMessage<model.DocumentPropertiesResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getDocumentProperties.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.DocumentPropertiesResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads document properties.
     * @param request contains request parameters
     */
    public async getDocumentPropertiesOnline(request: model.GetDocumentPropertiesOnlineRequest): Promise<model.WordsIncomingMessage<model.DocumentPropertiesResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getDocumentPropertiesOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.DocumentPropertiesResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads a document property.
     * @param request contains request parameters
     */
    public async getDocumentProperty(request: model.GetDocumentPropertyRequest): Promise<model.WordsIncomingMessage<model.DocumentPropertyResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getDocumentProperty.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.DocumentPropertyResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads a document property.
     * @param request contains request parameters
     */
    public async getDocumentPropertyOnline(request: model.GetDocumentPropertyOnlineRequest): Promise<model.WordsIncomingMessage<model.DocumentPropertyResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getDocumentPropertyOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.DocumentPropertyResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads protection properties from the document.
     * @param request contains request parameters
     */
    public async getDocumentProtection(request: model.GetDocumentProtectionRequest): Promise<model.WordsIncomingMessage<model.ProtectionDataResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getDocumentProtection.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.ProtectionDataResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads protection properties from the document.
     * @param request contains request parameters
     */
    public async getDocumentProtectionOnline(request: model.GetDocumentProtectionOnlineRequest): Promise<model.WordsIncomingMessage<model.ProtectionDataResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getDocumentProtectionOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.ProtectionDataResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads document statistics.
     * @param request contains request parameters
     */
    public async getDocumentStatistics(request: model.GetDocumentStatisticsRequest): Promise<model.WordsIncomingMessage<model.StatDataResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getDocumentStatistics.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.StatDataResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads document statistics.
     * @param request contains request parameters
     */
    public async getDocumentStatisticsOnline(request: model.GetDocumentStatisticsOnlineRequest): Promise<model.WordsIncomingMessage<model.StatDataResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getDocumentStatisticsOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.StatDataResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Converts a document in cloud storage to the specified format.
     * @param request contains request parameters
     */
    public async getDocumentWithFormat(request: model.GetDocumentWithFormatRequest): Promise<model.WordsIncomingMessage<Buffer>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getDocumentWithFormat.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<Buffer>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads a field from the document node.
     * @param request contains request parameters
     */
    public async getField(request: model.GetFieldRequest): Promise<model.WordsIncomingMessage<model.FieldResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getField.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.FieldResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads a field from the document node.
     * @param request contains request parameters
     */
    public async getFieldOnline(request: model.GetFieldOnlineRequest): Promise<model.WordsIncomingMessage<model.FieldResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getFieldOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.FieldResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads fields from the document node.
     * @param request contains request parameters
     */
    public async getFields(request: model.GetFieldsRequest): Promise<model.WordsIncomingMessage<model.FieldsResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getFields.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.FieldsResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads fields from the document node.
     * @param request contains request parameters
     */
    public async getFieldsOnline(request: model.GetFieldsOnlineRequest): Promise<model.WordsIncomingMessage<model.FieldsResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getFieldsOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.FieldsResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Get all files and folders within a folder.
     * @param request contains request parameters
     */
    public async getFilesList(request: model.GetFilesListRequest): Promise<model.WordsIncomingMessage<model.FilesList>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getFilesList.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.FilesList>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads a footnote from the document node.
     * @param request contains request parameters
     */
    public async getFootnote(request: model.GetFootnoteRequest): Promise<model.WordsIncomingMessage<model.FootnoteResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getFootnote.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.FootnoteResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads a footnote from the document node.
     * @param request contains request parameters
     */
    public async getFootnoteOnline(request: model.GetFootnoteOnlineRequest): Promise<model.WordsIncomingMessage<model.FootnoteResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getFootnoteOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.FootnoteResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads footnotes from the document node.
     * @param request contains request parameters
     */
    public async getFootnotes(request: model.GetFootnotesRequest): Promise<model.WordsIncomingMessage<model.FootnotesResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getFootnotes.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.FootnotesResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads footnotes from the document node.
     * @param request contains request parameters
     */
    public async getFootnotesOnline(request: model.GetFootnotesOnlineRequest): Promise<model.WordsIncomingMessage<model.FootnotesResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getFootnotesOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.FootnotesResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads a form field from the document node.
     * @param request contains request parameters
     */
    public async getFormField(request: model.GetFormFieldRequest): Promise<model.WordsIncomingMessage<model.FormFieldResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getFormField.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.FormFieldResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads a form field from the document node.
     * @param request contains request parameters
     */
    public async getFormFieldOnline(request: model.GetFormFieldOnlineRequest): Promise<model.WordsIncomingMessage<model.FormFieldResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getFormFieldOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.FormFieldResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads form fields from the document node.
     * @param request contains request parameters
     */
    public async getFormFields(request: model.GetFormFieldsRequest): Promise<model.WordsIncomingMessage<model.FormFieldsResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getFormFields.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.FormFieldsResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads form fields from the document node.
     * @param request contains request parameters
     */
    public async getFormFieldsOnline(request: model.GetFormFieldsOnlineRequest): Promise<model.WordsIncomingMessage<model.FormFieldsResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getFormFieldsOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.FormFieldsResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads a HeaderFooter object from the document.
     * @param request contains request parameters
     */
    public async getHeaderFooter(request: model.GetHeaderFooterRequest): Promise<model.WordsIncomingMessage<model.HeaderFooterResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getHeaderFooter.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.HeaderFooterResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads a HeaderFooter object from the document section.
     * @param request contains request parameters
     */
    public async getHeaderFooterOfSection(request: model.GetHeaderFooterOfSectionRequest): Promise<model.WordsIncomingMessage<model.HeaderFooterResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getHeaderFooterOfSection.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.HeaderFooterResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads a HeaderFooter object from the document section.
     * @param request contains request parameters
     */
    public async getHeaderFooterOfSectionOnline(request: model.GetHeaderFooterOfSectionOnlineRequest): Promise<model.WordsIncomingMessage<model.HeaderFooterResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getHeaderFooterOfSectionOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.HeaderFooterResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads a HeaderFooter object from the document.
     * @param request contains request parameters
     */
    public async getHeaderFooterOnline(request: model.GetHeaderFooterOnlineRequest): Promise<model.WordsIncomingMessage<model.HeaderFooterResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getHeaderFooterOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.HeaderFooterResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads HeaderFooter objects from the document section.
     * @param request contains request parameters
     */
    public async getHeaderFooters(request: model.GetHeaderFootersRequest): Promise<model.WordsIncomingMessage<model.HeaderFootersResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getHeaderFooters.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.HeaderFootersResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads HeaderFooter objects from the document section.
     * @param request contains request parameters
     */
    public async getHeaderFootersOnline(request: model.GetHeaderFootersOnlineRequest): Promise<model.WordsIncomingMessage<model.HeaderFootersResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getHeaderFootersOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.HeaderFootersResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads a list from the document.
     * @param request contains request parameters
     */
    public async getList(request: model.GetListRequest): Promise<model.WordsIncomingMessage<model.ListResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getList.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.ListResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads a list from the document.
     * @param request contains request parameters
     */
    public async getListOnline(request: model.GetListOnlineRequest): Promise<model.WordsIncomingMessage<model.ListResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getListOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.ListResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads lists from the document.
     * @param request contains request parameters
     */
    public async getLists(request: model.GetListsRequest): Promise<model.WordsIncomingMessage<model.ListsResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getLists.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.ListsResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads lists from the document.
     * @param request contains request parameters
     */
    public async getListsOnline(request: model.GetListsOnlineRequest): Promise<model.WordsIncomingMessage<model.ListsResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getListsOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.ListsResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads an OfficeMath object from the document node.
     * @param request contains request parameters
     */
    public async getOfficeMathObject(request: model.GetOfficeMathObjectRequest): Promise<model.WordsIncomingMessage<model.OfficeMathObjectResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getOfficeMathObject.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.OfficeMathObjectResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads an OfficeMath object from the document node.
     * @param request contains request parameters
     */
    public async getOfficeMathObjectOnline(request: model.GetOfficeMathObjectOnlineRequest): Promise<model.WordsIncomingMessage<model.OfficeMathObjectResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getOfficeMathObjectOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.OfficeMathObjectResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads OfficeMath objects from the document node.
     * @param request contains request parameters
     */
    public async getOfficeMathObjects(request: model.GetOfficeMathObjectsRequest): Promise<model.WordsIncomingMessage<model.OfficeMathObjectsResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getOfficeMathObjects.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.OfficeMathObjectsResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads OfficeMath objects from the document node.
     * @param request contains request parameters
     */
    public async getOfficeMathObjectsOnline(request: model.GetOfficeMathObjectsOnlineRequest): Promise<model.WordsIncomingMessage<model.OfficeMathObjectsResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getOfficeMathObjectsOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.OfficeMathObjectsResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads a paragraph from the document node.
     * @param request contains request parameters
     */
    public async getParagraph(request: model.GetParagraphRequest): Promise<model.WordsIncomingMessage<model.ParagraphResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getParagraph.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.ParagraphResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads the formatting properties of a paragraph from the document node.
     * @param request contains request parameters
     */
    public async getParagraphFormat(request: model.GetParagraphFormatRequest): Promise<model.WordsIncomingMessage<model.ParagraphFormatResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getParagraphFormat.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.ParagraphFormatResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads the formatting properties of a paragraph from the document node.
     * @param request contains request parameters
     */
    public async getParagraphFormatOnline(request: model.GetParagraphFormatOnlineRequest): Promise<model.WordsIncomingMessage<model.ParagraphFormatResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getParagraphFormatOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.ParagraphFormatResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads the formatting properties of a paragraph list from the document node.
     * @param request contains request parameters
     */
    public async getParagraphListFormat(request: model.GetParagraphListFormatRequest): Promise<model.WordsIncomingMessage<model.ParagraphListFormatResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getParagraphListFormat.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.ParagraphListFormatResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads the formatting properties of a paragraph list from the document node.
     * @param request contains request parameters
     */
    public async getParagraphListFormatOnline(request: model.GetParagraphListFormatOnlineRequest): Promise<model.WordsIncomingMessage<model.ParagraphListFormatResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getParagraphListFormatOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.ParagraphListFormatResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads a paragraph from the document node.
     * @param request contains request parameters
     */
    public async getParagraphOnline(request: model.GetParagraphOnlineRequest): Promise<model.WordsIncomingMessage<model.ParagraphResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getParagraphOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.ParagraphResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads paragraphs from the document node.
     * @param request contains request parameters
     */
    public async getParagraphs(request: model.GetParagraphsRequest): Promise<model.WordsIncomingMessage<model.ParagraphLinkCollectionResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getParagraphs.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.ParagraphLinkCollectionResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads paragraphs from the document node.
     * @param request contains request parameters
     */
    public async getParagraphsOnline(request: model.GetParagraphsOnlineRequest): Promise<model.WordsIncomingMessage<model.ParagraphLinkCollectionResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getParagraphsOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.ParagraphLinkCollectionResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads paragraph tab stops from the document node.
     * @param request contains request parameters
     */
    public async getParagraphTabStops(request: model.GetParagraphTabStopsRequest): Promise<model.WordsIncomingMessage<model.TabStopsResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getParagraphTabStops.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.TabStopsResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads paragraph tab stops from the document node.
     * @param request contains request parameters
     */
    public async getParagraphTabStopsOnline(request: model.GetParagraphTabStopsOnlineRequest): Promise<model.WordsIncomingMessage<model.TabStopsResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getParagraphTabStopsOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.TabStopsResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads range text from the document.
     * @param request contains request parameters
     */
    public async getRangeText(request: model.GetRangeTextRequest): Promise<model.WordsIncomingMessage<model.RangeTextResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getRangeText.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.RangeTextResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads range text from the document.
     * @param request contains request parameters
     */
    public async getRangeTextOnline(request: model.GetRangeTextOnlineRequest): Promise<model.WordsIncomingMessage<model.RangeTextResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getRangeTextOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.RangeTextResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads a Run object from the paragraph.
     * @param request contains request parameters
     */
    public async getRun(request: model.GetRunRequest): Promise<model.WordsIncomingMessage<model.RunResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getRun.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.RunResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads the font properties of a Run object from the paragraph.
     * @param request contains request parameters
     */
    public async getRunFont(request: model.GetRunFontRequest): Promise<model.WordsIncomingMessage<model.FontResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getRunFont.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.FontResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads the font properties of a Run object from the paragraph.
     * @param request contains request parameters
     */
    public async getRunFontOnline(request: model.GetRunFontOnlineRequest): Promise<model.WordsIncomingMessage<model.FontResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getRunFontOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.FontResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads a Run object from the paragraph.
     * @param request contains request parameters
     */
    public async getRunOnline(request: model.GetRunOnlineRequest): Promise<model.WordsIncomingMessage<model.RunResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getRunOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.RunResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads Run objects from the paragraph.
     * @param request contains request parameters
     */
    public async getRuns(request: model.GetRunsRequest): Promise<model.WordsIncomingMessage<model.RunsResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getRuns.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.RunsResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads Run objects from the paragraph.
     * @param request contains request parameters
     */
    public async getRunsOnline(request: model.GetRunsOnlineRequest): Promise<model.WordsIncomingMessage<model.RunsResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getRunsOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.RunsResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads a section from the document.
     * @param request contains request parameters
     */
    public async getSection(request: model.GetSectionRequest): Promise<model.WordsIncomingMessage<model.SectionResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getSection.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.SectionResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads a section from the document.
     * @param request contains request parameters
     */
    public async getSectionOnline(request: model.GetSectionOnlineRequest): Promise<model.WordsIncomingMessage<model.SectionResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getSectionOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.SectionResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads the page setup of a section from the document.
     * @param request contains request parameters
     */
    public async getSectionPageSetup(request: model.GetSectionPageSetupRequest): Promise<model.WordsIncomingMessage<model.SectionPageSetupResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getSectionPageSetup.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.SectionPageSetupResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads the page setup of a section from the document.
     * @param request contains request parameters
     */
    public async getSectionPageSetupOnline(request: model.GetSectionPageSetupOnlineRequest): Promise<model.WordsIncomingMessage<model.SectionPageSetupResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getSectionPageSetupOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.SectionPageSetupResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads sections from the document.
     * @param request contains request parameters
     */
    public async getSections(request: model.GetSectionsRequest): Promise<model.WordsIncomingMessage<model.SectionLinkCollectionResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getSections.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.SectionLinkCollectionResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads sections from the document.
     * @param request contains request parameters
     */
    public async getSectionsOnline(request: model.GetSectionsOnlineRequest): Promise<model.WordsIncomingMessage<model.SectionLinkCollectionResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getSectionsOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.SectionLinkCollectionResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads a style from the document.
     * @param request contains request parameters
     */
    public async getStyle(request: model.GetStyleRequest): Promise<model.WordsIncomingMessage<model.StyleResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getStyle.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.StyleResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads a style from the document node.
     * @param request contains request parameters
     */
    public async getStyleFromDocumentElement(request: model.GetStyleFromDocumentElementRequest): Promise<model.WordsIncomingMessage<model.StyleResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getStyleFromDocumentElement.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.StyleResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads a style from the document node.
     * @param request contains request parameters
     */
    public async getStyleFromDocumentElementOnline(request: model.GetStyleFromDocumentElementOnlineRequest): Promise<model.WordsIncomingMessage<model.StyleResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getStyleFromDocumentElementOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.StyleResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads a style from the document.
     * @param request contains request parameters
     */
    public async getStyleOnline(request: model.GetStyleOnlineRequest): Promise<model.WordsIncomingMessage<model.StyleResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getStyleOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.StyleResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads styles from the document.
     * @param request contains request parameters
     */
    public async getStyles(request: model.GetStylesRequest): Promise<model.WordsIncomingMessage<model.StylesResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getStyles.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.StylesResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads styles from the document.
     * @param request contains request parameters
     */
    public async getStylesOnline(request: model.GetStylesOnlineRequest): Promise<model.WordsIncomingMessage<model.StylesResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getStylesOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.StylesResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads a table from the document node.
     * @param request contains request parameters
     */
    public async getTable(request: model.GetTableRequest): Promise<model.WordsIncomingMessage<model.TableResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getTable.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.TableResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads a cell from the table row.
     * @param request contains request parameters
     */
    public async getTableCell(request: model.GetTableCellRequest): Promise<model.WordsIncomingMessage<model.TableCellResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getTableCell.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.TableCellResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads the formatting properties of a table cell.
     * @param request contains request parameters
     */
    public async getTableCellFormat(request: model.GetTableCellFormatRequest): Promise<model.WordsIncomingMessage<model.TableCellFormatResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getTableCellFormat.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.TableCellFormatResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads the formatting properties of a table cell.
     * @param request contains request parameters
     */
    public async getTableCellFormatOnline(request: model.GetTableCellFormatOnlineRequest): Promise<model.WordsIncomingMessage<model.TableCellFormatResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getTableCellFormatOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.TableCellFormatResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads a cell from the table row.
     * @param request contains request parameters
     */
    public async getTableCellOnline(request: model.GetTableCellOnlineRequest): Promise<model.WordsIncomingMessage<model.TableCellResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getTableCellOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.TableCellResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads a table from the document node.
     * @param request contains request parameters
     */
    public async getTableOnline(request: model.GetTableOnlineRequest): Promise<model.WordsIncomingMessage<model.TableResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getTableOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.TableResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads properties of a table from the document node.
     * @param request contains request parameters
     */
    public async getTableProperties(request: model.GetTablePropertiesRequest): Promise<model.WordsIncomingMessage<model.TablePropertiesResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getTableProperties.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.TablePropertiesResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads properties of a table from the document node.
     * @param request contains request parameters
     */
    public async getTablePropertiesOnline(request: model.GetTablePropertiesOnlineRequest): Promise<model.WordsIncomingMessage<model.TablePropertiesResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getTablePropertiesOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.TablePropertiesResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads a row from the table.
     * @param request contains request parameters
     */
    public async getTableRow(request: model.GetTableRowRequest): Promise<model.WordsIncomingMessage<model.TableRowResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getTableRow.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.TableRowResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads the formatting properties of a table row.
     * @param request contains request parameters
     */
    public async getTableRowFormat(request: model.GetTableRowFormatRequest): Promise<model.WordsIncomingMessage<model.TableRowFormatResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getTableRowFormat.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.TableRowFormatResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads the formatting properties of a table row.
     * @param request contains request parameters
     */
    public async getTableRowFormatOnline(request: model.GetTableRowFormatOnlineRequest): Promise<model.WordsIncomingMessage<model.TableRowFormatResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getTableRowFormatOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.TableRowFormatResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads a row from the table.
     * @param request contains request parameters
     */
    public async getTableRowOnline(request: model.GetTableRowOnlineRequest): Promise<model.WordsIncomingMessage<model.TableRowResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getTableRowOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.TableRowResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads tables from the document node.
     * @param request contains request parameters
     */
    public async getTables(request: model.GetTablesRequest): Promise<model.WordsIncomingMessage<model.TableLinkCollectionResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getTables.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.TableLinkCollectionResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reads tables from the document node.
     * @param request contains request parameters
     */
    public async getTablesOnline(request: model.GetTablesOnlineRequest): Promise<model.WordsIncomingMessage<model.TableLinkCollectionResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling getTablesOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.TableLinkCollectionResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Inserts a new comment to the document.
     * @param request contains request parameters
     */
    public async insertComment(request: model.InsertCommentRequest): Promise<model.WordsIncomingMessage<model.CommentResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling insertComment.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.CommentResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Inserts a new comment to the document.
     * @param request contains request parameters
     */
    public async insertCommentOnline(request: model.InsertCommentOnlineRequest): Promise<model.WordsIncomingMessage<model.InsertCommentOnlineResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling insertCommentOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.InsertCommentOnlineResponse>();
        result.response = response;
        result.body = request.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Inserts a new DrawingObject to the document node.
     * @param request contains request parameters
     */
    public async insertDrawingObject(request: model.InsertDrawingObjectRequest): Promise<model.WordsIncomingMessage<model.DrawingObjectResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling insertDrawingObject.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.DrawingObjectResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Inserts a new DrawingObject to the document node.
     * @param request contains request parameters
     */
    public async insertDrawingObjectOnline(request: model.InsertDrawingObjectOnlineRequest): Promise<model.WordsIncomingMessage<model.InsertDrawingObjectOnlineResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling insertDrawingObjectOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.InsertDrawingObjectOnlineResponse>();
        result.response = response;
        result.body = request.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Inserts a new field to the document node.
     * @param request contains request parameters
     */
    public async insertField(request: model.InsertFieldRequest): Promise<model.WordsIncomingMessage<model.FieldResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling insertField.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.FieldResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Inserts a new field to the document node.
     * @param request contains request parameters
     */
    public async insertFieldOnline(request: model.InsertFieldOnlineRequest): Promise<model.WordsIncomingMessage<model.InsertFieldOnlineResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling insertFieldOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.InsertFieldOnlineResponse>();
        result.response = response;
        result.body = request.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Inserts a new footnote to the document node.
     * @param request contains request parameters
     */
    public async insertFootnote(request: model.InsertFootnoteRequest): Promise<model.WordsIncomingMessage<model.FootnoteResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling insertFootnote.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.FootnoteResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Inserts a new footnote to the document node.
     * @param request contains request parameters
     */
    public async insertFootnoteOnline(request: model.InsertFootnoteOnlineRequest): Promise<model.WordsIncomingMessage<model.InsertFootnoteOnlineResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling insertFootnoteOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.InsertFootnoteOnlineResponse>();
        result.response = response;
        result.body = request.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Inserts a new form field to the document node.
     * @param request contains request parameters
     */
    public async insertFormField(request: model.InsertFormFieldRequest): Promise<model.WordsIncomingMessage<model.FormFieldResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling insertFormField.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.FormFieldResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Inserts a new form field to the document node.
     * @param request contains request parameters
     */
    public async insertFormFieldOnline(request: model.InsertFormFieldOnlineRequest): Promise<model.WordsIncomingMessage<model.InsertFormFieldOnlineResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling insertFormFieldOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.InsertFormFieldOnlineResponse>();
        result.response = response;
        result.body = request.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Inserts a new HeaderFooter object to the document section.
     * @param request contains request parameters
     */
    public async insertHeaderFooter(request: model.InsertHeaderFooterRequest): Promise<model.WordsIncomingMessage<model.HeaderFooterResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling insertHeaderFooter.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.HeaderFooterResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Inserts a new HeaderFooter object to the document section.
     * @param request contains request parameters
     */
    public async insertHeaderFooterOnline(request: model.InsertHeaderFooterOnlineRequest): Promise<model.WordsIncomingMessage<model.InsertHeaderFooterOnlineResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling insertHeaderFooterOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.InsertHeaderFooterOnlineResponse>();
        result.response = response;
        result.body = request.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Inserts a new list to the document.
     * @param request contains request parameters
     */
    public async insertList(request: model.InsertListRequest): Promise<model.WordsIncomingMessage<model.ListResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling insertList.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.ListResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Inserts a new list to the document.
     * @param request contains request parameters
     */
    public async insertListOnline(request: model.InsertListOnlineRequest): Promise<model.WordsIncomingMessage<model.InsertListOnlineResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling insertListOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.InsertListOnlineResponse>();
        result.response = response;
        result.body = request.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Inserts a new or updates an existing paragraph tab stop in the document node.
     * @param request contains request parameters
     */
    public async insertOrUpdateParagraphTabStop(request: model.InsertOrUpdateParagraphTabStopRequest): Promise<model.WordsIncomingMessage<model.TabStopsResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling insertOrUpdateParagraphTabStop.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.TabStopsResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Inserts a new or updates an existing paragraph tab stop in the document node.
     * @param request contains request parameters
     */
    public async insertOrUpdateParagraphTabStopOnline(request: model.InsertOrUpdateParagraphTabStopOnlineRequest): Promise<model.WordsIncomingMessage<model.InsertOrUpdateParagraphTabStopOnlineResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling insertOrUpdateParagraphTabStopOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.InsertOrUpdateParagraphTabStopOnlineResponse>();
        result.response = response;
        result.body = request.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Inserts page numbers to the document.
     * @param request contains request parameters
     */
    public async insertPageNumbers(request: model.InsertPageNumbersRequest): Promise<model.WordsIncomingMessage<model.DocumentResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling insertPageNumbers.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.DocumentResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Inserts page numbers to the document.
     * @param request contains request parameters
     */
    public async insertPageNumbersOnline(request: model.InsertPageNumbersOnlineRequest): Promise<model.WordsIncomingMessage<model.InsertPageNumbersOnlineResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling insertPageNumbersOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.InsertPageNumbersOnlineResponse>();
        result.response = response;
        result.body = request.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Inserts a new paragraph to the document node.
     * @param request contains request parameters
     */
    public async insertParagraph(request: model.InsertParagraphRequest): Promise<model.WordsIncomingMessage<model.ParagraphResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling insertParagraph.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.ParagraphResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Inserts a new paragraph to the document node.
     * @param request contains request parameters
     */
    public async insertParagraphOnline(request: model.InsertParagraphOnlineRequest): Promise<model.WordsIncomingMessage<model.InsertParagraphOnlineResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling insertParagraphOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.InsertParagraphOnlineResponse>();
        result.response = response;
        result.body = request.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Inserts a new Run object to the paragraph.
     * @param request contains request parameters
     */
    public async insertRun(request: model.InsertRunRequest): Promise<model.WordsIncomingMessage<model.RunResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling insertRun.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.RunResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Inserts a new Run object to the paragraph.
     * @param request contains request parameters
     */
    public async insertRunOnline(request: model.InsertRunOnlineRequest): Promise<model.WordsIncomingMessage<model.InsertRunOnlineResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling insertRunOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.InsertRunOnlineResponse>();
        result.response = response;
        result.body = request.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Inserts a new style to the document.
     * @param request contains request parameters
     */
    public async insertStyle(request: model.InsertStyleRequest): Promise<model.WordsIncomingMessage<model.StyleResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling insertStyle.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.StyleResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Inserts a new style to the document.
     * @param request contains request parameters
     */
    public async insertStyleOnline(request: model.InsertStyleOnlineRequest): Promise<model.WordsIncomingMessage<model.InsertStyleOnlineResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling insertStyleOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.InsertStyleOnlineResponse>();
        result.response = response;
        result.body = request.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Inserts a new table to the document node.
     * @param request contains request parameters
     */
    public async insertTable(request: model.InsertTableRequest): Promise<model.WordsIncomingMessage<model.TableResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling insertTable.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.TableResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Inserts a new cell to the table row.
     * @param request contains request parameters
     */
    public async insertTableCell(request: model.InsertTableCellRequest): Promise<model.WordsIncomingMessage<model.TableCellResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling insertTableCell.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.TableCellResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Inserts a new cell to the table row.
     * @param request contains request parameters
     */
    public async insertTableCellOnline(request: model.InsertTableCellOnlineRequest): Promise<model.WordsIncomingMessage<model.InsertTableCellOnlineResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling insertTableCellOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.InsertTableCellOnlineResponse>();
        result.response = response;
        result.body = request.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Inserts a new table to the document node.
     * @param request contains request parameters
     */
    public async insertTableOnline(request: model.InsertTableOnlineRequest): Promise<model.WordsIncomingMessage<model.InsertTableOnlineResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling insertTableOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.InsertTableOnlineResponse>();
        result.response = response;
        result.body = request.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Inserts a new row to the table.
     * @param request contains request parameters
     */
    public async insertTableRow(request: model.InsertTableRowRequest): Promise<model.WordsIncomingMessage<model.TableRowResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling insertTableRow.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.TableRowResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Inserts a new row to the table.
     * @param request contains request parameters
     */
    public async insertTableRowOnline(request: model.InsertTableRowOnlineRequest): Promise<model.WordsIncomingMessage<model.InsertTableRowOnlineResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling insertTableRowOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.InsertTableRowOnlineResponse>();
        result.response = response;
        result.body = request.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Inserts a new watermark image to the document.
     * @param request contains request parameters
     */
    public async insertWatermarkImage(request: model.InsertWatermarkImageRequest): Promise<model.WordsIncomingMessage<model.DocumentResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling insertWatermarkImage.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.DocumentResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Inserts a new watermark image to the document.
     * @param request contains request parameters
     */
    public async insertWatermarkImageOnline(request: model.InsertWatermarkImageOnlineRequest): Promise<model.WordsIncomingMessage<model.InsertWatermarkImageOnlineResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling insertWatermarkImageOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.InsertWatermarkImageOnlineResponse>();
        result.response = response;
        result.body = request.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Inserts a new watermark text to the document.
     * @param request contains request parameters
     */
    public async insertWatermarkText(request: model.InsertWatermarkTextRequest): Promise<model.WordsIncomingMessage<model.DocumentResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling insertWatermarkText.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.DocumentResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Inserts a new watermark text to the document.
     * @param request contains request parameters
     */
    public async insertWatermarkTextOnline(request: model.InsertWatermarkTextOnlineRequest): Promise<model.WordsIncomingMessage<model.InsertWatermarkTextOnlineResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling insertWatermarkTextOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.InsertWatermarkTextOnlineResponse>();
        result.response = response;
        result.body = request.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Downloads a document from the Web using URL and saves it to cloud storage in the specified format.
     * @param request contains request parameters
     */
    public async loadWebDocument(request: model.LoadWebDocumentRequest): Promise<model.WordsIncomingMessage<model.SaveResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling loadWebDocument.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.SaveResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Move file.
     * @param request contains request parameters
     */
    public async moveFile(request: model.MoveFileRequest): Promise<http.IncomingMessage> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling moveFile.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Move folder.
     * @param request contains request parameters
     */
    public async moveFolder(request: model.MoveFolderRequest): Promise<http.IncomingMessage> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling moveFolder.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Applies document content optimization options, specific to a particular versions of Microsoft Word.
     * @param request contains request parameters
     */
    public async optimizeDocument(request: model.OptimizeDocumentRequest): Promise<http.IncomingMessage> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling optimizeDocument.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Applies document content optimization options, specific to a particular versions of Microsoft Word.
     * @param request contains request parameters
     */
    public async optimizeDocumentOnline(request: model.OptimizeDocumentOnlineRequest): Promise<model.WordsIncomingMessage<Buffer>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling optimizeDocumentOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<Buffer>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Adds protection to the document.
     * @param request contains request parameters
     */
    public async protectDocument(request: model.ProtectDocumentRequest): Promise<model.WordsIncomingMessage<model.ProtectionDataResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling protectDocument.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.ProtectionDataResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Adds protection to the document.
     * @param request contains request parameters
     */
    public async protectDocumentOnline(request: model.ProtectDocumentOnlineRequest): Promise<model.WordsIncomingMessage<model.ProtectDocumentOnlineResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling protectDocumentOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.ProtectDocumentOnlineResponse>();
        result.response = response;
        result.body = request.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Rejects all revisions in the document.
     * @param request contains request parameters
     */
    public async rejectAllRevisions(request: model.RejectAllRevisionsRequest): Promise<model.WordsIncomingMessage<model.RevisionsModificationResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling rejectAllRevisions.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.RevisionsModificationResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Rejects all revisions in the document.
     * @param request contains request parameters
     */
    public async rejectAllRevisionsOnline(request: model.RejectAllRevisionsOnlineRequest): Promise<model.WordsIncomingMessage<model.RejectAllRevisionsOnlineResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling rejectAllRevisionsOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.RejectAllRevisionsOnlineResponse>();
        result.response = response;
        result.body = request.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Removes a range from the document.
     * @param request contains request parameters
     */
    public async removeRange(request: model.RemoveRangeRequest): Promise<model.WordsIncomingMessage<model.DocumentResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling removeRange.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.DocumentResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Removes a range from the document.
     * @param request contains request parameters
     */
    public async removeRangeOnline(request: model.RemoveRangeOnlineRequest): Promise<model.WordsIncomingMessage<model.RemoveRangeOnlineResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling removeRangeOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.RemoveRangeOnlineResponse>();
        result.response = response;
        result.body = request.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Renders a DrawingObject to the specified format.
     * @param request contains request parameters
     */
    public async renderDrawingObject(request: model.RenderDrawingObjectRequest): Promise<model.WordsIncomingMessage<Buffer>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling renderDrawingObject.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<Buffer>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Renders a DrawingObject to the specified format.
     * @param request contains request parameters
     */
    public async renderDrawingObjectOnline(request: model.RenderDrawingObjectOnlineRequest): Promise<model.WordsIncomingMessage<Buffer>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling renderDrawingObjectOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<Buffer>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Renders an OfficeMath object to the specified format.
     * @param request contains request parameters
     */
    public async renderMathObject(request: model.RenderMathObjectRequest): Promise<model.WordsIncomingMessage<Buffer>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling renderMathObject.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<Buffer>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Renders an OfficeMath object to the specified format.
     * @param request contains request parameters
     */
    public async renderMathObjectOnline(request: model.RenderMathObjectOnlineRequest): Promise<model.WordsIncomingMessage<Buffer>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling renderMathObjectOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<Buffer>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Renders a page to the specified format.
     * @param request contains request parameters
     */
    public async renderPage(request: model.RenderPageRequest): Promise<model.WordsIncomingMessage<Buffer>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling renderPage.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<Buffer>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Renders a page to the specified format.
     * @param request contains request parameters
     */
    public async renderPageOnline(request: model.RenderPageOnlineRequest): Promise<model.WordsIncomingMessage<Buffer>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling renderPageOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<Buffer>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Renders a paragraph to the specified format.
     * @param request contains request parameters
     */
    public async renderParagraph(request: model.RenderParagraphRequest): Promise<model.WordsIncomingMessage<Buffer>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling renderParagraph.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<Buffer>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Renders a paragraph to the specified format.
     * @param request contains request parameters
     */
    public async renderParagraphOnline(request: model.RenderParagraphOnlineRequest): Promise<model.WordsIncomingMessage<Buffer>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling renderParagraphOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<Buffer>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Renders a table to the specified format.
     * @param request contains request parameters
     */
    public async renderTable(request: model.RenderTableRequest): Promise<model.WordsIncomingMessage<Buffer>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling renderTable.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<Buffer>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Renders a table to the specified format.
     * @param request contains request parameters
     */
    public async renderTableOnline(request: model.RenderTableOnlineRequest): Promise<model.WordsIncomingMessage<Buffer>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling renderTableOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<Buffer>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Replaces text in the document.
     * @param request contains request parameters
     */
    public async replaceText(request: model.ReplaceTextRequest): Promise<model.WordsIncomingMessage<model.ReplaceTextResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling replaceText.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.ReplaceTextResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Replaces text in the document.
     * @param request contains request parameters
     */
    public async replaceTextOnline(request: model.ReplaceTextOnlineRequest): Promise<model.WordsIncomingMessage<model.ReplaceTextOnlineResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling replaceTextOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.ReplaceTextOnlineResponse>();
        result.response = response;
        result.body = request.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Replaces a range with text in the document.
     * @param request contains request parameters
     */
    public async replaceWithText(request: model.ReplaceWithTextRequest): Promise<model.WordsIncomingMessage<model.DocumentResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling replaceWithText.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.DocumentResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Replaces a range with text in the document.
     * @param request contains request parameters
     */
    public async replaceWithTextOnline(request: model.ReplaceWithTextOnlineRequest): Promise<model.WordsIncomingMessage<model.ReplaceWithTextOnlineResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling replaceWithTextOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.ReplaceWithTextOnlineResponse>();
        result.response = response;
        result.body = request.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Clears the font cache.
     * @param request contains request parameters
     */
    public async resetCache(request: model.ResetCacheRequest): Promise<http.IncomingMessage> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling resetCache.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Converts a document in cloud storage to the specified format.
     * @param request contains request parameters
     */
    public async saveAs(request: model.SaveAsRequest): Promise<model.WordsIncomingMessage<model.SaveResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling saveAs.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.SaveResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Converts a document in cloud storage to the specified format.
     * @param request contains request parameters
     */
    public async saveAsOnline(request: model.SaveAsOnlineRequest): Promise<model.WordsIncomingMessage<model.SaveAsOnlineResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling saveAsOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.SaveAsOnlineResponse>();
        result.response = response;
        result.body = request.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Saves a range as a new document.
     * @param request contains request parameters
     */
    public async saveAsRange(request: model.SaveAsRangeRequest): Promise<model.WordsIncomingMessage<model.DocumentResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling saveAsRange.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.DocumentResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Saves a range as a new document.
     * @param request contains request parameters
     */
    public async saveAsRangeOnline(request: model.SaveAsRangeOnlineRequest): Promise<model.WordsIncomingMessage<model.SaveAsRangeOnlineResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling saveAsRangeOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.SaveAsRangeOnlineResponse>();
        result.response = response;
        result.body = request.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Converts a document in cloud storage to TIFF format using detailed conversion settings.
     * @param request contains request parameters
     */
    public async saveAsTiff(request: model.SaveAsTiffRequest): Promise<model.WordsIncomingMessage<model.SaveResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling saveAsTiff.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.SaveResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Converts a document in cloud storage to TIFF format using detailed conversion settings.
     * @param request contains request parameters
     */
    public async saveAsTiffOnline(request: model.SaveAsTiffOnlineRequest): Promise<model.WordsIncomingMessage<model.SaveAsTiffOnlineResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling saveAsTiffOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.SaveAsTiffOnlineResponse>();
        result.response = response;
        result.body = request.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Searches text, specified by the regular expression, in the document.
     * @param request contains request parameters
     */
    public async search(request: model.SearchRequest): Promise<model.WordsIncomingMessage<model.SearchResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling search.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.SearchResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Searches text, specified by the regular expression, in the document.
     * @param request contains request parameters
     */
    public async searchOnline(request: model.SearchOnlineRequest): Promise<model.WordsIncomingMessage<model.SearchResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling searchOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.SearchResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Splits a document into parts and saves them in the specified format.
     * @param request contains request parameters
     */
    public async splitDocument(request: model.SplitDocumentRequest): Promise<model.WordsIncomingMessage<model.SplitDocumentResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling splitDocument.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.SplitDocumentResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Splits a document into parts and saves them in the specified format.
     * @param request contains request parameters
     */
    public async splitDocumentOnline(request: model.SplitDocumentOnlineRequest): Promise<model.WordsIncomingMessage<model.SplitDocumentOnlineResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling splitDocumentOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.SplitDocumentOnlineResponse>();
        result.response = response;
        result.body = request.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Removes protection from the document.
     * @param request contains request parameters
     */
    public async unprotectDocument(request: model.UnprotectDocumentRequest): Promise<model.WordsIncomingMessage<model.ProtectionDataResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling unprotectDocument.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.ProtectionDataResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Removes protection from the document.
     * @param request contains request parameters
     */
    public async unprotectDocumentOnline(request: model.UnprotectDocumentOnlineRequest): Promise<model.WordsIncomingMessage<model.UnprotectDocumentOnlineResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling unprotectDocumentOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.UnprotectDocumentOnlineResponse>();
        result.response = response;
        result.body = request.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Updates a bookmark in the document.
     * @param request contains request parameters
     */
    public async updateBookmark(request: model.UpdateBookmarkRequest): Promise<model.WordsIncomingMessage<model.BookmarkResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling updateBookmark.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.BookmarkResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Updates a bookmark in the document.
     * @param request contains request parameters
     */
    public async updateBookmarkOnline(request: model.UpdateBookmarkOnlineRequest): Promise<model.WordsIncomingMessage<model.UpdateBookmarkOnlineResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling updateBookmarkOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.UpdateBookmarkOnlineResponse>();
        result.response = response;
        result.body = request.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * The 'nodePath' parameter should refer to a paragraph, a cell or a row.
     * @param request contains request parameters
     */
    public async updateBorder(request: model.UpdateBorderRequest): Promise<model.WordsIncomingMessage<model.BorderResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling updateBorder.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.BorderResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Updates a border in the document node.
     * @param request contains request parameters
     */
    public async updateBorderOnline(request: model.UpdateBorderOnlineRequest): Promise<model.WordsIncomingMessage<model.UpdateBorderOnlineResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling updateBorderOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.UpdateBorderOnlineResponse>();
        result.response = response;
        result.body = request.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Updates a comment in the document.
     * @param request contains request parameters
     */
    public async updateComment(request: model.UpdateCommentRequest): Promise<model.WordsIncomingMessage<model.CommentResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling updateComment.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.CommentResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Updates a comment in the document.
     * @param request contains request parameters
     */
    public async updateCommentOnline(request: model.UpdateCommentOnlineRequest): Promise<model.WordsIncomingMessage<model.UpdateCommentOnlineResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling updateCommentOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.UpdateCommentOnlineResponse>();
        result.response = response;
        result.body = request.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Updates a DrawingObject in the document node.
     * @param request contains request parameters
     */
    public async updateDrawingObject(request: model.UpdateDrawingObjectRequest): Promise<model.WordsIncomingMessage<model.DrawingObjectResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling updateDrawingObject.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.DrawingObjectResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Updates a DrawingObject in the document node.
     * @param request contains request parameters
     */
    public async updateDrawingObjectOnline(request: model.UpdateDrawingObjectOnlineRequest): Promise<model.WordsIncomingMessage<model.UpdateDrawingObjectOnlineResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling updateDrawingObjectOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.UpdateDrawingObjectOnlineResponse>();
        result.response = response;
        result.body = request.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Updates a field in the document node.
     * @param request contains request parameters
     */
    public async updateField(request: model.UpdateFieldRequest): Promise<model.WordsIncomingMessage<model.FieldResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling updateField.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.FieldResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Updates a field in the document node.
     * @param request contains request parameters
     */
    public async updateFieldOnline(request: model.UpdateFieldOnlineRequest): Promise<model.WordsIncomingMessage<model.UpdateFieldOnlineResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling updateFieldOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.UpdateFieldOnlineResponse>();
        result.response = response;
        result.body = request.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Reevaluates field values in the document.
     * @param request contains request parameters
     */
    public async updateFields(request: model.UpdateFieldsRequest): Promise<model.WordsIncomingMessage<model.DocumentResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling updateFields.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.DocumentResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Reevaluates field values in the document.
     * @param request contains request parameters
     */
    public async updateFieldsOnline(request: model.UpdateFieldsOnlineRequest): Promise<model.WordsIncomingMessage<model.UpdateFieldsOnlineResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling updateFieldsOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.UpdateFieldsOnlineResponse>();
        result.response = response;
        result.body = request.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Updates a footnote in the document node.
     * @param request contains request parameters
     */
    public async updateFootnote(request: model.UpdateFootnoteRequest): Promise<model.WordsIncomingMessage<model.FootnoteResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling updateFootnote.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.FootnoteResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Updates a footnote in the document node.
     * @param request contains request parameters
     */
    public async updateFootnoteOnline(request: model.UpdateFootnoteOnlineRequest): Promise<model.WordsIncomingMessage<model.UpdateFootnoteOnlineResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling updateFootnoteOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.UpdateFootnoteOnlineResponse>();
        result.response = response;
        result.body = request.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Updates a form field in the document node.
     * @param request contains request parameters
     */
    public async updateFormField(request: model.UpdateFormFieldRequest): Promise<model.WordsIncomingMessage<model.FormFieldResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling updateFormField.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.FormFieldResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Updates a form field in the document node.
     * @param request contains request parameters
     */
    public async updateFormFieldOnline(request: model.UpdateFormFieldOnlineRequest): Promise<model.WordsIncomingMessage<model.UpdateFormFieldOnlineResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling updateFormFieldOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.UpdateFormFieldOnlineResponse>();
        result.response = response;
        result.body = request.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Updates a list in the document.
     * @param request contains request parameters
     */
    public async updateList(request: model.UpdateListRequest): Promise<model.WordsIncomingMessage<model.ListResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling updateList.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.ListResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Updates the level of a List element in the document.
     * @param request contains request parameters
     */
    public async updateListLevel(request: model.UpdateListLevelRequest): Promise<model.WordsIncomingMessage<model.ListResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling updateListLevel.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.ListResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Updates the level of a List element in the document.
     * @param request contains request parameters
     */
    public async updateListLevelOnline(request: model.UpdateListLevelOnlineRequest): Promise<model.WordsIncomingMessage<model.UpdateListLevelOnlineResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling updateListLevelOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.UpdateListLevelOnlineResponse>();
        result.response = response;
        result.body = request.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Updates a list in the document.
     * @param request contains request parameters
     */
    public async updateListOnline(request: model.UpdateListOnlineRequest): Promise<model.WordsIncomingMessage<model.UpdateListOnlineResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling updateListOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.UpdateListOnlineResponse>();
        result.response = response;
        result.body = request.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Updates the formatting properties of a paragraph in the document node.
     * @param request contains request parameters
     */
    public async updateParagraphFormat(request: model.UpdateParagraphFormatRequest): Promise<model.WordsIncomingMessage<model.ParagraphFormatResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling updateParagraphFormat.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.ParagraphFormatResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Updates the formatting properties of a paragraph in the document node.
     * @param request contains request parameters
     */
    public async updateParagraphFormatOnline(request: model.UpdateParagraphFormatOnlineRequest): Promise<model.WordsIncomingMessage<model.UpdateParagraphFormatOnlineResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling updateParagraphFormatOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.UpdateParagraphFormatOnlineResponse>();
        result.response = response;
        result.body = request.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Updates the formatting properties of a paragraph list in the document node.
     * @param request contains request parameters
     */
    public async updateParagraphListFormat(request: model.UpdateParagraphListFormatRequest): Promise<model.WordsIncomingMessage<model.ParagraphListFormatResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling updateParagraphListFormat.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.ParagraphListFormatResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Updates the formatting properties of a paragraph list in the document node.
     * @param request contains request parameters
     */
    public async updateParagraphListFormatOnline(request: model.UpdateParagraphListFormatOnlineRequest): Promise<model.WordsIncomingMessage<model.UpdateParagraphListFormatOnlineResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling updateParagraphListFormatOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.UpdateParagraphListFormatOnlineResponse>();
        result.response = response;
        result.body = request.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Updates a Run object in the paragraph.
     * @param request contains request parameters
     */
    public async updateRun(request: model.UpdateRunRequest): Promise<model.WordsIncomingMessage<model.RunResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling updateRun.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.RunResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Updates the font properties of a Run object in the paragraph.
     * @param request contains request parameters
     */
    public async updateRunFont(request: model.UpdateRunFontRequest): Promise<model.WordsIncomingMessage<model.FontResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling updateRunFont.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.FontResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Updates the font properties of a Run object in the paragraph.
     * @param request contains request parameters
     */
    public async updateRunFontOnline(request: model.UpdateRunFontOnlineRequest): Promise<model.WordsIncomingMessage<model.UpdateRunFontOnlineResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling updateRunFontOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.UpdateRunFontOnlineResponse>();
        result.response = response;
        result.body = request.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Updates a Run object in the paragraph.
     * @param request contains request parameters
     */
    public async updateRunOnline(request: model.UpdateRunOnlineRequest): Promise<model.WordsIncomingMessage<model.UpdateRunOnlineResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling updateRunOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.UpdateRunOnlineResponse>();
        result.response = response;
        result.body = request.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Updates the page setup of a section in the document.
     * @param request contains request parameters
     */
    public async updateSectionPageSetup(request: model.UpdateSectionPageSetupRequest): Promise<model.WordsIncomingMessage<model.SectionPageSetupResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling updateSectionPageSetup.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.SectionPageSetupResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Updates the page setup of a section in the document.
     * @param request contains request parameters
     */
    public async updateSectionPageSetupOnline(request: model.UpdateSectionPageSetupOnlineRequest): Promise<model.WordsIncomingMessage<model.UpdateSectionPageSetupOnlineResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling updateSectionPageSetupOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.UpdateSectionPageSetupOnlineResponse>();
        result.response = response;
        result.body = request.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Updates a style in the document.
     * @param request contains request parameters
     */
    public async updateStyle(request: model.UpdateStyleRequest): Promise<model.WordsIncomingMessage<model.StyleResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling updateStyle.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.StyleResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Updates a style in the document.
     * @param request contains request parameters
     */
    public async updateStyleOnline(request: model.UpdateStyleOnlineRequest): Promise<model.WordsIncomingMessage<model.UpdateStyleOnlineResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling updateStyleOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.UpdateStyleOnlineResponse>();
        result.response = response;
        result.body = request.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Updates the formatting properties of a cell in the table row.
     * @param request contains request parameters
     */
    public async updateTableCellFormat(request: model.UpdateTableCellFormatRequest): Promise<model.WordsIncomingMessage<model.TableCellFormatResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling updateTableCellFormat.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.TableCellFormatResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Updates the formatting properties of a cell in the table row.
     * @param request contains request parameters
     */
    public async updateTableCellFormatOnline(request: model.UpdateTableCellFormatOnlineRequest): Promise<model.WordsIncomingMessage<model.UpdateTableCellFormatOnlineResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling updateTableCellFormatOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.UpdateTableCellFormatOnlineResponse>();
        result.response = response;
        result.body = request.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Updates properties of a table in the document node.
     * @param request contains request parameters
     */
    public async updateTableProperties(request: model.UpdateTablePropertiesRequest): Promise<model.WordsIncomingMessage<model.TablePropertiesResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling updateTableProperties.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.TablePropertiesResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Updates properties of a table in the document node.
     * @param request contains request parameters
     */
    public async updateTablePropertiesOnline(request: model.UpdateTablePropertiesOnlineRequest): Promise<model.WordsIncomingMessage<model.UpdateTablePropertiesOnlineResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling updateTablePropertiesOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.UpdateTablePropertiesOnlineResponse>();
        result.response = response;
        result.body = request.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Updates the formatting properties of a table row.
     * @param request contains request parameters
     */
    public async updateTableRowFormat(request: model.UpdateTableRowFormatRequest): Promise<model.WordsIncomingMessage<model.TableRowFormatResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling updateTableRowFormat.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.TableRowFormatResponse>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Updates the formatting properties of a table row.
     * @param request contains request parameters
     */
    public async updateTableRowFormatOnline(request: model.UpdateTableRowFormatOnlineRequest): Promise<model.WordsIncomingMessage<model.UpdateTableRowFormatOnlineResponse>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling updateTableRowFormatOnline.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.UpdateTableRowFormatOnlineResponse>();
        result.response = response;
        result.body = request.createResponse(response.body, getBoundary(response.headers));
        return Promise.resolve(result);
    }

    /**
     * Upload file.
     * @param request contains request parameters
     */
    public async uploadFile(request: model.UploadFileRequest): Promise<model.WordsIncomingMessage<model.FilesUploadResult>> {
        if (request === null || request === undefined) {
            throw new Error('Required parameter "request" was null or undefined when calling uploadFile.');
        }

        const requestOptions = request.createRequestOptions(this.configuration);

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = new model.WordsIncomingMessage<model.FilesUploadResult>();
        result.response = response;
        result.body = request.createResponse(response.body);
        return Promise.resolve(result);
    }

    /**
     * Batch request.
     * @param requests contains requests parameters
     */
    public async batch(...requests: model.RequestInterface[]): Promise<model.WordsIncomingMessage<any[]>> {
        if (requests === null || requests.length == 0) {
            throw new Error('Required parameter "requests" was null or empty.');
        }

        if (requests.filter(function (x) { return x.parentId != null; }).length > 0)
        {
            if (requests.filter(function (x) { return x.isBinaryResponse(); }).length > 0) {
                throw new Error('Requests with dependencies can\'t have a binary response.');
            }

            if (requests.filter(function (x) { return x.isBinaryResponse(); }).length > 0) {
                throw new Error('Requests with dependencies can\'t have a binary response.');
            }
        }

        // create a batch request
        const requestOptions: request.Options = {
            method: "PUT",
            uri: this.configuration.getApiBaseUrl() + "/words/batch",
            headers: {
                "Content-Type": "multipart/mixed",
            },
        };

        var querystring = require('querystring');
        const requestParts = [];

        for (let i = 0; i < requests.length; i++) {
            const options = requests[i].createRequestOptions(this.configuration);

            let bodyString = options.method + " " + options.uri.toString().replace(this.configuration.getApiBaseUrl() + "/words/", "") + (Object.keys(options.qs).length ? '?' + querystring.stringify(options.qs) : "") + "\r\n";

            if (options.formData == null) {


                if (options.body != null) {
                    bodyString += "Content-Type: application/json; charset=utf-8\r\n";
                }

                bodyString += "RequestId: " + requests[i].id + "\r\n";
                if (requests[i].parentId) {
                    bodyString += "DependsOn: " + requests[i].parentId + "\r\n";
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
                var formData = options.formData;
                var requestForm = new FormData();
                var appendFormValue = async function (key, value) {

                    var readStream = async function (stream: Readable): Promise<Buffer> {
                        let data: Buffer = Buffer.alloc(0);
                        for await (const x of stream) {
                            data = Buffer.concat([x, data]);
                        }
                        return data;
                    };

                    if (value instanceof require("stream").Readable) {
                        try {
                            const data = await readStream(value);

                            if (value && value.hasOwnProperty('value') && value.hasOwnProperty('options')) {
                                value.value = data;
                            } else {
                                value = data;
                            }
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

                for (var formKey in formData) {
                    if (formData.hasOwnProperty(formKey)) {
                        var formValue = formData[formKey];
                        if (formValue instanceof Array) {
                            for (var j = 0; j < formValue.length; j++) {
                                appendFormValue(formKey, formValue[j]);
                            }
                        } else {
                            appendFormValue(formKey, formValue);
                        }
                    }
                }

                bodyString += "Content-Type: " + requestForm.getHeaders()["content-type"] + "\r\n";

                bodyString += "RequestId: " + requests[i].id + "\r\n";
                if (requests[i].parentId) {
                    bodyString += "DependsOn: " + requests[i].parentId + "\r\n";
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

        const response = await invokeApiMethod(requestOptions, this.configuration);

        // parse the response
        const boundary = getBoundary(response.headers);
        const bodyString = response.body.toString().slice(2, -4);
        let responseParts = ObjectSerializer.parseMultipartBody(bodyString, boundary);

        if (hasDependentRequests) {
            var sortedParts = new Array();

            const responseObjects =  responseParts.reduce(function(map, obj) {
                const parsedObj = JSON.parse(obj.body);
                map[parsedObj.RequestId]=obj;
                return map;
            }, {});

            for (const request of requests) {
                sortedParts.push(responseObjects[request.id]);
            }

            responseParts = sortedParts;
        }

        var data = new Array();
        for (let i = 0; i < requests.length; i++) {
            if (responseParts[i].code < 200 && responseParts[i].code > 299) {
                let bodyContent = response.body;
                data.push(ObjectSerializer.deserialize(bodyContent, "WordsApiErrorResponse"));
            }
            else {
                if (responseParts[i].body != null) {
                    switch (responseParts[i].headers["content-type"]) {
                        case "application/json; charset=utf-8": {
                            data.push(requests[i].createResponse(JSON.parse(responseParts[i].body)));
                            break;
                        }
                        case "application/octet-stream": {
                            data.push(requests[i].createResponse(responseParts[i].body));
                            break;
                        }
                        case "multipart": {
                            const partBoundary = getBoundary(responseParts[i].headers);
                            data.push(requests[i].createResponse(responseParts[i].body, partBoundary));
                            break;
                        }
                        default: {
                            throw new Error("Unknown response type: " + responseParts[i].headers["content-type"]);
                        }
                    }
                }
            }
        }

        const result: model.WordsIncomingMessage<any[]> = { response, body: data };
        return Promise.resolve(result);
    }
}

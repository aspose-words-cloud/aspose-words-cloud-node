/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="api.ts">
 *   Copyright (c) 2020 Aspose.Words for Cloud
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

import { Configuration } from "./internal/configuration";
import { ObjectSerializer } from "./internal/objectSerializer";
import { addQueryParameterToUrl, invokeApiMethod } from "./internal/requestHelper";
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
     * @param requestObj contains request parameters
     */
    public async acceptAllRevisions(requestObj: model.AcceptAllRevisionsRequest): Promise< model.WordsIncomingMessage< model.RevisionsModificationResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling acceptAllRevisions.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/revisions/acceptAll"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling acceptAllRevisions.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling acceptAllRevisions.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "RevisionsModificationResponse");
        const result: model.WordsIncomingMessage< model.RevisionsModificationResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Accepts all revisions in the document.
     * @param requestObj contains request parameters
     */
    public async acceptAllRevisionsOnline(requestObj: model.AcceptAllRevisionsOnlineRequest): Promise< model.WordsIncomingMessage< AcceptAllRevisionsOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling acceptAllRevisionsOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/revisions/acceptAll"
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling acceptAllRevisionsOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling acceptAllRevisionsOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "AcceptAllRevisionsOnlineResponse");
        const result: model.WordsIncomingMessage< model.AcceptAllRevisionsOnlineResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Appends documents to the original document.
     * @param requestObj contains request parameters
     */
    public async appendDocument(requestObj: model.AppendDocumentRequest): Promise< model.WordsIncomingMessage< model.DocumentResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling appendDocument.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/appendDocument"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling appendDocument.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling appendDocument.');
        }

        // verify required parameter 'requestObj.documentList' is not undefined
        if (requestObj.documentList === undefined) {
            throw new Error('Required parameter "requestObj.documentList" was undefined when calling appendDocument.');
        }

        // verify required parameter 'requestObj.documentList' is not null
        if (requestObj.documentList === null) {
            throw new Error('Required parameter "requestObj.documentList" was null when calling appendDocument.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.documentList, requestObj.documentList.constructor.name === "Object" ? "importedDocumentEntryList.DocumentEntryList" : requestObj.documentList.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "DocumentResponse");
        const result: model.WordsIncomingMessage< model.DocumentResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Appends documents to the original document.
     * @param requestObj contains request parameters
     */
    public async appendDocumentOnline(requestObj: model.AppendDocumentOnlineRequest): Promise< model.WordsIncomingMessage< AppendDocumentOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling appendDocumentOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/appendDocument"
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling appendDocumentOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling appendDocumentOnline.');
        }

        // verify required parameter 'requestObj.documentList' is not undefined
        if (requestObj.documentList === undefined) {
            throw new Error('Required parameter "requestObj.documentList" was undefined when calling appendDocumentOnline.');
        }

        // verify required parameter 'requestObj.documentList' is not null
        if (requestObj.documentList === null) {
            throw new Error('Required parameter "requestObj.documentList" was null when calling appendDocumentOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }
        if (requestObj.documentList !== undefined) {
            formParams.DocumentList = JSON.stringify(requestObj.documentList);
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "AppendDocumentOnlineResponse");
        const result: model.WordsIncomingMessage< model.AppendDocumentOnlineResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Applies a style to the document node.
     * @param requestObj contains request parameters
     */
    public async applyStyleToDocumentElement(requestObj: model.ApplyStyleToDocumentElementRequest): Promise< model.WordsIncomingMessage< model.WordsResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling applyStyleToDocumentElement.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{styledNodePath}/style"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "styledNodePath" + "}", (requestObj.styledNodePath !== null && requestObj.styledNodePath !== undefined) ? "/" + String(requestObj.styledNodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling applyStyleToDocumentElement.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling applyStyleToDocumentElement.');
        }

        // verify required parameter 'requestObj.styledNodePath' is not undefined
        if (requestObj.styledNodePath === undefined) {
            throw new Error('Required parameter "requestObj.styledNodePath" was undefined when calling applyStyleToDocumentElement.');
        }

        // verify required parameter 'requestObj.styledNodePath' is not null
        if (requestObj.styledNodePath === null) {
            throw new Error('Required parameter "requestObj.styledNodePath" was null when calling applyStyleToDocumentElement.');
        }

        // verify required parameter 'requestObj.styleApply' is not undefined
        if (requestObj.styleApply === undefined) {
            throw new Error('Required parameter "requestObj.styleApply" was undefined when calling applyStyleToDocumentElement.');
        }

        // verify required parameter 'requestObj.styleApply' is not null
        if (requestObj.styleApply === null) {
            throw new Error('Required parameter "requestObj.styleApply" was null when calling applyStyleToDocumentElement.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.styleApply, requestObj.styleApply.constructor.name === "Object" ? "importedStyleApply.StyleApply" : requestObj.styleApply.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "WordsResponse");
        const result: model.WordsIncomingMessage< model.WordsResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Applies a style to the document node.
     * @param requestObj contains request parameters
     */
    public async applyStyleToDocumentElementOnline(requestObj: model.ApplyStyleToDocumentElementOnlineRequest): Promise< model.WordsIncomingMessage< ApplyStyleToDocumentElementOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling applyStyleToDocumentElementOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/{styledNodePath}/style"
            .replace("/{" + "styledNodePath" + "}", (requestObj.styledNodePath !== null && requestObj.styledNodePath !== undefined) ? "/" + String(requestObj.styledNodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling applyStyleToDocumentElementOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling applyStyleToDocumentElementOnline.');
        }

        // verify required parameter 'requestObj.styledNodePath' is not undefined
        if (requestObj.styledNodePath === undefined) {
            throw new Error('Required parameter "requestObj.styledNodePath" was undefined when calling applyStyleToDocumentElementOnline.');
        }

        // verify required parameter 'requestObj.styledNodePath' is not null
        if (requestObj.styledNodePath === null) {
            throw new Error('Required parameter "requestObj.styledNodePath" was null when calling applyStyleToDocumentElementOnline.');
        }

        // verify required parameter 'requestObj.styleApply' is not undefined
        if (requestObj.styleApply === undefined) {
            throw new Error('Required parameter "requestObj.styleApply" was undefined when calling applyStyleToDocumentElementOnline.');
        }

        // verify required parameter 'requestObj.styleApply' is not null
        if (requestObj.styleApply === null) {
            throw new Error('Required parameter "requestObj.styleApply" was null when calling applyStyleToDocumentElementOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }
        if (requestObj.styleApply !== undefined) {
            formParams.StyleApply = JSON.stringify(requestObj.styleApply);
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "ApplyStyleToDocumentElementOnlineResponse");
        const result: model.WordsIncomingMessage< model.ApplyStyleToDocumentElementOnlineResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Executes the report generation process using the specified document template and the external data source in XML, JSON or CSV format.
     * @param requestObj contains request parameters
     */
    public async buildReport(requestObj: model.BuildReportRequest): Promise< model.WordsIncomingMessage< model.DocumentResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling buildReport.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/buildReport"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling buildReport.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling buildReport.');
        }

        // verify required parameter 'requestObj.data' is not undefined
        if (requestObj.data === undefined) {
            throw new Error('Required parameter "requestObj.data" was undefined when calling buildReport.');
        }

        // verify required parameter 'requestObj.data' is not null
        if (requestObj.data === null) {
            throw new Error('Required parameter "requestObj.data" was null when calling buildReport.');
        }

        // verify required parameter 'requestObj.reportEngineSettings' is not undefined
        if (requestObj.reportEngineSettings === undefined) {
            throw new Error('Required parameter "requestObj.reportEngineSettings" was undefined when calling buildReport.');
        }

        // verify required parameter 'requestObj.reportEngineSettings' is not null
        if (requestObj.reportEngineSettings === null) {
            throw new Error('Required parameter "requestObj.reportEngineSettings" was null when calling buildReport.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        if (requestObj.data !== undefined) {
            formParams.Data = ObjectSerializer.serialize(requestObj.data, "string");
        }
        if (requestObj.reportEngineSettings !== undefined) {
            formParams.ReportEngineSettings = JSON.stringify(requestObj.reportEngineSettings);
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "DocumentResponse");
        const result: model.WordsIncomingMessage< model.DocumentResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Executes the report generation process online using the specified document template and the external data source in XML, JSON or CSV format.
     * @param requestObj contains request parameters
     */
    public async buildReportOnline(requestObj: model.BuildReportOnlineRequest): Promise< model.WordsIncomingMessage< Buffer > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling buildReportOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/buildReport"
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.template' is not undefined
        if (requestObj.template === undefined) {
            throw new Error('Required parameter "requestObj.template" was undefined when calling buildReportOnline.');
        }

        // verify required parameter 'requestObj.template' is not null
        if (requestObj.template === null) {
            throw new Error('Required parameter "requestObj.template" was null when calling buildReportOnline.');
        }

        // verify required parameter 'requestObj.data' is not undefined
        if (requestObj.data === undefined) {
            throw new Error('Required parameter "requestObj.data" was undefined when calling buildReportOnline.');
        }

        // verify required parameter 'requestObj.data' is not null
        if (requestObj.data === null) {
            throw new Error('Required parameter "requestObj.data" was null when calling buildReportOnline.');
        }

        // verify required parameter 'requestObj.reportEngineSettings' is not undefined
        if (requestObj.reportEngineSettings === undefined) {
            throw new Error('Required parameter "requestObj.reportEngineSettings" was undefined when calling buildReportOnline.');
        }

        // verify required parameter 'requestObj.reportEngineSettings' is not null
        if (requestObj.reportEngineSettings === null) {
            throw new Error('Required parameter "requestObj.reportEngineSettings" was null when calling buildReportOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "documentFileName", requestObj.documentFileName);
        if (requestObj.template !== undefined) {
            formParams.Template = requestObj.template;
        }
        if (requestObj.data !== undefined) {
            formParams.Data = ObjectSerializer.serialize(requestObj.data, "string");
        }
        if (requestObj.reportEngineSettings !== undefined) {
            formParams.ReportEngineSettings = JSON.stringify(requestObj.reportEngineSettings);
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "Buffer");
        const result: model.WordsIncomingMessage< Buffer > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Runs a multi-class text classification for the specified raw text.
     * @param requestObj contains request parameters
     */
    public async classify(requestObj: model.ClassifyRequest): Promise< model.WordsIncomingMessage< model.ClassificationResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling classify.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/classify"
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.text' is not undefined
        if (requestObj.text === undefined) {
            throw new Error('Required parameter "requestObj.text" was undefined when calling classify.');
        }

        // verify required parameter 'requestObj.text' is not null
        if (requestObj.text === null) {
            throw new Error('Required parameter "requestObj.text" was null when calling classify.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "bestClassesCount", requestObj.bestClassesCount);

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.text, requestObj.text.constructor.name === "Object" ? "string" : requestObj.text.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "ClassificationResponse");
        const result: model.WordsIncomingMessage< model.ClassificationResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Runs a multi-class text classification for the document.
     * @param requestObj contains request parameters
     */
    public async classifyDocument(requestObj: model.ClassifyDocumentRequest): Promise< model.WordsIncomingMessage< model.ClassificationResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling classifyDocument.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/classify"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling classifyDocument.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling classifyDocument.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "bestClassesCount", requestObj.bestClassesCount);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "taxonomy", requestObj.taxonomy);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "ClassificationResponse");
        const result: model.WordsIncomingMessage< model.ClassificationResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Runs a multi-class text classification for the document.
     * @param requestObj contains request parameters
     */
    public async classifyDocumentOnline(requestObj: model.ClassifyDocumentOnlineRequest): Promise< model.WordsIncomingMessage< model.ClassificationResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling classifyDocumentOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/get/classify"
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling classifyDocumentOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling classifyDocumentOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "bestClassesCount", requestObj.bestClassesCount);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "taxonomy", requestObj.taxonomy);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "ClassificationResponse");
        const result: model.WordsIncomingMessage< model.ClassificationResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Compares two documents.
     * @param requestObj contains request parameters
     */
    public async compareDocument(requestObj: model.CompareDocumentRequest): Promise< model.WordsIncomingMessage< model.DocumentResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling compareDocument.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/compareDocument"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling compareDocument.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling compareDocument.');
        }

        // verify required parameter 'requestObj.compareData' is not undefined
        if (requestObj.compareData === undefined) {
            throw new Error('Required parameter "requestObj.compareData" was undefined when calling compareDocument.');
        }

        // verify required parameter 'requestObj.compareData' is not null
        if (requestObj.compareData === null) {
            throw new Error('Required parameter "requestObj.compareData" was null when calling compareDocument.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.compareData, requestObj.compareData.constructor.name === "Object" ? "importedCompareData.CompareData" : requestObj.compareData.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "DocumentResponse");
        const result: model.WordsIncomingMessage< model.DocumentResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Compares two documents.
     * @param requestObj contains request parameters
     */
    public async compareDocumentOnline(requestObj: model.CompareDocumentOnlineRequest): Promise< model.WordsIncomingMessage< CompareDocumentOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling compareDocumentOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/compareDocument"
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling compareDocumentOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling compareDocumentOnline.');
        }

        // verify required parameter 'requestObj.compareData' is not undefined
        if (requestObj.compareData === undefined) {
            throw new Error('Required parameter "requestObj.compareData" was undefined when calling compareDocumentOnline.');
        }

        // verify required parameter 'requestObj.compareData' is not null
        if (requestObj.compareData === null) {
            throw new Error('Required parameter "requestObj.compareData" was null when calling compareDocumentOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }
        if (requestObj.compareData !== undefined) {
            formParams.CompareData = JSON.stringify(requestObj.compareData);
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "CompareDocumentOnlineResponse");
        const result: model.WordsIncomingMessage< model.CompareDocumentOnlineResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Converts a document on a local drive to the specified format.
     * @param requestObj contains request parameters
     */
    public async convertDocument(requestObj: model.ConvertDocumentRequest): Promise< model.WordsIncomingMessage< Buffer > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling convertDocument.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/convert"
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling convertDocument.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling convertDocument.');
        }

        // verify required parameter 'requestObj.format' is not undefined
        if (requestObj.format === undefined) {
            throw new Error('Required parameter "requestObj.format" was undefined when calling convertDocument.');
        }

        // verify required parameter 'requestObj.format' is not null
        if (requestObj.format === null) {
            throw new Error('Required parameter "requestObj.format" was null when calling convertDocument.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "format", requestObj.format);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fileNameFieldValue", requestObj.fileNameFieldValue);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsLocation", requestObj.fontsLocation);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "Buffer");
        const result: model.WordsIncomingMessage< Buffer > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Copy file.
     * @param requestObj contains request parameters
     */
    public async copyFile(requestObj: model.CopyFileRequest): Promise< http.IncomingMessage > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling copyFile.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/storage/file/copy/{srcPath}"
            .replace("/{" + "srcPath" + "}", (requestObj.srcPath !== null && requestObj.srcPath !== undefined) ? "/" + String(requestObj.srcPath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.destPath' is not undefined
        if (requestObj.destPath === undefined) {
            throw new Error('Required parameter "requestObj.destPath" was undefined when calling copyFile.');
        }

        // verify required parameter 'requestObj.srcPath' is not undefined
        if (requestObj.srcPath === undefined) {
            throw new Error('Required parameter "requestObj.srcPath" was undefined when calling copyFile.');
        }

        // verify required parameter 'requestObj.srcPath' is not null
        if (requestObj.srcPath === null) {
            throw new Error('Required parameter "requestObj.srcPath" was null when calling copyFile.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destPath", requestObj.destPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "srcStorageName", requestObj.srcStorageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destStorageName", requestObj.destStorageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "versionId", requestObj.versionId);

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Copy folder.
     * @param requestObj contains request parameters
     */
    public async copyFolder(requestObj: model.CopyFolderRequest): Promise< http.IncomingMessage > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling copyFolder.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/storage/folder/copy/{srcPath}"
            .replace("/{" + "srcPath" + "}", (requestObj.srcPath !== null && requestObj.srcPath !== undefined) ? "/" + String(requestObj.srcPath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.destPath' is not undefined
        if (requestObj.destPath === undefined) {
            throw new Error('Required parameter "requestObj.destPath" was undefined when calling copyFolder.');
        }

        // verify required parameter 'requestObj.srcPath' is not undefined
        if (requestObj.srcPath === undefined) {
            throw new Error('Required parameter "requestObj.srcPath" was undefined when calling copyFolder.');
        }

        // verify required parameter 'requestObj.srcPath' is not null
        if (requestObj.srcPath === null) {
            throw new Error('Required parameter "requestObj.srcPath" was null when calling copyFolder.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destPath", requestObj.destPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "srcStorageName", requestObj.srcStorageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destStorageName", requestObj.destStorageName);

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Makes a copy of the style in the document.
     * @param requestObj contains request parameters
     */
    public async copyStyle(requestObj: model.CopyStyleRequest): Promise< model.WordsIncomingMessage< model.StyleResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling copyStyle.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/styles/copy"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling copyStyle.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling copyStyle.');
        }

        // verify required parameter 'requestObj.styleCopy' is not undefined
        if (requestObj.styleCopy === undefined) {
            throw new Error('Required parameter "requestObj.styleCopy" was undefined when calling copyStyle.');
        }

        // verify required parameter 'requestObj.styleCopy' is not null
        if (requestObj.styleCopy === null) {
            throw new Error('Required parameter "requestObj.styleCopy" was null when calling copyStyle.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.styleCopy, requestObj.styleCopy.constructor.name === "Object" ? "importedStyleCopy.StyleCopy" : requestObj.styleCopy.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "StyleResponse");
        const result: model.WordsIncomingMessage< model.StyleResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Makes a copy of the style in the document.
     * @param requestObj contains request parameters
     */
    public async copyStyleOnline(requestObj: model.CopyStyleOnlineRequest): Promise< model.WordsIncomingMessage< CopyStyleOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling copyStyleOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/styles/copy"
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling copyStyleOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling copyStyleOnline.');
        }

        // verify required parameter 'requestObj.styleCopy' is not undefined
        if (requestObj.styleCopy === undefined) {
            throw new Error('Required parameter "requestObj.styleCopy" was undefined when calling copyStyleOnline.');
        }

        // verify required parameter 'requestObj.styleCopy' is not null
        if (requestObj.styleCopy === null) {
            throw new Error('Required parameter "requestObj.styleCopy" was null when calling copyStyleOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }
        if (requestObj.styleCopy !== undefined) {
            formParams.StyleCopy = JSON.stringify(requestObj.styleCopy);
        }

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "CopyStyleOnlineResponse");
        const result: model.WordsIncomingMessage< model.CopyStyleOnlineResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Supported extensions: ".doc", ".docx", ".docm", ".dot", ".dotm", ".dotx", ".flatopc", ".fopc", ".flatopc_macro", ".fopc_macro", ".flatopc_template", ".fopc_template", ".flatopc_template_macro", ".fopc_template_macro", ".wordml", ".wml", ".rtf".
     * @param requestObj contains request parameters
     */
    public async createDocument(requestObj: model.CreateDocumentRequest): Promise< model.WordsIncomingMessage< model.DocumentResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling createDocument.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/create"
            .replace("//", "/");
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fileName", requestObj.fileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "DocumentResponse");
        const result: model.WordsIncomingMessage< model.DocumentResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Create the folder.
     * @param requestObj contains request parameters
     */
    public async createFolder(requestObj: model.CreateFolderRequest): Promise< http.IncomingMessage > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling createFolder.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/storage/folder/{path}"
            .replace("/{" + "path" + "}", (requestObj.path !== null && requestObj.path !== undefined) ? "/" + String(requestObj.path) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.path' is not undefined
        if (requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was undefined when calling createFolder.');
        }

        // verify required parameter 'requestObj.path' is not null
        if (requestObj.path === null) {
            throw new Error('Required parameter "requestObj.path" was null when calling createFolder.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Adds a new or updates an existing document property.
     * @param requestObj contains request parameters
     */
    public async createOrUpdateDocumentProperty(requestObj: model.CreateOrUpdateDocumentPropertyRequest): Promise< model.WordsIncomingMessage< model.DocumentPropertyResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling createOrUpdateDocumentProperty.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/documentProperties/{propertyName}"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "propertyName" + "}", (requestObj.propertyName !== null && requestObj.propertyName !== undefined) ? "/" + String(requestObj.propertyName) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling createOrUpdateDocumentProperty.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling createOrUpdateDocumentProperty.');
        }

        // verify required parameter 'requestObj.propertyName' is not undefined
        if (requestObj.propertyName === undefined) {
            throw new Error('Required parameter "requestObj.propertyName" was undefined when calling createOrUpdateDocumentProperty.');
        }

        // verify required parameter 'requestObj.propertyName' is not null
        if (requestObj.propertyName === null) {
            throw new Error('Required parameter "requestObj.propertyName" was null when calling createOrUpdateDocumentProperty.');
        }

        // verify required parameter 'requestObj.property' is not undefined
        if (requestObj.property === undefined) {
            throw new Error('Required parameter "requestObj.property" was undefined when calling createOrUpdateDocumentProperty.');
        }

        // verify required parameter 'requestObj.property' is not null
        if (requestObj.property === null) {
            throw new Error('Required parameter "requestObj.property" was null when calling createOrUpdateDocumentProperty.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.property, requestObj.property.constructor.name === "Object" ? "importedDocumentPropertyCreateOrUpdate.DocumentPropertyCreateOrUpdate" : requestObj.property.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "DocumentPropertyResponse");
        const result: model.WordsIncomingMessage< model.DocumentPropertyResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Adds a new or updates an existing document property.
     * @param requestObj contains request parameters
     */
    public async createOrUpdateDocumentPropertyOnline(requestObj: model.CreateOrUpdateDocumentPropertyOnlineRequest): Promise< model.WordsIncomingMessage< CreateOrUpdateDocumentPropertyOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling createOrUpdateDocumentPropertyOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/documentProperties/{propertyName}"
            .replace("/{" + "propertyName" + "}", (requestObj.propertyName !== null && requestObj.propertyName !== undefined) ? "/" + String(requestObj.propertyName) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling createOrUpdateDocumentPropertyOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling createOrUpdateDocumentPropertyOnline.');
        }

        // verify required parameter 'requestObj.propertyName' is not undefined
        if (requestObj.propertyName === undefined) {
            throw new Error('Required parameter "requestObj.propertyName" was undefined when calling createOrUpdateDocumentPropertyOnline.');
        }

        // verify required parameter 'requestObj.propertyName' is not null
        if (requestObj.propertyName === null) {
            throw new Error('Required parameter "requestObj.propertyName" was null when calling createOrUpdateDocumentPropertyOnline.');
        }

        // verify required parameter 'requestObj.property' is not undefined
        if (requestObj.property === undefined) {
            throw new Error('Required parameter "requestObj.property" was undefined when calling createOrUpdateDocumentPropertyOnline.');
        }

        // verify required parameter 'requestObj.property' is not null
        if (requestObj.property === null) {
            throw new Error('Required parameter "requestObj.property" was null when calling createOrUpdateDocumentPropertyOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }
        if (requestObj.property !== undefined) {
            formParams.Property = JSON.stringify(requestObj.property);
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "CreateOrUpdateDocumentPropertyOnlineResponse");
        const result: model.WordsIncomingMessage< model.CreateOrUpdateDocumentPropertyOnlineResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Removes paragraph tab stops from the document node.
     * @param requestObj contains request parameters
     */
    public async deleteAllParagraphTabStops(requestObj: model.DeleteAllParagraphTabStopsRequest): Promise< model.WordsIncomingMessage< model.TabStopsResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteAllParagraphTabStops.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/paragraphs/{index}/tabstops"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling deleteAllParagraphTabStops.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling deleteAllParagraphTabStops.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling deleteAllParagraphTabStops.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling deleteAllParagraphTabStops.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);

        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "TabStopsResponse");
        const result: model.WordsIncomingMessage< model.TabStopsResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * The 'nodePath' parameter should refer to a paragraph, a cell or a row.
     * @param requestObj contains request parameters
     */
    public async deleteBorder(requestObj: model.DeleteBorderRequest): Promise< model.WordsIncomingMessage< model.BorderResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteBorder.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/borders/{borderType}"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "borderType" + "}", (requestObj.borderType !== null && requestObj.borderType !== undefined) ? "/" + String(requestObj.borderType) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling deleteBorder.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling deleteBorder.');
        }

        // verify required parameter 'requestObj.borderType' is not undefined
        if (requestObj.borderType === undefined) {
            throw new Error('Required parameter "requestObj.borderType" was undefined when calling deleteBorder.');
        }

        // verify required parameter 'requestObj.borderType' is not null
        if (requestObj.borderType === null) {
            throw new Error('Required parameter "requestObj.borderType" was null when calling deleteBorder.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);

        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "BorderResponse");
        const result: model.WordsIncomingMessage< model.BorderResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Removes a border from the document node.
     * @param requestObj contains request parameters
     */
    public async deleteBorderOnline(requestObj: model.DeleteBorderOnlineRequest): Promise< model.WordsIncomingMessage< DeleteBorderOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteBorderOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/{nodePath}/borders/{borderType}"
            .replace("/{" + "borderType" + "}", (requestObj.borderType !== null && requestObj.borderType !== undefined) ? "/" + String(requestObj.borderType) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling deleteBorderOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling deleteBorderOnline.');
        }

        // verify required parameter 'requestObj.borderType' is not undefined
        if (requestObj.borderType === undefined) {
            throw new Error('Required parameter "requestObj.borderType" was undefined when calling deleteBorderOnline.');
        }

        // verify required parameter 'requestObj.borderType' is not null
        if (requestObj.borderType === null) {
            throw new Error('Required parameter "requestObj.borderType" was null when calling deleteBorderOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }

        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "DeleteBorderOnlineResponse");
        const result: model.WordsIncomingMessage< model.DeleteBorderOnlineResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * The 'nodePath' parameter should refer to a paragraph, a cell or a row.
     * @param requestObj contains request parameters
     */
    public async deleteBorders(requestObj: model.DeleteBordersRequest): Promise< model.WordsIncomingMessage< model.BordersResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteBorders.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/borders"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling deleteBorders.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling deleteBorders.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);

        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "BordersResponse");
        const result: model.WordsIncomingMessage< model.BordersResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Removes borders from the document node.
     * @param requestObj contains request parameters
     */
    public async deleteBordersOnline(requestObj: model.DeleteBordersOnlineRequest): Promise< model.WordsIncomingMessage< DeleteBordersOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteBordersOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/{nodePath}/borders"
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling deleteBordersOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling deleteBordersOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }

        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "DeleteBordersOnlineResponse");
        const result: model.WordsIncomingMessage< model.DeleteBordersOnlineResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Removes a comment from the document.
     * @param requestObj contains request parameters
     */
    public async deleteComment(requestObj: model.DeleteCommentRequest): Promise< http.IncomingMessage > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteComment.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/comments/{commentIndex}"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "commentIndex" + "}", (requestObj.commentIndex !== null && requestObj.commentIndex !== undefined) ? "/" + String(requestObj.commentIndex) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling deleteComment.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling deleteComment.');
        }

        // verify required parameter 'requestObj.commentIndex' is not undefined
        if (requestObj.commentIndex === undefined) {
            throw new Error('Required parameter "requestObj.commentIndex" was undefined when calling deleteComment.');
        }

        // verify required parameter 'requestObj.commentIndex' is not null
        if (requestObj.commentIndex === null) {
            throw new Error('Required parameter "requestObj.commentIndex" was null when calling deleteComment.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);

        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Removes a comment from the document.
     * @param requestObj contains request parameters
     */
    public async deleteCommentOnline(requestObj: model.DeleteCommentOnlineRequest): Promise< model.WordsIncomingMessage< Buffer > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteCommentOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/comments/{commentIndex}"
            .replace("/{" + "commentIndex" + "}", (requestObj.commentIndex !== null && requestObj.commentIndex !== undefined) ? "/" + String(requestObj.commentIndex) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling deleteCommentOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling deleteCommentOnline.');
        }

        // verify required parameter 'requestObj.commentIndex' is not undefined
        if (requestObj.commentIndex === undefined) {
            throw new Error('Required parameter "requestObj.commentIndex" was undefined when calling deleteCommentOnline.');
        }

        // verify required parameter 'requestObj.commentIndex' is not null
        if (requestObj.commentIndex === null) {
            throw new Error('Required parameter "requestObj.commentIndex" was null when calling deleteCommentOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }

        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "Buffer");
        const result: model.WordsIncomingMessage< Buffer > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Removes a document property.
     * @param requestObj contains request parameters
     */
    public async deleteDocumentProperty(requestObj: model.DeleteDocumentPropertyRequest): Promise< http.IncomingMessage > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteDocumentProperty.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/documentProperties/{propertyName}"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "propertyName" + "}", (requestObj.propertyName !== null && requestObj.propertyName !== undefined) ? "/" + String(requestObj.propertyName) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling deleteDocumentProperty.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling deleteDocumentProperty.');
        }

        // verify required parameter 'requestObj.propertyName' is not undefined
        if (requestObj.propertyName === undefined) {
            throw new Error('Required parameter "requestObj.propertyName" was undefined when calling deleteDocumentProperty.');
        }

        // verify required parameter 'requestObj.propertyName' is not null
        if (requestObj.propertyName === null) {
            throw new Error('Required parameter "requestObj.propertyName" was null when calling deleteDocumentProperty.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);

        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Removes a document property.
     * @param requestObj contains request parameters
     */
    public async deleteDocumentPropertyOnline(requestObj: model.DeleteDocumentPropertyOnlineRequest): Promise< model.WordsIncomingMessage< Buffer > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteDocumentPropertyOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/documentProperties/{propertyName}"
            .replace("/{" + "propertyName" + "}", (requestObj.propertyName !== null && requestObj.propertyName !== undefined) ? "/" + String(requestObj.propertyName) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling deleteDocumentPropertyOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling deleteDocumentPropertyOnline.');
        }

        // verify required parameter 'requestObj.propertyName' is not undefined
        if (requestObj.propertyName === undefined) {
            throw new Error('Required parameter "requestObj.propertyName" was undefined when calling deleteDocumentPropertyOnline.');
        }

        // verify required parameter 'requestObj.propertyName' is not null
        if (requestObj.propertyName === null) {
            throw new Error('Required parameter "requestObj.propertyName" was null when calling deleteDocumentPropertyOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }

        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "Buffer");
        const result: model.WordsIncomingMessage< Buffer > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Removes a DrawingObject from the document node.
     * @param requestObj contains request parameters
     */
    public async deleteDrawingObject(requestObj: model.DeleteDrawingObjectRequest): Promise< http.IncomingMessage > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteDrawingObject.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/drawingObjects/{index}"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling deleteDrawingObject.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling deleteDrawingObject.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling deleteDrawingObject.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling deleteDrawingObject.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);

        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Removes a DrawingObject from the document node.
     * @param requestObj contains request parameters
     */
    public async deleteDrawingObjectOnline(requestObj: model.DeleteDrawingObjectOnlineRequest): Promise< model.WordsIncomingMessage< Buffer > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteDrawingObjectOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/{nodePath}/drawingObjects/{index}"
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling deleteDrawingObjectOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling deleteDrawingObjectOnline.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling deleteDrawingObjectOnline.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling deleteDrawingObjectOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }

        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "Buffer");
        const result: model.WordsIncomingMessage< Buffer > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Removes a field from the document node.
     * @param requestObj contains request parameters
     */
    public async deleteField(requestObj: model.DeleteFieldRequest): Promise< http.IncomingMessage > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteField.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/fields/{index}"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling deleteField.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling deleteField.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling deleteField.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling deleteField.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);

        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Removes a field from the document node.
     * @param requestObj contains request parameters
     */
    public async deleteFieldOnline(requestObj: model.DeleteFieldOnlineRequest): Promise< model.WordsIncomingMessage< Buffer > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteFieldOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/{nodePath}/fields/{index}"
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling deleteFieldOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling deleteFieldOnline.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling deleteFieldOnline.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling deleteFieldOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }

        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "Buffer");
        const result: model.WordsIncomingMessage< Buffer > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Removes fields from the document node.
     * @param requestObj contains request parameters
     */
    public async deleteFields(requestObj: model.DeleteFieldsRequest): Promise< http.IncomingMessage > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteFields.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/fields"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling deleteFields.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling deleteFields.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);

        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Removes fields from the document node.
     * @param requestObj contains request parameters
     */
    public async deleteFieldsOnline(requestObj: model.DeleteFieldsOnlineRequest): Promise< model.WordsIncomingMessage< Buffer > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteFieldsOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/{nodePath}/fields"
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling deleteFieldsOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling deleteFieldsOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }

        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "Buffer");
        const result: model.WordsIncomingMessage< Buffer > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Delete file.
     * @param requestObj contains request parameters
     */
    public async deleteFile(requestObj: model.DeleteFileRequest): Promise< http.IncomingMessage > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteFile.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/storage/file/{path}"
            .replace("/{" + "path" + "}", (requestObj.path !== null && requestObj.path !== undefined) ? "/" + String(requestObj.path) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.path' is not undefined
        if (requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was undefined when calling deleteFile.');
        }

        // verify required parameter 'requestObj.path' is not null
        if (requestObj.path === null) {
            throw new Error('Required parameter "requestObj.path" was null when calling deleteFile.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "versionId", requestObj.versionId);

        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Delete folder.
     * @param requestObj contains request parameters
     */
    public async deleteFolder(requestObj: model.DeleteFolderRequest): Promise< http.IncomingMessage > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteFolder.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/storage/folder/{path}"
            .replace("/{" + "path" + "}", (requestObj.path !== null && requestObj.path !== undefined) ? "/" + String(requestObj.path) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.path' is not undefined
        if (requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was undefined when calling deleteFolder.');
        }

        // verify required parameter 'requestObj.path' is not null
        if (requestObj.path === null) {
            throw new Error('Required parameter "requestObj.path" was null when calling deleteFolder.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "recursive", requestObj.recursive);

        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Removes a footnote from the document node.
     * @param requestObj contains request parameters
     */
    public async deleteFootnote(requestObj: model.DeleteFootnoteRequest): Promise< http.IncomingMessage > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteFootnote.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/footnotes/{index}"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling deleteFootnote.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling deleteFootnote.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling deleteFootnote.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling deleteFootnote.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);

        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Removes a footnote from the document node.
     * @param requestObj contains request parameters
     */
    public async deleteFootnoteOnline(requestObj: model.DeleteFootnoteOnlineRequest): Promise< model.WordsIncomingMessage< Buffer > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteFootnoteOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/{nodePath}/footnotes/{index}"
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling deleteFootnoteOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling deleteFootnoteOnline.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling deleteFootnoteOnline.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling deleteFootnoteOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }

        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "Buffer");
        const result: model.WordsIncomingMessage< Buffer > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Removes a form field from the document node.
     * @param requestObj contains request parameters
     */
    public async deleteFormField(requestObj: model.DeleteFormFieldRequest): Promise< http.IncomingMessage > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteFormField.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/formfields/{index}"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling deleteFormField.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling deleteFormField.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling deleteFormField.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling deleteFormField.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);

        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Removes a form field from the document node.
     * @param requestObj contains request parameters
     */
    public async deleteFormFieldOnline(requestObj: model.DeleteFormFieldOnlineRequest): Promise< model.WordsIncomingMessage< Buffer > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteFormFieldOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/{nodePath}/formfields/{index}"
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling deleteFormFieldOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling deleteFormFieldOnline.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling deleteFormFieldOnline.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling deleteFormFieldOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }

        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "Buffer");
        const result: model.WordsIncomingMessage< Buffer > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Removes a HeaderFooter object from the document section.
     * @param requestObj contains request parameters
     */
    public async deleteHeaderFooter(requestObj: model.DeleteHeaderFooterRequest): Promise< http.IncomingMessage > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteHeaderFooter.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{sectionPath}/headersfooters/{index}"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "sectionPath" + "}", (requestObj.sectionPath !== null && requestObj.sectionPath !== undefined) ? "/" + String(requestObj.sectionPath) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling deleteHeaderFooter.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling deleteHeaderFooter.');
        }

        // verify required parameter 'requestObj.sectionPath' is not undefined
        if (requestObj.sectionPath === undefined) {
            throw new Error('Required parameter "requestObj.sectionPath" was undefined when calling deleteHeaderFooter.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling deleteHeaderFooter.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling deleteHeaderFooter.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);

        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Removes a HeaderFooter object from the document section.
     * @param requestObj contains request parameters
     */
    public async deleteHeaderFooterOnline(requestObj: model.DeleteHeaderFooterOnlineRequest): Promise< model.WordsIncomingMessage< Buffer > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteHeaderFooterOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/{sectionPath}/headersfooters/{index}"
            .replace("/{" + "sectionPath" + "}", (requestObj.sectionPath !== null && requestObj.sectionPath !== undefined) ? "/" + String(requestObj.sectionPath) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling deleteHeaderFooterOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling deleteHeaderFooterOnline.');
        }

        // verify required parameter 'requestObj.sectionPath' is not undefined
        if (requestObj.sectionPath === undefined) {
            throw new Error('Required parameter "requestObj.sectionPath" was undefined when calling deleteHeaderFooterOnline.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling deleteHeaderFooterOnline.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling deleteHeaderFooterOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }

        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "Buffer");
        const result: model.WordsIncomingMessage< Buffer > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Removes HeaderFooter objects from the document section.
     * @param requestObj contains request parameters
     */
    public async deleteHeadersFooters(requestObj: model.DeleteHeadersFootersRequest): Promise< http.IncomingMessage > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteHeadersFooters.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{sectionPath}/headersfooters"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "sectionPath" + "}", (requestObj.sectionPath !== null && requestObj.sectionPath !== undefined) ? "/" + String(requestObj.sectionPath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling deleteHeadersFooters.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling deleteHeadersFooters.');
        }

        // verify required parameter 'requestObj.sectionPath' is not undefined
        if (requestObj.sectionPath === undefined) {
            throw new Error('Required parameter "requestObj.sectionPath" was undefined when calling deleteHeadersFooters.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "headersFootersTypes", requestObj.headersFootersTypes);

        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Removes HeaderFooter objects from the document section.
     * @param requestObj contains request parameters
     */
    public async deleteHeadersFootersOnline(requestObj: model.DeleteHeadersFootersOnlineRequest): Promise< model.WordsIncomingMessage< Buffer > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteHeadersFootersOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/{sectionPath}/headersfooters"
            .replace("/{" + "sectionPath" + "}", (requestObj.sectionPath !== null && requestObj.sectionPath !== undefined) ? "/" + String(requestObj.sectionPath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling deleteHeadersFootersOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling deleteHeadersFootersOnline.');
        }

        // verify required parameter 'requestObj.sectionPath' is not undefined
        if (requestObj.sectionPath === undefined) {
            throw new Error('Required parameter "requestObj.sectionPath" was undefined when calling deleteHeadersFootersOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "headersFootersTypes", requestObj.headersFootersTypes);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }

        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "Buffer");
        const result: model.WordsIncomingMessage< Buffer > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Removes macros from the document.
     * @param requestObj contains request parameters
     */
    public async deleteMacros(requestObj: model.DeleteMacrosRequest): Promise< http.IncomingMessage > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteMacros.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/macros"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling deleteMacros.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling deleteMacros.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);

        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Removes macros from the document.
     * @param requestObj contains request parameters
     */
    public async deleteMacrosOnline(requestObj: model.DeleteMacrosOnlineRequest): Promise< model.WordsIncomingMessage< Buffer > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteMacrosOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/macros"
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling deleteMacrosOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling deleteMacrosOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }

        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "Buffer");
        const result: model.WordsIncomingMessage< Buffer > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Removes an OfficeMath object from the document node.
     * @param requestObj contains request parameters
     */
    public async deleteOfficeMathObject(requestObj: model.DeleteOfficeMathObjectRequest): Promise< http.IncomingMessage > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteOfficeMathObject.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/OfficeMathObjects/{index}"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling deleteOfficeMathObject.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling deleteOfficeMathObject.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling deleteOfficeMathObject.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling deleteOfficeMathObject.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);

        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Removes an OfficeMath object from the document node.
     * @param requestObj contains request parameters
     */
    public async deleteOfficeMathObjectOnline(requestObj: model.DeleteOfficeMathObjectOnlineRequest): Promise< model.WordsIncomingMessage< Buffer > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteOfficeMathObjectOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/{nodePath}/OfficeMathObjects/{index}"
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling deleteOfficeMathObjectOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling deleteOfficeMathObjectOnline.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling deleteOfficeMathObjectOnline.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling deleteOfficeMathObjectOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }

        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "Buffer");
        const result: model.WordsIncomingMessage< Buffer > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Removes a paragraph from the document node.
     * @param requestObj contains request parameters
     */
    public async deleteParagraph(requestObj: model.DeleteParagraphRequest): Promise< http.IncomingMessage > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteParagraph.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/paragraphs/{index}"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling deleteParagraph.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling deleteParagraph.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling deleteParagraph.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling deleteParagraph.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);

        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Removes the formatting properties of a paragraph list from the document node.
     * @param requestObj contains request parameters
     */
    public async deleteParagraphListFormat(requestObj: model.DeleteParagraphListFormatRequest): Promise< model.WordsIncomingMessage< model.ParagraphListFormatResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteParagraphListFormat.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/paragraphs/{index}/listFormat"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling deleteParagraphListFormat.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling deleteParagraphListFormat.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling deleteParagraphListFormat.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling deleteParagraphListFormat.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);

        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "ParagraphListFormatResponse");
        const result: model.WordsIncomingMessage< model.ParagraphListFormatResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Removes the formatting properties of a paragraph list from the document node.
     * @param requestObj contains request parameters
     */
    public async deleteParagraphListFormatOnline(requestObj: model.DeleteParagraphListFormatOnlineRequest): Promise< model.WordsIncomingMessage< DeleteParagraphListFormatOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteParagraphListFormatOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/{nodePath}/paragraphs/{index}/listFormat"
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling deleteParagraphListFormatOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling deleteParagraphListFormatOnline.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling deleteParagraphListFormatOnline.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling deleteParagraphListFormatOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }

        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "DeleteParagraphListFormatOnlineResponse");
        const result: model.WordsIncomingMessage< model.DeleteParagraphListFormatOnlineResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Removes a paragraph from the document node.
     * @param requestObj contains request parameters
     */
    public async deleteParagraphOnline(requestObj: model.DeleteParagraphOnlineRequest): Promise< model.WordsIncomingMessage< Buffer > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteParagraphOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/{nodePath}/paragraphs/{index}"
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling deleteParagraphOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling deleteParagraphOnline.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling deleteParagraphOnline.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling deleteParagraphOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }

        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "Buffer");
        const result: model.WordsIncomingMessage< Buffer > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Removes a paragraph tab stop from the document node.
     * @param requestObj contains request parameters
     */
    public async deleteParagraphTabStop(requestObj: model.DeleteParagraphTabStopRequest): Promise< model.WordsIncomingMessage< model.TabStopsResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteParagraphTabStop.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/paragraphs/{index}/tabstop"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling deleteParagraphTabStop.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling deleteParagraphTabStop.');
        }

        // verify required parameter 'requestObj.position' is not undefined
        if (requestObj.position === undefined) {
            throw new Error('Required parameter "requestObj.position" was undefined when calling deleteParagraphTabStop.');
        }

        // verify required parameter 'requestObj.position' is not null
        if (requestObj.position === null) {
            throw new Error('Required parameter "requestObj.position" was null when calling deleteParagraphTabStop.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling deleteParagraphTabStop.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling deleteParagraphTabStop.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "position", requestObj.position);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);

        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "TabStopsResponse");
        const result: model.WordsIncomingMessage< model.TabStopsResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Removes a Run object from the paragraph.
     * @param requestObj contains request parameters
     */
    public async deleteRun(requestObj: model.DeleteRunRequest): Promise< http.IncomingMessage > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteRun.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{paragraphPath}/runs/{index}"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "paragraphPath" + "}", (requestObj.paragraphPath !== null && requestObj.paragraphPath !== undefined) ? "/" + String(requestObj.paragraphPath) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling deleteRun.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling deleteRun.');
        }

        // verify required parameter 'requestObj.paragraphPath' is not undefined
        if (requestObj.paragraphPath === undefined) {
            throw new Error('Required parameter "requestObj.paragraphPath" was undefined when calling deleteRun.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling deleteRun.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling deleteRun.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);

        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Removes a Run object from the paragraph.
     * @param requestObj contains request parameters
     */
    public async deleteRunOnline(requestObj: model.DeleteRunOnlineRequest): Promise< model.WordsIncomingMessage< Buffer > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteRunOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/{paragraphPath}/runs/{index}"
            .replace("/{" + "paragraphPath" + "}", (requestObj.paragraphPath !== null && requestObj.paragraphPath !== undefined) ? "/" + String(requestObj.paragraphPath) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling deleteRunOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling deleteRunOnline.');
        }

        // verify required parameter 'requestObj.paragraphPath' is not undefined
        if (requestObj.paragraphPath === undefined) {
            throw new Error('Required parameter "requestObj.paragraphPath" was undefined when calling deleteRunOnline.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling deleteRunOnline.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling deleteRunOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }

        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "Buffer");
        const result: model.WordsIncomingMessage< Buffer > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Removes a section from the document.
     * @param requestObj contains request parameters
     */
    public async deleteSection(requestObj: model.DeleteSectionRequest): Promise< http.IncomingMessage > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteSection.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/sections/{sectionIndex}"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "sectionIndex" + "}", (requestObj.sectionIndex !== null && requestObj.sectionIndex !== undefined) ? "/" + String(requestObj.sectionIndex) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling deleteSection.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling deleteSection.');
        }

        // verify required parameter 'requestObj.sectionIndex' is not undefined
        if (requestObj.sectionIndex === undefined) {
            throw new Error('Required parameter "requestObj.sectionIndex" was undefined when calling deleteSection.');
        }

        // verify required parameter 'requestObj.sectionIndex' is not null
        if (requestObj.sectionIndex === null) {
            throw new Error('Required parameter "requestObj.sectionIndex" was null when calling deleteSection.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);

        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Removes a section from the document.
     * @param requestObj contains request parameters
     */
    public async deleteSectionOnline(requestObj: model.DeleteSectionOnlineRequest): Promise< model.WordsIncomingMessage< Buffer > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteSectionOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/sections/{sectionIndex}"
            .replace("/{" + "sectionIndex" + "}", (requestObj.sectionIndex !== null && requestObj.sectionIndex !== undefined) ? "/" + String(requestObj.sectionIndex) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling deleteSectionOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling deleteSectionOnline.');
        }

        // verify required parameter 'requestObj.sectionIndex' is not undefined
        if (requestObj.sectionIndex === undefined) {
            throw new Error('Required parameter "requestObj.sectionIndex" was undefined when calling deleteSectionOnline.');
        }

        // verify required parameter 'requestObj.sectionIndex' is not null
        if (requestObj.sectionIndex === null) {
            throw new Error('Required parameter "requestObj.sectionIndex" was null when calling deleteSectionOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }

        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "Buffer");
        const result: model.WordsIncomingMessage< Buffer > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Removes a table from the document node.
     * @param requestObj contains request parameters
     */
    public async deleteTable(requestObj: model.DeleteTableRequest): Promise< http.IncomingMessage > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteTable.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/tables/{index}"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling deleteTable.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling deleteTable.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling deleteTable.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling deleteTable.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);

        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Removes a cell from the table row.
     * @param requestObj contains request parameters
     */
    public async deleteTableCell(requestObj: model.DeleteTableCellRequest): Promise< http.IncomingMessage > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteTableCell.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{tableRowPath}/cells/{index}"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "tableRowPath" + "}", (requestObj.tableRowPath !== null && requestObj.tableRowPath !== undefined) ? "/" + String(requestObj.tableRowPath) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling deleteTableCell.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling deleteTableCell.');
        }

        // verify required parameter 'requestObj.tableRowPath' is not undefined
        if (requestObj.tableRowPath === undefined) {
            throw new Error('Required parameter "requestObj.tableRowPath" was undefined when calling deleteTableCell.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling deleteTableCell.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling deleteTableCell.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);

        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Removes a cell from the table row.
     * @param requestObj contains request parameters
     */
    public async deleteTableCellOnline(requestObj: model.DeleteTableCellOnlineRequest): Promise< model.WordsIncomingMessage< Buffer > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteTableCellOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/{tableRowPath}/cells/{index}"
            .replace("/{" + "tableRowPath" + "}", (requestObj.tableRowPath !== null && requestObj.tableRowPath !== undefined) ? "/" + String(requestObj.tableRowPath) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling deleteTableCellOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling deleteTableCellOnline.');
        }

        // verify required parameter 'requestObj.tableRowPath' is not undefined
        if (requestObj.tableRowPath === undefined) {
            throw new Error('Required parameter "requestObj.tableRowPath" was undefined when calling deleteTableCellOnline.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling deleteTableCellOnline.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling deleteTableCellOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }

        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "Buffer");
        const result: model.WordsIncomingMessage< Buffer > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Removes a table from the document node.
     * @param requestObj contains request parameters
     */
    public async deleteTableOnline(requestObj: model.DeleteTableOnlineRequest): Promise< model.WordsIncomingMessage< Buffer > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteTableOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/{nodePath}/tables/{index}"
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling deleteTableOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling deleteTableOnline.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling deleteTableOnline.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling deleteTableOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }

        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "Buffer");
        const result: model.WordsIncomingMessage< Buffer > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Removes a row from the table.
     * @param requestObj contains request parameters
     */
    public async deleteTableRow(requestObj: model.DeleteTableRowRequest): Promise< http.IncomingMessage > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteTableRow.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{tablePath}/rows/{index}"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "tablePath" + "}", (requestObj.tablePath !== null && requestObj.tablePath !== undefined) ? "/" + String(requestObj.tablePath) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling deleteTableRow.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling deleteTableRow.');
        }

        // verify required parameter 'requestObj.tablePath' is not undefined
        if (requestObj.tablePath === undefined) {
            throw new Error('Required parameter "requestObj.tablePath" was undefined when calling deleteTableRow.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling deleteTableRow.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling deleteTableRow.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);

        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Removes a row from the table.
     * @param requestObj contains request parameters
     */
    public async deleteTableRowOnline(requestObj: model.DeleteTableRowOnlineRequest): Promise< model.WordsIncomingMessage< Buffer > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteTableRowOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/{tablePath}/rows/{index}"
            .replace("/{" + "tablePath" + "}", (requestObj.tablePath !== null && requestObj.tablePath !== undefined) ? "/" + String(requestObj.tablePath) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling deleteTableRowOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling deleteTableRowOnline.');
        }

        // verify required parameter 'requestObj.tablePath' is not undefined
        if (requestObj.tablePath === undefined) {
            throw new Error('Required parameter "requestObj.tablePath" was undefined when calling deleteTableRowOnline.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling deleteTableRowOnline.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling deleteTableRowOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }

        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "Buffer");
        const result: model.WordsIncomingMessage< Buffer > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Removes a watermark from the document.
     * @param requestObj contains request parameters
     */
    public async deleteWatermark(requestObj: model.DeleteWatermarkRequest): Promise< model.WordsIncomingMessage< model.DocumentResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteWatermark.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/watermarks/deleteLast"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling deleteWatermark.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling deleteWatermark.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "DocumentResponse");
        const result: model.WordsIncomingMessage< model.DocumentResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Removes a watermark from the document.
     * @param requestObj contains request parameters
     */
    public async deleteWatermarkOnline(requestObj: model.DeleteWatermarkOnlineRequest): Promise< model.WordsIncomingMessage< DeleteWatermarkOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteWatermarkOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/watermarks/deleteLast"
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling deleteWatermarkOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling deleteWatermarkOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "DeleteWatermarkOnlineResponse");
        const result: model.WordsIncomingMessage< model.DeleteWatermarkOnlineResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Download file.
     * @param requestObj contains request parameters
     */
    public async downloadFile(requestObj: model.DownloadFileRequest): Promise< model.WordsIncomingMessage< Buffer > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling downloadFile.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/storage/file/{path}"
            .replace("/{" + "path" + "}", (requestObj.path !== null && requestObj.path !== undefined) ? "/" + String(requestObj.path) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.path' is not undefined
        if (requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was undefined when calling downloadFile.');
        }

        // verify required parameter 'requestObj.path' is not null
        if (requestObj.path === null) {
            throw new Error('Required parameter "requestObj.path" was null when calling downloadFile.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "versionId", requestObj.versionId);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "Buffer");
        const result: model.WordsIncomingMessage< Buffer > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Executes a Mail Merge operation.
     * @param requestObj contains request parameters
     */
    public async executeMailMerge(requestObj: model.ExecuteMailMergeRequest): Promise< model.WordsIncomingMessage< model.DocumentResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling executeMailMerge.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/MailMerge"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling executeMailMerge.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling executeMailMerge.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "withRegions", requestObj.withRegions);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "mailMergeDataFile", requestObj.mailMergeDataFile);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "cleanup", requestObj.cleanup);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "useWholeParagraphAsRegion", requestObj.useWholeParagraphAsRegion);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        if (requestObj.data !== undefined) {
            formParams.Data = ObjectSerializer.serialize(requestObj.data, "string");
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "DocumentResponse");
        const result: model.WordsIncomingMessage< model.DocumentResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Executes a Mail Merge operation online.
     * @param requestObj contains request parameters
     */
    public async executeMailMergeOnline(requestObj: model.ExecuteMailMergeOnlineRequest): Promise< model.WordsIncomingMessage< Buffer > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling executeMailMergeOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/MailMerge"
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.template' is not undefined
        if (requestObj.template === undefined) {
            throw new Error('Required parameter "requestObj.template" was undefined when calling executeMailMergeOnline.');
        }

        // verify required parameter 'requestObj.template' is not null
        if (requestObj.template === null) {
            throw new Error('Required parameter "requestObj.template" was null when calling executeMailMergeOnline.');
        }

        // verify required parameter 'requestObj.data' is not undefined
        if (requestObj.data === undefined) {
            throw new Error('Required parameter "requestObj.data" was undefined when calling executeMailMergeOnline.');
        }

        // verify required parameter 'requestObj.data' is not null
        if (requestObj.data === null) {
            throw new Error('Required parameter "requestObj.data" was null when calling executeMailMergeOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "withRegions", requestObj.withRegions);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "cleanup", requestObj.cleanup);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "documentFileName", requestObj.documentFileName);
        if (requestObj.template !== undefined) {
            formParams.Template = requestObj.template;
        }
        if (requestObj.data !== undefined) {
            formParams.Data = requestObj.data;
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "Buffer");
        const result: model.WordsIncomingMessage< Buffer > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads available fonts from the document.
     * @param requestObj contains request parameters
     */
    public async getAvailableFonts(requestObj: model.GetAvailableFontsRequest): Promise< model.WordsIncomingMessage< model.AvailableFontsResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getAvailableFonts.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/fonts/available"
            .replace("//", "/");
        const queryParameters: any = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsLocation", requestObj.fontsLocation);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "AvailableFontsResponse");
        const result: model.WordsIncomingMessage< model.AvailableFontsResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads a bookmark, specified by name, from the document.
     * @param requestObj contains request parameters
     */
    public async getBookmarkByName(requestObj: model.GetBookmarkByNameRequest): Promise< model.WordsIncomingMessage< model.BookmarkResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getBookmarkByName.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/bookmarks/{bookmarkName}"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "bookmarkName" + "}", (requestObj.bookmarkName !== null && requestObj.bookmarkName !== undefined) ? "/" + String(requestObj.bookmarkName) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling getBookmarkByName.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling getBookmarkByName.');
        }

        // verify required parameter 'requestObj.bookmarkName' is not undefined
        if (requestObj.bookmarkName === undefined) {
            throw new Error('Required parameter "requestObj.bookmarkName" was undefined when calling getBookmarkByName.');
        }

        // verify required parameter 'requestObj.bookmarkName' is not null
        if (requestObj.bookmarkName === null) {
            throw new Error('Required parameter "requestObj.bookmarkName" was null when calling getBookmarkByName.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "BookmarkResponse");
        const result: model.WordsIncomingMessage< model.BookmarkResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads a bookmark, specified by name, from the document.
     * @param requestObj contains request parameters
     */
    public async getBookmarkByNameOnline(requestObj: model.GetBookmarkByNameOnlineRequest): Promise< model.WordsIncomingMessage< model.BookmarkResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getBookmarkByNameOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/get/bookmarks/{bookmarkName}"
            .replace("/{" + "bookmarkName" + "}", (requestObj.bookmarkName !== null && requestObj.bookmarkName !== undefined) ? "/" + String(requestObj.bookmarkName) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling getBookmarkByNameOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling getBookmarkByNameOnline.');
        }

        // verify required parameter 'requestObj.bookmarkName' is not undefined
        if (requestObj.bookmarkName === undefined) {
            throw new Error('Required parameter "requestObj.bookmarkName" was undefined when calling getBookmarkByNameOnline.');
        }

        // verify required parameter 'requestObj.bookmarkName' is not null
        if (requestObj.bookmarkName === null) {
            throw new Error('Required parameter "requestObj.bookmarkName" was null when calling getBookmarkByNameOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "BookmarkResponse");
        const result: model.WordsIncomingMessage< model.BookmarkResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads bookmarks from the document.
     * @param requestObj contains request parameters
     */
    public async getBookmarks(requestObj: model.GetBookmarksRequest): Promise< model.WordsIncomingMessage< model.BookmarksResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getBookmarks.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/bookmarks"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling getBookmarks.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling getBookmarks.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "BookmarksResponse");
        const result: model.WordsIncomingMessage< model.BookmarksResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads bookmarks from the document.
     * @param requestObj contains request parameters
     */
    public async getBookmarksOnline(requestObj: model.GetBookmarksOnlineRequest): Promise< model.WordsIncomingMessage< model.BookmarksResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getBookmarksOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/get/bookmarks"
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling getBookmarksOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling getBookmarksOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "BookmarksResponse");
        const result: model.WordsIncomingMessage< model.BookmarksResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * The 'nodePath' parameter should refer to a paragraph, a cell or a row.
     * @param requestObj contains request parameters
     */
    public async getBorder(requestObj: model.GetBorderRequest): Promise< model.WordsIncomingMessage< model.BorderResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getBorder.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/borders/{borderType}"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "borderType" + "}", (requestObj.borderType !== null && requestObj.borderType !== undefined) ? "/" + String(requestObj.borderType) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling getBorder.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling getBorder.');
        }

        // verify required parameter 'requestObj.borderType' is not undefined
        if (requestObj.borderType === undefined) {
            throw new Error('Required parameter "requestObj.borderType" was undefined when calling getBorder.');
        }

        // verify required parameter 'requestObj.borderType' is not null
        if (requestObj.borderType === null) {
            throw new Error('Required parameter "requestObj.borderType" was null when calling getBorder.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "BorderResponse");
        const result: model.WordsIncomingMessage< model.BorderResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads a border from the document node.
     * @param requestObj contains request parameters
     */
    public async getBorderOnline(requestObj: model.GetBorderOnlineRequest): Promise< model.WordsIncomingMessage< model.BorderResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getBorderOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "words/online/get/{nodePath}/borders/{borderType}"
            .replace("/{" + "borderType" + "}", (requestObj.borderType !== null && requestObj.borderType !== undefined) ? "/" + String(requestObj.borderType) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling getBorderOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling getBorderOnline.');
        }

        // verify required parameter 'requestObj.borderType' is not undefined
        if (requestObj.borderType === undefined) {
            throw new Error('Required parameter "requestObj.borderType" was undefined when calling getBorderOnline.');
        }

        // verify required parameter 'requestObj.borderType' is not null
        if (requestObj.borderType === null) {
            throw new Error('Required parameter "requestObj.borderType" was null when calling getBorderOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "BorderResponse");
        const result: model.WordsIncomingMessage< model.BorderResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads borders from the document node.
     * @param requestObj contains request parameters
     */
    public async getBorders(requestObj: model.GetBordersRequest): Promise< model.WordsIncomingMessage< model.BordersResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getBorders.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/borders"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling getBorders.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling getBorders.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "BordersResponse");
        const result: model.WordsIncomingMessage< model.BordersResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads borders from the document node.
     * @param requestObj contains request parameters
     */
    public async getBordersOnline(requestObj: model.GetBordersOnlineRequest): Promise< model.WordsIncomingMessage< model.BordersResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getBordersOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/get/{nodePath}/borders"
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling getBordersOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling getBordersOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "BordersResponse");
        const result: model.WordsIncomingMessage< model.BordersResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads a comment from the document.
     * @param requestObj contains request parameters
     */
    public async getComment(requestObj: model.GetCommentRequest): Promise< model.WordsIncomingMessage< model.CommentResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getComment.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/comments/{commentIndex}"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "commentIndex" + "}", (requestObj.commentIndex !== null && requestObj.commentIndex !== undefined) ? "/" + String(requestObj.commentIndex) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling getComment.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling getComment.');
        }

        // verify required parameter 'requestObj.commentIndex' is not undefined
        if (requestObj.commentIndex === undefined) {
            throw new Error('Required parameter "requestObj.commentIndex" was undefined when calling getComment.');
        }

        // verify required parameter 'requestObj.commentIndex' is not null
        if (requestObj.commentIndex === null) {
            throw new Error('Required parameter "requestObj.commentIndex" was null when calling getComment.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "CommentResponse");
        const result: model.WordsIncomingMessage< model.CommentResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads a comment from the document.
     * @param requestObj contains request parameters
     */
    public async getCommentOnline(requestObj: model.GetCommentOnlineRequest): Promise< model.WordsIncomingMessage< model.CommentResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getCommentOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/get/comments/{commentIndex}"
            .replace("/{" + "commentIndex" + "}", (requestObj.commentIndex !== null && requestObj.commentIndex !== undefined) ? "/" + String(requestObj.commentIndex) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling getCommentOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling getCommentOnline.');
        }

        // verify required parameter 'requestObj.commentIndex' is not undefined
        if (requestObj.commentIndex === undefined) {
            throw new Error('Required parameter "requestObj.commentIndex" was undefined when calling getCommentOnline.');
        }

        // verify required parameter 'requestObj.commentIndex' is not null
        if (requestObj.commentIndex === null) {
            throw new Error('Required parameter "requestObj.commentIndex" was null when calling getCommentOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "CommentResponse");
        const result: model.WordsIncomingMessage< model.CommentResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads comments from the document.
     * @param requestObj contains request parameters
     */
    public async getComments(requestObj: model.GetCommentsRequest): Promise< model.WordsIncomingMessage< model.CommentsResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getComments.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/comments"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling getComments.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling getComments.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "CommentsResponse");
        const result: model.WordsIncomingMessage< model.CommentsResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads comments from the document.
     * @param requestObj contains request parameters
     */
    public async getCommentsOnline(requestObj: model.GetCommentsOnlineRequest): Promise< model.WordsIncomingMessage< model.CommentsResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getCommentsOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/get/comments"
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling getCommentsOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling getCommentsOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "CommentsResponse");
        const result: model.WordsIncomingMessage< model.CommentsResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads common information from the document.
     * @param requestObj contains request parameters
     */
    public async getDocument(requestObj: model.GetDocumentRequest): Promise< model.WordsIncomingMessage< model.DocumentResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDocument.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{documentName}"
            .replace("/{" + "documentName" + "}", (requestObj.documentName !== null && requestObj.documentName !== undefined) ? "/" + String(requestObj.documentName) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.documentName' is not undefined
        if (requestObj.documentName === undefined) {
            throw new Error('Required parameter "requestObj.documentName" was undefined when calling getDocument.');
        }

        // verify required parameter 'requestObj.documentName' is not null
        if (requestObj.documentName === null) {
            throw new Error('Required parameter "requestObj.documentName" was null when calling getDocument.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "DocumentResponse");
        const result: model.WordsIncomingMessage< model.DocumentResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads a DrawingObject from the document node.
     * @param requestObj contains request parameters
     */
    public async getDocumentDrawingObjectByIndex(requestObj: model.GetDocumentDrawingObjectByIndexRequest): Promise< model.WordsIncomingMessage< model.DrawingObjectResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDocumentDrawingObjectByIndex.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/drawingObjects/{index}"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling getDocumentDrawingObjectByIndex.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling getDocumentDrawingObjectByIndex.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling getDocumentDrawingObjectByIndex.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling getDocumentDrawingObjectByIndex.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "DrawingObjectResponse");
        const result: model.WordsIncomingMessage< model.DrawingObjectResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads a DrawingObject from the document node.
     * @param requestObj contains request parameters
     */
    public async getDocumentDrawingObjectByIndexOnline(requestObj: model.GetDocumentDrawingObjectByIndexOnlineRequest): Promise< model.WordsIncomingMessage< model.DrawingObjectResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDocumentDrawingObjectByIndexOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/get/{nodePath}/drawingObjects/{index}"
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling getDocumentDrawingObjectByIndexOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling getDocumentDrawingObjectByIndexOnline.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling getDocumentDrawingObjectByIndexOnline.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling getDocumentDrawingObjectByIndexOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "DrawingObjectResponse");
        const result: model.WordsIncomingMessage< model.DrawingObjectResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads image data of a DrawingObject from the document node.
     * @param requestObj contains request parameters
     */
    public async getDocumentDrawingObjectImageData(requestObj: model.GetDocumentDrawingObjectImageDataRequest): Promise< model.WordsIncomingMessage< Buffer > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDocumentDrawingObjectImageData.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/drawingObjects/{index}/imageData"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling getDocumentDrawingObjectImageData.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling getDocumentDrawingObjectImageData.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling getDocumentDrawingObjectImageData.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling getDocumentDrawingObjectImageData.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "Buffer");
        const result: model.WordsIncomingMessage< Buffer > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads image data of a DrawingObject from the document node.
     * @param requestObj contains request parameters
     */
    public async getDocumentDrawingObjectImageDataOnline(requestObj: model.GetDocumentDrawingObjectImageDataOnlineRequest): Promise< model.WordsIncomingMessage< Buffer > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDocumentDrawingObjectImageDataOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/get/{nodePath}/drawingObjects/{index}/imageData"
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling getDocumentDrawingObjectImageDataOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling getDocumentDrawingObjectImageDataOnline.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling getDocumentDrawingObjectImageDataOnline.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling getDocumentDrawingObjectImageDataOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "Buffer");
        const result: model.WordsIncomingMessage< Buffer > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads OLE data of a DrawingObject from the document node.
     * @param requestObj contains request parameters
     */
    public async getDocumentDrawingObjectOleData(requestObj: model.GetDocumentDrawingObjectOleDataRequest): Promise< model.WordsIncomingMessage< Buffer > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDocumentDrawingObjectOleData.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/drawingObjects/{index}/oleData"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling getDocumentDrawingObjectOleData.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling getDocumentDrawingObjectOleData.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling getDocumentDrawingObjectOleData.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling getDocumentDrawingObjectOleData.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "Buffer");
        const result: model.WordsIncomingMessage< Buffer > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads OLE data of a DrawingObject from the document node.
     * @param requestObj contains request parameters
     */
    public async getDocumentDrawingObjectOleDataOnline(requestObj: model.GetDocumentDrawingObjectOleDataOnlineRequest): Promise< model.WordsIncomingMessage< Buffer > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDocumentDrawingObjectOleDataOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/get/{nodePath}/drawingObjects/{index}/oleData"
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling getDocumentDrawingObjectOleDataOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling getDocumentDrawingObjectOleDataOnline.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling getDocumentDrawingObjectOleDataOnline.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling getDocumentDrawingObjectOleDataOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "Buffer");
        const result: model.WordsIncomingMessage< Buffer > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads DrawingObjects from the document node.
     * @param requestObj contains request parameters
     */
    public async getDocumentDrawingObjects(requestObj: model.GetDocumentDrawingObjectsRequest): Promise< model.WordsIncomingMessage< model.DrawingObjectsResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDocumentDrawingObjects.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/drawingObjects"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling getDocumentDrawingObjects.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling getDocumentDrawingObjects.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "DrawingObjectsResponse");
        const result: model.WordsIncomingMessage< model.DrawingObjectsResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads DrawingObjects from the document node.
     * @param requestObj contains request parameters
     */
    public async getDocumentDrawingObjectsOnline(requestObj: model.GetDocumentDrawingObjectsOnlineRequest): Promise< model.WordsIncomingMessage< model.DrawingObjectsResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDocumentDrawingObjectsOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/get/{nodePath}/drawingObjects"
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling getDocumentDrawingObjectsOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling getDocumentDrawingObjectsOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "DrawingObjectsResponse");
        const result: model.WordsIncomingMessage< model.DrawingObjectsResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads merge field names from the document.
     * @param requestObj contains request parameters
     */
    public async getDocumentFieldNames(requestObj: model.GetDocumentFieldNamesRequest): Promise< model.WordsIncomingMessage< model.FieldNamesResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDocumentFieldNames.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/mailMerge/FieldNames"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling getDocumentFieldNames.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling getDocumentFieldNames.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "useNonMergeFields", requestObj.useNonMergeFields);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "FieldNamesResponse");
        const result: model.WordsIncomingMessage< model.FieldNamesResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads merge field names from the document.
     * @param requestObj contains request parameters
     */
    public async getDocumentFieldNamesOnline(requestObj: model.GetDocumentFieldNamesOnlineRequest): Promise< model.WordsIncomingMessage< model.FieldNamesResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDocumentFieldNamesOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/get/mailMerge/FieldNames"
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling getDocumentFieldNamesOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling getDocumentFieldNamesOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "useNonMergeFields", requestObj.useNonMergeFields);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "FieldNamesResponse");
        const result: model.WordsIncomingMessage< model.FieldNamesResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads a hyperlink from the document.
     * @param requestObj contains request parameters
     */
    public async getDocumentHyperlinkByIndex(requestObj: model.GetDocumentHyperlinkByIndexRequest): Promise< model.WordsIncomingMessage< model.HyperlinkResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDocumentHyperlinkByIndex.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/hyperlinks/{hyperlinkIndex}"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "hyperlinkIndex" + "}", (requestObj.hyperlinkIndex !== null && requestObj.hyperlinkIndex !== undefined) ? "/" + String(requestObj.hyperlinkIndex) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling getDocumentHyperlinkByIndex.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling getDocumentHyperlinkByIndex.');
        }

        // verify required parameter 'requestObj.hyperlinkIndex' is not undefined
        if (requestObj.hyperlinkIndex === undefined) {
            throw new Error('Required parameter "requestObj.hyperlinkIndex" was undefined when calling getDocumentHyperlinkByIndex.');
        }

        // verify required parameter 'requestObj.hyperlinkIndex' is not null
        if (requestObj.hyperlinkIndex === null) {
            throw new Error('Required parameter "requestObj.hyperlinkIndex" was null when calling getDocumentHyperlinkByIndex.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "HyperlinkResponse");
        const result: model.WordsIncomingMessage< model.HyperlinkResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads a hyperlink from the document.
     * @param requestObj contains request parameters
     */
    public async getDocumentHyperlinkByIndexOnline(requestObj: model.GetDocumentHyperlinkByIndexOnlineRequest): Promise< model.WordsIncomingMessage< model.HyperlinkResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDocumentHyperlinkByIndexOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/get/hyperlinks/{hyperlinkIndex}"
            .replace("/{" + "hyperlinkIndex" + "}", (requestObj.hyperlinkIndex !== null && requestObj.hyperlinkIndex !== undefined) ? "/" + String(requestObj.hyperlinkIndex) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling getDocumentHyperlinkByIndexOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling getDocumentHyperlinkByIndexOnline.');
        }

        // verify required parameter 'requestObj.hyperlinkIndex' is not undefined
        if (requestObj.hyperlinkIndex === undefined) {
            throw new Error('Required parameter "requestObj.hyperlinkIndex" was undefined when calling getDocumentHyperlinkByIndexOnline.');
        }

        // verify required parameter 'requestObj.hyperlinkIndex' is not null
        if (requestObj.hyperlinkIndex === null) {
            throw new Error('Required parameter "requestObj.hyperlinkIndex" was null when calling getDocumentHyperlinkByIndexOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "HyperlinkResponse");
        const result: model.WordsIncomingMessage< model.HyperlinkResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads hyperlinks from the document.
     * @param requestObj contains request parameters
     */
    public async getDocumentHyperlinks(requestObj: model.GetDocumentHyperlinksRequest): Promise< model.WordsIncomingMessage< model.HyperlinksResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDocumentHyperlinks.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/hyperlinks"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling getDocumentHyperlinks.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling getDocumentHyperlinks.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "HyperlinksResponse");
        const result: model.WordsIncomingMessage< model.HyperlinksResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads hyperlinks from the document.
     * @param requestObj contains request parameters
     */
    public async getDocumentHyperlinksOnline(requestObj: model.GetDocumentHyperlinksOnlineRequest): Promise< model.WordsIncomingMessage< model.HyperlinksResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDocumentHyperlinksOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/get/hyperlinks"
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling getDocumentHyperlinksOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling getDocumentHyperlinksOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "HyperlinksResponse");
        const result: model.WordsIncomingMessage< model.HyperlinksResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads document properties.
     * @param requestObj contains request parameters
     */
    public async getDocumentProperties(requestObj: model.GetDocumentPropertiesRequest): Promise< model.WordsIncomingMessage< model.DocumentPropertiesResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDocumentProperties.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/documentProperties"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling getDocumentProperties.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling getDocumentProperties.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "DocumentPropertiesResponse");
        const result: model.WordsIncomingMessage< model.DocumentPropertiesResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads document properties.
     * @param requestObj contains request parameters
     */
    public async getDocumentPropertiesOnline(requestObj: model.GetDocumentPropertiesOnlineRequest): Promise< model.WordsIncomingMessage< model.DocumentPropertiesResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDocumentPropertiesOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/get/documentProperties"
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling getDocumentPropertiesOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling getDocumentPropertiesOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "DocumentPropertiesResponse");
        const result: model.WordsIncomingMessage< model.DocumentPropertiesResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads a document property.
     * @param requestObj contains request parameters
     */
    public async getDocumentProperty(requestObj: model.GetDocumentPropertyRequest): Promise< model.WordsIncomingMessage< model.DocumentPropertyResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDocumentProperty.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/documentProperties/{propertyName}"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "propertyName" + "}", (requestObj.propertyName !== null && requestObj.propertyName !== undefined) ? "/" + String(requestObj.propertyName) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling getDocumentProperty.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling getDocumentProperty.');
        }

        // verify required parameter 'requestObj.propertyName' is not undefined
        if (requestObj.propertyName === undefined) {
            throw new Error('Required parameter "requestObj.propertyName" was undefined when calling getDocumentProperty.');
        }

        // verify required parameter 'requestObj.propertyName' is not null
        if (requestObj.propertyName === null) {
            throw new Error('Required parameter "requestObj.propertyName" was null when calling getDocumentProperty.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "DocumentPropertyResponse");
        const result: model.WordsIncomingMessage< model.DocumentPropertyResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads a document property.
     * @param requestObj contains request parameters
     */
    public async getDocumentPropertyOnline(requestObj: model.GetDocumentPropertyOnlineRequest): Promise< model.WordsIncomingMessage< model.DocumentPropertyResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDocumentPropertyOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/get/documentProperties/{propertyName}"
            .replace("/{" + "propertyName" + "}", (requestObj.propertyName !== null && requestObj.propertyName !== undefined) ? "/" + String(requestObj.propertyName) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling getDocumentPropertyOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling getDocumentPropertyOnline.');
        }

        // verify required parameter 'requestObj.propertyName' is not undefined
        if (requestObj.propertyName === undefined) {
            throw new Error('Required parameter "requestObj.propertyName" was undefined when calling getDocumentPropertyOnline.');
        }

        // verify required parameter 'requestObj.propertyName' is not null
        if (requestObj.propertyName === null) {
            throw new Error('Required parameter "requestObj.propertyName" was null when calling getDocumentPropertyOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "DocumentPropertyResponse");
        const result: model.WordsIncomingMessage< model.DocumentPropertyResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads protection properties from the document.
     * @param requestObj contains request parameters
     */
    public async getDocumentProtection(requestObj: model.GetDocumentProtectionRequest): Promise< model.WordsIncomingMessage< model.ProtectionDataResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDocumentProtection.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/protection"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling getDocumentProtection.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling getDocumentProtection.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "ProtectionDataResponse");
        const result: model.WordsIncomingMessage< model.ProtectionDataResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads protection properties from the document.
     * @param requestObj contains request parameters
     */
    public async getDocumentProtectionOnline(requestObj: model.GetDocumentProtectionOnlineRequest): Promise< model.WordsIncomingMessage< model.ProtectionDataResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDocumentProtectionOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/get/protection"
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling getDocumentProtectionOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling getDocumentProtectionOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "ProtectionDataResponse");
        const result: model.WordsIncomingMessage< model.ProtectionDataResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads document statistics.
     * @param requestObj contains request parameters
     */
    public async getDocumentStatistics(requestObj: model.GetDocumentStatisticsRequest): Promise< model.WordsIncomingMessage< model.StatDataResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDocumentStatistics.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/statistics"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling getDocumentStatistics.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling getDocumentStatistics.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "includeComments", requestObj.includeComments);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "includeFootnotes", requestObj.includeFootnotes);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "includeTextInShapes", requestObj.includeTextInShapes);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "StatDataResponse");
        const result: model.WordsIncomingMessage< model.StatDataResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads document statistics.
     * @param requestObj contains request parameters
     */
    public async getDocumentStatisticsOnline(requestObj: model.GetDocumentStatisticsOnlineRequest): Promise< model.WordsIncomingMessage< model.StatDataResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDocumentStatisticsOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/get/statistics"
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling getDocumentStatisticsOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling getDocumentStatisticsOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "includeComments", requestObj.includeComments);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "includeFootnotes", requestObj.includeFootnotes);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "includeTextInShapes", requestObj.includeTextInShapes);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "StatDataResponse");
        const result: model.WordsIncomingMessage< model.StatDataResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Converts a document in cloud storage to the specified format.
     * @param requestObj contains request parameters
     */
    public async getDocumentWithFormat(requestObj: model.GetDocumentWithFormatRequest): Promise< model.WordsIncomingMessage< Buffer > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDocumentWithFormat.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling getDocumentWithFormat.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling getDocumentWithFormat.');
        }

        // verify required parameter 'requestObj.format' is not undefined
        if (requestObj.format === undefined) {
            throw new Error('Required parameter "requestObj.format" was undefined when calling getDocumentWithFormat.');
        }

        // verify required parameter 'requestObj.format' is not null
        if (requestObj.format === null) {
            throw new Error('Required parameter "requestObj.format" was null when calling getDocumentWithFormat.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "format", requestObj.format);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsLocation", requestObj.fontsLocation);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "Buffer");
        const result: model.WordsIncomingMessage< Buffer > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads a field from the document node.
     * @param requestObj contains request parameters
     */
    public async getField(requestObj: model.GetFieldRequest): Promise< model.WordsIncomingMessage< model.FieldResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getField.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/fields/{index}"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling getField.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling getField.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling getField.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling getField.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "FieldResponse");
        const result: model.WordsIncomingMessage< model.FieldResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads a field from the document node.
     * @param requestObj contains request parameters
     */
    public async getFieldOnline(requestObj: model.GetFieldOnlineRequest): Promise< model.WordsIncomingMessage< model.FieldResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getFieldOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/get/{nodePath}/fields/{index}"
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling getFieldOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling getFieldOnline.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling getFieldOnline.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling getFieldOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "FieldResponse");
        const result: model.WordsIncomingMessage< model.FieldResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads fields from the document node.
     * @param requestObj contains request parameters
     */
    public async getFields(requestObj: model.GetFieldsRequest): Promise< model.WordsIncomingMessage< model.FieldsResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getFields.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/fields"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling getFields.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling getFields.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "FieldsResponse");
        const result: model.WordsIncomingMessage< model.FieldsResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads fields from the document node.
     * @param requestObj contains request parameters
     */
    public async getFieldsOnline(requestObj: model.GetFieldsOnlineRequest): Promise< model.WordsIncomingMessage< model.FieldsResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getFieldsOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/get/{nodePath}/fields"
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling getFieldsOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling getFieldsOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "FieldsResponse");
        const result: model.WordsIncomingMessage< model.FieldsResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Get all files and folders within a folder.
     * @param requestObj contains request parameters
     */
    public async getFilesList(requestObj: model.GetFilesListRequest): Promise< model.WordsIncomingMessage< model.FilesList > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getFilesList.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/storage/folder/{path}"
            .replace("/{" + "path" + "}", (requestObj.path !== null && requestObj.path !== undefined) ? "/" + String(requestObj.path) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.path' is not undefined
        if (requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was undefined when calling getFilesList.');
        }

        // verify required parameter 'requestObj.path' is not null
        if (requestObj.path === null) {
            throw new Error('Required parameter "requestObj.path" was null when calling getFilesList.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "FilesList");
        const result: model.WordsIncomingMessage< model.FilesList > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads a footnote from the document node.
     * @param requestObj contains request parameters
     */
    public async getFootnote(requestObj: model.GetFootnoteRequest): Promise< model.WordsIncomingMessage< model.FootnoteResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getFootnote.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/footnotes/{index}"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling getFootnote.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling getFootnote.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling getFootnote.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling getFootnote.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "FootnoteResponse");
        const result: model.WordsIncomingMessage< model.FootnoteResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads a footnote from the document node.
     * @param requestObj contains request parameters
     */
    public async getFootnoteOnline(requestObj: model.GetFootnoteOnlineRequest): Promise< model.WordsIncomingMessage< model.FootnoteResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getFootnoteOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/get/{nodePath}/footnotes/{index}"
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling getFootnoteOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling getFootnoteOnline.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling getFootnoteOnline.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling getFootnoteOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "FootnoteResponse");
        const result: model.WordsIncomingMessage< model.FootnoteResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads footnotes from the document node.
     * @param requestObj contains request parameters
     */
    public async getFootnotes(requestObj: model.GetFootnotesRequest): Promise< model.WordsIncomingMessage< model.FootnotesResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getFootnotes.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/footnotes"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling getFootnotes.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling getFootnotes.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "FootnotesResponse");
        const result: model.WordsIncomingMessage< model.FootnotesResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads footnotes from the document node.
     * @param requestObj contains request parameters
     */
    public async getFootnotesOnline(requestObj: model.GetFootnotesOnlineRequest): Promise< model.WordsIncomingMessage< model.FootnotesResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getFootnotesOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/get/{nodePath}/footnotes"
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling getFootnotesOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling getFootnotesOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "FootnotesResponse");
        const result: model.WordsIncomingMessage< model.FootnotesResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads a form field from the document node.
     * @param requestObj contains request parameters
     */
    public async getFormField(requestObj: model.GetFormFieldRequest): Promise< model.WordsIncomingMessage< model.FormFieldResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getFormField.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/formfields/{index}"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling getFormField.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling getFormField.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling getFormField.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling getFormField.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "FormFieldResponse");
        const result: model.WordsIncomingMessage< model.FormFieldResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads a form field from the document node.
     * @param requestObj contains request parameters
     */
    public async getFormFieldOnline(requestObj: model.GetFormFieldOnlineRequest): Promise< model.WordsIncomingMessage< model.FormFieldResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getFormFieldOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/get/{nodePath}/formfields/{index}"
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling getFormFieldOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling getFormFieldOnline.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling getFormFieldOnline.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling getFormFieldOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "FormFieldResponse");
        const result: model.WordsIncomingMessage< model.FormFieldResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads form fields from the document node.
     * @param requestObj contains request parameters
     */
    public async getFormFields(requestObj: model.GetFormFieldsRequest): Promise< model.WordsIncomingMessage< model.FormFieldsResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getFormFields.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/formfields"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling getFormFields.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling getFormFields.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "FormFieldsResponse");
        const result: model.WordsIncomingMessage< model.FormFieldsResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads form fields from the document node.
     * @param requestObj contains request parameters
     */
    public async getFormFieldsOnline(requestObj: model.GetFormFieldsOnlineRequest): Promise< model.WordsIncomingMessage< model.FormFieldsResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getFormFieldsOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/get/{nodePath}/formfields"
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling getFormFieldsOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling getFormFieldsOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "FormFieldsResponse");
        const result: model.WordsIncomingMessage< model.FormFieldsResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads a HeaderFooter object from the document.
     * @param requestObj contains request parameters
     */
    public async getHeaderFooter(requestObj: model.GetHeaderFooterRequest): Promise< model.WordsIncomingMessage< model.HeaderFooterResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getHeaderFooter.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/headersfooters/{headerFooterIndex}"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "headerFooterIndex" + "}", (requestObj.headerFooterIndex !== null && requestObj.headerFooterIndex !== undefined) ? "/" + String(requestObj.headerFooterIndex) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling getHeaderFooter.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling getHeaderFooter.');
        }

        // verify required parameter 'requestObj.headerFooterIndex' is not undefined
        if (requestObj.headerFooterIndex === undefined) {
            throw new Error('Required parameter "requestObj.headerFooterIndex" was undefined when calling getHeaderFooter.');
        }

        // verify required parameter 'requestObj.headerFooterIndex' is not null
        if (requestObj.headerFooterIndex === null) {
            throw new Error('Required parameter "requestObj.headerFooterIndex" was null when calling getHeaderFooter.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "filterByType", requestObj.filterByType);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "HeaderFooterResponse");
        const result: model.WordsIncomingMessage< model.HeaderFooterResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads a HeaderFooter object from the document section.
     * @param requestObj contains request parameters
     */
    public async getHeaderFooterOfSection(requestObj: model.GetHeaderFooterOfSectionRequest): Promise< model.WordsIncomingMessage< model.HeaderFooterResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getHeaderFooterOfSection.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/sections/{sectionIndex}/headersfooters/{headerFooterIndex}"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "headerFooterIndex" + "}", (requestObj.headerFooterIndex !== null && requestObj.headerFooterIndex !== undefined) ? "/" + String(requestObj.headerFooterIndex) : "")
            .replace("/{" + "sectionIndex" + "}", (requestObj.sectionIndex !== null && requestObj.sectionIndex !== undefined) ? "/" + String(requestObj.sectionIndex) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling getHeaderFooterOfSection.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling getHeaderFooterOfSection.');
        }

        // verify required parameter 'requestObj.headerFooterIndex' is not undefined
        if (requestObj.headerFooterIndex === undefined) {
            throw new Error('Required parameter "requestObj.headerFooterIndex" was undefined when calling getHeaderFooterOfSection.');
        }

        // verify required parameter 'requestObj.headerFooterIndex' is not null
        if (requestObj.headerFooterIndex === null) {
            throw new Error('Required parameter "requestObj.headerFooterIndex" was null when calling getHeaderFooterOfSection.');
        }

        // verify required parameter 'requestObj.sectionIndex' is not undefined
        if (requestObj.sectionIndex === undefined) {
            throw new Error('Required parameter "requestObj.sectionIndex" was undefined when calling getHeaderFooterOfSection.');
        }

        // verify required parameter 'requestObj.sectionIndex' is not null
        if (requestObj.sectionIndex === null) {
            throw new Error('Required parameter "requestObj.sectionIndex" was null when calling getHeaderFooterOfSection.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "filterByType", requestObj.filterByType);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "HeaderFooterResponse");
        const result: model.WordsIncomingMessage< model.HeaderFooterResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads a HeaderFooter object from the document section.
     * @param requestObj contains request parameters
     */
    public async getHeaderFooterOfSectionOnline(requestObj: model.GetHeaderFooterOfSectionOnlineRequest): Promise< model.WordsIncomingMessage< model.HeaderFooterResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getHeaderFooterOfSectionOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/get/sections/{sectionIndex}/headersfooters/{headerFooterIndex}"
            .replace("/{" + "headerFooterIndex" + "}", (requestObj.headerFooterIndex !== null && requestObj.headerFooterIndex !== undefined) ? "/" + String(requestObj.headerFooterIndex) : "")
            .replace("/{" + "sectionIndex" + "}", (requestObj.sectionIndex !== null && requestObj.sectionIndex !== undefined) ? "/" + String(requestObj.sectionIndex) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling getHeaderFooterOfSectionOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling getHeaderFooterOfSectionOnline.');
        }

        // verify required parameter 'requestObj.headerFooterIndex' is not undefined
        if (requestObj.headerFooterIndex === undefined) {
            throw new Error('Required parameter "requestObj.headerFooterIndex" was undefined when calling getHeaderFooterOfSectionOnline.');
        }

        // verify required parameter 'requestObj.headerFooterIndex' is not null
        if (requestObj.headerFooterIndex === null) {
            throw new Error('Required parameter "requestObj.headerFooterIndex" was null when calling getHeaderFooterOfSectionOnline.');
        }

        // verify required parameter 'requestObj.sectionIndex' is not undefined
        if (requestObj.sectionIndex === undefined) {
            throw new Error('Required parameter "requestObj.sectionIndex" was undefined when calling getHeaderFooterOfSectionOnline.');
        }

        // verify required parameter 'requestObj.sectionIndex' is not null
        if (requestObj.sectionIndex === null) {
            throw new Error('Required parameter "requestObj.sectionIndex" was null when calling getHeaderFooterOfSectionOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "filterByType", requestObj.filterByType);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "HeaderFooterResponse");
        const result: model.WordsIncomingMessage< model.HeaderFooterResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads a HeaderFooter object from the document.
     * @param requestObj contains request parameters
     */
    public async getHeaderFooterOnline(requestObj: model.GetHeaderFooterOnlineRequest): Promise< model.WordsIncomingMessage< model.HeaderFooterResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getHeaderFooterOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/get/headersfooters/{headerFooterIndex}"
            .replace("/{" + "headerFooterIndex" + "}", (requestObj.headerFooterIndex !== null && requestObj.headerFooterIndex !== undefined) ? "/" + String(requestObj.headerFooterIndex) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling getHeaderFooterOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling getHeaderFooterOnline.');
        }

        // verify required parameter 'requestObj.headerFooterIndex' is not undefined
        if (requestObj.headerFooterIndex === undefined) {
            throw new Error('Required parameter "requestObj.headerFooterIndex" was undefined when calling getHeaderFooterOnline.');
        }

        // verify required parameter 'requestObj.headerFooterIndex' is not null
        if (requestObj.headerFooterIndex === null) {
            throw new Error('Required parameter "requestObj.headerFooterIndex" was null when calling getHeaderFooterOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "filterByType", requestObj.filterByType);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "HeaderFooterResponse");
        const result: model.WordsIncomingMessage< model.HeaderFooterResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads HeaderFooter objects from the document section.
     * @param requestObj contains request parameters
     */
    public async getHeaderFooters(requestObj: model.GetHeaderFootersRequest): Promise< model.WordsIncomingMessage< model.HeaderFootersResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getHeaderFooters.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{sectionPath}/headersfooters"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "sectionPath" + "}", (requestObj.sectionPath !== null && requestObj.sectionPath !== undefined) ? "/" + String(requestObj.sectionPath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling getHeaderFooters.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling getHeaderFooters.');
        }

        // verify required parameter 'requestObj.sectionPath' is not undefined
        if (requestObj.sectionPath === undefined) {
            throw new Error('Required parameter "requestObj.sectionPath" was undefined when calling getHeaderFooters.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "filterByType", requestObj.filterByType);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "HeaderFootersResponse");
        const result: model.WordsIncomingMessage< model.HeaderFootersResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads HeaderFooter objects from the document section.
     * @param requestObj contains request parameters
     */
    public async getHeaderFootersOnline(requestObj: model.GetHeaderFootersOnlineRequest): Promise< model.WordsIncomingMessage< model.HeaderFootersResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getHeaderFootersOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/get/{sectionPath}/headersfooters"
            .replace("/{" + "sectionPath" + "}", (requestObj.sectionPath !== null && requestObj.sectionPath !== undefined) ? "/" + String(requestObj.sectionPath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling getHeaderFootersOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling getHeaderFootersOnline.');
        }

        // verify required parameter 'requestObj.sectionPath' is not undefined
        if (requestObj.sectionPath === undefined) {
            throw new Error('Required parameter "requestObj.sectionPath" was undefined when calling getHeaderFootersOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "filterByType", requestObj.filterByType);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "HeaderFootersResponse");
        const result: model.WordsIncomingMessage< model.HeaderFootersResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads a list from the document.
     * @param requestObj contains request parameters
     */
    public async getList(requestObj: model.GetListRequest): Promise< model.WordsIncomingMessage< model.ListResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getList.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/lists/{listId}"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "listId" + "}", (requestObj.listId !== null && requestObj.listId !== undefined) ? "/" + String(requestObj.listId) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling getList.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling getList.');
        }

        // verify required parameter 'requestObj.listId' is not undefined
        if (requestObj.listId === undefined) {
            throw new Error('Required parameter "requestObj.listId" was undefined when calling getList.');
        }

        // verify required parameter 'requestObj.listId' is not null
        if (requestObj.listId === null) {
            throw new Error('Required parameter "requestObj.listId" was null when calling getList.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "ListResponse");
        const result: model.WordsIncomingMessage< model.ListResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads a list from the document.
     * @param requestObj contains request parameters
     */
    public async getListOnline(requestObj: model.GetListOnlineRequest): Promise< model.WordsIncomingMessage< model.ListResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getListOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/get/lists/{listId}"
            .replace("/{" + "listId" + "}", (requestObj.listId !== null && requestObj.listId !== undefined) ? "/" + String(requestObj.listId) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling getListOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling getListOnline.');
        }

        // verify required parameter 'requestObj.listId' is not undefined
        if (requestObj.listId === undefined) {
            throw new Error('Required parameter "requestObj.listId" was undefined when calling getListOnline.');
        }

        // verify required parameter 'requestObj.listId' is not null
        if (requestObj.listId === null) {
            throw new Error('Required parameter "requestObj.listId" was null when calling getListOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "ListResponse");
        const result: model.WordsIncomingMessage< model.ListResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads lists from the document.
     * @param requestObj contains request parameters
     */
    public async getLists(requestObj: model.GetListsRequest): Promise< model.WordsIncomingMessage< model.ListsResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getLists.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/lists"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling getLists.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling getLists.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "ListsResponse");
        const result: model.WordsIncomingMessage< model.ListsResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads lists from the document.
     * @param requestObj contains request parameters
     */
    public async getListsOnline(requestObj: model.GetListsOnlineRequest): Promise< model.WordsIncomingMessage< model.ListsResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getListsOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/get/lists"
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling getListsOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling getListsOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "ListsResponse");
        const result: model.WordsIncomingMessage< model.ListsResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads an OfficeMath object from the document node.
     * @param requestObj contains request parameters
     */
    public async getOfficeMathObject(requestObj: model.GetOfficeMathObjectRequest): Promise< model.WordsIncomingMessage< model.OfficeMathObjectResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getOfficeMathObject.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/OfficeMathObjects/{index}"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling getOfficeMathObject.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling getOfficeMathObject.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling getOfficeMathObject.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling getOfficeMathObject.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "OfficeMathObjectResponse");
        const result: model.WordsIncomingMessage< model.OfficeMathObjectResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads an OfficeMath object from the document node.
     * @param requestObj contains request parameters
     */
    public async getOfficeMathObjectOnline(requestObj: model.GetOfficeMathObjectOnlineRequest): Promise< model.WordsIncomingMessage< model.OfficeMathObjectResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getOfficeMathObjectOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/get/{nodePath}/OfficeMathObjects/{index}"
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling getOfficeMathObjectOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling getOfficeMathObjectOnline.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling getOfficeMathObjectOnline.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling getOfficeMathObjectOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "OfficeMathObjectResponse");
        const result: model.WordsIncomingMessage< model.OfficeMathObjectResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads OfficeMath objects from the document node.
     * @param requestObj contains request parameters
     */
    public async getOfficeMathObjects(requestObj: model.GetOfficeMathObjectsRequest): Promise< model.WordsIncomingMessage< model.OfficeMathObjectsResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getOfficeMathObjects.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/OfficeMathObjects"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling getOfficeMathObjects.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling getOfficeMathObjects.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "OfficeMathObjectsResponse");
        const result: model.WordsIncomingMessage< model.OfficeMathObjectsResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads OfficeMath objects from the document node.
     * @param requestObj contains request parameters
     */
    public async getOfficeMathObjectsOnline(requestObj: model.GetOfficeMathObjectsOnlineRequest): Promise< model.WordsIncomingMessage< model.OfficeMathObjectsResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getOfficeMathObjectsOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/get/{nodePath}/OfficeMathObjects"
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling getOfficeMathObjectsOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling getOfficeMathObjectsOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "OfficeMathObjectsResponse");
        const result: model.WordsIncomingMessage< model.OfficeMathObjectsResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads a paragraph from the document node.
     * @param requestObj contains request parameters
     */
    public async getParagraph(requestObj: model.GetParagraphRequest): Promise< model.WordsIncomingMessage< model.ParagraphResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getParagraph.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/paragraphs/{index}"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling getParagraph.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling getParagraph.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling getParagraph.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling getParagraph.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "ParagraphResponse");
        const result: model.WordsIncomingMessage< model.ParagraphResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads the formatting properties of a paragraph from the document node.
     * @param requestObj contains request parameters
     */
    public async getParagraphFormat(requestObj: model.GetParagraphFormatRequest): Promise< model.WordsIncomingMessage< model.ParagraphFormatResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getParagraphFormat.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/paragraphs/{index}/format"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling getParagraphFormat.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling getParagraphFormat.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling getParagraphFormat.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling getParagraphFormat.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "ParagraphFormatResponse");
        const result: model.WordsIncomingMessage< model.ParagraphFormatResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads the formatting properties of a paragraph from the document node.
     * @param requestObj contains request parameters
     */
    public async getParagraphFormatOnline(requestObj: model.GetParagraphFormatOnlineRequest): Promise< model.WordsIncomingMessage< model.ParagraphFormatResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getParagraphFormatOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "words//online/get/{nodePath}/paragraphs/{index}/format"
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling getParagraphFormatOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling getParagraphFormatOnline.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling getParagraphFormatOnline.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling getParagraphFormatOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "ParagraphFormatResponse");
        const result: model.WordsIncomingMessage< model.ParagraphFormatResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads the formatting properties of a paragraph list from the document node.
     * @param requestObj contains request parameters
     */
    public async getParagraphListFormat(requestObj: model.GetParagraphListFormatRequest): Promise< model.WordsIncomingMessage< model.ParagraphListFormatResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getParagraphListFormat.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/paragraphs/{index}/listFormat"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling getParagraphListFormat.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling getParagraphListFormat.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling getParagraphListFormat.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling getParagraphListFormat.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "ParagraphListFormatResponse");
        const result: model.WordsIncomingMessage< model.ParagraphListFormatResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads the formatting properties of a paragraph list from the document node.
     * @param requestObj contains request parameters
     */
    public async getParagraphListFormatOnline(requestObj: model.GetParagraphListFormatOnlineRequest): Promise< model.WordsIncomingMessage< model.ParagraphListFormatResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getParagraphListFormatOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "words//online/get/{nodePath}/paragraphs/{index}/listFormat"
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling getParagraphListFormatOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling getParagraphListFormatOnline.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling getParagraphListFormatOnline.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling getParagraphListFormatOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "ParagraphListFormatResponse");
        const result: model.WordsIncomingMessage< model.ParagraphListFormatResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads a paragraph from the document node.
     * @param requestObj contains request parameters
     */
    public async getParagraphOnline(requestObj: model.GetParagraphOnlineRequest): Promise< model.WordsIncomingMessage< model.ParagraphResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getParagraphOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "words//online/get/{nodePath}/paragraphs/{index}"
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling getParagraphOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling getParagraphOnline.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling getParagraphOnline.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling getParagraphOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "ParagraphResponse");
        const result: model.WordsIncomingMessage< model.ParagraphResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads paragraphs from the document node.
     * @param requestObj contains request parameters
     */
    public async getParagraphs(requestObj: model.GetParagraphsRequest): Promise< model.WordsIncomingMessage< model.ParagraphLinkCollectionResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getParagraphs.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/paragraphs"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling getParagraphs.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling getParagraphs.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "ParagraphLinkCollectionResponse");
        const result: model.WordsIncomingMessage< model.ParagraphLinkCollectionResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads paragraphs from the document node.
     * @param requestObj contains request parameters
     */
    public async getParagraphsOnline(requestObj: model.GetParagraphsOnlineRequest): Promise< model.WordsIncomingMessage< model.ParagraphLinkCollectionResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getParagraphsOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "words//online/get/{nodePath}/paragraphs"
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling getParagraphsOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling getParagraphsOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "ParagraphLinkCollectionResponse");
        const result: model.WordsIncomingMessage< model.ParagraphLinkCollectionResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads paragraph tab stops from the document node.
     * @param requestObj contains request parameters
     */
    public async getParagraphTabStops(requestObj: model.GetParagraphTabStopsRequest): Promise< model.WordsIncomingMessage< model.TabStopsResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getParagraphTabStops.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/paragraphs/{index}/tabstops"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling getParagraphTabStops.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling getParagraphTabStops.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling getParagraphTabStops.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling getParagraphTabStops.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "TabStopsResponse");
        const result: model.WordsIncomingMessage< model.TabStopsResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads paragraph tab stops from the document node.
     * @param requestObj contains request parameters
     */
    public async getParagraphTabStopsOnline(requestObj: model.GetParagraphTabStopsOnlineRequest): Promise< model.WordsIncomingMessage< model.TabStopsResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getParagraphTabStopsOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "words//online/get/{nodePath}/paragraphs/{index}/tabstops"
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling getParagraphTabStopsOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling getParagraphTabStopsOnline.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling getParagraphTabStopsOnline.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling getParagraphTabStopsOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "TabStopsResponse");
        const result: model.WordsIncomingMessage< model.TabStopsResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads range text from the document.
     * @param requestObj contains request parameters
     */
    public async getRangeText(requestObj: model.GetRangeTextRequest): Promise< model.WordsIncomingMessage< model.RangeTextResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getRangeText.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/range/{rangeStartIdentifier}/{rangeEndIdentifier}"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "rangeStartIdentifier" + "}", (requestObj.rangeStartIdentifier !== null && requestObj.rangeStartIdentifier !== undefined) ? "/" + String(requestObj.rangeStartIdentifier) : "")
            .replace("/{" + "rangeEndIdentifier" + "}", (requestObj.rangeEndIdentifier !== null && requestObj.rangeEndIdentifier !== undefined) ? "/" + String(requestObj.rangeEndIdentifier) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling getRangeText.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling getRangeText.');
        }

        // verify required parameter 'requestObj.rangeStartIdentifier' is not undefined
        if (requestObj.rangeStartIdentifier === undefined) {
            throw new Error('Required parameter "requestObj.rangeStartIdentifier" was undefined when calling getRangeText.');
        }

        // verify required parameter 'requestObj.rangeStartIdentifier' is not null
        if (requestObj.rangeStartIdentifier === null) {
            throw new Error('Required parameter "requestObj.rangeStartIdentifier" was null when calling getRangeText.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "RangeTextResponse");
        const result: model.WordsIncomingMessage< model.RangeTextResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads range text from the document.
     * @param requestObj contains request parameters
     */
    public async getRangeTextOnline(requestObj: model.GetRangeTextOnlineRequest): Promise< model.WordsIncomingMessage< model.RangeTextResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getRangeTextOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/get/range/{rangeStartIdentifier}/{rangeEndIdentifier}"
            .replace("/{" + "rangeStartIdentifier" + "}", (requestObj.rangeStartIdentifier !== null && requestObj.rangeStartIdentifier !== undefined) ? "/" + String(requestObj.rangeStartIdentifier) : "")
            .replace("/{" + "rangeEndIdentifier" + "}", (requestObj.rangeEndIdentifier !== null && requestObj.rangeEndIdentifier !== undefined) ? "/" + String(requestObj.rangeEndIdentifier) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling getRangeTextOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling getRangeTextOnline.');
        }

        // verify required parameter 'requestObj.rangeStartIdentifier' is not undefined
        if (requestObj.rangeStartIdentifier === undefined) {
            throw new Error('Required parameter "requestObj.rangeStartIdentifier" was undefined when calling getRangeTextOnline.');
        }

        // verify required parameter 'requestObj.rangeStartIdentifier' is not null
        if (requestObj.rangeStartIdentifier === null) {
            throw new Error('Required parameter "requestObj.rangeStartIdentifier" was null when calling getRangeTextOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "RangeTextResponse");
        const result: model.WordsIncomingMessage< model.RangeTextResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads a Run object from the paragraph.
     * @param requestObj contains request parameters
     */
    public async getRun(requestObj: model.GetRunRequest): Promise< model.WordsIncomingMessage< model.RunResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getRun.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{paragraphPath}/runs/{index}"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "paragraphPath" + "}", (requestObj.paragraphPath !== null && requestObj.paragraphPath !== undefined) ? "/" + String(requestObj.paragraphPath) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling getRun.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling getRun.');
        }

        // verify required parameter 'requestObj.paragraphPath' is not undefined
        if (requestObj.paragraphPath === undefined) {
            throw new Error('Required parameter "requestObj.paragraphPath" was undefined when calling getRun.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling getRun.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling getRun.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "RunResponse");
        const result: model.WordsIncomingMessage< model.RunResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads the font properties of a Run object from the paragraph.
     * @param requestObj contains request parameters
     */
    public async getRunFont(requestObj: model.GetRunFontRequest): Promise< model.WordsIncomingMessage< model.FontResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getRunFont.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{paragraphPath}/runs/{index}/font"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "paragraphPath" + "}", (requestObj.paragraphPath !== null && requestObj.paragraphPath !== undefined) ? "/" + String(requestObj.paragraphPath) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling getRunFont.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling getRunFont.');
        }

        // verify required parameter 'requestObj.paragraphPath' is not undefined
        if (requestObj.paragraphPath === undefined) {
            throw new Error('Required parameter "requestObj.paragraphPath" was undefined when calling getRunFont.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling getRunFont.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling getRunFont.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "FontResponse");
        const result: model.WordsIncomingMessage< model.FontResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads the font properties of a Run object from the paragraph.
     * @param requestObj contains request parameters
     */
    public async getRunFontOnline(requestObj: model.GetRunFontOnlineRequest): Promise< model.WordsIncomingMessage< model.FontResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getRunFontOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/get/{paragraphPath}/runs/{index}/font"
            .replace("/{" + "paragraphPath" + "}", (requestObj.paragraphPath !== null && requestObj.paragraphPath !== undefined) ? "/" + String(requestObj.paragraphPath) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling getRunFontOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling getRunFontOnline.');
        }

        // verify required parameter 'requestObj.paragraphPath' is not undefined
        if (requestObj.paragraphPath === undefined) {
            throw new Error('Required parameter "requestObj.paragraphPath" was undefined when calling getRunFontOnline.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling getRunFontOnline.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling getRunFontOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "FontResponse");
        const result: model.WordsIncomingMessage< model.FontResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads a Run object from the paragraph.
     * @param requestObj contains request parameters
     */
    public async getRunOnline(requestObj: model.GetRunOnlineRequest): Promise< model.WordsIncomingMessage< model.RunResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getRunOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/get/{paragraphPath}/runs/{index}"
            .replace("/{" + "paragraphPath" + "}", (requestObj.paragraphPath !== null && requestObj.paragraphPath !== undefined) ? "/" + String(requestObj.paragraphPath) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling getRunOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling getRunOnline.');
        }

        // verify required parameter 'requestObj.paragraphPath' is not undefined
        if (requestObj.paragraphPath === undefined) {
            throw new Error('Required parameter "requestObj.paragraphPath" was undefined when calling getRunOnline.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling getRunOnline.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling getRunOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "RunResponse");
        const result: model.WordsIncomingMessage< model.RunResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads Run objects from the paragraph.
     * @param requestObj contains request parameters
     */
    public async getRuns(requestObj: model.GetRunsRequest): Promise< model.WordsIncomingMessage< model.RunsResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getRuns.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{paragraphPath}/runs"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "paragraphPath" + "}", (requestObj.paragraphPath !== null && requestObj.paragraphPath !== undefined) ? "/" + String(requestObj.paragraphPath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling getRuns.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling getRuns.');
        }

        // verify required parameter 'requestObj.paragraphPath' is not undefined
        if (requestObj.paragraphPath === undefined) {
            throw new Error('Required parameter "requestObj.paragraphPath" was undefined when calling getRuns.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "RunsResponse");
        const result: model.WordsIncomingMessage< model.RunsResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads Run objects from the paragraph.
     * @param requestObj contains request parameters
     */
    public async getRunsOnline(requestObj: model.GetRunsOnlineRequest): Promise< model.WordsIncomingMessage< model.RunsResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getRunsOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/get/{paragraphPath}/runs"
            .replace("/{" + "paragraphPath" + "}", (requestObj.paragraphPath !== null && requestObj.paragraphPath !== undefined) ? "/" + String(requestObj.paragraphPath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling getRunsOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling getRunsOnline.');
        }

        // verify required parameter 'requestObj.paragraphPath' is not undefined
        if (requestObj.paragraphPath === undefined) {
            throw new Error('Required parameter "requestObj.paragraphPath" was undefined when calling getRunsOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "RunsResponse");
        const result: model.WordsIncomingMessage< model.RunsResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads a section from the document.
     * @param requestObj contains request parameters
     */
    public async getSection(requestObj: model.GetSectionRequest): Promise< model.WordsIncomingMessage< model.SectionResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getSection.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/sections/{sectionIndex}"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "sectionIndex" + "}", (requestObj.sectionIndex !== null && requestObj.sectionIndex !== undefined) ? "/" + String(requestObj.sectionIndex) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling getSection.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling getSection.');
        }

        // verify required parameter 'requestObj.sectionIndex' is not undefined
        if (requestObj.sectionIndex === undefined) {
            throw new Error('Required parameter "requestObj.sectionIndex" was undefined when calling getSection.');
        }

        // verify required parameter 'requestObj.sectionIndex' is not null
        if (requestObj.sectionIndex === null) {
            throw new Error('Required parameter "requestObj.sectionIndex" was null when calling getSection.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "SectionResponse");
        const result: model.WordsIncomingMessage< model.SectionResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads a section from the document.
     * @param requestObj contains request parameters
     */
    public async getSectionOnline(requestObj: model.GetSectionOnlineRequest): Promise< model.WordsIncomingMessage< model.SectionResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getSectionOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/get/sections/{sectionIndex}"
            .replace("/{" + "sectionIndex" + "}", (requestObj.sectionIndex !== null && requestObj.sectionIndex !== undefined) ? "/" + String(requestObj.sectionIndex) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling getSectionOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling getSectionOnline.');
        }

        // verify required parameter 'requestObj.sectionIndex' is not undefined
        if (requestObj.sectionIndex === undefined) {
            throw new Error('Required parameter "requestObj.sectionIndex" was undefined when calling getSectionOnline.');
        }

        // verify required parameter 'requestObj.sectionIndex' is not null
        if (requestObj.sectionIndex === null) {
            throw new Error('Required parameter "requestObj.sectionIndex" was null when calling getSectionOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "SectionResponse");
        const result: model.WordsIncomingMessage< model.SectionResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads the page setup of a section from the document.
     * @param requestObj contains request parameters
     */
    public async getSectionPageSetup(requestObj: model.GetSectionPageSetupRequest): Promise< model.WordsIncomingMessage< model.SectionPageSetupResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getSectionPageSetup.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/sections/{sectionIndex}/pageSetup"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "sectionIndex" + "}", (requestObj.sectionIndex !== null && requestObj.sectionIndex !== undefined) ? "/" + String(requestObj.sectionIndex) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling getSectionPageSetup.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling getSectionPageSetup.');
        }

        // verify required parameter 'requestObj.sectionIndex' is not undefined
        if (requestObj.sectionIndex === undefined) {
            throw new Error('Required parameter "requestObj.sectionIndex" was undefined when calling getSectionPageSetup.');
        }

        // verify required parameter 'requestObj.sectionIndex' is not null
        if (requestObj.sectionIndex === null) {
            throw new Error('Required parameter "requestObj.sectionIndex" was null when calling getSectionPageSetup.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "SectionPageSetupResponse");
        const result: model.WordsIncomingMessage< model.SectionPageSetupResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads the page setup of a section from the document.
     * @param requestObj contains request parameters
     */
    public async getSectionPageSetupOnline(requestObj: model.GetSectionPageSetupOnlineRequest): Promise< model.WordsIncomingMessage< model.SectionPageSetupResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getSectionPageSetupOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/get/sections/{sectionIndex}/pageSetup"
            .replace("/{" + "sectionIndex" + "}", (requestObj.sectionIndex !== null && requestObj.sectionIndex !== undefined) ? "/" + String(requestObj.sectionIndex) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling getSectionPageSetupOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling getSectionPageSetupOnline.');
        }

        // verify required parameter 'requestObj.sectionIndex' is not undefined
        if (requestObj.sectionIndex === undefined) {
            throw new Error('Required parameter "requestObj.sectionIndex" was undefined when calling getSectionPageSetupOnline.');
        }

        // verify required parameter 'requestObj.sectionIndex' is not null
        if (requestObj.sectionIndex === null) {
            throw new Error('Required parameter "requestObj.sectionIndex" was null when calling getSectionPageSetupOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "SectionPageSetupResponse");
        const result: model.WordsIncomingMessage< model.SectionPageSetupResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads sections from the document.
     * @param requestObj contains request parameters
     */
    public async getSections(requestObj: model.GetSectionsRequest): Promise< model.WordsIncomingMessage< model.SectionLinkCollectionResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getSections.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/sections"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling getSections.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling getSections.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "SectionLinkCollectionResponse");
        const result: model.WordsIncomingMessage< model.SectionLinkCollectionResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads sections from the document.
     * @param requestObj contains request parameters
     */
    public async getSectionsOnline(requestObj: model.GetSectionsOnlineRequest): Promise< model.WordsIncomingMessage< model.SectionLinkCollectionResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getSectionsOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/get/sections"
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling getSectionsOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling getSectionsOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "SectionLinkCollectionResponse");
        const result: model.WordsIncomingMessage< model.SectionLinkCollectionResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads a style from the document.
     * @param requestObj contains request parameters
     */
    public async getStyle(requestObj: model.GetStyleRequest): Promise< model.WordsIncomingMessage< model.StyleResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getStyle.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/styles/{styleName}"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "styleName" + "}", (requestObj.styleName !== null && requestObj.styleName !== undefined) ? "/" + String(requestObj.styleName) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling getStyle.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling getStyle.');
        }

        // verify required parameter 'requestObj.styleName' is not undefined
        if (requestObj.styleName === undefined) {
            throw new Error('Required parameter "requestObj.styleName" was undefined when calling getStyle.');
        }

        // verify required parameter 'requestObj.styleName' is not null
        if (requestObj.styleName === null) {
            throw new Error('Required parameter "requestObj.styleName" was null when calling getStyle.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "StyleResponse");
        const result: model.WordsIncomingMessage< model.StyleResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads a style from the document node.
     * @param requestObj contains request parameters
     */
    public async getStyleFromDocumentElement(requestObj: model.GetStyleFromDocumentElementRequest): Promise< model.WordsIncomingMessage< model.StyleResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getStyleFromDocumentElement.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{styledNodePath}/style"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "styledNodePath" + "}", (requestObj.styledNodePath !== null && requestObj.styledNodePath !== undefined) ? "/" + String(requestObj.styledNodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling getStyleFromDocumentElement.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling getStyleFromDocumentElement.');
        }

        // verify required parameter 'requestObj.styledNodePath' is not undefined
        if (requestObj.styledNodePath === undefined) {
            throw new Error('Required parameter "requestObj.styledNodePath" was undefined when calling getStyleFromDocumentElement.');
        }

        // verify required parameter 'requestObj.styledNodePath' is not null
        if (requestObj.styledNodePath === null) {
            throw new Error('Required parameter "requestObj.styledNodePath" was null when calling getStyleFromDocumentElement.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "StyleResponse");
        const result: model.WordsIncomingMessage< model.StyleResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads a style from the document node.
     * @param requestObj contains request parameters
     */
    public async getStyleFromDocumentElementOnline(requestObj: model.GetStyleFromDocumentElementOnlineRequest): Promise< model.WordsIncomingMessage< model.StyleResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getStyleFromDocumentElementOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/get/{styledNodePath}/style"
            .replace("/{" + "styledNodePath" + "}", (requestObj.styledNodePath !== null && requestObj.styledNodePath !== undefined) ? "/" + String(requestObj.styledNodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling getStyleFromDocumentElementOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling getStyleFromDocumentElementOnline.');
        }

        // verify required parameter 'requestObj.styledNodePath' is not undefined
        if (requestObj.styledNodePath === undefined) {
            throw new Error('Required parameter "requestObj.styledNodePath" was undefined when calling getStyleFromDocumentElementOnline.');
        }

        // verify required parameter 'requestObj.styledNodePath' is not null
        if (requestObj.styledNodePath === null) {
            throw new Error('Required parameter "requestObj.styledNodePath" was null when calling getStyleFromDocumentElementOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "StyleResponse");
        const result: model.WordsIncomingMessage< model.StyleResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads a style from the document.
     * @param requestObj contains request parameters
     */
    public async getStyleOnline(requestObj: model.GetStyleOnlineRequest): Promise< model.WordsIncomingMessage< model.StyleResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getStyleOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/get/styles/{styleName}"
            .replace("/{" + "styleName" + "}", (requestObj.styleName !== null && requestObj.styleName !== undefined) ? "/" + String(requestObj.styleName) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling getStyleOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling getStyleOnline.');
        }

        // verify required parameter 'requestObj.styleName' is not undefined
        if (requestObj.styleName === undefined) {
            throw new Error('Required parameter "requestObj.styleName" was undefined when calling getStyleOnline.');
        }

        // verify required parameter 'requestObj.styleName' is not null
        if (requestObj.styleName === null) {
            throw new Error('Required parameter "requestObj.styleName" was null when calling getStyleOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "StyleResponse");
        const result: model.WordsIncomingMessage< model.StyleResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads styles from the document.
     * @param requestObj contains request parameters
     */
    public async getStyles(requestObj: model.GetStylesRequest): Promise< model.WordsIncomingMessage< model.StylesResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getStyles.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/styles"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling getStyles.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling getStyles.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "StylesResponse");
        const result: model.WordsIncomingMessage< model.StylesResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads styles from the document.
     * @param requestObj contains request parameters
     */
    public async getStylesOnline(requestObj: model.GetStylesOnlineRequest): Promise< model.WordsIncomingMessage< model.StylesResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getStylesOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/get/styles"
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling getStylesOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling getStylesOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "StylesResponse");
        const result: model.WordsIncomingMessage< model.StylesResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads a table from the document node.
     * @param requestObj contains request parameters
     */
    public async getTable(requestObj: model.GetTableRequest): Promise< model.WordsIncomingMessage< model.TableResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getTable.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/tables/{index}"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling getTable.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling getTable.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling getTable.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling getTable.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "TableResponse");
        const result: model.WordsIncomingMessage< model.TableResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads a cell from the table row.
     * @param requestObj contains request parameters
     */
    public async getTableCell(requestObj: model.GetTableCellRequest): Promise< model.WordsIncomingMessage< model.TableCellResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getTableCell.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{tableRowPath}/cells/{index}"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "tableRowPath" + "}", (requestObj.tableRowPath !== null && requestObj.tableRowPath !== undefined) ? "/" + String(requestObj.tableRowPath) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling getTableCell.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling getTableCell.');
        }

        // verify required parameter 'requestObj.tableRowPath' is not undefined
        if (requestObj.tableRowPath === undefined) {
            throw new Error('Required parameter "requestObj.tableRowPath" was undefined when calling getTableCell.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling getTableCell.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling getTableCell.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "TableCellResponse");
        const result: model.WordsIncomingMessage< model.TableCellResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads the formatting properties of a table cell.
     * @param requestObj contains request parameters
     */
    public async getTableCellFormat(requestObj: model.GetTableCellFormatRequest): Promise< model.WordsIncomingMessage< model.TableCellFormatResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getTableCellFormat.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{tableRowPath}/cells/{index}/cellformat"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "tableRowPath" + "}", (requestObj.tableRowPath !== null && requestObj.tableRowPath !== undefined) ? "/" + String(requestObj.tableRowPath) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling getTableCellFormat.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling getTableCellFormat.');
        }

        // verify required parameter 'requestObj.tableRowPath' is not undefined
        if (requestObj.tableRowPath === undefined) {
            throw new Error('Required parameter "requestObj.tableRowPath" was undefined when calling getTableCellFormat.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling getTableCellFormat.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling getTableCellFormat.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "TableCellFormatResponse");
        const result: model.WordsIncomingMessage< model.TableCellFormatResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads the formatting properties of a table cell.
     * @param requestObj contains request parameters
     */
    public async getTableCellFormatOnline(requestObj: model.GetTableCellFormatOnlineRequest): Promise< model.WordsIncomingMessage< model.TableCellFormatResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getTableCellFormatOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/get/{tableRowPath}/cells/{index}/cellformat"
            .replace("/{" + "tableRowPath" + "}", (requestObj.tableRowPath !== null && requestObj.tableRowPath !== undefined) ? "/" + String(requestObj.tableRowPath) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling getTableCellFormatOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling getTableCellFormatOnline.');
        }

        // verify required parameter 'requestObj.tableRowPath' is not undefined
        if (requestObj.tableRowPath === undefined) {
            throw new Error('Required parameter "requestObj.tableRowPath" was undefined when calling getTableCellFormatOnline.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling getTableCellFormatOnline.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling getTableCellFormatOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "TableCellFormatResponse");
        const result: model.WordsIncomingMessage< model.TableCellFormatResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads a cell from the table row.
     * @param requestObj contains request parameters
     */
    public async getTableCellOnline(requestObj: model.GetTableCellOnlineRequest): Promise< model.WordsIncomingMessage< model.TableCellResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getTableCellOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/get/{tableRowPath}/cells/{index}"
            .replace("/{" + "tableRowPath" + "}", (requestObj.tableRowPath !== null && requestObj.tableRowPath !== undefined) ? "/" + String(requestObj.tableRowPath) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling getTableCellOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling getTableCellOnline.');
        }

        // verify required parameter 'requestObj.tableRowPath' is not undefined
        if (requestObj.tableRowPath === undefined) {
            throw new Error('Required parameter "requestObj.tableRowPath" was undefined when calling getTableCellOnline.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling getTableCellOnline.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling getTableCellOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "TableCellResponse");
        const result: model.WordsIncomingMessage< model.TableCellResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads a table from the document node.
     * @param requestObj contains request parameters
     */
    public async getTableOnline(requestObj: model.GetTableOnlineRequest): Promise< model.WordsIncomingMessage< model.TableResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getTableOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/get/{nodePath}/tables/{index}"
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling getTableOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling getTableOnline.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling getTableOnline.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling getTableOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "TableResponse");
        const result: model.WordsIncomingMessage< model.TableResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads properties of a table from the document node.
     * @param requestObj contains request parameters
     */
    public async getTableProperties(requestObj: model.GetTablePropertiesRequest): Promise< model.WordsIncomingMessage< model.TablePropertiesResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getTableProperties.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/tables/{index}/properties"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling getTableProperties.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling getTableProperties.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling getTableProperties.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling getTableProperties.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "TablePropertiesResponse");
        const result: model.WordsIncomingMessage< model.TablePropertiesResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads properties of a table from the document node.
     * @param requestObj contains request parameters
     */
    public async getTablePropertiesOnline(requestObj: model.GetTablePropertiesOnlineRequest): Promise< model.WordsIncomingMessage< model.TablePropertiesResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getTablePropertiesOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/get/{nodePath}/tables/{index}/properties"
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling getTablePropertiesOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling getTablePropertiesOnline.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling getTablePropertiesOnline.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling getTablePropertiesOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "TablePropertiesResponse");
        const result: model.WordsIncomingMessage< model.TablePropertiesResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads a row from the table.
     * @param requestObj contains request parameters
     */
    public async getTableRow(requestObj: model.GetTableRowRequest): Promise< model.WordsIncomingMessage< model.TableRowResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getTableRow.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{tablePath}/rows/{index}"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "tablePath" + "}", (requestObj.tablePath !== null && requestObj.tablePath !== undefined) ? "/" + String(requestObj.tablePath) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling getTableRow.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling getTableRow.');
        }

        // verify required parameter 'requestObj.tablePath' is not undefined
        if (requestObj.tablePath === undefined) {
            throw new Error('Required parameter "requestObj.tablePath" was undefined when calling getTableRow.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling getTableRow.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling getTableRow.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "TableRowResponse");
        const result: model.WordsIncomingMessage< model.TableRowResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads the formatting properties of a table row.
     * @param requestObj contains request parameters
     */
    public async getTableRowFormat(requestObj: model.GetTableRowFormatRequest): Promise< model.WordsIncomingMessage< model.TableRowFormatResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getTableRowFormat.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{tablePath}/rows/{index}/rowformat"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "tablePath" + "}", (requestObj.tablePath !== null && requestObj.tablePath !== undefined) ? "/" + String(requestObj.tablePath) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling getTableRowFormat.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling getTableRowFormat.');
        }

        // verify required parameter 'requestObj.tablePath' is not undefined
        if (requestObj.tablePath === undefined) {
            throw new Error('Required parameter "requestObj.tablePath" was undefined when calling getTableRowFormat.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling getTableRowFormat.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling getTableRowFormat.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "TableRowFormatResponse");
        const result: model.WordsIncomingMessage< model.TableRowFormatResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads the formatting properties of a table row.
     * @param requestObj contains request parameters
     */
    public async getTableRowFormatOnline(requestObj: model.GetTableRowFormatOnlineRequest): Promise< model.WordsIncomingMessage< model.TableRowFormatResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getTableRowFormatOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/get/{tablePath}/rows/{index}/rowformat"
            .replace("/{" + "tablePath" + "}", (requestObj.tablePath !== null && requestObj.tablePath !== undefined) ? "/" + String(requestObj.tablePath) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling getTableRowFormatOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling getTableRowFormatOnline.');
        }

        // verify required parameter 'requestObj.tablePath' is not undefined
        if (requestObj.tablePath === undefined) {
            throw new Error('Required parameter "requestObj.tablePath" was undefined when calling getTableRowFormatOnline.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling getTableRowFormatOnline.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling getTableRowFormatOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "TableRowFormatResponse");
        const result: model.WordsIncomingMessage< model.TableRowFormatResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads a row from the table.
     * @param requestObj contains request parameters
     */
    public async getTableRowOnline(requestObj: model.GetTableRowOnlineRequest): Promise< model.WordsIncomingMessage< model.TableRowResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getTableRowOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/get/{tablePath}/rows/{index}"
            .replace("/{" + "tablePath" + "}", (requestObj.tablePath !== null && requestObj.tablePath !== undefined) ? "/" + String(requestObj.tablePath) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling getTableRowOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling getTableRowOnline.');
        }

        // verify required parameter 'requestObj.tablePath' is not undefined
        if (requestObj.tablePath === undefined) {
            throw new Error('Required parameter "requestObj.tablePath" was undefined when calling getTableRowOnline.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling getTableRowOnline.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling getTableRowOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "TableRowResponse");
        const result: model.WordsIncomingMessage< model.TableRowResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads tables from the document node.
     * @param requestObj contains request parameters
     */
    public async getTables(requestObj: model.GetTablesRequest): Promise< model.WordsIncomingMessage< model.TableLinkCollectionResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getTables.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/tables"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling getTables.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling getTables.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "TableLinkCollectionResponse");
        const result: model.WordsIncomingMessage< model.TableLinkCollectionResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads tables from the document node.
     * @param requestObj contains request parameters
     */
    public async getTablesOnline(requestObj: model.GetTablesOnlineRequest): Promise< model.WordsIncomingMessage< model.TableLinkCollectionResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getTablesOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/get/{nodePath}/tables"
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling getTablesOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling getTablesOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "TableLinkCollectionResponse");
        const result: model.WordsIncomingMessage< model.TableLinkCollectionResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Inserts a new comment to the document.
     * @param requestObj contains request parameters
     */
    public async insertComment(requestObj: model.InsertCommentRequest): Promise< model.WordsIncomingMessage< model.CommentResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling insertComment.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/comments"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling insertComment.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling insertComment.');
        }

        // verify required parameter 'requestObj.comment' is not undefined
        if (requestObj.comment === undefined) {
            throw new Error('Required parameter "requestObj.comment" was undefined when calling insertComment.');
        }

        // verify required parameter 'requestObj.comment' is not null
        if (requestObj.comment === null) {
            throw new Error('Required parameter "requestObj.comment" was null when calling insertComment.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.comment, requestObj.comment.constructor.name === "Object" ? "importedCommentInsert.CommentInsert" : requestObj.comment.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "CommentResponse");
        const result: model.WordsIncomingMessage< model.CommentResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Inserts a new comment to the document.
     * @param requestObj contains request parameters
     */
    public async insertCommentOnline(requestObj: model.InsertCommentOnlineRequest): Promise< model.WordsIncomingMessage< InsertCommentOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling insertCommentOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/comments"
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling insertCommentOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling insertCommentOnline.');
        }

        // verify required parameter 'requestObj.comment' is not undefined
        if (requestObj.comment === undefined) {
            throw new Error('Required parameter "requestObj.comment" was undefined when calling insertCommentOnline.');
        }

        // verify required parameter 'requestObj.comment' is not null
        if (requestObj.comment === null) {
            throw new Error('Required parameter "requestObj.comment" was null when calling insertCommentOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }
        if (requestObj.comment !== undefined) {
            formParams.Comment = JSON.stringify(requestObj.comment);
        }

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "InsertCommentOnlineResponse");
        const result: model.WordsIncomingMessage< model.InsertCommentOnlineResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Inserts a new DrawingObject to the document node.
     * @param requestObj contains request parameters
     */
    public async insertDrawingObject(requestObj: model.InsertDrawingObjectRequest): Promise< model.WordsIncomingMessage< model.DrawingObjectResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling insertDrawingObject.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/drawingObjects"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling insertDrawingObject.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling insertDrawingObject.');
        }

        // verify required parameter 'requestObj.drawingObject' is not undefined
        if (requestObj.drawingObject === undefined) {
            throw new Error('Required parameter "requestObj.drawingObject" was undefined when calling insertDrawingObject.');
        }

        // verify required parameter 'requestObj.drawingObject' is not null
        if (requestObj.drawingObject === null) {
            throw new Error('Required parameter "requestObj.drawingObject" was null when calling insertDrawingObject.');
        }

        // verify required parameter 'requestObj.imageFile' is not undefined
        if (requestObj.imageFile === undefined) {
            throw new Error('Required parameter "requestObj.imageFile" was undefined when calling insertDrawingObject.');
        }

        // verify required parameter 'requestObj.imageFile' is not null
        if (requestObj.imageFile === null) {
            throw new Error('Required parameter "requestObj.imageFile" was null when calling insertDrawingObject.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
        if (requestObj.drawingObject !== undefined) {
            formParams.DrawingObject = JSON.stringify(requestObj.drawingObject);
        }
        if (requestObj.imageFile !== undefined) {
            formParams.ImageFile = requestObj.imageFile;
        }

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "DrawingObjectResponse");
        const result: model.WordsIncomingMessage< model.DrawingObjectResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Inserts a new DrawingObject to the document node.
     * @param requestObj contains request parameters
     */
    public async insertDrawingObjectOnline(requestObj: model.InsertDrawingObjectOnlineRequest): Promise< model.WordsIncomingMessage< InsertDrawingObjectOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling insertDrawingObjectOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/{nodePath}/drawingObjects"
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling insertDrawingObjectOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling insertDrawingObjectOnline.');
        }

        // verify required parameter 'requestObj.drawingObject' is not undefined
        if (requestObj.drawingObject === undefined) {
            throw new Error('Required parameter "requestObj.drawingObject" was undefined when calling insertDrawingObjectOnline.');
        }

        // verify required parameter 'requestObj.drawingObject' is not null
        if (requestObj.drawingObject === null) {
            throw new Error('Required parameter "requestObj.drawingObject" was null when calling insertDrawingObjectOnline.');
        }

        // verify required parameter 'requestObj.imageFile' is not undefined
        if (requestObj.imageFile === undefined) {
            throw new Error('Required parameter "requestObj.imageFile" was undefined when calling insertDrawingObjectOnline.');
        }

        // verify required parameter 'requestObj.imageFile' is not null
        if (requestObj.imageFile === null) {
            throw new Error('Required parameter "requestObj.imageFile" was null when calling insertDrawingObjectOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }
        if (requestObj.drawingObject !== undefined) {
            formParams.DrawingObject = JSON.stringify(requestObj.drawingObject);
        }
        if (requestObj.imageFile !== undefined) {
            formParams.ImageFile = requestObj.imageFile;
        }

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "InsertDrawingObjectOnlineResponse");
        const result: model.WordsIncomingMessage< model.InsertDrawingObjectOnlineResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Inserts a new field to the document node.
     * @param requestObj contains request parameters
     */
    public async insertField(requestObj: model.InsertFieldRequest): Promise< model.WordsIncomingMessage< model.FieldResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling insertField.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/fields"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling insertField.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling insertField.');
        }

        // verify required parameter 'requestObj.field' is not undefined
        if (requestObj.field === undefined) {
            throw new Error('Required parameter "requestObj.field" was undefined when calling insertField.');
        }

        // verify required parameter 'requestObj.field' is not null
        if (requestObj.field === null) {
            throw new Error('Required parameter "requestObj.field" was null when calling insertField.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "insertBeforeNode", requestObj.insertBeforeNode);

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.field, requestObj.field.constructor.name === "Object" ? "importedFieldInsert.FieldInsert" : requestObj.field.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "FieldResponse");
        const result: model.WordsIncomingMessage< model.FieldResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Inserts a new field to the document node.
     * @param requestObj contains request parameters
     */
    public async insertFieldOnline(requestObj: model.InsertFieldOnlineRequest): Promise< model.WordsIncomingMessage< InsertFieldOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling insertFieldOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/{nodePath}/fields"
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling insertFieldOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling insertFieldOnline.');
        }

        // verify required parameter 'requestObj.field' is not undefined
        if (requestObj.field === undefined) {
            throw new Error('Required parameter "requestObj.field" was undefined when calling insertFieldOnline.');
        }

        // verify required parameter 'requestObj.field' is not null
        if (requestObj.field === null) {
            throw new Error('Required parameter "requestObj.field" was null when calling insertFieldOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "insertBeforeNode", requestObj.insertBeforeNode);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }
        if (requestObj.field !== undefined) {
            formParams.Field = JSON.stringify(requestObj.field);
        }

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "InsertFieldOnlineResponse");
        const result: model.WordsIncomingMessage< model.InsertFieldOnlineResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Inserts a new footnote to the document node.
     * @param requestObj contains request parameters
     */
    public async insertFootnote(requestObj: model.InsertFootnoteRequest): Promise< model.WordsIncomingMessage< model.FootnoteResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling insertFootnote.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/footnotes"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling insertFootnote.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling insertFootnote.');
        }

        // verify required parameter 'requestObj.footnoteDto' is not undefined
        if (requestObj.footnoteDto === undefined) {
            throw new Error('Required parameter "requestObj.footnoteDto" was undefined when calling insertFootnote.');
        }

        // verify required parameter 'requestObj.footnoteDto' is not null
        if (requestObj.footnoteDto === null) {
            throw new Error('Required parameter "requestObj.footnoteDto" was null when calling insertFootnote.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.footnoteDto, requestObj.footnoteDto.constructor.name === "Object" ? "importedFootnoteInsert.FootnoteInsert" : requestObj.footnoteDto.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "FootnoteResponse");
        const result: model.WordsIncomingMessage< model.FootnoteResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Inserts a new footnote to the document node.
     * @param requestObj contains request parameters
     */
    public async insertFootnoteOnline(requestObj: model.InsertFootnoteOnlineRequest): Promise< model.WordsIncomingMessage< InsertFootnoteOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling insertFootnoteOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/{nodePath}/footnotes"
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling insertFootnoteOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling insertFootnoteOnline.');
        }

        // verify required parameter 'requestObj.footnoteDto' is not undefined
        if (requestObj.footnoteDto === undefined) {
            throw new Error('Required parameter "requestObj.footnoteDto" was undefined when calling insertFootnoteOnline.');
        }

        // verify required parameter 'requestObj.footnoteDto' is not null
        if (requestObj.footnoteDto === null) {
            throw new Error('Required parameter "requestObj.footnoteDto" was null when calling insertFootnoteOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }
        if (requestObj.footnoteDto !== undefined) {
            formParams.FootnoteDto = JSON.stringify(requestObj.footnoteDto);
        }

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "InsertFootnoteOnlineResponse");
        const result: model.WordsIncomingMessage< model.InsertFootnoteOnlineResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Inserts a new form field to the document node.
     * @param requestObj contains request parameters
     */
    public async insertFormField(requestObj: model.InsertFormFieldRequest): Promise< model.WordsIncomingMessage< model.FormFieldResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling insertFormField.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/formfields"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling insertFormField.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling insertFormField.');
        }

        // verify required parameter 'requestObj.formField' is not undefined
        if (requestObj.formField === undefined) {
            throw new Error('Required parameter "requestObj.formField" was undefined when calling insertFormField.');
        }

        // verify required parameter 'requestObj.formField' is not null
        if (requestObj.formField === null) {
            throw new Error('Required parameter "requestObj.formField" was null when calling insertFormField.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "insertBeforeNode", requestObj.insertBeforeNode);

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.formField, requestObj.formField.constructor.name === "Object" ? "importedFormField.FormField" : requestObj.formField.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "FormFieldResponse");
        const result: model.WordsIncomingMessage< model.FormFieldResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Inserts a new form field to the document node.
     * @param requestObj contains request parameters
     */
    public async insertFormFieldOnline(requestObj: model.InsertFormFieldOnlineRequest): Promise< model.WordsIncomingMessage< InsertFormFieldOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling insertFormFieldOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/{nodePath}/formfields"
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling insertFormFieldOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling insertFormFieldOnline.');
        }

        // verify required parameter 'requestObj.formField' is not undefined
        if (requestObj.formField === undefined) {
            throw new Error('Required parameter "requestObj.formField" was undefined when calling insertFormFieldOnline.');
        }

        // verify required parameter 'requestObj.formField' is not null
        if (requestObj.formField === null) {
            throw new Error('Required parameter "requestObj.formField" was null when calling insertFormFieldOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "insertBeforeNode", requestObj.insertBeforeNode);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }
        if (requestObj.formField !== undefined) {
            formParams.FormField = JSON.stringify(requestObj.formField);
        }

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "InsertFormFieldOnlineResponse");
        const result: model.WordsIncomingMessage< model.InsertFormFieldOnlineResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Inserts a new HeaderFooter object to the document section.
     * @param requestObj contains request parameters
     */
    public async insertHeaderFooter(requestObj: model.InsertHeaderFooterRequest): Promise< model.WordsIncomingMessage< model.HeaderFooterResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling insertHeaderFooter.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{sectionPath}/headersfooters"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "sectionPath" + "}", (requestObj.sectionPath !== null && requestObj.sectionPath !== undefined) ? "/" + String(requestObj.sectionPath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling insertHeaderFooter.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling insertHeaderFooter.');
        }

        // verify required parameter 'requestObj.sectionPath' is not undefined
        if (requestObj.sectionPath === undefined) {
            throw new Error('Required parameter "requestObj.sectionPath" was undefined when calling insertHeaderFooter.');
        }

        // verify required parameter 'requestObj.headerFooterType' is not undefined
        if (requestObj.headerFooterType === undefined) {
            throw new Error('Required parameter "requestObj.headerFooterType" was undefined when calling insertHeaderFooter.');
        }

        // verify required parameter 'requestObj.headerFooterType' is not null
        if (requestObj.headerFooterType === null) {
            throw new Error('Required parameter "requestObj.headerFooterType" was null when calling insertHeaderFooter.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.headerFooterType, requestObj.headerFooterType.constructor.name === "Object" ? "string" : requestObj.headerFooterType.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "HeaderFooterResponse");
        const result: model.WordsIncomingMessage< model.HeaderFooterResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Inserts a new HeaderFooter object to the document section.
     * @param requestObj contains request parameters
     */
    public async insertHeaderFooterOnline(requestObj: model.InsertHeaderFooterOnlineRequest): Promise< model.WordsIncomingMessage< InsertHeaderFooterOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling insertHeaderFooterOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/{sectionPath}/headersfooters"
            .replace("/{" + "sectionPath" + "}", (requestObj.sectionPath !== null && requestObj.sectionPath !== undefined) ? "/" + String(requestObj.sectionPath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling insertHeaderFooterOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling insertHeaderFooterOnline.');
        }

        // verify required parameter 'requestObj.sectionPath' is not undefined
        if (requestObj.sectionPath === undefined) {
            throw new Error('Required parameter "requestObj.sectionPath" was undefined when calling insertHeaderFooterOnline.');
        }

        // verify required parameter 'requestObj.headerFooterType' is not undefined
        if (requestObj.headerFooterType === undefined) {
            throw new Error('Required parameter "requestObj.headerFooterType" was undefined when calling insertHeaderFooterOnline.');
        }

        // verify required parameter 'requestObj.headerFooterType' is not null
        if (requestObj.headerFooterType === null) {
            throw new Error('Required parameter "requestObj.headerFooterType" was null when calling insertHeaderFooterOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }
        if (requestObj.headerFooterType !== undefined) {
            formParams.HeaderFooterType = ObjectSerializer.serialize(requestObj.headerFooterType, "string");
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "InsertHeaderFooterOnlineResponse");
        const result: model.WordsIncomingMessage< model.InsertHeaderFooterOnlineResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Inserts a new list to the document.
     * @param requestObj contains request parameters
     */
    public async insertList(requestObj: model.InsertListRequest): Promise< model.WordsIncomingMessage< model.ListResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling insertList.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/lists"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling insertList.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling insertList.');
        }

        // verify required parameter 'requestObj.listInsert' is not undefined
        if (requestObj.listInsert === undefined) {
            throw new Error('Required parameter "requestObj.listInsert" was undefined when calling insertList.');
        }

        // verify required parameter 'requestObj.listInsert' is not null
        if (requestObj.listInsert === null) {
            throw new Error('Required parameter "requestObj.listInsert" was null when calling insertList.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.listInsert, requestObj.listInsert.constructor.name === "Object" ? "importedListInsert.ListInsert" : requestObj.listInsert.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "ListResponse");
        const result: model.WordsIncomingMessage< model.ListResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Inserts a new list to the document.
     * @param requestObj contains request parameters
     */
    public async insertListOnline(requestObj: model.InsertListOnlineRequest): Promise< model.WordsIncomingMessage< InsertListOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling insertListOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/lists"
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling insertListOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling insertListOnline.');
        }

        // verify required parameter 'requestObj.listInsert' is not undefined
        if (requestObj.listInsert === undefined) {
            throw new Error('Required parameter "requestObj.listInsert" was undefined when calling insertListOnline.');
        }

        // verify required parameter 'requestObj.listInsert' is not null
        if (requestObj.listInsert === null) {
            throw new Error('Required parameter "requestObj.listInsert" was null when calling insertListOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }
        if (requestObj.listInsert !== undefined) {
            formParams.ListInsert = JSON.stringify(requestObj.listInsert);
        }

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "InsertListOnlineResponse");
        const result: model.WordsIncomingMessage< model.InsertListOnlineResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Inserts a new or updates an existing paragraph tab stop in the document node.
     * @param requestObj contains request parameters
     */
    public async insertOrUpdateParagraphTabStop(requestObj: model.InsertOrUpdateParagraphTabStopRequest): Promise< model.WordsIncomingMessage< model.TabStopsResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling insertOrUpdateParagraphTabStop.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/paragraphs/{index}/tabstops"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling insertOrUpdateParagraphTabStop.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling insertOrUpdateParagraphTabStop.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling insertOrUpdateParagraphTabStop.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling insertOrUpdateParagraphTabStop.');
        }

        // verify required parameter 'requestObj.tabStopInsertDto' is not undefined
        if (requestObj.tabStopInsertDto === undefined) {
            throw new Error('Required parameter "requestObj.tabStopInsertDto" was undefined when calling insertOrUpdateParagraphTabStop.');
        }

        // verify required parameter 'requestObj.tabStopInsertDto' is not null
        if (requestObj.tabStopInsertDto === null) {
            throw new Error('Required parameter "requestObj.tabStopInsertDto" was null when calling insertOrUpdateParagraphTabStop.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.tabStopInsertDto, requestObj.tabStopInsertDto.constructor.name === "Object" ? "importedTabStopInsert.TabStopInsert" : requestObj.tabStopInsertDto.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "TabStopsResponse");
        const result: model.WordsIncomingMessage< model.TabStopsResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Inserts a new or updates an existing paragraph tab stop in the document node.
     * @param requestObj contains request parameters
     */
    public async insertOrUpdateParagraphTabStopOnline(requestObj: model.InsertOrUpdateParagraphTabStopOnlineRequest): Promise< model.WordsIncomingMessage< InsertOrUpdateParagraphTabStopOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling insertOrUpdateParagraphTabStopOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "words//online/{nodePath}/paragraphs/{index}/tabstops"
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling insertOrUpdateParagraphTabStopOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling insertOrUpdateParagraphTabStopOnline.');
        }

        // verify required parameter 'requestObj.tabStopInsertDto' is not undefined
        if (requestObj.tabStopInsertDto === undefined) {
            throw new Error('Required parameter "requestObj.tabStopInsertDto" was undefined when calling insertOrUpdateParagraphTabStopOnline.');
        }

        // verify required parameter 'requestObj.tabStopInsertDto' is not null
        if (requestObj.tabStopInsertDto === null) {
            throw new Error('Required parameter "requestObj.tabStopInsertDto" was null when calling insertOrUpdateParagraphTabStopOnline.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling insertOrUpdateParagraphTabStopOnline.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling insertOrUpdateParagraphTabStopOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }
        if (requestObj.tabStopInsertDto !== undefined) {
            formParams.TabStopInsertDto = JSON.stringify(requestObj.tabStopInsertDto);
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "InsertOrUpdateParagraphTabStopOnlineResponse");
        const result: model.WordsIncomingMessage< model.InsertOrUpdateParagraphTabStopOnlineResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Inserts page numbers to the document.
     * @param requestObj contains request parameters
     */
    public async insertPageNumbers(requestObj: model.InsertPageNumbersRequest): Promise< model.WordsIncomingMessage< model.DocumentResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling insertPageNumbers.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/PageNumbers"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling insertPageNumbers.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling insertPageNumbers.');
        }

        // verify required parameter 'requestObj.pageNumber' is not undefined
        if (requestObj.pageNumber === undefined) {
            throw new Error('Required parameter "requestObj.pageNumber" was undefined when calling insertPageNumbers.');
        }

        // verify required parameter 'requestObj.pageNumber' is not null
        if (requestObj.pageNumber === null) {
            throw new Error('Required parameter "requestObj.pageNumber" was null when calling insertPageNumbers.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.pageNumber, requestObj.pageNumber.constructor.name === "Object" ? "importedPageNumber.PageNumber" : requestObj.pageNumber.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "DocumentResponse");
        const result: model.WordsIncomingMessage< model.DocumentResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Inserts page numbers to the document.
     * @param requestObj contains request parameters
     */
    public async insertPageNumbersOnline(requestObj: model.InsertPageNumbersOnlineRequest): Promise< model.WordsIncomingMessage< InsertPageNumbersOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling insertPageNumbersOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/PageNumbers"
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling insertPageNumbersOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling insertPageNumbersOnline.');
        }

        // verify required parameter 'requestObj.pageNumber' is not undefined
        if (requestObj.pageNumber === undefined) {
            throw new Error('Required parameter "requestObj.pageNumber" was undefined when calling insertPageNumbersOnline.');
        }

        // verify required parameter 'requestObj.pageNumber' is not null
        if (requestObj.pageNumber === null) {
            throw new Error('Required parameter "requestObj.pageNumber" was null when calling insertPageNumbersOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }
        if (requestObj.pageNumber !== undefined) {
            formParams.PageNumber = JSON.stringify(requestObj.pageNumber);
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "InsertPageNumbersOnlineResponse");
        const result: model.WordsIncomingMessage< model.InsertPageNumbersOnlineResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Inserts a new paragraph to the document node.
     * @param requestObj contains request parameters
     */
    public async insertParagraph(requestObj: model.InsertParagraphRequest): Promise< model.WordsIncomingMessage< model.ParagraphResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling insertParagraph.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/paragraphs"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling insertParagraph.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling insertParagraph.');
        }

        // verify required parameter 'requestObj.paragraph' is not undefined
        if (requestObj.paragraph === undefined) {
            throw new Error('Required parameter "requestObj.paragraph" was undefined when calling insertParagraph.');
        }

        // verify required parameter 'requestObj.paragraph' is not null
        if (requestObj.paragraph === null) {
            throw new Error('Required parameter "requestObj.paragraph" was null when calling insertParagraph.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "insertBeforeNode", requestObj.insertBeforeNode);

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.paragraph, requestObj.paragraph.constructor.name === "Object" ? "importedParagraphInsert.ParagraphInsert" : requestObj.paragraph.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "ParagraphResponse");
        const result: model.WordsIncomingMessage< model.ParagraphResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Inserts a new paragraph to the document node.
     * @param requestObj contains request parameters
     */
    public async insertParagraphOnline(requestObj: model.InsertParagraphOnlineRequest): Promise< model.WordsIncomingMessage< InsertParagraphOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling insertParagraphOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "words//online/{nodePath}/paragraphs"
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling insertParagraphOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling insertParagraphOnline.');
        }

        // verify required parameter 'requestObj.paragraph' is not undefined
        if (requestObj.paragraph === undefined) {
            throw new Error('Required parameter "requestObj.paragraph" was undefined when calling insertParagraphOnline.');
        }

        // verify required parameter 'requestObj.paragraph' is not null
        if (requestObj.paragraph === null) {
            throw new Error('Required parameter "requestObj.paragraph" was null when calling insertParagraphOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "insertBeforeNode", requestObj.insertBeforeNode);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }
        if (requestObj.paragraph !== undefined) {
            formParams.Paragraph = JSON.stringify(requestObj.paragraph);
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "InsertParagraphOnlineResponse");
        const result: model.WordsIncomingMessage< model.InsertParagraphOnlineResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Inserts a new Run object to the paragraph.
     * @param requestObj contains request parameters
     */
    public async insertRun(requestObj: model.InsertRunRequest): Promise< model.WordsIncomingMessage< model.RunResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling insertRun.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{paragraphPath}/runs"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "paragraphPath" + "}", (requestObj.paragraphPath !== null && requestObj.paragraphPath !== undefined) ? "/" + String(requestObj.paragraphPath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling insertRun.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling insertRun.');
        }

        // verify required parameter 'requestObj.paragraphPath' is not undefined
        if (requestObj.paragraphPath === undefined) {
            throw new Error('Required parameter "requestObj.paragraphPath" was undefined when calling insertRun.');
        }

        // verify required parameter 'requestObj.run' is not undefined
        if (requestObj.run === undefined) {
            throw new Error('Required parameter "requestObj.run" was undefined when calling insertRun.');
        }

        // verify required parameter 'requestObj.run' is not null
        if (requestObj.run === null) {
            throw new Error('Required parameter "requestObj.run" was null when calling insertRun.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "insertBeforeNode", requestObj.insertBeforeNode);

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.run, requestObj.run.constructor.name === "Object" ? "importedRunInsert.RunInsert" : requestObj.run.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "RunResponse");
        const result: model.WordsIncomingMessage< model.RunResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Inserts a new Run object to the paragraph.
     * @param requestObj contains request parameters
     */
    public async insertRunOnline(requestObj: model.InsertRunOnlineRequest): Promise< model.WordsIncomingMessage< InsertRunOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling insertRunOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/{paragraphPath}/runs"
            .replace("/{" + "paragraphPath" + "}", (requestObj.paragraphPath !== null && requestObj.paragraphPath !== undefined) ? "/" + String(requestObj.paragraphPath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling insertRunOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling insertRunOnline.');
        }

        // verify required parameter 'requestObj.paragraphPath' is not undefined
        if (requestObj.paragraphPath === undefined) {
            throw new Error('Required parameter "requestObj.paragraphPath" was undefined when calling insertRunOnline.');
        }

        // verify required parameter 'requestObj.run' is not undefined
        if (requestObj.run === undefined) {
            throw new Error('Required parameter "requestObj.run" was undefined when calling insertRunOnline.');
        }

        // verify required parameter 'requestObj.run' is not null
        if (requestObj.run === null) {
            throw new Error('Required parameter "requestObj.run" was null when calling insertRunOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "insertBeforeNode", requestObj.insertBeforeNode);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }
        if (requestObj.run !== undefined) {
            formParams.Run = JSON.stringify(requestObj.run);
        }

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "InsertRunOnlineResponse");
        const result: model.WordsIncomingMessage< model.InsertRunOnlineResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Inserts a new style to the document.
     * @param requestObj contains request parameters
     */
    public async insertStyle(requestObj: model.InsertStyleRequest): Promise< model.WordsIncomingMessage< model.StyleResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling insertStyle.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/styles/insert"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling insertStyle.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling insertStyle.');
        }

        // verify required parameter 'requestObj.styleInsert' is not undefined
        if (requestObj.styleInsert === undefined) {
            throw new Error('Required parameter "requestObj.styleInsert" was undefined when calling insertStyle.');
        }

        // verify required parameter 'requestObj.styleInsert' is not null
        if (requestObj.styleInsert === null) {
            throw new Error('Required parameter "requestObj.styleInsert" was null when calling insertStyle.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.styleInsert, requestObj.styleInsert.constructor.name === "Object" ? "importedStyleInsert.StyleInsert" : requestObj.styleInsert.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "StyleResponse");
        const result: model.WordsIncomingMessage< model.StyleResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Inserts a new style to the document.
     * @param requestObj contains request parameters
     */
    public async insertStyleOnline(requestObj: model.InsertStyleOnlineRequest): Promise< model.WordsIncomingMessage< InsertStyleOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling insertStyleOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/styles/insert"
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling insertStyleOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling insertStyleOnline.');
        }

        // verify required parameter 'requestObj.styleInsert' is not undefined
        if (requestObj.styleInsert === undefined) {
            throw new Error('Required parameter "requestObj.styleInsert" was undefined when calling insertStyleOnline.');
        }

        // verify required parameter 'requestObj.styleInsert' is not null
        if (requestObj.styleInsert === null) {
            throw new Error('Required parameter "requestObj.styleInsert" was null when calling insertStyleOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }
        if (requestObj.styleInsert !== undefined) {
            formParams.StyleInsert = JSON.stringify(requestObj.styleInsert);
        }

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "InsertStyleOnlineResponse");
        const result: model.WordsIncomingMessage< model.InsertStyleOnlineResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Inserts a new table to the document node.
     * @param requestObj contains request parameters
     */
    public async insertTable(requestObj: model.InsertTableRequest): Promise< model.WordsIncomingMessage< model.TableResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling insertTable.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/tables"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling insertTable.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling insertTable.');
        }

        // verify required parameter 'requestObj.table' is not undefined
        if (requestObj.table === undefined) {
            throw new Error('Required parameter "requestObj.table" was undefined when calling insertTable.');
        }

        // verify required parameter 'requestObj.table' is not null
        if (requestObj.table === null) {
            throw new Error('Required parameter "requestObj.table" was null when calling insertTable.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.table, requestObj.table.constructor.name === "Object" ? "importedTableInsert.TableInsert" : requestObj.table.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "TableResponse");
        const result: model.WordsIncomingMessage< model.TableResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Inserts a new cell to the table row.
     * @param requestObj contains request parameters
     */
    public async insertTableCell(requestObj: model.InsertTableCellRequest): Promise< model.WordsIncomingMessage< model.TableCellResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling insertTableCell.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{tableRowPath}/cells"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "tableRowPath" + "}", (requestObj.tableRowPath !== null && requestObj.tableRowPath !== undefined) ? "/" + String(requestObj.tableRowPath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling insertTableCell.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling insertTableCell.');
        }

        // verify required parameter 'requestObj.tableRowPath' is not undefined
        if (requestObj.tableRowPath === undefined) {
            throw new Error('Required parameter "requestObj.tableRowPath" was undefined when calling insertTableCell.');
        }

        // verify required parameter 'requestObj.cell' is not undefined
        if (requestObj.cell === undefined) {
            throw new Error('Required parameter "requestObj.cell" was undefined when calling insertTableCell.');
        }

        // verify required parameter 'requestObj.cell' is not null
        if (requestObj.cell === null) {
            throw new Error('Required parameter "requestObj.cell" was null when calling insertTableCell.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.cell, requestObj.cell.constructor.name === "Object" ? "importedTableCellInsert.TableCellInsert" : requestObj.cell.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "TableCellResponse");
        const result: model.WordsIncomingMessage< model.TableCellResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Inserts a new cell to the table row.
     * @param requestObj contains request parameters
     */
    public async insertTableCellOnline(requestObj: model.InsertTableCellOnlineRequest): Promise< model.WordsIncomingMessage< InsertTableCellOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling insertTableCellOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/{tableRowPath}/cells"
            .replace("/{" + "tableRowPath" + "}", (requestObj.tableRowPath !== null && requestObj.tableRowPath !== undefined) ? "/" + String(requestObj.tableRowPath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling insertTableCellOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling insertTableCellOnline.');
        }

        // verify required parameter 'requestObj.tableRowPath' is not undefined
        if (requestObj.tableRowPath === undefined) {
            throw new Error('Required parameter "requestObj.tableRowPath" was undefined when calling insertTableCellOnline.');
        }

        // verify required parameter 'requestObj.cell' is not undefined
        if (requestObj.cell === undefined) {
            throw new Error('Required parameter "requestObj.cell" was undefined when calling insertTableCellOnline.');
        }

        // verify required parameter 'requestObj.cell' is not null
        if (requestObj.cell === null) {
            throw new Error('Required parameter "requestObj.cell" was null when calling insertTableCellOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }
        if (requestObj.cell !== undefined) {
            formParams.Cell = JSON.stringify(requestObj.cell);
        }

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "InsertTableCellOnlineResponse");
        const result: model.WordsIncomingMessage< model.InsertTableCellOnlineResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Inserts a new table to the document node.
     * @param requestObj contains request parameters
     */
    public async insertTableOnline(requestObj: model.InsertTableOnlineRequest): Promise< model.WordsIncomingMessage< InsertTableOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling insertTableOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/{nodePath}/tables"
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling insertTableOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling insertTableOnline.');
        }

        // verify required parameter 'requestObj.table' is not undefined
        if (requestObj.table === undefined) {
            throw new Error('Required parameter "requestObj.table" was undefined when calling insertTableOnline.');
        }

        // verify required parameter 'requestObj.table' is not null
        if (requestObj.table === null) {
            throw new Error('Required parameter "requestObj.table" was null when calling insertTableOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }
        if (requestObj.table !== undefined) {
            formParams.Table = JSON.stringify(requestObj.table);
        }

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "InsertTableOnlineResponse");
        const result: model.WordsIncomingMessage< model.InsertTableOnlineResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Inserts a new row to the table.
     * @param requestObj contains request parameters
     */
    public async insertTableRow(requestObj: model.InsertTableRowRequest): Promise< model.WordsIncomingMessage< model.TableRowResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling insertTableRow.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{tablePath}/rows"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "tablePath" + "}", (requestObj.tablePath !== null && requestObj.tablePath !== undefined) ? "/" + String(requestObj.tablePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling insertTableRow.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling insertTableRow.');
        }

        // verify required parameter 'requestObj.tablePath' is not undefined
        if (requestObj.tablePath === undefined) {
            throw new Error('Required parameter "requestObj.tablePath" was undefined when calling insertTableRow.');
        }

        // verify required parameter 'requestObj.row' is not undefined
        if (requestObj.row === undefined) {
            throw new Error('Required parameter "requestObj.row" was undefined when calling insertTableRow.');
        }

        // verify required parameter 'requestObj.row' is not null
        if (requestObj.row === null) {
            throw new Error('Required parameter "requestObj.row" was null when calling insertTableRow.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.row, requestObj.row.constructor.name === "Object" ? "importedTableRowInsert.TableRowInsert" : requestObj.row.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "TableRowResponse");
        const result: model.WordsIncomingMessage< model.TableRowResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Inserts a new row to the table.
     * @param requestObj contains request parameters
     */
    public async insertTableRowOnline(requestObj: model.InsertTableRowOnlineRequest): Promise< model.WordsIncomingMessage< InsertTableRowOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling insertTableRowOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/{tablePath}/rows"
            .replace("/{" + "tablePath" + "}", (requestObj.tablePath !== null && requestObj.tablePath !== undefined) ? "/" + String(requestObj.tablePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling insertTableRowOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling insertTableRowOnline.');
        }

        // verify required parameter 'requestObj.tablePath' is not undefined
        if (requestObj.tablePath === undefined) {
            throw new Error('Required parameter "requestObj.tablePath" was undefined when calling insertTableRowOnline.');
        }

        // verify required parameter 'requestObj.row' is not undefined
        if (requestObj.row === undefined) {
            throw new Error('Required parameter "requestObj.row" was undefined when calling insertTableRowOnline.');
        }

        // verify required parameter 'requestObj.row' is not null
        if (requestObj.row === null) {
            throw new Error('Required parameter "requestObj.row" was null when calling insertTableRowOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }
        if (requestObj.row !== undefined) {
            formParams.Row = JSON.stringify(requestObj.row);
        }

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "InsertTableRowOnlineResponse");
        const result: model.WordsIncomingMessage< model.InsertTableRowOnlineResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Inserts a new watermark image to the document.
     * @param requestObj contains request parameters
     */
    public async insertWatermarkImage(requestObj: model.InsertWatermarkImageRequest): Promise< model.WordsIncomingMessage< model.DocumentResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling insertWatermarkImage.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/watermarks/images"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling insertWatermarkImage.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling insertWatermarkImage.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "rotationAngle", requestObj.rotationAngle);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "image", requestObj.image);
        if (requestObj.imageFile !== undefined) {
            formParams.ImageFile = requestObj.imageFile;
        }

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "DocumentResponse");
        const result: model.WordsIncomingMessage< model.DocumentResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Inserts a new watermark image to the document.
     * @param requestObj contains request parameters
     */
    public async insertWatermarkImageOnline(requestObj: model.InsertWatermarkImageOnlineRequest): Promise< model.WordsIncomingMessage< InsertWatermarkImageOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling insertWatermarkImageOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/watermarks/images"
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling insertWatermarkImageOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling insertWatermarkImageOnline.');
        }

        // verify required parameter 'requestObj.imageFile' is not undefined
        if (requestObj.imageFile === undefined) {
            throw new Error('Required parameter "requestObj.imageFile" was undefined when calling insertWatermarkImageOnline.');
        }

        // verify required parameter 'requestObj.imageFile' is not null
        if (requestObj.imageFile === null) {
            throw new Error('Required parameter "requestObj.imageFile" was null when calling insertWatermarkImageOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "rotationAngle", requestObj.rotationAngle);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "image", requestObj.image);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }
        if (requestObj.imageFile !== undefined) {
            formParams.ImageFile = requestObj.imageFile;
        }

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "InsertWatermarkImageOnlineResponse");
        const result: model.WordsIncomingMessage< model.InsertWatermarkImageOnlineResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Inserts a new watermark text to the document.
     * @param requestObj contains request parameters
     */
    public async insertWatermarkText(requestObj: model.InsertWatermarkTextRequest): Promise< model.WordsIncomingMessage< model.DocumentResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling insertWatermarkText.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/watermarks/texts"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling insertWatermarkText.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling insertWatermarkText.');
        }

        // verify required parameter 'requestObj.watermarkText' is not undefined
        if (requestObj.watermarkText === undefined) {
            throw new Error('Required parameter "requestObj.watermarkText" was undefined when calling insertWatermarkText.');
        }

        // verify required parameter 'requestObj.watermarkText' is not null
        if (requestObj.watermarkText === null) {
            throw new Error('Required parameter "requestObj.watermarkText" was null when calling insertWatermarkText.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.watermarkText, requestObj.watermarkText.constructor.name === "Object" ? "importedWatermarkText.WatermarkText" : requestObj.watermarkText.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "DocumentResponse");
        const result: model.WordsIncomingMessage< model.DocumentResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Inserts a new watermark text to the document.
     * @param requestObj contains request parameters
     */
    public async insertWatermarkTextOnline(requestObj: model.InsertWatermarkTextOnlineRequest): Promise< model.WordsIncomingMessage< InsertWatermarkTextOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling insertWatermarkTextOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/watermarks/texts"
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling insertWatermarkTextOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling insertWatermarkTextOnline.');
        }

        // verify required parameter 'requestObj.watermarkText' is not undefined
        if (requestObj.watermarkText === undefined) {
            throw new Error('Required parameter "requestObj.watermarkText" was undefined when calling insertWatermarkTextOnline.');
        }

        // verify required parameter 'requestObj.watermarkText' is not null
        if (requestObj.watermarkText === null) {
            throw new Error('Required parameter "requestObj.watermarkText" was null when calling insertWatermarkTextOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }
        if (requestObj.watermarkText !== undefined) {
            formParams.WatermarkText = JSON.stringify(requestObj.watermarkText);
        }

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "InsertWatermarkTextOnlineResponse");
        const result: model.WordsIncomingMessage< model.InsertWatermarkTextOnlineResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Downloads a document from the Web using URL and saves it to cloud storage in the specified format.
     * @param requestObj contains request parameters
     */
    public async loadWebDocument(requestObj: model.LoadWebDocumentRequest): Promise< model.WordsIncomingMessage< model.SaveResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling loadWebDocument.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/loadWebDocument"
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.data' is not undefined
        if (requestObj.data === undefined) {
            throw new Error('Required parameter "requestObj.data" was undefined when calling loadWebDocument.');
        }

        // verify required parameter 'requestObj.data' is not null
        if (requestObj.data === null) {
            throw new Error('Required parameter "requestObj.data" was null when calling loadWebDocument.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.data, requestObj.data.constructor.name === "Object" ? "importedLoadWebDocumentData.LoadWebDocumentData" : requestObj.data.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "SaveResponse");
        const result: model.WordsIncomingMessage< model.SaveResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Move file.
     * @param requestObj contains request parameters
     */
    public async moveFile(requestObj: model.MoveFileRequest): Promise< http.IncomingMessage > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling moveFile.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/storage/file/move/{srcPath}"
            .replace("/{" + "srcPath" + "}", (requestObj.srcPath !== null && requestObj.srcPath !== undefined) ? "/" + String(requestObj.srcPath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.destPath' is not undefined
        if (requestObj.destPath === undefined) {
            throw new Error('Required parameter "requestObj.destPath" was undefined when calling moveFile.');
        }

        // verify required parameter 'requestObj.srcPath' is not undefined
        if (requestObj.srcPath === undefined) {
            throw new Error('Required parameter "requestObj.srcPath" was undefined when calling moveFile.');
        }

        // verify required parameter 'requestObj.srcPath' is not null
        if (requestObj.srcPath === null) {
            throw new Error('Required parameter "requestObj.srcPath" was null when calling moveFile.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destPath", requestObj.destPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "srcStorageName", requestObj.srcStorageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destStorageName", requestObj.destStorageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "versionId", requestObj.versionId);

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Move folder.
     * @param requestObj contains request parameters
     */
    public async moveFolder(requestObj: model.MoveFolderRequest): Promise< http.IncomingMessage > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling moveFolder.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/storage/folder/move/{srcPath}"
            .replace("/{" + "srcPath" + "}", (requestObj.srcPath !== null && requestObj.srcPath !== undefined) ? "/" + String(requestObj.srcPath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.destPath' is not undefined
        if (requestObj.destPath === undefined) {
            throw new Error('Required parameter "requestObj.destPath" was undefined when calling moveFolder.');
        }

        // verify required parameter 'requestObj.srcPath' is not undefined
        if (requestObj.srcPath === undefined) {
            throw new Error('Required parameter "requestObj.srcPath" was undefined when calling moveFolder.');
        }

        // verify required parameter 'requestObj.srcPath' is not null
        if (requestObj.srcPath === null) {
            throw new Error('Required parameter "requestObj.srcPath" was null when calling moveFolder.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destPath", requestObj.destPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "srcStorageName", requestObj.srcStorageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destStorageName", requestObj.destStorageName);

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Applies document content optimization options, specific to a particular versions of Microsoft Word.
     * @param requestObj contains request parameters
     */
    public async optimizeDocument(requestObj: model.OptimizeDocumentRequest): Promise< http.IncomingMessage > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling optimizeDocument.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/compatibility/optimize"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling optimizeDocument.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling optimizeDocument.');
        }

        // verify required parameter 'requestObj.options' is not undefined
        if (requestObj.options === undefined) {
            throw new Error('Required parameter "requestObj.options" was undefined when calling optimizeDocument.');
        }

        // verify required parameter 'requestObj.options' is not null
        if (requestObj.options === null) {
            throw new Error('Required parameter "requestObj.options" was null when calling optimizeDocument.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.options, requestObj.options.constructor.name === "Object" ? "importedOptimizationOptions.OptimizationOptions" : requestObj.options.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Applies document content optimization options, specific to a particular versions of Microsoft Word.
     * @param requestObj contains request parameters
     */
    public async optimizeDocumentOnline(requestObj: model.OptimizeDocumentOnlineRequest): Promise< model.WordsIncomingMessage< Buffer > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling optimizeDocumentOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/compatibility/optimize"
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling optimizeDocumentOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling optimizeDocumentOnline.');
        }

        // verify required parameter 'requestObj.options' is not undefined
        if (requestObj.options === undefined) {
            throw new Error('Required parameter "requestObj.options" was undefined when calling optimizeDocumentOnline.');
        }

        // verify required parameter 'requestObj.options' is not null
        if (requestObj.options === null) {
            throw new Error('Required parameter "requestObj.options" was null when calling optimizeDocumentOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }
        if (requestObj.options !== undefined) {
            formParams.Options = JSON.stringify(requestObj.options);
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "Buffer");
        const result: model.WordsIncomingMessage< Buffer > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Adds protection to the document.
     * @param requestObj contains request parameters
     */
    public async protectDocument(requestObj: model.ProtectDocumentRequest): Promise< model.WordsIncomingMessage< model.ProtectionDataResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling protectDocument.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/protection"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling protectDocument.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling protectDocument.');
        }

        // verify required parameter 'requestObj.protectionRequest' is not undefined
        if (requestObj.protectionRequest === undefined) {
            throw new Error('Required parameter "requestObj.protectionRequest" was undefined when calling protectDocument.');
        }

        // verify required parameter 'requestObj.protectionRequest' is not null
        if (requestObj.protectionRequest === null) {
            throw new Error('Required parameter "requestObj.protectionRequest" was null when calling protectDocument.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.protectionRequest, requestObj.protectionRequest.constructor.name === "Object" ? "importedProtectionRequest.ProtectionRequest" : requestObj.protectionRequest.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "ProtectionDataResponse");
        const result: model.WordsIncomingMessage< model.ProtectionDataResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Adds protection to the document.
     * @param requestObj contains request parameters
     */
    public async protectDocumentOnline(requestObj: model.ProtectDocumentOnlineRequest): Promise< model.WordsIncomingMessage< ProtectDocumentOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling protectDocumentOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/protection"
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling protectDocumentOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling protectDocumentOnline.');
        }

        // verify required parameter 'requestObj.protectionRequest' is not undefined
        if (requestObj.protectionRequest === undefined) {
            throw new Error('Required parameter "requestObj.protectionRequest" was undefined when calling protectDocumentOnline.');
        }

        // verify required parameter 'requestObj.protectionRequest' is not null
        if (requestObj.protectionRequest === null) {
            throw new Error('Required parameter "requestObj.protectionRequest" was null when calling protectDocumentOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }
        if (requestObj.protectionRequest !== undefined) {
            formParams.ProtectionRequest = JSON.stringify(requestObj.protectionRequest);
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "ProtectDocumentOnlineResponse");
        const result: model.WordsIncomingMessage< model.ProtectDocumentOnlineResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Rejects all revisions in the document.
     * @param requestObj contains request parameters
     */
    public async rejectAllRevisions(requestObj: model.RejectAllRevisionsRequest): Promise< model.WordsIncomingMessage< model.RevisionsModificationResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling rejectAllRevisions.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/revisions/rejectAll"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling rejectAllRevisions.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling rejectAllRevisions.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "RevisionsModificationResponse");
        const result: model.WordsIncomingMessage< model.RevisionsModificationResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Rejects all revisions in the document.
     * @param requestObj contains request parameters
     */
    public async rejectAllRevisionsOnline(requestObj: model.RejectAllRevisionsOnlineRequest): Promise< model.WordsIncomingMessage< RejectAllRevisionsOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling rejectAllRevisionsOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/revisions/rejectAll"
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling rejectAllRevisionsOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling rejectAllRevisionsOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "RejectAllRevisionsOnlineResponse");
        const result: model.WordsIncomingMessage< model.RejectAllRevisionsOnlineResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Removes a range from the document.
     * @param requestObj contains request parameters
     */
    public async removeRange(requestObj: model.RemoveRangeRequest): Promise< model.WordsIncomingMessage< model.DocumentResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling removeRange.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/range/{rangeStartIdentifier}/{rangeEndIdentifier}"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "rangeStartIdentifier" + "}", (requestObj.rangeStartIdentifier !== null && requestObj.rangeStartIdentifier !== undefined) ? "/" + String(requestObj.rangeStartIdentifier) : "")
            .replace("/{" + "rangeEndIdentifier" + "}", (requestObj.rangeEndIdentifier !== null && requestObj.rangeEndIdentifier !== undefined) ? "/" + String(requestObj.rangeEndIdentifier) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling removeRange.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling removeRange.');
        }

        // verify required parameter 'requestObj.rangeStartIdentifier' is not undefined
        if (requestObj.rangeStartIdentifier === undefined) {
            throw new Error('Required parameter "requestObj.rangeStartIdentifier" was undefined when calling removeRange.');
        }

        // verify required parameter 'requestObj.rangeStartIdentifier' is not null
        if (requestObj.rangeStartIdentifier === null) {
            throw new Error('Required parameter "requestObj.rangeStartIdentifier" was null when calling removeRange.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);

        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "DocumentResponse");
        const result: model.WordsIncomingMessage< model.DocumentResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Removes a range from the document.
     * @param requestObj contains request parameters
     */
    public async removeRangeOnline(requestObj: model.RemoveRangeOnlineRequest): Promise< model.WordsIncomingMessage< RemoveRangeOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling removeRangeOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/range/{rangeStartIdentifier}/{rangeEndIdentifier}"
            .replace("/{" + "rangeStartIdentifier" + "}", (requestObj.rangeStartIdentifier !== null && requestObj.rangeStartIdentifier !== undefined) ? "/" + String(requestObj.rangeStartIdentifier) : "")
            .replace("/{" + "rangeEndIdentifier" + "}", (requestObj.rangeEndIdentifier !== null && requestObj.rangeEndIdentifier !== undefined) ? "/" + String(requestObj.rangeEndIdentifier) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling removeRangeOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling removeRangeOnline.');
        }

        // verify required parameter 'requestObj.rangeStartIdentifier' is not undefined
        if (requestObj.rangeStartIdentifier === undefined) {
            throw new Error('Required parameter "requestObj.rangeStartIdentifier" was undefined when calling removeRangeOnline.');
        }

        // verify required parameter 'requestObj.rangeStartIdentifier' is not null
        if (requestObj.rangeStartIdentifier === null) {
            throw new Error('Required parameter "requestObj.rangeStartIdentifier" was null when calling removeRangeOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }

        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "RemoveRangeOnlineResponse");
        const result: model.WordsIncomingMessage< model.RemoveRangeOnlineResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Renders a DrawingObject to the specified format.
     * @param requestObj contains request parameters
     */
    public async renderDrawingObject(requestObj: model.RenderDrawingObjectRequest): Promise< model.WordsIncomingMessage< Buffer > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling renderDrawingObject.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/drawingObjects/{index}/render"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling renderDrawingObject.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling renderDrawingObject.');
        }

        // verify required parameter 'requestObj.format' is not undefined
        if (requestObj.format === undefined) {
            throw new Error('Required parameter "requestObj.format" was undefined when calling renderDrawingObject.');
        }

        // verify required parameter 'requestObj.format' is not null
        if (requestObj.format === null) {
            throw new Error('Required parameter "requestObj.format" was null when calling renderDrawingObject.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling renderDrawingObject.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling renderDrawingObject.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "format", requestObj.format);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsLocation", requestObj.fontsLocation);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "Buffer");
        const result: model.WordsIncomingMessage< Buffer > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Renders a DrawingObject to the specified format.
     * @param requestObj contains request parameters
     */
    public async renderDrawingObjectOnline(requestObj: model.RenderDrawingObjectOnlineRequest): Promise< model.WordsIncomingMessage< Buffer > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling renderDrawingObjectOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "words//online/get/{nodePath}/drawingObjects/{index}/render"
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling renderDrawingObjectOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling renderDrawingObjectOnline.');
        }

        // verify required parameter 'requestObj.format' is not undefined
        if (requestObj.format === undefined) {
            throw new Error('Required parameter "requestObj.format" was undefined when calling renderDrawingObjectOnline.');
        }

        // verify required parameter 'requestObj.format' is not null
        if (requestObj.format === null) {
            throw new Error('Required parameter "requestObj.format" was null when calling renderDrawingObjectOnline.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling renderDrawingObjectOnline.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling renderDrawingObjectOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "format", requestObj.format);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsLocation", requestObj.fontsLocation);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "Buffer");
        const result: model.WordsIncomingMessage< Buffer > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Renders an OfficeMath object to the specified format.
     * @param requestObj contains request parameters
     */
    public async renderMathObject(requestObj: model.RenderMathObjectRequest): Promise< model.WordsIncomingMessage< Buffer > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling renderMathObject.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/OfficeMathObjects/{index}/render"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling renderMathObject.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling renderMathObject.');
        }

        // verify required parameter 'requestObj.format' is not undefined
        if (requestObj.format === undefined) {
            throw new Error('Required parameter "requestObj.format" was undefined when calling renderMathObject.');
        }

        // verify required parameter 'requestObj.format' is not null
        if (requestObj.format === null) {
            throw new Error('Required parameter "requestObj.format" was null when calling renderMathObject.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling renderMathObject.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling renderMathObject.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "format", requestObj.format);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsLocation", requestObj.fontsLocation);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "Buffer");
        const result: model.WordsIncomingMessage< Buffer > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Renders an OfficeMath object to the specified format.
     * @param requestObj contains request parameters
     */
    public async renderMathObjectOnline(requestObj: model.RenderMathObjectOnlineRequest): Promise< model.WordsIncomingMessage< Buffer > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling renderMathObjectOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "words//online/get/{nodePath}/OfficeMathObjects/{index}/render"
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling renderMathObjectOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling renderMathObjectOnline.');
        }

        // verify required parameter 'requestObj.format' is not undefined
        if (requestObj.format === undefined) {
            throw new Error('Required parameter "requestObj.format" was undefined when calling renderMathObjectOnline.');
        }

        // verify required parameter 'requestObj.format' is not null
        if (requestObj.format === null) {
            throw new Error('Required parameter "requestObj.format" was null when calling renderMathObjectOnline.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling renderMathObjectOnline.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling renderMathObjectOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "format", requestObj.format);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsLocation", requestObj.fontsLocation);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "Buffer");
        const result: model.WordsIncomingMessage< Buffer > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Renders a page to the specified format.
     * @param requestObj contains request parameters
     */
    public async renderPage(requestObj: model.RenderPageRequest): Promise< model.WordsIncomingMessage< Buffer > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling renderPage.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/pages/{pageIndex}/render"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "pageIndex" + "}", (requestObj.pageIndex !== null && requestObj.pageIndex !== undefined) ? "/" + String(requestObj.pageIndex) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling renderPage.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling renderPage.');
        }

        // verify required parameter 'requestObj.pageIndex' is not undefined
        if (requestObj.pageIndex === undefined) {
            throw new Error('Required parameter "requestObj.pageIndex" was undefined when calling renderPage.');
        }

        // verify required parameter 'requestObj.pageIndex' is not null
        if (requestObj.pageIndex === null) {
            throw new Error('Required parameter "requestObj.pageIndex" was null when calling renderPage.');
        }

        // verify required parameter 'requestObj.format' is not undefined
        if (requestObj.format === undefined) {
            throw new Error('Required parameter "requestObj.format" was undefined when calling renderPage.');
        }

        // verify required parameter 'requestObj.format' is not null
        if (requestObj.format === null) {
            throw new Error('Required parameter "requestObj.format" was null when calling renderPage.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "format", requestObj.format);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsLocation", requestObj.fontsLocation);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "Buffer");
        const result: model.WordsIncomingMessage< Buffer > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Renders a page to the specified format.
     * @param requestObj contains request parameters
     */
    public async renderPageOnline(requestObj: model.RenderPageOnlineRequest): Promise< model.WordsIncomingMessage< Buffer > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling renderPageOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/get/pages/{pageIndex}/render"
            .replace("/{" + "pageIndex" + "}", (requestObj.pageIndex !== null && requestObj.pageIndex !== undefined) ? "/" + String(requestObj.pageIndex) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling renderPageOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling renderPageOnline.');
        }

        // verify required parameter 'requestObj.pageIndex' is not undefined
        if (requestObj.pageIndex === undefined) {
            throw new Error('Required parameter "requestObj.pageIndex" was undefined when calling renderPageOnline.');
        }

        // verify required parameter 'requestObj.pageIndex' is not null
        if (requestObj.pageIndex === null) {
            throw new Error('Required parameter "requestObj.pageIndex" was null when calling renderPageOnline.');
        }

        // verify required parameter 'requestObj.format' is not undefined
        if (requestObj.format === undefined) {
            throw new Error('Required parameter "requestObj.format" was undefined when calling renderPageOnline.');
        }

        // verify required parameter 'requestObj.format' is not null
        if (requestObj.format === null) {
            throw new Error('Required parameter "requestObj.format" was null when calling renderPageOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "format", requestObj.format);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsLocation", requestObj.fontsLocation);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "Buffer");
        const result: model.WordsIncomingMessage< Buffer > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Renders a paragraph to the specified format.
     * @param requestObj contains request parameters
     */
    public async renderParagraph(requestObj: model.RenderParagraphRequest): Promise< model.WordsIncomingMessage< Buffer > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling renderParagraph.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/paragraphs/{index}/render"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling renderParagraph.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling renderParagraph.');
        }

        // verify required parameter 'requestObj.format' is not undefined
        if (requestObj.format === undefined) {
            throw new Error('Required parameter "requestObj.format" was undefined when calling renderParagraph.');
        }

        // verify required parameter 'requestObj.format' is not null
        if (requestObj.format === null) {
            throw new Error('Required parameter "requestObj.format" was null when calling renderParagraph.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling renderParagraph.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling renderParagraph.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "format", requestObj.format);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsLocation", requestObj.fontsLocation);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "Buffer");
        const result: model.WordsIncomingMessage< Buffer > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Renders a paragraph to the specified format.
     * @param requestObj contains request parameters
     */
    public async renderParagraphOnline(requestObj: model.RenderParagraphOnlineRequest): Promise< model.WordsIncomingMessage< Buffer > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling renderParagraphOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "words//online/get/{nodePath}/paragraphs/{index}/render"
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling renderParagraphOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling renderParagraphOnline.');
        }

        // verify required parameter 'requestObj.format' is not undefined
        if (requestObj.format === undefined) {
            throw new Error('Required parameter "requestObj.format" was undefined when calling renderParagraphOnline.');
        }

        // verify required parameter 'requestObj.format' is not null
        if (requestObj.format === null) {
            throw new Error('Required parameter "requestObj.format" was null when calling renderParagraphOnline.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling renderParagraphOnline.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling renderParagraphOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "format", requestObj.format);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsLocation", requestObj.fontsLocation);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "Buffer");
        const result: model.WordsIncomingMessage< Buffer > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Renders a table to the specified format.
     * @param requestObj contains request parameters
     */
    public async renderTable(requestObj: model.RenderTableRequest): Promise< model.WordsIncomingMessage< Buffer > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling renderTable.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/tables/{index}/render"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling renderTable.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling renderTable.');
        }

        // verify required parameter 'requestObj.format' is not undefined
        if (requestObj.format === undefined) {
            throw new Error('Required parameter "requestObj.format" was undefined when calling renderTable.');
        }

        // verify required parameter 'requestObj.format' is not null
        if (requestObj.format === null) {
            throw new Error('Required parameter "requestObj.format" was null when calling renderTable.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling renderTable.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling renderTable.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "format", requestObj.format);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsLocation", requestObj.fontsLocation);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "Buffer");
        const result: model.WordsIncomingMessage< Buffer > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Renders a table to the specified format.
     * @param requestObj contains request parameters
     */
    public async renderTableOnline(requestObj: model.RenderTableOnlineRequest): Promise< model.WordsIncomingMessage< Buffer > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling renderTableOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "words//online/get/{nodePath}/tables/{index}/render"
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling renderTableOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling renderTableOnline.');
        }

        // verify required parameter 'requestObj.format' is not undefined
        if (requestObj.format === undefined) {
            throw new Error('Required parameter "requestObj.format" was undefined when calling renderTableOnline.');
        }

        // verify required parameter 'requestObj.format' is not null
        if (requestObj.format === null) {
            throw new Error('Required parameter "requestObj.format" was null when calling renderTableOnline.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling renderTableOnline.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling renderTableOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "format", requestObj.format);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsLocation", requestObj.fontsLocation);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "Buffer");
        const result: model.WordsIncomingMessage< Buffer > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Replaces text in the document.
     * @param requestObj contains request parameters
     */
    public async replaceText(requestObj: model.ReplaceTextRequest): Promise< model.WordsIncomingMessage< model.ReplaceTextResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling replaceText.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/replaceText"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling replaceText.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling replaceText.');
        }

        // verify required parameter 'requestObj.replaceText' is not undefined
        if (requestObj.replaceText === undefined) {
            throw new Error('Required parameter "requestObj.replaceText" was undefined when calling replaceText.');
        }

        // verify required parameter 'requestObj.replaceText' is not null
        if (requestObj.replaceText === null) {
            throw new Error('Required parameter "requestObj.replaceText" was null when calling replaceText.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.replaceText, requestObj.replaceText.constructor.name === "Object" ? "importedReplaceTextParameters.ReplaceTextParameters" : requestObj.replaceText.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "ReplaceTextResponse");
        const result: model.WordsIncomingMessage< model.ReplaceTextResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Replaces text in the document.
     * @param requestObj contains request parameters
     */
    public async replaceTextOnline(requestObj: model.ReplaceTextOnlineRequest): Promise< model.WordsIncomingMessage< ReplaceTextOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling replaceTextOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/replaceText"
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling replaceTextOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling replaceTextOnline.');
        }

        // verify required parameter 'requestObj.replaceText' is not undefined
        if (requestObj.replaceText === undefined) {
            throw new Error('Required parameter "requestObj.replaceText" was undefined when calling replaceTextOnline.');
        }

        // verify required parameter 'requestObj.replaceText' is not null
        if (requestObj.replaceText === null) {
            throw new Error('Required parameter "requestObj.replaceText" was null when calling replaceTextOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }
        if (requestObj.replaceText !== undefined) {
            formParams.ReplaceText = JSON.stringify(requestObj.replaceText);
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "ReplaceTextOnlineResponse");
        const result: model.WordsIncomingMessage< model.ReplaceTextOnlineResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Replaces a range with text in the document.
     * @param requestObj contains request parameters
     */
    public async replaceWithText(requestObj: model.ReplaceWithTextRequest): Promise< model.WordsIncomingMessage< model.DocumentResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling replaceWithText.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/range/{rangeStartIdentifier}/{rangeEndIdentifier}"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "rangeStartIdentifier" + "}", (requestObj.rangeStartIdentifier !== null && requestObj.rangeStartIdentifier !== undefined) ? "/" + String(requestObj.rangeStartIdentifier) : "")
            .replace("/{" + "rangeEndIdentifier" + "}", (requestObj.rangeEndIdentifier !== null && requestObj.rangeEndIdentifier !== undefined) ? "/" + String(requestObj.rangeEndIdentifier) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling replaceWithText.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling replaceWithText.');
        }

        // verify required parameter 'requestObj.rangeStartIdentifier' is not undefined
        if (requestObj.rangeStartIdentifier === undefined) {
            throw new Error('Required parameter "requestObj.rangeStartIdentifier" was undefined when calling replaceWithText.');
        }

        // verify required parameter 'requestObj.rangeStartIdentifier' is not null
        if (requestObj.rangeStartIdentifier === null) {
            throw new Error('Required parameter "requestObj.rangeStartIdentifier" was null when calling replaceWithText.');
        }

        // verify required parameter 'requestObj.rangeText' is not undefined
        if (requestObj.rangeText === undefined) {
            throw new Error('Required parameter "requestObj.rangeText" was undefined when calling replaceWithText.');
        }

        // verify required parameter 'requestObj.rangeText' is not null
        if (requestObj.rangeText === null) {
            throw new Error('Required parameter "requestObj.rangeText" was null when calling replaceWithText.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.rangeText, requestObj.rangeText.constructor.name === "Object" ? "importedReplaceRange.ReplaceRange" : requestObj.rangeText.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "DocumentResponse");
        const result: model.WordsIncomingMessage< model.DocumentResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Replaces a range with text in the document.
     * @param requestObj contains request parameters
     */
    public async replaceWithTextOnline(requestObj: model.ReplaceWithTextOnlineRequest): Promise< model.WordsIncomingMessage< ReplaceWithTextOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling replaceWithTextOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/range/{rangeStartIdentifier}/{rangeEndIdentifier}"
            .replace("/{" + "rangeStartIdentifier" + "}", (requestObj.rangeStartIdentifier !== null && requestObj.rangeStartIdentifier !== undefined) ? "/" + String(requestObj.rangeStartIdentifier) : "")
            .replace("/{" + "rangeEndIdentifier" + "}", (requestObj.rangeEndIdentifier !== null && requestObj.rangeEndIdentifier !== undefined) ? "/" + String(requestObj.rangeEndIdentifier) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling replaceWithTextOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling replaceWithTextOnline.');
        }

        // verify required parameter 'requestObj.rangeStartIdentifier' is not undefined
        if (requestObj.rangeStartIdentifier === undefined) {
            throw new Error('Required parameter "requestObj.rangeStartIdentifier" was undefined when calling replaceWithTextOnline.');
        }

        // verify required parameter 'requestObj.rangeStartIdentifier' is not null
        if (requestObj.rangeStartIdentifier === null) {
            throw new Error('Required parameter "requestObj.rangeStartIdentifier" was null when calling replaceWithTextOnline.');
        }

        // verify required parameter 'requestObj.rangeText' is not undefined
        if (requestObj.rangeText === undefined) {
            throw new Error('Required parameter "requestObj.rangeText" was undefined when calling replaceWithTextOnline.');
        }

        // verify required parameter 'requestObj.rangeText' is not null
        if (requestObj.rangeText === null) {
            throw new Error('Required parameter "requestObj.rangeText" was null when calling replaceWithTextOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }
        if (requestObj.rangeText !== undefined) {
            formParams.RangeText = JSON.stringify(requestObj.rangeText);
        }

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "ReplaceWithTextOnlineResponse");
        const result: model.WordsIncomingMessage< model.ReplaceWithTextOnlineResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Clears the font cache.
     * @param requestObj contains request parameters
     */
    public async resetCache(requestObj: model.ResetCacheRequest): Promise< http.IncomingMessage > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling resetCache.');
        }

        const localVarPath = this.configuration.getApiBaseUrl() + "/words/fonts/cache"
            .replace("//", "/");
        const queryParameters: any = {};

        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Converts a document in cloud storage to the specified format.
     * @param requestObj contains request parameters
     */
    public async saveAs(requestObj: model.SaveAsRequest): Promise< model.WordsIncomingMessage< model.SaveResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling saveAs.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/saveAs"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling saveAs.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling saveAs.');
        }

        // verify required parameter 'requestObj.saveOptionsData' is not undefined
        if (requestObj.saveOptionsData === undefined) {
            throw new Error('Required parameter "requestObj.saveOptionsData" was undefined when calling saveAs.');
        }

        // verify required parameter 'requestObj.saveOptionsData' is not null
        if (requestObj.saveOptionsData === null) {
            throw new Error('Required parameter "requestObj.saveOptionsData" was null when calling saveAs.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsLocation", requestObj.fontsLocation);

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.saveOptionsData, requestObj.saveOptionsData.constructor.name === "Object" ? "importedSaveOptionsData.SaveOptionsData" : requestObj.saveOptionsData.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "SaveResponse");
        const result: model.WordsIncomingMessage< model.SaveResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Converts a document in cloud storage to the specified format.
     * @param requestObj contains request parameters
     */
    public async saveAsOnline(requestObj: model.SaveAsOnlineRequest): Promise< model.WordsIncomingMessage< SaveAsOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling saveAsOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/saveAs"
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling saveAsOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling saveAsOnline.');
        }

        // verify required parameter 'requestObj.saveOptionsData' is not undefined
        if (requestObj.saveOptionsData === undefined) {
            throw new Error('Required parameter "requestObj.saveOptionsData" was undefined when calling saveAsOnline.');
        }

        // verify required parameter 'requestObj.saveOptionsData' is not null
        if (requestObj.saveOptionsData === null) {
            throw new Error('Required parameter "requestObj.saveOptionsData" was null when calling saveAsOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsLocation", requestObj.fontsLocation);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }
        if (requestObj.saveOptionsData !== undefined) {
            formParams.SaveOptionsData = JSON.stringify(requestObj.saveOptionsData);
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "SaveAsOnlineResponse");
        const result: model.WordsIncomingMessage< model.SaveAsOnlineResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Saves a range as a new document.
     * @param requestObj contains request parameters
     */
    public async saveAsRange(requestObj: model.SaveAsRangeRequest): Promise< model.WordsIncomingMessage< model.DocumentResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling saveAsRange.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/range/{rangeStartIdentifier}/{rangeEndIdentifier}/SaveAs"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "rangeStartIdentifier" + "}", (requestObj.rangeStartIdentifier !== null && requestObj.rangeStartIdentifier !== undefined) ? "/" + String(requestObj.rangeStartIdentifier) : "")
            .replace("/{" + "rangeEndIdentifier" + "}", (requestObj.rangeEndIdentifier !== null && requestObj.rangeEndIdentifier !== undefined) ? "/" + String(requestObj.rangeEndIdentifier) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling saveAsRange.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling saveAsRange.');
        }

        // verify required parameter 'requestObj.rangeStartIdentifier' is not undefined
        if (requestObj.rangeStartIdentifier === undefined) {
            throw new Error('Required parameter "requestObj.rangeStartIdentifier" was undefined when calling saveAsRange.');
        }

        // verify required parameter 'requestObj.rangeStartIdentifier' is not null
        if (requestObj.rangeStartIdentifier === null) {
            throw new Error('Required parameter "requestObj.rangeStartIdentifier" was null when calling saveAsRange.');
        }

        // verify required parameter 'requestObj.documentParameters' is not undefined
        if (requestObj.documentParameters === undefined) {
            throw new Error('Required parameter "requestObj.documentParameters" was undefined when calling saveAsRange.');
        }

        // verify required parameter 'requestObj.documentParameters' is not null
        if (requestObj.documentParameters === null) {
            throw new Error('Required parameter "requestObj.documentParameters" was null when calling saveAsRange.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.documentParameters, requestObj.documentParameters.constructor.name === "Object" ? "importedRangeDocument.RangeDocument" : requestObj.documentParameters.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "DocumentResponse");
        const result: model.WordsIncomingMessage< model.DocumentResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Saves a range as a new document.
     * @param requestObj contains request parameters
     */
    public async saveAsRangeOnline(requestObj: model.SaveAsRangeOnlineRequest): Promise< model.WordsIncomingMessage< SaveAsRangeOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling saveAsRangeOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/range/{rangeStartIdentifier}/{rangeEndIdentifier}/SaveAs"
            .replace("/{" + "rangeStartIdentifier" + "}", (requestObj.rangeStartIdentifier !== null && requestObj.rangeStartIdentifier !== undefined) ? "/" + String(requestObj.rangeStartIdentifier) : "")
            .replace("/{" + "rangeEndIdentifier" + "}", (requestObj.rangeEndIdentifier !== null && requestObj.rangeEndIdentifier !== undefined) ? "/" + String(requestObj.rangeEndIdentifier) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling saveAsRangeOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling saveAsRangeOnline.');
        }

        // verify required parameter 'requestObj.rangeStartIdentifier' is not undefined
        if (requestObj.rangeStartIdentifier === undefined) {
            throw new Error('Required parameter "requestObj.rangeStartIdentifier" was undefined when calling saveAsRangeOnline.');
        }

        // verify required parameter 'requestObj.rangeStartIdentifier' is not null
        if (requestObj.rangeStartIdentifier === null) {
            throw new Error('Required parameter "requestObj.rangeStartIdentifier" was null when calling saveAsRangeOnline.');
        }

        // verify required parameter 'requestObj.documentParameters' is not undefined
        if (requestObj.documentParameters === undefined) {
            throw new Error('Required parameter "requestObj.documentParameters" was undefined when calling saveAsRangeOnline.');
        }

        // verify required parameter 'requestObj.documentParameters' is not null
        if (requestObj.documentParameters === null) {
            throw new Error('Required parameter "requestObj.documentParameters" was null when calling saveAsRangeOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }
        if (requestObj.documentParameters !== undefined) {
            formParams.DocumentParameters = JSON.stringify(requestObj.documentParameters);
        }

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "SaveAsRangeOnlineResponse");
        const result: model.WordsIncomingMessage< model.SaveAsRangeOnlineResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Converts a document in cloud storage to TIFF format using detailed conversion settings.
     * @param requestObj contains request parameters
     */
    public async saveAsTiff(requestObj: model.SaveAsTiffRequest): Promise< model.WordsIncomingMessage< model.SaveResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling saveAsTiff.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/saveAs/tiff"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling saveAsTiff.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling saveAsTiff.');
        }

        // verify required parameter 'requestObj.saveOptions' is not undefined
        if (requestObj.saveOptions === undefined) {
            throw new Error('Required parameter "requestObj.saveOptions" was undefined when calling saveAsTiff.');
        }

        // verify required parameter 'requestObj.saveOptions' is not null
        if (requestObj.saveOptions === null) {
            throw new Error('Required parameter "requestObj.saveOptions" was null when calling saveAsTiff.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "useAntiAliasing", requestObj.useAntiAliasing);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "useHighQualityRendering", requestObj.useHighQualityRendering);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "imageBrightness", requestObj.imageBrightness);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "imageColorMode", requestObj.imageColorMode);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "imageContrast", requestObj.imageContrast);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "numeralFormat", requestObj.numeralFormat);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "pageCount", requestObj.pageCount);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "pageIndex", requestObj.pageIndex);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "paperColor", requestObj.paperColor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "pixelFormat", requestObj.pixelFormat);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "resolution", requestObj.resolution);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "scale", requestObj.scale);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "tiffCompression", requestObj.tiffCompression);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "dmlRenderingMode", requestObj.dmlRenderingMode);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "dmlEffectsRenderingMode", requestObj.dmlEffectsRenderingMode);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "tiffBinarizationMethod", requestObj.tiffBinarizationMethod);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "zipOutput", requestObj.zipOutput);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsLocation", requestObj.fontsLocation);

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.saveOptions, requestObj.saveOptions.constructor.name === "Object" ? "importedTiffSaveOptionsData.TiffSaveOptionsData" : requestObj.saveOptions.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "SaveResponse");
        const result: model.WordsIncomingMessage< model.SaveResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Converts a document in cloud storage to TIFF format using detailed conversion settings.
     * @param requestObj contains request parameters
     */
    public async saveAsTiffOnline(requestObj: model.SaveAsTiffOnlineRequest): Promise< model.WordsIncomingMessage< SaveAsTiffOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling saveAsTiffOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/saveAs/tiff"
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling saveAsTiffOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling saveAsTiffOnline.');
        }

        // verify required parameter 'requestObj.saveOptions' is not undefined
        if (requestObj.saveOptions === undefined) {
            throw new Error('Required parameter "requestObj.saveOptions" was undefined when calling saveAsTiffOnline.');
        }

        // verify required parameter 'requestObj.saveOptions' is not null
        if (requestObj.saveOptions === null) {
            throw new Error('Required parameter "requestObj.saveOptions" was null when calling saveAsTiffOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "useAntiAliasing", requestObj.useAntiAliasing);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "useHighQualityRendering", requestObj.useHighQualityRendering);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "imageBrightness", requestObj.imageBrightness);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "imageColorMode", requestObj.imageColorMode);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "imageContrast", requestObj.imageContrast);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "numeralFormat", requestObj.numeralFormat);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "pageCount", requestObj.pageCount);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "pageIndex", requestObj.pageIndex);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "paperColor", requestObj.paperColor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "pixelFormat", requestObj.pixelFormat);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "resolution", requestObj.resolution);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "scale", requestObj.scale);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "tiffCompression", requestObj.tiffCompression);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "dmlRenderingMode", requestObj.dmlRenderingMode);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "dmlEffectsRenderingMode", requestObj.dmlEffectsRenderingMode);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "tiffBinarizationMethod", requestObj.tiffBinarizationMethod);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "zipOutput", requestObj.zipOutput);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsLocation", requestObj.fontsLocation);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }
        if (requestObj.saveOptions !== undefined) {
            formParams.SaveOptions = JSON.stringify(requestObj.saveOptions);
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "SaveAsTiffOnlineResponse");
        const result: model.WordsIncomingMessage< model.SaveAsTiffOnlineResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Searches text, specified by the regular expression, in the document.
     * @param requestObj contains request parameters
     */
    public async search(requestObj: model.SearchRequest): Promise< model.WordsIncomingMessage< model.SearchResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling search.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/search"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling search.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling search.');
        }

        // verify required parameter 'requestObj.pattern' is not undefined
        if (requestObj.pattern === undefined) {
            throw new Error('Required parameter "requestObj.pattern" was undefined when calling search.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "pattern", requestObj.pattern);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "SearchResponse");
        const result: model.WordsIncomingMessage< model.SearchResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Searches text, specified by the regular expression, in the document.
     * @param requestObj contains request parameters
     */
    public async searchOnline(requestObj: model.SearchOnlineRequest): Promise< model.WordsIncomingMessage< model.SearchResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling searchOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/get/search"
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling searchOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling searchOnline.');
        }

        // verify required parameter 'requestObj.pattern' is not undefined
        if (requestObj.pattern === undefined) {
            throw new Error('Required parameter "requestObj.pattern" was undefined when calling searchOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "pattern", requestObj.pattern);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "SearchResponse");
        const result: model.WordsIncomingMessage< model.SearchResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Splits a document into parts and saves them in the specified format.
     * @param requestObj contains request parameters
     */
    public async splitDocument(requestObj: model.SplitDocumentRequest): Promise< model.WordsIncomingMessage< model.SplitDocumentResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling splitDocument.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/split"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling splitDocument.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling splitDocument.');
        }

        // verify required parameter 'requestObj.format' is not undefined
        if (requestObj.format === undefined) {
            throw new Error('Required parameter "requestObj.format" was undefined when calling splitDocument.');
        }

        // verify required parameter 'requestObj.format' is not null
        if (requestObj.format === null) {
            throw new Error('Required parameter "requestObj.format" was null when calling splitDocument.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "format", requestObj.format);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "from", requestObj.from);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "to", requestObj.to);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "zipOutput", requestObj.zipOutput);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsLocation", requestObj.fontsLocation);

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "SplitDocumentResponse");
        const result: model.WordsIncomingMessage< model.SplitDocumentResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Splits a document into parts and saves them in the specified format.
     * @param requestObj contains request parameters
     */
    public async splitDocumentOnline(requestObj: model.SplitDocumentOnlineRequest): Promise< model.WordsIncomingMessage< SplitDocumentOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling splitDocumentOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/split"
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling splitDocumentOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling splitDocumentOnline.');
        }

        // verify required parameter 'requestObj.format' is not undefined
        if (requestObj.format === undefined) {
            throw new Error('Required parameter "requestObj.format" was undefined when calling splitDocumentOnline.');
        }

        // verify required parameter 'requestObj.format' is not null
        if (requestObj.format === null) {
            throw new Error('Required parameter "requestObj.format" was null when calling splitDocumentOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "format", requestObj.format);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "from", requestObj.from);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "to", requestObj.to);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "zipOutput", requestObj.zipOutput);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsLocation", requestObj.fontsLocation);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "SplitDocumentOnlineResponse");
        const result: model.WordsIncomingMessage< model.SplitDocumentOnlineResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Removes protection from the document.
     * @param requestObj contains request parameters
     */
    public async unprotectDocument(requestObj: model.UnprotectDocumentRequest): Promise< model.WordsIncomingMessage< model.ProtectionDataResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling unprotectDocument.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/protection"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling unprotectDocument.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling unprotectDocument.');
        }

        // verify required parameter 'requestObj.protectionRequest' is not undefined
        if (requestObj.protectionRequest === undefined) {
            throw new Error('Required parameter "requestObj.protectionRequest" was undefined when calling unprotectDocument.');
        }

        // verify required parameter 'requestObj.protectionRequest' is not null
        if (requestObj.protectionRequest === null) {
            throw new Error('Required parameter "requestObj.protectionRequest" was null when calling unprotectDocument.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);

        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.protectionRequest, requestObj.protectionRequest.constructor.name === "Object" ? "importedProtectionRequest.ProtectionRequest" : requestObj.protectionRequest.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "ProtectionDataResponse");
        const result: model.WordsIncomingMessage< model.ProtectionDataResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Removes protection from the document.
     * @param requestObj contains request parameters
     */
    public async unprotectDocumentOnline(requestObj: model.UnprotectDocumentOnlineRequest): Promise< model.WordsIncomingMessage< UnprotectDocumentOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling unprotectDocumentOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/protection"
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling unprotectDocumentOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling unprotectDocumentOnline.');
        }

        // verify required parameter 'requestObj.protectionRequest' is not undefined
        if (requestObj.protectionRequest === undefined) {
            throw new Error('Required parameter "requestObj.protectionRequest" was undefined when calling unprotectDocumentOnline.');
        }

        // verify required parameter 'requestObj.protectionRequest' is not null
        if (requestObj.protectionRequest === null) {
            throw new Error('Required parameter "requestObj.protectionRequest" was null when calling unprotectDocumentOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }
        if (requestObj.protectionRequest !== undefined) {
            formParams.ProtectionRequest = JSON.stringify(requestObj.protectionRequest);
        }

        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "UnprotectDocumentOnlineResponse");
        const result: model.WordsIncomingMessage< model.UnprotectDocumentOnlineResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Updates a bookmark in the document.
     * @param requestObj contains request parameters
     */
    public async updateBookmark(requestObj: model.UpdateBookmarkRequest): Promise< model.WordsIncomingMessage< model.BookmarkResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateBookmark.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/bookmarks/{bookmarkName}"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "bookmarkName" + "}", (requestObj.bookmarkName !== null && requestObj.bookmarkName !== undefined) ? "/" + String(requestObj.bookmarkName) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling updateBookmark.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling updateBookmark.');
        }

        // verify required parameter 'requestObj.bookmarkName' is not undefined
        if (requestObj.bookmarkName === undefined) {
            throw new Error('Required parameter "requestObj.bookmarkName" was undefined when calling updateBookmark.');
        }

        // verify required parameter 'requestObj.bookmarkName' is not null
        if (requestObj.bookmarkName === null) {
            throw new Error('Required parameter "requestObj.bookmarkName" was null when calling updateBookmark.');
        }

        // verify required parameter 'requestObj.bookmarkData' is not undefined
        if (requestObj.bookmarkData === undefined) {
            throw new Error('Required parameter "requestObj.bookmarkData" was undefined when calling updateBookmark.');
        }

        // verify required parameter 'requestObj.bookmarkData' is not null
        if (requestObj.bookmarkData === null) {
            throw new Error('Required parameter "requestObj.bookmarkData" was null when calling updateBookmark.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.bookmarkData, requestObj.bookmarkData.constructor.name === "Object" ? "importedBookmarkData.BookmarkData" : requestObj.bookmarkData.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "BookmarkResponse");
        const result: model.WordsIncomingMessage< model.BookmarkResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Updates a bookmark in the document.
     * @param requestObj contains request parameters
     */
    public async updateBookmarkOnline(requestObj: model.UpdateBookmarkOnlineRequest): Promise< model.WordsIncomingMessage< UpdateBookmarkOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateBookmarkOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/bookmarks/{bookmarkName}"
            .replace("/{" + "bookmarkName" + "}", (requestObj.bookmarkName !== null && requestObj.bookmarkName !== undefined) ? "/" + String(requestObj.bookmarkName) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling updateBookmarkOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling updateBookmarkOnline.');
        }

        // verify required parameter 'requestObj.bookmarkName' is not undefined
        if (requestObj.bookmarkName === undefined) {
            throw new Error('Required parameter "requestObj.bookmarkName" was undefined when calling updateBookmarkOnline.');
        }

        // verify required parameter 'requestObj.bookmarkName' is not null
        if (requestObj.bookmarkName === null) {
            throw new Error('Required parameter "requestObj.bookmarkName" was null when calling updateBookmarkOnline.');
        }

        // verify required parameter 'requestObj.bookmarkData' is not undefined
        if (requestObj.bookmarkData === undefined) {
            throw new Error('Required parameter "requestObj.bookmarkData" was undefined when calling updateBookmarkOnline.');
        }

        // verify required parameter 'requestObj.bookmarkData' is not null
        if (requestObj.bookmarkData === null) {
            throw new Error('Required parameter "requestObj.bookmarkData" was null when calling updateBookmarkOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }
        if (requestObj.bookmarkData !== undefined) {
            formParams.BookmarkData = JSON.stringify(requestObj.bookmarkData);
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "UpdateBookmarkOnlineResponse");
        const result: model.WordsIncomingMessage< model.UpdateBookmarkOnlineResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * The 'nodePath' parameter should refer to a paragraph, a cell or a row.
     * @param requestObj contains request parameters
     */
    public async updateBorder(requestObj: model.UpdateBorderRequest): Promise< model.WordsIncomingMessage< model.BorderResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateBorder.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/borders/{borderType}"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "borderType" + "}", (requestObj.borderType !== null && requestObj.borderType !== undefined) ? "/" + String(requestObj.borderType) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling updateBorder.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling updateBorder.');
        }

        // verify required parameter 'requestObj.borderType' is not undefined
        if (requestObj.borderType === undefined) {
            throw new Error('Required parameter "requestObj.borderType" was undefined when calling updateBorder.');
        }

        // verify required parameter 'requestObj.borderType' is not null
        if (requestObj.borderType === null) {
            throw new Error('Required parameter "requestObj.borderType" was null when calling updateBorder.');
        }

        // verify required parameter 'requestObj.borderProperties' is not undefined
        if (requestObj.borderProperties === undefined) {
            throw new Error('Required parameter "requestObj.borderProperties" was undefined when calling updateBorder.');
        }

        // verify required parameter 'requestObj.borderProperties' is not null
        if (requestObj.borderProperties === null) {
            throw new Error('Required parameter "requestObj.borderProperties" was null when calling updateBorder.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.borderProperties, requestObj.borderProperties.constructor.name === "Object" ? "importedBorder.Border" : requestObj.borderProperties.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "BorderResponse");
        const result: model.WordsIncomingMessage< model.BorderResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Updates a border in the document node.
     * @param requestObj contains request parameters
     */
    public async updateBorderOnline(requestObj: model.UpdateBorderOnlineRequest): Promise< model.WordsIncomingMessage< UpdateBorderOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateBorderOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/{nodePath}/borders/{borderType}"
            .replace("/{" + "borderType" + "}", (requestObj.borderType !== null && requestObj.borderType !== undefined) ? "/" + String(requestObj.borderType) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling updateBorderOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling updateBorderOnline.');
        }

        // verify required parameter 'requestObj.borderProperties' is not undefined
        if (requestObj.borderProperties === undefined) {
            throw new Error('Required parameter "requestObj.borderProperties" was undefined when calling updateBorderOnline.');
        }

        // verify required parameter 'requestObj.borderProperties' is not null
        if (requestObj.borderProperties === null) {
            throw new Error('Required parameter "requestObj.borderProperties" was null when calling updateBorderOnline.');
        }

        // verify required parameter 'requestObj.borderType' is not undefined
        if (requestObj.borderType === undefined) {
            throw new Error('Required parameter "requestObj.borderType" was undefined when calling updateBorderOnline.');
        }

        // verify required parameter 'requestObj.borderType' is not null
        if (requestObj.borderType === null) {
            throw new Error('Required parameter "requestObj.borderType" was null when calling updateBorderOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }
        if (requestObj.borderProperties !== undefined) {
            formParams.BorderProperties = JSON.stringify(requestObj.borderProperties);
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "UpdateBorderOnlineResponse");
        const result: model.WordsIncomingMessage< model.UpdateBorderOnlineResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Updates a comment in the document.
     * @param requestObj contains request parameters
     */
    public async updateComment(requestObj: model.UpdateCommentRequest): Promise< model.WordsIncomingMessage< model.CommentResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateComment.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/comments/{commentIndex}"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "commentIndex" + "}", (requestObj.commentIndex !== null && requestObj.commentIndex !== undefined) ? "/" + String(requestObj.commentIndex) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling updateComment.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling updateComment.');
        }

        // verify required parameter 'requestObj.commentIndex' is not undefined
        if (requestObj.commentIndex === undefined) {
            throw new Error('Required parameter "requestObj.commentIndex" was undefined when calling updateComment.');
        }

        // verify required parameter 'requestObj.commentIndex' is not null
        if (requestObj.commentIndex === null) {
            throw new Error('Required parameter "requestObj.commentIndex" was null when calling updateComment.');
        }

        // verify required parameter 'requestObj.comment' is not undefined
        if (requestObj.comment === undefined) {
            throw new Error('Required parameter "requestObj.comment" was undefined when calling updateComment.');
        }

        // verify required parameter 'requestObj.comment' is not null
        if (requestObj.comment === null) {
            throw new Error('Required parameter "requestObj.comment" was null when calling updateComment.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.comment, requestObj.comment.constructor.name === "Object" ? "importedCommentUpdate.CommentUpdate" : requestObj.comment.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "CommentResponse");
        const result: model.WordsIncomingMessage< model.CommentResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Updates a comment in the document.
     * @param requestObj contains request parameters
     */
    public async updateCommentOnline(requestObj: model.UpdateCommentOnlineRequest): Promise< model.WordsIncomingMessage< UpdateCommentOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateCommentOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/comments/{commentIndex}"
            .replace("/{" + "commentIndex" + "}", (requestObj.commentIndex !== null && requestObj.commentIndex !== undefined) ? "/" + String(requestObj.commentIndex) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling updateCommentOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling updateCommentOnline.');
        }

        // verify required parameter 'requestObj.commentIndex' is not undefined
        if (requestObj.commentIndex === undefined) {
            throw new Error('Required parameter "requestObj.commentIndex" was undefined when calling updateCommentOnline.');
        }

        // verify required parameter 'requestObj.commentIndex' is not null
        if (requestObj.commentIndex === null) {
            throw new Error('Required parameter "requestObj.commentIndex" was null when calling updateCommentOnline.');
        }

        // verify required parameter 'requestObj.comment' is not undefined
        if (requestObj.comment === undefined) {
            throw new Error('Required parameter "requestObj.comment" was undefined when calling updateCommentOnline.');
        }

        // verify required parameter 'requestObj.comment' is not null
        if (requestObj.comment === null) {
            throw new Error('Required parameter "requestObj.comment" was null when calling updateCommentOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }
        if (requestObj.comment !== undefined) {
            formParams.Comment = JSON.stringify(requestObj.comment);
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "UpdateCommentOnlineResponse");
        const result: model.WordsIncomingMessage< model.UpdateCommentOnlineResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Updates a DrawingObject in the document node.
     * @param requestObj contains request parameters
     */
    public async updateDrawingObject(requestObj: model.UpdateDrawingObjectRequest): Promise< model.WordsIncomingMessage< model.DrawingObjectResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateDrawingObject.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/drawingObjects/{index}"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling updateDrawingObject.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling updateDrawingObject.');
        }

        // verify required parameter 'requestObj.drawingObject' is not undefined
        if (requestObj.drawingObject === undefined) {
            throw new Error('Required parameter "requestObj.drawingObject" was undefined when calling updateDrawingObject.');
        }

        // verify required parameter 'requestObj.drawingObject' is not null
        if (requestObj.drawingObject === null) {
            throw new Error('Required parameter "requestObj.drawingObject" was null when calling updateDrawingObject.');
        }

        // verify required parameter 'requestObj.imageFile' is not undefined
        if (requestObj.imageFile === undefined) {
            throw new Error('Required parameter "requestObj.imageFile" was undefined when calling updateDrawingObject.');
        }

        // verify required parameter 'requestObj.imageFile' is not null
        if (requestObj.imageFile === null) {
            throw new Error('Required parameter "requestObj.imageFile" was null when calling updateDrawingObject.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling updateDrawingObject.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling updateDrawingObject.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
        if (requestObj.drawingObject !== undefined) {
            formParams.DrawingObject = JSON.stringify(requestObj.drawingObject);
        }
        if (requestObj.imageFile !== undefined) {
            formParams.ImageFile = requestObj.imageFile;
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "DrawingObjectResponse");
        const result: model.WordsIncomingMessage< model.DrawingObjectResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Updates a DrawingObject in the document node.
     * @param requestObj contains request parameters
     */
    public async updateDrawingObjectOnline(requestObj: model.UpdateDrawingObjectOnlineRequest): Promise< model.WordsIncomingMessage< UpdateDrawingObjectOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateDrawingObjectOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/{nodePath}/drawingObjects/{index}"
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling updateDrawingObjectOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling updateDrawingObjectOnline.');
        }

        // verify required parameter 'requestObj.drawingObject' is not undefined
        if (requestObj.drawingObject === undefined) {
            throw new Error('Required parameter "requestObj.drawingObject" was undefined when calling updateDrawingObjectOnline.');
        }

        // verify required parameter 'requestObj.drawingObject' is not null
        if (requestObj.drawingObject === null) {
            throw new Error('Required parameter "requestObj.drawingObject" was null when calling updateDrawingObjectOnline.');
        }

        // verify required parameter 'requestObj.imageFile' is not undefined
        if (requestObj.imageFile === undefined) {
            throw new Error('Required parameter "requestObj.imageFile" was undefined when calling updateDrawingObjectOnline.');
        }

        // verify required parameter 'requestObj.imageFile' is not null
        if (requestObj.imageFile === null) {
            throw new Error('Required parameter "requestObj.imageFile" was null when calling updateDrawingObjectOnline.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling updateDrawingObjectOnline.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling updateDrawingObjectOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }
        if (requestObj.drawingObject !== undefined) {
            formParams.DrawingObject = JSON.stringify(requestObj.drawingObject);
        }
        if (requestObj.imageFile !== undefined) {
            formParams.ImageFile = requestObj.imageFile;
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "UpdateDrawingObjectOnlineResponse");
        const result: model.WordsIncomingMessage< model.UpdateDrawingObjectOnlineResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Updates a field in the document node.
     * @param requestObj contains request parameters
     */
    public async updateField(requestObj: model.UpdateFieldRequest): Promise< model.WordsIncomingMessage< model.FieldResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateField.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/fields/{index}"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling updateField.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling updateField.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling updateField.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling updateField.');
        }

        // verify required parameter 'requestObj.field' is not undefined
        if (requestObj.field === undefined) {
            throw new Error('Required parameter "requestObj.field" was undefined when calling updateField.');
        }

        // verify required parameter 'requestObj.field' is not null
        if (requestObj.field === null) {
            throw new Error('Required parameter "requestObj.field" was null when calling updateField.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.field, requestObj.field.constructor.name === "Object" ? "importedFieldUpdate.FieldUpdate" : requestObj.field.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "FieldResponse");
        const result: model.WordsIncomingMessage< model.FieldResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Updates a field in the document node.
     * @param requestObj contains request parameters
     */
    public async updateFieldOnline(requestObj: model.UpdateFieldOnlineRequest): Promise< model.WordsIncomingMessage< UpdateFieldOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateFieldOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/{nodePath}/fields/{index}"
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling updateFieldOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling updateFieldOnline.');
        }

        // verify required parameter 'requestObj.field' is not undefined
        if (requestObj.field === undefined) {
            throw new Error('Required parameter "requestObj.field" was undefined when calling updateFieldOnline.');
        }

        // verify required parameter 'requestObj.field' is not null
        if (requestObj.field === null) {
            throw new Error('Required parameter "requestObj.field" was null when calling updateFieldOnline.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling updateFieldOnline.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling updateFieldOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }
        if (requestObj.field !== undefined) {
            formParams.Field = JSON.stringify(requestObj.field);
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "UpdateFieldOnlineResponse");
        const result: model.WordsIncomingMessage< model.UpdateFieldOnlineResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reevaluates field values in the document.
     * @param requestObj contains request parameters
     */
    public async updateFields(requestObj: model.UpdateFieldsRequest): Promise< model.WordsIncomingMessage< model.DocumentResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateFields.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/updateFields"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling updateFields.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling updateFields.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "DocumentResponse");
        const result: model.WordsIncomingMessage< model.DocumentResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reevaluates field values in the document.
     * @param requestObj contains request parameters
     */
    public async updateFieldsOnline(requestObj: model.UpdateFieldsOnlineRequest): Promise< model.WordsIncomingMessage< UpdateFieldsOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateFieldsOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/updateFields"
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling updateFieldsOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling updateFieldsOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "UpdateFieldsOnlineResponse");
        const result: model.WordsIncomingMessage< model.UpdateFieldsOnlineResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Updates a footnote in the document node.
     * @param requestObj contains request parameters
     */
    public async updateFootnote(requestObj: model.UpdateFootnoteRequest): Promise< model.WordsIncomingMessage< model.FootnoteResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateFootnote.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/footnotes/{index}"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling updateFootnote.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling updateFootnote.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling updateFootnote.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling updateFootnote.');
        }

        // verify required parameter 'requestObj.footnoteDto' is not undefined
        if (requestObj.footnoteDto === undefined) {
            throw new Error('Required parameter "requestObj.footnoteDto" was undefined when calling updateFootnote.');
        }

        // verify required parameter 'requestObj.footnoteDto' is not null
        if (requestObj.footnoteDto === null) {
            throw new Error('Required parameter "requestObj.footnoteDto" was null when calling updateFootnote.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.footnoteDto, requestObj.footnoteDto.constructor.name === "Object" ? "importedFootnoteUpdate.FootnoteUpdate" : requestObj.footnoteDto.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "FootnoteResponse");
        const result: model.WordsIncomingMessage< model.FootnoteResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Updates a footnote in the document node.
     * @param requestObj contains request parameters
     */
    public async updateFootnoteOnline(requestObj: model.UpdateFootnoteOnlineRequest): Promise< model.WordsIncomingMessage< UpdateFootnoteOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateFootnoteOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/{nodePath}/footnotes/{index}"
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling updateFootnoteOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling updateFootnoteOnline.');
        }

        // verify required parameter 'requestObj.footnoteDto' is not undefined
        if (requestObj.footnoteDto === undefined) {
            throw new Error('Required parameter "requestObj.footnoteDto" was undefined when calling updateFootnoteOnline.');
        }

        // verify required parameter 'requestObj.footnoteDto' is not null
        if (requestObj.footnoteDto === null) {
            throw new Error('Required parameter "requestObj.footnoteDto" was null when calling updateFootnoteOnline.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling updateFootnoteOnline.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling updateFootnoteOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }
        if (requestObj.footnoteDto !== undefined) {
            formParams.FootnoteDto = JSON.stringify(requestObj.footnoteDto);
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "UpdateFootnoteOnlineResponse");
        const result: model.WordsIncomingMessage< model.UpdateFootnoteOnlineResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Updates a form field in the document node.
     * @param requestObj contains request parameters
     */
    public async updateFormField(requestObj: model.UpdateFormFieldRequest): Promise< model.WordsIncomingMessage< model.FormFieldResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateFormField.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/formfields/{index}"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling updateFormField.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling updateFormField.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling updateFormField.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling updateFormField.');
        }

        // verify required parameter 'requestObj.formField' is not undefined
        if (requestObj.formField === undefined) {
            throw new Error('Required parameter "requestObj.formField" was undefined when calling updateFormField.');
        }

        // verify required parameter 'requestObj.formField' is not null
        if (requestObj.formField === null) {
            throw new Error('Required parameter "requestObj.formField" was null when calling updateFormField.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.formField, requestObj.formField.constructor.name === "Object" ? "importedFormField.FormField" : requestObj.formField.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "FormFieldResponse");
        const result: model.WordsIncomingMessage< model.FormFieldResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Updates a form field in the document node.
     * @param requestObj contains request parameters
     */
    public async updateFormFieldOnline(requestObj: model.UpdateFormFieldOnlineRequest): Promise< model.WordsIncomingMessage< UpdateFormFieldOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateFormFieldOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/{nodePath}/formfields/{index}"
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling updateFormFieldOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling updateFormFieldOnline.');
        }

        // verify required parameter 'requestObj.formField' is not undefined
        if (requestObj.formField === undefined) {
            throw new Error('Required parameter "requestObj.formField" was undefined when calling updateFormFieldOnline.');
        }

        // verify required parameter 'requestObj.formField' is not null
        if (requestObj.formField === null) {
            throw new Error('Required parameter "requestObj.formField" was null when calling updateFormFieldOnline.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling updateFormFieldOnline.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling updateFormFieldOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }
        if (requestObj.formField !== undefined) {
            formParams.FormField = JSON.stringify(requestObj.formField);
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "UpdateFormFieldOnlineResponse");
        const result: model.WordsIncomingMessage< model.UpdateFormFieldOnlineResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Updates a list in the document.
     * @param requestObj contains request parameters
     */
    public async updateList(requestObj: model.UpdateListRequest): Promise< model.WordsIncomingMessage< model.ListResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateList.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/lists/{listId}"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "listId" + "}", (requestObj.listId !== null && requestObj.listId !== undefined) ? "/" + String(requestObj.listId) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling updateList.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling updateList.');
        }

        // verify required parameter 'requestObj.listId' is not undefined
        if (requestObj.listId === undefined) {
            throw new Error('Required parameter "requestObj.listId" was undefined when calling updateList.');
        }

        // verify required parameter 'requestObj.listId' is not null
        if (requestObj.listId === null) {
            throw new Error('Required parameter "requestObj.listId" was null when calling updateList.');
        }

        // verify required parameter 'requestObj.listUpdate' is not undefined
        if (requestObj.listUpdate === undefined) {
            throw new Error('Required parameter "requestObj.listUpdate" was undefined when calling updateList.');
        }

        // verify required parameter 'requestObj.listUpdate' is not null
        if (requestObj.listUpdate === null) {
            throw new Error('Required parameter "requestObj.listUpdate" was null when calling updateList.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.listUpdate, requestObj.listUpdate.constructor.name === "Object" ? "importedListUpdate.ListUpdate" : requestObj.listUpdate.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "ListResponse");
        const result: model.WordsIncomingMessage< model.ListResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Updates the level of a List element in the document.
     * @param requestObj contains request parameters
     */
    public async updateListLevel(requestObj: model.UpdateListLevelRequest): Promise< model.WordsIncomingMessage< model.ListResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateListLevel.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/lists/{listId}/listLevels/{listLevel}"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "listId" + "}", (requestObj.listId !== null && requestObj.listId !== undefined) ? "/" + String(requestObj.listId) : "")
            .replace("/{" + "listLevel" + "}", (requestObj.listLevel !== null && requestObj.listLevel !== undefined) ? "/" + String(requestObj.listLevel) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling updateListLevel.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling updateListLevel.');
        }

        // verify required parameter 'requestObj.listId' is not undefined
        if (requestObj.listId === undefined) {
            throw new Error('Required parameter "requestObj.listId" was undefined when calling updateListLevel.');
        }

        // verify required parameter 'requestObj.listId' is not null
        if (requestObj.listId === null) {
            throw new Error('Required parameter "requestObj.listId" was null when calling updateListLevel.');
        }

        // verify required parameter 'requestObj.listLevel' is not undefined
        if (requestObj.listLevel === undefined) {
            throw new Error('Required parameter "requestObj.listLevel" was undefined when calling updateListLevel.');
        }

        // verify required parameter 'requestObj.listLevel' is not null
        if (requestObj.listLevel === null) {
            throw new Error('Required parameter "requestObj.listLevel" was null when calling updateListLevel.');
        }

        // verify required parameter 'requestObj.listUpdate' is not undefined
        if (requestObj.listUpdate === undefined) {
            throw new Error('Required parameter "requestObj.listUpdate" was undefined when calling updateListLevel.');
        }

        // verify required parameter 'requestObj.listUpdate' is not null
        if (requestObj.listUpdate === null) {
            throw new Error('Required parameter "requestObj.listUpdate" was null when calling updateListLevel.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.listUpdate, requestObj.listUpdate.constructor.name === "Object" ? "importedListLevelUpdate.ListLevelUpdate" : requestObj.listUpdate.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "ListResponse");
        const result: model.WordsIncomingMessage< model.ListResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Updates the level of a List element in the document.
     * @param requestObj contains request parameters
     */
    public async updateListLevelOnline(requestObj: model.UpdateListLevelOnlineRequest): Promise< model.WordsIncomingMessage< UpdateListLevelOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateListLevelOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/lists/{listId}/listLevels/{listLevel}"
            .replace("/{" + "listId" + "}", (requestObj.listId !== null && requestObj.listId !== undefined) ? "/" + String(requestObj.listId) : "")
            .replace("/{" + "listLevel" + "}", (requestObj.listLevel !== null && requestObj.listLevel !== undefined) ? "/" + String(requestObj.listLevel) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling updateListLevelOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling updateListLevelOnline.');
        }

        // verify required parameter 'requestObj.listId' is not undefined
        if (requestObj.listId === undefined) {
            throw new Error('Required parameter "requestObj.listId" was undefined when calling updateListLevelOnline.');
        }

        // verify required parameter 'requestObj.listId' is not null
        if (requestObj.listId === null) {
            throw new Error('Required parameter "requestObj.listId" was null when calling updateListLevelOnline.');
        }

        // verify required parameter 'requestObj.listUpdate' is not undefined
        if (requestObj.listUpdate === undefined) {
            throw new Error('Required parameter "requestObj.listUpdate" was undefined when calling updateListLevelOnline.');
        }

        // verify required parameter 'requestObj.listUpdate' is not null
        if (requestObj.listUpdate === null) {
            throw new Error('Required parameter "requestObj.listUpdate" was null when calling updateListLevelOnline.');
        }

        // verify required parameter 'requestObj.listLevel' is not undefined
        if (requestObj.listLevel === undefined) {
            throw new Error('Required parameter "requestObj.listLevel" was undefined when calling updateListLevelOnline.');
        }

        // verify required parameter 'requestObj.listLevel' is not null
        if (requestObj.listLevel === null) {
            throw new Error('Required parameter "requestObj.listLevel" was null when calling updateListLevelOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }
        if (requestObj.listUpdate !== undefined) {
            formParams.ListUpdate = JSON.stringify(requestObj.listUpdate);
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "UpdateListLevelOnlineResponse");
        const result: model.WordsIncomingMessage< model.UpdateListLevelOnlineResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Updates a list in the document.
     * @param requestObj contains request parameters
     */
    public async updateListOnline(requestObj: model.UpdateListOnlineRequest): Promise< model.WordsIncomingMessage< UpdateListOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateListOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/lists/{listId}"
            .replace("/{" + "listId" + "}", (requestObj.listId !== null && requestObj.listId !== undefined) ? "/" + String(requestObj.listId) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling updateListOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling updateListOnline.');
        }

        // verify required parameter 'requestObj.listId' is not undefined
        if (requestObj.listId === undefined) {
            throw new Error('Required parameter "requestObj.listId" was undefined when calling updateListOnline.');
        }

        // verify required parameter 'requestObj.listId' is not null
        if (requestObj.listId === null) {
            throw new Error('Required parameter "requestObj.listId" was null when calling updateListOnline.');
        }

        // verify required parameter 'requestObj.listUpdate' is not undefined
        if (requestObj.listUpdate === undefined) {
            throw new Error('Required parameter "requestObj.listUpdate" was undefined when calling updateListOnline.');
        }

        // verify required parameter 'requestObj.listUpdate' is not null
        if (requestObj.listUpdate === null) {
            throw new Error('Required parameter "requestObj.listUpdate" was null when calling updateListOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }
        if (requestObj.listUpdate !== undefined) {
            formParams.ListUpdate = JSON.stringify(requestObj.listUpdate);
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "UpdateListOnlineResponse");
        const result: model.WordsIncomingMessage< model.UpdateListOnlineResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Updates the formatting properties of a paragraph in the document node.
     * @param requestObj contains request parameters
     */
    public async updateParagraphFormat(requestObj: model.UpdateParagraphFormatRequest): Promise< model.WordsIncomingMessage< model.ParagraphFormatResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateParagraphFormat.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/paragraphs/{index}/format"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling updateParagraphFormat.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling updateParagraphFormat.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling updateParagraphFormat.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling updateParagraphFormat.');
        }

        // verify required parameter 'requestObj.paragraphFormatDto' is not undefined
        if (requestObj.paragraphFormatDto === undefined) {
            throw new Error('Required parameter "requestObj.paragraphFormatDto" was undefined when calling updateParagraphFormat.');
        }

        // verify required parameter 'requestObj.paragraphFormatDto' is not null
        if (requestObj.paragraphFormatDto === null) {
            throw new Error('Required parameter "requestObj.paragraphFormatDto" was null when calling updateParagraphFormat.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.paragraphFormatDto, requestObj.paragraphFormatDto.constructor.name === "Object" ? "importedParagraphFormatUpdate.ParagraphFormatUpdate" : requestObj.paragraphFormatDto.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "ParagraphFormatResponse");
        const result: model.WordsIncomingMessage< model.ParagraphFormatResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Updates the formatting properties of a paragraph in the document node.
     * @param requestObj contains request parameters
     */
    public async updateParagraphFormatOnline(requestObj: model.UpdateParagraphFormatOnlineRequest): Promise< model.WordsIncomingMessage< UpdateParagraphFormatOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateParagraphFormatOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "words//online/{nodePath}/paragraphs/{index}/format"
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling updateParagraphFormatOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling updateParagraphFormatOnline.');
        }

        // verify required parameter 'requestObj.paragraphFormatDto' is not undefined
        if (requestObj.paragraphFormatDto === undefined) {
            throw new Error('Required parameter "requestObj.paragraphFormatDto" was undefined when calling updateParagraphFormatOnline.');
        }

        // verify required parameter 'requestObj.paragraphFormatDto' is not null
        if (requestObj.paragraphFormatDto === null) {
            throw new Error('Required parameter "requestObj.paragraphFormatDto" was null when calling updateParagraphFormatOnline.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling updateParagraphFormatOnline.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling updateParagraphFormatOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }
        if (requestObj.paragraphFormatDto !== undefined) {
            formParams.ParagraphFormatDto = JSON.stringify(requestObj.paragraphFormatDto);
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "UpdateParagraphFormatOnlineResponse");
        const result: model.WordsIncomingMessage< model.UpdateParagraphFormatOnlineResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Updates the formatting properties of a paragraph list in the document node.
     * @param requestObj contains request parameters
     */
    public async updateParagraphListFormat(requestObj: model.UpdateParagraphListFormatRequest): Promise< model.WordsIncomingMessage< model.ParagraphListFormatResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateParagraphListFormat.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/paragraphs/{index}/listFormat"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling updateParagraphListFormat.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling updateParagraphListFormat.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling updateParagraphListFormat.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling updateParagraphListFormat.');
        }

        // verify required parameter 'requestObj.listFormatDto' is not undefined
        if (requestObj.listFormatDto === undefined) {
            throw new Error('Required parameter "requestObj.listFormatDto" was undefined when calling updateParagraphListFormat.');
        }

        // verify required parameter 'requestObj.listFormatDto' is not null
        if (requestObj.listFormatDto === null) {
            throw new Error('Required parameter "requestObj.listFormatDto" was null when calling updateParagraphListFormat.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.listFormatDto, requestObj.listFormatDto.constructor.name === "Object" ? "importedListFormatUpdate.ListFormatUpdate" : requestObj.listFormatDto.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "ParagraphListFormatResponse");
        const result: model.WordsIncomingMessage< model.ParagraphListFormatResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Updates the formatting properties of a paragraph list in the document node.
     * @param requestObj contains request parameters
     */
    public async updateParagraphListFormatOnline(requestObj: model.UpdateParagraphListFormatOnlineRequest): Promise< model.WordsIncomingMessage< UpdateParagraphListFormatOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateParagraphListFormatOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/{nodePath}/paragraphs/{index}/listFormat"
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling updateParagraphListFormatOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling updateParagraphListFormatOnline.');
        }

        // verify required parameter 'requestObj.listFormatDto' is not undefined
        if (requestObj.listFormatDto === undefined) {
            throw new Error('Required parameter "requestObj.listFormatDto" was undefined when calling updateParagraphListFormatOnline.');
        }

        // verify required parameter 'requestObj.listFormatDto' is not null
        if (requestObj.listFormatDto === null) {
            throw new Error('Required parameter "requestObj.listFormatDto" was null when calling updateParagraphListFormatOnline.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling updateParagraphListFormatOnline.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling updateParagraphListFormatOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }
        if (requestObj.listFormatDto !== undefined) {
            formParams.ListFormatDto = JSON.stringify(requestObj.listFormatDto);
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "UpdateParagraphListFormatOnlineResponse");
        const result: model.WordsIncomingMessage< model.UpdateParagraphListFormatOnlineResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Updates a Run object in the paragraph.
     * @param requestObj contains request parameters
     */
    public async updateRun(requestObj: model.UpdateRunRequest): Promise< model.WordsIncomingMessage< model.RunResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateRun.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{paragraphPath}/runs/{index}"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "paragraphPath" + "}", (requestObj.paragraphPath !== null && requestObj.paragraphPath !== undefined) ? "/" + String(requestObj.paragraphPath) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling updateRun.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling updateRun.');
        }

        // verify required parameter 'requestObj.paragraphPath' is not undefined
        if (requestObj.paragraphPath === undefined) {
            throw new Error('Required parameter "requestObj.paragraphPath" was undefined when calling updateRun.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling updateRun.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling updateRun.');
        }

        // verify required parameter 'requestObj.run' is not undefined
        if (requestObj.run === undefined) {
            throw new Error('Required parameter "requestObj.run" was undefined when calling updateRun.');
        }

        // verify required parameter 'requestObj.run' is not null
        if (requestObj.run === null) {
            throw new Error('Required parameter "requestObj.run" was null when calling updateRun.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.run, requestObj.run.constructor.name === "Object" ? "importedRunUpdate.RunUpdate" : requestObj.run.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "RunResponse");
        const result: model.WordsIncomingMessage< model.RunResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Updates the font properties of a Run object in the paragraph.
     * @param requestObj contains request parameters
     */
    public async updateRunFont(requestObj: model.UpdateRunFontRequest): Promise< model.WordsIncomingMessage< model.FontResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateRunFont.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{paragraphPath}/runs/{index}/font"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "paragraphPath" + "}", (requestObj.paragraphPath !== null && requestObj.paragraphPath !== undefined) ? "/" + String(requestObj.paragraphPath) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling updateRunFont.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling updateRunFont.');
        }

        // verify required parameter 'requestObj.paragraphPath' is not undefined
        if (requestObj.paragraphPath === undefined) {
            throw new Error('Required parameter "requestObj.paragraphPath" was undefined when calling updateRunFont.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling updateRunFont.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling updateRunFont.');
        }

        // verify required parameter 'requestObj.fontDto' is not undefined
        if (requestObj.fontDto === undefined) {
            throw new Error('Required parameter "requestObj.fontDto" was undefined when calling updateRunFont.');
        }

        // verify required parameter 'requestObj.fontDto' is not null
        if (requestObj.fontDto === null) {
            throw new Error('Required parameter "requestObj.fontDto" was null when calling updateRunFont.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.fontDto, requestObj.fontDto.constructor.name === "Object" ? "importedFont.Font" : requestObj.fontDto.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "FontResponse");
        const result: model.WordsIncomingMessage< model.FontResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Updates the font properties of a Run object in the paragraph.
     * @param requestObj contains request parameters
     */
    public async updateRunFontOnline(requestObj: model.UpdateRunFontOnlineRequest): Promise< model.WordsIncomingMessage< UpdateRunFontOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateRunFontOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/{paragraphPath}/runs/{index}/font"
            .replace("/{" + "paragraphPath" + "}", (requestObj.paragraphPath !== null && requestObj.paragraphPath !== undefined) ? "/" + String(requestObj.paragraphPath) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling updateRunFontOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling updateRunFontOnline.');
        }

        // verify required parameter 'requestObj.paragraphPath' is not undefined
        if (requestObj.paragraphPath === undefined) {
            throw new Error('Required parameter "requestObj.paragraphPath" was undefined when calling updateRunFontOnline.');
        }

        // verify required parameter 'requestObj.fontDto' is not undefined
        if (requestObj.fontDto === undefined) {
            throw new Error('Required parameter "requestObj.fontDto" was undefined when calling updateRunFontOnline.');
        }

        // verify required parameter 'requestObj.fontDto' is not null
        if (requestObj.fontDto === null) {
            throw new Error('Required parameter "requestObj.fontDto" was null when calling updateRunFontOnline.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling updateRunFontOnline.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling updateRunFontOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }
        if (requestObj.fontDto !== undefined) {
            formParams.FontDto = JSON.stringify(requestObj.fontDto);
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "UpdateRunFontOnlineResponse");
        const result: model.WordsIncomingMessage< model.UpdateRunFontOnlineResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Updates a Run object in the paragraph.
     * @param requestObj contains request parameters
     */
    public async updateRunOnline(requestObj: model.UpdateRunOnlineRequest): Promise< model.WordsIncomingMessage< UpdateRunOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateRunOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/{paragraphPath}/runs/{index}"
            .replace("/{" + "paragraphPath" + "}", (requestObj.paragraphPath !== null && requestObj.paragraphPath !== undefined) ? "/" + String(requestObj.paragraphPath) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling updateRunOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling updateRunOnline.');
        }

        // verify required parameter 'requestObj.paragraphPath' is not undefined
        if (requestObj.paragraphPath === undefined) {
            throw new Error('Required parameter "requestObj.paragraphPath" was undefined when calling updateRunOnline.');
        }

        // verify required parameter 'requestObj.run' is not undefined
        if (requestObj.run === undefined) {
            throw new Error('Required parameter "requestObj.run" was undefined when calling updateRunOnline.');
        }

        // verify required parameter 'requestObj.run' is not null
        if (requestObj.run === null) {
            throw new Error('Required parameter "requestObj.run" was null when calling updateRunOnline.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling updateRunOnline.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling updateRunOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }
        if (requestObj.run !== undefined) {
            formParams.Run = JSON.stringify(requestObj.run);
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "UpdateRunOnlineResponse");
        const result: model.WordsIncomingMessage< model.UpdateRunOnlineResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Updates the page setup of a section in the document.
     * @param requestObj contains request parameters
     */
    public async updateSectionPageSetup(requestObj: model.UpdateSectionPageSetupRequest): Promise< model.WordsIncomingMessage< model.SectionPageSetupResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateSectionPageSetup.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/sections/{sectionIndex}/pageSetup"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "sectionIndex" + "}", (requestObj.sectionIndex !== null && requestObj.sectionIndex !== undefined) ? "/" + String(requestObj.sectionIndex) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling updateSectionPageSetup.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling updateSectionPageSetup.');
        }

        // verify required parameter 'requestObj.sectionIndex' is not undefined
        if (requestObj.sectionIndex === undefined) {
            throw new Error('Required parameter "requestObj.sectionIndex" was undefined when calling updateSectionPageSetup.');
        }

        // verify required parameter 'requestObj.sectionIndex' is not null
        if (requestObj.sectionIndex === null) {
            throw new Error('Required parameter "requestObj.sectionIndex" was null when calling updateSectionPageSetup.');
        }

        // verify required parameter 'requestObj.pageSetup' is not undefined
        if (requestObj.pageSetup === undefined) {
            throw new Error('Required parameter "requestObj.pageSetup" was undefined when calling updateSectionPageSetup.');
        }

        // verify required parameter 'requestObj.pageSetup' is not null
        if (requestObj.pageSetup === null) {
            throw new Error('Required parameter "requestObj.pageSetup" was null when calling updateSectionPageSetup.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.pageSetup, requestObj.pageSetup.constructor.name === "Object" ? "importedPageSetup.PageSetup" : requestObj.pageSetup.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "SectionPageSetupResponse");
        const result: model.WordsIncomingMessage< model.SectionPageSetupResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Updates the page setup of a section in the document.
     * @param requestObj contains request parameters
     */
    public async updateSectionPageSetupOnline(requestObj: model.UpdateSectionPageSetupOnlineRequest): Promise< model.WordsIncomingMessage< UpdateSectionPageSetupOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateSectionPageSetupOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/sections/{sectionIndex}/pageSetup"
            .replace("/{" + "sectionIndex" + "}", (requestObj.sectionIndex !== null && requestObj.sectionIndex !== undefined) ? "/" + String(requestObj.sectionIndex) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling updateSectionPageSetupOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling updateSectionPageSetupOnline.');
        }

        // verify required parameter 'requestObj.sectionIndex' is not undefined
        if (requestObj.sectionIndex === undefined) {
            throw new Error('Required parameter "requestObj.sectionIndex" was undefined when calling updateSectionPageSetupOnline.');
        }

        // verify required parameter 'requestObj.sectionIndex' is not null
        if (requestObj.sectionIndex === null) {
            throw new Error('Required parameter "requestObj.sectionIndex" was null when calling updateSectionPageSetupOnline.');
        }

        // verify required parameter 'requestObj.pageSetup' is not undefined
        if (requestObj.pageSetup === undefined) {
            throw new Error('Required parameter "requestObj.pageSetup" was undefined when calling updateSectionPageSetupOnline.');
        }

        // verify required parameter 'requestObj.pageSetup' is not null
        if (requestObj.pageSetup === null) {
            throw new Error('Required parameter "requestObj.pageSetup" was null when calling updateSectionPageSetupOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }
        if (requestObj.pageSetup !== undefined) {
            formParams.PageSetup = JSON.stringify(requestObj.pageSetup);
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "UpdateSectionPageSetupOnlineResponse");
        const result: model.WordsIncomingMessage< model.UpdateSectionPageSetupOnlineResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Updates a style in the document.
     * @param requestObj contains request parameters
     */
    public async updateStyle(requestObj: model.UpdateStyleRequest): Promise< model.WordsIncomingMessage< model.StyleResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateStyle.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/styles/{styleName}/update"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "styleName" + "}", (requestObj.styleName !== null && requestObj.styleName !== undefined) ? "/" + String(requestObj.styleName) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling updateStyle.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling updateStyle.');
        }

        // verify required parameter 'requestObj.styleName' is not undefined
        if (requestObj.styleName === undefined) {
            throw new Error('Required parameter "requestObj.styleName" was undefined when calling updateStyle.');
        }

        // verify required parameter 'requestObj.styleName' is not null
        if (requestObj.styleName === null) {
            throw new Error('Required parameter "requestObj.styleName" was null when calling updateStyle.');
        }

        // verify required parameter 'requestObj.styleUpdate' is not undefined
        if (requestObj.styleUpdate === undefined) {
            throw new Error('Required parameter "requestObj.styleUpdate" was undefined when calling updateStyle.');
        }

        // verify required parameter 'requestObj.styleUpdate' is not null
        if (requestObj.styleUpdate === null) {
            throw new Error('Required parameter "requestObj.styleUpdate" was null when calling updateStyle.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.styleUpdate, requestObj.styleUpdate.constructor.name === "Object" ? "importedStyleUpdate.StyleUpdate" : requestObj.styleUpdate.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "StyleResponse");
        const result: model.WordsIncomingMessage< model.StyleResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Updates a style in the document.
     * @param requestObj contains request parameters
     */
    public async updateStyleOnline(requestObj: model.UpdateStyleOnlineRequest): Promise< model.WordsIncomingMessage< UpdateStyleOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateStyleOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/styles/{styleName}/update"
            .replace("/{" + "styleName" + "}", (requestObj.styleName !== null && requestObj.styleName !== undefined) ? "/" + String(requestObj.styleName) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling updateStyleOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling updateStyleOnline.');
        }

        // verify required parameter 'requestObj.styleName' is not undefined
        if (requestObj.styleName === undefined) {
            throw new Error('Required parameter "requestObj.styleName" was undefined when calling updateStyleOnline.');
        }

        // verify required parameter 'requestObj.styleName' is not null
        if (requestObj.styleName === null) {
            throw new Error('Required parameter "requestObj.styleName" was null when calling updateStyleOnline.');
        }

        // verify required parameter 'requestObj.styleUpdate' is not undefined
        if (requestObj.styleUpdate === undefined) {
            throw new Error('Required parameter "requestObj.styleUpdate" was undefined when calling updateStyleOnline.');
        }

        // verify required parameter 'requestObj.styleUpdate' is not null
        if (requestObj.styleUpdate === null) {
            throw new Error('Required parameter "requestObj.styleUpdate" was null when calling updateStyleOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }
        if (requestObj.styleUpdate !== undefined) {
            formParams.StyleUpdate = JSON.stringify(requestObj.styleUpdate);
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "UpdateStyleOnlineResponse");
        const result: model.WordsIncomingMessage< model.UpdateStyleOnlineResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Updates the formatting properties of a cell in the table row.
     * @param requestObj contains request parameters
     */
    public async updateTableCellFormat(requestObj: model.UpdateTableCellFormatRequest): Promise< model.WordsIncomingMessage< model.TableCellFormatResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateTableCellFormat.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{tableRowPath}/cells/{index}/cellformat"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "tableRowPath" + "}", (requestObj.tableRowPath !== null && requestObj.tableRowPath !== undefined) ? "/" + String(requestObj.tableRowPath) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling updateTableCellFormat.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling updateTableCellFormat.');
        }

        // verify required parameter 'requestObj.tableRowPath' is not undefined
        if (requestObj.tableRowPath === undefined) {
            throw new Error('Required parameter "requestObj.tableRowPath" was undefined when calling updateTableCellFormat.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling updateTableCellFormat.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling updateTableCellFormat.');
        }

        // verify required parameter 'requestObj.format' is not undefined
        if (requestObj.format === undefined) {
            throw new Error('Required parameter "requestObj.format" was undefined when calling updateTableCellFormat.');
        }

        // verify required parameter 'requestObj.format' is not null
        if (requestObj.format === null) {
            throw new Error('Required parameter "requestObj.format" was null when calling updateTableCellFormat.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.format, requestObj.format.constructor.name === "Object" ? "importedTableCellFormat.TableCellFormat" : requestObj.format.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "TableCellFormatResponse");
        const result: model.WordsIncomingMessage< model.TableCellFormatResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Updates the formatting properties of a cell in the table row.
     * @param requestObj contains request parameters
     */
    public async updateTableCellFormatOnline(requestObj: model.UpdateTableCellFormatOnlineRequest): Promise< model.WordsIncomingMessage< UpdateTableCellFormatOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateTableCellFormatOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/{tableRowPath}/cells/{index}/cellformat"
            .replace("/{" + "tableRowPath" + "}", (requestObj.tableRowPath !== null && requestObj.tableRowPath !== undefined) ? "/" + String(requestObj.tableRowPath) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling updateTableCellFormatOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling updateTableCellFormatOnline.');
        }

        // verify required parameter 'requestObj.tableRowPath' is not undefined
        if (requestObj.tableRowPath === undefined) {
            throw new Error('Required parameter "requestObj.tableRowPath" was undefined when calling updateTableCellFormatOnline.');
        }

        // verify required parameter 'requestObj.format' is not undefined
        if (requestObj.format === undefined) {
            throw new Error('Required parameter "requestObj.format" was undefined when calling updateTableCellFormatOnline.');
        }

        // verify required parameter 'requestObj.format' is not null
        if (requestObj.format === null) {
            throw new Error('Required parameter "requestObj.format" was null when calling updateTableCellFormatOnline.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling updateTableCellFormatOnline.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling updateTableCellFormatOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }
        if (requestObj.format !== undefined) {
            formParams.Format = JSON.stringify(requestObj.format);
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "UpdateTableCellFormatOnlineResponse");
        const result: model.WordsIncomingMessage< model.UpdateTableCellFormatOnlineResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Updates properties of a table in the document node.
     * @param requestObj contains request parameters
     */
    public async updateTableProperties(requestObj: model.UpdateTablePropertiesRequest): Promise< model.WordsIncomingMessage< model.TablePropertiesResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateTableProperties.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/tables/{index}/properties"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling updateTableProperties.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling updateTableProperties.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling updateTableProperties.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling updateTableProperties.');
        }

        // verify required parameter 'requestObj.properties' is not undefined
        if (requestObj.properties === undefined) {
            throw new Error('Required parameter "requestObj.properties" was undefined when calling updateTableProperties.');
        }

        // verify required parameter 'requestObj.properties' is not null
        if (requestObj.properties === null) {
            throw new Error('Required parameter "requestObj.properties" was null when calling updateTableProperties.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.properties, requestObj.properties.constructor.name === "Object" ? "importedTableProperties.TableProperties" : requestObj.properties.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "TablePropertiesResponse");
        const result: model.WordsIncomingMessage< model.TablePropertiesResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Updates properties of a table in the document node.
     * @param requestObj contains request parameters
     */
    public async updateTablePropertiesOnline(requestObj: model.UpdateTablePropertiesOnlineRequest): Promise< model.WordsIncomingMessage< UpdateTablePropertiesOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateTablePropertiesOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/{nodePath}/tables/{index}/properties"
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null && requestObj.nodePath !== undefined) ? "/" + String(requestObj.nodePath) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling updateTablePropertiesOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling updateTablePropertiesOnline.');
        }

        // verify required parameter 'requestObj.properties' is not undefined
        if (requestObj.properties === undefined) {
            throw new Error('Required parameter "requestObj.properties" was undefined when calling updateTablePropertiesOnline.');
        }

        // verify required parameter 'requestObj.properties' is not null
        if (requestObj.properties === null) {
            throw new Error('Required parameter "requestObj.properties" was null when calling updateTablePropertiesOnline.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling updateTablePropertiesOnline.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling updateTablePropertiesOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }
        if (requestObj.properties !== undefined) {
            formParams.Properties = JSON.stringify(requestObj.properties);
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "UpdateTablePropertiesOnlineResponse");
        const result: model.WordsIncomingMessage< model.UpdateTablePropertiesOnlineResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Updates the formatting properties of a table row.
     * @param requestObj contains request parameters
     */
    public async updateTableRowFormat(requestObj: model.UpdateTableRowFormatRequest): Promise< model.WordsIncomingMessage< model.TableRowFormatResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateTableRowFormat.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{tablePath}/rows/{index}/rowformat"
            .replace("/{" + "name" + "}", (requestObj.name !== null && requestObj.name !== undefined) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "tablePath" + "}", (requestObj.tablePath !== null && requestObj.tablePath !== undefined) ? "/" + String(requestObj.tablePath) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling updateTableRowFormat.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling updateTableRowFormat.');
        }

        // verify required parameter 'requestObj.tablePath' is not undefined
        if (requestObj.tablePath === undefined) {
            throw new Error('Required parameter "requestObj.tablePath" was undefined when calling updateTableRowFormat.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling updateTableRowFormat.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling updateTableRowFormat.');
        }

        // verify required parameter 'requestObj.format' is not undefined
        if (requestObj.format === undefined) {
            throw new Error('Required parameter "requestObj.format" was undefined when calling updateTableRowFormat.');
        }

        // verify required parameter 'requestObj.format' is not null
        if (requestObj.format === null) {
            throw new Error('Required parameter "requestObj.format" was null when calling updateTableRowFormat.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.format, requestObj.format.constructor.name === "Object" ? "importedTableRowFormat.TableRowFormat" : requestObj.format.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "TableRowFormatResponse");
        const result: model.WordsIncomingMessage< model.TableRowFormatResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Updates the formatting properties of a table row.
     * @param requestObj contains request parameters
     */
    public async updateTableRowFormatOnline(requestObj: model.UpdateTableRowFormatOnlineRequest): Promise< model.WordsIncomingMessage< UpdateTableRowFormatOnlineResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateTableRowFormatOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/online/{tablePath}/rows/{index}/rowformat"
            .replace("/{" + "tablePath" + "}", (requestObj.tablePath !== null && requestObj.tablePath !== undefined) ? "/" + String(requestObj.tablePath) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null && requestObj.index !== undefined) ? "/" + String(requestObj.index) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.document' is not undefined
        if (requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was undefined when calling updateTableRowFormatOnline.');
        }

        // verify required parameter 'requestObj.document' is not null
        if (requestObj.document === null) {
            throw new Error('Required parameter "requestObj.document" was null when calling updateTableRowFormatOnline.');
        }

        // verify required parameter 'requestObj.tablePath' is not undefined
        if (requestObj.tablePath === undefined) {
            throw new Error('Required parameter "requestObj.tablePath" was undefined when calling updateTableRowFormatOnline.');
        }

        // verify required parameter 'requestObj.format' is not undefined
        if (requestObj.format === undefined) {
            throw new Error('Required parameter "requestObj.format" was undefined when calling updateTableRowFormatOnline.');
        }

        // verify required parameter 'requestObj.format' is not null
        if (requestObj.format === null) {
            throw new Error('Required parameter "requestObj.format" was null when calling updateTableRowFormatOnline.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling updateTableRowFormatOnline.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling updateTableRowFormatOnline.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }
        if (requestObj.format !== undefined) {
            formParams.Format = JSON.stringify(requestObj.format);
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "UpdateTableRowFormatOnlineResponse");
        const result: model.WordsIncomingMessage< model.UpdateTableRowFormatOnlineResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Upload file.
     * @param requestObj contains request parameters
     */
    public async uploadFile(requestObj: model.UploadFileRequest): Promise< model.WordsIncomingMessage< model.FilesUploadResult > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling uploadFile.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/storage/file/{path}"
            .replace("/{" + "path" + "}", (requestObj.path !== null && requestObj.path !== undefined) ? "/" + String(requestObj.path) : "")
            .replace("//", "/");
        const queryParameters: any = {};
        const formParams: any = {};
        // verify required parameter 'requestObj.fileContent' is not undefined
        if (requestObj.fileContent === undefined) {
            throw new Error('Required parameter "requestObj.fileContent" was undefined when calling uploadFile.');
        }

        // verify required parameter 'requestObj.fileContent' is not null
        if (requestObj.fileContent === null) {
            throw new Error('Required parameter "requestObj.fileContent" was null when calling uploadFile.');
        }

        // verify required parameter 'requestObj.path' is not undefined
        if (requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was undefined when calling uploadFile.');
        }

        // verify required parameter 'requestObj.path' is not null
        if (requestObj.path === null) {
            throw new Error('Required parameter "requestObj.path" was null when calling uploadFile.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        if (requestObj.fileContent !== undefined) {
            formParams.FileContent = requestObj.fileContent;
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "FilesUploadResult");
        const result: model.WordsIncomingMessage< model.FilesUploadResult > = {body, response};
        return Promise.resolve(result);
    }
}

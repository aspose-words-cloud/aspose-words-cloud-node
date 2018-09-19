/*
* MIT License

* Copyright (c) 2018 Aspose Pty Ltd

* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:

* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.

* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/

import http = require("http");
import request = require("request");

import { Configuration } from "./internal/configuration";
import { ObjectSerializer } from "./internal/objectSerializer";
import { addQueryParameterToUrl, invokeApiMethod } from "./internal/requestHelper";
import { WordsApiAvailiableVersions } from "./internal/wordsApiAvailiableVersions";
import * as model from "./model/model";

export * from "./model/model";
export * from "./internal/wordsApiAvailiableVersions";

/**
 * Library for communicating with the Aspose.Words Cloud API
 */
export class WordsApi {
    /**
     * API configuration
     */
    public configuration: Configuration;

    /**
     * @param appSID App SID.
     * @param appKey App key.
     * @param baseUrl Base api Url.
     * @param debugMode A value indicating whether debug mode. In debug mode all requests and responses are logged to console.
     * @param version API version.
     */
    constructor(appSID: string, appKey: string, baseUrl?: string, debugMode?: boolean, version?: WordsApiAvailiableVersions) {
        this.configuration = new Configuration(appSID, appKey, baseUrl, debugMode, version);
    }

    /**
     * Accept all revisions in document
     * @param requestObj contains request parameters
     */
    public async acceptAllRevisions(requestObj: model.AcceptAllRevisionsRequest): Promise<{response: http.ClientResponse, body: model.RevisionsModificationResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling acceptAllRevisions.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/revisions/acceptAll"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling acceptAllRevisions.');
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
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "RevisionsModificationResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Classify raw text.
     * @param requestObj contains request parameters
     */
    public async classify(requestObj: model.ClassifyRequest): Promise<{response: http.ClientResponse, body: model.ClassificationResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling classify.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/classify";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.text' is not null or undefined
        if (requestObj.text === null || requestObj.text === undefined) {
            throw new Error('Required parameter "requestObj.text" was null or undefined when calling classify.');
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
        const result =  ObjectSerializer.deserialize(response.body, "ClassificationResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Classify document.
     * @param requestObj contains request parameters
     */
    public async classifyDocument(requestObj: model.ClassifyDocumentRequest): Promise<{response: http.ClientResponse, body: model.ClassificationResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling classifyDocument.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{documentName}/classify"
            .replace("{" + "documentName" + "}", String(requestObj.documentName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.documentName' is not null or undefined
        if (requestObj.documentName === null || requestObj.documentName === undefined) {
            throw new Error('Required parameter "requestObj.documentName" was null or undefined when calling classifyDocument.');
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
        const result =  ObjectSerializer.deserialize(response.body, "ClassificationResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Add new or update existing document property.
     * @param requestObj contains request parameters
     */
    public async createOrUpdateDocumentProperty(requestObj: model.CreateOrUpdateDocumentPropertyRequest): Promise<{response: http.ClientResponse, body: model.DocumentPropertyResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling createOrUpdateDocumentProperty.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/documentProperties/{propertyName}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "propertyName" + "}", String(requestObj.propertyName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling createOrUpdateDocumentProperty.');
        }

        // verify required parameter 'requestObj.propertyName' is not null or undefined
        if (requestObj.propertyName === null || requestObj.propertyName === undefined) {
            throw new Error('Required parameter "requestObj.propertyName" was null or undefined when calling createOrUpdateDocumentProperty.');
        }

        // verify required parameter 'requestObj.property' is not null or undefined
        if (requestObj.property === null || requestObj.property === undefined) {
            throw new Error('Required parameter "requestObj.property" was null or undefined when calling createOrUpdateDocumentProperty.');
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
            body: ObjectSerializer.serialize(requestObj.property, requestObj.property.constructor.name === "Object" ? "DocumentProperty" : requestObj.property.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "DocumentPropertyResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Resets border properties to default values.              'nodePath' should refer to node with cell or row
     * @param requestObj contains request parameters
     */
    public async deleteBorder(requestObj: model.DeleteBorderRequest): Promise<{response: http.ClientResponse, body: model.BorderResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteBorder.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/borders/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "nodePath" + "}", String(requestObj.nodePath))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deleteBorder.');
        }

        // verify required parameter 'requestObj.nodePath' is not null or undefined
        if (requestObj.nodePath === null || requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was null or undefined when calling deleteBorder.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling deleteBorder.');
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
        const result =  ObjectSerializer.deserialize(response.body, "BorderResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Resets borders properties to default values.              'nodePath' should refer to node with cell or row
     * @param requestObj contains request parameters
     */
    public async deleteBorders(requestObj: model.DeleteBordersRequest): Promise<{response: http.ClientResponse, body: model.BordersResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteBorders.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/borders"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "nodePath" + "}", String(requestObj.nodePath));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deleteBorders.');
        }

        // verify required parameter 'requestObj.nodePath' is not null or undefined
        if (requestObj.nodePath === null || requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was null or undefined when calling deleteBorders.');
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
        const result =  ObjectSerializer.deserialize(response.body, "BordersResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Remove comment from document.
     * @param requestObj contains request parameters
     */
    public async deleteComment(requestObj: model.DeleteCommentRequest): Promise<{response: http.ClientResponse, body: model.AsposeResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteComment.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/comments/{commentIndex}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "commentIndex" + "}", String(requestObj.commentIndex));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deleteComment.');
        }

        // verify required parameter 'requestObj.commentIndex' is not null or undefined
        if (requestObj.commentIndex === null || requestObj.commentIndex === undefined) {
            throw new Error('Required parameter "requestObj.commentIndex" was null or undefined when calling deleteComment.');
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
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Remove macros from document.
     * @param requestObj contains request parameters
     */
    public async deleteDocumentMacros(requestObj: model.DeleteDocumentMacrosRequest): Promise<{response: http.ClientResponse, body: model.AsposeResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteDocumentMacros.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/macros"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deleteDocumentMacros.');
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
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Delete document property.
     * @param requestObj contains request parameters
     */
    public async deleteDocumentProperty(requestObj: model.DeleteDocumentPropertyRequest): Promise<{response: http.ClientResponse, body: model.AsposeResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteDocumentProperty.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/documentProperties/{propertyName}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "propertyName" + "}", String(requestObj.propertyName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deleteDocumentProperty.');
        }

        // verify required parameter 'requestObj.propertyName' is not null or undefined
        if (requestObj.propertyName === null || requestObj.propertyName === undefined) {
            throw new Error('Required parameter "requestObj.propertyName" was null or undefined when calling deleteDocumentProperty.');
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
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Delete watermark (for deleting last watermark from the document).
     * @param requestObj contains request parameters
     */
    public async deleteDocumentWatermark(requestObj: model.DeleteDocumentWatermarkRequest): Promise<{response: http.ClientResponse, body: model.DocumentResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteDocumentWatermark.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/watermark"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deleteDocumentWatermark.');
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
        const result =  ObjectSerializer.deserialize(response.body, "DocumentResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Removes drawing object from document.
     * @param requestObj contains request parameters
     */
    public async deleteDrawingObject(requestObj: model.DeleteDrawingObjectRequest): Promise<{response: http.ClientResponse, body: model.AsposeResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteDrawingObject.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/drawingObjects/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deleteDrawingObject.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling deleteDrawingObject.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "nodePath", requestObj.nodePath);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Delete field from document.
     * @param requestObj contains request parameters
     */
    public async deleteField(requestObj: model.DeleteFieldRequest): Promise<{response: http.ClientResponse, body: model.AsposeResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteField.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/fields/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deleteField.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling deleteField.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "nodePath", requestObj.nodePath);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Remove fields from section paragraph.
     * @param requestObj contains request parameters
     */
    public async deleteFields(requestObj: model.DeleteFieldsRequest): Promise<{response: http.ClientResponse, body: model.AsposeResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteFields.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/fields"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deleteFields.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "nodePath", requestObj.nodePath);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Removes footnote from document.
     * @param requestObj contains request parameters
     */
    public async deleteFootnote(requestObj: model.DeleteFootnoteRequest): Promise<{response: http.ClientResponse, body: model.AsposeResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteFootnote.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/footnotes/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deleteFootnote.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling deleteFootnote.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "nodePath", requestObj.nodePath);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Removes form field from document.
     * @param requestObj contains request parameters
     */
    public async deleteFormField(requestObj: model.DeleteFormFieldRequest): Promise<{response: http.ClientResponse, body: model.AsposeResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteFormField.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/formfields/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deleteFormField.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling deleteFormField.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "nodePath", requestObj.nodePath);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Delete header/footer from document.
     * @param requestObj contains request parameters
     */
    public async deleteHeaderFooter(requestObj: model.DeleteHeaderFooterRequest): Promise<{response: http.ClientResponse, body: model.AsposeResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteHeaderFooter.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{sectionPath}/headersfooters/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deleteHeaderFooter.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling deleteHeaderFooter.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "sectionPath", requestObj.sectionPath);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Delete document headers and footers.
     * @param requestObj contains request parameters
     */
    public async deleteHeadersFooters(requestObj: model.DeleteHeadersFootersRequest): Promise<{response: http.ClientResponse, body: model.AsposeResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteHeadersFooters.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{sectionPath}/headersfooters"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deleteHeadersFooters.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "sectionPath", requestObj.sectionPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "headersFootersTypes", requestObj.headersFootersTypes);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Removes OfficeMath object from document.
     * @param requestObj contains request parameters
     */
    public async deleteOfficeMathObject(requestObj: model.DeleteOfficeMathObjectRequest): Promise<{response: http.ClientResponse, body: model.AsposeResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteOfficeMathObject.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/OfficeMathObjects/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deleteOfficeMathObject.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling deleteOfficeMathObject.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "nodePath", requestObj.nodePath);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Remove paragraph from section.
     * @param requestObj contains request parameters
     */
    public async deleteParagraph(requestObj: model.DeleteParagraphRequest): Promise<{response: http.ClientResponse, body: model.AsposeResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteParagraph.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/paragraphs/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deleteParagraph.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling deleteParagraph.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "nodePath", requestObj.nodePath);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Removes run from document.
     * @param requestObj contains request parameters
     */
    public async deleteRun(requestObj: model.DeleteRunRequest): Promise<{response: http.ClientResponse, body: model.AsposeResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteRun.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{paragraphPath}/runs/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "paragraphPath" + "}", String(requestObj.paragraphPath))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deleteRun.');
        }

        // verify required parameter 'requestObj.paragraphPath' is not null or undefined
        if (requestObj.paragraphPath === null || requestObj.paragraphPath === undefined) {
            throw new Error('Required parameter "requestObj.paragraphPath" was null or undefined when calling deleteRun.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling deleteRun.');
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
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Delete a table.
     * @param requestObj contains request parameters
     */
    public async deleteTable(requestObj: model.DeleteTableRequest): Promise<{response: http.ClientResponse, body: model.AsposeResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteTable.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/tables/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deleteTable.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling deleteTable.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "nodePath", requestObj.nodePath);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Delete a table cell.
     * @param requestObj contains request parameters
     */
    public async deleteTableCell(requestObj: model.DeleteTableCellRequest): Promise<{response: http.ClientResponse, body: model.AsposeResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteTableCell.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{tableRowPath}/cells/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "tableRowPath" + "}", String(requestObj.tableRowPath))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deleteTableCell.');
        }

        // verify required parameter 'requestObj.tableRowPath' is not null or undefined
        if (requestObj.tableRowPath === null || requestObj.tableRowPath === undefined) {
            throw new Error('Required parameter "requestObj.tableRowPath" was null or undefined when calling deleteTableCell.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling deleteTableCell.');
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
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Delete a table row.
     * @param requestObj contains request parameters
     */
    public async deleteTableRow(requestObj: model.DeleteTableRowRequest): Promise<{response: http.ClientResponse, body: model.AsposeResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteTableRow.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{tablePath}/rows/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "tablePath" + "}", String(requestObj.tablePath))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deleteTableRow.');
        }

        // verify required parameter 'requestObj.tablePath' is not null or undefined
        if (requestObj.tablePath === null || requestObj.tablePath === undefined) {
            throw new Error('Required parameter "requestObj.tablePath" was null or undefined when calling deleteTableRow.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling deleteTableRow.');
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
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Unprotect document.
     * @param requestObj contains request parameters
     */
    public async deleteUnprotectDocument(requestObj: model.DeleteUnprotectDocumentRequest): Promise<{response: http.ClientResponse, body: model.ProtectionDataResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteUnprotectDocument.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/protection"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deleteUnprotectDocument.');
        }

        // verify required parameter 'requestObj.protectionRequest' is not null or undefined
        if (requestObj.protectionRequest === null || requestObj.protectionRequest === undefined) {
            throw new Error('Required parameter "requestObj.protectionRequest" was null or undefined when calling deleteUnprotectDocument.');
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
            body: ObjectSerializer.serialize(requestObj.protectionRequest, requestObj.protectionRequest.constructor.name === "Object" ? "ProtectionRequest" : requestObj.protectionRequest.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "ProtectionDataResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Gets the list of fonts, available for document processing
     * @param requestObj contains request parameters
     */
    public async getAvailableFonts(requestObj: model.GetAvailableFontsRequest): Promise<{response: http.ClientResponse, body: model.AvailableFontsResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getAvailableFonts.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/fonts/available";
        const queryParameters: any = {};
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsLocation", requestObj.fontsLocation);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "AvailableFontsResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Return a border. 'nodePath' should refer to node with cell or row
     * @param requestObj contains request parameters
     */
    public async getBorder(requestObj: model.GetBorderRequest): Promise<{response: http.ClientResponse, body: model.BorderResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getBorder.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/borders/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "nodePath" + "}", String(requestObj.nodePath))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getBorder.');
        }

        // verify required parameter 'requestObj.nodePath' is not null or undefined
        if (requestObj.nodePath === null || requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was null or undefined when calling getBorder.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling getBorder.');
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
        const result =  ObjectSerializer.deserialize(response.body, "BorderResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Return a collection of borders. 'nodePath' should refer to node with cell or row
     * @param requestObj contains request parameters
     */
    public async getBorders(requestObj: model.GetBordersRequest): Promise<{response: http.ClientResponse, body: model.BordersResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getBorders.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/borders"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "nodePath" + "}", String(requestObj.nodePath));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getBorders.');
        }

        // verify required parameter 'requestObj.nodePath' is not null or undefined
        if (requestObj.nodePath === null || requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was null or undefined when calling getBorders.');
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
        const result =  ObjectSerializer.deserialize(response.body, "BordersResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Get comment from document.
     * @param requestObj contains request parameters
     */
    public async getComment(requestObj: model.GetCommentRequest): Promise<{response: http.ClientResponse, body: model.CommentResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getComment.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/comments/{commentIndex}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "commentIndex" + "}", String(requestObj.commentIndex));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getComment.');
        }

        // verify required parameter 'requestObj.commentIndex' is not null or undefined
        if (requestObj.commentIndex === null || requestObj.commentIndex === undefined) {
            throw new Error('Required parameter "requestObj.commentIndex" was null or undefined when calling getComment.');
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
        const result =  ObjectSerializer.deserialize(response.body, "CommentResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Get comments from document.
     * @param requestObj contains request parameters
     */
    public async getComments(requestObj: model.GetCommentsRequest): Promise<{response: http.ClientResponse, body: model.CommentsResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getComments.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/comments"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getComments.');
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
        const result =  ObjectSerializer.deserialize(response.body, "CommentsResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Read document common info.
     * @param requestObj contains request parameters
     */
    public async getDocument(requestObj: model.GetDocumentRequest): Promise<{response: http.ClientResponse, body: model.DocumentResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDocument.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{documentName}"
            .replace("{" + "documentName" + "}", String(requestObj.documentName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.documentName' is not null or undefined
        if (requestObj.documentName === null || requestObj.documentName === undefined) {
            throw new Error('Required parameter "requestObj.documentName" was null or undefined when calling getDocument.');
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
        const result =  ObjectSerializer.deserialize(response.body, "DocumentResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Read document bookmark data by its name.
     * @param requestObj contains request parameters
     */
    public async getDocumentBookmarkByName(requestObj: model.GetDocumentBookmarkByNameRequest): Promise<{response: http.ClientResponse, body: model.BookmarkResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDocumentBookmarkByName.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/bookmarks/{bookmarkName}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "bookmarkName" + "}", String(requestObj.bookmarkName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getDocumentBookmarkByName.');
        }

        // verify required parameter 'requestObj.bookmarkName' is not null or undefined
        if (requestObj.bookmarkName === null || requestObj.bookmarkName === undefined) {
            throw new Error('Required parameter "requestObj.bookmarkName" was null or undefined when calling getDocumentBookmarkByName.');
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
        const result =  ObjectSerializer.deserialize(response.body, "BookmarkResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Read document bookmarks common info.
     * @param requestObj contains request parameters
     */
    public async getDocumentBookmarks(requestObj: model.GetDocumentBookmarksRequest): Promise<{response: http.ClientResponse, body: model.BookmarksResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDocumentBookmarks.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/bookmarks"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getDocumentBookmarks.');
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
        const result =  ObjectSerializer.deserialize(response.body, "BookmarksResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Read document drawing object common info by its index or convert to format specified.
     * @param requestObj contains request parameters
     */
    public async getDocumentDrawingObjectByIndex(requestObj: model.GetDocumentDrawingObjectByIndexRequest): Promise<{response: http.ClientResponse, body: model.DrawingObjectResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDocumentDrawingObjectByIndex.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/drawingObjects/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getDocumentDrawingObjectByIndex.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling getDocumentDrawingObjectByIndex.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "nodePath", requestObj.nodePath);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "DrawingObjectResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Read drawing object image data.
     * @param requestObj contains request parameters
     */
    public async getDocumentDrawingObjectImageData(requestObj: model.GetDocumentDrawingObjectImageDataRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDocumentDrawingObjectImageData.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/drawingObjects/{index}/imageData"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getDocumentDrawingObjectImageData.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling getDocumentDrawingObjectImageData.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "nodePath", requestObj.nodePath);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /**
     * Get drawing object OLE data.
     * @param requestObj contains request parameters
     */
    public async getDocumentDrawingObjectOleData(requestObj: model.GetDocumentDrawingObjectOleDataRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDocumentDrawingObjectOleData.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/drawingObjects/{index}/oleData"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getDocumentDrawingObjectOleData.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling getDocumentDrawingObjectOleData.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "nodePath", requestObj.nodePath);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /**
     * Read document drawing objects common info.
     * @param requestObj contains request parameters
     */
    public async getDocumentDrawingObjects(requestObj: model.GetDocumentDrawingObjectsRequest): Promise<{response: http.ClientResponse, body: model.DrawingObjectsResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDocumentDrawingObjects.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/drawingObjects"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getDocumentDrawingObjects.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "nodePath", requestObj.nodePath);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "DrawingObjectsResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Read document field names.
     * @param requestObj contains request parameters
     */
    public async getDocumentFieldNames(requestObj: model.GetDocumentFieldNamesRequest): Promise<{response: http.ClientResponse, body: model.FieldNamesResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDocumentFieldNames.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/mailMergeFieldNames"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getDocumentFieldNames.');
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
        const result =  ObjectSerializer.deserialize(response.body, "FieldNamesResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Read document hyperlink by its index.
     * @param requestObj contains request parameters
     */
    public async getDocumentHyperlinkByIndex(requestObj: model.GetDocumentHyperlinkByIndexRequest): Promise<{response: http.ClientResponse, body: model.HyperlinkResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDocumentHyperlinkByIndex.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/hyperlinks/{hyperlinkIndex}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "hyperlinkIndex" + "}", String(requestObj.hyperlinkIndex));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getDocumentHyperlinkByIndex.');
        }

        // verify required parameter 'requestObj.hyperlinkIndex' is not null or undefined
        if (requestObj.hyperlinkIndex === null || requestObj.hyperlinkIndex === undefined) {
            throw new Error('Required parameter "requestObj.hyperlinkIndex" was null or undefined when calling getDocumentHyperlinkByIndex.');
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
        const result =  ObjectSerializer.deserialize(response.body, "HyperlinkResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Read document hyperlinks common info.
     * @param requestObj contains request parameters
     */
    public async getDocumentHyperlinks(requestObj: model.GetDocumentHyperlinksRequest): Promise<{response: http.ClientResponse, body: model.HyperlinksResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDocumentHyperlinks.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/hyperlinks"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getDocumentHyperlinks.');
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
        const result =  ObjectSerializer.deserialize(response.body, "HyperlinksResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * This resource represents one of the paragraphs contained in the document.
     * @param requestObj contains request parameters
     */
    public async getDocumentParagraph(requestObj: model.GetDocumentParagraphRequest): Promise<{response: http.ClientResponse, body: model.ParagraphResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDocumentParagraph.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/paragraphs/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getDocumentParagraph.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling getDocumentParagraph.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "nodePath", requestObj.nodePath);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "ParagraphResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * This resource represents run of text contained in the document.
     * @param requestObj contains request parameters
     */
    public async getDocumentParagraphRun(requestObj: model.GetDocumentParagraphRunRequest): Promise<{response: http.ClientResponse, body: model.RunResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDocumentParagraphRun.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{paragraphPath}/runs/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "paragraphPath" + "}", String(requestObj.paragraphPath))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getDocumentParagraphRun.');
        }

        // verify required parameter 'requestObj.paragraphPath' is not null or undefined
        if (requestObj.paragraphPath === null || requestObj.paragraphPath === undefined) {
            throw new Error('Required parameter "requestObj.paragraphPath" was null or undefined when calling getDocumentParagraphRun.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling getDocumentParagraphRun.');
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
        const result =  ObjectSerializer.deserialize(response.body, "RunResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * This resource represents font of run.
     * @param requestObj contains request parameters
     */
    public async getDocumentParagraphRunFont(requestObj: model.GetDocumentParagraphRunFontRequest): Promise<{response: http.ClientResponse, body: model.FontResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDocumentParagraphRunFont.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{paragraphPath}/runs/{index}/font"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "paragraphPath" + "}", String(requestObj.paragraphPath))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getDocumentParagraphRunFont.');
        }

        // verify required parameter 'requestObj.paragraphPath' is not null or undefined
        if (requestObj.paragraphPath === null || requestObj.paragraphPath === undefined) {
            throw new Error('Required parameter "requestObj.paragraphPath" was null or undefined when calling getDocumentParagraphRunFont.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling getDocumentParagraphRunFont.');
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
        const result =  ObjectSerializer.deserialize(response.body, "FontResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * This resource represents collection of runs in the paragraph.
     * @param requestObj contains request parameters
     */
    public async getDocumentParagraphRuns(requestObj: model.GetDocumentParagraphRunsRequest): Promise<{response: http.ClientResponse, body: model.RunsResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDocumentParagraphRuns.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{paragraphPath}/runs"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "paragraphPath" + "}", String(requestObj.paragraphPath));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getDocumentParagraphRuns.');
        }

        // verify required parameter 'requestObj.paragraphPath' is not null or undefined
        if (requestObj.paragraphPath === null || requestObj.paragraphPath === undefined) {
            throw new Error('Required parameter "requestObj.paragraphPath" was null or undefined when calling getDocumentParagraphRuns.');
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
        const result =  ObjectSerializer.deserialize(response.body, "RunsResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Return a list of paragraphs that are contained in the document.
     * @param requestObj contains request parameters
     */
    public async getDocumentParagraphs(requestObj: model.GetDocumentParagraphsRequest): Promise<{response: http.ClientResponse, body: model.ParagraphLinkCollectionResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDocumentParagraphs.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/paragraphs"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getDocumentParagraphs.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "nodePath", requestObj.nodePath);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "ParagraphLinkCollectionResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Read document properties info.
     * @param requestObj contains request parameters
     */
    public async getDocumentProperties(requestObj: model.GetDocumentPropertiesRequest): Promise<{response: http.ClientResponse, body: model.DocumentPropertiesResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDocumentProperties.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/documentProperties"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getDocumentProperties.');
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
        const result =  ObjectSerializer.deserialize(response.body, "DocumentPropertiesResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Read document property info by the property name.
     * @param requestObj contains request parameters
     */
    public async getDocumentProperty(requestObj: model.GetDocumentPropertyRequest): Promise<{response: http.ClientResponse, body: model.DocumentPropertyResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDocumentProperty.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/documentProperties/{propertyName}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "propertyName" + "}", String(requestObj.propertyName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getDocumentProperty.');
        }

        // verify required parameter 'requestObj.propertyName' is not null or undefined
        if (requestObj.propertyName === null || requestObj.propertyName === undefined) {
            throw new Error('Required parameter "requestObj.propertyName" was null or undefined when calling getDocumentProperty.');
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
        const result =  ObjectSerializer.deserialize(response.body, "DocumentPropertyResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Read document protection common info.
     * @param requestObj contains request parameters
     */
    public async getDocumentProtection(requestObj: model.GetDocumentProtectionRequest): Promise<{response: http.ClientResponse, body: model.ProtectionDataResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDocumentProtection.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/protection"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getDocumentProtection.');
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
        const result =  ObjectSerializer.deserialize(response.body, "ProtectionDataResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Read document statistics.
     * @param requestObj contains request parameters
     */
    public async getDocumentStatistics(requestObj: model.GetDocumentStatisticsRequest): Promise<{response: http.ClientResponse, body: model.StatDataResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDocumentStatistics.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/statistics"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getDocumentStatistics.');
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
        const result =  ObjectSerializer.deserialize(response.body, "StatDataResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Read document text items.
     * @param requestObj contains request parameters
     */
    public async getDocumentTextItems(requestObj: model.GetDocumentTextItemsRequest): Promise<{response: http.ClientResponse, body: model.TextItemsResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDocumentTextItems.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/textItems"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getDocumentTextItems.');
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
        const result =  ObjectSerializer.deserialize(response.body, "TextItemsResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Export the document into the specified format.
     * @param requestObj contains request parameters
     */
    public async getDocumentWithFormat(requestObj: model.GetDocumentWithFormatRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDocumentWithFormat.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getDocumentWithFormat.');
        }

        // verify required parameter 'requestObj.format' is not null or undefined
        if (requestObj.format === null || requestObj.format === undefined) {
            throw new Error('Required parameter "requestObj.format" was null or undefined when calling getDocumentWithFormat.');
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
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /**
     * Get field from document.
     * @param requestObj contains request parameters
     */
    public async getField(requestObj: model.GetFieldRequest): Promise<{response: http.ClientResponse, body: model.FieldResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getField.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/fields/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getField.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling getField.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "nodePath", requestObj.nodePath);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FieldResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Get fields from document.
     * @param requestObj contains request parameters
     */
    public async getFields(requestObj: model.GetFieldsRequest): Promise<{response: http.ClientResponse, body: model.FieldsResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getFields.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/fields"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getFields.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "nodePath", requestObj.nodePath);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FieldsResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Read footnote by index.
     * @param requestObj contains request parameters
     */
    public async getFootnote(requestObj: model.GetFootnoteRequest): Promise<{response: http.ClientResponse, body: model.FootnoteResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getFootnote.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/footnotes/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getFootnote.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling getFootnote.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "nodePath", requestObj.nodePath);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FootnoteResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Get footnotes from document.
     * @param requestObj contains request parameters
     */
    public async getFootnotes(requestObj: model.GetFootnotesRequest): Promise<{response: http.ClientResponse, body: model.FootnotesResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getFootnotes.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/footnotes"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getFootnotes.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "nodePath", requestObj.nodePath);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FootnotesResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Returns representation of an one of the form field.
     * @param requestObj contains request parameters
     */
    public async getFormField(requestObj: model.GetFormFieldRequest): Promise<{response: http.ClientResponse, body: model.FormFieldResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getFormField.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/formfields/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getFormField.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling getFormField.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "nodePath", requestObj.nodePath);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FormFieldResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Get form fields from document.
     * @param requestObj contains request parameters
     */
    public async getFormFields(requestObj: model.GetFormFieldsRequest): Promise<{response: http.ClientResponse, body: model.FormFieldsResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getFormFields.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/formfields"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getFormFields.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "nodePath", requestObj.nodePath);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FormFieldsResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Return a header/footer that is contained in the document.
     * @param requestObj contains request parameters
     */
    public async getHeaderFooter(requestObj: model.GetHeaderFooterRequest): Promise<{response: http.ClientResponse, body: model.HeaderFooterResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getHeaderFooter.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/headersfooters/{headerFooterIndex}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "headerFooterIndex" + "}", String(requestObj.headerFooterIndex));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getHeaderFooter.');
        }

        // verify required parameter 'requestObj.headerFooterIndex' is not null or undefined
        if (requestObj.headerFooterIndex === null || requestObj.headerFooterIndex === undefined) {
            throw new Error('Required parameter "requestObj.headerFooterIndex" was null or undefined when calling getHeaderFooter.');
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
        const result =  ObjectSerializer.deserialize(response.body, "HeaderFooterResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Return a header/footer that is contained in the document.
     * @param requestObj contains request parameters
     */
    public async getHeaderFooterOfSection(requestObj: model.GetHeaderFooterOfSectionRequest): Promise<{response: http.ClientResponse, body: model.HeaderFooterResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getHeaderFooterOfSection.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/sections/{sectionIndex}/headersfooters/{headerFooterIndex}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "headerFooterIndex" + "}", String(requestObj.headerFooterIndex))
            .replace("{" + "sectionIndex" + "}", String(requestObj.sectionIndex));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getHeaderFooterOfSection.');
        }

        // verify required parameter 'requestObj.headerFooterIndex' is not null or undefined
        if (requestObj.headerFooterIndex === null || requestObj.headerFooterIndex === undefined) {
            throw new Error('Required parameter "requestObj.headerFooterIndex" was null or undefined when calling getHeaderFooterOfSection.');
        }

        // verify required parameter 'requestObj.sectionIndex' is not null or undefined
        if (requestObj.sectionIndex === null || requestObj.sectionIndex === undefined) {
            throw new Error('Required parameter "requestObj.sectionIndex" was null or undefined when calling getHeaderFooterOfSection.');
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
        const result =  ObjectSerializer.deserialize(response.body, "HeaderFooterResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Return a list of header/footers that are contained in the document.
     * @param requestObj contains request parameters
     */
    public async getHeaderFooters(requestObj: model.GetHeaderFootersRequest): Promise<{response: http.ClientResponse, body: model.HeaderFootersResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getHeaderFooters.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{sectionPath}/headersfooters"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getHeaderFooters.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "sectionPath", requestObj.sectionPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "filterByType", requestObj.filterByType);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "HeaderFootersResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Read OfficeMath object by index.
     * @param requestObj contains request parameters
     */
    public async getOfficeMathObject(requestObj: model.GetOfficeMathObjectRequest): Promise<{response: http.ClientResponse, body: model.OfficeMathObjectResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getOfficeMathObject.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/OfficeMathObjects/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getOfficeMathObject.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling getOfficeMathObject.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "nodePath", requestObj.nodePath);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "OfficeMathObjectResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Get OfficeMath objects from document.
     * @param requestObj contains request parameters
     */
    public async getOfficeMathObjects(requestObj: model.GetOfficeMathObjectsRequest): Promise<{response: http.ClientResponse, body: model.OfficeMathObjectsResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getOfficeMathObjects.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/OfficeMathObjects"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getOfficeMathObjects.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "nodePath", requestObj.nodePath);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "OfficeMathObjectsResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Get document section by index.
     * @param requestObj contains request parameters
     */
    public async getSection(requestObj: model.GetSectionRequest): Promise<{response: http.ClientResponse, body: model.SectionResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getSection.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/sections/{sectionIndex}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sectionIndex" + "}", String(requestObj.sectionIndex));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getSection.');
        }

        // verify required parameter 'requestObj.sectionIndex' is not null or undefined
        if (requestObj.sectionIndex === null || requestObj.sectionIndex === undefined) {
            throw new Error('Required parameter "requestObj.sectionIndex" was null or undefined when calling getSection.');
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
        const result =  ObjectSerializer.deserialize(response.body, "SectionResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Get page setup of section.
     * @param requestObj contains request parameters
     */
    public async getSectionPageSetup(requestObj: model.GetSectionPageSetupRequest): Promise<{response: http.ClientResponse, body: model.SectionPageSetupResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getSectionPageSetup.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/sections/{sectionIndex}/pageSetup"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sectionIndex" + "}", String(requestObj.sectionIndex));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getSectionPageSetup.');
        }

        // verify required parameter 'requestObj.sectionIndex' is not null or undefined
        if (requestObj.sectionIndex === null || requestObj.sectionIndex === undefined) {
            throw new Error('Required parameter "requestObj.sectionIndex" was null or undefined when calling getSectionPageSetup.');
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
        const result =  ObjectSerializer.deserialize(response.body, "SectionPageSetupResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Return a list of sections that are contained in the document.
     * @param requestObj contains request parameters
     */
    public async getSections(requestObj: model.GetSectionsRequest): Promise<{response: http.ClientResponse, body: model.SectionLinkCollectionResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getSections.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/sections"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getSections.');
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
        const result =  ObjectSerializer.deserialize(response.body, "SectionLinkCollectionResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Return a table.
     * @param requestObj contains request parameters
     */
    public async getTable(requestObj: model.GetTableRequest): Promise<{response: http.ClientResponse, body: model.TableResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getTable.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/tables/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getTable.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling getTable.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "nodePath", requestObj.nodePath);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "TableResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Return a table cell.
     * @param requestObj contains request parameters
     */
    public async getTableCell(requestObj: model.GetTableCellRequest): Promise<{response: http.ClientResponse, body: model.TableCellResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getTableCell.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{tableRowPath}/cells/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "tableRowPath" + "}", String(requestObj.tableRowPath))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getTableCell.');
        }

        // verify required parameter 'requestObj.tableRowPath' is not null or undefined
        if (requestObj.tableRowPath === null || requestObj.tableRowPath === undefined) {
            throw new Error('Required parameter "requestObj.tableRowPath" was null or undefined when calling getTableCell.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling getTableCell.');
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
        const result =  ObjectSerializer.deserialize(response.body, "TableCellResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Return a table cell format.
     * @param requestObj contains request parameters
     */
    public async getTableCellFormat(requestObj: model.GetTableCellFormatRequest): Promise<{response: http.ClientResponse, body: model.TableCellFormatResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getTableCellFormat.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{tableRowPath}/cells/{index}/cellformat"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "tableRowPath" + "}", String(requestObj.tableRowPath))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getTableCellFormat.');
        }

        // verify required parameter 'requestObj.tableRowPath' is not null or undefined
        if (requestObj.tableRowPath === null || requestObj.tableRowPath === undefined) {
            throw new Error('Required parameter "requestObj.tableRowPath" was null or undefined when calling getTableCellFormat.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling getTableCellFormat.');
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
        const result =  ObjectSerializer.deserialize(response.body, "TableCellFormatResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Return a table properties.
     * @param requestObj contains request parameters
     */
    public async getTableProperties(requestObj: model.GetTablePropertiesRequest): Promise<{response: http.ClientResponse, body: model.TablePropertiesResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getTableProperties.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/tables/{index}/properties"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getTableProperties.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling getTableProperties.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "nodePath", requestObj.nodePath);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "TablePropertiesResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Return a table row.
     * @param requestObj contains request parameters
     */
    public async getTableRow(requestObj: model.GetTableRowRequest): Promise<{response: http.ClientResponse, body: model.TableRowResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getTableRow.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{tablePath}/rows/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "tablePath" + "}", String(requestObj.tablePath))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getTableRow.');
        }

        // verify required parameter 'requestObj.tablePath' is not null or undefined
        if (requestObj.tablePath === null || requestObj.tablePath === undefined) {
            throw new Error('Required parameter "requestObj.tablePath" was null or undefined when calling getTableRow.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling getTableRow.');
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
        const result =  ObjectSerializer.deserialize(response.body, "TableRowResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Return a table row format.
     * @param requestObj contains request parameters
     */
    public async getTableRowFormat(requestObj: model.GetTableRowFormatRequest): Promise<{response: http.ClientResponse, body: model.TableRowFormatResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getTableRowFormat.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{tablePath}/rows/{index}/rowformat"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "tablePath" + "}", String(requestObj.tablePath))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getTableRowFormat.');
        }

        // verify required parameter 'requestObj.tablePath' is not null or undefined
        if (requestObj.tablePath === null || requestObj.tablePath === undefined) {
            throw new Error('Required parameter "requestObj.tablePath" was null or undefined when calling getTableRowFormat.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling getTableRowFormat.');
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
        const result =  ObjectSerializer.deserialize(response.body, "TableRowFormatResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Return a list of tables that are contained in the document.
     * @param requestObj contains request parameters
     */
    public async getTables(requestObj: model.GetTablesRequest): Promise<{response: http.ClientResponse, body: model.TableLinkCollectionResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getTables.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/tables"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getTables.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "nodePath", requestObj.nodePath);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "TableLinkCollectionResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Adds table to document, returns added table's data.             
     * @param requestObj contains request parameters
     */
    public async insertTable(requestObj: model.InsertTableRequest): Promise<{response: http.ClientResponse, body: model.TableResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling insertTable.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/tables"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling insertTable.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "nodePath", requestObj.nodePath);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.table, requestObj.table.constructor.name === "Object" ? "TableInsert" : requestObj.table.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "TableResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Adds table cell to table, returns added cell's data.             
     * @param requestObj contains request parameters
     */
    public async insertTableCell(requestObj: model.InsertTableCellRequest): Promise<{response: http.ClientResponse, body: model.TableCellResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling insertTableCell.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{tableRowPath}/cells"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "tableRowPath" + "}", String(requestObj.tableRowPath));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling insertTableCell.');
        }

        // verify required parameter 'requestObj.tableRowPath' is not null or undefined
        if (requestObj.tableRowPath === null || requestObj.tableRowPath === undefined) {
            throw new Error('Required parameter "requestObj.tableRowPath" was null or undefined when calling insertTableCell.');
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
            body: ObjectSerializer.serialize(requestObj.cell, requestObj.cell.constructor.name === "Object" ? "TableCellInsert" : requestObj.cell.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "TableCellResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Adds table row to table, returns added row's data.             
     * @param requestObj contains request parameters
     */
    public async insertTableRow(requestObj: model.InsertTableRowRequest): Promise<{response: http.ClientResponse, body: model.TableRowResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling insertTableRow.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{tablePath}/rows"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "tablePath" + "}", String(requestObj.tablePath));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling insertTableRow.');
        }

        // verify required parameter 'requestObj.tablePath' is not null or undefined
        if (requestObj.tablePath === null || requestObj.tablePath === undefined) {
            throw new Error('Required parameter "requestObj.tablePath" was null or undefined when calling insertTableRow.');
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
            body: ObjectSerializer.serialize(requestObj.row, requestObj.row.constructor.name === "Object" ? "TableRowInsert" : requestObj.row.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "TableRowResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Append documents to original document.
     * @param requestObj contains request parameters
     */
    public async postAppendDocument(requestObj: model.PostAppendDocumentRequest): Promise<{response: http.ClientResponse, body: model.DocumentResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postAppendDocument.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/appendDocument"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postAppendDocument.');
        }

        // verify required parameter 'requestObj.documentList' is not null or undefined
        if (requestObj.documentList === null || requestObj.documentList === undefined) {
            throw new Error('Required parameter "requestObj.documentList" was null or undefined when calling postAppendDocument.');
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
            body: ObjectSerializer.serialize(requestObj.documentList, requestObj.documentList.constructor.name === "Object" ? "DocumentEntryList" : requestObj.documentList.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "DocumentResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Change document protection.
     * @param requestObj contains request parameters
     */
    public async postChangeDocumentProtection(requestObj: model.PostChangeDocumentProtectionRequest): Promise<{response: http.ClientResponse, body: model.ProtectionDataResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postChangeDocumentProtection.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/protection"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postChangeDocumentProtection.');
        }

        // verify required parameter 'requestObj.protectionRequest' is not null or undefined
        if (requestObj.protectionRequest === null || requestObj.protectionRequest === undefined) {
            throw new Error('Required parameter "requestObj.protectionRequest" was null or undefined when calling postChangeDocumentProtection.');
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
            body: ObjectSerializer.serialize(requestObj.protectionRequest, requestObj.protectionRequest.constructor.name === "Object" ? "ProtectionRequest" : requestObj.protectionRequest.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "ProtectionDataResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Updates the comment, returns updated comment's data.
     * @param requestObj contains request parameters
     */
    public async postComment(requestObj: model.PostCommentRequest): Promise<{response: http.ClientResponse, body: model.CommentResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postComment.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/comments/{commentIndex}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "commentIndex" + "}", String(requestObj.commentIndex));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postComment.');
        }

        // verify required parameter 'requestObj.commentIndex' is not null or undefined
        if (requestObj.commentIndex === null || requestObj.commentIndex === undefined) {
            throw new Error('Required parameter "requestObj.commentIndex" was null or undefined when calling postComment.');
        }

        // verify required parameter 'requestObj.comment' is not null or undefined
        if (requestObj.comment === null || requestObj.comment === undefined) {
            throw new Error('Required parameter "requestObj.comment" was null or undefined when calling postComment.');
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
            body: ObjectSerializer.serialize(requestObj.comment, requestObj.comment.constructor.name === "Object" ? "Comment" : requestObj.comment.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CommentResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Compare document with original document.
     * @param requestObj contains request parameters
     */
    public async postCompareDocument(requestObj: model.PostCompareDocumentRequest): Promise<{response: http.ClientResponse, body: model.DocumentResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postCompareDocument.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/compareDocument"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postCompareDocument.');
        }

        // verify required parameter 'requestObj.compareData' is not null or undefined
        if (requestObj.compareData === null || requestObj.compareData === undefined) {
            throw new Error('Required parameter "requestObj.compareData" was null or undefined when calling postCompareDocument.');
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
            body: ObjectSerializer.serialize(requestObj.compareData, requestObj.compareData.constructor.name === "Object" ? "CompareData" : requestObj.compareData.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "DocumentResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Execute document mail merge operation.
     * @param requestObj contains request parameters
     */
    public async postDocumentExecuteMailMerge(requestObj: model.PostDocumentExecuteMailMergeRequest): Promise<{response: http.ClientResponse, body: model.DocumentResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postDocumentExecuteMailMerge.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/executeMailMerge"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postDocumentExecuteMailMerge.');
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
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        (requestOptions as any).formData = formParams;        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "DocumentResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Updates font properties, returns updated font data.
     * @param requestObj contains request parameters
     */
    public async postDocumentParagraphRunFont(requestObj: model.PostDocumentParagraphRunFontRequest): Promise<{response: http.ClientResponse, body: model.FontResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postDocumentParagraphRunFont.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{paragraphPath}/runs/{index}/font"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "paragraphPath" + "}", String(requestObj.paragraphPath))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postDocumentParagraphRunFont.');
        }

        // verify required parameter 'requestObj.fontDto' is not null or undefined
        if (requestObj.fontDto === null || requestObj.fontDto === undefined) {
            throw new Error('Required parameter "requestObj.fontDto" was null or undefined when calling postDocumentParagraphRunFont.');
        }

        // verify required parameter 'requestObj.paragraphPath' is not null or undefined
        if (requestObj.paragraphPath === null || requestObj.paragraphPath === undefined) {
            throw new Error('Required parameter "requestObj.paragraphPath" was null or undefined when calling postDocumentParagraphRunFont.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling postDocumentParagraphRunFont.');
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
            body: ObjectSerializer.serialize(requestObj.fontDto, requestObj.fontDto.constructor.name === "Object" ? "Font" : requestObj.fontDto.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FontResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Convert document to destination format with detailed settings and save result to storage.
     * @param requestObj contains request parameters
     */
    public async postDocumentSaveAs(requestObj: model.PostDocumentSaveAsRequest): Promise<{response: http.ClientResponse, body: model.SaveResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postDocumentSaveAs.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/saveAs"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postDocumentSaveAs.');
        }

        // verify required parameter 'requestObj.saveOptionsData' is not null or undefined
        if (requestObj.saveOptionsData === null || requestObj.saveOptionsData === undefined) {
            throw new Error('Required parameter "requestObj.saveOptionsData" was null or undefined when calling postDocumentSaveAs.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsLocation", requestObj.fontsLocation);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.saveOptionsData, requestObj.saveOptionsData.constructor.name === "Object" ? "SaveOptionsData" : requestObj.saveOptionsData.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "SaveResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Updates drawing object, returns updated  drawing object's data.
     * @param requestObj contains request parameters
     */
    public async postDrawingObject(requestObj: model.PostDrawingObjectRequest): Promise<{response: http.ClientResponse, body: model.DrawingObjectResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postDrawingObject.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/drawingObjects/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postDrawingObject.');
        }

        // verify required parameter 'requestObj.drawingObject' is not null or undefined
        if (requestObj.drawingObject === null || requestObj.drawingObject === undefined) {
            throw new Error('Required parameter "requestObj.drawingObject" was null or undefined when calling postDrawingObject.');
        }

        // verify required parameter 'requestObj.imageFile' is not null or undefined
        if (requestObj.imageFile === null || requestObj.imageFile === undefined) {
            throw new Error('Required parameter "requestObj.imageFile" was null or undefined when calling postDrawingObject.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling postDrawingObject.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "nodePath", requestObj.nodePath);
        if (requestObj.drawingObject !== undefined) {
            formParams.DrawingObject = ObjectSerializer.serialize(requestObj.drawingObject, "string");
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

        (requestOptions as any).formData = formParams;        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "DrawingObjectResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Populate document template with data.
     * @param requestObj contains request parameters
     */
    public async postExecuteTemplate(requestObj: model.PostExecuteTemplateRequest): Promise<{response: http.ClientResponse, body: model.DocumentResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postExecuteTemplate.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/executeTemplate"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postExecuteTemplate.');
        }

        // verify required parameter 'requestObj.data' is not null or undefined
        if (requestObj.data === null || requestObj.data === undefined) {
            throw new Error('Required parameter "requestObj.data" was null or undefined when calling postExecuteTemplate.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "cleanup", requestObj.cleanup);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "useWholeParagraphAsRegion", requestObj.useWholeParagraphAsRegion);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "withRegions", requestObj.withRegions);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        if (requestObj.data !== undefined) {
            formParams.Data = ObjectSerializer.serialize(requestObj.data, "string");
        }

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        (requestOptions as any).formData = formParams;        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "DocumentResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Updates field's properties, returns updated field's data.
     * @param requestObj contains request parameters
     */
    public async postField(requestObj: model.PostFieldRequest): Promise<{response: http.ClientResponse, body: model.FieldResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postField.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/fields/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postField.');
        }

        // verify required parameter 'requestObj.field' is not null or undefined
        if (requestObj.field === null || requestObj.field === undefined) {
            throw new Error('Required parameter "requestObj.field" was null or undefined when calling postField.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling postField.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "nodePath", requestObj.nodePath);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.field, requestObj.field.constructor.name === "Object" ? "Field" : requestObj.field.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FieldResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Updates footnote's properties, returns updated run's data.
     * @param requestObj contains request parameters
     */
    public async postFootnote(requestObj: model.PostFootnoteRequest): Promise<{response: http.ClientResponse, body: model.FootnoteResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postFootnote.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/footnotes/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postFootnote.');
        }

        // verify required parameter 'requestObj.footnoteDto' is not null or undefined
        if (requestObj.footnoteDto === null || requestObj.footnoteDto === undefined) {
            throw new Error('Required parameter "requestObj.footnoteDto" was null or undefined when calling postFootnote.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling postFootnote.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "nodePath", requestObj.nodePath);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.footnoteDto, requestObj.footnoteDto.constructor.name === "Object" ? "Footnote" : requestObj.footnoteDto.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FootnoteResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Updates properties of form field, returns updated form field.
     * @param requestObj contains request parameters
     */
    public async postFormField(requestObj: model.PostFormFieldRequest): Promise<{response: http.ClientResponse, body: model.FormFieldResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postFormField.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/formfields/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postFormField.');
        }

        // verify required parameter 'requestObj.formField' is not null or undefined
        if (requestObj.formField === null || requestObj.formField === undefined) {
            throw new Error('Required parameter "requestObj.formField" was null or undefined when calling postFormField.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling postFormField.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "nodePath", requestObj.nodePath);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.formField, requestObj.formField.constructor.name === "Object" ? "FormField" : requestObj.formField.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FormFieldResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Insert document watermark image.
     * @param requestObj contains request parameters
     */
    public async postInsertDocumentWatermarkImage(requestObj: model.PostInsertDocumentWatermarkImageRequest): Promise<{response: http.ClientResponse, body: model.DocumentResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postInsertDocumentWatermarkImage.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/watermark/insertImage"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postInsertDocumentWatermarkImage.');
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

        (requestOptions as any).formData = formParams;        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "DocumentResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Insert document watermark text.
     * @param requestObj contains request parameters
     */
    public async postInsertDocumentWatermarkText(requestObj: model.PostInsertDocumentWatermarkTextRequest): Promise<{response: http.ClientResponse, body: model.DocumentResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postInsertDocumentWatermarkText.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/watermark/insertText"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postInsertDocumentWatermarkText.');
        }

        // verify required parameter 'requestObj.watermarkText' is not null or undefined
        if (requestObj.watermarkText === null || requestObj.watermarkText === undefined) {
            throw new Error('Required parameter "requestObj.watermarkText" was null or undefined when calling postInsertDocumentWatermarkText.');
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
            body: ObjectSerializer.serialize(requestObj.watermarkText, requestObj.watermarkText.constructor.name === "Object" ? "WatermarkText" : requestObj.watermarkText.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "DocumentResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Insert document page numbers.
     * @param requestObj contains request parameters
     */
    public async postInsertPageNumbers(requestObj: model.PostInsertPageNumbersRequest): Promise<{response: http.ClientResponse, body: model.DocumentResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postInsertPageNumbers.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/insertPageNumbers"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postInsertPageNumbers.');
        }

        // verify required parameter 'requestObj.pageNumber' is not null or undefined
        if (requestObj.pageNumber === null || requestObj.pageNumber === undefined) {
            throw new Error('Required parameter "requestObj.pageNumber" was null or undefined when calling postInsertPageNumbers.');
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
            body: ObjectSerializer.serialize(requestObj.pageNumber, requestObj.pageNumber.constructor.name === "Object" ? "PageNumber" : requestObj.pageNumber.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "DocumentResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Loads new document from web into the file with any supported format of data.
     * @param requestObj contains request parameters
     */
    public async postLoadWebDocument(requestObj: model.PostLoadWebDocumentRequest): Promise<{response: http.ClientResponse, body: model.SaveResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postLoadWebDocument.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/loadWebDocument";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.data' is not null or undefined
        if (requestObj.data === null || requestObj.data === undefined) {
            throw new Error('Required parameter "requestObj.data" was null or undefined when calling postLoadWebDocument.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.data, requestObj.data.constructor.name === "Object" ? "LoadWebDocumentData" : requestObj.data.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "SaveResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Replace document text.
     * @param requestObj contains request parameters
     */
    public async postReplaceText(requestObj: model.PostReplaceTextRequest): Promise<{response: http.ClientResponse, body: model.ReplaceTextResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postReplaceText.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/replaceText"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postReplaceText.');
        }

        // verify required parameter 'requestObj.replaceText' is not null or undefined
        if (requestObj.replaceText === null || requestObj.replaceText === undefined) {
            throw new Error('Required parameter "requestObj.replaceText" was null or undefined when calling postReplaceText.');
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
            body: ObjectSerializer.serialize(requestObj.replaceText, requestObj.replaceText.constructor.name === "Object" ? "ReplaceTextRequest" : requestObj.replaceText.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "ReplaceTextResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Updates run's properties, returns updated run's data.
     * @param requestObj contains request parameters
     */
    public async postRun(requestObj: model.PostRunRequest): Promise<{response: http.ClientResponse, body: model.RunResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postRun.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{paragraphPath}/runs/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "paragraphPath" + "}", String(requestObj.paragraphPath))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postRun.');
        }

        // verify required parameter 'requestObj.run' is not null or undefined
        if (requestObj.run === null || requestObj.run === undefined) {
            throw new Error('Required parameter "requestObj.run" was null or undefined when calling postRun.');
        }

        // verify required parameter 'requestObj.paragraphPath' is not null or undefined
        if (requestObj.paragraphPath === null || requestObj.paragraphPath === undefined) {
            throw new Error('Required parameter "requestObj.paragraphPath" was null or undefined when calling postRun.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling postRun.');
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
            body: ObjectSerializer.serialize(requestObj.run, requestObj.run.constructor.name === "Object" ? "Run" : requestObj.run.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "RunResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Split document.
     * @param requestObj contains request parameters
     */
    public async postSplitDocument(requestObj: model.PostSplitDocumentRequest): Promise<{response: http.ClientResponse, body: model.SplitDocumentResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postSplitDocument.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/split"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postSplitDocument.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "format", requestObj.format);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "from", requestObj.from);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "to", requestObj.to);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "zipOutput", requestObj.zipOutput);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsLocation", requestObj.fontsLocation);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "SplitDocumentResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Update document bookmark.
     * @param requestObj contains request parameters
     */
    public async postUpdateDocumentBookmark(requestObj: model.PostUpdateDocumentBookmarkRequest): Promise<{response: http.ClientResponse, body: model.BookmarkResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postUpdateDocumentBookmark.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/bookmarks/{bookmarkName}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "bookmarkName" + "}", String(requestObj.bookmarkName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postUpdateDocumentBookmark.');
        }

        // verify required parameter 'requestObj.bookmarkData' is not null or undefined
        if (requestObj.bookmarkData === null || requestObj.bookmarkData === undefined) {
            throw new Error('Required parameter "requestObj.bookmarkData" was null or undefined when calling postUpdateDocumentBookmark.');
        }

        // verify required parameter 'requestObj.bookmarkName' is not null or undefined
        if (requestObj.bookmarkName === null || requestObj.bookmarkName === undefined) {
            throw new Error('Required parameter "requestObj.bookmarkName" was null or undefined when calling postUpdateDocumentBookmark.');
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
            body: ObjectSerializer.serialize(requestObj.bookmarkData, requestObj.bookmarkData.constructor.name === "Object" ? "BookmarkData" : requestObj.bookmarkData.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "BookmarkResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Update (reevaluate) fields in document.
     * @param requestObj contains request parameters
     */
    public async postUpdateDocumentFields(requestObj: model.PostUpdateDocumentFieldsRequest): Promise<{response: http.ClientResponse, body: model.DocumentResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postUpdateDocumentFields.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/updateFields"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postUpdateDocumentFields.');
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
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "DocumentResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Adds comment to document, returns inserted comment's data.
     * @param requestObj contains request parameters
     */
    public async putComment(requestObj: model.PutCommentRequest): Promise<{response: http.ClientResponse, body: model.CommentResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putComment.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/comments"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling putComment.');
        }

        // verify required parameter 'requestObj.comment' is not null or undefined
        if (requestObj.comment === null || requestObj.comment === undefined) {
            throw new Error('Required parameter "requestObj.comment" was null or undefined when calling putComment.');
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
            body: ObjectSerializer.serialize(requestObj.comment, requestObj.comment.constructor.name === "Object" ? "Comment" : requestObj.comment.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CommentResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Convert document from request content to format specified.
     * @param requestObj contains request parameters
     */
    public async putConvertDocument(requestObj: model.PutConvertDocumentRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putConvertDocument.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/convert";
        const queryParameters: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.document' is not null or undefined
        if (requestObj.document === null || requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was null or undefined when calling putConvertDocument.');
        }

        // verify required parameter 'requestObj.format' is not null or undefined
        if (requestObj.format === null || requestObj.format === undefined) {
            throw new Error('Required parameter "requestObj.format" was null or undefined when calling putConvertDocument.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "format", requestObj.format);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "documentFileName", requestObj.documentFileName);
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

        (requestOptions as any).formData = formParams;        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /**
     * Creates new document. Document is created with format which is recognized from file extensions.  Supported extentions: \".doc\", \".docx\", \".docm\", \".dot\", \".dotm\", \".dotx\", \".flatopc\", \".fopc\", \".flatopc_macro\", \".fopc_macro\", \".flatopc_template\", \".fopc_template\", \".flatopc_template_macro\", \".fopc_template_macro\", \".wordml\", \".wml\", \".rtf\"
     * @param requestObj contains request parameters
     */
    public async putCreateDocument(requestObj: model.PutCreateDocumentRequest): Promise<{response: http.ClientResponse, body: model.DocumentResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putCreateDocument.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/create";
        const queryParameters: any = {};
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fileName", requestObj.fileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "DocumentResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Read document field names.
     * @param requestObj contains request parameters
     */
    public async putDocumentFieldNames(requestObj: model.PutDocumentFieldNamesRequest): Promise<{response: http.ClientResponse, body: model.FieldNamesResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putDocumentFieldNames.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/mailMergeFieldNames";
        const queryParameters: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.template' is not null or undefined
        if (requestObj.template === null || requestObj.template === undefined) {
            throw new Error('Required parameter "requestObj.template" was null or undefined when calling putDocumentFieldNames.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "useNonMergeFields", requestObj.useNonMergeFields);
        if (requestObj.template !== undefined) {
            formParams.Template = requestObj.template;
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        (requestOptions as any).formData = formParams;        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FieldNamesResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Convert document to tiff with detailed settings and save result to storage.
     * @param requestObj contains request parameters
     */
    public async putDocumentSaveAsTiff(requestObj: model.PutDocumentSaveAsTiffRequest): Promise<{response: http.ClientResponse, body: model.SaveResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putDocumentSaveAsTiff.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/saveAs/tiff"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling putDocumentSaveAsTiff.');
        }

        // verify required parameter 'requestObj.saveOptions' is not null or undefined
        if (requestObj.saveOptions === null || requestObj.saveOptions === undefined) {
            throw new Error('Required parameter "requestObj.saveOptions" was null or undefined when calling putDocumentSaveAsTiff.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "resultFile", requestObj.resultFile);
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
            body: ObjectSerializer.serialize(requestObj.saveOptions, requestObj.saveOptions.constructor.name === "Object" ? "TiffSaveOptionsData" : requestObj.saveOptions.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "SaveResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Adds  drawing object to document, returns added  drawing object's data.
     * @param requestObj contains request parameters
     */
    public async putDrawingObject(requestObj: model.PutDrawingObjectRequest): Promise<{response: http.ClientResponse, body: model.DrawingObjectResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putDrawingObject.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/drawingObjects"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling putDrawingObject.');
        }

        // verify required parameter 'requestObj.drawingObject' is not null or undefined
        if (requestObj.drawingObject === null || requestObj.drawingObject === undefined) {
            throw new Error('Required parameter "requestObj.drawingObject" was null or undefined when calling putDrawingObject.');
        }

        // verify required parameter 'requestObj.imageFile' is not null or undefined
        if (requestObj.imageFile === null || requestObj.imageFile === undefined) {
            throw new Error('Required parameter "requestObj.imageFile" was null or undefined when calling putDrawingObject.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "nodePath", requestObj.nodePath);
        if (requestObj.drawingObject !== undefined) {
            formParams.DrawingObject = ObjectSerializer.serialize(requestObj.drawingObject, "string");
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

        (requestOptions as any).formData = formParams;        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "DrawingObjectResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Execute document mail merge online.
     * @param requestObj contains request parameters
     */
    public async putExecuteMailMergeOnline(requestObj: model.PutExecuteMailMergeOnlineRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putExecuteMailMergeOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/executeMailMerge";
        const queryParameters: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.template' is not null or undefined
        if (requestObj.template === null || requestObj.template === undefined) {
            throw new Error('Required parameter "requestObj.template" was null or undefined when calling putExecuteMailMergeOnline.');
        }

        // verify required parameter 'requestObj.data' is not null or undefined
        if (requestObj.data === null || requestObj.data === undefined) {
            throw new Error('Required parameter "requestObj.data" was null or undefined when calling putExecuteMailMergeOnline.');
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

        (requestOptions as any).formData = formParams;        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /**
     * Populate document template with data online.
     * @param requestObj contains request parameters
     */
    public async putExecuteTemplateOnline(requestObj: model.PutExecuteTemplateOnlineRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putExecuteTemplateOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/executeTemplate";
        const queryParameters: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.template' is not null or undefined
        if (requestObj.template === null || requestObj.template === undefined) {
            throw new Error('Required parameter "requestObj.template" was null or undefined when calling putExecuteTemplateOnline.');
        }

        // verify required parameter 'requestObj.data' is not null or undefined
        if (requestObj.data === null || requestObj.data === undefined) {
            throw new Error('Required parameter "requestObj.data" was null or undefined when calling putExecuteTemplateOnline.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "cleanup", requestObj.cleanup);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "useWholeParagraphAsRegion", requestObj.useWholeParagraphAsRegion);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "withRegions", requestObj.withRegions);
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

        (requestOptions as any).formData = formParams;        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /**
     * Adds field to document, returns inserted field's data.
     * @param requestObj contains request parameters
     */
    public async putField(requestObj: model.PutFieldRequest): Promise<{response: http.ClientResponse, body: model.FieldResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putField.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/fields"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling putField.');
        }

        // verify required parameter 'requestObj.field' is not null or undefined
        if (requestObj.field === null || requestObj.field === undefined) {
            throw new Error('Required parameter "requestObj.field" was null or undefined when calling putField.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "nodePath", requestObj.nodePath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "insertBeforeNode", requestObj.insertBeforeNode);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.field, requestObj.field.constructor.name === "Object" ? "Field" : requestObj.field.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FieldResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Adds footnote to document, returns added footnote's data.
     * @param requestObj contains request parameters
     */
    public async putFootnote(requestObj: model.PutFootnoteRequest): Promise<{response: http.ClientResponse, body: model.FootnoteResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putFootnote.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/footnotes"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling putFootnote.');
        }

        // verify required parameter 'requestObj.footnoteDto' is not null or undefined
        if (requestObj.footnoteDto === null || requestObj.footnoteDto === undefined) {
            throw new Error('Required parameter "requestObj.footnoteDto" was null or undefined when calling putFootnote.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "nodePath", requestObj.nodePath);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.footnoteDto, requestObj.footnoteDto.constructor.name === "Object" ? "Footnote" : requestObj.footnoteDto.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FootnoteResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Adds form field to paragraph, returns added form field's data.
     * @param requestObj contains request parameters
     */
    public async putFormField(requestObj: model.PutFormFieldRequest): Promise<{response: http.ClientResponse, body: model.FormFieldResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putFormField.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/formfields"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling putFormField.');
        }

        // verify required parameter 'requestObj.formField' is not null or undefined
        if (requestObj.formField === null || requestObj.formField === undefined) {
            throw new Error('Required parameter "requestObj.formField" was null or undefined when calling putFormField.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "nodePath", requestObj.nodePath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "insertBeforeNode", requestObj.insertBeforeNode);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.formField, requestObj.formField.constructor.name === "Object" ? "FormField" : requestObj.formField.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FormFieldResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Insert to document header or footer.
     * @param requestObj contains request parameters
     */
    public async putHeaderFooter(requestObj: model.PutHeaderFooterRequest): Promise<{response: http.ClientResponse, body: model.HeaderFooterResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putHeaderFooter.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{sectionPath}/headersfooters"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling putHeaderFooter.');
        }

        // verify required parameter 'requestObj.headerFooterType' is not null or undefined
        if (requestObj.headerFooterType === null || requestObj.headerFooterType === undefined) {
            throw new Error('Required parameter "requestObj.headerFooterType" was null or undefined when calling putHeaderFooter.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "sectionPath", requestObj.sectionPath);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.headerFooterType, requestObj.headerFooterType.constructor.name === "Object" ? "string" : requestObj.headerFooterType.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "HeaderFooterResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Adds paragraph to document, returns added paragraph's data.
     * @param requestObj contains request parameters
     */
    public async putParagraph(requestObj: model.PutParagraphRequest): Promise<{response: http.ClientResponse, body: model.ParagraphResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putParagraph.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/paragraphs"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling putParagraph.');
        }

        // verify required parameter 'requestObj.paragraph' is not null or undefined
        if (requestObj.paragraph === null || requestObj.paragraph === undefined) {
            throw new Error('Required parameter "requestObj.paragraph" was null or undefined when calling putParagraph.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "nodePath", requestObj.nodePath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "insertBeforeNode", requestObj.insertBeforeNode);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.paragraph, requestObj.paragraph.constructor.name === "Object" ? "ParagraphInsert" : requestObj.paragraph.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "ParagraphResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Protect document.
     * @param requestObj contains request parameters
     */
    public async putProtectDocument(requestObj: model.PutProtectDocumentRequest): Promise<{response: http.ClientResponse, body: model.ProtectionDataResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putProtectDocument.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/protection"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling putProtectDocument.');
        }

        // verify required parameter 'requestObj.protectionRequest' is not null or undefined
        if (requestObj.protectionRequest === null || requestObj.protectionRequest === undefined) {
            throw new Error('Required parameter "requestObj.protectionRequest" was null or undefined when calling putProtectDocument.');
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
            body: ObjectSerializer.serialize(requestObj.protectionRequest, requestObj.protectionRequest.constructor.name === "Object" ? "ProtectionRequest" : requestObj.protectionRequest.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "ProtectionDataResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Adds run to document, returns added paragraph's data.
     * @param requestObj contains request parameters
     */
    public async putRun(requestObj: model.PutRunRequest): Promise<{response: http.ClientResponse, body: model.RunResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putRun.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{paragraphPath}/runs"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "paragraphPath" + "}", String(requestObj.paragraphPath));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling putRun.');
        }

        // verify required parameter 'requestObj.paragraphPath' is not null or undefined
        if (requestObj.paragraphPath === null || requestObj.paragraphPath === undefined) {
            throw new Error('Required parameter "requestObj.paragraphPath" was null or undefined when calling putRun.');
        }

        // verify required parameter 'requestObj.run' is not null or undefined
        if (requestObj.run === null || requestObj.run === undefined) {
            throw new Error('Required parameter "requestObj.run" was null or undefined when calling putRun.');
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
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.run, requestObj.run.constructor.name === "Object" ? "Run" : requestObj.run.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "RunResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Reject all revisions in document
     * @param requestObj contains request parameters
     */
    public async rejectAllRevisions(requestObj: model.RejectAllRevisionsRequest): Promise<{response: http.ClientResponse, body: model.RevisionsModificationResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling rejectAllRevisions.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/revisions/rejectAll"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling rejectAllRevisions.');
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
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "RevisionsModificationResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Renders drawing object to specified format.
     * @param requestObj contains request parameters
     */
    public async renderDrawingObject(requestObj: model.RenderDrawingObjectRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling renderDrawingObject.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/drawingObjects/{index}/render"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling renderDrawingObject.');
        }

        // verify required parameter 'requestObj.format' is not null or undefined
        if (requestObj.format === null || requestObj.format === undefined) {
            throw new Error('Required parameter "requestObj.format" was null or undefined when calling renderDrawingObject.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling renderDrawingObject.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "format", requestObj.format);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "nodePath", requestObj.nodePath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsLocation", requestObj.fontsLocation);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /**
     * Renders math object to specified format.
     * @param requestObj contains request parameters
     */
    public async renderMathObject(requestObj: model.RenderMathObjectRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling renderMathObject.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/OfficeMathObjects/{index}/render"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling renderMathObject.');
        }

        // verify required parameter 'requestObj.format' is not null or undefined
        if (requestObj.format === null || requestObj.format === undefined) {
            throw new Error('Required parameter "requestObj.format" was null or undefined when calling renderMathObject.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling renderMathObject.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "format", requestObj.format);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "nodePath", requestObj.nodePath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsLocation", requestObj.fontsLocation);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /**
     * Renders page to specified format.
     * @param requestObj contains request parameters
     */
    public async renderPage(requestObj: model.RenderPageRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling renderPage.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/pages/{pageIndex}/render"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "pageIndex" + "}", String(requestObj.pageIndex));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling renderPage.');
        }

        // verify required parameter 'requestObj.pageIndex' is not null or undefined
        if (requestObj.pageIndex === null || requestObj.pageIndex === undefined) {
            throw new Error('Required parameter "requestObj.pageIndex" was null or undefined when calling renderPage.');
        }

        // verify required parameter 'requestObj.format' is not null or undefined
        if (requestObj.format === null || requestObj.format === undefined) {
            throw new Error('Required parameter "requestObj.format" was null or undefined when calling renderPage.');
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
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /**
     * Renders paragraph to specified format.
     * @param requestObj contains request parameters
     */
    public async renderParagraph(requestObj: model.RenderParagraphRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling renderParagraph.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/paragraphs/{index}/render"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling renderParagraph.');
        }

        // verify required parameter 'requestObj.format' is not null or undefined
        if (requestObj.format === null || requestObj.format === undefined) {
            throw new Error('Required parameter "requestObj.format" was null or undefined when calling renderParagraph.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling renderParagraph.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "format", requestObj.format);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "nodePath", requestObj.nodePath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsLocation", requestObj.fontsLocation);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /**
     * Renders table to specified format.
     * @param requestObj contains request parameters
     */
    public async renderTable(requestObj: model.RenderTableRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling renderTable.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/tables/{index}/render"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling renderTable.');
        }

        // verify required parameter 'requestObj.format' is not null or undefined
        if (requestObj.format === null || requestObj.format === undefined) {
            throw new Error('Required parameter "requestObj.format" was null or undefined when calling renderTable.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling renderTable.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "format", requestObj.format);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "nodePath", requestObj.nodePath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fontsLocation", requestObj.fontsLocation);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /**
     * Resets font's cache.
     * @param requestObj contains request parameters
     */
    public async resetCache(requestObj: model.ResetCacheRequest): Promise<{response: http.ClientResponse, body: model.AsposeResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling resetCache.');
        }

        const localVarPath = this.configuration.getApiBaseUrl() + "/words/fonts/cache";
        const queryParameters: any = {};
        
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Search text in document.
     * @param requestObj contains request parameters
     */
    public async search(requestObj: model.SearchRequest): Promise<{response: http.ClientResponse, body: model.SearchResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling search.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/search"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling search.');
        }

        // verify required parameter 'requestObj.pattern' is not null or undefined
        if (requestObj.pattern === null || requestObj.pattern === undefined) {
            throw new Error('Required parameter "requestObj.pattern" was null or undefined when calling search.');
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
        const result =  ObjectSerializer.deserialize(response.body, "SearchResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Updates border properties.              'nodePath' should refer to node with cell or row
     * @param requestObj contains request parameters
     */
    public async updateBorder(requestObj: model.UpdateBorderRequest): Promise<{response: http.ClientResponse, body: model.BorderResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateBorder.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/borders/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "nodePath" + "}", String(requestObj.nodePath))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling updateBorder.');
        }

        // verify required parameter 'requestObj.borderProperties' is not null or undefined
        if (requestObj.borderProperties === null || requestObj.borderProperties === undefined) {
            throw new Error('Required parameter "requestObj.borderProperties" was null or undefined when calling updateBorder.');
        }

        // verify required parameter 'requestObj.nodePath' is not null or undefined
        if (requestObj.nodePath === null || requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was null or undefined when calling updateBorder.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling updateBorder.');
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
            body: ObjectSerializer.serialize(requestObj.borderProperties, requestObj.borderProperties.constructor.name === "Object" ? "Border" : requestObj.borderProperties.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "BorderResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Update page setup of section.
     * @param requestObj contains request parameters
     */
    public async updateSectionPageSetup(requestObj: model.UpdateSectionPageSetupRequest): Promise<{response: http.ClientResponse, body: model.SectionPageSetupResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateSectionPageSetup.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/sections/{sectionIndex}/pageSetup"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sectionIndex" + "}", String(requestObj.sectionIndex));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling updateSectionPageSetup.');
        }

        // verify required parameter 'requestObj.sectionIndex' is not null or undefined
        if (requestObj.sectionIndex === null || requestObj.sectionIndex === undefined) {
            throw new Error('Required parameter "requestObj.sectionIndex" was null or undefined when calling updateSectionPageSetup.');
        }

        // verify required parameter 'requestObj.pageSetup' is not null or undefined
        if (requestObj.pageSetup === null || requestObj.pageSetup === undefined) {
            throw new Error('Required parameter "requestObj.pageSetup" was null or undefined when calling updateSectionPageSetup.');
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
            body: ObjectSerializer.serialize(requestObj.pageSetup, requestObj.pageSetup.constructor.name === "Object" ? "PageSetup" : requestObj.pageSetup.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "SectionPageSetupResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Updates a table cell format.
     * @param requestObj contains request parameters
     */
    public async updateTableCellFormat(requestObj: model.UpdateTableCellFormatRequest): Promise<{response: http.ClientResponse, body: model.TableCellFormatResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateTableCellFormat.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{tableRowPath}/cells/{index}/cellformat"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "tableRowPath" + "}", String(requestObj.tableRowPath))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling updateTableCellFormat.');
        }

        // verify required parameter 'requestObj.tableRowPath' is not null or undefined
        if (requestObj.tableRowPath === null || requestObj.tableRowPath === undefined) {
            throw new Error('Required parameter "requestObj.tableRowPath" was null or undefined when calling updateTableCellFormat.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling updateTableCellFormat.');
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
            body: ObjectSerializer.serialize(requestObj.format, requestObj.format.constructor.name === "Object" ? "TableCellFormat" : requestObj.format.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "TableCellFormatResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Updates a table properties.
     * @param requestObj contains request parameters
     */
    public async updateTableProperties(requestObj: model.UpdateTablePropertiesRequest): Promise<{response: http.ClientResponse, body: model.TablePropertiesResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateTableProperties.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/tables/{index}/properties"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling updateTableProperties.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling updateTableProperties.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "nodePath", requestObj.nodePath);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.properties, requestObj.properties.constructor.name === "Object" ? "TableProperties" : requestObj.properties.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "TablePropertiesResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Updates a table row format.
     * @param requestObj contains request parameters
     */
    public async updateTableRowFormat(requestObj: model.UpdateTableRowFormatRequest): Promise<{response: http.ClientResponse, body: model.TableRowFormatResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateTableRowFormat.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{tablePath}/rows/{index}/rowformat"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "tablePath" + "}", String(requestObj.tablePath))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling updateTableRowFormat.');
        }

        // verify required parameter 'requestObj.tablePath' is not null or undefined
        if (requestObj.tablePath === null || requestObj.tablePath === undefined) {
            throw new Error('Required parameter "requestObj.tablePath" was null or undefined when calling updateTableRowFormat.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling updateTableRowFormat.');
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
            body: ObjectSerializer.serialize(requestObj.format, requestObj.format.constructor.name === "Object" ? "TableRowFormat" : requestObj.format.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "TableRowFormatResponse");
        return Promise.resolve({body: result, response});
    }

}

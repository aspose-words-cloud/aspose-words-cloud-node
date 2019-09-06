/*
* MIT License

* Copyright (c) 2019 Aspose Pty Ltd

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
import * as model from "./model/model";

export * from "./model/model";

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
     */
    constructor(appSID: string, appKey: string, baseUrl?: string, debugMode?: boolean) {
        this.configuration = new Configuration(appSID, appKey, baseUrl, debugMode);
    }

    /**
     * Accepts all revisions in document.
     * @param requestObj contains request parameters
     */
    public async acceptAllRevisions(requestObj: model.AcceptAllRevisionsRequest): Promise<{response: http.IncomingMessage, body: model.RevisionsModificationResponse}> {
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
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "RevisionsModificationResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Appends documents to original document.
     * @param requestObj contains request parameters
     */
    public async appendDocument(requestObj: model.AppendDocumentRequest): Promise<{response: http.IncomingMessage, body: model.DocumentResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling appendDocument.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/appendDocument"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling appendDocument.');
        }

        // verify required parameter 'requestObj.documentList' is not null or undefined
        if (requestObj.documentList === null || requestObj.documentList === undefined) {
            throw new Error('Required parameter "requestObj.documentList" was null or undefined when calling appendDocument.');
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
            body: ObjectSerializer.serialize(requestObj.documentList, requestObj.documentList.constructor.name === "Object" ? "DocumentEntryList" : requestObj.documentList.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "DocumentResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Classifies raw text.
     * @param requestObj contains request parameters
     */
    public async classify(requestObj: model.ClassifyRequest): Promise<{response: http.IncomingMessage, body: model.ClassificationResponse}> {
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
     * Classifies document.
     * @param requestObj contains request parameters
     */
    public async classifyDocument(requestObj: model.ClassifyDocumentRequest): Promise<{response: http.IncomingMessage, body: model.ClassificationResponse}> {
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
     * Compares document with original document.
     * @param requestObj contains request parameters
     */
    public async compareDocument(requestObj: model.CompareDocumentRequest): Promise<{response: http.IncomingMessage, body: model.DocumentResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling compareDocument.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/compareDocument"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling compareDocument.');
        }

        // verify required parameter 'requestObj.compareData' is not null or undefined
        if (requestObj.compareData === null || requestObj.compareData === undefined) {
            throw new Error('Required parameter "requestObj.compareData" was null or undefined when calling compareDocument.');
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
            body: ObjectSerializer.serialize(requestObj.compareData, requestObj.compareData.constructor.name === "Object" ? "CompareData" : requestObj.compareData.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "DocumentResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Converts document from the request's content to the specified format .
     * @param requestObj contains request parameters
     */
    public async convertDocument(requestObj: model.ConvertDocumentRequest): Promise<{response: http.IncomingMessage, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling convertDocument.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/convert";
        const queryParameters: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.document' is not null or undefined
        if (requestObj.document === null || requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was null or undefined when calling convertDocument.');
        }

        // verify required parameter 'requestObj.format' is not null or undefined
        if (requestObj.format === null || requestObj.format === undefined) {
            throw new Error('Required parameter "requestObj.format" was null or undefined when calling convertDocument.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "format", requestObj.format);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fileNameFieldValue", requestObj.fileNameFieldValue);
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

        requestOptions.formData = formParams;        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /**
     * Copy file
     * @param requestObj contains request parameters
     */
    public async copyFile(requestObj: model.CopyFileRequest): Promise<{response: http.IncomingMessage}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling copyFile.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/storage/file/copy/{srcPath}"
            .replace("{" + "srcPath" + "}", String(requestObj.srcPath));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.destPath' is not null or undefined
        if (requestObj.destPath === null || requestObj.destPath === undefined) {
            throw new Error('Required parameter "requestObj.destPath" was null or undefined when calling copyFile.');
        }

        // verify required parameter 'requestObj.srcPath' is not null or undefined
        if (requestObj.srcPath === null || requestObj.srcPath === undefined) {
            throw new Error('Required parameter "requestObj.srcPath" was null or undefined when calling copyFile.');
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
        return Promise.resolve({response});
    }

    /**
     * Copy folder
     * @param requestObj contains request parameters
     */
    public async copyFolder(requestObj: model.CopyFolderRequest): Promise<{response: http.IncomingMessage}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling copyFolder.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/storage/folder/copy/{srcPath}"
            .replace("{" + "srcPath" + "}", String(requestObj.srcPath));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.destPath' is not null or undefined
        if (requestObj.destPath === null || requestObj.destPath === undefined) {
            throw new Error('Required parameter "requestObj.destPath" was null or undefined when calling copyFolder.');
        }

        // verify required parameter 'requestObj.srcPath' is not null or undefined
        if (requestObj.srcPath === null || requestObj.srcPath === undefined) {
            throw new Error('Required parameter "requestObj.srcPath" was null or undefined when calling copyFolder.');
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
        return Promise.resolve({response});
    }

    /**
     * Creates new document. Document is created with format which is recognized from file extensions. Supported extensions: \".doc\", \".docx\", \".docm\", \".dot\", \".dotm\", \".dotx\", \".flatopc\", \".fopc\", \".flatopc_macro\", \".fopc_macro\", \".flatopc_template\", \".fopc_template\", \".flatopc_template_macro\", \".fopc_template_macro\", \".wordml\", \".wml\", \".rtf\".
     * @param requestObj contains request parameters
     */
    public async createDocument(requestObj: model.CreateDocumentRequest): Promise<{response: http.IncomingMessage, body: model.DocumentResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling createDocument.');
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
     * Create the folder
     * @param requestObj contains request parameters
     */
    public async createFolder(requestObj: model.CreateFolderRequest): Promise<{response: http.IncomingMessage}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling createFolder.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/storage/folder/{path}"
            .replace("{" + "path" + "}", String(requestObj.path));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling createFolder.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve({response});
    }

    /**
     * Adds new or update existing document property.
     * @param requestObj contains request parameters
     */
    public async createOrUpdateDocumentProperty(requestObj: model.CreateOrUpdateDocumentPropertyRequest): Promise<{response: http.IncomingMessage, body: model.DocumentPropertyResponse}> {
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
            method: "PUT",
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
     * Resets border properties to default values.              'nodePath' should refer to node with cell or row.
     * @param requestObj contains request parameters
     */
    public async deleteBorder(requestObj: model.DeleteBorderRequest): Promise<{response: http.IncomingMessage, body: model.BorderResponse}> {
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
     * Resets borders properties to default values.              'nodePath' should refer to node with cell or row.
     * @param requestObj contains request parameters
     */
    public async deleteBorders(requestObj: model.DeleteBordersRequest): Promise<{response: http.IncomingMessage, body: model.BordersResponse}> {
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
     * Removes comment from document.
     * @param requestObj contains request parameters
     */
    public async deleteComment(requestObj: model.DeleteCommentRequest): Promise<{response: http.IncomingMessage}> {
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
        return Promise.resolve({response});
    }

    /**
     * Deletes document property.
     * @param requestObj contains request parameters
     */
    public async deleteDocumentProperty(requestObj: model.DeleteDocumentPropertyRequest): Promise<{response: http.IncomingMessage}> {
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
        return Promise.resolve({response});
    }

    /**
     * Removes drawing object from document.
     * @param requestObj contains request parameters
     */
    public async deleteDrawingObject(requestObj: model.DeleteDrawingObjectRequest): Promise<{response: http.IncomingMessage}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteDrawingObject.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/drawingObjects/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "nodePath" + "}", String(requestObj.nodePath))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deleteDrawingObject.');
        }

        // verify required parameter 'requestObj.nodePath' is not null or undefined
        if (requestObj.nodePath === null || requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was null or undefined when calling deleteDrawingObject.');
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
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve({response});
    }

    /**
     * Removes drawing object from document.
     * @param requestObj contains request parameters
     */
    public async deleteDrawingObjectWithoutNodePath(requestObj: model.DeleteDrawingObjectWithoutNodePathRequest): Promise<{response: http.IncomingMessage}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteDrawingObjectWithoutNodePath.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/drawingObjects/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deleteDrawingObjectWithoutNodePath.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling deleteDrawingObjectWithoutNodePath.');
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
        return Promise.resolve({response});
    }

    /**
     * Deletes field from document.
     * @param requestObj contains request parameters
     */
    public async deleteField(requestObj: model.DeleteFieldRequest): Promise<{response: http.IncomingMessage}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteField.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/fields/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "nodePath" + "}", String(requestObj.nodePath))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deleteField.');
        }

        // verify required parameter 'requestObj.nodePath' is not null or undefined
        if (requestObj.nodePath === null || requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was null or undefined when calling deleteField.');
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
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve({response});
    }

    /**
     * Deletes field from document.
     * @param requestObj contains request parameters
     */
    public async deleteFieldWithoutNodePath(requestObj: model.DeleteFieldWithoutNodePathRequest): Promise<{response: http.IncomingMessage}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteFieldWithoutNodePath.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/fields/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deleteFieldWithoutNodePath.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling deleteFieldWithoutNodePath.');
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
        return Promise.resolve({response});
    }

    /**
     * Removes fields from section paragraph.
     * @param requestObj contains request parameters
     */
    public async deleteFields(requestObj: model.DeleteFieldsRequest): Promise<{response: http.IncomingMessage}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteFields.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/fields"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "nodePath" + "}", String(requestObj.nodePath));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deleteFields.');
        }

        // verify required parameter 'requestObj.nodePath' is not null or undefined
        if (requestObj.nodePath === null || requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was null or undefined when calling deleteFields.');
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
        return Promise.resolve({response});
    }

    /**
     * Removes fields from section paragraph.
     * @param requestObj contains request parameters
     */
    public async deleteFieldsWithoutNodePath(requestObj: model.DeleteFieldsWithoutNodePathRequest): Promise<{response: http.IncomingMessage}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteFieldsWithoutNodePath.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/fields"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deleteFieldsWithoutNodePath.');
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
        return Promise.resolve({response});
    }

    /**
     * Delete file
     * @param requestObj contains request parameters
     */
    public async deleteFile(requestObj: model.DeleteFileRequest): Promise<{response: http.IncomingMessage}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteFile.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/storage/file/{path}"
            .replace("{" + "path" + "}", String(requestObj.path));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling deleteFile.');
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
        return Promise.resolve({response});
    }

    /**
     * Delete folder
     * @param requestObj contains request parameters
     */
    public async deleteFolder(requestObj: model.DeleteFolderRequest): Promise<{response: http.IncomingMessage}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteFolder.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/storage/folder/{path}"
            .replace("{" + "path" + "}", String(requestObj.path));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling deleteFolder.');
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
        return Promise.resolve({response});
    }

    /**
     * Removes footnote from document.
     * @param requestObj contains request parameters
     */
    public async deleteFootnote(requestObj: model.DeleteFootnoteRequest): Promise<{response: http.IncomingMessage}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteFootnote.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/footnotes/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "nodePath" + "}", String(requestObj.nodePath))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deleteFootnote.');
        }

        // verify required parameter 'requestObj.nodePath' is not null or undefined
        if (requestObj.nodePath === null || requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was null or undefined when calling deleteFootnote.');
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
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve({response});
    }

    /**
     * Removes footnote from document.
     * @param requestObj contains request parameters
     */
    public async deleteFootnoteWithoutNodePath(requestObj: model.DeleteFootnoteWithoutNodePathRequest): Promise<{response: http.IncomingMessage}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteFootnoteWithoutNodePath.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/footnotes/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deleteFootnoteWithoutNodePath.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling deleteFootnoteWithoutNodePath.');
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
        return Promise.resolve({response});
    }

    /**
     * Removes form field from document.
     * @param requestObj contains request parameters
     */
    public async deleteFormField(requestObj: model.DeleteFormFieldRequest): Promise<{response: http.IncomingMessage}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteFormField.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/formfields/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "nodePath" + "}", String(requestObj.nodePath))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deleteFormField.');
        }

        // verify required parameter 'requestObj.nodePath' is not null or undefined
        if (requestObj.nodePath === null || requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was null or undefined when calling deleteFormField.');
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
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve({response});
    }

    /**
     * Removes form field from document.
     * @param requestObj contains request parameters
     */
    public async deleteFormFieldWithoutNodePath(requestObj: model.DeleteFormFieldWithoutNodePathRequest): Promise<{response: http.IncomingMessage}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteFormFieldWithoutNodePath.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/formfields/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deleteFormFieldWithoutNodePath.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling deleteFormFieldWithoutNodePath.');
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
        return Promise.resolve({response});
    }

    /**
     * Deletes header/footer from document.
     * @param requestObj contains request parameters
     */
    public async deleteHeaderFooter(requestObj: model.DeleteHeaderFooterRequest): Promise<{response: http.IncomingMessage}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteHeaderFooter.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{sectionPath}/headersfooters/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sectionPath" + "}", String(requestObj.sectionPath))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deleteHeaderFooter.');
        }

        // verify required parameter 'requestObj.sectionPath' is not null or undefined
        if (requestObj.sectionPath === null || requestObj.sectionPath === undefined) {
            throw new Error('Required parameter "requestObj.sectionPath" was null or undefined when calling deleteHeaderFooter.');
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
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve({response});
    }

    /**
     * Deletes document headers and footers.
     * @param requestObj contains request parameters
     */
    public async deleteHeadersFooters(requestObj: model.DeleteHeadersFootersRequest): Promise<{response: http.IncomingMessage}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteHeadersFooters.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{sectionPath}/headersfooters"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sectionPath" + "}", String(requestObj.sectionPath));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deleteHeadersFooters.');
        }

        // verify required parameter 'requestObj.sectionPath' is not null or undefined
        if (requestObj.sectionPath === null || requestObj.sectionPath === undefined) {
            throw new Error('Required parameter "requestObj.sectionPath" was null or undefined when calling deleteHeadersFooters.');
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
        return Promise.resolve({response});
    }

    /**
     * Removes macros from document.
     * @param requestObj contains request parameters
     */
    public async deleteMacros(requestObj: model.DeleteMacrosRequest): Promise<{response: http.IncomingMessage}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteMacros.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/macros"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deleteMacros.');
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
        return Promise.resolve({response});
    }

    /**
     * Removes OfficeMath object from document.
     * @param requestObj contains request parameters
     */
    public async deleteOfficeMathObject(requestObj: model.DeleteOfficeMathObjectRequest): Promise<{response: http.IncomingMessage}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteOfficeMathObject.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/OfficeMathObjects/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "nodePath" + "}", String(requestObj.nodePath))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deleteOfficeMathObject.');
        }

        // verify required parameter 'requestObj.nodePath' is not null or undefined
        if (requestObj.nodePath === null || requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was null or undefined when calling deleteOfficeMathObject.');
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
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve({response});
    }

    /**
     * Removes OfficeMath object from document.
     * @param requestObj contains request parameters
     */
    public async deleteOfficeMathObjectWithoutNodePath(requestObj: model.DeleteOfficeMathObjectWithoutNodePathRequest): Promise<{response: http.IncomingMessage}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteOfficeMathObjectWithoutNodePath.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/OfficeMathObjects/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deleteOfficeMathObjectWithoutNodePath.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling deleteOfficeMathObjectWithoutNodePath.');
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
        return Promise.resolve({response});
    }

    /**
     * Removes paragraph from section.
     * @param requestObj contains request parameters
     */
    public async deleteParagraph(requestObj: model.DeleteParagraphRequest): Promise<{response: http.IncomingMessage}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteParagraph.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/paragraphs/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "nodePath" + "}", String(requestObj.nodePath))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deleteParagraph.');
        }

        // verify required parameter 'requestObj.nodePath' is not null or undefined
        if (requestObj.nodePath === null || requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was null or undefined when calling deleteParagraph.');
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
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve({response});
    }

    /**
     * Removes paragraph from section.
     * @param requestObj contains request parameters
     */
    public async deleteParagraphWithoutNodePath(requestObj: model.DeleteParagraphWithoutNodePathRequest): Promise<{response: http.IncomingMessage}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteParagraphWithoutNodePath.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/paragraphs/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deleteParagraphWithoutNodePath.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling deleteParagraphWithoutNodePath.');
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
        return Promise.resolve({response});
    }

    /**
     * Removes run from document.
     * @param requestObj contains request parameters
     */
    public async deleteRun(requestObj: model.DeleteRunRequest): Promise<{response: http.IncomingMessage}> {
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
        return Promise.resolve({response});
    }

    /**
     * Deletes a table.
     * @param requestObj contains request parameters
     */
    public async deleteTable(requestObj: model.DeleteTableRequest): Promise<{response: http.IncomingMessage}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteTable.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/tables/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "nodePath" + "}", String(requestObj.nodePath))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deleteTable.');
        }

        // verify required parameter 'requestObj.nodePath' is not null or undefined
        if (requestObj.nodePath === null || requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was null or undefined when calling deleteTable.');
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
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve({response});
    }

    /**
     * Deletes a table cell.
     * @param requestObj contains request parameters
     */
    public async deleteTableCell(requestObj: model.DeleteTableCellRequest): Promise<{response: http.IncomingMessage}> {
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
        return Promise.resolve({response});
    }

    /**
     * Deletes a table row.
     * @param requestObj contains request parameters
     */
    public async deleteTableRow(requestObj: model.DeleteTableRowRequest): Promise<{response: http.IncomingMessage}> {
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
        return Promise.resolve({response});
    }

    /**
     * Deletes a table.
     * @param requestObj contains request parameters
     */
    public async deleteTableWithoutNodePath(requestObj: model.DeleteTableWithoutNodePathRequest): Promise<{response: http.IncomingMessage}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteTableWithoutNodePath.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/tables/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deleteTableWithoutNodePath.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling deleteTableWithoutNodePath.');
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
        return Promise.resolve({response});
    }

    /**
     * Deletes watermark (for deleting last watermark from the document).
     * @param requestObj contains request parameters
     */
    public async deleteWatermark(requestObj: model.DeleteWatermarkRequest): Promise<{response: http.IncomingMessage, body: model.DocumentResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteWatermark.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/watermarks/deleteLast"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deleteWatermark.');
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
        const result =  ObjectSerializer.deserialize(response.body, "DocumentResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Download file
     * @param requestObj contains request parameters
     */
    public async downloadFile(requestObj: model.DownloadFileRequest): Promise<{response: http.IncomingMessage, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling downloadFile.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/storage/file/{path}"
            .replace("{" + "path" + "}", String(requestObj.path));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling downloadFile.');
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
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /**
     * Executes document mail merge operation.
     * @param requestObj contains request parameters
     */
    public async executeMailMerge(requestObj: model.ExecuteMailMergeRequest): Promise<{response: http.IncomingMessage, body: model.DocumentResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling executeMailMerge.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/MailMerge"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling executeMailMerge.');
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

        requestOptions.formData = formParams;        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "DocumentResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Executes document mail merge online.
     * @param requestObj contains request parameters
     */
    public async executeMailMergeOnline(requestObj: model.ExecuteMailMergeOnlineRequest): Promise<{response: http.IncomingMessage, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling executeMailMergeOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/MailMerge";
        const queryParameters: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.template' is not null or undefined
        if (requestObj.template === null || requestObj.template === undefined) {
            throw new Error('Required parameter "requestObj.template" was null or undefined when calling executeMailMergeOnline.');
        }

        // verify required parameter 'requestObj.data' is not null or undefined
        if (requestObj.data === null || requestObj.data === undefined) {
            throw new Error('Required parameter "requestObj.data" was null or undefined when calling executeMailMergeOnline.');
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

        requestOptions.formData = formParams;        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /**
     * Gets the list of fonts, available for document processing.
     * @param requestObj contains request parameters
     */
    public async getAvailableFonts(requestObj: model.GetAvailableFontsRequest): Promise<{response: http.IncomingMessage, body: model.AvailableFontsResponse}> {
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
     * Reads document bookmark data by its name.
     * @param requestObj contains request parameters
     */
    public async getBookmarkByName(requestObj: model.GetBookmarkByNameRequest): Promise<{response: http.IncomingMessage, body: model.BookmarkResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getBookmarkByName.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/bookmarks/{bookmarkName}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "bookmarkName" + "}", String(requestObj.bookmarkName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getBookmarkByName.');
        }

        // verify required parameter 'requestObj.bookmarkName' is not null or undefined
        if (requestObj.bookmarkName === null || requestObj.bookmarkName === undefined) {
            throw new Error('Required parameter "requestObj.bookmarkName" was null or undefined when calling getBookmarkByName.');
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
     * Reads document bookmarks common info.
     * @param requestObj contains request parameters
     */
    public async getBookmarks(requestObj: model.GetBookmarksRequest): Promise<{response: http.IncomingMessage, body: model.BookmarksResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getBookmarks.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/bookmarks"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getBookmarks.');
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
     * Returns a border. 'nodePath' should refer to node with cell or row.
     * @param requestObj contains request parameters
     */
    public async getBorder(requestObj: model.GetBorderRequest): Promise<{response: http.IncomingMessage, body: model.BorderResponse}> {
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
     * Returns a collection of borders. 'nodePath' should refer to node with cell or row.
     * @param requestObj contains request parameters
     */
    public async getBorders(requestObj: model.GetBordersRequest): Promise<{response: http.IncomingMessage, body: model.BordersResponse}> {
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
     * Gets comment from document.
     * @param requestObj contains request parameters
     */
    public async getComment(requestObj: model.GetCommentRequest): Promise<{response: http.IncomingMessage, body: model.CommentResponse}> {
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
     * Gets comments from document.
     * @param requestObj contains request parameters
     */
    public async getComments(requestObj: model.GetCommentsRequest): Promise<{response: http.IncomingMessage, body: model.CommentsResponse}> {
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
     * Reads document common info.
     * @param requestObj contains request parameters
     */
    public async getDocument(requestObj: model.GetDocumentRequest): Promise<{response: http.IncomingMessage, body: model.DocumentResponse}> {
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
     * Reads document drawing object common info by its index or convert to format specified.
     * @param requestObj contains request parameters
     */
    public async getDocumentDrawingObjectByIndex(requestObj: model.GetDocumentDrawingObjectByIndexRequest): Promise<{response: http.IncomingMessage, body: model.DrawingObjectResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDocumentDrawingObjectByIndex.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/drawingObjects/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "nodePath" + "}", String(requestObj.nodePath))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getDocumentDrawingObjectByIndex.');
        }

        // verify required parameter 'requestObj.nodePath' is not null or undefined
        if (requestObj.nodePath === null || requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was null or undefined when calling getDocumentDrawingObjectByIndex.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling getDocumentDrawingObjectByIndex.');
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
        const result =  ObjectSerializer.deserialize(response.body, "DrawingObjectResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Reads document drawing object common info by its index or convert to format specified.
     * @param requestObj contains request parameters
     */
    public async getDocumentDrawingObjectByIndexWithoutNodePath(requestObj: model.GetDocumentDrawingObjectByIndexWithoutNodePathRequest): Promise<{response: http.IncomingMessage, body: model.DrawingObjectResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDocumentDrawingObjectByIndexWithoutNodePath.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/drawingObjects/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getDocumentDrawingObjectByIndexWithoutNodePath.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling getDocumentDrawingObjectByIndexWithoutNodePath.');
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
        const result =  ObjectSerializer.deserialize(response.body, "DrawingObjectResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Reads drawing object image data.
     * @param requestObj contains request parameters
     */
    public async getDocumentDrawingObjectImageData(requestObj: model.GetDocumentDrawingObjectImageDataRequest): Promise<{response: http.IncomingMessage, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDocumentDrawingObjectImageData.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/drawingObjects/{index}/imageData"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "nodePath" + "}", String(requestObj.nodePath))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getDocumentDrawingObjectImageData.');
        }

        // verify required parameter 'requestObj.nodePath' is not null or undefined
        if (requestObj.nodePath === null || requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was null or undefined when calling getDocumentDrawingObjectImageData.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling getDocumentDrawingObjectImageData.');
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
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /**
     * Reads drawing object image data.
     * @param requestObj contains request parameters
     */
    public async getDocumentDrawingObjectImageDataWithoutNodePath(requestObj: model.GetDocumentDrawingObjectImageDataWithoutNodePathRequest): Promise<{response: http.IncomingMessage, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDocumentDrawingObjectImageDataWithoutNodePath.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/drawingObjects/{index}/imageData"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getDocumentDrawingObjectImageDataWithoutNodePath.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling getDocumentDrawingObjectImageDataWithoutNodePath.');
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
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /**
     * Gets drawing object OLE data.
     * @param requestObj contains request parameters
     */
    public async getDocumentDrawingObjectOleData(requestObj: model.GetDocumentDrawingObjectOleDataRequest): Promise<{response: http.IncomingMessage, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDocumentDrawingObjectOleData.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/drawingObjects/{index}/oleData"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "nodePath" + "}", String(requestObj.nodePath))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getDocumentDrawingObjectOleData.');
        }

        // verify required parameter 'requestObj.nodePath' is not null or undefined
        if (requestObj.nodePath === null || requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was null or undefined when calling getDocumentDrawingObjectOleData.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling getDocumentDrawingObjectOleData.');
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
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /**
     * Gets drawing object OLE data.
     * @param requestObj contains request parameters
     */
    public async getDocumentDrawingObjectOleDataWithoutNodePath(requestObj: model.GetDocumentDrawingObjectOleDataWithoutNodePathRequest): Promise<{response: http.IncomingMessage, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDocumentDrawingObjectOleDataWithoutNodePath.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/drawingObjects/{index}/oleData"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getDocumentDrawingObjectOleDataWithoutNodePath.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling getDocumentDrawingObjectOleDataWithoutNodePath.');
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
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /**
     * Reads document drawing objects common info.
     * @param requestObj contains request parameters
     */
    public async getDocumentDrawingObjects(requestObj: model.GetDocumentDrawingObjectsRequest): Promise<{response: http.IncomingMessage, body: model.DrawingObjectsResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDocumentDrawingObjects.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/drawingObjects"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "nodePath" + "}", String(requestObj.nodePath));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getDocumentDrawingObjects.');
        }

        // verify required parameter 'requestObj.nodePath' is not null or undefined
        if (requestObj.nodePath === null || requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was null or undefined when calling getDocumentDrawingObjects.');
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
        const result =  ObjectSerializer.deserialize(response.body, "DrawingObjectsResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Reads document drawing objects common info.
     * @param requestObj contains request parameters
     */
    public async getDocumentDrawingObjectsWithoutNodePath(requestObj: model.GetDocumentDrawingObjectsWithoutNodePathRequest): Promise<{response: http.IncomingMessage, body: model.DrawingObjectsResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDocumentDrawingObjectsWithoutNodePath.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/drawingObjects"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getDocumentDrawingObjectsWithoutNodePath.');
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
        const result =  ObjectSerializer.deserialize(response.body, "DrawingObjectsResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Reads document field names.
     * @param requestObj contains request parameters
     */
    public async getDocumentFieldNames(requestObj: model.GetDocumentFieldNamesRequest): Promise<{response: http.IncomingMessage, body: model.FieldNamesResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDocumentFieldNames.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/mailMerge/FieldNames"
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
     * Reads document field names.
     * @param requestObj contains request parameters
     */
    public async getDocumentFieldNamesOnline(requestObj: model.GetDocumentFieldNamesOnlineRequest): Promise<{response: http.IncomingMessage, body: model.FieldNamesResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDocumentFieldNamesOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/mailMerge/FieldNames";
        const queryParameters: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.template' is not null or undefined
        if (requestObj.template === null || requestObj.template === undefined) {
            throw new Error('Required parameter "requestObj.template" was null or undefined when calling getDocumentFieldNamesOnline.');
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

        requestOptions.formData = formParams;        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FieldNamesResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Reads document hyperlink by its index.
     * @param requestObj contains request parameters
     */
    public async getDocumentHyperlinkByIndex(requestObj: model.GetDocumentHyperlinkByIndexRequest): Promise<{response: http.IncomingMessage, body: model.HyperlinkResponse}> {
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
     * Reads document hyperlinks common info.
     * @param requestObj contains request parameters
     */
    public async getDocumentHyperlinks(requestObj: model.GetDocumentHyperlinksRequest): Promise<{response: http.IncomingMessage, body: model.HyperlinksResponse}> {
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
     * Reads document properties info.
     * @param requestObj contains request parameters
     */
    public async getDocumentProperties(requestObj: model.GetDocumentPropertiesRequest): Promise<{response: http.IncomingMessage, body: model.DocumentPropertiesResponse}> {
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
     * Reads document property info by the property name.
     * @param requestObj contains request parameters
     */
    public async getDocumentProperty(requestObj: model.GetDocumentPropertyRequest): Promise<{response: http.IncomingMessage, body: model.DocumentPropertyResponse}> {
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
     * Reads document protection common info.
     * @param requestObj contains request parameters
     */
    public async getDocumentProtection(requestObj: model.GetDocumentProtectionRequest): Promise<{response: http.IncomingMessage, body: model.ProtectionDataResponse}> {
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
     * Reads document statistics.
     * @param requestObj contains request parameters
     */
    public async getDocumentStatistics(requestObj: model.GetDocumentStatisticsRequest): Promise<{response: http.IncomingMessage, body: model.StatDataResponse}> {
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
     * Exports the document into the specified format.
     * @param requestObj contains request parameters
     */
    public async getDocumentWithFormat(requestObj: model.GetDocumentWithFormatRequest): Promise<{response: http.IncomingMessage, body: Buffer}> {
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
     * Gets field from document.
     * @param requestObj contains request parameters
     */
    public async getField(requestObj: model.GetFieldRequest): Promise<{response: http.IncomingMessage, body: model.FieldResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getField.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/fields/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "nodePath" + "}", String(requestObj.nodePath))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getField.');
        }

        // verify required parameter 'requestObj.nodePath' is not null or undefined
        if (requestObj.nodePath === null || requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was null or undefined when calling getField.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling getField.');
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
        const result =  ObjectSerializer.deserialize(response.body, "FieldResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Gets field from document.
     * @param requestObj contains request parameters
     */
    public async getFieldWithoutNodePath(requestObj: model.GetFieldWithoutNodePathRequest): Promise<{response: http.IncomingMessage, body: model.FieldResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getFieldWithoutNodePath.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/fields/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getFieldWithoutNodePath.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling getFieldWithoutNodePath.');
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
        const result =  ObjectSerializer.deserialize(response.body, "FieldResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Get fields from document.
     * @param requestObj contains request parameters
     */
    public async getFields(requestObj: model.GetFieldsRequest): Promise<{response: http.IncomingMessage, body: model.FieldsResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getFields.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/fields"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "nodePath" + "}", String(requestObj.nodePath));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getFields.');
        }

        // verify required parameter 'requestObj.nodePath' is not null or undefined
        if (requestObj.nodePath === null || requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was null or undefined when calling getFields.');
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
        const result =  ObjectSerializer.deserialize(response.body, "FieldsResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Get fields from document.
     * @param requestObj contains request parameters
     */
    public async getFieldsWithoutNodePath(requestObj: model.GetFieldsWithoutNodePathRequest): Promise<{response: http.IncomingMessage, body: model.FieldsResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getFieldsWithoutNodePath.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/fields"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getFieldsWithoutNodePath.');
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
        const result =  ObjectSerializer.deserialize(response.body, "FieldsResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Get all files and folders within a folder
     * @param requestObj contains request parameters
     */
    public async getFilesList(requestObj: model.GetFilesListRequest): Promise<{response: http.IncomingMessage, body: model.FilesList}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getFilesList.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/storage/folder/{path}"
            .replace("{" + "path" + "}", String(requestObj.path));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling getFilesList.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FilesList");
        return Promise.resolve({body: result, response});
    }

    /**
     * Reads footnote by index.
     * @param requestObj contains request parameters
     */
    public async getFootnote(requestObj: model.GetFootnoteRequest): Promise<{response: http.IncomingMessage, body: model.FootnoteResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getFootnote.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/footnotes/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "nodePath" + "}", String(requestObj.nodePath))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getFootnote.');
        }

        // verify required parameter 'requestObj.nodePath' is not null or undefined
        if (requestObj.nodePath === null || requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was null or undefined when calling getFootnote.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling getFootnote.');
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
        const result =  ObjectSerializer.deserialize(response.body, "FootnoteResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Reads footnote by index.
     * @param requestObj contains request parameters
     */
    public async getFootnoteWithoutNodePath(requestObj: model.GetFootnoteWithoutNodePathRequest): Promise<{response: http.IncomingMessage, body: model.FootnoteResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getFootnoteWithoutNodePath.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/footnotes/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getFootnoteWithoutNodePath.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling getFootnoteWithoutNodePath.');
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
        const result =  ObjectSerializer.deserialize(response.body, "FootnoteResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Gets footnotes from document.
     * @param requestObj contains request parameters
     */
    public async getFootnotes(requestObj: model.GetFootnotesRequest): Promise<{response: http.IncomingMessage, body: model.FootnotesResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getFootnotes.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/footnotes"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "nodePath" + "}", String(requestObj.nodePath));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getFootnotes.');
        }

        // verify required parameter 'requestObj.nodePath' is not null or undefined
        if (requestObj.nodePath === null || requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was null or undefined when calling getFootnotes.');
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
        const result =  ObjectSerializer.deserialize(response.body, "FootnotesResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Gets footnotes from document.
     * @param requestObj contains request parameters
     */
    public async getFootnotesWithoutNodePath(requestObj: model.GetFootnotesWithoutNodePathRequest): Promise<{response: http.IncomingMessage, body: model.FootnotesResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getFootnotesWithoutNodePath.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/footnotes"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getFootnotesWithoutNodePath.');
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
        const result =  ObjectSerializer.deserialize(response.body, "FootnotesResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Returns representation of an one of the form field.
     * @param requestObj contains request parameters
     */
    public async getFormField(requestObj: model.GetFormFieldRequest): Promise<{response: http.IncomingMessage, body: model.FormFieldResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getFormField.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/formfields/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "nodePath" + "}", String(requestObj.nodePath))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getFormField.');
        }

        // verify required parameter 'requestObj.nodePath' is not null or undefined
        if (requestObj.nodePath === null || requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was null or undefined when calling getFormField.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling getFormField.');
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
        const result =  ObjectSerializer.deserialize(response.body, "FormFieldResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Returns representation of an one of the form field.
     * @param requestObj contains request parameters
     */
    public async getFormFieldWithoutNodePath(requestObj: model.GetFormFieldWithoutNodePathRequest): Promise<{response: http.IncomingMessage, body: model.FormFieldResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getFormFieldWithoutNodePath.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/formfields/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getFormFieldWithoutNodePath.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling getFormFieldWithoutNodePath.');
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
        const result =  ObjectSerializer.deserialize(response.body, "FormFieldResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Gets form fields from document.
     * @param requestObj contains request parameters
     */
    public async getFormFields(requestObj: model.GetFormFieldsRequest): Promise<{response: http.IncomingMessage, body: model.FormFieldsResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getFormFields.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/formfields"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "nodePath" + "}", String(requestObj.nodePath));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getFormFields.');
        }

        // verify required parameter 'requestObj.nodePath' is not null or undefined
        if (requestObj.nodePath === null || requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was null or undefined when calling getFormFields.');
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
        const result =  ObjectSerializer.deserialize(response.body, "FormFieldsResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Gets form fields from document.
     * @param requestObj contains request parameters
     */
    public async getFormFieldsWithoutNodePath(requestObj: model.GetFormFieldsWithoutNodePathRequest): Promise<{response: http.IncomingMessage, body: model.FormFieldsResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getFormFieldsWithoutNodePath.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/formfields"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getFormFieldsWithoutNodePath.');
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
        const result =  ObjectSerializer.deserialize(response.body, "FormFieldsResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Returns a header/footer from the document by index.
     * @param requestObj contains request parameters
     */
    public async getHeaderFooter(requestObj: model.GetHeaderFooterRequest): Promise<{response: http.IncomingMessage, body: model.HeaderFooterResponse}> {
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
     * Returns a header/footer from the document section.
     * @param requestObj contains request parameters
     */
    public async getHeaderFooterOfSection(requestObj: model.GetHeaderFooterOfSectionRequest): Promise<{response: http.IncomingMessage, body: model.HeaderFooterResponse}> {
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
     * Returns a list of header/footers from the document.
     * @param requestObj contains request parameters
     */
    public async getHeaderFooters(requestObj: model.GetHeaderFootersRequest): Promise<{response: http.IncomingMessage, body: model.HeaderFootersResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getHeaderFooters.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{sectionPath}/headersfooters"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sectionPath" + "}", String(requestObj.sectionPath));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getHeaderFooters.');
        }

        // verify required parameter 'requestObj.sectionPath' is not null or undefined
        if (requestObj.sectionPath === null || requestObj.sectionPath === undefined) {
            throw new Error('Required parameter "requestObj.sectionPath" was null or undefined when calling getHeaderFooters.');
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
        const result =  ObjectSerializer.deserialize(response.body, "HeaderFootersResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Reads OfficeMath object by index.
     * @param requestObj contains request parameters
     */
    public async getOfficeMathObject(requestObj: model.GetOfficeMathObjectRequest): Promise<{response: http.IncomingMessage, body: model.OfficeMathObjectResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getOfficeMathObject.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/OfficeMathObjects/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "nodePath" + "}", String(requestObj.nodePath))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getOfficeMathObject.');
        }

        // verify required parameter 'requestObj.nodePath' is not null or undefined
        if (requestObj.nodePath === null || requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was null or undefined when calling getOfficeMathObject.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling getOfficeMathObject.');
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
        const result =  ObjectSerializer.deserialize(response.body, "OfficeMathObjectResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Reads OfficeMath object by index.
     * @param requestObj contains request parameters
     */
    public async getOfficeMathObjectWithoutNodePath(requestObj: model.GetOfficeMathObjectWithoutNodePathRequest): Promise<{response: http.IncomingMessage, body: model.OfficeMathObjectResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getOfficeMathObjectWithoutNodePath.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/OfficeMathObjects/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getOfficeMathObjectWithoutNodePath.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling getOfficeMathObjectWithoutNodePath.');
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
        const result =  ObjectSerializer.deserialize(response.body, "OfficeMathObjectResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Gets OfficeMath objects from document.
     * @param requestObj contains request parameters
     */
    public async getOfficeMathObjects(requestObj: model.GetOfficeMathObjectsRequest): Promise<{response: http.IncomingMessage, body: model.OfficeMathObjectsResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getOfficeMathObjects.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/OfficeMathObjects"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "nodePath" + "}", String(requestObj.nodePath));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getOfficeMathObjects.');
        }

        // verify required parameter 'requestObj.nodePath' is not null or undefined
        if (requestObj.nodePath === null || requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was null or undefined when calling getOfficeMathObjects.');
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
        const result =  ObjectSerializer.deserialize(response.body, "OfficeMathObjectsResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Gets OfficeMath objects from document.
     * @param requestObj contains request parameters
     */
    public async getOfficeMathObjectsWithoutNodePath(requestObj: model.GetOfficeMathObjectsWithoutNodePathRequest): Promise<{response: http.IncomingMessage, body: model.OfficeMathObjectsResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getOfficeMathObjectsWithoutNodePath.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/OfficeMathObjects"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getOfficeMathObjectsWithoutNodePath.');
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
        const result =  ObjectSerializer.deserialize(response.body, "OfficeMathObjectsResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * This resource represents one of the paragraphs contained in the document.
     * @param requestObj contains request parameters
     */
    public async getParagraph(requestObj: model.GetParagraphRequest): Promise<{response: http.IncomingMessage, body: model.ParagraphResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getParagraph.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/paragraphs/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "nodePath" + "}", String(requestObj.nodePath))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getParagraph.');
        }

        // verify required parameter 'requestObj.nodePath' is not null or undefined
        if (requestObj.nodePath === null || requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was null or undefined when calling getParagraph.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling getParagraph.');
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
        const result =  ObjectSerializer.deserialize(response.body, "ParagraphResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Represents all the formatting for a paragraph.
     * @param requestObj contains request parameters
     */
    public async getParagraphFormat(requestObj: model.GetParagraphFormatRequest): Promise<{response: http.IncomingMessage, body: model.ParagraphFormatResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getParagraphFormat.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/paragraphs/{index}/format"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "nodePath" + "}", String(requestObj.nodePath))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getParagraphFormat.');
        }

        // verify required parameter 'requestObj.nodePath' is not null or undefined
        if (requestObj.nodePath === null || requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was null or undefined when calling getParagraphFormat.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling getParagraphFormat.');
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
        const result =  ObjectSerializer.deserialize(response.body, "ParagraphFormatResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Represents all the formatting for a paragraph.
     * @param requestObj contains request parameters
     */
    public async getParagraphFormatWithoutNodePath(requestObj: model.GetParagraphFormatWithoutNodePathRequest): Promise<{response: http.IncomingMessage, body: model.ParagraphFormatResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getParagraphFormatWithoutNodePath.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/paragraphs/{index}/format"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getParagraphFormatWithoutNodePath.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling getParagraphFormatWithoutNodePath.');
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
        const result =  ObjectSerializer.deserialize(response.body, "ParagraphFormatResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * This resource represents one of the paragraphs contained in the document.
     * @param requestObj contains request parameters
     */
    public async getParagraphWithoutNodePath(requestObj: model.GetParagraphWithoutNodePathRequest): Promise<{response: http.IncomingMessage, body: model.ParagraphResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getParagraphWithoutNodePath.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/paragraphs/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getParagraphWithoutNodePath.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling getParagraphWithoutNodePath.');
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
        const result =  ObjectSerializer.deserialize(response.body, "ParagraphResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Returns a list of paragraphs that are contained in the document.
     * @param requestObj contains request parameters
     */
    public async getParagraphs(requestObj: model.GetParagraphsRequest): Promise<{response: http.IncomingMessage, body: model.ParagraphLinkCollectionResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getParagraphs.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/paragraphs"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "nodePath" + "}", String(requestObj.nodePath));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getParagraphs.');
        }

        // verify required parameter 'requestObj.nodePath' is not null or undefined
        if (requestObj.nodePath === null || requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was null or undefined when calling getParagraphs.');
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
        const result =  ObjectSerializer.deserialize(response.body, "ParagraphLinkCollectionResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Returns a list of paragraphs that are contained in the document.
     * @param requestObj contains request parameters
     */
    public async getParagraphsWithoutNodePath(requestObj: model.GetParagraphsWithoutNodePathRequest): Promise<{response: http.IncomingMessage, body: model.ParagraphLinkCollectionResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getParagraphsWithoutNodePath.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/paragraphs"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getParagraphsWithoutNodePath.');
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
        const result =  ObjectSerializer.deserialize(response.body, "ParagraphLinkCollectionResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Gets the text from the range.
     * @param requestObj contains request parameters
     */
    public async getRangeText(requestObj: model.GetRangeTextRequest): Promise<{response: http.IncomingMessage, body: model.RangeTextResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getRangeText.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/range/{rangeStartIdentifier}/{rangeEndIdentifier}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "rangeStartIdentifier" + "}", String(requestObj.rangeStartIdentifier))
            .replace("{" + "rangeEndIdentifier" + "}", String(requestObj.rangeEndIdentifier));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getRangeText.');
        }

        // verify required parameter 'requestObj.rangeStartIdentifier' is not null or undefined
        if (requestObj.rangeStartIdentifier === null || requestObj.rangeStartIdentifier === undefined) {
            throw new Error('Required parameter "requestObj.rangeStartIdentifier" was null or undefined when calling getRangeText.');
        }

        // verify required parameter 'requestObj.rangeEndIdentifier' is not null or undefined
        if (requestObj.rangeEndIdentifier === null || requestObj.rangeEndIdentifier === undefined) {
            throw new Error('Required parameter "requestObj.rangeEndIdentifier" was null or undefined when calling getRangeText.');
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
        const result =  ObjectSerializer.deserialize(response.body, "RangeTextResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * This resource represents run of text contained in the document.
     * @param requestObj contains request parameters
     */
    public async getRun(requestObj: model.GetRunRequest): Promise<{response: http.IncomingMessage, body: model.RunResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getRun.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{paragraphPath}/runs/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "paragraphPath" + "}", String(requestObj.paragraphPath))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getRun.');
        }

        // verify required parameter 'requestObj.paragraphPath' is not null or undefined
        if (requestObj.paragraphPath === null || requestObj.paragraphPath === undefined) {
            throw new Error('Required parameter "requestObj.paragraphPath" was null or undefined when calling getRun.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling getRun.');
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
    public async getRunFont(requestObj: model.GetRunFontRequest): Promise<{response: http.IncomingMessage, body: model.FontResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getRunFont.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{paragraphPath}/runs/{index}/font"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "paragraphPath" + "}", String(requestObj.paragraphPath))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getRunFont.');
        }

        // verify required parameter 'requestObj.paragraphPath' is not null or undefined
        if (requestObj.paragraphPath === null || requestObj.paragraphPath === undefined) {
            throw new Error('Required parameter "requestObj.paragraphPath" was null or undefined when calling getRunFont.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling getRunFont.');
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
    public async getRuns(requestObj: model.GetRunsRequest): Promise<{response: http.IncomingMessage, body: model.RunsResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getRuns.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{paragraphPath}/runs"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "paragraphPath" + "}", String(requestObj.paragraphPath));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getRuns.');
        }

        // verify required parameter 'requestObj.paragraphPath' is not null or undefined
        if (requestObj.paragraphPath === null || requestObj.paragraphPath === undefined) {
            throw new Error('Required parameter "requestObj.paragraphPath" was null or undefined when calling getRuns.');
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
     * Gets document section by index.
     * @param requestObj contains request parameters
     */
    public async getSection(requestObj: model.GetSectionRequest): Promise<{response: http.IncomingMessage, body: model.SectionResponse}> {
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
     * Gets page setup of section.
     * @param requestObj contains request parameters
     */
    public async getSectionPageSetup(requestObj: model.GetSectionPageSetupRequest): Promise<{response: http.IncomingMessage, body: model.SectionPageSetupResponse}> {
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
     * Returns a list of sections that are contained in the document.
     * @param requestObj contains request parameters
     */
    public async getSections(requestObj: model.GetSectionsRequest): Promise<{response: http.IncomingMessage, body: model.SectionLinkCollectionResponse}> {
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
     * Returns a table.
     * @param requestObj contains request parameters
     */
    public async getTable(requestObj: model.GetTableRequest): Promise<{response: http.IncomingMessage, body: model.TableResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getTable.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/tables/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "nodePath" + "}", String(requestObj.nodePath))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getTable.');
        }

        // verify required parameter 'requestObj.nodePath' is not null or undefined
        if (requestObj.nodePath === null || requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was null or undefined when calling getTable.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling getTable.');
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
        const result =  ObjectSerializer.deserialize(response.body, "TableResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Returns a table cell.
     * @param requestObj contains request parameters
     */
    public async getTableCell(requestObj: model.GetTableCellRequest): Promise<{response: http.IncomingMessage, body: model.TableCellResponse}> {
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
     * Returns a table cell format.
     * @param requestObj contains request parameters
     */
    public async getTableCellFormat(requestObj: model.GetTableCellFormatRequest): Promise<{response: http.IncomingMessage, body: model.TableCellFormatResponse}> {
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
     * Returns a table properties.
     * @param requestObj contains request parameters
     */
    public async getTableProperties(requestObj: model.GetTablePropertiesRequest): Promise<{response: http.IncomingMessage, body: model.TablePropertiesResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getTableProperties.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/tables/{index}/properties"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "nodePath" + "}", String(requestObj.nodePath))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getTableProperties.');
        }

        // verify required parameter 'requestObj.nodePath' is not null or undefined
        if (requestObj.nodePath === null || requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was null or undefined when calling getTableProperties.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling getTableProperties.');
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
        const result =  ObjectSerializer.deserialize(response.body, "TablePropertiesResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Returns a table properties.
     * @param requestObj contains request parameters
     */
    public async getTablePropertiesWithoutNodePath(requestObj: model.GetTablePropertiesWithoutNodePathRequest): Promise<{response: http.IncomingMessage, body: model.TablePropertiesResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getTablePropertiesWithoutNodePath.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/tables/{index}/properties"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getTablePropertiesWithoutNodePath.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling getTablePropertiesWithoutNodePath.');
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
        const result =  ObjectSerializer.deserialize(response.body, "TablePropertiesResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Returns a table row.
     * @param requestObj contains request parameters
     */
    public async getTableRow(requestObj: model.GetTableRowRequest): Promise<{response: http.IncomingMessage, body: model.TableRowResponse}> {
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
     * Returns a table row format.
     * @param requestObj contains request parameters
     */
    public async getTableRowFormat(requestObj: model.GetTableRowFormatRequest): Promise<{response: http.IncomingMessage, body: model.TableRowFormatResponse}> {
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
     * Returns a table.
     * @param requestObj contains request parameters
     */
    public async getTableWithoutNodePath(requestObj: model.GetTableWithoutNodePathRequest): Promise<{response: http.IncomingMessage, body: model.TableResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getTableWithoutNodePath.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/tables/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getTableWithoutNodePath.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling getTableWithoutNodePath.');
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
        const result =  ObjectSerializer.deserialize(response.body, "TableResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Returns a list of tables that are contained in the document.
     * @param requestObj contains request parameters
     */
    public async getTables(requestObj: model.GetTablesRequest): Promise<{response: http.IncomingMessage, body: model.TableLinkCollectionResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getTables.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/tables"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "nodePath" + "}", String(requestObj.nodePath));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getTables.');
        }

        // verify required parameter 'requestObj.nodePath' is not null or undefined
        if (requestObj.nodePath === null || requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was null or undefined when calling getTables.');
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
        const result =  ObjectSerializer.deserialize(response.body, "TableLinkCollectionResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Returns a list of tables that are contained in the document.
     * @param requestObj contains request parameters
     */
    public async getTablesWithoutNodePath(requestObj: model.GetTablesWithoutNodePathRequest): Promise<{response: http.IncomingMessage, body: model.TableLinkCollectionResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getTablesWithoutNodePath.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/tables"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getTablesWithoutNodePath.');
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
        const result =  ObjectSerializer.deserialize(response.body, "TableLinkCollectionResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Adds comment to document, returns inserted comment data.
     * @param requestObj contains request parameters
     */
    public async insertComment(requestObj: model.InsertCommentRequest): Promise<{response: http.IncomingMessage, body: model.CommentResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling insertComment.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/comments"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling insertComment.');
        }

        // verify required parameter 'requestObj.comment' is not null or undefined
        if (requestObj.comment === null || requestObj.comment === undefined) {
            throw new Error('Required parameter "requestObj.comment" was null or undefined when calling insertComment.');
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
     * Adds drawing object to document, returns added  drawing object's data.
     * @param requestObj contains request parameters
     */
    public async insertDrawingObject(requestObj: model.InsertDrawingObjectRequest): Promise<{response: http.IncomingMessage, body: model.DrawingObjectResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling insertDrawingObject.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/drawingObjects"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "nodePath" + "}", String(requestObj.nodePath));
        const queryParameters: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling insertDrawingObject.');
        }

        // verify required parameter 'requestObj.drawingObject' is not null or undefined
        if (requestObj.drawingObject === null || requestObj.drawingObject === undefined) {
            throw new Error('Required parameter "requestObj.drawingObject" was null or undefined when calling insertDrawingObject.');
        }

        // verify required parameter 'requestObj.imageFile' is not null or undefined
        if (requestObj.imageFile === null || requestObj.imageFile === undefined) {
            throw new Error('Required parameter "requestObj.imageFile" was null or undefined when calling insertDrawingObject.');
        }

        // verify required parameter 'requestObj.nodePath' is not null or undefined
        if (requestObj.nodePath === null || requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was null or undefined when calling insertDrawingObject.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
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

        requestOptions.formData = formParams;        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "DrawingObjectResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Adds drawing object to document, returns added  drawing object's data.
     * @param requestObj contains request parameters
     */
    public async insertDrawingObjectWithoutNodePath(requestObj: model.InsertDrawingObjectWithoutNodePathRequest): Promise<{response: http.IncomingMessage, body: model.DrawingObjectResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling insertDrawingObjectWithoutNodePath.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/drawingObjects"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling insertDrawingObjectWithoutNodePath.');
        }

        // verify required parameter 'requestObj.drawingObject' is not null or undefined
        if (requestObj.drawingObject === null || requestObj.drawingObject === undefined) {
            throw new Error('Required parameter "requestObj.drawingObject" was null or undefined when calling insertDrawingObjectWithoutNodePath.');
        }

        // verify required parameter 'requestObj.imageFile' is not null or undefined
        if (requestObj.imageFile === null || requestObj.imageFile === undefined) {
            throw new Error('Required parameter "requestObj.imageFile" was null or undefined when calling insertDrawingObjectWithoutNodePath.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
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

        requestOptions.formData = formParams;        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "DrawingObjectResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Adds field to document, returns inserted field's data.
     * @param requestObj contains request parameters
     */
    public async insertField(requestObj: model.InsertFieldRequest): Promise<{response: http.IncomingMessage, body: model.FieldResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling insertField.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/fields"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "nodePath" + "}", String(requestObj.nodePath));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling insertField.');
        }

        // verify required parameter 'requestObj.field' is not null or undefined
        if (requestObj.field === null || requestObj.field === undefined) {
            throw new Error('Required parameter "requestObj.field" was null or undefined when calling insertField.');
        }

        // verify required parameter 'requestObj.nodePath' is not null or undefined
        if (requestObj.nodePath === null || requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was null or undefined when calling insertField.');
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
            body: ObjectSerializer.serialize(requestObj.field, requestObj.field.constructor.name === "Object" ? "Field" : requestObj.field.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FieldResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Adds field to document, returns inserted field's data.
     * @param requestObj contains request parameters
     */
    public async insertFieldWithoutNodePath(requestObj: model.InsertFieldWithoutNodePathRequest): Promise<{response: http.IncomingMessage, body: model.FieldResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling insertFieldWithoutNodePath.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/fields"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling insertFieldWithoutNodePath.');
        }

        // verify required parameter 'requestObj.field' is not null or undefined
        if (requestObj.field === null || requestObj.field === undefined) {
            throw new Error('Required parameter "requestObj.field" was null or undefined when calling insertFieldWithoutNodePath.');
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
    public async insertFootnote(requestObj: model.InsertFootnoteRequest): Promise<{response: http.IncomingMessage, body: model.FootnoteResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling insertFootnote.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/footnotes"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "nodePath" + "}", String(requestObj.nodePath));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling insertFootnote.');
        }

        // verify required parameter 'requestObj.footnoteDto' is not null or undefined
        if (requestObj.footnoteDto === null || requestObj.footnoteDto === undefined) {
            throw new Error('Required parameter "requestObj.footnoteDto" was null or undefined when calling insertFootnote.');
        }

        // verify required parameter 'requestObj.nodePath' is not null or undefined
        if (requestObj.nodePath === null || requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was null or undefined when calling insertFootnote.');
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
            body: ObjectSerializer.serialize(requestObj.footnoteDto, requestObj.footnoteDto.constructor.name === "Object" ? "Footnote" : requestObj.footnoteDto.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FootnoteResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Adds footnote to document, returns added footnote's data.
     * @param requestObj contains request parameters
     */
    public async insertFootnoteWithoutNodePath(requestObj: model.InsertFootnoteWithoutNodePathRequest): Promise<{response: http.IncomingMessage, body: model.FootnoteResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling insertFootnoteWithoutNodePath.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/footnotes"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling insertFootnoteWithoutNodePath.');
        }

        // verify required parameter 'requestObj.footnoteDto' is not null or undefined
        if (requestObj.footnoteDto === null || requestObj.footnoteDto === undefined) {
            throw new Error('Required parameter "requestObj.footnoteDto" was null or undefined when calling insertFootnoteWithoutNodePath.');
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
    public async insertFormField(requestObj: model.InsertFormFieldRequest): Promise<{response: http.IncomingMessage, body: model.FormFieldResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling insertFormField.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/formfields"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "nodePath" + "}", String(requestObj.nodePath));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling insertFormField.');
        }

        // verify required parameter 'requestObj.formField' is not null or undefined
        if (requestObj.formField === null || requestObj.formField === undefined) {
            throw new Error('Required parameter "requestObj.formField" was null or undefined when calling insertFormField.');
        }

        // verify required parameter 'requestObj.nodePath' is not null or undefined
        if (requestObj.nodePath === null || requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was null or undefined when calling insertFormField.');
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
            body: ObjectSerializer.serialize(requestObj.formField, requestObj.formField.constructor.name === "Object" ? "FormField" : requestObj.formField.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FormFieldResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Adds form field to paragraph, returns added form field's data.
     * @param requestObj contains request parameters
     */
    public async insertFormFieldWithoutNodePath(requestObj: model.InsertFormFieldWithoutNodePathRequest): Promise<{response: http.IncomingMessage, body: model.FormFieldResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling insertFormFieldWithoutNodePath.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/formfields"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling insertFormFieldWithoutNodePath.');
        }

        // verify required parameter 'requestObj.formField' is not null or undefined
        if (requestObj.formField === null || requestObj.formField === undefined) {
            throw new Error('Required parameter "requestObj.formField" was null or undefined when calling insertFormFieldWithoutNodePath.');
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
            body: ObjectSerializer.serialize(requestObj.formField, requestObj.formField.constructor.name === "Object" ? "FormField" : requestObj.formField.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FormFieldResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Inserts to document header or footer.
     * @param requestObj contains request parameters
     */
    public async insertHeaderFooter(requestObj: model.InsertHeaderFooterRequest): Promise<{response: http.IncomingMessage, body: model.HeaderFooterResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling insertHeaderFooter.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{sectionPath}/headersfooters"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sectionPath" + "}", String(requestObj.sectionPath));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling insertHeaderFooter.');
        }

        // verify required parameter 'requestObj.headerFooterType' is not null or undefined
        if (requestObj.headerFooterType === null || requestObj.headerFooterType === undefined) {
            throw new Error('Required parameter "requestObj.headerFooterType" was null or undefined when calling insertHeaderFooter.');
        }

        // verify required parameter 'requestObj.sectionPath' is not null or undefined
        if (requestObj.sectionPath === null || requestObj.sectionPath === undefined) {
            throw new Error('Required parameter "requestObj.sectionPath" was null or undefined when calling insertHeaderFooter.');
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
        const result =  ObjectSerializer.deserialize(response.body, "HeaderFooterResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Inserts document page numbers.
     * @param requestObj contains request parameters
     */
    public async insertPageNumbers(requestObj: model.InsertPageNumbersRequest): Promise<{response: http.IncomingMessage, body: model.DocumentResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling insertPageNumbers.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/PageNumbers"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling insertPageNumbers.');
        }

        // verify required parameter 'requestObj.pageNumber' is not null or undefined
        if (requestObj.pageNumber === null || requestObj.pageNumber === undefined) {
            throw new Error('Required parameter "requestObj.pageNumber" was null or undefined when calling insertPageNumbers.');
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
            body: ObjectSerializer.serialize(requestObj.pageNumber, requestObj.pageNumber.constructor.name === "Object" ? "PageNumber" : requestObj.pageNumber.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "DocumentResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Adds paragraph to document, returns added paragraph's data.
     * @param requestObj contains request parameters
     */
    public async insertParagraph(requestObj: model.InsertParagraphRequest): Promise<{response: http.IncomingMessage, body: model.ParagraphResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling insertParagraph.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/paragraphs"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "nodePath" + "}", String(requestObj.nodePath));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling insertParagraph.');
        }

        // verify required parameter 'requestObj.paragraph' is not null or undefined
        if (requestObj.paragraph === null || requestObj.paragraph === undefined) {
            throw new Error('Required parameter "requestObj.paragraph" was null or undefined when calling insertParagraph.');
        }

        // verify required parameter 'requestObj.nodePath' is not null or undefined
        if (requestObj.nodePath === null || requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was null or undefined when calling insertParagraph.');
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
            body: ObjectSerializer.serialize(requestObj.paragraph, requestObj.paragraph.constructor.name === "Object" ? "ParagraphInsert" : requestObj.paragraph.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "ParagraphResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Adds run to document, returns added paragraph's data.
     * @param requestObj contains request parameters
     */
    public async insertRun(requestObj: model.InsertRunRequest): Promise<{response: http.IncomingMessage, body: model.RunResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling insertRun.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{paragraphPath}/runs"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "paragraphPath" + "}", String(requestObj.paragraphPath));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling insertRun.');
        }

        // verify required parameter 'requestObj.paragraphPath' is not null or undefined
        if (requestObj.paragraphPath === null || requestObj.paragraphPath === undefined) {
            throw new Error('Required parameter "requestObj.paragraphPath" was null or undefined when calling insertRun.');
        }

        // verify required parameter 'requestObj.run' is not null or undefined
        if (requestObj.run === null || requestObj.run === undefined) {
            throw new Error('Required parameter "requestObj.run" was null or undefined when calling insertRun.');
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
            body: ObjectSerializer.serialize(requestObj.run, requestObj.run.constructor.name === "Object" ? "Run" : requestObj.run.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "RunResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Adds table to document, returns added table's data.             
     * @param requestObj contains request parameters
     */
    public async insertTable(requestObj: model.InsertTableRequest): Promise<{response: http.IncomingMessage, body: model.TableResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling insertTable.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/tables"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "nodePath" + "}", String(requestObj.nodePath));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling insertTable.');
        }

        // verify required parameter 'requestObj.nodePath' is not null or undefined
        if (requestObj.nodePath === null || requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was null or undefined when calling insertTable.');
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
    public async insertTableCell(requestObj: model.InsertTableCellRequest): Promise<{response: http.IncomingMessage, body: model.TableCellResponse}> {
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
            method: "POST",
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
    public async insertTableRow(requestObj: model.InsertTableRowRequest): Promise<{response: http.IncomingMessage, body: model.TableRowResponse}> {
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
            method: "POST",
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
     * Adds table to document, returns added table's data.             
     * @param requestObj contains request parameters
     */
    public async insertTableWithoutNodePath(requestObj: model.InsertTableWithoutNodePathRequest): Promise<{response: http.IncomingMessage, body: model.TableResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling insertTableWithoutNodePath.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/tables"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling insertTableWithoutNodePath.');
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
            body: ObjectSerializer.serialize(requestObj.table, requestObj.table.constructor.name === "Object" ? "TableInsert" : requestObj.table.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "TableResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Inserts document watermark image.
     * @param requestObj contains request parameters
     */
    public async insertWatermarkImage(requestObj: model.InsertWatermarkImageRequest): Promise<{response: http.IncomingMessage, body: model.DocumentResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling insertWatermarkImage.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/watermarks/images"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling insertWatermarkImage.');
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

        requestOptions.formData = formParams;        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "DocumentResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Inserts document watermark text.
     * @param requestObj contains request parameters
     */
    public async insertWatermarkText(requestObj: model.InsertWatermarkTextRequest): Promise<{response: http.IncomingMessage, body: model.DocumentResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling insertWatermarkText.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/watermarks/texts"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling insertWatermarkText.');
        }

        // verify required parameter 'requestObj.watermarkText' is not null or undefined
        if (requestObj.watermarkText === null || requestObj.watermarkText === undefined) {
            throw new Error('Required parameter "requestObj.watermarkText" was null or undefined when calling insertWatermarkText.');
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
     * Loads new document from web into the file with any supported format of data.
     * @param requestObj contains request parameters
     */
    public async loadWebDocument(requestObj: model.LoadWebDocumentRequest): Promise<{response: http.IncomingMessage, body: model.SaveResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling loadWebDocument.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/loadWebDocument";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.data' is not null or undefined
        if (requestObj.data === null || requestObj.data === undefined) {
            throw new Error('Required parameter "requestObj.data" was null or undefined when calling loadWebDocument.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "PUT",
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
     * Move file
     * @param requestObj contains request parameters
     */
    public async moveFile(requestObj: model.MoveFileRequest): Promise<{response: http.IncomingMessage}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling moveFile.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/storage/file/move/{srcPath}"
            .replace("{" + "srcPath" + "}", String(requestObj.srcPath));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.destPath' is not null or undefined
        if (requestObj.destPath === null || requestObj.destPath === undefined) {
            throw new Error('Required parameter "requestObj.destPath" was null or undefined when calling moveFile.');
        }

        // verify required parameter 'requestObj.srcPath' is not null or undefined
        if (requestObj.srcPath === null || requestObj.srcPath === undefined) {
            throw new Error('Required parameter "requestObj.srcPath" was null or undefined when calling moveFile.');
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
        return Promise.resolve({response});
    }

    /**
     * Move folder
     * @param requestObj contains request parameters
     */
    public async moveFolder(requestObj: model.MoveFolderRequest): Promise<{response: http.IncomingMessage}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling moveFolder.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/storage/folder/move/{srcPath}"
            .replace("{" + "srcPath" + "}", String(requestObj.srcPath));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.destPath' is not null or undefined
        if (requestObj.destPath === null || requestObj.destPath === undefined) {
            throw new Error('Required parameter "requestObj.destPath" was null or undefined when calling moveFolder.');
        }

        // verify required parameter 'requestObj.srcPath' is not null or undefined
        if (requestObj.srcPath === null || requestObj.srcPath === undefined) {
            throw new Error('Required parameter "requestObj.srcPath" was null or undefined when calling moveFolder.');
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
        return Promise.resolve({response});
    }

    /**
     * Protects document.
     * @param requestObj contains request parameters
     */
    public async protectDocument(requestObj: model.ProtectDocumentRequest): Promise<{response: http.IncomingMessage, body: model.ProtectionDataResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling protectDocument.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/protection"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling protectDocument.');
        }

        // verify required parameter 'requestObj.protectionRequest' is not null or undefined
        if (requestObj.protectionRequest === null || requestObj.protectionRequest === undefined) {
            throw new Error('Required parameter "requestObj.protectionRequest" was null or undefined when calling protectDocument.');
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
     * Rejects all revisions in document.
     * @param requestObj contains request parameters
     */
    public async rejectAllRevisions(requestObj: model.RejectAllRevisionsRequest): Promise<{response: http.IncomingMessage, body: model.RevisionsModificationResponse}> {
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
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "RevisionsModificationResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Removes the range from the document.
     * @param requestObj contains request parameters
     */
    public async removeRange(requestObj: model.RemoveRangeRequest): Promise<{response: http.IncomingMessage, body: model.DocumentResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling removeRange.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/range/{rangeStartIdentifier}/{rangeEndIdentifier}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "rangeStartIdentifier" + "}", String(requestObj.rangeStartIdentifier))
            .replace("{" + "rangeEndIdentifier" + "}", String(requestObj.rangeEndIdentifier));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling removeRange.');
        }

        // verify required parameter 'requestObj.rangeStartIdentifier' is not null or undefined
        if (requestObj.rangeStartIdentifier === null || requestObj.rangeStartIdentifier === undefined) {
            throw new Error('Required parameter "requestObj.rangeStartIdentifier" was null or undefined when calling removeRange.');
        }

        // verify required parameter 'requestObj.rangeEndIdentifier' is not null or undefined
        if (requestObj.rangeEndIdentifier === null || requestObj.rangeEndIdentifier === undefined) {
            throw new Error('Required parameter "requestObj.rangeEndIdentifier" was null or undefined when calling removeRange.');
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
        const result =  ObjectSerializer.deserialize(response.body, "DocumentResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Renders drawing object to specified format.
     * @param requestObj contains request parameters
     */
    public async renderDrawingObject(requestObj: model.RenderDrawingObjectRequest): Promise<{response: http.IncomingMessage, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling renderDrawingObject.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/drawingObjects/{index}/render"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "nodePath" + "}", String(requestObj.nodePath))
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

        // verify required parameter 'requestObj.nodePath' is not null or undefined
        if (requestObj.nodePath === null || requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was null or undefined when calling renderDrawingObject.');
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
     * Renders drawing object to specified format.
     * @param requestObj contains request parameters
     */
    public async renderDrawingObjectWithoutNodePath(requestObj: model.RenderDrawingObjectWithoutNodePathRequest): Promise<{response: http.IncomingMessage, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling renderDrawingObjectWithoutNodePath.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/drawingObjects/{index}/render"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling renderDrawingObjectWithoutNodePath.');
        }

        // verify required parameter 'requestObj.format' is not null or undefined
        if (requestObj.format === null || requestObj.format === undefined) {
            throw new Error('Required parameter "requestObj.format" was null or undefined when calling renderDrawingObjectWithoutNodePath.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling renderDrawingObjectWithoutNodePath.');
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
     * Renders math object to specified format.
     * @param requestObj contains request parameters
     */
    public async renderMathObject(requestObj: model.RenderMathObjectRequest): Promise<{response: http.IncomingMessage, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling renderMathObject.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/OfficeMathObjects/{index}/render"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "nodePath" + "}", String(requestObj.nodePath))
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

        // verify required parameter 'requestObj.nodePath' is not null or undefined
        if (requestObj.nodePath === null || requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was null or undefined when calling renderMathObject.');
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
    public async renderMathObjectWithoutNodePath(requestObj: model.RenderMathObjectWithoutNodePathRequest): Promise<{response: http.IncomingMessage, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling renderMathObjectWithoutNodePath.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/OfficeMathObjects/{index}/render"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling renderMathObjectWithoutNodePath.');
        }

        // verify required parameter 'requestObj.format' is not null or undefined
        if (requestObj.format === null || requestObj.format === undefined) {
            throw new Error('Required parameter "requestObj.format" was null or undefined when calling renderMathObjectWithoutNodePath.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling renderMathObjectWithoutNodePath.');
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
     * Renders page to specified format.
     * @param requestObj contains request parameters
     */
    public async renderPage(requestObj: model.RenderPageRequest): Promise<{response: http.IncomingMessage, body: Buffer}> {
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
    public async renderParagraph(requestObj: model.RenderParagraphRequest): Promise<{response: http.IncomingMessage, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling renderParagraph.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/paragraphs/{index}/render"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "nodePath" + "}", String(requestObj.nodePath))
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

        // verify required parameter 'requestObj.nodePath' is not null or undefined
        if (requestObj.nodePath === null || requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was null or undefined when calling renderParagraph.');
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
    public async renderParagraphWithoutNodePath(requestObj: model.RenderParagraphWithoutNodePathRequest): Promise<{response: http.IncomingMessage, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling renderParagraphWithoutNodePath.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/paragraphs/{index}/render"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling renderParagraphWithoutNodePath.');
        }

        // verify required parameter 'requestObj.format' is not null or undefined
        if (requestObj.format === null || requestObj.format === undefined) {
            throw new Error('Required parameter "requestObj.format" was null or undefined when calling renderParagraphWithoutNodePath.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling renderParagraphWithoutNodePath.');
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
     * Renders table to specified format.
     * @param requestObj contains request parameters
     */
    public async renderTable(requestObj: model.RenderTableRequest): Promise<{response: http.IncomingMessage, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling renderTable.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/tables/{index}/render"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "nodePath" + "}", String(requestObj.nodePath))
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

        // verify required parameter 'requestObj.nodePath' is not null or undefined
        if (requestObj.nodePath === null || requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was null or undefined when calling renderTable.');
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
    public async renderTableWithoutNodePath(requestObj: model.RenderTableWithoutNodePathRequest): Promise<{response: http.IncomingMessage, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling renderTableWithoutNodePath.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/tables/{index}/render"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling renderTableWithoutNodePath.');
        }

        // verify required parameter 'requestObj.format' is not null or undefined
        if (requestObj.format === null || requestObj.format === undefined) {
            throw new Error('Required parameter "requestObj.format" was null or undefined when calling renderTableWithoutNodePath.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling renderTableWithoutNodePath.');
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
     * Replaces document text.
     * @param requestObj contains request parameters
     */
    public async replaceText(requestObj: model.ReplaceTextRequest): Promise<{response: http.IncomingMessage, body: model.ReplaceTextResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling replaceText.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/replaceText"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling replaceText.');
        }

        // verify required parameter 'requestObj.replaceText' is not null or undefined
        if (requestObj.replaceText === null || requestObj.replaceText === undefined) {
            throw new Error('Required parameter "requestObj.replaceText" was null or undefined when calling replaceText.');
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
            body: ObjectSerializer.serialize(requestObj.replaceText, requestObj.replaceText.constructor.name === "Object" ? "ReplaceTextParameters" : requestObj.replaceText.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "ReplaceTextResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Replaces the content in the range.
     * @param requestObj contains request parameters
     */
    public async replaceWithText(requestObj: model.ReplaceWithTextRequest): Promise<{response: http.IncomingMessage, body: model.DocumentResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling replaceWithText.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/range/{rangeStartIdentifier}/{rangeEndIdentifier}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "rangeStartIdentifier" + "}", String(requestObj.rangeStartIdentifier))
            .replace("{" + "rangeEndIdentifier" + "}", String(requestObj.rangeEndIdentifier));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling replaceWithText.');
        }

        // verify required parameter 'requestObj.rangeStartIdentifier' is not null or undefined
        if (requestObj.rangeStartIdentifier === null || requestObj.rangeStartIdentifier === undefined) {
            throw new Error('Required parameter "requestObj.rangeStartIdentifier" was null or undefined when calling replaceWithText.');
        }

        // verify required parameter 'requestObj.rangeText' is not null or undefined
        if (requestObj.rangeText === null || requestObj.rangeText === undefined) {
            throw new Error('Required parameter "requestObj.rangeText" was null or undefined when calling replaceWithText.');
        }

        // verify required parameter 'requestObj.rangeEndIdentifier' is not null or undefined
        if (requestObj.rangeEndIdentifier === null || requestObj.rangeEndIdentifier === undefined) {
            throw new Error('Required parameter "requestObj.rangeEndIdentifier" was null or undefined when calling replaceWithText.');
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
            body: ObjectSerializer.serialize(requestObj.rangeText, requestObj.rangeText.constructor.name === "Object" ? "ReplaceRange" : requestObj.rangeText.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "DocumentResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Resets font's cache.
     * @param requestObj contains request parameters
     */
    public async resetCache(requestObj: model.ResetCacheRequest): Promise<{response: http.IncomingMessage}> {
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
        return Promise.resolve({response});
    }

    /**
     * Converts document to destination format with detailed settings and saves result to storage.
     * @param requestObj contains request parameters
     */
    public async saveAs(requestObj: model.SaveAsRequest): Promise<{response: http.IncomingMessage, body: model.SaveResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling saveAs.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/saveAs"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling saveAs.');
        }

        // verify required parameter 'requestObj.saveOptionsData' is not null or undefined
        if (requestObj.saveOptionsData === null || requestObj.saveOptionsData === undefined) {
            throw new Error('Required parameter "requestObj.saveOptionsData" was null or undefined when calling saveAs.');
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
            body: ObjectSerializer.serialize(requestObj.saveOptionsData, requestObj.saveOptionsData.constructor.name === "Object" ? "SaveOptionsData" : requestObj.saveOptionsData.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "SaveResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Saves the selected range as a new document.
     * @param requestObj contains request parameters
     */
    public async saveAsRange(requestObj: model.SaveAsRangeRequest): Promise<{response: http.IncomingMessage, body: model.DocumentResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling saveAsRange.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/range/{rangeStartIdentifier}/{rangeEndIdentifier}/SaveAs"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "rangeStartIdentifier" + "}", String(requestObj.rangeStartIdentifier))
            .replace("{" + "rangeEndIdentifier" + "}", String(requestObj.rangeEndIdentifier));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling saveAsRange.');
        }

        // verify required parameter 'requestObj.rangeStartIdentifier' is not null or undefined
        if (requestObj.rangeStartIdentifier === null || requestObj.rangeStartIdentifier === undefined) {
            throw new Error('Required parameter "requestObj.rangeStartIdentifier" was null or undefined when calling saveAsRange.');
        }

        // verify required parameter 'requestObj.documentParameters' is not null or undefined
        if (requestObj.documentParameters === null || requestObj.documentParameters === undefined) {
            throw new Error('Required parameter "requestObj.documentParameters" was null or undefined when calling saveAsRange.');
        }

        // verify required parameter 'requestObj.rangeEndIdentifier' is not null or undefined
        if (requestObj.rangeEndIdentifier === null || requestObj.rangeEndIdentifier === undefined) {
            throw new Error('Required parameter "requestObj.rangeEndIdentifier" was null or undefined when calling saveAsRange.');
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
            body: ObjectSerializer.serialize(requestObj.documentParameters, requestObj.documentParameters.constructor.name === "Object" ? "RangeDocument" : requestObj.documentParameters.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "DocumentResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Converts document to tiff with detailed settings and saves result to storage.
     * @param requestObj contains request parameters
     */
    public async saveAsTiff(requestObj: model.SaveAsTiffRequest): Promise<{response: http.IncomingMessage, body: model.SaveResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling saveAsTiff.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/saveAs/tiff"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling saveAsTiff.');
        }

        // verify required parameter 'requestObj.saveOptions' is not null or undefined
        if (requestObj.saveOptions === null || requestObj.saveOptions === undefined) {
            throw new Error('Required parameter "requestObj.saveOptions" was null or undefined when calling saveAsTiff.');
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
            body: ObjectSerializer.serialize(requestObj.saveOptions, requestObj.saveOptions.constructor.name === "Object" ? "TiffSaveOptionsData" : requestObj.saveOptions.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "SaveResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Searches text in document.
     * @param requestObj contains request parameters
     */
    public async search(requestObj: model.SearchRequest): Promise<{response: http.IncomingMessage, body: model.SearchResponse}> {
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
     * Splits document.
     * @param requestObj contains request parameters
     */
    public async splitDocument(requestObj: model.SplitDocumentRequest): Promise<{response: http.IncomingMessage, body: model.SplitDocumentResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling splitDocument.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/split"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling splitDocument.');
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
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "SplitDocumentResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Unprotects document.
     * @param requestObj contains request parameters
     */
    public async unprotectDocument(requestObj: model.UnprotectDocumentRequest): Promise<{response: http.IncomingMessage, body: model.ProtectionDataResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling unprotectDocument.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/protection"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling unprotectDocument.');
        }

        // verify required parameter 'requestObj.protectionRequest' is not null or undefined
        if (requestObj.protectionRequest === null || requestObj.protectionRequest === undefined) {
            throw new Error('Required parameter "requestObj.protectionRequest" was null or undefined when calling unprotectDocument.');
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
     * Updates document bookmark.
     * @param requestObj contains request parameters
     */
    public async updateBookmark(requestObj: model.UpdateBookmarkRequest): Promise<{response: http.IncomingMessage, body: model.BookmarkResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateBookmark.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/bookmarks/{bookmarkName}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "bookmarkName" + "}", String(requestObj.bookmarkName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling updateBookmark.');
        }

        // verify required parameter 'requestObj.bookmarkData' is not null or undefined
        if (requestObj.bookmarkData === null || requestObj.bookmarkData === undefined) {
            throw new Error('Required parameter "requestObj.bookmarkData" was null or undefined when calling updateBookmark.');
        }

        // verify required parameter 'requestObj.bookmarkName' is not null or undefined
        if (requestObj.bookmarkName === null || requestObj.bookmarkName === undefined) {
            throw new Error('Required parameter "requestObj.bookmarkName" was null or undefined when calling updateBookmark.');
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
            body: ObjectSerializer.serialize(requestObj.bookmarkData, requestObj.bookmarkData.constructor.name === "Object" ? "BookmarkData" : requestObj.bookmarkData.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "BookmarkResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Updates border properties.              'nodePath' should refer to node with cell or row.
     * @param requestObj contains request parameters
     */
    public async updateBorder(requestObj: model.UpdateBorderRequest): Promise<{response: http.IncomingMessage, body: model.BorderResponse}> {
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
            method: "PUT",
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
     * Updates the comment, returns updated comment data.
     * @param requestObj contains request parameters
     */
    public async updateComment(requestObj: model.UpdateCommentRequest): Promise<{response: http.IncomingMessage, body: model.CommentResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateComment.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/comments/{commentIndex}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "commentIndex" + "}", String(requestObj.commentIndex));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling updateComment.');
        }

        // verify required parameter 'requestObj.commentIndex' is not null or undefined
        if (requestObj.commentIndex === null || requestObj.commentIndex === undefined) {
            throw new Error('Required parameter "requestObj.commentIndex" was null or undefined when calling updateComment.');
        }

        // verify required parameter 'requestObj.comment' is not null or undefined
        if (requestObj.comment === null || requestObj.comment === undefined) {
            throw new Error('Required parameter "requestObj.comment" was null or undefined when calling updateComment.');
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
     * Updates drawing object, returns updated  drawing object's data.
     * @param requestObj contains request parameters
     */
    public async updateDrawingObject(requestObj: model.UpdateDrawingObjectRequest): Promise<{response: http.IncomingMessage, body: model.DrawingObjectResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateDrawingObject.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/drawingObjects/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "nodePath" + "}", String(requestObj.nodePath))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling updateDrawingObject.');
        }

        // verify required parameter 'requestObj.drawingObject' is not null or undefined
        if (requestObj.drawingObject === null || requestObj.drawingObject === undefined) {
            throw new Error('Required parameter "requestObj.drawingObject" was null or undefined when calling updateDrawingObject.');
        }

        // verify required parameter 'requestObj.imageFile' is not null or undefined
        if (requestObj.imageFile === null || requestObj.imageFile === undefined) {
            throw new Error('Required parameter "requestObj.imageFile" was null or undefined when calling updateDrawingObject.');
        }

        // verify required parameter 'requestObj.nodePath' is not null or undefined
        if (requestObj.nodePath === null || requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was null or undefined when calling updateDrawingObject.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling updateDrawingObject.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
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

        requestOptions.formData = formParams;        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "DrawingObjectResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Updates drawing object, returns updated  drawing object's data.
     * @param requestObj contains request parameters
     */
    public async updateDrawingObjectWithoutNodePath(requestObj: model.UpdateDrawingObjectWithoutNodePathRequest): Promise<{response: http.IncomingMessage, body: model.DrawingObjectResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateDrawingObjectWithoutNodePath.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/drawingObjects/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling updateDrawingObjectWithoutNodePath.');
        }

        // verify required parameter 'requestObj.drawingObject' is not null or undefined
        if (requestObj.drawingObject === null || requestObj.drawingObject === undefined) {
            throw new Error('Required parameter "requestObj.drawingObject" was null or undefined when calling updateDrawingObjectWithoutNodePath.');
        }

        // verify required parameter 'requestObj.imageFile' is not null or undefined
        if (requestObj.imageFile === null || requestObj.imageFile === undefined) {
            throw new Error('Required parameter "requestObj.imageFile" was null or undefined when calling updateDrawingObjectWithoutNodePath.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling updateDrawingObjectWithoutNodePath.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "loadEncoding", requestObj.loadEncoding);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destFileName", requestObj.destFileName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionAuthor", requestObj.revisionAuthor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "revisionDateTime", requestObj.revisionDateTime);
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

        requestOptions.formData = formParams;        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "DrawingObjectResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Updates field's properties, returns updated field's data.
     * @param requestObj contains request parameters
     */
    public async updateField(requestObj: model.UpdateFieldRequest): Promise<{response: http.IncomingMessage, body: model.FieldResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateField.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/fields/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "nodePath" + "}", String(requestObj.nodePath))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling updateField.');
        }

        // verify required parameter 'requestObj.field' is not null or undefined
        if (requestObj.field === null || requestObj.field === undefined) {
            throw new Error('Required parameter "requestObj.field" was null or undefined when calling updateField.');
        }

        // verify required parameter 'requestObj.nodePath' is not null or undefined
        if (requestObj.nodePath === null || requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was null or undefined when calling updateField.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling updateField.');
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
            body: ObjectSerializer.serialize(requestObj.field, requestObj.field.constructor.name === "Object" ? "Field" : requestObj.field.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FieldResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Updates (reevaluate) fields in document.
     * @param requestObj contains request parameters
     */
    public async updateFields(requestObj: model.UpdateFieldsRequest): Promise<{response: http.IncomingMessage, body: model.DocumentResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateFields.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/updateFields"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling updateFields.');
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
        const result =  ObjectSerializer.deserialize(response.body, "DocumentResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Updates footnote's properties, returns updated run's data.
     * @param requestObj contains request parameters
     */
    public async updateFootnote(requestObj: model.UpdateFootnoteRequest): Promise<{response: http.IncomingMessage, body: model.FootnoteResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateFootnote.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/footnotes/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "nodePath" + "}", String(requestObj.nodePath))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling updateFootnote.');
        }

        // verify required parameter 'requestObj.footnoteDto' is not null or undefined
        if (requestObj.footnoteDto === null || requestObj.footnoteDto === undefined) {
            throw new Error('Required parameter "requestObj.footnoteDto" was null or undefined when calling updateFootnote.');
        }

        // verify required parameter 'requestObj.nodePath' is not null or undefined
        if (requestObj.nodePath === null || requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was null or undefined when calling updateFootnote.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling updateFootnote.');
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
            body: ObjectSerializer.serialize(requestObj.footnoteDto, requestObj.footnoteDto.constructor.name === "Object" ? "Footnote" : requestObj.footnoteDto.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FootnoteResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Updates footnote's properties, returns updated run's data.
     * @param requestObj contains request parameters
     */
    public async updateFootnoteWithoutNodePath(requestObj: model.UpdateFootnoteWithoutNodePathRequest): Promise<{response: http.IncomingMessage, body: model.FootnoteResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateFootnoteWithoutNodePath.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/footnotes/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling updateFootnoteWithoutNodePath.');
        }

        // verify required parameter 'requestObj.footnoteDto' is not null or undefined
        if (requestObj.footnoteDto === null || requestObj.footnoteDto === undefined) {
            throw new Error('Required parameter "requestObj.footnoteDto" was null or undefined when calling updateFootnoteWithoutNodePath.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling updateFootnoteWithoutNodePath.');
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
    public async updateFormField(requestObj: model.UpdateFormFieldRequest): Promise<{response: http.IncomingMessage, body: model.FormFieldResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateFormField.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/formfields/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "nodePath" + "}", String(requestObj.nodePath))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling updateFormField.');
        }

        // verify required parameter 'requestObj.formField' is not null or undefined
        if (requestObj.formField === null || requestObj.formField === undefined) {
            throw new Error('Required parameter "requestObj.formField" was null or undefined when calling updateFormField.');
        }

        // verify required parameter 'requestObj.nodePath' is not null or undefined
        if (requestObj.nodePath === null || requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was null or undefined when calling updateFormField.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling updateFormField.');
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
            body: ObjectSerializer.serialize(requestObj.formField, requestObj.formField.constructor.name === "Object" ? "FormField" : requestObj.formField.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FormFieldResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Updates properties of form field, returns updated form field.
     * @param requestObj contains request parameters
     */
    public async updateFormFieldWithoutNodePath(requestObj: model.UpdateFormFieldWithoutNodePathRequest): Promise<{response: http.IncomingMessage, body: model.FormFieldResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateFormFieldWithoutNodePath.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/formfields/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling updateFormFieldWithoutNodePath.');
        }

        // verify required parameter 'requestObj.formField' is not null or undefined
        if (requestObj.formField === null || requestObj.formField === undefined) {
            throw new Error('Required parameter "requestObj.formField" was null or undefined when calling updateFormFieldWithoutNodePath.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling updateFormFieldWithoutNodePath.');
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
            body: ObjectSerializer.serialize(requestObj.formField, requestObj.formField.constructor.name === "Object" ? "FormField" : requestObj.formField.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FormFieldResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Updates paragraph format properties, returns updated format properties.
     * @param requestObj contains request parameters
     */
    public async updateParagraphFormat(requestObj: model.UpdateParagraphFormatRequest): Promise<{response: http.IncomingMessage, body: model.ParagraphFormatResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateParagraphFormat.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/paragraphs/{index}/format"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "nodePath" + "}", String(requestObj.nodePath))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling updateParagraphFormat.');
        }

        // verify required parameter 'requestObj.dto' is not null or undefined
        if (requestObj.dto === null || requestObj.dto === undefined) {
            throw new Error('Required parameter "requestObj.dto" was null or undefined when calling updateParagraphFormat.');
        }

        // verify required parameter 'requestObj.nodePath' is not null or undefined
        if (requestObj.nodePath === null || requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was null or undefined when calling updateParagraphFormat.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling updateParagraphFormat.');
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
            body: ObjectSerializer.serialize(requestObj.dto, requestObj.dto.constructor.name === "Object" ? "ParagraphFormat" : requestObj.dto.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "ParagraphFormatResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Updates run's properties, returns updated run's data.
     * @param requestObj contains request parameters
     */
    public async updateRun(requestObj: model.UpdateRunRequest): Promise<{response: http.IncomingMessage, body: model.RunResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateRun.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{paragraphPath}/runs/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "paragraphPath" + "}", String(requestObj.paragraphPath))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling updateRun.');
        }

        // verify required parameter 'requestObj.run' is not null or undefined
        if (requestObj.run === null || requestObj.run === undefined) {
            throw new Error('Required parameter "requestObj.run" was null or undefined when calling updateRun.');
        }

        // verify required parameter 'requestObj.paragraphPath' is not null or undefined
        if (requestObj.paragraphPath === null || requestObj.paragraphPath === undefined) {
            throw new Error('Required parameter "requestObj.paragraphPath" was null or undefined when calling updateRun.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling updateRun.');
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
            body: ObjectSerializer.serialize(requestObj.run, requestObj.run.constructor.name === "Object" ? "Run" : requestObj.run.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "RunResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Updates font properties, returns updated font data.
     * @param requestObj contains request parameters
     */
    public async updateRunFont(requestObj: model.UpdateRunFontRequest): Promise<{response: http.IncomingMessage, body: model.FontResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateRunFont.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{paragraphPath}/runs/{index}/font"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "paragraphPath" + "}", String(requestObj.paragraphPath))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling updateRunFont.');
        }

        // verify required parameter 'requestObj.fontDto' is not null or undefined
        if (requestObj.fontDto === null || requestObj.fontDto === undefined) {
            throw new Error('Required parameter "requestObj.fontDto" was null or undefined when calling updateRunFont.');
        }

        // verify required parameter 'requestObj.paragraphPath' is not null or undefined
        if (requestObj.paragraphPath === null || requestObj.paragraphPath === undefined) {
            throw new Error('Required parameter "requestObj.paragraphPath" was null or undefined when calling updateRunFont.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling updateRunFont.');
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
            body: ObjectSerializer.serialize(requestObj.fontDto, requestObj.fontDto.constructor.name === "Object" ? "Font" : requestObj.fontDto.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FontResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Updates page setup of section.
     * @param requestObj contains request parameters
     */
    public async updateSectionPageSetup(requestObj: model.UpdateSectionPageSetupRequest): Promise<{response: http.IncomingMessage, body: model.SectionPageSetupResponse}> {
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
            method: "PUT",
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
    public async updateTableCellFormat(requestObj: model.UpdateTableCellFormatRequest): Promise<{response: http.IncomingMessage, body: model.TableCellFormatResponse}> {
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
            method: "PUT",
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
    public async updateTableProperties(requestObj: model.UpdateTablePropertiesRequest): Promise<{response: http.IncomingMessage, body: model.TablePropertiesResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateTableProperties.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/tables/{index}/properties"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "nodePath" + "}", String(requestObj.nodePath))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling updateTableProperties.');
        }

        // verify required parameter 'requestObj.nodePath' is not null or undefined
        if (requestObj.nodePath === null || requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was null or undefined when calling updateTableProperties.');
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
        const requestOptions: request.Options = {
            method: "PUT",
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
     * Updates a table properties.
     * @param requestObj contains request parameters
     */
    public async updateTablePropertiesWithoutNodePath(requestObj: model.UpdateTablePropertiesWithoutNodePathRequest): Promise<{response: http.IncomingMessage, body: model.TablePropertiesResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateTablePropertiesWithoutNodePath.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/tables/{index}/properties"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling updateTablePropertiesWithoutNodePath.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling updateTablePropertiesWithoutNodePath.');
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
    public async updateTableRowFormat(requestObj: model.UpdateTableRowFormatRequest): Promise<{response: http.IncomingMessage, body: model.TableRowFormatResponse}> {
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
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.format, requestObj.format.constructor.name === "Object" ? "TableRowFormat" : requestObj.format.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "TableRowFormatResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Upload file
     * @param requestObj contains request parameters
     */
    public async uploadFile(requestObj: model.UploadFileRequest): Promise<{response: http.IncomingMessage, body: model.FilesUploadResult}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling uploadFile.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/storage/file/{path}"
            .replace("{" + "path" + "}", String(requestObj.path));
        const queryParameters: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.file' is not null or undefined
        if (requestObj.file === null || requestObj.file === undefined) {
            throw new Error('Required parameter "requestObj.file" was null or undefined when calling uploadFile.');
        }

        // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling uploadFile.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        if (requestObj.file !== undefined) {
            formParams.File = requestObj.file;
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        requestOptions.formData = formParams;        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FilesUploadResult");
        return Promise.resolve({body: result, response});
    }

}

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
    public async acceptAllRevisions(requestObj: model.AcceptAllRevisionsRequest): Promise<model.WordsIncomingMessage<model.RevisionsModificationResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling acceptAllRevisions.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/revisions/acceptAll"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "");
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
        const result: model.WordsIncomingMessage<model.RevisionsModificationResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Appends documents to original document.
     * @param requestObj contains request parameters
     */
    public async appendDocument(requestObj: model.AppendDocumentRequest): Promise<model.WordsIncomingMessage<model.DocumentResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling appendDocument.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/appendDocument"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "");
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
        const result: model.WordsIncomingMessage<model.DocumentResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Classifies raw text.
     * @param requestObj contains request parameters
     */
    public async classify(requestObj: model.ClassifyRequest): Promise<model.WordsIncomingMessage<model.ClassificationResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling classify.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/classify";
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
        const result: model.WordsIncomingMessage<model.ClassificationResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Classifies document.
     * @param requestObj contains request parameters
     */
    public async classifyDocument(requestObj: model.ClassifyDocumentRequest): Promise<model.WordsIncomingMessage<model.ClassificationResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling classifyDocument.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{documentName}/classify"
            .replace("/{" + "documentName" + "}", (requestObj.documentName !== null) ? "/" + String(requestObj.documentName) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.documentName' is not undefined
        if (requestObj.documentName === undefined) {
            throw new Error('Required parameter "requestObj.documentName" was undefined when calling classifyDocument.');
        }

        // verify required parameter 'requestObj.documentName' is not null
        if (requestObj.documentName === null) {
            throw new Error('Required parameter "requestObj.documentName" was null when calling classifyDocument.');
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
        const result: model.WordsIncomingMessage<model.ClassificationResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Compares document with original document.
     * @param requestObj contains request parameters
     */
    public async compareDocument(requestObj: model.CompareDocumentRequest): Promise<model.WordsIncomingMessage<model.DocumentResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling compareDocument.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/compareDocument"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "");
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
        const result: model.WordsIncomingMessage<model.DocumentResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Converts document from the request's content to the specified format .
     * @param requestObj contains request parameters
     */
    public async convertDocument(requestObj: model.ConvertDocumentRequest): Promise<model.WordsIncomingMessage<Buffer>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling convertDocument.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/convert";
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
        const body =  ObjectSerializer.deserialize(response.body, "Buffer");
        const result: model.WordsIncomingMessage<Buffer> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Copy file
     * @param requestObj contains request parameters
     */
    public async copyFile(requestObj: model.CopyFileRequest): Promise<http.IncomingMessage> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling copyFile.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/storage/file/copy/{srcPath}"
            .replace("/{" + "srcPath" + "}", (requestObj.srcPath !== null) ? "/" + String(requestObj.srcPath) : "");
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
     * Copy folder
     * @param requestObj contains request parameters
     */
    public async copyFolder(requestObj: model.CopyFolderRequest): Promise<http.IncomingMessage> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling copyFolder.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/storage/folder/copy/{srcPath}"
            .replace("/{" + "srcPath" + "}", (requestObj.srcPath !== null) ? "/" + String(requestObj.srcPath) : "");
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
     * Creates new document. Document is created with format which is recognized from file extensions. Supported extensions: \".doc\", \".docx\", \".docm\", \".dot\", \".dotm\", \".dotx\", \".flatopc\", \".fopc\", \".flatopc_macro\", \".fopc_macro\", \".flatopc_template\", \".fopc_template\", \".flatopc_template_macro\", \".fopc_template_macro\", \".wordml\", \".wml\", \".rtf\".
     * @param requestObj contains request parameters
     */
    public async createDocument(requestObj: model.CreateDocumentRequest): Promise<model.WordsIncomingMessage<model.DocumentResponse>> {
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
        const body =  ObjectSerializer.deserialize(response.body, "DocumentResponse");
        const result: model.WordsIncomingMessage<model.DocumentResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Create the folder
     * @param requestObj contains request parameters
     */
    public async createFolder(requestObj: model.CreateFolderRequest): Promise<http.IncomingMessage> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling createFolder.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/storage/folder/{path}"
            .replace("/{" + "path" + "}", (requestObj.path !== null) ? "/" + String(requestObj.path) : "");
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
     * Adds new or update existing document property.
     * @param requestObj contains request parameters
     */
    public async createOrUpdateDocumentProperty(requestObj: model.CreateOrUpdateDocumentPropertyRequest): Promise<model.WordsIncomingMessage<model.DocumentPropertyResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling createOrUpdateDocumentProperty.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/documentProperties/{propertyName}"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "propertyName" + "}", (requestObj.propertyName !== null) ? "/" + String(requestObj.propertyName) : "");
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
            body: ObjectSerializer.serialize(requestObj.property, requestObj.property.constructor.name === "Object" ? "importedDocumentProperty.DocumentProperty" : requestObj.property.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "DocumentPropertyResponse");
        const result: model.WordsIncomingMessage<model.DocumentPropertyResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Resets border properties to default values.              'nodePath' should refer to paragraph, cell or row.
     * @param requestObj contains request parameters
     */
    public async deleteBorder(requestObj: model.DeleteBorderRequest): Promise<model.WordsIncomingMessage<model.BorderResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteBorder.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/borders/{borderType}"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null) ? "/" + String(requestObj.nodePath) : "")
            .replace("/{" + "borderType" + "}", (requestObj.borderType !== null) ? "/" + String(requestObj.borderType) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling deleteBorder.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling deleteBorder.');
        }

        // verify required parameter 'requestObj.nodePath' is not undefined
        if (requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was undefined when calling deleteBorder.');
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
        const result: model.WordsIncomingMessage<model.BorderResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Resets borders properties to default values.              'nodePath' should refer to paragraph, cell or row.
     * @param requestObj contains request parameters
     */
    public async deleteBorders(requestObj: model.DeleteBordersRequest): Promise<model.WordsIncomingMessage<model.BordersResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteBorders.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/borders"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null) ? "/" + String(requestObj.nodePath) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling deleteBorders.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling deleteBorders.');
        }

        // verify required parameter 'requestObj.nodePath' is not undefined
        if (requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was undefined when calling deleteBorders.');
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
        const result: model.WordsIncomingMessage<model.BordersResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Removes comment from document.
     * @param requestObj contains request parameters
     */
    public async deleteComment(requestObj: model.DeleteCommentRequest): Promise<http.IncomingMessage> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteComment.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/comments/{commentIndex}"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "commentIndex" + "}", (requestObj.commentIndex !== null) ? "/" + String(requestObj.commentIndex) : "");
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
     * Deletes document property.
     * @param requestObj contains request parameters
     */
    public async deleteDocumentProperty(requestObj: model.DeleteDocumentPropertyRequest): Promise<http.IncomingMessage> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteDocumentProperty.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/documentProperties/{propertyName}"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "propertyName" + "}", (requestObj.propertyName !== null) ? "/" + String(requestObj.propertyName) : "");
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
     * Removes drawing object from document.
     * @param requestObj contains request parameters
     */
    public async deleteDrawingObject(requestObj: model.DeleteDrawingObjectRequest): Promise<http.IncomingMessage> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteDrawingObject.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/drawingObjects/{index}"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null) ? "/" + String(requestObj.nodePath) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null) ? "/" + String(requestObj.index) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling deleteDrawingObject.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling deleteDrawingObject.');
        }

        // verify required parameter 'requestObj.nodePath' is not undefined
        if (requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was undefined when calling deleteDrawingObject.');
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
     * Removes drawing object from document.
     * @param requestObj contains request parameters
     */
    public async deleteDrawingObjectWithoutNodePath(requestObj: model.DeleteDrawingObjectWithoutNodePathRequest): Promise<http.IncomingMessage> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteDrawingObjectWithoutNodePath.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/drawingObjects/{index}"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null) ? "/" + String(requestObj.index) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling deleteDrawingObjectWithoutNodePath.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling deleteDrawingObjectWithoutNodePath.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling deleteDrawingObjectWithoutNodePath.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling deleteDrawingObjectWithoutNodePath.');
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
     * Deletes field from document.
     * @param requestObj contains request parameters
     */
    public async deleteField(requestObj: model.DeleteFieldRequest): Promise<http.IncomingMessage> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteField.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/fields/{index}"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null) ? "/" + String(requestObj.nodePath) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null) ? "/" + String(requestObj.index) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling deleteField.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling deleteField.');
        }

        // verify required parameter 'requestObj.nodePath' is not undefined
        if (requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was undefined when calling deleteField.');
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
     * Deletes field from document.
     * @param requestObj contains request parameters
     */
    public async deleteFieldWithoutNodePath(requestObj: model.DeleteFieldWithoutNodePathRequest): Promise<http.IncomingMessage> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteFieldWithoutNodePath.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/fields/{index}"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null) ? "/" + String(requestObj.index) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling deleteFieldWithoutNodePath.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling deleteFieldWithoutNodePath.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling deleteFieldWithoutNodePath.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling deleteFieldWithoutNodePath.');
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
     * Removes fields from section paragraph.
     * @param requestObj contains request parameters
     */
    public async deleteFields(requestObj: model.DeleteFieldsRequest): Promise<http.IncomingMessage> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteFields.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/fields"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null) ? "/" + String(requestObj.nodePath) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling deleteFields.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling deleteFields.');
        }

        // verify required parameter 'requestObj.nodePath' is not undefined
        if (requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was undefined when calling deleteFields.');
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
     * Removes fields from section paragraph.
     * @param requestObj contains request parameters
     */
    public async deleteFieldsWithoutNodePath(requestObj: model.DeleteFieldsWithoutNodePathRequest): Promise<http.IncomingMessage> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteFieldsWithoutNodePath.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/fields"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling deleteFieldsWithoutNodePath.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling deleteFieldsWithoutNodePath.');
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
     * Delete file
     * @param requestObj contains request parameters
     */
    public async deleteFile(requestObj: model.DeleteFileRequest): Promise<http.IncomingMessage> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteFile.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/storage/file/{path}"
            .replace("/{" + "path" + "}", (requestObj.path !== null) ? "/" + String(requestObj.path) : "");
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
     * Delete folder
     * @param requestObj contains request parameters
     */
    public async deleteFolder(requestObj: model.DeleteFolderRequest): Promise<http.IncomingMessage> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteFolder.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/storage/folder/{path}"
            .replace("/{" + "path" + "}", (requestObj.path !== null) ? "/" + String(requestObj.path) : "");
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
     * Removes footnote from document.
     * @param requestObj contains request parameters
     */
    public async deleteFootnote(requestObj: model.DeleteFootnoteRequest): Promise<http.IncomingMessage> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteFootnote.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/footnotes/{index}"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null) ? "/" + String(requestObj.nodePath) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null) ? "/" + String(requestObj.index) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling deleteFootnote.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling deleteFootnote.');
        }

        // verify required parameter 'requestObj.nodePath' is not undefined
        if (requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was undefined when calling deleteFootnote.');
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
     * Removes footnote from document.
     * @param requestObj contains request parameters
     */
    public async deleteFootnoteWithoutNodePath(requestObj: model.DeleteFootnoteWithoutNodePathRequest): Promise<http.IncomingMessage> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteFootnoteWithoutNodePath.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/footnotes/{index}"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null) ? "/" + String(requestObj.index) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling deleteFootnoteWithoutNodePath.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling deleteFootnoteWithoutNodePath.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling deleteFootnoteWithoutNodePath.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling deleteFootnoteWithoutNodePath.');
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
     * Removes form field from document.
     * @param requestObj contains request parameters
     */
    public async deleteFormField(requestObj: model.DeleteFormFieldRequest): Promise<http.IncomingMessage> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteFormField.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/formfields/{index}"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null) ? "/" + String(requestObj.nodePath) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null) ? "/" + String(requestObj.index) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling deleteFormField.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling deleteFormField.');
        }

        // verify required parameter 'requestObj.nodePath' is not undefined
        if (requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was undefined when calling deleteFormField.');
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
     * Removes form field from document.
     * @param requestObj contains request parameters
     */
    public async deleteFormFieldWithoutNodePath(requestObj: model.DeleteFormFieldWithoutNodePathRequest): Promise<http.IncomingMessage> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteFormFieldWithoutNodePath.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/formfields/{index}"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null) ? "/" + String(requestObj.index) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling deleteFormFieldWithoutNodePath.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling deleteFormFieldWithoutNodePath.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling deleteFormFieldWithoutNodePath.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling deleteFormFieldWithoutNodePath.');
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
     * Deletes header/footer from document.
     * @param requestObj contains request parameters
     */
    public async deleteHeaderFooter(requestObj: model.DeleteHeaderFooterRequest): Promise<http.IncomingMessage> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteHeaderFooter.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{sectionPath}/headersfooters/{index}"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "sectionPath" + "}", (requestObj.sectionPath !== null) ? "/" + String(requestObj.sectionPath) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null) ? "/" + String(requestObj.index) : "");
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
     * Deletes document headers and footers.
     * @param requestObj contains request parameters
     */
    public async deleteHeadersFooters(requestObj: model.DeleteHeadersFootersRequest): Promise<http.IncomingMessage> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteHeadersFooters.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{sectionPath}/headersfooters"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "sectionPath" + "}", (requestObj.sectionPath !== null) ? "/" + String(requestObj.sectionPath) : "");
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
     * Removes macros from document.
     * @param requestObj contains request parameters
     */
    public async deleteMacros(requestObj: model.DeleteMacrosRequest): Promise<http.IncomingMessage> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteMacros.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/macros"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "");
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
     * Removes OfficeMath object from document.
     * @param requestObj contains request parameters
     */
    public async deleteOfficeMathObject(requestObj: model.DeleteOfficeMathObjectRequest): Promise<http.IncomingMessage> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteOfficeMathObject.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/OfficeMathObjects/{index}"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null) ? "/" + String(requestObj.nodePath) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null) ? "/" + String(requestObj.index) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling deleteOfficeMathObject.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling deleteOfficeMathObject.');
        }

        // verify required parameter 'requestObj.nodePath' is not undefined
        if (requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was undefined when calling deleteOfficeMathObject.');
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
     * Removes OfficeMath object from document.
     * @param requestObj contains request parameters
     */
    public async deleteOfficeMathObjectWithoutNodePath(requestObj: model.DeleteOfficeMathObjectWithoutNodePathRequest): Promise<http.IncomingMessage> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteOfficeMathObjectWithoutNodePath.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/OfficeMathObjects/{index}"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null) ? "/" + String(requestObj.index) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling deleteOfficeMathObjectWithoutNodePath.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling deleteOfficeMathObjectWithoutNodePath.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling deleteOfficeMathObjectWithoutNodePath.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling deleteOfficeMathObjectWithoutNodePath.');
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
     * Removes paragraph from section.
     * @param requestObj contains request parameters
     */
    public async deleteParagraph(requestObj: model.DeleteParagraphRequest): Promise<http.IncomingMessage> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteParagraph.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/paragraphs/{index}"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null) ? "/" + String(requestObj.nodePath) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null) ? "/" + String(requestObj.index) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling deleteParagraph.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling deleteParagraph.');
        }

        // verify required parameter 'requestObj.nodePath' is not undefined
        if (requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was undefined when calling deleteParagraph.');
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
     * Removes paragraph from section.
     * @param requestObj contains request parameters
     */
    public async deleteParagraphWithoutNodePath(requestObj: model.DeleteParagraphWithoutNodePathRequest): Promise<http.IncomingMessage> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteParagraphWithoutNodePath.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/paragraphs/{index}"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null) ? "/" + String(requestObj.index) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling deleteParagraphWithoutNodePath.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling deleteParagraphWithoutNodePath.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling deleteParagraphWithoutNodePath.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling deleteParagraphWithoutNodePath.');
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
     * Removes run from document.
     * @param requestObj contains request parameters
     */
    public async deleteRun(requestObj: model.DeleteRunRequest): Promise<http.IncomingMessage> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteRun.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{paragraphPath}/runs/{index}"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "paragraphPath" + "}", (requestObj.paragraphPath !== null) ? "/" + String(requestObj.paragraphPath) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null) ? "/" + String(requestObj.index) : "");
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
     * Removes section from document.
     * @param requestObj contains request parameters
     */
    public async deleteSection(requestObj: model.DeleteSectionRequest): Promise<http.IncomingMessage> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteSection.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/sections/{sectionIndex}"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "sectionIndex" + "}", (requestObj.sectionIndex !== null) ? "/" + String(requestObj.sectionIndex) : "");
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
     * Deletes a table.
     * @param requestObj contains request parameters
     */
    public async deleteTable(requestObj: model.DeleteTableRequest): Promise<http.IncomingMessage> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteTable.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/tables/{index}"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null) ? "/" + String(requestObj.nodePath) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null) ? "/" + String(requestObj.index) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling deleteTable.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling deleteTable.');
        }

        // verify required parameter 'requestObj.nodePath' is not undefined
        if (requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was undefined when calling deleteTable.');
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
     * Deletes a table cell.
     * @param requestObj contains request parameters
     */
    public async deleteTableCell(requestObj: model.DeleteTableCellRequest): Promise<http.IncomingMessage> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteTableCell.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{tableRowPath}/cells/{index}"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "tableRowPath" + "}", (requestObj.tableRowPath !== null) ? "/" + String(requestObj.tableRowPath) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null) ? "/" + String(requestObj.index) : "");
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
     * Deletes a table row.
     * @param requestObj contains request parameters
     */
    public async deleteTableRow(requestObj: model.DeleteTableRowRequest): Promise<http.IncomingMessage> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteTableRow.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{tablePath}/rows/{index}"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "tablePath" + "}", (requestObj.tablePath !== null) ? "/" + String(requestObj.tablePath) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null) ? "/" + String(requestObj.index) : "");
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
     * Deletes a table.
     * @param requestObj contains request parameters
     */
    public async deleteTableWithoutNodePath(requestObj: model.DeleteTableWithoutNodePathRequest): Promise<http.IncomingMessage> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteTableWithoutNodePath.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/tables/{index}"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null) ? "/" + String(requestObj.index) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling deleteTableWithoutNodePath.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling deleteTableWithoutNodePath.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling deleteTableWithoutNodePath.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling deleteTableWithoutNodePath.');
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
     * Deletes watermark (for deleting last watermark from the document).
     * @param requestObj contains request parameters
     */
    public async deleteWatermark(requestObj: model.DeleteWatermarkRequest): Promise<model.WordsIncomingMessage<model.DocumentResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteWatermark.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/watermarks/deleteLast"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "");
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
        const result: model.WordsIncomingMessage<model.DocumentResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Download file
     * @param requestObj contains request parameters
     */
    public async downloadFile(requestObj: model.DownloadFileRequest): Promise<model.WordsIncomingMessage<Buffer>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling downloadFile.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/storage/file/{path}"
            .replace("/{" + "path" + "}", (requestObj.path !== null) ? "/" + String(requestObj.path) : "");
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
        const result: model.WordsIncomingMessage<Buffer> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Executes document mail merge operation.
     * @param requestObj contains request parameters
     */
    public async executeMailMerge(requestObj: model.ExecuteMailMergeRequest): Promise<model.WordsIncomingMessage<model.DocumentResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling executeMailMerge.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/MailMerge"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "");
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

        requestOptions.formData = formParams;        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "DocumentResponse");
        const result: model.WordsIncomingMessage<model.DocumentResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Executes document mail merge online.
     * @param requestObj contains request parameters
     */
    public async executeMailMergeOnline(requestObj: model.ExecuteMailMergeOnlineRequest): Promise<model.WordsIncomingMessage<Buffer>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling executeMailMergeOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/MailMerge";
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

        requestOptions.formData = formParams;        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "Buffer");
        const result: model.WordsIncomingMessage<Buffer> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Gets the list of fonts, available for document processing.
     * @param requestObj contains request parameters
     */
    public async getAvailableFonts(requestObj: model.GetAvailableFontsRequest): Promise<model.WordsIncomingMessage<model.AvailableFontsResponse>> {
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
        const body =  ObjectSerializer.deserialize(response.body, "AvailableFontsResponse");
        const result: model.WordsIncomingMessage<model.AvailableFontsResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads document bookmark data by its name.
     * @param requestObj contains request parameters
     */
    public async getBookmarkByName(requestObj: model.GetBookmarkByNameRequest): Promise<model.WordsIncomingMessage<model.BookmarkResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getBookmarkByName.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/bookmarks/{bookmarkName}"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "bookmarkName" + "}", (requestObj.bookmarkName !== null) ? "/" + String(requestObj.bookmarkName) : "");
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
        const result: model.WordsIncomingMessage<model.BookmarkResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads document bookmarks common info.
     * @param requestObj contains request parameters
     */
    public async getBookmarks(requestObj: model.GetBookmarksRequest): Promise<model.WordsIncomingMessage<model.BookmarksResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getBookmarks.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/bookmarks"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "");
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
        const result: model.WordsIncomingMessage<model.BookmarksResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Returns a border. 'nodePath' should refer to paragraph, cell or row.
     * @param requestObj contains request parameters
     */
    public async getBorder(requestObj: model.GetBorderRequest): Promise<model.WordsIncomingMessage<model.BorderResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getBorder.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/borders/{borderType}"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null) ? "/" + String(requestObj.nodePath) : "")
            .replace("/{" + "borderType" + "}", (requestObj.borderType !== null) ? "/" + String(requestObj.borderType) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling getBorder.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling getBorder.');
        }

        // verify required parameter 'requestObj.nodePath' is not undefined
        if (requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was undefined when calling getBorder.');
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
        const result: model.WordsIncomingMessage<model.BorderResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Returns a collection of borders. 'nodePath' should refer to paragraph, cell or row.
     * @param requestObj contains request parameters
     */
    public async getBorders(requestObj: model.GetBordersRequest): Promise<model.WordsIncomingMessage<model.BordersResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getBorders.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/borders"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null) ? "/" + String(requestObj.nodePath) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling getBorders.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling getBorders.');
        }

        // verify required parameter 'requestObj.nodePath' is not undefined
        if (requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was undefined when calling getBorders.');
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
        const result: model.WordsIncomingMessage<model.BordersResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Gets comment from document.
     * @param requestObj contains request parameters
     */
    public async getComment(requestObj: model.GetCommentRequest): Promise<model.WordsIncomingMessage<model.CommentResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getComment.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/comments/{commentIndex}"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "commentIndex" + "}", (requestObj.commentIndex !== null) ? "/" + String(requestObj.commentIndex) : "");
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
        const result: model.WordsIncomingMessage<model.CommentResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Gets comments from document.
     * @param requestObj contains request parameters
     */
    public async getComments(requestObj: model.GetCommentsRequest): Promise<model.WordsIncomingMessage<model.CommentsResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getComments.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/comments"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "");
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
        const result: model.WordsIncomingMessage<model.CommentsResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads document common info.
     * @param requestObj contains request parameters
     */
    public async getDocument(requestObj: model.GetDocumentRequest): Promise<model.WordsIncomingMessage<model.DocumentResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDocument.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{documentName}"
            .replace("/{" + "documentName" + "}", (requestObj.documentName !== null) ? "/" + String(requestObj.documentName) : "");
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
        const result: model.WordsIncomingMessage<model.DocumentResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads document drawing object common info by its index or convert to format specified.
     * @param requestObj contains request parameters
     */
    public async getDocumentDrawingObjectByIndex(requestObj: model.GetDocumentDrawingObjectByIndexRequest): Promise<model.WordsIncomingMessage<model.DrawingObjectResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDocumentDrawingObjectByIndex.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/drawingObjects/{index}"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null) ? "/" + String(requestObj.nodePath) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null) ? "/" + String(requestObj.index) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling getDocumentDrawingObjectByIndex.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling getDocumentDrawingObjectByIndex.');
        }

        // verify required parameter 'requestObj.nodePath' is not undefined
        if (requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was undefined when calling getDocumentDrawingObjectByIndex.');
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
        const result: model.WordsIncomingMessage<model.DrawingObjectResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads document drawing object common info by its index or convert to format specified.
     * @param requestObj contains request parameters
     */
    public async getDocumentDrawingObjectByIndexWithoutNodePath(requestObj: model.GetDocumentDrawingObjectByIndexWithoutNodePathRequest): Promise<model.WordsIncomingMessage<model.DrawingObjectResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDocumentDrawingObjectByIndexWithoutNodePath.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/drawingObjects/{index}"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null) ? "/" + String(requestObj.index) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling getDocumentDrawingObjectByIndexWithoutNodePath.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling getDocumentDrawingObjectByIndexWithoutNodePath.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling getDocumentDrawingObjectByIndexWithoutNodePath.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling getDocumentDrawingObjectByIndexWithoutNodePath.');
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
        const result: model.WordsIncomingMessage<model.DrawingObjectResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads drawing object image data.
     * @param requestObj contains request parameters
     */
    public async getDocumentDrawingObjectImageData(requestObj: model.GetDocumentDrawingObjectImageDataRequest): Promise<model.WordsIncomingMessage<Buffer>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDocumentDrawingObjectImageData.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/drawingObjects/{index}/imageData"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null) ? "/" + String(requestObj.nodePath) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null) ? "/" + String(requestObj.index) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling getDocumentDrawingObjectImageData.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling getDocumentDrawingObjectImageData.');
        }

        // verify required parameter 'requestObj.nodePath' is not undefined
        if (requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was undefined when calling getDocumentDrawingObjectImageData.');
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
        const result: model.WordsIncomingMessage<Buffer> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads drawing object image data.
     * @param requestObj contains request parameters
     */
    public async getDocumentDrawingObjectImageDataWithoutNodePath(requestObj: model.GetDocumentDrawingObjectImageDataWithoutNodePathRequest): Promise<model.WordsIncomingMessage<Buffer>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDocumentDrawingObjectImageDataWithoutNodePath.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/drawingObjects/{index}/imageData"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null) ? "/" + String(requestObj.index) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling getDocumentDrawingObjectImageDataWithoutNodePath.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling getDocumentDrawingObjectImageDataWithoutNodePath.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling getDocumentDrawingObjectImageDataWithoutNodePath.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling getDocumentDrawingObjectImageDataWithoutNodePath.');
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
        const result: model.WordsIncomingMessage<Buffer> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Gets drawing object OLE data.
     * @param requestObj contains request parameters
     */
    public async getDocumentDrawingObjectOleData(requestObj: model.GetDocumentDrawingObjectOleDataRequest): Promise<model.WordsIncomingMessage<Buffer>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDocumentDrawingObjectOleData.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/drawingObjects/{index}/oleData"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null) ? "/" + String(requestObj.nodePath) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null) ? "/" + String(requestObj.index) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling getDocumentDrawingObjectOleData.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling getDocumentDrawingObjectOleData.');
        }

        // verify required parameter 'requestObj.nodePath' is not undefined
        if (requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was undefined when calling getDocumentDrawingObjectOleData.');
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
        const result: model.WordsIncomingMessage<Buffer> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Gets drawing object OLE data.
     * @param requestObj contains request parameters
     */
    public async getDocumentDrawingObjectOleDataWithoutNodePath(requestObj: model.GetDocumentDrawingObjectOleDataWithoutNodePathRequest): Promise<model.WordsIncomingMessage<Buffer>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDocumentDrawingObjectOleDataWithoutNodePath.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/drawingObjects/{index}/oleData"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null) ? "/" + String(requestObj.index) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling getDocumentDrawingObjectOleDataWithoutNodePath.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling getDocumentDrawingObjectOleDataWithoutNodePath.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling getDocumentDrawingObjectOleDataWithoutNodePath.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling getDocumentDrawingObjectOleDataWithoutNodePath.');
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
        const result: model.WordsIncomingMessage<Buffer> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads document drawing objects common info.
     * @param requestObj contains request parameters
     */
    public async getDocumentDrawingObjects(requestObj: model.GetDocumentDrawingObjectsRequest): Promise<model.WordsIncomingMessage<model.DrawingObjectsResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDocumentDrawingObjects.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/drawingObjects"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null) ? "/" + String(requestObj.nodePath) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling getDocumentDrawingObjects.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling getDocumentDrawingObjects.');
        }

        // verify required parameter 'requestObj.nodePath' is not undefined
        if (requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was undefined when calling getDocumentDrawingObjects.');
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
        const result: model.WordsIncomingMessage<model.DrawingObjectsResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads document drawing objects common info.
     * @param requestObj contains request parameters
     */
    public async getDocumentDrawingObjectsWithoutNodePath(requestObj: model.GetDocumentDrawingObjectsWithoutNodePathRequest): Promise<model.WordsIncomingMessage<model.DrawingObjectsResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDocumentDrawingObjectsWithoutNodePath.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/drawingObjects"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling getDocumentDrawingObjectsWithoutNodePath.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling getDocumentDrawingObjectsWithoutNodePath.');
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
        const result: model.WordsIncomingMessage<model.DrawingObjectsResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads document field names.
     * @param requestObj contains request parameters
     */
    public async getDocumentFieldNames(requestObj: model.GetDocumentFieldNamesRequest): Promise<model.WordsIncomingMessage<model.FieldNamesResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDocumentFieldNames.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/mailMerge/FieldNames"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "");
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
        const result: model.WordsIncomingMessage<model.FieldNamesResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads document field names.
     * @param requestObj contains request parameters
     */
    public async getDocumentFieldNamesOnline(requestObj: model.GetDocumentFieldNamesOnlineRequest): Promise<model.WordsIncomingMessage<model.FieldNamesResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDocumentFieldNamesOnline.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/mailMerge/FieldNames";
        const queryParameters: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.template' is not undefined
        if (requestObj.template === undefined) {
            throw new Error('Required parameter "requestObj.template" was undefined when calling getDocumentFieldNamesOnline.');
        }

        // verify required parameter 'requestObj.template' is not null
        if (requestObj.template === null) {
            throw new Error('Required parameter "requestObj.template" was null when calling getDocumentFieldNamesOnline.');
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
        const body =  ObjectSerializer.deserialize(response.body, "FieldNamesResponse");
        const result: model.WordsIncomingMessage<model.FieldNamesResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads document hyperlink by its index.
     * @param requestObj contains request parameters
     */
    public async getDocumentHyperlinkByIndex(requestObj: model.GetDocumentHyperlinkByIndexRequest): Promise<model.WordsIncomingMessage<model.HyperlinkResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDocumentHyperlinkByIndex.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/hyperlinks/{hyperlinkIndex}"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "hyperlinkIndex" + "}", (requestObj.hyperlinkIndex !== null) ? "/" + String(requestObj.hyperlinkIndex) : "");
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
        const result: model.WordsIncomingMessage<model.HyperlinkResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads document hyperlinks common info.
     * @param requestObj contains request parameters
     */
    public async getDocumentHyperlinks(requestObj: model.GetDocumentHyperlinksRequest): Promise<model.WordsIncomingMessage<model.HyperlinksResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDocumentHyperlinks.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/hyperlinks"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "");
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
        const result: model.WordsIncomingMessage<model.HyperlinksResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads document properties info.
     * @param requestObj contains request parameters
     */
    public async getDocumentProperties(requestObj: model.GetDocumentPropertiesRequest): Promise<model.WordsIncomingMessage<model.DocumentPropertiesResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDocumentProperties.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/documentProperties"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "");
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
        const result: model.WordsIncomingMessage<model.DocumentPropertiesResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads document property info by the property name.
     * @param requestObj contains request parameters
     */
    public async getDocumentProperty(requestObj: model.GetDocumentPropertyRequest): Promise<model.WordsIncomingMessage<model.DocumentPropertyResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDocumentProperty.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/documentProperties/{propertyName}"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "propertyName" + "}", (requestObj.propertyName !== null) ? "/" + String(requestObj.propertyName) : "");
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
        const result: model.WordsIncomingMessage<model.DocumentPropertyResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads document protection common info.
     * @param requestObj contains request parameters
     */
    public async getDocumentProtection(requestObj: model.GetDocumentProtectionRequest): Promise<model.WordsIncomingMessage<model.ProtectionDataResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDocumentProtection.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/protection"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "");
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
        const result: model.WordsIncomingMessage<model.ProtectionDataResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads document statistics.
     * @param requestObj contains request parameters
     */
    public async getDocumentStatistics(requestObj: model.GetDocumentStatisticsRequest): Promise<model.WordsIncomingMessage<model.StatDataResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDocumentStatistics.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/statistics"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "");
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
        const result: model.WordsIncomingMessage<model.StatDataResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Exports the document into the specified format.
     * @param requestObj contains request parameters
     */
    public async getDocumentWithFormat(requestObj: model.GetDocumentWithFormatRequest): Promise<model.WordsIncomingMessage<Buffer>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDocumentWithFormat.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "");
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
        const result: model.WordsIncomingMessage<Buffer> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Gets field from document.
     * @param requestObj contains request parameters
     */
    public async getField(requestObj: model.GetFieldRequest): Promise<model.WordsIncomingMessage<model.FieldResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getField.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/fields/{index}"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null) ? "/" + String(requestObj.nodePath) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null) ? "/" + String(requestObj.index) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling getField.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling getField.');
        }

        // verify required parameter 'requestObj.nodePath' is not undefined
        if (requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was undefined when calling getField.');
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
        const result: model.WordsIncomingMessage<model.FieldResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Gets field from document.
     * @param requestObj contains request parameters
     */
    public async getFieldWithoutNodePath(requestObj: model.GetFieldWithoutNodePathRequest): Promise<model.WordsIncomingMessage<model.FieldResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getFieldWithoutNodePath.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/fields/{index}"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null) ? "/" + String(requestObj.index) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling getFieldWithoutNodePath.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling getFieldWithoutNodePath.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling getFieldWithoutNodePath.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling getFieldWithoutNodePath.');
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
        const result: model.WordsIncomingMessage<model.FieldResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Get fields from document.
     * @param requestObj contains request parameters
     */
    public async getFields(requestObj: model.GetFieldsRequest): Promise<model.WordsIncomingMessage<model.FieldsResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getFields.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/fields"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null) ? "/" + String(requestObj.nodePath) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling getFields.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling getFields.');
        }

        // verify required parameter 'requestObj.nodePath' is not undefined
        if (requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was undefined when calling getFields.');
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
        const result: model.WordsIncomingMessage<model.FieldsResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Get fields from document.
     * @param requestObj contains request parameters
     */
    public async getFieldsWithoutNodePath(requestObj: model.GetFieldsWithoutNodePathRequest): Promise<model.WordsIncomingMessage<model.FieldsResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getFieldsWithoutNodePath.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/fields"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling getFieldsWithoutNodePath.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling getFieldsWithoutNodePath.');
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
        const result: model.WordsIncomingMessage<model.FieldsResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Get all files and folders within a folder
     * @param requestObj contains request parameters
     */
    public async getFilesList(requestObj: model.GetFilesListRequest): Promise<model.WordsIncomingMessage<model.FilesList>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getFilesList.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/storage/folder/{path}"
            .replace("/{" + "path" + "}", (requestObj.path !== null) ? "/" + String(requestObj.path) : "");
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
        const result: model.WordsIncomingMessage<model.FilesList> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads footnote by index.
     * @param requestObj contains request parameters
     */
    public async getFootnote(requestObj: model.GetFootnoteRequest): Promise<model.WordsIncomingMessage<model.FootnoteResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getFootnote.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/footnotes/{index}"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null) ? "/" + String(requestObj.nodePath) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null) ? "/" + String(requestObj.index) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling getFootnote.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling getFootnote.');
        }

        // verify required parameter 'requestObj.nodePath' is not undefined
        if (requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was undefined when calling getFootnote.');
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
        const result: model.WordsIncomingMessage<model.FootnoteResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads footnote by index.
     * @param requestObj contains request parameters
     */
    public async getFootnoteWithoutNodePath(requestObj: model.GetFootnoteWithoutNodePathRequest): Promise<model.WordsIncomingMessage<model.FootnoteResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getFootnoteWithoutNodePath.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/footnotes/{index}"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null) ? "/" + String(requestObj.index) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling getFootnoteWithoutNodePath.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling getFootnoteWithoutNodePath.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling getFootnoteWithoutNodePath.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling getFootnoteWithoutNodePath.');
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
        const result: model.WordsIncomingMessage<model.FootnoteResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Gets footnotes from document.
     * @param requestObj contains request parameters
     */
    public async getFootnotes(requestObj: model.GetFootnotesRequest): Promise<model.WordsIncomingMessage<model.FootnotesResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getFootnotes.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/footnotes"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null) ? "/" + String(requestObj.nodePath) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling getFootnotes.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling getFootnotes.');
        }

        // verify required parameter 'requestObj.nodePath' is not undefined
        if (requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was undefined when calling getFootnotes.');
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
        const result: model.WordsIncomingMessage<model.FootnotesResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Gets footnotes from document.
     * @param requestObj contains request parameters
     */
    public async getFootnotesWithoutNodePath(requestObj: model.GetFootnotesWithoutNodePathRequest): Promise<model.WordsIncomingMessage<model.FootnotesResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getFootnotesWithoutNodePath.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/footnotes"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling getFootnotesWithoutNodePath.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling getFootnotesWithoutNodePath.');
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
        const result: model.WordsIncomingMessage<model.FootnotesResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Returns representation of an one of the form field.
     * @param requestObj contains request parameters
     */
    public async getFormField(requestObj: model.GetFormFieldRequest): Promise<model.WordsIncomingMessage<model.FormFieldResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getFormField.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/formfields/{index}"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null) ? "/" + String(requestObj.nodePath) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null) ? "/" + String(requestObj.index) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling getFormField.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling getFormField.');
        }

        // verify required parameter 'requestObj.nodePath' is not undefined
        if (requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was undefined when calling getFormField.');
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
        const result: model.WordsIncomingMessage<model.FormFieldResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Returns representation of an one of the form field.
     * @param requestObj contains request parameters
     */
    public async getFormFieldWithoutNodePath(requestObj: model.GetFormFieldWithoutNodePathRequest): Promise<model.WordsIncomingMessage<model.FormFieldResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getFormFieldWithoutNodePath.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/formfields/{index}"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null) ? "/" + String(requestObj.index) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling getFormFieldWithoutNodePath.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling getFormFieldWithoutNodePath.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling getFormFieldWithoutNodePath.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling getFormFieldWithoutNodePath.');
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
        const result: model.WordsIncomingMessage<model.FormFieldResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Gets form fields from document.
     * @param requestObj contains request parameters
     */
    public async getFormFields(requestObj: model.GetFormFieldsRequest): Promise<model.WordsIncomingMessage<model.FormFieldsResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getFormFields.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/formfields"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null) ? "/" + String(requestObj.nodePath) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling getFormFields.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling getFormFields.');
        }

        // verify required parameter 'requestObj.nodePath' is not undefined
        if (requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was undefined when calling getFormFields.');
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
        const result: model.WordsIncomingMessage<model.FormFieldsResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Gets form fields from document.
     * @param requestObj contains request parameters
     */
    public async getFormFieldsWithoutNodePath(requestObj: model.GetFormFieldsWithoutNodePathRequest): Promise<model.WordsIncomingMessage<model.FormFieldsResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getFormFieldsWithoutNodePath.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/formfields"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling getFormFieldsWithoutNodePath.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling getFormFieldsWithoutNodePath.');
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
        const result: model.WordsIncomingMessage<model.FormFieldsResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Returns a header/footer from the document by index.
     * @param requestObj contains request parameters
     */
    public async getHeaderFooter(requestObj: model.GetHeaderFooterRequest): Promise<model.WordsIncomingMessage<model.HeaderFooterResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getHeaderFooter.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/headersfooters/{headerFooterIndex}"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "headerFooterIndex" + "}", (requestObj.headerFooterIndex !== null) ? "/" + String(requestObj.headerFooterIndex) : "");
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
        const result: model.WordsIncomingMessage<model.HeaderFooterResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Returns a header/footer from the document section.
     * @param requestObj contains request parameters
     */
    public async getHeaderFooterOfSection(requestObj: model.GetHeaderFooterOfSectionRequest): Promise<model.WordsIncomingMessage<model.HeaderFooterResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getHeaderFooterOfSection.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/sections/{sectionIndex}/headersfooters/{headerFooterIndex}"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "headerFooterIndex" + "}", (requestObj.headerFooterIndex !== null) ? "/" + String(requestObj.headerFooterIndex) : "")
            .replace("/{" + "sectionIndex" + "}", (requestObj.sectionIndex !== null) ? "/" + String(requestObj.sectionIndex) : "");
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
        const result: model.WordsIncomingMessage<model.HeaderFooterResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Returns a list of header/footers from the document.
     * @param requestObj contains request parameters
     */
    public async getHeaderFooters(requestObj: model.GetHeaderFootersRequest): Promise<model.WordsIncomingMessage<model.HeaderFootersResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getHeaderFooters.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{sectionPath}/headersfooters"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "sectionPath" + "}", (requestObj.sectionPath !== null) ? "/" + String(requestObj.sectionPath) : "");
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
        const result: model.WordsIncomingMessage<model.HeaderFootersResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads OfficeMath object by index.
     * @param requestObj contains request parameters
     */
    public async getOfficeMathObject(requestObj: model.GetOfficeMathObjectRequest): Promise<model.WordsIncomingMessage<model.OfficeMathObjectResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getOfficeMathObject.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/OfficeMathObjects/{index}"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null) ? "/" + String(requestObj.nodePath) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null) ? "/" + String(requestObj.index) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling getOfficeMathObject.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling getOfficeMathObject.');
        }

        // verify required parameter 'requestObj.nodePath' is not undefined
        if (requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was undefined when calling getOfficeMathObject.');
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
        const result: model.WordsIncomingMessage<model.OfficeMathObjectResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads OfficeMath object by index.
     * @param requestObj contains request parameters
     */
    public async getOfficeMathObjectWithoutNodePath(requestObj: model.GetOfficeMathObjectWithoutNodePathRequest): Promise<model.WordsIncomingMessage<model.OfficeMathObjectResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getOfficeMathObjectWithoutNodePath.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/OfficeMathObjects/{index}"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null) ? "/" + String(requestObj.index) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling getOfficeMathObjectWithoutNodePath.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling getOfficeMathObjectWithoutNodePath.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling getOfficeMathObjectWithoutNodePath.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling getOfficeMathObjectWithoutNodePath.');
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
        const result: model.WordsIncomingMessage<model.OfficeMathObjectResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Gets OfficeMath objects from document.
     * @param requestObj contains request parameters
     */
    public async getOfficeMathObjects(requestObj: model.GetOfficeMathObjectsRequest): Promise<model.WordsIncomingMessage<model.OfficeMathObjectsResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getOfficeMathObjects.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/OfficeMathObjects"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null) ? "/" + String(requestObj.nodePath) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling getOfficeMathObjects.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling getOfficeMathObjects.');
        }

        // verify required parameter 'requestObj.nodePath' is not undefined
        if (requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was undefined when calling getOfficeMathObjects.');
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
        const result: model.WordsIncomingMessage<model.OfficeMathObjectsResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Gets OfficeMath objects from document.
     * @param requestObj contains request parameters
     */
    public async getOfficeMathObjectsWithoutNodePath(requestObj: model.GetOfficeMathObjectsWithoutNodePathRequest): Promise<model.WordsIncomingMessage<model.OfficeMathObjectsResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getOfficeMathObjectsWithoutNodePath.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/OfficeMathObjects"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling getOfficeMathObjectsWithoutNodePath.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling getOfficeMathObjectsWithoutNodePath.');
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
        const result: model.WordsIncomingMessage<model.OfficeMathObjectsResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * This resource represents one of the paragraphs contained in the document.
     * @param requestObj contains request parameters
     */
    public async getParagraph(requestObj: model.GetParagraphRequest): Promise<model.WordsIncomingMessage<model.ParagraphResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getParagraph.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/paragraphs/{index}"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null) ? "/" + String(requestObj.nodePath) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null) ? "/" + String(requestObj.index) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling getParagraph.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling getParagraph.');
        }

        // verify required parameter 'requestObj.nodePath' is not undefined
        if (requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was undefined when calling getParagraph.');
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
        const result: model.WordsIncomingMessage<model.ParagraphResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Represents all the formatting for a paragraph.
     * @param requestObj contains request parameters
     */
    public async getParagraphFormat(requestObj: model.GetParagraphFormatRequest): Promise<model.WordsIncomingMessage<model.ParagraphFormatResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getParagraphFormat.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/paragraphs/{index}/format"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null) ? "/" + String(requestObj.nodePath) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null) ? "/" + String(requestObj.index) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling getParagraphFormat.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling getParagraphFormat.');
        }

        // verify required parameter 'requestObj.nodePath' is not undefined
        if (requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was undefined when calling getParagraphFormat.');
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
        const result: model.WordsIncomingMessage<model.ParagraphFormatResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Represents all the formatting for a paragraph.
     * @param requestObj contains request parameters
     */
    public async getParagraphFormatWithoutNodePath(requestObj: model.GetParagraphFormatWithoutNodePathRequest): Promise<model.WordsIncomingMessage<model.ParagraphFormatResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getParagraphFormatWithoutNodePath.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/paragraphs/{index}/format"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null) ? "/" + String(requestObj.index) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling getParagraphFormatWithoutNodePath.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling getParagraphFormatWithoutNodePath.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling getParagraphFormatWithoutNodePath.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling getParagraphFormatWithoutNodePath.');
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
        const result: model.WordsIncomingMessage<model.ParagraphFormatResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * This resource represents one of the paragraphs contained in the document.
     * @param requestObj contains request parameters
     */
    public async getParagraphWithoutNodePath(requestObj: model.GetParagraphWithoutNodePathRequest): Promise<model.WordsIncomingMessage<model.ParagraphResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getParagraphWithoutNodePath.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/paragraphs/{index}"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null) ? "/" + String(requestObj.index) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling getParagraphWithoutNodePath.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling getParagraphWithoutNodePath.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling getParagraphWithoutNodePath.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling getParagraphWithoutNodePath.');
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
        const result: model.WordsIncomingMessage<model.ParagraphResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Returns a list of paragraphs that are contained in the document.
     * @param requestObj contains request parameters
     */
    public async getParagraphs(requestObj: model.GetParagraphsRequest): Promise<model.WordsIncomingMessage<model.ParagraphLinkCollectionResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getParagraphs.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/paragraphs"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null) ? "/" + String(requestObj.nodePath) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling getParagraphs.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling getParagraphs.');
        }

        // verify required parameter 'requestObj.nodePath' is not undefined
        if (requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was undefined when calling getParagraphs.');
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
        const result: model.WordsIncomingMessage<model.ParagraphLinkCollectionResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Returns a list of paragraphs that are contained in the document.
     * @param requestObj contains request parameters
     */
    public async getParagraphsWithoutNodePath(requestObj: model.GetParagraphsWithoutNodePathRequest): Promise<model.WordsIncomingMessage<model.ParagraphLinkCollectionResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getParagraphsWithoutNodePath.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/paragraphs"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling getParagraphsWithoutNodePath.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling getParagraphsWithoutNodePath.');
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
        const result: model.WordsIncomingMessage<model.ParagraphLinkCollectionResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Gets the text from the range.
     * @param requestObj contains request parameters
     */
    public async getRangeText(requestObj: model.GetRangeTextRequest): Promise<model.WordsIncomingMessage<model.RangeTextResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getRangeText.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/range/{rangeStartIdentifier}/{rangeEndIdentifier}"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "rangeStartIdentifier" + "}", (requestObj.rangeStartIdentifier !== null) ? "/" + String(requestObj.rangeStartIdentifier) : "")
            .replace("/{" + "rangeEndIdentifier" + "}", (requestObj.rangeEndIdentifier !== null) ? "/" + String(requestObj.rangeEndIdentifier) : "");
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
        const result: model.WordsIncomingMessage<model.RangeTextResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * This resource represents run of text contained in the document.
     * @param requestObj contains request parameters
     */
    public async getRun(requestObj: model.GetRunRequest): Promise<model.WordsIncomingMessage<model.RunResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getRun.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{paragraphPath}/runs/{index}"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "paragraphPath" + "}", (requestObj.paragraphPath !== null) ? "/" + String(requestObj.paragraphPath) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null) ? "/" + String(requestObj.index) : "");
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
        const result: model.WordsIncomingMessage<model.RunResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * This resource represents font of run.
     * @param requestObj contains request parameters
     */
    public async getRunFont(requestObj: model.GetRunFontRequest): Promise<model.WordsIncomingMessage<model.FontResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getRunFont.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{paragraphPath}/runs/{index}/font"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "paragraphPath" + "}", (requestObj.paragraphPath !== null) ? "/" + String(requestObj.paragraphPath) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null) ? "/" + String(requestObj.index) : "");
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
        const result: model.WordsIncomingMessage<model.FontResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * This resource represents collection of runs in the paragraph.
     * @param requestObj contains request parameters
     */
    public async getRuns(requestObj: model.GetRunsRequest): Promise<model.WordsIncomingMessage<model.RunsResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getRuns.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{paragraphPath}/runs"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "paragraphPath" + "}", (requestObj.paragraphPath !== null) ? "/" + String(requestObj.paragraphPath) : "");
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
        const result: model.WordsIncomingMessage<model.RunsResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Gets document section by index.
     * @param requestObj contains request parameters
     */
    public async getSection(requestObj: model.GetSectionRequest): Promise<model.WordsIncomingMessage<model.SectionResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getSection.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/sections/{sectionIndex}"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "sectionIndex" + "}", (requestObj.sectionIndex !== null) ? "/" + String(requestObj.sectionIndex) : "");
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
        const result: model.WordsIncomingMessage<model.SectionResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Gets page setup of section.
     * @param requestObj contains request parameters
     */
    public async getSectionPageSetup(requestObj: model.GetSectionPageSetupRequest): Promise<model.WordsIncomingMessage<model.SectionPageSetupResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getSectionPageSetup.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/sections/{sectionIndex}/pageSetup"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "sectionIndex" + "}", (requestObj.sectionIndex !== null) ? "/" + String(requestObj.sectionIndex) : "");
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
        const result: model.WordsIncomingMessage<model.SectionPageSetupResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Returns a list of sections that are contained in the document.
     * @param requestObj contains request parameters
     */
    public async getSections(requestObj: model.GetSectionsRequest): Promise<model.WordsIncomingMessage<model.SectionLinkCollectionResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getSections.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/sections"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "");
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
        const result: model.WordsIncomingMessage<model.SectionLinkCollectionResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Returns a table.
     * @param requestObj contains request parameters
     */
    public async getTable(requestObj: model.GetTableRequest): Promise<model.WordsIncomingMessage<model.TableResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getTable.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/tables/{index}"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null) ? "/" + String(requestObj.nodePath) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null) ? "/" + String(requestObj.index) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling getTable.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling getTable.');
        }

        // verify required parameter 'requestObj.nodePath' is not undefined
        if (requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was undefined when calling getTable.');
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
        const result: model.WordsIncomingMessage<model.TableResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Returns a table cell.
     * @param requestObj contains request parameters
     */
    public async getTableCell(requestObj: model.GetTableCellRequest): Promise<model.WordsIncomingMessage<model.TableCellResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getTableCell.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{tableRowPath}/cells/{index}"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "tableRowPath" + "}", (requestObj.tableRowPath !== null) ? "/" + String(requestObj.tableRowPath) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null) ? "/" + String(requestObj.index) : "");
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
        const result: model.WordsIncomingMessage<model.TableCellResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Returns a table cell format.
     * @param requestObj contains request parameters
     */
    public async getTableCellFormat(requestObj: model.GetTableCellFormatRequest): Promise<model.WordsIncomingMessage<model.TableCellFormatResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getTableCellFormat.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{tableRowPath}/cells/{index}/cellformat"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "tableRowPath" + "}", (requestObj.tableRowPath !== null) ? "/" + String(requestObj.tableRowPath) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null) ? "/" + String(requestObj.index) : "");
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
        const result: model.WordsIncomingMessage<model.TableCellFormatResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Returns a table properties.
     * @param requestObj contains request parameters
     */
    public async getTableProperties(requestObj: model.GetTablePropertiesRequest): Promise<model.WordsIncomingMessage<model.TablePropertiesResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getTableProperties.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/tables/{index}/properties"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null) ? "/" + String(requestObj.nodePath) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null) ? "/" + String(requestObj.index) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling getTableProperties.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling getTableProperties.');
        }

        // verify required parameter 'requestObj.nodePath' is not undefined
        if (requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was undefined when calling getTableProperties.');
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
        const result: model.WordsIncomingMessage<model.TablePropertiesResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Returns a table properties.
     * @param requestObj contains request parameters
     */
    public async getTablePropertiesWithoutNodePath(requestObj: model.GetTablePropertiesWithoutNodePathRequest): Promise<model.WordsIncomingMessage<model.TablePropertiesResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getTablePropertiesWithoutNodePath.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/tables/{index}/properties"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null) ? "/" + String(requestObj.index) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling getTablePropertiesWithoutNodePath.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling getTablePropertiesWithoutNodePath.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling getTablePropertiesWithoutNodePath.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling getTablePropertiesWithoutNodePath.');
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
        const result: model.WordsIncomingMessage<model.TablePropertiesResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Returns a table row.
     * @param requestObj contains request parameters
     */
    public async getTableRow(requestObj: model.GetTableRowRequest): Promise<model.WordsIncomingMessage<model.TableRowResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getTableRow.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{tablePath}/rows/{index}"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "tablePath" + "}", (requestObj.tablePath !== null) ? "/" + String(requestObj.tablePath) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null) ? "/" + String(requestObj.index) : "");
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
        const result: model.WordsIncomingMessage<model.TableRowResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Returns a table row format.
     * @param requestObj contains request parameters
     */
    public async getTableRowFormat(requestObj: model.GetTableRowFormatRequest): Promise<model.WordsIncomingMessage<model.TableRowFormatResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getTableRowFormat.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{tablePath}/rows/{index}/rowformat"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "tablePath" + "}", (requestObj.tablePath !== null) ? "/" + String(requestObj.tablePath) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null) ? "/" + String(requestObj.index) : "");
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
        const result: model.WordsIncomingMessage<model.TableRowFormatResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Returns a table.
     * @param requestObj contains request parameters
     */
    public async getTableWithoutNodePath(requestObj: model.GetTableWithoutNodePathRequest): Promise<model.WordsIncomingMessage<model.TableResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getTableWithoutNodePath.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/tables/{index}"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null) ? "/" + String(requestObj.index) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling getTableWithoutNodePath.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling getTableWithoutNodePath.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling getTableWithoutNodePath.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling getTableWithoutNodePath.');
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
        const result: model.WordsIncomingMessage<model.TableResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Returns a list of tables that are contained in the document.
     * @param requestObj contains request parameters
     */
    public async getTables(requestObj: model.GetTablesRequest): Promise<model.WordsIncomingMessage<model.TableLinkCollectionResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getTables.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/tables"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null) ? "/" + String(requestObj.nodePath) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling getTables.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling getTables.');
        }

        // verify required parameter 'requestObj.nodePath' is not undefined
        if (requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was undefined when calling getTables.');
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
        const result: model.WordsIncomingMessage<model.TableLinkCollectionResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Returns a list of tables that are contained in the document.
     * @param requestObj contains request parameters
     */
    public async getTablesWithoutNodePath(requestObj: model.GetTablesWithoutNodePathRequest): Promise<model.WordsIncomingMessage<model.TableLinkCollectionResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getTablesWithoutNodePath.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/tables"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling getTablesWithoutNodePath.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling getTablesWithoutNodePath.');
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
        const result: model.WordsIncomingMessage<model.TableLinkCollectionResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Adds comment to document, returns inserted comment data.
     * @param requestObj contains request parameters
     */
    public async insertComment(requestObj: model.InsertCommentRequest): Promise<model.WordsIncomingMessage<model.CommentResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling insertComment.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/comments"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "");
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
            body: ObjectSerializer.serialize(requestObj.comment, requestObj.comment.constructor.name === "Object" ? "importedComment.Comment" : requestObj.comment.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "CommentResponse");
        const result: model.WordsIncomingMessage<model.CommentResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Adds drawing object to document, returns added  drawing object's data.
     * @param requestObj contains request parameters
     */
    public async insertDrawingObject(requestObj: model.InsertDrawingObjectRequest): Promise<model.WordsIncomingMessage<model.DrawingObjectResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling insertDrawingObject.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/drawingObjects"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null) ? "/" + String(requestObj.nodePath) : "");
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

        // verify required parameter 'requestObj.nodePath' is not undefined
        if (requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was undefined when calling insertDrawingObject.');
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
        const body =  ObjectSerializer.deserialize(response.body, "DrawingObjectResponse");
        const result: model.WordsIncomingMessage<model.DrawingObjectResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Adds drawing object to document, returns added  drawing object's data.
     * @param requestObj contains request parameters
     */
    public async insertDrawingObjectWithoutNodePath(requestObj: model.InsertDrawingObjectWithoutNodePathRequest): Promise<model.WordsIncomingMessage<model.DrawingObjectResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling insertDrawingObjectWithoutNodePath.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/drawingObjects"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "");
        const queryParameters: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling insertDrawingObjectWithoutNodePath.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling insertDrawingObjectWithoutNodePath.');
        }

        // verify required parameter 'requestObj.drawingObject' is not undefined
        if (requestObj.drawingObject === undefined) {
            throw new Error('Required parameter "requestObj.drawingObject" was undefined when calling insertDrawingObjectWithoutNodePath.');
        }

        // verify required parameter 'requestObj.drawingObject' is not null
        if (requestObj.drawingObject === null) {
            throw new Error('Required parameter "requestObj.drawingObject" was null when calling insertDrawingObjectWithoutNodePath.');
        }

        // verify required parameter 'requestObj.imageFile' is not undefined
        if (requestObj.imageFile === undefined) {
            throw new Error('Required parameter "requestObj.imageFile" was undefined when calling insertDrawingObjectWithoutNodePath.');
        }

        // verify required parameter 'requestObj.imageFile' is not null
        if (requestObj.imageFile === null) {
            throw new Error('Required parameter "requestObj.imageFile" was null when calling insertDrawingObjectWithoutNodePath.');
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
        const body =  ObjectSerializer.deserialize(response.body, "DrawingObjectResponse");
        const result: model.WordsIncomingMessage<model.DrawingObjectResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Adds field to document, returns inserted field's data.
     * @param requestObj contains request parameters
     */
    public async insertField(requestObj: model.InsertFieldRequest): Promise<model.WordsIncomingMessage<model.FieldResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling insertField.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/fields"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null) ? "/" + String(requestObj.nodePath) : "");
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

        // verify required parameter 'requestObj.nodePath' is not undefined
        if (requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was undefined when calling insertField.');
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
            body: ObjectSerializer.serialize(requestObj.field, requestObj.field.constructor.name === "Object" ? "importedField.Field" : requestObj.field.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "FieldResponse");
        const result: model.WordsIncomingMessage<model.FieldResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Adds field to document, returns inserted field's data.
     * @param requestObj contains request parameters
     */
    public async insertFieldWithoutNodePath(requestObj: model.InsertFieldWithoutNodePathRequest): Promise<model.WordsIncomingMessage<model.FieldResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling insertFieldWithoutNodePath.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/fields"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling insertFieldWithoutNodePath.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling insertFieldWithoutNodePath.');
        }

        // verify required parameter 'requestObj.field' is not undefined
        if (requestObj.field === undefined) {
            throw new Error('Required parameter "requestObj.field" was undefined when calling insertFieldWithoutNodePath.');
        }

        // verify required parameter 'requestObj.field' is not null
        if (requestObj.field === null) {
            throw new Error('Required parameter "requestObj.field" was null when calling insertFieldWithoutNodePath.');
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
            body: ObjectSerializer.serialize(requestObj.field, requestObj.field.constructor.name === "Object" ? "importedField.Field" : requestObj.field.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "FieldResponse");
        const result: model.WordsIncomingMessage<model.FieldResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Adds footnote to document, returns added footnote's data.
     * @param requestObj contains request parameters
     */
    public async insertFootnote(requestObj: model.InsertFootnoteRequest): Promise<model.WordsIncomingMessage<model.FootnoteResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling insertFootnote.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/footnotes"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null) ? "/" + String(requestObj.nodePath) : "");
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

        // verify required parameter 'requestObj.nodePath' is not undefined
        if (requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was undefined when calling insertFootnote.');
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
            body: ObjectSerializer.serialize(requestObj.footnoteDto, requestObj.footnoteDto.constructor.name === "Object" ? "importedFootnote.Footnote" : requestObj.footnoteDto.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "FootnoteResponse");
        const result: model.WordsIncomingMessage<model.FootnoteResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Adds footnote to document, returns added footnote's data.
     * @param requestObj contains request parameters
     */
    public async insertFootnoteWithoutNodePath(requestObj: model.InsertFootnoteWithoutNodePathRequest): Promise<model.WordsIncomingMessage<model.FootnoteResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling insertFootnoteWithoutNodePath.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/footnotes"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling insertFootnoteWithoutNodePath.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling insertFootnoteWithoutNodePath.');
        }

        // verify required parameter 'requestObj.footnoteDto' is not undefined
        if (requestObj.footnoteDto === undefined) {
            throw new Error('Required parameter "requestObj.footnoteDto" was undefined when calling insertFootnoteWithoutNodePath.');
        }

        // verify required parameter 'requestObj.footnoteDto' is not null
        if (requestObj.footnoteDto === null) {
            throw new Error('Required parameter "requestObj.footnoteDto" was null when calling insertFootnoteWithoutNodePath.');
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
            body: ObjectSerializer.serialize(requestObj.footnoteDto, requestObj.footnoteDto.constructor.name === "Object" ? "importedFootnote.Footnote" : requestObj.footnoteDto.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "FootnoteResponse");
        const result: model.WordsIncomingMessage<model.FootnoteResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Adds form field to paragraph, returns added form field's data.
     * @param requestObj contains request parameters
     */
    public async insertFormField(requestObj: model.InsertFormFieldRequest): Promise<model.WordsIncomingMessage<model.FormFieldResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling insertFormField.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/formfields"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null) ? "/" + String(requestObj.nodePath) : "");
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

        // verify required parameter 'requestObj.nodePath' is not undefined
        if (requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was undefined when calling insertFormField.');
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
        const result: model.WordsIncomingMessage<model.FormFieldResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Adds form field to paragraph, returns added form field's data.
     * @param requestObj contains request parameters
     */
    public async insertFormFieldWithoutNodePath(requestObj: model.InsertFormFieldWithoutNodePathRequest): Promise<model.WordsIncomingMessage<model.FormFieldResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling insertFormFieldWithoutNodePath.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/formfields"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling insertFormFieldWithoutNodePath.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling insertFormFieldWithoutNodePath.');
        }

        // verify required parameter 'requestObj.formField' is not undefined
        if (requestObj.formField === undefined) {
            throw new Error('Required parameter "requestObj.formField" was undefined when calling insertFormFieldWithoutNodePath.');
        }

        // verify required parameter 'requestObj.formField' is not null
        if (requestObj.formField === null) {
            throw new Error('Required parameter "requestObj.formField" was null when calling insertFormFieldWithoutNodePath.');
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
        const result: model.WordsIncomingMessage<model.FormFieldResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Inserts to document header or footer.
     * @param requestObj contains request parameters
     */
    public async insertHeaderFooter(requestObj: model.InsertHeaderFooterRequest): Promise<model.WordsIncomingMessage<model.HeaderFooterResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling insertHeaderFooter.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{sectionPath}/headersfooters"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "sectionPath" + "}", (requestObj.sectionPath !== null) ? "/" + String(requestObj.sectionPath) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling insertHeaderFooter.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling insertHeaderFooter.');
        }

        // verify required parameter 'requestObj.headerFooterType' is not undefined
        if (requestObj.headerFooterType === undefined) {
            throw new Error('Required parameter "requestObj.headerFooterType" was undefined when calling insertHeaderFooter.');
        }

        // verify required parameter 'requestObj.headerFooterType' is not null
        if (requestObj.headerFooterType === null) {
            throw new Error('Required parameter "requestObj.headerFooterType" was null when calling insertHeaderFooter.');
        }

        // verify required parameter 'requestObj.sectionPath' is not undefined
        if (requestObj.sectionPath === undefined) {
            throw new Error('Required parameter "requestObj.sectionPath" was undefined when calling insertHeaderFooter.');
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
        const result: model.WordsIncomingMessage<model.HeaderFooterResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Inserts document page numbers.
     * @param requestObj contains request parameters
     */
    public async insertPageNumbers(requestObj: model.InsertPageNumbersRequest): Promise<model.WordsIncomingMessage<model.DocumentResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling insertPageNumbers.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/PageNumbers"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "");
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
        const result: model.WordsIncomingMessage<model.DocumentResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Adds paragraph to document, returns added paragraph's data.
     * @param requestObj contains request parameters
     */
    public async insertParagraph(requestObj: model.InsertParagraphRequest): Promise<model.WordsIncomingMessage<model.ParagraphResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling insertParagraph.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/paragraphs"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null) ? "/" + String(requestObj.nodePath) : "");
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

        // verify required parameter 'requestObj.nodePath' is not undefined
        if (requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was undefined when calling insertParagraph.');
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
        const result: model.WordsIncomingMessage<model.ParagraphResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Adds run to document, returns added paragraph's data.
     * @param requestObj contains request parameters
     */
    public async insertRun(requestObj: model.InsertRunRequest): Promise<model.WordsIncomingMessage<model.RunResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling insertRun.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{paragraphPath}/runs"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "paragraphPath" + "}", (requestObj.paragraphPath !== null) ? "/" + String(requestObj.paragraphPath) : "");
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
            body: ObjectSerializer.serialize(requestObj.run, requestObj.run.constructor.name === "Object" ? "importedRun.Run" : requestObj.run.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "RunResponse");
        const result: model.WordsIncomingMessage<model.RunResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Adds table to document, returns added table's data.             
     * @param requestObj contains request parameters
     */
    public async insertTable(requestObj: model.InsertTableRequest): Promise<model.WordsIncomingMessage<model.TableResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling insertTable.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/tables"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null) ? "/" + String(requestObj.nodePath) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling insertTable.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling insertTable.');
        }

        // verify required parameter 'requestObj.nodePath' is not undefined
        if (requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was undefined when calling insertTable.');
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
        const result: model.WordsIncomingMessage<model.TableResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Adds table cell to table, returns added cell's data.             
     * @param requestObj contains request parameters
     */
    public async insertTableCell(requestObj: model.InsertTableCellRequest): Promise<model.WordsIncomingMessage<model.TableCellResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling insertTableCell.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{tableRowPath}/cells"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "tableRowPath" + "}", (requestObj.tableRowPath !== null) ? "/" + String(requestObj.tableRowPath) : "");
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
        const result: model.WordsIncomingMessage<model.TableCellResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Adds table row to table, returns added row's data.             
     * @param requestObj contains request parameters
     */
    public async insertTableRow(requestObj: model.InsertTableRowRequest): Promise<model.WordsIncomingMessage<model.TableRowResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling insertTableRow.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{tablePath}/rows"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "tablePath" + "}", (requestObj.tablePath !== null) ? "/" + String(requestObj.tablePath) : "");
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
        const result: model.WordsIncomingMessage<model.TableRowResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Adds table to document, returns added table's data.             
     * @param requestObj contains request parameters
     */
    public async insertTableWithoutNodePath(requestObj: model.InsertTableWithoutNodePathRequest): Promise<model.WordsIncomingMessage<model.TableResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling insertTableWithoutNodePath.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/tables"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling insertTableWithoutNodePath.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling insertTableWithoutNodePath.');
        }

        // verify required parameter 'requestObj.table' is not undefined
        if (requestObj.table === undefined) {
            throw new Error('Required parameter "requestObj.table" was undefined when calling insertTableWithoutNodePath.');
        }

        // verify required parameter 'requestObj.table' is not null
        if (requestObj.table === null) {
            throw new Error('Required parameter "requestObj.table" was null when calling insertTableWithoutNodePath.');
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
        const result: model.WordsIncomingMessage<model.TableResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Inserts document watermark image.
     * @param requestObj contains request parameters
     */
    public async insertWatermarkImage(requestObj: model.InsertWatermarkImageRequest): Promise<model.WordsIncomingMessage<model.DocumentResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling insertWatermarkImage.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/watermarks/images"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "");
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

        requestOptions.formData = formParams;        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "DocumentResponse");
        const result: model.WordsIncomingMessage<model.DocumentResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Inserts document watermark text.
     * @param requestObj contains request parameters
     */
    public async insertWatermarkText(requestObj: model.InsertWatermarkTextRequest): Promise<model.WordsIncomingMessage<model.DocumentResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling insertWatermarkText.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/watermarks/texts"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "");
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
        const result: model.WordsIncomingMessage<model.DocumentResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Loads new document from web into the file with any supported format of data.
     * @param requestObj contains request parameters
     */
    public async loadWebDocument(requestObj: model.LoadWebDocumentRequest): Promise<model.WordsIncomingMessage<model.SaveResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling loadWebDocument.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/loadWebDocument";
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
        const result: model.WordsIncomingMessage<model.SaveResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Move file
     * @param requestObj contains request parameters
     */
    public async moveFile(requestObj: model.MoveFileRequest): Promise<http.IncomingMessage> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling moveFile.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/storage/file/move/{srcPath}"
            .replace("/{" + "srcPath" + "}", (requestObj.srcPath !== null) ? "/" + String(requestObj.srcPath) : "");
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
     * Move folder
     * @param requestObj contains request parameters
     */
    public async moveFolder(requestObj: model.MoveFolderRequest): Promise<http.IncomingMessage> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling moveFolder.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/storage/folder/move/{srcPath}"
            .replace("/{" + "srcPath" + "}", (requestObj.srcPath !== null) ? "/" + String(requestObj.srcPath) : "");
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
     * Protects document.
     * @param requestObj contains request parameters
     */
    public async protectDocument(requestObj: model.ProtectDocumentRequest): Promise<model.WordsIncomingMessage<model.ProtectionDataResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling protectDocument.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/protection"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "");
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
        const result: model.WordsIncomingMessage<model.ProtectionDataResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Rejects all revisions in document.
     * @param requestObj contains request parameters
     */
    public async rejectAllRevisions(requestObj: model.RejectAllRevisionsRequest): Promise<model.WordsIncomingMessage<model.RevisionsModificationResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling rejectAllRevisions.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/revisions/rejectAll"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "");
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
        const result: model.WordsIncomingMessage<model.RevisionsModificationResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Removes the range from the document.
     * @param requestObj contains request parameters
     */
    public async removeRange(requestObj: model.RemoveRangeRequest): Promise<model.WordsIncomingMessage<model.DocumentResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling removeRange.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/range/{rangeStartIdentifier}/{rangeEndIdentifier}"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "rangeStartIdentifier" + "}", (requestObj.rangeStartIdentifier !== null) ? "/" + String(requestObj.rangeStartIdentifier) : "")
            .replace("/{" + "rangeEndIdentifier" + "}", (requestObj.rangeEndIdentifier !== null) ? "/" + String(requestObj.rangeEndIdentifier) : "");
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
        const result: model.WordsIncomingMessage<model.DocumentResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Renders drawing object to specified format.
     * @param requestObj contains request parameters
     */
    public async renderDrawingObject(requestObj: model.RenderDrawingObjectRequest): Promise<model.WordsIncomingMessage<Buffer>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling renderDrawingObject.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/drawingObjects/{index}/render"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null) ? "/" + String(requestObj.nodePath) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null) ? "/" + String(requestObj.index) : "");
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

        // verify required parameter 'requestObj.nodePath' is not undefined
        if (requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was undefined when calling renderDrawingObject.');
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
        const result: model.WordsIncomingMessage<Buffer> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Renders drawing object to specified format.
     * @param requestObj contains request parameters
     */
    public async renderDrawingObjectWithoutNodePath(requestObj: model.RenderDrawingObjectWithoutNodePathRequest): Promise<model.WordsIncomingMessage<Buffer>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling renderDrawingObjectWithoutNodePath.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/drawingObjects/{index}/render"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null) ? "/" + String(requestObj.index) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling renderDrawingObjectWithoutNodePath.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling renderDrawingObjectWithoutNodePath.');
        }

        // verify required parameter 'requestObj.format' is not undefined
        if (requestObj.format === undefined) {
            throw new Error('Required parameter "requestObj.format" was undefined when calling renderDrawingObjectWithoutNodePath.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling renderDrawingObjectWithoutNodePath.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling renderDrawingObjectWithoutNodePath.');
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
        const result: model.WordsIncomingMessage<Buffer> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Renders math object to specified format.
     * @param requestObj contains request parameters
     */
    public async renderMathObject(requestObj: model.RenderMathObjectRequest): Promise<model.WordsIncomingMessage<Buffer>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling renderMathObject.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/OfficeMathObjects/{index}/render"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null) ? "/" + String(requestObj.nodePath) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null) ? "/" + String(requestObj.index) : "");
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

        // verify required parameter 'requestObj.nodePath' is not undefined
        if (requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was undefined when calling renderMathObject.');
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
        const result: model.WordsIncomingMessage<Buffer> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Renders math object to specified format.
     * @param requestObj contains request parameters
     */
    public async renderMathObjectWithoutNodePath(requestObj: model.RenderMathObjectWithoutNodePathRequest): Promise<model.WordsIncomingMessage<Buffer>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling renderMathObjectWithoutNodePath.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/OfficeMathObjects/{index}/render"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null) ? "/" + String(requestObj.index) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling renderMathObjectWithoutNodePath.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling renderMathObjectWithoutNodePath.');
        }

        // verify required parameter 'requestObj.format' is not undefined
        if (requestObj.format === undefined) {
            throw new Error('Required parameter "requestObj.format" was undefined when calling renderMathObjectWithoutNodePath.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling renderMathObjectWithoutNodePath.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling renderMathObjectWithoutNodePath.');
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
        const result: model.WordsIncomingMessage<Buffer> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Renders page to specified format.
     * @param requestObj contains request parameters
     */
    public async renderPage(requestObj: model.RenderPageRequest): Promise<model.WordsIncomingMessage<Buffer>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling renderPage.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/pages/{pageIndex}/render"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "pageIndex" + "}", (requestObj.pageIndex !== null) ? "/" + String(requestObj.pageIndex) : "");
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
        const result: model.WordsIncomingMessage<Buffer> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Renders paragraph to specified format.
     * @param requestObj contains request parameters
     */
    public async renderParagraph(requestObj: model.RenderParagraphRequest): Promise<model.WordsIncomingMessage<Buffer>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling renderParagraph.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/paragraphs/{index}/render"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null) ? "/" + String(requestObj.nodePath) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null) ? "/" + String(requestObj.index) : "");
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

        // verify required parameter 'requestObj.nodePath' is not undefined
        if (requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was undefined when calling renderParagraph.');
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
        const result: model.WordsIncomingMessage<Buffer> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Renders paragraph to specified format.
     * @param requestObj contains request parameters
     */
    public async renderParagraphWithoutNodePath(requestObj: model.RenderParagraphWithoutNodePathRequest): Promise<model.WordsIncomingMessage<Buffer>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling renderParagraphWithoutNodePath.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/paragraphs/{index}/render"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null) ? "/" + String(requestObj.index) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling renderParagraphWithoutNodePath.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling renderParagraphWithoutNodePath.');
        }

        // verify required parameter 'requestObj.format' is not undefined
        if (requestObj.format === undefined) {
            throw new Error('Required parameter "requestObj.format" was undefined when calling renderParagraphWithoutNodePath.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling renderParagraphWithoutNodePath.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling renderParagraphWithoutNodePath.');
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
        const result: model.WordsIncomingMessage<Buffer> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Renders table to specified format.
     * @param requestObj contains request parameters
     */
    public async renderTable(requestObj: model.RenderTableRequest): Promise<model.WordsIncomingMessage<Buffer>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling renderTable.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/tables/{index}/render"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null) ? "/" + String(requestObj.nodePath) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null) ? "/" + String(requestObj.index) : "");
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

        // verify required parameter 'requestObj.nodePath' is not undefined
        if (requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was undefined when calling renderTable.');
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
        const result: model.WordsIncomingMessage<Buffer> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Renders table to specified format.
     * @param requestObj contains request parameters
     */
    public async renderTableWithoutNodePath(requestObj: model.RenderTableWithoutNodePathRequest): Promise<model.WordsIncomingMessage<Buffer>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling renderTableWithoutNodePath.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/tables/{index}/render"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null) ? "/" + String(requestObj.index) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling renderTableWithoutNodePath.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling renderTableWithoutNodePath.');
        }

        // verify required parameter 'requestObj.format' is not undefined
        if (requestObj.format === undefined) {
            throw new Error('Required parameter "requestObj.format" was undefined when calling renderTableWithoutNodePath.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling renderTableWithoutNodePath.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling renderTableWithoutNodePath.');
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
        const result: model.WordsIncomingMessage<Buffer> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Replaces document text.
     * @param requestObj contains request parameters
     */
    public async replaceText(requestObj: model.ReplaceTextRequest): Promise<model.WordsIncomingMessage<model.ReplaceTextResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling replaceText.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/replaceText"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "");
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
        const result: model.WordsIncomingMessage<model.ReplaceTextResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Replaces the content in the range.
     * @param requestObj contains request parameters
     */
    public async replaceWithText(requestObj: model.ReplaceWithTextRequest): Promise<model.WordsIncomingMessage<model.DocumentResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling replaceWithText.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/range/{rangeStartIdentifier}/{rangeEndIdentifier}"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "rangeStartIdentifier" + "}", (requestObj.rangeStartIdentifier !== null) ? "/" + String(requestObj.rangeStartIdentifier) : "")
            .replace("/{" + "rangeEndIdentifier" + "}", (requestObj.rangeEndIdentifier !== null) ? "/" + String(requestObj.rangeEndIdentifier) : "");
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
        const result: model.WordsIncomingMessage<model.DocumentResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Resets font's cache.
     * @param requestObj contains request parameters
     */
    public async resetCache(requestObj: model.ResetCacheRequest): Promise<http.IncomingMessage> {
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
        return Promise.resolve(response);
    }

    /**
     * Converts document to destination format with detailed settings and saves result to storage.
     * @param requestObj contains request parameters
     */
    public async saveAs(requestObj: model.SaveAsRequest): Promise<model.WordsIncomingMessage<model.SaveResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling saveAs.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/saveAs"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "");
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
        const result: model.WordsIncomingMessage<model.SaveResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Saves the selected range as a new document.
     * @param requestObj contains request parameters
     */
    public async saveAsRange(requestObj: model.SaveAsRangeRequest): Promise<model.WordsIncomingMessage<model.DocumentResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling saveAsRange.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/range/{rangeStartIdentifier}/{rangeEndIdentifier}/SaveAs"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "rangeStartIdentifier" + "}", (requestObj.rangeStartIdentifier !== null) ? "/" + String(requestObj.rangeStartIdentifier) : "")
            .replace("/{" + "rangeEndIdentifier" + "}", (requestObj.rangeEndIdentifier !== null) ? "/" + String(requestObj.rangeEndIdentifier) : "");
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
        const result: model.WordsIncomingMessage<model.DocumentResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Converts document to tiff with detailed settings and saves result to storage.
     * @param requestObj contains request parameters
     */
    public async saveAsTiff(requestObj: model.SaveAsTiffRequest): Promise<model.WordsIncomingMessage<model.SaveResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling saveAsTiff.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/saveAs/tiff"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "");
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
        const result: model.WordsIncomingMessage<model.SaveResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Searches text in document.
     * @param requestObj contains request parameters
     */
    public async search(requestObj: model.SearchRequest): Promise<model.WordsIncomingMessage<model.SearchResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling search.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/search"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "");
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
        const result: model.WordsIncomingMessage<model.SearchResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Splits document.
     * @param requestObj contains request parameters
     */
    public async splitDocument(requestObj: model.SplitDocumentRequest): Promise<model.WordsIncomingMessage<model.SplitDocumentResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling splitDocument.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/split"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling splitDocument.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling splitDocument.');
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
        const body =  ObjectSerializer.deserialize(response.body, "SplitDocumentResponse");
        const result: model.WordsIncomingMessage<model.SplitDocumentResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Unprotects document.
     * @param requestObj contains request parameters
     */
    public async unprotectDocument(requestObj: model.UnprotectDocumentRequest): Promise<model.WordsIncomingMessage<model.ProtectionDataResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling unprotectDocument.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/protection"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "");
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
        const result: model.WordsIncomingMessage<model.ProtectionDataResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Updates document bookmark.
     * @param requestObj contains request parameters
     */
    public async updateBookmark(requestObj: model.UpdateBookmarkRequest): Promise<model.WordsIncomingMessage<model.BookmarkResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateBookmark.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/bookmarks/{bookmarkName}"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "bookmarkName" + "}", (requestObj.bookmarkName !== null) ? "/" + String(requestObj.bookmarkName) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling updateBookmark.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling updateBookmark.');
        }

        // verify required parameter 'requestObj.bookmarkData' is not undefined
        if (requestObj.bookmarkData === undefined) {
            throw new Error('Required parameter "requestObj.bookmarkData" was undefined when calling updateBookmark.');
        }

        // verify required parameter 'requestObj.bookmarkData' is not null
        if (requestObj.bookmarkData === null) {
            throw new Error('Required parameter "requestObj.bookmarkData" was null when calling updateBookmark.');
        }

        // verify required parameter 'requestObj.bookmarkName' is not undefined
        if (requestObj.bookmarkName === undefined) {
            throw new Error('Required parameter "requestObj.bookmarkName" was undefined when calling updateBookmark.');
        }

        // verify required parameter 'requestObj.bookmarkName' is not null
        if (requestObj.bookmarkName === null) {
            throw new Error('Required parameter "requestObj.bookmarkName" was null when calling updateBookmark.');
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
        const result: model.WordsIncomingMessage<model.BookmarkResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Updates border properties.              'nodePath' should refer to paragraph, cell or row.
     * @param requestObj contains request parameters
     */
    public async updateBorder(requestObj: model.UpdateBorderRequest): Promise<model.WordsIncomingMessage<model.BorderResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateBorder.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/borders/{borderType}"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null) ? "/" + String(requestObj.nodePath) : "")
            .replace("/{" + "borderType" + "}", (requestObj.borderType !== null) ? "/" + String(requestObj.borderType) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling updateBorder.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling updateBorder.');
        }

        // verify required parameter 'requestObj.borderProperties' is not undefined
        if (requestObj.borderProperties === undefined) {
            throw new Error('Required parameter "requestObj.borderProperties" was undefined when calling updateBorder.');
        }

        // verify required parameter 'requestObj.borderProperties' is not null
        if (requestObj.borderProperties === null) {
            throw new Error('Required parameter "requestObj.borderProperties" was null when calling updateBorder.');
        }

        // verify required parameter 'requestObj.nodePath' is not undefined
        if (requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was undefined when calling updateBorder.');
        }

        // verify required parameter 'requestObj.borderType' is not undefined
        if (requestObj.borderType === undefined) {
            throw new Error('Required parameter "requestObj.borderType" was undefined when calling updateBorder.');
        }

        // verify required parameter 'requestObj.borderType' is not null
        if (requestObj.borderType === null) {
            throw new Error('Required parameter "requestObj.borderType" was null when calling updateBorder.');
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
        const result: model.WordsIncomingMessage<model.BorderResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Updates the comment, returns updated comment data.
     * @param requestObj contains request parameters
     */
    public async updateComment(requestObj: model.UpdateCommentRequest): Promise<model.WordsIncomingMessage<model.CommentResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateComment.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/comments/{commentIndex}"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "commentIndex" + "}", (requestObj.commentIndex !== null) ? "/" + String(requestObj.commentIndex) : "");
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
            body: ObjectSerializer.serialize(requestObj.comment, requestObj.comment.constructor.name === "Object" ? "importedComment.Comment" : requestObj.comment.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "CommentResponse");
        const result: model.WordsIncomingMessage<model.CommentResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Updates drawing object, returns updated  drawing object's data.
     * @param requestObj contains request parameters
     */
    public async updateDrawingObject(requestObj: model.UpdateDrawingObjectRequest): Promise<model.WordsIncomingMessage<model.DrawingObjectResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateDrawingObject.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/drawingObjects/{index}"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null) ? "/" + String(requestObj.nodePath) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null) ? "/" + String(requestObj.index) : "");
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

        // verify required parameter 'requestObj.nodePath' is not undefined
        if (requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was undefined when calling updateDrawingObject.');
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
        const body =  ObjectSerializer.deserialize(response.body, "DrawingObjectResponse");
        const result: model.WordsIncomingMessage<model.DrawingObjectResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Updates drawing object, returns updated  drawing object's data.
     * @param requestObj contains request parameters
     */
    public async updateDrawingObjectWithoutNodePath(requestObj: model.UpdateDrawingObjectWithoutNodePathRequest): Promise<model.WordsIncomingMessage<model.DrawingObjectResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateDrawingObjectWithoutNodePath.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/drawingObjects/{index}"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null) ? "/" + String(requestObj.index) : "");
        const queryParameters: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling updateDrawingObjectWithoutNodePath.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling updateDrawingObjectWithoutNodePath.');
        }

        // verify required parameter 'requestObj.drawingObject' is not undefined
        if (requestObj.drawingObject === undefined) {
            throw new Error('Required parameter "requestObj.drawingObject" was undefined when calling updateDrawingObjectWithoutNodePath.');
        }

        // verify required parameter 'requestObj.drawingObject' is not null
        if (requestObj.drawingObject === null) {
            throw new Error('Required parameter "requestObj.drawingObject" was null when calling updateDrawingObjectWithoutNodePath.');
        }

        // verify required parameter 'requestObj.imageFile' is not undefined
        if (requestObj.imageFile === undefined) {
            throw new Error('Required parameter "requestObj.imageFile" was undefined when calling updateDrawingObjectWithoutNodePath.');
        }

        // verify required parameter 'requestObj.imageFile' is not null
        if (requestObj.imageFile === null) {
            throw new Error('Required parameter "requestObj.imageFile" was null when calling updateDrawingObjectWithoutNodePath.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling updateDrawingObjectWithoutNodePath.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling updateDrawingObjectWithoutNodePath.');
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
        const body =  ObjectSerializer.deserialize(response.body, "DrawingObjectResponse");
        const result: model.WordsIncomingMessage<model.DrawingObjectResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Updates field's properties, returns updated field's data.
     * @param requestObj contains request parameters
     */
    public async updateField(requestObj: model.UpdateFieldRequest): Promise<model.WordsIncomingMessage<model.FieldResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateField.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/fields/{index}"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null) ? "/" + String(requestObj.nodePath) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null) ? "/" + String(requestObj.index) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling updateField.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling updateField.');
        }

        // verify required parameter 'requestObj.field' is not undefined
        if (requestObj.field === undefined) {
            throw new Error('Required parameter "requestObj.field" was undefined when calling updateField.');
        }

        // verify required parameter 'requestObj.field' is not null
        if (requestObj.field === null) {
            throw new Error('Required parameter "requestObj.field" was null when calling updateField.');
        }

        // verify required parameter 'requestObj.nodePath' is not undefined
        if (requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was undefined when calling updateField.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling updateField.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling updateField.');
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
            body: ObjectSerializer.serialize(requestObj.field, requestObj.field.constructor.name === "Object" ? "importedField.Field" : requestObj.field.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "FieldResponse");
        const result: model.WordsIncomingMessage<model.FieldResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Updates (reevaluate) fields in document.
     * @param requestObj contains request parameters
     */
    public async updateFields(requestObj: model.UpdateFieldsRequest): Promise<model.WordsIncomingMessage<model.DocumentResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateFields.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/updateFields"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "");
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
        const result: model.WordsIncomingMessage<model.DocumentResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Updates footnote's properties, returns updated run's data.
     * @param requestObj contains request parameters
     */
    public async updateFootnote(requestObj: model.UpdateFootnoteRequest): Promise<model.WordsIncomingMessage<model.FootnoteResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateFootnote.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/footnotes/{index}"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null) ? "/" + String(requestObj.nodePath) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null) ? "/" + String(requestObj.index) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling updateFootnote.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling updateFootnote.');
        }

        // verify required parameter 'requestObj.footnoteDto' is not undefined
        if (requestObj.footnoteDto === undefined) {
            throw new Error('Required parameter "requestObj.footnoteDto" was undefined when calling updateFootnote.');
        }

        // verify required parameter 'requestObj.footnoteDto' is not null
        if (requestObj.footnoteDto === null) {
            throw new Error('Required parameter "requestObj.footnoteDto" was null when calling updateFootnote.');
        }

        // verify required parameter 'requestObj.nodePath' is not undefined
        if (requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was undefined when calling updateFootnote.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling updateFootnote.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling updateFootnote.');
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
            body: ObjectSerializer.serialize(requestObj.footnoteDto, requestObj.footnoteDto.constructor.name === "Object" ? "importedFootnote.Footnote" : requestObj.footnoteDto.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "FootnoteResponse");
        const result: model.WordsIncomingMessage<model.FootnoteResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Updates footnote's properties, returns updated run's data.
     * @param requestObj contains request parameters
     */
    public async updateFootnoteWithoutNodePath(requestObj: model.UpdateFootnoteWithoutNodePathRequest): Promise<model.WordsIncomingMessage<model.FootnoteResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateFootnoteWithoutNodePath.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/footnotes/{index}"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null) ? "/" + String(requestObj.index) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling updateFootnoteWithoutNodePath.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling updateFootnoteWithoutNodePath.');
        }

        // verify required parameter 'requestObj.footnoteDto' is not undefined
        if (requestObj.footnoteDto === undefined) {
            throw new Error('Required parameter "requestObj.footnoteDto" was undefined when calling updateFootnoteWithoutNodePath.');
        }

        // verify required parameter 'requestObj.footnoteDto' is not null
        if (requestObj.footnoteDto === null) {
            throw new Error('Required parameter "requestObj.footnoteDto" was null when calling updateFootnoteWithoutNodePath.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling updateFootnoteWithoutNodePath.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling updateFootnoteWithoutNodePath.');
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
            body: ObjectSerializer.serialize(requestObj.footnoteDto, requestObj.footnoteDto.constructor.name === "Object" ? "importedFootnote.Footnote" : requestObj.footnoteDto.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "FootnoteResponse");
        const result: model.WordsIncomingMessage<model.FootnoteResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Updates properties of form field, returns updated form field.
     * @param requestObj contains request parameters
     */
    public async updateFormField(requestObj: model.UpdateFormFieldRequest): Promise<model.WordsIncomingMessage<model.FormFieldResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateFormField.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/formfields/{index}"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null) ? "/" + String(requestObj.nodePath) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null) ? "/" + String(requestObj.index) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling updateFormField.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling updateFormField.');
        }

        // verify required parameter 'requestObj.formField' is not undefined
        if (requestObj.formField === undefined) {
            throw new Error('Required parameter "requestObj.formField" was undefined when calling updateFormField.');
        }

        // verify required parameter 'requestObj.formField' is not null
        if (requestObj.formField === null) {
            throw new Error('Required parameter "requestObj.formField" was null when calling updateFormField.');
        }

        // verify required parameter 'requestObj.nodePath' is not undefined
        if (requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was undefined when calling updateFormField.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling updateFormField.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling updateFormField.');
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
        const result: model.WordsIncomingMessage<model.FormFieldResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Updates properties of form field, returns updated form field.
     * @param requestObj contains request parameters
     */
    public async updateFormFieldWithoutNodePath(requestObj: model.UpdateFormFieldWithoutNodePathRequest): Promise<model.WordsIncomingMessage<model.FormFieldResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateFormFieldWithoutNodePath.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/formfields/{index}"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null) ? "/" + String(requestObj.index) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling updateFormFieldWithoutNodePath.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling updateFormFieldWithoutNodePath.');
        }

        // verify required parameter 'requestObj.formField' is not undefined
        if (requestObj.formField === undefined) {
            throw new Error('Required parameter "requestObj.formField" was undefined when calling updateFormFieldWithoutNodePath.');
        }

        // verify required parameter 'requestObj.formField' is not null
        if (requestObj.formField === null) {
            throw new Error('Required parameter "requestObj.formField" was null when calling updateFormFieldWithoutNodePath.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling updateFormFieldWithoutNodePath.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling updateFormFieldWithoutNodePath.');
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
        const result: model.WordsIncomingMessage<model.FormFieldResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Updates paragraph format properties, returns updated format properties.
     * @param requestObj contains request parameters
     */
    public async updateParagraphFormat(requestObj: model.UpdateParagraphFormatRequest): Promise<model.WordsIncomingMessage<model.ParagraphFormatResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateParagraphFormat.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/paragraphs/{index}/format"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null) ? "/" + String(requestObj.nodePath) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null) ? "/" + String(requestObj.index) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling updateParagraphFormat.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling updateParagraphFormat.');
        }

        // verify required parameter 'requestObj.dto' is not undefined
        if (requestObj.dto === undefined) {
            throw new Error('Required parameter "requestObj.dto" was undefined when calling updateParagraphFormat.');
        }

        // verify required parameter 'requestObj.dto' is not null
        if (requestObj.dto === null) {
            throw new Error('Required parameter "requestObj.dto" was null when calling updateParagraphFormat.');
        }

        // verify required parameter 'requestObj.nodePath' is not undefined
        if (requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was undefined when calling updateParagraphFormat.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling updateParagraphFormat.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling updateParagraphFormat.');
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
            body: ObjectSerializer.serialize(requestObj.dto, requestObj.dto.constructor.name === "Object" ? "importedParagraphFormat.ParagraphFormat" : requestObj.dto.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "ParagraphFormatResponse");
        const result: model.WordsIncomingMessage<model.ParagraphFormatResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Updates run's properties, returns updated run's data.
     * @param requestObj contains request parameters
     */
    public async updateRun(requestObj: model.UpdateRunRequest): Promise<model.WordsIncomingMessage<model.RunResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateRun.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{paragraphPath}/runs/{index}"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "paragraphPath" + "}", (requestObj.paragraphPath !== null) ? "/" + String(requestObj.paragraphPath) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null) ? "/" + String(requestObj.index) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling updateRun.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling updateRun.');
        }

        // verify required parameter 'requestObj.run' is not undefined
        if (requestObj.run === undefined) {
            throw new Error('Required parameter "requestObj.run" was undefined when calling updateRun.');
        }

        // verify required parameter 'requestObj.run' is not null
        if (requestObj.run === null) {
            throw new Error('Required parameter "requestObj.run" was null when calling updateRun.');
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
            body: ObjectSerializer.serialize(requestObj.run, requestObj.run.constructor.name === "Object" ? "importedRun.Run" : requestObj.run.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "RunResponse");
        const result: model.WordsIncomingMessage<model.RunResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Updates font properties, returns updated font data.
     * @param requestObj contains request parameters
     */
    public async updateRunFont(requestObj: model.UpdateRunFontRequest): Promise<model.WordsIncomingMessage<model.FontResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateRunFont.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{paragraphPath}/runs/{index}/font"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "paragraphPath" + "}", (requestObj.paragraphPath !== null) ? "/" + String(requestObj.paragraphPath) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null) ? "/" + String(requestObj.index) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling updateRunFont.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling updateRunFont.');
        }

        // verify required parameter 'requestObj.fontDto' is not undefined
        if (requestObj.fontDto === undefined) {
            throw new Error('Required parameter "requestObj.fontDto" was undefined when calling updateRunFont.');
        }

        // verify required parameter 'requestObj.fontDto' is not null
        if (requestObj.fontDto === null) {
            throw new Error('Required parameter "requestObj.fontDto" was null when calling updateRunFont.');
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
        const result: model.WordsIncomingMessage<model.FontResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Updates page setup of section.
     * @param requestObj contains request parameters
     */
    public async updateSectionPageSetup(requestObj: model.UpdateSectionPageSetupRequest): Promise<model.WordsIncomingMessage<model.SectionPageSetupResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateSectionPageSetup.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/sections/{sectionIndex}/pageSetup"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "sectionIndex" + "}", (requestObj.sectionIndex !== null) ? "/" + String(requestObj.sectionIndex) : "");
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
        const result: model.WordsIncomingMessage<model.SectionPageSetupResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Updates a table cell format.
     * @param requestObj contains request parameters
     */
    public async updateTableCellFormat(requestObj: model.UpdateTableCellFormatRequest): Promise<model.WordsIncomingMessage<model.TableCellFormatResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateTableCellFormat.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{tableRowPath}/cells/{index}/cellformat"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "tableRowPath" + "}", (requestObj.tableRowPath !== null) ? "/" + String(requestObj.tableRowPath) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null) ? "/" + String(requestObj.index) : "");
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
        const result: model.WordsIncomingMessage<model.TableCellFormatResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Updates a table properties.
     * @param requestObj contains request parameters
     */
    public async updateTableProperties(requestObj: model.UpdateTablePropertiesRequest): Promise<model.WordsIncomingMessage<model.TablePropertiesResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateTableProperties.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/tables/{index}/properties"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "nodePath" + "}", (requestObj.nodePath !== null) ? "/" + String(requestObj.nodePath) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null) ? "/" + String(requestObj.index) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling updateTableProperties.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling updateTableProperties.');
        }

        // verify required parameter 'requestObj.nodePath' is not undefined
        if (requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was undefined when calling updateTableProperties.');
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
        const result: model.WordsIncomingMessage<model.TablePropertiesResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Updates a table properties.
     * @param requestObj contains request parameters
     */
    public async updateTablePropertiesWithoutNodePath(requestObj: model.UpdateTablePropertiesWithoutNodePathRequest): Promise<model.WordsIncomingMessage<model.TablePropertiesResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateTablePropertiesWithoutNodePath.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/tables/{index}/properties"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null) ? "/" + String(requestObj.index) : "");
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not undefined
        if (requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was undefined when calling updateTablePropertiesWithoutNodePath.');
        }

        // verify required parameter 'requestObj.name' is not null
        if (requestObj.name === null) {
            throw new Error('Required parameter "requestObj.name" was null when calling updateTablePropertiesWithoutNodePath.');
        }

        // verify required parameter 'requestObj.index' is not undefined
        if (requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was undefined when calling updateTablePropertiesWithoutNodePath.');
        }

        // verify required parameter 'requestObj.index' is not null
        if (requestObj.index === null) {
            throw new Error('Required parameter "requestObj.index" was null when calling updateTablePropertiesWithoutNodePath.');
        }

        // verify required parameter 'requestObj.properties' is not undefined
        if (requestObj.properties === undefined) {
            throw new Error('Required parameter "requestObj.properties" was undefined when calling updateTablePropertiesWithoutNodePath.');
        }

        // verify required parameter 'requestObj.properties' is not null
        if (requestObj.properties === null) {
            throw new Error('Required parameter "requestObj.properties" was null when calling updateTablePropertiesWithoutNodePath.');
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
        const result: model.WordsIncomingMessage<model.TablePropertiesResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Updates a table row format.
     * @param requestObj contains request parameters
     */
    public async updateTableRowFormat(requestObj: model.UpdateTableRowFormatRequest): Promise<model.WordsIncomingMessage<model.TableRowFormatResponse>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateTableRowFormat.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{tablePath}/rows/{index}/rowformat"
            .replace("/{" + "name" + "}", (requestObj.name !== null) ? "/" + String(requestObj.name) : "")
            .replace("/{" + "tablePath" + "}", (requestObj.tablePath !== null) ? "/" + String(requestObj.tablePath) : "")
            .replace("/{" + "index" + "}", (requestObj.index !== null) ? "/" + String(requestObj.index) : "");
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
        const result: model.WordsIncomingMessage<model.TableRowFormatResponse> = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Upload file
     * @param requestObj contains request parameters
     */
    public async uploadFile(requestObj: model.UploadFileRequest): Promise<model.WordsIncomingMessage<model.FilesUploadResult>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling uploadFile.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/words/storage/file/{path}"
            .replace("/{" + "path" + "}", (requestObj.path !== null) ? "/" + String(requestObj.path) : "");
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

        requestOptions.formData = formParams;        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, "FilesUploadResult");
        const result: model.WordsIncomingMessage<model.FilesUploadResult> = {body, response};
        return Promise.resolve(result);
    }

}

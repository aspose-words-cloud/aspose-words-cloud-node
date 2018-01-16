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
import { invokeApiMethod } from "./internal/requestHelper";
import * as model from "./model/model";

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
     * Accept all revisions in document
     * @param requestObj contains request parameters
     */
    public async acceptAllRevisions(requestObj: model.AcceptAllRevisionsRequest): Promise<{response: http.ClientResponse, body: model.RevisionsModificationResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/revisions/acceptAll"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling acceptAllRevisions.');
        }

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        if (requestObj.destFileName !== undefined) {
            queryParameters.DestFileName = ObjectSerializer.serialize(requestObj.destFileName, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "RevisionsModificationResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Add new or update existing document property.
     * @param requestObj contains request parameters
     */
    public async createOrUpdateDocumentProperty(requestObj: model.CreateOrUpdateDocumentPropertyRequest): Promise<{response: http.ClientResponse, body: model.DocumentPropertyResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/documentProperties/{propertyName}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "propertyName" + "}", String(requestObj.propertyName));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

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

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        if (requestObj.destFileName !== undefined) {
            queryParameters.DestFileName = ObjectSerializer.serialize(requestObj.destFileName, "string");
        }

        if (requestObj.revisionAuthor !== undefined) {
            queryParameters.RevisionAuthor = ObjectSerializer.serialize(requestObj.revisionAuthor, "string");
        }

        if (requestObj.revisionDateTime !== undefined) {
            queryParameters.RevisionDateTime = ObjectSerializer.serialize(requestObj.revisionDateTime, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.property, "DocumentProperty"),
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "DocumentPropertyResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Resets border properties to default values.              'nodePath' should refer to node with cell or row
     * @param requestObj contains request parameters
     */
    public async deleteBorder(requestObj: model.DeleteBorderRequest): Promise<{response: http.ClientResponse, body: model.BorderResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/borders/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "nodePath" + "}", String(requestObj.nodePath))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

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

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        if (requestObj.destFileName !== undefined) {
            queryParameters.DestFileName = ObjectSerializer.serialize(requestObj.destFileName, "string");
        }

        if (requestObj.revisionAuthor !== undefined) {
            queryParameters.RevisionAuthor = ObjectSerializer.serialize(requestObj.revisionAuthor, "string");
        }

        if (requestObj.revisionDateTime !== undefined) {
            queryParameters.RevisionDateTime = ObjectSerializer.serialize(requestObj.revisionDateTime, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "BorderResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Resets borders properties to default values.              'nodePath' should refer to node with cell or row
     * @param requestObj contains request parameters
     */
    public async deleteBorders(requestObj: model.DeleteBordersRequest): Promise<{response: http.ClientResponse, body: model.BordersResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/borders"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "nodePath" + "}", String(requestObj.nodePath));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deleteBorders.');
        }

        // verify required parameter 'requestObj.nodePath' is not null or undefined
        if (requestObj.nodePath === null || requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was null or undefined when calling deleteBorders.');
        }

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        if (requestObj.destFileName !== undefined) {
            queryParameters.DestFileName = ObjectSerializer.serialize(requestObj.destFileName, "string");
        }

        if (requestObj.revisionAuthor !== undefined) {
            queryParameters.RevisionAuthor = ObjectSerializer.serialize(requestObj.revisionAuthor, "string");
        }

        if (requestObj.revisionDateTime !== undefined) {
            queryParameters.RevisionDateTime = ObjectSerializer.serialize(requestObj.revisionDateTime, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "BordersResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Remove comment from document.
     * @param requestObj contains request parameters
     */
    public async deleteComment(requestObj: model.DeleteCommentRequest): Promise<{response: http.ClientResponse, body: model.AsposeResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/comments/{commentIndex}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "commentIndex" + "}", String(requestObj.commentIndex));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deleteComment.');
        }

        // verify required parameter 'requestObj.commentIndex' is not null or undefined
        if (requestObj.commentIndex === null || requestObj.commentIndex === undefined) {
            throw new Error('Required parameter "requestObj.commentIndex" was null or undefined when calling deleteComment.');
        }

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        if (requestObj.destFileName !== undefined) {
            queryParameters.DestFileName = ObjectSerializer.serialize(requestObj.destFileName, "string");
        }

        if (requestObj.revisionAuthor !== undefined) {
            queryParameters.RevisionAuthor = ObjectSerializer.serialize(requestObj.revisionAuthor, "string");
        }

        if (requestObj.revisionDateTime !== undefined) {
            queryParameters.RevisionDateTime = ObjectSerializer.serialize(requestObj.revisionDateTime, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Remove macros from document.
     * @param requestObj contains request parameters
     */
    public async deleteDocumentMacros(requestObj: model.DeleteDocumentMacrosRequest): Promise<{response: http.ClientResponse, body: model.AsposeResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/macros"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deleteDocumentMacros.');
        }

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        if (requestObj.destFileName !== undefined) {
            queryParameters.DestFileName = ObjectSerializer.serialize(requestObj.destFileName, "string");
        }

        if (requestObj.revisionAuthor !== undefined) {
            queryParameters.RevisionAuthor = ObjectSerializer.serialize(requestObj.revisionAuthor, "string");
        }

        if (requestObj.revisionDateTime !== undefined) {
            queryParameters.RevisionDateTime = ObjectSerializer.serialize(requestObj.revisionDateTime, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Delete document property.
     * @param requestObj contains request parameters
     */
    public async deleteDocumentProperty(requestObj: model.DeleteDocumentPropertyRequest): Promise<{response: http.ClientResponse, body: model.AsposeResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/documentProperties/{propertyName}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "propertyName" + "}", String(requestObj.propertyName));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deleteDocumentProperty.');
        }

        // verify required parameter 'requestObj.propertyName' is not null or undefined
        if (requestObj.propertyName === null || requestObj.propertyName === undefined) {
            throw new Error('Required parameter "requestObj.propertyName" was null or undefined when calling deleteDocumentProperty.');
        }

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        if (requestObj.destFileName !== undefined) {
            queryParameters.DestFileName = ObjectSerializer.serialize(requestObj.destFileName, "string");
        }

        if (requestObj.revisionAuthor !== undefined) {
            queryParameters.RevisionAuthor = ObjectSerializer.serialize(requestObj.revisionAuthor, "string");
        }

        if (requestObj.revisionDateTime !== undefined) {
            queryParameters.RevisionDateTime = ObjectSerializer.serialize(requestObj.revisionDateTime, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Delete watermark (for deleting last watermark from the document).
     * @param requestObj contains request parameters
     */
    public async deleteDocumentWatermark(requestObj: model.DeleteDocumentWatermarkRequest): Promise<{response: http.ClientResponse, body: model.DocumentResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/watermark"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deleteDocumentWatermark.');
        }

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        if (requestObj.destFileName !== undefined) {
            queryParameters.DestFileName = ObjectSerializer.serialize(requestObj.destFileName, "string");
        }

        if (requestObj.revisionAuthor !== undefined) {
            queryParameters.RevisionAuthor = ObjectSerializer.serialize(requestObj.revisionAuthor, "string");
        }

        if (requestObj.revisionDateTime !== undefined) {
            queryParameters.RevisionDateTime = ObjectSerializer.serialize(requestObj.revisionDateTime, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "DocumentResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Removes drawing object from document.
     * @param requestObj contains request parameters
     */
    public async deleteDrawingObject(requestObj: model.DeleteDrawingObjectRequest): Promise<{response: http.ClientResponse, body: model.AsposeResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/drawingObjects/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deleteDrawingObject.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling deleteDrawingObject.');
        }

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        if (requestObj.destFileName !== undefined) {
            queryParameters.DestFileName = ObjectSerializer.serialize(requestObj.destFileName, "string");
        }

        if (requestObj.revisionAuthor !== undefined) {
            queryParameters.RevisionAuthor = ObjectSerializer.serialize(requestObj.revisionAuthor, "string");
        }

        if (requestObj.revisionDateTime !== undefined) {
            queryParameters.RevisionDateTime = ObjectSerializer.serialize(requestObj.revisionDateTime, "string");
        }

        if (requestObj.nodePath !== undefined) {
            queryParameters.NodePath = ObjectSerializer.serialize(requestObj.nodePath, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Delete field from document.
     * @param requestObj contains request parameters
     */
    public async deleteField(requestObj: model.DeleteFieldRequest): Promise<{response: http.ClientResponse, body: model.AsposeResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/fields/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deleteField.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling deleteField.');
        }

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        if (requestObj.destFileName !== undefined) {
            queryParameters.DestFileName = ObjectSerializer.serialize(requestObj.destFileName, "string");
        }

        if (requestObj.revisionAuthor !== undefined) {
            queryParameters.RevisionAuthor = ObjectSerializer.serialize(requestObj.revisionAuthor, "string");
        }

        if (requestObj.revisionDateTime !== undefined) {
            queryParameters.RevisionDateTime = ObjectSerializer.serialize(requestObj.revisionDateTime, "string");
        }

        if (requestObj.nodePath !== undefined) {
            queryParameters.NodePath = ObjectSerializer.serialize(requestObj.nodePath, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Remove fields from section paragraph.
     * @param requestObj contains request parameters
     */
    public async deleteFields(requestObj: model.DeleteFieldsRequest): Promise<{response: http.ClientResponse, body: model.AsposeResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/fields"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deleteFields.');
        }

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        if (requestObj.destFileName !== undefined) {
            queryParameters.DestFileName = ObjectSerializer.serialize(requestObj.destFileName, "string");
        }

        if (requestObj.revisionAuthor !== undefined) {
            queryParameters.RevisionAuthor = ObjectSerializer.serialize(requestObj.revisionAuthor, "string");
        }

        if (requestObj.revisionDateTime !== undefined) {
            queryParameters.RevisionDateTime = ObjectSerializer.serialize(requestObj.revisionDateTime, "string");
        }

        if (requestObj.nodePath !== undefined) {
            queryParameters.NodePath = ObjectSerializer.serialize(requestObj.nodePath, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Removes footnote from document.
     * @param requestObj contains request parameters
     */
    public async deleteFootnote(requestObj: model.DeleteFootnoteRequest): Promise<{response: http.ClientResponse, body: model.AsposeResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/footnotes/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deleteFootnote.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling deleteFootnote.');
        }

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        if (requestObj.destFileName !== undefined) {
            queryParameters.DestFileName = ObjectSerializer.serialize(requestObj.destFileName, "string");
        }

        if (requestObj.revisionAuthor !== undefined) {
            queryParameters.RevisionAuthor = ObjectSerializer.serialize(requestObj.revisionAuthor, "string");
        }

        if (requestObj.revisionDateTime !== undefined) {
            queryParameters.RevisionDateTime = ObjectSerializer.serialize(requestObj.revisionDateTime, "string");
        }

        if (requestObj.nodePath !== undefined) {
            queryParameters.NodePath = ObjectSerializer.serialize(requestObj.nodePath, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Removes form field from document.
     * @param requestObj contains request parameters
     */
    public async deleteFormField(requestObj: model.DeleteFormFieldRequest): Promise<{response: http.ClientResponse, body: model.AsposeResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/formfields/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deleteFormField.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling deleteFormField.');
        }

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        if (requestObj.destFileName !== undefined) {
            queryParameters.DestFileName = ObjectSerializer.serialize(requestObj.destFileName, "string");
        }

        if (requestObj.revisionAuthor !== undefined) {
            queryParameters.RevisionAuthor = ObjectSerializer.serialize(requestObj.revisionAuthor, "string");
        }

        if (requestObj.revisionDateTime !== undefined) {
            queryParameters.RevisionDateTime = ObjectSerializer.serialize(requestObj.revisionDateTime, "string");
        }

        if (requestObj.nodePath !== undefined) {
            queryParameters.NodePath = ObjectSerializer.serialize(requestObj.nodePath, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Delete header/footer from document.
     * @param requestObj contains request parameters
     */
    public async deleteHeaderFooter(requestObj: model.DeleteHeaderFooterRequest): Promise<{response: http.ClientResponse, body: model.AsposeResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{sectionPath}/headersfooters/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deleteHeaderFooter.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling deleteHeaderFooter.');
        }

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        if (requestObj.destFileName !== undefined) {
            queryParameters.DestFileName = ObjectSerializer.serialize(requestObj.destFileName, "string");
        }

        if (requestObj.revisionAuthor !== undefined) {
            queryParameters.RevisionAuthor = ObjectSerializer.serialize(requestObj.revisionAuthor, "string");
        }

        if (requestObj.revisionDateTime !== undefined) {
            queryParameters.RevisionDateTime = ObjectSerializer.serialize(requestObj.revisionDateTime, "string");
        }

        if (requestObj.sectionPath !== undefined) {
            queryParameters.SectionPath = ObjectSerializer.serialize(requestObj.sectionPath, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Delete document headers and footers.
     * @param requestObj contains request parameters
     */
    public async deleteHeadersFooters(requestObj: model.DeleteHeadersFootersRequest): Promise<{response: http.ClientResponse, body: model.AsposeResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{sectionPath}/headersfooters"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deleteHeadersFooters.');
        }

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        if (requestObj.destFileName !== undefined) {
            queryParameters.DestFileName = ObjectSerializer.serialize(requestObj.destFileName, "string");
        }

        if (requestObj.revisionAuthor !== undefined) {
            queryParameters.RevisionAuthor = ObjectSerializer.serialize(requestObj.revisionAuthor, "string");
        }

        if (requestObj.revisionDateTime !== undefined) {
            queryParameters.RevisionDateTime = ObjectSerializer.serialize(requestObj.revisionDateTime, "string");
        }

        if (requestObj.sectionPath !== undefined) {
            queryParameters.SectionPath = ObjectSerializer.serialize(requestObj.sectionPath, "string");
        }

        if (requestObj.headersFootersTypes !== undefined) {
            queryParameters.HeadersFootersTypes = ObjectSerializer.serialize(requestObj.headersFootersTypes, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Removes OfficeMath object from document.
     * @param requestObj contains request parameters
     */
    public async deleteOfficeMathObject(requestObj: model.DeleteOfficeMathObjectRequest): Promise<{response: http.ClientResponse, body: model.AsposeResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/OfficeMathObjects/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deleteOfficeMathObject.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling deleteOfficeMathObject.');
        }

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        if (requestObj.destFileName !== undefined) {
            queryParameters.DestFileName = ObjectSerializer.serialize(requestObj.destFileName, "string");
        }

        if (requestObj.revisionAuthor !== undefined) {
            queryParameters.RevisionAuthor = ObjectSerializer.serialize(requestObj.revisionAuthor, "string");
        }

        if (requestObj.revisionDateTime !== undefined) {
            queryParameters.RevisionDateTime = ObjectSerializer.serialize(requestObj.revisionDateTime, "string");
        }

        if (requestObj.nodePath !== undefined) {
            queryParameters.NodePath = ObjectSerializer.serialize(requestObj.nodePath, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Remove paragraph from section.
     * @param requestObj contains request parameters
     */
    public async deleteParagraph(requestObj: model.DeleteParagraphRequest): Promise<{response: http.ClientResponse, body: model.AsposeResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/paragraphs/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deleteParagraph.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling deleteParagraph.');
        }

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        if (requestObj.destFileName !== undefined) {
            queryParameters.DestFileName = ObjectSerializer.serialize(requestObj.destFileName, "string");
        }

        if (requestObj.revisionAuthor !== undefined) {
            queryParameters.RevisionAuthor = ObjectSerializer.serialize(requestObj.revisionAuthor, "string");
        }

        if (requestObj.revisionDateTime !== undefined) {
            queryParameters.RevisionDateTime = ObjectSerializer.serialize(requestObj.revisionDateTime, "string");
        }

        if (requestObj.nodePath !== undefined) {
            queryParameters.NodePath = ObjectSerializer.serialize(requestObj.nodePath, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Removes run from document.
     * @param requestObj contains request parameters
     */
    public async deleteRun(requestObj: model.DeleteRunRequest): Promise<{response: http.ClientResponse, body: model.AsposeResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{paragraphPath}/runs/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "paragraphPath" + "}", String(requestObj.paragraphPath))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

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

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        if (requestObj.destFileName !== undefined) {
            queryParameters.DestFileName = ObjectSerializer.serialize(requestObj.destFileName, "string");
        }

        if (requestObj.revisionAuthor !== undefined) {
            queryParameters.RevisionAuthor = ObjectSerializer.serialize(requestObj.revisionAuthor, "string");
        }

        if (requestObj.revisionDateTime !== undefined) {
            queryParameters.RevisionDateTime = ObjectSerializer.serialize(requestObj.revisionDateTime, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Delete a table.
     * @param requestObj contains request parameters
     */
    public async deleteTable(requestObj: model.DeleteTableRequest): Promise<{response: http.ClientResponse, body: model.AsposeResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/tables/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deleteTable.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling deleteTable.');
        }

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        if (requestObj.destFileName !== undefined) {
            queryParameters.DestFileName = ObjectSerializer.serialize(requestObj.destFileName, "string");
        }

        if (requestObj.revisionAuthor !== undefined) {
            queryParameters.RevisionAuthor = ObjectSerializer.serialize(requestObj.revisionAuthor, "string");
        }

        if (requestObj.revisionDateTime !== undefined) {
            queryParameters.RevisionDateTime = ObjectSerializer.serialize(requestObj.revisionDateTime, "string");
        }

        if (requestObj.nodePath !== undefined) {
            queryParameters.NodePath = ObjectSerializer.serialize(requestObj.nodePath, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Delete a table cell.
     * @param requestObj contains request parameters
     */
    public async deleteTableCell(requestObj: model.DeleteTableCellRequest): Promise<{response: http.ClientResponse, body: model.AsposeResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{tableRowPath}/cells/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "tableRowPath" + "}", String(requestObj.tableRowPath))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

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

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        if (requestObj.destFileName !== undefined) {
            queryParameters.DestFileName = ObjectSerializer.serialize(requestObj.destFileName, "string");
        }

        if (requestObj.revisionAuthor !== undefined) {
            queryParameters.RevisionAuthor = ObjectSerializer.serialize(requestObj.revisionAuthor, "string");
        }

        if (requestObj.revisionDateTime !== undefined) {
            queryParameters.RevisionDateTime = ObjectSerializer.serialize(requestObj.revisionDateTime, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Delete a table row.
     * @param requestObj contains request parameters
     */
    public async deleteTableRow(requestObj: model.DeleteTableRowRequest): Promise<{response: http.ClientResponse, body: model.AsposeResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{tablePath}/rows/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "tablePath" + "}", String(requestObj.tablePath))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

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

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        if (requestObj.destFileName !== undefined) {
            queryParameters.DestFileName = ObjectSerializer.serialize(requestObj.destFileName, "string");
        }

        if (requestObj.revisionAuthor !== undefined) {
            queryParameters.RevisionAuthor = ObjectSerializer.serialize(requestObj.revisionAuthor, "string");
        }

        if (requestObj.revisionDateTime !== undefined) {
            queryParameters.RevisionDateTime = ObjectSerializer.serialize(requestObj.revisionDateTime, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Unprotect document.
     * @param requestObj contains request parameters
     */
    public async deleteUnprotectDocument(requestObj: model.DeleteUnprotectDocumentRequest): Promise<{response: http.ClientResponse, body: model.ProtectionDataResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/protection"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deleteUnprotectDocument.');
        }

        // verify required parameter 'requestObj.protectionRequest' is not null or undefined
        if (requestObj.protectionRequest === null || requestObj.protectionRequest === undefined) {
            throw new Error('Required parameter "requestObj.protectionRequest" was null or undefined when calling deleteUnprotectDocument.');
        }

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        if (requestObj.destFileName !== undefined) {
            queryParameters.DestFileName = ObjectSerializer.serialize(requestObj.destFileName, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.protectionRequest, "ProtectionRequest"),
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "ProtectionDataResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Return a border. 'nodePath' should refer to node with cell or row
     * @param requestObj contains request parameters
     */
    public async getBorder(requestObj: model.GetBorderRequest): Promise<{response: http.ClientResponse, body: model.BorderResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/borders/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "nodePath" + "}", String(requestObj.nodePath))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

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

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "BorderResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Return a collection of borders. 'nodePath' should refer to node with cell or row
     * @param requestObj contains request parameters
     */
    public async getBorders(requestObj: model.GetBordersRequest): Promise<{response: http.ClientResponse, body: model.BordersResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/borders"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "nodePath" + "}", String(requestObj.nodePath));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getBorders.');
        }

        // verify required parameter 'requestObj.nodePath' is not null or undefined
        if (requestObj.nodePath === null || requestObj.nodePath === undefined) {
            throw new Error('Required parameter "requestObj.nodePath" was null or undefined when calling getBorders.');
        }

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "BordersResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Get comment from document.
     * @param requestObj contains request parameters
     */
    public async getComment(requestObj: model.GetCommentRequest): Promise<{response: http.ClientResponse, body: model.CommentResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/comments/{commentIndex}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "commentIndex" + "}", String(requestObj.commentIndex));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getComment.');
        }

        // verify required parameter 'requestObj.commentIndex' is not null or undefined
        if (requestObj.commentIndex === null || requestObj.commentIndex === undefined) {
            throw new Error('Required parameter "requestObj.commentIndex" was null or undefined when calling getComment.');
        }

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CommentResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Get comments from document.
     * @param requestObj contains request parameters
     */
    public async getComments(requestObj: model.GetCommentsRequest): Promise<{response: http.ClientResponse, body: model.CommentsResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/comments"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getComments.');
        }

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CommentsResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Read document common info.
     * @param requestObj contains request parameters
     */
    public async getDocument(requestObj: model.GetDocumentRequest): Promise<{response: http.ClientResponse, body: model.DocumentResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{documentName}"
            .replace("{" + "documentName" + "}", String(requestObj.documentName));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.documentName' is not null or undefined
        if (requestObj.documentName === null || requestObj.documentName === undefined) {
            throw new Error('Required parameter "requestObj.documentName" was null or undefined when calling getDocument.');
        }

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "DocumentResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Read document bookmark data by its name.
     * @param requestObj contains request parameters
     */
    public async getDocumentBookmarkByName(requestObj: model.GetDocumentBookmarkByNameRequest): Promise<{response: http.ClientResponse, body: model.BookmarkResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/bookmarks/{bookmarkName}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "bookmarkName" + "}", String(requestObj.bookmarkName));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getDocumentBookmarkByName.');
        }

        // verify required parameter 'requestObj.bookmarkName' is not null or undefined
        if (requestObj.bookmarkName === null || requestObj.bookmarkName === undefined) {
            throw new Error('Required parameter "requestObj.bookmarkName" was null or undefined when calling getDocumentBookmarkByName.');
        }

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "BookmarkResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Read document bookmarks common info.
     * @param requestObj contains request parameters
     */
    public async getDocumentBookmarks(requestObj: model.GetDocumentBookmarksRequest): Promise<{response: http.ClientResponse, body: model.BookmarksResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/bookmarks"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getDocumentBookmarks.');
        }

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "BookmarksResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Read document drawing object common info by its index or convert to format specified.
     * @param requestObj contains request parameters
     */
    public async getDocumentDrawingObjectByIndex(requestObj: model.GetDocumentDrawingObjectByIndexRequest): Promise<{response: http.ClientResponse, body: model.DrawingObjectResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/drawingObjects/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getDocumentDrawingObjectByIndex.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling getDocumentDrawingObjectByIndex.');
        }

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        if (requestObj.nodePath !== undefined) {
            queryParameters.NodePath = ObjectSerializer.serialize(requestObj.nodePath, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "DrawingObjectResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Read drawing object image data.
     * @param requestObj contains request parameters
     */
    public async getDocumentDrawingObjectImageData(requestObj: model.GetDocumentDrawingObjectImageDataRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/drawingObjects/{index}/imageData"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getDocumentDrawingObjectImageData.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling getDocumentDrawingObjectImageData.');
        }

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        if (requestObj.nodePath !== undefined) {
            queryParameters.NodePath = ObjectSerializer.serialize(requestObj.nodePath, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            encoding: null,
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /**
     * Get drawing object OLE data.
     * @param requestObj contains request parameters
     */
    public async getDocumentDrawingObjectOleData(requestObj: model.GetDocumentDrawingObjectOleDataRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/drawingObjects/{index}/oleData"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getDocumentDrawingObjectOleData.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling getDocumentDrawingObjectOleData.');
        }

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        if (requestObj.nodePath !== undefined) {
            queryParameters.NodePath = ObjectSerializer.serialize(requestObj.nodePath, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            encoding: null,
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /**
     * Read document drawing objects common info.
     * @param requestObj contains request parameters
     */
    public async getDocumentDrawingObjects(requestObj: model.GetDocumentDrawingObjectsRequest): Promise<{response: http.ClientResponse, body: model.DrawingObjectsResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/drawingObjects"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getDocumentDrawingObjects.');
        }

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        if (requestObj.nodePath !== undefined) {
            queryParameters.NodePath = ObjectSerializer.serialize(requestObj.nodePath, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "DrawingObjectsResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Read document field names.
     * @param requestObj contains request parameters
     */
    public async getDocumentFieldNames(requestObj: model.GetDocumentFieldNamesRequest): Promise<{response: http.ClientResponse, body: model.FieldNamesResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/mailMergeFieldNames"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getDocumentFieldNames.');
        }

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        if (requestObj.useNonMergeFields !== undefined) {
            queryParameters.UseNonMergeFields = ObjectSerializer.serialize(requestObj.useNonMergeFields, "boolean");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FieldNamesResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Read document hyperlink by its index.
     * @param requestObj contains request parameters
     */
    public async getDocumentHyperlinkByIndex(requestObj: model.GetDocumentHyperlinkByIndexRequest): Promise<{response: http.ClientResponse, body: model.HyperlinkResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/hyperlinks/{hyperlinkIndex}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "hyperlinkIndex" + "}", String(requestObj.hyperlinkIndex));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getDocumentHyperlinkByIndex.');
        }

        // verify required parameter 'requestObj.hyperlinkIndex' is not null or undefined
        if (requestObj.hyperlinkIndex === null || requestObj.hyperlinkIndex === undefined) {
            throw new Error('Required parameter "requestObj.hyperlinkIndex" was null or undefined when calling getDocumentHyperlinkByIndex.');
        }

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "HyperlinkResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Read document hyperlinks common info.
     * @param requestObj contains request parameters
     */
    public async getDocumentHyperlinks(requestObj: model.GetDocumentHyperlinksRequest): Promise<{response: http.ClientResponse, body: model.HyperlinksResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/hyperlinks"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getDocumentHyperlinks.');
        }

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "HyperlinksResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * This resource represents one of the paragraphs contained in the document.
     * @param requestObj contains request parameters
     */
    public async getDocumentParagraph(requestObj: model.GetDocumentParagraphRequest): Promise<{response: http.ClientResponse, body: model.ParagraphResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/paragraphs/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getDocumentParagraph.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling getDocumentParagraph.');
        }

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        if (requestObj.nodePath !== undefined) {
            queryParameters.NodePath = ObjectSerializer.serialize(requestObj.nodePath, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "ParagraphResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * This resource represents run of text contained in the document.
     * @param requestObj contains request parameters
     */
    public async getDocumentParagraphRun(requestObj: model.GetDocumentParagraphRunRequest): Promise<{response: http.ClientResponse, body: model.RunResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{paragraphPath}/runs/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "paragraphPath" + "}", String(requestObj.paragraphPath))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

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

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "RunResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * This resource represents font of run.
     * @param requestObj contains request parameters
     */
    public async getDocumentParagraphRunFont(requestObj: model.GetDocumentParagraphRunFontRequest): Promise<{response: http.ClientResponse, body: model.FontResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{paragraphPath}/runs/{index}/font"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "paragraphPath" + "}", String(requestObj.paragraphPath))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

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

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FontResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * This resource represents collection of runs in the paragraph.
     * @param requestObj contains request parameters
     */
    public async getDocumentParagraphRuns(requestObj: model.GetDocumentParagraphRunsRequest): Promise<{response: http.ClientResponse, body: model.RunsResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{paragraphPath}/runs"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "paragraphPath" + "}", String(requestObj.paragraphPath));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getDocumentParagraphRuns.');
        }

        // verify required parameter 'requestObj.paragraphPath' is not null or undefined
        if (requestObj.paragraphPath === null || requestObj.paragraphPath === undefined) {
            throw new Error('Required parameter "requestObj.paragraphPath" was null or undefined when calling getDocumentParagraphRuns.');
        }

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "RunsResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Return a list of paragraphs that are contained in the document.
     * @param requestObj contains request parameters
     */
    public async getDocumentParagraphs(requestObj: model.GetDocumentParagraphsRequest): Promise<{response: http.ClientResponse, body: model.ParagraphLinkCollectionResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/paragraphs"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getDocumentParagraphs.');
        }

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        if (requestObj.nodePath !== undefined) {
            queryParameters.NodePath = ObjectSerializer.serialize(requestObj.nodePath, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "ParagraphLinkCollectionResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Read document properties info.
     * @param requestObj contains request parameters
     */
    public async getDocumentProperties(requestObj: model.GetDocumentPropertiesRequest): Promise<{response: http.ClientResponse, body: model.DocumentPropertiesResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/documentProperties"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getDocumentProperties.');
        }

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "DocumentPropertiesResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Read document property info by the property name.
     * @param requestObj contains request parameters
     */
    public async getDocumentProperty(requestObj: model.GetDocumentPropertyRequest): Promise<{response: http.ClientResponse, body: model.DocumentPropertyResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/documentProperties/{propertyName}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "propertyName" + "}", String(requestObj.propertyName));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getDocumentProperty.');
        }

        // verify required parameter 'requestObj.propertyName' is not null or undefined
        if (requestObj.propertyName === null || requestObj.propertyName === undefined) {
            throw new Error('Required parameter "requestObj.propertyName" was null or undefined when calling getDocumentProperty.');
        }

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "DocumentPropertyResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Read document protection common info.
     * @param requestObj contains request parameters
     */
    public async getDocumentProtection(requestObj: model.GetDocumentProtectionRequest): Promise<{response: http.ClientResponse, body: model.ProtectionDataResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/protection"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getDocumentProtection.');
        }

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "ProtectionDataResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Read document statistics.
     * @param requestObj contains request parameters
     */
    public async getDocumentStatistics(requestObj: model.GetDocumentStatisticsRequest): Promise<{response: http.ClientResponse, body: model.StatDataResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/statistics"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getDocumentStatistics.');
        }

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        if (requestObj.includeComments !== undefined) {
            queryParameters.IncludeComments = ObjectSerializer.serialize(requestObj.includeComments, "boolean");
        }

        if (requestObj.includeFootnotes !== undefined) {
            queryParameters.IncludeFootnotes = ObjectSerializer.serialize(requestObj.includeFootnotes, "boolean");
        }

        if (requestObj.includeTextInShapes !== undefined) {
            queryParameters.IncludeTextInShapes = ObjectSerializer.serialize(requestObj.includeTextInShapes, "boolean");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "StatDataResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Read document text items.
     * @param requestObj contains request parameters
     */
    public async getDocumentTextItems(requestObj: model.GetDocumentTextItemsRequest): Promise<{response: http.ClientResponse, body: model.TextItemsResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/textItems"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getDocumentTextItems.');
        }

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "TextItemsResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Export the document into the specified format.
     * @param requestObj contains request parameters
     */
    public async getDocumentWithFormat(requestObj: model.GetDocumentWithFormatRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getDocumentWithFormat.');
        }

        // verify required parameter 'requestObj.format' is not null or undefined
        if (requestObj.format === null || requestObj.format === undefined) {
            throw new Error('Required parameter "requestObj.format" was null or undefined when calling getDocumentWithFormat.');
        }

        if (requestObj.format !== undefined) {
            queryParameters.Format = ObjectSerializer.serialize(requestObj.format, "string");
        }

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        if (requestObj.outPath !== undefined) {
            queryParameters.OutPath = ObjectSerializer.serialize(requestObj.outPath, "string");
        }

        if (requestObj.fontsLocation !== undefined) {
            queryParameters.FontsLocation = ObjectSerializer.serialize(requestObj.fontsLocation, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            encoding: null,
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /**
     * Get field from document.
     * @param requestObj contains request parameters
     */
    public async getField(requestObj: model.GetFieldRequest): Promise<{response: http.ClientResponse, body: model.FieldResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/fields/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getField.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling getField.');
        }

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        if (requestObj.nodePath !== undefined) {
            queryParameters.NodePath = ObjectSerializer.serialize(requestObj.nodePath, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FieldResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Get fields from document.
     * @param requestObj contains request parameters
     */
    public async getFields(requestObj: model.GetFieldsRequest): Promise<{response: http.ClientResponse, body: model.FieldsResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/fields"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getFields.');
        }

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        if (requestObj.nodePath !== undefined) {
            queryParameters.NodePath = ObjectSerializer.serialize(requestObj.nodePath, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FieldsResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Read footnote by index.
     * @param requestObj contains request parameters
     */
    public async getFootnote(requestObj: model.GetFootnoteRequest): Promise<{response: http.ClientResponse, body: model.FootnoteResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/footnotes/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getFootnote.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling getFootnote.');
        }

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        if (requestObj.nodePath !== undefined) {
            queryParameters.NodePath = ObjectSerializer.serialize(requestObj.nodePath, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FootnoteResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Get footnotes from document.
     * @param requestObj contains request parameters
     */
    public async getFootnotes(requestObj: model.GetFootnotesRequest): Promise<{response: http.ClientResponse, body: model.FootnotesResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/footnotes"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getFootnotes.');
        }

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        if (requestObj.nodePath !== undefined) {
            queryParameters.NodePath = ObjectSerializer.serialize(requestObj.nodePath, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FootnotesResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Returns representation of an one of the form field.
     * @param requestObj contains request parameters
     */
    public async getFormField(requestObj: model.GetFormFieldRequest): Promise<{response: http.ClientResponse, body: model.FormFieldResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/formfields/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getFormField.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling getFormField.');
        }

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        if (requestObj.nodePath !== undefined) {
            queryParameters.NodePath = ObjectSerializer.serialize(requestObj.nodePath, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FormFieldResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Get form fields from document.
     * @param requestObj contains request parameters
     */
    public async getFormFields(requestObj: model.GetFormFieldsRequest): Promise<{response: http.ClientResponse, body: model.FormFieldsResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/formfields"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getFormFields.');
        }

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        if (requestObj.nodePath !== undefined) {
            queryParameters.NodePath = ObjectSerializer.serialize(requestObj.nodePath, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FormFieldsResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Return a header/footer that is contained in the document.
     * @param requestObj contains request parameters
     */
    public async getHeaderFooter(requestObj: model.GetHeaderFooterRequest): Promise<{response: http.ClientResponse, body: model.HeaderFooterResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/headersfooters/{headerFooterIndex}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "headerFooterIndex" + "}", String(requestObj.headerFooterIndex));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getHeaderFooter.');
        }

        // verify required parameter 'requestObj.headerFooterIndex' is not null or undefined
        if (requestObj.headerFooterIndex === null || requestObj.headerFooterIndex === undefined) {
            throw new Error('Required parameter "requestObj.headerFooterIndex" was null or undefined when calling getHeaderFooter.');
        }

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        if (requestObj.filterByType !== undefined) {
            queryParameters.FilterByType = ObjectSerializer.serialize(requestObj.filterByType, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "HeaderFooterResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Return a header/footer that is contained in the document.
     * @param requestObj contains request parameters
     */
    public async getHeaderFooterOfSection(requestObj: model.GetHeaderFooterOfSectionRequest): Promise<{response: http.ClientResponse, body: model.HeaderFooterResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/sections/{sectionIndex}/headersfooters/{headerFooterIndex}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "headerFooterIndex" + "}", String(requestObj.headerFooterIndex))
            .replace("{" + "sectionIndex" + "}", String(requestObj.sectionIndex));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

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

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        if (requestObj.filterByType !== undefined) {
            queryParameters.FilterByType = ObjectSerializer.serialize(requestObj.filterByType, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "HeaderFooterResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Return a list of header/footers that are contained in the document.
     * @param requestObj contains request parameters
     */
    public async getHeaderFooters(requestObj: model.GetHeaderFootersRequest): Promise<{response: http.ClientResponse, body: model.HeaderFootersResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{sectionPath}/headersfooters"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getHeaderFooters.');
        }

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        if (requestObj.sectionPath !== undefined) {
            queryParameters.SectionPath = ObjectSerializer.serialize(requestObj.sectionPath, "string");
        }

        if (requestObj.filterByType !== undefined) {
            queryParameters.FilterByType = ObjectSerializer.serialize(requestObj.filterByType, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "HeaderFootersResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Read OfficeMath object by index.
     * @param requestObj contains request parameters
     */
    public async getOfficeMathObject(requestObj: model.GetOfficeMathObjectRequest): Promise<{response: http.ClientResponse, body: model.OfficeMathObjectResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/OfficeMathObjects/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getOfficeMathObject.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling getOfficeMathObject.');
        }

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        if (requestObj.nodePath !== undefined) {
            queryParameters.NodePath = ObjectSerializer.serialize(requestObj.nodePath, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "OfficeMathObjectResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Get OfficeMath objects from document.
     * @param requestObj contains request parameters
     */
    public async getOfficeMathObjects(requestObj: model.GetOfficeMathObjectsRequest): Promise<{response: http.ClientResponse, body: model.OfficeMathObjectsResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/OfficeMathObjects"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getOfficeMathObjects.');
        }

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        if (requestObj.nodePath !== undefined) {
            queryParameters.NodePath = ObjectSerializer.serialize(requestObj.nodePath, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "OfficeMathObjectsResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Get document section by index.
     * @param requestObj contains request parameters
     */
    public async getSection(requestObj: model.GetSectionRequest): Promise<{response: http.ClientResponse, body: model.SectionResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/sections/{sectionIndex}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sectionIndex" + "}", String(requestObj.sectionIndex));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getSection.');
        }

        // verify required parameter 'requestObj.sectionIndex' is not null or undefined
        if (requestObj.sectionIndex === null || requestObj.sectionIndex === undefined) {
            throw new Error('Required parameter "requestObj.sectionIndex" was null or undefined when calling getSection.');
        }

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "SectionResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Get page setup of section.
     * @param requestObj contains request parameters
     */
    public async getSectionPageSetup(requestObj: model.GetSectionPageSetupRequest): Promise<{response: http.ClientResponse, body: model.SectionPageSetupResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/sections/{sectionIndex}/pageSetup"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sectionIndex" + "}", String(requestObj.sectionIndex));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getSectionPageSetup.');
        }

        // verify required parameter 'requestObj.sectionIndex' is not null or undefined
        if (requestObj.sectionIndex === null || requestObj.sectionIndex === undefined) {
            throw new Error('Required parameter "requestObj.sectionIndex" was null or undefined when calling getSectionPageSetup.');
        }

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "SectionPageSetupResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Return a list of sections that are contained in the document.
     * @param requestObj contains request parameters
     */
    public async getSections(requestObj: model.GetSectionsRequest): Promise<{response: http.ClientResponse, body: model.SectionLinkCollectionResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/sections"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getSections.');
        }

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "SectionLinkCollectionResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Return a table.
     * @param requestObj contains request parameters
     */
    public async getTable(requestObj: model.GetTableRequest): Promise<{response: http.ClientResponse, body: model.TableResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/tables/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getTable.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling getTable.');
        }

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        if (requestObj.nodePath !== undefined) {
            queryParameters.NodePath = ObjectSerializer.serialize(requestObj.nodePath, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "TableResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Return a table cell.
     * @param requestObj contains request parameters
     */
    public async getTableCell(requestObj: model.GetTableCellRequest): Promise<{response: http.ClientResponse, body: model.TableCellResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{tableRowPath}/cells/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "tableRowPath" + "}", String(requestObj.tableRowPath))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

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

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "TableCellResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Return a table cell format.
     * @param requestObj contains request parameters
     */
    public async getTableCellFormat(requestObj: model.GetTableCellFormatRequest): Promise<{response: http.ClientResponse, body: model.TableCellFormatResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{tableRowPath}/cells/{index}/cellformat"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "tableRowPath" + "}", String(requestObj.tableRowPath))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

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

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "TableCellFormatResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Return a table properties.
     * @param requestObj contains request parameters
     */
    public async getTableProperties(requestObj: model.GetTablePropertiesRequest): Promise<{response: http.ClientResponse, body: model.TablePropertiesResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/tables/{index}/properties"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getTableProperties.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling getTableProperties.');
        }

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        if (requestObj.nodePath !== undefined) {
            queryParameters.NodePath = ObjectSerializer.serialize(requestObj.nodePath, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "TablePropertiesResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Return a table row.
     * @param requestObj contains request parameters
     */
    public async getTableRow(requestObj: model.GetTableRowRequest): Promise<{response: http.ClientResponse, body: model.TableRowResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{tablePath}/rows/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "tablePath" + "}", String(requestObj.tablePath))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

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

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "TableRowResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Return a table row format.
     * @param requestObj contains request parameters
     */
    public async getTableRowFormat(requestObj: model.GetTableRowFormatRequest): Promise<{response: http.ClientResponse, body: model.TableRowFormatResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{tablePath}/rows/{index}/rowformat"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "tablePath" + "}", String(requestObj.tablePath))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

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

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "TableRowFormatResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Return a list of tables that are contained in the document.
     * @param requestObj contains request parameters
     */
    public async getTables(requestObj: model.GetTablesRequest): Promise<{response: http.ClientResponse, body: model.TableLinkCollectionResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/tables"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getTables.');
        }

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        if (requestObj.nodePath !== undefined) {
            queryParameters.NodePath = ObjectSerializer.serialize(requestObj.nodePath, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "TableLinkCollectionResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Adds table to document, returns added table's data.             
     * @param requestObj contains request parameters
     */
    public async insertTable(requestObj: model.InsertTableRequest): Promise<{response: http.ClientResponse, body: model.TableResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/tables"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling insertTable.');
        }

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        if (requestObj.destFileName !== undefined) {
            queryParameters.DestFileName = ObjectSerializer.serialize(requestObj.destFileName, "string");
        }

        if (requestObj.revisionAuthor !== undefined) {
            queryParameters.RevisionAuthor = ObjectSerializer.serialize(requestObj.revisionAuthor, "string");
        }

        if (requestObj.revisionDateTime !== undefined) {
            queryParameters.RevisionDateTime = ObjectSerializer.serialize(requestObj.revisionDateTime, "string");
        }

        if (requestObj.nodePath !== undefined) {
            queryParameters.NodePath = ObjectSerializer.serialize(requestObj.nodePath, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.table, "TableInsert"),
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "TableResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Adds table cell to table, returns added cell's data.             
     * @param requestObj contains request parameters
     */
    public async insertTableCell(requestObj: model.InsertTableCellRequest): Promise<{response: http.ClientResponse, body: model.TableCellResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{tableRowPath}/cells"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "tableRowPath" + "}", String(requestObj.tableRowPath));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling insertTableCell.');
        }

        // verify required parameter 'requestObj.tableRowPath' is not null or undefined
        if (requestObj.tableRowPath === null || requestObj.tableRowPath === undefined) {
            throw new Error('Required parameter "requestObj.tableRowPath" was null or undefined when calling insertTableCell.');
        }

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        if (requestObj.destFileName !== undefined) {
            queryParameters.DestFileName = ObjectSerializer.serialize(requestObj.destFileName, "string");
        }

        if (requestObj.revisionAuthor !== undefined) {
            queryParameters.RevisionAuthor = ObjectSerializer.serialize(requestObj.revisionAuthor, "string");
        }

        if (requestObj.revisionDateTime !== undefined) {
            queryParameters.RevisionDateTime = ObjectSerializer.serialize(requestObj.revisionDateTime, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.cell, "TableCellInsert"),
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "TableCellResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Adds table row to table, returns added row's data.             
     * @param requestObj contains request parameters
     */
    public async insertTableRow(requestObj: model.InsertTableRowRequest): Promise<{response: http.ClientResponse, body: model.TableRowResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{tablePath}/rows"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "tablePath" + "}", String(requestObj.tablePath));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling insertTableRow.');
        }

        // verify required parameter 'requestObj.tablePath' is not null or undefined
        if (requestObj.tablePath === null || requestObj.tablePath === undefined) {
            throw new Error('Required parameter "requestObj.tablePath" was null or undefined when calling insertTableRow.');
        }

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        if (requestObj.destFileName !== undefined) {
            queryParameters.DestFileName = ObjectSerializer.serialize(requestObj.destFileName, "string");
        }

        if (requestObj.revisionAuthor !== undefined) {
            queryParameters.RevisionAuthor = ObjectSerializer.serialize(requestObj.revisionAuthor, "string");
        }

        if (requestObj.revisionDateTime !== undefined) {
            queryParameters.RevisionDateTime = ObjectSerializer.serialize(requestObj.revisionDateTime, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.row, "TableRowInsert"),
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "TableRowResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Append documents to original document.
     * @param requestObj contains request parameters
     */
    public async postAppendDocument(requestObj: model.PostAppendDocumentRequest): Promise<{response: http.ClientResponse, body: model.DocumentResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/appendDocument"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postAppendDocument.');
        }

        // verify required parameter 'requestObj.documentList' is not null or undefined
        if (requestObj.documentList === null || requestObj.documentList === undefined) {
            throw new Error('Required parameter "requestObj.documentList" was null or undefined when calling postAppendDocument.');
        }

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        if (requestObj.destFileName !== undefined) {
            queryParameters.DestFileName = ObjectSerializer.serialize(requestObj.destFileName, "string");
        }

        if (requestObj.revisionAuthor !== undefined) {
            queryParameters.RevisionAuthor = ObjectSerializer.serialize(requestObj.revisionAuthor, "string");
        }

        if (requestObj.revisionDateTime !== undefined) {
            queryParameters.RevisionDateTime = ObjectSerializer.serialize(requestObj.revisionDateTime, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.documentList, "DocumentEntryList"),
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "DocumentResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Change document protection.
     * @param requestObj contains request parameters
     */
    public async postChangeDocumentProtection(requestObj: model.PostChangeDocumentProtectionRequest): Promise<{response: http.ClientResponse, body: model.ProtectionDataResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/protection"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postChangeDocumentProtection.');
        }

        // verify required parameter 'requestObj.protectionRequest' is not null or undefined
        if (requestObj.protectionRequest === null || requestObj.protectionRequest === undefined) {
            throw new Error('Required parameter "requestObj.protectionRequest" was null or undefined when calling postChangeDocumentProtection.');
        }

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        if (requestObj.destFileName !== undefined) {
            queryParameters.DestFileName = ObjectSerializer.serialize(requestObj.destFileName, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.protectionRequest, "ProtectionRequest"),
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "ProtectionDataResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Updates the comment, returns updated comment's data.
     * @param requestObj contains request parameters
     */
    public async postComment(requestObj: model.PostCommentRequest): Promise<{response: http.ClientResponse, body: model.CommentResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/comments/{commentIndex}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "commentIndex" + "}", String(requestObj.commentIndex));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

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

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        if (requestObj.destFileName !== undefined) {
            queryParameters.DestFileName = ObjectSerializer.serialize(requestObj.destFileName, "string");
        }

        if (requestObj.revisionAuthor !== undefined) {
            queryParameters.RevisionAuthor = ObjectSerializer.serialize(requestObj.revisionAuthor, "string");
        }

        if (requestObj.revisionDateTime !== undefined) {
            queryParameters.RevisionDateTime = ObjectSerializer.serialize(requestObj.revisionDateTime, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.comment, "Comment"),
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CommentResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Compare document with original document.
     * @param requestObj contains request parameters
     */
    public async postCompareDocument(requestObj: model.PostCompareDocumentRequest): Promise<{response: http.ClientResponse, body: model.DocumentResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/compareDocument"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postCompareDocument.');
        }

        // verify required parameter 'requestObj.compareData' is not null or undefined
        if (requestObj.compareData === null || requestObj.compareData === undefined) {
            throw new Error('Required parameter "requestObj.compareData" was null or undefined when calling postCompareDocument.');
        }

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        if (requestObj.destFileName !== undefined) {
            queryParameters.DestFileName = ObjectSerializer.serialize(requestObj.destFileName, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.compareData, "CompareData"),
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "DocumentResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Execute document mail merge operation.
     * @param requestObj contains request parameters
     */
    public async postDocumentExecuteMailMerge(requestObj: model.PostDocumentExecuteMailMergeRequest): Promise<{response: http.ClientResponse, body: model.DocumentResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/executeMailMerge"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postDocumentExecuteMailMerge.');
        }

        // verify required parameter 'requestObj.withRegions' is not null or undefined
        if (requestObj.withRegions === null || requestObj.withRegions === undefined) {
            throw new Error('Required parameter "requestObj.withRegions" was null or undefined when calling postDocumentExecuteMailMerge.');
        }

        if (requestObj.withRegions !== undefined) {
            queryParameters.WithRegions = ObjectSerializer.serialize(requestObj.withRegions, "boolean");
        }

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        if (requestObj.mailMergeDataFile !== undefined) {
            queryParameters.MailMergeDataFile = ObjectSerializer.serialize(requestObj.mailMergeDataFile, "string");
        }

        if (requestObj.cleanup !== undefined) {
            queryParameters.Cleanup = ObjectSerializer.serialize(requestObj.cleanup, "string");
        }

        if (requestObj.useWholeParagraphAsRegion !== undefined) {
            queryParameters.UseWholeParagraphAsRegion = ObjectSerializer.serialize(requestObj.useWholeParagraphAsRegion, "boolean");
        }

        if (requestObj.destFileName !== undefined) {
            queryParameters.DestFileName = ObjectSerializer.serialize(requestObj.destFileName, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        if (requestObj.data !== undefined) {
            formParams.Data = ObjectSerializer.serialize(requestObj.data, "string");
        }

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "DocumentResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Updates font properties, returns updated font data.
     * @param requestObj contains request parameters
     */
    public async postDocumentParagraphRunFont(requestObj: model.PostDocumentParagraphRunFontRequest): Promise<{response: http.ClientResponse, body: model.FontResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{paragraphPath}/runs/{index}/font"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "paragraphPath" + "}", String(requestObj.paragraphPath))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

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

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        if (requestObj.destFileName !== undefined) {
            queryParameters.DestFileName = ObjectSerializer.serialize(requestObj.destFileName, "string");
        }

        if (requestObj.revisionAuthor !== undefined) {
            queryParameters.RevisionAuthor = ObjectSerializer.serialize(requestObj.revisionAuthor, "string");
        }

        if (requestObj.revisionDateTime !== undefined) {
            queryParameters.RevisionDateTime = ObjectSerializer.serialize(requestObj.revisionDateTime, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.fontDto, "Font"),
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FontResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Convert document to destination format with detailed settings and save result to storage.
     * @param requestObj contains request parameters
     */
    public async postDocumentSaveAs(requestObj: model.PostDocumentSaveAsRequest): Promise<{response: http.ClientResponse, body: model.SaveResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/saveAs"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postDocumentSaveAs.');
        }

        // verify required parameter 'requestObj.saveOptionsData' is not null or undefined
        if (requestObj.saveOptionsData === null || requestObj.saveOptionsData === undefined) {
            throw new Error('Required parameter "requestObj.saveOptionsData" was null or undefined when calling postDocumentSaveAs.');
        }

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        if (requestObj.destFileName !== undefined) {
            queryParameters.DestFileName = ObjectSerializer.serialize(requestObj.destFileName, "string");
        }

        if (requestObj.fontsLocation !== undefined) {
            queryParameters.FontsLocation = ObjectSerializer.serialize(requestObj.fontsLocation, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.saveOptionsData, "SaveOptionsData"),
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "SaveResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Updates drawing object, returns updated  drawing object's data.
     * @param requestObj contains request parameters
     */
    public async postDrawingObject(requestObj: model.PostDrawingObjectRequest): Promise<{response: http.ClientResponse, body: model.DrawingObjectResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/drawingObjects/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};
        const headerParams: any = {};
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

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        if (requestObj.destFileName !== undefined) {
            queryParameters.DestFileName = ObjectSerializer.serialize(requestObj.destFileName, "string");
        }

        if (requestObj.revisionAuthor !== undefined) {
            queryParameters.RevisionAuthor = ObjectSerializer.serialize(requestObj.revisionAuthor, "string");
        }

        if (requestObj.revisionDateTime !== undefined) {
            queryParameters.RevisionDateTime = ObjectSerializer.serialize(requestObj.revisionDateTime, "string");
        }

        if (requestObj.nodePath !== undefined) {
            queryParameters.NodePath = ObjectSerializer.serialize(requestObj.nodePath, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        if (requestObj.drawingObject !== undefined) {
            formParams.DrawingObject = ObjectSerializer.serialize(requestObj.drawingObject, "string");
        }

        if (requestObj.imageFile !== undefined) {
            formParams.ImageFile = requestObj.imageFile;
        }
        useFormData = true;

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "DrawingObjectResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Populate document template with data.
     * @param requestObj contains request parameters
     */
    public async postExecuteTemplate(requestObj: model.PostExecuteTemplateRequest): Promise<{response: http.ClientResponse, body: model.DocumentResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/executeTemplate"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postExecuteTemplate.');
        }

        // verify required parameter 'requestObj.data' is not null or undefined
        if (requestObj.data === null || requestObj.data === undefined) {
            throw new Error('Required parameter "requestObj.data" was null or undefined when calling postExecuteTemplate.');
        }

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        if (requestObj.cleanup !== undefined) {
            queryParameters.Cleanup = ObjectSerializer.serialize(requestObj.cleanup, "string");
        }

        if (requestObj.useWholeParagraphAsRegion !== undefined) {
            queryParameters.UseWholeParagraphAsRegion = ObjectSerializer.serialize(requestObj.useWholeParagraphAsRegion, "boolean");
        }

        if (requestObj.withRegions !== undefined) {
            queryParameters.WithRegions = ObjectSerializer.serialize(requestObj.withRegions, "boolean");
        }

        if (requestObj.destFileName !== undefined) {
            queryParameters.DestFileName = ObjectSerializer.serialize(requestObj.destFileName, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        if (requestObj.data !== undefined) {
            formParams.Data = ObjectSerializer.serialize(requestObj.data, "string");
        }

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "DocumentResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Updates field's properties, returns updated field's data.
     * @param requestObj contains request parameters
     */
    public async postField(requestObj: model.PostFieldRequest): Promise<{response: http.ClientResponse, body: model.FieldResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/fields/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

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

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        if (requestObj.destFileName !== undefined) {
            queryParameters.DestFileName = ObjectSerializer.serialize(requestObj.destFileName, "string");
        }

        if (requestObj.revisionAuthor !== undefined) {
            queryParameters.RevisionAuthor = ObjectSerializer.serialize(requestObj.revisionAuthor, "string");
        }

        if (requestObj.revisionDateTime !== undefined) {
            queryParameters.RevisionDateTime = ObjectSerializer.serialize(requestObj.revisionDateTime, "string");
        }

        if (requestObj.nodePath !== undefined) {
            queryParameters.NodePath = ObjectSerializer.serialize(requestObj.nodePath, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.field, "Field"),
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FieldResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Updates footnote's properties, returns updated run's data.
     * @param requestObj contains request parameters
     */
    public async postFootnote(requestObj: model.PostFootnoteRequest): Promise<{response: http.ClientResponse, body: model.FootnoteResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/footnotes/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

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

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        if (requestObj.destFileName !== undefined) {
            queryParameters.DestFileName = ObjectSerializer.serialize(requestObj.destFileName, "string");
        }

        if (requestObj.revisionAuthor !== undefined) {
            queryParameters.RevisionAuthor = ObjectSerializer.serialize(requestObj.revisionAuthor, "string");
        }

        if (requestObj.revisionDateTime !== undefined) {
            queryParameters.RevisionDateTime = ObjectSerializer.serialize(requestObj.revisionDateTime, "string");
        }

        if (requestObj.nodePath !== undefined) {
            queryParameters.NodePath = ObjectSerializer.serialize(requestObj.nodePath, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.footnoteDto, "Footnote"),
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FootnoteResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Updates properties of form field, returns updated form field.
     * @param requestObj contains request parameters
     */
    public async postFormField(requestObj: model.PostFormFieldRequest): Promise<{response: http.ClientResponse, body: model.FormFieldResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/formfields/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

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

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        if (requestObj.destFileName !== undefined) {
            queryParameters.DestFileName = ObjectSerializer.serialize(requestObj.destFileName, "string");
        }

        if (requestObj.revisionAuthor !== undefined) {
            queryParameters.RevisionAuthor = ObjectSerializer.serialize(requestObj.revisionAuthor, "string");
        }

        if (requestObj.revisionDateTime !== undefined) {
            queryParameters.RevisionDateTime = ObjectSerializer.serialize(requestObj.revisionDateTime, "string");
        }

        if (requestObj.nodePath !== undefined) {
            queryParameters.NodePath = ObjectSerializer.serialize(requestObj.nodePath, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.formField, "FormField"),
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FormFieldResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Insert document watermark image.
     * @param requestObj contains request parameters
     */
    public async postInsertDocumentWatermarkImage(requestObj: model.PostInsertDocumentWatermarkImageRequest): Promise<{response: http.ClientResponse, body: model.DocumentResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/watermark/insertImage"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postInsertDocumentWatermarkImage.');
        }

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        if (requestObj.destFileName !== undefined) {
            queryParameters.DestFileName = ObjectSerializer.serialize(requestObj.destFileName, "string");
        }

        if (requestObj.revisionAuthor !== undefined) {
            queryParameters.RevisionAuthor = ObjectSerializer.serialize(requestObj.revisionAuthor, "string");
        }

        if (requestObj.revisionDateTime !== undefined) {
            queryParameters.RevisionDateTime = ObjectSerializer.serialize(requestObj.revisionDateTime, "string");
        }

        if (requestObj.rotationAngle !== undefined) {
            queryParameters.RotationAngle = ObjectSerializer.serialize(requestObj.rotationAngle, "number");
        }

        if (requestObj.image !== undefined) {
            queryParameters.Image = ObjectSerializer.serialize(requestObj.image, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        if (requestObj.imageFile !== undefined) {
            formParams.ImageFile = requestObj.imageFile;
        }
        useFormData = true;

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "DocumentResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Insert document watermark text.
     * @param requestObj contains request parameters
     */
    public async postInsertDocumentWatermarkText(requestObj: model.PostInsertDocumentWatermarkTextRequest): Promise<{response: http.ClientResponse, body: model.DocumentResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/watermark/insertText"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postInsertDocumentWatermarkText.');
        }

        // verify required parameter 'requestObj.watermarkText' is not null or undefined
        if (requestObj.watermarkText === null || requestObj.watermarkText === undefined) {
            throw new Error('Required parameter "requestObj.watermarkText" was null or undefined when calling postInsertDocumentWatermarkText.');
        }

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        if (requestObj.destFileName !== undefined) {
            queryParameters.DestFileName = ObjectSerializer.serialize(requestObj.destFileName, "string");
        }

        if (requestObj.revisionAuthor !== undefined) {
            queryParameters.RevisionAuthor = ObjectSerializer.serialize(requestObj.revisionAuthor, "string");
        }

        if (requestObj.revisionDateTime !== undefined) {
            queryParameters.RevisionDateTime = ObjectSerializer.serialize(requestObj.revisionDateTime, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.watermarkText, "WatermarkText"),
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "DocumentResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Insert document page numbers.
     * @param requestObj contains request parameters
     */
    public async postInsertPageNumbers(requestObj: model.PostInsertPageNumbersRequest): Promise<{response: http.ClientResponse, body: model.DocumentResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/insertPageNumbers"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postInsertPageNumbers.');
        }

        // verify required parameter 'requestObj.pageNumber' is not null or undefined
        if (requestObj.pageNumber === null || requestObj.pageNumber === undefined) {
            throw new Error('Required parameter "requestObj.pageNumber" was null or undefined when calling postInsertPageNumbers.');
        }

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        if (requestObj.destFileName !== undefined) {
            queryParameters.DestFileName = ObjectSerializer.serialize(requestObj.destFileName, "string");
        }

        if (requestObj.revisionAuthor !== undefined) {
            queryParameters.RevisionAuthor = ObjectSerializer.serialize(requestObj.revisionAuthor, "string");
        }

        if (requestObj.revisionDateTime !== undefined) {
            queryParameters.RevisionDateTime = ObjectSerializer.serialize(requestObj.revisionDateTime, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.pageNumber, "PageNumber"),
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "DocumentResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Loads new document from web into the file with any supported format of data.
     * @param requestObj contains request parameters
     */
    public async postLoadWebDocument(requestObj: model.PostLoadWebDocumentRequest): Promise<{response: http.ClientResponse, body: model.SaveResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/loadWebDocument";
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.data' is not null or undefined
        if (requestObj.data === null || requestObj.data === undefined) {
            throw new Error('Required parameter "requestObj.data" was null or undefined when calling postLoadWebDocument.');
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.data, "LoadWebDocumentData"),
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "SaveResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Replace document text.
     * @param requestObj contains request parameters
     */
    public async postReplaceText(requestObj: model.PostReplaceTextRequest): Promise<{response: http.ClientResponse, body: model.ReplaceTextResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/replaceText"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postReplaceText.');
        }

        // verify required parameter 'requestObj.replaceText' is not null or undefined
        if (requestObj.replaceText === null || requestObj.replaceText === undefined) {
            throw new Error('Required parameter "requestObj.replaceText" was null or undefined when calling postReplaceText.');
        }

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        if (requestObj.destFileName !== undefined) {
            queryParameters.DestFileName = ObjectSerializer.serialize(requestObj.destFileName, "string");
        }

        if (requestObj.revisionAuthor !== undefined) {
            queryParameters.RevisionAuthor = ObjectSerializer.serialize(requestObj.revisionAuthor, "string");
        }

        if (requestObj.revisionDateTime !== undefined) {
            queryParameters.RevisionDateTime = ObjectSerializer.serialize(requestObj.revisionDateTime, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.replaceText, "ReplaceTextRequest"),
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "ReplaceTextResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Updates run's properties, returns updated run's data.
     * @param requestObj contains request parameters
     */
    public async postRun(requestObj: model.PostRunRequest): Promise<{response: http.ClientResponse, body: model.RunResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{paragraphPath}/runs/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "paragraphPath" + "}", String(requestObj.paragraphPath))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

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

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        if (requestObj.destFileName !== undefined) {
            queryParameters.DestFileName = ObjectSerializer.serialize(requestObj.destFileName, "string");
        }

        if (requestObj.revisionAuthor !== undefined) {
            queryParameters.RevisionAuthor = ObjectSerializer.serialize(requestObj.revisionAuthor, "string");
        }

        if (requestObj.revisionDateTime !== undefined) {
            queryParameters.RevisionDateTime = ObjectSerializer.serialize(requestObj.revisionDateTime, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.run, "Run"),
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "RunResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Split document.
     * @param requestObj contains request parameters
     */
    public async postSplitDocument(requestObj: model.PostSplitDocumentRequest): Promise<{response: http.ClientResponse, body: model.SplitDocumentResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/split"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postSplitDocument.');
        }

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        if (requestObj.destFileName !== undefined) {
            queryParameters.DestFileName = ObjectSerializer.serialize(requestObj.destFileName, "string");
        }

        if (requestObj.format !== undefined) {
            queryParameters.Format = ObjectSerializer.serialize(requestObj.format, "string");
        }

        if (requestObj.from !== undefined) {
            queryParameters.From = ObjectSerializer.serialize(requestObj.from, "number");
        }

        if (requestObj.to !== undefined) {
            queryParameters.To = ObjectSerializer.serialize(requestObj.to, "number");
        }

        if (requestObj.zipOutput !== undefined) {
            queryParameters.ZipOutput = ObjectSerializer.serialize(requestObj.zipOutput, "boolean");
        }

        if (requestObj.fontsLocation !== undefined) {
            queryParameters.FontsLocation = ObjectSerializer.serialize(requestObj.fontsLocation, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "SplitDocumentResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Update document bookmark.
     * @param requestObj contains request parameters
     */
    public async postUpdateDocumentBookmark(requestObj: model.PostUpdateDocumentBookmarkRequest): Promise<{response: http.ClientResponse, body: model.BookmarkResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/bookmarks/{bookmarkName}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "bookmarkName" + "}", String(requestObj.bookmarkName));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

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

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        if (requestObj.destFileName !== undefined) {
            queryParameters.DestFileName = ObjectSerializer.serialize(requestObj.destFileName, "string");
        }

        if (requestObj.revisionAuthor !== undefined) {
            queryParameters.RevisionAuthor = ObjectSerializer.serialize(requestObj.revisionAuthor, "string");
        }

        if (requestObj.revisionDateTime !== undefined) {
            queryParameters.RevisionDateTime = ObjectSerializer.serialize(requestObj.revisionDateTime, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.bookmarkData, "BookmarkData"),
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "BookmarkResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Update (reevaluate) fields in document.
     * @param requestObj contains request parameters
     */
    public async postUpdateDocumentFields(requestObj: model.PostUpdateDocumentFieldsRequest): Promise<{response: http.ClientResponse, body: model.DocumentResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/updateFields"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postUpdateDocumentFields.');
        }

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        if (requestObj.destFileName !== undefined) {
            queryParameters.DestFileName = ObjectSerializer.serialize(requestObj.destFileName, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "DocumentResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Adds comment to document, returns inserted comment's data.
     * @param requestObj contains request parameters
     */
    public async putComment(requestObj: model.PutCommentRequest): Promise<{response: http.ClientResponse, body: model.CommentResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/comments"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling putComment.');
        }

        // verify required parameter 'requestObj.comment' is not null or undefined
        if (requestObj.comment === null || requestObj.comment === undefined) {
            throw new Error('Required parameter "requestObj.comment" was null or undefined when calling putComment.');
        }

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        if (requestObj.destFileName !== undefined) {
            queryParameters.DestFileName = ObjectSerializer.serialize(requestObj.destFileName, "string");
        }

        if (requestObj.revisionAuthor !== undefined) {
            queryParameters.RevisionAuthor = ObjectSerializer.serialize(requestObj.revisionAuthor, "string");
        }

        if (requestObj.revisionDateTime !== undefined) {
            queryParameters.RevisionDateTime = ObjectSerializer.serialize(requestObj.revisionDateTime, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.comment, "Comment"),
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CommentResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Convert document from request content to format specified.
     * @param requestObj contains request parameters
     */
    public async putConvertDocument(requestObj: model.PutConvertDocumentRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/convert";
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.document' is not null or undefined
        if (requestObj.document === null || requestObj.document === undefined) {
            throw new Error('Required parameter "requestObj.document" was null or undefined when calling putConvertDocument.');
        }

        // verify required parameter 'requestObj.format' is not null or undefined
        if (requestObj.format === null || requestObj.format === undefined) {
            throw new Error('Required parameter "requestObj.format" was null or undefined when calling putConvertDocument.');
        }

        if (requestObj.format !== undefined) {
            queryParameters.Format = ObjectSerializer.serialize(requestObj.format, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.outPath !== undefined) {
            queryParameters.OutPath = ObjectSerializer.serialize(requestObj.outPath, "string");
        }

        if (requestObj.fontsLocation !== undefined) {
            queryParameters.FontsLocation = ObjectSerializer.serialize(requestObj.fontsLocation, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        if (requestObj.document !== undefined) {
            formParams.Document = requestObj.document;
        }
        useFormData = true;

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            encoding: null,
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /**
     * Creates new document. Document is created with format which is recognized from file extensions.  Supported extentions: \".doc\", \".docx\", \".docm\", \".dot\", \".dotm\", \".dotx\", \".flatopc\", \".fopc\", \".flatopc_macro\", \".fopc_macro\", \".flatopc_template\", \".fopc_template\", \".flatopc_template_macro\", \".fopc_template_macro\", \".wordml\", \".wml\", \".rtf\"
     * @param requestObj contains request parameters
     */
    public async putCreateDocument(requestObj: model.PutCreateDocumentRequest): Promise<{response: http.ClientResponse, body: model.DocumentResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/create";
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.fileName !== undefined) {
            queryParameters.FileName = ObjectSerializer.serialize(requestObj.fileName, "string");
        }

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "DocumentResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Read document field names.
     * @param requestObj contains request parameters
     */
    public async putDocumentFieldNames(requestObj: model.PutDocumentFieldNamesRequest): Promise<{response: http.ClientResponse, body: model.FieldNamesResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/mailMergeFieldNames";
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.template' is not null or undefined
        if (requestObj.template === null || requestObj.template === undefined) {
            throw new Error('Required parameter "requestObj.template" was null or undefined when calling putDocumentFieldNames.');
        }

        if (requestObj.useNonMergeFields !== undefined) {
            queryParameters.UseNonMergeFields = ObjectSerializer.serialize(requestObj.useNonMergeFields, "boolean");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        if (requestObj.template !== undefined) {
            formParams.Template = requestObj.template;
        }
        useFormData = true;

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FieldNamesResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Convert document to tiff with detailed settings and save result to storage.
     * @param requestObj contains request parameters
     */
    public async putDocumentSaveAsTiff(requestObj: model.PutDocumentSaveAsTiffRequest): Promise<{response: http.ClientResponse, body: model.SaveResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/saveAs/tiff"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling putDocumentSaveAsTiff.');
        }

        // verify required parameter 'requestObj.saveOptions' is not null or undefined
        if (requestObj.saveOptions === null || requestObj.saveOptions === undefined) {
            throw new Error('Required parameter "requestObj.saveOptions" was null or undefined when calling putDocumentSaveAsTiff.');
        }

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        if (requestObj.destFileName !== undefined) {
            queryParameters.DestFileName = ObjectSerializer.serialize(requestObj.destFileName, "string");
        }

        if (requestObj.resultFile !== undefined) {
            queryParameters.ResultFile = ObjectSerializer.serialize(requestObj.resultFile, "string");
        }

        if (requestObj.useAntiAliasing !== undefined) {
            queryParameters.UseAntiAliasing = ObjectSerializer.serialize(requestObj.useAntiAliasing, "boolean");
        }

        if (requestObj.useHighQualityRendering !== undefined) {
            queryParameters.UseHighQualityRendering = ObjectSerializer.serialize(requestObj.useHighQualityRendering, "boolean");
        }

        if (requestObj.imageBrightness !== undefined) {
            queryParameters.ImageBrightness = ObjectSerializer.serialize(requestObj.imageBrightness, "number");
        }

        if (requestObj.imageColorMode !== undefined) {
            queryParameters.ImageColorMode = ObjectSerializer.serialize(requestObj.imageColorMode, "string");
        }

        if (requestObj.imageContrast !== undefined) {
            queryParameters.ImageContrast = ObjectSerializer.serialize(requestObj.imageContrast, "number");
        }

        if (requestObj.numeralFormat !== undefined) {
            queryParameters.NumeralFormat = ObjectSerializer.serialize(requestObj.numeralFormat, "string");
        }

        if (requestObj.pageCount !== undefined) {
            queryParameters.PageCount = ObjectSerializer.serialize(requestObj.pageCount, "number");
        }

        if (requestObj.pageIndex !== undefined) {
            queryParameters.PageIndex = ObjectSerializer.serialize(requestObj.pageIndex, "number");
        }

        if (requestObj.paperColor !== undefined) {
            queryParameters.PaperColor = ObjectSerializer.serialize(requestObj.paperColor, "string");
        }

        if (requestObj.pixelFormat !== undefined) {
            queryParameters.PixelFormat = ObjectSerializer.serialize(requestObj.pixelFormat, "string");
        }

        if (requestObj.resolution !== undefined) {
            queryParameters.Resolution = ObjectSerializer.serialize(requestObj.resolution, "number");
        }

        if (requestObj.scale !== undefined) {
            queryParameters.Scale = ObjectSerializer.serialize(requestObj.scale, "number");
        }

        if (requestObj.tiffCompression !== undefined) {
            queryParameters.TiffCompression = ObjectSerializer.serialize(requestObj.tiffCompression, "string");
        }

        if (requestObj.dmlRenderingMode !== undefined) {
            queryParameters.DmlRenderingMode = ObjectSerializer.serialize(requestObj.dmlRenderingMode, "string");
        }

        if (requestObj.dmlEffectsRenderingMode !== undefined) {
            queryParameters.DmlEffectsRenderingMode = ObjectSerializer.serialize(requestObj.dmlEffectsRenderingMode, "string");
        }

        if (requestObj.tiffBinarizationMethod !== undefined) {
            queryParameters.TiffBinarizationMethod = ObjectSerializer.serialize(requestObj.tiffBinarizationMethod, "string");
        }

        if (requestObj.zipOutput !== undefined) {
            queryParameters.ZipOutput = ObjectSerializer.serialize(requestObj.zipOutput, "boolean");
        }

        if (requestObj.fontsLocation !== undefined) {
            queryParameters.FontsLocation = ObjectSerializer.serialize(requestObj.fontsLocation, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.saveOptions, "TiffSaveOptionsData"),
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "SaveResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Adds  drawing object to document, returns added  drawing object's data.
     * @param requestObj contains request parameters
     */
    public async putDrawingObject(requestObj: model.PutDrawingObjectRequest): Promise<{response: http.ClientResponse, body: model.DrawingObjectResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/drawingObjects"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};
        const headerParams: any = {};
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

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        if (requestObj.destFileName !== undefined) {
            queryParameters.DestFileName = ObjectSerializer.serialize(requestObj.destFileName, "string");
        }

        if (requestObj.revisionAuthor !== undefined) {
            queryParameters.RevisionAuthor = ObjectSerializer.serialize(requestObj.revisionAuthor, "string");
        }

        if (requestObj.revisionDateTime !== undefined) {
            queryParameters.RevisionDateTime = ObjectSerializer.serialize(requestObj.revisionDateTime, "string");
        }

        if (requestObj.nodePath !== undefined) {
            queryParameters.NodePath = ObjectSerializer.serialize(requestObj.nodePath, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        if (requestObj.drawingObject !== undefined) {
            formParams.DrawingObject = ObjectSerializer.serialize(requestObj.drawingObject, "string");
        }

        if (requestObj.imageFile !== undefined) {
            formParams.ImageFile = requestObj.imageFile;
        }
        useFormData = true;

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "DrawingObjectResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Execute document mail merge online.
     * @param requestObj contains request parameters
     */
    public async putExecuteMailMergeOnline(requestObj: model.PutExecuteMailMergeOnlineRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/executeMailMerge";
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.template' is not null or undefined
        if (requestObj.template === null || requestObj.template === undefined) {
            throw new Error('Required parameter "requestObj.template" was null or undefined when calling putExecuteMailMergeOnline.');
        }

        // verify required parameter 'requestObj.data' is not null or undefined
        if (requestObj.data === null || requestObj.data === undefined) {
            throw new Error('Required parameter "requestObj.data" was null or undefined when calling putExecuteMailMergeOnline.');
        }

        if (requestObj.withRegions !== undefined) {
            queryParameters.WithRegions = ObjectSerializer.serialize(requestObj.withRegions, "boolean");
        }

        if (requestObj.cleanup !== undefined) {
            queryParameters.Cleanup = ObjectSerializer.serialize(requestObj.cleanup, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        if (requestObj.template !== undefined) {
            formParams.Template = requestObj.template;
        }
        useFormData = true;

        if (requestObj.data !== undefined) {
            formParams.Data = requestObj.data;
        }
        useFormData = true;

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            encoding: null,
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /**
     * Populate document template with data online.
     * @param requestObj contains request parameters
     */
    public async putExecuteTemplateOnline(requestObj: model.PutExecuteTemplateOnlineRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/executeTemplate";
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.template' is not null or undefined
        if (requestObj.template === null || requestObj.template === undefined) {
            throw new Error('Required parameter "requestObj.template" was null or undefined when calling putExecuteTemplateOnline.');
        }

        // verify required parameter 'requestObj.data' is not null or undefined
        if (requestObj.data === null || requestObj.data === undefined) {
            throw new Error('Required parameter "requestObj.data" was null or undefined when calling putExecuteTemplateOnline.');
        }

        if (requestObj.cleanup !== undefined) {
            queryParameters.Cleanup = ObjectSerializer.serialize(requestObj.cleanup, "string");
        }

        if (requestObj.useWholeParagraphAsRegion !== undefined) {
            queryParameters.UseWholeParagraphAsRegion = ObjectSerializer.serialize(requestObj.useWholeParagraphAsRegion, "boolean");
        }

        if (requestObj.withRegions !== undefined) {
            queryParameters.WithRegions = ObjectSerializer.serialize(requestObj.withRegions, "boolean");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        if (requestObj.template !== undefined) {
            formParams.Template = requestObj.template;
        }
        useFormData = true;

        if (requestObj.data !== undefined) {
            formParams.Data = requestObj.data;
        }
        useFormData = true;

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            encoding: null,
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /**
     * Adds field to document, returns inserted field's data.
     * @param requestObj contains request parameters
     */
    public async putField(requestObj: model.PutFieldRequest): Promise<{response: http.ClientResponse, body: model.FieldResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/fields"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling putField.');
        }

        // verify required parameter 'requestObj.field' is not null or undefined
        if (requestObj.field === null || requestObj.field === undefined) {
            throw new Error('Required parameter "requestObj.field" was null or undefined when calling putField.');
        }

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        if (requestObj.destFileName !== undefined) {
            queryParameters.DestFileName = ObjectSerializer.serialize(requestObj.destFileName, "string");
        }

        if (requestObj.revisionAuthor !== undefined) {
            queryParameters.RevisionAuthor = ObjectSerializer.serialize(requestObj.revisionAuthor, "string");
        }

        if (requestObj.revisionDateTime !== undefined) {
            queryParameters.RevisionDateTime = ObjectSerializer.serialize(requestObj.revisionDateTime, "string");
        }

        if (requestObj.nodePath !== undefined) {
            queryParameters.NodePath = ObjectSerializer.serialize(requestObj.nodePath, "string");
        }

        if (requestObj.insertBeforeNode !== undefined) {
            queryParameters.InsertBeforeNode = ObjectSerializer.serialize(requestObj.insertBeforeNode, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.field, "Field"),
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FieldResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Adds footnote to document, returns added footnote's data.
     * @param requestObj contains request parameters
     */
    public async putFootnote(requestObj: model.PutFootnoteRequest): Promise<{response: http.ClientResponse, body: model.FootnoteResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/footnotes"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling putFootnote.');
        }

        // verify required parameter 'requestObj.footnoteDto' is not null or undefined
        if (requestObj.footnoteDto === null || requestObj.footnoteDto === undefined) {
            throw new Error('Required parameter "requestObj.footnoteDto" was null or undefined when calling putFootnote.');
        }

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        if (requestObj.destFileName !== undefined) {
            queryParameters.DestFileName = ObjectSerializer.serialize(requestObj.destFileName, "string");
        }

        if (requestObj.revisionAuthor !== undefined) {
            queryParameters.RevisionAuthor = ObjectSerializer.serialize(requestObj.revisionAuthor, "string");
        }

        if (requestObj.revisionDateTime !== undefined) {
            queryParameters.RevisionDateTime = ObjectSerializer.serialize(requestObj.revisionDateTime, "string");
        }

        if (requestObj.nodePath !== undefined) {
            queryParameters.NodePath = ObjectSerializer.serialize(requestObj.nodePath, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.footnoteDto, "Footnote"),
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FootnoteResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Adds form field to paragraph, returns added form field's data.
     * @param requestObj contains request parameters
     */
    public async putFormField(requestObj: model.PutFormFieldRequest): Promise<{response: http.ClientResponse, body: model.FormFieldResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/formfields"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling putFormField.');
        }

        // verify required parameter 'requestObj.formField' is not null or undefined
        if (requestObj.formField === null || requestObj.formField === undefined) {
            throw new Error('Required parameter "requestObj.formField" was null or undefined when calling putFormField.');
        }

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        if (requestObj.destFileName !== undefined) {
            queryParameters.DestFileName = ObjectSerializer.serialize(requestObj.destFileName, "string");
        }

        if (requestObj.revisionAuthor !== undefined) {
            queryParameters.RevisionAuthor = ObjectSerializer.serialize(requestObj.revisionAuthor, "string");
        }

        if (requestObj.revisionDateTime !== undefined) {
            queryParameters.RevisionDateTime = ObjectSerializer.serialize(requestObj.revisionDateTime, "string");
        }

        if (requestObj.nodePath !== undefined) {
            queryParameters.NodePath = ObjectSerializer.serialize(requestObj.nodePath, "string");
        }

        if (requestObj.insertBeforeNode !== undefined) {
            queryParameters.InsertBeforeNode = ObjectSerializer.serialize(requestObj.insertBeforeNode, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.formField, "FormField"),
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FormFieldResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Insert to document header or footer.
     * @param requestObj contains request parameters
     */
    public async putHeaderFooter(requestObj: model.PutHeaderFooterRequest): Promise<{response: http.ClientResponse, body: model.HeaderFooterResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{sectionPath}/headersfooters"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling putHeaderFooter.');
        }

        // verify required parameter 'requestObj.headerFooterType' is not null or undefined
        if (requestObj.headerFooterType === null || requestObj.headerFooterType === undefined) {
            throw new Error('Required parameter "requestObj.headerFooterType" was null or undefined when calling putHeaderFooter.');
        }

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        if (requestObj.destFileName !== undefined) {
            queryParameters.DestFileName = ObjectSerializer.serialize(requestObj.destFileName, "string");
        }

        if (requestObj.revisionAuthor !== undefined) {
            queryParameters.RevisionAuthor = ObjectSerializer.serialize(requestObj.revisionAuthor, "string");
        }

        if (requestObj.revisionDateTime !== undefined) {
            queryParameters.RevisionDateTime = ObjectSerializer.serialize(requestObj.revisionDateTime, "string");
        }

        if (requestObj.sectionPath !== undefined) {
            queryParameters.SectionPath = ObjectSerializer.serialize(requestObj.sectionPath, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.headerFooterType, "string"),
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "HeaderFooterResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Adds paragraph to document, returns added paragraph's data.
     * @param requestObj contains request parameters
     */
    public async putParagraph(requestObj: model.PutParagraphRequest): Promise<{response: http.ClientResponse, body: model.ParagraphResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/paragraphs"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling putParagraph.');
        }

        // verify required parameter 'requestObj.paragraph' is not null or undefined
        if (requestObj.paragraph === null || requestObj.paragraph === undefined) {
            throw new Error('Required parameter "requestObj.paragraph" was null or undefined when calling putParagraph.');
        }

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        if (requestObj.destFileName !== undefined) {
            queryParameters.DestFileName = ObjectSerializer.serialize(requestObj.destFileName, "string");
        }

        if (requestObj.revisionAuthor !== undefined) {
            queryParameters.RevisionAuthor = ObjectSerializer.serialize(requestObj.revisionAuthor, "string");
        }

        if (requestObj.revisionDateTime !== undefined) {
            queryParameters.RevisionDateTime = ObjectSerializer.serialize(requestObj.revisionDateTime, "string");
        }

        if (requestObj.nodePath !== undefined) {
            queryParameters.NodePath = ObjectSerializer.serialize(requestObj.nodePath, "string");
        }

        if (requestObj.insertBeforeNode !== undefined) {
            queryParameters.InsertBeforeNode = ObjectSerializer.serialize(requestObj.insertBeforeNode, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.paragraph, "ParagraphInsert"),
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "ParagraphResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Protect document.
     * @param requestObj contains request parameters
     */
    public async putProtectDocument(requestObj: model.PutProtectDocumentRequest): Promise<{response: http.ClientResponse, body: model.ProtectionDataResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/protection"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling putProtectDocument.');
        }

        // verify required parameter 'requestObj.protectionRequest' is not null or undefined
        if (requestObj.protectionRequest === null || requestObj.protectionRequest === undefined) {
            throw new Error('Required parameter "requestObj.protectionRequest" was null or undefined when calling putProtectDocument.');
        }

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        if (requestObj.destFileName !== undefined) {
            queryParameters.DestFileName = ObjectSerializer.serialize(requestObj.destFileName, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.protectionRequest, "ProtectionRequest"),
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "ProtectionDataResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Adds run to document, returns added paragraph's data.
     * @param requestObj contains request parameters
     */
    public async putRun(requestObj: model.PutRunRequest): Promise<{response: http.ClientResponse, body: model.RunResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{paragraphPath}/runs"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "paragraphPath" + "}", String(requestObj.paragraphPath));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

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

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        if (requestObj.destFileName !== undefined) {
            queryParameters.DestFileName = ObjectSerializer.serialize(requestObj.destFileName, "string");
        }

        if (requestObj.revisionAuthor !== undefined) {
            queryParameters.RevisionAuthor = ObjectSerializer.serialize(requestObj.revisionAuthor, "string");
        }

        if (requestObj.revisionDateTime !== undefined) {
            queryParameters.RevisionDateTime = ObjectSerializer.serialize(requestObj.revisionDateTime, "string");
        }

        if (requestObj.insertBeforeNode !== undefined) {
            queryParameters.InsertBeforeNode = ObjectSerializer.serialize(requestObj.insertBeforeNode, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.run, "Run"),
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "RunResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Reject all revisions in document
     * @param requestObj contains request parameters
     */
    public async rejectAllRevisions(requestObj: model.RejectAllRevisionsRequest): Promise<{response: http.ClientResponse, body: model.RevisionsModificationResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/revisions/rejectAll"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling rejectAllRevisions.');
        }

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        if (requestObj.destFileName !== undefined) {
            queryParameters.DestFileName = ObjectSerializer.serialize(requestObj.destFileName, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "RevisionsModificationResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Renders drawing object to specified format.
     * @param requestObj contains request parameters
     */
    public async renderDrawingObject(requestObj: model.RenderDrawingObjectRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/drawingObjects/{index}/render"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

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

        if (requestObj.format !== undefined) {
            queryParameters.Format = ObjectSerializer.serialize(requestObj.format, "string");
        }

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        if (requestObj.nodePath !== undefined) {
            queryParameters.NodePath = ObjectSerializer.serialize(requestObj.nodePath, "string");
        }

        if (requestObj.fontsLocation !== undefined) {
            queryParameters.FontsLocation = ObjectSerializer.serialize(requestObj.fontsLocation, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            encoding: null,
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /**
     * Renders math object to specified format.
     * @param requestObj contains request parameters
     */
    public async renderMathObject(requestObj: model.RenderMathObjectRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/OfficeMathObjects/{index}/render"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

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

        if (requestObj.format !== undefined) {
            queryParameters.Format = ObjectSerializer.serialize(requestObj.format, "string");
        }

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        if (requestObj.nodePath !== undefined) {
            queryParameters.NodePath = ObjectSerializer.serialize(requestObj.nodePath, "string");
        }

        if (requestObj.fontsLocation !== undefined) {
            queryParameters.FontsLocation = ObjectSerializer.serialize(requestObj.fontsLocation, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            encoding: null,
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /**
     * Renders page to specified format.
     * @param requestObj contains request parameters
     */
    public async renderPage(requestObj: model.RenderPageRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/pages/{pageIndex}/render"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "pageIndex" + "}", String(requestObj.pageIndex));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

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

        if (requestObj.format !== undefined) {
            queryParameters.Format = ObjectSerializer.serialize(requestObj.format, "string");
        }

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        if (requestObj.fontsLocation !== undefined) {
            queryParameters.FontsLocation = ObjectSerializer.serialize(requestObj.fontsLocation, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            encoding: null,
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /**
     * Renders paragraph to specified format.
     * @param requestObj contains request parameters
     */
    public async renderParagraph(requestObj: model.RenderParagraphRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/paragraphs/{index}/render"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

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

        if (requestObj.format !== undefined) {
            queryParameters.Format = ObjectSerializer.serialize(requestObj.format, "string");
        }

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        if (requestObj.nodePath !== undefined) {
            queryParameters.NodePath = ObjectSerializer.serialize(requestObj.nodePath, "string");
        }

        if (requestObj.fontsLocation !== undefined) {
            queryParameters.FontsLocation = ObjectSerializer.serialize(requestObj.fontsLocation, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            encoding: null,
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /**
     * Renders table to specified format.
     * @param requestObj contains request parameters
     */
    public async renderTable(requestObj: model.RenderTableRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/tables/{index}/render"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

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

        if (requestObj.format !== undefined) {
            queryParameters.Format = ObjectSerializer.serialize(requestObj.format, "string");
        }

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        if (requestObj.nodePath !== undefined) {
            queryParameters.NodePath = ObjectSerializer.serialize(requestObj.nodePath, "string");
        }

        if (requestObj.fontsLocation !== undefined) {
            queryParameters.FontsLocation = ObjectSerializer.serialize(requestObj.fontsLocation, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            encoding: null,
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /**
     * Resets font's cache.
     * @param requestObj contains request parameters
     */
    public async resetCache(requestObj: model.ResetCacheRequest): Promise<{response: http.ClientResponse, body: model.AsposeResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/fonts/cache";
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "AsposeResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Search text in document.
     * @param requestObj contains request parameters
     */
    public async search(requestObj: model.SearchRequest): Promise<{response: http.ClientResponse, body: model.SearchResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/search"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling search.');
        }

        // verify required parameter 'requestObj.pattern' is not null or undefined
        if (requestObj.pattern === null || requestObj.pattern === undefined) {
            throw new Error('Required parameter "requestObj.pattern" was null or undefined when calling search.');
        }

        if (requestObj.pattern !== undefined) {
            queryParameters.Pattern = ObjectSerializer.serialize(requestObj.pattern, "string");
        }

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "SearchResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Updates border properties.              'nodePath' should refer to node with cell or row
     * @param requestObj contains request parameters
     */
    public async updateBorder(requestObj: model.UpdateBorderRequest): Promise<{response: http.ClientResponse, body: model.BorderResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/borders/{index}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "nodePath" + "}", String(requestObj.nodePath))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

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

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        if (requestObj.destFileName !== undefined) {
            queryParameters.DestFileName = ObjectSerializer.serialize(requestObj.destFileName, "string");
        }

        if (requestObj.revisionAuthor !== undefined) {
            queryParameters.RevisionAuthor = ObjectSerializer.serialize(requestObj.revisionAuthor, "string");
        }

        if (requestObj.revisionDateTime !== undefined) {
            queryParameters.RevisionDateTime = ObjectSerializer.serialize(requestObj.revisionDateTime, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.borderProperties, "Border"),
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "BorderResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Update page setup of section.
     * @param requestObj contains request parameters
     */
    public async updateSectionPageSetup(requestObj: model.UpdateSectionPageSetupRequest): Promise<{response: http.ClientResponse, body: model.SectionPageSetupResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/sections/{sectionIndex}/pageSetup"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "sectionIndex" + "}", String(requestObj.sectionIndex));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

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

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        if (requestObj.destFileName !== undefined) {
            queryParameters.DestFileName = ObjectSerializer.serialize(requestObj.destFileName, "string");
        }

        if (requestObj.revisionAuthor !== undefined) {
            queryParameters.RevisionAuthor = ObjectSerializer.serialize(requestObj.revisionAuthor, "string");
        }

        if (requestObj.revisionDateTime !== undefined) {
            queryParameters.RevisionDateTime = ObjectSerializer.serialize(requestObj.revisionDateTime, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.pageSetup, "PageSetup"),
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "SectionPageSetupResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Updates a table cell format.
     * @param requestObj contains request parameters
     */
    public async updateTableCellFormat(requestObj: model.UpdateTableCellFormatRequest): Promise<{response: http.ClientResponse, body: model.TableCellFormatResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{tableRowPath}/cells/{index}/cellformat"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "tableRowPath" + "}", String(requestObj.tableRowPath))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

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

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        if (requestObj.destFileName !== undefined) {
            queryParameters.DestFileName = ObjectSerializer.serialize(requestObj.destFileName, "string");
        }

        if (requestObj.revisionAuthor !== undefined) {
            queryParameters.RevisionAuthor = ObjectSerializer.serialize(requestObj.revisionAuthor, "string");
        }

        if (requestObj.revisionDateTime !== undefined) {
            queryParameters.RevisionDateTime = ObjectSerializer.serialize(requestObj.revisionDateTime, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.format, "TableCellFormat"),
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "TableCellFormatResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Updates a table properties.
     * @param requestObj contains request parameters
     */
    public async updateTableProperties(requestObj: model.UpdateTablePropertiesRequest): Promise<{response: http.ClientResponse, body: model.TablePropertiesResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{nodePath}/tables/{index}/properties"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling updateTableProperties.');
        }

        // verify required parameter 'requestObj.index' is not null or undefined
        if (requestObj.index === null || requestObj.index === undefined) {
            throw new Error('Required parameter "requestObj.index" was null or undefined when calling updateTableProperties.');
        }

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        if (requestObj.destFileName !== undefined) {
            queryParameters.DestFileName = ObjectSerializer.serialize(requestObj.destFileName, "string");
        }

        if (requestObj.revisionAuthor !== undefined) {
            queryParameters.RevisionAuthor = ObjectSerializer.serialize(requestObj.revisionAuthor, "string");
        }

        if (requestObj.revisionDateTime !== undefined) {
            queryParameters.RevisionDateTime = ObjectSerializer.serialize(requestObj.revisionDateTime, "string");
        }

        if (requestObj.nodePath !== undefined) {
            queryParameters.NodePath = ObjectSerializer.serialize(requestObj.nodePath, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.properties, "TableProperties"),
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "TablePropertiesResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Updates a table row format.
     * @param requestObj contains request parameters
     */
    public async updateTableRowFormat(requestObj: model.UpdateTableRowFormatRequest): Promise<{response: http.ClientResponse, body: model.TableRowFormatResponse}> {
        const localVarPath = this.configuration.getApiBaseUrl() + "/words/{name}/{tablePath}/rows/{index}/rowformat"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "tablePath" + "}", String(requestObj.tablePath))
            .replace("{" + "index" + "}", String(requestObj.index));
        const queryParameters: any = {};
        const headerParams: any = {};
        const formParams: any = {};

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

        if (requestObj.folder !== undefined) {
            queryParameters.Folder = ObjectSerializer.serialize(requestObj.folder, "string");
        }

        if (requestObj.storage !== undefined) {
            queryParameters.Storage = ObjectSerializer.serialize(requestObj.storage, "string");
        }

        if (requestObj.loadEncoding !== undefined) {
            queryParameters.LoadEncoding = ObjectSerializer.serialize(requestObj.loadEncoding, "string");
        }

        if (requestObj.password !== undefined) {
            queryParameters.Password = ObjectSerializer.serialize(requestObj.password, "string");
        }

        if (requestObj.destFileName !== undefined) {
            queryParameters.DestFileName = ObjectSerializer.serialize(requestObj.destFileName, "string");
        }

        if (requestObj.revisionAuthor !== undefined) {
            queryParameters.RevisionAuthor = ObjectSerializer.serialize(requestObj.revisionAuthor, "string");
        }

        if (requestObj.revisionDateTime !== undefined) {
            queryParameters.RevisionDateTime = ObjectSerializer.serialize(requestObj.revisionDateTime, "string");
        }

        // tslint:disable-next-line:prefer-const
        let useFormData = false;

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.format, "TableRowFormat"),
        };

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (requestOptions as any).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "TableRowFormatResponse");
        return Promise.resolve({body: result, response});
    }

}

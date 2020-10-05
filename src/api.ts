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

import { Configuration } from "./internal/configuration";
import { ObjectSerializer } from "./internal/objectSerializer";
import { invokeApiMethod } from "./internal/requestHelper";
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
    public async acceptAllRevisions(requestObj: model.AcceptAllRevisionsRequest): Promise< model.WordsIncomingMessage< model.RevisionsModificationResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling acceptAllRevisions.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.RevisionsModificationResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Appends documents to original document.
     * @param requestObj contains request parameters
     */
    public async appendDocument(requestObj: model.AppendDocumentRequest): Promise< model.WordsIncomingMessage< model.DocumentResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling appendDocument.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.DocumentResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Apply a style to the document node.
     * @param requestObj contains request parameters
     */
    public async applyStyleToDocumentElement(requestObj: model.ApplyStyleToDocumentElementRequest): Promise< model.WordsIncomingMessage< model.WordsResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling applyStyleToDocumentElement.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.WordsResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Executes document "build report" operation.
     * @param requestObj contains request parameters
     */
    public async buildReport(requestObj: model.BuildReportRequest): Promise< model.WordsIncomingMessage< model.DocumentResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling buildReport.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.DocumentResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Executes document "build report" online operation.
     * @param requestObj contains request parameters
     */
    public async buildReportOnline(requestObj: model.BuildReportOnlineRequest): Promise< model.WordsIncomingMessage< Buffer > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling buildReportOnline.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< Buffer > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Classifies raw text.
     * @param requestObj contains request parameters
     */
    public async classify(requestObj: model.ClassifyRequest): Promise< model.WordsIncomingMessage< model.ClassificationResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling classify.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.ClassificationResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Classifies document.
     * @param requestObj contains request parameters
     */
    public async classifyDocument(requestObj: model.ClassifyDocumentRequest): Promise< model.WordsIncomingMessage< model.ClassificationResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling classifyDocument.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.ClassificationResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Compares document with original document.
     * @param requestObj contains request parameters
     */
    public async compareDocument(requestObj: model.CompareDocumentRequest): Promise< model.WordsIncomingMessage< model.DocumentResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling compareDocument.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.DocumentResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Converts document from the request's content to the specified format.
     * @param requestObj contains request parameters
     */
    public async convertDocument(requestObj: model.ConvertDocumentRequest): Promise< model.WordsIncomingMessage< Buffer > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling convertDocument.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
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

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
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

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Copy and insert a new style to the document, returns a copied style.
     * @param requestObj contains request parameters
     */
    public async copyStyle(requestObj: model.CopyStyleRequest): Promise< model.WordsIncomingMessage< model.StyleResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling copyStyle.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.StyleResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Creates new document.
     * Document is created with format which is recognized from file extensions.
     * Supported extensions: ".doc", ".docx", ".docm", ".dot", ".dotm", ".dotx", ".flatopc", ".fopc", ".flatopc_macro", ".fopc_macro", ".flatopc_template", ".fopc_template", ".flatopc_template_macro", ".fopc_template_macro", ".wordml", ".wml", ".rtf".
     * @param requestObj contains request parameters
     */
    public async createDocument(requestObj: model.CreateDocumentRequest): Promise< model.WordsIncomingMessage< model.DocumentResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling createDocument.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
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

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Adds new or update existing document property.
     * @param requestObj contains request parameters
     */
    public async createOrUpdateDocumentProperty(requestObj: model.CreateOrUpdateDocumentPropertyRequest): Promise< model.WordsIncomingMessage< model.DocumentPropertyResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling createOrUpdateDocumentProperty.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.DocumentPropertyResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Remove all tab stops.
     * @param requestObj contains request parameters
     */
    public async deleteAllParagraphTabStops(requestObj: model.DeleteAllParagraphTabStopsRequest): Promise< model.WordsIncomingMessage< model.TabStopsResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteAllParagraphTabStops.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.TabStopsResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * 'nodePath' should refer to paragraph, cell or row.
     * @param requestObj contains request parameters
     */
    public async deleteBorder(requestObj: model.DeleteBorderRequest): Promise< model.WordsIncomingMessage< model.BorderResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteBorder.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.BorderResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * 'nodePath' should refer to paragraph, cell or row.
     * @param requestObj contains request parameters
     */
    public async deleteBorders(requestObj: model.DeleteBordersRequest): Promise< model.WordsIncomingMessage< model.BordersResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteBorders.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.BordersResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Removes comment from document.
     * @param requestObj contains request parameters
     */
    public async deleteComment(requestObj: model.DeleteCommentRequest): Promise< http.IncomingMessage > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteComment.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Deletes document property.
     * @param requestObj contains request parameters
     */
    public async deleteDocumentProperty(requestObj: model.DeleteDocumentPropertyRequest): Promise< http.IncomingMessage > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteDocumentProperty.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Removes drawing object from document.
     * @param requestObj contains request parameters
     */
    public async deleteDrawingObject(requestObj: model.DeleteDrawingObjectRequest): Promise< http.IncomingMessage > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteDrawingObject.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Deletes field from document.
     * @param requestObj contains request parameters
     */
    public async deleteField(requestObj: model.DeleteFieldRequest): Promise< http.IncomingMessage > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteField.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Removes fields from section paragraph.
     * @param requestObj contains request parameters
     */
    public async deleteFields(requestObj: model.DeleteFieldsRequest): Promise< http.IncomingMessage > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteFields.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Delete file.
     * @param requestObj contains request parameters
     */
    public async deleteFile(requestObj: model.DeleteFileRequest): Promise< http.IncomingMessage > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteFile.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
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

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Removes footnote from document.
     * @param requestObj contains request parameters
     */
    public async deleteFootnote(requestObj: model.DeleteFootnoteRequest): Promise< http.IncomingMessage > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteFootnote.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Removes form field from document.
     * @param requestObj contains request parameters
     */
    public async deleteFormField(requestObj: model.DeleteFormFieldRequest): Promise< http.IncomingMessage > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteFormField.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Deletes header/footer from document.
     * @param requestObj contains request parameters
     */
    public async deleteHeaderFooter(requestObj: model.DeleteHeaderFooterRequest): Promise< http.IncomingMessage > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteHeaderFooter.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Deletes document headers and footers.
     * @param requestObj contains request parameters
     */
    public async deleteHeadersFooters(requestObj: model.DeleteHeadersFootersRequest): Promise< http.IncomingMessage > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteHeadersFooters.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Removes macros from document.
     * @param requestObj contains request parameters
     */
    public async deleteMacros(requestObj: model.DeleteMacrosRequest): Promise< http.IncomingMessage > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteMacros.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Removes OfficeMath object from document.
     * @param requestObj contains request parameters
     */
    public async deleteOfficeMathObject(requestObj: model.DeleteOfficeMathObjectRequest): Promise< http.IncomingMessage > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteOfficeMathObject.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Removes paragraph from section.
     * @param requestObj contains request parameters
     */
    public async deleteParagraph(requestObj: model.DeleteParagraphRequest): Promise< http.IncomingMessage > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteParagraph.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Delete paragraph list format, returns updated list format properties.
     * @param requestObj contains request parameters
     */
    public async deleteParagraphListFormat(requestObj: model.DeleteParagraphListFormatRequest): Promise< model.WordsIncomingMessage< model.ParagraphListFormatResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteParagraphListFormat.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.ParagraphListFormatResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Remove the i-th tab stop.
     * @param requestObj contains request parameters
     */
    public async deleteParagraphTabStop(requestObj: model.DeleteParagraphTabStopRequest): Promise< model.WordsIncomingMessage< model.TabStopsResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteParagraphTabStop.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.TabStopsResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Removes run from document.
     * @param requestObj contains request parameters
     */
    public async deleteRun(requestObj: model.DeleteRunRequest): Promise< http.IncomingMessage > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteRun.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Removes section from document.
     * @param requestObj contains request parameters
     */
    public async deleteSection(requestObj: model.DeleteSectionRequest): Promise< http.IncomingMessage > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteSection.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Deletes a table.
     * @param requestObj contains request parameters
     */
    public async deleteTable(requestObj: model.DeleteTableRequest): Promise< http.IncomingMessage > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteTable.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Deletes a table cell.
     * @param requestObj contains request parameters
     */
    public async deleteTableCell(requestObj: model.DeleteTableCellRequest): Promise< http.IncomingMessage > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteTableCell.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Deletes a table row.
     * @param requestObj contains request parameters
     */
    public async deleteTableRow(requestObj: model.DeleteTableRowRequest): Promise< http.IncomingMessage > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteTableRow.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Deletes watermark (for deleting last watermark from the document).
     * @param requestObj contains request parameters
     */
    public async deleteWatermark(requestObj: model.DeleteWatermarkRequest): Promise< model.WordsIncomingMessage< model.DocumentResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteWatermark.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.DocumentResponse > = {body, response};
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

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< Buffer > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Executes document mail merge operation.
     * @param requestObj contains request parameters
     */
    public async executeMailMerge(requestObj: model.ExecuteMailMergeRequest): Promise< model.WordsIncomingMessage< model.DocumentResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling executeMailMerge.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.DocumentResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Executes document mail merge online.
     * @param requestObj contains request parameters
     */
    public async executeMailMergeOnline(requestObj: model.ExecuteMailMergeOnlineRequest): Promise< model.WordsIncomingMessage< Buffer > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling executeMailMergeOnline.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< Buffer > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Gets the list of fonts, available for document processing.
     * @param requestObj contains request parameters
     */
    public async getAvailableFonts(requestObj: model.GetAvailableFontsRequest): Promise< model.WordsIncomingMessage< model.AvailableFontsResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getAvailableFonts.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.AvailableFontsResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads document bookmark data by its name.
     * @param requestObj contains request parameters
     */
    public async getBookmarkByName(requestObj: model.GetBookmarkByNameRequest): Promise< model.WordsIncomingMessage< model.BookmarkResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getBookmarkByName.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.BookmarkResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads document bookmarks common info.
     * @param requestObj contains request parameters
     */
    public async getBookmarks(requestObj: model.GetBookmarksRequest): Promise< model.WordsIncomingMessage< model.BookmarksResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getBookmarks.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.BookmarksResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * 'nodePath' should refer to paragraph, cell or row.
     * @param requestObj contains request parameters
     */
    public async getBorder(requestObj: model.GetBorderRequest): Promise< model.WordsIncomingMessage< model.BorderResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getBorder.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.BorderResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * 'nodePath' should refer to paragraph, cell or row.
     * @param requestObj contains request parameters
     */
    public async getBorders(requestObj: model.GetBordersRequest): Promise< model.WordsIncomingMessage< model.BordersResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getBorders.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.BordersResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Gets comment from document.
     * @param requestObj contains request parameters
     */
    public async getComment(requestObj: model.GetCommentRequest): Promise< model.WordsIncomingMessage< model.CommentResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getComment.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.CommentResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Gets comments from document.
     * @param requestObj contains request parameters
     */
    public async getComments(requestObj: model.GetCommentsRequest): Promise< model.WordsIncomingMessage< model.CommentsResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getComments.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.CommentsResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads document common info.
     * @param requestObj contains request parameters
     */
    public async getDocument(requestObj: model.GetDocumentRequest): Promise< model.WordsIncomingMessage< model.DocumentResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDocument.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.DocumentResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads document drawing object common info by its index or convert to format specified.
     * @param requestObj contains request parameters
     */
    public async getDocumentDrawingObjectByIndex(requestObj: model.GetDocumentDrawingObjectByIndexRequest): Promise< model.WordsIncomingMessage< model.DrawingObjectResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDocumentDrawingObjectByIndex.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.DrawingObjectResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads drawing object image data.
     * @param requestObj contains request parameters
     */
    public async getDocumentDrawingObjectImageData(requestObj: model.GetDocumentDrawingObjectImageDataRequest): Promise< model.WordsIncomingMessage< Buffer > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDocumentDrawingObjectImageData.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< Buffer > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Gets drawing object OLE data.
     * @param requestObj contains request parameters
     */
    public async getDocumentDrawingObjectOleData(requestObj: model.GetDocumentDrawingObjectOleDataRequest): Promise< model.WordsIncomingMessage< Buffer > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDocumentDrawingObjectOleData.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< Buffer > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads document drawing objects common info.
     * @param requestObj contains request parameters
     */
    public async getDocumentDrawingObjects(requestObj: model.GetDocumentDrawingObjectsRequest): Promise< model.WordsIncomingMessage< model.DrawingObjectsResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDocumentDrawingObjects.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.DrawingObjectsResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads document field names.
     * @param requestObj contains request parameters
     */
    public async getDocumentFieldNames(requestObj: model.GetDocumentFieldNamesRequest): Promise< model.WordsIncomingMessage< model.FieldNamesResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDocumentFieldNames.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.FieldNamesResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads document field names.
     * @param requestObj contains request parameters
     */
    public async getDocumentFieldNamesOnline(requestObj: model.GetDocumentFieldNamesOnlineRequest): Promise< model.WordsIncomingMessage< model.FieldNamesResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDocumentFieldNamesOnline.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.FieldNamesResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads document hyperlink by its index.
     * @param requestObj contains request parameters
     */
    public async getDocumentHyperlinkByIndex(requestObj: model.GetDocumentHyperlinkByIndexRequest): Promise< model.WordsIncomingMessage< model.HyperlinkResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDocumentHyperlinkByIndex.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.HyperlinkResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads document hyperlinks common info.
     * @param requestObj contains request parameters
     */
    public async getDocumentHyperlinks(requestObj: model.GetDocumentHyperlinksRequest): Promise< model.WordsIncomingMessage< model.HyperlinksResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDocumentHyperlinks.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.HyperlinksResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads document properties info.
     * @param requestObj contains request parameters
     */
    public async getDocumentProperties(requestObj: model.GetDocumentPropertiesRequest): Promise< model.WordsIncomingMessage< model.DocumentPropertiesResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDocumentProperties.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.DocumentPropertiesResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads document property info by the property name.
     * @param requestObj contains request parameters
     */
    public async getDocumentProperty(requestObj: model.GetDocumentPropertyRequest): Promise< model.WordsIncomingMessage< model.DocumentPropertyResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDocumentProperty.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.DocumentPropertyResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads document protection common info.
     * @param requestObj contains request parameters
     */
    public async getDocumentProtection(requestObj: model.GetDocumentProtectionRequest): Promise< model.WordsIncomingMessage< model.ProtectionDataResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDocumentProtection.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
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

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.StatDataResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Exports the document into the specified format.
     * @param requestObj contains request parameters
     */
    public async getDocumentWithFormat(requestObj: model.GetDocumentWithFormatRequest): Promise< model.WordsIncomingMessage< Buffer > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDocumentWithFormat.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< Buffer > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Gets field from document.
     * @param requestObj contains request parameters
     */
    public async getField(requestObj: model.GetFieldRequest): Promise< model.WordsIncomingMessage< model.FieldResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getField.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.FieldResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Get fields from document.
     * @param requestObj contains request parameters
     */
    public async getFields(requestObj: model.GetFieldsRequest): Promise< model.WordsIncomingMessage< model.FieldsResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getFields.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
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

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.FilesList > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads footnote by index.
     * @param requestObj contains request parameters
     */
    public async getFootnote(requestObj: model.GetFootnoteRequest): Promise< model.WordsIncomingMessage< model.FootnoteResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getFootnote.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.FootnoteResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Gets footnotes from document.
     * @param requestObj contains request parameters
     */
    public async getFootnotes(requestObj: model.GetFootnotesRequest): Promise< model.WordsIncomingMessage< model.FootnotesResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getFootnotes.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.FootnotesResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Returns representation of an one of the form field.
     * @param requestObj contains request parameters
     */
    public async getFormField(requestObj: model.GetFormFieldRequest): Promise< model.WordsIncomingMessage< model.FormFieldResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getFormField.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.FormFieldResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Gets form fields from document.
     * @param requestObj contains request parameters
     */
    public async getFormFields(requestObj: model.GetFormFieldsRequest): Promise< model.WordsIncomingMessage< model.FormFieldsResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getFormFields.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.FormFieldsResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Returns a header/footer from the document by index.
     * @param requestObj contains request parameters
     */
    public async getHeaderFooter(requestObj: model.GetHeaderFooterRequest): Promise< model.WordsIncomingMessage< model.HeaderFooterResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getHeaderFooter.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.HeaderFooterResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Returns a header/footer from the document section.
     * @param requestObj contains request parameters
     */
    public async getHeaderFooterOfSection(requestObj: model.GetHeaderFooterOfSectionRequest): Promise< model.WordsIncomingMessage< model.HeaderFooterResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getHeaderFooterOfSection.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.HeaderFooterResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Returns a list of header/footers from the document.
     * @param requestObj contains request parameters
     */
    public async getHeaderFooters(requestObj: model.GetHeaderFootersRequest): Promise< model.WordsIncomingMessage< model.HeaderFootersResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getHeaderFooters.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.HeaderFootersResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * This resource represents one of the lists contained in the document.
     * @param requestObj contains request parameters
     */
    public async getList(requestObj: model.GetListRequest): Promise< model.WordsIncomingMessage< model.ListResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getList.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.ListResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Returns a list of lists that are contained in the document.
     * @param requestObj contains request parameters
     */
    public async getLists(requestObj: model.GetListsRequest): Promise< model.WordsIncomingMessage< model.ListsResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getLists.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.ListsResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Reads OfficeMath object by index.
     * @param requestObj contains request parameters
     */
    public async getOfficeMathObject(requestObj: model.GetOfficeMathObjectRequest): Promise< model.WordsIncomingMessage< model.OfficeMathObjectResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getOfficeMathObject.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.OfficeMathObjectResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Gets OfficeMath objects from document.
     * @param requestObj contains request parameters
     */
    public async getOfficeMathObjects(requestObj: model.GetOfficeMathObjectsRequest): Promise< model.WordsIncomingMessage< model.OfficeMathObjectsResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getOfficeMathObjects.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.OfficeMathObjectsResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * This resource represents one of the paragraphs contained in the document.
     * @param requestObj contains request parameters
     */
    public async getParagraph(requestObj: model.GetParagraphRequest): Promise< model.WordsIncomingMessage< model.ParagraphResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getParagraph.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.ParagraphResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Represents all the formatting for a paragraph.
     * @param requestObj contains request parameters
     */
    public async getParagraphFormat(requestObj: model.GetParagraphFormatRequest): Promise< model.WordsIncomingMessage< model.ParagraphFormatResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getParagraphFormat.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.ParagraphFormatResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Represents list format for a paragraph.
     * @param requestObj contains request parameters
     */
    public async getParagraphListFormat(requestObj: model.GetParagraphListFormatRequest): Promise< model.WordsIncomingMessage< model.ParagraphListFormatResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getParagraphListFormat.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.ParagraphListFormatResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Returns a list of paragraphs that are contained in the document.
     * @param requestObj contains request parameters
     */
    public async getParagraphs(requestObj: model.GetParagraphsRequest): Promise< model.WordsIncomingMessage< model.ParagraphLinkCollectionResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getParagraphs.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.ParagraphLinkCollectionResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Get all tab stops for the paragraph.
     * @param requestObj contains request parameters
     */
    public async getParagraphTabStops(requestObj: model.GetParagraphTabStopsRequest): Promise< model.WordsIncomingMessage< model.TabStopsResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getParagraphTabStops.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.TabStopsResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Gets the text from the range.
     * @param requestObj contains request parameters
     */
    public async getRangeText(requestObj: model.GetRangeTextRequest): Promise< model.WordsIncomingMessage< model.RangeTextResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getRangeText.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.RangeTextResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * This resource represents run of text contained in the document.
     * @param requestObj contains request parameters
     */
    public async getRun(requestObj: model.GetRunRequest): Promise< model.WordsIncomingMessage< model.RunResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getRun.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.RunResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * This resource represents font of run.
     * @param requestObj contains request parameters
     */
    public async getRunFont(requestObj: model.GetRunFontRequest): Promise< model.WordsIncomingMessage< model.FontResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getRunFont.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.FontResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * This resource represents collection of runs in the paragraph.
     * @param requestObj contains request parameters
     */
    public async getRuns(requestObj: model.GetRunsRequest): Promise< model.WordsIncomingMessage< model.RunsResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getRuns.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.RunsResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Gets document section by index.
     * @param requestObj contains request parameters
     */
    public async getSection(requestObj: model.GetSectionRequest): Promise< model.WordsIncomingMessage< model.SectionResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getSection.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.SectionResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Gets page setup of section.
     * @param requestObj contains request parameters
     */
    public async getSectionPageSetup(requestObj: model.GetSectionPageSetupRequest): Promise< model.WordsIncomingMessage< model.SectionPageSetupResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getSectionPageSetup.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.SectionPageSetupResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Returns a list of sections that are contained in the document.
     * @param requestObj contains request parameters
     */
    public async getSections(requestObj: model.GetSectionsRequest): Promise< model.WordsIncomingMessage< model.SectionLinkCollectionResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getSections.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.SectionLinkCollectionResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * This resource represents one of the styles contained in the document.
     * @param requestObj contains request parameters
     */
    public async getStyle(requestObj: model.GetStyleRequest): Promise< model.WordsIncomingMessage< model.StyleResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getStyle.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.StyleResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Gets a style from the document node.
     * @param requestObj contains request parameters
     */
    public async getStyleFromDocumentElement(requestObj: model.GetStyleFromDocumentElementRequest): Promise< model.WordsIncomingMessage< model.StyleResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getStyleFromDocumentElement.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.StyleResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Returns a list of styles contained in the document.
     * @param requestObj contains request parameters
     */
    public async getStyles(requestObj: model.GetStylesRequest): Promise< model.WordsIncomingMessage< model.StylesResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getStyles.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.StylesResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Returns a table.
     * @param requestObj contains request parameters
     */
    public async getTable(requestObj: model.GetTableRequest): Promise< model.WordsIncomingMessage< model.TableResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getTable.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.TableResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Returns a table cell.
     * @param requestObj contains request parameters
     */
    public async getTableCell(requestObj: model.GetTableCellRequest): Promise< model.WordsIncomingMessage< model.TableCellResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getTableCell.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.TableCellResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Returns a table cell format.
     * @param requestObj contains request parameters
     */
    public async getTableCellFormat(requestObj: model.GetTableCellFormatRequest): Promise< model.WordsIncomingMessage< model.TableCellFormatResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getTableCellFormat.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.TableCellFormatResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Returns a table properties.
     * @param requestObj contains request parameters
     */
    public async getTableProperties(requestObj: model.GetTablePropertiesRequest): Promise< model.WordsIncomingMessage< model.TablePropertiesResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getTableProperties.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.TablePropertiesResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Returns a table row.
     * @param requestObj contains request parameters
     */
    public async getTableRow(requestObj: model.GetTableRowRequest): Promise< model.WordsIncomingMessage< model.TableRowResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getTableRow.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.TableRowResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Returns a table row format.
     * @param requestObj contains request parameters
     */
    public async getTableRowFormat(requestObj: model.GetTableRowFormatRequest): Promise< model.WordsIncomingMessage< model.TableRowFormatResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getTableRowFormat.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.TableRowFormatResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Returns a list of tables that are contained in the document.
     * @param requestObj contains request parameters
     */
    public async getTables(requestObj: model.GetTablesRequest): Promise< model.WordsIncomingMessage< model.TableLinkCollectionResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getTables.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.TableLinkCollectionResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Adds comment to document, returns inserted comment data.
     * @param requestObj contains request parameters
     */
    public async insertComment(requestObj: model.InsertCommentRequest): Promise< model.WordsIncomingMessage< model.CommentResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling insertComment.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.CommentResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Adds drawing object to document, returns added  drawing object's data.
     * @param requestObj contains request parameters
     */
    public async insertDrawingObject(requestObj: model.InsertDrawingObjectRequest): Promise< model.WordsIncomingMessage< model.DrawingObjectResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling insertDrawingObject.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.DrawingObjectResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Adds field to document, returns inserted field's data.
     * @param requestObj contains request parameters
     */
    public async insertField(requestObj: model.InsertFieldRequest): Promise< model.WordsIncomingMessage< model.FieldResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling insertField.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.FieldResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Adds footnote to document, returns added footnote's data.
     * @param requestObj contains request parameters
     */
    public async insertFootnote(requestObj: model.InsertFootnoteRequest): Promise< model.WordsIncomingMessage< model.FootnoteResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling insertFootnote.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.FootnoteResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Adds form field to paragraph, returns added form field's data.
     * @param requestObj contains request parameters
     */
    public async insertFormField(requestObj: model.InsertFormFieldRequest): Promise< model.WordsIncomingMessage< model.FormFieldResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling insertFormField.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.FormFieldResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Inserts to document header or footer.
     * @param requestObj contains request parameters
     */
    public async insertHeaderFooter(requestObj: model.InsertHeaderFooterRequest): Promise< model.WordsIncomingMessage< model.HeaderFooterResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling insertHeaderFooter.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.HeaderFooterResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Adds list to document, returns added list's data.
     * @param requestObj contains request parameters
     */
    public async insertList(requestObj: model.InsertListRequest): Promise< model.WordsIncomingMessage< model.ListResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling insertList.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.ListResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Insert or resplace tab stop if a tab stop with the position exists.
     * @param requestObj contains request parameters
     */
    public async insertOrUpdateParagraphTabStop(requestObj: model.InsertOrUpdateParagraphTabStopRequest): Promise< model.WordsIncomingMessage< model.TabStopsResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling insertOrUpdateParagraphTabStop.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.TabStopsResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Inserts document page numbers.
     * @param requestObj contains request parameters
     */
    public async insertPageNumbers(requestObj: model.InsertPageNumbersRequest): Promise< model.WordsIncomingMessage< model.DocumentResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling insertPageNumbers.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.DocumentResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Adds paragraph to document, returns added paragraph's data.
     * @param requestObj contains request parameters
     */
    public async insertParagraph(requestObj: model.InsertParagraphRequest): Promise< model.WordsIncomingMessage< model.ParagraphResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling insertParagraph.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.ParagraphResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Adds run to document, returns added paragraph's data.
     * @param requestObj contains request parameters
     */
    public async insertRun(requestObj: model.InsertRunRequest): Promise< model.WordsIncomingMessage< model.RunResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling insertRun.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.RunResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Adds a style to the document, returns an added style.
     * @param requestObj contains request parameters
     */
    public async insertStyle(requestObj: model.InsertStyleRequest): Promise< model.WordsIncomingMessage< model.StyleResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling insertStyle.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.StyleResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Adds table to document, returns added table's data.
     * @param requestObj contains request parameters
     */
    public async insertTable(requestObj: model.InsertTableRequest): Promise< model.WordsIncomingMessage< model.TableResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling insertTable.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.TableResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Adds table cell to table, returns added cell's data.
     * @param requestObj contains request parameters
     */
    public async insertTableCell(requestObj: model.InsertTableCellRequest): Promise< model.WordsIncomingMessage< model.TableCellResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling insertTableCell.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.TableCellResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Adds table row to table, returns added row's data.
     * @param requestObj contains request parameters
     */
    public async insertTableRow(requestObj: model.InsertTableRowRequest): Promise< model.WordsIncomingMessage< model.TableRowResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling insertTableRow.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.TableRowResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Inserts document watermark image.
     * @param requestObj contains request parameters
     */
    public async insertWatermarkImage(requestObj: model.InsertWatermarkImageRequest): Promise< model.WordsIncomingMessage< model.DocumentResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling insertWatermarkImage.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.DocumentResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Inserts document watermark text.
     * @param requestObj contains request parameters
     */
    public async insertWatermarkText(requestObj: model.InsertWatermarkTextRequest): Promise< model.WordsIncomingMessage< model.DocumentResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling insertWatermarkText.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.DocumentResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Loads new document from web into the file with any supported format of data.
     * @param requestObj contains request parameters
     */
    public async loadWebDocument(requestObj: model.LoadWebDocumentRequest): Promise< model.WordsIncomingMessage< model.SaveResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling loadWebDocument.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
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

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
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

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Allows to optimize the document contents as well as default Aspose.Words behavior to a particular versions of MS Word.
     * @param requestObj contains request parameters
     */
    public async optimizeDocument(requestObj: model.OptimizeDocumentRequest): Promise< http.IncomingMessage > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling optimizeDocument.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Protects document.
     * @param requestObj contains request parameters
     */
    public async protectDocument(requestObj: model.ProtectDocumentRequest): Promise< model.WordsIncomingMessage< model.ProtectionDataResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling protectDocument.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.ProtectionDataResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Rejects all revisions in document.
     * @param requestObj contains request parameters
     */
    public async rejectAllRevisions(requestObj: model.RejectAllRevisionsRequest): Promise< model.WordsIncomingMessage< model.RevisionsModificationResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling rejectAllRevisions.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.RevisionsModificationResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Removes the range from the document.
     * @param requestObj contains request parameters
     */
    public async removeRange(requestObj: model.RemoveRangeRequest): Promise< model.WordsIncomingMessage< model.DocumentResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling removeRange.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.DocumentResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Renders drawing object to specified format.
     * @param requestObj contains request parameters
     */
    public async renderDrawingObject(requestObj: model.RenderDrawingObjectRequest): Promise< model.WordsIncomingMessage< Buffer > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling renderDrawingObject.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< Buffer > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Renders math object to specified format.
     * @param requestObj contains request parameters
     */
    public async renderMathObject(requestObj: model.RenderMathObjectRequest): Promise< model.WordsIncomingMessage< Buffer > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling renderMathObject.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< Buffer > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Renders page to specified format.
     * @param requestObj contains request parameters
     */
    public async renderPage(requestObj: model.RenderPageRequest): Promise< model.WordsIncomingMessage< Buffer > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling renderPage.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< Buffer > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Renders paragraph to specified format.
     * @param requestObj contains request parameters
     */
    public async renderParagraph(requestObj: model.RenderParagraphRequest): Promise< model.WordsIncomingMessage< Buffer > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling renderParagraph.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< Buffer > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Renders table to specified format.
     * @param requestObj contains request parameters
     */
    public async renderTable(requestObj: model.RenderTableRequest): Promise< model.WordsIncomingMessage< Buffer > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling renderTable.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< Buffer > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Replaces document text.
     * @param requestObj contains request parameters
     */
    public async replaceText(requestObj: model.ReplaceTextRequest): Promise< model.WordsIncomingMessage< model.ReplaceTextResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling replaceText.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.ReplaceTextResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Replaces the content in the range.
     * @param requestObj contains request parameters
     */
    public async replaceWithText(requestObj: model.ReplaceWithTextRequest): Promise< model.WordsIncomingMessage< model.DocumentResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling replaceWithText.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.DocumentResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Resets font's cache.
     * @param requestObj contains request parameters
     */
    public async resetCache(requestObj: model.ResetCacheRequest): Promise< http.IncomingMessage > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling resetCache.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        return Promise.resolve(response);
    }

    /**
     * Converts document to destination format with detailed settings and saves result to storage.
     * @param requestObj contains request parameters
     */
    public async saveAs(requestObj: model.SaveAsRequest): Promise< model.WordsIncomingMessage< model.SaveResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling saveAs.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.SaveResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Saves the selected range as a new document.
     * @param requestObj contains request parameters
     */
    public async saveAsRange(requestObj: model.SaveAsRangeRequest): Promise< model.WordsIncomingMessage< model.DocumentResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling saveAsRange.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.DocumentResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Converts document to tiff with detailed settings and saves result to storage.
     * @param requestObj contains request parameters
     */
    public async saveAsTiff(requestObj: model.SaveAsTiffRequest): Promise< model.WordsIncomingMessage< model.SaveResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling saveAsTiff.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.SaveResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Searches text in document.
     * @param requestObj contains request parameters
     */
    public async search(requestObj: model.SearchRequest): Promise< model.WordsIncomingMessage< model.SearchResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling search.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.SearchResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Splits document.
     * @param requestObj contains request parameters
     */
    public async splitDocument(requestObj: model.SplitDocumentRequest): Promise< model.WordsIncomingMessage< model.SplitDocumentResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling splitDocument.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.SplitDocumentResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Unprotects document.
     * @param requestObj contains request parameters
     */
    public async unprotectDocument(requestObj: model.UnprotectDocumentRequest): Promise< model.WordsIncomingMessage< model.ProtectionDataResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling unprotectDocument.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.ProtectionDataResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Updates document bookmark.
     * @param requestObj contains request parameters
     */
    public async updateBookmark(requestObj: model.UpdateBookmarkRequest): Promise< model.WordsIncomingMessage< model.BookmarkResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateBookmark.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.BookmarkResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * 'nodePath' should refer to paragraph, cell or row.
     * @param requestObj contains request parameters
     */
    public async updateBorder(requestObj: model.UpdateBorderRequest): Promise< model.WordsIncomingMessage< model.BorderResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateBorder.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.BorderResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Updates the comment, returns updated comment data.
     * @param requestObj contains request parameters
     */
    public async updateComment(requestObj: model.UpdateCommentRequest): Promise< model.WordsIncomingMessage< model.CommentResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateComment.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.CommentResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Updates drawing object, returns updated  drawing object's data.
     * @param requestObj contains request parameters
     */
    public async updateDrawingObject(requestObj: model.UpdateDrawingObjectRequest): Promise< model.WordsIncomingMessage< model.DrawingObjectResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateDrawingObject.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.DrawingObjectResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Updates field's properties, returns updated field's data.
     * @param requestObj contains request parameters
     */
    public async updateField(requestObj: model.UpdateFieldRequest): Promise< model.WordsIncomingMessage< model.FieldResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateField.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.FieldResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Updates (reevaluate) fields in document.
     * @param requestObj contains request parameters
     */
    public async updateFields(requestObj: model.UpdateFieldsRequest): Promise< model.WordsIncomingMessage< model.DocumentResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateFields.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.DocumentResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Updates footnote's properties, returns updated run's data.
     * @param requestObj contains request parameters
     */
    public async updateFootnote(requestObj: model.UpdateFootnoteRequest): Promise< model.WordsIncomingMessage< model.FootnoteResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateFootnote.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.FootnoteResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Updates properties of form field, returns updated form field.
     * @param requestObj contains request parameters
     */
    public async updateFormField(requestObj: model.UpdateFormFieldRequest): Promise< model.WordsIncomingMessage< model.FormFieldResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateFormField.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.FormFieldResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Updates list properties, returns updated list.
     * @param requestObj contains request parameters
     */
    public async updateList(requestObj: model.UpdateListRequest): Promise< model.WordsIncomingMessage< model.ListResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateList.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.ListResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Updates list level in document list, returns updated list.
     * @param requestObj contains request parameters
     */
    public async updateListLevel(requestObj: model.UpdateListLevelRequest): Promise< model.WordsIncomingMessage< model.ListResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateListLevel.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.ListResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Updates paragraph format properties, returns updated format properties.
     * @param requestObj contains request parameters
     */
    public async updateParagraphFormat(requestObj: model.UpdateParagraphFormatRequest): Promise< model.WordsIncomingMessage< model.ParagraphFormatResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateParagraphFormat.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.ParagraphFormatResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Updates paragraph list format properties, returns updated list format properties.
     * @param requestObj contains request parameters
     */
    public async updateParagraphListFormat(requestObj: model.UpdateParagraphListFormatRequest): Promise< model.WordsIncomingMessage< model.ParagraphListFormatResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateParagraphListFormat.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.ParagraphListFormatResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Updates run's properties, returns updated run's data.
     * @param requestObj contains request parameters
     */
    public async updateRun(requestObj: model.UpdateRunRequest): Promise< model.WordsIncomingMessage< model.RunResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateRun.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.RunResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Updates font properties, returns updated font data.
     * @param requestObj contains request parameters
     */
    public async updateRunFont(requestObj: model.UpdateRunFontRequest): Promise< model.WordsIncomingMessage< model.FontResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateRunFont.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.FontResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Updates page setup of section.
     * @param requestObj contains request parameters
     */
    public async updateSectionPageSetup(requestObj: model.UpdateSectionPageSetupRequest): Promise< model.WordsIncomingMessage< model.SectionPageSetupResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateSectionPageSetup.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.SectionPageSetupResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Updates style properties, returns an updated style.
     * @param requestObj contains request parameters
     */
    public async updateStyle(requestObj: model.UpdateStyleRequest): Promise< model.WordsIncomingMessage< model.StyleResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateStyle.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.StyleResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Updates a table cell format.
     * @param requestObj contains request parameters
     */
    public async updateTableCellFormat(requestObj: model.UpdateTableCellFormatRequest): Promise< model.WordsIncomingMessage< model.TableCellFormatResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateTableCellFormat.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.TableCellFormatResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Updates a table properties.
     * @param requestObj contains request parameters
     */
    public async updateTableProperties(requestObj: model.UpdateTablePropertiesRequest): Promise< model.WordsIncomingMessage< model.TablePropertiesResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateTableProperties.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.TablePropertiesResponse > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Updates a table row format.
     * @param requestObj contains request parameters
     */
    public async updateTableRowFormat(requestObj: model.UpdateTableRowFormatRequest): Promise< model.WordsIncomingMessage< model.TableRowFormatResponse > > {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateTableRowFormat.');
        }

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.TableRowFormatResponse > = {body, response};
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

        const response = await invokeApiMethod(requestObj.createRequestOptions(this.configuration), this.configuration);
        const body =  ObjectSerializer.deserialize(response.body, requestObj.getReturnType());
        const result: model.WordsIncomingMessage< model.FilesUploadResult > = {body, response};
        return Promise.resolve(result);
    }

    /**
     * Batch 
     * @param requestObjs contains requests parameters
     */
    public async batch(requestObjs: model.RequestInterface[]): Promise< void > {
        if (requestObjs == null || requestObjs === undefined || requestObjs.length == 0)
        {
            throw new Error('Required parameter "requestObjs" was null or undefined or empty when calling batch method.');
        }

        const responseTypes : string[] = [];
        for (let request of requestObjs)
        {
            responseTypes.push(request.getReturnType());
        }

        const multiparts = [];
        for (let request of requestObjs)
        {
            const options = request.createRequestOptions(this.configuration);

            var part = {
                'Content-Type': 'application/http; msgtype=request',
                'body': options.method + ' ' + options.uri + ' \r\n'
              };

              const keys = options.headers.keys();
              let header = keys.next();
              while (header.value)
              {
                  part.body += header.name + ': ' +  header.value + '\r\n';
                  header = keys.next();
              }

              part.body += '\r\n';

              if (options.method !== 'GET')
              {
                part.body += JSON.stringify(options.body);
              }

              multiparts.push(part);
        }

        // const _url = this.configuration.getApiBaseUrl() + "/words/batch";
    }

}

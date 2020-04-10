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
import { AttributeInfo } from '../internal/attributeInfo';

export const importsMapSaveOptionsData = {
};

/**
 * base container class for save options data.
 */
export class SaveOptionsData {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "saveFormat",
            baseName: "SaveFormat",
            type: "string",
        },        
        {
            name: "fileName",
            baseName: "FileName",
            type: "string",
        },        
        {
            name: "dmlRenderingMode",
            baseName: "DmlRenderingMode",
            type: "string",
        },        
        {
            name: "dmlEffectsRenderingMode",
            baseName: "DmlEffectsRenderingMode",
            type: "string",
        },        
        {
            name: "zipOutput",
            baseName: "ZipOutput",
            type: "boolean",
        },        
        {
            name: "updateLastSavedTimeProperty",
            baseName: "UpdateLastSavedTimeProperty",
            type: "boolean",
        },        
        {
            name: "updateSdtContent",
            baseName: "UpdateSdtContent",
            type: "boolean",
        },        
        {
            name: "updateFields",
            baseName: "UpdateFields",
            type: "boolean",
        },        
        {
            name: "dml3DEffectsRenderingMode",
            baseName: "Dml3DEffectsRenderingMode",
            type: "SaveOptionsData.Dml3DEffectsRenderingModeEnum",
        },        
        {
            name: "updateLastPrintedProperty",
            baseName: "UpdateLastPrintedProperty",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return SaveOptionsData.attributeTypeMap;
    }

    /**
     * Gets or sets format of save.
     */
    public saveFormat: string;
    
    /**
     * Gets or sets name of destination file.
     */
    public fileName: string;
    
    /**
     * Gets or sets a value determining how DrawingML shapes are rendered. { Fallback | DrawingML }.
     */
    public dmlRenderingMode: string;
    
    /**
     * Gets or sets a value determining how DrawingML effects are rendered. { Simplified | None | Fine }.
     */
    public dmlEffectsRenderingMode: string;
    
    /**
     * Gets or sets controls zip output or not. Default value is false.
     */
    public zipOutput: boolean;
    
    /**
     * Gets or sets a value determining whether the Aspose.Words.Properties.BuiltInDocumentProperties.LastSavedTime property is updated before saving.
     */
    public updateLastSavedTimeProperty: boolean;
    
    /**
     * Gets or sets value determining whether content of StructuredDocumentTag is updated before saving.
     */
    public updateSdtContent: boolean;
    
    /**
     * Gets or sets a value determining if fields should be updated before saving the document to a fixed page format. Default value for this property is. true
     */
    public updateFields: boolean;
    
    /**
     * Gets or sets a value determining how 3D effects are rendered.
     */
    public dml3DEffectsRenderingMode: SaveOptionsData.Dml3DEffectsRenderingModeEnum;
    
    /**
     * Gets or sets a value determining whether the Aspose.Words.Properties.BuiltInDocumentProperties.LastPrinted property is updated before saving.
     */
    public updateLastPrintedProperty: boolean;
    
    public constructor(init?: Partial<SaveOptionsData>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Enums for SaveOptionsData
 */
// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace SaveOptionsData {
    export enum Dml3DEffectsRenderingModeEnum {
        Basic = 'Basic' as any,
        Advanced = 'Advanced' as any,
    }
}
// tslint:enable:quotemark

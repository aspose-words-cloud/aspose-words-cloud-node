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
import { CsvDataLoadOptions } from './csvDataLoadOptions';
import { ReportBuildOptions } from './reportBuildOptions';

export const importsMapReportEngineSettings = {
    CsvDataLoadOptions,
    ReportBuildOptions,
};

/**
 * Report engine settings.
 */
export class ReportEngineSettings {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "dataSourceType",
            baseName: "DataSourceType",
            type: "ReportEngineSettings.DataSourceTypeEnum",
        },        
        {
            name: "reportBuildOptions",
            baseName: "ReportBuildOptions",
            type: "Array<ReportBuildOptions>",
        },        
        {
            name: "dataSourceName",
            baseName: "DataSourceName",
            type: "string",
        },        
        {
            name: "csvDataLoadOptions",
            baseName: "CsvDataLoadOptions",
            type: "CsvDataLoadOptions",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ReportEngineSettings.attributeTypeMap;
    }

    /**
     * Gets or sets type of datasource.
     */
    public dataSourceType: ReportEngineSettings.DataSourceTypeEnum;
    
    /**
     * Gets or sets type of options to build report.
     */
    public reportBuildOptions: Array<ReportBuildOptions>;
    
    /**
     * Gets or sets a name to reference the data source object in the template.
     */
    public dataSourceName: string;
    
    /**
     * Gets or sets csvDataLoadOptions.
     */
    public csvDataLoadOptions: CsvDataLoadOptions;
    
    public constructor(init?: Partial<ReportEngineSettings>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Enums for ReportEngineSettings
 */
// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace ReportEngineSettings {
    export enum DataSourceTypeEnum {
        Xml = 'Xml' as any,
        Json = 'Json' as any,
        Csv = 'Csv' as any,
    }
}
// tslint:enable:quotemark

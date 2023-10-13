/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="xmlDataLoadOptions.ts">
 *   Copyright (c) 2023 Aspose.Words for Cloud
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

import { AttributeInfo } from '../internal/attributeInfo';
import { ModelInterface } from './modelInterface';

export const importsMapXmlDataLoadOptions = {
};

/**
 * Represents options for XML data loading.
 * To learn more, visit the LINQ Reporting Engine documentation article.
 * An instance of this class can be passed into constructors of XmlDataSource.
 */
export class XmlDataLoadOptions implements ModelInterface {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "alwaysGenerateRootObject",
            baseName: "AlwaysGenerateRootObject",
            type: "boolean",
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return XmlDataLoadOptions.attributeTypeMap;
    }

    /**
     * Gets or sets a flag indicating whether a generated data source will always contain an object for an XML root
     * element. If an XML root element has no attributes and all its child elements have same names, such an object
     * is not created by default.
     * The default value is false.
     */
    public alwaysGenerateRootObject: boolean;

    public constructor(init?: Partial< XmlDataLoadOptions >) {
        Object.assign(this, init);
    }

    public collectFilesContent(_resultFilesContent: Array<any>) {
    }

    public validate() {
        if (this.alwaysGenerateRootObject === null || this.alwaysGenerateRootObject === undefined)
        {
            throw new Error('Property AlwaysGenerateRootObject in XmlDataLoadOptions is required.');
        }

    }
}


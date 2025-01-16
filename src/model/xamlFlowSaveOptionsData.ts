/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="xamlFlowSaveOptionsData.ts">
 *   Copyright (c) 2025 Aspose.Words for Cloud
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
import { SaveOptionsData } from './saveOptionsData';

export const importsMapXamlFlowSaveOptionsData = {
    SaveOptionsData,
};

/**
 * Container class for xaml flow save options.
 */
export class XamlFlowSaveOptionsData extends SaveOptionsData {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "imagesFolder",
            baseName: "ImagesFolder",
            type: "string",
        },
        {
            name: "imagesFolderAlias",
            baseName: "ImagesFolderAlias",
            type: "string",
        },
        {
            name: "replaceBackslashWithYenSign",
            baseName: "ReplaceBackslashWithYenSign",
            type: "boolean",
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(XamlFlowSaveOptionsData.attributeTypeMap);
    }

    /**
     * Gets or sets the physical folder where images are saved when exporting.
     */
    public imagesFolder: string;

    /**
     * Gets or sets the name of the folder used to construct image URIs.
     */
    public imagesFolderAlias: string;

    /**
     * Gets or sets the flag that indicates whether backslash characters should be replaced with yen signs.
     * Default value is false.
     * By default, Aspose.Words mimics MS Word's behavior and doesn't replace backslash characters with yen signs in
     * generated HTML documents. However, previous versions of Aspose.Words performed such replacements in certain
     * scenarios. This flag enables backward compatibility with previous versions of Aspose.Words.
     */
    public replaceBackslashWithYenSign: boolean;

    public constructor(init?: Partial< XamlFlowSaveOptionsData >) {
        super(init);
        this.saveFormat = 'xamlflow';

        Object.assign(this, init);
    }

    public collectFilesContent(_resultFilesContent: Array<any>) {
    }

    public validate() {
        super.validate();
    }
}


/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="optimizationOptions.ts">
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

import { AttributeInfo } from '../internal/attributeInfo';

export const importsMapOptimizationOptions = {
};

/**
 * Container class for the document optimization options.
 */
export class OptimizationOptions {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "msWordVersion",
            baseName: "MsWordVersion",
            type: "OptimizationOptions.MsWordVersionEnum",
        }
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return OptimizationOptions.attributeTypeMap;
    }

    /**
     * Gets or sets specific MSWord version.
     */
    public msWordVersion: OptimizationOptions.MsWordVersionEnum;

    public constructor(init?: Partial< OptimizationOptions >) {
        Object.assign(this, init);
    }
}

/**
 * Enums for OptimizationOptions
 */
// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace OptimizationOptions {
    export enum MsWordVersionEnum {
        Word2000 = 'Word2000' as any,
        Word2002 = 'Word2002' as any,
        Word2003 = 'Word2003' as any,
        Word2007 = 'Word2007' as any,
        Word2010 = 'Word2010' as any,
        Word2013 = 'Word2013' as any,
        Word2016 = 'Word2016' as any,
        Word2019 = 'Word2019' as any
    }
}
// tslint:enable:quotemark


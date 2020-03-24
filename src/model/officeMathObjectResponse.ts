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
import { OfficeMathObject } from './officeMathObject';
import { WordsResponse } from './wordsResponse';

export const importsMapOfficeMathObjectResponse = {
    OfficeMathObject,
    WordsResponse,
};

/**
 * This response should be returned by the service when handling: GET https://api.aspose.cloud/v4.0/words/Test.doc/officeMathObjects/0.
 */
export class OfficeMathObjectResponse extends WordsResponse {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "officeMathObject",
            baseName: "OfficeMathObject",
            type: "OfficeMathObject",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(OfficeMathObjectResponse.attributeTypeMap);
    }

    /**
     * Gets or sets officeMathObject.
     */
    public officeMathObject: OfficeMathObject;
    
    public constructor(init?: Partial<OfficeMathObjectResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

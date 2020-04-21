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

export const importsMapStyleUpdate = {
};

/**
 * Represents a single document style properties to update.
 */
export class StyleUpdate {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "nextParagraphStyleName",
            baseName: "NextParagraphStyleName",
            type: "string",
        },        
        {
            name: "baseStyleName",
            baseName: "BaseStyleName",
            type: "string",
        },        
        {
            name: "isQuickStyle",
            baseName: "IsQuickStyle",
            type: "boolean",
        },        
        {
            name: "name",
            baseName: "Name",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return StyleUpdate.attributeTypeMap;
    }

    /**
     * Gets or sets /sets the name of the style to be applied automatically to a new paragraph inserted after a paragraph formatted with the specified style.
     */
    public nextParagraphStyleName: string;
    
    /**
     * Gets or sets /sets the name of the style this style is based on.
     */
    public baseStyleName: string;
    
    /**
     * Gets or sets a value indicating whether specifies whether this style is shown in the Quick Style gallery inside MS Word UI.
     */
    public isQuickStyle: boolean;
    
    /**
     * Gets or sets the name of the style.
     */
    public name: string;
    
    public constructor(init?: Partial<StyleUpdate>) {
        
        Object.assign(this, init);
    }        
}

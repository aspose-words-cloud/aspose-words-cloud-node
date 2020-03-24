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
import { FixedPageSaveOptionsData } from './fixedPageSaveOptionsData';
import { MetafileRenderingOptionsData } from './metafileRenderingOptionsData';
import { OutlineOptionsData } from './outlineOptionsData';

export const importsMapXpsSaveOptionsData = {
    FixedPageSaveOptionsData,
    MetafileRenderingOptionsData,
    OutlineOptionsData,
};

/**
 * Container class for xps save options.
 */
export class XpsSaveOptionsData extends FixedPageSaveOptionsData {
    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "bookmarksOutlineLevel",
            baseName: "BookmarksOutlineLevel",
            type: "number",
        },        
        {
            name: "headingsOutlineLevels",
            baseName: "HeadingsOutlineLevels",
            type: "number",
        },        
        {
            name: "outlineOptions",
            baseName: "OutlineOptions",
            type: "OutlineOptionsData",
        },        
        {
            name: "useBookFoldPrintingSettings",
            baseName: "UseBookFoldPrintingSettings",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(XpsSaveOptionsData.attributeTypeMap);
    }

    /**
     * Gets or sets specifies the level in the XPS document outline at which to display Word bookmarks.
     */
    public bookmarksOutlineLevel: number;
    
    /**
     * Gets or sets specifies how many levels of headings (paragraphs formatted with the Heading styles) to include in the XPS document outline.
     */
    public headingsOutlineLevels: number;
    
    /**
     * Gets or sets outlineOptions.
     */
    public outlineOptions: OutlineOptionsData;
    
    /**
     * Gets or sets determines whether the document should be saved using a booklet printing layout.
     */
    public useBookFoldPrintingSettings: boolean;
    
    public constructor(init?: Partial<XpsSaveOptionsData>) {
        super(init);
        Object.assign(this, init);
    }        
}

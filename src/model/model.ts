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

export class AsposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "code",
            baseName: "Code",
            type: "number",
        },        
        {
            name: "status",
            baseName: "Status",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return AsposeResponse.attributeTypeMap;
    }

    public code: number;
    
    public status: string;
    
    public constructor(init?: Partial<AsposeResponse>) {
        
        Object.assign(this, init);
    }        
}

export class BookmarkData {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "name",
            baseName: "Name",
            type: "string",
        },        
        {
            name: "text",
            baseName: "Text",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return BookmarkData.attributeTypeMap;
    }

    public name: string;
    
    public text: string;
    
    public constructor(init?: Partial<BookmarkData>) {
        
        Object.assign(this, init);
    }        
}

export class ClassificationResult {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "className",
            baseName: "ClassName",
            type: "string",
        },        
        {
            name: "classProbability",
            baseName: "ClassProbability",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ClassificationResult.attributeTypeMap;
    }

    public className: string;
    
    public classProbability: number;
    
    public constructor(init?: Partial<ClassificationResult>) {
        
        Object.assign(this, init);
    }        
}

export class CompareData {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "comparingWithDocument",
            baseName: "ComparingWithDocument",
            type: "string",
        },        
        {
            name: "author",
            baseName: "Author",
            type: "string",
        },        
        {
            name: "dateTime",
            baseName: "DateTime",
            type: "Date",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return CompareData.attributeTypeMap;
    }

    public comparingWithDocument: string;
    
    public author: string;
    
    public dateTime: Date;
    
    public constructor(init?: Partial<CompareData>) {
        
        Object.assign(this, init);
    }        
}

export class Document {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "links",
            baseName: "Links",
            type: "Array<Link>",
        },        
        {
            name: "fileName",
            baseName: "FileName",
            type: "string",
        },        
        {
            name: "sourceFormat",
            baseName: "SourceFormat",
            type: "Document.SourceFormatEnum",
        },        
        {
            name: "isEncrypted",
            baseName: "IsEncrypted",
            type: "boolean",
        },        
        {
            name: "isSigned",
            baseName: "IsSigned",
            type: "boolean",
        },        
        {
            name: "documentProperties",
            baseName: "DocumentProperties",
            type: "DocumentProperties",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Document.attributeTypeMap;
    }

    public links: Array<Link>;
    
    public fileName: string;
    
    public sourceFormat: Document.SourceFormatEnum;
    
    public isEncrypted: boolean;
    
    public isSigned: boolean;
    
    public documentProperties: DocumentProperties;
    
    public constructor(init?: Partial<Document>) {
        
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace Document {
    export enum SourceFormatEnum {
        Unknown = 'Unknown' as any,
        Doc = 'Doc' as any,
        Dot = 'Dot' as any,
        DocPreWord60 = 'DocPreWord60' as any,
        Docx = 'Docx' as any,
        Docm = 'Docm' as any,
        Dotx = 'Dotx' as any,
        Dotm = 'Dotm' as any,
        FlatOpc = 'FlatOpc' as any,
        Rtf = 'Rtf' as any,
        WordML = 'WordML' as any,
        Html = 'Html' as any,
        Mhtml = 'Mhtml' as any,
        Epub = 'Epub' as any,
        Text = 'Text' as any,
        Odt = 'Odt' as any,
        Ott = 'Ott' as any,
        Pdf = 'Pdf' as any,
        Xps = 'Xps' as any,
        Tiff = 'Tiff' as any,
        Svg = 'Svg' as any,
    }
}
// tslint:enable:quotemark
export class DocumentEntry {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "href",
            baseName: "Href",
            type: "string",
        },        
        {
            name: "importFormatMode",
            baseName: "ImportFormatMode",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return DocumentEntry.attributeTypeMap;
    }

    public href: string;
    
    public importFormatMode: string;
    
    public constructor(init?: Partial<DocumentEntry>) {
        
        Object.assign(this, init);
    }        
}

export class DocumentEntryList {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "documentEntries",
            baseName: "DocumentEntries",
            type: "Array<DocumentEntry>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return DocumentEntryList.attributeTypeMap;
    }

    public documentEntries: Array<DocumentEntry>;
    
    public constructor(init?: Partial<DocumentEntryList>) {
        
        Object.assign(this, init);
    }        
}

export class DocumentPosition {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "node",
            baseName: "Node",
            type: "NodeLink",
        },        
        {
            name: "offset",
            baseName: "Offset",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return DocumentPosition.attributeTypeMap;
    }

    public node: NodeLink;
    
    public offset: number;
    
    public constructor(init?: Partial<DocumentPosition>) {
        
        Object.assign(this, init);
    }        
}

export class DocumentStatData {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "wordCount",
            baseName: "WordCount",
            type: "number",
        },        
        {
            name: "paragraphCount",
            baseName: "ParagraphCount",
            type: "number",
        },        
        {
            name: "pageCount",
            baseName: "PageCount",
            type: "number",
        },        
        {
            name: "footnotesStatData",
            baseName: "FootnotesStatData",
            type: "FootnotesStatData",
        },        
        {
            name: "pageStatData",
            baseName: "PageStatData",
            type: "Array<PageStatData>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return DocumentStatData.attributeTypeMap;
    }

    public wordCount: number;
    
    public paragraphCount: number;
    
    public pageCount: number;
    
    public footnotesStatData: FootnotesStatData;
    
    public pageStatData: Array<PageStatData>;
    
    public constructor(init?: Partial<DocumentStatData>) {
        
        Object.assign(this, init);
    }        
}

export class FontInfo {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "fontFamilyName",
            baseName: "FontFamilyName",
            type: "string",
        },        
        {
            name: "fullFontName",
            baseName: "FullFontName",
            type: "string",
        },        
        {
            name: "version",
            baseName: "Version",
            type: "string",
        },        
        {
            name: "filePath",
            baseName: "FilePath",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return FontInfo.attributeTypeMap;
    }

    public fontFamilyName: string;
    
    public fullFontName: string;
    
    public version: string;
    
    public filePath: string;
    
    public constructor(init?: Partial<FontInfo>) {
        
        Object.assign(this, init);
    }        
}

export class FootnotesStatData {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "wordCount",
            baseName: "WordCount",
            type: "number",
        },        
        {
            name: "paragraphCount",
            baseName: "ParagraphCount",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return FootnotesStatData.attributeTypeMap;
    }

    public wordCount: number;
    
    public paragraphCount: number;
    
    public constructor(init?: Partial<FootnotesStatData>) {
        
        Object.assign(this, init);
    }        
}

export class GraphicsQualityOptionsData {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "compositingMode",
            baseName: "CompositingMode",
            type: "GraphicsQualityOptionsData.CompositingModeEnum",
        },        
        {
            name: "compositingQuality",
            baseName: "CompositingQuality",
            type: "GraphicsQualityOptionsData.CompositingQualityEnum",
        },        
        {
            name: "interpolationMode",
            baseName: "InterpolationMode",
            type: "GraphicsQualityOptionsData.InterpolationModeEnum",
        },        
        {
            name: "smoothingMode",
            baseName: "SmoothingMode",
            type: "GraphicsQualityOptionsData.SmoothingModeEnum",
        },        
        {
            name: "stringFormat",
            baseName: "StringFormat",
            type: "StringFormatData",
        },        
        {
            name: "textRenderingHint",
            baseName: "TextRenderingHint",
            type: "GraphicsQualityOptionsData.TextRenderingHintEnum",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return GraphicsQualityOptionsData.attributeTypeMap;
    }

    public compositingMode: GraphicsQualityOptionsData.CompositingModeEnum;
    
    public compositingQuality: GraphicsQualityOptionsData.CompositingQualityEnum;
    
    public interpolationMode: GraphicsQualityOptionsData.InterpolationModeEnum;
    
    public smoothingMode: GraphicsQualityOptionsData.SmoothingModeEnum;
    
    public stringFormat: StringFormatData;
    
    public textRenderingHint: GraphicsQualityOptionsData.TextRenderingHintEnum;
    
    public constructor(init?: Partial<GraphicsQualityOptionsData>) {
        
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace GraphicsQualityOptionsData {
    export enum CompositingModeEnum {
        SourceOver = 'SourceOver' as any,
        SourceCopy = 'SourceCopy' as any,
    }
    export enum CompositingQualityEnum {
        Default = 'Default' as any,
        HighSpeed = 'HighSpeed' as any,
        HighQuality = 'HighQuality' as any,
        GammaCorrected = 'GammaCorrected' as any,
        AssumeLinear = 'AssumeLinear' as any,
        Invalid = 'Invalid' as any,
    }
    export enum InterpolationModeEnum {
        Default = 'Default' as any,
        Low = 'Low' as any,
        High = 'High' as any,
        Bilinear = 'Bilinear' as any,
        Bicubic = 'Bicubic' as any,
        NearestNeighbor = 'NearestNeighbor' as any,
        HighQualityBilinear = 'HighQualityBilinear' as any,
        HighQualityBicubic = 'HighQualityBicubic' as any,
        Invalid = 'Invalid' as any,
    }
    export enum SmoothingModeEnum {
        Default = 'Default' as any,
        HighSpeed = 'HighSpeed' as any,
        HighQuality = 'HighQuality' as any,
        None = 'None' as any,
        AntiAlias = 'AntiAlias' as any,
        Invalid = 'Invalid' as any,
    }
    export enum TextRenderingHintEnum {
        SystemDefault = 'SystemDefault' as any,
        SingleBitPerPixelGridFit = 'SingleBitPerPixelGridFit' as any,
        SingleBitPerPixel = 'SingleBitPerPixel' as any,
        AntiAliasGridFit = 'AntiAliasGridFit' as any,
        AntiAlias = 'AntiAlias' as any,
        ClearTypeGridFit = 'ClearTypeGridFit' as any,
    }
}
// tslint:enable:quotemark
export class Link {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "href",
            baseName: "Href",
            type: "string",
        },        
        {
            name: "rel",
            baseName: "Rel",
            type: "string",
        },        
        {
            name: "type",
            baseName: "Type",
            type: "string",
        },        
        {
            name: "title",
            baseName: "Title",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Link.attributeTypeMap;
    }

    public href: string;
    
    public rel: string;
    
    public type: string;
    
    public title: string;
    
    public constructor(init?: Partial<Link>) {
        
        Object.assign(this, init);
    }        
}

export class LinkElement {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "link",
            baseName: "link",
            type: "WordsApiLink",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return LinkElement.attributeTypeMap;
    }

    public link: WordsApiLink;
    
    public constructor(init?: Partial<LinkElement>) {
        
        Object.assign(this, init);
    }        
}

export class LoadWebDocumentData {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "loadingDocumentUrl",
            baseName: "LoadingDocumentUrl",
            type: "string",
        },        
        {
            name: "saveOptions",
            baseName: "SaveOptions",
            type: "SaveOptionsData",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return LoadWebDocumentData.attributeTypeMap;
    }

    public loadingDocumentUrl: string;
    
    public saveOptions: SaveOptionsData;
    
    public constructor(init?: Partial<LoadWebDocumentData>) {
        
        Object.assign(this, init);
    }        
}

export class MetafileRenderingOptionsData {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "emfPlusDualRenderingMode",
            baseName: "EmfPlusDualRenderingMode",
            type: "string",
        },        
        {
            name: "emulateRasterOperations",
            baseName: "EmulateRasterOperations",
            type: "boolean",
        },        
        {
            name: "renderingMode",
            baseName: "RenderingMode",
            type: "string",
        },        
        {
            name: "useEmfEmbeddedToWmf",
            baseName: "UseEmfEmbeddedToWmf",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return MetafileRenderingOptionsData.attributeTypeMap;
    }

    public emfPlusDualRenderingMode: string;
    
    public emulateRasterOperations: boolean;
    
    public renderingMode: string;
    
    public useEmfEmbeddedToWmf: boolean;
    
    public constructor(init?: Partial<MetafileRenderingOptionsData>) {
        
        Object.assign(this, init);
    }        
}

export class ModificationOperationResult {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "source",
            baseName: "Source",
            type: "FileLink",
        },        
        {
            name: "dest",
            baseName: "Dest",
            type: "FileLink",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ModificationOperationResult.attributeTypeMap;
    }

    public source: FileLink;
    
    public dest: FileLink;
    
    public constructor(init?: Partial<ModificationOperationResult>) {
        
        Object.assign(this, init);
    }        
}

export class PageNumber {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "format",
            baseName: "Format",
            type: "string",
        },        
        {
            name: "alignment",
            baseName: "Alignment",
            type: "string",
        },        
        {
            name: "isTop",
            baseName: "IsTop",
            type: "boolean",
        },        
        {
            name: "setPageNumberOnFirstPage",
            baseName: "SetPageNumberOnFirstPage",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return PageNumber.attributeTypeMap;
    }

    public format: string;
    
    public alignment: string;
    
    public isTop: boolean;
    
    public setPageNumberOnFirstPage: boolean;
    
    public constructor(init?: Partial<PageNumber>) {
        
        Object.assign(this, init);
    }        
}

export class PageStatData {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "pageNumber",
            baseName: "PageNumber",
            type: "number",
        },        
        {
            name: "wordCount",
            baseName: "WordCount",
            type: "number",
        },        
        {
            name: "paragraphCount",
            baseName: "ParagraphCount",
            type: "number",
        },        
        {
            name: "footnotesStatData",
            baseName: "FootnotesStatData",
            type: "FootnotesStatData",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return PageStatData.attributeTypeMap;
    }

    public pageNumber: number;
    
    public wordCount: number;
    
    public paragraphCount: number;
    
    public footnotesStatData: FootnotesStatData;
    
    public constructor(init?: Partial<PageStatData>) {
        
        Object.assign(this, init);
    }        
}

export class ParagraphInsert {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "text",
            baseName: "Text",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ParagraphInsert.attributeTypeMap;
    }

    public text: string;
    
    public constructor(init?: Partial<ParagraphInsert>) {
        
        Object.assign(this, init);
    }        
}

export class PreferredWidth {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "type",
            baseName: "Type",
            type: "PreferredWidth.TypeEnum",
        },        
        {
            name: "value",
            baseName: "Value",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return PreferredWidth.attributeTypeMap;
    }

    public type: PreferredWidth.TypeEnum;
    
    public value: number;
    
    public constructor(init?: Partial<PreferredWidth>) {
        
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace PreferredWidth {
    export enum TypeEnum {
        Auto = 'Auto' as any,
        Percent = 'Percent' as any,
        Points = 'Points' as any,
    }
}
// tslint:enable:quotemark
export class ProtectionData {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "protectionType",
            baseName: "ProtectionType",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ProtectionData.attributeTypeMap;
    }

    public protectionType: string;
    
    public constructor(init?: Partial<ProtectionData>) {
        
        Object.assign(this, init);
    }        
}

export class ProtectionRequest {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "password",
            baseName: "Password",
            type: "string",
        },        
        {
            name: "newPassword",
            baseName: "NewPassword",
            type: "string",
        },        
        {
            name: "protectionType",
            baseName: "ProtectionType",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ProtectionRequest.attributeTypeMap;
    }

    public password: string;
    
    public newPassword: string;
    
    public protectionType: string;
    
    public constructor(init?: Partial<ProtectionRequest>) {
        
        Object.assign(this, init);
    }        
}

export class ReplaceTextRequest {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "oldValue",
            baseName: "OldValue",
            type: "string",
        },        
        {
            name: "newValue",
            baseName: "NewValue",
            type: "string",
        },        
        {
            name: "isMatchCase",
            baseName: "IsMatchCase",
            type: "boolean",
        },        
        {
            name: "isMatchWholeWord",
            baseName: "IsMatchWholeWord",
            type: "boolean",
        },        
        {
            name: "isOldValueRegex",
            baseName: "IsOldValueRegex",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ReplaceTextRequest.attributeTypeMap;
    }

    public oldValue: string;
    
    public newValue: string;
    
    public isMatchCase: boolean;
    
    public isMatchWholeWord: boolean;
    
    public isOldValueRegex: boolean;
    
    public constructor(init?: Partial<ReplaceTextRequest>) {
        
        Object.assign(this, init);
    }        
}

export class SaveOptionsData {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "colorMode",
            baseName: "ColorMode",
            type: "string",
        },        
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
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return SaveOptionsData.attributeTypeMap;
    }

    public colorMode: string;
    
    public saveFormat: string;
    
    public fileName: string;
    
    public dmlRenderingMode: string;
    
    public dmlEffectsRenderingMode: string;
    
    public zipOutput: boolean;
    
    public updateLastSavedTimeProperty: boolean;
    
    public updateSdtContent: boolean;
    
    public updateFields: boolean;
    
    public constructor(init?: Partial<SaveOptionsData>) {
        
        Object.assign(this, init);
    }        
}

export class SaveResult {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "sourceDocument",
            baseName: "SourceDocument",
            type: "FileLink",
        },        
        {
            name: "destDocument",
            baseName: "DestDocument",
            type: "FileLink",
        },        
        {
            name: "additionalItems",
            baseName: "AdditionalItems",
            type: "Array<FileLink>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return SaveResult.attributeTypeMap;
    }

    public sourceDocument: FileLink;
    
    public destDocument: FileLink;
    
    public additionalItems: Array<FileLink>;
    
    public constructor(init?: Partial<SaveResult>) {
        
        Object.assign(this, init);
    }        
}

export class SearchResult {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "rangeStart",
            baseName: "RangeStart",
            type: "DocumentPosition",
        },        
        {
            name: "rangeEnd",
            baseName: "RangeEnd",
            type: "DocumentPosition",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return SearchResult.attributeTypeMap;
    }

    public rangeStart: DocumentPosition;
    
    public rangeEnd: DocumentPosition;
    
    public constructor(init?: Partial<SearchResult>) {
        
        Object.assign(this, init);
    }        
}

export class SplitDocumentResult {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "sourceDocument",
            baseName: "SourceDocument",
            type: "FileLink",
        },        
        {
            name: "pages",
            baseName: "Pages",
            type: "Array<FileLink>",
        },        
        {
            name: "zippedPages",
            baseName: "ZippedPages",
            type: "FileLink",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return SplitDocumentResult.attributeTypeMap;
    }

    public sourceDocument: FileLink;
    
    public pages: Array<FileLink>;
    
    public zippedPages: FileLink;
    
    public constructor(init?: Partial<SplitDocumentResult>) {
        
        Object.assign(this, init);
    }        
}

export class StoryChildNodes {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "childNodes",
            baseName: "ChildNodes",
            type: "Array<NodeLink>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return StoryChildNodes.attributeTypeMap;
    }

    public childNodes: Array<NodeLink>;
    
    public constructor(init?: Partial<StoryChildNodes>) {
        
        Object.assign(this, init);
    }        
}

export class StringFormatData {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "alignment",
            baseName: "Alignment",
            type: "StringFormatData.AlignmentEnum",
        },        
        {
            name: "formatFlags",
            baseName: "FormatFlags",
            type: "StringFormatData.FormatFlagsEnum",
        },        
        {
            name: "hotkeyPrefix",
            baseName: "HotkeyPrefix",
            type: "StringFormatData.HotkeyPrefixEnum",
        },        
        {
            name: "lineAlignment",
            baseName: "LineAlignment",
            type: "StringFormatData.LineAlignmentEnum",
        },        
        {
            name: "trimming",
            baseName: "Trimming",
            type: "StringFormatData.TrimmingEnum",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return StringFormatData.attributeTypeMap;
    }

    public alignment: StringFormatData.AlignmentEnum;
    
    public formatFlags: StringFormatData.FormatFlagsEnum;
    
    public hotkeyPrefix: StringFormatData.HotkeyPrefixEnum;
    
    public lineAlignment: StringFormatData.LineAlignmentEnum;
    
    public trimming: StringFormatData.TrimmingEnum;
    
    public constructor(init?: Partial<StringFormatData>) {
        
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace StringFormatData {
    export enum AlignmentEnum {
        Near = 'Near' as any,
        Center = 'Center' as any,
        Far = 'Far' as any,
    }
    export enum FormatFlagsEnum {
        DirectionRightToLeft = 'DirectionRightToLeft' as any,
        DirectionVertical = 'DirectionVertical' as any,
        FitBlackBox = 'FitBlackBox' as any,
        DisplayFormatControl = 'DisplayFormatControl' as any,
        NoFontFallback = 'NoFontFallback' as any,
        MeasureTrailingSpaces = 'MeasureTrailingSpaces' as any,
        NoWrap = 'NoWrap' as any,
        LineLimit = 'LineLimit' as any,
        NoClip = 'NoClip' as any,
    }
    export enum HotkeyPrefixEnum {
        None = 'None' as any,
        Show = 'Show' as any,
        Hide = 'Hide' as any,
    }
    export enum LineAlignmentEnum {
        Near = 'Near' as any,
        Center = 'Center' as any,
        Far = 'Far' as any,
    }
    export enum TrimmingEnum {
        None = 'None' as any,
        Character = 'Character' as any,
        Word = 'Word' as any,
        EllipsisCharacter = 'EllipsisCharacter' as any,
        EllipsisWord = 'EllipsisWord' as any,
        EllipsisPath = 'EllipsisPath' as any,
    }
}
// tslint:enable:quotemark
export class TableCellInsert {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "insertAfter",
            baseName: "InsertAfter",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return TableCellInsert.attributeTypeMap;
    }

    public insertAfter: number;
    
    public constructor(init?: Partial<TableCellInsert>) {
        
        Object.assign(this, init);
    }        
}

export class TableInsert {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "postion",
            baseName: "Postion",
            type: "DocumentPosition",
        },        
        {
            name: "columnsCount",
            baseName: "ColumnsCount",
            type: "number",
        },        
        {
            name: "rowsCount",
            baseName: "RowsCount",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return TableInsert.attributeTypeMap;
    }

    public postion: DocumentPosition;
    
    public columnsCount: number;
    
    public rowsCount: number;
    
    public constructor(init?: Partial<TableInsert>) {
        
        Object.assign(this, init);
    }        
}

export class TableRowInsert {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "insertAfter",
            baseName: "InsertAfter",
            type: "number",
        },        
        {
            name: "columnsCount",
            baseName: "ColumnsCount",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return TableRowInsert.attributeTypeMap;
    }

    public insertAfter: number;
    
    public columnsCount: number;
    
    public constructor(init?: Partial<TableRowInsert>) {
        
        Object.assign(this, init);
    }        
}

export class WatermarkText {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "text",
            baseName: "Text",
            type: "string",
        },        
        {
            name: "rotationAngle",
            baseName: "RotationAngle",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return WatermarkText.attributeTypeMap;
    }

    public text: string;
    
    public rotationAngle: number;
    
    public constructor(init?: Partial<WatermarkText>) {
        
        Object.assign(this, init);
    }        
}

export class XmlColor {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "web",
            baseName: "Web",
            type: "string",
        },        
        {
            name: "alpha",
            baseName: "Alpha",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return XmlColor.attributeTypeMap;
    }

    public web: string;
    
    public alpha: number;
    
    public constructor(init?: Partial<XmlColor>) {
        
        Object.assign(this, init);
    }        
}

export class AvailableFontsResponse extends AsposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "additionalFonts",
            baseName: "AdditionalFonts",
            type: "Array<FontInfo>",
        },        
        {
            name: "customFonts",
            baseName: "CustomFonts",
            type: "Array<FontInfo>",
        },        
        {
            name: "systemFonts",
            baseName: "SystemFonts",
            type: "Array<FontInfo>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(AvailableFontsResponse.attributeTypeMap);
    }

    public additionalFonts: Array<FontInfo>;
    
    public customFonts: Array<FontInfo>;
    
    public systemFonts: Array<FontInfo>;
    
    public constructor(init?: Partial<AvailableFontsResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class Bookmark extends LinkElement {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "name",
            baseName: "Name",
            type: "string",
        },        
        {
            name: "text",
            baseName: "Text",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(Bookmark.attributeTypeMap);
    }

    public name: string;
    
    public text: string;
    
    public constructor(init?: Partial<Bookmark>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class BookmarkResponse extends AsposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "bookmark",
            baseName: "Bookmark",
            type: "Bookmark",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(BookmarkResponse.attributeTypeMap);
    }

    public bookmark: Bookmark;
    
    public constructor(init?: Partial<BookmarkResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class Bookmarks extends LinkElement {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "bookmarkList",
            baseName: "BookmarkList",
            type: "Array<Bookmark>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(Bookmarks.attributeTypeMap);
    }

    public bookmarkList: Array<Bookmark>;
    
    public constructor(init?: Partial<Bookmarks>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class BookmarksResponse extends AsposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "bookmarks",
            baseName: "Bookmarks",
            type: "Bookmarks",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(BookmarksResponse.attributeTypeMap);
    }

    public bookmarks: Bookmarks;
    
    public constructor(init?: Partial<BookmarksResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class Border extends LinkElement {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "borderType",
            baseName: "BorderType",
            type: "Border.BorderTypeEnum",
        },        
        {
            name: "color",
            baseName: "Color",
            type: "XmlColor",
        },        
        {
            name: "distanceFromText",
            baseName: "DistanceFromText",
            type: "number",
        },        
        {
            name: "lineStyle",
            baseName: "LineStyle",
            type: "Border.LineStyleEnum",
        },        
        {
            name: "lineWidth",
            baseName: "LineWidth",
            type: "number",
        },        
        {
            name: "shadow",
            baseName: "Shadow",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(Border.attributeTypeMap);
    }

    public borderType: Border.BorderTypeEnum;
    
    public color: XmlColor;
    
    public distanceFromText: number;
    
    public lineStyle: Border.LineStyleEnum;
    
    public lineWidth: number;
    
    public shadow: boolean;
    
    public constructor(init?: Partial<Border>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace Border {
    export enum BorderTypeEnum {
        Bottom = 'Bottom' as any,
        Left = 'Left' as any,
        Right = 'Right' as any,
        Top = 'Top' as any,
        Horizontal = 'Horizontal' as any,
        Vertical = 'Vertical' as any,
        DiagonalDown = 'DiagonalDown' as any,
        DiagonalUp = 'DiagonalUp' as any,
        None = 'None' as any,
    }
    export enum LineStyleEnum {
        None = 'None' as any,
        Single = 'Single' as any,
        Thick = 'Thick' as any,
        Double = 'Double' as any,
        Hairline = 'Hairline' as any,
        Dot = 'Dot' as any,
        DashLargeGap = 'DashLargeGap' as any,
        DotDash = 'DotDash' as any,
        DotDotDash = 'DotDotDash' as any,
        Triple = 'Triple' as any,
        ThinThickSmallGap = 'ThinThickSmallGap' as any,
        ThickThinSmallGap = 'ThickThinSmallGap' as any,
        ThinThickThinSmallGap = 'ThinThickThinSmallGap' as any,
        ThinThickMediumGap = 'ThinThickMediumGap' as any,
        ThickThinMediumGap = 'ThickThinMediumGap' as any,
        ThinThickThinMediumGap = 'ThinThickThinMediumGap' as any,
        ThinThickLargeGap = 'ThinThickLargeGap' as any,
        ThickThinLargeGap = 'ThickThinLargeGap' as any,
        ThinThickThinLargeGap = 'ThinThickThinLargeGap' as any,
        Wave = 'Wave' as any,
        DoubleWave = 'DoubleWave' as any,
        DashSmallGap = 'DashSmallGap' as any,
        DashDotStroker = 'DashDotStroker' as any,
        Emboss3D = 'Emboss3D' as any,
        Engrave3D = 'Engrave3D' as any,
        Outset = 'Outset' as any,
        Inset = 'Inset' as any,
    }
}
// tslint:enable:quotemark
export class BorderResponse extends AsposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "border",
            baseName: "Border",
            type: "Border",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(BorderResponse.attributeTypeMap);
    }

    public border: Border;
    
    public constructor(init?: Partial<BorderResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class BordersCollection extends LinkElement {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "list",
            baseName: "List",
            type: "Array<Border>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(BordersCollection.attributeTypeMap);
    }

    public list: Array<Border>;
    
    public constructor(init?: Partial<BordersCollection>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class BordersResponse extends AsposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "borders",
            baseName: "Borders",
            type: "BordersCollection",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(BordersResponse.attributeTypeMap);
    }

    public borders: BordersCollection;
    
    public constructor(init?: Partial<BordersResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class ClassificationResponse extends AsposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "bestClassName",
            baseName: "BestClassName",
            type: "string",
        },        
        {
            name: "bestClassProbability",
            baseName: "BestClassProbability",
            type: "number",
        },        
        {
            name: "bestResults",
            baseName: "BestResults",
            type: "Array<ClassificationResult>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ClassificationResponse.attributeTypeMap);
    }

    public bestClassName: string;
    
    public bestClassProbability: number;
    
    public bestResults: Array<ClassificationResult>;
    
    public constructor(init?: Partial<ClassificationResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class CommentLink extends LinkElement {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(CommentLink.attributeTypeMap);
    }

    public constructor(init?: Partial<CommentLink>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class CommentResponse extends AsposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "comment",
            baseName: "Comment",
            type: "Comment",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(CommentResponse.attributeTypeMap);
    }

    public comment: Comment;
    
    public constructor(init?: Partial<CommentResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class CommentsCollection extends LinkElement {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "commentList",
            baseName: "CommentList",
            type: "Array<Comment>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(CommentsCollection.attributeTypeMap);
    }

    public commentList: Array<Comment>;
    
    public constructor(init?: Partial<CommentsCollection>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class CommentsResponse extends AsposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "comments",
            baseName: "Comments",
            type: "CommentsCollection",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(CommentsResponse.attributeTypeMap);
    }

    public comments: CommentsCollection;
    
    public constructor(init?: Partial<CommentsResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class DocumentProperties extends LinkElement {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "list",
            baseName: "List",
            type: "Array<DocumentProperty>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(DocumentProperties.attributeTypeMap);
    }

    public list: Array<DocumentProperty>;
    
    public constructor(init?: Partial<DocumentProperties>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class DocumentPropertiesResponse extends AsposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "documentProperties",
            baseName: "DocumentProperties",
            type: "DocumentProperties",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(DocumentPropertiesResponse.attributeTypeMap);
    }

    public documentProperties: DocumentProperties;
    
    public constructor(init?: Partial<DocumentPropertiesResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class DocumentProperty extends LinkElement {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "builtIn",
            baseName: "BuiltIn",
            type: "boolean",
        },        
        {
            name: "name",
            baseName: "Name",
            type: "string",
        },        
        {
            name: "value",
            baseName: "Value",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(DocumentProperty.attributeTypeMap);
    }

    public builtIn: boolean;
    
    public name: string;
    
    public value: string;
    
    public constructor(init?: Partial<DocumentProperty>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class DocumentPropertyResponse extends AsposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "documentProperty",
            baseName: "DocumentProperty",
            type: "DocumentProperty",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(DocumentPropertyResponse.attributeTypeMap);
    }

    public documentProperty: DocumentProperty;
    
    public constructor(init?: Partial<DocumentPropertyResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class DocumentResponse extends AsposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "document",
            baseName: "Document",
            type: "Document",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(DocumentResponse.attributeTypeMap);
    }

    public document: Document;
    
    public constructor(init?: Partial<DocumentResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class DrawingObjectCollection extends LinkElement {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "list",
            baseName: "List",
            type: "Array<LinkElement>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(DrawingObjectCollection.attributeTypeMap);
    }

    public list: Array<LinkElement>;
    
    public constructor(init?: Partial<DrawingObjectCollection>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class DrawingObjectResponse extends AsposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "drawingObject",
            baseName: "DrawingObject",
            type: "DrawingObject",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(DrawingObjectResponse.attributeTypeMap);
    }

    public drawingObject: DrawingObject;
    
    public constructor(init?: Partial<DrawingObjectResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class DrawingObjectsResponse extends AsposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "drawingObjects",
            baseName: "DrawingObjects",
            type: "DrawingObjectCollection",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(DrawingObjectsResponse.attributeTypeMap);
    }

    public drawingObjects: DrawingObjectCollection;
    
    public constructor(init?: Partial<DrawingObjectsResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class FieldCollection extends LinkElement {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "list",
            baseName: "List",
            type: "Array<Field>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(FieldCollection.attributeTypeMap);
    }

    public list: Array<Field>;
    
    public constructor(init?: Partial<FieldCollection>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class FieldNames extends LinkElement {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "names",
            baseName: "Names",
            type: "Array<string>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(FieldNames.attributeTypeMap);
    }

    public names: Array<string>;
    
    public constructor(init?: Partial<FieldNames>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class FieldNamesResponse extends AsposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "fieldNames",
            baseName: "FieldNames",
            type: "FieldNames",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(FieldNamesResponse.attributeTypeMap);
    }

    public fieldNames: FieldNames;
    
    public constructor(init?: Partial<FieldNamesResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class FieldResponse extends AsposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "field",
            baseName: "Field",
            type: "Field",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(FieldResponse.attributeTypeMap);
    }

    public field: Field;
    
    public constructor(init?: Partial<FieldResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class FieldsResponse extends AsposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "fields",
            baseName: "Fields",
            type: "FieldCollection",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(FieldsResponse.attributeTypeMap);
    }

    public fields: FieldCollection;
    
    public constructor(init?: Partial<FieldsResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class FileLink extends Link {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(FileLink.attributeTypeMap);
    }

    public constructor(init?: Partial<FileLink>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class FixedPageSaveOptionsData extends SaveOptionsData {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "jpegQuality",
            baseName: "JpegQuality",
            type: "number",
        },        
        {
            name: "metafileRenderingOptions",
            baseName: "MetafileRenderingOptions",
            type: "MetafileRenderingOptionsData",
        },        
        {
            name: "numeralFormat",
            baseName: "NumeralFormat",
            type: "string",
        },        
        {
            name: "optimizeOutput",
            baseName: "OptimizeOutput",
            type: "boolean",
        },        
        {
            name: "pageCount",
            baseName: "PageCount",
            type: "number",
        },        
        {
            name: "pageIndex",
            baseName: "PageIndex",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(FixedPageSaveOptionsData.attributeTypeMap);
    }

    public jpegQuality: number;
    
    public metafileRenderingOptions: MetafileRenderingOptionsData;
    
    public numeralFormat: string;
    
    public optimizeOutput: boolean;
    
    public pageCount: number;
    
    public pageIndex: number;
    
    public constructor(init?: Partial<FixedPageSaveOptionsData>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class Font extends LinkElement {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "allCaps",
            baseName: "AllCaps",
            type: "boolean",
        },        
        {
            name: "bidi",
            baseName: "Bidi",
            type: "boolean",
        },        
        {
            name: "bold",
            baseName: "Bold",
            type: "boolean",
        },        
        {
            name: "boldBi",
            baseName: "BoldBi",
            type: "boolean",
        },        
        {
            name: "border",
            baseName: "Border",
            type: "Border",
        },        
        {
            name: "color",
            baseName: "Color",
            type: "XmlColor",
        },        
        {
            name: "complexScript",
            baseName: "ComplexScript",
            type: "boolean",
        },        
        {
            name: "doubleStrikeThrough",
            baseName: "DoubleStrikeThrough",
            type: "boolean",
        },        
        {
            name: "emboss",
            baseName: "Emboss",
            type: "boolean",
        },        
        {
            name: "engrave",
            baseName: "Engrave",
            type: "boolean",
        },        
        {
            name: "hidden",
            baseName: "Hidden",
            type: "boolean",
        },        
        {
            name: "highlightColor",
            baseName: "HighlightColor",
            type: "XmlColor",
        },        
        {
            name: "italic",
            baseName: "Italic",
            type: "boolean",
        },        
        {
            name: "italicBi",
            baseName: "ItalicBi",
            type: "boolean",
        },        
        {
            name: "kerning",
            baseName: "Kerning",
            type: "number",
        },        
        {
            name: "localeId",
            baseName: "LocaleId",
            type: "number",
        },        
        {
            name: "localeIdBi",
            baseName: "LocaleIdBi",
            type: "number",
        },        
        {
            name: "localeIdFarEast",
            baseName: "LocaleIdFarEast",
            type: "number",
        },        
        {
            name: "name",
            baseName: "Name",
            type: "string",
        },        
        {
            name: "nameAscii",
            baseName: "NameAscii",
            type: "string",
        },        
        {
            name: "nameBi",
            baseName: "NameBi",
            type: "string",
        },        
        {
            name: "nameFarEast",
            baseName: "NameFarEast",
            type: "string",
        },        
        {
            name: "nameOther",
            baseName: "NameOther",
            type: "string",
        },        
        {
            name: "noProofing",
            baseName: "NoProofing",
            type: "boolean",
        },        
        {
            name: "outline",
            baseName: "Outline",
            type: "boolean",
        },        
        {
            name: "position",
            baseName: "Position",
            type: "number",
        },        
        {
            name: "scaling",
            baseName: "Scaling",
            type: "number",
        },        
        {
            name: "shadow",
            baseName: "Shadow",
            type: "boolean",
        },        
        {
            name: "size",
            baseName: "Size",
            type: "number",
        },        
        {
            name: "sizeBi",
            baseName: "SizeBi",
            type: "number",
        },        
        {
            name: "smallCaps",
            baseName: "SmallCaps",
            type: "boolean",
        },        
        {
            name: "spacing",
            baseName: "Spacing",
            type: "number",
        },        
        {
            name: "strikeThrough",
            baseName: "StrikeThrough",
            type: "boolean",
        },        
        {
            name: "styleIdentifier",
            baseName: "StyleIdentifier",
            type: "Font.StyleIdentifierEnum",
        },        
        {
            name: "styleName",
            baseName: "StyleName",
            type: "string",
        },        
        {
            name: "subscript",
            baseName: "Subscript",
            type: "boolean",
        },        
        {
            name: "superscript",
            baseName: "Superscript",
            type: "boolean",
        },        
        {
            name: "textEffect",
            baseName: "TextEffect",
            type: "Font.TextEffectEnum",
        },        
        {
            name: "underline",
            baseName: "Underline",
            type: "Font.UnderlineEnum",
        },        
        {
            name: "underlineColor",
            baseName: "UnderlineColor",
            type: "XmlColor",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(Font.attributeTypeMap);
    }

    public allCaps: boolean;
    
    public bidi: boolean;
    
    public bold: boolean;
    
    public boldBi: boolean;
    
    public border: Border;
    
    public color: XmlColor;
    
    public complexScript: boolean;
    
    public doubleStrikeThrough: boolean;
    
    public emboss: boolean;
    
    public engrave: boolean;
    
    public hidden: boolean;
    
    public highlightColor: XmlColor;
    
    public italic: boolean;
    
    public italicBi: boolean;
    
    public kerning: number;
    
    public localeId: number;
    
    public localeIdBi: number;
    
    public localeIdFarEast: number;
    
    public name: string;
    
    public nameAscii: string;
    
    public nameBi: string;
    
    public nameFarEast: string;
    
    public nameOther: string;
    
    public noProofing: boolean;
    
    public outline: boolean;
    
    public position: number;
    
    public scaling: number;
    
    public shadow: boolean;
    
    public size: number;
    
    public sizeBi: number;
    
    public smallCaps: boolean;
    
    public spacing: number;
    
    public strikeThrough: boolean;
    
    public styleIdentifier: Font.StyleIdentifierEnum;
    
    public styleName: string;
    
    public subscript: boolean;
    
    public superscript: boolean;
    
    public textEffect: Font.TextEffectEnum;
    
    public underline: Font.UnderlineEnum;
    
    public underlineColor: XmlColor;
    
    public constructor(init?: Partial<Font>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace Font {
    export enum StyleIdentifierEnum {
        Normal = 'Normal' as any,
        Heading1 = 'Heading1' as any,
        Heading2 = 'Heading2' as any,
        Heading3 = 'Heading3' as any,
        Heading4 = 'Heading4' as any,
        Heading5 = 'Heading5' as any,
        Heading6 = 'Heading6' as any,
        Heading7 = 'Heading7' as any,
        Heading8 = 'Heading8' as any,
        Heading9 = 'Heading9' as any,
        Index1 = 'Index1' as any,
        Index2 = 'Index2' as any,
        Index3 = 'Index3' as any,
        Index4 = 'Index4' as any,
        Index5 = 'Index5' as any,
        Index6 = 'Index6' as any,
        Index7 = 'Index7' as any,
        Index8 = 'Index8' as any,
        Index9 = 'Index9' as any,
        Toc1 = 'Toc1' as any,
        Toc2 = 'Toc2' as any,
        Toc3 = 'Toc3' as any,
        Toc4 = 'Toc4' as any,
        Toc5 = 'Toc5' as any,
        Toc6 = 'Toc6' as any,
        Toc7 = 'Toc7' as any,
        Toc8 = 'Toc8' as any,
        Toc9 = 'Toc9' as any,
        NormalIndent = 'NormalIndent' as any,
        FootnoteText = 'FootnoteText' as any,
        CommentText = 'CommentText' as any,
        Header = 'Header' as any,
        Footer = 'Footer' as any,
        IndexHeading = 'IndexHeading' as any,
        Caption = 'Caption' as any,
        TableOfFigures = 'TableOfFigures' as any,
        EnvelopeAddress = 'EnvelopeAddress' as any,
        EnvelopeReturn = 'EnvelopeReturn' as any,
        FootnoteReference = 'FootnoteReference' as any,
        CommentReference = 'CommentReference' as any,
        LineNumber = 'LineNumber' as any,
        PageNumber = 'PageNumber' as any,
        EndnoteReference = 'EndnoteReference' as any,
        EndnoteText = 'EndnoteText' as any,
        TableOfAuthorities = 'TableOfAuthorities' as any,
        Macro = 'Macro' as any,
        ToaHeading = 'ToaHeading' as any,
        List = 'List' as any,
        ListBullet = 'ListBullet' as any,
        ListNumber = 'ListNumber' as any,
        List2 = 'List2' as any,
        List3 = 'List3' as any,
        List4 = 'List4' as any,
        List5 = 'List5' as any,
        ListBullet2 = 'ListBullet2' as any,
        ListBullet3 = 'ListBullet3' as any,
        ListBullet4 = 'ListBullet4' as any,
        ListBullet5 = 'ListBullet5' as any,
        ListNumber2 = 'ListNumber2' as any,
        ListNumber3 = 'ListNumber3' as any,
        ListNumber4 = 'ListNumber4' as any,
        ListNumber5 = 'ListNumber5' as any,
        Title = 'Title' as any,
        Closing = 'Closing' as any,
        Signature = 'Signature' as any,
        DefaultParagraphFont = 'DefaultParagraphFont' as any,
        BodyText = 'BodyText' as any,
        BodyTextInd = 'BodyTextInd' as any,
        ListContinue = 'ListContinue' as any,
        ListContinue2 = 'ListContinue2' as any,
        ListContinue3 = 'ListContinue3' as any,
        ListContinue4 = 'ListContinue4' as any,
        ListContinue5 = 'ListContinue5' as any,
        MessageHeader = 'MessageHeader' as any,
        Subtitle = 'Subtitle' as any,
        Salutation = 'Salutation' as any,
        Date = 'Date' as any,
        BodyText1I = 'BodyText1I' as any,
        BodyText1I2 = 'BodyText1I2' as any,
        NoteHeading = 'NoteHeading' as any,
        BodyText2 = 'BodyText2' as any,
        BodyText3 = 'BodyText3' as any,
        BodyTextInd2 = 'BodyTextInd2' as any,
        BodyTextInd3 = 'BodyTextInd3' as any,
        BlockText = 'BlockText' as any,
        Hyperlink = 'Hyperlink' as any,
        FollowedHyperlink = 'FollowedHyperlink' as any,
        Strong = 'Strong' as any,
        Emphasis = 'Emphasis' as any,
        DocumentMap = 'DocumentMap' as any,
        PlainText = 'PlainText' as any,
        EmailSignature = 'EmailSignature' as any,
        HtmlTopOfForm = 'HtmlTopOfForm' as any,
        HtmlBottomOfForm = 'HtmlBottomOfForm' as any,
        NormalWeb = 'NormalWeb' as any,
        HtmlAcronym = 'HtmlAcronym' as any,
        HtmlAddress = 'HtmlAddress' as any,
        HtmlCite = 'HtmlCite' as any,
        HtmlCode = 'HtmlCode' as any,
        HtmlDefinition = 'HtmlDefinition' as any,
        HtmlKeyboard = 'HtmlKeyboard' as any,
        HtmlPreformatted = 'HtmlPreformatted' as any,
        HtmlSample = 'HtmlSample' as any,
        HtmlTypewriter = 'HtmlTypewriter' as any,
        HtmlVariable = 'HtmlVariable' as any,
        TableNormal = 'TableNormal' as any,
        CommentSubject = 'CommentSubject' as any,
        NoList = 'NoList' as any,
        OutlineList1 = 'OutlineList1' as any,
        OutlineList2 = 'OutlineList2' as any,
        OutlineList3 = 'OutlineList3' as any,
        TableSimple1 = 'TableSimple1' as any,
        TableSimple2 = 'TableSimple2' as any,
        TableSimple3 = 'TableSimple3' as any,
        TableClassic1 = 'TableClassic1' as any,
        TableClassic2 = 'TableClassic2' as any,
        TableClassic3 = 'TableClassic3' as any,
        TableClassic4 = 'TableClassic4' as any,
        TableColorful1 = 'TableColorful1' as any,
        TableColorful2 = 'TableColorful2' as any,
        TableColorful3 = 'TableColorful3' as any,
        TableColumns1 = 'TableColumns1' as any,
        TableColumns2 = 'TableColumns2' as any,
        TableColumns3 = 'TableColumns3' as any,
        TableColumns4 = 'TableColumns4' as any,
        TableColumns5 = 'TableColumns5' as any,
        TableGrid1 = 'TableGrid1' as any,
        TableGrid2 = 'TableGrid2' as any,
        TableGrid3 = 'TableGrid3' as any,
        TableGrid4 = 'TableGrid4' as any,
        TableGrid5 = 'TableGrid5' as any,
        TableGrid6 = 'TableGrid6' as any,
        TableGrid7 = 'TableGrid7' as any,
        TableGrid8 = 'TableGrid8' as any,
        TableList1 = 'TableList1' as any,
        TableList2 = 'TableList2' as any,
        TableList3 = 'TableList3' as any,
        TableList4 = 'TableList4' as any,
        TableList5 = 'TableList5' as any,
        TableList6 = 'TableList6' as any,
        TableList7 = 'TableList7' as any,
        TableList8 = 'TableList8' as any,
        Table3DEffects1 = 'Table3DEffects1' as any,
        Table3DEffects2 = 'Table3DEffects2' as any,
        Table3DEffects3 = 'Table3DEffects3' as any,
        TableContemporary = 'TableContemporary' as any,
        TableElegant = 'TableElegant' as any,
        TableProfessional = 'TableProfessional' as any,
        TableSubtle1 = 'TableSubtle1' as any,
        TableSubtle2 = 'TableSubtle2' as any,
        TableWeb1 = 'TableWeb1' as any,
        TableWeb2 = 'TableWeb2' as any,
        TableWeb3 = 'TableWeb3' as any,
        BalloonText = 'BalloonText' as any,
        TableGrid = 'TableGrid' as any,
        TableTheme = 'TableTheme' as any,
        PlaceholderText = 'PlaceholderText' as any,
        NoSpacing = 'NoSpacing' as any,
        LightShading = 'LightShading' as any,
        LightList = 'LightList' as any,
        LightGrid = 'LightGrid' as any,
        MediumShading1 = 'MediumShading1' as any,
        MediumShading2 = 'MediumShading2' as any,
        MediumList1 = 'MediumList1' as any,
        MediumList2 = 'MediumList2' as any,
        MediumGrid1 = 'MediumGrid1' as any,
        MediumGrid2 = 'MediumGrid2' as any,
        MediumGrid3 = 'MediumGrid3' as any,
        DarkList = 'DarkList' as any,
        ColorfulShading = 'ColorfulShading' as any,
        ColorfulList = 'ColorfulList' as any,
        ColorfulGrid = 'ColorfulGrid' as any,
        LightShadingAccent1 = 'LightShadingAccent1' as any,
        LightListAccent1 = 'LightListAccent1' as any,
        LightGridAccent1 = 'LightGridAccent1' as any,
        MediumShading1Accent1 = 'MediumShading1Accent1' as any,
        MediumShading2Accent1 = 'MediumShading2Accent1' as any,
        MediumList1Accent1 = 'MediumList1Accent1' as any,
        Revision = 'Revision' as any,
        ListParagraph = 'ListParagraph' as any,
        Quote = 'Quote' as any,
        IntenseQuote = 'IntenseQuote' as any,
        MediumList2Accent1 = 'MediumList2Accent1' as any,
        MediumGrid1Accent1 = 'MediumGrid1Accent1' as any,
        MediumGrid2Accent1 = 'MediumGrid2Accent1' as any,
        MediumGrid3Accent1 = 'MediumGrid3Accent1' as any,
        DarkListAccent1 = 'DarkListAccent1' as any,
        ColorfulShadingAccent1 = 'ColorfulShadingAccent1' as any,
        ColorfulListAccent1 = 'ColorfulListAccent1' as any,
        ColorfulGridAccent1 = 'ColorfulGridAccent1' as any,
        LightShadingAccent2 = 'LightShadingAccent2' as any,
        LightListAccent2 = 'LightListAccent2' as any,
        LightGridAccent2 = 'LightGridAccent2' as any,
        MediumShading1Accent2 = 'MediumShading1Accent2' as any,
        MediumShading2Accent2 = 'MediumShading2Accent2' as any,
        MediumList1Accent2 = 'MediumList1Accent2' as any,
        MediumList2Accent2 = 'MediumList2Accent2' as any,
        MediumGrid1Accent2 = 'MediumGrid1Accent2' as any,
        MediumGrid2Accent2 = 'MediumGrid2Accent2' as any,
        MediumGrid3Accent2 = 'MediumGrid3Accent2' as any,
        DarkListAccent2 = 'DarkListAccent2' as any,
        ColorfulShadingAccent2 = 'ColorfulShadingAccent2' as any,
        ColorfulListAccent2 = 'ColorfulListAccent2' as any,
        ColorfulGridAccent2 = 'ColorfulGridAccent2' as any,
        LightShadingAccent3 = 'LightShadingAccent3' as any,
        LightListAccent3 = 'LightListAccent3' as any,
        LightGridAccent3 = 'LightGridAccent3' as any,
        MediumShading1Accent3 = 'MediumShading1Accent3' as any,
        MediumShading2Accent3 = 'MediumShading2Accent3' as any,
        MediumList1Accent3 = 'MediumList1Accent3' as any,
        MediumList2Accent3 = 'MediumList2Accent3' as any,
        MediumGrid1Accent3 = 'MediumGrid1Accent3' as any,
        MediumGrid2Accent3 = 'MediumGrid2Accent3' as any,
        MediumGrid3Accent3 = 'MediumGrid3Accent3' as any,
        DarkListAccent3 = 'DarkListAccent3' as any,
        ColorfulShadingAccent3 = 'ColorfulShadingAccent3' as any,
        ColorfulListAccent3 = 'ColorfulListAccent3' as any,
        ColorfulGridAccent3 = 'ColorfulGridAccent3' as any,
        LightShadingAccent4 = 'LightShadingAccent4' as any,
        LightListAccent4 = 'LightListAccent4' as any,
        LightGridAccent4 = 'LightGridAccent4' as any,
        MediumShading1Accent4 = 'MediumShading1Accent4' as any,
        MediumShading2Accent4 = 'MediumShading2Accent4' as any,
        MediumList1Accent4 = 'MediumList1Accent4' as any,
        MediumList2Accent4 = 'MediumList2Accent4' as any,
        MediumGrid1Accent4 = 'MediumGrid1Accent4' as any,
        MediumGrid2Accent4 = 'MediumGrid2Accent4' as any,
        MediumGrid3Accent4 = 'MediumGrid3Accent4' as any,
        DarkListAccent4 = 'DarkListAccent4' as any,
        ColorfulShadingAccent4 = 'ColorfulShadingAccent4' as any,
        ColorfulListAccent4 = 'ColorfulListAccent4' as any,
        ColorfulGridAccent4 = 'ColorfulGridAccent4' as any,
        LightShadingAccent5 = 'LightShadingAccent5' as any,
        LightListAccent5 = 'LightListAccent5' as any,
        LightGridAccent5 = 'LightGridAccent5' as any,
        MediumShading1Accent5 = 'MediumShading1Accent5' as any,
        MediumShading2Accent5 = 'MediumShading2Accent5' as any,
        MediumList1Accent5 = 'MediumList1Accent5' as any,
        MediumList2Accent5 = 'MediumList2Accent5' as any,
        MediumGrid1Accent5 = 'MediumGrid1Accent5' as any,
        MediumGrid2Accent5 = 'MediumGrid2Accent5' as any,
        MediumGrid3Accent5 = 'MediumGrid3Accent5' as any,
        DarkListAccent5 = 'DarkListAccent5' as any,
        ColorfulShadingAccent5 = 'ColorfulShadingAccent5' as any,
        ColorfulListAccent5 = 'ColorfulListAccent5' as any,
        ColorfulGridAccent5 = 'ColorfulGridAccent5' as any,
        LightShadingAccent6 = 'LightShadingAccent6' as any,
        LightListAccent6 = 'LightListAccent6' as any,
        LightGridAccent6 = 'LightGridAccent6' as any,
        MediumShading1Accent6 = 'MediumShading1Accent6' as any,
        MediumShading2Accent6 = 'MediumShading2Accent6' as any,
        MediumList1Accent6 = 'MediumList1Accent6' as any,
        MediumList2Accent6 = 'MediumList2Accent6' as any,
        MediumGrid1Accent6 = 'MediumGrid1Accent6' as any,
        MediumGrid2Accent6 = 'MediumGrid2Accent6' as any,
        MediumGrid3Accent6 = 'MediumGrid3Accent6' as any,
        DarkListAccent6 = 'DarkListAccent6' as any,
        ColorfulShadingAccent6 = 'ColorfulShadingAccent6' as any,
        ColorfulListAccent6 = 'ColorfulListAccent6' as any,
        ColorfulGridAccent6 = 'ColorfulGridAccent6' as any,
        SubtleEmphasis = 'SubtleEmphasis' as any,
        IntenseEmphasis = 'IntenseEmphasis' as any,
        SubtleReference = 'SubtleReference' as any,
        IntenseReference = 'IntenseReference' as any,
        BookTitle = 'BookTitle' as any,
        Bibliography = 'Bibliography' as any,
        TocHeading = 'TocHeading' as any,
        PlainTable1 = 'PlainTable1' as any,
        PlainTable2 = 'PlainTable2' as any,
        PlainTable3 = 'PlainTable3' as any,
        PlainTable4 = 'PlainTable4' as any,
        PlainTable5 = 'PlainTable5' as any,
        TableGridLight = 'TableGridLight' as any,
        GridTable1Light = 'GridTable1Light' as any,
        GridTable2 = 'GridTable2' as any,
        GridTable3 = 'GridTable3' as any,
        GridTable4 = 'GridTable4' as any,
        GridTable5Dark = 'GridTable5Dark' as any,
        GridTable6Colorful = 'GridTable6Colorful' as any,
        GridTable7Colorful = 'GridTable7Colorful' as any,
        GridTable1LightAccent1 = 'GridTable1LightAccent1' as any,
        GridTable2Accent1 = 'GridTable2Accent1' as any,
        GridTable3Accent1 = 'GridTable3Accent1' as any,
        GridTable4Accent1 = 'GridTable4Accent1' as any,
        GridTable5DarkAccent1 = 'GridTable5DarkAccent1' as any,
        GridTable6ColorfulAccent1 = 'GridTable6ColorfulAccent1' as any,
        GridTable7ColorfulAccent1 = 'GridTable7ColorfulAccent1' as any,
        GridTable1LightAccent2 = 'GridTable1LightAccent2' as any,
        GridTable2Accent2 = 'GridTable2Accent2' as any,
        GridTable3Accent2 = 'GridTable3Accent2' as any,
        GridTable4Accent2 = 'GridTable4Accent2' as any,
        GridTable5DarkAccent2 = 'GridTable5DarkAccent2' as any,
        GridTable6ColorfulAccent2 = 'GridTable6ColorfulAccent2' as any,
        GridTable7ColorfulAccent2 = 'GridTable7ColorfulAccent2' as any,
        GridTable1LightAccent3 = 'GridTable1LightAccent3' as any,
        GridTable2Accent3 = 'GridTable2Accent3' as any,
        GridTable3Accent3 = 'GridTable3Accent3' as any,
        GridTable4Accent3 = 'GridTable4Accent3' as any,
        GridTable5DarkAccent3 = 'GridTable5DarkAccent3' as any,
        GridTable6ColorfulAccent3 = 'GridTable6ColorfulAccent3' as any,
        GridTable7ColorfulAccent3 = 'GridTable7ColorfulAccent3' as any,
        GridTable1LightAccent4 = 'GridTable1LightAccent4' as any,
        GridTable2Accent4 = 'GridTable2Accent4' as any,
        GridTable3Accent4 = 'GridTable3Accent4' as any,
        GridTable4Accent4 = 'GridTable4Accent4' as any,
        GridTable5DarkAccent4 = 'GridTable5DarkAccent4' as any,
        GridTable6ColorfulAccent4 = 'GridTable6ColorfulAccent4' as any,
        GridTable7ColorfulAccent4 = 'GridTable7ColorfulAccent4' as any,
        GridTable1LightAccent5 = 'GridTable1LightAccent5' as any,
        GridTable2Accent5 = 'GridTable2Accent5' as any,
        GridTable3Accent5 = 'GridTable3Accent5' as any,
        GridTable4Accent5 = 'GridTable4Accent5' as any,
        GridTable5DarkAccent5 = 'GridTable5DarkAccent5' as any,
        GridTable6ColorfulAccent5 = 'GridTable6ColorfulAccent5' as any,
        GridTable7ColorfulAccent5 = 'GridTable7ColorfulAccent5' as any,
        GridTable1LightAccent6 = 'GridTable1LightAccent6' as any,
        GridTable2Accent6 = 'GridTable2Accent6' as any,
        GridTable3Accent6 = 'GridTable3Accent6' as any,
        GridTable4Accent6 = 'GridTable4Accent6' as any,
        GridTable5DarkAccent6 = 'GridTable5DarkAccent6' as any,
        GridTable6ColorfulAccent6 = 'GridTable6ColorfulAccent6' as any,
        GridTable7ColorfulAccent6 = 'GridTable7ColorfulAccent6' as any,
        ListTable1Light = 'ListTable1Light' as any,
        ListTable2 = 'ListTable2' as any,
        ListTable3 = 'ListTable3' as any,
        ListTable4 = 'ListTable4' as any,
        ListTable5Dark = 'ListTable5Dark' as any,
        ListTable6Colorful = 'ListTable6Colorful' as any,
        ListTable7Colorful = 'ListTable7Colorful' as any,
        ListTable1LightAccent1 = 'ListTable1LightAccent1' as any,
        ListTable2Accent1 = 'ListTable2Accent1' as any,
        ListTable3Accent1 = 'ListTable3Accent1' as any,
        ListTable4Accent1 = 'ListTable4Accent1' as any,
        ListTable5DarkAccent1 = 'ListTable5DarkAccent1' as any,
        ListTable6ColorfulAccent1 = 'ListTable6ColorfulAccent1' as any,
        ListTable7ColorfulAccent1 = 'ListTable7ColorfulAccent1' as any,
        ListTable1LightAccent2 = 'ListTable1LightAccent2' as any,
        ListTable2Accent2 = 'ListTable2Accent2' as any,
        ListTable3Accent2 = 'ListTable3Accent2' as any,
        ListTable4Accent2 = 'ListTable4Accent2' as any,
        ListTable5DarkAccent2 = 'ListTable5DarkAccent2' as any,
        ListTable6ColorfulAccent2 = 'ListTable6ColorfulAccent2' as any,
        ListTable7ColorfulAccent2 = 'ListTable7ColorfulAccent2' as any,
        ListTable1LightAccent3 = 'ListTable1LightAccent3' as any,
        ListTable2Accent3 = 'ListTable2Accent3' as any,
        ListTable3Accent3 = 'ListTable3Accent3' as any,
        ListTable4Accent3 = 'ListTable4Accent3' as any,
        ListTable5DarkAccent3 = 'ListTable5DarkAccent3' as any,
        ListTable6ColorfulAccent3 = 'ListTable6ColorfulAccent3' as any,
        ListTable7ColorfulAccent3 = 'ListTable7ColorfulAccent3' as any,
        ListTable1LightAccent4 = 'ListTable1LightAccent4' as any,
        ListTable2Accent4 = 'ListTable2Accent4' as any,
        ListTable3Accent4 = 'ListTable3Accent4' as any,
        ListTable4Accent4 = 'ListTable4Accent4' as any,
        ListTable5DarkAccent4 = 'ListTable5DarkAccent4' as any,
        ListTable6ColorfulAccent4 = 'ListTable6ColorfulAccent4' as any,
        ListTable7ColorfulAccent4 = 'ListTable7ColorfulAccent4' as any,
        ListTable1LightAccent5 = 'ListTable1LightAccent5' as any,
        ListTable2Accent5 = 'ListTable2Accent5' as any,
        ListTable3Accent5 = 'ListTable3Accent5' as any,
        ListTable4Accent5 = 'ListTable4Accent5' as any,
        ListTable5DarkAccent5 = 'ListTable5DarkAccent5' as any,
        ListTable6ColorfulAccent5 = 'ListTable6ColorfulAccent5' as any,
        ListTable7ColorfulAccent5 = 'ListTable7ColorfulAccent5' as any,
        ListTable1LightAccent6 = 'ListTable1LightAccent6' as any,
        ListTable2Accent6 = 'ListTable2Accent6' as any,
        ListTable3Accent6 = 'ListTable3Accent6' as any,
        ListTable4Accent6 = 'ListTable4Accent6' as any,
        ListTable5DarkAccent6 = 'ListTable5DarkAccent6' as any,
        ListTable6ColorfulAccent6 = 'ListTable6ColorfulAccent6' as any,
        ListTable7ColorfulAccent6 = 'ListTable7ColorfulAccent6' as any,
        User = 'User' as any,
        Nil = 'Nil' as any,
    }
    export enum TextEffectEnum {
        None = 'None' as any,
        LasVegasLights = 'LasVegasLights' as any,
        BlinkingBackground = 'BlinkingBackground' as any,
        SparkleText = 'SparkleText' as any,
        MarchingBlackAnts = 'MarchingBlackAnts' as any,
        MarchingRedAnts = 'MarchingRedAnts' as any,
        Shimmer = 'Shimmer' as any,
    }
    export enum UnderlineEnum {
        None = 'None' as any,
        Single = 'Single' as any,
        Words = 'Words' as any,
        Double = 'Double' as any,
        Dotted = 'Dotted' as any,
        Thick = 'Thick' as any,
        Dash = 'Dash' as any,
        DotDash = 'DotDash' as any,
        DotDotDash = 'DotDotDash' as any,
        Wavy = 'Wavy' as any,
        DottedHeavy = 'DottedHeavy' as any,
        DashHeavy = 'DashHeavy' as any,
        DotDashHeavy = 'DotDashHeavy' as any,
        DotDotDashHeavy = 'DotDotDashHeavy' as any,
        WavyHeavy = 'WavyHeavy' as any,
        DashLong = 'DashLong' as any,
        WavyDouble = 'WavyDouble' as any,
        DashLongHeavy = 'DashLongHeavy' as any,
    }
}
// tslint:enable:quotemark
export class FontResponse extends AsposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "font",
            baseName: "Font",
            type: "Font",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(FontResponse.attributeTypeMap);
    }

    public font: Font;
    
    public constructor(init?: Partial<FontResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class FootnoteCollection extends LinkElement {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "list",
            baseName: "List",
            type: "Array<Footnote>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(FootnoteCollection.attributeTypeMap);
    }

    public list: Array<Footnote>;
    
    public constructor(init?: Partial<FootnoteCollection>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class FootnoteResponse extends AsposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "footnote",
            baseName: "Footnote",
            type: "Footnote",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(FootnoteResponse.attributeTypeMap);
    }

    public footnote: Footnote;
    
    public constructor(init?: Partial<FootnoteResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class FootnotesResponse extends AsposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "footnotes",
            baseName: "Footnotes",
            type: "FootnoteCollection",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(FootnotesResponse.attributeTypeMap);
    }

    public footnotes: FootnoteCollection;
    
    public constructor(init?: Partial<FootnotesResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class FormFieldCollection extends LinkElement {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "list",
            baseName: "List",
            type: "Array<FormField>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(FormFieldCollection.attributeTypeMap);
    }

    public list: Array<FormField>;
    
    public constructor(init?: Partial<FormFieldCollection>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class FormFieldResponse extends AsposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "formField",
            baseName: "FormField",
            type: "FormField",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(FormFieldResponse.attributeTypeMap);
    }

    public formField: FormField;
    
    public constructor(init?: Partial<FormFieldResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class FormFieldsResponse extends AsposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "formFields",
            baseName: "FormFields",
            type: "FormFieldCollection",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(FormFieldsResponse.attributeTypeMap);
    }

    public formFields: FormFieldCollection;
    
    public constructor(init?: Partial<FormFieldsResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class HeaderFooterLink extends LinkElement {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "type",
            baseName: "Type",
            type: "HeaderFooterLink.TypeEnum",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(HeaderFooterLink.attributeTypeMap);
    }

    public type: HeaderFooterLink.TypeEnum;
    
    public constructor(init?: Partial<HeaderFooterLink>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace HeaderFooterLink {
    export enum TypeEnum {
        HeaderEven = 'HeaderEven' as any,
        HeaderPrimary = 'HeaderPrimary' as any,
        FooterEven = 'FooterEven' as any,
        FooterPrimary = 'FooterPrimary' as any,
        HeaderFirst = 'HeaderFirst' as any,
        FooterFirst = 'FooterFirst' as any,
    }
}
// tslint:enable:quotemark
export class HeaderFooterLinkCollection extends LinkElement {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "list",
            baseName: "List",
            type: "Array<HeaderFooterLink>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(HeaderFooterLinkCollection.attributeTypeMap);
    }

    public list: Array<HeaderFooterLink>;
    
    public constructor(init?: Partial<HeaderFooterLinkCollection>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class HeaderFooterResponse extends AsposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "headerFooter",
            baseName: "HeaderFooter",
            type: "HeaderFooter",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(HeaderFooterResponse.attributeTypeMap);
    }

    public headerFooter: HeaderFooter;
    
    public constructor(init?: Partial<HeaderFooterResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class HeaderFootersResponse extends AsposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "headerFooters",
            baseName: "HeaderFooters",
            type: "HeaderFooterLinkCollection",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(HeaderFootersResponse.attributeTypeMap);
    }

    public headerFooters: HeaderFooterLinkCollection;
    
    public constructor(init?: Partial<HeaderFootersResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class Hyperlink extends LinkElement {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "displayText",
            baseName: "DisplayText",
            type: "string",
        },        
        {
            name: "value",
            baseName: "Value",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(Hyperlink.attributeTypeMap);
    }

    public displayText: string;
    
    public value: string;
    
    public constructor(init?: Partial<Hyperlink>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class HyperlinkResponse extends AsposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "hyperlink",
            baseName: "Hyperlink",
            type: "Hyperlink",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(HyperlinkResponse.attributeTypeMap);
    }

    public hyperlink: Hyperlink;
    
    public constructor(init?: Partial<HyperlinkResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class Hyperlinks extends LinkElement {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "hyperlinkList",
            baseName: "HyperlinkList",
            type: "Array<Hyperlink>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(Hyperlinks.attributeTypeMap);
    }

    public hyperlinkList: Array<Hyperlink>;
    
    public constructor(init?: Partial<Hyperlinks>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class HyperlinksResponse extends AsposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "hyperlinks",
            baseName: "Hyperlinks",
            type: "Hyperlinks",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(HyperlinksResponse.attributeTypeMap);
    }

    public hyperlinks: Hyperlinks;
    
    public constructor(init?: Partial<HyperlinksResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class NodeLink extends LinkElement {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "nodeId",
            baseName: "NodeId",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(NodeLink.attributeTypeMap);
    }

    public nodeId: string;
    
    public constructor(init?: Partial<NodeLink>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class OfficeMathObjectResponse extends AsposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
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

    public officeMathObject: OfficeMathObject;
    
    public constructor(init?: Partial<OfficeMathObjectResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class OfficeMathObjectsCollection extends LinkElement {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "list",
            baseName: "List",
            type: "Array<OfficeMathObject>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(OfficeMathObjectsCollection.attributeTypeMap);
    }

    public list: Array<OfficeMathObject>;
    
    public constructor(init?: Partial<OfficeMathObjectsCollection>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class OfficeMathObjectsResponse extends AsposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "officeMathObjects",
            baseName: "OfficeMathObjects",
            type: "OfficeMathObjectsCollection",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(OfficeMathObjectsResponse.attributeTypeMap);
    }

    public officeMathObjects: OfficeMathObjectsCollection;
    
    public constructor(init?: Partial<OfficeMathObjectsResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class PageSetup extends LinkElement {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "bidi",
            baseName: "Bidi",
            type: "boolean",
        },        
        {
            name: "borderAlwaysInFront",
            baseName: "BorderAlwaysInFront",
            type: "boolean",
        },        
        {
            name: "borderAppliesTo",
            baseName: "BorderAppliesTo",
            type: "PageSetup.BorderAppliesToEnum",
        },        
        {
            name: "borderDistanceFrom",
            baseName: "BorderDistanceFrom",
            type: "PageSetup.BorderDistanceFromEnum",
        },        
        {
            name: "bottomMargin",
            baseName: "BottomMargin",
            type: "number",
        },        
        {
            name: "differentFirstPageHeaderFooter",
            baseName: "DifferentFirstPageHeaderFooter",
            type: "boolean",
        },        
        {
            name: "firstPageTray",
            baseName: "FirstPageTray",
            type: "number",
        },        
        {
            name: "footerDistance",
            baseName: "FooterDistance",
            type: "number",
        },        
        {
            name: "gutter",
            baseName: "Gutter",
            type: "number",
        },        
        {
            name: "headerDistance",
            baseName: "HeaderDistance",
            type: "number",
        },        
        {
            name: "leftMargin",
            baseName: "LeftMargin",
            type: "number",
        },        
        {
            name: "lineNumberCountBy",
            baseName: "LineNumberCountBy",
            type: "number",
        },        
        {
            name: "lineNumberDistanceFromText",
            baseName: "LineNumberDistanceFromText",
            type: "number",
        },        
        {
            name: "lineNumberRestartMode",
            baseName: "LineNumberRestartMode",
            type: "PageSetup.LineNumberRestartModeEnum",
        },        
        {
            name: "lineStartingNumber",
            baseName: "LineStartingNumber",
            type: "number",
        },        
        {
            name: "orientation",
            baseName: "Orientation",
            type: "PageSetup.OrientationEnum",
        },        
        {
            name: "otherPagesTray",
            baseName: "OtherPagesTray",
            type: "number",
        },        
        {
            name: "pageHeight",
            baseName: "PageHeight",
            type: "number",
        },        
        {
            name: "pageNumberStyle",
            baseName: "PageNumberStyle",
            type: "PageSetup.PageNumberStyleEnum",
        },        
        {
            name: "pageStartingNumber",
            baseName: "PageStartingNumber",
            type: "number",
        },        
        {
            name: "pageWidth",
            baseName: "PageWidth",
            type: "number",
        },        
        {
            name: "paperSize",
            baseName: "PaperSize",
            type: "PageSetup.PaperSizeEnum",
        },        
        {
            name: "restartPageNumbering",
            baseName: "RestartPageNumbering",
            type: "boolean",
        },        
        {
            name: "rightMargin",
            baseName: "RightMargin",
            type: "number",
        },        
        {
            name: "rtlGutter",
            baseName: "RtlGutter",
            type: "boolean",
        },        
        {
            name: "sectionStart",
            baseName: "SectionStart",
            type: "PageSetup.SectionStartEnum",
        },        
        {
            name: "suppressEndnotes",
            baseName: "SuppressEndnotes",
            type: "boolean",
        },        
        {
            name: "topMargin",
            baseName: "TopMargin",
            type: "number",
        },        
        {
            name: "verticalAlignment",
            baseName: "VerticalAlignment",
            type: "PageSetup.VerticalAlignmentEnum",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PageSetup.attributeTypeMap);
    }

    public bidi: boolean;
    
    public borderAlwaysInFront: boolean;
    
    public borderAppliesTo: PageSetup.BorderAppliesToEnum;
    
    public borderDistanceFrom: PageSetup.BorderDistanceFromEnum;
    
    public bottomMargin: number;
    
    public differentFirstPageHeaderFooter: boolean;
    
    public firstPageTray: number;
    
    public footerDistance: number;
    
    public gutter: number;
    
    public headerDistance: number;
    
    public leftMargin: number;
    
    public lineNumberCountBy: number;
    
    public lineNumberDistanceFromText: number;
    
    public lineNumberRestartMode: PageSetup.LineNumberRestartModeEnum;
    
    public lineStartingNumber: number;
    
    public orientation: PageSetup.OrientationEnum;
    
    public otherPagesTray: number;
    
    public pageHeight: number;
    
    public pageNumberStyle: PageSetup.PageNumberStyleEnum;
    
    public pageStartingNumber: number;
    
    public pageWidth: number;
    
    public paperSize: PageSetup.PaperSizeEnum;
    
    public restartPageNumbering: boolean;
    
    public rightMargin: number;
    
    public rtlGutter: boolean;
    
    public sectionStart: PageSetup.SectionStartEnum;
    
    public suppressEndnotes: boolean;
    
    public topMargin: number;
    
    public verticalAlignment: PageSetup.VerticalAlignmentEnum;
    
    public constructor(init?: Partial<PageSetup>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace PageSetup {
    export enum BorderAppliesToEnum {
        AllPages = 'AllPages' as any,
        FirstPage = 'FirstPage' as any,
        OtherPages = 'OtherPages' as any,
    }
    export enum BorderDistanceFromEnum {
        Text = 'Text' as any,
        PageEdge = 'PageEdge' as any,
    }
    export enum LineNumberRestartModeEnum {
        RestartPage = 'RestartPage' as any,
        RestartSection = 'RestartSection' as any,
        Continuous = 'Continuous' as any,
    }
    export enum OrientationEnum {
        Portrait = 'Portrait' as any,
        Landscape = 'Landscape' as any,
    }
    export enum PageNumberStyleEnum {
        Arabic = 'Arabic' as any,
        UppercaseRoman = 'UppercaseRoman' as any,
        LowercaseRoman = 'LowercaseRoman' as any,
        UppercaseLetter = 'UppercaseLetter' as any,
        LowercaseLetter = 'LowercaseLetter' as any,
        Ordinal = 'Ordinal' as any,
        Number = 'Number' as any,
        OrdinalText = 'OrdinalText' as any,
        Hex = 'Hex' as any,
        ChicagoManual = 'ChicagoManual' as any,
        Kanji = 'Kanji' as any,
        KanjiDigit = 'KanjiDigit' as any,
        AiueoHalfWidth = 'AiueoHalfWidth' as any,
        IrohaHalfWidth = 'IrohaHalfWidth' as any,
        ArabicFullWidth = 'ArabicFullWidth' as any,
        ArabicHalfWidth = 'ArabicHalfWidth' as any,
        KanjiTraditional = 'KanjiTraditional' as any,
        KanjiTraditional2 = 'KanjiTraditional2' as any,
        NumberInCircle = 'NumberInCircle' as any,
        DecimalFullWidth = 'DecimalFullWidth' as any,
        Aiueo = 'Aiueo' as any,
        Iroha = 'Iroha' as any,
        LeadingZero = 'LeadingZero' as any,
        Bullet = 'Bullet' as any,
        Ganada = 'Ganada' as any,
        Chosung = 'Chosung' as any,
        GB1 = 'GB1' as any,
        GB2 = 'GB2' as any,
        GB3 = 'GB3' as any,
        GB4 = 'GB4' as any,
        Zodiac1 = 'Zodiac1' as any,
        Zodiac2 = 'Zodiac2' as any,
        Zodiac3 = 'Zodiac3' as any,
        TradChinNum1 = 'TradChinNum1' as any,
        TradChinNum2 = 'TradChinNum2' as any,
        TradChinNum3 = 'TradChinNum3' as any,
        TradChinNum4 = 'TradChinNum4' as any,
        SimpChinNum1 = 'SimpChinNum1' as any,
        SimpChinNum2 = 'SimpChinNum2' as any,
        SimpChinNum3 = 'SimpChinNum3' as any,
        SimpChinNum4 = 'SimpChinNum4' as any,
        HanjaRead = 'HanjaRead' as any,
        HanjaReadDigit = 'HanjaReadDigit' as any,
        Hangul = 'Hangul' as any,
        Hanja = 'Hanja' as any,
        Hebrew1 = 'Hebrew1' as any,
        Arabic1 = 'Arabic1' as any,
        Hebrew2 = 'Hebrew2' as any,
        Arabic2 = 'Arabic2' as any,
        HindiLetter1 = 'HindiLetter1' as any,
        HindiLetter2 = 'HindiLetter2' as any,
        HindiArabic = 'HindiArabic' as any,
        HindiCardinalText = 'HindiCardinalText' as any,
        ThaiLetter = 'ThaiLetter' as any,
        ThaiArabic = 'ThaiArabic' as any,
        ThaiCardinalText = 'ThaiCardinalText' as any,
        VietCardinalText = 'VietCardinalText' as any,
        NumberInDash = 'NumberInDash' as any,
        LowercaseRussian = 'LowercaseRussian' as any,
        UppercaseRussian = 'UppercaseRussian' as any,
        None = 'None' as any,
        Custom = 'Custom' as any,
    }
    export enum PaperSizeEnum {
        A3 = 'A3' as any,
        A4 = 'A4' as any,
        A5 = 'A5' as any,
        B4 = 'B4' as any,
        B5 = 'B5' as any,
        Executive = 'Executive' as any,
        Folio = 'Folio' as any,
        Ledger = 'Ledger' as any,
        Legal = 'Legal' as any,
        Letter = 'Letter' as any,
        EnvelopeDL = 'EnvelopeDL' as any,
        Quarto = 'Quarto' as any,
        Statement = 'Statement' as any,
        Tabloid = 'Tabloid' as any,
        Paper10x14 = 'Paper10x14' as any,
        Paper11x17 = 'Paper11x17' as any,
        Custom = 'Custom' as any,
    }
    export enum SectionStartEnum {
        Continuous = 'Continuous' as any,
        NewColumn = 'NewColumn' as any,
        NewPage = 'NewPage' as any,
        EvenPage = 'EvenPage' as any,
        OddPage = 'OddPage' as any,
    }
    export enum VerticalAlignmentEnum {
        Top = 'Top' as any,
        Center = 'Center' as any,
        Justify = 'Justify' as any,
        Bottom = 'Bottom' as any,
    }
}
// tslint:enable:quotemark
export class ParagraphLinkCollection extends LinkElement {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "paragraphLinkList",
            baseName: "ParagraphLinkList",
            type: "Array<ParagraphLink>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ParagraphLinkCollection.attributeTypeMap);
    }

    public paragraphLinkList: Array<ParagraphLink>;
    
    public constructor(init?: Partial<ParagraphLinkCollection>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class ParagraphLinkCollectionResponse extends AsposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "paragraphs",
            baseName: "Paragraphs",
            type: "ParagraphLinkCollection",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ParagraphLinkCollectionResponse.attributeTypeMap);
    }

    public paragraphs: ParagraphLinkCollection;
    
    public constructor(init?: Partial<ParagraphLinkCollectionResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class ParagraphResponse extends AsposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "paragraph",
            baseName: "Paragraph",
            type: "Paragraph",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ParagraphResponse.attributeTypeMap);
    }

    public paragraph: Paragraph;
    
    public constructor(init?: Partial<ParagraphResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class ProtectionDataResponse extends AsposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "documentLink",
            baseName: "DocumentLink",
            type: "FileLink",
        },        
        {
            name: "protectionData",
            baseName: "ProtectionData",
            type: "ProtectionData",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ProtectionDataResponse.attributeTypeMap);
    }

    public documentLink: FileLink;
    
    public protectionData: ProtectionData;
    
    public constructor(init?: Partial<ProtectionDataResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class ReplaceTextResponse extends AsposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "documentLink",
            baseName: "DocumentLink",
            type: "FileLink",
        },        
        {
            name: "matches",
            baseName: "Matches",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ReplaceTextResponse.attributeTypeMap);
    }

    public documentLink: FileLink;
    
    public matches: number;
    
    public constructor(init?: Partial<ReplaceTextResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class RevisionsModificationResponse extends AsposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "result",
            baseName: "Result",
            type: "ModificationOperationResult",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(RevisionsModificationResponse.attributeTypeMap);
    }

    public result: ModificationOperationResult;
    
    public constructor(init?: Partial<RevisionsModificationResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class RunResponse extends AsposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "run",
            baseName: "Run",
            type: "Run",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(RunResponse.attributeTypeMap);
    }

    public run: Run;
    
    public constructor(init?: Partial<RunResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class Runs extends LinkElement {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "list",
            baseName: "List",
            type: "Array<Run>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(Runs.attributeTypeMap);
    }

    public list: Array<Run>;
    
    public constructor(init?: Partial<Runs>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class RunsResponse extends AsposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "runs",
            baseName: "Runs",
            type: "Runs",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(RunsResponse.attributeTypeMap);
    }

    public runs: Runs;
    
    public constructor(init?: Partial<RunsResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class SaveResponse extends AsposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "saveResult",
            baseName: "SaveResult",
            type: "SaveResult",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SaveResponse.attributeTypeMap);
    }

    public saveResult: SaveResult;
    
    public constructor(init?: Partial<SaveResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class SearchResponse extends AsposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "searchingPattern",
            baseName: "SearchingPattern",
            type: "string",
        },        
        {
            name: "searchResults",
            baseName: "SearchResults",
            type: "SearchResultsCollection",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SearchResponse.attributeTypeMap);
    }

    public searchingPattern: string;
    
    public searchResults: SearchResultsCollection;
    
    public constructor(init?: Partial<SearchResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class SearchResultsCollection extends LinkElement {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "resultsList",
            baseName: "ResultsList",
            type: "Array<SearchResult>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SearchResultsCollection.attributeTypeMap);
    }

    public resultsList: Array<SearchResult>;
    
    public constructor(init?: Partial<SearchResultsCollection>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class Section extends LinkElement {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "childNodes",
            baseName: "ChildNodes",
            type: "Array<NodeLink>",
        },        
        {
            name: "headerFooters",
            baseName: "HeaderFooters",
            type: "LinkElement",
        },        
        {
            name: "pageSetup",
            baseName: "PageSetup",
            type: "LinkElement",
        },        
        {
            name: "paragraphs",
            baseName: "Paragraphs",
            type: "LinkElement",
        },        
        {
            name: "tables",
            baseName: "Tables",
            type: "LinkElement",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(Section.attributeTypeMap);
    }

    public childNodes: Array<NodeLink>;
    
    public headerFooters: LinkElement;
    
    public pageSetup: LinkElement;
    
    public paragraphs: LinkElement;
    
    public tables: LinkElement;
    
    public constructor(init?: Partial<Section>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class SectionLink extends LinkElement {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SectionLink.attributeTypeMap);
    }

    public constructor(init?: Partial<SectionLink>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class SectionLinkCollection extends LinkElement {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "sectionLinkList",
            baseName: "SectionLinkList",
            type: "Array<SectionLink>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SectionLinkCollection.attributeTypeMap);
    }

    public sectionLinkList: Array<SectionLink>;
    
    public constructor(init?: Partial<SectionLinkCollection>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class SectionLinkCollectionResponse extends AsposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "sections",
            baseName: "Sections",
            type: "SectionLinkCollection",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SectionLinkCollectionResponse.attributeTypeMap);
    }

    public sections: SectionLinkCollection;
    
    public constructor(init?: Partial<SectionLinkCollectionResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class SectionPageSetupResponse extends AsposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "pageSetup",
            baseName: "PageSetup",
            type: "PageSetup",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SectionPageSetupResponse.attributeTypeMap);
    }

    public pageSetup: PageSetup;
    
    public constructor(init?: Partial<SectionPageSetupResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class SectionResponse extends AsposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "section",
            baseName: "Section",
            type: "Section",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SectionResponse.attributeTypeMap);
    }

    public section: Section;
    
    public constructor(init?: Partial<SectionResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class SplitDocumentResponse extends AsposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "splitResult",
            baseName: "SplitResult",
            type: "SplitDocumentResult",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SplitDocumentResponse.attributeTypeMap);
    }

    public splitResult: SplitDocumentResult;
    
    public constructor(init?: Partial<SplitDocumentResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class StatDataResponse extends AsposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "documentLink",
            baseName: "DocumentLink",
            type: "FileLink",
        },        
        {
            name: "statData",
            baseName: "StatData",
            type: "DocumentStatData",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(StatDataResponse.attributeTypeMap);
    }

    public documentLink: FileLink;
    
    public statData: DocumentStatData;
    
    public constructor(init?: Partial<StatDataResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class TableCellFormat extends LinkElement {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "bottomPadding",
            baseName: "BottomPadding",
            type: "number",
        },        
        {
            name: "fitText",
            baseName: "FitText",
            type: "boolean",
        },        
        {
            name: "horizontalMerge",
            baseName: "HorizontalMerge",
            type: "TableCellFormat.HorizontalMergeEnum",
        },        
        {
            name: "leftPadding",
            baseName: "LeftPadding",
            type: "number",
        },        
        {
            name: "orientation",
            baseName: "Orientation",
            type: "TableCellFormat.OrientationEnum",
        },        
        {
            name: "preferredWidth",
            baseName: "PreferredWidth",
            type: "PreferredWidth",
        },        
        {
            name: "rightPadding",
            baseName: "RightPadding",
            type: "number",
        },        
        {
            name: "topPadding",
            baseName: "TopPadding",
            type: "number",
        },        
        {
            name: "verticalAlignment",
            baseName: "VerticalAlignment",
            type: "TableCellFormat.VerticalAlignmentEnum",
        },        
        {
            name: "verticalMerge",
            baseName: "VerticalMerge",
            type: "TableCellFormat.VerticalMergeEnum",
        },        
        {
            name: "width",
            baseName: "Width",
            type: "number",
        },        
        {
            name: "wrapText",
            baseName: "WrapText",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TableCellFormat.attributeTypeMap);
    }

    public bottomPadding: number;
    
    public fitText: boolean;
    
    public horizontalMerge: TableCellFormat.HorizontalMergeEnum;
    
    public leftPadding: number;
    
    public orientation: TableCellFormat.OrientationEnum;
    
    public preferredWidth: PreferredWidth;
    
    public rightPadding: number;
    
    public topPadding: number;
    
    public verticalAlignment: TableCellFormat.VerticalAlignmentEnum;
    
    public verticalMerge: TableCellFormat.VerticalMergeEnum;
    
    public width: number;
    
    public wrapText: boolean;
    
    public constructor(init?: Partial<TableCellFormat>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace TableCellFormat {
    export enum HorizontalMergeEnum {
        None = 'None' as any,
        First = 'First' as any,
        Previous = 'Previous' as any,
    }
    export enum OrientationEnum {
        Horizontal = 'Horizontal' as any,
        Downward = 'Downward' as any,
        Upward = 'Upward' as any,
        HorizontalRotatedFarEast = 'HorizontalRotatedFarEast' as any,
        VerticalFarEast = 'VerticalFarEast' as any,
        VerticalRotatedFarEast = 'VerticalRotatedFarEast' as any,
    }
    export enum VerticalAlignmentEnum {
        Top = 'Top' as any,
        Center = 'Center' as any,
        Bottom = 'Bottom' as any,
    }
    export enum VerticalMergeEnum {
        None = 'None' as any,
        First = 'First' as any,
        Previous = 'Previous' as any,
    }
}
// tslint:enable:quotemark
export class TableCellFormatResponse extends AsposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "cellFormat",
            baseName: "CellFormat",
            type: "TableCellFormat",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TableCellFormatResponse.attributeTypeMap);
    }

    public cellFormat: TableCellFormat;
    
    public constructor(init?: Partial<TableCellFormatResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class TableCellResponse extends AsposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "cell",
            baseName: "Cell",
            type: "TableCell",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TableCellResponse.attributeTypeMap);
    }

    public cell: TableCell;
    
    public constructor(init?: Partial<TableCellResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class TableLinkCollection extends LinkElement {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "tableLinkList",
            baseName: "TableLinkList",
            type: "Array<TableLink>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TableLinkCollection.attributeTypeMap);
    }

    public tableLinkList: Array<TableLink>;
    
    public constructor(init?: Partial<TableLinkCollection>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class TableLinkCollectionResponse extends AsposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "tables",
            baseName: "Tables",
            type: "TableLinkCollection",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TableLinkCollectionResponse.attributeTypeMap);
    }

    public tables: TableLinkCollection;
    
    public constructor(init?: Partial<TableLinkCollectionResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class TableProperties extends LinkElement {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "alignment",
            baseName: "Alignment",
            type: "TableProperties.AlignmentEnum",
        },        
        {
            name: "allowAutoFit",
            baseName: "AllowAutoFit",
            type: "boolean",
        },        
        {
            name: "bidi",
            baseName: "Bidi",
            type: "boolean",
        },        
        {
            name: "bottomPadding",
            baseName: "BottomPadding",
            type: "number",
        },        
        {
            name: "cellSpacing",
            baseName: "CellSpacing",
            type: "number",
        },        
        {
            name: "leftIndent",
            baseName: "LeftIndent",
            type: "number",
        },        
        {
            name: "leftPadding",
            baseName: "LeftPadding",
            type: "number",
        },        
        {
            name: "preferredWidth",
            baseName: "PreferredWidth",
            type: "PreferredWidth",
        },        
        {
            name: "rightPadding",
            baseName: "RightPadding",
            type: "number",
        },        
        {
            name: "styleIdentifier",
            baseName: "StyleIdentifier",
            type: "TableProperties.StyleIdentifierEnum",
        },        
        {
            name: "styleName",
            baseName: "StyleName",
            type: "string",
        },        
        {
            name: "styleOptions",
            baseName: "StyleOptions",
            type: "TableProperties.StyleOptionsEnum",
        },        
        {
            name: "textWrapping",
            baseName: "TextWrapping",
            type: "TableProperties.TextWrappingEnum",
        },        
        {
            name: "topPadding",
            baseName: "TopPadding",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TableProperties.attributeTypeMap);
    }

    public alignment: TableProperties.AlignmentEnum;
    
    public allowAutoFit: boolean;
    
    public bidi: boolean;
    
    public bottomPadding: number;
    
    public cellSpacing: number;
    
    public leftIndent: number;
    
    public leftPadding: number;
    
    public preferredWidth: PreferredWidth;
    
    public rightPadding: number;
    
    public styleIdentifier: TableProperties.StyleIdentifierEnum;
    
    public styleName: string;
    
    public styleOptions: TableProperties.StyleOptionsEnum;
    
    public textWrapping: TableProperties.TextWrappingEnum;
    
    public topPadding: number;
    
    public constructor(init?: Partial<TableProperties>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace TableProperties {
    export enum AlignmentEnum {
        Left = 'Left' as any,
        Center = 'Center' as any,
        Right = 'Right' as any,
    }
    export enum StyleIdentifierEnum {
        Normal = 'Normal' as any,
        Heading1 = 'Heading1' as any,
        Heading2 = 'Heading2' as any,
        Heading3 = 'Heading3' as any,
        Heading4 = 'Heading4' as any,
        Heading5 = 'Heading5' as any,
        Heading6 = 'Heading6' as any,
        Heading7 = 'Heading7' as any,
        Heading8 = 'Heading8' as any,
        Heading9 = 'Heading9' as any,
        Index1 = 'Index1' as any,
        Index2 = 'Index2' as any,
        Index3 = 'Index3' as any,
        Index4 = 'Index4' as any,
        Index5 = 'Index5' as any,
        Index6 = 'Index6' as any,
        Index7 = 'Index7' as any,
        Index8 = 'Index8' as any,
        Index9 = 'Index9' as any,
        Toc1 = 'Toc1' as any,
        Toc2 = 'Toc2' as any,
        Toc3 = 'Toc3' as any,
        Toc4 = 'Toc4' as any,
        Toc5 = 'Toc5' as any,
        Toc6 = 'Toc6' as any,
        Toc7 = 'Toc7' as any,
        Toc8 = 'Toc8' as any,
        Toc9 = 'Toc9' as any,
        NormalIndent = 'NormalIndent' as any,
        FootnoteText = 'FootnoteText' as any,
        CommentText = 'CommentText' as any,
        Header = 'Header' as any,
        Footer = 'Footer' as any,
        IndexHeading = 'IndexHeading' as any,
        Caption = 'Caption' as any,
        TableOfFigures = 'TableOfFigures' as any,
        EnvelopeAddress = 'EnvelopeAddress' as any,
        EnvelopeReturn = 'EnvelopeReturn' as any,
        FootnoteReference = 'FootnoteReference' as any,
        CommentReference = 'CommentReference' as any,
        LineNumber = 'LineNumber' as any,
        PageNumber = 'PageNumber' as any,
        EndnoteReference = 'EndnoteReference' as any,
        EndnoteText = 'EndnoteText' as any,
        TableOfAuthorities = 'TableOfAuthorities' as any,
        Macro = 'Macro' as any,
        ToaHeading = 'ToaHeading' as any,
        List = 'List' as any,
        ListBullet = 'ListBullet' as any,
        ListNumber = 'ListNumber' as any,
        List2 = 'List2' as any,
        List3 = 'List3' as any,
        List4 = 'List4' as any,
        List5 = 'List5' as any,
        ListBullet2 = 'ListBullet2' as any,
        ListBullet3 = 'ListBullet3' as any,
        ListBullet4 = 'ListBullet4' as any,
        ListBullet5 = 'ListBullet5' as any,
        ListNumber2 = 'ListNumber2' as any,
        ListNumber3 = 'ListNumber3' as any,
        ListNumber4 = 'ListNumber4' as any,
        ListNumber5 = 'ListNumber5' as any,
        Title = 'Title' as any,
        Closing = 'Closing' as any,
        Signature = 'Signature' as any,
        DefaultParagraphFont = 'DefaultParagraphFont' as any,
        BodyText = 'BodyText' as any,
        BodyTextInd = 'BodyTextInd' as any,
        ListContinue = 'ListContinue' as any,
        ListContinue2 = 'ListContinue2' as any,
        ListContinue3 = 'ListContinue3' as any,
        ListContinue4 = 'ListContinue4' as any,
        ListContinue5 = 'ListContinue5' as any,
        MessageHeader = 'MessageHeader' as any,
        Subtitle = 'Subtitle' as any,
        Salutation = 'Salutation' as any,
        Date = 'Date' as any,
        BodyText1I = 'BodyText1I' as any,
        BodyText1I2 = 'BodyText1I2' as any,
        NoteHeading = 'NoteHeading' as any,
        BodyText2 = 'BodyText2' as any,
        BodyText3 = 'BodyText3' as any,
        BodyTextInd2 = 'BodyTextInd2' as any,
        BodyTextInd3 = 'BodyTextInd3' as any,
        BlockText = 'BlockText' as any,
        Hyperlink = 'Hyperlink' as any,
        FollowedHyperlink = 'FollowedHyperlink' as any,
        Strong = 'Strong' as any,
        Emphasis = 'Emphasis' as any,
        DocumentMap = 'DocumentMap' as any,
        PlainText = 'PlainText' as any,
        EmailSignature = 'EmailSignature' as any,
        HtmlTopOfForm = 'HtmlTopOfForm' as any,
        HtmlBottomOfForm = 'HtmlBottomOfForm' as any,
        NormalWeb = 'NormalWeb' as any,
        HtmlAcronym = 'HtmlAcronym' as any,
        HtmlAddress = 'HtmlAddress' as any,
        HtmlCite = 'HtmlCite' as any,
        HtmlCode = 'HtmlCode' as any,
        HtmlDefinition = 'HtmlDefinition' as any,
        HtmlKeyboard = 'HtmlKeyboard' as any,
        HtmlPreformatted = 'HtmlPreformatted' as any,
        HtmlSample = 'HtmlSample' as any,
        HtmlTypewriter = 'HtmlTypewriter' as any,
        HtmlVariable = 'HtmlVariable' as any,
        TableNormal = 'TableNormal' as any,
        CommentSubject = 'CommentSubject' as any,
        NoList = 'NoList' as any,
        OutlineList1 = 'OutlineList1' as any,
        OutlineList2 = 'OutlineList2' as any,
        OutlineList3 = 'OutlineList3' as any,
        TableSimple1 = 'TableSimple1' as any,
        TableSimple2 = 'TableSimple2' as any,
        TableSimple3 = 'TableSimple3' as any,
        TableClassic1 = 'TableClassic1' as any,
        TableClassic2 = 'TableClassic2' as any,
        TableClassic3 = 'TableClassic3' as any,
        TableClassic4 = 'TableClassic4' as any,
        TableColorful1 = 'TableColorful1' as any,
        TableColorful2 = 'TableColorful2' as any,
        TableColorful3 = 'TableColorful3' as any,
        TableColumns1 = 'TableColumns1' as any,
        TableColumns2 = 'TableColumns2' as any,
        TableColumns3 = 'TableColumns3' as any,
        TableColumns4 = 'TableColumns4' as any,
        TableColumns5 = 'TableColumns5' as any,
        TableGrid1 = 'TableGrid1' as any,
        TableGrid2 = 'TableGrid2' as any,
        TableGrid3 = 'TableGrid3' as any,
        TableGrid4 = 'TableGrid4' as any,
        TableGrid5 = 'TableGrid5' as any,
        TableGrid6 = 'TableGrid6' as any,
        TableGrid7 = 'TableGrid7' as any,
        TableGrid8 = 'TableGrid8' as any,
        TableList1 = 'TableList1' as any,
        TableList2 = 'TableList2' as any,
        TableList3 = 'TableList3' as any,
        TableList4 = 'TableList4' as any,
        TableList5 = 'TableList5' as any,
        TableList6 = 'TableList6' as any,
        TableList7 = 'TableList7' as any,
        TableList8 = 'TableList8' as any,
        Table3DEffects1 = 'Table3DEffects1' as any,
        Table3DEffects2 = 'Table3DEffects2' as any,
        Table3DEffects3 = 'Table3DEffects3' as any,
        TableContemporary = 'TableContemporary' as any,
        TableElegant = 'TableElegant' as any,
        TableProfessional = 'TableProfessional' as any,
        TableSubtle1 = 'TableSubtle1' as any,
        TableSubtle2 = 'TableSubtle2' as any,
        TableWeb1 = 'TableWeb1' as any,
        TableWeb2 = 'TableWeb2' as any,
        TableWeb3 = 'TableWeb3' as any,
        BalloonText = 'BalloonText' as any,
        TableGrid = 'TableGrid' as any,
        TableTheme = 'TableTheme' as any,
        PlaceholderText = 'PlaceholderText' as any,
        NoSpacing = 'NoSpacing' as any,
        LightShading = 'LightShading' as any,
        LightList = 'LightList' as any,
        LightGrid = 'LightGrid' as any,
        MediumShading1 = 'MediumShading1' as any,
        MediumShading2 = 'MediumShading2' as any,
        MediumList1 = 'MediumList1' as any,
        MediumList2 = 'MediumList2' as any,
        MediumGrid1 = 'MediumGrid1' as any,
        MediumGrid2 = 'MediumGrid2' as any,
        MediumGrid3 = 'MediumGrid3' as any,
        DarkList = 'DarkList' as any,
        ColorfulShading = 'ColorfulShading' as any,
        ColorfulList = 'ColorfulList' as any,
        ColorfulGrid = 'ColorfulGrid' as any,
        LightShadingAccent1 = 'LightShadingAccent1' as any,
        LightListAccent1 = 'LightListAccent1' as any,
        LightGridAccent1 = 'LightGridAccent1' as any,
        MediumShading1Accent1 = 'MediumShading1Accent1' as any,
        MediumShading2Accent1 = 'MediumShading2Accent1' as any,
        MediumList1Accent1 = 'MediumList1Accent1' as any,
        Revision = 'Revision' as any,
        ListParagraph = 'ListParagraph' as any,
        Quote = 'Quote' as any,
        IntenseQuote = 'IntenseQuote' as any,
        MediumList2Accent1 = 'MediumList2Accent1' as any,
        MediumGrid1Accent1 = 'MediumGrid1Accent1' as any,
        MediumGrid2Accent1 = 'MediumGrid2Accent1' as any,
        MediumGrid3Accent1 = 'MediumGrid3Accent1' as any,
        DarkListAccent1 = 'DarkListAccent1' as any,
        ColorfulShadingAccent1 = 'ColorfulShadingAccent1' as any,
        ColorfulListAccent1 = 'ColorfulListAccent1' as any,
        ColorfulGridAccent1 = 'ColorfulGridAccent1' as any,
        LightShadingAccent2 = 'LightShadingAccent2' as any,
        LightListAccent2 = 'LightListAccent2' as any,
        LightGridAccent2 = 'LightGridAccent2' as any,
        MediumShading1Accent2 = 'MediumShading1Accent2' as any,
        MediumShading2Accent2 = 'MediumShading2Accent2' as any,
        MediumList1Accent2 = 'MediumList1Accent2' as any,
        MediumList2Accent2 = 'MediumList2Accent2' as any,
        MediumGrid1Accent2 = 'MediumGrid1Accent2' as any,
        MediumGrid2Accent2 = 'MediumGrid2Accent2' as any,
        MediumGrid3Accent2 = 'MediumGrid3Accent2' as any,
        DarkListAccent2 = 'DarkListAccent2' as any,
        ColorfulShadingAccent2 = 'ColorfulShadingAccent2' as any,
        ColorfulListAccent2 = 'ColorfulListAccent2' as any,
        ColorfulGridAccent2 = 'ColorfulGridAccent2' as any,
        LightShadingAccent3 = 'LightShadingAccent3' as any,
        LightListAccent3 = 'LightListAccent3' as any,
        LightGridAccent3 = 'LightGridAccent3' as any,
        MediumShading1Accent3 = 'MediumShading1Accent3' as any,
        MediumShading2Accent3 = 'MediumShading2Accent3' as any,
        MediumList1Accent3 = 'MediumList1Accent3' as any,
        MediumList2Accent3 = 'MediumList2Accent3' as any,
        MediumGrid1Accent3 = 'MediumGrid1Accent3' as any,
        MediumGrid2Accent3 = 'MediumGrid2Accent3' as any,
        MediumGrid3Accent3 = 'MediumGrid3Accent3' as any,
        DarkListAccent3 = 'DarkListAccent3' as any,
        ColorfulShadingAccent3 = 'ColorfulShadingAccent3' as any,
        ColorfulListAccent3 = 'ColorfulListAccent3' as any,
        ColorfulGridAccent3 = 'ColorfulGridAccent3' as any,
        LightShadingAccent4 = 'LightShadingAccent4' as any,
        LightListAccent4 = 'LightListAccent4' as any,
        LightGridAccent4 = 'LightGridAccent4' as any,
        MediumShading1Accent4 = 'MediumShading1Accent4' as any,
        MediumShading2Accent4 = 'MediumShading2Accent4' as any,
        MediumList1Accent4 = 'MediumList1Accent4' as any,
        MediumList2Accent4 = 'MediumList2Accent4' as any,
        MediumGrid1Accent4 = 'MediumGrid1Accent4' as any,
        MediumGrid2Accent4 = 'MediumGrid2Accent4' as any,
        MediumGrid3Accent4 = 'MediumGrid3Accent4' as any,
        DarkListAccent4 = 'DarkListAccent4' as any,
        ColorfulShadingAccent4 = 'ColorfulShadingAccent4' as any,
        ColorfulListAccent4 = 'ColorfulListAccent4' as any,
        ColorfulGridAccent4 = 'ColorfulGridAccent4' as any,
        LightShadingAccent5 = 'LightShadingAccent5' as any,
        LightListAccent5 = 'LightListAccent5' as any,
        LightGridAccent5 = 'LightGridAccent5' as any,
        MediumShading1Accent5 = 'MediumShading1Accent5' as any,
        MediumShading2Accent5 = 'MediumShading2Accent5' as any,
        MediumList1Accent5 = 'MediumList1Accent5' as any,
        MediumList2Accent5 = 'MediumList2Accent5' as any,
        MediumGrid1Accent5 = 'MediumGrid1Accent5' as any,
        MediumGrid2Accent5 = 'MediumGrid2Accent5' as any,
        MediumGrid3Accent5 = 'MediumGrid3Accent5' as any,
        DarkListAccent5 = 'DarkListAccent5' as any,
        ColorfulShadingAccent5 = 'ColorfulShadingAccent5' as any,
        ColorfulListAccent5 = 'ColorfulListAccent5' as any,
        ColorfulGridAccent5 = 'ColorfulGridAccent5' as any,
        LightShadingAccent6 = 'LightShadingAccent6' as any,
        LightListAccent6 = 'LightListAccent6' as any,
        LightGridAccent6 = 'LightGridAccent6' as any,
        MediumShading1Accent6 = 'MediumShading1Accent6' as any,
        MediumShading2Accent6 = 'MediumShading2Accent6' as any,
        MediumList1Accent6 = 'MediumList1Accent6' as any,
        MediumList2Accent6 = 'MediumList2Accent6' as any,
        MediumGrid1Accent6 = 'MediumGrid1Accent6' as any,
        MediumGrid2Accent6 = 'MediumGrid2Accent6' as any,
        MediumGrid3Accent6 = 'MediumGrid3Accent6' as any,
        DarkListAccent6 = 'DarkListAccent6' as any,
        ColorfulShadingAccent6 = 'ColorfulShadingAccent6' as any,
        ColorfulListAccent6 = 'ColorfulListAccent6' as any,
        ColorfulGridAccent6 = 'ColorfulGridAccent6' as any,
        SubtleEmphasis = 'SubtleEmphasis' as any,
        IntenseEmphasis = 'IntenseEmphasis' as any,
        SubtleReference = 'SubtleReference' as any,
        IntenseReference = 'IntenseReference' as any,
        BookTitle = 'BookTitle' as any,
        Bibliography = 'Bibliography' as any,
        TocHeading = 'TocHeading' as any,
        PlainTable1 = 'PlainTable1' as any,
        PlainTable2 = 'PlainTable2' as any,
        PlainTable3 = 'PlainTable3' as any,
        PlainTable4 = 'PlainTable4' as any,
        PlainTable5 = 'PlainTable5' as any,
        TableGridLight = 'TableGridLight' as any,
        GridTable1Light = 'GridTable1Light' as any,
        GridTable2 = 'GridTable2' as any,
        GridTable3 = 'GridTable3' as any,
        GridTable4 = 'GridTable4' as any,
        GridTable5Dark = 'GridTable5Dark' as any,
        GridTable6Colorful = 'GridTable6Colorful' as any,
        GridTable7Colorful = 'GridTable7Colorful' as any,
        GridTable1LightAccent1 = 'GridTable1LightAccent1' as any,
        GridTable2Accent1 = 'GridTable2Accent1' as any,
        GridTable3Accent1 = 'GridTable3Accent1' as any,
        GridTable4Accent1 = 'GridTable4Accent1' as any,
        GridTable5DarkAccent1 = 'GridTable5DarkAccent1' as any,
        GridTable6ColorfulAccent1 = 'GridTable6ColorfulAccent1' as any,
        GridTable7ColorfulAccent1 = 'GridTable7ColorfulAccent1' as any,
        GridTable1LightAccent2 = 'GridTable1LightAccent2' as any,
        GridTable2Accent2 = 'GridTable2Accent2' as any,
        GridTable3Accent2 = 'GridTable3Accent2' as any,
        GridTable4Accent2 = 'GridTable4Accent2' as any,
        GridTable5DarkAccent2 = 'GridTable5DarkAccent2' as any,
        GridTable6ColorfulAccent2 = 'GridTable6ColorfulAccent2' as any,
        GridTable7ColorfulAccent2 = 'GridTable7ColorfulAccent2' as any,
        GridTable1LightAccent3 = 'GridTable1LightAccent3' as any,
        GridTable2Accent3 = 'GridTable2Accent3' as any,
        GridTable3Accent3 = 'GridTable3Accent3' as any,
        GridTable4Accent3 = 'GridTable4Accent3' as any,
        GridTable5DarkAccent3 = 'GridTable5DarkAccent3' as any,
        GridTable6ColorfulAccent3 = 'GridTable6ColorfulAccent3' as any,
        GridTable7ColorfulAccent3 = 'GridTable7ColorfulAccent3' as any,
        GridTable1LightAccent4 = 'GridTable1LightAccent4' as any,
        GridTable2Accent4 = 'GridTable2Accent4' as any,
        GridTable3Accent4 = 'GridTable3Accent4' as any,
        GridTable4Accent4 = 'GridTable4Accent4' as any,
        GridTable5DarkAccent4 = 'GridTable5DarkAccent4' as any,
        GridTable6ColorfulAccent4 = 'GridTable6ColorfulAccent4' as any,
        GridTable7ColorfulAccent4 = 'GridTable7ColorfulAccent4' as any,
        GridTable1LightAccent5 = 'GridTable1LightAccent5' as any,
        GridTable2Accent5 = 'GridTable2Accent5' as any,
        GridTable3Accent5 = 'GridTable3Accent5' as any,
        GridTable4Accent5 = 'GridTable4Accent5' as any,
        GridTable5DarkAccent5 = 'GridTable5DarkAccent5' as any,
        GridTable6ColorfulAccent5 = 'GridTable6ColorfulAccent5' as any,
        GridTable7ColorfulAccent5 = 'GridTable7ColorfulAccent5' as any,
        GridTable1LightAccent6 = 'GridTable1LightAccent6' as any,
        GridTable2Accent6 = 'GridTable2Accent6' as any,
        GridTable3Accent6 = 'GridTable3Accent6' as any,
        GridTable4Accent6 = 'GridTable4Accent6' as any,
        GridTable5DarkAccent6 = 'GridTable5DarkAccent6' as any,
        GridTable6ColorfulAccent6 = 'GridTable6ColorfulAccent6' as any,
        GridTable7ColorfulAccent6 = 'GridTable7ColorfulAccent6' as any,
        ListTable1Light = 'ListTable1Light' as any,
        ListTable2 = 'ListTable2' as any,
        ListTable3 = 'ListTable3' as any,
        ListTable4 = 'ListTable4' as any,
        ListTable5Dark = 'ListTable5Dark' as any,
        ListTable6Colorful = 'ListTable6Colorful' as any,
        ListTable7Colorful = 'ListTable7Colorful' as any,
        ListTable1LightAccent1 = 'ListTable1LightAccent1' as any,
        ListTable2Accent1 = 'ListTable2Accent1' as any,
        ListTable3Accent1 = 'ListTable3Accent1' as any,
        ListTable4Accent1 = 'ListTable4Accent1' as any,
        ListTable5DarkAccent1 = 'ListTable5DarkAccent1' as any,
        ListTable6ColorfulAccent1 = 'ListTable6ColorfulAccent1' as any,
        ListTable7ColorfulAccent1 = 'ListTable7ColorfulAccent1' as any,
        ListTable1LightAccent2 = 'ListTable1LightAccent2' as any,
        ListTable2Accent2 = 'ListTable2Accent2' as any,
        ListTable3Accent2 = 'ListTable3Accent2' as any,
        ListTable4Accent2 = 'ListTable4Accent2' as any,
        ListTable5DarkAccent2 = 'ListTable5DarkAccent2' as any,
        ListTable6ColorfulAccent2 = 'ListTable6ColorfulAccent2' as any,
        ListTable7ColorfulAccent2 = 'ListTable7ColorfulAccent2' as any,
        ListTable1LightAccent3 = 'ListTable1LightAccent3' as any,
        ListTable2Accent3 = 'ListTable2Accent3' as any,
        ListTable3Accent3 = 'ListTable3Accent3' as any,
        ListTable4Accent3 = 'ListTable4Accent3' as any,
        ListTable5DarkAccent3 = 'ListTable5DarkAccent3' as any,
        ListTable6ColorfulAccent3 = 'ListTable6ColorfulAccent3' as any,
        ListTable7ColorfulAccent3 = 'ListTable7ColorfulAccent3' as any,
        ListTable1LightAccent4 = 'ListTable1LightAccent4' as any,
        ListTable2Accent4 = 'ListTable2Accent4' as any,
        ListTable3Accent4 = 'ListTable3Accent4' as any,
        ListTable4Accent4 = 'ListTable4Accent4' as any,
        ListTable5DarkAccent4 = 'ListTable5DarkAccent4' as any,
        ListTable6ColorfulAccent4 = 'ListTable6ColorfulAccent4' as any,
        ListTable7ColorfulAccent4 = 'ListTable7ColorfulAccent4' as any,
        ListTable1LightAccent5 = 'ListTable1LightAccent5' as any,
        ListTable2Accent5 = 'ListTable2Accent5' as any,
        ListTable3Accent5 = 'ListTable3Accent5' as any,
        ListTable4Accent5 = 'ListTable4Accent5' as any,
        ListTable5DarkAccent5 = 'ListTable5DarkAccent5' as any,
        ListTable6ColorfulAccent5 = 'ListTable6ColorfulAccent5' as any,
        ListTable7ColorfulAccent5 = 'ListTable7ColorfulAccent5' as any,
        ListTable1LightAccent6 = 'ListTable1LightAccent6' as any,
        ListTable2Accent6 = 'ListTable2Accent6' as any,
        ListTable3Accent6 = 'ListTable3Accent6' as any,
        ListTable4Accent6 = 'ListTable4Accent6' as any,
        ListTable5DarkAccent6 = 'ListTable5DarkAccent6' as any,
        ListTable6ColorfulAccent6 = 'ListTable6ColorfulAccent6' as any,
        ListTable7ColorfulAccent6 = 'ListTable7ColorfulAccent6' as any,
        User = 'User' as any,
        Nil = 'Nil' as any,
    }
    export enum StyleOptionsEnum {
        None = 'None' as any,
        FirstRow = 'FirstRow' as any,
        LastRow = 'LastRow' as any,
        FirstColumn = 'FirstColumn' as any,
        LastColumn = 'LastColumn' as any,
        RowBands = 'RowBands' as any,
        Default = 'Default' as any,
        ColumnBands = 'ColumnBands' as any,
        Default2003 = 'Default2003' as any,
    }
    export enum TextWrappingEnum {
        Default = 'Default' as any,
        None = 'None' as any,
        Around = 'Around' as any,
    }
}
// tslint:enable:quotemark
export class TablePropertiesResponse extends AsposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "properties",
            baseName: "Properties",
            type: "TableProperties",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TablePropertiesResponse.attributeTypeMap);
    }

    public properties: TableProperties;
    
    public constructor(init?: Partial<TablePropertiesResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class TableResponse extends AsposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "table",
            baseName: "Table",
            type: "Table",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TableResponse.attributeTypeMap);
    }

    public table: Table;
    
    public constructor(init?: Partial<TableResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class TableRowFormat extends LinkElement {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "allowBreakAcrossPages",
            baseName: "AllowBreakAcrossPages",
            type: "boolean",
        },        
        {
            name: "headingFormat",
            baseName: "HeadingFormat",
            type: "boolean",
        },        
        {
            name: "height",
            baseName: "Height",
            type: "number",
        },        
        {
            name: "heightRule",
            baseName: "HeightRule",
            type: "TableRowFormat.HeightRuleEnum",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TableRowFormat.attributeTypeMap);
    }

    public allowBreakAcrossPages: boolean;
    
    public headingFormat: boolean;
    
    public height: number;
    
    public heightRule: TableRowFormat.HeightRuleEnum;
    
    public constructor(init?: Partial<TableRowFormat>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace TableRowFormat {
    export enum HeightRuleEnum {
        AtLeast = 'AtLeast' as any,
        Exactly = 'Exactly' as any,
        Auto = 'Auto' as any,
    }
}
// tslint:enable:quotemark
export class TableRowFormatResponse extends AsposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "rowFormat",
            baseName: "RowFormat",
            type: "TableRowFormat",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TableRowFormatResponse.attributeTypeMap);
    }

    public rowFormat: TableRowFormat;
    
    public constructor(init?: Partial<TableRowFormatResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class TableRowResponse extends AsposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "row",
            baseName: "Row",
            type: "TableRow",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TableRowResponse.attributeTypeMap);
    }

    public row: TableRow;
    
    public constructor(init?: Partial<TableRowResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class TextItem extends LinkElement {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "text",
            baseName: "Text",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TextItem.attributeTypeMap);
    }

    public text: string;
    
    public constructor(init?: Partial<TextItem>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class TextItems extends LinkElement {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "list",
            baseName: "List",
            type: "Array<TextItem>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TextItems.attributeTypeMap);
    }

    public list: Array<TextItem>;
    
    public constructor(init?: Partial<TextItems>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class TextItemsResponse extends AsposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "textItems",
            baseName: "TextItems",
            type: "TextItems",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TextItemsResponse.attributeTypeMap);
    }

    public textItems: TextItems;
    
    public constructor(init?: Partial<TextItemsResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class WordsApiLink extends Link {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WordsApiLink.attributeTypeMap);
    }

    public constructor(init?: Partial<WordsApiLink>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class Comment extends CommentLink {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "author",
            baseName: "Author",
            type: "string",
        },        
        {
            name: "content",
            baseName: "Content",
            type: "StoryChildNodes",
        },        
        {
            name: "dateTime",
            baseName: "DateTime",
            type: "Date",
        },        
        {
            name: "initial",
            baseName: "Initial",
            type: "string",
        },        
        {
            name: "rangeEnd",
            baseName: "RangeEnd",
            type: "DocumentPosition",
        },        
        {
            name: "rangeStart",
            baseName: "RangeStart",
            type: "DocumentPosition",
        },        
        {
            name: "text",
            baseName: "Text",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(Comment.attributeTypeMap);
    }

    public author: string;
    
    public content: StoryChildNodes;
    
    public dateTime: Date;
    
    public initial: string;
    
    public rangeEnd: DocumentPosition;
    
    public rangeStart: DocumentPosition;
    
    public text: string;
    
    public constructor(init?: Partial<Comment>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class DrawingObjectLink extends NodeLink {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(DrawingObjectLink.attributeTypeMap);
    }

    public constructor(init?: Partial<DrawingObjectLink>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class FieldLink extends NodeLink {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "fieldCode",
            baseName: "FieldCode",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(FieldLink.attributeTypeMap);
    }

    public fieldCode: string;
    
    public constructor(init?: Partial<FieldLink>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class FootnoteLink extends NodeLink {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(FootnoteLink.attributeTypeMap);
    }

    public constructor(init?: Partial<FootnoteLink>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class FormField extends NodeLink {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "calculateOnExit",
            baseName: "CalculateOnExit",
            type: "boolean",
        },        
        {
            name: "enabled",
            baseName: "Enabled",
            type: "boolean",
        },        
        {
            name: "entryMacro",
            baseName: "EntryMacro",
            type: "string",
        },        
        {
            name: "exitMacro",
            baseName: "ExitMacro",
            type: "string",
        },        
        {
            name: "helpText",
            baseName: "HelpText",
            type: "string",
        },        
        {
            name: "name",
            baseName: "Name",
            type: "string",
        },        
        {
            name: "ownHelp",
            baseName: "OwnHelp",
            type: "boolean",
        },        
        {
            name: "ownStatus",
            baseName: "OwnStatus",
            type: "boolean",
        },        
        {
            name: "statusText",
            baseName: "StatusText",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(FormField.attributeTypeMap);
    }

    public calculateOnExit: boolean;
    
    public enabled: boolean;
    
    public entryMacro: string;
    
    public exitMacro: string;
    
    public helpText: string;
    
    public name: string;
    
    public ownHelp: boolean;
    
    public ownStatus: boolean;
    
    public statusText: string;
    
    public constructor(init?: Partial<FormField>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class HeaderFooter extends HeaderFooterLink {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "drawingObjects",
            baseName: "DrawingObjects",
            type: "LinkElement",
        },        
        {
            name: "paragraphs",
            baseName: "Paragraphs",
            type: "LinkElement",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(HeaderFooter.attributeTypeMap);
    }

    public drawingObjects: LinkElement;
    
    public paragraphs: LinkElement;
    
    public constructor(init?: Partial<HeaderFooter>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace HeaderFooter {
}
// tslint:enable:quotemark
export class ImageSaveOptionsData extends FixedPageSaveOptionsData {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "graphicsQualityOptions",
            baseName: "GraphicsQualityOptions",
            type: "GraphicsQualityOptionsData",
        },        
        {
            name: "horizontalResolution",
            baseName: "HorizontalResolution",
            type: "number",
        },        
        {
            name: "imageBrightness",
            baseName: "ImageBrightness",
            type: "number",
        },        
        {
            name: "imageColorMode",
            baseName: "ImageColorMode",
            type: "string",
        },        
        {
            name: "imageContrast",
            baseName: "ImageContrast",
            type: "number",
        },        
        {
            name: "paperColor",
            baseName: "PaperColor",
            type: "string",
        },        
        {
            name: "pixelFormat",
            baseName: "PixelFormat",
            type: "string",
        },        
        {
            name: "resolution",
            baseName: "Resolution",
            type: "number",
        },        
        {
            name: "scale",
            baseName: "Scale",
            type: "number",
        },        
        {
            name: "useAntiAliasing",
            baseName: "UseAntiAliasing",
            type: "boolean",
        },        
        {
            name: "useGdiEmfRenderer",
            baseName: "UseGdiEmfRenderer",
            type: "boolean",
        },        
        {
            name: "useHighQualityRendering",
            baseName: "UseHighQualityRendering",
            type: "boolean",
        },        
        {
            name: "verticalResolution",
            baseName: "VerticalResolution",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ImageSaveOptionsData.attributeTypeMap);
    }

    public graphicsQualityOptions: GraphicsQualityOptionsData;
    
    public horizontalResolution: number;
    
    public imageBrightness: number;
    
    public imageColorMode: string;
    
    public imageContrast: number;
    
    public paperColor: string;
    
    public pixelFormat: string;
    
    public resolution: number;
    
    public scale: number;
    
    public useAntiAliasing: boolean;
    
    public useGdiEmfRenderer: boolean;
    
    public useHighQualityRendering: boolean;
    
    public verticalResolution: number;
    
    public constructor(init?: Partial<ImageSaveOptionsData>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class OfficeMathLink extends NodeLink {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(OfficeMathLink.attributeTypeMap);
    }

    public constructor(init?: Partial<OfficeMathLink>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class Paragraph extends NodeLink {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "childNodes",
            baseName: "ChildNodes",
            type: "Array<NodeLink>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(Paragraph.attributeTypeMap);
    }

    public childNodes: Array<NodeLink>;
    
    public constructor(init?: Partial<Paragraph>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class ParagraphLink extends NodeLink {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "text",
            baseName: "Text",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ParagraphLink.attributeTypeMap);
    }

    public text: string;
    
    public constructor(init?: Partial<ParagraphLink>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class RunLink extends NodeLink {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "text",
            baseName: "Text",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(RunLink.attributeTypeMap);
    }

    public text: string;
    
    public constructor(init?: Partial<RunLink>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class Table extends NodeLink {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "tableProperties",
            baseName: "TableProperties",
            type: "TableProperties",
        },        
        {
            name: "tableRowList",
            baseName: "TableRowList",
            type: "Array<TableRow>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(Table.attributeTypeMap);
    }

    public tableProperties: TableProperties;
    
    public tableRowList: Array<TableRow>;
    
    public constructor(init?: Partial<Table>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class TableCell extends NodeLink {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "childNodes",
            baseName: "ChildNodes",
            type: "Array<NodeLink>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TableCell.attributeTypeMap);
    }

    public childNodes: Array<NodeLink>;
    
    public constructor(init?: Partial<TableCell>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class TableLink extends NodeLink {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TableLink.attributeTypeMap);
    }

    public constructor(init?: Partial<TableLink>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class TableRow extends NodeLink {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "rowFormat",
            baseName: "RowFormat",
            type: "TableRowFormat",
        },        
        {
            name: "tableCellList",
            baseName: "TableCellList",
            type: "Array<TableCell>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TableRow.attributeTypeMap);
    }

    public rowFormat: TableRowFormat;
    
    public tableCellList: Array<TableCell>;
    
    public constructor(init?: Partial<TableRow>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class DrawingObject extends DrawingObjectLink {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "height",
            baseName: "Height",
            type: "number",
        },        
        {
            name: "imageDataLink",
            baseName: "ImageDataLink",
            type: "WordsApiLink",
        },        
        {
            name: "left",
            baseName: "Left",
            type: "number",
        },        
        {
            name: "oleDataLink",
            baseName: "OleDataLink",
            type: "WordsApiLink",
        },        
        {
            name: "relativeHorizontalPosition",
            baseName: "RelativeHorizontalPosition",
            type: "DrawingObject.RelativeHorizontalPositionEnum",
        },        
        {
            name: "relativeVerticalPosition",
            baseName: "RelativeVerticalPosition",
            type: "DrawingObject.RelativeVerticalPositionEnum",
        },        
        {
            name: "renderLinks",
            baseName: "RenderLinks",
            type: "Array<WordsApiLink>",
        },        
        {
            name: "top",
            baseName: "Top",
            type: "number",
        },        
        {
            name: "width",
            baseName: "Width",
            type: "number",
        },        
        {
            name: "wrapType",
            baseName: "WrapType",
            type: "DrawingObject.WrapTypeEnum",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(DrawingObject.attributeTypeMap);
    }

    public height: number;
    
    public imageDataLink: WordsApiLink;
    
    public left: number;
    
    public oleDataLink: WordsApiLink;
    
    public relativeHorizontalPosition: DrawingObject.RelativeHorizontalPositionEnum;
    
    public relativeVerticalPosition: DrawingObject.RelativeVerticalPositionEnum;
    
    public renderLinks: Array<WordsApiLink>;
    
    public top: number;
    
    public width: number;
    
    public wrapType: DrawingObject.WrapTypeEnum;
    
    public constructor(init?: Partial<DrawingObject>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace DrawingObject {
    export enum RelativeHorizontalPositionEnum {
        Margin = 'Margin' as any,
        Page = 'Page' as any,
        Column = 'Column' as any,
        Default = 'Default' as any,
        Character = 'Character' as any,
        LeftMargin = 'LeftMargin' as any,
        RightMargin = 'RightMargin' as any,
        InsideMargin = 'InsideMargin' as any,
        OutsideMargin = 'OutsideMargin' as any,
    }
    export enum RelativeVerticalPositionEnum {
        Margin = 'Margin' as any,
        TableDefault = 'TableDefault' as any,
        Page = 'Page' as any,
        Paragraph = 'Paragraph' as any,
        TextFrameDefault = 'TextFrameDefault' as any,
        Line = 'Line' as any,
        TopMargin = 'TopMargin' as any,
        BottomMargin = 'BottomMargin' as any,
        InsideMargin = 'InsideMargin' as any,
        OutsideMargin = 'OutsideMargin' as any,
    }
    export enum WrapTypeEnum {
        Inline = 'Inline' as any,
        TopBottom = 'TopBottom' as any,
        Square = 'Square' as any,
        None = 'None' as any,
        Tight = 'Tight' as any,
        Through = 'Through' as any,
    }
}
// tslint:enable:quotemark
export class Field extends FieldLink {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "localeId",
            baseName: "LocaleId",
            type: "string",
        },        
        {
            name: "result",
            baseName: "Result",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(Field.attributeTypeMap);
    }

    public localeId: string;
    
    public result: string;
    
    public constructor(init?: Partial<Field>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class Footnote extends FootnoteLink {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "content",
            baseName: "Content",
            type: "StoryChildNodes",
        },        
        {
            name: "footnoteType",
            baseName: "FootnoteType",
            type: "Footnote.FootnoteTypeEnum",
        },        
        {
            name: "position",
            baseName: "Position",
            type: "DocumentPosition",
        },        
        {
            name: "referenceMark",
            baseName: "ReferenceMark",
            type: "string",
        },        
        {
            name: "text",
            baseName: "Text",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(Footnote.attributeTypeMap);
    }

    public content: StoryChildNodes;
    
    public footnoteType: Footnote.FootnoteTypeEnum;
    
    public position: DocumentPosition;
    
    public referenceMark: string;
    
    public text: string;
    
    public constructor(init?: Partial<Footnote>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace Footnote {
    export enum FootnoteTypeEnum {
        Footnote = 'Footnote' as any,
        Endnote = 'Endnote' as any,
    }
}
// tslint:enable:quotemark
export class OfficeMathObject extends OfficeMathLink {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "content",
            baseName: "Content",
            type: "StoryChildNodes",
        },        
        {
            name: "displayType",
            baseName: "DisplayType",
            type: "OfficeMathObject.DisplayTypeEnum",
        },        
        {
            name: "justification",
            baseName: "Justification",
            type: "OfficeMathObject.JustificationEnum",
        },        
        {
            name: "mathObjectType",
            baseName: "MathObjectType",
            type: "OfficeMathObject.MathObjectTypeEnum",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(OfficeMathObject.attributeTypeMap);
    }

    public content: StoryChildNodes;
    
    public displayType: OfficeMathObject.DisplayTypeEnum;
    
    public justification: OfficeMathObject.JustificationEnum;
    
    public mathObjectType: OfficeMathObject.MathObjectTypeEnum;
    
    public constructor(init?: Partial<OfficeMathObject>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace OfficeMathObject {
    export enum DisplayTypeEnum {
        Display = 'Display' as any,
        Inline = 'Inline' as any,
    }
    export enum JustificationEnum {
        CenterGroup = 'CenterGroup' as any,
        Default = 'Default' as any,
        Center = 'Center' as any,
        Left = 'Left' as any,
        Right = 'Right' as any,
        Inline = 'Inline' as any,
    }
    export enum MathObjectTypeEnum {
        OMath = 'OMath' as any,
        OMathPara = 'OMathPara' as any,
        Accent = 'Accent' as any,
        Bar = 'Bar' as any,
        BorderBox = 'BorderBox' as any,
        Box = 'Box' as any,
        Delimiter = 'Delimiter' as any,
        Degree = 'Degree' as any,
        Argument = 'Argument' as any,
        Array = 'Array' as any,
        Fraction = 'Fraction' as any,
        Denominator = 'Denominator' as any,
        Numerator = 'Numerator' as any,
        Function = 'Function' as any,
        FunctionName = 'FunctionName' as any,
        GroupCharacter = 'GroupCharacter' as any,
        Limit = 'Limit' as any,
        LowerLimit = 'LowerLimit' as any,
        UpperLimit = 'UpperLimit' as any,
        Matrix = 'Matrix' as any,
        MatrixRow = 'MatrixRow' as any,
        NAry = 'NAry' as any,
        Phantom = 'Phantom' as any,
        Radical = 'Radical' as any,
        SubscriptPart = 'SubscriptPart' as any,
        SuperscriptPart = 'SuperscriptPart' as any,
        PreSubSuperscript = 'PreSubSuperscript' as any,
        Subscript = 'Subscript' as any,
        SubSuperscript = 'SubSuperscript' as any,
        Supercript = 'Supercript' as any,
    }
}
// tslint:enable:quotemark
export class Run extends RunLink {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(Run.attributeTypeMap);
    }

    public constructor(init?: Partial<Run>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class TiffSaveOptionsData extends ImageSaveOptionsData {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "tiffBinarizationMethod",
            baseName: "TiffBinarizationMethod",
            type: "string",
        },        
        {
            name: "tiffCompression",
            baseName: "TiffCompression",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TiffSaveOptionsData.attributeTypeMap);
    }

    public tiffBinarizationMethod: string;
    
    public tiffCompression: string;
    
    public constructor(init?: Partial<TiffSaveOptionsData>) {
        super(init);
        Object.assign(this, init);
    }        
}

const enumsMap = {
    "Document.SourceFormatEnum": Document.SourceFormatEnum,
    "GraphicsQualityOptionsData.CompositingModeEnum": GraphicsQualityOptionsData.CompositingModeEnum,
    "GraphicsQualityOptionsData.CompositingQualityEnum": GraphicsQualityOptionsData.CompositingQualityEnum,
    "GraphicsQualityOptionsData.InterpolationModeEnum": GraphicsQualityOptionsData.InterpolationModeEnum,
    "GraphicsQualityOptionsData.SmoothingModeEnum": GraphicsQualityOptionsData.SmoothingModeEnum,
    "GraphicsQualityOptionsData.TextRenderingHintEnum": GraphicsQualityOptionsData.TextRenderingHintEnum,
    "PreferredWidth.TypeEnum": PreferredWidth.TypeEnum,
    "StringFormatData.AlignmentEnum": StringFormatData.AlignmentEnum,
    "StringFormatData.FormatFlagsEnum": StringFormatData.FormatFlagsEnum,
    "StringFormatData.HotkeyPrefixEnum": StringFormatData.HotkeyPrefixEnum,
    "StringFormatData.LineAlignmentEnum": StringFormatData.LineAlignmentEnum,
    "StringFormatData.TrimmingEnum": StringFormatData.TrimmingEnum,
    "Border.BorderTypeEnum": Border.BorderTypeEnum,
    "Border.LineStyleEnum": Border.LineStyleEnum,
    "Font.StyleIdentifierEnum": Font.StyleIdentifierEnum,
    "Font.TextEffectEnum": Font.TextEffectEnum,
    "Font.UnderlineEnum": Font.UnderlineEnum,
    "HeaderFooterLink.TypeEnum": HeaderFooterLink.TypeEnum,
    "PageSetup.BorderAppliesToEnum": PageSetup.BorderAppliesToEnum,
    "PageSetup.BorderDistanceFromEnum": PageSetup.BorderDistanceFromEnum,
    "PageSetup.LineNumberRestartModeEnum": PageSetup.LineNumberRestartModeEnum,
    "PageSetup.OrientationEnum": PageSetup.OrientationEnum,
    "PageSetup.PageNumberStyleEnum": PageSetup.PageNumberStyleEnum,
    "PageSetup.PaperSizeEnum": PageSetup.PaperSizeEnum,
    "PageSetup.SectionStartEnum": PageSetup.SectionStartEnum,
    "PageSetup.VerticalAlignmentEnum": PageSetup.VerticalAlignmentEnum,
    "TableCellFormat.HorizontalMergeEnum": TableCellFormat.HorizontalMergeEnum,
    "TableCellFormat.OrientationEnum": TableCellFormat.OrientationEnum,
    "TableCellFormat.VerticalAlignmentEnum": TableCellFormat.VerticalAlignmentEnum,
    "TableCellFormat.VerticalMergeEnum": TableCellFormat.VerticalMergeEnum,
    "TableProperties.AlignmentEnum": TableProperties.AlignmentEnum,
    "TableProperties.StyleIdentifierEnum": TableProperties.StyleIdentifierEnum,
    "TableProperties.StyleOptionsEnum": TableProperties.StyleOptionsEnum,
    "TableProperties.TextWrappingEnum": TableProperties.TextWrappingEnum,
    "TableRowFormat.HeightRuleEnum": TableRowFormat.HeightRuleEnum,
    "DrawingObject.RelativeHorizontalPositionEnum": DrawingObject.RelativeHorizontalPositionEnum,
    "DrawingObject.RelativeVerticalPositionEnum": DrawingObject.RelativeVerticalPositionEnum,
    "DrawingObject.WrapTypeEnum": DrawingObject.WrapTypeEnum,
    "Footnote.FootnoteTypeEnum": Footnote.FootnoteTypeEnum,
    "OfficeMathObject.DisplayTypeEnum": OfficeMathObject.DisplayTypeEnum,
    "OfficeMathObject.JustificationEnum": OfficeMathObject.JustificationEnum,
    "OfficeMathObject.MathObjectTypeEnum": OfficeMathObject.MathObjectTypeEnum,
};

const typeMap = {
            AsposeResponse,
            BookmarkData,
            ClassificationResult,
            CompareData,
            Document,
            DocumentEntry,
            DocumentEntryList,
            DocumentPosition,
            DocumentStatData,
            FontInfo,
            FootnotesStatData,
            GraphicsQualityOptionsData,
            Link,
            LinkElement,
            LoadWebDocumentData,
            MetafileRenderingOptionsData,
            ModificationOperationResult,
            PageNumber,
            PageStatData,
            ParagraphInsert,
            PreferredWidth,
            ProtectionData,
            ProtectionRequest,
            ReplaceTextRequest,
            SaveOptionsData,
            SaveResult,
            SearchResult,
            SplitDocumentResult,
            StoryChildNodes,
            StringFormatData,
            TableCellInsert,
            TableInsert,
            TableRowInsert,
            WatermarkText,
            XmlColor,
            AvailableFontsResponse,
            Bookmark,
            BookmarkResponse,
            Bookmarks,
            BookmarksResponse,
            Border,
            BorderResponse,
            BordersCollection,
            BordersResponse,
            ClassificationResponse,
            CommentLink,
            CommentResponse,
            CommentsCollection,
            CommentsResponse,
            DocumentProperties,
            DocumentPropertiesResponse,
            DocumentProperty,
            DocumentPropertyResponse,
            DocumentResponse,
            DrawingObjectCollection,
            DrawingObjectResponse,
            DrawingObjectsResponse,
            FieldCollection,
            FieldNames,
            FieldNamesResponse,
            FieldResponse,
            FieldsResponse,
            FileLink,
            FixedPageSaveOptionsData,
            Font,
            FontResponse,
            FootnoteCollection,
            FootnoteResponse,
            FootnotesResponse,
            FormFieldCollection,
            FormFieldResponse,
            FormFieldsResponse,
            HeaderFooterLink,
            HeaderFooterLinkCollection,
            HeaderFooterResponse,
            HeaderFootersResponse,
            Hyperlink,
            HyperlinkResponse,
            Hyperlinks,
            HyperlinksResponse,
            NodeLink,
            OfficeMathObjectResponse,
            OfficeMathObjectsCollection,
            OfficeMathObjectsResponse,
            PageSetup,
            ParagraphLinkCollection,
            ParagraphLinkCollectionResponse,
            ParagraphResponse,
            ProtectionDataResponse,
            ReplaceTextResponse,
            RevisionsModificationResponse,
            RunResponse,
            Runs,
            RunsResponse,
            SaveResponse,
            SearchResponse,
            SearchResultsCollection,
            Section,
            SectionLink,
            SectionLinkCollection,
            SectionLinkCollectionResponse,
            SectionPageSetupResponse,
            SectionResponse,
            SplitDocumentResponse,
            StatDataResponse,
            TableCellFormat,
            TableCellFormatResponse,
            TableCellResponse,
            TableLinkCollection,
            TableLinkCollectionResponse,
            TableProperties,
            TablePropertiesResponse,
            TableResponse,
            TableRowFormat,
            TableRowFormatResponse,
            TableRowResponse,
            TextItem,
            TextItems,
            TextItemsResponse,
            WordsApiLink,
            Comment,
            DrawingObjectLink,
            FieldLink,
            FootnoteLink,
            FormField,
            HeaderFooter,
            ImageSaveOptionsData,
            OfficeMathLink,
            Paragraph,
            ParagraphLink,
            RunLink,
            Table,
            TableCell,
            TableLink,
            TableRow,
            DrawingObject,
            Field,
            Footnote,
            OfficeMathObject,
            Run,
            TiffSaveOptionsData,
};

export {enumsMap, typeMap};

/**
 * Request model for AcceptAllRevisions operation.
 */
export class AcceptAllRevisionsRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
     */
    public destFileName: string;
    
    public constructor(init?: Partial<AcceptAllRevisionsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for Classify operation.
 */
export class ClassifyRequest {
    /**
     * Gets or sets text
     */
    public text: string;

    /**
     * Gets or sets bestClassesCount
     */
    public bestClassesCount: string;
    
    public constructor(init?: Partial<ClassifyRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for ClassifyDocument operation.
 */
export class ClassifyDocumentRequest {
    /**
     * Gets or sets documentName
     */
    public documentName: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
     */
    public destFileName: string;

    /**
     * Gets or sets bestClassesCount
     */
    public bestClassesCount: string;

    /**
     * Gets or sets taxonomy
     */
    public taxonomy: string;
    
    public constructor(init?: Partial<ClassifyDocumentRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CreateOrUpdateDocumentProperty operation.
 */
export class CreateOrUpdateDocumentPropertyRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets propertyName
     */
    public propertyName: string;

    /**
     * Gets or sets property
     */
    public property: DocumentProperty;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
     */
    public destFileName: string;

    /**
     * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
     */
    public revisionAuthor: string;

    /**
     * The date and time to use for revisions.
     */
    public revisionDateTime: string;
    
    public constructor(init?: Partial<CreateOrUpdateDocumentPropertyRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for DeleteBorder operation.
 */
export class DeleteBorderRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets nodePath
     */
    public nodePath: string;

    /**
     * Object's index
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
     */
    public destFileName: string;

    /**
     * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
     */
    public revisionAuthor: string;

    /**
     * The date and time to use for revisions.
     */
    public revisionDateTime: string;
    
    public constructor(init?: Partial<DeleteBorderRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for DeleteBorders operation.
 */
export class DeleteBordersRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets nodePath
     */
    public nodePath: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
     */
    public destFileName: string;

    /**
     * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
     */
    public revisionAuthor: string;

    /**
     * The date and time to use for revisions.
     */
    public revisionDateTime: string;
    
    public constructor(init?: Partial<DeleteBordersRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for DeleteComment operation.
 */
export class DeleteCommentRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets commentIndex
     */
    public commentIndex: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
     */
    public destFileName: string;

    /**
     * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
     */
    public revisionAuthor: string;

    /**
     * The date and time to use for revisions.
     */
    public revisionDateTime: string;
    
    public constructor(init?: Partial<DeleteCommentRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for DeleteDocumentMacros operation.
 */
export class DeleteDocumentMacrosRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
     */
    public destFileName: string;

    /**
     * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
     */
    public revisionAuthor: string;

    /**
     * The date and time to use for revisions.
     */
    public revisionDateTime: string;
    
    public constructor(init?: Partial<DeleteDocumentMacrosRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for DeleteDocumentProperty operation.
 */
export class DeleteDocumentPropertyRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets propertyName
     */
    public propertyName: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
     */
    public destFileName: string;

    /**
     * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
     */
    public revisionAuthor: string;

    /**
     * The date and time to use for revisions.
     */
    public revisionDateTime: string;
    
    public constructor(init?: Partial<DeleteDocumentPropertyRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for DeleteDocumentWatermark operation.
 */
export class DeleteDocumentWatermarkRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
     */
    public destFileName: string;

    /**
     * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
     */
    public revisionAuthor: string;

    /**
     * The date and time to use for revisions.
     */
    public revisionDateTime: string;
    
    public constructor(init?: Partial<DeleteDocumentWatermarkRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for DeleteDrawingObject operation.
 */
export class DeleteDrawingObjectRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Object's index
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
     */
    public destFileName: string;

    /**
     * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
     */
    public revisionAuthor: string;

    /**
     * The date and time to use for revisions.
     */
    public revisionDateTime: string;

    /**
     * Gets or sets nodePath
     */
    public nodePath: string;
    
    public constructor(init?: Partial<DeleteDrawingObjectRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for DeleteField operation.
 */
export class DeleteFieldRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Object's index
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
     */
    public destFileName: string;

    /**
     * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
     */
    public revisionAuthor: string;

    /**
     * The date and time to use for revisions.
     */
    public revisionDateTime: string;

    /**
     * Gets or sets nodePath
     */
    public nodePath: string;
    
    public constructor(init?: Partial<DeleteFieldRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for DeleteFields operation.
 */
export class DeleteFieldsRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
     */
    public destFileName: string;

    /**
     * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
     */
    public revisionAuthor: string;

    /**
     * The date and time to use for revisions.
     */
    public revisionDateTime: string;

    /**
     * Gets or sets nodePath
     */
    public nodePath: string;
    
    public constructor(init?: Partial<DeleteFieldsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for DeleteFootnote operation.
 */
export class DeleteFootnoteRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Object's index
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
     */
    public destFileName: string;

    /**
     * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
     */
    public revisionAuthor: string;

    /**
     * The date and time to use for revisions.
     */
    public revisionDateTime: string;

    /**
     * Gets or sets nodePath
     */
    public nodePath: string;
    
    public constructor(init?: Partial<DeleteFootnoteRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for DeleteFormField operation.
 */
export class DeleteFormFieldRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Object's index
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
     */
    public destFileName: string;

    /**
     * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
     */
    public revisionAuthor: string;

    /**
     * The date and time to use for revisions.
     */
    public revisionDateTime: string;

    /**
     * Gets or sets nodePath
     */
    public nodePath: string;
    
    public constructor(init?: Partial<DeleteFormFieldRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for DeleteHeaderFooter operation.
 */
export class DeleteHeaderFooterRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Object's index
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
     */
    public destFileName: string;

    /**
     * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
     */
    public revisionAuthor: string;

    /**
     * The date and time to use for revisions.
     */
    public revisionDateTime: string;

    /**
     * Gets or sets sectionPath
     */
    public sectionPath: string;
    
    public constructor(init?: Partial<DeleteHeaderFooterRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for DeleteHeadersFooters operation.
 */
export class DeleteHeadersFootersRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
     */
    public destFileName: string;

    /**
     * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
     */
    public revisionAuthor: string;

    /**
     * The date and time to use for revisions.
     */
    public revisionDateTime: string;

    /**
     * Gets or sets sectionPath
     */
    public sectionPath: string;

    /**
     * Gets or sets headersFootersTypes
     */
    public headersFootersTypes: string;
    
    public constructor(init?: Partial<DeleteHeadersFootersRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for DeleteOfficeMathObject operation.
 */
export class DeleteOfficeMathObjectRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Object's index
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
     */
    public destFileName: string;

    /**
     * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
     */
    public revisionAuthor: string;

    /**
     * The date and time to use for revisions.
     */
    public revisionDateTime: string;

    /**
     * Gets or sets nodePath
     */
    public nodePath: string;
    
    public constructor(init?: Partial<DeleteOfficeMathObjectRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for DeleteParagraph operation.
 */
export class DeleteParagraphRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Object's index
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
     */
    public destFileName: string;

    /**
     * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
     */
    public revisionAuthor: string;

    /**
     * The date and time to use for revisions.
     */
    public revisionDateTime: string;

    /**
     * Gets or sets nodePath
     */
    public nodePath: string;
    
    public constructor(init?: Partial<DeleteParagraphRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for DeleteRun operation.
 */
export class DeleteRunRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets paragraphPath
     */
    public paragraphPath: string;

    /**
     * Object's index
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
     */
    public destFileName: string;

    /**
     * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
     */
    public revisionAuthor: string;

    /**
     * The date and time to use for revisions.
     */
    public revisionDateTime: string;
    
    public constructor(init?: Partial<DeleteRunRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for DeleteTable operation.
 */
export class DeleteTableRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Object's index
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
     */
    public destFileName: string;

    /**
     * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
     */
    public revisionAuthor: string;

    /**
     * The date and time to use for revisions.
     */
    public revisionDateTime: string;

    /**
     * Gets or sets nodePath
     */
    public nodePath: string;
    
    public constructor(init?: Partial<DeleteTableRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for DeleteTableCell operation.
 */
export class DeleteTableCellRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets tableRowPath
     */
    public tableRowPath: string;

    /**
     * Object's index
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
     */
    public destFileName: string;

    /**
     * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
     */
    public revisionAuthor: string;

    /**
     * The date and time to use for revisions.
     */
    public revisionDateTime: string;
    
    public constructor(init?: Partial<DeleteTableCellRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for DeleteTableRow operation.
 */
export class DeleteTableRowRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets tablePath
     */
    public tablePath: string;

    /**
     * Object's index
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
     */
    public destFileName: string;

    /**
     * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
     */
    public revisionAuthor: string;

    /**
     * The date and time to use for revisions.
     */
    public revisionDateTime: string;
    
    public constructor(init?: Partial<DeleteTableRowRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for DeleteUnprotectDocument operation.
 */
export class DeleteUnprotectDocumentRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets protectionRequest
     */
    public protectionRequest: ProtectionRequest;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
     */
    public destFileName: string;
    
    public constructor(init?: Partial<DeleteUnprotectDocumentRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetAvailableFonts operation.
 */
export class GetAvailableFontsRequest {
    /**
     * Gets or sets fontsLocation
     */
    public fontsLocation: string;
    
    public constructor(init?: Partial<GetAvailableFontsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetBorder operation.
 */
export class GetBorderRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets nodePath
     */
    public nodePath: string;

    /**
     * Object's index
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;
    
    public constructor(init?: Partial<GetBorderRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetBorders operation.
 */
export class GetBordersRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets nodePath
     */
    public nodePath: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;
    
    public constructor(init?: Partial<GetBordersRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetComment operation.
 */
export class GetCommentRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets commentIndex
     */
    public commentIndex: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;
    
    public constructor(init?: Partial<GetCommentRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetComments operation.
 */
export class GetCommentsRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;
    
    public constructor(init?: Partial<GetCommentsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetDocument operation.
 */
export class GetDocumentRequest {
    /**
     * Gets or sets documentName
     */
    public documentName: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;
    
    public constructor(init?: Partial<GetDocumentRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetDocumentBookmarkByName operation.
 */
export class GetDocumentBookmarkByNameRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets bookmarkName
     */
    public bookmarkName: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;
    
    public constructor(init?: Partial<GetDocumentBookmarkByNameRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetDocumentBookmarks operation.
 */
export class GetDocumentBookmarksRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;
    
    public constructor(init?: Partial<GetDocumentBookmarksRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetDocumentDrawingObjectByIndex operation.
 */
export class GetDocumentDrawingObjectByIndexRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Object's index
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Gets or sets nodePath
     */
    public nodePath: string;
    
    public constructor(init?: Partial<GetDocumentDrawingObjectByIndexRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetDocumentDrawingObjectImageData operation.
 */
export class GetDocumentDrawingObjectImageDataRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Object's index
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Gets or sets nodePath
     */
    public nodePath: string;
    
    public constructor(init?: Partial<GetDocumentDrawingObjectImageDataRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetDocumentDrawingObjectOleData operation.
 */
export class GetDocumentDrawingObjectOleDataRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Object's index
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Gets or sets nodePath
     */
    public nodePath: string;
    
    public constructor(init?: Partial<GetDocumentDrawingObjectOleDataRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetDocumentDrawingObjects operation.
 */
export class GetDocumentDrawingObjectsRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Gets or sets nodePath
     */
    public nodePath: string;
    
    public constructor(init?: Partial<GetDocumentDrawingObjectsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetDocumentFieldNames operation.
 */
export class GetDocumentFieldNamesRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Gets or sets useNonMergeFields
     */
    public useNonMergeFields: boolean;
    
    public constructor(init?: Partial<GetDocumentFieldNamesRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetDocumentHyperlinkByIndex operation.
 */
export class GetDocumentHyperlinkByIndexRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets hyperlinkIndex
     */
    public hyperlinkIndex: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;
    
    public constructor(init?: Partial<GetDocumentHyperlinkByIndexRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetDocumentHyperlinks operation.
 */
export class GetDocumentHyperlinksRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;
    
    public constructor(init?: Partial<GetDocumentHyperlinksRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetDocumentParagraph operation.
 */
export class GetDocumentParagraphRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Object's index
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Gets or sets nodePath
     */
    public nodePath: string;
    
    public constructor(init?: Partial<GetDocumentParagraphRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetDocumentParagraphRun operation.
 */
export class GetDocumentParagraphRunRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets paragraphPath
     */
    public paragraphPath: string;

    /**
     * Object's index
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;
    
    public constructor(init?: Partial<GetDocumentParagraphRunRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetDocumentParagraphRunFont operation.
 */
export class GetDocumentParagraphRunFontRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets paragraphPath
     */
    public paragraphPath: string;

    /**
     * Object's index
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;
    
    public constructor(init?: Partial<GetDocumentParagraphRunFontRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetDocumentParagraphRuns operation.
 */
export class GetDocumentParagraphRunsRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets paragraphPath
     */
    public paragraphPath: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;
    
    public constructor(init?: Partial<GetDocumentParagraphRunsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetDocumentParagraphs operation.
 */
export class GetDocumentParagraphsRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Gets or sets nodePath
     */
    public nodePath: string;
    
    public constructor(init?: Partial<GetDocumentParagraphsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetDocumentProperties operation.
 */
export class GetDocumentPropertiesRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;
    
    public constructor(init?: Partial<GetDocumentPropertiesRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetDocumentProperty operation.
 */
export class GetDocumentPropertyRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets propertyName
     */
    public propertyName: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;
    
    public constructor(init?: Partial<GetDocumentPropertyRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetDocumentProtection operation.
 */
export class GetDocumentProtectionRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;
    
    public constructor(init?: Partial<GetDocumentProtectionRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetDocumentStatistics operation.
 */
export class GetDocumentStatisticsRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Gets or sets includeComments
     */
    public includeComments: boolean;

    /**
     * Gets or sets includeFootnotes
     */
    public includeFootnotes: boolean;

    /**
     * Gets or sets includeTextInShapes
     */
    public includeTextInShapes: boolean;
    
    public constructor(init?: Partial<GetDocumentStatisticsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetDocumentTextItems operation.
 */
export class GetDocumentTextItemsRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;
    
    public constructor(init?: Partial<GetDocumentTextItemsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetDocumentWithFormat operation.
 */
export class GetDocumentWithFormatRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets format
     */
    public format: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Gets or sets outPath
     */
    public outPath: string;

    /**
     * Folder in filestorage with custom fonts.
     */
    public fontsLocation: string;
    
    public constructor(init?: Partial<GetDocumentWithFormatRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetField operation.
 */
export class GetFieldRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Object's index
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Gets or sets nodePath
     */
    public nodePath: string;
    
    public constructor(init?: Partial<GetFieldRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetFields operation.
 */
export class GetFieldsRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Gets or sets nodePath
     */
    public nodePath: string;
    
    public constructor(init?: Partial<GetFieldsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetFootnote operation.
 */
export class GetFootnoteRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Object's index
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Gets or sets nodePath
     */
    public nodePath: string;
    
    public constructor(init?: Partial<GetFootnoteRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetFootnotes operation.
 */
export class GetFootnotesRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Gets or sets nodePath
     */
    public nodePath: string;
    
    public constructor(init?: Partial<GetFootnotesRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetFormField operation.
 */
export class GetFormFieldRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Object's index
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Gets or sets nodePath
     */
    public nodePath: string;
    
    public constructor(init?: Partial<GetFormFieldRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetFormFields operation.
 */
export class GetFormFieldsRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Gets or sets nodePath
     */
    public nodePath: string;
    
    public constructor(init?: Partial<GetFormFieldsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetHeaderFooter operation.
 */
export class GetHeaderFooterRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets headerFooterIndex
     */
    public headerFooterIndex: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Gets or sets filterByType
     */
    public filterByType: string;
    
    public constructor(init?: Partial<GetHeaderFooterRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetHeaderFooterOfSection operation.
 */
export class GetHeaderFooterOfSectionRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets headerFooterIndex
     */
    public headerFooterIndex: number;

    /**
     * Gets or sets sectionIndex
     */
    public sectionIndex: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Gets or sets filterByType
     */
    public filterByType: string;
    
    public constructor(init?: Partial<GetHeaderFooterOfSectionRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetHeaderFooters operation.
 */
export class GetHeaderFootersRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Gets or sets sectionPath
     */
    public sectionPath: string;

    /**
     * Gets or sets filterByType
     */
    public filterByType: string;
    
    public constructor(init?: Partial<GetHeaderFootersRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetOfficeMathObject operation.
 */
export class GetOfficeMathObjectRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Object's index
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Gets or sets nodePath
     */
    public nodePath: string;
    
    public constructor(init?: Partial<GetOfficeMathObjectRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetOfficeMathObjects operation.
 */
export class GetOfficeMathObjectsRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Gets or sets nodePath
     */
    public nodePath: string;
    
    public constructor(init?: Partial<GetOfficeMathObjectsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetSection operation.
 */
export class GetSectionRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets sectionIndex
     */
    public sectionIndex: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;
    
    public constructor(init?: Partial<GetSectionRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetSectionPageSetup operation.
 */
export class GetSectionPageSetupRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets sectionIndex
     */
    public sectionIndex: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;
    
    public constructor(init?: Partial<GetSectionPageSetupRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetSections operation.
 */
export class GetSectionsRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;
    
    public constructor(init?: Partial<GetSectionsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetTable operation.
 */
export class GetTableRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Object's index
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Gets or sets nodePath
     */
    public nodePath: string;
    
    public constructor(init?: Partial<GetTableRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetTableCell operation.
 */
export class GetTableCellRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets tableRowPath
     */
    public tableRowPath: string;

    /**
     * Object's index
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;
    
    public constructor(init?: Partial<GetTableCellRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetTableCellFormat operation.
 */
export class GetTableCellFormatRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets tableRowPath
     */
    public tableRowPath: string;

    /**
     * Object's index
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;
    
    public constructor(init?: Partial<GetTableCellFormatRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetTableProperties operation.
 */
export class GetTablePropertiesRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Object's index
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Gets or sets nodePath
     */
    public nodePath: string;
    
    public constructor(init?: Partial<GetTablePropertiesRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetTableRow operation.
 */
export class GetTableRowRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets tablePath
     */
    public tablePath: string;

    /**
     * Object's index
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;
    
    public constructor(init?: Partial<GetTableRowRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetTableRowFormat operation.
 */
export class GetTableRowFormatRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets tablePath
     */
    public tablePath: string;

    /**
     * Object's index
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;
    
    public constructor(init?: Partial<GetTableRowFormatRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetTables operation.
 */
export class GetTablesRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Gets or sets nodePath
     */
    public nodePath: string;
    
    public constructor(init?: Partial<GetTablesRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for InsertTable operation.
 */
export class InsertTableRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
     */
    public destFileName: string;

    /**
     * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
     */
    public revisionAuthor: string;

    /**
     * The date and time to use for revisions.
     */
    public revisionDateTime: string;

    /**
     * Gets or sets table
     */
    public table: TableInsert;

    /**
     * Gets or sets nodePath
     */
    public nodePath: string;
    
    public constructor(init?: Partial<InsertTableRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for InsertTableCell operation.
 */
export class InsertTableCellRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets tableRowPath
     */
    public tableRowPath: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
     */
    public destFileName: string;

    /**
     * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
     */
    public revisionAuthor: string;

    /**
     * The date and time to use for revisions.
     */
    public revisionDateTime: string;

    /**
     * Gets or sets cell
     */
    public cell: TableCellInsert;
    
    public constructor(init?: Partial<InsertTableCellRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for InsertTableRow operation.
 */
export class InsertTableRowRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets tablePath
     */
    public tablePath: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
     */
    public destFileName: string;

    /**
     * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
     */
    public revisionAuthor: string;

    /**
     * The date and time to use for revisions.
     */
    public revisionDateTime: string;

    /**
     * Gets or sets row
     */
    public row: TableRowInsert;
    
    public constructor(init?: Partial<InsertTableRowRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PostAppendDocument operation.
 */
export class PostAppendDocumentRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets documentList
     */
    public documentList: DocumentEntryList;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
     */
    public destFileName: string;

    /**
     * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
     */
    public revisionAuthor: string;

    /**
     * The date and time to use for revisions.
     */
    public revisionDateTime: string;
    
    public constructor(init?: Partial<PostAppendDocumentRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PostChangeDocumentProtection operation.
 */
export class PostChangeDocumentProtectionRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets protectionRequest
     */
    public protectionRequest: ProtectionRequest;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
     */
    public destFileName: string;
    
    public constructor(init?: Partial<PostChangeDocumentProtectionRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PostComment operation.
 */
export class PostCommentRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets commentIndex
     */
    public commentIndex: number;

    /**
     * Gets or sets comment
     */
    public comment: Comment;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
     */
    public destFileName: string;

    /**
     * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
     */
    public revisionAuthor: string;

    /**
     * The date and time to use for revisions.
     */
    public revisionDateTime: string;
    
    public constructor(init?: Partial<PostCommentRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PostCompareDocument operation.
 */
export class PostCompareDocumentRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets compareData
     */
    public compareData: CompareData;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
     */
    public destFileName: string;
    
    public constructor(init?: Partial<PostCompareDocumentRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PostDocumentExecuteMailMerge operation.
 */
export class PostDocumentExecuteMailMergeRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Mail merge data
     */
    public data: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Gets or sets withRegions
     */
    public withRegions: boolean;

    /**
     * Gets or sets mailMergeDataFile
     */
    public mailMergeDataFile: string;

    /**
     * Gets or sets cleanup
     */
    public cleanup: string;

    /**
     * Gets or sets useWholeParagraphAsRegion
     */
    public useWholeParagraphAsRegion: boolean;

    /**
     * Gets or sets destFileName
     */
    public destFileName: string;
    
    public constructor(init?: Partial<PostDocumentExecuteMailMergeRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PostDocumentParagraphRunFont operation.
 */
export class PostDocumentParagraphRunFontRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets fontDto
     */
    public fontDto: Font;

    /**
     * Gets or sets paragraphPath
     */
    public paragraphPath: string;

    /**
     * Object's index
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
     */
    public destFileName: string;

    /**
     * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
     */
    public revisionAuthor: string;

    /**
     * The date and time to use for revisions.
     */
    public revisionDateTime: string;
    
    public constructor(init?: Partial<PostDocumentParagraphRunFontRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PostDocumentSaveAs operation.
 */
export class PostDocumentSaveAsRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets saveOptionsData
     */
    public saveOptionsData: SaveOptionsData;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
     */
    public destFileName: string;

    /**
     * Folder in filestorage with custom fonts.
     */
    public fontsLocation: string;
    
    public constructor(init?: Partial<PostDocumentSaveAsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PostDrawingObject operation.
 */
export class PostDrawingObjectRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Drawing object parameters
     */
    public drawingObject: string;

    /**
     * File with image
     */
    public imageFile: Buffer;

    /**
     * Object's index
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
     */
    public destFileName: string;

    /**
     * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
     */
    public revisionAuthor: string;

    /**
     * The date and time to use for revisions.
     */
    public revisionDateTime: string;

    /**
     * Gets or sets nodePath
     */
    public nodePath: string;
    
    public constructor(init?: Partial<PostDrawingObjectRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PostExecuteTemplate operation.
 */
export class PostExecuteTemplateRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Mail merge data
     */
    public data: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Gets or sets cleanup
     */
    public cleanup: string;

    /**
     * Gets or sets useWholeParagraphAsRegion
     */
    public useWholeParagraphAsRegion: boolean;

    /**
     * Gets or sets withRegions
     */
    public withRegions: boolean;

    /**
     * Gets or sets destFileName
     */
    public destFileName: string;
    
    public constructor(init?: Partial<PostExecuteTemplateRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PostField operation.
 */
export class PostFieldRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets field
     */
    public field: Field;

    /**
     * Object's index
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
     */
    public destFileName: string;

    /**
     * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
     */
    public revisionAuthor: string;

    /**
     * The date and time to use for revisions.
     */
    public revisionDateTime: string;

    /**
     * Gets or sets nodePath
     */
    public nodePath: string;
    
    public constructor(init?: Partial<PostFieldRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PostFootnote operation.
 */
export class PostFootnoteRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets footnoteDto
     */
    public footnoteDto: Footnote;

    /**
     * Object's index
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
     */
    public destFileName: string;

    /**
     * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
     */
    public revisionAuthor: string;

    /**
     * The date and time to use for revisions.
     */
    public revisionDateTime: string;

    /**
     * Gets or sets nodePath
     */
    public nodePath: string;
    
    public constructor(init?: Partial<PostFootnoteRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PostFormField operation.
 */
export class PostFormFieldRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets formField
     */
    public formField: FormField;

    /**
     * Object's index
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
     */
    public destFileName: string;

    /**
     * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
     */
    public revisionAuthor: string;

    /**
     * The date and time to use for revisions.
     */
    public revisionDateTime: string;

    /**
     * Gets or sets nodePath
     */
    public nodePath: string;
    
    public constructor(init?: Partial<PostFormFieldRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PostInsertDocumentWatermarkImage operation.
 */
export class PostInsertDocumentWatermarkImageRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * File with image
     */
    public imageFile: Buffer;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
     */
    public destFileName: string;

    /**
     * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
     */
    public revisionAuthor: string;

    /**
     * The date and time to use for revisions.
     */
    public revisionDateTime: string;

    /**
     * Gets or sets rotationAngle
     */
    public rotationAngle: number;

    /**
     * Gets or sets image
     */
    public image: string;
    
    public constructor(init?: Partial<PostInsertDocumentWatermarkImageRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PostInsertDocumentWatermarkText operation.
 */
export class PostInsertDocumentWatermarkTextRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets watermarkText
     */
    public watermarkText: WatermarkText;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
     */
    public destFileName: string;

    /**
     * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
     */
    public revisionAuthor: string;

    /**
     * The date and time to use for revisions.
     */
    public revisionDateTime: string;
    
    public constructor(init?: Partial<PostInsertDocumentWatermarkTextRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PostInsertPageNumbers operation.
 */
export class PostInsertPageNumbersRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets pageNumber
     */
    public pageNumber: PageNumber;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
     */
    public destFileName: string;

    /**
     * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
     */
    public revisionAuthor: string;

    /**
     * The date and time to use for revisions.
     */
    public revisionDateTime: string;
    
    public constructor(init?: Partial<PostInsertPageNumbersRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PostLoadWebDocument operation.
 */
export class PostLoadWebDocumentRequest {
    /**
     * Gets or sets data
     */
    public data: LoadWebDocumentData;

    /**
     * File storage, which have to be used.
     */
    public storage: string;
    
    public constructor(init?: Partial<PostLoadWebDocumentRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PostReplaceText operation.
 */
export class PostReplaceTextRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets replaceText
     */
    public replaceText: ReplaceTextRequest;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
     */
    public destFileName: string;

    /**
     * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
     */
    public revisionAuthor: string;

    /**
     * The date and time to use for revisions.
     */
    public revisionDateTime: string;
    
    public constructor(init?: Partial<PostReplaceTextRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PostRun operation.
 */
export class PostRunRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets run
     */
    public run: Run;

    /**
     * Gets or sets paragraphPath
     */
    public paragraphPath: string;

    /**
     * Object's index
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
     */
    public destFileName: string;

    /**
     * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
     */
    public revisionAuthor: string;

    /**
     * The date and time to use for revisions.
     */
    public revisionDateTime: string;
    
    public constructor(init?: Partial<PostRunRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PostSplitDocument operation.
 */
export class PostSplitDocumentRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
     */
    public destFileName: string;

    /**
     * Gets or sets format
     */
    public format: string;

    /**
     * Gets or sets from
     */
    public from: number;

    /**
     * Gets or sets to
     */
    public to: number;

    /**
     * Gets or sets zipOutput
     */
    public zipOutput: boolean;

    /**
     * Folder in filestorage with custom fonts.
     */
    public fontsLocation: string;
    
    public constructor(init?: Partial<PostSplitDocumentRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PostUpdateDocumentBookmark operation.
 */
export class PostUpdateDocumentBookmarkRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets bookmarkData
     */
    public bookmarkData: BookmarkData;

    /**
     * Gets or sets bookmarkName
     */
    public bookmarkName: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
     */
    public destFileName: string;

    /**
     * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
     */
    public revisionAuthor: string;

    /**
     * The date and time to use for revisions.
     */
    public revisionDateTime: string;
    
    public constructor(init?: Partial<PostUpdateDocumentBookmarkRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PostUpdateDocumentFields operation.
 */
export class PostUpdateDocumentFieldsRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
     */
    public destFileName: string;
    
    public constructor(init?: Partial<PostUpdateDocumentFieldsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PutComment operation.
 */
export class PutCommentRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets comment
     */
    public comment: Comment;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
     */
    public destFileName: string;

    /**
     * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
     */
    public revisionAuthor: string;

    /**
     * The date and time to use for revisions.
     */
    public revisionDateTime: string;
    
    public constructor(init?: Partial<PutCommentRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PutConvertDocument operation.
 */
export class PutConvertDocumentRequest {
    /**
     * Converting document
     */
    public document: Buffer;

    /**
     * Gets or sets format
     */
    public format: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Gets or sets outPath
     */
    public outPath: string;

    /**
     * Gets or sets documentFileName
     */
    public documentFileName: string;

    /**
     * Folder in filestorage with custom fonts.
     */
    public fontsLocation: string;
    
    public constructor(init?: Partial<PutConvertDocumentRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PutCreateDocument operation.
 */
export class PutCreateDocumentRequest {
    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Gets or sets fileName
     */
    public fileName: string;

    /**
     * Gets or sets folder
     */
    public folder: string;
    
    public constructor(init?: Partial<PutCreateDocumentRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PutDocumentFieldNames operation.
 */
export class PutDocumentFieldNamesRequest {
    /**
     * File with template
     */
    public template: Buffer;

    /**
     * Gets or sets useNonMergeFields
     */
    public useNonMergeFields: boolean;
    
    public constructor(init?: Partial<PutDocumentFieldNamesRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PutDocumentSaveAsTiff operation.
 */
export class PutDocumentSaveAsTiffRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets saveOptions
     */
    public saveOptions: TiffSaveOptionsData;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
     */
    public destFileName: string;

    /**
     * Gets or sets resultFile
     */
    public resultFile: string;

    /**
     * Gets or sets useAntiAliasing
     */
    public useAntiAliasing: boolean;

    /**
     * Gets or sets useHighQualityRendering
     */
    public useHighQualityRendering: boolean;

    /**
     * Gets or sets imageBrightness
     */
    public imageBrightness: number;

    /**
     * Gets or sets imageColorMode
     */
    public imageColorMode: string;

    /**
     * Gets or sets imageContrast
     */
    public imageContrast: number;

    /**
     * Gets or sets numeralFormat
     */
    public numeralFormat: string;

    /**
     * Gets or sets pageCount
     */
    public pageCount: number;

    /**
     * Gets or sets pageIndex
     */
    public pageIndex: number;

    /**
     * Gets or sets paperColor
     */
    public paperColor: string;

    /**
     * Gets or sets pixelFormat
     */
    public pixelFormat: string;

    /**
     * Gets or sets resolution
     */
    public resolution: number;

    /**
     * Gets or sets scale
     */
    public scale: number;

    /**
     * Gets or sets tiffCompression
     */
    public tiffCompression: string;

    /**
     * Gets or sets dmlRenderingMode
     */
    public dmlRenderingMode: string;

    /**
     * Gets or sets dmlEffectsRenderingMode
     */
    public dmlEffectsRenderingMode: string;

    /**
     * Gets or sets tiffBinarizationMethod
     */
    public tiffBinarizationMethod: string;

    /**
     * Gets or sets zipOutput
     */
    public zipOutput: boolean;

    /**
     * Folder in filestorage with custom fonts.
     */
    public fontsLocation: string;
    
    public constructor(init?: Partial<PutDocumentSaveAsTiffRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PutDrawingObject operation.
 */
export class PutDrawingObjectRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Drawing object parameters
     */
    public drawingObject: string;

    /**
     * File with image
     */
    public imageFile: Buffer;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
     */
    public destFileName: string;

    /**
     * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
     */
    public revisionAuthor: string;

    /**
     * The date and time to use for revisions.
     */
    public revisionDateTime: string;

    /**
     * Gets or sets nodePath
     */
    public nodePath: string;
    
    public constructor(init?: Partial<PutDrawingObjectRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PutExecuteMailMergeOnline operation.
 */
export class PutExecuteMailMergeOnlineRequest {
    /**
     * File with template
     */
    public template: Buffer;

    /**
     * File with mailmerge data
     */
    public data: Buffer;

    /**
     * Gets or sets withRegions
     */
    public withRegions: boolean;

    /**
     * Gets or sets cleanup
     */
    public cleanup: string;

    /**
     * Gets or sets documentFileName
     */
    public documentFileName: string;
    
    public constructor(init?: Partial<PutExecuteMailMergeOnlineRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PutExecuteTemplateOnline operation.
 */
export class PutExecuteTemplateOnlineRequest {
    /**
     * File with template
     */
    public template: Buffer;

    /**
     * File with mailmerge data
     */
    public data: Buffer;

    /**
     * Gets or sets cleanup
     */
    public cleanup: string;

    /**
     * Gets or sets useWholeParagraphAsRegion
     */
    public useWholeParagraphAsRegion: boolean;

    /**
     * Gets or sets withRegions
     */
    public withRegions: boolean;

    /**
     * Gets or sets documentFileName
     */
    public documentFileName: string;
    
    public constructor(init?: Partial<PutExecuteTemplateOnlineRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PutField operation.
 */
export class PutFieldRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets field
     */
    public field: Field;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
     */
    public destFileName: string;

    /**
     * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
     */
    public revisionAuthor: string;

    /**
     * The date and time to use for revisions.
     */
    public revisionDateTime: string;

    /**
     * Gets or sets nodePath
     */
    public nodePath: string;

    /**
     * Gets or sets insertBeforeNode
     */
    public insertBeforeNode: string;
    
    public constructor(init?: Partial<PutFieldRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PutFootnote operation.
 */
export class PutFootnoteRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets footnoteDto
     */
    public footnoteDto: Footnote;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
     */
    public destFileName: string;

    /**
     * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
     */
    public revisionAuthor: string;

    /**
     * The date and time to use for revisions.
     */
    public revisionDateTime: string;

    /**
     * Gets or sets nodePath
     */
    public nodePath: string;
    
    public constructor(init?: Partial<PutFootnoteRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PutFormField operation.
 */
export class PutFormFieldRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets formField
     */
    public formField: FormField;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
     */
    public destFileName: string;

    /**
     * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
     */
    public revisionAuthor: string;

    /**
     * The date and time to use for revisions.
     */
    public revisionDateTime: string;

    /**
     * Gets or sets nodePath
     */
    public nodePath: string;

    /**
     * Gets or sets insertBeforeNode
     */
    public insertBeforeNode: string;
    
    public constructor(init?: Partial<PutFormFieldRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PutHeaderFooter operation.
 */
export class PutHeaderFooterRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets headerFooterType
     */
    public headerFooterType: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
     */
    public destFileName: string;

    /**
     * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
     */
    public revisionAuthor: string;

    /**
     * The date and time to use for revisions.
     */
    public revisionDateTime: string;

    /**
     * Gets or sets sectionPath
     */
    public sectionPath: string;
    
    public constructor(init?: Partial<PutHeaderFooterRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PutParagraph operation.
 */
export class PutParagraphRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets paragraph
     */
    public paragraph: ParagraphInsert;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
     */
    public destFileName: string;

    /**
     * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
     */
    public revisionAuthor: string;

    /**
     * The date and time to use for revisions.
     */
    public revisionDateTime: string;

    /**
     * Gets or sets nodePath
     */
    public nodePath: string;

    /**
     * Gets or sets insertBeforeNode
     */
    public insertBeforeNode: string;
    
    public constructor(init?: Partial<PutParagraphRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PutProtectDocument operation.
 */
export class PutProtectDocumentRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets protectionRequest
     */
    public protectionRequest: ProtectionRequest;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
     */
    public destFileName: string;
    
    public constructor(init?: Partial<PutProtectDocumentRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PutRun operation.
 */
export class PutRunRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets paragraphPath
     */
    public paragraphPath: string;

    /**
     * Gets or sets run
     */
    public run: Run;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
     */
    public destFileName: string;

    /**
     * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
     */
    public revisionAuthor: string;

    /**
     * The date and time to use for revisions.
     */
    public revisionDateTime: string;

    /**
     * Gets or sets insertBeforeNode
     */
    public insertBeforeNode: string;
    
    public constructor(init?: Partial<PutRunRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for RejectAllRevisions operation.
 */
export class RejectAllRevisionsRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
     */
    public destFileName: string;
    
    public constructor(init?: Partial<RejectAllRevisionsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for RenderDrawingObject operation.
 */
export class RenderDrawingObjectRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets format
     */
    public format: string;

    /**
     * Object's index
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
     */
    public destFileName: string;

    /**
     * Gets or sets nodePath
     */
    public nodePath: string;

    /**
     * Folder in filestorage with custom fonts.
     */
    public fontsLocation: string;
    
    public constructor(init?: Partial<RenderDrawingObjectRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for RenderMathObject operation.
 */
export class RenderMathObjectRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets format
     */
    public format: string;

    /**
     * Object's index
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
     */
    public destFileName: string;

    /**
     * Gets or sets nodePath
     */
    public nodePath: string;

    /**
     * Folder in filestorage with custom fonts.
     */
    public fontsLocation: string;
    
    public constructor(init?: Partial<RenderMathObjectRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for RenderPage operation.
 */
export class RenderPageRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets pageIndex
     */
    public pageIndex: number;

    /**
     * Gets or sets format
     */
    public format: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
     */
    public destFileName: string;

    /**
     * Folder in filestorage with custom fonts.
     */
    public fontsLocation: string;
    
    public constructor(init?: Partial<RenderPageRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for RenderParagraph operation.
 */
export class RenderParagraphRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets format
     */
    public format: string;

    /**
     * Object's index
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
     */
    public destFileName: string;

    /**
     * Gets or sets nodePath
     */
    public nodePath: string;

    /**
     * Folder in filestorage with custom fonts.
     */
    public fontsLocation: string;
    
    public constructor(init?: Partial<RenderParagraphRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for RenderTable operation.
 */
export class RenderTableRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets format
     */
    public format: string;

    /**
     * Object's index
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
     */
    public destFileName: string;

    /**
     * Gets or sets nodePath
     */
    public nodePath: string;

    /**
     * Folder in filestorage with custom fonts.
     */
    public fontsLocation: string;
    
    public constructor(init?: Partial<RenderTableRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for ResetCache operation.
 */
export class ResetCacheRequest {
    
    public constructor(init?: Partial<ResetCacheRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for Search operation.
 */
export class SearchRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets pattern
     */
    public pattern: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
     */
    public destFileName: string;
    
    public constructor(init?: Partial<SearchRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for UpdateBorder operation.
 */
export class UpdateBorderRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets borderProperties
     */
    public borderProperties: Border;

    /**
     * Gets or sets nodePath
     */
    public nodePath: string;

    /**
     * Object's index
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
     */
    public destFileName: string;

    /**
     * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
     */
    public revisionAuthor: string;

    /**
     * The date and time to use for revisions.
     */
    public revisionDateTime: string;
    
    public constructor(init?: Partial<UpdateBorderRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for UpdateSectionPageSetup operation.
 */
export class UpdateSectionPageSetupRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets sectionIndex
     */
    public sectionIndex: number;

    /**
     * Gets or sets pageSetup
     */
    public pageSetup: PageSetup;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
     */
    public destFileName: string;

    /**
     * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
     */
    public revisionAuthor: string;

    /**
     * The date and time to use for revisions.
     */
    public revisionDateTime: string;
    
    public constructor(init?: Partial<UpdateSectionPageSetupRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for UpdateTableCellFormat operation.
 */
export class UpdateTableCellFormatRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets tableRowPath
     */
    public tableRowPath: string;

    /**
     * Object's index
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
     */
    public destFileName: string;

    /**
     * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
     */
    public revisionAuthor: string;

    /**
     * The date and time to use for revisions.
     */
    public revisionDateTime: string;

    /**
     * Gets or sets format
     */
    public format: TableCellFormat;
    
    public constructor(init?: Partial<UpdateTableCellFormatRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for UpdateTableProperties operation.
 */
export class UpdateTablePropertiesRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Object's index
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
     */
    public destFileName: string;

    /**
     * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
     */
    public revisionAuthor: string;

    /**
     * The date and time to use for revisions.
     */
    public revisionDateTime: string;

    /**
     * Gets or sets properties
     */
    public properties: TableProperties;

    /**
     * Gets or sets nodePath
     */
    public nodePath: string;
    
    public constructor(init?: Partial<UpdateTablePropertiesRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for UpdateTableRowFormat operation.
 */
export class UpdateTableRowFormatRequest {
    /**
     * Gets or sets name
     */
    public name: string;

    /**
     * Gets or sets tablePath
     */
    public tablePath: string;

    /**
     * Object's index
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * File storage, which have to be used.
     */
    public storage: string;

    /**
     * Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.
     */
    public loadEncoding: string;

    /**
     * Password for opening an encrypted document.
     */
    public password: string;

    /**
     * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
     */
    public destFileName: string;

    /**
     * Initials of the author to use for revisions.If you set this parameter and then make some changes to the document programmatically, save the document and later open the document in MS Word you will see these changes as revisions.
     */
    public revisionAuthor: string;

    /**
     * The date and time to use for revisions.
     */
    public revisionDateTime: string;

    /**
     * Gets or sets format
     */
    public format: TableRowFormat;
    
    public constructor(init?: Partial<UpdateTableRowFormatRequest>) {        
        Object.assign(this, init);
    } 
}

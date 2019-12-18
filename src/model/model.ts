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
import { IncomingMessage } from "http";
import { Readable } from "stream";

/**
 * Generic class for Words Cloud API response
 */
export class WordsIncomingMessage<T> {
    /**
     * Gets or sets raw response
     */
    public response: IncomingMessage;
    
    /**
     * Get or set parsed response
     */
    public body: T;
}

/**
 * Attribute description
 */
export class AttributeInfo {
    /**
     * Gets or sets attribute name
     */
    public name: string;
    
    /**
     * Gets or sets attribute base name
     */
    public baseName: string;
    
    /**
     * Gets or sets attribute type name
     */
    public type: string;
}

/**
 * Api error.
 */
export class ApiError {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "code",
            baseName: "Code",
            type: "string",
        },        
        {
            name: "message",
            baseName: "Message",
            type: "string",
        },        
        {
            name: "description",
            baseName: "Description",
            type: "string",
        },        
        {
            name: "dateTime",
            baseName: "DateTime",
            type: "Date",
        },        
        {
            name: "innerError",
            baseName: "InnerError",
            type: "ApiError",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ApiError.attributeTypeMap;
    }

    /**
     * Gets or sets api error code.
     */
    public code: string;
    
    /**
     * Gets or sets error message.
     */
    public message: string;
    
    /**
     * Gets or sets error description.
     */
    public description: string;
    
    /**
     * Gets or sets server datetime.
     */
    public dateTime: Date;
    
    /**
     * Gets or sets inner error.
     */
    public innerError: ApiError;
    
    public constructor(init?: Partial<ApiError>) {
        
        Object.assign(this, init);
    }        
}

/**
 * DTO for bookmark updating.
 */
export class BookmarkData {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets the name of the bookmark.
     */
    public name: string;
    
    /**
     * Gets or sets the text enclosed in the bookmark.
     */
    public text: string;
    
    public constructor(init?: Partial<BookmarkData>) {
        
        Object.assign(this, init);
    }        
}

/**
 * container class for individual bookmarks outline level.
 */
export class BookmarksOutlineLevelData {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "name",
            baseName: "Name",
            type: "string",
        },        
        {
            name: "bookmarksOutlineLevel",
            baseName: "BookmarksOutlineLevel",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return BookmarksOutlineLevelData.attributeTypeMap;
    }

    /**
     * Gets or sets specify the bookmark's name.
     */
    public name: string;
    
    /**
     * Gets or sets specify the bookmark's level.
     */
    public bookmarksOutlineLevel: number;
    
    public constructor(init?: Partial<BookmarksOutlineLevelData>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Represents a single classification result.
 */
export class ClassificationResult {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets the name of the class.
     */
    public className: string;
    
    /**
     * Gets or sets the probability of class.
     */
    public classProbability: number;
    
    public constructor(init?: Partial<ClassificationResult>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Container class for compare documents.
 */
export class CompareData {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets path to document to compare at the server.
     */
    public comparingWithDocument: string;
    
    /**
     * Gets or sets initials of the author to use for revisions.
     */
    public author: string;
    
    /**
     * Gets or sets the date and time to use for revisions.             
     */
    public dateTime: Date;
    
    public constructor(init?: Partial<CompareData>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Represents Words document DTO.
 */
export class Document {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets a list of links that originate from this document.
     */
    public links: Array<Link>;
    
    /**
     * Gets or sets the name of the file.
     */
    public fileName: string;
    
    /**
     * Gets or sets the original format of the document.
     */
    public sourceFormat: Document.SourceFormatEnum;
    
    /**
     * Gets or sets a value indicating whether returns true if the document is encrypted and requires a password to open.
     */
    public isEncrypted: boolean;
    
    /**
     * Gets or sets a value indicating whether returns true if the document contains a digital signature. This property merely informs that a digital signature is present on a document, but it does not specify whether the signature is valid or not.
     */
    public isSigned: boolean;
    
    /**
     * Gets or sets returns document properties.
     */
    public documentProperties: DocumentProperties;
    
    public constructor(init?: Partial<Document>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Enums for Document
 */
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
/**
 * Represents a document which will be appended to the original resource document.
 */
export class DocumentEntry {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets path to document to append at the server.
     */
    public href: string;
    
    /**
     * Gets or sets defines which formatting will be used: appended or destination document.Can be KeepSourceFormatting or UseDestinationStyles.
     */
    public importFormatMode: string;
    
    public constructor(init?: Partial<DocumentEntry>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Represents a list of documents which will be appended to the original resource document.
 */
export class DocumentEntryList {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets list of documents.
     */
    public documentEntries: Array<DocumentEntry>;
    
    public constructor(init?: Partial<DocumentEntryList>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Represents a position in the document tree.
 */
export class DocumentPosition {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets link to  node.
     */
    public node: NodeLink;
    
    /**
     * Gets or sets offset into the node.
     */
    public offset: number;
    
    public constructor(init?: Partial<DocumentPosition>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Container for the document's statistical data.
 */
export class DocumentStatData {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets total count of words in the document.
     */
    public wordCount: number;
    
    /**
     * Gets or sets total count of paragraphs in the document.
     */
    public paragraphCount: number;
    
    /**
     * Gets or sets total count of pages in the document.
     */
    public pageCount: number;
    
    /**
     * Gets or sets detailed statistics of footnotes.
     */
    public footnotesStatData: FootnotesStatData;
    
    /**
     * Gets or sets detailed statistics of all pages.
     */
    public pageStatData: Array<PageStatData>;
    
    public constructor(init?: Partial<DocumentStatData>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Container class for Downsample options.
 */
export class DownsampleOptionsData {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "downsampleImages",
            baseName: "DownsampleImages",
            type: "boolean",
        },        
        {
            name: "resolution",
            baseName: "Resolution",
            type: "number",
        },        
        {
            name: "resolutionThreshold",
            baseName: "ResolutionThreshold",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return DownsampleOptionsData.attributeTypeMap;
    }

    /**
     * Gets or sets specifies whether images should be downsampled.
     */
    public downsampleImages: boolean;
    
    /**
     * Gets or sets specifies the resolution in pixels per inch which the images should be downsampled to.
     */
    public resolution: number;
    
    /**
     * Gets or sets specifies the threshold resolution in pixels per inch. If resolution of an image in the document is less than threshold value, the downsampling algorithm will not be applied. A value of 0 means the threshold check is not used and all images that can be reduced in size are downsampled.
     */
    public resolutionThreshold: number;
    
    public constructor(init?: Partial<DownsampleOptionsData>) {
        
        Object.assign(this, init);
    }        
}

/**
 * The error details
 */
export class ErrorDetails {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "requestId",
            baseName: "RequestId",
            type: "string",
        },        
        {
            name: "errorDateTime",
            baseName: "ErrorDateTime",
            type: "Date",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ErrorDetails.attributeTypeMap;
    }

    /**
     * The request id.
     */
    public requestId: string;
    
    /**
     * Error datetime.
     */
    public errorDateTime: Date;
    
    public constructor(init?: Partial<ErrorDetails>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Files list
 */
export class FilesList {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "value",
            baseName: "Value",
            type: "Array<StorageFile>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return FilesList.attributeTypeMap;
    }

    /**
     * Files and folders contained by folder .
     */
    public value: Array<StorageFile>;
    
    public constructor(init?: Partial<FilesList>) {
        
        Object.assign(this, init);
    }        
}

/**
 * File upload result
 */
export class FilesUploadResult {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "uploaded",
            baseName: "Uploaded",
            type: "Array<string>",
        },        
        {
            name: "errors",
            baseName: "Errors",
            type: "Array<StorageApiError>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return FilesUploadResult.attributeTypeMap;
    }

    /**
     * List of uploaded file names
     */
    public uploaded: Array<string>;
    
    /**
     * List of errors.
     */
    public errors: Array<StorageApiError>;
    
    public constructor(init?: Partial<FilesUploadResult>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Font info.
 */
export class FontInfo {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets family name of the font.
     */
    public fontFamilyName: string;
    
    /**
     * Gets or sets full name of the font.
     */
    public fullFontName: string;
    
    /**
     * Gets or sets version string of the font.
     */
    public version: string;
    
    /**
     * Gets or sets path to the font file if any.
     */
    public filePath: string;
    
    public constructor(init?: Partial<FontInfo>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Container for the footnotes statistical data.
 */
export class FootnotesStatData {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets total count of words in footnotes.
     */
    public wordCount: number;
    
    /**
     * Gets or sets total count of paragraphs in footnotes.
     */
    public paragraphCount: number;
    
    public constructor(init?: Partial<FootnotesStatData>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Allows to specify additional System.Drawing.Graphics quality options.
 */
export class GraphicsQualityOptionsData {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets a value that specifies how composited images are drawn to this Graphics.
     */
    public compositingMode: GraphicsQualityOptionsData.CompositingModeEnum;
    
    /**
     * Gets or sets the rendering quality of composited images drawn to this Graphics.
     */
    public compositingQuality: GraphicsQualityOptionsData.CompositingQualityEnum;
    
    /**
     * Gets or sets the interpolation mode associated with this Graphics.
     */
    public interpolationMode: GraphicsQualityOptionsData.InterpolationModeEnum;
    
    /**
     * Gets or sets the rendering quality for this Graphics.
     */
    public smoothingMode: GraphicsQualityOptionsData.SmoothingModeEnum;
    
    /**
     * Gets or sets text layout information (such as alignment, orientation and tab stops) display manipulations (such as ellipsis insertion and national digit substitution) and OpenType features.
     */
    public stringFormat: StringFormatData;
    
    /**
     * Gets or sets the rendering mode for text associated with this Graphics.
     */
    public textRenderingHint: GraphicsQualityOptionsData.TextRenderingHintEnum;
    
    public constructor(init?: Partial<GraphicsQualityOptionsData>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Enums for GraphicsQualityOptionsData
 */
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
/**
 * Provides information for the object link. This is supposed to be an atom:link, therefore it should have all attributes specified here http://tools.ietf.org/html/rfc4287#section-4.2.7.
 */
export class Link {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets the \"href\" attribute contains the link's IRI. atom:link elements MUST have an href attribute, whose value MUST be a IRI reference.
     */
    public href: string;
    
    /**
     * Gets or sets atom:link elements MAY have a \"rel\" attribute that indicates the link relation type.  If the \"rel\" attribute is not present, the link element MUST be interpreted as if the link relation type is \"alternate\".
     */
    public rel: string;
    
    /**
     * Gets or sets on the link element, the \"type\" attribute's value is an advisory media type: it is a hint about the type of the representation that is expected to be returned when the value of the href attribute is dereferenced.  Note that the type attribute does not override the actual media type returned with the representation.
     */
    public type: string;
    
    /**
     * Gets or sets the \"title\" attribute conveys human-readable information about the link.  The content of the \"title\" attribute is Language-Sensitive.
     */
    public title: string;
    
    public constructor(init?: Partial<Link>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Reference to document.
 */
export class LinkElement {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets link to the document.
     */
    public link: WordsApiLink;
    
    public constructor(init?: Partial<LinkElement>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Contains data for load web document.
 */
export class LoadWebDocumentData {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets web document url.
     */
    public loadingDocumentUrl: string;
    
    /**
     * Gets or sets save options.
     */
    public saveOptions: SaveOptionsData;
    
    public constructor(init?: Partial<LoadWebDocumentData>) {
        
        Object.assign(this, init);
    }        
}

/**
 * container class for options of metafile rendering.
 */
export class MetafileRenderingOptionsData {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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
        },        
        {
            name: "scaleWmfFontsToMetafileSize",
            baseName: "ScaleWmfFontsToMetafileSize",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return MetafileRenderingOptionsData.attributeTypeMap;
    }

    /**
     * Gets or sets determines how EMF+ Dual metafiles should be rendered.
     */
    public emfPlusDualRenderingMode: string;
    
    /**
     * Gets or sets a value determining whether or not the raster operations should be emulated.             
     */
    public emulateRasterOperations: boolean;
    
    /**
     * Gets or sets determines how metafile images should be rendered.
     */
    public renderingMode: string;
    
    /**
     * Gets or sets determines how WMF metafiles with embedded EMF metafiles should be rendered.
     */
    public useEmfEmbeddedToWmf: boolean;
    
    /**
     * Gets or sets a value determining whether or not to scale fonts in WMF metafile according to metafile size on the page. The default value is true.
     */
    public scaleWmfFontsToMetafileSize: boolean;
    
    public constructor(init?: Partial<MetafileRenderingOptionsData>) {
        
        Object.assign(this, init);
    }        
}

/**
 * result of the operation which modifies the original document and saves the result.
 */
export class ModificationOperationResult {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets link to the source document (source for the modification operation).
     */
    public source: FileLink;
    
    /**
     * Gets or sets link to the dest document (result of the modification operation).
     */
    public dest: FileLink;
    
    public constructor(init?: Partial<ModificationOperationResult>) {
        
        Object.assign(this, init);
    }        
}

/**
 * container class for outline options.
 */
export class OutlineOptionsData {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "bookmarksOutlineLevels",
            baseName: "BookmarksOutlineLevels",
            type: "Array<BookmarksOutlineLevelData>",
        },        
        {
            name: "defaultBookmarksOutlineLevel",
            baseName: "DefaultBookmarksOutlineLevel",
            type: "number",
        },        
        {
            name: "createMissingOutlineLevels",
            baseName: "CreateMissingOutlineLevels",
            type: "boolean",
        },        
        {
            name: "createOutlinesForHeadingsInTables",
            baseName: "CreateOutlinesForHeadingsInTables",
            type: "boolean",
        },        
        {
            name: "expandedOutlineLevels",
            baseName: "ExpandedOutlineLevels",
            type: "number",
        },        
        {
            name: "headingsOutlineLevels",
            baseName: "HeadingsOutlineLevels",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return OutlineOptionsData.attributeTypeMap;
    }

    /**
     * Gets or sets allows to specify individual bookmarks outline level.
     */
    public bookmarksOutlineLevels: Array<BookmarksOutlineLevelData>;
    
    /**
     * Gets or sets specifies the default level in the document outline at which to display Word bookmarks.
     */
    public defaultBookmarksOutlineLevel: number;
    
    /**
     * Gets or sets a value determining whether or not to create missing outline levels     when the document is exported.     Default value for this property is false.
     */
    public createMissingOutlineLevels: boolean;
    
    /**
     * Gets or sets specifies whether or not to create outlines for headings (paragraphs formatted     with the Heading styles) inside tables.
     */
    public createOutlinesForHeadingsInTables: boolean;
    
    /**
     * Gets or sets specifies how many levels in the document outline to show expanded when the file is viewed.
     */
    public expandedOutlineLevels: number;
    
    /**
     * Gets or sets specifies how many levels of headings (paragraphs formatted with the Heading styles) to include in the document outline.
     */
    public headingsOutlineLevels: number;
    
    public constructor(init?: Partial<OutlineOptionsData>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Class is used for insert page number request building.
 */
export class PageNumber {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets page number format, e.g. \"{PAGE} of {NUMPAGES}\".
     */
    public format: string;
    
    /**
     * Gets or sets text alignment, possible values are left, right, center or justify.
     */
    public alignment: string;
    
    /**
     * Gets or sets a value indicating whether if true the page number is added at the top of the page, else at the bottom.
     */
    public isTop: boolean;
    
    /**
     * Gets or sets a value indicating whether if true the page number is added on first page too.
     */
    public setPageNumberOnFirstPage: boolean;
    
    public constructor(init?: Partial<PageNumber>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Container for the page's statistical data.
 */
export class PageStatData {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets page number.
     */
    public pageNumber: number;
    
    /**
     * Gets or sets total count of words in the page.
     */
    public wordCount: number;
    
    /**
     * Gets or sets total count of paragraphs in the page.
     */
    public paragraphCount: number;
    
    /**
     * Gets or sets detailed statistics of footnotes.
     */
    public footnotesStatData: FootnotesStatData;
    
    public constructor(init?: Partial<PageStatData>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Paragraph element.
 */
export class ParagraphInsert {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets paragraph's text.
     */
    public text: string;
    
    public constructor(init?: Partial<ParagraphInsert>) {
        
        Object.assign(this, init);
    }        
}

/**
 * container class for details of digital signature.
 */
export class PdfDigitalSignatureDetailsData {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "certificateFilename",
            baseName: "CertificateFilename",
            type: "string",
        },        
        {
            name: "hashAlgorithm",
            baseName: "HashAlgorithm",
            type: "string",
        },        
        {
            name: "location",
            baseName: "Location",
            type: "string",
        },        
        {
            name: "reason",
            baseName: "Reason",
            type: "string",
        },        
        {
            name: "signatureDate",
            baseName: "SignatureDate",
            type: "Date",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return PdfDigitalSignatureDetailsData.attributeTypeMap;
    }

    /**
     * Gets or sets certificate's filename using for signing.
     */
    public certificateFilename: string;
    
    /**
     * Gets or sets hash algorithm.
     */
    public hashAlgorithm: string;
    
    /**
     * Gets or sets location of the signing.
     */
    public location: string;
    
    /**
     * Gets or sets reason for the signing.
     */
    public reason: string;
    
    /**
     * Gets or sets date of the signing.
     */
    public signatureDate: Date;
    
    public constructor(init?: Partial<PdfDigitalSignatureDetailsData>) {
        
        Object.assign(this, init);
    }        
}

/**
 * container class for details of encryption.
 */
export class PdfEncryptionDetailsData {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "encryptionAlgorithm",
            baseName: "EncryptionAlgorithm",
            type: "string",
        },        
        {
            name: "ownerPassword",
            baseName: "OwnerPassword",
            type: "string",
        },        
        {
            name: "permissions",
            baseName: "Permissions",
            type: "string",
        },        
        {
            name: "userPassword",
            baseName: "UserPassword",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return PdfEncryptionDetailsData.attributeTypeMap;
    }

    /**
     * Gets or sets specifies the encryption algorithm to use.
     */
    public encryptionAlgorithm: string;
    
    /**
     * Gets or sets specifies the owner password for the encrypted PDF document.
     */
    public ownerPassword: string;
    
    /**
     * Gets or sets specifies the operations that are allowed to a user on an encrypted PDF document.
     */
    public permissions: string;
    
    /**
     * Gets or sets specifies the user password required for opening the encrypted PDF document.
     */
    public userPassword: string;
    
    public constructor(init?: Partial<PdfEncryptionDetailsData>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Preferred width.
 */
export class PreferredWidth {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets the unit of measure used for this preferred width value.
     */
    public type: PreferredWidth.TypeEnum;
    
    /**
     * Gets or sets the preferred width value. The unit of measure is specified in the  property.
     */
    public value: number;
    
    public constructor(init?: Partial<PreferredWidth>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Enums for PreferredWidth
 */
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
/**
 * Container for the data about protection of the document.
 */
export class ProtectionData {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets type of the protection.
     */
    public protectionType: string;
    
    public constructor(init?: Partial<ProtectionData>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Request on changing of protection.
 */
export class ProtectionRequest {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets current password.
     */
    public password: string;
    
    /**
     * Gets or sets new password.
     */
    public newPassword: string;
    
    /**
     * Gets or sets new type of protection.
     */
    public protectionType: string;
    
    public constructor(init?: Partial<ProtectionRequest>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Range element.
 */
export class RangeDocument {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "documentName",
            baseName: "DocumentName",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return RangeDocument.attributeTypeMap;
    }

    /**
     * Gets or sets name for new document.
     */
    public documentName: string;
    
    public constructor(init?: Partial<RangeDocument>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Range element.
 */
export class ReplaceRange {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "text",
            baseName: "Text",
            type: "string",
        },        
        {
            name: "textType",
            baseName: "TextType",
            type: "ReplaceRange.TextTypeEnum",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ReplaceRange.attributeTypeMap;
    }

    /**
     * Gets or sets range's text.
     */
    public text: string;
    
    /**
     * Gets or sets range's text type.
     */
    public textType: ReplaceRange.TextTypeEnum;
    
    public constructor(init?: Partial<ReplaceRange>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Enums for ReplaceRange
 */
// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace ReplaceRange {
    export enum TextTypeEnum {
        Text = 'Text' as any,
        Html = 'Html' as any,
    }
}
// tslint:enable:quotemark
/**
 * Class for document replace text request building.
 */
export class ReplaceTextParameters {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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
        return ReplaceTextParameters.attributeTypeMap;
    }

    /**
     * Gets or sets old text value (or regex pattern ) to replace.
     */
    public oldValue: string;
    
    /**
     * Gets or sets new text value to replace by.
     */
    public newValue: string;
    
    /**
     * Gets or sets a value indicating whether flag, true means the search is case-sensitive; false means the search is not case-sensitive.
     */
    public isMatchCase: boolean;
    
    /**
     * Gets or sets a value indicating whether flag, means that only whole word matched are replaced.
     */
    public isMatchWholeWord: boolean;
    
    /**
     * Gets or sets a value indicating whether flag, means that  contains regex expression.
     */
    public isOldValueRegex: boolean;
    
    public constructor(init?: Partial<ReplaceTextParameters>) {
        
        Object.assign(this, init);
    }        
}

/**
 * base container class for save options data.
 */
export class SaveOptionsData {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets a value determining how colors are rendered. { Normal | Grayscale}.
     */
    public colorMode: string;
    
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
     * Gets or sets value determining whether content of  is updated before saving.
     */
    public updateSdtContent: boolean;
    
    /**
     * Gets or sets a value determining if fields should be updated before saving the document to a fixed page format. Default value for this property is. true
     */
    public updateFields: boolean;
    
    public constructor(init?: Partial<SaveOptionsData>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Result of saving.
 */
export class SaveResult {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets link to source document.
     */
    public sourceDocument: FileLink;
    
    /**
     * Gets or sets link to destination document.
     */
    public destDocument: FileLink;
    
    /**
     * Gets or sets links to additional items (css, images etc).
     */
    public additionalItems: Array<FileLink>;
    
    public constructor(init?: Partial<SaveResult>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Result of search operation.
 */
export class SearchResult {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets link to result range start node.
     */
    public rangeStart: DocumentPosition;
    
    /**
     * Gets or sets link to result range end node.
     */
    public rangeEnd: DocumentPosition;
    
    public constructor(init?: Partial<SearchResult>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Result of splitting document.
 */
export class SplitDocumentResult {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets linkt to the source document.
     */
    public sourceDocument: FileLink;
    
    /**
     * Gets or sets array of pages.
     */
    public pages: Array<FileLink>;
    
    /**
     * Gets or sets link to the file archive with pages.
     */
    public zippedPages: FileLink;
    
    public constructor(init?: Partial<SplitDocumentResult>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Error
 */
export class StorageApiError {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "code",
            baseName: "Code",
            type: "string",
        },        
        {
            name: "message",
            baseName: "Message",
            type: "string",
        },        
        {
            name: "description",
            baseName: "Description",
            type: "string",
        },        
        {
            name: "innerError",
            baseName: "InnerError",
            type: "ErrorDetails",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return StorageApiError.attributeTypeMap;
    }

    /**
     * Code             
     */
    public code: string;
    
    /**
     * Message             
     */
    public message: string;
    
    /**
     * Description             
     */
    public description: string;
    
    /**
     * Inner Error             
     */
    public innerError: ErrorDetails;
    
    public constructor(init?: Partial<StorageApiError>) {
        
        Object.assign(this, init);
    }        
}

/**
 * File or folder information
 */
export class StorageFile {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "name",
            baseName: "Name",
            type: "string",
        },        
        {
            name: "isFolder",
            baseName: "IsFolder",
            type: "boolean",
        },        
        {
            name: "modifiedDate",
            baseName: "ModifiedDate",
            type: "Date",
        },        
        {
            name: "size",
            baseName: "Size",
            type: "number",
        },        
        {
            name: "path",
            baseName: "Path",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return StorageFile.attributeTypeMap;
    }

    /**
     * File or folder name.
     */
    public name: string;
    
    /**
     * True if it is a folder.
     */
    public isFolder: boolean;
    
    /**
     * File or folder last modified .
     */
    public modifiedDate: Date;
    
    /**
     * File or folder size.
     */
    public size: number;
    
    /**
     * File or folder path.
     */
    public path: string;
    
    public constructor(init?: Partial<StorageFile>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Child nodes of  or .
 */
export class StoryChildNodes {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets child nodes.
     */
    public childNodes: Array<NodeLink>;
    
    public constructor(init?: Partial<StoryChildNodes>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Allows to specify System.Drawing.StringFormat options.
 */
export class StringFormatData {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets horizontal alignment of the string.
     */
    public alignment: StringFormatData.AlignmentEnum;
    
    /**
     * Gets or sets a System.Drawing.StringFormatFlags enumeration that contains formatting information.
     */
    public formatFlags: StringFormatData.FormatFlagsEnum;
    
    /**
     * Gets or sets the System.Drawing.Text.HotkeyPrefix object for this System.Drawing.StringFormat object.
     */
    public hotkeyPrefix: StringFormatData.HotkeyPrefixEnum;
    
    /**
     * Gets or sets the vertical alignment of the string.
     */
    public lineAlignment: StringFormatData.LineAlignmentEnum;
    
    /**
     * Gets or sets the System.Drawing.StringTrimming enumeration for this System.Drawing.StringFormat object.
     */
    public trimming: StringFormatData.TrimmingEnum;
    
    public constructor(init?: Partial<StringFormatData>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Enums for StringFormatData
 */
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
/**
 * Table cell element.
 */
export class TableCellInsert {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets table cell will be inserted after cell with specified 0-based index.
     */
    public insertAfter: number;
    
    public constructor(init?: Partial<TableCellInsert>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Table element.
 */
export class TableInsert {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "position",
            baseName: "Position",
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

    /**
     * Gets or sets table will be inserted before specified position.
     */
    public position: DocumentPosition;
    
    /**
     * Gets or sets count of columns. Default is 2.
     */
    public columnsCount: number;
    
    /**
     * Gets or sets count of rows. Default is 2.
     */
    public rowsCount: number;
    
    public constructor(init?: Partial<TableInsert>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Table row element.
 */
export class TableRowInsert {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets table row will be inserted after row with specified 0-based index.
     */
    public insertAfter: number;
    
    /**
     * Gets or sets count of columns. Default is 1.
     */
    public columnsCount: number;
    
    public constructor(init?: Partial<TableRowInsert>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Class for insert watermark text request building.
 */
export class WatermarkText {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets the watermark text.
     */
    public text: string;
    
    /**
     * Gets or sets the watermark rotation angle.
     */
    public rotationAngle: number;
    
    public constructor(init?: Partial<WatermarkText>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Base class for all responses.
 */
export class WordsResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "requestId",
            baseName: "RequestId",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return WordsResponse.attributeTypeMap;
    }

    /**
     * Gets or sets request Id.
     */
    public requestId: string;
    
    public constructor(init?: Partial<WordsResponse>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Utility class for  serialization.
 */
export class XmlColor {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets hTML string color representation.
     */
    public web: string;
    
    /**
     * Gets or sets alpha component of color structure.
     */
    public alpha: number;
    
    public constructor(init?: Partial<XmlColor>) {
        
        Object.assign(this, init);
    }        
}

/**
 * The list of fonts, available for document processing.
 */
export class AvailableFontsResponse extends WordsResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets the list of addititional fonts, provided by aspose team.
     */
    public additionalFonts: Array<FontInfo>;
    
    /**
     * Gets or sets custom user fonts (from user file storage). To use them, you should specify \"fontsLocation\" parameter in any request.
     */
    public customFonts: Array<FontInfo>;
    
    /**
     * Gets or sets the list of system fonts, availiable on the server.
     */
    public systemFonts: Array<FontInfo>;
    
    public constructor(init?: Partial<AvailableFontsResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Represents a single bookmark.
 */
export class Bookmark extends LinkElement {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets the name of the bookmark.
     */
    public name: string;
    
    /**
     * Gets or sets the text enclosed in the bookmark.
     */
    public text: string;
    
    public constructor(init?: Partial<Bookmark>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * This response should be returned by the service when handling:  GET bookmarks/{bookmarkName}.
 */
export class BookmarkResponse extends WordsResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets bookmark.
     */
    public bookmark: Bookmark;
    
    public constructor(init?: Partial<BookmarkResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Represents an array of bookmarks.
 */
export class Bookmarks extends LinkElement {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets array of bookmarks.
     */
    public bookmarkList: Array<Bookmark>;
    
    public constructor(init?: Partial<Bookmarks>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * This response should be returned by the service when handling:  GET bookmarks.
 */
export class BookmarksResponse extends WordsResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets bookmarks which are contained in document.
     */
    public bookmarks: Bookmarks;
    
    public constructor(init?: Partial<BookmarksResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Represents a border of an object.
 */
export class Border extends LinkElement {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets the border type.             
     */
    public borderType: Border.BorderTypeEnum;
    
    /**
     * Gets or sets the border color.             
     */
    public color: XmlColor;
    
    /**
     * Gets or sets distance of the border from text or from the page edge in points.
     */
    public distanceFromText: number;
    
    /**
     * Gets or sets the border style.
     */
    public lineStyle: Border.LineStyleEnum;
    
    /**
     * Gets or sets the border width in points.
     */
    public lineWidth: number;
    
    /**
     * Gets or sets a value indicating whether the border has a shadow.
     */
    public shadow: boolean;
    
    public constructor(init?: Partial<Border>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Enums for Border
 */
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
/**
 * This response should be returned by the service when handling: GET {nodeWithBorders}/borders.
 */
export class BorderResponse extends WordsResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets table.
     */
    public border: Border;
    
    public constructor(init?: Partial<BorderResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Collection of borders.
 */
export class BordersCollection extends LinkElement {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets collection of comments.
     */
    public list: Array<Border>;
    
    public constructor(init?: Partial<BordersCollection>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * This response should be returned by the service when handling: GET {nodeWithBorders}/borders.
 */
export class BordersResponse extends WordsResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets table.
     */
    public borders: BordersCollection;
    
    public constructor(init?: Partial<BordersResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * This response should be returned by the service when handling: PUT http://api.aspose.com/v4.0/words/classify.
 */
export class ClassificationResponse extends WordsResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets best class name.
     */
    public bestClassName: string;
    
    /**
     * Gets or sets best class probability.
     */
    public bestClassProbability: number;
    
    /**
     * Gets or sets array of best classes results.
     */
    public bestResults: Array<ClassificationResult>;
    
    public constructor(init?: Partial<ClassificationResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Comment link.
 */
export class CommentLink extends LinkElement {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

/**
 * This response should be returned by the service when handling: GET http://api.aspose.com/v4.0/words/Test.doc/comments/0.
 */
export class CommentResponse extends WordsResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets comment information.
     */
    public comment: Comment;
    
    public constructor(init?: Partial<CommentResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Collection of comments.
 */
export class CommentsCollection extends LinkElement {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets collection of comments.
     */
    public commentList: Array<Comment>;
    
    public constructor(init?: Partial<CommentsCollection>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * This response should be returned by the service when handling: GET http://api.aspose.com/v4.0/words/Test.doc/comments.
 */
export class CommentsResponse extends WordsResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets collection of comments.
     */
    public comments: CommentsCollection;
    
    public constructor(init?: Partial<CommentsResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * container class for doc/dot save options.
 */
export class DocSaveOptionsData extends SaveOptionsData {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "alwaysCompressMetafiles",
            baseName: "AlwaysCompressMetafiles",
            type: "boolean",
        },        
        {
            name: "password",
            baseName: "Password",
            type: "string",
        },        
        {
            name: "savePictureBullet",
            baseName: "SavePictureBullet",
            type: "boolean",
        },        
        {
            name: "saveRoutingSlip",
            baseName: "SaveRoutingSlip",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(DocSaveOptionsData.attributeTypeMap);
    }

    /**
     * Gets or sets When false, small metafiles are not compressed for performance reason. Default value is true, all metafiles are compressed regardless of its size.
     */
    public alwaysCompressMetafiles: boolean;
    
    /**
     * Gets or sets password.
     */
    public password: string;
    
    /**
     * Gets or sets When false, PictureBullet data is not saved to output document. Default value is true.
     */
    public savePictureBullet: boolean;
    
    /**
     * Gets or sets determine whether or not save RoutingSlip data saved to output document.
     */
    public saveRoutingSlip: boolean;
    
    public constructor(init?: Partial<DocSaveOptionsData>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Collection of document properties.
 */
export class DocumentProperties extends LinkElement {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets collection of document properties.
     */
    public list: Array<DocumentProperty>;
    
    public constructor(init?: Partial<DocumentProperties>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * This response should be returned by the service when handling:  GET /documentProperties.
 */
export class DocumentPropertiesResponse extends WordsResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets collection of document properties.
     */
    public documentProperties: DocumentProperties;
    
    public constructor(init?: Partial<DocumentPropertiesResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Words document property DTO.
 */
export class DocumentProperty extends LinkElement {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets a value indicating whether flag indicates whether the property is built-in or not. If true the property is built-in, if false the property is custom.
     */
    public builtIn: boolean;
    
    /**
     * Gets or sets name of the document property.
     */
    public name: string;
    
    /**
     * Gets or sets string value of the document property.
     */
    public value: string;
    
    public constructor(init?: Partial<DocumentProperty>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * This response should be returned by the service when handling:  GET documentProperties/{propertyName}.
 */
export class DocumentPropertyResponse extends WordsResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets document property.
     */
    public documentProperty: DocumentProperty;
    
    public constructor(init?: Partial<DocumentPropertyResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Represents the response with document description.
 */
export class DocumentResponse extends WordsResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets document description.
     */
    public document: Document;
    
    public constructor(init?: Partial<DocumentResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Represents drawing objects collection DTO.
 */
export class DrawingObjectCollection extends LinkElement {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets collection of DrawingObjects links.
     */
    public list: Array<LinkElement>;
    
    public constructor(init?: Partial<DrawingObjectCollection>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Response for \"drawingObjects/n\" resource.
 */
export class DrawingObjectResponse extends WordsResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets drawing object.
     */
    public drawingObject: DrawingObject;
    
    public constructor(init?: Partial<DrawingObjectResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * This response should be returned by the service when handling:  GET /drawingObjects.
 */
export class DrawingObjectsResponse extends WordsResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets collection of drawing objects.
     */
    public drawingObjects: DrawingObjectCollection;
    
    public constructor(init?: Partial<DrawingObjectsResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Represents DTO for collection of fields.
 */
export class FieldCollection extends LinkElement {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets collection of fields.
     */
    public list: Array<Field>;
    
    public constructor(init?: Partial<FieldCollection>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Represents a collection of merge fields within a document.
 */
export class FieldNames extends LinkElement {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets collection of fields names.
     */
    public names: Array<string>;
    
    public constructor(init?: Partial<FieldNames>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * This response should be returned by the service when handling:  GET /{name}/mailMergeFieldNames.
 */
export class FieldNamesResponse extends WordsResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets collection of mail merge fields.
     */
    public fieldNames: FieldNames;
    
    public constructor(init?: Partial<FieldNamesResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * This response should be returned by the service when handling: GET http://api.aspose.com/v4.0/words/Test.doc/paragraphs/{0}/fields/{1}.
 */
export class FieldResponse extends WordsResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets field information.
     */
    public field: Field;
    
    public constructor(init?: Partial<FieldResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * This response should be returned by the service when handling: GET http://api.aspose.com/v4.0/words/Test.doc/{nodePath}/fields.
 */
export class FieldsResponse extends WordsResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets collection of fields.
     */
    public fields: FieldCollection;
    
    public constructor(init?: Partial<FieldsResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Provides information for the file link.
 */
export class FileLink extends Link {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

/**
 * Contains common options that can be specified when saving a document into fixed page formats (PDF, XPS, images etc).
 */
export class FixedPageSaveOptionsData extends SaveOptionsData {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets determines the quality of the JPEG images inside PDF document.
     */
    public jpegQuality: number;
    
    /**
     * Gets or sets allows to specify metafile rendering options.
     */
    public metafileRenderingOptions: MetafileRenderingOptionsData;
    
    /**
     * Gets or sets indicates the symbol set that is used to represent numbers while rendering to fixed page formats.
     */
    public numeralFormat: string;
    
    /**
     * Gets or sets flag indicates whether it is required to optimize output of XPS. If this flag is set redundant nested canvases and empty canvases are removed, also neighbor glyphs with the same formatting are concatenated. Note: The accuracy of the content display may be affected if this property is set to true.  Default is false.
     */
    public optimizeOutput: boolean;
    
    /**
     * Gets or sets determines number of pages to render.
     */
    public pageCount: number;
    
    /**
     * Gets or sets determines 0-based index of the first page to render.
     */
    public pageIndex: number;
    
    public constructor(init?: Partial<FixedPageSaveOptionsData>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Font element.             
 */
export class Font extends LinkElement {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets true if the font is formatted as all capital letters.             
     */
    public allCaps: boolean;
    
    /**
     * Gets or sets specifies whether the contents of this run shall have right-to-left characteristics.             
     */
    public bidi: boolean;
    
    /**
     * Gets or sets true if the font is formatted as bold.             
     */
    public bold: boolean;
    
    /**
     * Gets or sets true if the right-to-left text is formatted as bold.             
     */
    public boldBi: boolean;
    
    /**
     * Gets or sets border object that specifies border for the font.
     */
    public border: Border;
    
    /**
     * Gets or sets the color of the font.             
     */
    public color: XmlColor;
    
    /**
     * Gets or sets specifies whether the contents of this run shall be treated as complex script text regardless of their Unicode character values when determining the formatting for this run.             
     */
    public complexScript: boolean;
    
    /**
     * Gets or sets true if the font is formatted as double strikethrough text.             
     */
    public doubleStrikeThrough: boolean;
    
    /**
     * Gets or sets true if the font is formatted as embossed.             
     */
    public emboss: boolean;
    
    /**
     * Gets or sets true if the font is formatted as engraved.             
     */
    public engrave: boolean;
    
    /**
     * Gets or sets true if the font is formatted as hidden text.             
     */
    public hidden: boolean;
    
    /**
     * Gets or sets the highlight (marker) color.             
     */
    public highlightColor: XmlColor;
    
    /**
     * Gets or sets true if the font is formatted as italic.             
     */
    public italic: boolean;
    
    /**
     * Gets or sets true if the right-to-left text is formatted as italic.             
     */
    public italicBi: boolean;
    
    /**
     * Gets or sets the font size at which kerning starts.             
     */
    public kerning: number;
    
    /**
     * Gets or sets the locale identifier (language) of the formatted characters.             
     */
    public localeId: number;
    
    /**
     * Gets or sets the locale identifier (language) of the formatted right-to-left characters.             
     */
    public localeIdBi: number;
    
    /**
     * Gets or sets the locale identifier (language) of the formatted Asian characters.             
     */
    public localeIdFarEast: number;
    
    /**
     * Gets or sets the name of the font.             
     */
    public name: string;
    
    /**
     * Gets or sets returns or sets the font used for Latin text (characters with character codes from 0 (zero) through 127).             
     */
    public nameAscii: string;
    
    /**
     * Gets or sets returns or sets the name of the font in a right-to-left language document.             
     */
    public nameBi: string;
    
    /**
     * Gets or sets returns or sets an East Asian font name.             
     */
    public nameFarEast: string;
    
    /**
     * Gets or sets returns or sets the font used for characters with character codes from 128 through 255.             
     */
    public nameOther: string;
    
    /**
     * Gets or sets true when the formatted characters are not to be spell checked.
     */
    public noProofing: boolean;
    
    /**
     * Gets or sets true if the font is formatted as outline.             
     */
    public outline: boolean;
    
    /**
     * Gets or sets the position of text (in points) relative to the base line. A positive number raises the text, and a negative number lowers it.             
     */
    public position: number;
    
    /**
     * Gets or sets character width scaling in percent.             
     */
    public scaling: number;
    
    /**
     * Gets or sets true if the font is formatted as shadowed.             
     */
    public shadow: boolean;
    
    /**
     * Gets or sets the font size in points.             
     */
    public size: number;
    
    /**
     * Gets or sets the font size in points used in a right-to-left document.             
     */
    public sizeBi: number;
    
    /**
     * Gets or sets true if the font is formatted as small capital letters.             
     */
    public smallCaps: boolean;
    
    /**
     * Gets or sets returns or sets the spacing (in points) between characters.             
     */
    public spacing: number;
    
    /**
     * Gets or sets true if the font is formatted as strikethrough text.             
     */
    public strikeThrough: boolean;
    
    /**
     * Gets or sets the locale independent style identifier of the character style applied to this formatting.
     */
    public styleIdentifier: Font.StyleIdentifierEnum;
    
    /**
     * Gets or sets the name of the character style applied to this formatting.             
     */
    public styleName: string;
    
    /**
     * Gets or sets true if the font is formatted as subscript.             
     */
    public subscript: boolean;
    
    /**
     * Gets or sets true if the font is formatted as superscript.             
     */
    public superscript: boolean;
    
    /**
     * Gets or sets the font animation effect.
     */
    public textEffect: Font.TextEffectEnum;
    
    /**
     * Gets or sets the type of underline applied to the font.
     */
    public underline: Font.UnderlineEnum;
    
    /**
     * Gets or sets the color of the underline applied to the font.
     */
    public underlineColor: XmlColor;
    
    public constructor(init?: Partial<Font>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Enums for Font
 */
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
/**
 * This response should be returned by the service when handling: GET http://api.aspose.com/v4.0/words/Test.doc/paragraphs/{0}/runs/{1}/font.
 */
export class FontResponse extends WordsResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets font.
     */
    public font: Font;
    
    public constructor(init?: Partial<FontResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Collection of footnotes.
 */
export class FootnoteCollection extends LinkElement {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets collection of foonotes links.
     */
    public list: Array<Footnote>;
    
    public constructor(init?: Partial<FootnoteCollection>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * This response should be returned by the service when handling: GET http://api.aspose.com/v4.0/words/Test.doc/footnote/0.
 */
export class FootnoteResponse extends WordsResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets footnote information.
     */
    public footnote: Footnote;
    
    public constructor(init?: Partial<FootnoteResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * This response should be returned by the service when handling: GET http://api.aspose.com/v4.0/words/Test.doc/footnotes.
 */
export class FootnotesResponse extends WordsResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets collection of footnotes.
     */
    public footnotes: FootnoteCollection;
    
    public constructor(init?: Partial<FootnotesResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Represents DTO for collection of formfields.
 */
export class FormFieldCollection extends LinkElement {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets collection of formfields.
     */
    public list: Array<FormField>;
    
    public constructor(init?: Partial<FormFieldCollection>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * This response should be returned by the service when handling: GET http://api.aspose.com/v4.0/words/Test.doc/paragraphs/{0}/formfields/{1}.
 */
export class FormFieldResponse extends WordsResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets field information.
     */
    public formField: FormField;
    
    public constructor(init?: Partial<FormFieldResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * This response should be returned by the service when handling: GET http://api.aspose.com/v4.0/words/Test.doc/{nodePath}/formfields.
 */
export class FormFieldsResponse extends WordsResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets collection of form fields.
     */
    public formFields: FormFieldCollection;
    
    public constructor(init?: Partial<FormFieldsResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * HeaderFooter link element.
 */
export class HeaderFooterLink extends LinkElement {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets paragraph's text.
     */
    public type: HeaderFooterLink.TypeEnum;
    
    public constructor(init?: Partial<HeaderFooterLink>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Enums for HeaderFooterLink
 */
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
/**
 * Collection of links to header/footers.
 */
export class HeaderFooterLinkCollection extends LinkElement {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets collection of section's links.
     */
    public list: Array<HeaderFooterLink>;
    
    public constructor(init?: Partial<HeaderFooterLinkCollection>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * This response should be returned by the service when handling: GET http://api.aspose.com/v4.0/words/Test.doc/headersfooters/{0}.
 */
export class HeaderFooterResponse extends WordsResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets headerFooter.
     */
    public headerFooter: HeaderFooter;
    
    public constructor(init?: Partial<HeaderFooterResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * This response should be returned by the service when handling: GET http://api.aspose.com/v4.0/words/Test.doc/headersfooters.
 */
export class HeaderFootersResponse extends WordsResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets collection of headers/footers.
     */
    public headerFooters: HeaderFooterLinkCollection;
    
    public constructor(init?: Partial<HeaderFootersResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * container class for html save options.
 */
export class HtmlSaveOptionsData extends SaveOptionsData {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "allowNegativeIndent",
            baseName: "AllowNegativeIndent",
            type: "boolean",
        },        
        {
            name: "cssClassNamePrefix",
            baseName: "CssClassNamePrefix",
            type: "string",
        },        
        {
            name: "cssStyleSheetFileName",
            baseName: "CssStyleSheetFileName",
            type: "string",
        },        
        {
            name: "cssStyleSheetType",
            baseName: "CssStyleSheetType",
            type: "string",
        },        
        {
            name: "documentSplitCriteria",
            baseName: "DocumentSplitCriteria",
            type: "string",
        },        
        {
            name: "documentSplitHeadingLevel",
            baseName: "DocumentSplitHeadingLevel",
            type: "number",
        },        
        {
            name: "encoding",
            baseName: "Encoding",
            type: "string",
        },        
        {
            name: "exportDocumentProperties",
            baseName: "ExportDocumentProperties",
            type: "boolean",
        },        
        {
            name: "exportDropDownFormFieldAsText",
            baseName: "ExportDropDownFormFieldAsText",
            type: "boolean",
        },        
        {
            name: "exportFontResources",
            baseName: "ExportFontResources",
            type: "boolean",
        },        
        {
            name: "exportFontsAsBase64",
            baseName: "ExportFontsAsBase64",
            type: "boolean",
        },        
        {
            name: "exportHeadersFootersMode",
            baseName: "ExportHeadersFootersMode",
            type: "string",
        },        
        {
            name: "exportImagesAsBase64",
            baseName: "ExportImagesAsBase64",
            type: "boolean",
        },        
        {
            name: "exportLanguageInformation",
            baseName: "ExportLanguageInformation",
            type: "boolean",
        },        
        {
            name: "exportListLabels",
            baseName: "ExportListLabels",
            type: "string",
        },        
        {
            name: "exportOriginalUrlForLinkedImages",
            baseName: "ExportOriginalUrlForLinkedImages",
            type: "boolean",
        },        
        {
            name: "exportPageMargins",
            baseName: "ExportPageMargins",
            type: "boolean",
        },        
        {
            name: "exportPageSetup",
            baseName: "ExportPageSetup",
            type: "boolean",
        },        
        {
            name: "exportRelativeFontSize",
            baseName: "ExportRelativeFontSize",
            type: "boolean",
        },        
        {
            name: "exportRoundtripInformation",
            baseName: "ExportRoundtripInformation",
            type: "boolean",
        },        
        {
            name: "exportTextBoxAsSvg",
            baseName: "ExportTextBoxAsSvg",
            type: "boolean",
        },        
        {
            name: "exportTextInputFormFieldAsText",
            baseName: "ExportTextInputFormFieldAsText",
            type: "boolean",
        },        
        {
            name: "exportTocPageNumbers",
            baseName: "ExportTocPageNumbers",
            type: "boolean",
        },        
        {
            name: "exportXhtmlTransitional",
            baseName: "ExportXhtmlTransitional",
            type: "boolean",
        },        
        {
            name: "fontResourcesSubsettingSizeThreshold",
            baseName: "FontResourcesSubsettingSizeThreshold",
            type: "number",
        },        
        {
            name: "fontsFolder",
            baseName: "FontsFolder",
            type: "string",
        },        
        {
            name: "fontsFolderAlias",
            baseName: "FontsFolderAlias",
            type: "string",
        },        
        {
            name: "htmlVersion",
            baseName: "HtmlVersion",
            type: "HtmlSaveOptionsData.HtmlVersionEnum",
        },        
        {
            name: "imageResolution",
            baseName: "ImageResolution",
            type: "number",
        },        
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
            name: "metafileFormat",
            baseName: "MetafileFormat",
            type: "HtmlSaveOptionsData.MetafileFormatEnum",
        },        
        {
            name: "officeMathOutputMode",
            baseName: "OfficeMathOutputMode",
            type: "HtmlSaveOptionsData.OfficeMathOutputModeEnum",
        },        
        {
            name: "prettyFormat",
            baseName: "PrettyFormat",
            type: "boolean",
        },        
        {
            name: "resolveFontNames",
            baseName: "ResolveFontNames",
            type: "boolean",
        },        
        {
            name: "resourceFolder",
            baseName: "ResourceFolder",
            type: "string",
        },        
        {
            name: "resourceFolderAlias",
            baseName: "ResourceFolderAlias",
            type: "string",
        },        
        {
            name: "scaleImageToShapeSize",
            baseName: "ScaleImageToShapeSize",
            type: "boolean",
        },        
        {
            name: "tableWidthOutputMode",
            baseName: "TableWidthOutputMode",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(HtmlSaveOptionsData.attributeTypeMap);
    }

    /**
     * Gets or sets specifies whether negative left and right indents of paragraphs are allowed (not normalized).
     */
    public allowNegativeIndent: boolean;
    
    /**
     * Gets or sets specifies a prefix which is added to all CSS class names. Default value is an empty string and generated CSS class names have no common prefix.  If this value is not empty, all CSS classes generated by Aspose.Words will start with the specified prefix.This might be useful, for example, if you add custom CSS to generated documents and want to prevent class name conflicts. If the value is not null or empty, it must be a valid CSS identifier.
     */
    public cssClassNamePrefix: string;
    
    /**
     * Gets or sets specifies the name of the CSS file written when the document is exported to HTML.
     */
    public cssStyleSheetFileName: string;
    
    /**
     * Gets or sets specifies how CSS styles are exported.
     */
    public cssStyleSheetType: string;
    
    /**
     * Gets or sets specifies how the document should be split when saving.
     */
    public documentSplitCriteria: string;
    
    /**
     * Gets or sets specifies the maximum level of headings at which to split the document.
     */
    public documentSplitHeadingLevel: number;
    
    /**
     * Gets or sets specifies the encoding to use when exporting.
     */
    public encoding: string;
    
    /**
     * Gets or sets specifies whether to export built-in and custom document properties.
     */
    public exportDocumentProperties: boolean;
    
    /**
     * Gets or sets controls how drop-down form fields are saved to HTML. Default value is false.
     */
    public exportDropDownFormFieldAsText: boolean;
    
    /**
     * Gets or sets specifies whether font resources should be exported.
     */
    public exportFontResources: boolean;
    
    /**
     * Gets or sets specifies whether fonts resources should be embedded to HTML in Base64 encoding.  Default is false.
     */
    public exportFontsAsBase64: boolean;
    
    /**
     * Gets or sets specifies how headers and footers are output.
     */
    public exportHeadersFootersMode: string;
    
    /**
     * Gets or sets specifies whether images are saved in Base64 format.
     */
    public exportImagesAsBase64: boolean;
    
    /**
     * Gets or sets specifies whether language information is exported.
     */
    public exportLanguageInformation: boolean;
    
    /**
     * Gets or sets controls how list labels are output.
     */
    public exportListLabels: string;
    
    /**
     * Gets or sets specifies whether original URL should be used as the URL of the linked images. Default value is false.
     */
    public exportOriginalUrlForLinkedImages: boolean;
    
    /**
     * Gets or sets specifies whether page margins is exported to HTML, MHTML or EPUB. Default is false.
     */
    public exportPageMargins: boolean;
    
    /**
     * Gets or sets specifies whether page setup is exported.
     */
    public exportPageSetup: boolean;
    
    /**
     * Gets or sets specifies whether font sizes should be output in relative units when saving.
     */
    public exportRelativeFontSize: boolean;
    
    /**
     * Gets or sets specifies whether to write the roundtrip information when saving to HTML Default value is true.
     */
    public exportRoundtripInformation: boolean;
    
    /**
     * Gets or sets controls how textboxes represented by Aspose.Words.Drawing.Shape are saved to HTML, MHTML or EPUB. Default value is false.    When set to true, exports textboxes as inline \"svg\" elements. When false, exports as \"image\" elements.
     */
    public exportTextBoxAsSvg: boolean;
    
    /**
     * Gets or sets controls how text input form fields are saved.
     */
    public exportTextInputFormFieldAsText: boolean;
    
    /**
     * Gets or sets specifies whether to write page numbers to table of contents when saving.
     */
    public exportTocPageNumbers: boolean;
    
    /**
     * Gets or sets specifies whether to write the DOCTYPE declaration when saving.
     */
    public exportXhtmlTransitional: boolean;
    
    /**
     * Gets or sets controls which font resources need subsetting when saving.
     */
    public fontResourcesSubsettingSizeThreshold: number;
    
    /**
     * Gets or sets specifies the physical folder where fonts are saved when exporting a document.
     */
    public fontsFolder: string;
    
    /**
     * Gets or sets specifies the name of the folder used to construct font URIs.
     */
    public fontsFolderAlias: string;
    
    /**
     * Gets or sets specifies version of HTML standard that should be used when saving the document to HTML or MHTML. Default value is Aspose.Words.Saving.HtmlVersion.Xhtml.
     */
    public htmlVersion: HtmlSaveOptionsData.HtmlVersionEnum;
    
    /**
     * Gets or sets specifies the output resolution for images when exporting.
     */
    public imageResolution: number;
    
    /**
     * Gets or sets specifies the physical folder where images are saved when exporting a document.
     */
    public imagesFolder: string;
    
    /**
     * Gets or sets specifies the name of the folder used to construct image URIs.
     */
    public imagesFolderAlias: string;
    
    /**
     * Gets or sets specifies in what format metafiles are saved when exporting to HTML, MHTML, or EPUB. Default value is Aspose.Words.Saving.HtmlMetafileFormat.Png, meaning that metafiles are rendered to raster PNG images.  Metafiles are not natively displayed by HTML browsers. By default, Aspose.Words converts WMF and EMF images into PNG files when exporting to HTML.Other options are to convert metafiles to SVG images or to export them as is without conversion. Some image transforms, in particular image cropping, will not be applied to metafile images if they are exported to HTML without conversion.
     */
    public metafileFormat: HtmlSaveOptionsData.MetafileFormatEnum;
    
    /**
     * Gets or sets controls how OfficeMath objects are exported to HTML, MHTML or EPUB.  Default value is HtmlOfficeMathOutputMode.Image.
     */
    public officeMathOutputMode: HtmlSaveOptionsData.OfficeMathOutputModeEnum;
    
    /**
     * Gets or sets specifies whether or not use pretty formats output.
     */
    public prettyFormat: boolean;
    
    /**
     * Gets or sets specifies whether font family names used in the document are resolved and substituted according to FontSettings when being written into HTML-based formats. default value is false.
     */
    public resolveFontNames: boolean;
    
    /**
     * Gets or sets specifies a physical folder where all resources like images, fonts, and external CSS are saved when a document is exported to HTML. Default is an empty string.
     */
    public resourceFolder: string;
    
    /**
     * Gets or sets specifies the name of the folder used to construct URIs of all resources written into an HTML document.  Default is an empty string.
     */
    public resourceFolderAlias: string;
    
    /**
     * Gets or sets specifies whether images are scaled by Aspose.Words to the bounding shape size when exporting.
     */
    public scaleImageToShapeSize: boolean;
    
    /**
     * Gets or sets controls how table, row and cell widths are exported.
     */
    public tableWidthOutputMode: string;
    
    public constructor(init?: Partial<HtmlSaveOptionsData>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Enums for HtmlSaveOptionsData
 */
// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace HtmlSaveOptionsData {
    export enum HtmlVersionEnum {
        Xhtml = 'Xhtml' as any,
        Html5 = 'Html5' as any,
    }
    export enum MetafileFormatEnum {
        Png = 'Png' as any,
        Svg = 'Svg' as any,
        EmfOrWmf = 'EmfOrWmf' as any,
    }
    export enum OfficeMathOutputModeEnum {
        Image = 'Image' as any,
        MathML = 'MathML' as any,
        Text = 'Text' as any,
    }
}
// tslint:enable:quotemark
/**
 * Hyperlink element.
 */
export class Hyperlink extends LinkElement {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets hypelink's display text.
     */
    public displayText: string;
    
    /**
     * Gets or sets value.
     */
    public value: string;
    
    public constructor(init?: Partial<Hyperlink>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * This response should be returned by the service when handling:  GET /{name}/hyperlinks/{hyperlinkIndex} .
 */
export class HyperlinkResponse extends WordsResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets hyperlink.
     */
    public hyperlink: Hyperlink;
    
    public constructor(init?: Partial<HyperlinkResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Collection of .
 */
export class Hyperlinks extends LinkElement {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets array of .
     */
    public hyperlinkList: Array<Hyperlink>;
    
    public constructor(init?: Partial<Hyperlinks>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * This response should be returned by the service when handling:  GET /{name}/hyperlinks .
 */
export class HyperlinksResponse extends WordsResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets collection of hyperlinks.
     */
    public hyperlinks: Hyperlinks;
    
    public constructor(init?: Partial<HyperlinksResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Reference to node.
 */
export class NodeLink extends LinkElement {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets node id.
     */
    public nodeId: string;
    
    public constructor(init?: Partial<NodeLink>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * container class for odt/ott save options.
 */
export class OdtSaveOptionsData extends SaveOptionsData {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "isStrictSchema11",
            baseName: "IsStrictSchema11",
            type: "boolean",
        },        
        {
            name: "measureUnit",
            baseName: "MeasureUnit",
            type: "OdtSaveOptionsData.MeasureUnitEnum",
        },        
        {
            name: "prettyFormat",
            baseName: "PrettyFormat",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(OdtSaveOptionsData.attributeTypeMap);
    }

    /**
     * Gets or sets specifies whether export should correspond to ODT specification 1.1 strictly.
     */
    public isStrictSchema11: boolean;
    
    /**
     * Gets or sets allows to specify units of measure to apply to document content. The default value is Aspose.Words.Saving.OdtSaveMeasureUnit.Centimeters.  Open Office uses centimeters when specifying lengths, widths and other measurable formatting and content properties in documents whereas MS Office uses inches.
     */
    public measureUnit: OdtSaveOptionsData.MeasureUnitEnum;
    
    /**
     * Gets or sets specifies whether or not use pretty formats output.
     */
    public prettyFormat: boolean;
    
    public constructor(init?: Partial<OdtSaveOptionsData>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Enums for OdtSaveOptionsData
 */
// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace OdtSaveOptionsData {
    export enum MeasureUnitEnum {
        Centimeters = 'Centimeters' as any,
        Inches = 'Inches' as any,
    }
}
// tslint:enable:quotemark
/**
 * This response should be returned by the service when handling: GET http://api.aspose.com/v4.0/words/Test.doc/officeMathObjects/0.
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
     * Gets or sets officeMathObject information.
     */
    public officeMathObject: OfficeMathObject;
    
    public constructor(init?: Partial<OfficeMathObjectResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Collection of OfficeMath objects.
 */
export class OfficeMathObjectsCollection extends LinkElement {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets collection of OfficeMath objects.
     */
    public list: Array<OfficeMathObject>;
    
    public constructor(init?: Partial<OfficeMathObjectsCollection>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * This response should be returned by the service when handling: GET http://api.aspose.com/v4.0/words/Test.doc/OfficeMathObjects.
 */
export class OfficeMathObjectsResponse extends WordsResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets collection of OfficeMath objects.
     */
    public officeMathObjects: OfficeMathObjectsCollection;
    
    public constructor(init?: Partial<OfficeMathObjectsResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * container class for docx/docm/dotx/dotm/flatopc save options.
 */
export class OoxmlSaveOptionsData extends SaveOptionsData {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "compliance",
            baseName: "Compliance",
            type: "string",
        },        
        {
            name: "password",
            baseName: "Password",
            type: "string",
        },        
        {
            name: "prettyFormat",
            baseName: "PrettyFormat",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(OoxmlSaveOptionsData.attributeTypeMap);
    }

    /**
     * Gets or sets specifies the OOXML version for the output document.
     */
    public compliance: string;
    
    /**
     * Gets or sets specifies a password to encrypt document using ECMA376 Standard encryption algorithm.
     */
    public password: string;
    
    /**
     * Gets or sets specifies whether or not use pretty formats output.
     */
    public prettyFormat: boolean;
    
    public constructor(init?: Partial<OoxmlSaveOptionsData>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Represents the page setup properties of a section.             
 */
export class PageSetup extends LinkElement {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets specifies that this section contains bidirectional (complex scripts) text.             
     */
    public bidi: boolean;
    
    /**
     * Gets or sets specifies where the page border is positioned relative to intersecting texts and objects.             
     */
    public borderAlwaysInFront: boolean;
    
    /**
     * Gets or sets specifies which pages the page border is printed on.             
     */
    public borderAppliesTo: PageSetup.BorderAppliesToEnum;
    
    /**
     * Gets or sets a value that indicates whether the specified page border is measured from the edge of the page or from the text it surrounds.             
     */
    public borderDistanceFrom: PageSetup.BorderDistanceFromEnum;
    
    /**
     * Gets or sets returns or sets the distance (in points) between the bottom edge of the page and the bottom boundary of the body text.             
     */
    public bottomMargin: number;
    
    /**
     * Gets or sets true if a different header or footer is used on the first page.             
     */
    public differentFirstPageHeaderFooter: boolean;
    
    /**
     * Gets or sets the paper tray (bin) to use for the first page of a section. The value is implementation (printer) specific.             
     */
    public firstPageTray: number;
    
    /**
     * Gets or sets returns or sets the distance (in points) between the footer and the bottom of the page.             
     */
    public footerDistance: number;
    
    /**
     * Gets or sets the amount of extra space added to the margin for document binding.             
     */
    public gutter: number;
    
    /**
     * Gets or sets returns or sets the distance (in points) between the header and the top of the page.             
     */
    public headerDistance: number;
    
    /**
     * Gets or sets returns or sets the distance (in points) between the left edge of the page and the left boundary of the body text.             
     */
    public leftMargin: number;
    
    /**
     * Gets or sets returns or sets the numeric increment for line numbers.             
     */
    public lineNumberCountBy: number;
    
    /**
     * Gets or sets distance between the right edge of line numbers and the left edge of the document.             
     */
    public lineNumberDistanceFromText: number;
    
    /**
     * Gets or sets the way line numbering runs  that is, whether it starts over at the beginning of a new page or section or runs continuously.             
     */
    public lineNumberRestartMode: PageSetup.LineNumberRestartModeEnum;
    
    /**
     * Gets or sets the starting line number.             
     */
    public lineStartingNumber: number;
    
    /**
     * Gets or sets returns or sets the orientation of the page.             
     */
    public orientation: PageSetup.OrientationEnum;
    
    /**
     * Gets or sets the paper tray (bin) to be used for all but the first page of a section. The value is implementation (printer) specific.             
     */
    public otherPagesTray: number;
    
    /**
     * Gets or sets returns or sets the height of the page in points.             
     */
    public pageHeight: number;
    
    /**
     * Gets or sets the page number format.             
     */
    public pageNumberStyle: PageSetup.PageNumberStyleEnum;
    
    /**
     * Gets or sets the starting page number of the section.             
     */
    public pageStartingNumber: number;
    
    /**
     * Gets or sets returns or sets the width of the page in points.             
     */
    public pageWidth: number;
    
    /**
     * Gets or sets returns or sets the paper size.             
     */
    public paperSize: PageSetup.PaperSizeEnum;
    
    /**
     * Gets or sets true if page numbering restarts at the beginning of the section.             
     */
    public restartPageNumbering: boolean;
    
    /**
     * Gets or sets returns or sets the distance (in points) between the right edge of the page and the right boundary of the body text.             
     */
    public rightMargin: number;
    
    /**
     * Gets or sets whether Microsoft Word uses gutters for the section based on a right-to-left language or a left-to-right language.             
     */
    public rtlGutter: boolean;
    
    /**
     * Gets or sets returns or sets the type of section break for the specified object.             
     */
    public sectionStart: PageSetup.SectionStartEnum;
    
    /**
     * Gets or sets true if endnotes are printed at the end of the next section that doesn't suppress endnotes.                 Suppressed endnotes are printed before the endnotes in that section.             
     */
    public suppressEndnotes: boolean;
    
    /**
     * Gets or sets returns or sets the distance (in points) between the top edge of the page and the top boundary of the body text.             
     */
    public topMargin: number;
    
    /**
     * Gets or sets returns or sets the vertical alignment of text on each page in a document or section.             
     */
    public verticalAlignment: PageSetup.VerticalAlignmentEnum;
    
    public constructor(init?: Partial<PageSetup>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Enums for PageSetup
 */
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
/**
 * Paragraph format element.             
 */
export class ParagraphFormat extends LinkElement {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "addSpaceBetweenFarEastAndAlpha",
            baseName: "AddSpaceBetweenFarEastAndAlpha",
            type: "boolean",
        },        
        {
            name: "addSpaceBetweenFarEastAndDigit",
            baseName: "AddSpaceBetweenFarEastAndDigit",
            type: "boolean",
        },        
        {
            name: "alignment",
            baseName: "Alignment",
            type: "ParagraphFormat.AlignmentEnum",
        },        
        {
            name: "bidi",
            baseName: "Bidi",
            type: "boolean",
        },        
        {
            name: "dropCapPosition",
            baseName: "DropCapPosition",
            type: "ParagraphFormat.DropCapPositionEnum",
        },        
        {
            name: "firstLineIndent",
            baseName: "FirstLineIndent",
            type: "number",
        },        
        {
            name: "isListItem",
            baseName: "IsListItem",
            type: "boolean",
        },        
        {
            name: "keepTogether",
            baseName: "KeepTogether",
            type: "boolean",
        },        
        {
            name: "keepWithNext",
            baseName: "KeepWithNext",
            type: "boolean",
        },        
        {
            name: "leftIndent",
            baseName: "LeftIndent",
            type: "number",
        },        
        {
            name: "lineSpacing",
            baseName: "LineSpacing",
            type: "number",
        },        
        {
            name: "lineSpacingRule",
            baseName: "LineSpacingRule",
            type: "ParagraphFormat.LineSpacingRuleEnum",
        },        
        {
            name: "linesToDrop",
            baseName: "LinesToDrop",
            type: "number",
        },        
        {
            name: "noSpaceBetweenParagraphsOfSameStyle",
            baseName: "NoSpaceBetweenParagraphsOfSameStyle",
            type: "boolean",
        },        
        {
            name: "outlineLevel",
            baseName: "OutlineLevel",
            type: "ParagraphFormat.OutlineLevelEnum",
        },        
        {
            name: "pageBreakBefore",
            baseName: "PageBreakBefore",
            type: "boolean",
        },        
        {
            name: "rightIndent",
            baseName: "RightIndent",
            type: "number",
        },        
        {
            name: "spaceAfter",
            baseName: "SpaceAfter",
            type: "number",
        },        
        {
            name: "spaceAfterAuto",
            baseName: "SpaceAfterAuto",
            type: "boolean",
        },        
        {
            name: "spaceBefore",
            baseName: "SpaceBefore",
            type: "number",
        },        
        {
            name: "spaceBeforeAuto",
            baseName: "SpaceBeforeAuto",
            type: "boolean",
        },        
        {
            name: "styleIdentifier",
            baseName: "StyleIdentifier",
            type: "ParagraphFormat.StyleIdentifierEnum",
        },        
        {
            name: "styleName",
            baseName: "StyleName",
            type: "string",
        },        
        {
            name: "suppressAutoHyphens",
            baseName: "SuppressAutoHyphens",
            type: "boolean",
        },        
        {
            name: "suppressLineNumbers",
            baseName: "SuppressLineNumbers",
            type: "boolean",
        },        
        {
            name: "widowControl",
            baseName: "WidowControl",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ParagraphFormat.attributeTypeMap);
    }

    /**
     * Gets or sets a flag indicating whether inter-character spacing is automatically adjusted between regions of Latin text and regions of East Asian text in the current paragraph.             
     */
    public addSpaceBetweenFarEastAndAlpha: boolean;
    
    /**
     * Gets or sets a flag indicating whether inter-character spacing is automatically adjusted between regions of numbers and regions of East Asian text in the current paragraph.             
     */
    public addSpaceBetweenFarEastAndDigit: boolean;
    
    /**
     * Gets or sets text alignment for the paragraph.             
     */
    public alignment: ParagraphFormat.AlignmentEnum;
    
    /**
     * Gets or sets whether this is a right-to-left paragraph.             
     */
    public bidi: boolean;
    
    /**
     * Gets or sets the position for a drop cap text.             
     */
    public dropCapPosition: ParagraphFormat.DropCapPositionEnum;
    
    /**
     * Gets or sets the value (in points) for a first line or hanging indent. Use a positive value to set a first-line indent, and use a negative value to set a hanging indent.             
     */
    public firstLineIndent: number;
    
    /**
     * Gets or sets True when the paragraph is an item in a bulleted or numbered list.
     */
    public isListItem: boolean;
    
    /**
     * Gets or sets true if all lines in the paragraph are to remain on the same page.             
     */
    public keepTogether: boolean;
    
    /**
     * Gets or sets true if the paragraph is to remains on the same page as the paragraph that follows it.             
     */
    public keepWithNext: boolean;
    
    /**
     * Gets or sets the value (in points) that represents the left indent for paragraph.             
     */
    public leftIndent: number;
    
    /**
     * Gets or sets the line spacing (in points) for the paragraph.             
     */
    public lineSpacing: number;
    
    /**
     * Gets or sets the line spacing for the paragraph.             
     */
    public lineSpacingRule: ParagraphFormat.LineSpacingRuleEnum;
    
    /**
     * Gets or sets the number of lines of the paragraph text used to calculate the drop cap height.             
     */
    public linesToDrop: number;
    
    /**
     * Gets or sets when true,  and  will be ignored between the paragraphs of the same style.             
     */
    public noSpaceBetweenParagraphsOfSameStyle: boolean;
    
    /**
     * Gets or sets specifies the outline level of the paragraph in the document.             
     */
    public outlineLevel: ParagraphFormat.OutlineLevelEnum;
    
    /**
     * Gets or sets true if a page break is forced before the paragraph.             
     */
    public pageBreakBefore: boolean;
    
    /**
     * Gets or sets the value (in points) that represents the right indent for paragraph.             
     */
    public rightIndent: number;
    
    /**
     * Gets or sets the amount of spacing (in points) after the paragraph.             
     */
    public spaceAfter: number;
    
    /**
     * Gets or sets true if the amount of spacing after the paragraph is set automatically.             
     */
    public spaceAfterAuto: boolean;
    
    /**
     * Gets or sets the amount of spacing (in points) before the paragraph.             
     */
    public spaceBefore: number;
    
    /**
     * Gets or sets true if the amount of spacing before the paragraph is set automatically.             
     */
    public spaceBeforeAuto: boolean;
    
    /**
     * Gets or sets the locale independent style identifier of the paragraph style applied to this formatting.             
     */
    public styleIdentifier: ParagraphFormat.StyleIdentifierEnum;
    
    /**
     * Gets or sets the name of the paragraph style applied to this formatting.             
     */
    public styleName: string;
    
    /**
     * Gets or sets specifies whether the current paragraph should be exempted from any hyphenation which is applied in the document settings.             
     */
    public suppressAutoHyphens: boolean;
    
    /**
     * Gets or sets specifies whether the current paragraph's lines should be exempted from line numbering which is applied in the parent section.             
     */
    public suppressLineNumbers: boolean;
    
    /**
     * Gets or sets true if the first and last lines in the paragraph are to remain on the same page as the rest of the paragraph.             
     */
    public widowControl: boolean;
    
    public constructor(init?: Partial<ParagraphFormat>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Enums for ParagraphFormat
 */
// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace ParagraphFormat {
    export enum AlignmentEnum {
        Left = 'Left' as any,
        Center = 'Center' as any,
        Right = 'Right' as any,
        Justify = 'Justify' as any,
        Distributed = 'Distributed' as any,
        ArabicMediumKashida = 'ArabicMediumKashida' as any,
        ArabicHighKashida = 'ArabicHighKashida' as any,
        ArabicLowKashida = 'ArabicLowKashida' as any,
        ThaiDistributed = 'ThaiDistributed' as any,
    }
    export enum DropCapPositionEnum {
        None = 'None' as any,
        Normal = 'Normal' as any,
        Margin = 'Margin' as any,
    }
    export enum LineSpacingRuleEnum {
        AtLeast = 'AtLeast' as any,
        Exactly = 'Exactly' as any,
        Multiple = 'Multiple' as any,
    }
    export enum OutlineLevelEnum {
        Level1 = 'Level1' as any,
        Level2 = 'Level2' as any,
        Level3 = 'Level3' as any,
        Level4 = 'Level4' as any,
        Level5 = 'Level5' as any,
        Level6 = 'Level6' as any,
        Level7 = 'Level7' as any,
        Level8 = 'Level8' as any,
        Level9 = 'Level9' as any,
        BodyText = 'BodyText' as any,
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
}
// tslint:enable:quotemark
/**
 * This response should be returned by the service when handling: GET http://api.aspose.com/v4.0/words/Test.doc/paragraphs/{0}/format.
 */
export class ParagraphFormatResponse extends WordsResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "paragraphFormat",
            baseName: "ParagraphFormat",
            type: "ParagraphFormat",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ParagraphFormatResponse.attributeTypeMap);
    }

    /**
     * Gets or sets represents all the formatting for a paragraph.
     */
    public paragraphFormat: ParagraphFormat;
    
    public constructor(init?: Partial<ParagraphFormatResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Collection of links to paragraphs.
 */
export class ParagraphLinkCollection extends LinkElement {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets collection of paragraph's links.
     */
    public paragraphLinkList: Array<ParagraphLink>;
    
    public constructor(init?: Partial<ParagraphLinkCollection>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * This response should be returned by the service when handling: GET http://api.aspose.com/v4.0/words/Test.doc/paragraphs.
 */
export class ParagraphLinkCollectionResponse extends WordsResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets collection of paragraphs.
     */
    public paragraphs: ParagraphLinkCollection;
    
    public constructor(init?: Partial<ParagraphLinkCollectionResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * This response should be returned by the service when handling: GET http://api.aspose.com/v4.0/words/Test.doc/paragraphs/{0}.
 */
export class ParagraphResponse extends WordsResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets paragraph.
     */
    public paragraph: Paragraph;
    
    public constructor(init?: Partial<ParagraphResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Response for the request of data about protection.
 */
export class ProtectionDataResponse extends WordsResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets link to the document.
     */
    public documentLink: FileLink;
    
    /**
     * Gets or sets protection's data of the document.
     */
    public protectionData: ProtectionData;
    
    public constructor(init?: Partial<ProtectionDataResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * This response should be returned by the service when handling: GET http://api.aspose.com/v4.0/words/Test.doc/range/{0}/{1}/.
 */
export class RangeTextResponse extends WordsResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "text",
            baseName: "Text",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(RangeTextResponse.attributeTypeMap);
    }

    /**
     * Gets or sets text from range.
     */
    public text: string;
    
    public constructor(init?: Partial<RangeTextResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Response for \"Replace text\" action.
 */
export class ReplaceTextResponse extends WordsResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets link to the document.
     */
    public documentLink: FileLink;
    
    /**
     * Gets or sets number of occurrences of the captured text in the document.
     */
    public matches: number;
    
    public constructor(init?: Partial<ReplaceTextResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * response of the modification operations for the revisions collection (now these are acceptAll and rejectAll).
 */
export class RevisionsModificationResponse extends WordsResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets result of the modification operations for the revisions collection.
     */
    public result: ModificationOperationResult;
    
    public constructor(init?: Partial<RevisionsModificationResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * container class for rtf save options.
 */
export class RtfSaveOptionsData extends SaveOptionsData {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "exportCompactSize",
            baseName: "ExportCompactSize",
            type: "boolean",
        },        
        {
            name: "exportImagesForOldReaders",
            baseName: "ExportImagesForOldReaders",
            type: "boolean",
        },        
        {
            name: "prettyFormat",
            baseName: "PrettyFormat",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(RtfSaveOptionsData.attributeTypeMap);
    }

    /**
     * Gets or sets allows to make output RTF documents smaller in size, but if they contain RTL (right-to-left) text, it will not be displayed correctly.
     */
    public exportCompactSize: boolean;
    
    /**
     * Gets or sets specifies whether the keywords for \"old readers\" are written to RTF or not.
     */
    public exportImagesForOldReaders: boolean;
    
    /**
     * Gets or sets specifies whether or not use pretty formats output.
     */
    public prettyFormat: boolean;
    
    public constructor(init?: Partial<RtfSaveOptionsData>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * This response should be returned by the service when handling: GET http://api.aspose.com/v4.0/words/Test.doc/paragraphs/{0}/runs/{1}.
 */
export class RunResponse extends WordsResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets run.
     */
    public run: Run;
    
    public constructor(init?: Partial<RunResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Represents DTO for collection of runs.
 */
export class Runs extends LinkElement {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets collection of fields.
     */
    public list: Array<Run>;
    
    public constructor(init?: Partial<Runs>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * This response should be returned by the service when handling: GET http://api.aspose.com/v4.0/words/Test.doc/{paragraphPath}/runs.
 */
export class RunsResponse extends WordsResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets collection of runs.
     */
    public runs: Runs;
    
    public constructor(init?: Partial<RunsResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Save response.
 */
export class SaveResponse extends WordsResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets save result.
     */
    public saveResult: SaveResult;
    
    public constructor(init?: Partial<SaveResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * This response should be returned by the service when handling: GET http://api.aspose.com/v4.0/words/Test.doc/search.
 */
export class SearchResponse extends WordsResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets a regular expression pattern used to find matches.
     */
    public searchingPattern: string;
    
    /**
     * Gets or sets collection of search results.
     */
    public searchResults: SearchResultsCollection;
    
    public constructor(init?: Partial<SearchResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Collection of search results.
 */
export class SearchResultsCollection extends LinkElement {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets collection of comments.
     */
    public resultsList: Array<SearchResult>;
    
    public constructor(init?: Partial<SearchResultsCollection>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Section element.
 */
export class Section extends LinkElement {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets child nodes.
     */
    public childNodes: Array<NodeLink>;
    
    /**
     * Gets or sets link to HeaderFooters resource.
     */
    public headerFooters: LinkElement;
    
    /**
     * Gets or sets link to PageSetup resource.
     */
    public pageSetup: LinkElement;
    
    /**
     * Gets or sets link to Paragraphs resource.
     */
    public paragraphs: LinkElement;
    
    /**
     * Gets or sets link to Tables resource.
     */
    public tables: LinkElement;
    
    public constructor(init?: Partial<Section>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Collection of links to sections.
 */
export class SectionLinkCollection extends LinkElement {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets collection of section's links.
     */
    public sectionLinkList: Array<SectionLink>;
    
    public constructor(init?: Partial<SectionLinkCollection>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * This response should be returned by the service when handling: GET http://api.aspose.com/v4.0/words/Test.doc/sections.
 */
export class SectionLinkCollectionResponse extends WordsResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets collection of sections.
     */
    public sections: SectionLinkCollection;
    
    public constructor(init?: Partial<SectionLinkCollectionResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * This response should be returned by the service when handling: GET http://api.aspose.com/v4.0/words/Test.doc/sections/{0}/PageSetup.
 */
export class SectionPageSetupResponse extends WordsResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets section.
     */
    public pageSetup: PageSetup;
    
    public constructor(init?: Partial<SectionPageSetupResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * This response should be returned by the service when handling: GET http://api.aspose.com/v4.0/words/Test.doc/sections/{0}.
 */
export class SectionResponse extends WordsResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets section.
     */
    public section: Section;
    
    public constructor(init?: Partial<SectionResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * This response should be returned by the service when handling:  POST /{name}/split .
 */
export class SplitDocumentResponse extends WordsResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets resylt of splitting document.
     */
    public splitResult: SplitDocumentResult;
    
    public constructor(init?: Partial<SplitDocumentResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Response for the request of the document's statistical data.
 */
export class StatDataResponse extends WordsResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets link to the document.
     */
    public documentLink: FileLink;
    
    /**
     * Gets or sets statistical data of the document.
     */
    public statData: DocumentStatData;
    
    public constructor(init?: Partial<StatDataResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Represents all formatting for a table row.
 */
export class TableCellFormat extends LinkElement {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets returns or sets the amount of space (in points) to add below the contents of cell.
     */
    public bottomPadding: number;
    
    /**
     * Gets or sets if true, fits text in the cell, compressing each paragraph to the width of the cell.
     */
    public fitText: boolean;
    
    /**
     * Gets or sets specifies how the cell is merged horizontally with other cells in the row.
     */
    public horizontalMerge: TableCellFormat.HorizontalMergeEnum;
    
    /**
     * Gets or sets returns or sets the amount of space (in points) to add to the left of the contents of cell.
     */
    public leftPadding: number;
    
    /**
     * Gets or sets returns or sets the orientation of text in a table cell.
     */
    public orientation: TableCellFormat.OrientationEnum;
    
    /**
     * Gets or sets returns or sets the preferred width of the cell.
     */
    public preferredWidth: PreferredWidth;
    
    /**
     * Gets or sets returns or sets the amount of space (in points) to add to the right of the contents of cell.
     */
    public rightPadding: number;
    
    /**
     * Gets or sets returns or sets the amount of space (in points) to add above the contents of cell.
     */
    public topPadding: number;
    
    /**
     * Gets or sets returns or sets the vertical alignment of text in the cell.
     */
    public verticalAlignment: TableCellFormat.VerticalAlignmentEnum;
    
    /**
     * Gets or sets specifies how the cell is merged with other cells vertically.
     */
    public verticalMerge: TableCellFormat.VerticalMergeEnum;
    
    /**
     * Gets or sets the width of the cell in points.
     */
    public width: number;
    
    /**
     * Gets or sets if true, wrap text for the cell.
     */
    public wrapText: boolean;
    
    public constructor(init?: Partial<TableCellFormat>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Enums for TableCellFormat
 */
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
/**
 * This response should be returned by the service when handling: GET http://api.aspose.com/v4.0/words/Test.doc/tables/{0}/rows/{1}/cells/{2}/cellformat.
 */
export class TableCellFormatResponse extends WordsResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets table.
     */
    public cellFormat: TableCellFormat;
    
    public constructor(init?: Partial<TableCellFormatResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * This response should be returned by the service when handling: GET http://api.aspose.com/v4.0/words/Test.doc/tables/{0}.
 */
export class TableCellResponse extends WordsResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets table cell.
     */
    public cell: TableCell;
    
    public constructor(init?: Partial<TableCellResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Collection of links to tables.
 */
export class TableLinkCollection extends LinkElement {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets collection of table's links.
     */
    public tableLinkList: Array<TableLink>;
    
    public constructor(init?: Partial<TableLinkCollection>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * This response should be returned by the service when handling: GET http://api.aspose.com/v4.0/words/Test.doc/tables.
 */
export class TableLinkCollectionResponse extends WordsResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets collection of tables.
     */
    public tables: TableLinkCollection;
    
    public constructor(init?: Partial<TableLinkCollectionResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Represents the table properties.             
 */
export class TableProperties extends LinkElement {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets specifies how an inline table is aligned in the document.
     */
    public alignment: TableProperties.AlignmentEnum;
    
    /**
     * Gets or sets allows Microsoft Word and Aspose.Words to automatically resize cells in a table to fit their contents.
     */
    public allowAutoFit: boolean;
    
    /**
     * Gets or sets whether this is a right-to-left table.
     */
    public bidi: boolean;
    
    /**
     * Gets or sets the amount of space (in points) to add below the contents of cells.
     */
    public bottomPadding: number;
    
    /**
     * Gets or sets the amount of space (in points) between the cells.
     */
    public cellSpacing: number;
    
    /**
     * Gets or sets the value that represents the left indent of the table.
     */
    public leftIndent: number;
    
    /**
     * Gets or sets the amount of space (in points) to add to the left of the contents of cells.
     */
    public leftPadding: number;
    
    /**
     * Gets or sets the table preferred width. Preferred width can be specified as a percentage, number of points or a special \"auto\" value.
     */
    public preferredWidth: PreferredWidth;
    
    /**
     * Gets or sets the amount of space (in points) to add to the right of the contents of cells.
     */
    public rightPadding: number;
    
    /**
     * Gets or sets the locale independent style identifier of the table style applied to this table.
     */
    public styleIdentifier: TableProperties.StyleIdentifierEnum;
    
    /**
     * Gets or sets the name of the table style applied to this table.
     */
    public styleName: string;
    
    /**
     * Gets or sets bit flags that specify how a table style is applied to this table.
     */
    public styleOptions: TableProperties.StyleOptionsEnum;
    
    /**
     * Gets or sets get or sets TextWrapping  for table.
     */
    public textWrapping: TableProperties.TextWrappingEnum;
    
    /**
     * Gets or sets the amount of space (in points) to add above the contents of cells.
     */
    public topPadding: number;
    
    public constructor(init?: Partial<TableProperties>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Enums for TableProperties
 */
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
/**
 * This response should be returned by the service when handling: GET http://api.aspose.com/v4.0/words/Test.doc/tables/{0}/properties.
 */
export class TablePropertiesResponse extends WordsResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets table.
     */
    public properties: TableProperties;
    
    public constructor(init?: Partial<TablePropertiesResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * This response should be returned by the service when handling: GET http://api.aspose.com/v4.0/words/Test.doc/tables/{0}.
 */
export class TableResponse extends WordsResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets table.
     */
    public table: Table;
    
    public constructor(init?: Partial<TableResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Represents all formatting for a table row.
 */
export class TableRowFormat extends LinkElement {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets true if the text in a table row is allowed to split across a page break.
     */
    public allowBreakAcrossPages: boolean;
    
    /**
     * Gets or sets true if the row is repeated as a table heading on every page when the table spans more than one page.
     */
    public headingFormat: boolean;
    
    /**
     * Gets or sets the height of the table row in points.
     */
    public height: number;
    
    /**
     * Gets or sets the rule for determining the height of the table row.
     */
    public heightRule: TableRowFormat.HeightRuleEnum;
    
    public constructor(init?: Partial<TableRowFormat>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Enums for TableRowFormat
 */
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
/**
 * This response should be returned by the service when handling: GET http://api.aspose.com/v4.0/words/Test.doc/tables/{0}/rows/{1}/rowformat.
 */
export class TableRowFormatResponse extends WordsResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets table.
     */
    public rowFormat: TableRowFormat;
    
    public constructor(init?: Partial<TableRowFormatResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * This response should be returned by the service when handling: GET http://api.aspose.com/v4.0/words/Test.doc/tables/{0}.
 */
export class TableRowResponse extends WordsResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets table row.
     */
    public row: TableRow;
    
    public constructor(init?: Partial<TableRowResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Container class for text save options.
 */
export class TextSaveOptionsData extends SaveOptionsData {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "addBidiMarks",
            baseName: "AddBidiMarks",
            type: "boolean",
        },        
        {
            name: "encoding",
            baseName: "Encoding",
            type: "string",
        },        
        {
            name: "exportHeadersFootersMode",
            baseName: "ExportHeadersFootersMode",
            type: "TextSaveOptionsData.ExportHeadersFootersModeEnum",
        },        
        {
            name: "forcePageBreaks",
            baseName: "ForcePageBreaks",
            type: "boolean",
        },        
        {
            name: "paragraphBreak",
            baseName: "ParagraphBreak",
            type: "string",
        },        
        {
            name: "preserveTableLayout",
            baseName: "PreserveTableLayout",
            type: "boolean",
        },        
        {
            name: "simplifyListLabels",
            baseName: "SimplifyListLabels",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TextSaveOptionsData.attributeTypeMap);
    }

    /**
     * Gets or sets specifies whether to add bi-directional marks before each BiDi run when exporting in plain text format. The default value is true.
     */
    public addBidiMarks: boolean;
    
    /**
     * Gets or sets specifies the encoding to use when exporting in plain text format.
     */
    public encoding: string;
    
    /**
     * Gets or sets specifies whether to output headers and footers when exporting in plain text format. default value is TxtExportHeadersFootersMode.PrimaryOnly.
     */
    public exportHeadersFootersMode: TextSaveOptionsData.ExportHeadersFootersModeEnum;
    
    /**
     * Gets or sets allows to specify whether the page breaks should be preserved during export. The default value is false.
     */
    public forcePageBreaks: boolean;
    
    /**
     * Gets or sets specifies the string to use as a paragraph break when exporting in plain text format.
     */
    public paragraphBreak: string;
    
    /**
     * Gets or sets specifies whether the program should attempt to preserve layout of tables when saving in the plain text format.
     */
    public preserveTableLayout: boolean;
    
    /**
     * Gets or sets specifies whether the program should simplify list labels in case of complex label formatting not being adequately represented by plain text.
     */
    public simplifyListLabels: boolean;
    
    public constructor(init?: Partial<TextSaveOptionsData>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Enums for TextSaveOptionsData
 */
// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace TextSaveOptionsData {
    export enum ExportHeadersFootersModeEnum {
        None = 'None' as any,
        PrimaryOnly = 'PrimaryOnly' as any,
        AllAtEnd = 'AllAtEnd' as any,
    }
}
// tslint:enable:quotemark
/**
 * container class for wml save options.
 */
export class WordMLSaveOptionsData extends SaveOptionsData {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "prettyFormat",
            baseName: "PrettyFormat",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WordMLSaveOptionsData.attributeTypeMap);
    }

    /**
     * Gets or sets specifies whether or not use pretty formats output.
     */
    public prettyFormat: boolean;
    
    public constructor(init?: Partial<WordMLSaveOptionsData>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Response for Api error.
 */
export class WordsApiErrorResponse extends WordsResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "error",
            baseName: "Error",
            type: "ApiError",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WordsApiErrorResponse.attributeTypeMap);
    }

    /**
     * Gets or sets error.
     */
    public error: ApiError;
    
    public constructor(init?: Partial<WordsApiErrorResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Provides information for the words api resource link.
 */
export class WordsApiLink extends Link {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

/**
 * container class for xaml flow save options.
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
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(XamlFlowSaveOptionsData.attributeTypeMap);
    }

    /**
     * Gets or sets specifies the physical folder where images are saved when exporting.
     */
    public imagesFolder: string;
    
    /**
     * Gets or sets specifies the name of the folder used to construct image URIs.
     */
    public imagesFolderAlias: string;
    
    public constructor(init?: Partial<XamlFlowSaveOptionsData>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Comment.
 */
export class Comment extends CommentLink {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets returns or sets the author name for a comment.
     */
    public author: string;
    
    /**
     * Gets or sets content of comment.
     */
    public content: StoryChildNodes;
    
    /**
     * Gets or sets the date and time that the comment was made.
     */
    public dateTime: Date;
    
    /**
     * Gets or sets returns or sets the initials of the user associated with a specific comment.
     */
    public initial: string;
    
    /**
     * Gets or sets link to comment range end node.
     */
    public rangeEnd: DocumentPosition;
    
    /**
     * Gets or sets link to comment range start node.
     */
    public rangeStart: DocumentPosition;
    
    /**
     * Gets or sets this is a convenience property that allows to easily get or set text of the comment.
     */
    public text: string;
    
    public constructor(init?: Partial<Comment>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Represents link for Drawing Object DTO.
 */
export class DrawingObjectLink extends NodeLink {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

/**
 * Container class for epub save options.
 */
export class EpubSaveOptionsData extends HtmlSaveOptionsData {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "epubNavigationMapLevel",
            baseName: "EpubNavigationMapLevel",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(EpubSaveOptionsData.attributeTypeMap);
    }

    /**
     * Gets or sets specifies the maximum level of headings populated to the navigation map when exporting.
     */
    public epubNavigationMapLevel: number;
    
    public constructor(init?: Partial<EpubSaveOptionsData>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Enums for EpubSaveOptionsData
 */
// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace EpubSaveOptionsData {
}
// tslint:enable:quotemark
/**
 * Field link.
 */
export class FieldLink extends NodeLink {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets field code.
     */
    public fieldCode: string;
    
    public constructor(init?: Partial<FieldLink>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Footnote link.
 */
export class FootnoteLink extends NodeLink {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

/**
 * FromField.
 */
export class FormField extends NodeLink {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets true if references to the specified form field are automatically updated whenever the field is exited.
     */
    public calculateOnExit: boolean;
    
    /**
     * Gets or sets true if a form field is enabled.
     */
    public enabled: boolean;
    
    /**
     * Gets or sets returns or sets an entry macro name for the form field.
     */
    public entryMacro: string;
    
    /**
     * Gets or sets returns or sets an exit macro name for the form field.
     */
    public exitMacro: string;
    
    /**
     * Gets or sets returns or sets the text that's displayed in a message box when the form field has the focus and the user presses F1.
     */
    public helpText: string;
    
    /**
     * Gets or sets the form field name.
     */
    public name: string;
    
    /**
     * Gets or sets specifies the source of the text that's displayed in a message box when a form field has the focus and the user presses F1.
     */
    public ownHelp: boolean;
    
    /**
     * Gets or sets specifies the source of the text that's displayed in the status bar when a form field has the focus.
     */
    public ownStatus: boolean;
    
    /**
     * Gets or sets returns or sets the text that's displayed in the status bar when a form field has the focus.
     */
    public statusText: string;
    
    public constructor(init?: Partial<FormField>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Section element.
 */
export class HeaderFooter extends HeaderFooterLink {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "childNodes",
            baseName: "ChildNodes",
            type: "Array<NodeLink>",
        },        
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

    /**
     * Gets or sets child nodes.
     */
    public childNodes: Array<NodeLink>;
    
    /**
     * Gets or sets link to DrawingObjects resource.
     */
    public drawingObjects: LinkElement;
    
    /**
     * Gets or sets link to Paragraphs resource.
     */
    public paragraphs: LinkElement;
    
    public constructor(init?: Partial<HeaderFooter>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Enums for HeaderFooter
 */
// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace HeaderFooter {
}
// tslint:enable:quotemark
/**
 * container class for fixed html save options.
 */
export class HtmlFixedSaveOptionsData extends FixedPageSaveOptionsData {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "cssClassNamesPrefix",
            baseName: "CssClassNamesPrefix",
            type: "string",
        },        
        {
            name: "encoding",
            baseName: "Encoding",
            type: "string",
        },        
        {
            name: "exportEmbeddedCss",
            baseName: "ExportEmbeddedCss",
            type: "boolean",
        },        
        {
            name: "exportEmbeddedFonts",
            baseName: "ExportEmbeddedFonts",
            type: "boolean",
        },        
        {
            name: "exportEmbeddedImages",
            baseName: "ExportEmbeddedImages",
            type: "boolean",
        },        
        {
            name: "exportFormFields",
            baseName: "ExportFormFields",
            type: "boolean",
        },        
        {
            name: "fontFormat",
            baseName: "FontFormat",
            type: "string",
        },        
        {
            name: "pageHorizontalAlignment",
            baseName: "PageHorizontalAlignment",
            type: "string",
        },        
        {
            name: "pageMargins",
            baseName: "PageMargins",
            type: "number",
        },        
        {
            name: "resourcesFolder",
            baseName: "ResourcesFolder",
            type: "string",
        },        
        {
            name: "resourcesFolderAlias",
            baseName: "ResourcesFolderAlias",
            type: "string",
        },        
        {
            name: "saveFontFaceCssSeparately",
            baseName: "SaveFontFaceCssSeparately",
            type: "boolean",
        },        
        {
            name: "showPageBorder",
            baseName: "ShowPageBorder",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(HtmlFixedSaveOptionsData.attributeTypeMap);
    }

    /**
     * Gets or sets specifies prefix which is added to all class names in style.css file. Default value is \"aw\".
     */
    public cssClassNamesPrefix: string;
    
    /**
     * Gets or sets encoding.
     */
    public encoding: string;
    
    /**
     * Gets or sets specifies whether the CSS (Cascading Style Sheet) should be embedded into Html document.
     */
    public exportEmbeddedCss: boolean;
    
    /**
     * Gets or sets specifies whether fonts should be embedded into Html document in Base64 format.
     */
    public exportEmbeddedFonts: boolean;
    
    /**
     * Gets or sets specifies whether images should be embedded into Html document in Base64 format.
     */
    public exportEmbeddedImages: boolean;
    
    /**
     * Gets or sets indication of whether form fields are exported as interactive items (as 'input' tag) rather than converted to text or graphics.
     */
    public exportFormFields: boolean;
    
    /**
     * Gets or sets specifies export format of fonts.
     */
    public fontFormat: string;
    
    /**
     * Gets or sets specifies the horizontal alignment of pages in an HTML document. Default value is HtmlFixedHorizontalPageAlignment.Center.
     */
    public pageHorizontalAlignment: string;
    
    /**
     * Gets or sets specifies the margins around pages in an HTML document. The margins value is measured in points and should be equal to or greater than 0. Default value is 10 points.
     */
    public pageMargins: number;
    
    /**
     * Gets or sets specifies the physical folder where resources are saved when exporting a document.
     */
    public resourcesFolder: string;
    
    /**
     * Gets or sets specifies the name of the folder used to construct resource URIs.
     */
    public resourcesFolderAlias: string;
    
    /**
     * Gets or sets flag indicates whether \"@font-face\" CSS rules should be placed into a separate file \"fontFaces.css\" when a document is being saved with external stylesheet (that is, when Aspose.Words.Saving.HtmlFixedSaveOptions.ExportEmbeddedCss is false). Default value is false, all CSS rules are written into single file \"styles.css\".
     */
    public saveFontFaceCssSeparately: boolean;
    
    /**
     * Gets or sets specifies whether border around pages should be shown.
     */
    public showPageBorder: boolean;
    
    public constructor(init?: Partial<HtmlFixedSaveOptionsData>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Container abstract class for image save options.
 */
export class ImageSaveOptionsData extends FixedPageSaveOptionsData {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets allows to specify additional System.Drawing.Graphics quality options.
     */
    public graphicsQualityOptions: GraphicsQualityOptionsData;
    
    /**
     * Gets or sets the horizontal resolution for the generated images, in dots per inch.  This property has effect only when saving to raster image formats. The default value is 96.
     */
    public horizontalResolution: number;
    
    /**
     * Gets or sets brightness of image.
     */
    public imageBrightness: number;
    
    /**
     * Gets or sets color mode of image.
     */
    public imageColorMode: string;
    
    /**
     * Gets or sets contrast of image.
     */
    public imageContrast: number;
    
    /**
     * Gets or sets background (paper) color of image.
     */
    public paperColor: string;
    
    /**
     * Gets or sets pixel format of image.
     */
    public pixelFormat: string;
    
    /**
     * Gets or sets both horizontal and vertical resolution for the generated images, in dots per inch.  This property has effect only when saving to raster image formats. The default value is 96.
     */
    public resolution: number;
    
    /**
     * Gets or sets zoom factor of image.
     */
    public scale: number;
    
    /**
     * Gets or sets determine whether or not to use anti-aliasing for rendering.
     */
    public useAntiAliasing: boolean;
    
    /**
     * Gets or sets a value determining whether to use GDI+ or Aspose.Words metafile renderer when saving to EMF.
     */
    public useGdiEmfRenderer: boolean;
    
    /**
     * Gets or sets determine whether or not to use high quality (i.e. slow) rendering algorithms.
     */
    public useHighQualityRendering: boolean;
    
    /**
     * Gets or sets the vertical resolution for the generated images, in dots per inch.  This property has effect only when saving to raster image formats. The default value is 96.
     */
    public verticalResolution: number;
    
    public constructor(init?: Partial<ImageSaveOptionsData>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Container class for mhtml save options.
 */
export class MhtmlSaveOptionsData extends HtmlSaveOptionsData {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "exportCidUrlsForMhtmlResources",
            baseName: "ExportCidUrlsForMhtmlResources",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(MhtmlSaveOptionsData.attributeTypeMap);
    }

    /**
     * Gets or sets specifies whether to use CID (Content-ID) URLs to reference resources (images, fonts, CSS) included in MHTML documents. Default value is false.             
     */
    public exportCidUrlsForMhtmlResources: boolean;
    
    public constructor(init?: Partial<MhtmlSaveOptionsData>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Enums for MhtmlSaveOptionsData
 */
// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace MhtmlSaveOptionsData {
}
// tslint:enable:quotemark
/**
 * OfficeMath object link element.
 */
export class OfficeMathLink extends NodeLink {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

/**
 * Paragraph element.
 */
export class Paragraph extends NodeLink {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets child nodes.
     */
    public childNodes: Array<NodeLink>;
    
    public constructor(init?: Partial<Paragraph>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Paragraph link element.
 */
export class ParagraphLink extends NodeLink {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets paragraph's text.
     */
    public text: string;
    
    public constructor(init?: Partial<ParagraphLink>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Container class for pcl save options.
 */
export class PclSaveOptionsData extends FixedPageSaveOptionsData {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "falllbackFontName",
            baseName: "FalllbackFontName",
            type: "string",
        },        
        {
            name: "rasterizeTransformedElements",
            baseName: "RasterizeTransformedElements",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PclSaveOptionsData.attributeTypeMap);
    }

    /**
     * Gets or sets name of the font that will be used if no expected font is found in printer and built-in fonts collections.
     */
    public falllbackFontName: string;
    
    /**
     * Gets or sets a value determining whether or not complex transformed elements should be rasterized before saving to PCL document.  Default is true.
     */
    public rasterizeTransformedElements: boolean;
    
    public constructor(init?: Partial<PclSaveOptionsData>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * container class for pdf save options.
 */
export class PdfSaveOptionsData extends FixedPageSaveOptionsData {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "compliance",
            baseName: "Compliance",
            type: "string",
        },        
        {
            name: "createNoteHyperlinks",
            baseName: "CreateNoteHyperlinks",
            type: "boolean",
        },        
        {
            name: "customPropertiesExport",
            baseName: "CustomPropertiesExport",
            type: "string",
        },        
        {
            name: "digitalSignatureDetails",
            baseName: "DigitalSignatureDetails",
            type: "PdfDigitalSignatureDetailsData",
        },        
        {
            name: "displayDocTitle",
            baseName: "DisplayDocTitle",
            type: "boolean",
        },        
        {
            name: "downsampleOptions",
            baseName: "DownsampleOptions",
            type: "DownsampleOptionsData",
        },        
        {
            name: "embedFullFonts",
            baseName: "EmbedFullFonts",
            type: "boolean",
        },        
        {
            name: "encryptionDetails",
            baseName: "EncryptionDetails",
            type: "PdfEncryptionDetailsData",
        },        
        {
            name: "escapeUri",
            baseName: "EscapeUri",
            type: "boolean",
        },        
        {
            name: "exportDocumentStructure",
            baseName: "ExportDocumentStructure",
            type: "boolean",
        },        
        {
            name: "fontEmbeddingMode",
            baseName: "FontEmbeddingMode",
            type: "string",
        },        
        {
            name: "headerFooterBookmarksExportMode",
            baseName: "HeaderFooterBookmarksExportMode",
            type: "PdfSaveOptionsData.HeaderFooterBookmarksExportModeEnum",
        },        
        {
            name: "imageColorSpaceExportMode",
            baseName: "ImageColorSpaceExportMode",
            type: "string",
        },        
        {
            name: "imageCompression",
            baseName: "ImageCompression",
            type: "string",
        },        
        {
            name: "openHyperlinksInNewWindow",
            baseName: "OpenHyperlinksInNewWindow",
            type: "boolean",
        },        
        {
            name: "outlineOptions",
            baseName: "OutlineOptions",
            type: "OutlineOptionsData",
        },        
        {
            name: "pageMode",
            baseName: "PageMode",
            type: "string",
        },        
        {
            name: "preblendImages",
            baseName: "PreblendImages",
            type: "boolean",
        },        
        {
            name: "preserveFormFields",
            baseName: "PreserveFormFields",
            type: "boolean",
        },        
        {
            name: "textCompression",
            baseName: "TextCompression",
            type: "string",
        },        
        {
            name: "useBookFoldPrintingSettings",
            baseName: "UseBookFoldPrintingSettings",
            type: "boolean",
        },        
        {
            name: "useCoreFonts",
            baseName: "UseCoreFonts",
            type: "boolean",
        },        
        {
            name: "zoomBehavior",
            baseName: "ZoomBehavior",
            type: "string",
        },        
        {
            name: "zoomFactor",
            baseName: "ZoomFactor",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PdfSaveOptionsData.attributeTypeMap);
    }

    /**
     * Gets or sets specifies the PDF standards compliance level for output documents.
     */
    public compliance: string;
    
    /**
     * Gets or sets specifies whether to convert footnote/endnote references in main text story into active hyperlinks. When clicked the hyperlink will lead to the corresponding footnote/endnote. Default is false.
     */
    public createNoteHyperlinks: boolean;
    
    /**
     * Gets or sets a value determining the way  are exported to PDF file. Default value is .
     */
    public customPropertiesExport: string;
    
    /**
     * Gets or sets specifies the details for signing the output PDF document.
     */
    public digitalSignatureDetails: PdfDigitalSignatureDetailsData;
    
    /**
     * Gets or sets a flag specifying whether the window�s title bar should display the document title taken from the Title entry of the document information dictionary.
     */
    public displayDocTitle: boolean;
    
    /**
     * Gets or sets allows to specify downsample options.
     */
    public downsampleOptions: DownsampleOptionsData;
    
    /**
     * Gets or sets controls how fonts are embedded into the resulting PDF documents.
     */
    public embedFullFonts: boolean;
    
    /**
     * Gets or sets specifies the details for encrypting the output PDF document.
     */
    public encryptionDetails: PdfEncryptionDetailsData;
    
    /**
     * Gets or sets a flag specifying whether URI should be escaped before writing.             
     */
    public escapeUri: boolean;
    
    /**
     * Gets or sets determines whether or not to export document structure.
     */
    public exportDocumentStructure: boolean;
    
    /**
     * Gets or sets specifies the font embedding mode.
     */
    public fontEmbeddingMode: string;
    
    /**
     * Gets or sets determines how bookmarks in headers/footers are exported. The default value is Aspose.Words.Saving.HeaderFooterBookmarksExportMode.All.
     */
    public headerFooterBookmarksExportMode: PdfSaveOptionsData.HeaderFooterBookmarksExportModeEnum;
    
    /**
     * Gets or sets specifies how the color space will be selected for the images in PDF document.
     */
    public imageColorSpaceExportMode: string;
    
    /**
     * Gets or sets specifies compression type to be used for all images in the document.
     */
    public imageCompression: string;
    
    /**
     * Gets or sets determines whether hyperlinks in the output Pdf document are forced to be opened in a new window (or tab) of a browser.
     */
    public openHyperlinksInNewWindow: boolean;
    
    /**
     * Gets or sets allows to specify outline options.
     */
    public outlineOptions: OutlineOptionsData;
    
    /**
     * Gets or sets specifies how the PDF document should be displayed when opened in the PDF reader.
     */
    public pageMode: string;
    
    /**
     * Gets or sets a value determining whether or not to preblend transparent images with black background color.
     */
    public preblendImages: boolean;
    
    /**
     * Gets or sets specifies whether to preserve Microsoft Word form fields as form fields in PDF or convert them to text.
     */
    public preserveFormFields: boolean;
    
    /**
     * Gets or sets specifies compression type to be used for all textual content in the document.
     */
    public textCompression: string;
    
    /**
     * Gets or sets determines whether the document should be saved using a booklet printing layout.
     */
    public useBookFoldPrintingSettings: boolean;
    
    /**
     * Gets or sets determines whether or not to substitute TrueType fonts Arial, Times New Roman, Courier New and Symbol with core PDF Type 1 fonts.
     */
    public useCoreFonts: boolean;
    
    /**
     * Gets or sets determines what type of zoom should be applied when a document is opened with a PDF viewer.
     */
    public zoomBehavior: string;
    
    /**
     * Gets or sets determines zoom factor (in percentages) for a document.
     */
    public zoomFactor: number;
    
    public constructor(init?: Partial<PdfSaveOptionsData>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Enums for PdfSaveOptionsData
 */
// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace PdfSaveOptionsData {
    export enum HeaderFooterBookmarksExportModeEnum {
        None = 'None' as any,
        First = 'First' as any,
        All = 'All' as any,
    }
}
// tslint:enable:quotemark
/**
 * container class for ps save options.
 */
export class PsSaveOptionsData extends FixedPageSaveOptionsData {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "useBookFoldPrintingSettings",
            baseName: "UseBookFoldPrintingSettings",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PsSaveOptionsData.attributeTypeMap);
    }

    /**
     * Gets or sets determines whether the document should be saved using a booklet printing layout.
     */
    public useBookFoldPrintingSettings: boolean;
    
    public constructor(init?: Partial<PsSaveOptionsData>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Run link element.
 */
export class RunLink extends NodeLink {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets run's text.
     */
    public text: string;
    
    public constructor(init?: Partial<RunLink>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Section link element.
 */
export class SectionLink extends NodeLink {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

/**
 * container class for svg save options.
 */
export class SvgSaveOptionsData extends FixedPageSaveOptionsData {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "exportEmbeddedImages",
            baseName: "ExportEmbeddedImages",
            type: "boolean",
        },        
        {
            name: "fitToViewPort",
            baseName: "FitToViewPort",
            type: "boolean",
        },        
        {
            name: "resourcesFolder",
            baseName: "ResourcesFolder",
            type: "string",
        },        
        {
            name: "resourcesFolderAlias",
            baseName: "ResourcesFolderAlias",
            type: "string",
        },        
        {
            name: "showPageBorder",
            baseName: "ShowPageBorder",
            type: "boolean",
        },        
        {
            name: "textOutputMode",
            baseName: "TextOutputMode",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SvgSaveOptionsData.attributeTypeMap);
    }

    /**
     * Gets or sets specified whether images should be embedded into SVG document as base64.
     */
    public exportEmbeddedImages: boolean;
    
    /**
     * Gets or sets specifies if the output SVG should fill the available viewport area (browser window or container). When set to true width and height of output SVG are set to 100%.
     */
    public fitToViewPort: boolean;
    
    /**
     * Gets or sets specifies the physical folder where resources (images) are saved when exporting.
     */
    public resourcesFolder: string;
    
    /**
     * Gets or sets specifies the name of the folder used to construct image URIs.
     */
    public resourcesFolderAlias: string;
    
    /**
     * Gets or sets show/hide page stepper.
     */
    public showPageBorder: boolean;
    
    /**
     * Gets or sets determines how text should be rendered.
     */
    public textOutputMode: string;
    
    public constructor(init?: Partial<SvgSaveOptionsData>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Table element.
 */
export class Table extends NodeLink {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets table properties.
     */
    public tableProperties: TableProperties;
    
    /**
     * Gets or sets collection of table's rows.
     */
    public tableRowList: Array<TableRow>;
    
    public constructor(init?: Partial<Table>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Table cell element.
 */
export class TableCell extends NodeLink {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets child nodes.
     */
    public childNodes: Array<NodeLink>;
    
    public constructor(init?: Partial<TableCell>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Table link element.
 */
export class TableLink extends NodeLink {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

/**
 * Table row element.
 */
export class TableRow extends NodeLink {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets provides access to the formatting properties of the row.
     */
    public rowFormat: TableRowFormat;
    
    /**
     * Gets or sets collection of table's rows.
     */
    public tableCellList: Array<TableCell>;
    
    public constructor(init?: Partial<TableRow>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * container class for xaml fixed save options.
 */
export class XamlFixedSaveOptionsData extends FixedPageSaveOptionsData {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "resourcesFolder",
            baseName: "ResourcesFolder",
            type: "string",
        },        
        {
            name: "resourcesFolderAlias",
            baseName: "ResourcesFolderAlias",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(XamlFixedSaveOptionsData.attributeTypeMap);
    }

    /**
     * Gets or sets specifies the physical folder where resources (images and fonts) are saved when exporting a document to fixed page Xaml format. Default is null.
     */
    public resourcesFolder: string;
    
    /**
     * Gets or sets specifies the name of the folder used to construct image URIs written into an fixed page Xaml document. Default is null.
     */
    public resourcesFolderAlias: string;
    
    public constructor(init?: Partial<XamlFixedSaveOptionsData>) {
        super(init);
        Object.assign(this, init);
    }        
}

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
     * Gets or sets allows to specify outline options.
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

/**
 * Container class for bmp save options.
 */
export class BmpSaveOptionsData extends ImageSaveOptionsData {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(BmpSaveOptionsData.attributeTypeMap);
    }

    public constructor(init?: Partial<BmpSaveOptionsData>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Represents Drawing Object DTO.
 */
export class DrawingObject extends DrawingObjectLink {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets height of the drawing object in points.
     */
    public height: number;
    
    /**
     * Gets or sets link to image data. Can be null if shape does not have an image.
     */
    public imageDataLink: WordsApiLink;
    
    /**
     * Gets or sets distance in points from the origin to the left side of the image.             
     */
    public left: number;
    
    /**
     * Gets or sets link to ole object. Can be null if shape does not have ole data.
     */
    public oleDataLink: WordsApiLink;
    
    /**
     * Gets or sets specifies where the distance to the image is measured from.             
     */
    public relativeHorizontalPosition: DrawingObject.RelativeHorizontalPositionEnum;
    
    /**
     * Gets or sets specifies where the distance to the image measured from.
     */
    public relativeVerticalPosition: DrawingObject.RelativeVerticalPositionEnum;
    
    /**
     * Gets or sets a list of links that originate from this .
     */
    public renderLinks: Array<WordsApiLink>;
    
    /**
     * Gets or sets distance in points from the origin to the top side of the image.
     */
    public top: number;
    
    /**
     * Gets or sets width of the drawing objects in points.
     */
    public width: number;
    
    /**
     * Gets or sets specifies how to wrap text around the image.
     */
    public wrapType: DrawingObject.WrapTypeEnum;
    
    public constructor(init?: Partial<DrawingObject>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Enums for DrawingObject
 */
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
/**
 * Container class for emf save options.
 */
export class EmfSaveOptionsData extends ImageSaveOptionsData {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(EmfSaveOptionsData.attributeTypeMap);
    }

    public constructor(init?: Partial<EmfSaveOptionsData>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Field.
 */
export class Field extends FieldLink {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets LCID of the field.
     */
    public localeId: string;
    
    /**
     * Gets or sets field result.
     */
    public result: string;
    
    public constructor(init?: Partial<Field>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Footnote.
 */
export class Footnote extends FootnoteLink {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets content of footnote.
     */
    public content: StoryChildNodes;
    
    /**
     * Gets or sets returns a value that specifies whether this is a footnote or endnote.
     */
    public footnoteType: Footnote.FootnoteTypeEnum;
    
    /**
     * Gets or sets link to comment range start node.
     */
    public position: DocumentPosition;
    
    /**
     * Gets or sets /sets custom reference mark to be used for this footnote. Default value is , meaning auto-numbered footnotes are used.
     */
    public referenceMark: string;
    
    /**
     * Gets or sets this is a convenience property that allows to easily get or set text of the footnote.
     */
    public text: string;
    
    public constructor(init?: Partial<Footnote>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Enums for Footnote
 */
// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace Footnote {
    export enum FootnoteTypeEnum {
        Footnote = 'Footnote' as any,
        Endnote = 'Endnote' as any,
    }
}
// tslint:enable:quotemark
/**
 * FormField checkbox element.
 */
export class FormFieldCheckbox extends FormField {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "checkBoxSize",
            baseName: "CheckBoxSize",
            type: "number",
        },        
        {
            name: "checked",
            baseName: "Checked",
            type: "boolean",
        },        
        {
            name: "isCheckBoxExactSize",
            baseName: "IsCheckBoxExactSize",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(FormFieldCheckbox.attributeTypeMap);
    }

    /**
     * Gets or sets the size of the checkbox in points. Has effect only when  is true.
     */
    public checkBoxSize: number;
    
    /**
     * Gets or sets the checked status of the check box form field.
     */
    public checked: boolean;
    
    /**
     * Gets or sets the boolean value that indicates whether the size of the textbox is automatic or specified explicitly.
     */
    public isCheckBoxExactSize: boolean;
    
    public constructor(init?: Partial<FormFieldCheckbox>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * FormField dropdownlist element.
 */
export class FormFieldDropDown extends FormField {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "dropDownItems",
            baseName: "DropDownItems",
            type: "Array<string>",
        },        
        {
            name: "dropDownSelectedIndex",
            baseName: "DropDownSelectedIndex",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(FormFieldDropDown.attributeTypeMap);
    }

    /**
     * Gets or sets provides access to the items of a dropdown form field.
     */
    public dropDownItems: Array<string>;
    
    /**
     * Gets or sets the index specifying the currently selected item in a dropdown form field.
     */
    public dropDownSelectedIndex: number;
    
    public constructor(init?: Partial<FormFieldDropDown>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * FormField text input element.
 */
export class FormFieldTextInput extends FormField {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "maxLength",
            baseName: "MaxLength",
            type: "number",
        },        
        {
            name: "textInputDefault",
            baseName: "TextInputDefault",
            type: "string",
        },        
        {
            name: "textInputFormat",
            baseName: "TextInputFormat",
            type: "string",
        },        
        {
            name: "textInputType",
            baseName: "TextInputType",
            type: "FormFieldTextInput.TextInputTypeEnum",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(FormFieldTextInput.attributeTypeMap);
    }

    /**
     * Gets or sets maximum length for the text field. Zero when the length is not limited.
     */
    public maxLength: number;
    
    /**
     * Gets or sets the default string or a calculation expression of a text form field.
     */
    public textInputDefault: string;
    
    /**
     * Gets or sets returns or sets the text formatting for a text form field.
     */
    public textInputFormat: string;
    
    /**
     * Gets or sets the type of a text form field.
     */
    public textInputType: FormFieldTextInput.TextInputTypeEnum;
    
    public constructor(init?: Partial<FormFieldTextInput>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Enums for FormFieldTextInput
 */
// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace FormFieldTextInput {
    export enum TextInputTypeEnum {
        Regular = 'Regular' as any,
        Number = 'Number' as any,
        Date = 'Date' as any,
        CurrentDate = 'CurrentDate' as any,
        CurrentTime = 'CurrentTime' as any,
        Calculated = 'Calculated' as any,
    }
}
// tslint:enable:quotemark
/**
 * Container class for gif save options.
 */
export class GifSaveOptionsData extends ImageSaveOptionsData {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(GifSaveOptionsData.attributeTypeMap);
    }

    public constructor(init?: Partial<GifSaveOptionsData>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * container class for jpeg save options.
 */
export class JpegSaveOptionsData extends ImageSaveOptionsData {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(JpegSaveOptionsData.attributeTypeMap);
    }

    public constructor(init?: Partial<JpegSaveOptionsData>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * OfficeMath object.
 */
export class OfficeMathObject extends OfficeMathLink {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

    /**
     * Gets or sets content of footnote.
     */
    public content: StoryChildNodes;
    
    /**
     * Gets or sets /sets Office Math display format type which represents whether an equation is displayed inline with the text or displayed on its own line.
     */
    public displayType: OfficeMathObject.DisplayTypeEnum;
    
    /**
     * Gets or sets /sets Office Math justification.
     */
    public justification: OfficeMathObject.JustificationEnum;
    
    /**
     * Gets or sets type Aspose.Words.Math.OfficeMath.MathObjectType of this Office Math object.
     */
    public mathObjectType: OfficeMathObject.MathObjectTypeEnum;
    
    public constructor(init?: Partial<OfficeMathObject>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Enums for OfficeMathObject
 */
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
/**
 * container class for png save options.
 */
export class PngSaveOptionsData extends ImageSaveOptionsData {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PngSaveOptionsData.attributeTypeMap);
    }

    public constructor(init?: Partial<PngSaveOptionsData>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Run element.
 */
export class Run extends RunLink {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
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

/**
 * Container class for tiff save options.
 */
export class TiffSaveOptionsData extends ImageSaveOptionsData {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<AttributeInfo> = [
        {
            name: "thresholdForFloydSteinbergDithering",
            baseName: "ThresholdForFloydSteinbergDithering",
            type: "number",
        },        
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

    /**
     * Gets or sets the threshold that determines the value of the binarization error in the Floyd-Steinberg method. when ImageBinarizationMethod is ImageBinarizationMethod.FloydSteinbergDithering. Default value is 128.
     */
    public thresholdForFloydSteinbergDithering: number;
    
    /**
     * Gets or sets specifies method used while converting images to 1 bpp format.
     */
    public tiffBinarizationMethod: string;
    
    /**
     * Gets or sets type of compression.
     */
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
    "ReplaceRange.TextTypeEnum": ReplaceRange.TextTypeEnum,
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
    "HtmlSaveOptionsData.HtmlVersionEnum": HtmlSaveOptionsData.HtmlVersionEnum,
    "HtmlSaveOptionsData.MetafileFormatEnum": HtmlSaveOptionsData.MetafileFormatEnum,
    "HtmlSaveOptionsData.OfficeMathOutputModeEnum": HtmlSaveOptionsData.OfficeMathOutputModeEnum,
    "OdtSaveOptionsData.MeasureUnitEnum": OdtSaveOptionsData.MeasureUnitEnum,
    "PageSetup.BorderAppliesToEnum": PageSetup.BorderAppliesToEnum,
    "PageSetup.BorderDistanceFromEnum": PageSetup.BorderDistanceFromEnum,
    "PageSetup.LineNumberRestartModeEnum": PageSetup.LineNumberRestartModeEnum,
    "PageSetup.OrientationEnum": PageSetup.OrientationEnum,
    "PageSetup.PageNumberStyleEnum": PageSetup.PageNumberStyleEnum,
    "PageSetup.PaperSizeEnum": PageSetup.PaperSizeEnum,
    "PageSetup.SectionStartEnum": PageSetup.SectionStartEnum,
    "PageSetup.VerticalAlignmentEnum": PageSetup.VerticalAlignmentEnum,
    "ParagraphFormat.AlignmentEnum": ParagraphFormat.AlignmentEnum,
    "ParagraphFormat.DropCapPositionEnum": ParagraphFormat.DropCapPositionEnum,
    "ParagraphFormat.LineSpacingRuleEnum": ParagraphFormat.LineSpacingRuleEnum,
    "ParagraphFormat.OutlineLevelEnum": ParagraphFormat.OutlineLevelEnum,
    "ParagraphFormat.StyleIdentifierEnum": ParagraphFormat.StyleIdentifierEnum,
    "TableCellFormat.HorizontalMergeEnum": TableCellFormat.HorizontalMergeEnum,
    "TableCellFormat.OrientationEnum": TableCellFormat.OrientationEnum,
    "TableCellFormat.VerticalAlignmentEnum": TableCellFormat.VerticalAlignmentEnum,
    "TableCellFormat.VerticalMergeEnum": TableCellFormat.VerticalMergeEnum,
    "TableProperties.AlignmentEnum": TableProperties.AlignmentEnum,
    "TableProperties.StyleIdentifierEnum": TableProperties.StyleIdentifierEnum,
    "TableProperties.StyleOptionsEnum": TableProperties.StyleOptionsEnum,
    "TableProperties.TextWrappingEnum": TableProperties.TextWrappingEnum,
    "TableRowFormat.HeightRuleEnum": TableRowFormat.HeightRuleEnum,
    "TextSaveOptionsData.ExportHeadersFootersModeEnum": TextSaveOptionsData.ExportHeadersFootersModeEnum,
    "PdfSaveOptionsData.HeaderFooterBookmarksExportModeEnum": PdfSaveOptionsData.HeaderFooterBookmarksExportModeEnum,
    "DrawingObject.RelativeHorizontalPositionEnum": DrawingObject.RelativeHorizontalPositionEnum,
    "DrawingObject.RelativeVerticalPositionEnum": DrawingObject.RelativeVerticalPositionEnum,
    "DrawingObject.WrapTypeEnum": DrawingObject.WrapTypeEnum,
    "Footnote.FootnoteTypeEnum": Footnote.FootnoteTypeEnum,
    "FormFieldTextInput.TextInputTypeEnum": FormFieldTextInput.TextInputTypeEnum,
    "OfficeMathObject.DisplayTypeEnum": OfficeMathObject.DisplayTypeEnum,
    "OfficeMathObject.JustificationEnum": OfficeMathObject.JustificationEnum,
    "OfficeMathObject.MathObjectTypeEnum": OfficeMathObject.MathObjectTypeEnum,
};

const typeMap = {
            ApiError,
            BookmarkData,
            BookmarksOutlineLevelData,
            ClassificationResult,
            CompareData,
            Document,
            DocumentEntry,
            DocumentEntryList,
            DocumentPosition,
            DocumentStatData,
            DownsampleOptionsData,
            ErrorDetails,
            FilesList,
            FilesUploadResult,
            FontInfo,
            FootnotesStatData,
            GraphicsQualityOptionsData,
            Link,
            LinkElement,
            LoadWebDocumentData,
            MetafileRenderingOptionsData,
            ModificationOperationResult,
            OutlineOptionsData,
            PageNumber,
            PageStatData,
            ParagraphInsert,
            PdfDigitalSignatureDetailsData,
            PdfEncryptionDetailsData,
            PreferredWidth,
            ProtectionData,
            ProtectionRequest,
            RangeDocument,
            ReplaceRange,
            ReplaceTextParameters,
            SaveOptionsData,
            SaveResult,
            SearchResult,
            SplitDocumentResult,
            StorageApiError,
            StorageFile,
            StoryChildNodes,
            StringFormatData,
            TableCellInsert,
            TableInsert,
            TableRowInsert,
            WatermarkText,
            WordsResponse,
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
            DocSaveOptionsData,
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
            HtmlSaveOptionsData,
            Hyperlink,
            HyperlinkResponse,
            Hyperlinks,
            HyperlinksResponse,
            NodeLink,
            OdtSaveOptionsData,
            OfficeMathObjectResponse,
            OfficeMathObjectsCollection,
            OfficeMathObjectsResponse,
            OoxmlSaveOptionsData,
            PageSetup,
            ParagraphFormat,
            ParagraphFormatResponse,
            ParagraphLinkCollection,
            ParagraphLinkCollectionResponse,
            ParagraphResponse,
            ProtectionDataResponse,
            RangeTextResponse,
            ReplaceTextResponse,
            RevisionsModificationResponse,
            RtfSaveOptionsData,
            RunResponse,
            Runs,
            RunsResponse,
            SaveResponse,
            SearchResponse,
            SearchResultsCollection,
            Section,
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
            TextSaveOptionsData,
            WordMLSaveOptionsData,
            WordsApiErrorResponse,
            WordsApiLink,
            XamlFlowSaveOptionsData,
            Comment,
            DrawingObjectLink,
            EpubSaveOptionsData,
            FieldLink,
            FootnoteLink,
            FormField,
            HeaderFooter,
            HtmlFixedSaveOptionsData,
            ImageSaveOptionsData,
            MhtmlSaveOptionsData,
            OfficeMathLink,
            Paragraph,
            ParagraphLink,
            PclSaveOptionsData,
            PdfSaveOptionsData,
            PsSaveOptionsData,
            RunLink,
            SectionLink,
            SvgSaveOptionsData,
            Table,
            TableCell,
            TableLink,
            TableRow,
            XamlFixedSaveOptionsData,
            XpsSaveOptionsData,
            BmpSaveOptionsData,
            DrawingObject,
            EmfSaveOptionsData,
            Field,
            Footnote,
            FormFieldCheckbox,
            FormFieldDropDown,
            FormFieldTextInput,
            GifSaveOptionsData,
            JpegSaveOptionsData,
            OfficeMathObject,
            PngSaveOptionsData,
            Run,
            TiffSaveOptionsData,
};

export {enumsMap, typeMap};

/**
 * Request model for AcceptAllRevisions operation.
 */
export class AcceptAllRevisionsRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * Result path of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
     */
    public destFileName: string;
    
    public constructor(init?: Partial<AcceptAllRevisionsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for AppendDocument operation.
 */
export class AppendDocumentRequest {
    /**
     * Original document name.
     */
    public name: string;

    /**
     * with a list of documents to append.            
     */
    public documentList: DocumentEntryList;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * Result path of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
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
    
    public constructor(init?: Partial<AppendDocumentRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for Classify operation.
 */
export class ClassifyRequest {
    /**
     * Text to classify.
     */
    public text: string;

    /**
     * Number of the best classes to return.
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
     * The document name.
     */
    public documentName: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * Count of the best classes to return.
     */
    public bestClassesCount: string;

    /**
     * Taxonomy to use for classification return.
     */
    public taxonomy: string;
    
    public constructor(init?: Partial<ClassifyDocumentRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CompareDocument operation.
 */
export class CompareDocumentRequest {
    /**
     * Original document name.
     */
    public name: string;

    /**
     * with a document to compare.            
     */
    public compareData: CompareData;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * Result path of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
     */
    public destFileName: string;
    
    public constructor(init?: Partial<CompareDocumentRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for ConvertDocument operation.
 */
export class ConvertDocumentRequest {
    /**
     * Converting document
     */
    public document: Readable;

    /**
     * Format to convert.
     */
    public format: string;

    /**
     * Original document storage.
     */
    public storage: string;

    /**
     * Path for saving operation result to the local storage.
     */
    public outPath: string;

    /**
     * This file name will be used when resulting document has dynamic field for document file name {filename}. If it is not set, \"sourceFilename\" will be used instead. 
     */
    public fileNameFieldValue: string;

    /**
     * Folder in filestorage with custom fonts.
     */
    public fontsLocation: string;
    
    public constructor(init?: Partial<ConvertDocumentRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CopyFile operation.
 */
export class CopyFileRequest {
    /**
     * Destination file path
     */
    public destPath: string;

    /**
     * Source file's path e.g. '/Folder 1/file.ext' or '/Bucket/Folder 1/file.ext'
     */
    public srcPath: string;

    /**
     * Source storage name
     */
    public srcStorageName: string;

    /**
     * Destination storage name
     */
    public destStorageName: string;

    /**
     * File version ID to copy
     */
    public versionId: string;
    
    public constructor(init?: Partial<CopyFileRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CopyFolder operation.
 */
export class CopyFolderRequest {
    /**
     * Destination folder path e.g. '/dst'
     */
    public destPath: string;

    /**
     * Source folder path e.g. /Folder1
     */
    public srcPath: string;

    /**
     * Source storage name
     */
    public srcStorageName: string;

    /**
     * Destination storage name
     */
    public destStorageName: string;
    
    public constructor(init?: Partial<CopyFolderRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CreateDocument operation.
 */
export class CreateDocumentRequest {
    /**
     * Original document storage.
     */
    public storage: string;

    /**
     * The document name.
     */
    public fileName: string;

    /**
     * The document folder.
     */
    public folder: string;
    
    public constructor(init?: Partial<CreateDocumentRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CreateFolder operation.
 */
export class CreateFolderRequest {
    /**
     * Target folder's path e.g. Folder1/Folder2/. The folders will be created recursively
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;
    
    public constructor(init?: Partial<CreateFolderRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CreateOrUpdateDocumentProperty operation.
 */
export class CreateOrUpdateDocumentPropertyRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * The property name.
     */
    public propertyName: string;

    /**
     * The property with new value.
     */
    public property: DocumentProperty;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * Result path of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
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
     * The document name.
     */
    public name: string;

    /**
     * Path to the node with border(node should be paragraph, cell or row).
     */
    public nodePath: string;

    /**
     * Border type.
     */
    public borderType: 'Bottom' | 'Left' | 'Right' | 'Top' | 'Horizontal' | 'Vertical' | 'DiagonalDown' | 'DiagonalUp' | 'None';

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * Result path of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
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
     * The document name.
     */
    public name: string;

    /**
     * Path to the node with borders(node should be paragraph, cell or row).
     */
    public nodePath: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * Result path of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
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
     * The document name.
     */
    public name: string;

    /**
     * The comment index.
     */
    public commentIndex: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * Result path of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
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
 * Request model for DeleteDocumentProperty operation.
 */
export class DeleteDocumentPropertyRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * The property name.
     */
    public propertyName: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * Result path of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
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
 * Request model for DeleteDrawingObject operation.
 */
export class DeleteDrawingObjectRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Path to the node, which contains collection of drawing objects.
     */
    public nodePath: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * Result path of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
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
    
    public constructor(init?: Partial<DeleteDrawingObjectRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for DeleteDrawingObjectWithoutNodePath operation.
 */
export class DeleteDrawingObjectWithoutNodePathRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * Result path of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
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
    
    public constructor(init?: Partial<DeleteDrawingObjectWithoutNodePathRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for DeleteField operation.
 */
export class DeleteFieldRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Path to the node, which contains collection of fields.
     */
    public nodePath: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * Result path of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
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
    
    public constructor(init?: Partial<DeleteFieldRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for DeleteFieldWithoutNodePath operation.
 */
export class DeleteFieldWithoutNodePathRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * Result path of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
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
    
    public constructor(init?: Partial<DeleteFieldWithoutNodePathRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for DeleteFields operation.
 */
export class DeleteFieldsRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Path to the node, which contains collection of fields.
     */
    public nodePath: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * Result path of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
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
    
    public constructor(init?: Partial<DeleteFieldsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for DeleteFieldsWithoutNodePath operation.
 */
export class DeleteFieldsWithoutNodePathRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * Result path of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
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
    
    public constructor(init?: Partial<DeleteFieldsWithoutNodePathRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for DeleteFile operation.
 */
export class DeleteFileRequest {
    /**
     * Path of the file including file name and extension e.g. /Folder1/file.ext
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;

    /**
     * File version ID to delete
     */
    public versionId: string;
    
    public constructor(init?: Partial<DeleteFileRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for DeleteFolder operation.
 */
export class DeleteFolderRequest {
    /**
     * Folder path e.g. /Folder1s
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;

    /**
     * Enable to delete folders, subfolders and files
     */
    public recursive: boolean;
    
    public constructor(init?: Partial<DeleteFolderRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for DeleteFootnote operation.
 */
export class DeleteFootnoteRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Path to the node, which contains collection of footnotes.
     */
    public nodePath: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * Result path of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
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
    
    public constructor(init?: Partial<DeleteFootnoteRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for DeleteFootnoteWithoutNodePath operation.
 */
export class DeleteFootnoteWithoutNodePathRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * Result path of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
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
    
    public constructor(init?: Partial<DeleteFootnoteWithoutNodePathRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for DeleteFormField operation.
 */
export class DeleteFormFieldRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Path to the node that contains collection of formfields.
     */
    public nodePath: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * Result path of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
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
    
    public constructor(init?: Partial<DeleteFormFieldRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for DeleteFormFieldWithoutNodePath operation.
 */
export class DeleteFormFieldWithoutNodePathRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * Result path of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
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
    
    public constructor(init?: Partial<DeleteFormFieldWithoutNodePathRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for DeleteHeaderFooter operation.
 */
export class DeleteHeaderFooterRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Path to parent section.
     */
    public sectionPath: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * Result path of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
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
    
    public constructor(init?: Partial<DeleteHeaderFooterRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for DeleteHeadersFooters operation.
 */
export class DeleteHeadersFootersRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Path to parent section.
     */
    public sectionPath: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * Result path of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
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
     * List of types of headers and footers.
     */
    public headersFootersTypes: string;
    
    public constructor(init?: Partial<DeleteHeadersFootersRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for DeleteMacros operation.
 */
export class DeleteMacrosRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * Result path of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
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
    
    public constructor(init?: Partial<DeleteMacrosRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for DeleteOfficeMathObject operation.
 */
export class DeleteOfficeMathObjectRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Path to the node, which contains collection of OfficeMath objects.
     */
    public nodePath: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * Result path of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
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
    
    public constructor(init?: Partial<DeleteOfficeMathObjectRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for DeleteOfficeMathObjectWithoutNodePath operation.
 */
export class DeleteOfficeMathObjectWithoutNodePathRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * Result path of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
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
    
    public constructor(init?: Partial<DeleteOfficeMathObjectWithoutNodePathRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for DeleteParagraph operation.
 */
export class DeleteParagraphRequest {
    /**
     * The file name.
     */
    public name: string;

    /**
     * Path to the node which contains paragraphs.
     */
    public nodePath: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * Result path of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
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
    
    public constructor(init?: Partial<DeleteParagraphRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for DeleteParagraphWithoutNodePath operation.
 */
export class DeleteParagraphWithoutNodePathRequest {
    /**
     * The file name.
     */
    public name: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * Result path of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
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
    
    public constructor(init?: Partial<DeleteParagraphWithoutNodePathRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for DeleteRun operation.
 */
export class DeleteRunRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Path to parent paragraph.
     */
    public paragraphPath: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * Result path of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
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
 * Request model for DeleteSection operation.
 */
export class DeleteSectionRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Section index.
     */
    public sectionIndex: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * Result path of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
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
    
    public constructor(init?: Partial<DeleteSectionRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for DeleteTable operation.
 */
export class DeleteTableRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Path to the node, which contains tables.
     */
    public nodePath: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * Result path of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
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
    
    public constructor(init?: Partial<DeleteTableRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for DeleteTableCell operation.
 */
export class DeleteTableCellRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Path to table row.
     */
    public tableRowPath: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * Result path of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
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
     * The document name.
     */
    public name: string;

    /**
     * Path to table.
     */
    public tablePath: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * Result path of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
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
 * Request model for DeleteTableWithoutNodePath operation.
 */
export class DeleteTableWithoutNodePathRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * Result path of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
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
    
    public constructor(init?: Partial<DeleteTableWithoutNodePathRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for DeleteWatermark operation.
 */
export class DeleteWatermarkRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * Result path of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
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
    
    public constructor(init?: Partial<DeleteWatermarkRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for DownloadFile operation.
 */
export class DownloadFileRequest {
    /**
     * Path of the file including the file name and extension e.g. /folder1/file.ext
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;

    /**
     * File version ID to download
     */
    public versionId: string;
    
    public constructor(init?: Partial<DownloadFileRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for ExecuteMailMerge operation.
 */
export class ExecuteMailMergeRequest {
    /**
     * The document name.
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
     * Original document storage.
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
     * With regions flag.
     */
    public withRegions: boolean;

    /**
     * Mail merge data.
     */
    public mailMergeDataFile: string;

    /**
     * Clean up options.
     */
    public cleanup: string;

    /**
     * Gets or sets a value indicating whether paragraph with TableStart or             TableEnd field should be fully included into mail merge region or particular range between TableStart and TableEnd fields.             The default value is true.
     */
    public useWholeParagraphAsRegion: boolean;

    /**
     * Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved with autogenerated name.
     */
    public destFileName: string;
    
    public constructor(init?: Partial<ExecuteMailMergeRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for ExecuteMailMergeOnline operation.
 */
export class ExecuteMailMergeOnlineRequest {
    /**
     * File with template
     */
    public template: Readable;

    /**
     * File with mailmerge data
     */
    public data: Readable;

    /**
     * With regions flag.
     */
    public withRegions: boolean;

    /**
     * Clean up options.
     */
    public cleanup: string;

    /**
     * This file name will be used when resulting document has dynamic field for document file name {filename}. If it is not setted, \"template\" will be used instead. 
     */
    public documentFileName: string;
    
    public constructor(init?: Partial<ExecuteMailMergeOnlineRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetAvailableFonts operation.
 */
export class GetAvailableFontsRequest {
    /**
     * Folder in filestorage with custom fonts.
     */
    public fontsLocation: string;
    
    public constructor(init?: Partial<GetAvailableFontsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetBookmarkByName operation.
 */
export class GetBookmarkByNameRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * The bookmark name.
     */
    public bookmarkName: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
    
    public constructor(init?: Partial<GetBookmarkByNameRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetBookmarks operation.
 */
export class GetBookmarksRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
    
    public constructor(init?: Partial<GetBookmarksRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetBorder operation.
 */
export class GetBorderRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Path to the node with border(node should be paragraph, cell or row).
     */
    public nodePath: string;

    /**
     * Border type.
     */
    public borderType: 'Bottom' | 'Left' | 'Right' | 'Top' | 'Horizontal' | 'Vertical' | 'DiagonalDown' | 'DiagonalUp' | 'None';

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * The document name.
     */
    public name: string;

    /**
     * Path to the node with borders (node should be paragraph, cell or row).
     */
    public nodePath: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * The document name.
     */
    public name: string;

    /**
     * The comment index.
     */
    public commentIndex: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * The document name.
     */
    public name: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * The document name.
     */
    public documentName: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
 * Request model for GetDocumentDrawingObjectByIndex operation.
 */
export class GetDocumentDrawingObjectByIndexRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Path to the node, which contains collection of drawing objects.
     */
    public nodePath: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
    
    public constructor(init?: Partial<GetDocumentDrawingObjectByIndexRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetDocumentDrawingObjectByIndexWithoutNodePath operation.
 */
export class GetDocumentDrawingObjectByIndexWithoutNodePathRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
    
    public constructor(init?: Partial<GetDocumentDrawingObjectByIndexWithoutNodePathRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetDocumentDrawingObjectImageData operation.
 */
export class GetDocumentDrawingObjectImageDataRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Path to the node, which contains collection of drawing objects.
     */
    public nodePath: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
    
    public constructor(init?: Partial<GetDocumentDrawingObjectImageDataRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetDocumentDrawingObjectImageDataWithoutNodePath operation.
 */
export class GetDocumentDrawingObjectImageDataWithoutNodePathRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
    
    public constructor(init?: Partial<GetDocumentDrawingObjectImageDataWithoutNodePathRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetDocumentDrawingObjectOleData operation.
 */
export class GetDocumentDrawingObjectOleDataRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Path to the node, which contains collection of drawing objects.
     */
    public nodePath: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
    
    public constructor(init?: Partial<GetDocumentDrawingObjectOleDataRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetDocumentDrawingObjectOleDataWithoutNodePath operation.
 */
export class GetDocumentDrawingObjectOleDataWithoutNodePathRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
    
    public constructor(init?: Partial<GetDocumentDrawingObjectOleDataWithoutNodePathRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetDocumentDrawingObjects operation.
 */
export class GetDocumentDrawingObjectsRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Path to the node, which contains collection of drawing objects.
     */
    public nodePath: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
    
    public constructor(init?: Partial<GetDocumentDrawingObjectsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetDocumentDrawingObjectsWithoutNodePath operation.
 */
export class GetDocumentDrawingObjectsWithoutNodePathRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
    
    public constructor(init?: Partial<GetDocumentDrawingObjectsWithoutNodePathRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetDocumentFieldNames operation.
 */
export class GetDocumentFieldNamesRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * If true, result includes \"mustache\" field names.
     */
    public useNonMergeFields: boolean;
    
    public constructor(init?: Partial<GetDocumentFieldNamesRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetDocumentFieldNamesOnline operation.
 */
export class GetDocumentFieldNamesOnlineRequest {
    /**
     * File with template
     */
    public template: Readable;

    /**
     * Use non merge fields or not.
     */
    public useNonMergeFields: boolean;
    
    public constructor(init?: Partial<GetDocumentFieldNamesOnlineRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetDocumentHyperlinkByIndex operation.
 */
export class GetDocumentHyperlinkByIndexRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * The hyperlink index.
     */
    public hyperlinkIndex: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * The document name.
     */
    public name: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
 * Request model for GetDocumentProperties operation.
 */
export class GetDocumentPropertiesRequest {
    /**
     * The document's name.
     */
    public name: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * The document name.
     */
    public name: string;

    /**
     * The property name.
     */
    public propertyName: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * The document name.
     */
    public name: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * The document name.
     */
    public name: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * Support including/excluding comments from the WordCount. Default value is \"false\".
     */
    public includeComments: boolean;

    /**
     * Support including/excluding footnotes from the WordCount. Default value is \"false\".
     */
    public includeFootnotes: boolean;

    /**
     * Support including/excluding shape's text from the WordCount. Default value is \"false\".
     */
    public includeTextInShapes: boolean;
    
    public constructor(init?: Partial<GetDocumentStatisticsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetDocumentWithFormat operation.
 */
export class GetDocumentWithFormatRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * The destination format.
     */
    public format: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * Path to save the result.
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
     * The document name.
     */
    public name: string;

    /**
     * Path to the node, which contains collection of fields.
     */
    public nodePath: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
    
    public constructor(init?: Partial<GetFieldRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetFieldWithoutNodePath operation.
 */
export class GetFieldWithoutNodePathRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
    
    public constructor(init?: Partial<GetFieldWithoutNodePathRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetFields operation.
 */
export class GetFieldsRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Path to the node, which contains collection of fields.
     */
    public nodePath: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
    
    public constructor(init?: Partial<GetFieldsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetFieldsWithoutNodePath operation.
 */
export class GetFieldsWithoutNodePathRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
    
    public constructor(init?: Partial<GetFieldsWithoutNodePathRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetFilesList operation.
 */
export class GetFilesListRequest {
    /**
     * Folder path e.g. /Folder1
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;
    
    public constructor(init?: Partial<GetFilesListRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetFootnote operation.
 */
export class GetFootnoteRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Path to the node, which contains collection of footnotes.
     */
    public nodePath: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
    
    public constructor(init?: Partial<GetFootnoteRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetFootnoteWithoutNodePath operation.
 */
export class GetFootnoteWithoutNodePathRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
    
    public constructor(init?: Partial<GetFootnoteWithoutNodePathRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetFootnotes operation.
 */
export class GetFootnotesRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Path to the node, which contains collection of footnotes.
     */
    public nodePath: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
    
    public constructor(init?: Partial<GetFootnotesRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetFootnotesWithoutNodePath operation.
 */
export class GetFootnotesWithoutNodePathRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
    
    public constructor(init?: Partial<GetFootnotesWithoutNodePathRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetFormField operation.
 */
export class GetFormFieldRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Path to the node that contains collection of formfields.
     */
    public nodePath: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
    
    public constructor(init?: Partial<GetFormFieldRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetFormFieldWithoutNodePath operation.
 */
export class GetFormFieldWithoutNodePathRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
    
    public constructor(init?: Partial<GetFormFieldWithoutNodePathRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetFormFields operation.
 */
export class GetFormFieldsRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Path to the node containing collection of form fields.
     */
    public nodePath: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
    
    public constructor(init?: Partial<GetFormFieldsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetFormFieldsWithoutNodePath operation.
 */
export class GetFormFieldsWithoutNodePathRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
    
    public constructor(init?: Partial<GetFormFieldsWithoutNodePathRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetHeaderFooter operation.
 */
export class GetHeaderFooterRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Header/footer index.
     */
    public headerFooterIndex: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * List of types of headers and footers.
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
     * The document name.
     */
    public name: string;

    /**
     * Header/footer index.
     */
    public headerFooterIndex: number;

    /**
     * Section index.
     */
    public sectionIndex: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * List of types of headers and footers.
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
     * The document name.
     */
    public name: string;

    /**
     * Path to parent section.
     */
    public sectionPath: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * List of types of headers and footers.
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
     * The document name.
     */
    public name: string;

    /**
     * Path to the node, which contains collection of OfficeMath objects.
     */
    public nodePath: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
    
    public constructor(init?: Partial<GetOfficeMathObjectRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetOfficeMathObjectWithoutNodePath operation.
 */
export class GetOfficeMathObjectWithoutNodePathRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
    
    public constructor(init?: Partial<GetOfficeMathObjectWithoutNodePathRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetOfficeMathObjects operation.
 */
export class GetOfficeMathObjectsRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Path to the node, which contains collection of OfficeMath objects.
     */
    public nodePath: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
    
    public constructor(init?: Partial<GetOfficeMathObjectsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetOfficeMathObjectsWithoutNodePath operation.
 */
export class GetOfficeMathObjectsWithoutNodePathRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
    
    public constructor(init?: Partial<GetOfficeMathObjectsWithoutNodePathRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetParagraph operation.
 */
export class GetParagraphRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Path to the node which contains paragraphs.
     */
    public nodePath: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
    
    public constructor(init?: Partial<GetParagraphRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetParagraphFormat operation.
 */
export class GetParagraphFormatRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Path to the node which contains paragraphs.
     */
    public nodePath: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
    
    public constructor(init?: Partial<GetParagraphFormatRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetParagraphFormatWithoutNodePath operation.
 */
export class GetParagraphFormatWithoutNodePathRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
    
    public constructor(init?: Partial<GetParagraphFormatWithoutNodePathRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetParagraphWithoutNodePath operation.
 */
export class GetParagraphWithoutNodePathRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
    
    public constructor(init?: Partial<GetParagraphWithoutNodePathRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetParagraphs operation.
 */
export class GetParagraphsRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Path to the node which contains paragraphs.
     */
    public nodePath: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
    
    public constructor(init?: Partial<GetParagraphsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetParagraphsWithoutNodePath operation.
 */
export class GetParagraphsWithoutNodePathRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
    
    public constructor(init?: Partial<GetParagraphsWithoutNodePathRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetRangeText operation.
 */
export class GetRangeTextRequest {
    /**
     * The document.
     */
    public name: string;

    /**
     * The range start identifier. Identifier is the value of the \"nodeId\" field, which every document node has, extended with the prefix \"id\". It looks like \"id0.0.7\". Also values like \"image5\" and \"table3\" can be used as an identifier for images and tables, where the number is an index of the image/table.
     */
    public rangeStartIdentifier: string;

    /**
     * The range end identifier.
     */
    public rangeEndIdentifier: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
    
    public constructor(init?: Partial<GetRangeTextRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetRun operation.
 */
export class GetRunRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Path to parent paragraph.
     */
    public paragraphPath: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
    
    public constructor(init?: Partial<GetRunRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetRunFont operation.
 */
export class GetRunFontRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Path to parent paragraph.
     */
    public paragraphPath: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
    
    public constructor(init?: Partial<GetRunFontRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetRuns operation.
 */
export class GetRunsRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Path to parent paragraph.
     */
    public paragraphPath: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
    
    public constructor(init?: Partial<GetRunsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetSection operation.
 */
export class GetSectionRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Section index.
     */
    public sectionIndex: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * The document name.
     */
    public name: string;

    /**
     * Section index.
     */
    public sectionIndex: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * The document name.
     */
    public name: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * The document name.
     */
    public name: string;

    /**
     * Path to the node, which contains tables.
     */
    public nodePath: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
    
    public constructor(init?: Partial<GetTableRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetTableCell operation.
 */
export class GetTableCellRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Path to table row.
     */
    public tableRowPath: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * The document name.
     */
    public name: string;

    /**
     * Path to table row.
     */
    public tableRowPath: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * The document name.
     */
    public name: string;

    /**
     * Path to the node, which contains tables.
     */
    public nodePath: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
    
    public constructor(init?: Partial<GetTablePropertiesRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetTablePropertiesWithoutNodePath operation.
 */
export class GetTablePropertiesWithoutNodePathRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
    
    public constructor(init?: Partial<GetTablePropertiesWithoutNodePathRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetTableRow operation.
 */
export class GetTableRowRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Path to table.
     */
    public tablePath: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * The document name.
     */
    public name: string;

    /**
     * Path to table.
     */
    public tablePath: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
 * Request model for GetTableWithoutNodePath operation.
 */
export class GetTableWithoutNodePathRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
    
    public constructor(init?: Partial<GetTableWithoutNodePathRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetTables operation.
 */
export class GetTablesRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Path to the node, which contains tables.
     */
    public nodePath: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
    
    public constructor(init?: Partial<GetTablesRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetTablesWithoutNodePath operation.
 */
export class GetTablesWithoutNodePathRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
    
    public constructor(init?: Partial<GetTablesWithoutNodePathRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for InsertComment operation.
 */
export class InsertCommentRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * The comment data.
     */
    public comment: Comment;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * Result path of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
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
    
    public constructor(init?: Partial<InsertCommentRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for InsertDrawingObject operation.
 */
export class InsertDrawingObjectRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Drawing object parameters
     */
    public drawingObject: string;

    /**
     * File with image
     */
    public imageFile: Readable;

    /**
     * Path to the node, which contains collection of drawing objects.
     */
    public nodePath: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * Result path of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
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
    
    public constructor(init?: Partial<InsertDrawingObjectRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for InsertDrawingObjectWithoutNodePath operation.
 */
export class InsertDrawingObjectWithoutNodePathRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Drawing object parameters
     */
    public drawingObject: string;

    /**
     * File with image
     */
    public imageFile: Readable;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * Result path of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
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
    
    public constructor(init?: Partial<InsertDrawingObjectWithoutNodePathRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for InsertField operation.
 */
export class InsertFieldRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Field data.
     */
    public field: Field;

    /**
     * Path to the node, which contains collection of fields.
     */
    public nodePath: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * Result path of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
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
     * Field will be inserted before node with id=\"nodeId\".
     */
    public insertBeforeNode: string;
    
    public constructor(init?: Partial<InsertFieldRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for InsertFieldWithoutNodePath operation.
 */
export class InsertFieldWithoutNodePathRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Field data.
     */
    public field: Field;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * Result path of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
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
     * Field will be inserted before node with id=\"nodeId\".
     */
    public insertBeforeNode: string;
    
    public constructor(init?: Partial<InsertFieldWithoutNodePathRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for InsertFootnote operation.
 */
export class InsertFootnoteRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Footnote data.
     */
    public footnoteDto: Footnote;

    /**
     * Path to the node, which contains collection of footnotes.
     */
    public nodePath: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * Result path of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
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
    
    public constructor(init?: Partial<InsertFootnoteRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for InsertFootnoteWithoutNodePath operation.
 */
export class InsertFootnoteWithoutNodePathRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Footnote data.
     */
    public footnoteDto: Footnote;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * Result path of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
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
    
    public constructor(init?: Partial<InsertFootnoteWithoutNodePathRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for InsertFormField operation.
 */
export class InsertFormFieldRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * From field data.
     */
    public formField: FormField;

    /**
     * Path to the node that contains collection of formfields.
     */
    public nodePath: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * Result path of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
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
     * Form field will be inserted before node with index.
     */
    public insertBeforeNode: string;
    
    public constructor(init?: Partial<InsertFormFieldRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for InsertFormFieldWithoutNodePath operation.
 */
export class InsertFormFieldWithoutNodePathRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * From field data.
     */
    public formField: FormField;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * Result path of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
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
     * Form field will be inserted before node with index.
     */
    public insertBeforeNode: string;
    
    public constructor(init?: Partial<InsertFormFieldWithoutNodePathRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for InsertHeaderFooter operation.
 */
export class InsertHeaderFooterRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Type of header/footer.
     */
    public headerFooterType: string;

    /**
     * Path to parent section.
     */
    public sectionPath: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * Result path of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
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
    
    public constructor(init?: Partial<InsertHeaderFooterRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for InsertPageNumbers operation.
 */
export class InsertPageNumbersRequest {
    /**
     * A document name.
     */
    public name: string;

    /**
     * with the page numbers settings.
     */
    public pageNumber: PageNumber;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * Result path of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
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
    
    public constructor(init?: Partial<InsertPageNumbersRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for InsertParagraph operation.
 */
export class InsertParagraphRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Paragraph data.
     */
    public paragraph: ParagraphInsert;

    /**
     * Path to the node which contains paragraphs.
     */
    public nodePath: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * Result path of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
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
     * Paragraph will be inserted before node with index.
     */
    public insertBeforeNode: string;
    
    public constructor(init?: Partial<InsertParagraphRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for InsertRun operation.
 */
export class InsertRunRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Path to parent paragraph.
     */
    public paragraphPath: string;

    /**
     * Run data.
     */
    public run: Run;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * Result path of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
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
     * Paragraph will be inserted before node with index.
     */
    public insertBeforeNode: string;
    
    public constructor(init?: Partial<InsertRunRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for InsertTable operation.
 */
export class InsertTableRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Path to the node, which contains tables.
     */
    public nodePath: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * Result path of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
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
     * Table parameters/.
     */
    public table: TableInsert;
    
    public constructor(init?: Partial<InsertTableRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for InsertTableCell operation.
 */
export class InsertTableCellRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Path to table row.
     */
    public tableRowPath: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * Result path of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
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
     * Table cell parameters/.
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
     * The document name.
     */
    public name: string;

    /**
     * Path to table.
     */
    public tablePath: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * Result path of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
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
     * Table row parameters/.
     */
    public row: TableRowInsert;
    
    public constructor(init?: Partial<InsertTableRowRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for InsertTableWithoutNodePath operation.
 */
export class InsertTableWithoutNodePathRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * Result path of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
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
     * Table parameters/.
     */
    public table: TableInsert;
    
    public constructor(init?: Partial<InsertTableWithoutNodePathRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for InsertWatermarkImage operation.
 */
export class InsertWatermarkImageRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * File with image
     */
    public imageFile: Readable;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * Result path of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
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
     * The watermark rotation angle.
     */
    public rotationAngle: number;

    /**
     * The image file server full name. If the name is empty the image is expected in request content.
     */
    public image: string;
    
    public constructor(init?: Partial<InsertWatermarkImageRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for InsertWatermarkText operation.
 */
export class InsertWatermarkTextRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * with the watermark data.            
     */
    public watermarkText: WatermarkText;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * Result path of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
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
    
    public constructor(init?: Partial<InsertWatermarkTextRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for LoadWebDocument operation.
 */
export class LoadWebDocumentRequest {
    /**
     * Parameters of loading.
     */
    public data: LoadWebDocumentData;

    /**
     * Original document storage.
     */
    public storage: string;
    
    public constructor(init?: Partial<LoadWebDocumentRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for MoveFile operation.
 */
export class MoveFileRequest {
    /**
     * Destination file path e.g. '/dest.ext'
     */
    public destPath: string;

    /**
     * Source file's path e.g. '/Folder 1/file.ext' or '/Bucket/Folder 1/file.ext'
     */
    public srcPath: string;

    /**
     * Source storage name
     */
    public srcStorageName: string;

    /**
     * Destination storage name
     */
    public destStorageName: string;

    /**
     * File version ID to move
     */
    public versionId: string;
    
    public constructor(init?: Partial<MoveFileRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for MoveFolder operation.
 */
export class MoveFolderRequest {
    /**
     * Destination folder path to move to e.g '/dst'
     */
    public destPath: string;

    /**
     * Source folder path e.g. /Folder1
     */
    public srcPath: string;

    /**
     * Source storage name
     */
    public srcStorageName: string;

    /**
     * Destination storage name
     */
    public destStorageName: string;
    
    public constructor(init?: Partial<MoveFolderRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for ProtectDocument operation.
 */
export class ProtectDocumentRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * with protection settings.            
     */
    public protectionRequest: ProtectionRequest;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * Result path of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
     */
    public destFileName: string;
    
    public constructor(init?: Partial<ProtectDocumentRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for RejectAllRevisions operation.
 */
export class RejectAllRevisionsRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * Result path of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
     */
    public destFileName: string;
    
    public constructor(init?: Partial<RejectAllRevisionsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for RemoveRange operation.
 */
export class RemoveRangeRequest {
    /**
     * The document.
     */
    public name: string;

    /**
     * The range start identifier. Identifier is the value of the \"nodeId\" field, which every document node has, extended with the prefix \"id\". It looks like \"id0.0.7\". Also values like \"image5\" and \"table3\" can be used as an identifier for images and tables, where the number is an index of the image/table.
     */
    public rangeStartIdentifier: string;

    /**
     * The range end identifier.
     */
    public rangeEndIdentifier: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * Result path of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
     */
    public destFileName: string;
    
    public constructor(init?: Partial<RemoveRangeRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for RenderDrawingObject operation.
 */
export class RenderDrawingObjectRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * The destination format.
     */
    public format: string;

    /**
     * Path to the node, which contains drawing objects.
     */
    public nodePath: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * Folder in filestorage with custom fonts.
     */
    public fontsLocation: string;
    
    public constructor(init?: Partial<RenderDrawingObjectRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for RenderDrawingObjectWithoutNodePath operation.
 */
export class RenderDrawingObjectWithoutNodePathRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * The destination format.
     */
    public format: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * Folder in filestorage with custom fonts.
     */
    public fontsLocation: string;
    
    public constructor(init?: Partial<RenderDrawingObjectWithoutNodePathRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for RenderMathObject operation.
 */
export class RenderMathObjectRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * The destination format.
     */
    public format: string;

    /**
     * Path to the node, which contains office math objects.
     */
    public nodePath: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * Folder in filestorage with custom fonts.
     */
    public fontsLocation: string;
    
    public constructor(init?: Partial<RenderMathObjectRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for RenderMathObjectWithoutNodePath operation.
 */
export class RenderMathObjectWithoutNodePathRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * The destination format.
     */
    public format: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * Folder in filestorage with custom fonts.
     */
    public fontsLocation: string;
    
    public constructor(init?: Partial<RenderMathObjectWithoutNodePathRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for RenderPage operation.
 */
export class RenderPageRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Comment index.
     */
    public pageIndex: number;

    /**
     * The destination format.
     */
    public format: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * The document name.
     */
    public name: string;

    /**
     * The destination format.
     */
    public format: string;

    /**
     * Path to the node, which contains paragraphs.
     */
    public nodePath: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * Folder in filestorage with custom fonts.
     */
    public fontsLocation: string;
    
    public constructor(init?: Partial<RenderParagraphRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for RenderParagraphWithoutNodePath operation.
 */
export class RenderParagraphWithoutNodePathRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * The destination format.
     */
    public format: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * Folder in filestorage with custom fonts.
     */
    public fontsLocation: string;
    
    public constructor(init?: Partial<RenderParagraphWithoutNodePathRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for RenderTable operation.
 */
export class RenderTableRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * The destination format.
     */
    public format: string;

    /**
     * Path to the node, which contains tables.
     */
    public nodePath: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * Folder in filestorage with custom fonts.
     */
    public fontsLocation: string;
    
    public constructor(init?: Partial<RenderTableRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for RenderTableWithoutNodePath operation.
 */
export class RenderTableWithoutNodePathRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * The destination format.
     */
    public format: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * Folder in filestorage with custom fonts.
     */
    public fontsLocation: string;
    
    public constructor(init?: Partial<RenderTableWithoutNodePathRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for ReplaceText operation.
 */
export class ReplaceTextRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * with the replace operation settings.            
     */
    public replaceText: ReplaceTextParameters;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * Result path of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
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
    
    public constructor(init?: Partial<ReplaceTextRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for ReplaceWithText operation.
 */
export class ReplaceWithTextRequest {
    /**
     * The document.
     */
    public name: string;

    /**
     * The range start identifier. Identifier is the value of the \"nodeId\" field, which every document node has, extended with the prefix \"id\". It looks like \"id0.0.7\". Also values like \"image5\" and \"table3\" can be used as an identifier for images and tables, where the number is an index of the image/table.
     */
    public rangeStartIdentifier: string;

    /**
     * Model with text for replacement.
     */
    public rangeText: ReplaceRange;

    /**
     * The range end identifier.
     */
    public rangeEndIdentifier: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * Result path of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
     */
    public destFileName: string;
    
    public constructor(init?: Partial<ReplaceWithTextRequest>) {        
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
 * Request model for SaveAs operation.
 */
export class SaveAsRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Save options.
     */
    public saveOptionsData: SaveOptionsData;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * Folder in filestorage with custom fonts.
     */
    public fontsLocation: string;
    
    public constructor(init?: Partial<SaveAsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for SaveAsRange operation.
 */
export class SaveAsRangeRequest {
    /**
     * The document.
     */
    public name: string;

    /**
     * The range start identifier. Identifier is the value of the \"nodeId\" field, which every document node has, extended with the prefix \"id\". It looks like \"id0.0.7\". Also values like \"image5\" and \"table3\" can be used as an identifier for images and tables, where the number is an index of the image/table.
     */
    public rangeStartIdentifier: string;

    /**
     * Parameters of a new document.
     */
    public documentParameters: RangeDocument;

    /**
     * The range end identifier.
     */
    public rangeEndIdentifier: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
    
    public constructor(init?: Partial<SaveAsRangeRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for SaveAsTiff operation.
 */
export class SaveAsTiffRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Tiff save options.
     */
    public saveOptions: TiffSaveOptionsData;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * Use antialiasing flag.
     */
    public useAntiAliasing: boolean;

    /**
     * Use high quality flag.
     */
    public useHighQualityRendering: boolean;

    /**
     * Brightness for the generated images.
     */
    public imageBrightness: number;

    /**
     * Color mode for the generated images.
     */
    public imageColorMode: string;

    /**
     * The contrast for the generated images.
     */
    public imageContrast: number;

    /**
     * The images numeral format.
     */
    public numeralFormat: string;

    /**
     * Number of pages to render.
     */
    public pageCount: number;

    /**
     * Page index to start rendering.
     */
    public pageIndex: number;

    /**
     * Background image color.
     */
    public paperColor: string;

    /**
     * The pixel format of generated images.
     */
    public pixelFormat: string;

    /**
     * The resolution of generated images.
     */
    public resolution: number;

    /**
     * Zoom factor for generated images.
     */
    public scale: number;

    /**
     * The compression tipe.
     */
    public tiffCompression: string;

    /**
     * Optional, default is Fallback.
     */
    public dmlRenderingMode: string;

    /**
     * Optional, default is Simplified.
     */
    public dmlEffectsRenderingMode: string;

    /**
     * Optional, Tiff binarization method, possible values are: FloydSteinbergDithering, Threshold.
     */
    public tiffBinarizationMethod: string;

    /**
     * Optional. A value determining zip output or not.
     */
    public zipOutput: boolean;

    /**
     * Folder in filestorage with custom fonts.
     */
    public fontsLocation: string;
    
    public constructor(init?: Partial<SaveAsTiffRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for Search operation.
 */
export class SearchRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * The regular expression used to find matches.
     */
    public pattern: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
    
    public constructor(init?: Partial<SearchRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for SplitDocument operation.
 */
export class SplitDocumentRequest {
    /**
     * Original document name.
     */
    public name: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * Result path of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
     */
    public destFileName: string;

    /**
     * Format to split.
     */
    public format: string;

    /**
     * Start page.
     */
    public from: number;

    /**
     * End page.
     */
    public to: number;

    /**
     * ZipOutput or not.
     */
    public zipOutput: boolean;

    /**
     * Folder in filestorage with custom fonts.
     */
    public fontsLocation: string;
    
    public constructor(init?: Partial<SplitDocumentRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for UnprotectDocument operation.
 */
export class UnprotectDocumentRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * with protection settings.            
     */
    public protectionRequest: ProtectionRequest;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * Result path of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
     */
    public destFileName: string;
    
    public constructor(init?: Partial<UnprotectDocumentRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for UpdateBookmark operation.
 */
export class UpdateBookmarkRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * with new bookmark data.            
     */
    public bookmarkData: BookmarkData;

    /**
     * The bookmark name.
     */
    public bookmarkName: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * Result path of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
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
    
    public constructor(init?: Partial<UpdateBookmarkRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for UpdateBorder operation.
 */
export class UpdateBorderRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Border properties.
     */
    public borderProperties: Border;

    /**
     * Path to the node with border(node should be paragraph, cell or row).
     */
    public nodePath: string;

    /**
     * Border type.
     */
    public borderType: 'Bottom' | 'Left' | 'Right' | 'Top' | 'Horizontal' | 'Vertical' | 'DiagonalDown' | 'DiagonalUp' | 'None';

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * Result path of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
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
 * Request model for UpdateComment operation.
 */
export class UpdateCommentRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * The comment index.
     */
    public commentIndex: number;

    /**
     * The comment data.
     */
    public comment: Comment;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * Result path of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
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
    
    public constructor(init?: Partial<UpdateCommentRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for UpdateDrawingObject operation.
 */
export class UpdateDrawingObjectRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Drawing object parameters
     */
    public drawingObject: string;

    /**
     * File with image
     */
    public imageFile: Readable;

    /**
     * Path to the node, which contains collection of drawing objects.
     */
    public nodePath: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * Result path of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
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
    
    public constructor(init?: Partial<UpdateDrawingObjectRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for UpdateDrawingObjectWithoutNodePath operation.
 */
export class UpdateDrawingObjectWithoutNodePathRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Drawing object parameters
     */
    public drawingObject: string;

    /**
     * File with image
     */
    public imageFile: Readable;

    /**
     * Object index.
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * Result path of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
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
    
    public constructor(init?: Partial<UpdateDrawingObjectWithoutNodePathRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for UpdateField operation.
 */
export class UpdateFieldRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Field data.
     */
    public field: Field;

    /**
     * Path to the node, which contains collection of fields.
     */
    public nodePath: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * Result path of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
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
    
    public constructor(init?: Partial<UpdateFieldRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for UpdateFields operation.
 */
export class UpdateFieldsRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * Result path of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
     */
    public destFileName: string;
    
    public constructor(init?: Partial<UpdateFieldsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for UpdateFootnote operation.
 */
export class UpdateFootnoteRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Footnote data.
     */
    public footnoteDto: Footnote;

    /**
     * Path to the node, which contains collection of footnotes.
     */
    public nodePath: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * Result path of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
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
    
    public constructor(init?: Partial<UpdateFootnoteRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for UpdateFootnoteWithoutNodePath operation.
 */
export class UpdateFootnoteWithoutNodePathRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Footnote data.
     */
    public footnoteDto: Footnote;

    /**
     * Object index.
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * Result path of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
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
    
    public constructor(init?: Partial<UpdateFootnoteWithoutNodePathRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for UpdateFormField operation.
 */
export class UpdateFormFieldRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * From field data.
     */
    public formField: FormField;

    /**
     * Path to the node that contains collection of formfields.
     */
    public nodePath: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * Result path of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
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
    
    public constructor(init?: Partial<UpdateFormFieldRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for UpdateFormFieldWithoutNodePath operation.
 */
export class UpdateFormFieldWithoutNodePathRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * From field data.
     */
    public formField: FormField;

    /**
     * Object index.
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * Result path of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
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
    
    public constructor(init?: Partial<UpdateFormFieldWithoutNodePathRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for UpdateParagraphFormat operation.
 */
export class UpdateParagraphFormatRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Paragraph format object.
     */
    public dto: ParagraphFormat;

    /**
     * Path to the node which contains paragraphs.
     */
    public nodePath: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * Result path of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
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
    
    public constructor(init?: Partial<UpdateParagraphFormatRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for UpdateRun operation.
 */
export class UpdateRunRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Run data.
     */
    public run: Run;

    /**
     * Path to parent paragraph.
     */
    public paragraphPath: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * Result path of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
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
    
    public constructor(init?: Partial<UpdateRunRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for UpdateRunFont operation.
 */
export class UpdateRunFontRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Font dto object.
     */
    public fontDto: Font;

    /**
     * Path to parent paragraph.
     */
    public paragraphPath: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * Result path of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
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
    
    public constructor(init?: Partial<UpdateRunFontRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for UpdateSectionPageSetup operation.
 */
export class UpdateSectionPageSetupRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Section index.
     */
    public sectionIndex: number;

    /**
     * Page setup properties dto.
     */
    public pageSetup: PageSetup;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * Result path of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
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
     * The document name.
     */
    public name: string;

    /**
     * Path to table row.
     */
    public tableRowPath: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * Result path of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
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
     * The properties.
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
     * The document name.
     */
    public name: string;

    /**
     * Path to the node, which contains tables.
     */
    public nodePath: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * Result path of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
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
     * The properties.
     */
    public properties: TableProperties;
    
    public constructor(init?: Partial<UpdateTablePropertiesRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for UpdateTablePropertiesWithoutNodePath operation.
 */
export class UpdateTablePropertiesWithoutNodePathRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * Result path of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
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
     * The properties.
     */
    public properties: TableProperties;
    
    public constructor(init?: Partial<UpdateTablePropertiesWithoutNodePathRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for UpdateTableRowFormat operation.
 */
export class UpdateTableRowFormatRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Path to table.
     */
    public tablePath: string;

    /**
     * Object index.
     */
    public index: number;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * Original document storage.
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
     * Result path of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document.
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
     * Table row format.
     */
    public format: TableRowFormat;
    
    public constructor(init?: Partial<UpdateTableRowFormatRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for UploadFile operation.
 */
export class UploadFileRequest {
    /**
     * File to upload
     */
    public fileContent: Readable;

    /**
     * Path where to upload including filename and extension e.g. /file.ext or /Folder 1/file.ext              If the content is multipart and path does not contains the file name it tries to get them from filename parameter              from Content-Disposition header.
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;
    
    public constructor(init?: Partial<UploadFileRequest>) {        
        Object.assign(this, init);
    } 
}
